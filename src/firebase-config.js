/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyCPw2ZhHKuSqazYCqmAdFxcLqI4Lgdsglg",
  authDomain: "friendlychat-5d0d5.firebaseapp.com",
  projectId: "friendlychat-5d0d5",
  storageBucket: "friendlychat-5d0d5.appspot.com",
  messagingSenderId: "878223679838",
  appId: "1:878223679838:web:ecf455941128d7e01e6fcf"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}