import Nav from '../nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Franco Ortega - Software Engineer</h1>
      <Nav />
    </header>
  );
};

export default Header;
