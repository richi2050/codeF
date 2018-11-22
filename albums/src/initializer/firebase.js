import firebase from 'firebase';


 const config = {
    apiKey: "AIzaSyA8asgYk_Hn7UGEkfaz6TqeiTuERD3aqoE",
    authDomain: "albums-react-ddc10.firebaseapp.com",
    databaseURL: "https://albums-react-ddc10.firebaseio.com",
    projectId: "albums-react-ddc10",
    storageBucket: "albums-react-ddc10.appspot.com",
    messagingSenderId: "436479607898"
  };

  firebase.initializeApp(config);
  export default firebase;
