import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import "./../cola-musica-pedida.css";
export const ColaMusicasPedidas = () => {
  const URL_IMG =
    "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1616967290/project-covers/001/154/725/1154725-original.?1616967290";
  return (
    <>
      <section>
        <p>COLA DE MUSICAS PEDIDAS</p>
        <div>
          <div className="card-music">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPlayCircle color="#fff" size={40} />
            </div>
          </div>
          <div className="card-music active">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPauseCircle color="#fff" size={40} />
            </div>
          </div>
          <div className="card-music">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPlayCircle color="#fff" size={40} />
            </div>
          </div>
          <div className="card-music">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPlayCircle color="#fff" size={40} />
            </div>
          </div>
          <div className="card-music">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPlayCircle color="#fff" size={40} />
            </div>
          </div>
          <div className="card-music">
            <img className="image-musica" src={URL_IMG} alt="Image album" />
            <div className="card-music-text">
              <p className="title">Every You Know</p>
              <p className="artist">Play God</p>
            </div>
            <div className="iconos">
              <FaPlayCircle color="#fff" size={40} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
