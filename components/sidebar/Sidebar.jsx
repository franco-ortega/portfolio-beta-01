import Header from '../header/Header';
import Nav from '../nav/Nav';
import NavSocialMedia from '../nav-social-media/NavSocialMedia';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Header />
      <Nav />
      <NavSocialMedia />
    </div>
  );
};

export default Sidebar;
