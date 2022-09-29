import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import LayoutInner from '../components/layoutInner/LayoutInner';
import Welcome from '../components/welcome/Welcome';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const [landing, setLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [noPreference, setNoPreference] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setNoPreference(
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    );

    if (router.pathname !== '/') setLanding(false);
  }, [router.pathname]);

  const onWelcomeClick = () => {
    if (noPreference) setFadeOut(true);
    setTimeout(
      () => {
        setLanding(false);
      },
      noPreference ? 1000 : 0
    );
  };

  if (landing)
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
