import { Component } from '@angular/core';
import {Personal} from "./MyInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  mydata:Personal = {first:"Prabal",last:"Manchanda"};
}
