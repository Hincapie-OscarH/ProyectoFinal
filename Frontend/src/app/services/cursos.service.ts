import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from '../models/Curso'

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  URL_API = "http://localhost:5000/cursos"

  selectedCurso: Curso = { // curso seleccionado para editar
    _id: '',
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    videoUrl: ''
  }

  cursos:Curso[] // arreglo de cursos
  curso:Curso 

  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get<Curso[]>(this.URL_API)
  }
  getCursoById(_id: string){
    return this.http.get<Curso>(`${this.URL_API}/${_id}`)
  }
  createCurso(curso: Curso){
    return this.http.post(this.URL_API, curso)
  }
  deleteCursos(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
  updateCursos(curso: Curso){
    return this.http.put(`${this.URL_API}/${curso._id}`, curso)
  }
}
