import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/Curso';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public cursosService: CursosService, public sanitizer: DomSanitizer) {}

  URL_CURSO: string = window.location.pathname;
  ID_CURSO: string = this.URL_CURSO.substring(
    this.URL_CURSO.lastIndexOf('/') + 1
  );

  ngOnInit(): void {
    this.executeService()
    console.log(this.ID_CURSO)
  }

  executeService() {
    /* esto es un metodo y son funcionalidades de una clase */
    this.cursosService.getCursoById(this.ID_CURSO).subscribe(
      (res) => {
        console.log(res);
        let secure = this.sanitizer.bypassSecurityTrustResourceUrl(res.videoUrl)
        res.videoSafe = secure
        console.log(res.videoSafe)
        this.cursosService.curso = res
        return this.cursosService.curso;
      },
      (err) => {
        this.cursosService.curso = err;
        console.log(err)
        return this.cursosService.curso;
      }
    );
  }
}
