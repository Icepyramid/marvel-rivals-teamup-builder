const roleColors = {
  Vanguard: "#51c2ff",
  Duelist: "#ff5b82",
  Strategist: "#4cf0b5",
  Flex: "#ffd84f"
};

const relationships = {
  "Hela": ["Loki", "Thor", "Deadpool", "Phoenix"],
  "Gambit": ["Wolverine", "Cyclops", "Deadpool", "Rogue"],
  "Rocket Raccoon": ["The Punisher", "Peni Parker", "Mister Fantastic"],
  "Thor": ["Storm", "Captain America", "Iron Man"],
  "Jeff the Land Shark": ["Storm", "Devil Dinosaur", "Groot"],
  "Mantis": ["Loki", "Groot", "Emma Frost"],
  "Hulk": ["Doctor Strange", "Namor", "Iron Man"],
  "Adam Warlock": ["Mantis", "Star-Lord", "Luna Snow"],
  "Cloak & Dagger": ["Hawkeye", "Psylocke", "Moon Knight"],
  "Venom": ["Hela", "Jeff the Land Shark", "Spider-Man"],
  "The Hood": ["Cloak & Dagger", "Jubilee", "Magik"],
  "Luna Snow": ["Cloak & Dagger", "Namor", "Emma Frost"],
  "Storm": ["Black Panther", "Adam Warlock", "Human Torch"],
  "Phoenix": ["Cyclops", "Venom", "Black Widow"],
  "Jubilee": ["Gambit", "Human Torch", "Scarlet Witch"],
  "Captain America": ["Hulk", "Blade"],
  "Invisible Woman": ["Doctor Strange", "The Thing"],
  "Star-Lord": ["Mantis", "Angela"],
  "Psylocke": ["Hawkeye", "White Fox"],
  "Groot": ["Rocket Raccoon", "Star-Lord"],
  "The Punisher": ["Winter Soldier", "Devil Dinosaur"],
  "Elsa Bloodstone": ["Winter Soldier", "Moon Knight"],
  "Black Panther": ["Peni Parker", "Black Cat"],
  "Deadpool": ["Jeff the Land Shark", "Elsa Bloodstone"],
  "Emma Frost": ["Psylocke", "Magneto"],
  "The Thing": ["Iron Fist", "Mister Fantastic"],
  "White Fox": ["Iron Fist", "Luna Snow"],
  "Human Torch": ["Invisible Woman", "The Thing"],
  "Spider-Man": ["Black Cat", "Squirrel Girl"],
  "Blade": ["Jubilee", "Venom"],
  "Iron Man": ["Squirrel Girl", "Ultron"],
  "Doctor Strange": ["Magik", "Scarlet Witch"],
  "Peni Parker": ["Ultron", "Spider-Man"],
  "Magneto": ["Gambit", "Rogue"],
  "Wolverine": ["Hulk"],
  "Daredevil": ["The Punisher"],
  "Winter Soldier": ["Captain America"],
  "Squirrel Girl": ["Rocket Raccoon"],
  "Namor": ["Hela"],
  "Magik": ["Black Panther"],
  "Ultron": ["Adam Warlock"],
  "Cyclops": ["Wolverine"],
  "Mister Fantastic": ["Invisible Woman"],
  "Iron Fist": ["Daredevil"],
  "Black Widow": ["Daredevil"],
  "Angela": ["Thor"],
  "Devil Dinosaur": ["Elsa Bloodstone"],
  "Black Cat": ["White Fox"],
  "Rogue": ["Phoenix"],
  "Moon Knight": ["Blade"],
  "Scarlet Witch": ["Magneto"],
  "Loki": ["Angela"],
  "Hawkeye": ["Black Widow"]
};

const roles = {
  "Hela": "Duelist", "Gambit": "Strategist", "Rocket Raccoon": "Strategist",
  "Thor": "Vanguard", "Jeff the Land Shark": "Strategist", "Mantis": "Strategist",
  "Hulk": "Vanguard", "Adam Warlock": "Strategist", "Cloak & Dagger": "Strategist",
  "Venom": "Vanguard", "The Hood": "Vanguard", "Luna Snow": "Strategist",
  "Storm": "Duelist", "Phoenix": "Duelist", "Jubilee": "Strategist",
  "Captain America": "Vanguard", "Invisible Woman": "Strategist", "Star-Lord": "Duelist",
  "Psylocke": "Duelist", "Groot": "Vanguard", "The Punisher": "Duelist",
  "Elsa Bloodstone": "Duelist", "Black Panther": "Duelist", "Deadpool": "Flex",
  "Emma Frost": "Vanguard", "The Thing": "Vanguard", "White Fox": "Strategist",
  "Human Torch": "Duelist", "Spider-Man": "Duelist", "Blade": "Duelist",
  "Iron Man": "Duelist", "Doctor Strange": "Vanguard", "Peni Parker": "Vanguard",
  "Magneto": "Vanguard", "Wolverine": "Duelist", "Daredevil": "Duelist",
  "Winter Soldier": "Duelist", "Squirrel Girl": "Duelist", "Namor": "Duelist",
  "Magik": "Duelist", "Ultron": "Strategist", "Cyclops": "Duelist",
  "Mister Fantastic": "Duelist", "Iron Fist": "Duelist", "Black Widow": "Duelist",
  "Angela": "Vanguard", "Devil Dinosaur": "Vanguard", "Black Cat": "Duelist",
  "Rogue": "Vanguard", "Moon Knight": "Duelist", "Scarlet Witch": "Duelist",
  "Loki": "Strategist", "Hawkeye": "Duelist"
};

const portraits = {
  "Jubilee": "https://r.res.easebar.com/pic/20260708/48ff52bf-6f30-4350-b883-00f2652015dd.png",
  "Cyclops": "https://r.res.easebar.com/pic/20260612/8cf04b13-2e3c-49bc-8f90-000732c94f43.png",
  "Devil Dinosaur": "https://r.res.easebar.com/pic/20260515/84181e94-e504-48a8-94e2-6002678fb4dd.png",
  "Black Cat": "https://r.res.easebar.com/pic/20260417/9aad3814-3985-4e14-ab1d-a2813bcf6850.png",
  "White Fox": "https://r.res.easebar.com/pic/20260320/fee6b610-5bc8-4a73-92e0-5d56d983c260.png",
  "Elsa Bloodstone": "https://r.res.easebar.com/pic/20260213/76cb7d5d-e120-496e-acb8-bbd4af0e3313.png",
  "Deadpool": "https://r.res.easebar.com/pic/20260116/2d6d1d2b-281f-4efd-b252-d792a11fce98.png",
  "Rogue": "https://r.res.easebar.com/pic/20251212/f443e1cb-5605-4c4e-8d29-24078699d479.png",
  "Gambit": "https://r.res.easebar.com/pic/20251115/32d9260c-ff1b-45b3-b95e-9e6864aa75f4.png",
  "Daredevil": "https://r.res.easebar.com/pic/20251010/620b1cc1-a00d-4ba3-9867-a7093bc500c6.png",
  "Angela": "https://r.res.easebar.com/pic/20250912/cf044a85-7bec-4bc1-8a32-6fcd06c25480.png",
  "Blade": "https://r.res.easebar.com/pic/20250808/8c35438e-3359-4ad9-8d49-2e1c6a29d463.png",
  "Phoenix": "https://r.res.easebar.com/pic/20250711/e3658f05-e1f0-451d-902f-12ed100caa3e.png",
  "Ultron": "https://r.res.easebar.com/pic/20250529/3644db29-a6d9-4497-ba00-0b834aa66a63.png",
  "Emma Frost": "https://r.res.easebar.com/pic/20250408/f625b9b9-e844-4ccf-b98e-eaff91818258.png",
  "The Thing": "https://r.res.easebar.com/pic/20250220/48b05dd6-4ddf-431a-b517-ff7634940528.png",
  "Human Torch": "https://r.res.easebar.com/pic/20250220/697bbc3d-7e84-429a-90ee-c01edc8280ce.png",
  "Invisible Woman": "https://r.res.easebar.com/pic/20250109/671bff2d-a31c-4b54-872d-a74669db3c80.png",
  "Mister Fantastic": "https://r.res.easebar.com/pic/20250109/65590c45-16ea-44f3-a508-c80a9f5547b9.png",
  "Squirrel Girl": "https://r.res.easebar.com/pic/20241201/4bb60bec-2314-4ffd-8698-574c00bc16cc.png",
  "Black Widow": "https://r.res.easebar.com/pic/20241204/f8f32a42-a17a-482c-8da0-cfe273b7da77.png",
  "Wolverine": "https://r.res.easebar.com/pic/20241204/6decb3c7-c852-4d5e-811c-a932e3bfc4a8.png",
  "Cloak & Dagger": "https://r.res.easebar.com/pic/20241204/6fe1a0c6-8d0f-4674-872a-f7b54f0dd901.png",
  "Iron Fist": "https://r.res.easebar.com/pic/20241201/b68a9250-009e-424e-9a76-413d6e7ac70d.png",
  "Psylocke": "https://r.res.easebar.com/pic/20241127/74061285-68c2-4095-8ead-32f88791f9c2.png",
  "Hawkeye": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_27.png",
  "Iron Man": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_6.png",
  "Namor": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_20.png",
  "Moon Knight": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_26.png",
  "Star-Lord": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_16.png",
  "Scarlet Witch": "https://r.res.easebar.com/pic/20260615/9b56d391-4042-4447-932b-1e51ee3cdc78.png",
  "Winter Soldier": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_25.png",
  "Magik": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_12.png",
  "Spider-Man": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_13.png",
  "Black Panther": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_1.png",
  "Hela": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_5.png",
  "Storm": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_17.png",
  "Hulk": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_19.png",
  "Jeff the Land Shark": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_23.png",
  "The Punisher": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_4.png",
  "Luna Snow": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_18.png",
  "Adam Warlock": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_21.png",
  "Rocket Raccoon": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_8.png",
  "Loki": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_7.png",
  "Mantis": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_9.png",
  "Peni Parker": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_10.png",
  "Thor": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_22.png",
  "Magneto": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_11.png",
  "Venom": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_14.png",
  "Groot": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_3.png",
  "Captain America": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_24.png",
  "Doctor Strange": "https://www.marvelrivals.com/pc/gw/5da825b19a6a/heros/head_2.png"
};

const heroes = [...new Set([...Object.keys(relationships), ...Object.values(relationships).flat()])].sort();
const incoming = Object.fromEntries(heroes.map(hero => [hero, []]));
for (const [source, targets] of Object.entries(relationships)) {
  for (const target of targets) incoming[target].push(source);
}

const board = document.querySelector("#board");
const linkLayer = document.querySelector("#linkLayer");
const heroList = document.querySelector("#heroList");
const heroSearch = document.querySelector("#heroSearch");
const emptyState = document.querySelector("#emptyState");
const focusTitle = document.querySelector("#focusTitle");
const focusCopy = document.querySelector("#focusCopy");
const boardStats = document.querySelector("#boardStats");
const detailPanel = document.querySelector("#detailPanel");
const boardWrap = document.querySelector(".board-wrap");
const compSlots = document.querySelector("#compSlots");
const compDetail = document.querySelector("#compDetail");
const compStats = document.querySelector("#compStats");
const undoBtn = document.querySelector("#undoStep");
const redoBtn = document.querySelector("#redoStep");

const state = {
  nodes: new Map(),
  links: new Map(),
  hiddenLinks: new Set(),
  selected: null,
  labels: true,
  comp: Array(6).fill(null),
  // Parallel to `comp`: true when that slot's hero was placed on the board
  // specifically because it was added to this slot (so clearing the slot
  // should remove it from the board too); false when the hero was already
  // on the board independently before joining the comp.
  compOwned: Array(6).fill(false)
};

const history = { past: [], future: [] };
let pickingSlot = null;
let linkFilter = "all";
// When set (Vanguard/Duelist/Strategist), only icons/links related to that
// role stay colored — everything else goes colorless. Flex is exempt and
// always stays fully colored/visible.
let boardRoleFilter = null;
function roleFilterDimmed(hero) {
  return boardRoleFilter && roleOf(hero) !== boardRoleFilter && roleOf(hero) !== "Flex";
}
const view = { x: 0, y: 0, scale: 1 };

const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_LINK_COLOR = "#3ddc71";
const LINK_COLORS = ["#3ddc71", "#51c2ff", "#ff5b82", "#ffd84f", "#b98bff", "#ffffff"];
// A different color per simultaneously-open loop, assigned round-robin.
const LOOP_COLORS = ["#ffd84f", "#b98bff", "#51e0ff", "#ff8f4c", "#ff5b9d", "#8bffb0"];
// Links auto-revealed for the very first hero placed on an empty board
// start "colorless" (unconfirmed) until the user clicks one of their icons.
const PREVIEW_LINK_COLOR = "rgba(226, 232, 245, 0.32)";

// Record of an open "shortest loop" candidate, keyed by `${hero}::${index}`
// (up to 3 candidates offered per hero): which nodes/links it created (so
// hiding it can remove exactly those and nothing else) and which already-
// existing links it merely recolored (so hiding it can restore their
// previous color, unless another still-open loop or route also claims
// them). Loops/routes are fully independent — closing one never touches
// another.
const loopState = new Map();

// Record of an open "route" candidate (start -> end path), keyed by
// `route::${index}` (up to 3 candidates offered per search). Same
// create/undo bookkeeping shape as `loopState`.
const routeState = new Map();

// Record of an open "show all partners"/"show all enhanced" bulk toggle,
// keyed `${anchor}::${type}`: which nodes/links it created, so hiding it
// (clicking the same bulk button again) removes exactly those and nothing
// else — same claim-checking as loops/routes via `claimedElsewhere`.
const bulkState = new Map();

