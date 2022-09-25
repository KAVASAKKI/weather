import React from "react";
import { WeatherView } from "./components/WeatherView/WeatherView";
import styles from "./App.module.scss";

export const App = () => (
  <div className={styles.container}>
    <WeatherView />
  </div>
);
