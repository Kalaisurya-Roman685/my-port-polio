// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config

// const { REACT_APP_API_KEY } = process.env;
// const { REACT_APP_AUTH_ADMIN } = process.env;
// const { REACT_APP_PROJECT_ID } = process.env;
// const { REACT_APP_STROAGE_BUCKET } = process.env;
// const { REACT_APP_MESSAGING_SENDER_ID } = process.env;
// const { REACT_APP_APP_ID } = process.env;
// const { REACT_APP_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
    apiKey: "AIzaSyAPN_l7Gg4vD6vjeTYIN2qUJEkrF30BHoA",
    authDomain: "shopping-logins-fa457.firebaseapp.com",
    projectId: "shopping-logins-fa457",
    storageBucket: "shopping-logins-fa457.appspot.com",
    messagingSenderId: "158485149790",
    appId: "1:158485149790:web:5f2c96fd68fb28a51e5ccf",
};


// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
console.log("firebase init done");

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);
//     let notificationTitle = null;
//     let notificationOptions = {
//         body: null,
//         icon: "/logo192.png",
//     };
//     if (payload.hasOwnProperty("notification")) {
//         (notificationTitle = payload.notification.title),
//             (notificationOptions.body = payload.notification.body);
//     } else if (!Object.hasOwnProperty("notification")) {
//         (notificationTitle = "sample"),
//             (notificationOptions.body = payload.data.default);
//     } else {
//         alert("payload format not match");
//     }

//     // eslint-disable-next-line no-restricted-globals
//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });
