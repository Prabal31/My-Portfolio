import { Component,Input } from '@angular/core';
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {Links} from "src/app/MyInfo";
@Component({
  selector: 'app-menu-contact',
  templateUrl: './menu-contact.component.html',
  styleUrls: ['./menu-contact.component.css']
})
export class MenuContactComponent {
  myLinkedin=faLinkedin;
  myGithub=faGithub;

  faLinkedin=faLinkedin
  faGithub=faGithub

  @Input() links!: Links;

}
