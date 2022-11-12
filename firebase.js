import firebase from "firebase/compat";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mZ5YOpkLzHALv7gVhkcrSKdKa3xbbJo",
  authDomain: "rn-perfume.firebaseapp.com",
  projectId: "rn-perfume",
  storageBucket: "rn-perfume.appspot.com",
  messagingSenderId: "733004942095",
  appId: "1:733004942095:web:dc0bb20faf473fd0f88c7a",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// firebase
//   .firestore()
//   .settings({
//     experimentalForceLongPolling: true,
//     timestampsInSnapshot: true,
//     merge: true,
//   });

export default firebase;
