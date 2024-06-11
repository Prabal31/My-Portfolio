import { Component, Input} from '@angular/core';
import {Experience} from "src/app/MyInfo";

@Component({
  selector: 'app-menu-work',
  templateUrl: './menu-work.component.html',
  styleUrls: ['./menu-work.component.css']
})
export class MenuWorkComponent {
  @Input() pexperience!: Experience[];

}
