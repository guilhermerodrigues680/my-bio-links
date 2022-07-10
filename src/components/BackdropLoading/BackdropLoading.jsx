import styles from "./BackdropLoading.module.css";

function BackdropLoading({ show = true }) {
  return show && <div className={styles["backdrop-loading"]}></div>;
}

export default BackdropLoading;
