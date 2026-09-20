import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { ContentBlockTest } from './features/dashboard/content-block-test/content-block-test';
import { PortfolioPage } from './features/portfolio-page/portfolio-home';
import { Home } from './features/home/home';
import { Plans } from './features/plans/plans';
import { keycloak } from './core/auth/keycloak';




export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Sivaxi | Home',
    data: {
      page: 'home',
      section: 'public',
    },
  },

  {
    path: "plans",
    component: Plans
  },

  {
    path : "portfolio/:username",
    component: PortfolioPage
  },



  {
    path: 'dashboard',
    canActivate: [authGuard],
    title: 'Sivaxi | Dashboard',
    data: {
      page: 'dashboard',
      section: 'dashboard',
      requiresAuth: true,
    },

    loadComponent: () =>
      import('./core/layout/dashboard-layout/dashboard-layout').then(
        (m) => m.DashboardLayout,
      ),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portfolio/' + keycloak.tokenParsed?.['preferred_username'],
      },

      {
        path: 'overview',
        title: 'Sivaxi | Overview',
        data: {
          page: 'overview',
          section: 'dashboard',
        },
        loadComponent: () =>
          import('./features/dashboard/overview/overview').then(
            (m) => m.Overview,
          ),
      },

      {
        path: 'profile',
        title: 'Sivaxi | Profile',
        data: {
          page: 'profile',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/portfolio/portfolio').then(
            (m) => m.Portfolio,
          ),
      },

      {
        path: 'about',
        title: 'Sivaxi | About',
        data: {
          page: 'about',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/about/about').then(
            (m) => m.About,
          ),
      },

      {
        path: 'projects',
        title: 'Sivaxi | Projects',
        data: {
          page: 'projects',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/project/projects').then(
            (m) => m.Projects,
          ),
      },

      {
        path: 'projects/:id',
        title: 'Sivaxi | Project',
        data: {
          page: 'project-detail',
          section: 'portfolio',
        },
        loadComponent: () =>
          import(
            './features/dashboard/project/components/project-detail/project-detail'
          ).then((m) => m.ProjectDetail),
      },

      {
        path: 'experience',
        title: 'Sivaxi | Experience',
        data: {
          page: 'experience',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/experience/experience').then(
            (m) => m.Experience,
          ),
      },

      {
        path: 'experience/:id',
        title: 'Sivaxi | Experience',
        data: {
          page: 'experience-detail',
          section: 'portfolio',
        },
        loadComponent: () =>
          import(
            './features/dashboard/experience/experience-detail/experience-detail'
          ).then((m) => m.ExperienceDetail),
      },

      {
        path: 'skills',
        title: 'Sivaxi | Skills',
        data: {
          page: 'skills',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/skills/skills').then(
            (m) => m.Skills,
          ),
      },

      {
        path: 'stats',
        title: 'Sivaxi | Stats',
        data: {
          page: 'stats',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/stats/stats').then(
            (m) => m.Stats,
          ),
      },

      {
        path: 'testimonials',
        title: 'Sivaxi | Testimonials',
        data: {
          page: 'testimonials',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/testimonial/testimonial').then(
            (m) => m.Testimonials,
          ),
      },

      {
        path: 'contacts',
        title: 'Sivaxi | Contacts',
        data: {
          page: 'contacts',
          section: 'portfolio',
        },
        loadComponent: () =>
          import('./features/dashboard/contact/contact').then(
            (m) => m.Contact,
          ),
      },

      {
        path: 'test',
        component: ContentBlockTest,
        title: 'Sivaxi | Test',
        data: {
          page: 'test',
          section: 'development',
        },
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];