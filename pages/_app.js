import { useState } from 'react';
import Layout from '../components/layout/Layout';
import LayoutInner from '../components/layoutInner/LayoutInner';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [home, setHome] = useState(false);

  const onWelcomeClick = () => {
    setHome(true);
  };

  if (!home)
    return (
      <div>
        <h1>Franco Ortega</h1>
        <h2>Software Engineer</h2>
        <button onClick={onWelcomeClick}>Welcome</button>
      </div>
    );

  return (
    <Layout>
      <LayoutInner>
        <Component {...pageProps} />
      </LayoutInner>
    </Layout>
  );
}

export default MyApp;
