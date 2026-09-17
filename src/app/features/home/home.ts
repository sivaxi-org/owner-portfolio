import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from '../sections/hero/hero';
import { About } from '../sections/about/about';
import { Skills } from '../sections/skills/skills';
import { Work } from '../sections/work/work';
import { Experience } from '../sections/experience/experience';
import { Blog } from '../sections/blog/blog';
import { Testimonials } from '../sections/testimonials/testimonials';
import { Contact } from '../sections/contact/contact';
import { ScrollScrubVideoDirective } from '../../core/directives/scroll-scrub-video.directive';

@Component({
  imports: [
    ScrollScrubVideoDirective,
    Navbar, Footer, Hero, Skills, Work, About, Experience, Blog, Testimonials, Contact
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}