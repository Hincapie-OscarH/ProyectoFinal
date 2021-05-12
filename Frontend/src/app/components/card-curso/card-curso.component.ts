import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'
import { Curso } from '../../models/Curso'

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {

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

}
