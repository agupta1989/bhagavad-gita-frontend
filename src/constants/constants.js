import firebase from '../util/firebase';

export const providers = [
  {
    id: 'password',
    name: 'password',
  },
  {
    id: 'google.com',
    name: 'google',
    ProviderMethod: firebase.auth.GoogleAuthProvider,
  },
  {
    id: 'facebook.com',
    name: 'facebook',
    ProviderMethod: firebase.auth.FacebookAuthProvider,
    parameters: {
      // Tell fb to show popup size UI instead of full website
      display: 'popup',
    },
  },
  {
    id: 'twitter.com',
    name: 'twitter',
    ProviderMethod: firebase.auth.TwitterAuthProvider,
  },
  {
    id: 'github.com',
    name: 'github',
    ProviderMethod: firebase.auth.GithubAuthProvider,
  },
];
