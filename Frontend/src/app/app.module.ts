import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FootComponent } from './components/foot/foot.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ErrorComponent } from './components/error/error.component';
import { Admin2Component } from './components/admin2/admin2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootComponent,
    NosotrosComponent,
    IniciarComponent,
    RegistrarComponent,
    CursosComponent,
    CardCursoComponent,
    CardNewsComponent,
    NoticiasComponent,
    RecuperarComponent,
    AdminComponent,
    ErrorComponent,
    Admin2Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
