import { Component } from '@angular/core';
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-menu-contact',
  templateUrl: './menu-contact.component.html',
  styleUrls: ['./menu-contact.component.css']
})
export class ProjectsHobbiesComponent {
  myLinkedin=faLinkedin;
  myGithub=faGithub;

  faLinkedin=faLinkedin
  faGithub=faGithub
}
