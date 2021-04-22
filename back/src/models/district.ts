import { model, Schema, Document } from 'mongoose'


export interface IDistrict extends Document {
    name: string,
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IDistrict>('District', userSchema)

