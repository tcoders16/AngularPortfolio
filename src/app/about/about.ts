//Common Module added for using ngIf and ngFor
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';


//Added component Material Card Content and Material Card both added!!!
// import { MatCard, MatCardContent } from '@angular/material/card';


@Component({
  selector: 'app-about',
  //added compo
  imports: [ CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

   aboutText: string = `
    I’m Omkumar Solanki, a passionate Full Stack & AI developer. I enjoy building 
    scalable and impactful applications that blend great UI with powerful backend and AI logic. 
    From SwiftUI apps to Web3 wallets, I bring ideas to life with clean code and smart design.
  `;

}
