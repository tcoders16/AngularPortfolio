// import { Component } from '@angular/core';
import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


//importing the User-Profile interface
import {HeaderInfo} from '../interfaces/project-interfaces';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  info: HeaderInfo = {
    name: 'Omkumar Solanki',
    role: 'Full Stack & AI Engineer',
    motto: 'Crafting scalable apps with AI-first thinking.'
  };
}

