import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './Menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ProjectsTitleComponent } from './Menu/menu-about/menu-aboutcomponent';
import { ProjectsSubtitleComponent } from './Menu/menu-work/menu-work.component';
import { ProjectsImageComponent } from './Menu/menu-projects/menu-projects.component';
import { ProjectsResumeComponent } from './Menu/menu-resume/projects-resume.component';
import { ProjectsHobbiesComponent } from './Menu/menu-contact/menu-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectsComponent,
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
