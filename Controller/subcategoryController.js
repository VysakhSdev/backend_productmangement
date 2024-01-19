const Subcategory = require("../Models/Subcategory")
const mongoose =require ("mongoose")

//---create sub category---- 

module.exports.createSub = async(req)=>{
    const Sub = await Subcategory(req.body).save()
    if(Sub){
        return{message:"SubCategory Added Successfully",code:200}
    }
    return{message:" SubCategory Added failed",code:400}

}
//---List sub category---- 

module.exports.listSub = async (req) => {
    try {
        const data = await Subcategory.find().populate('category_name');

        if (data.length > 0) {
            return {
                statusCode: 200,
                message: "SubCategory listed successfully",
                data
            };
        } else {
            return {
                statusCode: 400,
                message: "No SubCategory found"
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


