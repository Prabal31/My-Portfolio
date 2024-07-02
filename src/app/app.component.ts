import { Component } from '@angular/core';
import {Personal, Links, Project, Experience} from "./MyInfo";
import data from '../assets/data/Content.json';
import work from '../assets/data/Experience.json';
import build from '../assets/data/Projects.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  mydata: Personal = data.Personal;
  link: Links = data.Links;
  project:Project[] = build.projects;
  experience:Experience[] = work.Experience;
  darkMode = false;
}
