import {
  Component,
  DestroyRef,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  input,
  signal
} from '@angular/core';


import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconRenderer } from '../../../shared/components/icon/icon-renderer/icon-renderer';

@Component({
  selector: 'app-skills',
  imports: [IconRenderer],
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {

  readonly skillsData = input<any[]>([]);

  protected readonly openedCategory = signal<number | null>(0);

  @ViewChildren('railEl') private railEls!: QueryList<ElementRef<HTMLElement>>;

  private readonly destroyRef = inject(DestroyRef);
  private readonly AUTO_SWITCH_MS = 3500;
  private autoplayPaused = false;
  private resumeTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    interval(this.AUTO_SWITCH_MS)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.autoplayPaused) return;

        const categories = this.skillsData();
        if (!categories.length) return;

        const current = this.openedCategory() ?? -1;
        const next = (current + 1) % categories.length;
        this.setCategory(next, false);
      });
  }

  

  toggleCategory(index: number): void {
    this.setCategory(index, true);
  }

  prevCategory(): void {
    const categories = this.skillsData();
    if (!categories.length) return;
    const current = this.openedCategory() ?? 0;
    const prev = (current - 1 + categories.length) % categories.length;
    this.setCategory(prev, true);
  }

  nextCategory(): void {
    const categories = this.skillsData();
    if (!categories.length) return;
    const current = this.openedCategory() ?? 0;
    const next = (current + 1) % categories.length;
    this.setCategory(next, true);
  }

  private setCategory(index: number, manual: boolean): void {
    this.openedCategory.set(index);

    // Scroll the corresponding rail into view (for the mobile horizontal strip)
    const el = this.railEls?.get(index)?.nativeElement;
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    if (manual) {
      this.autoplayPaused = true;
      clearTimeout(this.resumeTimeout);
      this.resumeTimeout = setTimeout(() => {
        this.autoplayPaused = false;
      }, 8000); // resume autoplay 8s after last manual interaction
    }
  }
}