export class CSubcategory{
    constructor(){
        this.name = ''
        this.image = ''
        this.categoryId = ''
    }
    _id: string
    name: string
    image: string
    categoryId: string
}

export class CSubcategoryInvalid {
    constructor() {
        this._id = false
        this.name = false
        this.image = false
        this.categoryId = false
    }
    _id: boolean
    name: boolean
    image: boolean
    categoryId: boolean
}