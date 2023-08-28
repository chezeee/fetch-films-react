import DisplayFilms from './DisplayFilms';
import { useState, useEffect } from 'react';
import css from './Fetchfilms.module.css';

export default function FetchFilms({ endpoint }) {
  const API_KEY = 'f01e3b8c',
    API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`,
    [films, setFilms] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await fetch(API_URL + endpoint);

        if (!response.ok) {
          throw new Error('Status ' + response.status);
        }

        setFilms((await response.json()).Search);
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
    fetchFilms();
  }, [endpoint]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (films) {
    return <DisplayFilms films={films} />;
  }

  return (
    <div className={css.noResults}>Нет результатов</div>
  );
}
