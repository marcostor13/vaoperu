import { model, Schema, Document } from 'mongoose'


export interface IUrl extends Document {
    url: string,
    profileProviderId:string,
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
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IUrl>('Url', userSchema)

