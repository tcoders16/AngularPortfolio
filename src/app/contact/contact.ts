import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLinks } from '../interfaces/project-interfaces';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  @Input() links!: ContactLinks;
  @Input() darkMode: boolean = false;
}