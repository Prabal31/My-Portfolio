import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './Menu/menu.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { MenuAboutComponent } from './Menu/menu-about/menu-aboutcomponent';
import { MenuWorkComponent } from './Menu/menu-work/menu-work.component';
import { MenuProjectsComponent } from './Menu/menu-projects/menu-projects.component';
import { MenuContactComponent } from './Menu/menu-contact/menu-contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsDetailsComponent } from './Menu/menu-projects/projects-details/projects-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    MenuAboutComponent,
    MenuWorkComponent,
    MenuProjectsComponent,
    MenuContactComponent,
    ProjectsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
