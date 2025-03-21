import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaudeServiceService {
  baseUrl: string="http://api.anthropic.com/v1/messages";
  apiKey: string='Your api-key';
 
  base64Image: string | undefined;  // To store the base64 string of the image

  // This method is called when the user selects an image
  changeToBase64(): void {
    const file = "assets/brain.jpg";
    
    if (file) {
      // Use FileReader to convert the image to Base64
      const reader = new FileReader();
      
      // This will be triggered once the file is read
      reader.onload = (e: any) => {
        this.base64Image = e.target.result;  // Base64 string
        console.log('Base64 Image:', this.base64Image);
      };

      // Read the image as a data URL (Base64 string)
    }
  }

  constructor() { 
    this.changeToBase64();
  }
}
