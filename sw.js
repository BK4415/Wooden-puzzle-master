const CACHE_NAME = 'wooden-puzzle-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/game.css',
  '/js/app.js',
  '/js/puzzle.js',
  '/js/ui.js',
  '/js/storage.js',
  '/js/swipe.js',
  '/assets/logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
