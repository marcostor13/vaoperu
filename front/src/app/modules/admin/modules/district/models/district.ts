export class CDistrict{
    constructor(){
        this.name = ''
    }
    _id: string
    name: string
}

export class CDistrictInvalid {
    constructor() {
        this._id = false
        this.name = false
    }
    _id: boolean
    name: boolean
}