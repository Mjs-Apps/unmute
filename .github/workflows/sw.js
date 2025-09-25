const CACHE_NAME = "unmute-v1";
const CORE_ASSETS = ["/","/offline.html","/manifest.json","/unmute_favicon.ico","/unmute_icon_192x192.png","/unmute_icon_512x512.png","/logo.svg","/og.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME ? caches.delete(k) : undefined)))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { caches.open(CACHE_NAME).then(c=>c.put(req, res.clone())); return res; }).catch(async () => (await caches.match(req)) || caches.match("/offline.html")));
    return;
  }
  const url = new URL(req.url);
  if (/\.(?:js|css|png|jpg|jpeg|svg|webp|ico|woff2?)$/i.test(url.pathname)) {
    e.respondWith(caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => { caches.open(CACHE_NAME).then(c=>c.put(req, networkRes.clone())); return networkRes; }).catch(()=>cached);
      return cached || fetchPromise;
    }));
  }
});
