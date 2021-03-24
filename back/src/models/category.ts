import { model, Schema, Document } from 'mongoose'


export interface ICategory extends Document {
    name: string,
    parentid: string,     
    createAt: Date 
}

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },    
    parentid: {
        type: String,        
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})


export default model<ICategory>('Categories', userSchema)

