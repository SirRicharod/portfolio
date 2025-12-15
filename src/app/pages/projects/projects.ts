import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// This interface defines the shape of a project object
// Each project has a title, description, and image (required)
// plus optional fields like tags, links, and year
interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];      // Optional: array of techstack tags
  site?: string;        // Optional: link to live website
  github?: string;      // Optional: link to GitHub repository
  itchio?: string;      // Optional: link to Itch.io
  year?: number;        // Optional: year the project was created
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class Projects implements OnInit {
  // Signal to store the list of projects (starts as empty array)
  projects = signal<Project[]>([]);

  // Signal to track if data is still loading (starts as true)
  loading = signal<boolean>(true);

  // Signal to store any error messages (starts as empty string)
  error = signal<string>('');

  // This runs automatically when the component is initialized
  ngOnInit(): void {
    fetch('assets/projects/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load projects');
        }
        return response.json();
      })
      .then((data: Project[]) => {
        this.projects.set(data.reverse());
        this.loading.set(false);
      })
      .catch(err => {
        console.error('Failed to load projects:', err);
        this.error.set('Failed to load projects.');
        this.loading.set(false);
      });
  }
}