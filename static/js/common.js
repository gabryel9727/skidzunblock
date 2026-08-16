// skidzunblock — shared client logic (SW registration + navigation through the proxy).

function registerSW() {
  return navigator.serviceWorker
    .getRegistration("/uv/uv.sw-handler.js")
    .then((w) => w || navigator.serviceWorker.register("/uv/uv.sw-handler.js", { scope: "/" }));
}

function setTransport() {
  if (window.BareMux) {
    BareMux.SetTransport("CurlMod.LibcurlClient", {
      wisp: `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/wisp/`,
    });
  }
}

export function go(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl).toString();
  } catch {
    try {
      const u = new URL("http://" + rawUrl);
      if (u.hostname.includes(".")) url = u.toString();
      else throw 0;
    } catch {
      const p = (window.searchProviders || {})[localStorage.getItem("skidz||search") || "google"];
      url = (p ? p.search : "https://www.google.com/search?q=%s").replace("%s", encodeURIComponent(rawUrl));
    }
  }
  registerSW()
    .then(setTransport)
    .then(() => {
      location.href = "/load.html#" + btoa(url);
    });
}

export function search(query) {
  const p = (window.searchProviders || {})[localStorage.getItem("skidz||search") || "google"];
  const url = (p ? p.search : "https://www.google.com/search?q=%s").replace("%s", encodeURIComponent(query));
  go(url);
}

export function initCommon() {
  // apply cloak (tab title / favicon)
  const title = localStorage.getItem("skidz||title");
  if (title) document.title = title;
  const icon = localStorage.getItem("skidz||icon");
  if (icon) {
    let l = document.querySelector("link[rel~=icon]");
    if (!l) { l = document.createElement("link"); l.rel = "icon"; document.head.appendChild(l); }
    l.href = icon;
  }
}
