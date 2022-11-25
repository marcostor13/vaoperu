export class CUrl {
    constructor() {
        this.url = ''
        this.profileProviderId = ''
        this.isIndividual = false
    }
    _id: string
    url: string
    profileProviderId: string
    isIndividual?:  boolean
}

export class CUrlInvalid {
    constructor() {
        this._id = false
        this.url = false
        this.profileProviderId = false
        this.isIndividual = false
    }
    _id: boolean
    url: boolean
    profileProviderId: boolean
    isIndividual?:  boolean
}
