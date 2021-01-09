import React, { useState, useEffect } from 'react'
import Router from './config/Router'
import firebase from 'firebase'
import { Provider } from 'react-redux'
import store from './Store'

function App() {

  // Initialize Firebase
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
