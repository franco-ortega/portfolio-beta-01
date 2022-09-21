import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
