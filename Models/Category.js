const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema({
    category_name:{type: String, required: true},
},
{
    versionKey: false
});

module.exports = mongoose.model("Category", Schema);
