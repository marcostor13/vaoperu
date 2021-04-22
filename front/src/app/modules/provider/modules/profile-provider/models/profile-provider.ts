export class CProfileProvider{
    constructor(){
        this.userid = '' 
        this.legalName = '' 
        this.comercialName = '' 
        this.whatsapp = '' 
        this.phone = '' 
        this.addressText = '' 
        this.addressMaps = '' 
        this.ruc = ''  
        this.description = '' 
        this.image = '' 
        this.video = '' 
        this.facebook = ''  
        this.twitter = '' 
        this.instagram = '' 
        this.tiktok = ''  
        this.email = '' 
        this.districtId = '' 
        this.distrinctName = '' 
        this.lat = null  
        this.lng = null
        this.siteWeb = ''
        this.delivery = false
        this.onMarket = false
        this.enabledProducts = false
        this.enabledProductsFeatured = false
        this.enabledOffers = false
        this.createAt = null
    }   
    _id: string 
    userid: string
    legalName: string
    comercialName: string
    whatsapp: string
    phone: string
    addressText: string
    addressMaps: string
    ruc: string
    description: string
    image: string
    video: string
    facebook: string
    twitter: string
    instagram: string
    tiktok: string
    email: string
    districtId: string
    distrinctName: string
    lat: number
    lng: number
    siteWeb: string
    delivery: boolean
    onMarket: boolean
    enabledProducts: boolean
    enabledProductsFeatured: boolean
    enabledOffers: boolean
    createAt: Date
}