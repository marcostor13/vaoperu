import { model, Schema, Document } from 'mongoose'


export interface ICategory extends Document {
    name: string,
    image:string,
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
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


export default model<ICategory>('Category', userSchema)

