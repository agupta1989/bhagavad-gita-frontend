import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../util/analytics';
import { ProvideAuth } from '../util/auth';
import '../styles/global.scss';

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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
export default MyApp;
