import { MdClose, MdSearch } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';

import React from 'react';

interface Props {
  onChange?: (data?: string) => void;
  onSearch?: (data: string) => void;
}

export default function SearchBar({ onChange, onSearch }: Props) {
  const [active, setActive] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string>('');
  const [dirty, setDirty] = React.useState<boolean>(false);
  const history = useHistory();
  const prevParams = new URLSearchParams(useLocation().search).get('query');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (prevParams && inputRef.current) {
      setActive(true);
      setDirty(true);
      setQuery(prevParams);
      inputRef.current.focus();
    }
  }, [prevParams]);

  React.useEffect(() => {
    const params = new URLSearchParams();
    if (query && dirty) {
      params.append('query', query);
    } else {
      params.delete('query');
    }
    if (dirty) {
      history.push({ pathname: '/search', search: params.toString() }, { prevPath: location.pathname });
    }
  }, [query, history, dirty]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActive(true);

    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (inputRef?.current?.value && typeof onSearch === 'function') {
      onSearch(inputRef.current.value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    if (!target.value) {
      setDirty(false);
      setActive(false);
      setQuery('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setDirty(!!target.value);

    setQuery(target.value);

    if (typeof onChange === 'function') {
      onChange(target.value);
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      setQuery('');
      inputRef.current.focus();
      setDirty(false);
      history.push({ search: '' });
    }
  };

  return (
    <div className="flex text-white">
      <div className={`min-w-10 relative flex font-extrabold text-3xl transition-width`}>
        <button
          ref={buttonRef}
          className="absolute flex top-0 left-0 w-10 bottom-0 focus:outline-none z-10 justify-center items-center"
          onClick={handleClick}
        >
          <MdSearch />
        </button>
        <input
          ref={inputRef}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          value={query}
          placeholder="Search for movie titles"
          name="search-input"
          className={`${
            active ? 'w-96 px-10 opacity-100' : 'w-0 opacity-0'
          } bg-bgPurple bg-opacity-10 focus:outline-none focus:border-2 focus:border-white-700 transition-width transition-opacity rounded-sm text-base font-normal`}
          type="text"
        />
        {active && dirty && (
          <button
            className="flex text-2xl w-10 absolute right-0 top-0 bottom-0 focus:outline-none z-10 justify-center items-center"
            onClick={handleClear}
          >
            <MdClose />
          </button>
        )}
      </div>
    </div>
  );
}
