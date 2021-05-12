import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { Admin2Component } from './components/admin2/admin2.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component'
import { IniciarComponent } from './components/iniciar/iniciar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent},
  { path: 'iniciar', component: IniciarComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin2', component: Admin2Component},
  { path: 'dashboard/:cursoId', component: DashboardComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
