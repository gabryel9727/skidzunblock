# skidzunblock

A modern, open-source web unblocker built on
[Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet). Route your
traffic through a WISP transport (libcurl) and browse the web or play games
right in your browser — no install required.

Own SVG logo & icons, red/black theme, clean UI: home search, games launcher,
apps/widgets, and tab-cloak settings.

## Features
- Ultraviolet proxy + WISP (`wisp-server-node`) + BareMux libcurl transport
- Instant search (Google, Bing, DuckDuckGo, Brave, Ecosia, Yahoo)
- Games & Apps launchers (opened through the proxy)
- Tab cloak: custom title + favicon for privacy
- Deploy-ready: `Procfile` + `package.json` `start` script on `process.env.PORT`

## Deploy to Railway (one click)
1. Fork / push this repo to GitHub.
2. Go to https://railway.com/new/github and pick the repo.
3. Railway reads the `Procfile` (`web: node server.js`) automatically.

## Run locally
```bash
npm install
npm start
# open http://localhost:8080  (use a recent Chromium/Firefox over http or https)
```

## How it works
- `server.js` serves the static site and the proxy client assets straight from
  the installed npm packages (`/uv`, `/lcl`, `/bm`), and upgrades `/wisp`.
- `static/load.html` registers the service worker and opens any URL through
  `/uv/service/`.

## Stack
- [`@titaniumnetwork-dev/ultraviolet`](https://www.npmjs.com/package/@titaniumnetwork-dev/ultraviolet)
- [`wisp-server-node`](https://www.npmjs.com/package/wisp-server-node)
- [`@mercuryworkshop/bare-mux`](https://www.npmjs.com/package/@mercuryworkshop/bare-mux)
- [`@mercuryworkshop/libcurl-transport`](https://www.npmjs.com/package/@mercuryworkshop/libcurl-transport)

## License
MIT — open source. Educational use only; respect your network's policy.
