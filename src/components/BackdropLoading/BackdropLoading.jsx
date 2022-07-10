import styles from "./BackdropLoading.module.css";

console.debug(styles);

function BackdropLoading({ show = true }) {
  console.debug("show", show);
  return show && <div className={styles["backdrop-loading"]}></div>;
}

export default BackdropLoading;
