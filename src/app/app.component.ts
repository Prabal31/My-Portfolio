import { Component } from '@angular/core';
import {Personal, Links} from "./MyInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  mydata:Personal = {first:"Prabal",last:"Manchanda"};
  link:Links = {Linkedin:"https://www.linkedin.com/in/prabal-manchanda/",GitHub:"https://github.com/Prabal31", Email: "manchapr@sheridancollege.ca"};
}
