import css from './DisplayFilms.module.css';

export default function DisplayFilms({ films }) {
  return (
    <>
      <div className={css.gridWrapper}>
        {films.map((film) => {
          const { Title, Year, imdbID, Poster } = film;
          return (
            <>
              <div className={css.cardInfo} key={imdbID}>
                <div className={css.title}>{`${Title} (${Year})`}</div>
                <img
                  className={css.cover}
                  src={Poster}
                  alt={`Poster for the movie: "${Title} (${Year})"`}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
