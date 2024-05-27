import { Component } from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-projects',
  templateUrl: './menu-projects.component.html',
  styleUrls: ['./menu-projects.component.css']
})
export class MenuProjectsComponent {

  myGithub=faGithub;

  faGithub=faGithub
}
