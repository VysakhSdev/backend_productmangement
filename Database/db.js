const mongoose =require("mongoose")


module.exports.connect =async()=>{
    try{
        mongoose.set('strictQuery',false)
        mongoose.connect("mongodb://localhost:27017/PRODUCT_MANGEMENT") 
        console.log('Mongo Connected')

    }catch(error){
        console.log(error)
        process.exit()
    }
}