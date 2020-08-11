importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDYkKEgtYR8nw6BaKT9-dq0VxAIdxgu-eg",
    authDomain: "notificationapp-686cf.firebaseapp.com",
    databaseURL: "https://notificationapp-686cf.firebaseio.com",
    projectId: "notificationapp-686cf",
    storageBucket: "notificationapp-686cf.appspot.com",
    messagingSenderId: "966449064918",
    appId: "1:966449064918:web:10a8afbf0b9579646d5277"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();