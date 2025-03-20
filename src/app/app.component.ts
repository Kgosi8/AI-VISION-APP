import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiVisionComponent } from "./components/ai-vision/ai-vision.component";

@Component({
  selector: 'app-root',
  imports:[AiVisionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai-vision-app';
}
