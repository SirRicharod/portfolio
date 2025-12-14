import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  year?: number;        // Optional: year the project was created
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Projects implements OnInit {
  // Inject HttpClient to make HTTP requests
  private http = inject(HttpClient);

  // Signal to store the list of projects (starts as empty array)
  projects = signal<Project[]>([]);
  
  // Signal to track if data is still loading (starts as true)
  loading = signal(true);
  
  // Signal to store any error messages (starts as empty string)
  error = signal('');

  // This runs automatically when the component is initialized
  ngOnInit(): void {
    // Make an HTTP GET request to fetch the projects JSON file
    this.http.get<Project[]>('assets/projects/projects.json').subscribe({
      // If the request succeeds, update the projects and stop loading
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      // If the request fails, log the error and show an error message
      error: (err) => {
        console.error('Failed to load projects:', err);
        this.error.set('Failed to load projects.');
        this.loading.set(false);
      }
    });
  }

  // Helper function for Angular's @for loop to track items efficiently
  // Uses the project title as a unique identifier
  trackByTitle(_: number, p: Project) {
    return p.title;
  }
}
