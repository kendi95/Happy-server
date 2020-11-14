export interface Image {
  path: string;
}

export interface Orphanage {
  id: number;
  name: string;
  latitude: number; 
  longitude: number; 
  about: string; 
  whatsapp: string;
  instructions: string; 
  opening_hours: string; 
  open_on_weekends: boolean;
  images: Image[];
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ValidationErros {
  [key: string]: string[];
}

export interface Session {
  email: string;
  password: string;
}