import Curso from '../models/Curso'

export const createCurso = async (req, res) => {
    
    const { nombre, precio, descripcion, imagen, videoUrl } = req.body

    const nuevoCurso = new Curso({
        nombre,
        precio,
        descripcion,
        imagen,
        videoUrl
    })

    const cursoGuardado = await nuevoCurso.save()

    res.status(201).json(cursoGuardado)
}

export const listarCursos = async (req, res) => {
    const cursosListados = await Curso.find().sort({updatedAt: -1})

    res.status(200).json(cursosListados)
}

export const listarCursoById = async (req, res) => {
    console.log(req.params)

    const cursoListado = await Curso.findById(req.params.cursoId)

    if (cursoListado !== null) res.status(200).json(cursoListado)
    else res.status(401).json({msg: "Curso no existe"})
}

export const actCurso = async (req, res) => {
    try {
        const actCurso = await Curso.findByIdAndUpdate(req.params.cursoId, req.body, {new: true})
        if (actCurso !== null){
            res.status(200).json(actCurso)
        } else {
            res.status(401).json({error: "El curso no existe"})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


export const elimCurso = async (req, res) => {
    try {
        const elimCurso = await Curso.findByIdAndDelete(req.params.cursoId)
        if (elimCurso !== null){
            res.status(200).json({msg: "Curso Eliminado"})
        } else {
            res.status(401).json({error: "El curso no existe"})
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}