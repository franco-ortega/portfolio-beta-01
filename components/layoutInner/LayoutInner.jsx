import Header from '../header/Header';
import styles from './LayoutInner.module.scss';

const LayoutInner = ({ children }) => {
  return (
    <div className={styles.LayoutInner}>
      <Header />
      {children}
    </div>
  );
};

export default LayoutInner;
