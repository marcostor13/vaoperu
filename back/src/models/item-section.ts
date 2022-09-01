import { model, Schema, Document } from 'mongoose'


export interface IItemSection extends Document {
    name: string,
    image:string,
    sectionId: string,
    createAt: Date,
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    sectionId: {
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


export default model<IItemSection>('ItemSection', userSchema)

