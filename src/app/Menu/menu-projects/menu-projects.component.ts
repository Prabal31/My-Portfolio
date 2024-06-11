import {Component, Input} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Project} from "src/app/MyInfo";

@Component({
  selector: 'app-menu-projects',
  templateUrl: './menu-projects.component.html',
  styleUrls: ['./menu-projects.component.css']
})
export class MenuProjectsComponent {

  myGithub=faGithub;

  faGithub=faGithub

  @Input() pwork!: Project[];
}
