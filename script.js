/* ============================================================
   DATA
============================================================ */
const MOODS = [
  { id: "happy", label: "Happy", em: "😊", color: "#FFC857" },
  { id: "sad", label: "Sad", em: "😢", color: "#6C8EBF" },
  { id: "chill", label: "Chill", em: "😌", color: "#7FC8A9" },
  { id: "energetic", label: "Energetic", em: "⚡", color: "#FF5F6D" },
  { id: "romantic", label: "Romantic", em: "💗", color: "#E68FB0" },
  { id: "focus", label: "Focus", em: "🎯", color: "#8C7AE6" },
  { id: "angry", label: "Angry", em: "😤", color: "#E4572E" },
  { id: "calm", label: "Calm", em: "🫧", color: "#9AC4C9" },
  { id: "motivated", label: "Motivated", em: "🔥", color: "#F2994A" },
  { id: "sleepy", label: "Sleepy", em: "🌙", color: "#5C5B8A" },
];
const moodById = (id) => MOODS.find((m) => m.id === id);

const GENRES = [
  "Lo-Fi",
  "Pop",
  "Indie",
  "R&B",
  "Jazz",
  "EDM",
  "Akustik",
  "City Pop",
  "Ballad",
  "Hip-Hop",
];
const ACTIVITIES = [
  "Study",
  "Workout",
  "Commute",
  "Sleep",
  "Party",
  "Work",
  "Relax",
  "Cooking",
];

const SONGS = [
  {
    id: "s1",
    title: "Pelangi di Kaca",
    artist: "Rumi & The Static",
    genre: "Indie",
    mood: "happy",
    dur: 198,
    cov: "🌈",
  },
  {
    id: "s2",
    title: "Langit Sebentar",
    artist: "Awan Kertas",
    genre: "Pop",
    mood: "happy",
    dur: 172,
    cov: "☁️",
  },
  {
    id: "s3",
    title: "Senja Kesepian",
    artist: "Larasati",
    genre: "Ballad",
    mood: "sad",
    dur: 224,
    cov: "🌇",
  },
  {
    id: "s4",
    title: "Kamar Kosong",
    artist: "Malam Panjang",
    genre: "Akustik",
    mood: "sad",
    dur: 210,
    cov: "🕯️",
  },
  {
    id: "s5",
    title: "Kopi & Hujan",
    artist: "Studio Renjana",
    genre: "Lo-Fi",
    mood: "chill",
    dur: 186,
    cov: "☕",
  },
  {
    id: "s6",
    title: "Perpustakaan Tua",
    artist: "Kertas Basah",
    genre: "Lo-Fi",
    mood: "chill",
    dur: 203,
    cov: "📚",
  },
  {
    id: "s7",
    title: "Lari Malam",
    artist: "Sirkuit Neon",
    genre: "EDM",
    mood: "energetic",
    dur: 191,
    cov: "🌃",
  },
  {
    id: "s8",
    title: "Adrenalin",
    artist: "Baja Muda",
    genre: "EDM",
    mood: "energetic",
    dur: 178,
    cov: "⚡",
  },
  {
    id: "s9",
    title: "Getar Pertama",
    artist: "Dua Musim",
    genre: "R&B",
    mood: "romantic",
    dur: 215,
    cov: "🌹",
  },
  {
    id: "s10",
    title: "Nama di Buku Harian",
    artist: "Suara Kamar",
    genre: "Ballad",
    mood: "romantic",
    dur: 207,
    cov: "📖",
  },
  {
    id: "s11",
    title: "Fokus Total",
    artist: "Kanvas Diam",
    genre: "Lo-Fi",
    mood: "focus",
    dur: 240,
    cov: "🧠",
  },
  {
    id: "s12",
    title: "Ritme Kerja",
    artist: "Studio Renjana",
    genre: "Jazz",
    mood: "focus",
    dur: 230,
    cov: "⌛",
  },
  {
    id: "s13",
    title: "Amarah Terpendam",
    artist: "Baja Muda",
    genre: "Hip-Hop",
    mood: "angry",
    dur: 188,
    cov: "🔺",
  },
  {
    id: "s14",
    title: "Pecah",
    artist: "Sirkuit Neon",
    genre: "EDM",
    mood: "angry",
    dur: 174,
    cov: "💢",
  },
  {
    id: "s15",
    title: "Napas Pelan",
    artist: "Air Tenang",
    genre: "Akustik",
    mood: "calm",
    dur: 212,
    cov: "🍃",
  },
  {
    id: "s16",
    title: "Ombak Kecil",
    artist: "Larasati",
    genre: "Jazz",
    mood: "calm",
    dur: 198,
    cov: "🌊",
  },
  {
    id: "s17",
    title: "Bangkit Lagi",
    artist: "Baja Muda",
    genre: "Hip-Hop",
    mood: "motivated",
    dur: 183,
    cov: "🚀",
  },
  {
    id: "s18",
    title: "Jalan Terus",
    artist: "Kanvas Diam",
    genre: "Pop",
    mood: "motivated",
    dur: 196,
    cov: "🏔️",
  },
  {
    id: "s19",
    title: "Mimpi Tengah Malam",
    artist: "Air Tenang",
    genre: "City Pop",
    mood: "sleepy",
    dur: 221,
    cov: "🌙",
  },
  {
    id: "s20",
    title: "Selimut Suara",
    artist: "Malam Panjang",
    genre: "Lo-Fi",
    mood: "sleepy",
    dur: 233,
    cov: "😴",
  },
  {
    id: "s21",
    title: "Kota di Pagi Hari",
    artist: "Awan Kertas",
    genre: "City Pop",
    mood: "happy",
    dur: 189,
    cov: "🏙️",
  },
  {
    id: "s22",
    title: "Sudut Favorit",
    artist: "Rumi & The Static",
    genre: "Indie",
    mood: "chill",
    dur: 205,
    cov: "🪴",
  },
  {
    id: "s23",
    title: "Peta Rasa",
    artist: "Dua Musim",
    genre: "R&B",
    mood: "romantic",
    dur: 199,
    cov: "🗺️",
  },
  {
    id: "s24",
    title: "Detak Cepat",
    artist: "Sirkuit Neon",
    genre: "EDM",
    mood: "energetic",
    dur: 180,
    cov: "💓",
  },
  {
    id: "s25",
    title: "Senyum Diam-Diam",
    artist: "Awan Kertas",
    genre: "Pop",
    mood: "happy",
    dur: 176,
    cov: "😄",
  },
  {
    id: "s26",
    title: "Riang di Jalan Pulang",
    artist: "Rumi & The Static",
    genre: "Indie",
    mood: "happy",
    dur: 184,
    cov: "🎈",
  },
  {
    id: "s27",
    title: "Hujan yang Sama",
    artist: "Larasati",
    genre: "Ballad",
    mood: "sad",
    dur: 231,
    cov: "☔",
  },
  {
    id: "s28",
    title: "Surat yang Tak Terkirim",
    artist: "Suara Kamar",
    genre: "Akustik",
    mood: "sad",
    dur: 218,
    cov: "✉️",
  },
  {
    id: "s29",
    title: "Teras Sore",
    artist: "Studio Renjana",
    genre: "Lo-Fi",
    mood: "chill",
    dur: 194,
    cov: "🪑",
  },
  {
    id: "s30",
    title: "Angin dari Jendela",
    artist: "Kertas Basah",
    genre: "Indie",
    mood: "chill",
    dur: 211,
    cov: "🍃",
  },
  {
    id: "s31",
    title: "Overdrive",
    artist: "Baja Muda",
    genre: "EDM",
    mood: "energetic",
    dur: 172,
    cov: "🏎️",
  },
  {
    id: "s32",
    title: "Nyala di Ubun-Ubun",
    artist: "Sirkuit Neon",
    genre: "Hip-Hop",
    mood: "energetic",
    dur: 167,
    cov: "🔥",
  },
  {
    id: "s33",
    title: "Dekat di Telinga",
    artist: "Dua Musim",
    genre: "R&B",
    mood: "romantic",
    dur: 203,
    cov: "👂",
  },
  {
    id: "s34",
    title: "Janji di Musim Hujan",
    artist: "Larasati",
    genre: "Ballad",
    mood: "romantic",
    dur: 227,
    cov: "💌",
  },
  {
    id: "s35",
    title: "Deadline Tenang",
    artist: "Kanvas Diam",
    genre: "Lo-Fi",
    mood: "focus",
    dur: 245,
    cov: "📝",
  },
  {
    id: "s36",
    title: "Ruang Kerja Sunyi",
    artist: "Studio Renjana",
    genre: "Akustik",
    mood: "focus",
    dur: 236,
    cov: "🖋️",
  },
  {
    id: "s37",
    title: "Retak",
    artist: "Sirkuit Neon",
    genre: "Hip-Hop",
    mood: "angry",
    dur: 181,
    cov: "⚔️",
  },
  {
    id: "s38",
    title: "Batas Sabar",
    artist: "Baja Muda",
    genre: "EDM",
    mood: "angry",
    dur: 169,
    cov: "🌩️",
  },
  {
    id: "s39",
    title: "Duduk Sebentar",
    artist: "Air Tenang",
    genre: "Jazz",
    mood: "calm",
    dur: 206,
    cov: "🧘",
  },
  {
    id: "s40",
    title: "Embun Pagi",
    artist: "Kertas Basah",
    genre: "Akustik",
    mood: "calm",
    dur: 199,
    cov: "🌫️",
  },
  {
    id: "s41",
    title: "Satu Langkah Lagi",
    artist: "Kanvas Diam",
    genre: "Hip-Hop",
    mood: "motivated",
    dur: 190,
    cov: "👣",
  },
  {
    id: "s42",
    title: "Puncak Berikutnya",
    artist: "Baja Muda",
    genre: "Pop",
    mood: "motivated",
    dur: 185,
    cov: "⛰️",
  },
  {
    id: "s43",
    title: "Lampu Dimatikan",
    artist: "Malam Panjang",
    genre: "City Pop",
    mood: "sleepy",
    dur: 228,
    cov: "💤",
  },
  {
    id: "s44",
    title: "Peluk Bantal",
    artist: "Air Tenang",
    genre: "Lo-Fi",
    mood: "sleepy",
    dur: 214,
    cov: "🛌",
  },
];

const ARTISTS = [...new Set(SONGS.map((s) => s.artist))].map((name, i) => ({
  id: "ar" + i,
  name,
  genre: SONGS.find((s) => s.artist === name).genre,
}));

