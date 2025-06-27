import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
  onRefresh: (page?: number, results?: number) => Promise<void>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, onRefresh }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 my-4">
      <div className="nes-field w-full text-left">
        <label htmlFor="search-input">Search for name:</label>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            type="text"
            id="search-input"
            className="nes-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ej: Robot-42"
          />
          <button type="submit" className="nes-btn is-primary">
            Search
          </button>
          <button type="button" className="nes-btn is-warning" onClick={() => onRefresh()}>
            Reload
          </button>
        </div>
      </div>
    </form>
  );
};
