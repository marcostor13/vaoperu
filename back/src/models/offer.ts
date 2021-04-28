import { model, Schema, Document } from 'mongoose'

export interface IOffer extends Document {
    name: string,
    profileProviderId: string,
    description: string,
    images:Array<string>,
    price: number,
    isActive: boolean,
    promotionalPrice: number,
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
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
    isActive:{
        type:Boolean,
    },
    promotionalPrice:{
        type:Number,
    },   
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IOffer>('Offer', userSchema)

