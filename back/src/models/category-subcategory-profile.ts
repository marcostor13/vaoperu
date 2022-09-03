import { model, Schema, Document } from 'mongoose'


export interface ICategorySubcategoryProfile extends Document {
    name: string,
    categorySubcategoryId: string,
    type: string,
    profileProviderId:string
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    categorySubcategoryId: {
        type: String,        
        required: true
    },
    type: {
        type: String,
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

userSchema.index({name: "text"}, { default_language: "spanish" });


export default model<ICategorySubcategoryProfile>('CategorySubcategoryProfile', userSchema)

