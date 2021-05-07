import { Schema, model } from 'mongoose'

const cursoSchema = new Schema({
    nombre: String,
    precio: String,
    descripcion: String,
    imagen: String,
    videoUrl: String,
},{
    timestamps: true,
    versionKey: false
})

export default model('Curso', cursoSchema)