const BADGES = [
  { id: "b1", name: "Beginner", em: "🎧", lvl: 1 },
  { id: "b2", name: "Music Explorer", em: "🔥", lvl: 3 },
  { id: "b3", name: "Playlist Master", em: "🎼", lvl: 6 },
  { id: "b4", name: "Music Collector", em: "🌟", lvl: 9 },
  { id: "b5", name: "Music Champion", em: "🏆", lvl: 12 },
];

const CHALLENGE_TEMPLATES = [
  {
    id: "c1",
    text: "Temukan 3 lagu baru",
    target: 3,
    type: "discover",
    xp: 30,
  },
  { id: "c2", text: "Dengarkan genre baru", target: 1, type: "genre", xp: 20 },
  {
    id: "c3",
    text: "Buat playlist berisi 5 lagu",
    target: 5,
    type: "playlist",
    xp: 40,
  },
  {
    id: "c4",
    text: "Menangkan 2 Music Battle",
    target: 2,
    type: "battle",
    xp: 25,
  },
];

/* ============================================================
   STATE
============================================================ */
let state = {
  view: "home",
  theme: "dark",
  user: null,
  currentMood: null,
  moodHistory: [],
  xp: 0,
  playlists: [
    {
      id: "p1",
      name: "Rutinitas Pagi",
      songIds: ["s1", "s21", "s5"],
      cov: "🌤️",
      generated: false,
    },
    {
      id: "p2",
      name: "Fokus Deadline",
      songIds: ["s11", "s12", "s6"],
      cov: "📌",
      generated: true,
    },
  ],
  favorites: { songs: [], artists: [], playlists: [] },
  queue: [],
  qIndex: -1,
  playing: false,
  progress: 0,
  volume: 70,
  shuffle: false,
  repeat: "off", // off, one, all
  battle: { wins: {}, losses: {}, history: [] },
  challengeProgress: { c1: 0, c2: 0, c3: 0, c4: 0 },
  challengeClaimed: {},
  friends: [
    {
      id: "f1",
      name: "Nadia",
      em: "🎤",
      activity: 'mendengarkan "Kopi & Hujan"',
    },
    {
      id: "f2",
      name: "Bagas",
      em: "🎹",
      activity: 'membuat playlist "Overtime"',
    },
    { id: "f3", name: "Citra", em: "🥁", activity: "memenangkan Music Battle" },
  ],
  settings: { notif: true, privacy: true, lang: "id" },
  discoverQuery: "",
  discoverTab: "songs",
  favTab: "songs",
  genPick: { mood: null, activity: null, genre: null, duration: 30 },
  aiStep: 0,
  aiAnswers: [],
  moodAiResult: null,
  spotify: {
    connected: false,
    profile: null,
    topTracks: [],
    searchResults: [],
  },
  previewDur: 30,
};

let playTimer = null;
let spotifySongCache = {};

/* ============================================================
   SPOTIFY INTEGRATION — Authorization Code + PKCE (client-side only)
   Requires: a Client ID from https://developer.spotify.com/dashboard
   and this exact page URL registered as Redirect URI (HTTPS, or
   http://127.0.0.1:PORT/... for local testing — "localhost" is
   no longer accepted by Spotify).
============================================================ */
const SPOTIFY_SCOPES =
  "user-read-private user-read-email user-top-read playlist-read-private user-library-read";
let spMemStore = {};
function spSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch (e) {
    spMemStore[k] = v;
  }
}
function spGet(k) {
  try {
    const v = localStorage.getItem(k);
    return v === null ? spMemStore[k] || null : v;
  } catch (e) {
    return spMemStore[k] || null;
  }
}
function spClear() {
  [
    "sp_client_id",
    "sp_verifier",
    "sp_access_token",
    "sp_refresh_token",
    "sp_token_expiry",
  ].forEach((k) => {
    try {
      localStorage.removeItem(k);
    } catch (e) {}
    delete spMemStore[k];
  });
}
function spRedirectUri() {
  return window.location.origin + window.location.pathname;
}
function spRandomString(len) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  let out = "";
  for (let i = 0; i < len; i++) out += chars[arr[i] % chars.length];
  return out;
}
function spBase64url(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
async function spChallenge(verifier) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(verifier),
  );
  return spBase64url(digest);
}
function spotifyConnect() {
  const input = document.getElementById("sp-client-id");
  const clientId = input ? input.value.trim() : "";
  if (!clientId) {
    toast("Masukkan Client ID Spotify dulu");
    return;
  }
  spSet("sp_client_id", clientId);
  const verifier = spRandomString(64);
  spSet("sp_verifier", verifier);
  spChallenge(verifier).then((challenge) => {
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: spRedirectUri(),
      code_challenge_method: "S256",
      code_challenge: challenge,
      scope: SPOTIFY_SCOPES,
    });
    window.location.href =
      "https://accounts.spotify.com/authorize?" + params.toString();
  });
}
function spotifyDisconnect() {
  spClear();
  state.spotify = {
    connected: false,
    profile: null,
    topTracks: [],
    searchResults: [],
  };
  render();
  toast("Spotify diputuskan");
}
async function spExchangeToken(code) {
  const clientId = spGet("sp_client_id");
  const verifier = spGet("sp_verifier");
  if (!clientId || !verifier) return null;
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: spRedirectUri(),
    client_id: clientId,
    code_verifier: verifier,
  });
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return res.ok ? res.json() : null;
}
async function spRefreshToken() {
  const clientId = spGet("sp_client_id");
  const refresh = spGet("sp_refresh_token");
  if (!clientId || !refresh) return null;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refresh,
    client_id: clientId,
  });
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return res.ok ? res.json() : null;
}
async function spEnsureToken() {
  const expiry = +spGet("sp_token_expiry") || 0;
  if (Date.now() < expiry - 10000) return spGet("sp_access_token");
  const data = await spRefreshToken();
  if (!data) return null;
  spSet("sp_access_token", data.access_token);
  if (data.refresh_token) spSet("sp_refresh_token", data.refresh_token);
  spSet("sp_token_expiry", String(Date.now() + data.expires_in * 1000));
  return data.access_token;
}
async function spFetch(path, opts = {}) {
  const token = await spEnsureToken();
  if (!token) throw new Error("Spotify belum terhubung");
  const res = await fetch("https://api.spotify.com/v1" + path, {
    ...opts,
    headers: { ...(opts.headers || {}), Authorization: "Bearer " + token },
  });
  if (res.status === 204) return null;
  if (!res.ok) throw new Error("Spotify API error " + res.status);
  return res.json();
}
async function handleSpotifyRedirect() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (!code) return;
  window.history.replaceState({}, document.title, window.location.pathname);
  const data = await spExchangeToken(code);
  if (data && data.access_token) {
    spSet("sp_access_token", data.access_token);
    spSet("sp_refresh_token", data.refresh_token);
    spSet("sp_token_expiry", String(Date.now() + data.expires_in * 1000));
    await loadSpotifySession();
    toast("Spotify terhubung ✅");
  } else {
    toast("Gagal menghubungkan Spotify. Cek Client ID & Redirect URI.");
  }
}
async function loadSpotifySession() {
  const token = await spEnsureToken();
  if (!token) return;
  try {
    const profile = await spFetch("/me");
    state.spotify.connected = true;
    state.spotify.profile = profile;
    const top = await spFetch("/me/top/tracks?limit=6&time_range=short_term");
    state.spotify.topTracks = (top?.items || []).map(mapSpotifyTrack);
    state.spotify.topTracks.forEach((t) => (spotifySongCache[t.id] = t));
  } catch (e) {
    console.error(e);
  }
  render();
}
function mapSpotifyTrack(t) {
  return {
    id: "sp:" + t.id,
    title: t.name,
    artist: (t.artists || []).map((a) => a.name).join(", "),
    genre: "Spotify",
    mood: null,
    dur: Math.round((t.duration_ms || 0) / 1000),
    cov: t.album?.images?.[1]?.url || t.album?.images?.[0]?.url || null,
    external: true,
    previewUrl: t.preview_url || null,
    spotifyUrl: t.external_urls?.spotify || null,
  };
}
let spSearchTimer = null;
async function runSpotifySearch(q) {
  if (!state.spotify.connected || !q) {
    state.spotify.searchResults = [];
    render();
    return;
  }
  try {
    const data = await spFetch(
      "/search?type=track&limit=12&q=" + encodeURIComponent(q),
    );
    state.spotify.searchResults = (data?.tracks?.items || []).map(
      mapSpotifyTrack,
    );
    state.spotify.searchResults.forEach((t) => (spotifySongCache[t.id] = t));
  } catch (e) {
    toast("Pencarian Spotify gagal");
  }
  render();
}
async function openSpotifyImport() {
  if (!state.spotify.connected) {
    toast("Hubungkan Spotify dulu di Settings");
    return;
  }
  document.getElementById("modal-root").innerHTML =
    `<div class="modal-back"><div class="modal"><h3>Impor Playlist Spotify</h3><div class="sub">Memuat daftar playlist...</div></div></div>`;
  try {
    const data = await spFetch("/me/playlists?limit=20");
    const items = data?.items || [];
    document.getElementById("modal-root").innerHTML = `
    <div class="modal-back" onclick="if(event.target===this) closeModal()">
      <div class="modal" style="max-height:70vh;overflow:auto;">
        <h3>Impor Playlist Spotify</h3>
        ${
          items.length
            ? items
                .map(
                  (p) => `
          <div class="song-row" style="cursor:pointer" onclick="importSpotifyPlaylist('${p.id}', decodeURIComponent('${encodeURIComponent(p.name)}'))">
            <div class="cov" style="background:var(--ink-soft2);overflow:hidden;">${p.images?.[0]?.url ? `<img src="${p.images[0].url}" style="width:100%;height:100%;object-fit:cover;border-radius:9px;">` : "🎵"}</div>
            <div class="meta"><div class="t">${p.name}</div><div class="a">${p.tracks?.total || 0} lagu</div></div>
          </div>`,
                )
                .join("")
            : '<div class="sub">Tidak ada playlist ditemukan di akun Spotify-mu.</div>'
        }
      </div>
    </div>`;
  } catch (e) {
    toast("Gagal memuat playlist Spotify");
    closeModal();
  }
}
async function importSpotifyPlaylist(playlistId, name) {
  closeModal();
  toast("Mengimpor playlist...");
  try {
    const data = await spFetch("/playlists/" + playlistId + "/tracks?limit=50");
    const tracks = (data?.items || [])
      .map((it) => it.track)
      .filter(Boolean)
      .map(mapSpotifyTrack);
    tracks.forEach((t) => (spotifySongCache[t.id] = t));
    const pl = {
      id: "spimp" + Date.now(),
      name: name + " (Spotify)",
      songIds: tracks.map((t) => t.id),
      cov: "🟢",
      generated: false,
    };
    state.playlists.unshift(pl);
    addXP(10, "Impor playlist");
    setView("playlists");
  } catch (e) {
    toast("Gagal mengimpor playlist");
  }
}

