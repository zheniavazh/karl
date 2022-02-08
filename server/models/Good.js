const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Good", schema);
