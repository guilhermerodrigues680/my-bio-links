import { useState } from "react";
import styles from "./App.module.css";
import { Button3d, BackdropLoading } from "./components";
import { attributes } from "../cms-data/bio-links.md";

// console.debug(attributes);

function getColor(anyNumber = 0) {
  if (typeof anyNumber !== "number") {
    throw new Error("parameter is not a number");
  }
  const buttonColors = ["#7551E8", "#EC61D0", "#38E19C", "#0CAFFE", "#F33634"];
  return buttonColors[(anyNumber ?? 0) % buttonColors.length];
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { links, avatar } = attributes;

  function handleClick() {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1250);
  }

  return (
    <div className={styles["app"]}>
      <BackdropLoading show={isLoading} />

      <header>
        <img
          src={avatar.url}
          className={styles["app-logo"]}
          alt="avatar de Guilherme Rodrigues"
        />

        <p className={styles["app-header__name"]}>{avatar.name}</p>

        <ul className={styles["app-links"]}>
          {links
            .filter((link) => link.isenabled)
            .map((link, idx) => (
              <li key={`${link.name}-${link.href}`}>
                <Button3d
                  href={link.href}
                  icon={link.icon}
                  color={getColor(idx)}
                  onClick={handleClick}
                >
                  {link.name}
                </Button3d>
              </li>
            ))}
        </ul>
      </header>

      <footer>
        Um projeto de&nbsp;
        <a
          href="https://github.com/guilhermerodrigues680"
          target="_blank"
          rel="noreferrer"
        >
          guilhermerodrigues680
        </a>
      </footer>
    </div>
  );
}

export default App;
