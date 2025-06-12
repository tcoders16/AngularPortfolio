import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';

// Interfaces
import { HeaderInfo, FooterInfo, ContactLinks, Project } from './interfaces/project-interfaces';

// Standalone components
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { About} from './about/about';
import { Projects } from './projects/projects';
import { FormsModule } from '@angular/forms';
// Shared data
import { HEADER_INFO, FOOTER_INFO, CONTACT_LINKS, PROJECTS, ABOUT_TEXT } from './shated/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    Header,
    Footer,
    Contact,
    About,
    FormsModule,
    Projects
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'thirdApp';

  darkMode: boolean = false;

  headerInfo: HeaderInfo = HEADER_INFO;
  footerData: FooterInfo = FOOTER_INFO;
  contactInfo: ContactLinks = CONTACT_LINKS;
  projects: Project[] = PROJECTS;
  aboutText: string = ABOUT_TEXT;
}