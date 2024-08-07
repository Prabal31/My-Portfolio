import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LikeButtonService } from '../../../like-button.service';
import { Project } from 'src/app/MyInfo';
import projectData from '../../../../assets/data/Projects.json';
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
      this.projectId = parseInt(params.get('id')!); // Convert to number using parseInt()
      this.project = this.getProject((this.projectId)-1);

    });
  }

  toggleLike(): void {
    this.likeService.toggleLike(this.project.id.toString());
  }

  isLiked(): boolean {
    return this.likeService.isLiked(this.project.id.toString());
  }

  getProject(id: number) {
    return projectData.projects[id];
  }
}