// Generic branch-and-bound search for the k shortest simple directed chains
// starting at `start` and walking `relationships` (outgoing/"Enhances")
// edges forward. `isEnd(node)` marks an acceptable terminal node for a
// chain — used for both "loop back to start" (isEnd = node === start) and
// "reach this other hero" (isEnd = node === end) searches. Once k results
// are found, any path already at or past the k-th shortest length is
// abandoned, so this stays fast even though the graph has loops up to 47
// heroes long.
function kShortestChains(start, isEnd, k) {
  const results = [];
  const path = [start];
  const visited = new Set([start]);
  const worstAccepted = () => (results.length < k ? Infinity : results[results.length - 1].length);
  function record(next) {
    const chain = [...path, next];
    if (chain.length > worstAccepted()) return;
    results.push(chain);
    results.sort((a, b) => a.length - b.length);
    if (results.length > k) results.length = k;
  }
  function dfs(node) {
    if (path.length + 1 > worstAccepted()) return;
    for (const next of relationships[node] || []) {
      if (next === start) {
        if (isEnd(next)) record(next);
        continue; // never walk back through the start hero mid-chain
      }
      if (visited.has(next)) continue;
      const reachedEnd = isEnd(next);
      if (reachedEnd) {
        record(next);
        continue; // terminal node — don't explore past it
      }
      visited.add(next);
      path.push(next);
      dfs(next);
      path.pop();
      visited.delete(next);
    }
  }
  dfs(start);
  return results;
}

// Up to `k` shortest directed cycles start -> ... -> start, shortest first.
function shortestLoopsThrough(start, k = 3) {
  return kShortestChains(start, node => node === start, k);
}

// Up to `k` shortest directed paths from `start` to `end` (distinct heroes),
// shortest first.
function shortestRoutes(start, end, k = 3) {
  if (!start || !end || start === end) return [];
  return kShortestChains(start, node => node === end, k);
}

// A link's color/existence can be "claimed" by any open loop OR open route —
// hiding one must never erase a link/node another still-open one relies on.
function claimedElsewhere(id) {
  return [...loopState.values(), ...routeState.values(), ...bulkState.values()]
    .find(r => r.newLinkIds.includes(id) || (r.recolored && r.recolored.has(id)));
}

// The color for a newly-shown loop/route — always one not already worn by
// any other currently-open loop or route, so two chains on screen at once
// are never visually confused with each other. Falls back to round-robin
// only once every color in the palette is already in use simultaneously.
function nextChainColor() {
  const active = [...loopState.values(), ...routeState.values()];
  const used = new Set(active.map(r => r.color));
  const free = LOOP_COLORS.find(c => !used.has(c));
  if (free) return free;
  return LOOP_COLORS[active.length % LOOP_COLORS.length];
}

function loopKey(hero, index) {
  return `${hero}::${index}`;
}

// Toggle: reveal the given shortest-loop candidate (one of up to 3 offered
// per hero, `index` picks which) on the board in its own color, or (if
// already shown) remove exactly what that loop added and nothing else —
// other open loops/routes are untouched.
function showLoop(hero, index, cycle) {
  const key = loopKey(hero, index);
  if (loopState.has(key)) {
    hideLoop(key);
    return;
  }
  const color = nextChainColor();
  const record = { hero, color, cycle, newNodes: [], newLinkIds: [], recolored: new Map() };
  const anchor = state.nodes.get(hero);
  const stops = cycle.slice(0, -1);
  const radius = 440;
  stops.forEach((stop, i) => {
    if (state.nodes.has(stop)) return;
    const angle = (Math.PI * 2 * i) / stops.length - Math.PI / 2;
    const spot = findFreeSpot(anchor.x + Math.cos(angle) * radius, anchor.y + Math.sin(angle) * radius);
    addNode(stop, spot.x, spot.y);
    record.newNodes.push(stop);
  });
  for (let i = 0; i < cycle.length - 1; i++) {
    const id = linkId(cycle[i], cycle[i + 1]);
    const existedAlready = state.links.has(id);
    addLink(cycle[i], cycle[i + 1], "outgoing");
    const link = state.links.get(id);
    if (existedAlready) record.recolored.set(id, link.color);
    else record.newLinkIds.push(id);
    link.color = color;
  }
  loopState.set(key, record);
  renderLinks();
  updateStats();
  if (state.selected) renderPanel(state.selected);
  autoFit();
  commit();
}

function hideLoop(key) {
  const record = loopState.get(key);
  if (!record) return;
  loopState.delete(key);

  record.newLinkIds.forEach(id => {
    if (!claimedElsewhere(id)) state.links.delete(id);
  });
  record.recolored.forEach((prevColor, id) => {
    const other = claimedElsewhere(id);
    const link = state.links.get(id);
    if (!link) return;
    link.color = other ? other.color : prevColor;
  });
  record.newNodes.forEach(node => {
    if (!state.nodes.has(node)) return;
    if (state.comp.includes(node)) return; // comp members stay on the board
    const stillLinked = [...state.links.values()].some(l => l.source === node || l.target === node);
    if (!stillLinked) detachNode(node);
  });

  renderLinks();
  updateStats();
  if (state.selected) renderPanel(state.selected);
  commit();
}

// A concrete, verified 6-loop cover of every hero that can ever be in a
// loop at all — computed offline (bipartite matching for the big disjoint
// pieces, then closing the leftovers with real detour edges). Loops here
// deliberately overlap where a hero belongs to more than one.
const FULL_LOOP_THEORY = [
  { color: LOOP_COLORS[0], members: ["Adam Warlock", "Luna Snow", "Cloak & Dagger", "Moon Knight", "Blade", "Jubilee", "Scarlet Witch", "Magneto", "Gambit", "Deadpool", "Jeff the Land Shark", "Storm", "Human Torch", "The Thing", "Mister Fantastic", "Invisible Woman", "Doctor Strange", "Magik", "Black Panther", "Black Cat", "White Fox", "Iron Fist", "Daredevil", "The Punisher", "Devil Dinosaur", "Elsa Bloodstone", "Winter Soldier", "Captain America", "Hulk", "Namor", "Hela", "Loki", "Angela", "Thor", "Iron Man", "Ultron"] },
  { color: LOOP_COLORS[1], members: ["Groot", "Star-Lord", "Mantis"] },
  { color: LOOP_COLORS[2], members: ["Peni Parker", "Spider-Man", "Squirrel Girl", "Rocket Raccoon"] },
  { color: LOOP_COLORS[3], members: ["Emma Frost", "Psylocke", "Hawkeye", "Black Widow", "Daredevil", "The Punisher", "Winter Soldier", "Captain America", "Hulk", "Iron Man", "Ultron", "Adam Warlock", "Mantis"] },
  { color: LOOP_COLORS[4], members: ["Rogue", "Phoenix", "Cyclops", "Wolverine", "Hulk", "Doctor Strange", "Scarlet Witch", "Magneto"] },
  { color: LOOP_COLORS[5], members: ["Venom", "Hela", "Phoenix"] }
];

let fullLoopTheoryOn = false;
let fullLoopTheorySnapshot = null;

function updateFullLoopButton() {
  const btn = document.querySelector("#fullLoopTheory");
  if (!btn) return;
  btn.classList.toggle("active", fullLoopTheoryOn);
  btn.textContent = fullLoopTheoryOn ? "Hide loop theory" : "Full loop theory";
}

// Lays out all 6 loops with generous, non-overlapping spacing: the big
// 36-hero loop as one large ring, the fully-separate small loops offset
// into their own clear regions, and each closure loop's few brand-new
// members fanned out from wherever that loop attaches to something
// already placed.
function toggleFullLoopTheory() {
  if (fullLoopTheoryOn) {
    restoreState(fullLoopTheorySnapshot);
    fullLoopTheoryOn = false;
    fullLoopTheorySnapshot = null;
    commit();
    updateFullLoopButton();
    loopTheoryPanel.classList.add("hidden");
    return;
  }

  fullLoopTheorySnapshot = snapshotState();
  state.nodes.forEach(n => n.el.remove());
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks.clear();
  state.selected = null;
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  resetView();
  emptyState.style.display = "none";
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";

  const positioned = new Map();
  const bigLoop = FULL_LOOP_THEORY[0];
  const R_BIG = 1900; // generous enough that 36 evenly-spaced heroes never sit closer than ~300px apart
  bigLoop.members.forEach((hero, i) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / bigLoop.members.length;
    positioned.set(hero, { x: Math.cos(angle) * R_BIG, y: Math.sin(angle) * R_BIG });
  });

  // Fixed offset regions for loops with no overlap yet into the big ring.
  const OFFSETS = [null, { x: -2600, y: -1700 }, { x: 2600, y: -1700 }, { x: 0, y: 2500 }, { x: -2600, y: 1700 }, { x: 2600, y: 1700 }];
  const R_SMALL = 260;

  for (let li = 1; li < FULL_LOOP_THEORY.length; li++) {
    const loop = FULL_LOOP_THEORY[li];
    const newMembers = loop.members.filter(h => !positioned.has(h));
    if (!newMembers.length) continue;
    const already = loop.members.filter(h => positioned.has(h)).map(h => positioned.get(h));
    let anchor;
    if (already.length) {
      const avg = { x: already.reduce((s, p) => s + p.x, 0) / already.length, y: already.reduce((s, p) => s + p.y, 0) / already.length };
      const dist = Math.hypot(avg.x, avg.y) || 1;
      // Push the anchor out from center step by step until its whole new-
      // member arc clears every already-placed node by a safe margin — the
      // average-of-scattered-members math can otherwise land surprisingly
      // close to an unrelated node on the far side of the big ring.
      let push = 700;
      let candidateAnchor;
      let clear = false;
      for (let attempt = 0; attempt < 12 && !clear; attempt++) {
        candidateAnchor = { x: avg.x + (avg.x / dist) * push, y: avg.y + (avg.y / dist) * push };
        clear = [...positioned.values()].every(p => Math.hypot(p.x - candidateAnchor.x, p.y - candidateAnchor.y) > R_SMALL + 320);
        if (!clear) push += 400;
      }
      anchor = candidateAnchor;
    } else {
      anchor = OFFSETS[li];
    }
    newMembers.forEach((hero, i) => {
      const angle = -Math.PI / 2 + (Math.PI * 2 * i) / Math.max(newMembers.length, 1);
      positioned.set(hero, { x: anchor.x + Math.cos(angle) * R_SMALL, y: anchor.y + Math.sin(angle) * R_SMALL });
    });
  }

  // Placed directly (no findFreeSpot nudging) — spacing above is already
  // deliberately generous, and nudging would only disturb the clean rings.
  for (const [hero, pos] of positioned) addNode(hero, pos.x, pos.y);

  FULL_LOOP_THEORY.forEach(loop => {
    for (let i = 0; i < loop.members.length; i++) {
      const a = loop.members[i];
      const b = loop.members[(i + 1) % loop.members.length];
      addLink(a, b, "outgoing");
      const link = state.links.get(linkId(a, b));
      if (link) link.color = loop.color;
    }
  });

  fullLoopTheoryOn = true;
  renderLinks();
  updateStats();
  autoFit();
  commit();
  updateFullLoopButton();
  loopTheoryPanel.classList.remove("hidden");
}

function closeLinkColorPicker() {
  document.querySelector(".link-color-picker")?.remove();
  document.removeEventListener("pointerdown", closeLinkColorPickerOutside, true);
}

function closeLinkColorPickerOutside(event) {
  if (!event.target.closest?.(".link-color-picker")) closeLinkColorPicker();
}

// Right-click a link to reassign its color; first swatch resets to the
// default green.
function openLinkColorPicker(id, clientX, clientY) {
  closeLinkColorPicker();
  const picker = document.createElement("div");
  picker.className = "link-color-picker";
  picker.style.left = `${clientX}px`;
  picker.style.top = `${clientY}px`;
  LINK_COLORS.forEach(color => {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "link-color-swatch";
    swatch.style.setProperty("--swatch", color);
    swatch.title = color === DEFAULT_LINK_COLOR ? "Reset to default green" : color;
    swatch.addEventListener("click", () => {
      const link = state.links.get(id);
      if (link) {
        link.color = color === DEFAULT_LINK_COLOR ? undefined : color;
        link.preview = false; // explicitly picking a color confirms the link
        const sourceNode = state.nodes.get(link.source);
        const targetNode = state.nodes.get(link.target);
        if (sourceNode) sourceNode.preview = false;
        if (targetNode) targetNode.preview = false;
      }
      renderLinks();
      commit();
      closeLinkColorPicker();
    });
    picker.append(swatch);
  });
  document.body.append(picker);
  setTimeout(() => document.addEventListener("pointerdown", closeLinkColorPickerOutside, true), 0);
}

// Target width (in real screen pixels) of a link's invisible click/right-
// click corridor, held constant no matter how zoomed out the board is.
const LINK_HIT_SCREEN_WIDTH = 32;

// `vector-effect="non-scaling-stroke"` only cancels scaling from transforms
// inside the SVG's own coordinate system (a `transform` attribute or
// viewBox) — it does NOT cancel a CSS `transform: scale()` applied to the
// `<svg>` element itself, which is how #linkLayer is zoomed here. So the
// local stroke-width has to be computed by hand: divide the target screen
// width by the current zoom so it renders back out at a constant size.
function updateLinkHitWidths() {
  const width = LINK_HIT_SCREEN_WIDTH / view.scale;
  linkLayer.querySelectorAll(".link-hit").forEach(el => {
    el.style.strokeWidth = `${width}px`;
  });
}

function applyView() {
  const transform = `translate(${view.x}px, ${view.y}px) scale(${view.scale})`;
  board.style.transform = transform;
  linkLayer.style.transform = transform;
  updateLinkHitWidths();
}

function resetView() {
  view.x = 0;
  view.y = 0;
  view.scale = 1;
  applyView();
}

function viewCenterWorld() {
  const rect = boardRect();
  return {
    x: (rect.width / 2 - view.x) / view.scale,
    y: (rect.height / 2 - view.y) / view.scale
  };
}

function zoomAt(px, py, factor) {
  const next = Math.min(2.5, Math.max(0.2, view.scale * factor));
  view.x = px - (px - view.x) * (next / view.scale);
  view.y = py - (py - view.y) * (next / view.scale);
  view.scale = next;
  applyView();
}

function zoomBy(factor) {
  const rect = boardRect();
  zoomAt(rect.width / 2, rect.height / 2, factor);
}

