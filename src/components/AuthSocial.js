import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../util/auth';
import './AuthSocial.scss';

function AuthSocial({
  providers, onAuth, onError, showLastUsed, buttonText,
}) {
  const auth = useAuth();
  const [pending, setPending] = useState(null);
  const [lastUsed, setLastUsed] = useState(null);

  const providerDisplayNames = {
    google: 'Google',
    facebook: 'Facebook',
    twitter: 'Twitter',
    github: 'GitHub',
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        // Remember this provider was last used
        // so we can indicate for next login.
        localStorage.setItem('lastUsedAuthProvider', provider);
        onAuth(user);
      })
      .catch((error) => {
        onError(error.message);
      })
      .finally(() => {
        setPending(null);
      });
  };

  // Get value of last used auth provider
  useEffect(() => {
    if (showLastUsed) {
      const lastUsedProvider = localStorage.getItem('lastUsedAuthProvider');
      if (lastUsedProvider) {
        setLastUsed(lastUsedProvider);
      }
    }
  }, [showLastUsed]);

  return (
    <div className="buttons">
      {providers.map((provider) => (
        <button
          className={`button is-medium is-fullwidth${
            pending === provider ? ' is-loading' : ''
          }`}
          onClick={() => {
            onSigninWithProvider(provider);
          }}
          key={provider}
        >
          <div className="AuthSocial__icon icon">
            <img
              src={`https://uploads.divjoy.com/icon-${provider}.svg`}
              alt={providerDisplayNames[provider]}
            />
          </div>
          <span>
            {buttonText}
            {' '}
            with
            {providerDisplayNames[provider]}
          </span>

          {provider === lastUsed && (
            <span className="AuthSocial__tag tag is-warning">Last used</span>
          )}
        </button>
      ))}
    </div>
  );
}

AuthSocial.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  buttonText: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  showLastUsed: PropTypes.bool.isRequired,
};

export default AuthSocial;