/* ============================================================
   HELPERS
============================================================ */
function fmt(sec) {
  const m = Math.floor(sec / 60),
    s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}
function songsByMood(mood) {
  return SONGS.filter((s) => s.mood === mood);
}
function getSong(id) {
  return SONGS.find((s) => s.id === id) || spotifySongCache[id];
}
function songMoodColor(s) {
  return s.mood ? moodById(s.mood).color : "#1DB954";
}
function songCoverHtml(s) {
  if (s.cov && s.cov.startsWith("http"))
    return `<img src="${s.cov}" style="width:100%;height:100%;object-fit:cover;border-radius:9px;">`;
  return s.cov || "🎵";
}
function level() {
  return Math.floor(state.xp / 100) + 1;
}
function xpIntoLevel() {
  return state.xp % 100;
}
function currentBadges() {
  return BADGES.filter((b) => level() >= b.lvl);
}
function nextBadge() {
  return BADGES.find((b) => level() < b.lvl);
}
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2200);
}
function applyMoodTheme(moodId) {
  const m = moodById(moodId);
  const root = document.documentElement;
  const accent = m ? m.color : "#E8B34A";
  root.style.setProperty("--accent", accent);
  // derive a soft tint
  root.style.setProperty("--accent-soft", accent + "2A");
}
function setView(v) {
  state.view = v;
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.toggle("active", n.dataset.view === v));
  render();
}
function bumpChallenge(type, amount = 1) {
  const tmpl = CHALLENGE_TEMPLATES.find((c) => c.type === type);
  if (!tmpl) return;
  if (state.challengeClaimed[tmpl.id]) return;
  state.challengeProgress[tmpl.id] = Math.min(
    tmpl.target,
    (state.challengeProgress[tmpl.id] || 0) + amount,
  );
}
function addXP(amount, reason) {
  const before = level();
  state.xp += amount;
  toast("+" + amount + " XP" + (reason ? " · " + reason : ""));
  if (level() > before) {
    setTimeout(() => toast("🎉 Naik ke Level " + level() + "!"), 700);
  }
}

/* ============================================================
   AUTH
============================================================ */
const AVATARS = ["🎧", "🎤", "🎹", "🥁", "🎸", "🌙", "🔥", "🌈"];
function renderAvatarPicker() {
  const el = document.getElementById("avatar-pick");
  el.innerHTML = AVATARS.map(
    (a, i) =>
      `<button data-i="${i}" class="${i === 0 ? "sel" : ""}" onclick="pickAvatar(${i})">${a}</button>`,
  ).join("");
}
let chosenAvatar = AVATARS[0];
function pickAvatar(i) {
  chosenAvatar = AVATARS[i];
  document
    .querySelectorAll("#avatar-pick button")
    .forEach((b, idx) => b.classList.toggle("sel", idx === i));
}
function setAuthTab(tab) {
  document
    .getElementById("tab-login")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("tab-register")
    .classList.toggle("active", tab === "register");
  document
    .getElementById("login-form")
    .classList.toggle("hidden", tab !== "login");
  document
    .getElementById("register-form")
    .classList.toggle("hidden", tab !== "register");
}
/* ---------- VALIDASI ---------- */
// RFC-ish: local@domain.tld — menolak spasi, titik ganda, TLD < 2 huruf
const EMAIL_RE =
  /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]*[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
const PW_RULES = [
  { id: "len", label: "8+ karakter", test: (p) => p.length >= 8 },
  { id: "upper", label: "Huruf besar", test: (p) => /[A-Z]/.test(p) },
  { id: "lower", label: "Huruf kecil", test: (p) => /[a-z]/.test(p) },
  { id: "num", label: "Angka", test: (p) => /[0-9]/.test(p) },
];
function showErr(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg || "";
  el.classList.toggle("on", !!msg);
  const input = document.getElementById(id.replace("-err", ""));
  if (input) {
    input.classList.toggle("invalid", !!msg);
    input.classList.toggle("valid", !msg && input.value.trim() !== "");
  }
}
function clearErrs() {
  document.querySelectorAll(".err").forEach((e) => {
    e.textContent = "";
    e.classList.remove("on");
  });
  document
    .querySelectorAll(".field input")
    .forEach((i) => i.classList.remove("invalid", "valid"));
}
function validateEmail(email) {
  if (!email) return "Email wajib diisi.";
  if (/\s/.test(email)) return "Email tidak boleh mengandung spasi.";
  if (email.includes(".."))
    return "Email tidak boleh memiliki titik berurutan.";
  if (!EMAIL_RE.test(email))
    return "Format email tidak valid. Contoh: nama@gmail.com";
  const domain = email.split("@")[1].toLowerCase();
  // Deteksi salah ketik domain Google yang umum
  const typos = {
    "gmail.co": "gmail.com",
    "gmail.cm": "gmail.com",
    "gmai.com": "gmail.com",
    "gmial.com": "gmail.com",
    "gmail.con": "gmail.com",
    "gnail.com": "gmail.com",
    "gmail.om": "gmail.com",
  };
  if (typos[domain]) return `Apakah maksudmu @${typos[domain]}?`;
  return null;
}
function validatePassword(pw) {
  if (!pw) return "Password wajib diisi.";
  const failed = PW_RULES.filter((r) => !r.test(pw));
  if (failed.length)
    return (
      "Password harus punya: " +
      failed.map((f) => f.label.toLowerCase()).join(", ") +
      "."
    );
  return null;
}
function updatePwMeter(pw) {
  const passed = PW_RULES.filter((r) => r.test(pw)).length;
  const fill = document.getElementById("pw-meter-fill");
  if (fill) {
    fill.style.width = (passed / PW_RULES.length) * 100 + "%";
    fill.style.background =
      passed <= 1
        ? "#FF6B6B"
        : passed <= 2
          ? "#F2994A"
          : passed === 3
            ? "#E8B34A"
            : "#4CC38A";
  }
  const rules = document.getElementById("pw-rules");
  if (rules)
    rules.innerHTML = PW_RULES.map(
      (r) =>
        `<span class="${r.test(pw) ? "ok" : ""}">${r.test(pw) ? "✓" : "○"} ${r.label}</span>`,
    ).join("");
}

/* ---------- PENYIMPANAN AKUN LOKAL ---------- */
function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem("mb_accounts") || "{}");
  } catch (e) {
    return window._mbAcc || {};
  }
}
function saveAccounts(a) {
  try {
    localStorage.setItem("mb_accounts", JSON.stringify(a));
  } catch (e) {
    window._mbAcc = a;
  }
}
// Hash sederhana agar password tidak tersimpan sebagai teks polos.
// CATATAN: ini BUKAN pengamanan sungguhan — keamanan nyata hanya bisa dilakukan di server.
async function hashPw(pw) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode("moodboard::" + pw),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function doRegister() {
  clearErrs();
  const uname = document.getElementById("rg-user").value.trim();
  const email = document.getElementById("rg-email").value.trim().toLowerCase();
  const pw = document.getElementById("rg-pass").value;
  const pw2 = document.getElementById("rg-pass2").value;
  let ok = true;

  if (uname.length < 3) {
    showErr("rg-user-err", "Username minimal 3 karakter.");
    ok = false;
  } else if (!/^[A-Za-z0-9._]+$/.test(uname)) {
    showErr(
      "rg-user-err",
      "Username hanya boleh huruf, angka, titik, underscore.",
    );
    ok = false;
  } else showErr("rg-user-err", "");

  const eErr = validateEmail(email);
  if (eErr) {
    showErr("rg-email-err", eErr);
    ok = false;
  } else showErr("rg-email-err", "");

  const pErr = validatePassword(pw);
  if (pErr) {
    showErr("rg-pass-err", pErr);
    ok = false;
  } else showErr("rg-pass-err", "");

  if (pw2 !== pw) {
    showErr("rg-pass2-err", "Password tidak sama.");
    ok = false;
  } else showErr("rg-pass2-err", "");

  if (!ok) {
    toast("Perbaiki isian yang ditandai merah");
    return;
  }

  const accounts = loadAccounts();
  if (accounts[email]) {
    showErr("rg-email-err", "Email ini sudah terdaftar. Silakan masuk.");
    toast("Email sudah terdaftar");
    return;
  }

  accounts[email] = {
    name: uname,
    email,
    avatar: chosenAvatar,
    pwHash: await hashPw(pw),
    provider: "email",
  };
  saveAccounts(accounts);
  state.user = { name: uname, email, avatar: chosenAvatar, provider: "email" };
  toast("Akun dibuat. Selamat datang, " + uname + "!");
  enterApp();
}

async function doLogin() {
  clearErrs();
  const email = document.getElementById("li-email").value.trim().toLowerCase();
  const pw = document.getElementById("li-pass").value;
  let ok = true;

  const eErr = validateEmail(email);
  if (eErr) {
    showErr("li-email-err", eErr);
    ok = false;
  } else showErr("li-email-err", "");
  if (!pw) {
    showErr("li-pass-err", "Password wajib diisi.");
    ok = false;
  } else showErr("li-pass-err", "");
  if (!ok) return;

  const accounts = loadAccounts();
  const acc = accounts[email];
  // Pesan sengaja dibuat sama untuk email tidak terdaftar & password salah,
  // supaya tidak membocorkan email mana yang terdaftar.
  if (!acc || acc.pwHash !== (await hashPw(pw))) {
    showErr("li-pass-err", "Email atau password salah.");
    toast("Login gagal");
    return;
  }
  state.user = {
    name: acc.name,
    email: acc.email,
    avatar: acc.avatar,
    provider: acc.provider || "email",
  };
  enterApp();
}

