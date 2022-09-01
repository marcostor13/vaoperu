import { model, Schema, Document } from 'mongoose'


export interface ISubitemSection extends Document {
    name: string,
    image:string,
    itemId: string,
    createAt: Date,
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    itemId: {
        type: String,        
        required: true
    },
    image: {
        type: String,        
        required: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ISubitemSection>('SubitemSection', userSchema)

