import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
     // Only declare LoginComponent here
  ],
  imports: [
    FormsModule, // Add FormsModule to the imports array
    HttpClient
  ],
  providers: [],
  // No bootstrap property here
})
export class AppModule { }
