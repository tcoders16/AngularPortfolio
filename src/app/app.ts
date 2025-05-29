import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './modules/material-ui.module';
import {CommonModule} from '@angular/common';

import {FooterInfo} from "./interfaces/project-interfaces"


import { Project } from './interfaces/project-interfaces';
// importing components
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Contact } from './contact/contact';

import { About } from './about/about';


//interface
import { ContactLinks } from './interfaces/project-interfaces';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, MaterialModule,Footer, Header, CommonModule, About, Contact, Projects], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'thirdApp';
  
    contactInfo: ContactLinks = {
    instagram: 'https://www.instagram.com/kirat_ins/',
    linkedin: 'https://www.linkedin.com/in/omkumar-solanki-atluxuarywxtchbusinessmandeveloper2/',
    youtube: 'https://youtube.com/@omkumar'
  };

  footerData: FooterInfo = {
    technologies: 'Angular, TypeScript, HTML, CSS, Angular Material'
  };
    project1: Project = {
    title: 'Lost & Found AI',
    subtitle: 'Swift + Firebase',
    image: 'assets/images/project1.webp'
  };
  project2: Project = {
    title: 'Crypto Wallet',
    subtitle: 'React + Tailwind',
    image: 'assets/images/project2.png'
  };
  project3: Project = {
    title: 'RAG Chatbot',
    subtitle: 'Node + Pinecone',
    image: 'assets/images/project3.png'
  };
  project4: Project = {
    title: 'Matrix Portfolio',
    subtitle: 'React + Vite',
    image: 'assets/images/project4.png'
  };
  project5: Project = {
    title: 'GitHub CLI',
    subtitle: 'Node + GPT-4o',
    image: 'assets/images/project5.png'
  };
  }
