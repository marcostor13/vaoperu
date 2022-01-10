export interface IPayloadCategorySubcategoryProfile{
    categorySubcategoryId: string
    type: string
}

export interface ICategorySubcategoryProfile{
    _id?: string
    name: string
    categorySubcategoryId: string
    type: string
    profileProviderId: string
}

export class CCategorySubcategoryProfileInvalid{
    constructor() {
        this._id = false
        this.name = false
        this.categorySubcategoryId = false
        this.type = false
        this.profileProviderId = false
    }
    _id: boolean
    name: boolean
    categorySubcategoryId: boolean
    type: boolean
    profileProviderId: boolean
}