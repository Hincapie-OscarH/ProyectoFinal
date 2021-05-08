import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/Noticia';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  URL_API = 'http://localhost:5000/noticias';

  selectedNoticia: Noticia = {
    // objeto seleccionado para editar
    _id: '',
    titulo: '',
    descripcion: '',
    imgUrl: '',
  };

  noticia: Noticia[];

  constructor(private http: HttpClient) {}

  getNoticias() {
    return this.http.get<Noticia[]>(this.URL_API);
  }
  getNoticiaById(_id: string) {
    return this.http.get(`${this.URL_API}/${_id}`);
  }
  createCurso(noticia: Noticia) {
    return this.http.post(this.URL_API, noticia);
  }
  deleteNoticias(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  updateNoticias(noticia: Noticia) {
    return this.http.put(`${this.URL_API}/${noticia._id}`, noticia);
  }
}
