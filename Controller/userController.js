const User = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const signToken = (id, role) => {
  console.log(process.env.SECRET_KEY, "SECRET_KEY");
  console.log(process.env.JWT_EXPIRES_IN, "JWT_EXPIRES_IN"); // Corrected log statement
  return jwt.sign({ id, role }, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// register function
exports.signup = async (req, res) => {
  try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
          return { message: 'Email already exists', code: 400 };
      }
      const user = await User(req.body).save();
      return { message: 'User Registered Successfully', code: 200 };
  } catch (error) {
      console.error(error);
      return { message: 'Internal Server Error', code: 500 };
  }
};

// Login function

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return { message: 'Please Provide username and password', code: 400 };
    }
    const user = await User.findOne({ email, password });

    if (!user ) {
      return { message: 'Incorrect username or password', code: 401 };
    }
    const token = signToken(user._id, user.role);
    const result = { data: { token }, message: 'Success' };

    return result;
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });  }
};




//List Users

module.exports.listUser = async (req) => {
    try {
        const data = await User.find();

        if (data.length > 0) {
            return {
                statusCode: 200,
                message: "User listed successfully",
                data
            };
        } else {
            return {
                statusCode: 400,
                message: "No User found"
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
