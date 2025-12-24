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
    // Add more milestones here!
    {
      date: '2019 - 2022',
      title: 'Placeholder',
      location: 'Placeholder Institute',
      description: 'Placeholder description for previous experience or education milestone.'
    },
    {
      date: '2016 - 2019',
      title: 'Placeholder',
      location: 'Placeholder Academy',
      description: 'Placeholder description for earlier experience or education milestone.'
    }
  ];
}
