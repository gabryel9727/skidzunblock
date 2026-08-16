// Search providers — frontend = where a bare query is sent, search = templated url.
export const searchProviders = {
  google: { name: "Google", frontend: "https://www.google.com/search?q=%s", search: "https://www.google.com/search?q=%s" },
  bing: { name: "Bing", frontend: "https://www.bing.com/search?q=%s", search: "https://www.bing.com/search?q=%s" },
  duckduckgo: { name: "DuckDuckGo", frontend: "https://duckduckgo.com/?q=%s", search: "https://duckduckgo.com/?q=%s" },
  ecosia: { name: "Ecosia", frontend: "https://www.ecosia.org/search?q=%s", search: "https://www.ecosia.org/search?q=%s" },
  brave: { name: "Brave", frontend: "https://search.brave.com/search?q=%s", search: "https://search.brave.com/search?q=%s" },
  yahoo: { name: "Yahoo", frontend: "https://search.yahoo.com/search?p=%s", search: "https://search.yahoo.com/search?p=%s" },
};
