
import { useState } from 'react';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [genero, setGenero] = useState('Todos');
  const [favoritos, setFavoritos] = useState([]);
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  const videojuego = [
    {
      nombre: 'Halo: The Master Chief Collection',
      imagen: 'https://store-images.s-microsoft.com/image/apps.7277.14415742612829493.1297136a-f273-41f1-947f-59044c848c55.e5d7f9c7-c071-4b4d-a4e5-a6d243f148c8',
      genero: 'Shooter',
      Año: '2014',
      descripcion: 'Una colección de varios títulos de Halo que reúne campañas de ciencia ficción, combates contra fuerzas alienígenas y experiencias multijugador.'
    },
    {
      nombre: 'EA Sports FC 27',
      imagen: 'https://es.kotaku.com/app/uploads/2026/07/65.000-1-54.jpg',
      genero: 'Deportes',
      Año: '2026',
      descripcion: 'Un videojuego de fútbol en el que puedes competir con clubes, disputar partidos y construir tu propio equipo.'
    },
    {
      nombre: 'The Last Of Us Part I',
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png',
      genero: 'Acción',
      Año: '2022',
      descripcion: 'Una aventura de acción y supervivencia que sigue a Joel y Ellie durante un peligroso viaje en un mundo devastado por una infección.'
    },
    {
      nombre: 'Resident Evil 4 Remake',
      imagen: 'https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.webp',
      genero: 'Terror',
      Año: '2023',
      descripcion: 'Una versión renovada del clásico de terror y supervivencia en la que Leon S. Kennedy debe rescatar a la hija del presidente.'
    },
    {
      nombre: 'Dark Souls III',
      imagen: 'https://store-images.s-microsoft.com/image/apps.24212.71827372323164480.6e97c7d2-899a-404f-8660-d622a7fc9162.daea9ed5-4921-45a6-a188-637bfab7176c',
      genero: 'Rol',
      Año: '2016',
      descripcion: 'Un RPG de acción y fantasía oscura que destaca por sus combates exigentes, jefes desafiantes y un mundo lleno de secretos.'
    },
    {
      nombre: 'The Legend of Zelda: Tears of the Kingdom',
      imagen: 'https://media.vandal.net/i/1440x1080/9-2022/202292911251929_1.jpg',
      genero: 'Aventura',
      Año: '2023',
      descripcion: 'Una aventura de mundo abierto en la que Link explora Hyrule, resuelve acertijos y utiliza habilidades especiales.'
    },
    {
      nombre: 'Peak',
      imagen: 'https://i.3djuegos.com/juegos/20473/peak/fotos/ficha/peak-5972990.jpg',
      genero: 'Aventura',
      Año: '2025',
      descripcion: 'Una aventura cooperativa de escalada en la que los jugadores deben superar terrenos difíciles y colaborar para alcanzar la cima.'
    },
    {
      nombre: 'Batman Arkham City',
      imagen: 'https://m.media-amazon.com/images/M/MV5BOTA4MzY3MWYtMTFmYy00NTRiLTk4MDMtYmNlMTU0ZGFkYmM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      genero: 'Acción',
      Año: '2011',
      descripcion: 'Una aventura de acción protagonizada por Batman, quien debe enfrentarse a enemigos y descubrir una conspiración en Arkham City.'
    }
  ];

  const videojuegosFiltrados = videojuego.filter((juego) =>
    juego.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (genero === 'Todos' || juego.genero === genero) &&
    (!soloFavoritos || favoritos.includes(juego.nombre))
  );

  return (
    <main className="app">
      <header className="encabezado">
        <h1>
          Catalogo de Videojuegos
        </h1>
      </header>

      <div className="controles">
        <input
          className="campo"
          type="text"
          placeholder="Buscar videojuego..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="campo"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="Todos">Todos los géneros</option>
          <option value="Shooter">Shooter</option>
          <option value="Aventura">Aventura</option>
          <option value="Terror">Terror</option>
          <option value="Rol">Rol</option>
          <option value="Deportes">Deportes</option>
          <option value="Acción">Acción</option>
        </select>
      </div>

      <div className="resumen">
        <p className="contador">
          Videojuegos favoritos: <strong>{favoritos.length}</strong>
        </p>

        <button
          className="boton-filtro"
          onClick={() => setSoloFavoritos(!soloFavoritos)}
        >
          {soloFavoritos
            ? 'Mostrar todos los videojuegos'
            : 'Mostrar solo favoritos'}
        </button>
      </div>

      <section className="catalogo">
        {videojuegosFiltrados.length > 0 ? (
          videojuegosFiltrados.map((juego) => (
            <article
              className="tarjeta"
              key={juego.nombre}
              onClick={() => setSeleccionado(juego)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSeleccionado(juego);
                }
              }}
            >
              <img
                className="imagen-juego"
                src={juego.imagen}
                alt={juego.nombre}
              />

              <div className="contenido-tarjeta">
                <h2>{juego.nombre}</h2>

                <div className="datos-juego">
                  <span className="genero">{juego.genero}</span>
                  <span className="anio">{juego.Año}</span>
                </div>

                <button
                  className="boton-favorito"
                  onClick={(e) => {
                    e.stopPropagation();

                    if (favoritos.includes(juego.nombre)) {
                      setFavoritos(
                        favoritos.filter(
                          (nombre) => nombre !== juego.nombre
                        )
                      );
                    } else {
                      setFavoritos([...favoritos, juego.nombre]);
                    }
                  }}
                >
                  {favoritos.includes(juego.nombre)
                    ? '♥ Quitar de favoritos'
                    : '♡ Agregar a favoritos'}
                </button>
              </div>
            </article>
          ))
        ) : (
          <p className="sin-resultados">
            No se encontraron videojuegos con esos criterios.
          </p>
        )}
      </section>

      {seleccionado && (
        <div
          className="modal-overlay"
          onClick={() => setSeleccionado(null)}
        >
          <section
            className="modal-juego"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-detalle"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-cerrar"
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar detalles"
            >
              ×
            </button>

            <img
              className="modal-imagen"
              src={seleccionado.imagen}
              alt={seleccionado.nombre}
            />

            <div className="modal-contenido">
              <span className="genero">{seleccionado.genero}</span>

              <h2 id="titulo-detalle">
                {seleccionado.nombre}
              </h2>

              <p className="modal-anio">
                Año de lanzamiento: {seleccionado.Año}
              </p>

              <p className="modal-descripcion">
                {seleccionado.descripcion}
              </p>

              <button
                className="boton-filtro"
                onClick={() => setSeleccionado(null)}
              >
                Volver al catálogo
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