/* ---------- GOOGLE SIGN-IN (OAuth, verifikasi oleh Google) ---------- */
// Password Google TIDAK PERNAH masuk ke aplikasi ini. Google yang memverifikasi
// akun & password, lalu mengirim ID token yang sudah ditandatangani.
function gGetClientId() {
  try {
    return localStorage.getItem("mb_g_client_id");
  } catch (e) {
    return window._mbGid || null;
  }
}
function gSetClientId(v) {
  try {
    localStorage.setItem("mb_g_client_id", v);
  } catch (e) {
    window._mbGid = v;
  }
}
function saveGoogleClientId() {
  const v = document.getElementById("g-client-id").value.trim();
  if (!v.endsWith(".apps.googleusercontent.com")) {
    toast("Client ID Google tidak valid");
    return;
  }
  gSetClientId(v);
  initGoogleSignIn();
}
function decodeJwtPayload(token) {
  const part = token.split(".")[1];
  const json = atob(part.replace(/-/g, "+").replace(/_/g, "/"));
  return JSON.parse(decodeURIComponent(escape(json)));
}
function handleGoogleCredential(response) {
  try {
    const p = decodeJwtPayload(response.credential);
    // Google hanya menerbitkan token ini jika akun & password benar,
    // jadi kredensial yang salah tidak akan pernah sampai ke titik ini.
    if (!p.email_verified) {
      toast("Email Google ini belum terverifikasi.");
      return;
    }
    state.user = {
      name: p.name || p.email.split("@")[0],
      email: p.email,
      avatar: "🎧",
      picture: p.picture || null,
      provider: "google",
    };
    const accounts = loadAccounts();
    accounts[p.email.toLowerCase()] = {
      name: state.user.name,
      email: p.email,
      avatar: "🎧",
      picture: p.picture || null,
      provider: "google",
    };
    saveAccounts(accounts);
    toast("Masuk sebagai " + state.user.name);
    enterApp();
  } catch (e) {
    toast("Gagal memproses login Google");
  }
}
function initGoogleSignIn() {
  const zone = document.getElementById("g-signin-btn");
  const setup = document.getElementById("g-setup");
  const clientId = gGetClientId();
  const insecure =
    location.protocol !== "https:" &&
    location.hostname !== "127.0.0.1" &&
    location.hostname !== "localhost";

  if (!clientId || insecure || !window.google?.accounts?.id) {
    zone.innerHTML = "";
    setup.classList.remove("hidden");
    if (clientId) document.getElementById("g-client-id").value = clientId;
    zone.insertAdjacentHTML("beforebegin", "");
    setup.insertAdjacentHTML(
      "beforeend",
      `<div class="google-note">${
        insecure
          ? "Login Google butuh halaman yang di-host lewat HTTPS atau 127.0.0.1 — tidak bisa dari file:// atau pratinjau chat."
          : "Ambil Client ID di Google Cloud Console → Credentials → OAuth client ID (Web), lalu daftarkan asal URL ini: <b>" +
            location.origin +
            "</b>"
      }</div>`,
    );
    return;
  }
  setup.classList.add("hidden");
  google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
  });
  google.accounts.id.renderButton(zone, {
    theme: "filled_black",
    size: "large",
    shape: "pill",
    text: "continue_with",
    width: 280,
  });
}

function enterApp() {
  clearErrs();
  document.getElementById("auth-screen").style.display = "none";
  document.getElementById("app").classList.add("on");
  document.getElementById("playerbar").classList.remove("on");
  setView("home");
  if (spGet("sp_refresh_token")) loadSpotifySession();
}
function logout() {
  if (state.user?.provider === "google" && window.google?.accounts?.id) {
    try {
      google.accounts.id.disableAutoSelect();
    } catch (e) {}
  }
  state.user = null;
  document.getElementById("auth-screen").style.display = "flex";
  document.getElementById("app").classList.remove("on");
  document
    .querySelectorAll("#login-form input, #register-form input")
    .forEach((i) => (i.value = ""));
  clearErrs();
  updatePwMeter("");
  setAuthTab("login");
  initGoogleSignIn();
}

/* ============================================================
   NAV WIRING
============================================================ */
document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

/* ============================================================
   RENDER: ROUTER
============================================================ */
function render() {
  applyMoodTheme(state.currentMood);
  renderMiniProfile();
  const v = document.getElementById("view");
  const renderers = {
    home: renderHome,
    discover: renderDiscover,
    mood: renderMood,
    moodai: renderMoodAI,
    generator: renderGenerator,
    playlists: renderPlaylists,
    favorites: renderFavorites,
    battle: renderBattle,
    challenges: renderChallenges,
    stats: renderStats,
    friends: renderFriends,
    profile: renderProfile,
    settings: renderSettings,
  };
  v.innerHTML = (renderers[state.view] || renderHome)();
  renderPlayerBar();
}
function renderMiniProfile() {
  if (!state.user) return;
  document.getElementById("mini-profile").innerHTML = `
    <div class="av" style="overflow:hidden;">${state.user.picture ? `<img src="${state.user.picture}" alt="" style="width:100%;height:100%;object-fit:cover;">` : state.user.avatar}</div>
    <div class="info">
      <div class="name">${state.user.name}</div>
      <div class="lvl">Level ${level()} · ${state.xp} XP</div>
    </div>`;
}

function songRow(s, opts = {}) {
  const isFav = state.favorites.songs.includes(s.id);
  return `<div class="song-row">
    <div class="cov" style="background:${songMoodColor(s)}22;overflow:hidden;">${songCoverHtml(s)}</div>
    <div class="meta" style="cursor:pointer" onclick="playSongById('${s.id}'${opts.ctx ? `,'${opts.ctx}'` : ""})">
      <div class="t">${s.title}${s.external ? ` <a href="${s.spotifyUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()" style="color:#1DB954;font-size:.75em;" title="Buka di Spotify">↗</a>` : ""}</div>
      <div class="a">${s.artist} · ${s.genre}${s.external && !s.previewUrl ? " · tanpa pratinjau" : ""}</div>
    </div>
    <button class="icon-btn fav ${isFav ? "on" : ""}" onclick="toggleFavSong('${s.id}')">${isFav ? "♥" : "♡"}</button>
    <div class="dur">${fmt(s.dur)}</div>
  </div>`;
}

/* ---------------- HOME ---------------- */
function renderHome() {
  const hour = new Date().getHours();
  const greet =
    hour < 11
      ? "Selamat pagi"
      : hour < 15
        ? "Selamat siang"
        : hour < 18
          ? "Selamat sore"
          : "Selamat malam";
  const mood = moodById(state.currentMood);
  const recs = mood ? songsByMood(mood.id).slice(0, 4) : SONGS.slice(0, 4);
  const trending = [...SONGS]
    .sort(
      (a, b) => (state.battle.wins[b.id] || 0) - (state.battle.wins[a.id] || 0),
    )
    .slice(0, 5);
  const challenge =
    CHALLENGE_TEMPLATES[new Date().getDate() % CHALLENGE_TEMPLATES.length];
  const cp = state.challengeProgress[challenge.id] || 0;
  return `
  <div class="page-head">
    <div><h2>${greet}, ${state.user.name} 👋</h2>
    <div class="sub">${mood ? `Mood hari ini: ${mood.em} ${mood.label}` : "Kamu belum memilih mood hari ini."}</div></div>
    <button class="btn-accent" onclick="setView('mood')">${mood ? "Ubah mood" : "Pilih mood"}</button>
  </div>

  <div class="section-title">Recommended Songs</div>
  <div style="max-width:640px;">${recs.map((s) => songRow(s, { ctx: "rec" })).join("")}</div>

  ${
    state.spotify.connected && state.spotify.topTracks.length
      ? `
  <div class="section-title">Dari Spotify-mu <span class="pill accent">Top Tracks</span></div>
  <div style="max-width:640px;">${state.spotify.topTracks.map((s) => songRow(s, { ctx: "spotify" })).join("")}</div>
  `
      : ""
  }

  <div class="section-title">Recommended Playlist</div>
  <div class="grid-cards">
    ${state.playlists
      .slice(0, 3)
      .map((p) => playlistCard(p))
      .join("")}
  </div>

  <div class="section-title">Trending Songs</div>
  <div style="max-width:640px;">${trending.map((s) => songRow(s)).join("")}</div>

  <div class="section-title">Daily Music Challenge</div>
  <div class="card challenge-card" style="max-width:520px;">
    <div style="font-size:1.6rem;">🎯</div>
    <div style="flex:1;">
      <div style="font-weight:700;font-size:.9rem;">${challenge.text}</div>
      <div class="sub" style="font-size:.76rem;">Hadiah: ${challenge.xp} XP</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100, (cp / challenge.target) * 100)}%"></div></div>
    </div>
    <button class="btn-ghost" onclick="setView('challenges')">Lihat</button>
  </div>
  `;
}

function playlistCard(p) {
  const isFav = state.favorites.playlists.includes(p.id);
  return `<div class="card">
    <div class="playlist-cover" style="background:var(--accent-soft);" onclick="openPlaylist('${p.id}')">${p.cov}</div>
    <div class="playlist-name">${p.name} ${p.generated ? '<span class=\"pill accent\" style=\"margin-left:4px;\">auto</span>' : ""}</div>
    <div class="playlist-sub">${p.songIds.length} lagu</div>
    <div style="display:flex;gap:6px;margin-top:10px;">
      <button class="btn-ghost" style="flex:1;padding:7px;" onclick="openPlaylist('${p.id}')">Buka</button>
      <button class="icon-btn fav ${isFav ? "on" : ""}" onclick="toggleFavPlaylist('${p.id}')">${isFav ? "♥" : "♡"}</button>
    </div>
  </div>`;
}

/* ---------------- MOOD ---------------- */
function renderMood() {
  return `
  <div class="page-head"><div><h2>Pilih mood-mu</h2><div class="sub">Sistem akan menyesuaikan tampilan &amp; rekomendasi lagu.</div></div></div>
  <div class="mood-grid">
    ${MOODS.map(
      (
        m,
      ) => `<button class="mood-tile ${state.currentMood === m.id ? "sel" : ""}" style="--tile-color:${m.color};--tile-bg:${m.color}24" onclick="pickMood('${m.id}')">
      <div class="em">${m.em}</div>${m.label}
    </button>`,
    ).join("")}
  </div>
  ${
    state.currentMood
      ? `
    <div class="section-title">Rekomendasi untuk mood ${moodById(state.currentMood).label}</div>
    <div style="max-width:640px;">${songsByMood(state.currentMood)
      .map((s) => songRow(s))
      .join("")}</div>
  `
      : ""
  }
  `;
}
function pickMood(id) {
  state.currentMood = id;
  const today = new Date().toDateString();
  const existing = state.moodHistory.find((h) => h.date === today);
  if (existing) existing.mood = id;
  else state.moodHistory.push({ date: today, mood: id });
  render();
  toast("Mood diset ke " + moodById(id).label + " " + moodById(id).em);
}

