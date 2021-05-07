import Noticia from '../models/Noticias'

export const createNoticia = async (req, res) => {
    
    const { titulo, descripcion, imgUrl } = req.body

    const nuevaNoticia = new Noticia({
        titulo,
        descripcion,
        imgUrl
        
    })

    const noticiaGuardado = await nuevaNoticia.save()

    res.status(201).json(noticiaGuardado)
}

export const listarNoticias = async (req, res) => {
    const noticiasListadas = await Noticias.find().sort({updatedAt: -1})

    res.status(200).json(noticiasListadas)
}

export const listarNoticiaById = async (req, res) => {
    console.log(req.params)

    const noticiaListada = await Noticias.findById(req.params.noticiaId)

    if (noticiaListada !== null) res.status(200).json(noticiaListada)
    else res.status(401).json({msg: "La noticia no existe"})
}

export const actNoticia = async (req, res) => {
    try {
        const actNoticias = await Noticias.findByIdAndUpdate(req.params.noticiaId, req.body, {new: true})
        if (actNoticias !== null){
            res.status(200).json(actCurso)
        } else {
            res.status(401).json({error: "La noticia no existe"})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


export const elimNoticia = async (req, res) => {
    try {
        const elimNoticia = await Noticias.findByIdAndDelete(req.params.cursoId)
        if (elimNoticia !== null){
            res.status(200).json({msg: "Noticia Eliminada"})
        } else {
            res.status(401).json({error: "La noticia no existe"})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}