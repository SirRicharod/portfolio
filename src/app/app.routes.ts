import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume').then(m => m.Resume) },
  { path: '**', redirectTo: '' }
];

