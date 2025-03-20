import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ai-vision',
  imports: [],
  templateUrl: './ai-vision.component.html',
  styleUrl: './ai-vision.component.css'
})
export class AiVisionComponent {

  // URL for the image (this can be dynamically set)
  imageUrl: string = 'assets/brain.jpg';
  constructor(){}

  getDescription(){}
}
