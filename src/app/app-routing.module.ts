import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsDetailsComponent } from '../app/Menu/menu-projects/projects-details/projects-details.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'project/:id', component: ProjectsDetailsComponent },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
