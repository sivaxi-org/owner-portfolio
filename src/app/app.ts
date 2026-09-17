import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorSparkleDirective } from './core/directives/cursor-sparkle.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CursorSparkleDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('owner-portfolio');
}
