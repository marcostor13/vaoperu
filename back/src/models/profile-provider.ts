import { model, Schema, Document } from 'mongoose'


export interface IProfileProvider extends Document {
    name: string,
    userid: string,
    legalName: string
    comercialName: string
    whatsapp: string
    phone: string
    addressText: string
    addressMaps: string
    ruc: string, 
    description: string,
    image: string,
    video: string,
    facebook: string, 
    twitter: string,
    instagram: string,
    tiktok: string, 
    email:string, 
    districtId: string,
    distrinctName: string,
    lat: string, 
    lng: string,
    createAt: Date
}

const userSchema = new Schema({

    userid:{
        type: String,
        unique: true,
        required: true
    },
    legalName: {
        type: String,
    },
    comercialName: {
        type: String,
    },
    whatsapp: {
        type: String,
    },
    phone: {
        type: String,
    },
    addressText: {
        type: String,
    },
    addressMaps: {
        type: String,
    },
    ruc: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    tiktok: {
        type: String,
    },
    email: {
        type: String,
    },
    districtId: {
        type: String,
    },
    distrinctName: {
        type: String,
    },
    lat: {
        type: String,
    },
    lng: {
        type: String,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IProfileProvider>('ProfileProviders', userSchema)

