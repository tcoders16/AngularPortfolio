import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLinks } from '../interfaces/project-interfaces';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  @Input() links!: ContactLinks;
}
