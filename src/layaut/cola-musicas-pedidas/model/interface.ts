


export default interface NombreInterface {
  getNombre(): Promise<InterfaceApp>;
}
///MODELOS
export interface InterfaceApp {
  nombre: string
}
export interface Musica {
  idMusica: number;
  nombre: string;
  genero: string;
  autor: string;
  imagenUrl: string;
}

export interface MusicaPedida {
  idMusicaPedida: number;
  isSonando: boolean;
  isInterpretada: boolean;
  popularidad?: number; // Opcional si no siempre está presente
  fecha: string; // ISO 8601 date string
  musica: Musica;
}


