import { Component, input } from '@angular/core';

import { PortfolioHomeResponse } from '../../home/home.service';
import { ContentBlockRenderer } from '../../../shared/components/content-block-renderer/content-block-renderer';

@Component({
  selector: 'app-experience',
  imports: [ContentBlockRenderer],
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  readonly experienceData =
    input<any | undefined>(undefined);
}