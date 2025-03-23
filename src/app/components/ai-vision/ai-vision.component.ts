
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, httpResource } from '@angular/common/http';
import { ClaudeServiceService } from '../../services/claude-service.service';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';





@Component({
  selector: 'app-ai-vision',
  imports: [NgIf],
  templateUrl: './ai-vision.component.html',
  styleUrl: './ai-vision.component.css'
})
export class AiVisionComponent {

  // URL for the image (this can be dynamically set)

	imageUrl: string = 'assets/pickImage.jpg';
  selectedImage: string | ArrayBuffer | null = null;
  description: string = '';
  selectedFile!: File;


  constructor(private claudeServiceService: ClaudeServiceService) {}

  getDescription() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput.click(); // Open file picker
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedImage = reader.result; // Preview the selected image
      };

      reader.readAsDataURL(file);
    }
  }

  onImageSelected(event: any) {
	this.selectedFile = event.target.files[0];
	}

  uploadImage() {
	if (this.selectedFile) {
		 this.claudeServiceService.analyzeImage(this.selectedFile).subscribe( (response) =>{
			this.description = response.description;
	}, (error) => {
		 console.error('Error analyzing image:', error);
												        });
													}

}}
      
      
  
