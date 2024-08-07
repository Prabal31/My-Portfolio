import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from 'src/app/MyInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-projects',
  templateUrl: './menu-projects.component.html',
  styleUrls: ['./menu-projects.component.css']
})
export class MenuProjectsComponent {
  myGithub = faGithub;
  @Input() pwork!: Project[];
  likedProjects: Set<string> = new Set();

  constructor(private router: Router) {}

  toggleLike(projectId: string): void {
    if (this.likedProjects.has(projectId)) {
      this.likedProjects.delete(projectId);
    } else {
      this.likedProjects.add(projectId);
    }
  }

  isLiked(projectId: string): boolean {
    return this.likedProjects.has(projectId);
  }

  goToDetails(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
