import { model, Schema, Document } from 'mongoose'


export interface ISection extends Document {
    name: string
    primaryItemId: string
    createAt: Date
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    primaryItemId: {
        type: String,
        default: ''
    }, 
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ISection>('Section', userSchema)

