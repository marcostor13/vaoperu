export class COffer {
    constructor(){
        this.name = ''
        this.profileProviderId = ''
        this.description = ''
        this.images = []
        this.price = null
        this.isActive = false
        this.promotionalPrice = null
    }
    _id:string
    name:string
    profileProviderId:string
    description:string
    images:Array<string>
    price:number
    isActive:boolean
    promotionalPrice:number
}

export class COfferInvalid{
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
}
