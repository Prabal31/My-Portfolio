// src/app/services/like-button.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeButtonService {
  private likedProjects: string[] = [];

  constructor() { }

  // Toggle the like status of a project
  toggleLike(projectId: string): void {
    const index = this.likedProjects.indexOf(projectId);
    if (index > -1) {
      this.likedProjects.splice(index, 1);  // If already liked, unlike it
    } else {
      this.likedProjects.push(projectId);  // If not liked, like it
    }
  }

  // Check if a project is liked
  isLiked(projectId: string): boolean {
    return this.likedProjects.includes(projectId);
  }
}
