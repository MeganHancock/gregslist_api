import { Schema } from "mongoose";

export const JobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    requiresDegree: {
        type: Boolean
    },
    isRemote: {
        type: Boolean
    },
    description: {
        type: String,
        minLength: 5,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
}
)