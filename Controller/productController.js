const Product = require("../Models/Product");
const mongoose = require("mongoose");
//---create product----
module.exports.createProduct = async (req) => {
  const product = await Product(req.body).save();
  if (product) {
    return { message: "Product Added Successfully", code: 200 };
  }
  return { message: " Product Added failed", code: 400 };
};
//---list product----

module.exports.listProduct = async (req) => {
  try {
    const data = await Product.find().populate('sub_category');

    if (data.length > 0) {
      return {
        statusCode: 200,
        message: "Products listed successfully",
        data,
      };
    } else {
      return {
        statusCode: 400,
        message: "No products found",
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      message: "Internal server error",
      error: error.message,
    };
  }
};



module.exports.getDetails = async (req) => {
  try {
    if (!req.params.id) {
      return { message: "Product id not found", code: 400 };
    }

    const data = await Product.findById(req.params.id);

    if (data) {
      return {
        code: 200,
        message: "Product found successfully",
        data,
      };
    }

    return { message: 'Product does not exist', code: 404 };
  } catch (error) {
    return {
  code: 500,
      message: "Internal server error",
      error: error.message,
    };
  }
};


//---Delete product----

module.exports.deleteProduct = async (req) => {
  try {
 

    if (!req.params.id) {

      return { message: "Invalid Product ID", code: 400 };
    }
    const id = req.params.id;

    const data = await Product.findByIdAndDelete(id);
    console.log(data, "dataaaaaa");

    if (data) {
      return { message: "Deleted Successfully", code: 200 };
    } else {
      return { message: "Product not found", code: 404 };
    }
  } catch (error) {
    console.error(error);
    return { message: "Failed to delete", code: 500 };
  }
};
//---update product----

module.exports.updateProduct = async (req) => {
  try {
    if(!req.params.id){
      return { message: "product id not found ", code: 400 };
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (product) {
      return { message: "Successfully updated", code: 200 };
    }
    return { message: "Error updated", code: 400 };
  } catch (error) {
    console.log(error)
    return { message: "internal server error", code: 500 };

  }
};
