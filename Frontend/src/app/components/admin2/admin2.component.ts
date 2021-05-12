import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service'
import { Noticia } from '../../models/Noticia'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {

  constructor(public noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.executeService()
  }

  executeService(){ /* esto es un metodo y son funcionalidades de una clase */
    this.noticiasService.getNoticias().subscribe(
      res => {
        this.noticiasService.noticias = res
        console.log(res)
        return this.noticiasService.noticias
      },
      err => {
        this.noticiasService.noticias = err
        return this.noticiasService.noticias
      }
    )
  }

  updateService(noticia: Noticia){
    this.noticiasService.selectedNoticia = noticia;
  }

  createService(form?: NgForm){
    if (!form.value._id){
      this.noticiasService.createNoticia(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Creado',
            'El Producto se creo correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log("Error", err)
          Swal.fire(
            'Producto No Creado',
            'El Producto no se creo correctamente',
            'error'
          )
          return err
        }
      )
    } else {
      this.noticiasService.updateNoticias(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Actualizado',
            'El Producto se Actualizó correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log(err)
          return err
        }
      )
    }
    this.cleanForm(form)
  }

  cleanForm(form?: NgForm){
    if(form){
      form.reset()
      this.noticiasService.selectedNoticia = new Noticia()
      this.executeService()
    }
  }

  deleteService(_id: string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar el producto?',
      text: "Recuerda que no puedes revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.noticiasService.deleteNoticias(_id).subscribe(
          res => {
            console.log(res)
            this.executeService()
          },
          err => {
            console.log(err)
          }
        )
        Swal.fire(
          'Producto Eliminado',
          'El producto se elimino satisfactoriamente',
          'success'
        )
      }
    })
  }
}