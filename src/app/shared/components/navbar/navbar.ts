import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { ThemeService } from '../../../core/theme/theme.service';
import { IMAGE_PATHS } from '../../constants/image-constants';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcher],
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  protected readonly IMAGE_PATHS = IMAGE_PATHS;

  protected menuOpen = false;

  

  constructor(
    public themeService: ThemeService,
    public authService: AuthService
  ) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}