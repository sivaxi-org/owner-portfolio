import { SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-work',
  imports: [],
  styleUrl: './work.css',
  templateUrl: './work.html',
})
export class Work {
  readonly projectsData =
    input< any | undefined>();

private readonly router = inject(Router);

openProject(slug: string): void {
  this.router.navigate(['/projects', slug]);
}
    
}