/* ---------------- MOOD AI ---------------- */
const AI_QUESTIONS = [
  {
    q: "Bagaimana energimu sekarang?",
    opts: [
      { t: "Penuh semangat, ingin bergerak", tag: "energetic" },
      { t: "Santai, ingin bersuara pelan", tag: "chill" },
      { t: "Lelah dan ingin istirahat", tag: "sleepy" },
      { t: "Biasa saja, netral", tag: "calm" },
    ],
  },
  {
    q: "Kalau digambarkan warna, hari ini warnanya...",
    opts: [
      { t: "Kuning cerah", tag: "happy" },
      { t: "Biru pudar", tag: "sad" },
      { t: "Merah menyala", tag: "angry" },
      { t: "Pink lembut", tag: "romantic" },
    ],
  },
  {
    q: "Apa yang paling kamu butuhkan sekarang?",
    opts: [
      { t: "Dorongan untuk terus maju", tag: "motivated" },
      { t: "Ruang untuk fokus kerja", tag: "focus" },
      { t: "Teman untuk merenung", tag: "sad" },
      { t: "Ketenangan total", tag: "calm" },
    ],
  },
];
function renderMoodAI() {
  if (state.moodAiResult) {
    const m = moodById(state.moodAiResult);
    return `
    <div class="page-head"><div><h2>Mood AI</h2><div class="sub">Hasil analisis singkat dari jawabanmu.</div></div></div>
    <div class="chat-box">
      <div class="chat-q" style="text-align:center;">
        <div style="font-size:2.4rem;">${m.em}</div>
        <div class="qtext" style="margin:10px 0 4px;">Mood-mu terdeteksi: ${m.label}</div>
        <div class="sub" style="margin-bottom:16px;">Berikut playlist yang cocok untukmu.</div>
        <button class="btn-accent" onclick="applyAiMood()">Pakai mood ini</button>
        <button class="btn-ghost" style="margin-left:8px;" onclick="restartAi()">Ulangi kuis</button>
      </div>
      ${songsByMood(m.id)
        .slice(0, 4)
        .map((s) => songRow(s))
        .join("")}
    </div>`;
  }
  const step = state.aiStep;
  const total = AI_QUESTIONS.length;
  if (step >= total) {
    computeAiResult();
    return renderMoodAI();
  }
  const q = AI_QUESTIONS[step];
  return `
  <div class="page-head"><div><h2>Mood AI</h2><div class="sub">Pertanyaan ${step + 1} dari ${total}</div></div></div>
  <div class="chat-box">
    <div class="chat-q">
      <div class="qtext">${q.q}</div>
      ${q.opts.map((o, i) => `<button class="opt-btn" onclick="answerAi('${o.tag}')">${o.t}</button>`).join("")}
    </div>
  </div>`;
}
function answerAi(tag) {
  state.aiAnswers.push(tag);
  state.aiStep++;
  render();
}
function computeAiResult() {
  const counts = {};
  state.aiAnswers.forEach((t) => (counts[t] = (counts[t] || 0) + 1));
  let best = state.aiAnswers[0];
  Object.keys(counts).forEach((k) => {
    if (counts[k] > counts[best]) best = k;
  });
  state.moodAiResult = best;
}
function restartAi() {
  state.aiStep = 0;
  state.aiAnswers = [];
  state.moodAiResult = null;
  render();
}
function applyAiMood() {
  pickMood(state.moodAiResult);
  restartAi();
  setView("mood");
}

/* ---------------- SMART PLAYLIST GENERATOR ---------------- */
function renderGenerator() {
  const g = state.genPick;
  return `
  <div class="page-head"><div><h2>Smart Playlist Generator</h2><div class="sub">Mood + Aktivitas + Genre + Durasi → playlist otomatis.</div></div></div>
  <div class="gen-row">
    <div class="gen-field"><label>Mood</label><div class="chip-select">
      ${MOODS.map((m) => `<button class="${g.mood === m.id ? "sel" : ""}" onclick="setGen('mood','${m.id}')">${m.em} ${m.label}</button>`).join("")}
    </div></div>
  </div>
  <div class="gen-row">
    <div class="gen-field"><label>Aktivitas</label><div class="chip-select">
      ${ACTIVITIES.map((a) => `<button class="${g.activity === a ? "sel" : ""}" onclick="setGen('activity','${a}')">${a}</button>`).join("")}
    </div></div>
    <div class="gen-field"><label>Genre</label><div class="chip-select">
      ${GENRES.map((a) => `<button class="${g.genre === a ? "sel" : ""}" onclick="setGen('genre','${a}')">${a}</button>`).join("")}
    </div></div>
    <div class="gen-field"><label>Durasi (menit)</label><div class="chip-select">
      ${[15, 30, 45, 60, 90].map((d) => `<button class="${g.duration === d ? "sel" : ""}" onclick="setGen('duration',${d})">${d}</button>`).join("")}
    </div></div>
  </div>
  <button class="btn-accent" onclick="generatePlaylist()">Buat Playlist</button>
  <div id="gen-result"></div>
  `;
}
function setGen(key, val) {
  state.genPick[key] = val;
  render();
}
function generatePlaylist() {
  const g = state.genPick;
  if (!g.mood) {
    toast("Pilih mood dulu ya");
    return;
  }
  let pool = songsByMood(g.mood);
  if (g.genre)
    pool = pool.length
      ? pool.filter((s) => s.genre === g.genre).concat(pool)
      : pool;
  pool = [...new Set(pool)];
  if (pool.length === 0) pool = songsByMood(g.mood);
  let totalSec = g.duration * 60,
    chosen = [],
    t = 0,
    i = 0;
  while (t < totalSec && chosen.length < 12) {
    const s = pool[i % pool.length];
    if (!s) break;
    chosen.push(s.id);
    t += s.dur;
    i++;
    if (i > 30) break;
  }
  const name = `${g.activity || "Mix"} · ${moodById(g.mood).label}`;
  const pl = {
    id: "gen" + Date.now(),
    name,
    songIds: chosen,
    cov: moodById(g.mood).em,
    generated: true,
  };
  state.playlists.unshift(pl);
  bumpChallenge("playlist", chosen.length);
  addXP(15, "Playlist dibuat");
  toast('Playlist "' + name + '" dibuat!');
  setView("playlists");
}

/* ---------------- DISCOVER ---------------- */
function renderDiscover() {
  const q = state.discoverQuery.toLowerCase();
  const tab = state.discoverTab;
  let content = "";
  if (tab === "songs") {
    const res = SONGS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q) ||
        s.genre.toLowerCase().includes(q),
    );
    content = res.length
      ? res.map((s) => songRow(s, { ctx: "discover" })).join("")
      : `<div class="sub">Tidak ada lagu ditemukan.</div>`;
  } else if (tab === "artists") {
    const res = ARTISTS.filter((a) => a.name.toLowerCase().includes(q));
    content = `<div class="grid-cards">${res.map((a) => `<div class="card"><div style="font-size:1.8rem;">🎙️</div><div class="playlist-name" style="margin-top:8px;">${a.name}</div><div class="playlist-sub">${a.genre}</div></div>`).join("")}</div>`;
  } else if (tab === "genre") {
    const res = GENRES.filter((g) => g.toLowerCase().includes(q));
    content = `<div style="display:flex;flex-wrap:wrap;gap:10px;">${res.map((g) => `<span class="pill accent" style="font-size:.85rem;padding:10px 18px;">${g}</span>`).join("")}</div>`;
  } else if (tab === "mood") {
    content = `<div class="mood-grid">${MOODS.filter((m) =>
      m.label.toLowerCase().includes(q),
    )
      .map(
        (m) =>
          `<button class="mood-tile" style="--tile-color:${m.color};--tile-bg:${m.color}24" onclick="pickMood('${m.id}');setView('mood')"><div class="em">${m.em}</div>${m.label}</button>`,
      )
      .join("")}</div>`;
  } else if (tab === "spotify") {
    if (!state.spotify.connected) {
      content = `<div class="card" style="max-width:420px;">
        <div style="font-weight:700;margin-bottom:6px;">Belum terhubung ke Spotify</div>
        <div class="sub" style="margin-bottom:12px;">Hubungkan akunmu di Settings untuk mencari lagu asli dari katalog Spotify.</div>
        <button class="btn-accent" onclick="setView('settings')">Buka Settings</button>
      </div>`;
    } else {
      const res = state.spotify.searchResults;
      content = q
        ? res.length
          ? `<div style="max-width:640px;">${res.map((s) => songRow(s, { ctx: "spotify" })).join("")}</div>`
          : '<div class="sub">Tidak ada hasil dari Spotify.</div>'
        : '<div class="sub">Ketik sesuatu untuk mencari lagu langsung dari Spotify.</div>';
    }
  }
  return `
  <div class="page-head"><div><h2>Discover</h2><div class="sub">Cari lagu, artis, genre, mood, atau langsung dari Spotify.</div></div></div>
  <div class="search-bar">🔎<input placeholder="Cari sesuatu..." value="${state.discoverQuery}" oninput="setDiscoverQuery(this.value)"></div>
  <div class="tabs">
    ${["songs", "artists", "genre", "mood", "spotify"].map((t) => `<button class="tab-btn ${tab === t ? "active" : ""}" onclick="setDiscoverTab('${t}')">${{ songs: "Lagu", artists: "Artis", genre: "Genre", mood: "Mood", spotify: "🟢 Spotify" }[t]}</button>`).join("")}
  </div>
  ${content}
  `;
}
function setDiscoverQuery(v) {
  state.discoverQuery = v;
  bumpChallenge("discover", 1);
  render();
  const inp = document.querySelector(".search-bar input");
  if (inp) {
    inp.focus();
    inp.setSelectionRange(v.length, v.length);
  }
  if (state.discoverTab === "spotify") {
    clearTimeout(spSearchTimer);
    spSearchTimer = setTimeout(() => runSpotifySearch(v), 450);
  }
}
function setDiscoverTab(t) {
  state.discoverTab = t;
  render();
}

