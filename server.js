import wisp from "wisp-server-node";
import { baremuxPath } from "@mercuryworkshop/bare-mux";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";

import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import serveStatic from "serve-static";
import connect from "connect";

console.log(`skidzunblock starting...`);

const app = connect();
const PORT = process.env.PORT || 8080;
const server = createServer();

// Cross-origin isolation (needed by some transports / shared array buffers)
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// Static site
app.use(serveStatic(fileURLToPath(new URL("./static/", import.meta.url))));
// Proxy client assets served straight from the npm packages
app.use("/uv", serveStatic(uvPath));
app.use("/lcl", serveStatic(libcurlPath));
app.use("/bm", serveStatic(baremuxPath));

server.on("request", app);
server.on("upgrade", (req, socket, head) => {
  if (req.url.startsWith("/wisp")) wisp.routeRequest(req, socket, head);
  else socket.end();
});

server.listen({ port: PORT }, () => {
  console.log(`skidzunblock listening on http://localhost:${PORT}`);
});
