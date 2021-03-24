import { model, Schema, Document } from 'mongoose'


export interface IBrand extends Document {
    name: string,
    description: string,
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,        
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IBrand>('Brands', userSchema)

