import { FetchEvent } from './deps.ts';

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response("Hello World from Bookmark Stash!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
