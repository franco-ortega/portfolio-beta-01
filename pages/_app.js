import { useState } from 'react';
import Layout from '../components/layout/Layout';
import LayoutInner from '../components/layoutInner/LayoutInner';
import Welcome from '../components/welcome/Welcome';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [home, setHome] = useState(false);

  const onWelcomeClick = () => {
    setHome(true);
  };

  if (!home) return <Welcome onWelcomeClick={onWelcomeClick} />;

  return (
    <Layout>
      <LayoutInner>
        <Component {...pageProps} />
      </LayoutInner>
    </Layout>
  );
}

export default MyApp;
