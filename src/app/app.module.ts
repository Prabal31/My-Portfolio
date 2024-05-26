import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ProjectsTitleComponent } from './projects-title/projects-title.component';
import { ProjectsSubtitleComponent } from './projects-subtitle/projects-subtitle.component';
import { ProjectsImageComponent } from './projects-image/projects-image.component';
import { ProjectsResumeComponent } from './projects-resume/projects-resume.component';
import { ProjectsHobbiesComponent } from './projects-hobbies/projects-hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    ProjectsTitleComponent,
    ProjectsSubtitleComponent,
    ProjectsImageComponent,
    ProjectsResumeComponent,
    ProjectsHobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
