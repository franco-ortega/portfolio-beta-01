import Head from 'next/head';
import Header from '../header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Portfolio - Beta - 01</title>
        <meta name='description' content='Practice portfolio site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
