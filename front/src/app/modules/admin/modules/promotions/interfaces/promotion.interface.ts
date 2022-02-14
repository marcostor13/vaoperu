export class CPromotion{
    _id?: string = ''
    name: string = ''
    profileProviderId: string = ''
    description: string = ''
    images: string[] = []
    price: number = null
}

export class CPromotionInvalid {
    name: boolean = false
    profileProviderId: boolean = false
    description: boolean = false
    images: boolean = false
    price: boolean = false
}