import React from 'react';
import '../styles/global.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../util/analytics.js';
import { ProvideAuth } from '../util/auth.js';

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <>
        <Navbar
          color="white"
          spaced
          logo="https://uploads.divjoy.com/logo.svg"
        />

        <Component {...pageProps} />

        <Footer
          color="light"
          size="normal"
          backgroundImage=""
          backgroundImageOpacity={1}
          copyright="© 2020 The Gita Initiative"
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </>
    </ProvideAuth>
  );
}

export default MyApp;
