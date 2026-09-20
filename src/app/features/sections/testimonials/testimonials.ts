import { Component, input } from '@angular/core';

import { PortfolioHomeResponse } from '../../home/home.service';

@Component({
  selector: 'app-testimonials',
  imports: [],
  styleUrl: './testimonials.css',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  readonly testimonialsData =
    input<any | undefined>(undefined);
}