function autoFit() {
  const rect = boardRect();
  if (!state.nodes.size) {
    resetView();
    return;
  }
  const nodes = [...state.nodes.values()];
  const pad = 95;
  const minX = Math.min(...nodes.map(n => n.x)) - pad;
  const maxX = Math.max(...nodes.map(n => n.x)) + pad;
  const minY = Math.min(...nodes.map(n => n.y)) - pad;
  const maxY = Math.max(...nodes.map(n => n.y)) + pad;
  const reserved = !detailPanel.classList.contains("hidden") && rect.width > 760 ? 310 : 0;
  const availW = rect.width - reserved;
  const availH = rect.height;
  const scale = Math.min(1.15, Math.max(0.05, Math.min(availW / (maxX - minX), availH / (maxY - minY))));
  view.scale = scale;
  view.x = (availW - (maxX + minX) * scale) / 2;
  view.y = (availH - (maxY + minY) * scale) / 2;
  applyView();
}

function snapshotState() {
  return JSON.stringify({
    nodes: [...state.nodes.values()].map(n => ({ hero: n.hero, x: n.x, y: n.y })),
    links: [...state.links.values()],
    hidden: [...state.hiddenLinks],
    selected: state.selected,
    comp: state.comp,
    compOwned: state.compOwned
  });
}

function commit() {
  history.past.push(snapshotState());
  if (history.past.length > 80) history.past.shift();
  history.future.length = 0;
  updateHistoryButtons();
}

function updateHistoryButtons() {
  undoBtn.disabled = history.past.length < 2;
  redoBtn.disabled = history.future.length === 0;
}

function restoreState(json) {
  const snap = JSON.parse(json);
  // Any jump through history invalidates open-loop/open-route/bulk bookkeeping.
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  board.querySelectorAll(".node").forEach(el => el.remove());
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks = new Set(snap.hidden);
  state.comp = snap.comp;
  state.compOwned = snap.compOwned || Array(6).fill(false);
  state.selected = null;
  // Never leave the comp detail pointed at a slot that no longer holds a hero.
  snap.nodes.forEach(n => addNode(n.hero, n.x, n.y));
  snap.links.forEach(l => state.links.set(linkId(l.source, l.target, l.type), l));
  if (snap.selected && state.nodes.has(snap.selected)) {
    selectHero(snap.selected);
  } else {
    focusTitle.textContent = "Empty board";
    focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
    detailPanel.classList.add("hidden");
    detailPanel.innerHTML = "";
  }
  emptyState.style.display = state.nodes.size ? "none" : "block";
  renderLinks();
  renderComp();
  updateStats();
  renderRoutePanel();
}

// Board-only counterpart to snapshotState/restoreState, used solely by the
// toolbar's Quick save/Quick load: never includes (or touches) the team
// comp, and restoring never resets the view — the board reappears exactly
// where it already was, just with its layout/links reset to the save.
function snapshotBoardOnly() {
  return JSON.stringify({
    nodes: [...state.nodes.values()].map(n => ({ hero: n.hero, x: n.x, y: n.y })),
    links: [...state.links.values()],
    hidden: [...state.hiddenLinks],
    selected: state.selected
  });
}

function restoreBoardOnly(json) {
  const snap = JSON.parse(json);
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  board.querySelectorAll(".node").forEach(el => el.remove());
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks = new Set(snap.hidden);
  state.selected = null;
  snap.nodes.forEach(n => addNode(n.hero, n.x, n.y));
  snap.links.forEach(l => state.links.set(linkId(l.source, l.target, l.type), l));
  if (snap.selected && state.nodes.has(snap.selected)) {
    selectHero(snap.selected);
  } else {
    focusTitle.textContent = "Empty board";
    focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
    detailPanel.classList.add("hidden");
    detailPanel.innerHTML = "";
  }
  emptyState.style.display = state.nodes.size ? "none" : "block";
  renderLinks();
  updateStats();
}

function undo() {
  if (history.past.length < 2) return;
  history.future.push(history.past.pop());
  restoreState(history.past[history.past.length - 1]);
  updateHistoryButtons();
}

function redo() {
  if (!history.future.length) return;
  const next = history.future.pop();
  history.past.push(next);
  restoreState(next);
  updateHistoryButtons();
}

function roleOf(hero) {
  return roles[hero] || "Flex";
}

// Vanguard, then Duelist, then Strategist — Flex and anything else sinks last.
const ROLE_ORDER = { Vanguard: 0, Duelist: 1, Strategist: 2 };
function roleRank(hero) {
  return ROLE_ORDER[roleOf(hero)] ?? 3;
}

function cssRole(hero) {
  return roleOf(hero).toLowerCase().replace(/\s+/g, "-");
}

function initials(hero) {
  return hero.split(/\s+|&|-/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
}

function heroSlug(hero) {
  return hero
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function portraitSources(hero) {
  const sources = [`./assets/heroes/${heroSlug(hero)}.png`];
  if (portraits[hero]) sources.push(portraits[hero]);
  return sources;
}

function outgoingCount(hero) {
  return relationships[hero]?.length || 0;
}

// All board icons share one size; the badge carries the link count instead.
function nodeSize() {
  return 78;
}

function makeFace(hero) {
  const sources = portraitSources(hero);
  if (!sources.length) {
    const fallback = document.createElement("div");
    fallback.className = "fallback-face";
    fallback.textContent = initials(hero);
    return fallback;
  }
  const img = document.createElement("img");
  let sourceIndex = 0;
  img.src = sources[sourceIndex];
  img.alt = hero;
  img.loading = "lazy";
  img.draggable = false;
  img.onerror = () => {
    sourceIndex += 1;
    if (sourceIndex < sources.length) {
      img.src = sources[sourceIndex];
      return;
    }
    const fallback = document.createElement("div");
    fallback.className = "fallback-face";
    fallback.textContent = initials(hero);
    img.replaceWith(fallback);
  };
  return img;
}

const activeRoles = new Set();

function renderHeroList(filter = "") {
  const q = filter.trim().toLowerCase();
  heroList.innerHTML = "";
  heroes
    .filter(hero => hero.toLowerCase().includes(q))
    .filter(hero => !activeRoles.size || activeRoles.has(roleOf(hero)))
    .filter(hero => !state.nodes.has(hero)) // on the board = off this list, until removed
    .sort((a, b) => outgoingCount(b) - outgoingCount(a) || roleRank(a) - roleRank(b) || a.localeCompare(b))
    .forEach(hero => {
      const button = document.createElement("button");
      button.className = "hero-pick";
      button.style.setProperty("--role-color", roleColors[roleOf(hero)]);
      button.type = "button";
      button.draggable = true;
      button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", hero);
        event.dataTransfer.effectAllowed = "copy";
      });
      button.append(makeFace(hero));

      const text = document.createElement("span");
      text.innerHTML = `<span class="pick-name">${hero}</span><span class="pick-meta">${roleOf(hero)} · in ${incoming[hero]?.length || 0} · out ${outgoingCount(hero)}</span>`;
      button.append(text);

      const count = document.createElement("span");
      count.className = "link-count";
      count.textContent = outgoingCount(hero);
      button.append(count);

      button.addEventListener("click", () => {
        if (pickingSlot !== null) {
          fillSlot(pickingSlot, hero);
          return;
        }
        // This list only ever shows heroes not yet on the board — link only
        // to whatever's already there, never auto-expand others.
        addConnected(hero);
      });
      heroList.append(button);
    });
}

// The wrap keeps its screen size; #board itself is scaled by the zoom view.
function boardRect() {
  return boardWrap.getBoundingClientRect();
}

// World-coordinate midpoint, shifted left to leave room for the detail panel.
function boardCenter() {
  const rect = boardRect();
  const reserved = rect.width > 760 ? 310 : 0;
  return {
    x: ((rect.width - reserved) / 2 - view.x) / view.scale,
    y: (rect.height / 2 - view.y) / view.scale
  };
}

// Nudge (x, y) outward along a spiral until it's clear of every existing
// node, so heroes that share no relation to what's already down never stack
// on top of each other (or pile up exactly at the board center).
function findFreeSpot(x, y) {
  let px = x;
  let py = y;
  let guard = 0;
  while (guard < 30 && [...state.nodes.values()].some(n => Math.hypot(n.x - px, n.y - py) < 280)) {
    guard++;
    const angle = guard * 2.399963; // golden angle: even spread, no clumping
    const radius = 170 + guard * 40;
    px = x + Math.cos(angle) * radius;
    py = y + Math.sin(angle) * radius;
  }
  return { x: px, y: py };
}

// Like findFreeSpot, but only ever slides vertically off the candidate
// point — used when a node has strong left/right directional intent (e.g.
// incoming enablers strictly left of their anchor, outgoing targets
// strictly right) so collision-avoidance can never rotate the link into a
// steep near-vertical angle that pokes out past an unrelated icon nearby.
function findFreeSpotVertical(x, y) {
  let py = y;
  let guard = 0;
  while (guard < 20 && [...state.nodes.values()].some(n => Math.hypot(n.x - x, n.y - py) < 280)) {
    guard++;
    py = y + (guard % 2 ? -1 : 1) * Math.ceil(guard / 2) * 240;
  }
  return { x, y: py };
}

function defaultPosition(hero, index, total, center, radius = 230) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / Math.max(total, 1);
  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius
  };
}

// Spread `total` nodes along an arc centered on `midAngle` (radians).
function arcPosition(center, index, total, midAngle, radius) {
  const span = Math.min(2.3, 0.62 * Math.max(total - 1, 0));
  const t = total === 1 ? 0.5 : index / (total - 1);
  const angle = midAngle - span / 2 + span * t;
  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius
  };
}

function addNode(hero, x, y, options = {}) {
  if (state.nodes.has(hero)) return state.nodes.get(hero);
  emptyState.style.display = "none";

  const size = nodeSize(hero, options.focus);
  const el = document.createElement("button");
  el.className = `node ${cssRole(hero)}`;
  el.type = "button";
  el.dataset.hero = hero;
  el.style.setProperty("--role-color", roleColors[roleOf(hero)]);
  el.style.setProperty("--size", `${size}px`);

  const core = document.createElement("span");
  core.className = "node-core";
  core.append(makeFace(hero));
  el.append(core);

  const badge = document.createElement("span");
  badge.className = "node-badge";
  badge.textContent = outgoingCount(hero);
  el.append(badge);

  const label = document.createElement("span");
  label.className = "node-label";
  label.textContent = hero;
  el.append(label);

  board.append(el);
  const node = { hero, x, y, el, size };
  state.nodes.set(hero, node);
  positionNode(node);

  el.addEventListener("pointerdown", startDrag);
  el.addEventListener("click", event => {
    if (el.dataset.dragged === "true") {
      el.dataset.dragged = "false";
      return;
    }
    if (pickingSlot !== null) {
      fillSlot(pickingSlot, hero);
      return;
    }
    // Selecting only (plus confirming any colorless preview links this
    // icon touches) — the panel on the right lists the available links.
    const changed = confirmPreviewLinks(hero);
    selectHero(hero);
    renderLinks();
    if (changed) commit();
  });
  el.addEventListener("contextmenu", event => {
    event.preventDefault();
    event.stopPropagation();
    removeBranch(hero);
  });

  updateStats();
  return node;
}

function positionNode(node) {
  node.el.style.left = `${node.x}px`;
  node.el.style.top = `${node.y}px`;
}

// One id per directed pair — the same relationship never draws twice.
function linkId(source, target) {
  return `${source}=>${target}`;
}

function addLink(source, target, type = "outgoing") {
  if (!state.nodes.has(source) || !state.nodes.has(target)) return;
  const id = linkId(source, target, type);
  if (state.links.has(id)) return;
  state.links.set(id, { source, target, type });
}

// Manually hide/reveal one specific link — clicking its (always-present)
// hit-path toggles this.
function toggleLinkHidden(id) {
  if (state.hiddenLinks.has(id)) state.hiddenLinks.delete(id);
  else state.hiddenLinks.add(id);
  renderLinks();
  commit();
}

// Clears every link's custom color back to the default green. Preview
// (unconfirmed) links are untouched — they still show colorless until
// confirmed.
function resetLinkColors() {
  let changed = false;
  for (const link of state.links.values()) {
    if (link.color !== undefined) { link.color = undefined; changed = true; }
  }
  if (!changed) return;
  renderLinks();
  commit();
}

function detachNode(hero) {
  const node = state.nodes.get(hero);
  if (!node) return;
  node.el.remove();
  state.nodes.delete(hero);
  if (state.selected === hero) {
    state.selected = null;
    detailPanel.classList.add("hidden");
    detailPanel.innerHTML = "";
    focusTitle.textContent = "Empty board";
    focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
  }
}

// Remove a hero plus its links (no render/commit — callers finish the job).
// Partners that only existed through this hero disappear with it; partners
// that still have other links stay.
function detachBranch(hero) {
  if (!state.nodes.has(hero)) return;
  const partners = new Set();
  for (const [id, link] of [...state.links]) {
    if (link.source === hero || link.target === hero) {
      partners.add(link.source === hero ? link.target : link.source);
      state.links.delete(id);
      state.hiddenLinks.delete(id);
    }
  }
  detachNode(hero);
  for (const partner of partners) {
    if (!state.nodes.has(partner)) continue;
    if (state.comp.includes(partner)) continue; // comp members stay on the board even if orphaned
    const stillLinked = [...state.links.values()].some(l => l.source === partner || l.target === partner);
    if (!stillLinked) detachNode(partner);
  }
  if (!state.nodes.size) {
    emptyState.style.display = "block";
    resetView();
  }
}

function removeBranch(hero) {
  detachBranch(hero);
  renderLinks();
  updateStats();
  commit();
}

