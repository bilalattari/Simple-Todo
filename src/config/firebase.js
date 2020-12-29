import React from 'react'
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDPqhmV80hQpd4iveNmGG_AYDAgOqnLspI",
    authDomain: "testing-ecf22.firebaseapp.com",
    databaseURL: "https://testing-ecf22.firebaseio.com",
    projectId: "testing-ecf22",
    storageBucket: "testing-ecf22.appspot.com",
    messagingSenderId: "814249287561",
    appId: "1:814249287561:web:baef36ffa57dcb25830b58",
    measurementId: "G-2S2BNH7XCW"
  };

  export default firebase.initializeApp(firebaseConfig)

