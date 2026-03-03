import FilmCard from "./products/FilmCard";

export default function FilmList({
  listFilm,
  genreFunction,
  selected,
  filtered,
}) {
  return (
    <div className="my-3">
      <h1 className="text-center">Lista Film</h1>
      <div>
        <ul className="list-unstyled d-flex flex-wrap">
          {filtered.map((singleElement, index) => (
            <li key={index} className="p-3">
              <FilmCard film={singleElement} />
            </li>
          ))}
        </ul>
        <select
          className="form-select form-select-lg mb-3"
          aria-label="Large select example"
          onChange={(e) => genreFunction(e.target.value)}
          value={selected}
        >
          <option value="">Genere</option>
          {listFilm.map((singleFilm, index) => (
            <option key={index} value={singleFilm.genre}>
              {singleFilm.genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
