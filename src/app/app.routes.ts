import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), data: { animation: 'HomePage' } },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects), data: { animation: 'ProjectsPage' } },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About), data: { animation: 'AboutPage' } },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then(m => m.Resume), data: { animation: 'ResumePage' } },
  { path: '**', loadComponent: () => import('./component/error404/error404').then(m => m.Error404), data: { animation: 'ErrorPage' } },
];

