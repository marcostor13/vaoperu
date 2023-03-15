export class CProduct {
    constructor(){
        this.name = ''
        this.profileProviderId = ''
        this.description = ''
        this.images = []
        this.price = null
        this.isFeatured = false
        this.promotionalPrice = null
        this.categoryId = ''
        this.categoryName = ''
    }
    _id?:string
    name:string
    profileProviderId:string
    description:string
    images:Array<string>
    price:number
    isFeatured:boolean
    promotionalPrice?:number
    categoryId?: string
    categoryName?: string
}

export class CProductInvalid{
    constructor() {
        this.name = false
        this.images = false
        this.price = false
        this.description = false
    }
    name: boolean
    images: boolean
    price: boolean
    description: boolean
    type?: number

}

export interface ICategoryProduct{
  name: string
  profileProviderId: string
  _id?: string
  type?: number
}
