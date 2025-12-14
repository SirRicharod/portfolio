import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  site?: string;
  github?: string;
  year?: number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects implements OnInit {
  private http = inject(HttpClient);

  projects = signal<Project[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.http.get<Project[]>('assets/projects/projects.json').subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load projects:', err);
        this.error.set('Failed to load projects.');
        this.loading.set(false);
      }
    });
  }

  trackByTitle(_: number, p: Project) {
    return p.title;
  }
}
