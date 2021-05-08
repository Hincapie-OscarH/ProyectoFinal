export class Curso {
  _id?: String;
  nombre: String;
  precio: String;
  descripcion: String;
  imagen: String;
  videoUrl: string;
  videoSafe?: any;
  createdAt?: string;
  updatedAt?: string;

  //constructor
  constructor(
    _id = '',
    nombre = '',
    precio = '',
    descripcion = '',
    imagen = '',
    videoUrl = ''
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.videoUrl = videoUrl;
  }
}
