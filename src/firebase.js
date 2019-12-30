
import firebase from "firebase/app";
require('firebase/firestore')

const firebaseConf = {
  //...
};

firebase.initializeApp(firebaseConf);

export const db = firebase.firestore();

