import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from '../sections/hero/hero';
import { About } from '../sections/about/about';

@Component({
  imports: [Navbar, Footer, Hero,About],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
