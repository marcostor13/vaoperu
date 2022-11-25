import { model, Schema, Document } from 'mongoose'


export interface IUrl extends Document {
    url: string,
    profileProviderId:string,
    isIndividual: boolean
    createAt: Date
}

const userSchema = new Schema({
    url: {
        type: String,
        unique: true,
        required: true
    }, 
    profileProviderId: {
        type: String,        
        required: true
    },
    isIndividual: {
        type: Boolean,        
        default: false
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IUrl>('Url', userSchema)

