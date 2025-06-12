export interface HeaderInfo {
  name: string;
  role: string;
  motto: string;
}

export interface FooterInfo {
  technologies: string;
}


export interface ContactLinks {
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  important: boolean;
}