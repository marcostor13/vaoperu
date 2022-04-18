import { model, Schema, Document } from 'mongoose'

export interface IOrder extends Document {   
    profileProviderId: string
    userId: string
    items: IItemCart[]
    state: string
    orderData: IOrderData
}

export interface IItemCart {
    productData: IItemProduct
    productId: string
    quantity: number
}

export interface IItemProduct {
    name: string
    price: number
    promotionalPrice: number
}

export interface IOrderData{
    name: string
    phone: string
    address?: string
    address2?: string
    date: string
    typePaymment: string
}

const userSchema = new Schema({
    profileProviderId: {
        type: String,        
        required: true
    },
    userId:{
        type:String,
        required: true
    },
    items:{
        type: Array,
        required: true
    },
    state: {
        type: String,
        default: 'pendiente'
    },
    orderData: {
        type: Object
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IOrder>('Order', userSchema)

