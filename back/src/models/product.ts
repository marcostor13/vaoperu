import { model, Schema, Document } from 'mongoose'
import { IAttribute } from './attribute';

export interface IPrice extends Document {
    ammount: string,
    currency: string,
}
export interface IProduct extends Document {
    name: string,
    description: string,
    brandId: string,
    brand: string,
    categoryId: string,
    category: string,
    attibutes: IAttribute[]
    price: IPrice[]
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    brandId: {
        type: String,
    },
    brand: {
        type: String,
    },
    categoryId: {
        type: String,
    },
    category: {
        type: String,
    },
    attritutes: {
        type: Object,
    },
    price: {
        type: Array
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IProduct>('Products', userSchema)

