import { useState } from "react";
import avatar from "./assets/images/avatar.jpeg";
import styles from "./App.module.css";
import { Button3d, BackdropLoading } from "./components";
import { attributes } from "../cms-data/bio-links.md";

console.log(attributes.links);

function getColor(anyNumber = 0) {
  if (typeof anyNumber !== "number") {
    throw new Error("parameter is not a number");
  }
  const buttonColors = ["#7551E8", "#EC61D0", "#38E19C", "#0CAFFE", "#F33634"];
  return buttonColors[(anyNumber ?? 0) % buttonColors.length];
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const links = attributes.links;

  function handleClick() {
    console.debug("click");
  }

  return (
    <div className={styles["app"]}>
      <BackdropLoading show={isLoading} />

      <header>
        <img
          src={avatar}
          className={styles["app-logo"]}
          alt="avatar de Guilherme Rodrigues"
        />

        <p className={styles["app-header__name"]}>Guilherme Rodrigues</p>

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
        <a href="https://github.com/guilhermerodrigues680">
          guilhermerodrigues680
        </a>
      </footer>
    </div>
  );
}

export default App;
