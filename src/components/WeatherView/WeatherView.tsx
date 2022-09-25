import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import styles from "./WeatherView.module.scss";

export const WeatherView = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (query: string) => {
    setQuery(query);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather</h1>

      <SearchForm handleSubmit={handleSubmit} />
    </div>
  );
};
