import queryString from 'query-string';
import firebase from './firebase';
import { providers } from '../constants';

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

export function apiRequest(path, method = 'GET', data) {
  return firebase
    .auth()
    .currentUser.getIdToken()
    .then((accessToken) => fetch(`/api/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: data ? JSON.stringify(data) : undefined,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'error') {
          // Automatically signout user if accessToken is no longer valid
          if (response.code === 'auth/invalid-user-token') {
            firebase.auth().signOut();
          }

          throw new CustomError(response.code, response.message);
        } else {
          return response.data;
        }
      }));
}

// Format user object
// If there are extra fields you want from the original user
// object then you'd add those here.
export function formatUser(user) {
  return {
    uid: user.uid,
    email: user.email,
    // Create an array containing the user's providers (password, google, etc).
    providers: user.providerData.map(
      ({ providerId }) => providers.find((p) => p.id === providerId).name,
    ),
  };
}

export function getFromQueryString(key) {
  return queryString.parse(window.location.search)[key];
}
