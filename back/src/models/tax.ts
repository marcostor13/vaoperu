import { model, Schema, Document } from 'mongoose'


export interface ITax extends Document {
    name: string
    percentage: number
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },  
    percentage: {
        type: Number,       
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ITax>('Taxes', userSchema)

