import { Component, Input } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { CommonModule } from '@angular/common';


import { Project } from '../interfaces/project-interfaces';
import { MatCard, MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  @Input() project1!: Project;
  @Input() project2!: Project;
  @Input() project3!: Project;
  @Input() project4!: Project;
  @Input() project5!: Project;


}
