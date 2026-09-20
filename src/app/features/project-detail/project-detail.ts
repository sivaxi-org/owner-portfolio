import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailService,ProjectSlugResponse } from './project-detail-service';
import { ContentBlockRenderer } from '../../shared/components/content-block-renderer/content-block-renderer';
import { Navbar } from '../../shared/components/navbar/navbar';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ContentBlockRenderer, Navbar],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectDetailService);

  project?: ProjectSlugResponse;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      return;
    }

    this.projectService.getProjectDetails(slug).subscribe({
      next: (response) => {
        this.project = response;
      },
      error: (error) => {
        console.error('Failed to load project details:', error);
      },
    });
  }
}