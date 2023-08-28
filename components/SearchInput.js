import css from './SearchInput.module.css';
import { useState } from 'react';
import FetchFilms from './FetchFilms';

export default function SearchInput({ searchValue = '' }) {
  const [value, setValue] = useState(searchValue);

  return (
    <>
      <div className={css.container}></div>
      <hr className={css.hrLine} />
      <div className={css.flexWrapper}>
        <label for="searchfield">
          Поиск фильма по названию:
        </label>
        <input
          name="searchfield"
          className={css.searchField}
          type="search"
          value={value}
          placeholder="Введите название фильма..."
          onInput={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
      <hr className={css.hrLine} />

      <FetchFilms endpoint={value} />
    </>
  );
}
