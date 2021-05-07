//importacion de las rutas
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './database'

//llamado de rutas
import cursoRutas from './routes/cursos.routes'
import noticiasRutas from './routes/noticias.routes'

const app = express()
const port = 5000

//usar los modulos
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//tutas de los cursos
app.use('/cursos', cursoRutas)
app.use('/noticias', noticiasRutas)

app.listen(port,() =>{

    console.log('servidor escuchando en el puerto', port)
})
