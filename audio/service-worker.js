const VERSION = "v0.1.1";
const CACHE_NAME = `mk-audio-player-${VERSION}`;


const APP_STATIC_RESOURCES = [
    "/audio/",
    "/audio/index.html",
    "/backend/media.css",
    "/backend/media.js",
    "/src/animebg.png",
    "/src/animebg.svg",
    "/src/back.svg",
    "/src/down.svg",
    "/src/front.svg",
    "/src/logo.png",
    "/src/pause.svg",
    "/src/play.svg",
    "/src/seekback.svg",
    "/src/seekright.svg",
    "/media/FutureAdventures.mp3",
    "/media/LOOP20.m4a"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(APP_STATIC_RESOURCES);
        })(),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                    return undefined;
                }),
            );
            await clients.claim();
        })(),
    );
});

self.addEventListener("fetch", (event) => {
    // when seeking an HTML page
    if (event.request.mode === "navigate") {
        // Return to the index.html page
        event.respondWith(caches.match("/"));
        return;
    }

    // For every other request type
    event.respondWith(
        (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request.url);
        if (cachedResponse) {
            // Return the cached response if it's available.
            return cachedResponse;
        }
        // Respond with a HTTP 404 response status.
        return new Response(null, { status: 404 });
        })(),
    );
});
