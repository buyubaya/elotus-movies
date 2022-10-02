import classNames from 'classnames';
import React, { useRef } from 'react';
import s from './SearchBar.module.scss';

function SearchBar({
  onSearch: _onSearch,
  placeholder,
  className,
}: {
  className?: string;
  onSearch?: (value: string) => void;
  placeholder?: string;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSearch = (newValue: string) => {
    const trimmedValue = newValue.trim();
    if (trimmedValue && typeof _onSearch === 'function') {
      _onSearch(trimmedValue);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13) {
      onSearch(inputRef.current?.value || '');
    }
  };

  const handleClickSearch = () => {
    onSearch(inputRef.current?.value || '');
  };

  return (
    <div className={classNames(s.container, className)}>
      <div className={s.inputWrapper}>
        <input ref={inputRef} type="text" className={s.input} placeholder={placeholder} onKeyDown={handleKeyDown} />
        <div className={s.searchlabel} onClick={handleClickSearch}>
          Search
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
