import { CiSearch } from "react-icons/ci";

export const MasPedidas = () => {
  const ICON_SIZE = 30;
  const URL_IMG =
    "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1616967290/project-covers/001/154/725/1154725-original.?1616967290";

  return (
    <>
      <main>
        <section>
          <div className="buscador">
            <input
              className="input-buscador"
              type="text"
              placeholder="Buscar..."
            />
            <div className="icono-buscador">
              <CiSearch size={ICON_SIZE}/>
            </div>
          </div>
        </section>

        <section className="cola-musicas-pedidas">
          <p className="title-section">Más pedidas</p>
          <div className="card-music-mas-pedida-container">
            <div className="card-music-mas-pedida">
              <img
                className="image-musica-mas-pedida"
                src={URL_IMG}
                alt="Image album"
              />
              <div className="card-music-text-mas-pedida">
                <p className="title">Every You Know</p>
                <p className="artist">35M</p>
              </div>
            </div>
            <div className="card-music-mas-pedida">
              <img
                className="image-musica-mas-pedida"
                src={URL_IMG}
                alt="Image album"
              />
              <div className="card-music-text-mas-pedida">
                <p className="title">Every You Know</p>
                <p className="artist">35M</p>
              </div>
            </div>
            <div className="card-music-mas-pedida">
              <img
                className="image-musica-mas-pedida"
                src={URL_IMG}
                alt="Image album"
              />
              <div className="card-music-text-mas-pedida">
                <p className="title">Every You Know</p>
                <p className="artist">35M</p>
              </div>
            </div>
            <div className="card-music-mas-pedida">
              <img
                className="image-musica-mas-pedida"
                src={URL_IMG}
                alt="Image album"
              />
              <div className="card-music-text-mas-pedida">
                <p className="title">Every You Know</p>
                <p className="artist">35M</p>
              </div>
            </div>
            <div className="card-music-mas-pedida">
              <img
                className="image-musica-mas-pedida"
                src={URL_IMG}
                alt="Image album"
              />
              <div className="card-music-text-mas-pedida">
                <p className="title">Every You Know</p>
                <p className="artist">35M</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
