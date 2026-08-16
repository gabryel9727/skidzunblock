// All sites are launched *through* the proxy by common.js `go()`.

const i = (p) =>
  `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${p}" stroke="#ff2b2b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// small custom glyphs (own SVGs, red stroke)
const G = {
  play: "M8 5l11 7-11 7V5z",
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  video: "M3 6h13v12H3zM16 9l5-3v12l-5-3",
  chat: "M4 5h16v11H8l-4 4V5z",
  music: "M9 18V6l10-2v12M9 18a2 2 0 11-4 0 2 2 0 014 0zM19 16a2 2 0 11-4 0 2 2 0 014 0z",
  film: "M4 4h16v16H4zM4 8h16M4 16h16M8 4v16M16 4v16",
  book: "M5 4h11a2 2 0 012 2v14H7a2 2 0 01-2-2V4zM5 18a2 2 0 012-2h11",
  brush: "M4 20s1-4 5-4 4 4 4 4-1 0-3 0-6 0-6 0zM14 4l6 6-7 7-6-6 7-7z",
  game: "M7 8h10M12 3v4M9 14h.01M15 14h.01M8 12a4 4 0 108 0 4 4 0 00-8 0z",
  social: "M7 9a3 3 0 100 6 3 3 0 000-6zM17 7a3 3 0 100 6 3 3 0 000-6zM10 12h4",
  net: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
};

export const quickLinks = [
  { name: "Google", sub: "Search", url: "https://www.google.com", icon: i(G.globe) },
  { name: "YouTube", sub: "Watch", url: "https://www.youtube.com", icon: i(G.video) },
  { name: "Discord", sub: "Chat", url: "https://discord.com/app", icon: i(G.chat) },
  { name: "Spotify", sub: "Music", url: "https://open.spotify.com", icon: i(G.music) },
  { name: "Netflix", sub: "Films", url: "https://www.netflix.com", icon: i(G.film) },
  { name: "Reddit", sub: "Social", url: "https://www.reddit.com", icon: i(G.social) },
  { name: "Gmail", sub: "Mail", url: "https://mail.google.com", icon: i(G.mail) },
  { name: "Wikipedia", sub: "Read", url: "https://www.wikipedia.org", icon: i(G.book) },
];

export const games = [
  { name: "Poki", sub: "Thousands of games", url: "https://poki.com", icon: i(G.game) },
  { name: "CrazyGames", sub: "Browser games", url: "https://www.crazygames.com", icon: i(G.game) },
  { name: "Cool Math Games", sub: "Puzzles & logic", url: "https://www.coolmathgames.com", icon: i(G.game) },
  { name: "GameNora", sub: "Flash-style games", url: "https://gamenora.com", icon: i(G.game) },
  { name: "Krnl", sub: "Community hub", url: "https://krnl.ca", icon: i(G.game) },
  { name: "Scratch", sub: "Make games", url: "https://scratch.mit.edu", icon: i(G.brush) },
  { name: "RetroArch", sub: "Emulators", url: "https://retroarch.com", icon: i(G.film) },
  { name: "Now.gg", sub: "Cloud games", url: "https://now.gg", icon: i(G.play) },
  { name: "Armor Games", sub: "Arcade", url: "https://armorgames.com", icon: i(G.game) },
  { name: "Addicting Games", sub: "Casual", url: "https://www.addictinggames.com", icon: i(G.game) },
  { name: "Miniclip", sub: "Classics", url: "https://www.miniclip.com", icon: i(G.game) },
  { name: "Kongregate", sub: "Indie", url: "https://www.kongregate.com", icon: i(G.game) },
];

export const apps = [
  { name: "YouTube", sub: "Videos", url: "https://www.youtube.com", icon: i(G.video) },
  { name: "Discord", sub: "Voice & chat", url: "https://discord.com/app", icon: i(G.chat) },
  { name: "Spotify", sub: "Music", url: "https://open.spotify.com", icon: i(G.music) },
  { name: "Netflix", sub: "Movies", url: "https://www.netflix.com", icon: i(G.film) },
  { name: "Twitch", sub: "Live stream", url: "https://www.twitch.tv", icon: i(G.play) },
  { name: "Twitter / X", sub: "Social", url: "https://x.com", icon: i(G.social) },
  { name: "Instagram", sub: "Photos", url: "https://www.instagram.com", icon: i(G.social) },
  { name: "TikTok", sub: "Short videos", url: "https://www.tiktok.com", icon: i(G.play) },
  { name: "Reddit", sub: "Forum", url: "https://www.reddit.com", icon: i(G.social) },
  { name: "Gmail", sub: "Mail", url: "https://mail.google.com", icon: i(G.mail) },
  { name: "Drive", sub: "Cloud storage", url: "https://drive.google.com", icon: i(G.net) },
  { name: "ChatGPT", sub: "AI chat", url: "https://chat.openai.com", icon: i(G.chat) },
];
