import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-work',
  imports: [],
  styleUrl: './work.css',
  templateUrl: './work.html',
})
export class Work {
  readonly projectsData =
    input< any | undefined>();
}