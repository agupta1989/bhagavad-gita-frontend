/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { string, number } from 'prop-types';

import Link from 'next/link';
import Section from './Section';
import './Footer.scss';

function Footer({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  copyright,
  logo,
}) {
  return (
    <Section
      color={color}
      size={size}
      backgroundImage={backgroundImage}
      backgroundImageOpacity={backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link href="/">
            <a>
              <img src={logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="links right">
          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/faq">
            <a>FAQ</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div className="social right">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">{copyright}</div>
      </div>
    </Section>
  );
}

Footer.propTypes = {
  color: string.isRequired,
  logo: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundImageOpacity: number.isRequired,
  copyright: string.isRequired,
  size: number.isRequired,
};

export default Footer;
