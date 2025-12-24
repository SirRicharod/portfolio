import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // about.component.ts
  public skills = [
    { name: 'Angular', percentage: '50', icon: 'fa-brands fa-angular', level: 'intermediate' },
    { name: 'TypeScript', percentage: '40', icon: 'bi bi-typescript', level: 'beginner' },
    { name: 'Bootstrap', percentage: '65', icon: 'bi-bootstrap-fill', level: 'intermediate' },
    { name: 'Unity', percentage: '90', icon: 'fa-brands fa-unity', level: 'advanced' },
    { name: 'C#', percentage: '80', icon: '/assets/about/csharp.png', level: 'advanced' },
    { name: 'JavaScript', percentage: '60', icon: 'fa-brands fa-js', level: 'intermediate' },
    { name: 'HTML5', percentage: '70', icon: 'fa-brands fa-html5', level: 'advanced' },
    { name: 'CSS3', percentage: '70', icon: 'fa-brands fa-css3-alt', level: 'intermediate' },
  ];
}
