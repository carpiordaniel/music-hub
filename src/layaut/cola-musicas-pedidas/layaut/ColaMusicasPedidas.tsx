import { useQuery } from "@tanstack/react-query";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { fetchData } from "../../../core/utils/utils";
import { MusicaPedida } from "../model/interface";
import "./../cola-musica-pedida.css";

export const ColaMusicasPedidas = () => {
  const URL_GET_MUSICA_PEDIDA = "http://localhost:8080/musica-pedida";
  const ICON_SIZE = 30;

  const { isLoading, error, data, refetch } = useQuery<MusicaPedida[], Error>({
    queryKey: ["musica"],
    queryFn: () => fetchData(URL_GET_MUSICA_PEDIDA),
  });
  
  // console.log(data);
  // console.log(isLoading);
  // console.log(error?.message);
  // console.log(error?.name);
  // console.log(error?.stack);

  // useEffect(() => {
  //   const intervalId = setInterval( () => refetch(), 20000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <section className="cola-musicas-pedidas">
        <p className="title-section">Reproduciendo ahora</p>
        <div>
          {isLoading && !data && !error
            ? isLoading && "Cargando..."
            : data?.map((musica) => (
                <div
                  key={musica.idMusicaPedida}
                  className={`card-music ${musica.isSonando ? "active" : ""}`}
                >
                  <img
                    className="image-musica"
                    src={musica.musica.imagenUrl}
                    alt="Image album"
                  />
                  <div className="card-music-text">
                    <p className="title">{musica.musica.nombre}</p>
                    <p className="artist">{musica.musica.autor}</p>
                  </div>
                  <div className="iconos">
                    {musica.isSonando ? (
                      <FaPauseCircle color="#fff" size={ICON_SIZE} />
                    ) : (
                      <FaPlayCircle color="#fff" size={ICON_SIZE} />
                    )}
                  </div>
                </div>
              ))}
        </div>
      </section>
    </>
  );
};
