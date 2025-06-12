import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-ui.module';
import { Project } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  @Input() projects: Project[] = [];
  @Input() darkMode: boolean = false;
}