import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYkKEgtYR8nw6BaKT9-dq0VxAIdxgu-eg",
  authDomain: "notificationapp-686cf.firebaseapp.com",
  databaseURL: "https://notificationapp-686cf.firebaseio.com",
  projectId: "notificationapp-686cf",
  storageBucket: "notificationapp-686cf.appspot.com",
  messagingSenderId: "966449064918",
  appId: "1:966449064918:web:10a8afbf0b9579646d5277",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function configureNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("Token => ", currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
