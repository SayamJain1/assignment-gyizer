import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h2 className={styles.brandName}>GYIZER</h2>
      <p className={styles.appName}>TODO APP</p>
    </div>
  );
}

export default Header;