// Place `hero` (and link it to whatever's already on the board) without
// rendering/committing — callers finish the job. If the board is empty,
// the very first hero placed gets its full web revealed instead of sitting
// alone with no links. Pass `dropPos` to place at an exact world-space
// point (e.g. where the user actually dropped it) instead of an average.
function placeConnected(hero, dropPos = null) {
  if (state.nodes.has(hero)) return;
  const wasEmpty = state.nodes.size === 0;
  const partners = [...state.nodes.keys()].filter(other => other !== hero &&
    ((relationships[hero] || []).includes(other) || (relationships[other] || []).includes(hero)));

  let x;
  let y;
  if (dropPos) {
    x = dropPos.x;
    y = dropPos.y;
  } else if (partners.length) {
    x = partners.reduce((sum, p) => sum + state.nodes.get(p).x, 0) / partners.length;
    y = partners.reduce((sum, p) => sum + state.nodes.get(p).y, 0) / partners.length;
  } else {
    const center = boardCenter();
    x = center.x;
    y = center.y;
  }

  const spot = findFreeSpot(x, y);
  addNode(hero, spot.x, spot.y);
  partners.forEach(other => {
    if ((relationships[hero] || []).includes(other)) addLink(hero, other, "outgoing");
    if ((relationships[other] || []).includes(hero)) addLink(other, hero, "incoming");
  });

  if (wasEmpty) revealFullWeb(hero);
}

// Fan a hero's full incoming/outgoing web out on a left/right arc (not a
// vertical column — a column grows arbitrarily steep as more partners
// stack, which pokes a near-vertical link past unrelated icons nearby).
// Links start colorless ("preview") until the user clicks one to confirm.
function revealFullWeb(hero) {
  const anchor = state.nodes.get(hero);
  const ins = incoming[hero] || [];
  const outs = relationships[hero] || [];
  const radius = 460;

  const place = (partner, i, total, midAngle) => {
    if (!state.nodes.has(partner)) {
      const pos = arcPosition(anchor, i, total, midAngle, radius);
      const spot = findFreeSpot(pos.x, pos.y);
      const node = addNode(partner, spot.x, spot.y);
      node.preview = true; // colorless icon until its link gets confirmed
    }
  };
  const markPreview = id => {
    const link = state.links.get(id);
    if (link && link.color === undefined) link.preview = true;
  };

  ins.forEach((partner, i) => {
    place(partner, i, ins.length, Math.PI);
    addLink(partner, hero, "incoming");
    markPreview(linkId(partner, hero));
  });
  outs.forEach((partner, i) => {
    place(partner, i, outs.length, 0);
    addLink(hero, partner, "outgoing");
    markPreview(linkId(hero, partner));
  });
}

// Drop a hero from anywhere (sidebar, comp, panel) onto an exact board
// point. Links only to what's already there; already-on-board heroes just
// get selected instead of being moved.
function dropHeroAt(hero, x, y) {
  if (pickingSlot !== null) {
    fillSlot(pickingSlot, hero);
    return;
  }
  if (state.nodes.has(hero)) {
    selectHero(hero);
    renderLinks();
    return;
  }
  placeConnected(hero, { x, y });
  selectHero(hero);
  renderLinks();
  updateStats();
  commit();
}

// Add a hero and link it only to heroes already on the board.
function addConnected(hero) {
  placeConnected(hero);
  selectHero(hero);
  renderLinks();
  commit();
}

// Place + link one partner next to anchor without rendering/committing yet.
// Pass { preview: true } to mark the new link colorless/unconfirmed.
function attachPartner(anchor, partner, type, options = {}) {
  if (!state.nodes.has(partner)) {
    const base = state.nodes.get(anchor);
    const lane = [...state.links.values()]
      .filter(l => (type === "incoming" ? l.target === anchor : l.source === anchor)).length;
    const offsetY = (lane % 2 ? -1 : 1) * Math.ceil(lane / 2) * 220;
    // Vertical-only nudge: keeps incoming strictly left / outgoing strictly
    // right of the anchor, so its link never rotates into a steep near-
    // vertical angle that would poke out past a nearby unrelated icon.
    const spot = findFreeSpotVertical(base.x + (type === "incoming" ? -550 : 550), base.y + offsetY);
    addNode(partner, spot.x, spot.y);
  }
  if (type === "incoming") addLink(partner, anchor, "incoming");
  else addLink(anchor, partner, "outgoing");
  if (options.preview) {
    const id = type === "incoming" ? linkId(partner, anchor) : linkId(anchor, partner);
    const link = state.links.get(id);
    if (link && link.color === undefined) link.preview = true;
  }
}

// Clicking a hero confirms any colorless/preview links touching it — they
// (and both their endpoint icons) become normal. Returns true if changed.
function confirmPreviewLinks(hero) {
  let changed = false;
  for (const link of state.links.values()) {
    if (link.preview && (link.source === hero || link.target === hero)) {
      link.preview = false;
      changed = true;
      const sourceNode = state.nodes.get(link.source);
      const targetNode = state.nodes.get(link.target);
      if (sourceNode) sourceNode.preview = false;
      if (targetNode) targetNode.preview = false;
    }
  }
  return changed;
}

// Panel row click: bring exactly one partner onto the board with one link,
// then select that partner so it (not the anchor) shows on the right.
function addPartnerLink(partner, type, anchor = state.selected) {
  if (!anchor || !state.nodes.has(anchor)) return;
  attachPartner(anchor, partner, type);
  renderLinks();
  selectHero(partner);
  commit();
}

function bulkKey(anchor, type) {
  return `${anchor}::${type}`;
}

// Panel bulk button: bring every incoming (or outgoing) partner on at once,
// remembering exactly which nodes/links it created so clicking the same
// button again removes exactly those and nothing else (mirrors the
// loop/route toggle pattern) — a link or node another still-open loop,
// route, or bulk toggle also relies on survives via `claimedElsewhere`.
function showAllPartners(type, anchor = state.selected) {
  if (!anchor || !state.nodes.has(anchor)) return;
  const key = bulkKey(anchor, type);
  if (bulkState.has(key)) {
    hideAllPartners(key);
    return;
  }
  const list = type === "incoming" ? (incoming[anchor] || []) : (relationships[anchor] || []);
  const record = { newNodes: [], newLinkIds: [] };
  list.forEach(partner => {
    const isNewNode = !state.nodes.has(partner);
    const id = type === "incoming" ? linkId(partner, anchor) : linkId(anchor, partner);
    const linkExisted = state.links.has(id);
    attachPartner(anchor, partner, type);
    if (isNewNode && state.nodes.has(partner)) record.newNodes.push(partner);
    if (!linkExisted) record.newLinkIds.push(id);
  });
  bulkState.set(key, record);
  renderLinks();
  if (state.selected) renderPanel(state.selected);
  commit();
}

function hideAllPartners(key) {
  const record = bulkState.get(key);
  if (!record) return;
  bulkState.delete(key);
  record.newLinkIds.forEach(id => {
    if (!claimedElsewhere(id)) state.links.delete(id);
  });
  record.newNodes.forEach(node => {
    if (!state.nodes.has(node)) return;
    if (state.comp.includes(node)) return; // comp members stay on the board
    const stillLinked = [...state.links.values()].some(l => l.source === node || l.target === node);
    if (!stillLinked) detachNode(node);
  });
  renderLinks();
  if (state.selected) renderPanel(state.selected);
  commit();
}

function selectHero(hero) {
  state.selected = hero;
  document.querySelectorAll(".node.selected").forEach(node => node.classList.remove("selected"));
  state.nodes.get(hero)?.el.classList.add("selected");
  const outs = relationships[hero] || [];
  const ins = incoming[hero] || [];
  focusTitle.textContent = hero;
  focusCopy.textContent = `${ins.length} Team-Up partner${ins.length === 1 ? "" : "s"} enhance ${hero}; ${hero} enhances ${outs.length} hero${outs.length === 1 ? "" : "es"}. Click a row on the right to add that link to the board.`;
  renderPanel(hero);
}

function panelRow(hero, type) {
  const row = document.createElement("button");
  row.className = "panel-row";
  row.type = "button";
  row.style.setProperty("--role-color", roleColors[roleOf(hero)]);
  row.draggable = true;
  row.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", hero);
    event.dataTransfer.effectAllowed = "copy";
  });
  row.append(makeFace(hero));

  const text = document.createElement("span");
  text.className = "panel-row-text";
  const onBoard = state.nodes.has(hero) ? "" : `<span class="off-board">not on board</span>`;
  text.innerHTML = `<span class="pick-name">${hero}</span><span class="pick-meta">${roleOf(hero)} · in ${incoming[hero]?.length || 0} · out ${outgoingCount(hero)} ${onBoard}</span>`;
  row.append(text);

  const arrow = document.createElement("span");
  arrow.className = `panel-arrow ${type}`;
  arrow.textContent = type === "incoming" ? "enhances" : "enhanced";
  arrow.title = type === "incoming" ? `Enhances ${state.selected}` : `Enhanced by ${state.selected}`;
  row.append(arrow);

  row.addEventListener("click", () => {
    if (pickingSlot !== null) {
      fillSlot(pickingSlot, hero);
      return;
    }
    addPartnerLink(hero, type);
  });
  return row;
}

function panelSection(title, hint, list, type) {
  const section = document.createElement("div");
  section.className = "panel-section";
  const head = document.createElement("h4");
  head.innerHTML = `${title} <span class="panel-count">${list.length}</span>`;
  section.append(head);
  const sub = document.createElement("p");
  sub.className = "panel-hint";
  sub.textContent = hint;
  section.append(sub);
  if (!list.length) {
    const none = document.createElement("p");
    none.className = "panel-none";
    none.textContent = "None in S9.";
    section.append(none);
  }
  [...list].sort((a, b) => roleRank(a) - roleRank(b) || a.localeCompare(b))
    .forEach(hero => section.append(panelRow(hero, type)));
  return section;
}

function renderPanel(hero) {
  detailPanel.innerHTML = "";
  detailPanel.classList.remove("hidden");

  const head = document.createElement("div");
  head.className = "panel-head";
  head.style.setProperty("--role-color", roleColors[roleOf(hero)]);
  head.append(makeFace(hero));
  const title = document.createElement("span");
  title.className = "panel-row-text";
  title.innerHTML = `<span class="pick-name">${hero}</span><span class="pick-meta">${roleOf(hero)}</span>`;
  head.append(title);
  const close = document.createElement("button");
  close.className = "panel-close";
  close.type = "button";
  close.textContent = "×";
  close.title = "Hide panel";
  close.addEventListener("click", () => detailPanel.classList.add("hidden"));
  head.append(close);
  detailPanel.append(head);

  const bulk = document.createElement("div");
  bulk.className = "panel-bulk";
  const inActive = bulkState.has(bulkKey(hero, "incoming"));
  const outActive = bulkState.has(bulkKey(hero, "outgoing"));
  const allIn = document.createElement("button");
  allIn.type = "button";
  allIn.className = "panel-bulk-btn incoming" + (inActive ? " active" : "");
  allIn.textContent = `${inActive ? "Hide" : "Show"} all partners (${(incoming[hero] || []).length})`;
  allIn.addEventListener("click", () => showAllPartners("incoming", hero));
  const allOut = document.createElement("button");
  allOut.type = "button";
  allOut.className = "panel-bulk-btn outgoing" + (outActive ? " active" : "");
  allOut.textContent = `${outActive ? "Hide" : "Show"} all enhanced (${(relationships[hero] || []).length})`;
  allOut.addEventListener("click", () => showAllPartners("outgoing", hero));
  bulk.append(allIn, allOut);
  detailPanel.append(bulk);

  const candidateLoops = shortestLoopsThrough(hero, 3);
  const loopGroup = document.createElement("div");
  loopGroup.className = "panel-loop-group";
  if (!candidateLoops.length) {
    const noLoopBtn = document.createElement("button");
    noLoopBtn.type = "button";
    noLoopBtn.className = "panel-loop-btn";
    noLoopBtn.textContent = "↺ No loop back to this hero";
    noLoopBtn.disabled = true;
    loopGroup.append(noLoopBtn);
  } else {
    const ordinals = ["Shortest", "2nd shortest", "3rd shortest"];
    candidateLoops.forEach((cycle, index) => {
      const key = loopKey(hero, index);
      const active = loopState.get(key);
      const ordinal = ordinals[index] || `${index + 1}th shortest`;
      const links = cycle.length - 1;

      const loopBtn = document.createElement("button");
      loopBtn.type = "button";
      loopBtn.className = "panel-loop-btn";
      if (active) {
        loopBtn.classList.add("active");
        loopBtn.style.setProperty("--loop-color", active.color);
        loopBtn.textContent = `↺ Hide ${ordinal.toLowerCase()} loop (${links} link${links === 1 ? "" : "s"})`;
        loopBtn.title = "Remove exactly what this loop added — other open loops/routes stay";
      } else {
        loopBtn.textContent = `↺ Show ${ordinal.toLowerCase()} loop (${links} link${links === 1 ? "" : "s"})`;
      }
      loopBtn.addEventListener("click", () => showLoop(hero, index, cycle));
      loopGroup.append(loopBtn);
    });
  }
  detailPanel.append(loopGroup);

  detailPanel.append(panelSection("Team-Up Partners", `Who enhances ${hero}`, incoming[hero] || [], "incoming"));
  detailPanel.append(panelSection("Enhances", `Heroes ${hero} enhances`, relationships[hero] || [], "outgoing"));
}

// Adding a hero to the comp brings it onto the board too, connected only to
// whatever's already there (or, if the board was empty, its full web). If
// the slot already holds a different hero, that hero is replaced — removed
// from the board too, but only if IT was there because of this same slot
// (see `compOwned`). If the slot already holds a different hero, that hero
// is replaced and removed from the board (cascading to anything left
// link-less), but again only if it was comp-owned.
function fillSlot(index, hero) {
  pickingSlot = null;
  if (state.comp.includes(hero)) {
    renderComp();
    return;
  }
  const previous = state.comp[index];
  const previousWasOwned = state.compOwned[index];
  const wasOnBoardAlready = state.nodes.has(hero);
  state.comp[index] = hero;
  if (previous && previous !== hero && previousWasOwned) detachBranch(previous);
  placeConnected(hero);
  // Only "owned" by this slot if placing it here is what put it on the
  // board — a hero already on the board keeps its independent presence.
  state.compOwned[index] = !wasOnBoardAlready;
  resortComp();
  selectHero(hero);
  renderLinks();
  renderComp();
  updateStats();
  commit();
}

