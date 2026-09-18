import {
  Component,
  input
} from '@angular/core';

import {
  RichTextBlockData
} from '../../content-block/content-block.model';

@Component({
  selector: 'app-rich-text-block',
  imports: [],
  templateUrl: './rich-text-block.html',
  styleUrl: './rich-text-block.css'
})
export class RichTextBlock {

  data = input.required<RichTextBlockData>();

}