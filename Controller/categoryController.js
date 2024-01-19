const mongoose =require ("mongoose")
const Category = require("../Models/Category")

//---create category---- 
module.exports.creatCategory = async(req)=>{
    const productCategory = await Category(req.body).save()
    if(productCategory){
        return{message:"Category Added Successfully",code:200}
    }
    return{message:" Category Added failed",code:400}

}
//---List category---- 

module.exports.listCategory = async (req) => {
    try {
        const data = await Category.find();

        if (data.length > 0) {
            return {
                statusCode: 200,
                message: "Category listed successfully",
                data
            };
        } else {
            return {
                statusCode: 400,
                message: "No Category found"
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            message: "Internal server error",
            error: error.message
        };
    }
};