// Clearing a comp slot only removes that hero from the board if it was
// placed there because of this slot (`compOwned`); a hero that was already
// on the board before joining the comp stays put. Removal cascades to
// anything left link-less, same as right-click branch removal.
function clearSlot(index) {
  if (!state.comp[index]) return;
  const hero = state.comp[index];
  const owned = state.compOwned[index];
  state.comp[index] = null;
  state.compOwned[index] = false;
  if (owned) detachBranch(hero);
  resortComp();
  renderLinks();
  renderComp();
  updateStats();
  commit();
}

// Re-sorts filled comp slots left-to-right by role (Vanguard, Duelist,
// Strategist/other), keeping each hero's `compOwned` flag attached to it.
// Empty slots always sink to the end.
function resortComp() {
  const paired = state.comp.map((hero, i) => ({ hero, owned: state.compOwned[i] }));
  paired.sort((a, b) => {
    if (!a.hero && !b.hero) return 0;
    if (!a.hero) return 1;
    if (!b.hero) return -1;
    return roleRank(a.hero) - roleRank(b.hero) || a.hero.localeCompare(b.hero);
  });
  state.comp = paired.map(p => p.hero);
  state.compOwned = paired.map(p => p.owned);
}

function compSlotAt(x, y) {
  const slots = [...compSlots.querySelectorAll(".comp-slot")];
  return slots.findIndex(slot => {
    const rect = slot.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  });
}

function renderComp() {
  compSlots.innerHTML = "";
  heroList.classList.toggle("picking", pickingSlot !== null);
  state.comp.forEach((hero, index) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "comp-slot"
      + (hero ? " filled" : "")
      + (!hero && pickingSlot === index ? " awaiting" : "");

    slot.addEventListener("dragover", event => event.preventDefault());
    slot.addEventListener("drop", event => {
      event.preventDefault();
      const name = event.dataTransfer.getData("text/plain");
      if (name && heroes.includes(name)) fillSlot(index, name);
    });
    slot.addEventListener("contextmenu", event => {
      event.preventDefault();
      clearSlot(index);
    });

    if (hero) {
      slot.style.setProperty("--role-color", roleColors[roleOf(hero)]);
      slot.append(makeFace(hero));
      slot.draggable = true;
      slot.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", hero);
        event.dataTransfer.effectAllowed = "copy";
      });
      slot.title = `${hero} — click to add to board & see details, right-click to remove. Select another hero first to replace this slot.`;
      slot.addEventListener("click", () => {
        if (pickingSlot !== null) {
          fillSlot(pickingSlot, hero);
          return;
        }
        // A different hero is selected elsewhere: replace this slot's occupant.
        if (state.selected && state.selected !== hero) {
          fillSlot(index, state.selected);
          return;
        }
        // Otherwise: bring the hero onto the board, linked only to whatever's already there.
        if (state.nodes.has(hero)) {
          selectHero(hero);
          renderLinks();
        } else {
          addConnected(hero);
          state.compOwned[index] = true; // this click is what put it back on the board
        }
        renderComp();
      });
    } else {
      slot.textContent = "+";
      slot.title = "Click, then pick a hero from the list — or select a hero first, or drag a hero here";
      slot.addEventListener("click", () => {
        // A hero is already selected elsewhere: drop it straight into this slot.
        if (state.selected && !state.comp.includes(state.selected)) {
          fillSlot(index, state.selected);
          return;
        }
        pickingSlot = pickingSlot === index ? null : index;
        renderComp();
      });
    }
    compSlots.append(slot);
  });
  renderCompStats();
  renderCompDetail();
}

function renderCompStats() {
  const filled = state.comp.filter(Boolean);
  let internal = 0;
  for (const a of filled) {
    for (const b of relationships[a] || []) if (filled.includes(b)) internal += 1;
  }
  const roleCounts = {};
  filled.forEach(hero => {
    roleCounts[roleOf(hero)] = (roleCounts[roleOf(hero)] || 0) + 1;
  });
  const rolesText = Object.entries(roleCounts).map(([role, count]) => `${count} ${role}`).join(" · ");
  compStats.textContent = `${filled.length}/6 heroes · ${internal} internal team-up${internal === 1 ? "" : "s"}${rolesText ? " · " + rolesText : ""}`;
}

function compList(title, list, anchor, type) {
  const wrap = document.createElement("div");
  wrap.className = "comp-list";
  const head = document.createElement("h5");
  head.textContent = title;
  wrap.append(head);
  if (!list.length) {
    const none = document.createElement("p");
    none.className = "panel-none";
    none.textContent = "None in S9.";
    wrap.append(none);
    return wrap;
  }
  [...list].sort((a, b) => roleRank(a) - roleRank(b) || a.localeCompare(b)).forEach(other => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "comp-mini" + (state.comp.includes(other) ? " in-comp" : "");
    row.style.setProperty("--role-color", roleColors[roleOf(other)]);
    row.title = state.comp.includes(other) ? `${other} — in your comp` : other;
    row.draggable = true;
    row.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", other);
      event.dataTransfer.effectAllowed = "copy";
    });
    row.append(makeFace(other));
    const name = document.createElement("span");
    name.textContent = other;
    row.append(name);
    row.addEventListener("click", () => {
      if (pickingSlot !== null) {
        fillSlot(pickingSlot, other);
        return;
      }
      addPartnerLink(other, type, anchor);
    });
    wrap.append(row);
  });
  return wrap;
}

// Always shows every filled slot's info at once — never foldable.
function renderCompDetail() {
  const filled = state.comp.filter(Boolean);
  if (!filled.length) {
    compDetail.classList.add("hidden");
    compDetail.innerHTML = "";
    return;
  }
  compDetail.classList.remove("hidden");
  compDetail.innerHTML = "";
  filled.forEach(hero => {
    const section = document.createElement("div");
    section.className = "comp-detail-section";
    const head = document.createElement("h4");
    head.innerHTML = `${hero} <span class="comp-detail-hint">green = already in your comp</span>`;
    section.append(head);
    const lists = document.createElement("div");
    lists.className = "comp-lists";
    lists.append(compList(`Team-Up Partners`, incoming[hero] || [], hero, "incoming"));
    lists.append(compList(`${hero} enhances`, relationships[hero] || [], hero, "outgoing"));
    section.append(lists);
    compDetail.append(section);
  });
}

function renderLinks() {
  linkLayer.innerHTML = `
    <defs>
      <marker id="arrowOut" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path>
      </marker>
    </defs>
  `;
  const filtered = linkFilter !== "all" && state.selected;
  const visibleLinkCount = new Map();
  for (const [id, link] of state.links) {
    const source = state.nodes.get(link.source);
    const target = state.nodes.get(link.target);
    if (!source || !target) continue;
    if (filtered) {
      if (linkFilter === "in" && link.target !== state.selected) continue;
      if (linkFilter === "out" && link.source !== state.selected) continue;
    }

    const d = linkPath(source, target);

    // The invisible hit-path always exists (even for a manually hidden or
    // role-filtered-out link) so a click can bring it back — "disappear
    // and reappear" needs a way to reappear.
    const hit = document.createElementNS(SVG_NS, "path");
    hit.classList.add("link-hit");
    hit.setAttribute("d", d);
    // Without this, the hit corridor is defined in world-space units, so it
    // shrinks right along with everything else when the board is zoomed out
    // — at a typical auto-fit scale (often well under 1x on a busy board)
    // the click target for a link collapses to just a few real screen
    // pixels wide. Set inline so it wins over the `.link-hit` class rule;
    // `updateLinkHitWidths()` keeps every hit-path's width correct as the
    // zoom changes afterward too.
    hit.style.strokeWidth = `${LINK_HIT_SCREEN_WIDTH / view.scale}px`;
    // Left-click recolors a link, right-click hides/reveals it (swapped
    // from the previous click=hide / right-click=recolor per user request).
    hit.addEventListener("click", event => {
      event.stopPropagation();
      openLinkColorPicker(id, event.clientX, event.clientY);
    });
    hit.addEventListener("contextmenu", event => {
      event.preventDefault();
      event.stopPropagation();
      toggleLinkHidden(id);
    });
    linkLayer.append(hit);

    const manuallyHidden = state.hiddenLinks.has(id);
    // Colorless if unconfirmed ("preview"), or if a board role filter is
    // active and neither endpoint is related to that role (Flex is exempt).
    const roleRelated = !boardRoleFilter || !roleFilterDimmed(link.source) || !roleFilterDimmed(link.target);
    const colorless = link.preview || !roleRelated;
    // While a role filter is active, colorless links disappear entirely
    // instead of showing dim/gray, to declutter the filtered view.
    const hideForRoleFilter = boardRoleFilter && colorless;
    if (manuallyHidden || hideForRoleFilter) continue;

    const color = colorless ? PREVIEW_LINK_COLOR : (link.color || DEFAULT_LINK_COLOR);
    const path = document.createElementNS(SVG_NS, "path");
    path.classList.add("link", link.target === state.selected ? "incoming" : "outgoing");
    path.classList.toggle("preview", colorless);
    path.style.setProperty("--link-color", color);
    path.setAttribute("marker-end", "url(#arrowOut)");
    path.setAttribute("d", d);
    linkLayer.append(path);

    visibleLinkCount.set(link.source, (visibleLinkCount.get(link.source) || 0) + 1);
    visibleLinkCount.set(link.target, (visibleLinkCount.get(link.target) || 0) + 1);
  }

  // With a filter active, heroes left without any visible link step off the board.
  for (const [hero, node] of state.nodes) {
    const show = !filtered || hero === state.selected || (visibleLinkCount.get(hero) || 0) > 0;
    node.el.style.display = show ? "" : "none";
    node.el.classList.toggle("colorless", !!node.preview || roleFilterDimmed(hero));
  }
}

// Straight line trimmed to the node edges so it never crosses the portraits.
function linkPath(source, target) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const distance = Math.hypot(dx, dy) || 1;
  const ux = dx / distance;
  const uy = dy / distance;
  const startGap = source.size / 2 + 6;
  // Extra clearance past the node's own edge so the arrowhead never ends up
  // tucked under the outgoing-count badge (which sits top-right of the
  // icon) — most noticeable on links that approach from almost straight
  // below ("pointing upward").
  const endGap = target.size / 2 + 26;
  const sx = source.x + ux * startGap;
  const sy = source.y + uy * startGap;
  const tx = target.x - ux * endGap;
  const ty = target.y - uy * endGap;
  return `M ${sx} ${sy} L ${tx} ${ty}`;
}

function startDrag(event) {
  const el = event.currentTarget;
  const hero = el.dataset.hero;
  const node = state.nodes.get(hero);
  if (!node) return;
  el.setPointerCapture(event.pointerId);
  const startX = event.clientX;
  const startY = event.clientY;
  const origin = { x: node.x, y: node.y };

  function move(moveEvent) {
    const dx = moveEvent.clientX - startX;
    const dy = moveEvent.clientY - startY;
    if (Math.abs(dx) + Math.abs(dy) > 3) el.dataset.dragged = "true";
    node.x = origin.x + dx / view.scale;
    node.y = origin.y + dy / view.scale;
    positionNode(node);
    renderLinks();
  }

  function up(upEvent) {
    el.releasePointerCapture(event.pointerId);
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", up);
    el.removeEventListener("pointercancel", up);
    if (el.dataset.dragged !== "true") return;
    const slotIndex = compSlotAt(upEvent.clientX, upEvent.clientY);
    if (slotIndex !== -1) {
      node.x = origin.x;
      node.y = origin.y;
      positionNode(node);
      renderLinks();
      fillSlot(slotIndex, hero);
    } else {
      commit();
    }
  }

  el.addEventListener("pointermove", move);
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);
}

// Octilinear auto-layout: nodes snap to a square grid so every link runs
// horizontally, vertically, or at 45 degrees, and candidate cells are scored
// by how many existing lines the new links would cross.
const DIRS8 = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]];

function segCross(a, b, c, d) {
  const shares = (p, q) => p.x === q.x && p.y === q.y;
  if (shares(a, c) || shares(a, d) || shares(b, c) || shares(b, d)) return false;
  const orient = (p, q, r) => Math.sign((q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x));
  return orient(a, b, c) !== orient(a, b, d) && orient(c, d, a) !== orient(c, d, b);
}

// Grid point p sits strictly between a and b on their segment.
function pointBlocksSeg(p, a, b) {
  if ((p.x === a.x && p.y === a.y) || (p.x === b.x && p.y === b.y)) return false;
  const cross = (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);
  if (cross !== 0) return false;
  return Math.min(a.x, b.x) <= p.x && p.x <= Math.max(a.x, b.x) &&
    Math.min(a.y, b.y) <= p.y && p.y <= Math.max(a.y, b.y);
}

