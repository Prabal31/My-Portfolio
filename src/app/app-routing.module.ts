import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsDetailsComponent } from '../app/Menu/menu-projects/projects-details/projects-details.component';

const routes: Routes = [
  { path: 'project/:id', component: ProjectsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
