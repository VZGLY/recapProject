import { Component, signal } from '@angular/core';
import { Banner } from "./shared/banner/banner";

@Component({
  selector: 'app-root',
  imports: [Banner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recapProject');
}
