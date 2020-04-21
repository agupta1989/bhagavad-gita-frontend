import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { useForm } from 'react-hook-form';
import FormAlert from './FormAlert';
import FormField from './FormField';
import SectionButton from './SectionButton';
import AuthSocial from './AuthSocial';
import { useAuth } from '../util/auth';

function ReauthModal({
  onComplete, onCancel, provider, parentColor,
}) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { pass } = data;
    setPending(true);

    auth
      .signin(auth.user.email, pass)
      .then(() => onComplete())
      .catch((error) => {
        // Hide pending indicator
        setPending(false);
        // Show error alert message
        setFormAlert({
          type: 'error',
          message: error.message,
        });
      });
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Please sign in again to complete this action
          </p>
          <span className="card-header-icon">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a
              className="delete"
              ariaLabel="close"
              onClick={() => onCancel()}
            />
          </span>
        </header>
        <section className="card-content">
          {formAlert && (
            <FormAlert type={formAlert.type} message={formAlert.message} />
          )}

          {provider === 'password' && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="pass"
                type="password"
                placeholder="Password"
                error={errors.pass}
                inputRef={register({
                  required: 'Please enter your password',
                })}
              />
              <div className="field">
                <div className="control">
                  <SectionButton
                    parentColor={parentColor}
                    size="medium"
                    state={pending ? 'loading' : 'normal'}
                  >
                    Sign in
                  </SectionButton>
                </div>
              </div>
            </form>
          )}

          {provider !== 'password' && (
            <AuthSocial
              type="signin"
              buttonText="Sign in"
              showLastUsed={false}
              providers={[provider]}
              onAuth={onComplete}
              onError={(message) => {
                setFormAlert({
                  type: 'error',
                  message,
                });
              }}
            />
          )}
        </section>
      </div>
    </div>
  );
}

ReauthModal.propTypes = {
  onComplete: func.isRequired,
  onCancel: func.isRequired,
  provider: string.isRequired,
  parentColor: string.isRequired,
};

export default ReauthModal;