function autoArrange() {
  if (!state.selected || !state.nodes.has(state.selected)) return;

  const edges = [...state.links.entries()]
    .filter(([id, link]) => !state.hiddenLinks.has(id) && state.nodes.has(link.source) && state.nodes.has(link.target))
    .map(([, link]) => link);

  const neighborSets = new Map();
  const neighborsOf = hero => {
    if (!neighborSets.has(hero)) {
      const set = new Set();
      edges.forEach(link => {
        if (link.source === hero) set.add(link.target);
        if (link.target === hero) set.add(link.source);
      });
      neighborSets.set(hero, set);
    }
    return neighborSets.get(hero);
  };

  const cells = new Map();
  const used = new Set();
  const place = (hero, gx, gy) => {
    cells.set(hero, { gx, gy });
    used.add(`${gx},${gy}`);
  };
  const free = (gx, gy) => !used.has(`${gx},${gy}`);

  place(state.selected, 0, 0);

  const ins = incoming[state.selected].filter(hero => state.nodes.has(hero) && hero !== state.selected);
  const outs = (relationships[state.selected] || [])
    .filter(hero => state.nodes.has(hero) && hero !== state.selected && !ins.includes(hero));

  // Direct neighbors sit on octilinear rays: incoming left, outgoing right.
  // High-degree heroes take the diagonals so their own links have room.
  const placeDirect = (list, side) => {
    const sorted = [...list].sort((a, b) => neighborsOf(b).size - neighborsOf(a).size);
    const rays = sorted.length === 1 ? [[side, 0]]
      : sorted.length === 2 ? [[side, -1], [side, 1]]
      : sorted.length === 3 ? [[side, -1], [side, 1], [side, 0]]
      : [[side, -1], [side, 1], [side, 0], [0, side]];
    sorted.forEach((hero, index) => {
      let cell = index < rays.length && free(rays[index][0], rays[index][1]) ? rays[index] : null;
      for (let mult = 2; mult <= 4 && !cell; mult++) {
        for (const [rx, ry] of rays) {
          if (free(rx * mult, ry * mult)) {
            cell = [rx * mult, ry * mult];
            break;
          }
        }
      }
      if (cell) place(hero, cell[0], cell[1]);
    });
  };
  placeDirect(ins, -1);
  placeDirect(outs, 1);

  const placedSegs = () => edges
    .filter(link => cells.has(link.source) && cells.has(link.target))
    .map(link => {
      const s = cells.get(link.source);
      const t = cells.get(link.target);
      return [{ x: s.gx, y: s.gy }, { x: t.gx, y: t.gy }];
    });

  // Everything not directly linked to the selected hero: attach to placed
  // neighbors one at a time, picking the free cell with the fewest crossings.
  let pending = [...state.nodes.keys()].filter(hero => !cells.has(hero));
  let progress = true;
  while (pending.length && progress) {
    progress = false;
    pending.sort((a, b) =>
      [...neighborsOf(b)].filter(h => cells.has(h)).length -
      [...neighborsOf(a)].filter(h => cells.has(h)).length);
    const hero = pending[0];
    const placedNs = [...neighborsOf(hero)].filter(h => cells.has(h));
    if (!placedNs.length) break;

    const candidates = [];
    for (const parent of placedNs) {
      const p = cells.get(parent);
      for (const [dx, dy] of DIRS8) {
        for (const mult of [1, 2]) {
          const gx = p.gx + dx * mult;
          const gy = p.gy + dy * mult;
          if (!free(gx, gy)) continue;
          if (mult === 2 && !free(p.gx + dx, p.gy + dy)) continue;
          candidates.push([gx, gy]);
        }
      }
    }
    if (!candidates.length) {
      outer: for (let radius = 1; radius < 14; radius++) {
        for (let gx = -radius; gx <= radius; gx++) {
          for (let gy = -radius; gy <= radius; gy++) {
            if (Math.max(Math.abs(gx), Math.abs(gy)) === radius && free(gx, gy)) {
              candidates.push([gx, gy]);
              break outer;
            }
          }
        }
      }
    }

    const segs = placedSegs();
    const cellPoints = [...cells.values()].map(c => ({ x: c.gx, y: c.gy }));
    let best = candidates[0];
    let bestScore = Infinity;
    for (const cand of candidates) {
      const candPoint = { x: cand[0], y: cand[1] };
      let score = 0;
      // Standing on an existing line is the worst offence: icons must not block links.
      for (const [a, b] of segs) {
        if (pointBlocksSeg(candPoint, a, b)) score += 40;
      }
      for (const n of placedNs) {
        const c = cells.get(n);
        const nPoint = { x: c.gx, y: c.gy };
        for (const [a, b] of segs) {
          if (segCross(candPoint, nPoint, a, b)) score += 10;
        }
        // New lines must not run through occupied cells either.
        for (const p of cellPoints) {
          if (pointBlocksSeg(p, candPoint, nPoint)) score += 40;
        }
        const ddx = Math.abs(cand[0] - c.gx);
        const ddy = Math.abs(cand[1] - c.gy);
        if (!(ddx === 0 || ddy === 0 || ddx === ddy)) score += 3;
      }
      score += Math.hypot(cand[0], cand[1]) * 0.4;
      if (score < bestScore) {
        bestScore = score;
        best = cand;
      }
    }
    place(hero, best[0], best[1]);
    pending = pending.filter(h => h !== hero);
    progress = true;
  }

  // Disconnected leftovers go on the outer rim.
  pending.forEach(hero => {
    outer: for (let radius = 3; radius < 16; radius++) {
      for (let gx = -radius; gx <= radius; gx++) {
        for (let gy = -radius; gy <= radius; gy++) {
          if (Math.max(Math.abs(gx), Math.abs(gy)) === radius && free(gx, gy)) {
            place(hero, gx, gy);
            break outer;
          }
        }
      }
    }
  });

  // Generous fixed spacing in world coordinates; the zoom view fits it on screen.
  const step = 340;
  const origin = viewCenterWorld();
  for (const [hero, cell] of cells) {
    const node = state.nodes.get(hero);
    node.x = origin.x + cell.gx * step;
    node.y = origin.y + cell.gy * step;
    positionNode(node);
  }
  renderLinks();
  autoFit();
  commit();
}

function expandVisible() {
  const rect = boardRect();
  const randomWorldSpot = () => {
    const sx = 80 + Math.random() * (rect.width - 160);
    const sy = 90 + Math.random() * (rect.height - 180);
    return findFreeSpot((sx - view.x) / view.scale, (sy - view.y) / view.scale);
  };
  [...state.nodes.keys()].forEach(hero => {
    (relationships[hero] || []).forEach(target => {
      if (!state.nodes.has(target)) {
        const spot = randomWorldSpot();
        addNode(target, spot.x, spot.y);
      }
      addLink(hero, target, "outgoing");
    });
    (incoming[hero] || []).forEach(source => {
      if (!state.nodes.has(source)) {
        const spot = randomWorldSpot();
        addNode(source, spot.x, spot.y);
      }
      addLink(source, hero, "incoming");
    });
  });
  updateStats();
  renderLinks();
  autoFit();
  commit();
}

function resetBoard() {
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks.clear();
  state.selected = null;
  pickingSlot = null;
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  state.compOwned = state.compOwned.map(() => false);
  resetView();
  board.querySelectorAll(".node").forEach(node => node.remove());
  linkLayer.innerHTML = "";
  emptyState.style.display = "block";
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";
  focusTitle.textContent = "Empty board";
  focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
  updateStats();
  renderRoutePanel();
  commit();
}

function updateStats() {
  boardStats.textContent = `${state.nodes.size} hero${state.nodes.size === 1 ? "" : "es"} on board · ${state.links.size} link${state.links.size === 1 ? "" : "s"}`;
  renderHeroList(heroSearch.value);
}

