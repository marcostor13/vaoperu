export interface ICartService{
  _id?: string
  profileProviderId: string
  userId: string
  items: IItemCartService[]
  state?: string
  createAt?: Date
  orderDataService?: ICartServiceForm
}

export interface IItemCartService{
  productData: IItemProductService
  productId: string
}

export interface IItemProductService{
  name: string
}


export interface ICartServiceForm{
name: string
phone: string
date: string
details: string
}
