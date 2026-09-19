importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyCOn2zacXgFh_X5r0y_gB1hZWmfccPKwhQ",
  authDomain: "tra-sua-meo-xam.firebaseapp.com",
  databaseURL: "https://tra-sua-meo-xam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tra-sua-meo-xam",
  storageBucket: "tra-sua-meo-xam.firebasestorage.app",
  messagingSenderId: "822227863579",
  appId: "1:822227863579:web:09f4ac451d2dd51bd250be"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'Tiệm Trà Mèo Xám', {
    body: n.body || '',
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    vibrate: [200, 100, 200]
  });
});
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type:'window' }).then(function(l){
    for (var i=0;i<l.length;i++) if (l[i].url.indexOf('111111.html')!==-1) return l[i].focus();
    return clients.openWindow('./index.html');
  }));
});