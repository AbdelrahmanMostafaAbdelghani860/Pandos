import styles from "../Mainheader.module.css";

function NavLink({ href, children }) {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
}

export default NavLink;
