/* Service worker del Ateneo Don Bosco Handball.
   Guarda la web en el teléfono para que abra al instante y funcione sin señal
   (los gimnasios suelen no tener datos). Subí la versión cuando cambies el sitio. */
const VERSION = "adb-v31";
const BASE = [
  "./",
  "./index.html",
  "./datos.js",
  "./manifest.webmanifest",
  "./iconos/escudo.svg",
  "./iconos/icono-192.png",
  "./iconos/icono-512.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(BASE)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  // La página y datos.js (fixture, resultados, tablas) se piden primero a la red, así lo
  // que se sincroniza cada semana nunca queda viejo en los teléfonos.
  const esDatos = new URL(req.url).pathname.endsWith("/datos.js");
  if (req.mode === "navigate" || req.destination === "document" || esDatos){
    e.respondWith(
      fetch(req).then(r=>{
        const copia = r.clone();
        caches.open(VERSION).then(c=>c.put(req, copia));
        return r;
      }).catch(()=>caches.match(req).then(r=>r || (esDatos ? undefined : caches.match("./index.html"))))
    );
    return;
  }

  // Fotos, íconos y tipografías: primero lo guardado, que es lo que ahorra datos.
  e.respondWith(
    caches.match(req).then(guardado => guardado || fetch(req).then(r=>{
      if (r.ok && (req.destination==="image" || req.destination==="font")){
        const copia = r.clone();
        caches.open(VERSION).then(c=>c.put(req, copia));
      }
      return r;
    }).catch(()=>guardado))
  );
});
