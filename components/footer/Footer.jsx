import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav>
        <span>GitHub</span>
        <span> - LinkedIn</span>
        <span> - Twitter</span>
        <span> - Instagram</span>
      </nav>
    </footer>
  );
};

export default Footer;
