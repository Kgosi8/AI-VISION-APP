import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    provideHttpClient()
  ],

})
export class AppModule { }

