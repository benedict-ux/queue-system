self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// No caching — always fetch fresh (Firebase needs live connection)
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
