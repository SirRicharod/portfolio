import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  icon?: string | null;
  image?: string;
}

interface Category {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

birthdate = new Date("2001-08-13T00:00:00");
timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
age = signal<number>(Math.floor((this.timeDiff / (1000 * 3600 * 24)) / 365.25));

  public categories: Category[] = [
  {
    title: "Frontend",
    skills:
      [
        { name: 'Angular', icon: 'fa-brands fa-angular' },
        { name: 'Bootstrap', icon: 'bi-bootstrap-fill' },
        { name: 'TypeScript', icon: 'bi bi-typescript' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'HTML5', icon: 'fa-brands fa-html5' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
      ]
  },
  {
    title: "Backend",
    skills: [
      { name: 'Laravel', icon: null, image: 'laravel.png' },
      { name: 'PHP', icon: null, image: 'php.png' },
      { name: 'Python', icon: null, image: 'python.png' },

    ]
  },
  {
    title: "3D & Gaming",
    skills: [
      { name: 'Unity', icon: 'fa-brands fa-unity' },
      { name: 'Unreal Engine 5', icon: null, image: 'ue5.png' },
      { name: 'C#', icon: null, image: 'csharp.png' },
      { name: 'Blender', icon: null, image: 'blender.png' }]
  },
  {
    title: "Design",
    skills: [
      { name: 'Affinity', icon: null, image: 'affinity.png' },
      { name: 'Aseprite', icon: null, image: 'aseprite.png' },
      { name: 'Procreate', icon: null, image: 'procreate.png' },
    ]
  }
]
}
