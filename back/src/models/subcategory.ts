import { model, Schema, Document } from 'mongoose'


export interface ISubcategory extends Document {
    name: string,
    categoryId: string,
    image: string
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ISubcategory>('Subcategory', userSchema)

