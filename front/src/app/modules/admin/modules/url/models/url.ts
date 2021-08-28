export class CUrl {
    constructor() {
        this.url = ''
        this.profileProviderId = ''
    }
    _id: string
    url: string
    profileProviderId: string
}

export class CUrlInvalid {
    constructor() {
        this._id = false
        this.url = false
        this.profileProviderId = false
    }
    _id: boolean
    url: boolean
    profileProviderId: boolean
}