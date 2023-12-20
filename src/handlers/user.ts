import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req, res) => {
    const { username, password, email } = req.body
    const user = await prisma.user.create({
      data: {
        email,
        username: username,
        password: await hashPassword(password)
      }
    })
  
    const token = createJWT(user)
    res.json({ token })
  }

export const signin = async (req, res ) => {
    const user = await prisma.user.findUnique({
        where: {
           username: req.body.username, 
        }
    })

    const isVaild = await comparePasswords(req.body.password, user.password)

    if (!isVaild) {
        res.status(401).json({
            message: 'nope'
        })
        return;
    }

    const token = createJWT(user)
    res.json({ token })
}