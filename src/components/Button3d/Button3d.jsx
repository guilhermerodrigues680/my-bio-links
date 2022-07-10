import styles from "./Button3d.module.css";

// Cores bonitas para o botão
// #7551E8
// #EC61D0
// #38E19C
// #0CAFFE
// #F33634

function Button3d({ children, href, icon, color, onClick }) {
  return (
    <a
      className={styles["button-3d"]}
      style={{ "--btn-color": color }}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <img alt="icone" src={icon} />}
      {children}
    </a>
  );
}

export default Button3d;
