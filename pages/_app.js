import Layout from '../components/layout/Layout';
import LayoutInner from '../components/layoutInner/LayoutInner';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <LayoutInner>
        <Component {...pageProps} />
      </LayoutInner>
    </Layout>
  );
}

export default MyApp;
