import styles from "./Button3d.module.css";

console.debug("styles", styles);

function Button3d({ color = "red" }) {
  return <button className={styles["button-3d"]}>Button3d</button>;
}

export default Button3d;
