import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  public milestones = [
    {
      date: '2025 - Present',
      title: 'Full-Stack Developer',
      location: 'Syntra PXL',
      description: "Developing a versatile toolkit for building web applications from start to finish. I create responsive interfaces using Angular and Bootstrap, while managing the backend with PHP and Laravel. By connecting databases and APIs, I've learned to handle the entire lifecycle of a project, ensuring the frontend and backend work perfectly together."
    },
    {
      date: '2022 - 2025',
      title: 'Game Developer (Bachelor of Arts)',
      location: 'LUCA School of Arts',
      description: 'Graduated Cum Laude. I developed a versatile toolkit for indie game creation: programming gameplay systems in C# and Unity, sculpting and animating 3D assets using Blender and Substance Painter, and handling 2D art in Photoshop and Procreate. Beyond the technical, I focused on character design, UI, narrative storytelling, and core mechanics.'
    },
    {
      date: '2019 - Present',
      title: 'Shift Manager & Crew Trainer',
      location: "McDonald's Genk",
      description: 'Progressed from Student to Shift Manager over 7 years. Certified Manager (Utrecht, NL) responsible for team leadership, operational logic, and training new staff in a high-pressure environment.'
    }
  ];
}
