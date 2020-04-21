import React, { useState } from 'react';
import {
  func, string, arrayOf, shape,
} from 'prop-types';

import { useRouter } from 'next/router';
import FormAlert from './FormAlert';
import AuthForm from './AuthForm';
import AuthSocial from './AuthSocial';
import AuthFooter from './AuthFooter';
import './Auth.scss';

function Auth({
  afterAuthPath, type, typeValues, providers, parentColor,
}) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = () => {
    router.push(afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <AuthForm
        type={type}
        typeValues={typeValues}
        parentColor={parentColor}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {['signup', 'signin'].includes(type) && (
        <>
          {providers && providers.length && (
            <>
              <div className="Auth__social-divider has-text-centered is-size-7">
                OR
              </div>
              <AuthSocial
                type={type}
                buttonText={typeValues.buttonText}
                showLastUsed
                providers={providers}
                onAuth={handleAuth}
                onError={(message) => {
                  handleFormAlert({
                    type: 'error',
                    message,
                  });
                }}
              />
            </>
          )}

          <AuthFooter type={type} typeValues={typeValues} />
        </>
      )}
    </>
  );
}

Auth.propTypes = {
  afterAuthPath: func.isRequired,
  type: string.isRequired,
  typeValues: shape({}).isRequired,
  providers: arrayOf(shape({})).isRequired,
  parentColor: string.isRequired,
};

export default Auth;
