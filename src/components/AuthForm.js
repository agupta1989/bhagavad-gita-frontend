import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  func, string, number, shape,
} from 'prop-types';

import FormField from './FormField';
import SectionButton from './SectionButton';
import { useAuth } from '../util/auth';

function AuthForm({
  onAuth,
  onFormAlert,
  type,
  inputSize,
  parentColor,
  typeValues,
}) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const {
    handleSubmit, register, errors, getValues,
  } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => auth.signin(email, pass).then((user) => {
      // Call auth complete handler
      onAuth(user);
    }),
    signup: ({ email, pass }) => auth.signup(email, pass).then((user) => {
      // Call auth complete handler
      onAuth(user);
    }),
    forgotpass: ({ email }) => auth.sendPasswordResetEmail(email).then(() => {
      // Show success alert message
      onFormAlert({
        type: 'success',
        message: 'Password reset email sent',
      });
    }),
    changepass: ({ pass }) => auth.confirmPasswordReset(pass).then(() => {
      // Show success alert message
      onFormAlert({
        type: 'success',
        message: 'Your password has been changed',
      });
    }),
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[type]({
      email,
      pass,
    })
      .catch((error) => {
        // Show error alert message
        onFormAlert({
          type: 'error',
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {['signup', 'signin', 'forgotpass'].includes(type) && (
        <FormField
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email}
          inputRef={register({
            required: 'Please enter an email',
          })}
        />
      )}

      {['signup', 'signin', 'changepass'].includes(type) && (
        <FormField
          size={inputSize}
          name="pass"
          type="password"
          placeholder="Password"
          error={errors.pass}
          inputRef={register({
            required: 'Please enter a password',
          })}
        />
      )}

      {['signup', 'changepass'].includes(type) && (
        <FormField
          size={inputSize}
          name="confirmPass"
          type="password"
          placeholder="Confirm Password"
          error={errors.confirmPass}
          inputRef={register({
            required: 'Please enter your password again',
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              }
              return "This doesn't match your password";
            },
          })}
        />
      )}

      <div className="field">
        <p className="control ">
          <SectionButton
            parentColor={parentColor}
            size="medium"
            fullWidth
            state={pending ? 'loading' : 'normal'}
          >
            {typeValues.buttonText}
          </SectionButton>
        </p>
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  onAuth: func.isRequired,
  onFormAlert: func.isRequired,
  type: string.isRequired,
  inputSize: number.isRequired,
  parentColor: string.isRequired,
  typeValues: shape({}).isRequired,
};
export default AuthForm;
