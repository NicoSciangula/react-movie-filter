export default function FilmCard({ film }) {
  const { title, genre, image } = film;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{genre}</p>
        </div>
      </div>
    </>
  );
}
