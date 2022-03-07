export interface ICart{
    _id?: string
    profileProviderId: string 
    userId: string 
    items: IItemCart[]
    state?: string
    createAt?: Date
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