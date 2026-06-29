// Outpost service worker — makes the game playable fully offline once
// installed. The whole app is self-contained (no fonts/CDN/API calls at
// runtime, confirmed when this was added), so a simple cache-first
// strategy for a fixed list of files is all that's needed here: there's
// nothing dynamic to fetch, and nothing that should ever go stale in a
// way that matters more than "always available."
//
// CACHE_VERSION is the only thing that needs bumping when any cached
// file changes — changing it creates a new cache name, so the install
// step below re-fetches everything fresh rather than serving whatever
// an old visitor's browser already has stored. The old cache is then
// cleaned up in the activate step so it doesn't just pile up forever.
const CACHE_VERSION = "outpost-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./game.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  // Activate this version immediately rather than waiting for every open
  // tab to close first — there's no risk of two incompatible versions
  // fighting over shared server-side state here, since there's no server
  // at all, so the usual reason to wait doesn't apply.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only handle GET — anything else (there isn't anything else here,
  // but being explicit costs nothing) falls through to normal network
  // handling untouched.
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      // Not in the cache (shouldn't normally happen once installed,
      // since the whole app shell is precached above) — try the
      // network as a fallback, and cache whatever comes back so a
      // transient miss doesn't keep missing forever.
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) return response;
          const responseClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          // Truly offline and not cached — only realistic case is a
          // request for something outside the app shell (the manifest
          // icon files, the page itself); nothing else exists to fetch.
          return caches.match("./index.html");
        });
    })
  );
});
