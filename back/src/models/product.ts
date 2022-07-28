import { model, Schema, Document } from 'mongoose'


export interface IProduct extends Document {
    name: string,
    profileProviderId: string,
    description: string,
    images:Array<string>,
    price: number,
    idFeatured: boolean,
    promotionalPrice: number,
    categoryId: string,
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
    description:{
        type:String,
    },
    images:{
        type:Array,
    },
    price:{
        type:Number,
    },
    idFeatured:{
        type:Boolean,
    },
    categoryId:{
        type:String,
    },
    promotionalPrice:{
        type:Number,
    },   
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IProduct>('Product', userSchema)

