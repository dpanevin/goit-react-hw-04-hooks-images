import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  function onChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите поисковый запрос.');
      return;
    }

    onSubmit(query);
    setQuery('');
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Поиск изображений и фото"
          onChange={onChange}
          value={query}
        />
      </form>
      <Toaster />
    </header>
  );
}