/* ---------------- PLAYLISTS ---------------- */
function renderPlaylists() {
  return `
  <div class="page-head">
    <div><h2>Playlists</h2><div class="sub">Playlist buatanmu &amp; hasil generate otomatis.</div></div>
    <div style="display:flex;gap:8px;">
      <button class="btn-ghost" onclick="openSpotifyImport()">🟢 Impor dari Spotify</button>
      <button class="btn-accent" onclick="openCreatePlaylistModal()">+ Buat Playlist</button>
    </div>
  </div>
  <div class="grid-cards">${state.playlists.map((p) => playlistCard(p)).join("")}</div>
  `;
}
function openCreatePlaylistModal() {
  document.getElementById("modal-root").innerHTML = `
  <div class="modal-back" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <h3>Buat Playlist Baru</h3>
      <div class="field"><label>Nama playlist</label><input id="new-pl-name" placeholder="mis. Overtime Vibes"></div>
      <button class="btn-primary" onclick="createPlaylist()">Buat</button>
    </div>
  </div>`;
}
function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
}
function createPlaylist() {
  const name =
    document.getElementById("new-pl-name").value.trim() || "Playlist Baru";
  const pl = {
    id: "p" + Date.now(),
    name,
    songIds: [],
    cov: "📀",
    generated: false,
  };
  state.playlists.unshift(pl);
  closeModal();
  addXP(10, "Playlist baru");
  setView("playlists");
  openPlaylist(pl.id);
}
function openPlaylist(id) {
  const p = state.playlists.find((pl) => pl.id === id);
  if (!p) return;
  const inPl = new Set(p.songIds);
  document.getElementById("modal-root").innerHTML = `
  <div class="modal-back" onclick="if(event.target===this) closeModal()">
    <div class="modal" style="width:min(520px,92vw);max-height:80vh;overflow:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <h3>${p.cov} ${p.name}</h3>
        <button class="icon-btn" onclick="deletePlaylist('${p.id}')" title="Hapus playlist">🗑️</button>
      </div>
      <div class="sub" style="margin-bottom:10px;">${p.songIds.length} lagu</div>
      <div style="max-height:280px;overflow-y:auto;margin-bottom:14px;">
        ${
          p.songIds.length
            ? p.songIds
                .map((sid) => getSong(sid))
                .filter(Boolean)
                .map(
                  (s) => `
          <div class="song-row">
            <div class="cov" style="background:${moodById(s.mood).color}22;">${s.cov}</div>
            <div class="meta" style="cursor:pointer" onclick="playSongById('${s.id}','${p.id}')"><div class="t">${s.title}</div><div class="a">${s.artist}</div></div>
            <button class="icon-btn" onclick="removeFromPlaylist('${p.id}','${s.id}')">✕</button>
            <div class="dur">${fmt(s.dur)}</div>
          </div>`,
                )
                .join("")
            : '<div class="sub">Belum ada lagu. Tambahkan dari daftar di bawah.</div>'
        }
      </div>
      <div class="section-title" style="margin-top:0;">Tambah lagu</div>
      <div style="max-height:220px;overflow-y:auto;">
        ${SONGS.filter((s) => !inPl.has(s.id))
          .map(
            (s) => `
          <div class="song-row">
            <div class="cov" style="background:${moodById(s.mood).color}22;">${s.cov}</div>
            <div class="meta"><div class="t">${s.title}</div><div class="a">${s.artist}</div></div>
            <button class="icon-btn" onclick="addToPlaylist('${p.id}','${s.id}')">+</button>
            <div class="dur">${fmt(s.dur)}</div>
          </div>`,
          )
          .join("")}
      </div>
      <button class="btn-ghost" style="margin-top:14px;width:100%;" onclick="playPlaylist('${p.id}')">▶ Putar semua</button>
    </div>
  </div>`;
}
function addToPlaylist(pid, sid) {
  const p = state.playlists.find((x) => x.id === pid);
  if (p && !p.songIds.includes(sid)) {
    p.songIds.push(sid);
    bumpChallenge("playlist", 1);
  }
  openPlaylist(pid);
}
function removeFromPlaylist(pid, sid) {
  const p = state.playlists.find((x) => x.id === pid);
  if (p) p.songIds = p.songIds.filter((s) => s !== sid);
  openPlaylist(pid);
}
function deletePlaylist(pid) {
  state.playlists = state.playlists.filter((p) => p.id !== pid);
  state.favorites.playlists = state.favorites.playlists.filter(
    (id) => id !== pid,
  );
  closeModal();
  setView("playlists");
  toast("Playlist dihapus");
}
function playPlaylist(pid) {
  const p = state.playlists.find((x) => x.id === pid);
  if (!p || !p.songIds.length) {
    toast("Playlist kosong");
    return;
  }
  closeModal();
  setQueue(p.songIds, 0);
}

/* ---------------- FAVORITES ---------------- */
function toggleFavSong(id) {
  const f = state.favorites.songs;
  const i = f.indexOf(id);
  if (i > -1) f.splice(i, 1);
  else f.push(id);
  render();
}
function toggleFavPlaylist(id) {
  const f = state.favorites.playlists;
  const i = f.indexOf(id);
  if (i > -1) f.splice(i, 1);
  else f.push(id);
  render();
}
function toggleFavArtist(name) {
  const f = state.favorites.artists;
  const i = f.indexOf(name);
  if (i > -1) f.splice(i, 1);
  else f.push(name);
  render();
}
function renderFavorites() {
  const tab = state.favTab;
  let content = "";
  if (tab === "songs") {
    const list = state.favorites.songs.map(getSong).filter(Boolean);
    content = list.length
      ? `<div style="max-width:640px;">${list.map((s) => songRow(s)).join("")}</div>`
      : `<div class="sub">Belum ada lagu favorit. Tap ♡ di sebuah lagu.</div>`;
  } else if (tab === "artists") {
    const list = state.favorites.artists;
    content = list.length
      ? `<div class="grid-cards">${list.map((name) => `<div class="card"><div style="font-size:1.8rem;">🎙️</div><div class="playlist-name" style="margin-top:8px;">${name}</div></div>`).join("")}</div>`
      : `<div class="sub">Belum ada artis favorit.</div>`;
  } else {
    const list = state.playlists.filter((p) =>
      state.favorites.playlists.includes(p.id),
    );
    content = list.length
      ? `<div class="grid-cards">${list.map((p) => playlistCard(p)).join("")}</div>`
      : `<div class="sub">Belum ada playlist favorit.</div>`;
  }
  return `
  <div class="page-head"><div><h2>Favorites</h2><div class="sub">Lagu, artis, dan playlist favoritmu.</div></div></div>
  <div class="tabs">
    ${["songs", "artists", "playlists"].map((t) => `<button class="tab-btn ${tab === t ? "active" : ""}" onclick="setFavTab('${t}')">${{ songs: "Lagu", artists: "Artis", playlists: "Playlist" }[t]}</button>`).join("")}
  </div>
  ${content}
  `;
}
function setFavTab(t) {
  state.favTab = t;
  render();
}

/* ---------------- BATTLE ---------------- */
let currentBattlePair = null;
function pickBattlePair() {
  const a = SONGS[Math.floor(Math.random() * SONGS.length)];
  let b = SONGS[Math.floor(Math.random() * SONGS.length)];
  while (b.id === a.id) b = SONGS[Math.floor(Math.random() * SONGS.length)];
  currentBattlePair = [a, b];
}
function renderBattle() {
  if (!currentBattlePair) pickBattlePair();
  const [a, b] = currentBattlePair;
  const ranking = [...SONGS]
    .map((s) => ({
      s,
      w: state.battle.wins[s.id] || 0,
      l: state.battle.losses[s.id] || 0,
    }))
    .filter((r) => r.w + r.l > 0)
    .sort((x, y) => y.w - x.w)
    .slice(0, 6);
  return `
  <div class="page-head"><div><h2>Music Battle</h2><div class="sub">Dua lagu, satu pemenang. Pilih favoritmu.</div></div></div>
  <div class="battle-wrap">
    <div class="battle-card" onclick="vote('${a.id}','${b.id}')">
      <div class="cov" style="background:${moodById(a.mood).color}33;">${a.cov}</div>
      <div style="font-weight:800;">${a.title}</div><div class="sub">${a.artist}</div>
    </div>
    <div class="battle-vs">VS</div>
    <div class="battle-card" onclick="vote('${b.id}','${a.id}')">
      <div class="cov" style="background:${moodById(b.mood).color}33;">${b.cov}</div>
      <div style="font-weight:800;">${b.title}</div><div class="sub">${b.artist}</div>
    </div>
  </div>
  <div class="section-title">Ranking</div>
  ${
    ranking.length
      ? ranking
          .map(
            (r, i) => `
    <div class="rank-row"><div class="rank-num">${i + 1}</div>
      <div>${r.s.title} <span class="sub">— ${r.s.artist}</span></div>
      <div class="pill accent">${r.w}W / ${r.l}L</div>
    </div>`,
          )
          .join("")
      : '<div class="sub">Belum ada data. Mulai voting di atas!</div>'
  }
  <div class="section-title">Riwayat Battle</div>
  ${
    state.battle.history
      .slice(-6)
      .reverse()
      .map(
        (h) =>
          `<div class="sub" style="margin-bottom:6px;">🏆 ${getSong(h.win)?.title} mengalahkan ${getSong(h.lose)?.title}</div>`,
      )
      .join("") || '<div class="sub">Belum ada riwayat.</div>'
  }
  `;
}
function vote(winId, loseId) {
  state.battle.wins[winId] = (state.battle.wins[winId] || 0) + 1;
  state.battle.losses[loseId] = (state.battle.losses[loseId] || 0) + 1;
  state.battle.history.push({ win: winId, lose: loseId });
  bumpChallenge("battle", 1);
  addXP(8, "Battle");
  pickBattlePair();
  render();
}

/* ---------------- CHALLENGES ---------------- */
function renderChallenges() {
  return `
  <div class="page-head"><div><h2>Daily Challenges</h2><div class="sub">Selesaikan tantangan untuk XP dan badge.</div></div></div>
  ${CHALLENGE_TEMPLATES.map((c) => {
    const p = state.challengeProgress[c.id] || 0;
    const done = p >= c.target;
    const claimed = state.challengeClaimed[c.id];
    return `<div class="card challenge-card" style="max-width:560px;margin-bottom:12px;">
      <div style="font-size:1.6rem;">${done ? "✅" : "🎯"}</div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:.9rem;">${c.text}</div>
        <div class="sub" style="font-size:.76rem;">${p}/${c.target} · Hadiah ${c.xp} XP</div>
        <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100, (p / c.target) * 100)}%"></div></div>
      </div>
      <button class="btn-accent" ${!done || claimed ? "disabled" : ""} onclick="claimChallenge('${c.id}')">${claimed ? "Diklaim" : "Klaim"}</button>
    </div>`;
  }).join("")}
  `;
}
function claimChallenge(cid) {
  const c = CHALLENGE_TEMPLATES.find((x) => x.id === cid);
  state.challengeClaimed[cid] = true;
  addXP(c.xp, "Challenge selesai");
  render();
}

