import { Schema, model } from 'mongoose'

const noticiaSchema = new Schema({
    titulo: String,
    descripcion: String,
    imgUrl: String,
},{
    timestamps: true,
    versionKey: false
})

export default model('Noticia', noticiaSchema)