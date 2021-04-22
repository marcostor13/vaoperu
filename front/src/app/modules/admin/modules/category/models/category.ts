export class CCategory{
    constructor(){
        this.name = ''
        this.image = ''
    }
    _id: string
    name: string
    image: string
}

export class CCategoryInvalid {
    constructor() {
        this._id = false
        this.name = false
        this.image = false
    }
    _id: boolean
    name: boolean
    image: boolean
}