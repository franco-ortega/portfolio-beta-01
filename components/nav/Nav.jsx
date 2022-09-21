import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

export default Nav;
