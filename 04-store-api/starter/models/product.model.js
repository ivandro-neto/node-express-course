const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: [true, 'Must provide a product name']
        },
        price:
        {
            type: Number,
            required: [true, 'Must provide a price for the product']
        },
        featured:
        {
            type: Boolean,
            default: false
        },
        rating:
        {
            type: Number,
            default: 4.5
        },
        company: 
        {
            type: String,
            enum:
            {
                values: ['ikea', 'liddy', 'caressa', 'marcos'],
                message: '{VALUE} is not supported'
            }  
        },
        createdAt:
        {
            type: Date,
            default: Date.now()
        },
    })

module.exports = mongoose.model("Products", productSchema)