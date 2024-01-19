const { creatCategory, listCategory } = require("../Controller/categoryController")
const sendJson = require("../shared/sendJson")
const express =require("express")
const router =express.Router()



router.post('/addcategory',async(req,res)=>{
const result =await creatCategory(req)
sendJson(res,result)
})

router.get('/list',async(req,res)=>{
    const result = await listCategory (req)
    sendJson(res,result)
})


module.exports =router