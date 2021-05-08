export class Noticia {
  _id?: String;
  titulo: String;
  descripcion: String;
  imgUrl?: String;
  createdAt?: string;
  updatedAt?: string;

  //constructor
  constructor(
    _id = '',
    titulo = '',
    descripcion = '',
    imgUrl = ''
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
  }
}
