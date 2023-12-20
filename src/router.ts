import { Router } from 'express';

const router = Router();

// Product
router.get('/product', (req, res)=> {
    res.json({message: 'Hello'})
})
router.post('/product', ()=> {})
router.get('/product/:id', ()=> {})
router.put('/product/:id', ()=> {})
router.delete('/product/:id', ()=> {})

// Update
router.get('/update', ()=> {})
router.post('/update', ()=> {})
router.get('/update/:id', ()=> {})
router.put('/update/:id', ()=> {})
router.delete('/update/:id', ()=> {})

// Update points
router.get('/updatepoint', ()=> {})
router.post('/updatepoint', ()=> {})
router.get('/updatepoint/:id', ()=> {})
router.put('/updatepoint/:id', ()=> {})
router.delete('/updatepoint/:id', ()=> {})


export default router;