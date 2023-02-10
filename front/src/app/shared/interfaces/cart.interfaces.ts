export interface ICart{
    _id?: string
    profileProviderId: string
    userId: string
    items: IItemCart[]
    state?: string
    createAt?: Date
    orderData?: ICartForm
}

export interface IItemCart{
    productData: IItemProduct
    productId: string
    quantity: number
}

export interface IItemProduct{
    name: string
    price: number
    promotionalPrice: number
}

export interface ICartForm{
    name: string
    phone: string
    address?: string
    address2?: string
    reference?: string
    date: string
    typePaymment: string
    cash: number
    details: string
}
