const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema({
    title: { type: String, required: true },
    variants: [
        {
            ram: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    sub_category: { type: [mongoose.Types.ObjectId], ref: 'SubCategory' },
    description: { type: String, required: true },
},
{
    versionKey: false
});

module.exports = mongoose.model("Product", Schema);
