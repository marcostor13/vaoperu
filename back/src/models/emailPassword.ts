import { model, Schema, Document } from 'mongoose'


export interface IEmailPassword extends Document {
    code: string
    email: string
    createAt: Date
}

const userSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<IEmailPassword>('EmailPasswords', userSchema)

