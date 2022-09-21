import NavSocialMedia from '../nav-social-media/NavSocialMedia';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <NavSocialMedia />
    </footer>
  );
};

export default Footer;
