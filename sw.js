const CACHE_NAME = 'slider-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Install and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve assets from cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});