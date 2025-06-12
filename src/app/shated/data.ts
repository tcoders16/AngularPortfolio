import { HeaderInfo, FooterInfo, ContactLinks, Project } from '../interfaces/project-interfaces';

export const HEADER_INFO: HeaderInfo = {
  name: 'Omkumar Solanki',
  role: 'Full Stack Developer',
  motto: 'Code. Create. Inspire.'
};

export const FOOTER_INFO: FooterInfo = {
  technologies: 'Angular, TypeScript, Firebase, ML Kit'
};

export const CONTACT_LINKS: ContactLinks = {
  instagram: 'https://instagram.com/om',
  linkedin: 'https://linkedin.com/in/om',
  youtube: 'https://youtube.com/@omchannel'
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lost & Found Transit App',
    subtitle: 'AI + Firebase based lost item tracker',
    image: 'assets/images/project1.webp',
    important: true
  },
  {
    id: 2,
    title: 'Crypto Wallet Generator',
    subtitle: 'Web3-based wallet creation tool',
    image: 'assets/images/project2.png',
    important: false
  },
  {
    id: 3,
    title: 'Scripture Chatbot',
    subtitle: 'RAG chatbot using Pinecone + GPT',
    image: 'assets/images/project3.png',
    important: true
  }
];

export const ABOUT_TEXT: string = `
  I’m Omkumar Solanki, a passionate Full Stack & AI developer. I enjoy building 
  scalable and impactful applications that blend great UI with powerful backend and AI logic. 
  From SwiftUI apps to Web3 wallets, I bring ideas to life with clean code and smart design.
`;