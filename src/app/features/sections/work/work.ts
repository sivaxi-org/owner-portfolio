import { Component, input } from '@angular/core';

import { PortfolioHomeResponse } from '../../home/home.service';
import { ContentBlockRenderer } from '../../../shared/components/content-block-renderer/content-block-renderer';

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