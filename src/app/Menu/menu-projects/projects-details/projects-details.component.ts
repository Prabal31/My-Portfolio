// src/app/components/project-details/projects-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private likeService: LikeButtonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = +params.get('id')!; // Convert to number using '+'
      this.project = this.fetchProjectDetails(this.projectId);
    });
  }

  fetchProjectDetails(id: number): Project {
    // Mock function to simulate fetching project data
    return {
      id: id,
      name: 'Example Project',
      image: 'path/to/image.jpg',
      technology_used: 'Angular, TypeScript',
      details: 'Detailed description of the project...',
      github_link: 'https://github.com/example/project'
    };
  }

  toggleLike(): void {
    this.likeService.toggleLike(this.project.id.toString());
  }

  isLiked(): boolean {
    return this.likeService.isLiked(this.project.id.toString());
  }
}
