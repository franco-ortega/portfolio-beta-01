import styles from './NavSocialMedia.module.scss';

const NavSocialMedia = () => {
  return (
    <nav className={styles.NavSocialMedia}>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </nav>
  );
};

export default NavSocialMedia;
