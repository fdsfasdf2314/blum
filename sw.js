const CACHE_NAME = 'my-site-cache-v1';
const OFFLINE_URLS = [
  '/',
  '/index.html',
  '/1/',
  '/2/',
  '/3/',
  '/4/',
  '/5/',
];

// Cache all files in folders 1-5 (recursive approach)
const FOLDER_PATHS = ['1', '2', '3', '4', '5'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await cache.addAll(OFFLINE
