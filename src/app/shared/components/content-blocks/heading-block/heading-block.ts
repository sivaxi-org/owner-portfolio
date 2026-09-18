import {
  Component,
  input
} from '@angular/core';

import {
  HeadingBlockData
} from '../../content-block/content-block.model';

@Component({
  selector: 'app-heading-block',
  imports: [],
  templateUrl: './heading-block.html',
  styleUrl: './heading-block.css'
})
export class HeadingBlock {

  data = input.required<HeadingBlockData>();

}