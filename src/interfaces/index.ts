export interface Image {
  path: string;
}

export interface Orphanage {
  id: string;
  name: string;
  latitude: number; 
  longitude: number; 
  about: string; 
  whatsapp: string;
  telephone: string;
  instructions: string; 
  opening_hours: string; 
  open_on_weekends: boolean;
  status: string;
  images: Image[];
}

export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface ValidationErros {
  [key: string]: string[];
}

export interface Session {
  email: string;
  password: string;
}

export interface RecoveryEmail {
  email: string;
}