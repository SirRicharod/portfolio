// contact.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  public contacts: ContactInfo[] = [
    { label: 'Email', value: 'riccardo.contact@proton.me', icon: 'bi-envelope-at', url: 'mailto:riccardo.contact@proton.me' },
    { label: 'LinkedIn', value: 'Riccardo Giannecchini', icon: 'bi-linkedin', url: 'https://linkedin.com/in/riccardo-giannecchini' },
    { label: 'GitHub', value: '@SirRicharod', icon: 'bi-github', url: 'https://github.com/SirRicharod' }
  ];
}