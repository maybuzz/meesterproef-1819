const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
  '/',
  '/books',
  '/courses',
  '/offline',
  '/css/index.css',
  '/data/bookData.json',
  '/data/courseData.json'
]

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened caching')
        console.log(cache);
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  console.log("hoi");
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})
