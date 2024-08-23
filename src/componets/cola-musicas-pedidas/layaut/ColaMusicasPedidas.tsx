import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import "./../cola-musica-pedida.css";
import { useEffect, useState } from "react";

// Definición de la interfaz para la música
interface Musica {
  idMusica: number;
  nombre: string;
  genero: string;
  autor: string;
  imagenUrl: string;
}

// Definición de la interfaz para la música pedida
interface MusicaPedida {
  idMusicaPedida: number;
  isSonando: boolean;
  isInterpretada: boolean;
  popularidad?: number; // Opcional si no siempre está presente
  fecha: string; // ISO 8601 date string
  musica: Musica;
}


export const ColaMusicasPedidas = () => {
  const ICON_SIZE = 30;
  const URL_IMG =
    "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1616967290/project-covers/001/154/725/1154725-original.?1616967290";

    const URL_GET_MUSICA_PEDIDA = "http://localhost:8080/musica-pedida";
    
    const [musicaPedida, setMusicaPedida] = useState<MusicaPedida[]>([]);
    useEffect(() => {
      fetch(URL_GET_MUSICA_PEDIDA)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setMusicaPedida(data);
        })
        .catch((error) => console.log('There has been a problem with your fetch operation:', error));
    }, []);


    return (
    <>
      <section className="cola-musicas-pedidas">
        <p className="title-section">Reproduciendo ahora</p>
        <div>
          {musicaPedida.map((musica) => (
            <div className= {`card-music ${musica.isSonando ? 'active' : ''}` }>
              <img className="image-musica" src={musica.musica.imagenUrl} alt="Image album" />
              <div className="card-music-text">
                <p className="title">{musica.musica.nombre}</p>
                <p className="artist">{musica.musica.autor}</p>
              </div>
              <div className="iconos">
                {musica.isSonando ? <FaPauseCircle color="#fff" size={ICON_SIZE} /> : <FaPlayCircle color="#fff" size={ICON_SIZE} />}
              </div>
            </div>
          ))}
         
          
        </div>
      </section>
    </>
  );
};
