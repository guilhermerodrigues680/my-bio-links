import { useState } from "react";
import avatar from "./assets/images/avatar.jpeg";
import styles from "./App.module.css";
import { Button3d } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles["app"]}>
      <header>
        <img
          src={avatar}
          className={styles["app-logo"]}
          alt="avatar de Guilherme Rodrigues"
        />

        <p className={styles["app-header__name"]}>Guilherme Rodrigues</p>

        <ul className={styles["app-links"]}>
          <li>
            <Button3d color="#7551E8">Botao 1</Button3d>
          </li>
          <li>
            <Button3d color="#EC61D0">Botao 2</Button3d>
          </li>
          <li>
            <Button3d color="#38E19C">Botao 3</Button3d>
          </li>
          <li>
            <Button3d color="#0CAFFE">Botao 4</Button3d>
          </li>
          <li>
            <Button3d color="#F33634">Botao 5</Button3d>
          </li>
        </ul>
      </header>

      <footer>
        Um projeto de&nbsp;
        <a href="https://github.com/guilhermerodrigues680">
          guilhermerodrigues680
        </a>
      </footer>
    </div>
  );
}

export default App;
