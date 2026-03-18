// Sparrow Service Worker
const CACHE = 'sparrow-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// Handle share target — when a URL is shared to Sparrow,
// the browser opens the app with ?url=... params.
// The app's checkSharedUrl() function handles those params.
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
