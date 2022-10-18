import Head from 'next/head';
import Footer from '../footer/Footer';
import styles from './Layout.module.scss';
import Sidebar from '../sidebar/Sidebar';
import TestNav from '../test/TestNav';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Portfolio - Beta - 01</title>
        <meta name='description' content='Practice portfolio site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TestNav />
      {/* <Sidebar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
