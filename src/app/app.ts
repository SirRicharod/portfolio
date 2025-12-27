import { Component, signal } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { fadeAnimation } from './route-animations';
// import { Footer } from "./component/footer/footer";

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  imports: [RouterOutlet, Header /*,Footer*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
