import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-ui.module';
import { FooterInfo } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer{
  @Input() footerData!: FooterInfo;
  @Input() darkMode: boolean = false;

  cdate = new Date();
}