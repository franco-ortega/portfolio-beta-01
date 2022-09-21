import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import LayoutInner from '../components/layoutInner/LayoutInner';
import Welcome from '../components/welcome/Welcome';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const [home, setHome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [noPreference, setNoPreference] = useState(false);

  useEffect(() => {
    setNoPreference(
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    );
  }, []);

  console.log('no P', noPreference);

  const onWelcomeClick = () => {
    if (noPreference) setFadeOut(true);
    setTimeout(
      () => {
        setHome(true);
      },
      noPreference ? 1000 : 0
    );
  };

  if (!home)
    return <Welcome fadeOut={fadeOut} onWelcomeClick={onWelcomeClick} />;

  return (
    <Layout>
      <LayoutInner>
        <Component {...pageProps} />
      </LayoutInner>
    </Layout>
  );
}

export default MyApp;
