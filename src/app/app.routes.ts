import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { authGuard } from './core/guards/auth.guard';
import { ContentBlockTest } from './features/dashboard/content-block-test/content-block-test';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],

    loadComponent: () =>
      import('./core/layout/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },

      {
        path: 'overview',
        loadComponent: () =>
          import('./features/dashboard/overview/overview').then((m) => m.Overview),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/dashboard/portfolio/portfolio').then((m) => m.Portfolio),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/dashboard/about/about').then((m) => m.About),
      },

      {
        path: 'projects',
        loadComponent: () =>
          import('./features/dashboard/project/projects').then((m) => m.Projects),
      },
      {
        path: 'projects/:id',
        loadComponent: () =>
          import('./features/dashboard/project/components/project-detail/project-detail').then(
            (m) => m.ProjectDetail,
          ),
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/dashboard/experience/experience').then((m) => m.Experience),
      },
      {
        path: 'experience/:id',
        loadComponent: () =>
          import('./features/dashboard/experience/experience-detail/experience-detail').then(
            (m) => m.ExperienceDetail,
          ),
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/dashboard/skills/skills').then((m) => m.Skills),
      },
      {
        path: 'stats',
        loadComponent: () => import('./features/dashboard/stats/stats').then((m) => m.Stats),
      },
        {
        path: 'testimonials',
        loadComponent: () => import('./features/dashboard/testimonial/testimonial').then((m) => m.Testimonials),
      },
              {
        path: 'contacts',
        loadComponent: () => import('./features/dashboard/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'test',
        component: ContentBlockTest,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
