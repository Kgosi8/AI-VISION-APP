import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, httpResource } from '@angular/common/http';
import { ClaudeServiceService } from '../../services/claude-service.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-ai-vision',
  imports: [],
  templateUrl: './ai-vision.component.html',
  styleUrl: './ai-vision.component.css'
})
export class AiVisionComponent {

  // URL for the image (this can be dynamically set)
  imageUrl: string = 'assets/brain.jpg';
  // response!:Observable<any>;
  // constructor(private claudeService:ClaudeServiceService,private http:HttpClient){}
  

  getDescription()
  {
  //   const headers=new HttpHeaders({
  //     'Content-Type':'applicatin/json',
  //     'x-api-key':this.claudeService.apiKey,
  //     'anthropic-version':'2023-06-01'
  //   });
  //   this.response=this.http.post(this.claudeService.baseUrl,JSON.stringify({
  //     'model':'claude-3-opus-20240229',
  //     'max-token':50,
  //     'messages':{
  //       'role':'user',
  //       'content':[
  //         {
  //           'type':'image',
  //           'source':{
  //             'type':'base64',
  //             'media-type':'image/jpeg',
  //             'data':this.claudeService.base64Image,
  //           }
  //         },{
  //           'type':'text',
  //           'text':'please describe what you see in this image',
  //         }
          

  //       ]
  //     }
  //   }),
  //   {
      
  //   }
  // )
  // console.log(this.response);

  // return this.response;
  }
}
      
      
  
