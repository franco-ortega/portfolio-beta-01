import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <span>Home</span>
      <span>Projects</span>
      <span>About</span>
      <span>Resume</span>
    </nav>
  );
};

export default Nav;
