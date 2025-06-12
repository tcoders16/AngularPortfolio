import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_TEXT } from '../shated/data';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  @Input() darkMode: boolean = false;

  

  aboutText: string = ABOUT_TEXT;
}