import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhT94HYFpiUV-w70rftfzLgrLY36bT-5M",
  authDomain: "be-novel.firebaseapp.com",
  projectId: "be-novel",
  storageBucket: "be-novel.appspot.com",
  messagingSenderId: "353401225618",
  appId: "1:353401225618:web:ed3b9dc95db2a21df4014b",
  measurementId: "G-GEZK8C8T35"
};

firebase.initializeApp(firebaseConfig);


// export const database = firebase.database();
// export const { auth } = firebase;
// export const storage = firebase.storage();

// const provider = new auth.GoogleAuthProvider();

// export function login() {
//   return auth().signInWithPopup(provider).then(async (result) => {
//     const { displayName, email, photoURL, uid } = result.user;
//     const authUser = { displayName, email, photoURL, uid };
//     return authUser;
//   })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const { email } = error;
//       const { credential } = error;
//       console.log(errorCode, errorMessage, email, credential);
//       throw new Error();
//     });
// }
