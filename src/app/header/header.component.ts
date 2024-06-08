import { Component, Input} from '@angular/core';
import {Personal} from "../MyInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() data!: Personal;
}
