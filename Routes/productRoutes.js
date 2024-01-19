const { createProduct, listProduct, deleteProduct, updateProduct, getDetails } = require("../Controller/productController")
const sendJson = require("../shared/sendJson")
const express =require("express")
const router =express.Router()



router.post('/addproduct',async(req,res)=>{
const result =await createProduct(req)
sendJson(res,result)
})

router.get('/listproduct',async(req,res)=>{
    const result = await listProduct (req)
    sendJson(res,result)
})
router.get('/getdetails/:id?', async (req, res) => {
    const result = await getDetails(req)
    sendJson(res, result)
  })

router.delete('/delete/:id?',async(req,res)=>{
    const result = await deleteProduct(req)
    sendJson(res,result)
})

router.put('/edit/:id?', async (req, res) => {
    const result = await updateProduct(req)
    sendJson(res, result)
})

module.exports =router