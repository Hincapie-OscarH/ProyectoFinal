import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'
import { Curso } from '../../models/Curso'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public cursosService: CursosService) { }

  ngOnInit(): void {
    this.executeService()
  }

  executeService(){ /* esto es un metodo y son funcionalidades de una clase */
    this.cursosService.getCursos().subscribe(
      res => {
        this.cursosService.cursos = res
        console.log(res)
        return this.cursosService.cursos
      },
      err => {
        this.cursosService.cursos = err
        return this.cursosService.cursos
      }
    )
  }

  updateService(curso: Curso){
    this.cursosService.selectedCurso = curso;
  }

  createService(form?: NgForm){
    if (!form.value._id){
      this.cursosService.createCurso(form.value).subscribe(
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
      this.cursosService.updateCursos(form.value).subscribe(
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
      this.cursosService.selectedCurso = new Curso()
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
        this.cursosService.deleteCursos(_id).subscribe(
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
