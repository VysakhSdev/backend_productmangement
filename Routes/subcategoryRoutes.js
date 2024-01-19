const { createSub, listSub, } = require("../Controller/subcategoryController")
const sendJson = require("../shared/sendJson")
const express =require("express")
const router =express.Router()



router.post('/addSubcategory',async(req,res)=>{
const result =await createSub(req)
sendJson(res,result)
})

router.get('/list',async(req,res)=>{
    const result = await listSub (req)
    sendJson(res,result)
})


module.exports =router