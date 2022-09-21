import Nav from '../nav/Nav';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <h1>Franco Ortega</h1>
      <h2>Software Engineer</h2>
      <Nav />
    </div>
  );
};

export default Sidebar;
