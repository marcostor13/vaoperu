import { model, Schema, Document } from 'mongoose'


export interface ICategoryProduct extends Document {
    name: string,
    profileProviderId: string,
    createAt: Date
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
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ICategoryProduct>('CategoryProduct', userSchema)

