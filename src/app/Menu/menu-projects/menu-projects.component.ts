// src/app/components/menu-projects/menu-projects.component.ts
import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Project } from 'src/app/MyInfo';
import { Router } from '@angular/router';
import { LikeButtonService } from '../../like-button.service';

@Component({
  selector: 'app-menu-projects',
  templateUrl: './menu-projects.component.html',
  styleUrls: ['./menu-projects.component.css']
})
export class MenuProjectsComponent {
  myGithub = faGithub;
  @Input() pwork!: Project[];

  constructor(private router: Router, private likeService: LikeButtonService) {}

  toggleLike(projectId: string): void {
    this.likeService.toggleLike(projectId);
  }

  isLiked(projectId: string): boolean {
    return this.likeService.isLiked(projectId);
  }

  goToDetails(projectId: string): void {
    this.router.navigate(['/project', projectId]);
  }
}
