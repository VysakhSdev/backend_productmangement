const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema({
    category_name:{ type: [mongoose.Types.ObjectId], ref: 'Category' },
    sub_category: { type: String, required: true },
},
{
    versionKey: false
});

module.exports = mongoose.model("SubCategory", Schema);
