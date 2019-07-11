const CACHE_NAME = 'linernote-cache'
const urlsToCache = [
  '/',
  '/offline',
  '/*',
  '/css/styles.css',
  '/img/404.png',
  '/img/offline.png',
  '/img/placeholder.png',
  '/img/liner-logox192.png',
  '/fonts/Founders_Grotesk_Medium.woff2',
  '/fonts/Founders_Grotesk_Regular.woff2',
  '/fonts/Founders_Grotesk_Semibold.woff2'
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
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(function(cache){
        return cache.match(event.request)
          .then(function(response) {
            // Cache hit - return response
            if (response) {
              return response
            }
            return fetch(event.request)
              .catch(err => caches
                .open(CACHE_NAME)
                .then(cache => cache.match('/offline')
                  .then(res => res)
                )
              )
          })
      })
  )
})
