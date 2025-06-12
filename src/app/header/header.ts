import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderInfo } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  @Input() darkMode: boolean = false;

  info: HeaderInfo = {
    name: 'Omkumar Solanki',
    role: 'Full Stack & AI Engineer',
    motto: 'Crafting scalable apps with AI-first thinking.'
  };
}