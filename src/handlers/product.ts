import prisma from "../db";

// GetALlProducts
export const getAllProducts =async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })

    res.status(200).json({
        data: user.products
    })

}


