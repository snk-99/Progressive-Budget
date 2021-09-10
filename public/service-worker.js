// const FILES_TO_CACHE = [
//   "/",
//   "/index.html",
//   "/assets/css/style.css",
//   "/assets/js/db.js",
//   "/assets/js/index.js",
//   "/assets/icons/icon-192x192.png",
//   "/assets/icons/icon-512x512.png",
//   "/manifest.json",
//   "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
//   "https://cdn.jsdelivr.net/npm/chart.js@2.8.0",
// ];

// const CACHE_NAME = "static-cache";
// const DATA_CACHE_NAME = "data-cache";

// // install
// self.addEventListener("install", function (evt) {
//   evt.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Cache successfully!");
//       cache.addAll(FILES_TO_CACHE);
//     })
//   );

//   self.skipWaiting();
// });

// self.addEventListener("activate", function (evt) {
//   evt.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(
//         keyList.map((key) => {
//           if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );

//   self.clients.claim();
// });

// // fetch
// self.addEventListener("fetch", function (evt) {
//   // cache successful requests to the API
//   if (evt.request.url.includes("/api/")) {
//     evt.respondWith(
//       caches.open(DATA_CACHE_NAME).then((cache) => {
//         return fetch(evt.request)
//           .then((response) => {
//             // If the response was good, clone it and store it in the cache.
//             if (response.status === 200) {
//               cache.put(evt.request.url, response.clone());
//             }

//             return response;
//           })
//           .catch((err) => {
//             // Network request failed, try to get it from the cache.
//             return cache.match(evt.request);
//           });
//       })
//     );

//     return;
//   }

//   // if the request is not for the API, serve static assets using "offline-first" approach.
//   evt.respondWith(
//     caches.open(CACHE_NAME).then((cache) => {
//       return caches.match(evt.request).then(function (response) {
//         return response || fetch(evt.request);
//       });
//     })
//   );
// });
