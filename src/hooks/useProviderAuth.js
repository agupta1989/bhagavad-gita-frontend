import { useState, useEffect } from 'react';
import { createUser } from '../util/db';
import { formatUser, getFromQueryString } from '../util/util';
import { providers } from '../constants';
import firebase from '../util/firebase';

// Provider hook that creates auth object and handles state
export default function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Handle a new user object (updates db and sets user state)
  const handleUser = (rawUser) => {
    if (rawUser) {
      // Get user object in format expected by front-end
      const formattedUser = formatUser(rawUser);

      // Add or update user in database
      createUser(formattedUser.uid, { email: formattedUser.email });

      setUser(formattedUser);
      return formattedUser;
    }
    setUser(false);
    return false;
  };

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    // Unsubscribe on cleanup
    return () => unsubscribe();
  }, []);

  const signup = (email, password) => firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => handleUser(response.user));

  const signin = (email, password) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => handleUser(response.user));

  const signinWithProvider = (providerName) => {
    const { ProviderMethod, parameters } = providers.find(
      (p) => p.name === providerName,
    );

    const provider = new ProviderMethod();
    if (parameters) {
      provider.setCustomParameters(parameters);
    }

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => handleUser(response.user));
  };

  const signout = () => firebase
    .auth()
    .signOut()
    .then(() => handleUser(false));

  const sendPasswordResetEmail = (email) => firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => true);

  const confirmPasswordReset = (password, code) => {
    // Get code from query string object
    const resetCode = code || getFromQueryString('oobCode');

    return firebase
      .auth()
      .confirmPasswordReset(resetCode, password)
      .then(() => true);
  };

  const updateEmail = (email) => firebase
    .auth()
    .currentUser.updateEmail(email)
    .then(() => {
      handleUser(firebase.auth().currentUser);
    });

  const updatePassword = (password) => firebase.auth().currentUser.updatePassword(password);

  return {
    user,
    signup,
    signin,
    signinWithProvider,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    updateEmail,
    updatePassword,
  };
}