heroSearch.addEventListener("input", event => renderHeroList(event.target.value));
document.querySelector("#resetBoard").addEventListener("click", resetBoard);
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);
document.querySelectorAll(".legend-item").forEach(item => {
  item.addEventListener("click", () => {
    const role = item.textContent.trim();
    if (activeRoles.has(role)) {
      activeRoles.delete(role);
      item.classList.remove("active");
    } else {
      activeRoles.add(role);
      item.classList.add("active");
    }
    renderHeroList(heroSearch.value);
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && pickingSlot !== null) {
    pickingSlot = null;
    renderComp();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    if (event.shiftKey) redo();
    else undo();
  }
});

document.querySelector("#zoomIn").addEventListener("click", () => zoomBy(1.25));
document.querySelector("#zoomOut").addEventListener("click", () => zoomBy(1 / 1.25));
document.querySelector("#zoomFit").addEventListener("click", autoFit);

// Drag the handle above the team-comp tray to grow/shrink its share of the
// workspace (and the board's share along with it) — height lives in the
// `--comp-h` custom property on `.workspace`'s grid-template-rows.
const COMP_HEIGHT_KEY = "teamup-comp-height";
const compTray = document.querySelector(".comp-tray");
const compResizeHandle = document.querySelector("#compResizeHandle");
const workspaceEl = document.querySelector(".workspace");
const COMP_MIN_HEIGHT = 110;
const COMP_MAX_HEIGHT = 560;

function applyCompHeight(px) {
  workspaceEl.style.setProperty("--comp-h", `${px}px`);
}

const savedCompHeight = parseInt(localStorage.getItem(COMP_HEIGHT_KEY), 10);
if (savedCompHeight) applyCompHeight(Math.min(COMP_MAX_HEIGHT, Math.max(COMP_MIN_HEIGHT, savedCompHeight)));

compResizeHandle.addEventListener("pointerdown", event => {
  event.preventDefault();
  compResizeHandle.setPointerCapture(event.pointerId);
  compResizeHandle.classList.add("dragging");
  const startY = event.clientY;
  const startHeight = compTray.getBoundingClientRect().height;

  function move(moveEvent) {
    const next = Math.min(COMP_MAX_HEIGHT, Math.max(COMP_MIN_HEIGHT, startHeight + (startY - moveEvent.clientY)));
    applyCompHeight(next);
  }
  function up() {
    compResizeHandle.releasePointerCapture(event.pointerId);
    compResizeHandle.classList.remove("dragging");
    compResizeHandle.removeEventListener("pointermove", move);
    compResizeHandle.removeEventListener("pointerup", up);
    localStorage.setItem(COMP_HEIGHT_KEY, Math.round(compTray.getBoundingClientRect().height));
  }
  compResizeHandle.addEventListener("pointermove", move);
  compResizeHandle.addEventListener("pointerup", up);
});

const helpPanel = document.querySelector("#helpPanel");
document.querySelector("#toggleHelp").addEventListener("click", () => helpPanel.classList.toggle("hidden"));
document.querySelector("#closeHelp").addEventListener("click", () => helpPanel.classList.add("hidden"));

document.querySelector("#resetLinkColors").addEventListener("click", resetLinkColors);
document.querySelector("#fullLoopTheory").addEventListener("click", toggleFullLoopTheory);

// ---- Route finder: pick a start/end hero, show up to 3 shortest routes ----
const routePanel = document.querySelector("#routePanel");
const routeStartSelect = document.querySelector("#routeStart");
const routeEndSelect = document.querySelector("#routeEnd");
const routeResults = document.querySelector("#routeResults");

function populateRouteSelects() {
  const options = heroes.map(hero => `<option value="${hero}">${hero}</option>`).join("");
  routeStartSelect.innerHTML = options;
  routeEndSelect.innerHTML = options;
  if (heroes.length > 1) routeEndSelect.value = heroes[1];
}
populateRouteSelects();

let currentRouteCandidates = [];

function routeKey(index) {
  return `route::${index}`;
}

// Same create bookkeeping shape as `showLoop` — positions the chain
// left-to-right from wherever its start hero already sits (or the board
// center if it's not placed yet).
function showRoute(index, chain) {
  const key = routeKey(index);
  if (routeState.has(key)) {
    hideRoute(key);
    return;
  }
  const color = nextChainColor();
  const record = { color, cycle: chain, newNodes: [], newLinkIds: [], recolored: new Map() };
  const startNode = state.nodes.get(chain[0]);
  const origin = startNode ? { x: startNode.x, y: startNode.y } : boardCenter();
  const step = 420;
  chain.forEach((hero, i) => {
    if (state.nodes.has(hero)) return;
    const spot = findFreeSpot(origin.x + i * step, origin.y);
    addNode(hero, spot.x, spot.y);
    record.newNodes.push(hero);
  });
  for (let i = 0; i < chain.length - 1; i++) {
    const id = linkId(chain[i], chain[i + 1]);
    const existedAlready = state.links.has(id);
    addLink(chain[i], chain[i + 1], "outgoing");
    const link = state.links.get(id);
    if (existedAlready) record.recolored.set(id, link.color);
    else record.newLinkIds.push(id);
    link.color = color;
  }
  routeState.set(key, record);
  renderLinks();
  updateStats();
  autoFit();
  commit();
  renderRoutePanel();
}

function hideRoute(key) {
  const record = routeState.get(key);
  if (!record) return;
  routeState.delete(key);

  record.newLinkIds.forEach(id => {
    if (!claimedElsewhere(id)) state.links.delete(id);
  });
  record.recolored.forEach((prevColor, id) => {
    const other = claimedElsewhere(id);
    const link = state.links.get(id);
    if (!link) return;
    link.color = other ? other.color : prevColor;
  });
  record.newNodes.forEach(node => {
    if (!state.nodes.has(node)) return;
    if (state.comp.includes(node)) return; // comp members stay on the board
    const stillLinked = [...state.links.values()].some(l => l.source === node || l.target === node);
    if (!stillLinked) detachNode(node);
  });

  renderLinks();
  updateStats();
  renderRoutePanel();
  commit();
}

function findRoutes() {
  const start = routeStartSelect.value;
  const end = routeEndSelect.value;
  [...routeState.keys()].forEach(hideRoute);
  currentRouteCandidates = shortestRoutes(start, end, 3);
  renderRoutePanel();
}

function renderRoutePanel() {
  routeResults.innerHTML = "";
  if (!currentRouteCandidates.length) {
    const none = document.createElement("p");
    none.className = "panel-none";
    none.textContent = routeStartSelect.value === routeEndSelect.value
      ? "Pick two different heroes."
      : "Click \"Find shortest routes\" to search, or no route exists between these two heroes.";
    routeResults.append(none);
    return;
  }
  const ordinals = ["Shortest", "2nd shortest", "3rd shortest"];
  currentRouteCandidates.forEach((chain, index) => {
    const key = routeKey(index);
    const active = routeState.get(key);
    const ordinal = ordinals[index] || `${index + 1}th shortest`;
    const links = chain.length - 1;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "route-result-btn";
    if (active) {
      btn.classList.add("active");
      btn.style.setProperty("--loop-color", active.color);
    }
    btn.innerHTML = `${active ? "Hide" : "Show"} ${ordinal.toLowerCase()} route (${links} link${links === 1 ? "" : "s"})<span class="route-path">${chain.join(" → ")}</span>`;
    btn.addEventListener("click", () => showRoute(index, chain));
    routeResults.append(btn);
  });
}

document.querySelector("#toggleRoute").addEventListener("click", () => {
  routePanel.classList.toggle("hidden");
  if (!routePanel.classList.contains("hidden")) renderRoutePanel();
});
document.querySelector("#closeRoute").addEventListener("click", () => routePanel.classList.add("hidden"));
document.querySelector("#findRoutes").addEventListener("click", findRoutes);

function flashButton(button, text) {
  const original = button.textContent;
  button.textContent = text;
  setTimeout(() => { button.textContent = original; }, 1200);
}

// Behind-the-scenes graph-theory facts — deliberately no hero names, and
// deliberately no mention of which hero (or why) is the one permanent
// exception to every loop.
const EASTER_EGG_FACTS = [
  "This board's whole Team-Up web got put through some real graph theory.",
  "No single loop can pass through every hero without repeating one — confirmed by exhaustively checking 3,651,668 possible routes. Zero worked.",
  "The single longest loop that exists anywhere in this data touches 47 heroes.",
  "If loops are never allowed to share a hero, it's mathematically impossible to ever include absolutely everyone, no matter how many loops you use — one particular cluster of 22 heroes only collectively leads to 19 others among themselves, so at least 3 of them can never get a private slot.",
  "Letting loops share heroes (the natural way, since an icon can sit on more than one loop), a concrete arrangement of just 6 loops — sized 36, 4, 3, 13, 8, and 3 — touches every eligible hero. That's what the \"Full loop theory\" button draws.",
  "In total, 290,752 distinct loops exist somewhere in this data, from tiny 3-hero triangles all the way up to that 47-hero giant."
];
const easterEggPanel = document.querySelector("#easterEggPanel");
const easterEggList = document.querySelector("#easterEggList");
EASTER_EGG_FACTS.forEach(fact => {
  const li = document.createElement("li");
  li.textContent = fact;
  easterEggList.append(li);
});
document.querySelector("#easterEgg").addEventListener("click", () => easterEggPanel.classList.toggle("hidden"));
document.querySelector("#closeEasterEgg").addEventListener("click", () => easterEggPanel.classList.add("hidden"));

// "Full loop theory" gets the same graph-theory facts, but surfaced right
// where a curious user is already looking (opened automatically alongside
// the visualization) rather than tucked behind the footer egg button.
const loopTheoryPanel = document.querySelector("#loopTheoryPanel");
const loopTheoryFactsList = document.querySelector("#loopTheoryFactsList");
EASTER_EGG_FACTS.forEach(fact => {
  const li = document.createElement("li");
  li.textContent = fact;
  loopTheoryFactsList.append(li);
});
document.querySelector("#closeLoopTheory").addEventListener("click", () => loopTheoryPanel.classList.add("hidden"));

// Drop a hero dragged from anywhere (sidebar, comp, detail panel) at the
// exact point it's released — it stays there instead of jumping to center.
boardWrap.addEventListener("dragover", event => event.preventDefault());
boardWrap.addEventListener("drop", event => {
  event.preventDefault();
  const hero = event.dataTransfer.getData("text/plain");
  if (!hero || !heroes.includes(hero)) return;
  const rect = boardRect();
  const x = (event.clientX - rect.left - view.x) / view.scale;
  const y = (event.clientY - rect.top - view.y) / view.scale;
  dropHeroAt(hero, x, y);
});

boardWrap.addEventListener("wheel", event => {
  event.preventDefault();
  const rect = boardRect();
  const factor = event.deltaY < 0 ? 1.15 : 1 / 1.15;
  zoomAt(event.clientX - rect.left, event.clientY - rect.top, factor);
}, { passive: false });

// A plain click (no drag) on empty board space deselects the current hero —
// otherwise a leftover selection could cause a later comp-slot click to
// unexpectedly "replace" that slot's occupant.
function deselectHero() {
  if (!state.selected) return;
  state.selected = null;
  document.querySelectorAll(".node.selected").forEach(node => node.classList.remove("selected"));
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";
  focusTitle.textContent = "Empty board";
  focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
  renderLinks();
}

boardWrap.addEventListener("pointerdown", event => {
  if (event.target !== boardWrap && event.target !== board) return;
  // Without this, holding the middle mouse button also triggers the
  // browser's own native auto-scroll cursor/icon on top of our drag-to-pan,
  // which fights with it.
  if (event.button === 1) event.preventDefault();
  boardWrap.setPointerCapture(event.pointerId);
  const startX = event.clientX;
  const startY = event.clientY;
  const originX = view.x;
  const originY = view.y;
  let dragged = false;
  const move = moveEvent => {
    if (Math.abs(moveEvent.clientX - startX) + Math.abs(moveEvent.clientY - startY) > 4) dragged = true;
    view.x = originX + moveEvent.clientX - startX;
    view.y = originY + moveEvent.clientY - startY;
    applyView();
  };
  const up = () => {
    boardWrap.releasePointerCapture(event.pointerId);
    boardWrap.removeEventListener("pointermove", move);
    boardWrap.removeEventListener("pointerup", up);
    boardWrap.removeEventListener("pointercancel", up);
    if (!dragged) deselectHero();
  };
  boardWrap.addEventListener("pointermove", move);
  boardWrap.addEventListener("pointerup", up);
  boardWrap.addEventListener("pointercancel", up);
});

const filterButtons = {
  all: document.querySelector("#filterAll"),
  in: document.querySelector("#filterIn"),
  out: document.querySelector("#filterOut")
};
function setLinkFilter(mode) {
  linkFilter = mode;
  Object.entries(filterButtons).forEach(([key, button]) => button.classList.toggle("active", key === mode));
  renderLinks();
}
filterButtons.all.addEventListener("click", () => setLinkFilter("all"));
filterButtons.in.addEventListener("click", () => setLinkFilter("in"));
filterButtons.out.addEventListener("click", () => setLinkFilter("out"));

const boardRoleButtons = {
  Vanguard: document.querySelector("#boardRoleVanguard"),
  Duelist: document.querySelector("#boardRoleDuelist"),
  Strategist: document.querySelector("#boardRoleStrategist")
};
function setBoardRoleFilter(role) {
  boardRoleFilter = boardRoleFilter === role ? null : role;
  Object.entries(boardRoleButtons).forEach(([key, btn]) => btn.classList.toggle("active", key === boardRoleFilter));
  renderLinks();
}
Object.entries(boardRoleButtons).forEach(([role, btn]) => btn.addEventListener("click", () => setBoardRoleFilter(role)));
document.querySelector("#autoLayout").addEventListener("click", autoArrange);
document.querySelector("#expandVisible").addEventListener("click", expandVisible);
document.querySelector("#hideLabels").addEventListener("click", event => {
  state.labels = !state.labels;
  board.classList.toggle("hide-labels", !state.labels);
  event.currentTarget.textContent = state.labels ? "Labels on" : "Labels off";
});
window.addEventListener("resize", () => {
  for (const node of state.nodes.values()) positionNode(node);
  renderLinks();
});

// Middle-mouse-button ("mouse 3") drag-to-scroll for any scrollable list or
// panel — hold the middle button and drag instead of hunting for a
// scrollbar or hovering just right for the wheel to catch. Applies to the
// hero list, the detail panel, every help-panel-styled overlay (help,
// easter egg, route finder, full loop theory explainer), and the team-comp
// detail box. Add any future scrollable container to this selector list.
function enableMiddleClickScroll(el) {
  el.addEventListener("pointerdown", event => {
    if (event.button !== 1) return;
    event.preventDefault();
    el.setPointerCapture(event.pointerId);
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = el.scrollLeft;
    const startTop = el.scrollTop;
    function move(moveEvent) {
      el.scrollLeft = startLeft - (moveEvent.clientX - startX);
      el.scrollTop = startTop - (moveEvent.clientY - startY);
    }
    function up() {
      el.releasePointerCapture(event.pointerId);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    }
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  });
}
document.querySelectorAll(".hero-list, .detail-panel, .help-panel, .comp-detail")
  .forEach(enableMiddleClickScroll);

renderHeroList();
renderComp();
updateStats();
history.past.push(snapshotState());
updateHistoryButtons();

// ---- Multiple boards: independent saved layouts you can switch between ----
const BOARDS_INDEX_KEY = "teamup-boards-index";
const ACTIVE_BOARD_KEY = "teamup-active-board";
const LEGACY_SAVE_KEY = "teamup-board-save-v1"; // single-slot save from a prior version
const boardDataKey = name => `teamup-board::${name}`;
// Separate from the full per-board save above: the toolbar's Quick save/
// Quick load only ever touch the board's hero layout/links, never the team
// comp, and never move the view.
const quickSaveKey = name => `teamup-quicksave::${name}`;

function loadBoardsIndex() {
  try {
    const list = JSON.parse(localStorage.getItem(BOARDS_INDEX_KEY) || "[]");
    if (Array.isArray(list) && list.length) return list;
  } catch { /* fall through to default */ }
  return ["Board 1"];
}

let boardsIndex = loadBoardsIndex();
let activeBoardName = localStorage.getItem(ACTIVE_BOARD_KEY);
if (!activeBoardName || !boardsIndex.includes(activeBoardName)) activeBoardName = boardsIndex[0];

// One-time migration: a pre-multi-board single save becomes this browser's
// first board instead of silently vanishing.
if (!localStorage.getItem(BOARDS_INDEX_KEY)) {
  const legacy = localStorage.getItem(LEGACY_SAVE_KEY);
  if (legacy) localStorage.setItem(boardDataKey(activeBoardName), legacy);
  localStorage.removeItem(LEGACY_SAVE_KEY);
}
localStorage.setItem(BOARDS_INDEX_KEY, JSON.stringify(boardsIndex));
localStorage.setItem(ACTIVE_BOARD_KEY, activeBoardName);

function persistActiveBoard() {
  localStorage.setItem(boardDataKey(activeBoardName), snapshotState());
}

function renderBoardSelect() {
  const select = document.querySelector("#boardSelect");
  select.innerHTML = boardsIndex
    .map(name => `<option value="${name}"${name === activeBoardName ? " selected" : ""}>${name}</option>`)
    .join("");
}

// Wipes the working board without touching undo history — used when
// switching to a board that has no saved data yet (a fresh "+ New" board).
function clearWorkingBoard() {
  state.nodes.forEach(n => n.el.remove());
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks.clear();
  state.selected = null;
  state.comp = Array(6).fill(null);
  state.compOwned = Array(6).fill(false);
  pickingSlot = null;
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  resetView();
  emptyState.style.display = "block";
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";
  focusTitle.textContent = "Empty board";
  focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
  renderComp();
  updateStats();
  renderRoutePanel();
}

// Two different boards' undo timelines shouldn't mix — switching starts a
// fresh history with just the board's just-loaded state in it.
function resetHistoryAfterBoardSwitch() {
  history.past = [snapshotState()];
  history.future = [];
  updateHistoryButtons();
}

function loadNamedBoard(name) {
  const saved = localStorage.getItem(boardDataKey(name));
  if (saved) restoreState(saved);
  else clearWorkingBoard();
  autoFit();
  resetHistoryAfterBoardSwitch();
}

function switchBoard(name) {
  if (name === activeBoardName) return;
  persistActiveBoard();
  activeBoardName = name;
  localStorage.setItem(ACTIVE_BOARD_KEY, activeBoardName);
  loadNamedBoard(name);
  renderBoardSelect();
}

function createNewBoard() {
  const name = (window.prompt("Name for the new board:", `Board ${boardsIndex.length + 1}`) || "").trim();
  if (!name) return;
  if (boardsIndex.includes(name)) {
    window.alert(`A board named "${name}" already exists.`);
    return;
  }
  persistActiveBoard();
  boardsIndex.push(name);
  localStorage.setItem(BOARDS_INDEX_KEY, JSON.stringify(boardsIndex));
  activeBoardName = name;
  localStorage.setItem(ACTIVE_BOARD_KEY, activeBoardName);
  clearWorkingBoard();
  persistActiveBoard(); // give the new board its own empty save right away
  resetHistoryAfterBoardSwitch();
  renderBoardSelect();
}

function saveCurrentBoard(triggerButton) {
  persistActiveBoard();
  flashButton(triggerButton, "Saved!");
}

// Toolbar Quick save/Quick load: board layout + links ONLY. Never touches
// the team comp, and never moves/resets the view — a plain reload of the
// current pan/zoom with the saved layout dropped back in.
function quickSaveBoard(triggerButton) {
  localStorage.setItem(quickSaveKey(activeBoardName), snapshotBoardOnly());
  flashButton(triggerButton, "Saved!");
}

function quickLoadBoard(triggerButton) {
  const saved = localStorage.getItem(quickSaveKey(activeBoardName));
  if (!saved) {
    flashButton(triggerButton, "No quick save yet");
    return;
  }
  if (!window.confirm("Reload this board's layout from its last quick save? Unsaved board changes will be lost. (Team comp is untouched.)")) return;
  restoreBoardOnly(saved);
  commit();
  flashButton(triggerButton, "Loaded!");
}

function deleteCurrentBoard() {
  if (boardsIndex.length <= 1) {
    window.alert("Can't delete the only board.");
    return;
  }
  if (!window.confirm(`Delete board "${activeBoardName}"? This can't be undone.`)) return;
  localStorage.removeItem(boardDataKey(activeBoardName));
  localStorage.removeItem(quickSaveKey(activeBoardName));
  boardsIndex = boardsIndex.filter(name => name !== activeBoardName);
  localStorage.setItem(BOARDS_INDEX_KEY, JSON.stringify(boardsIndex));
  activeBoardName = boardsIndex[0];
  localStorage.setItem(ACTIVE_BOARD_KEY, activeBoardName);
  loadNamedBoard(activeBoardName);
  renderBoardSelect();
}

renderBoardSelect();
loadNamedBoard(activeBoardName);

document.querySelector("#boardSelect").addEventListener("change", event => switchBoard(event.target.value));
document.querySelector("#newBoard").addEventListener("click", createNewBoard);
document.querySelector("#saveBoardBtn").addEventListener("click", event => saveCurrentBoard(event.currentTarget));
document.querySelector("#deleteBoard").addEventListener("click", deleteCurrentBoard);

// Toolbar quick save/load — board layout only (never the team comp, never
// the view/zoom), a fast in-place checkpoint distinct from the sidebar's
// full board+comp Save.
document.querySelector("#quickSave").addEventListener("click", event => quickSaveBoard(event.currentTarget));
document.querySelector("#quickLoad").addEventListener("click", event => quickLoadBoard(event.currentTarget));

// ---- Shareable images: separate, clean exports for the board and the team
// comp (not raw screenshots) — each is its own canvas-drawn card with a
// header, generously-spaced content, and a footer, downloaded as a PNG. ----

// Always loads the local portrait asset only, never the remote fallback
// URLs `portraitSources` also tries — drawing a cross-origin image onto a
// canvas taints it, which throws on `toDataURL`. Resolves null (caller
// draws an initials circle instead, same as the live board's fallback) if
// the local asset 404s.
function loadLocalPortrait(hero) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = `./assets/heroes/${heroSlug(hero)}.png`;
  });
}