/* ---------------- LEVEL/BADGE inside Profile & STATS ---------------- */
function renderStats() {
  const last7 = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const rec = state.moodHistory.find((h) => h.date === d.toDateString());
    return {
      label: d.toLocaleDateString("id-ID", { weekday: "short" }),
      mood: rec ? rec.mood : null,
    };
  });
  const counts = {};
  state.moodHistory.forEach(
    (h) => (counts[h.mood] = (counts[h.mood] || 0) + 1),
  );
  let topMood = null,
    topCount = 0;
  Object.entries(counts).forEach(([k, v]) => {
    if (v > topCount) {
      topMood = k;
      topCount = v;
    }
  });
  return `
  <div class="page-head"><div><h2>Mood Timeline</h2><div class="sub">Statistik perjalanan mood-mu.</div></div></div>
  <div class="grid-cards" style="margin-bottom:26px;">
    <div class="card"><div class="sub">Mood hari ini</div><div class="stat-num">${state.currentMood ? moodById(state.currentMood).em : "—"}</div><div class="sub">${state.currentMood ? moodById(state.currentMood).label : "Belum dipilih"}</div></div>
    <div class="card"><div class="sub">Mood paling sering</div><div class="stat-num">${topMood ? moodById(topMood).em : "—"}</div><div class="sub">${topMood ? moodById(topMood).label + " · " + topCount + "x" : "Belum ada data"}</div></div>
    <div class="card"><div class="sub">Total hari tercatat</div><div class="stat-num">${state.moodHistory.length}</div><div class="sub">sejak mulai memakai Moodboard</div></div>
  </div>
  <div class="section-title">7 hari terakhir</div>
  <div class="card" style="max-width:560px;">
    <div class="bar-chart">
      ${last7
        .map(
          (d) => `<div class="bar-col">
        <div style="font-size:1.1rem;">${d.mood ? moodById(d.mood).em : "·"}</div>
        <div class="bar-fill" style="height:${d.mood ? "70%" : "6%"}; background:${d.mood ? moodById(d.mood).color : "var(--ink-soft2)"}"></div>
        <div class="bar-label">${d.label}</div>
      </div>`,
        )
        .join("")}
    </div>
  </div>
  `;
}

/* ---------------- FRIENDS ---------------- */
function renderFriends() {
  return `
  <div class="page-head">
    <div><h2>Friends</h2><div class="sub">Lihat aktivitas teman &amp; bagikan musikmu.</div></div>
    <button class="btn-accent" onclick="addFriend()">+ Tambah Teman</button>
  </div>
  <div class="section-title">Aktivitas Teman</div>
  ${state.friends
    .map(
      (f) => `<div class="friend-row"><div class="av">${f.em}</div>
    <div style="flex:1;"><div style="font-weight:700;font-size:.87rem;">${f.name}</div><div class="sub">sedang ${f.activity}</div></div>
    <button class="icon-btn" onclick="likeFriend('${f.id}')">👍</button>
  </div>`,
    )
    .join("")}
  <div class="section-title">Bagikan</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <button class="btn-ghost" onclick="setView('mood')">Bagikan Mood</button>
    <button class="btn-ghost" onclick="shareCurrentSong()">Bagikan Lagu Terkini</button>
  </div>
  `;
}
const FRIEND_NAMES = ["Rani", "Yoga", "Dewi", "Fajar", "Intan", "Reza", "Alya"];
const FRIEND_EMS = ["🎻", "🎷", "🎺", "🪕", "🎼"];
function addFriend() {
  const name = FRIEND_NAMES[Math.floor(Math.random() * FRIEND_NAMES.length)];
  const em = FRIEND_EMS[Math.floor(Math.random() * FRIEND_EMS.length)];
  state.friends.push({
    id: "f" + Date.now(),
    name,
    em,
    activity: "bergabung di Moodboard",
  });
  render();
  toast(name + " ditambahkan sebagai teman");
}
function likeFriend(id) {
  toast("Kamu menyukai aktivitas ini");
}
function shareCurrentSong() {
  if (state.qIndex < 0) {
    toast("Putar lagu dulu untuk membagikannya");
    return;
  }
  toast("Kartu lagu siap dibagikan!");
}

