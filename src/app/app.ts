import { Component, OnInit, signal } from '@angular/core';
import { Banner } from "./shared/banner/banner";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  

}
