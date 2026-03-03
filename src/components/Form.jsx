export default function Form({ inputChange, val, pushFilm }) {
  const { filmTitle, filmGenre, filmImage } = val;
  return (
    <>
      <form onSubmit={pushFilm}>
        <div>
          <label htmlFor="title" className="form-label">
            Titolo Film
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="filmTitle"
            value={filmTitle}
            onChange={inputChange}
          />
        </div>
        <div>
          <label htmlFor="genre" className="form-label">
            Genere del Film
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="filmGenre"
            value={filmGenre}
            onChange={inputChange}
          />
        </div>
        <div>
          <label htmlFor="img" className="form-label">
            Copertina
          </label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="filmImage"
            value={filmImage}
            onChange={inputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Inserisci
        </button>
      </form>
    </>
  );
}