/* ---------------- PROFILE ---------------- */
function renderProfile() {
  const topArtistCounts = {};
  state.favorites.songs
    .map(getSong)
    .filter(Boolean)
    .forEach(
      (s) => (topArtistCounts[s.artist] = (topArtistCounts[s.artist] || 0) + 1),
    );
  const topArtists = Object.keys(topArtistCounts).slice(0, 4);
  const favSongs = state.favorites.songs
    .map(getSong)
    .filter(Boolean)
    .slice(0, 4);
  const genreCounts = {};
  state.favorites.songs
    .map(getSong)
    .filter(Boolean)
    .forEach((s) => (genreCounts[s.genre] = (genreCounts[s.genre] || 0) + 1));
  const favGenres = Object.keys(genreCounts);
  return `
  <div class="page-head"><div><h2>Music Profile</h2></div></div>
  <div class="card" style="max-width:640px;display:flex;gap:18px;align-items:center;margin-bottom:22px;">
    <div style="width:64px;height:64px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:1.7rem;">${state.user.avatar}</div>
    <div style="flex:1;">
      <div style="font-weight:800;font-size:1.1rem;">${state.user.name}</div>
      <div class="sub">Level ${level()} · ${state.xp} XP total</div>
      <div class="xp-bar-wrap" style="margin-top:8px;"><div class="xp-bar-fill" style="width:${xpIntoLevel()}%"></div></div>
    </div>
  </div>

  <div class="section-title">Badges</div>
  <div class="grid-cards" style="grid-template-columns:repeat(auto-fill,minmax(100px,1fr));">
    ${BADGES.map((b) => `<div class="card badge-tile ${level() >= b.lvl ? "" : "locked"}"><div class="em">${b.em}</div><div class="n">${b.name}</div></div>`).join("")}
  </div>

  <div class="section-title">Top Artists</div>
  ${topArtists.length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;">${topArtists.map((a) => `<span class="pill">${a}</span>`).join("")}</div>` : `<div class="sub">Favoritkan beberapa lagu untuk melihat top artis.</div>`}

  <div class="section-title">Top Songs</div>
  ${favSongs.length ? `<div style="max-width:600px;">${favSongs.map((s) => songRow(s)).join("")}</div>` : `<div class="sub">Belum ada lagu favorit.</div>`}

  <div class="section-title">Favorite Genres</div>
  ${favGenres.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;">${favGenres.map((g) => `<span class="pill accent">${g}</span>`).join("")}</div>` : `<div class="sub">Belum ada data genre.</div>`}

  <div class="section-title">Favorite Mood</div>
  <div class="sub">${state.currentMood ? moodById(state.currentMood).em + " " + moodById(state.currentMood).label : "Belum ada mood dipilih."}</div>
  `;
}

/* ---------------- SETTINGS ---------------- */
function renderSpotifyCard() {
  const sp = state.spotify;
  if (sp.connected) {
    return `<div class="card" style="max-width:560px;margin-bottom:16px;display:flex;align-items:center;gap:14px;">
      <div style="width:44px;height:44px;border-radius:50%;overflow:hidden;background:#1DB954;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;">${sp.profile?.images?.[0]?.url ? `<img src="${sp.profile.images[0].url}" style="width:100%;height:100%;object-fit:cover;">` : "🟢"}</div>
      <div style="flex:1;">
        <div style="font-weight:700;">Terhubung sebagai ${sp.profile?.display_name || "pengguna Spotify"}</div>
        <div class="sub">Pencarian, top tracks, dan impor playlist aktif.</div>
      </div>
      <button class="btn-ghost" onclick="spotifyDisconnect()">Putuskan</button>
    </div>`;
  }
  return `<div class="card" style="max-width:560px;margin-bottom:16px;">
    <div style="font-weight:700;margin-bottom:4px;">🟢 Hubungkan Spotify</div>
    <div class="sub" style="margin-bottom:10px;">
      Butuh Client ID dari <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener" style="color:var(--accent);">Spotify Developer Dashboard</a>. Daftarkan Redirect URI berikut persis pada appmu (harus HTTPS, atau <code>http://127.0.0.1:PORT/...</code> untuk uji lokal — Spotify sudah tidak menerima <code>localhost</code>):
    </div>
    <div class="pill" style="display:block;white-space:normal;word-break:break-all;margin-bottom:12px;font-family:monospace;background:var(--ink-soft2);">${location.origin + location.pathname}</div>
    <div class="field" style="margin-bottom:10px;"><label>Client ID</label><input id="sp-client-id" placeholder="Tempel Client ID di sini"></div>
    <button class="btn-accent" onclick="spotifyConnect()">Hubungkan Spotify</button>
    <div class="sub" style="margin-top:10px;font-size:.72rem;">Catatan: koneksi ini hanya berjalan saat file di-hosting sendiri di domain HTTPS atau 127.0.0.1 — tidak akan berfungsi di pratinjau dalam chat ini.</div>
  </div>`;
}
function renderSettings() {
  return `
  <div class="page-head"><div><h2>Settings</h2></div></div>
  ${renderSpotifyCard()}
  <div class="card" style="max-width:560px;padding:6px 20px;">
    <div class="settings-row">
      <div><div class="lbl">Tampilan Gelap/Terang</div><div class="desc">Ganti tema aplikasi</div></div>
      <div class="switch ${state.theme === "dark" ? "" : "on"}" onclick="toggleTheme()"><div class="knob"></div></div>
    </div>
    <div class="settings-row">
      <div><div class="lbl">Notifikasi</div><div class="desc">Pengingat challenge harian</div></div>
      <div class="switch ${state.settings.notif ? "on" : ""}" onclick="toggleSetting('notif')"><div class="knob"></div></div>
    </div>
    <div class="settings-row">
      <div><div class="lbl">Profil Publik</div><div class="desc">Teman bisa melihat aktivitas mood-mu</div></div>
      <div class="switch ${state.settings.privacy ? "on" : ""}" onclick="toggleSetting('privacy')"><div class="knob"></div></div>
    </div>
    <div class="settings-row">
      <div><div class="lbl">Bahasa</div><div class="desc">Bahasa aplikasi</div></div>
      <select onchange="state.settings.lang=this.value" style="background:var(--ink-soft2);padding:6px 10px;border-radius:8px;">
        <option value="id" ${state.settings.lang === "id" ? "selected" : ""}>Indonesia</option>
        <option value="en" ${state.settings.lang === "en" ? "selected" : ""}>English</option>
      </select>
    </div>
    <div class="settings-row">
      <div><div class="lbl">Volume Default</div></div>
      <input type="range" min="0" max="100" value="${state.volume}" oninput="setVolume(this.value)">
    </div>
    <div class="settings-row">
      <div><div class="lbl">Edit Profil</div></div>
      <button class="btn-ghost" onclick="openEditProfile()">Edit</button>
    </div>
    <div class="settings-row">
      <div><div class="lbl">Keluar</div></div>
      <button class="btn-ghost" onclick="logout()">Logout</button>
    </div>
  </div>
  `;
}
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", state.theme);
  render();
}
function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  render();
}
function openEditProfile() {
  document.getElementById("modal-root").innerHTML = `
  <div class="modal-back" onclick="if(event.target===this) closeModal()">
    <div class="modal">
      <h3>Edit Profil</h3>
      <div class="field"><label>Nama</label><input id="ep-name" value="${state.user.name}"></div>
      <div class="field"><label>Foto profil</label><div class="avatar-pick">${AVATARS.map((a) => `<button class="${a === state.user.avatar ? "sel" : ""}" onclick="setEpAvatar('${a}',this)">${a}</button>`).join("")}</div></div>
      <button class="btn-primary" onclick="saveProfile()">Simpan</button>
    </div>
  </div>`;
}
let epAvatar = null;
function setEpAvatar(a, btn) {
  epAvatar = a;
  btn.parentElement
    .querySelectorAll("button")
    .forEach((b) => b.classList.remove("sel"));
  btn.classList.add("sel");
}
function saveProfile() {
  state.user.name =
    document.getElementById("ep-name").value.trim() || state.user.name;
  if (epAvatar) state.user.avatar = epAvatar;
  closeModal();
  render();
  toast("Profil diperbarui");
}

/* ============================================================
   PLAYER ENGINE
============================================================ */
function getAudioEl() {
  return document.getElementById("sp-audio");
}
function isPreviewPlayable(s) {
  return !!(s && s.external && s.previewUrl);
}
function loadCurrentPlayback() {
  stopTimer();
  const audio = getAudioEl();
  audio.pause();
  const s = currentSong();
  if (!s) {
    audio.removeAttribute("src");
    return;
  }
  if (isPreviewPlayable(s)) {
    audio.src = s.previewUrl;
    audio.currentTime = 0;
    audio.volume = state.volume / 100;
    state.previewDur = 30;
    if (state.playing)
      audio.play().catch(() => {
        state.playing = false;
        renderPlayerBar();
      });
  } else {
    audio.removeAttribute("src");
    if (state.playing) startTimer();
  }
}
function setQueue(ids, startIndex) {
  state.queue = ids;
  state.qIndex = startIndex;
  state.progress = 0;
  state.playing = true;
  loadCurrentPlayback();
  render();
}
function playSongById(id, fromCtx) {
  const s = getSong(id);
  if (!s) return;
  let pool;
  if (s.external) {
    pool = [id];
  } else if (fromCtx === "discover") {
    pool = SONGS.map((x) => x.id);
  } else if (s.mood) {
    pool = songsByMood(s.mood).map((x) => x.id);
  } else {
    pool = [id];
  }
  const startAt = pool.indexOf(id);
  setQueue(pool, startAt > -1 ? startAt : 0);
}
function currentSong() {
  return state.qIndex > -1 ? getSong(state.queue[state.qIndex]) : null;
}
function togglePlay() {
  const s = currentSong();
  if (!s) return;
  state.playing = !state.playing;
  if (isPreviewPlayable(s)) {
    const audio = getAudioEl();
    if (state.playing) audio.play().catch(() => {});
    else audio.pause();
  } else {
    state.playing ? startTimer() : stopTimer();
  }
  renderPlayerBar();
}
function startTimer() {
  stopTimer();
  playTimer = setInterval(() => {
    const s = currentSong();
    if (!s) return;
    state.progress += 1;
    if (state.progress >= s.dur) {
      if (state.repeat === "one") {
        state.progress = 0;
      } else {
        nextSong();
        return;
      }
    }
    renderPlayerBar();
  }, 1000);
}
function stopTimer() {
  clearInterval(playTimer);
}
function nextSong() {
  if (!state.queue.length) return;
  if (state.shuffle) {
    state.qIndex = Math.floor(Math.random() * state.queue.length);
  } else if (state.qIndex < state.queue.length - 1) {
    state.qIndex++;
  } else if (state.repeat === "all") {
    state.qIndex = 0;
  } else {
    state.playing = false;
    stopTimer();
    getAudioEl().pause();
    renderPlayerBar();
    return;
  }
  state.progress = 0;
  state.playing = true;
  loadCurrentPlayback();
  renderPlayerBar();
}
function prevSong() {
  if (!state.queue.length) return;
  const s = currentSong();
  if (state.progress > 4) {
    state.progress = 0;
    if (isPreviewPlayable(s)) getAudioEl().currentTime = 0;
    renderPlayerBar();
    return;
  }
  state.qIndex = state.qIndex > 0 ? state.qIndex - 1 : 0;
  state.progress = 0;
  loadCurrentPlayback();
  renderPlayerBar();
}
function toggleShuffle() {
  state.shuffle = !state.shuffle;
  renderPlayerBar();
}
function toggleRepeat() {
  state.repeat =
    state.repeat === "off" ? "all" : state.repeat === "all" ? "one" : "off";
  renderPlayerBar();
}
function setVolume(v) {
  state.volume = +v;
  const audio = getAudioEl();
  if (audio) audio.volume = state.volume / 100;
}
function seek(e) {
  const s = currentSong();
  if (!s) return;
  const bar = document.getElementById("pb-bar");
  const total = isPreviewPlayable(s) ? state.previewDur || 30 : s.dur;
  const pct = (e.clientX - bar.getBoundingClientRect().left) / bar.clientWidth;
  const t = Math.max(0, Math.min(total, pct * total));
  state.progress = t;
  if (isPreviewPlayable(s)) getAudioEl().currentTime = t;
  renderPlayerBar();
}
function toggleFavCurrent() {
  const s = currentSong();
  if (s) toggleFavSong(s.id);
  renderPlayerBar();
  if (state.view === "favorites") render();
}
function toggleQueue() {
  const d = document.getElementById("queue-drawer");
  d.classList.toggle("on");
  document.getElementById("queue-list").innerHTML =
    state.queue
      .map((id, i) => {
        const s = getSong(id);
        return `<div class="song-row" style="${i === state.qIndex ? "background:var(--accent-soft);border-radius:10px;" : ""}" onclick="jumpTo(${i})">
      <div class="cov" style="background:${moodById(s.mood).color}22;">${s.cov}</div>
      <div class="meta"><div class="t">${s.title}</div><div class="a">${s.artist}</div></div>
      <div class="dur">${fmt(s.dur)}</div>
    </div>`;
      })
      .join("") || '<div class="sub">Antrean kosong.</div>';
}
function jumpTo(i) {
  state.qIndex = i;
  state.progress = 0;
  state.playing = true;
  loadCurrentPlayback();
  renderPlayerBar();
}

function renderPlayerBar() {
  const bar = document.getElementById("playerbar");
  const s = currentSong();
  if (!s) {
    bar.classList.remove("on");
    return;
  }
  bar.classList.add("on");
  const playable = isPreviewPlayable(s);
  const totalDur = playable ? state.previewDur || 30 : s.dur;
  document.getElementById("pb-cov").innerHTML = songCoverHtml(s);
  document.getElementById("pb-cov").style.background = songMoodColor(s) + "33";
  document.getElementById("pb-title").textContent = s.title;
  document.getElementById("pb-artist").textContent =
    s.artist +
    (playable
      ? " · Pratinjau Spotify"
      : s.external
        ? " · Spotify (tanpa pratinjau)"
        : "");
  document.getElementById("pb-play").textContent = state.playing ? "⏸" : "▶";
  document.getElementById("pb-cur").textContent = fmt(state.progress);
  document.getElementById("pb-dur").textContent = fmt(totalDur);
  document.getElementById("pb-bar-fill").style.width =
    Math.min(100, (state.progress / totalDur) * 100) + "%";
  document
    .getElementById("pb-shuffle")
    .classList.toggle("active-toggle", state.shuffle);
  document
    .getElementById("pb-repeat")
    .classList.toggle("active-toggle", state.repeat !== "off");
  document.getElementById("pb-repeat").textContent =
    state.repeat === "one" ? "🔂" : "🔁";
  const favBtn = document.getElementById("pb-fav");
  const isFav = state.favorites.songs.includes(s.id);
  favBtn.textContent = isFav ? "♥" : "♡";
  favBtn.classList.toggle("on", isFav);
  document.getElementById("pb-volume").value = state.volume;
  const openWrap = document.getElementById("pb-open-wrap");
  if (openWrap)
    openWrap.innerHTML =
      s.external && s.spotifyUrl
        ? `<a href="${s.spotifyUrl}" target="_blank" rel="noopener" class="icon-btn" title="Buka di Spotify">↗</a>`
        : "";
}
function initAudioEvents() {
  const audio = getAudioEl();
  if (!audio) return;
  audio.addEventListener("timeupdate", () => {
    const s = currentSong();
    if (!isPreviewPlayable(s)) return;
    state.progress = audio.currentTime;
    renderPlayerBar();
  });
  audio.addEventListener("loadedmetadata", () => {
    if (audio.duration && isFinite(audio.duration))
      state.previewDur = audio.duration;
    renderPlayerBar();
  });
  audio.addEventListener("ended", () => {
    const s = currentSong();
    if (!isPreviewPlayable(s)) return;
    if (state.repeat === "one") {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else nextSong();
  });
}

/* ============================================================
   INIT
============================================================ */
renderAvatarPicker();
updatePwMeter("");
initAudioEvents();
handleSpotifyRedirect();
// GIS dimuat async — coba beberapa kali sampai skripnya siap.
(function waitGoogle(tries) {
  if (window.google?.accounts?.id || tries <= 0) {
    initGoogleSignIn();
    return;
  }
  setTimeout(() => waitGoogle(tries - 1), 300);
})(15);
// Validasi langsung saat mengetik
["li-email", "rg-email"].forEach((id) => {
  document.getElementById(id)?.addEventListener("blur", (e) => {
    const v = e.target.value.trim();
    if (v) showErr(id + "-err", validateEmail(v.toLowerCase()));
  });
});
