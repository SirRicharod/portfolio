import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public socials = [
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/riccardo-giannecchini' },
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/SirRicharod' },
    { name: 'Email', icon: 'bi-envelope-fill', url: 'mailto:riccardo.contact@proton.me' }
  ];

  triggerRainbow(event: MouseEvent) {
    const element = event.target as HTMLElement;

    if (!element.classList.contains('animate-rainbow')) {
      element.classList.add('animate-rainbow');

      setTimeout(() => {
        element.classList.remove('animate-rainbow');
      }, 3000);
    }
  }
}
