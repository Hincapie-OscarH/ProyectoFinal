import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../models/Noticia';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

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

}
