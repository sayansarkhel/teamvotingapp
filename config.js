   import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyCT051TMgqcgs33noV9Mhlw69pZJTDpwEI",
  authDomain: "project-59-2751a.firebaseapp.com",
  databaseURL: "https://project-59-2751a-default-rtdb.firebaseio.com",
  projectId: "project-59-2751a",
  storageBucket: "project-59-2751a.appspot.com",
  messagingSenderId: "25217228379",
  appId: "1:25217228379:web:311e09d3c9edec3e9ea97e",
  measurementId: "G-TQ10LLV0XX"
};



    
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase.database();