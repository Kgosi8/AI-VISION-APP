




import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaudeServiceService {
  baseUrl: string="http://api.anthropic.com/v1/messages";
 apiKey: string="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";
 
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


  constructor(private http: HttpClient) {}

  analyzeImage(imageData: File): Observable<any> {
	const formData = new FormData();
	formData.append('file', imageData);

	const headers = new HttpHeaders({
	'x-api-key': this.apiKey,
	'anthropic-version': '2023-06-01',
 });
 	return this.http.post<any>(this.baseUrl, formData, { headers });
  }
}
