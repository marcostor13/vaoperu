import { model, Schema, Document } from 'mongoose'


export interface ICategoryProduct extends Document {
    name: string,
    profileProviderId: string,
    createAt: Date,
    type: number
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profileProviderId:{
        type:String,
        required: true
    },
    type: {
        type: Number,
        required: false,
        default: 0
    }, 
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ICategoryProduct>('CategoryProduct', userSchema)

