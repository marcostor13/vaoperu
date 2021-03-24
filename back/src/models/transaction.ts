import { model, Schema, Document } from 'mongoose'
import { IProduct } from './product';

export interface IPrice extends Document {
    ammount: string,
    currency: string,
}


export interface IShippingData extends Document {
    address: string,
    addressReference: string,
    district: string,
    region: string, 
    city: string, 
    country: string,
    lat: string,
    lng: string,
    sendDate: Date,    
}


export interface ITransaction extends Document {
    type: string,
    products: IProduct[],
    totalPrice: IPrice[],
    subtotalPrice: IPrice[],
    tax: IPrice[],
    userid: string,
    shippingData: IShippingData, 
    createAt: Date
}

const userSchema = new Schema({
    type: {
        type: String,
    },
    products: {
        type: Array,
    },
    totalPrice: {
        type: Array,
    },
    subtotalPrice: {
        type: Array,
    },
    tax: {
        type: Array,
    },
    userid: {
        type: String,
    },
    shippingData: {
        type: Object,
    },    
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ITransaction>('Transactions', userSchema)

