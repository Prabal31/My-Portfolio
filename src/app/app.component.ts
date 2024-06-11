import { Component } from '@angular/core';
import {Personal, Links, Project, Experience} from "./MyInfo";
import data from '../assets/data/Mydata.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  mydata: Personal = data.Personal;
  link: Links = data.Links;
  project:Project[] = data.projects;
  experience:Experience[] = data.Experience;
  darkMode = false;
}