function drawCardBackground(ctx, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#060814");
  bg.addColorStop(1, "#0d1730");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  const glow1 = ctx.createRadialGradient(w * 0.72, h * 0.12, 0, w * 0.72, h * 0.12, w * 0.55);
  glow1.addColorStop(0, "rgba(255, 91, 130, 0.16)");
  glow1.addColorStop(1, "rgba(255, 91, 130, 0)");
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, w, h);
  const glow2 = ctx.createRadialGradient(w * 0.28, h * 0.88, 0, w * 0.28, h * 0.88, w * 0.55);
  glow2.addColorStop(0, "rgba(76, 240, 181, 0.14)");
  glow2.addColorStop(1, "rgba(76, 240, 181, 0)");
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, w, h);
}

function drawCardHeader(ctx, eyebrow, title, subtitle) {
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#ffdc49";
  ctx.font = "800 18px Arial";
  ctx.fillText(eyebrow, 48, 52);
  ctx.fillStyle = "#f5f7ff";
  ctx.font = "800 40px Arial";
  ctx.fillText(title, 48, 98);
  ctx.fillStyle = "#96a8c8";
  ctx.font = "400 16px Arial";
  ctx.fillText(subtitle, 48, 126);
}

function drawCardFooter(ctx, w, h) {
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(150, 168, 200, 0.7)";
  ctx.font = "400 13px Arial";
  ctx.fillText("Marvel Rivals S9 — Team-Up Builder", w / 2, h - 28);
}

// Trims a link segment so both ends stop at the edge of their hero circles
// (radius `rStart`/`rEnd`) instead of the circle centers — otherwise the
// circles (drawn on top, after links) hide the line and its arrowhead
// entirely, which was the root of "how do I know who's buffing who?".
function trimSegment(p1, p2, rStart, rEnd) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;
  return {
    start: { x: p1.x + ux * rStart, y: p1.y + uy * rStart },
    end: { x: p2.x - ux * (rEnd + 8), y: p2.y - uy * (rEnd + 8) }
  };
}

function drawArrowheadShape(ctx, tip, angle, size, fillStyle) {
  ctx.beginPath();
  ctx.moveTo(tip.x, tip.y);
  ctx.lineTo(tip.x - size * Math.cos(angle - 0.45), tip.y - size * Math.sin(angle - 0.45));
  ctx.lineTo(tip.x - size * Math.cos(angle + 0.45), tip.y - size * Math.sin(angle + 0.45));
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

// A link drawn as a halo'd, arrow-headed line: the dark halo behind the
// colored line/arrowhead keeps direction legible regardless of the link's
// own color or how many other links cross nearby — this (plus trimming to
// the circle edges) is what actually makes "who enhances whom" readable at
// a glance, which plain thin lines did not.
function drawArrowLink(ctx, p1, p2, color) {
  const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  const arrowSize = 15;

  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(4, 7, 16, 0.65)";
  ctx.lineWidth = 6.5;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  drawArrowheadShape(ctx, p2, angle, arrowSize + 5, "rgba(4, 7, 16, 0.65)");

  ctx.strokeStyle = color;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  drawArrowheadShape(ctx, p2, angle, arrowSize, color);
}

// One compact visual key instead of a paragraph of explanation: the same
// role colors already ringing every portrait, plus a single arrow glyph
// spelling out what an arrow means. Drawn once per card.
function drawLegend(ctx, x, y) {
  let cx = x;
  const cy = y;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  [["Vanguard", roleColors.Vanguard], ["Duelist", roleColors.Duelist], ["Strategist", roleColors.Strategist], ["Flex", roleColors.Flex]]
    .forEach(([label, color]) => {
      ctx.beginPath();
      ctx.arc(cx + 7, cy, 7, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      cx += 20;
      ctx.fillStyle = "#c9d7f1";
      ctx.font = "600 14px Arial";
      ctx.fillText(label, cx, cy);
      cx += ctx.measureText(label).width + 26;
    });
  const lineLen = 34;
  ctx.strokeStyle = "#3ddc71";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + lineLen, cy);
  ctx.stroke();
  drawArrowheadShape(ctx, { x: cx + lineLen, y: cy }, 0, 9, "#3ddc71");
  cx += lineLen + 14;
  ctx.fillStyle = "#c9d7f1";
  ctx.font = "600 14px Arial";
  ctx.fillText("= enhances (A → B)", cx, cy);
}

function drawHeroCircle(ctx, img, hero, roleColor, cx, cy, r) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.save();
  ctx.clip();
  if (img) {
    ctx.drawImage(img, cx - r, cy - r, r * 2, r * 2);
  } else {
    ctx.fillStyle = "#11182e";
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    ctx.fillStyle = roleColor;
    ctx.font = `800 ${Math.round(r * 0.75)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials(hero), cx, cy + 1);
  }
  ctx.restore();
  ctx.lineWidth = Math.max(2, r * 0.12);
  ctx.strokeStyle = roleColor;
  ctx.stroke();
  ctx.restore();
}

async function drawBoardContent(ctx, x, y, w, h) {
  const nodes = [...state.nodes.values()];
  if (!nodes.length) {
    ctx.fillStyle = "#96a8c8";
    ctx.font = "400 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("No heroes on the board yet", x + w / 2, y + h / 2);
    return;
  }
  const pad = 80;
  const minX = Math.min(...nodes.map(n => n.x));
  const maxX = Math.max(...nodes.map(n => n.x));
  const minY = Math.min(...nodes.map(n => n.y));
  const maxY = Math.max(...nodes.map(n => n.y));
  const spanX = Math.max(maxX - minX, 1);
  const spanY = Math.max(maxY - minY, 1);
  const scale = Math.min((w - pad * 2) / spanX, (h - pad * 2) / spanY, 1.3);
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const cx0 = x + w / 2;
  const cy0 = y + h / 2;
  const toScreen = (wx, wy) => ({ x: cx0 + (wx - midX) * scale, y: cy0 + (wy - midY) * scale });
  const r = Math.max(18, Math.min(34, 30 * scale + 10));

  for (const [id, link] of state.links) {
    if (state.hiddenLinks.has(id)) continue;
    const s = state.nodes.get(link.source);
    const t = state.nodes.get(link.target);
    if (!s || !t) continue;
    const p1 = toScreen(s.x, s.y);
    const p2 = toScreen(t.x, t.y);
    const color = link.preview ? "rgba(226, 232, 245, 0.35)" : (link.color || "#3ddc71");
    const seg = trimSegment(p1, p2, r, r);
    drawArrowLink(ctx, seg.start, seg.end, color);
  }

  const portraits = new Map();
  await Promise.all(nodes.map(async n => portraits.set(n.hero, await loadLocalPortrait(n.hero))));

  for (const n of nodes) {
    const p = toScreen(n.x, n.y);
    drawHeroCircle(ctx, portraits.get(n.hero), n.hero, roleColors[roleOf(n.hero)], p.x, p.y, r);
    ctx.fillStyle = "#f5f7ff";
    ctx.font = `700 ${Math.max(11, Math.round(r * 0.5))}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(n.hero, p.x, p.y + r + 6);
  }
}

// A lightweight companion to the board diagram: just the team comp's 6
// icons neatly laid out in a row — no arrows, no ring rearrangement (that
// belongs to the standalone Comp image) — enough context to see who's on
// the comp without the visual complexity of `drawCompContent`.
async function drawCompIconsRow(ctx, x, y, w, h) {
  const slots = state.comp;
  const r = Math.max(20, Math.min(40, w / 14, h / 2.4));
  const gap = w / 6;
  const cy = y + h / 2;
  const portraits = new Map();
  await Promise.all(slots.filter(Boolean).map(async hero => portraits.set(hero, await loadLocalPortrait(hero))));
  slots.forEach((hero, i) => {
    const cx = x + gap * i + gap / 2;
    if (hero) {
      drawHeroCircle(ctx, portraits.get(hero), hero, roleColors[roleOf(hero)], cx, cy, r);
      ctx.fillStyle = "#f5f7ff";
      ctx.font = "700 14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(hero, cx, cy + r + 8);
    } else {
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.font = "400 12px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText("Empty", cx, cy + r + 8);
    }
  });
}

async function buildBoardImageCanvas() {
  const W = 1600;
  const headerH = 182;
  const boardH = 980;
  const compRowH = 170;
  const footerH = 60;
  const H = headerH + boardH + compRowH + footerH;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  drawCardBackground(ctx, W, H);
  drawCardHeader(
    ctx,
    "MARVEL RIVALS S9",
    "Team-Up Board",
    `${activeBoardName} · ${state.nodes.size} hero${state.nodes.size === 1 ? "" : "es"} · ${state.links.size} link${state.links.size === 1 ? "" : "s"}`
  );
  drawLegend(ctx, 48, 152);
  await drawBoardContent(ctx, 48, headerH, W - 96, boardH);

  let y = headerH + boardH;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#ffdc49";
  ctx.font = "700 15px Arial";
  ctx.fillText("TEAM COMP", 48, y + 20);
  await drawCompIconsRow(ctx, 48, y + 30, W - 96, compRowH - 30);

  drawCardFooter(ctx, W, H);
  return canvas;
}

function compStatsLine() {
  const filled = state.comp.filter(Boolean);
  let internal = 0;
  for (const a of filled) for (const b of relationships[a] || []) if (filled.includes(b)) internal += 1;
  const roleCounts = {};
  filled.forEach(hero => { roleCounts[roleOf(hero)] = (roleCounts[roleOf(hero)] || 0) + 1; });
  const rolesText = Object.entries(roleCounts).map(([role, count]) => `${count} ${role}`).join(" · ");
  return `${filled.length}/6 heroes · ${internal} internal team-up${internal === 1 ? "" : "s"}${rolesText ? " · " + rolesText : ""}`;
}

// Arranges the 6 comp slots in a ring (rather than a row) so the arrows
// between related members — the whole point, since a raw row of portraits
// said nothing about who upgrades whom — have room to read clearly without
// every line crossing every other one.
async function drawCompContent(ctx, x, y, w, h) {
  const slots = state.comp;
  const cx0 = x + w / 2;
  const cy0 = y + h / 2;
  // Smaller icons than the first version, and links stop well short of the
  // circle edge (not just a few px) — both per direct feedback that the
  // arrows were too hard to read up against the portraits.
  const r = Math.max(22, Math.min(42, Math.min(w, h) / 11));
  const linkClearance = Math.max(20, r * 0.6);
  const labelGap = 34;
  const R = Math.max(90, Math.min(w, h) / 2 - r - labelGap - 30);

  const positions = slots.map((hero, i) => {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / 6;
    return { hero, angle, x: cx0 + R * Math.cos(angle), y: cy0 + R * Math.sin(angle) };
  });
  const filled = positions.filter(p => p.hero);

  // Internal team-ups: only the relationships that exist BETWEEN the 6
  // comp members themselves (matches the "internal team-ups" stat already
  // shown in the header line).
  for (const a of filled) {
    for (const b of filled) {
      if (a === b) continue;
      if ((relationships[a.hero] || []).includes(b.hero)) {
        const seg = trimSegment(a, b, r + linkClearance, r + linkClearance);
        drawArrowLink(ctx, seg.start, seg.end, "#3ddc71");
      }
    }
  }

  const portraits = new Map();
  await Promise.all(filled.map(async p => portraits.set(p.hero, await loadLocalPortrait(p.hero))));

  positions.forEach(p => {
    const labelR = R + r + labelGap;
    const labelX = cx0 + labelR * Math.cos(p.angle);
    const labelY = cy0 + labelR * Math.sin(p.angle);
    if (p.hero) {
      drawHeroCircle(ctx, portraits.get(p.hero), p.hero, roleColors[roleOf(p.hero)], p.x, p.y, r);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#f5f7ff";
      ctx.font = "700 17px Arial";
      ctx.fillText(p.hero, labelX, labelY - 9);
      ctx.fillStyle = "#96a8c8";
      ctx.font = "400 13px Arial";
      ctx.fillText(roleOf(p.hero), labelX, labelY + 11);
    } else {
      ctx.save();
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.font = "400 14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Empty", labelX, labelY);
    }
  });
}

async function buildCompImageCanvas() {
  const W = 1100;
  const H = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  drawCardBackground(ctx, W, H);
  drawCardHeader(ctx, "MARVEL RIVALS S9", "Team Comp", `${activeBoardName} · ${compStatsLine()}`);
  drawLegend(ctx, 48, 152);
  await drawCompContent(ctx, 48, 182, W - 96, H - 182 - 60);
  drawCardFooter(ctx, W, H);
  return canvas;
}

function downloadCanvas(canvas, filename) {
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
}

async function exportImage(buildFn, filenamePrefix, triggerButton) {
  const original = triggerButton.textContent;
  triggerButton.disabled = true;
  triggerButton.textContent = "Rendering…";
  try {
    const canvas = await buildFn();
    const safeName = activeBoardName.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    downloadCanvas(canvas, `${filenamePrefix}-${safeName}.png`);
  } catch (err) {
    window.alert(`Couldn't create the image: ${err.message}`);
  } finally {
    triggerButton.disabled = false;
    triggerButton.textContent = original;
  }
}

document.querySelector("#exportBoardImage").addEventListener("click", event => exportImage(buildBoardImageCanvas, "teamup-board", event.currentTarget));
document.querySelector("#exportCompImage").addEventListener("click", event => exportImage(buildCompImageCanvas, "teamup-comp", event.currentTarget));
