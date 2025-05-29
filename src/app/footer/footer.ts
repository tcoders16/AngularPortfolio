import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import {Component, Input} from '@angular/core';


// Define the Tech--> interface
import {FooterInfo} from '../interfaces/project-interfaces';
@Component({
  selector: 'app-footer',
  imports: [ CommonModule, MaterialModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  @Input() footerData!: FooterInfo;
  cdate = new Date();
}
