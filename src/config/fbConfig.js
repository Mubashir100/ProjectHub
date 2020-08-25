import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMWVfpac9tgnkIYIjkZ112zGnDlHtvoak",
    authDomain: "projecthub-4a981.firebaseapp.com",
    databaseURL: "https://projecthub-4a981.firebaseio.com",
    projectId: "projecthub-4a981",
    storageBucket: "projecthub-4a981.appspot.com",
    messagingSenderId: "34585239642",
    appId: "1:34585239642:web:d80a28f0867a51cb3db863",
    measurementId: "G-DWRWQJCJTR"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;