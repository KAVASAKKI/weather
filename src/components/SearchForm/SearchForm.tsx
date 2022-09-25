import React, { useState } from "react";
import styles from "./SearchForm.module.scss";

type SearchFormTypes = {
  handleSubmit: (query: string) => void;
};

export const SearchForm = ({ handleSubmit }: SearchFormTypes) => {
  const [query, setQuery] = useState("");

  const onChange = (value: string) => {
    setQuery(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      handleSubmit(query);
      setQuery("");
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type='text'
        className={styles.input}
        placeholder='Write city...'
        onChange={(e) => onChange(e.currentTarget.value)}
        value={query}
      />
      <button type='submit' className={styles.submit}>
        Find
      </button>
    </form>
  );
};
