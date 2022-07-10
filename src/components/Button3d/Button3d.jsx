import styles from "./Button3d.module.css";

// Cores bonitas para o botão
// #7551E8
// #EC61D0
// #38E19C
// #0CAFFE
// #F33634

function Button3d({ children, color }) {
  return (
    <button
      className={styles["button-3d"]}
      style={{ "--btn-color": color }}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button3d;
