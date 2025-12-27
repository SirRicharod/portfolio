import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error404',
  imports: [RouterLink],
  templateUrl: './error404.html',
  styleUrl: './error404.css',
})
export class Error404 {
  // Our list of randomized game-themed messages
  messages: string[] = [
    "You fell through the map.",
    "Out of bounds! Returning to play area.",
    "You've wandered into an unrendered zone.",
    "Level not found. Did you use a noclip cheat?",
    "Your princess is in another castle.",
    "You've discovered a secret debug room!",
    "Achievement unlocked: Lost Explorer.",
    "This area is locked. Please purchase the DLC.",
    "Fast travel unavailable from this location.",
    "Game over! Insert coin to continue.",
    "Server disconnected. Return to lobby?",
    "You've entered the void. Time to respawn.",
    "Missing texture. Everything is purple now.",
    "Checkpoint not found. Progress may be lost.",
    "You've clipped through reality itself."
  ];

  activeMessage: string = "";
  timeLeft = signal<number>(10);

  constructor(private router: Router) { }

  ngOnInit() {
    // Pick a random message from the array
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    this.activeMessage = this.messages[randomIndex];

    const timer = setInterval(() => {
      this.timeLeft.update(value => value - 1);
      if (this.timeLeft() <= 0) {
        clearInterval(timer);
        this.router.navigate(['/']);
      }
    }, 1000);
  }
}
