import { Schema } from "mongoose";

const House = new Schema({
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
        default: '//placehold.it/300x300'
    },
    description: {
        type: String,
        minLength: 3
    }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    })