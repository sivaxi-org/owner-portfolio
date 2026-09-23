import { Component, signal } from '@angular/core';
import { ProjectDto, ProjectService } from '../dashboard/project/project-service';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  projects = signal<ProjectDto[]>([])

  constructor(private readonly projectService:ProjectService){
    this.loadProjects()
  }

  loadProjects(){
    this.projectService.getProjects().subscribe({
      next:(res)=> this.projects.set(res),
      error: (error) => console.log(error)
    })
  }

}
