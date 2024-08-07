import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LikeButtonService } from '../../../like-button.service';
import { Project } from 'src/app/MyInfo';

@Component({
  selector: 'app-project-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
  project!: Project;
  projectId!: number;
  private jsonUrl = 'assets/data/projects.json';

  constructor(
    private route: ActivatedRoute,
    private likeService: LikeButtonService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = +params.get('id')!; // Convert to number using '+'
      this.getProjectData();
    });
  }

  getProjectData(): void {
    this.http.get<{ projects: Project[] }>(this.jsonUrl).subscribe(data => {
      const project = data.projects.find(p => p.id === this.projectId);
      if (project) {
        this.project = project;
      } else {
        // Handle project not found case, e.g., redirect or show a message
      }
    });
  }

  toggleLike(): void {
    this.likeService.toggleLike(this.project.id.toString());
  }

  isLiked(): boolean {
    return this.likeService.isLiked(this.project.id.toString());
  }
}
