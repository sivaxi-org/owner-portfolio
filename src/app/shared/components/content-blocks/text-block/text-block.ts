import {
  Component,
  input
} from '@angular/core';
import { TextBlockData } from '../../content-block/content-block.model';


@Component({
  selector: 'app-text-block',
  imports: [],
  template: `
    <div class="rounded-xl border border-glass-border-soft bg-glass-fill p-5">

      <div class="mb-3 text-xs font-medium uppercase tracking-wider text-accent-2">
        Text
      </div>

      <p class="text-sm leading-7 text-text-muted">
        {{ data().content }}
      </p>

    </div>
  `
})
export class TextBlock {

  data = input.required<TextBlockData>();

}