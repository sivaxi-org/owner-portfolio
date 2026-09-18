import {
  Component,
  input
} from '@angular/core';

import {
  TitleBulletsBlockData
} from '../../content-block/content-block.model';

@Component({
  selector: 'app-title-bullets-block',
  imports: [],
  templateUrl: './title-bullets-block.html',
  styleUrl: './title-bullets-block.css'
})
export class TitleBulletsBlock {

  data = input.required<TitleBulletsBlockData>();

}