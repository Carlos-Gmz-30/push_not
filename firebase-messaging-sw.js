// Importamos las versiones compat de Firebase para SW
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCE-MgGficwRczAS5jQ8LV8EvVjEIh1kEE",
  authDomain: "pwa-10b-i20223tn066.firebaseapp.com",
  projectId: "pwa-10b-i20223tn066",
  storageBucket: "pwa-10b-i20223tn066.firebasestorage.app",
  messagingSenderId: "395654844077",
  appId: "1:395654844077:web:2e357d51be234239870024",
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./icon-192.png",
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
