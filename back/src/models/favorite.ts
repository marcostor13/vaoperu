import { model, Schema, Document } from 'mongoose'


export interface IFavorite extends Document {
    clientId: string,
    profileProviderId:string
}

const userSchema = new Schema({
    profileProviderId: {
        type: String,
        unique: true,
        required: true
    }, 
    clientId: {
        type: String,        
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IFavorite>('Favorite', userSchema)

