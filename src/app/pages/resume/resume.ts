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
      description: 'Full stack development courses focusing on modern web technologies and frameworks.'
    },
    {
      date: '2022 - 2025',
      title: 'Game Developer',
      location: 'LUCA School of Arts',
      description: 'Completed a Bachelor in Arts in Game Development, specializing in Unity and C#.'
    },
    {
      date: '2019 - Present',
      title: 'Crew Member',
      location: "McDonalds's Genk",
      description: 'Completed Shift Manager Course in Utrecht, NL.'
    }
  ];
}
