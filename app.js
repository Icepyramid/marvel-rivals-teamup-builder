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
  "Venom": "Vanguard", "The Hood": "Duelist", "Luna Snow": "Strategist",
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

// Per-Team-Up descriptions, keyed by the receiving hero. `from` is the
// providing partner. Text sourced from "Marvel Rivals Season 9.0 Team-Ups -
// Super Simplified Guide" written and researched by Kane Carter
// (u/-popgoes · @kanethecarter) — credited in the detail panel and the
// Credits panel per the author's request. Do not remove the credit.
const TEAMUP_GUIDE_URL = "https://docs.google.com/document/d/1sNXwLJ3VodDypfs46KtfcdIgoX_fyeCMpImZ3HJzmM4/";
const teamupInfo = {
  "Adam Warlock": [
    { from: "Storm", name: "Cosmic Cyclone", slot: "upgrades Shift",
      base: "Soul Bonded allies receive a Speed Boost (+20%). Soul Bond range is increased (5m).",
      enhanced: "Speed Boost is increased (+30%). Bonded allies also receive a Damage Boost (+12%)." },
    { from: "Ultron", name: "Flawless Design", slot: "upgrades Right-Click",
      base: "Cosmic Cluster now heals allies (16h/shot). Successful healing also reduces Avatar Life Stream's cooldown (-0.6s). Ammo capacity is increased (+10).",
      enhanced: "Cosmic Cluster now has splash damage and splash healing (3m radius, 5d/shot)." }
  ],
  "Angela": [
    { from: "Star-Lord", name: "Asgardians of the Galaxy", slot: "C",
      base: "Reveals enemies on activation (50m radius). Second activation performs slam (10m radius, 65d) that Grounds enemies. 25s cooldown.",
      enhanced: "Slam now provides Bonus Health (75bh) per target hit, 200 max." },
    { from: "Loki", name: "Odin's Unacknowledged", slot: "C",
      base: "Send a charging illusion (250h) forward that carries enemies. 20s cooldown.",
      enhanced: "Ability gains a second charge." }
  ],
  "Black Cat": [
    { from: "Black Panther", name: "Feline Alliance", slot: "C",
      base: "Absorb damage (50d) to release an explosion that damages (45d) and Knocks back enemies (8m radius). Gain a Speed Boost (+3m/s, decays over 3s) and Bonus Health (25bh). 12s cooldown.",
      enhanced: "No required threshold of absorbed damage. Explosion can be triggered at any time." },
    { from: "Spider-Man", name: "Binding Ties", slot: "upgrades E",
      base: "Turn of Fortune now applies a Spider-Tracer. Attacking an enemy with a Spider-Tracer deals bonus damage (45d). Ability also gains a second charge.",
      enhanced: "Turn of Fortune now Immobilizes (0.5s) enemies already marked with a Spider-Tracer." }
  ],
  "Black Panther": [
    { from: "Storm", name: "Damisa-Yao", slot: "C",
      base: "Deal damage (40d), apply Slow (-35% for 2s), and attach Vibranium Marks to enemies (8m radius). 12s cooldown.",
      enhanced: "Slow effect is increased (-45%). Enemies within range are launched inwards." },
    { from: "Magik", name: "Dimensional Shortcut", slot: "C",
      base: "Teleport to your position from a few seconds ago, gaining Bonus Health (50bh), then deal an explosion (8m radius, 40d) that applies Vibranium Marks. 35s cooldown.",
      enhanced: "Teleportation can now be cancelled manually." }
  ],
  "Black Widow": [
    { from: "Hawkeye", name: "Allied Agents", slot: "Passive",
      base: "Land hits with Red Room Rifle to build 1 Focus. Land crits to build 2 Focus. At 3 Focus, the next hit has Damage Boost (+45%) and can pierce.",
      enhanced: "Landing crits stops Focus from expiring." },
    { from: "Phoenix", name: "Burning Bullets", slot: "Passive",
      base: "Red Room Rifle has increased Fire Rate (+15%). Electro-Plasma Blast is now a hitscan explosion (5m radius, 70d).",
      enhanced: "Electro-Plasma Blast gains a second charge." }
  ],
  "Blade": [
    { from: "Moon Knight", name: "Blade of Khonshu", slot: "C",
      base: "Cleave forward with a short dash (9m in 0.15s). Then slash 4 times, sending Darkmoon Blades (40d) that bounce to nearby targets (150m/s). -35% damage falloff per bounce. 12s cooldown.",
      enhanced: "Whirlwind Slash generates +1 Darkmoon Blade." },
    { from: "Captain America", name: "Bleed for Battle", slot: "Passive",
      base: "Gain a stack of Bloodline Awakening for every 40 damage taken.",
      enhanced: "Taking critical damage (65% health) instantly activates Bloodline Awakening and adds 5 bonus stacks. The stack cap is increased to 12." }
  ],
  "Captain America": [
    { from: "Winter Soldier", name: "Stars Aligned", slot: "C",
      base: "Leap to an ally, providing Bonus Health (150bh) to both of you. Absorb some of the ally's incoming damage to yourself (2s). 12s cooldown.",
      enhanced: "Leaping to an ally now provides a Speed Boost (+1.5m/s). Upon confirmation, leap to Winter Soldier to apply Bonus Health (150bh) to all nearby allies." },
    { from: "Thor", name: "Voltaic Union", slot: "C",
      base: "Activating will make Sentinel Strike pierce enemies. 15s cooldown.",
      enhanced: "Each hit now deals splash damage (3m radius, 5d)." }
  ],
  "Cloak & Dagger": [
    { from: "The Hood", name: "Oblivion Shroud", slot: "upgrades E",
      base: "Veil of Lightforce now halts (4s) in place after a moment (or upon using ability again), decreasing enemy damage passing through it (-20%). Terror Cape now halts (4s) in place after a moment (or upon using ability again), decreasing enemy healing passing through it (-20%).",
      enhanced: "Both veils increase in size (+33%) and allies receive Damage Boost (+15%) when passing through them." },
    { from: "Luna Snow", name: "Frozen Haven", slot: "C",
      base: "Freeze in place, becoming Invulnerable and healing yourself and nearby allies (8m radius, 50h/s). 20s cooldown.",
      enhanced: "Healing is increased (90h/s)." }
  ],
  "Cyclops": [
    { from: "Phoenix", name: "Slim and Red", slot: "upgrades E",
      base: "Ricochet Force applies burn damage (14d/s) over time (3s). Hitting a burning target with Optic Blast or Concussive Beam instantly triggers 50% of the remaining damage.",
      enhanced: "Spark detonations reduce Ricochet Force cooldown (0.5s)." },
    { from: "Gambit", name: "Kinetic Kin", slot: "C",
      base: "Activate to gain a Speed Boost (+40%) and increased jump height (+5m/s) for 6 seconds. 18s cooldown.",
      enhanced: "Activating now increases attack speed for Optic Blast (+25%) and Concussive Beam (+10%)." }
  ],
  "Daredevil": [
    { from: "Iron Fist", name: "Comprehensive Defense", slot: "upgrades Right-Click",
      base: "Objection! now deflects projectiles from all directions and deals damage to nearby enemies.",
      enhanced: "Objection! now also applies self-healing (60h/s)." },
    { from: "Black Widow", name: "Devilish Affair", slot: "C",
      base: "Deal damage (55d) in a cone (8.5m radius, 5m tall, 120 degrees) that inflicts Slow (-40% for 1.5s). 12s cooldown.",
      enhanced: "Increase damage cone size (180 degrees) and now recover Fury on hit." }
  ],
  "Deadpool": [
    { from: "Hela", name: "\"Hel-Yeah, Honey\"", slot: "Passive",
      base: "Either Desert Eagles or Katanas can be upgraded once more. Upgraded Desert Eagles now pierce, and emojis now home in on enemies (and allies for Strategist Deadpool). Upgraded Katanas deal an explosion after hitting an enemy 3 times. Explosion deals (5d + 1.5% of target's max health) for Vanguard Deadpool, (5d + 2%) for Duelist Deadpool, (5d + 0.5%) for Strategist Deadpool.",
      enhanced: "Both weapons can now be upgraded." },
    { from: "Gambit", name: "Gumbo Chimichangas", slot: "C",
      base: "Leap forward and deal damage to nearby enemies upon landing (5m radius): 60d for Vanguard Deadpool, 90d for Duelist Deadpool, 35d for Strategist Deadpool. 15s cooldown.",
      enhanced: "Decrease the ability's cooldown (-5s). Landing now inflicts Stun (0.3s)." }
  ],
  "Devil Dinosaur": [
    { from: "The Punisher", name: "Primal Punishment", slot: "C",
      base: "Activate to replace Primal Bite with cannons that fire (0.25s per hit) for 8 seconds. Cannonballs deal direct damage (5d), splash damage (3m radius, 20d) and inflict Bleed. 12s cooldown.",
      enhanced: "The Punisher can ride Devil Dinosaur for Damage Reduction (-25%). Devil Dinosaur also absorbs damage inflicted on The Punisher (50%)." },
    { from: "Jeff the Land Shark", name: "Surf & Turf", slot: "upgrades Right-Click",
      base: "Impact Beam now provides piercing healing for allies (40h/s) and has increased range (+18%) and duration (+21%).",
      enhanced: "Jeff the Land Shark can ride Devil Dinosaur, providing both heroes with Damage Reduction (-12.5%) and healing (15h/s)." }
  ],
  "Doctor Strange": [
    { from: "Hulk", name: "Gamma Maelstrom", slot: "upgrades E",
      base: "Maelstrom of Madness's range is increased (+25%) and Dark Magic gained by hitting enemies is increased (+185%). Anti-Heal curse is also removed. Cooldown is increased (+2s).",
      enhanced: "Using Maelstrom of Madness will now retain 50 energy. Energy also now does not decay over time." },
    { from: "Invisible Woman", name: "Psionic Vortex", slot: "upgrades E",
      base: "Maelstrom of Madness now launches enemies inwards. Shield of the Seraphim now has increased health (150h).",
      enhanced: "Maelstrom of Madness now provides Bonus Health based on damage dealt (50%, 150bh maximum)." }
  ],
  "Elsa Bloodstone": [
    { from: "Devil Dinosaur", name: "Prehistoric Trap", slot: "upgrades F",
      base: "Smoky Snare has a larger detection range (5m radius) and will now also release a gas (3m radius) that deals damage (35d/s) over time (2s).",
      enhanced: "Ability gains a second charge and 2 Smoky Snares can be active at once." },
    { from: "Deadpool", name: "Loudmouth Mercs", slot: "upgrades Right-Click",
      base: "Living Bullet now Slows targets (-25% for 2s), deals damage over time (20d/s) and Taunts targets. Bullet then auto-recalls, healing Elsa based on damage dealt and adding 1 stack to Inherited Instinct.",
      enhanced: "The rate of acquiring Inherited Instinct is also increased (+33%)." }
  ],
  "Emma Frost": [
    { from: "Mantis", name: "Spirit Breaker", slot: "upgrades E",
      base: "Dealing damage to Psychic Spear's crystal now grants Bonus Health to you based on damage dealt (150%).",
      enhanced: "Breaking Psychic Spear's crystal now also grants additional Bonus Health (100bh) and reduces the cooldown for Psychic Spear (-2s)." },
    { from: "Luna Snow", name: "Iced Out Diamond", slot: "C",
      base: "Deal damage (50d) in a cone (8m radius, 3m tall, 60 degrees) that inflicts Slow (-25% for 2s) and summons a wall of ice (350h). 12s cooldown.",
      enhanced: "Attacks dealt in Diamond Form now apply Slow (-20% for 2s). Telepathic Pulse also applies Slow (scales to -10% at 100 energy)." }
  ],
  "Gambit": [
    { from: "Magneto", name: "Favorable Odds", slot: "C",
      base: "Summon a dome (5m radius for 5s) that heals allies (50h/s) and damages enemies (50d/s) in range, while also launching enemies back. 15s cooldown.",
      enhanced: "The dome now explodes at the end of its duration, dealing additional damage (40d) and healing (60h)." },
    { from: "Jubilee", name: "Sparkling Staff", slot: "C",
      base: "Provide healing to nearby allies (8m radius, 70h/s) and damage to nearby enemies (5m radius, 45d/s) while blocking damage from projectiles (1.5s).",
      enhanced: "Bayou Bash and Big Easy Impact now provide additional healing over time (10/s for 3s)." }
  ],
  "Groot": [
    { from: "Mantis", name: "Wild Wall", slot: "C",
      base: "Summon a wall (200h) that provides healing over time (20h/s) and Bonus Health over time (10bh/s) to nearby allies (15m radius). 10s cooldown.",
      enhanced: "Wall now upgrades after providing 200 healing. Upgraded wall heals allies faster (35h/s) and has more health (250h)." },
    { from: "Jeff the Land Shark", name: "Bubble Buddies", slot: "C",
      base: "Activate to float in a shield (400h) that can float (4s) and provide healing (40h/s). 20s cooldown.",
      enhanced: "Healing effect is doubled (80h/s) and excess healing becomes Bonus Health (50%). Jeff can also ride Groot, but he will not receive healing." }
  ],
  "Hawkeye": [
    { from: "Psylocke", name: "Senbonzakura Strike", slot: "upgrades Left-Click",
      base: "Blast Arrow becomes Psionic Arrow (32d), allowing up to 5 arrows to be nocked (0.09s each) and fired at once. Arrows do not deal splash damage.",
      enhanced: "Arrow damage is decreased (24d), but nocking speed is increased (0.07) and arrows deal splash damage (2m radius, 8d)." },
    { from: "Cloak & Dagger", name: "Moonlit Slash", slot: "upgrades Shift",
      base: "Crescent Slash now fires a projectile that heals (65h) and boosts healing (+15% for 4s) for allies, and damages (65d) and applies Vulnerability (+15% for 4s) to enemies.",
      enhanced: "Ability now has decreased healing (35h) and damage (35d) but fires 3 projectiles in quick succession." }
  ],
  "Hela": [
    { from: "Venom", name: "Hel Tendrils", slot: "upgrades E",
      base: "Soul Drainer now deals more damage (50d), pulls nearby enemies to its center (2s), and applies Slow (ranges from -20% to -40% based on distance from center).",
      enhanced: "Piercing Night now fires more Nightsword Thorns (+2) which restore health (20h each)." },
    { from: "Namor", name: "Deep Wrath", slot: "Passive",
      base: "Participating in a KO spawns an Undead Monstro (150h) that expires (8s), autonomously dealing damage (15d). Piercing Night will command the Monstro(s) to attack the nearest enemy you hit.",
      enhanced: "Attacks during Goddess of Night spawn additional Undead Monstros (up to 3)." }
  ],
  "Hulk": [
    { from: "Captain America", name: "Savage Slam", slot: "C",
      base: "Activate to jump and slam the ground, dealing damage to nearby enemies (8m radius, 40d) and reducing your ability cooldowns based on your current health: 1-3s (max at 400h) for Gamma Burst and Radioactive Lockdown, 2-5s (max at 400h) for Indestructible Guard. Can be activated mid-jump. 20s cooldown.",
      enhanced: "Slam has increased damage (50d) and applies Vulnerability to enemies (+20% for 3s)." },
    { from: "Wolverine", name: "Gamma Fastball", slot: "C",
      base: "Activate to become Furious for a period (6s), gaining Speed Boost (+20%), and increased attack speed (+20%), plus Unstoppable (6s) when health is low (<300h). 15s cooldown. 60s cooldown for Unstoppable.",
      enhanced: "Hulk can throw Wolverine, also activating the Furious state on its own separate cooldown." }
  ],
  "Human Torch": [
    { from: "Jubilee", name: "Fiery Sparks", slot: "C",
      base: "Send out projectiles (0.1/s) that deal damage (9d) autonomously to nearby enemies (10m radius) for a period of time (5s).",
      enhanced: "Also gain Bonus Health (4bh) for each projectile that hits an enemy." },
    { from: "Storm", name: "Storming Ignition", slot: "C",
      base: "Summon a dome (5m radius) that deals damage (30d) and damage over time (25d/s), pulling enemies to its center.",
      enhanced: "Flame Tornados can now ignite Storm's Omega Hurricane, increasing its radius (+2m) and each one increasing its duration (+3s, max 11s)." }
  ],
  "Invisible Woman": [
    { from: "Human Torch", name: "United Siblings", slot: "upgrades Right-Click",
      base: "Guardian Shield has increased health (300h) and now boosts damage from projectiles fired by allies that pass through it (+20%).",
      enhanced: "Guardian Shield is larger and has further increased health (400h)." },
    { from: "Mister Fantastic", name: "First Family", slot: "C",
      base: "Enter Invisible state with nearby allies (4s), gaining healing (15h/s) and a Speed Boost (+1.2m/s). Invisible state ends briefly if damage is taken or dealt.",
      enhanced: "Invisible lasts longer (6s), heals more (25h/s) and has a stronger Speed Boost (+1.8m/s)." }
  ],
  "Iron Fist": [
    { from: "The Thing", name: "Iron & Stone", slot: "C",
      base: "Activate to uppercut nearby enemies (5m radius, 45d), Launching Up enemies. 8s cooldown.",
      enhanced: "Uppercut can be followed up with a second attack (5m radius, 45d)." },
    { from: "White Fox", name: "Kumiho Palm", slot: "Passive",
      base: "Yat Jee Chung Kuen now provides healing to nearby allies (6m radius, 6h per hit).",
      enhanced: "Healing is increased (7.5 per hit) and Yat Jee Chung Kuen's lock-on distance is increased (+33%)." }
  ],
  "Iron Man": [
    { from: "Hulk", name: "Gamma Charge", slot: "upgrades E",
      base: "Armor Overdrive now provides a Gamma Shield (75h for 2s) and increases the damage of Repulsor Blast's direct hits (45d > 50d), its splash damage (60d > 65d), and Unibeam (180d/s > 200d/s) even further.",
      enhanced: "Invincible Pulse Cannon now also provides a Gamma Shield (75h for 2s) and its projectile deals damage (45d) to nearby enemies as it flies." },
    { from: "Thor", name: "Thunder Overdrive", slot: "Passive",
      base: "The range of Unibeam is increased (2m). Unibeam also deals bonus damage (84d/s) to enemies caught near the beam's outer ring (0.75m radius). Armor Overdrive increases bonus damage (108d/s) and outer ring size (1/2m radius).",
      enhanced: "Armor Overdrive's cooldown is reduced (-5s)." }
  ],
  "Jeff the Land Shark": [
    { from: "Venom", name: "Guardian of the Deep", slot: "C",
      base: "Shoot tendrils that link to nearby allies (15m radius), providing healing (45h) and healing over time (45h/s) until they expire (5s). Excess healing is converted to Bonus Health (50%). 20s cooldown.",
      enhanced: "Tendrils now also link to nearby enemies, dealing damage over time (35d/s)." },
    { from: "Deadpool", name: "Mr. Pool's Interdimensional Toy Box", slot: "",
      base: "Summon a dome (6m radius) that heals allies over time (30h/s) and Taunts enemies for its duration (5s). 15s cooldown.",
      enhanced: "The Taunt effect is increased, and damage is now dealt to enemies over time (30d/s)." }
  ],
  "Jubilee": [
    { from: "The Hood", name: "Hellfire Sparks", slot: "Passive",
      base: "When Attack Speed is increased (via Sparking Sprint or triggering a Sparkle Mark), Energy Plasmoids become hitscan (5d / 6.5h), grant self-healing on hit (2h), and can deal critical hits.",
      enhanced: "Sparkle Marks are not cleared on hit, allowing Attack Speed increase to be re-triggered indefinitely." },
    { from: "Blade", name: "Vampiric Kin", slot: "C",
      base: "Activate a field around you (12m radius) that converts damage into healing (25%) for you and allies for its duration (6s). 15s cooldown.",
      enhanced: "The field now also provides healing over time (25h/s)." }
  ],
  "Loki": [
    { from: "Hela", name: "Villain's Illusion", slot: "C",
      base: "Assume the form of a defeated hero (ally or enemy) for a period (6s) and use their abilities, except Ultimates. 30s cooldown.",
      enhanced: "The period is extended (8s). Taking lethal damage while transformed (including via God of Mischief) will revert you back to Loki with some health (150h)." },
    { from: "Mantis", name: "Vibrant Vitality", slot: "upgrades Shift",
      base: "Regenerative Domain has an increased radius (6.5m) and provides a damage boost (+15%).",
      enhanced: "Summoning Regenerative Domain now deals damage to enemies (45d) and Knocks them back." }
  ],
  "Luna Snow": [
    { from: "White Fox", name: "Atlas Bond", slot: "C",
      base: "Fire a projectile forward (3m radius, 35d) that Charms enemies (0.8m radius, 0.35s), heals allies (70h), and cleanses negative effects on you. 12s cooldown.",
      enhanced: "The projectile now returns after reaching its max distance, repeating its effects. Cooldown is reduced (-2s)." },
    { from: "Adam Warlock", name: "Duality Dance", slot: "C",
      base: "Link to nearby (20m radius) allies and enemies for a period (6s). Damaging linked enemies (50%) and healing linked allies (25%) restores your health. Link breaks if heroes travel too far from you (25m radius). 15s cooldown.",
      enhanced: "Critical hits with Light & Dark Ice now reduce the cooldowns of Absolute Zero (-0.5s) and Ice Arts (-1.5s)." }
  ],
  "Magik": [
    { from: "Doctor Strange", name: "Chain of Cyttorak", slot: "C",
      base: "Tether two enemies together, dealing damage over time (10d/s) pulling them to the center and applying Slow (ranges from 0% to -40% based on distance from center) until duration ends (4s). 20s cooldown.",
      enhanced: "Tether can now connect an unlimited number of enemies together." },
    { from: "The Hood", name: "Void Pentagram", slot: "C",
      base: "Summon a field (8m radius). Using Stepping Discs in the field refunds some of its cooldown cost (-0.5s) and automatically summons a Limbo Demon. 15s cooldown.",
      enhanced: "Limbo Demons summoned in the field have increased health (+100h) and attack range (+2.5m)." }
  ],
  "Magneto": [
    { from: "Scarlet Witch", name: "Metallic Chaos", slot: "C",
      base: "Activate to replace Iron Volley with large projectiles that are sent forward (120m/s), dealing direct damage (45d) and splash damage (40d) for its duration (8s). 12s cooldown.",
      enhanced: "Mag-Cannon is replaced, allowing you to charge and fire up to 3 projectiles quickly (0.33s), dealing direct damage (20d) and splash damage (25d)." },
    { from: "Emma Frost", name: "Magnetic Resonance", slot: "C",
      base: "Cast a projection (300h) that mimics your movement and abilities (45% damage) until its duration ends (5s). 15s cooldown.",
      enhanced: "The projection has increased health (450h) and no longer expires." }
  ],
  "Mantis": [
    { from: "Star-Lord", name: "Star Blossom", slot: "upgrades Right-Click",
      base: "Healing Flower has increased healing (15h+3%mh/s). Also, applying a Healing Flower on an ally who already has the effect will enhance its healing rate (17.5h+3.5%mh/s) even further, and heal nearby (8m radius) allies (7.5h+1.75%mh/s).",
      enhanced: "Healing Flower now applies the enhanced healing rate and heals nearby allies on its first cast." },
    { from: "Adam Warlock", name: "Vitality Pact", slot: "Passive",
      base: "Self-healing from using Natural Anger is increased (+5h/s). Also, freely move as a soul upon defeat, healing allies in a radius (5h/s) and reviving at a chosen spot. 90s cooldown.",
      enhanced: "You can now use Soul Bond (15m radius) with allies when freely moving as a soul, providing healing over time and sharing damage across allies (300h max)." }
  ],
  "Mister Fantastic": [
    { from: "Rocket Raccoon", name: "Fantastic Amplifier", slot: "F",
      base: "Elasticity's limit is increased to 200. Inflation State can be activated manually. 8s cooldown.",
      enhanced: "Brainiac Bounce now Launches enemies inwards." },
    { from: "The Thing", name: "Clobberin' Research Dept.", slot: "C",
      base: "Activate to enter a brawling stance (10s). Stretch Punch becomes chargeable (over 1s), with damage that scales with charge (55d-100d) and providing Bonus Health that scales with damage (75%, max 75bh). Fully charged hits also Launch enemies back. 20s cooldown.",
      enhanced: "Brawling stance now also makes Distended Grip chargeable (over 1s), slamming down an attack on a shorter cooldown (3s) with damage that scales with charge (70d-100d) and providing Bonus Health that scales with damage (75%, max 75bh)." }
  ],
  "Moon Knight": [
    { from: "Cloak & Dagger", name: "Luminous Moon", slot: "C",
      base: "Enter a phased state (0.25s) and dash forward (15m), then emit a pulse of healing around you (5m radius, 55h).",
      enhanced: "Phased state lasts longer (0.35s), the dash travels further (17.5m), and the healing is greater (65h) in a larger space (8m radius)." },
    { from: "Elsa Bloodstone", name: "Blood Moon", slot: "C",
      base: "Deploy an Ankh Trap (100h) that summons a Talon of Khonshu that deals damage (70d) and launches enemies inwards when they enter its radius, then becomes an ordinary Ankh. Ankhs spawned from Ankh Traps are on a separate active limit, effectively allowing 4 active Ankhs on the field. Ankh Traps become invisible after a period (1s).",
      enhanced: "Talon of Khonshu is replaced with 3 weaker Talons (40d) that fall in quick succession." }
  ],
  "Namor": [
    { from: "Hulk", name: "Gamma Monstro", slot: "C",
      base: "Summon an additional Monstro (150h) that autonomously attacks (50d/s) the nearest enemy, with damage increasing on single targets over time (+10%/s). Critical hits increase the Monstro's attack speed, and hitting with Wrath of the Seven Seas triggers it to fire a powerful beam (70d/s). 30s cooldown.",
      enhanced: "Blessing of the Deep grants active Gamma Monstro a damage boost (+25%) and increases its cooldown recovery speed (+200%)." },
    { from: "Luna Snow", name: "Chilling Charisma", slot: "C",
      base: "Send a large projectile forward that damages (75d), pushes back, and inflicts Slow (-25% for 2s) on all enemies hit. 15s cooldown.",
      enhanced: "Projectile applies damage (50d) and inflicts a stronger Slow (-40% for 2s) when it reaches max distance. Ability also gains a second charge." }
  ],
  "Peni Parker": [
    { from: "Black Panther", name: "Vibranium Mech", slot: "C",
      base: "Activate to increase the fire rate of Cyber-Web Cluster (+50%) and summon a frontal shield (300h) for its duration (6s). 20s cooldown.",
      enhanced: "The frontal shield is now larger and has more health (400h)." },
    { from: "Rocket Raccoon", name: "Rocket Network", slot: "C",
      base: "Activate to summon an additional nest (250h) that drops Armor Packs (50bh each) every 3 seconds and spawns Spider-Drones. 25s cooldown.",
      enhanced: "The additional nest will now regenerate its health (25h/s), and Rocket Raccoon's B.R.B. is now summoned with a Cyber-Web, generating Spider-Drones and Arachno-Mines." }
  ],
  "Phoenix": [
    { from: "Hela", name: "Circle of Life", slot: "upgrades Right-Click",
      base: "Telekinesis Burst is replaced with Phoenix Netherfire which quickly blasts the same location 3 times, each time applying 1 Spark. First blast inflicts damage (15d) and Stun. Second and third blasts inflict damage (20d) and Healing Reduction (-40% for 3s). Cooldown is increased (+2s).",
      enhanced: "Each explosion now applies 2 Sparks." },
    { from: "Rogue", name: "Telekinetic Beatdown", slot: "C",
      base: "Fire a delayed hitscan shot forward, with infinite range, that sends the Phoenix Force to attack the target (40d), attacking additional targets (40d) if they are in range of the previous (8m radius, max 3 bounces). Each attack also applies 1 Spark and provides self-healing (50h). 12s cooldown.",
      enhanced: "The shockwave's detection radius is increased, max bounces is increased (+1), self-healing is increased (65h), and attacks now apply 2 Sparks." }
  ],
  "Psylocke": [
    { from: "Emma Frost", name: "Mental Projection", slot: "C",
      base: "Project an illusion (5s) forward that uses Psi-Blade Dash, while you enter Stealth. The illusion mimics your movement and attacks (at your target) for a portion of damage (30%). 20s cooldown.",
      enhanced: "Activate the ability again to swap places with the illusion." },
    { from: "Cloak & Dagger", name: "Light & Dark Darts", slot: "C",
      base: "Summon a field (6m radius) that activates your Stealth, and send out darts around you that deal damage (30d) and heal you upon impact (20h) until duration ends (5s).",
      enhanced: "The field's size is increased (8m radius) and re-entering it will send darts out again." }
  ],
  "Rocket Raccoon": [
    { from: "Squirrel Girl", name: "Mammalian Bond", slot: "C",
      base: "Throw acorns (5) that can be consumed by allies, providing healing (20h) and reducing all cooldowns (-0.5s). 2 charges. 20s cooldown.",
      enhanced: "Ability gains a third charge." },
    { from: "Groot", name: "Planet X Pals", slot: "C",
      base: "Bombard Mode is replaced for a period (8s), launching projectiles (0.2s) that deal damage (18d) and damage over time (5d/s) within the splash (5m radius), while providing healing (15h) and Bonus Health (20bh) to allies. 12s cooldown.",
      enhanced: "The ability's duration is increased (+4s). You can also ride on Groot's shoulder." }
  ],
  "Rogue": [
    { from: "Gambit", name: "Mr. & Mrs. X", slot: "C",
      base: "Activating makes every attack trigger an explosion (8m radius) that deals damage (5d+1%mh) and healing (15h) for a period (8s). 30s cooldown.",
      enhanced: "The effect no longer ends." },
    { from: "Magneto", name: "Explosive Entanglement", slot: "Passive",
      base: "Defensive Stance's damage reduction is increased (75%) and now 100% of incoming damage is converted for Southern Brawl.",
      enhanced: "Southern Brawl now Knocks enemies back, and if they hit a wall it deals extra damage (60d)." }
  ],
  "Scarlet Witch": [
    { from: "Doctor Strange", name: "Sorcerers Supreme", slot: "upgrades Right-Click",
      base: "Chthonian Burst is replaced with rapid-fire (0.12s) projectiles that deal damage (?d). This uses an energy pool (300) that recharges when using Chaos Control (15/s). Holding fire drains energy (50/s).",
      enhanced: "The energy pool is increased (450) and recharging with Chaos Control is faster (22.5/s). Holding fire also drains energy faster (56.5/s)." },
    { from: "Jubilee", name: "Hex Fireworks", slot: "upgrades E",
      base: "Dark Seal can now be activated again to detonate an explosion (6m radius) that deals damage (52d) and applies Vulnerability (+15% for 2s).",
      enhanced: "Mystic Projection now provides self-healing (42h/s)." }
  ],
  "Spider-Man": [
    { from: "Venom", name: "Symbiote Bond", slot: "C",
      base: "Activate to receive damage reduction (-90%) and send spikes out that deal damage (30d) and damage over time (10d/s) to nearby enemies (5m radius). 15s cooldown.",
      enhanced: "Damage over time is increased (+10d/s) and hit enemies are also inflicted with Slow (-50%)." },
    { from: "Peni Parker", name: "Parker Power-Up", slot: "C",
      base: "Activate to receive Bonus Health (50bh) and prime a bomb that can be thrown to deal damage (50d) and apply Spider-Tracers to hit enemies after it explodes (2s). Or hold onto the bomb to recharge all Web-Cluster shots when it explodes.",
      enhanced: "Hitting enemies who have Spider-Tracers now provides Bonus Health (40bh)." }
  ],
  "Squirrel Girl": [
    { from: "Iron Man", name: "Squirrel Missile", slot: "C",
      base: "Fire a homing missile that deals an explosion (8m radius, 80d). 15s cooldown.",
      enhanced: "Using Squirrel Blockade now also fires a homing missile." },
    { from: "Spider-Man", name: "ESU Alumnus", slot: "C",
      base: "Fire a bomb that explodes on impact, dealing damage (65d) and applying Slow (-35% for 3s) to enemies in range (4m radius). 20s cooldown.",
      enhanced: "The bomb now creates a field (4m radius) for a period (3s) that applies damage over time (25d/s) and completely stuns enemies who are in it for too long (2s)." }
  ],
  "Star-Lord": [
    { from: "Groot", name: "Flora Munitions", slot: "C",
      base: "Throw a projectile that spawns snares (5) after a moment (1s) and last for a period (4s) that each deal damage (30d) and Stun enemies (0.8s). 15s cooldown.",
      enhanced: "The amount of snares that are spawned is increased (8) and they each deal more damage (45d)." },
    { from: "Adam Warlock", name: "Star-Soul", slot: "C",
      base: "Place a beacon that you can teleport to at any point by activating the ability again. 30s cooldown. Also, respawn at the beacon automatically upon death. 120s cooldown.",
      enhanced: "Participating in a KO now reduces the ability's cooldown (-10s)." }
  ],
  "Storm": [
    { from: "Thor", name: "God of Thunder", slot: "upgrades Left-Click",
      base: "Wind Blade deals less direct damage (45d) but is now hitscan with splash damage (3m radius, 15d) and the ability to critical hit.",
      enhanced: "Bolt Rush has a faster cooldown (-2s), greater range (+20m) and can now bounce to nearby enemies (8m radius) for additional direct damage (50d)." },
    { from: "Jeff the Land Shark", name: "Jaws of Fate", slot: "C",
      base: "Activate a field (15m radius) that provides healing over time to self (35h/s) and allies (25h/s) for a period (8s). 15s cooldown.",
      enhanced: "Jeff the Land Shark can enter Omega Hurricane to increase its range (+2m radius) and duration (+2s), as well as provide healing for self (15h/s) and allies (10h/s). Enemies caught in the hurricane for enough time (2.5s) are also swallowed until the ability ends." }
  ],
  "The Punisher": [
    { from: "Daredevil", name: "Bestial Hunt", slot: "Passive",
      base: "Adjudication and Deliverance receive a damage boost (+5.2%) and their bullets now penetrate targets.",
      enhanced: "Adjudication and Deliverance now deal more damage to shields (+40%)." },
    { from: "Rocket Raccoon", name: "Ammo Overload", slot: "C",
      base: "Summon a field (5m radius) that provides a faster fire rate for Adjudication (+35%) and Deliverance (+40%). 25s cooldown.",
      enhanced: "The field now grants infinite ammo for Adjudication and Deliverance." }
  ],
  "The Thing": [
    { from: "Human Torch", name: "Two In One", slot: "C",
      base: "Activate an enhanced state (10s) where Rocky Jab now deals splash damage (6m radius) and Stone Haymaker deals long-range damage (9.5m) in a cone. 15s cooldown.",
      enhanced: "The Thing can be picked up by Human Torch and carried at high speed (12m/s). Being dropped deals splash damage (45d) and applies Stun (1s) to nearby enemies (8m radius), and automatically activates The Thing's enhanced state. 30s cooldown." },
    { from: "Invisible Woman", name: "Unbreakable Forces", slot: "C",
      base: "Activate to gain Bonus Health (75bh/s, max 150h) for a period (5s). Being at low health (<50%) increases the rate of Bonus Health accumulation (150h/s). A portion of damage from incoming hits returns to you as Bonus Health (15bh). 20s cooldown.",
      enhanced: "When ability is active, taking enough damage (150d) sends a pulse (8m radius) of healing (80h) for allies. A higher portion of damage from incoming hits returns to you as Bonus Health (20bh)." }
  ],
  "Thor": [
    { from: "Hela", name: "Ragnarok Rebirth", slot: "Passive",
      base: "Temporarily revive with damage reduction (-40%), a decaying pool of Bonus Health (600bh), and total Anti-Heal upon death, fully resurrecting with some health (300h) upon participation of a KO. 50s cooldown. 30s cooldown on failed resurrection.",
      enhanced: "Resurrection now happens if Hela participates in a KO. Resurrection also now comes with some healing over time (50h/s for 3s)." },
    { from: "Angela", name: "Divine Armory", slot: "C",
      base: "Throw a spear that deals splash damage (5m radius, 30d) and restores Thorforce when hitting an enemy. Activate again to leap to the spear, dealing another instance of splash damage (5m radius, 45d). 20s cooldown.",
      enhanced: "Leaping to the spear now grants Bonus Health (100bh)." }
  ],
  "Ultron": [
    { from: "Iron Man", name: "Stark Protocol", slot: "C",
      base: "Upgrade Encephalo-Ray to deal piercing damage (70d/s) and healing (70h/s), without needing to reload, until the period ends (8s).",
      enhanced: "Imperative: Firewall now also fires homing missiles (4) at enemies in range, each dealing splash damage (1.5m radius, 10d)." },
    { from: "Peni Parker", name: "SP//dr Sync", slot: "C",
      base: "Activate to apply Imperative: Patch drones to all allies on the map briefly (3s).",
      enhanced: "Imperative: Firewall is now applied to all active Imperative: Patch drones." }
  ],
  "Venom": [
    { from: "Blade", name: "Blood Leech", slot: "upgrades Right-Click",
      base: "Cellular Corrosion now also deals damage over time (20d/s) with all of this damage returning to you as health. A portion of Cellular Corrosion's explosion damage (50%) also heals you.",
      enhanced: "Using other abilities also grants one-time healing (40h)." },
    { from: "Phoenix", name: "Abyssal Flames", slot: "C",
      base: "Activate to replace Dark Predation with a sweeping frontal melee attack (10m range, 55d) for a period (8s). 12s cooldown.",
      enhanced: "Attacking during activation now applies Sparks on enemies which detonate (3m radius, 20d) upon reaching 3 stacks." }
  ],
  "White Fox": [
    { from: "Black Cat", name: "Lucky Loan", slot: "C",
      base: "Activating recovers 1 Spirit Tail and summons an aura that heals (15h/s) and Speed Boost (+20% for 2s) for allies and deals damage over time (10d/s) and Slow (-20% for 2s) to enemies for its duration (5s). 25s cooldown.",
      enhanced: "During activation, Spirit Tails aren't consumed by uses of Spectral Surge and Fox Form. Duration is also increased (6s)." },
    { from: "Psylocke", name: "Psionic Fox", slot: "Passive",
      base: "Fox Form Awakening is always at its maximum duration (10s) and becomes a traditional cooldown (15s) that no longer requires Spirit Tails.",
      enhanced: "The cooldown for Fox Form Awakening is reduced (12s)." }
  ],
  "Winter Soldier": [
    { from: "The Punisher", name: "Timeless Veterans", slot: "C",
      base: "Fire electricity forward (15.25m) that deals damage (85d) and Knocks enemies back. 12s cooldown.",
      enhanced: "The attack Knocks enemies back further and now Grounds them." },
    { from: "Elsa Bloodstone", name: "Expert Instinct", slot: "Passive",
      base: "Dealing enough damage (500d), or participating in a KO, will grant 1 stack of Culling Instinct (max 2). Each stack reduces the cooldowns of other abilities (-1.5s). 1 stack is lost on death.",
      enhanced: "Bonus health granted by uses of Ceaseless Charge is also increased (70bh)." }
  ],
  "Wolverine": [
    { from: "Cyclops", name: "Blast Slash", slot: "C",
      base: "Activate to increase range (+1m) of Savage Claw and Berserk Claw Strike for a period (8s). Vicious Rampage now deals a lunge that releases melee damage (5d+0.01%mh per Rage) in all directions for a period (1s). 20s cooldown.",
      enhanced: "Blast Slash is always active." },
    { from: "Gambit", name: "Pair of Threes", slot: "C",
      base: "Activate to gain a Speed Boost (+35%) and bonus jump height for a period (5s). Attacking enemies during the period also deals an additional instance of damage (15%) after a moment (0.5s). 12s cooldown.",
      enhanced: "Also receive healing over time (25h/s) during the ability." }
  ]
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

// Rectangle multi-select: heroes currently selected by holding right-click
// and dragging a box over the board. Non-persisted UI state — cleared
// whenever the board's contents get wholesale replaced (reset, undo/redo,
// board switch, full loop theory, comp-only view).
const multiSelected = new Set();

function applyMultiSelectionStyles() {
  state.nodes.forEach((node, hero) => {
    node.el.classList.toggle("multi-selected", multiSelected.has(hero));
  });
}

function clearMultiSelection() {
  if (!multiSelected.size) return;
  multiSelected.clear();
  applyMultiSelectionStyles();
}

// Right-click one of the selected icons to remove the whole group at once
// (used by the per-node contextmenu handler when a multi-selection exists).
function removeMultiSelection() {
  const heroes = [...multiSelected];
  multiSelected.clear();
  heroes.forEach(hero => detachBranch(hero));
  renderLinks();
  updateStats();
  commit();
}

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
  clearMultiSelection();
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

let compOnlyViewOn = false;
let compOnlyViewSnapshot = null;

function updateCompOnlyViewButton() {
  const btn = document.querySelector("#compOnlyView");
  if (!btn) return;
  btn.classList.toggle("active", compOnlyViewOn);
  btn.textContent = compOnlyViewOn ? "Hide comp-only view" : "Comp-only view";
}

// Toggle: clear the board down to just the team comp's own icons plus the
// links between them that actually exist — a stripped board you can still
// drag/remove things on, not a static picture. Click again restores the
// exact board you had before. Deliberately never touches pan/zoom either
// way (no autoFit/resetView) per explicit request.
function toggleCompOnlyView() {
  if (compOnlyViewOn) {
    restoreState(compOnlyViewSnapshot);
    compOnlyViewOn = false;
    compOnlyViewSnapshot = null;
    commit();
    updateCompOnlyViewButton();
    return;
  }

  const filled = state.comp.filter(Boolean);
  if (!filled.length) {
    window.alert("Add heroes to your team comp first.");
    return;
  }

  compOnlyViewSnapshot = snapshotState();
  state.nodes.forEach(n => n.el.remove());
  state.nodes.clear();
  state.links.clear();
  state.hiddenLinks.clear();
  state.selected = null;
  clearMultiSelection();
  loopState.clear();
  routeState.clear();
  bulkState.clear();
  emptyState.style.display = "none";
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";

  // Lay the comp members out around wherever the view already happens to
  // be centered — not resetting or auto-fitting the view.
  const center = boardCenter();
  const radius = Math.max(320, filled.length * 90);
  filled.forEach((hero, i) => {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / filled.length;
    addNode(hero, center.x + Math.cos(angle) * radius, center.y + Math.sin(angle) * radius);
  });
  filled.forEach(a => {
    (relationships[a] || []).forEach(b => {
      if (filled.includes(b)) addLink(a, b, "outgoing");
    });
  });

  compOnlyViewOn = true;
  renderLinks();
  updateStats();
  commit();
  updateCompOnlyViewButton();
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
  clearMultiSelection();
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
  clearMultiSelection();
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
        // Left-click only opens this hero's info in the detail panel on the
        // right — it never places anything on the board. Dragging the icon
        // (see dragstart above) is the only way to add a sidebar hero to
        // the board.
        clearMultiSelection();
        selectHero(hero);
        renderLinks();
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
    // A plain click always collapses back to normal single-select — a
    // rectangle multi-selection only survives a drag-move on one of its
    // members (handled in startDrag) or a right-click removal.
    clearMultiSelection();
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
    if (multiSelected.size > 1 && multiSelected.has(hero)) {
      removeMultiSelection();
    } else {
      removeBranch(hero);
    }
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

  // Team-Up ability details: for an incoming row the selected hero receives
  // from `hero`; for an outgoing row `hero` receives from the selected hero.
  const receiver = type === "incoming" ? state.selected : hero;
  const provider = type === "incoming" ? hero : state.selected;
  const info = (teamupInfo[receiver] || []).find(t => t.from === provider);
  if (!info) return row;

  const wrap = document.createElement("div");
  wrap.className = "panel-row-wrap";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "panel-info-btn";
  toggle.textContent = "i";
  toggle.title = `${info.name} — show Base / Enhanced details`;

  const slotText = info.slot === "C" || info.slot === "F"
    ? `new ability (${info.slot})`
    : info.slot;
  const detail = document.createElement("div");
  detail.className = "teamup-detail hidden";
  detail.innerHTML = `
    <div class="teamup-name">${info.name}${slotText ? ` <span class="teamup-slot">${slotText}</span>` : ""}</div>
    <p class="teamup-line"><span class="teamup-tag base" title="No Team-Up partner required on the team — just select the ability in the hero menu">Base</span> ${info.base}</p>
    <p class="teamup-line"><span class="teamup-tag enhanced" title="Requires ${provider} on your team, plus the ability selected">Enhanced</span> ${info.enhanced}</p>
  `;
  toggle.addEventListener("click", () => {
    const nowHidden = detail.classList.toggle("hidden");
    toggle.classList.toggle("active", !nowHidden);
  });

  wrap.append(row, toggle, detail);
  return wrap;
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

  // Required credit for the Team-Up descriptions behind each row's ⓘ —
  // requested by the guide's author, keep it visible wherever they render.
  const credit = document.createElement("p");
  credit.className = "panel-credit";
  credit.innerHTML = `Team-Up details from <a href="${TEAMUP_GUIDE_URL}" target="_blank" rel="noopener">Kane Carter's S9 Team-Ups guide</a> (u/-popgoes&nbsp;·&nbsp;@kanethecarter). Info, stats, and images taken from Marvel Rivals and the <a href="https://www.marvelrivals.com/heroes" target="_blank" rel="noopener">Marvel Rivals website</a>.`;
  detailPanel.append(credit);
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
    path.classList.toggle("multi-selected", multiSelected.has(link.source) && multiSelected.has(link.target));
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
  // Right button is reserved for rectangle multi-select / removal — never
  // for dragging a node.
  if (event.button === 2) return;
  const el = event.currentTarget;
  const hero = el.dataset.hero;
  const node = state.nodes.get(hero);
  if (!node) return;
  el.setPointerCapture(event.pointerId);
  const startX = event.clientX;
  const startY = event.clientY;

  // If this hero is part of an active rectangle multi-selection, drag the
  // whole group together, preserving everyone's relative offsets.
  const group = multiSelected.size > 1 && multiSelected.has(hero)
    ? [...multiSelected].map(h => state.nodes.get(h)).filter(Boolean)
    : [node];
  const origins = group.map(n => ({ node: n, x: n.x, y: n.y }));

  function move(moveEvent) {
    const dx = moveEvent.clientX - startX;
    const dy = moveEvent.clientY - startY;
    if (Math.abs(dx) + Math.abs(dy) > 3) el.dataset.dragged = "true";
    origins.forEach(({ node: n, x, y }) => {
      n.x = x + dx / view.scale;
      n.y = y + dy / view.scale;
      positionNode(n);
    });
    renderLinks();
  }

  function up(upEvent) {
    el.releasePointerCapture(event.pointerId);
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", up);
    el.removeEventListener("pointercancel", up);
    if (el.dataset.dragged !== "true") return;
    // Dropping onto a comp slot only makes sense for a single hero.
    const slotIndex = group.length === 1 ? compSlotAt(upEvent.clientX, upEvent.clientY) : -1;
    if (slotIndex !== -1) {
      origins.forEach(({ node: n, x, y }) => { n.x = x; n.y = y; positionNode(n); });
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
  clearMultiSelection();
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
document.querySelector("#compOnlyView").addEventListener("click", toggleCompOnlyView);

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

const creditsPanel = document.querySelector("#creditsPanel");
document.querySelector("#toggleCredits").addEventListener("click", () => creditsPanel.classList.toggle("hidden"));
document.querySelector("#closeCredits").addEventListener("click", () => creditsPanel.classList.add("hidden"));

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
  // detailPanel overlaps boardWrap on the right side — let wheel events
  // that land on it scroll the panel's own content instead of zooming
  // the board underneath.
  if (event.target.closest("#detailPanel")) return;
  event.preventDefault();
  const rect = boardRect();
  const factor = event.deltaY < 0 ? 1.15 : 1 / 1.15;
  zoomAt(event.clientX - rect.left, event.clientY - rect.top, factor);
}, { passive: false });

// A plain click (no drag) on empty board space deselects the current hero —
// otherwise a leftover selection could cause a later comp-slot click to
// unexpectedly "replace" that slot's occupant.
function deselectHero() {
  clearMultiSelection();
  if (!state.selected) return;
  state.selected = null;
  document.querySelectorAll(".node.selected").forEach(node => node.classList.remove("selected"));
  detailPanel.classList.add("hidden");
  detailPanel.innerHTML = "";
  focusTitle.textContent = "Empty board";
  focusCopy.textContent = "Pick a hero from the left. The board will show its Team-Up partners and who it enhances.";
  renderLinks();
}

// Hold right-click and drag over empty board space to draw a selection
// rectangle: every hero whose icon center falls inside it gets added to
// `multiSelected`. Afterward, dragging any one of the selected icons with
// the left button moves the whole group together (see startDrag), and
// right-clicking any one of them removes the whole group (see the node
// contextmenu handler in addNode / removeMultiSelection).
function startRectSelect(event) {
  event.preventDefault();
  boardWrap.setPointerCapture(event.pointerId);
  const rect = boardRect();
  const startX = event.clientX - rect.left;
  const startY = event.clientY - rect.top;
  const box = document.createElement("div");
  box.className = "rect-select-box";
  boardWrap.append(box);
  let dragged = false;

  const paintBox = (curX, curY) => {
    box.style.left = `${Math.min(startX, curX)}px`;
    box.style.top = `${Math.min(startY, curY)}px`;
    box.style.width = `${Math.abs(curX - startX)}px`;
    box.style.height = `${Math.abs(curY - startY)}px`;
  };

  const move = moveEvent => {
    const curX = moveEvent.clientX - rect.left;
    const curY = moveEvent.clientY - rect.top;
    if (Math.abs(curX - startX) + Math.abs(curY - startY) > 4) dragged = true;
    paintBox(curX, curY);
  };

  const up = upEvent => {
    boardWrap.releasePointerCapture(event.pointerId);
    boardWrap.removeEventListener("pointermove", move);
    boardWrap.removeEventListener("pointerup", up);
    boardWrap.removeEventListener("pointercancel", up);
    box.remove();
    if (!dragged) {
      // A plain right-click on empty space just clears any selection.
      clearMultiSelection();
      return;
    }
    const curX = upEvent.clientX - rect.left;
    const curY = upEvent.clientY - rect.top;
    const left = Math.min(startX, curX);
    const top = Math.min(startY, curY);
    const right = Math.max(startX, curX);
    const bottom = Math.max(startY, curY);
    // Screen rect -> world rect through the current pan/zoom transform.
    const worldLeft = (left - view.x) / view.scale;
    const worldTop = (top - view.y) / view.scale;
    const worldRight = (right - view.x) / view.scale;
    const worldBottom = (bottom - view.y) / view.scale;
    multiSelected.clear();
    state.nodes.forEach((node, hero) => {
      if (node.x >= worldLeft && node.x <= worldRight && node.y >= worldTop && node.y <= worldBottom) {
        multiSelected.add(hero);
      }
    });
    applyMultiSelectionStyles();
    renderLinks();
  };

  boardWrap.addEventListener("pointermove", move);
  boardWrap.addEventListener("pointerup", up);
  boardWrap.addEventListener("pointercancel", up);
}

// Right-click on empty board space is reserved for rectangle-select — never
// let it also open the browser's native context menu.
boardWrap.addEventListener("contextmenu", event => {
  if (event.target === boardWrap || event.target === board) event.preventDefault();
});

boardWrap.addEventListener("pointerdown", event => {
  if (event.target !== boardWrap && event.target !== board) return;
  if (event.button === 2) {
    startRectSelect(event);
    return;
  }
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
  clearMultiSelection();
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

// Comp-only view and Full loop theory are temporary overlays: they stash
// the real board in a snapshot variable, replace the working board with a
// stripped/rearranged view, and restore that snapshot when toggled back
// off. If a board-switching action runs while one is still open, it has
// no idea that stashed snapshot exists — `persistActiveBoard()` would save
// the STRIPPED view as the board's real data (erasing the actual layout),
// and the snapshot (pointing at whatever board was active when the overlay
// opened) would later get restored into a DIFFERENT board via the
// overlay's own toggle-off, once that board also happens to have the
// overlay open — the "comps leak between boards" bug. Every board-level
// action below reverts any open overlay back to the real board FIRST.
function revertTransientViews() {
  if (compOnlyViewOn) {
    restoreState(compOnlyViewSnapshot);
    compOnlyViewOn = false;
    compOnlyViewSnapshot = null;
    updateCompOnlyViewButton();
  }
  if (fullLoopTheoryOn) {
    restoreState(fullLoopTheorySnapshot);
    fullLoopTheoryOn = false;
    fullLoopTheorySnapshot = null;
    updateFullLoopButton();
    loopTheoryPanel.classList.add("hidden");
  }
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
  revertTransientViews();
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
  revertTransientViews();
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

// Deliberately does NOT call revertTransientViews() — Save captures
// whatever is literally on the board right now, including a Comp-only
// view, a Full loop theory layout, or a highlighted route. Only automatic/
// implicit transitions (switching boards, creating, deleting) revert an
// open overlay first, to avoid silently corrupting a DIFFERENT board's
// data — an explicit Save is the user asking to keep exactly what they see.
function saveCurrentBoard(triggerButton) {
  persistActiveBoard();
  flashButton(triggerButton, "Saved!");
}

// Toolbar Quick save/Quick load: board layout + links ONLY. Never touches
// the team comp, and never moves/resets the view — a plain reload of the
// current pan/zoom with the saved layout dropped back in. Quick save also
// captures whatever is currently on the board as-is (see saveCurrentBoard).
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
  revertTransientViews();
  restoreBoardOnly(saved);
  commit();
  flashButton(triggerButton, "Loaded!");
}

// Renames the active board: moves its saved data (and quick-save, if any)
// to new localStorage keys and updates the boards index — doesn't touch
// the board's actual content at all.
function renameCurrentBoard() {
  const newName = (window.prompt("New name for this board:", activeBoardName) || "").trim();
  if (!newName || newName === activeBoardName) return;
  if (boardsIndex.includes(newName)) {
    window.alert(`A board named "${newName}" already exists.`);
    return;
  }
  const oldName = activeBoardName;
  const oldData = localStorage.getItem(boardDataKey(oldName));
  const oldQuickSave = localStorage.getItem(quickSaveKey(oldName));
  if (oldData !== null) localStorage.setItem(boardDataKey(newName), oldData);
  if (oldQuickSave !== null) localStorage.setItem(quickSaveKey(newName), oldQuickSave);
  localStorage.removeItem(boardDataKey(oldName));
  localStorage.removeItem(quickSaveKey(oldName));
  boardsIndex = boardsIndex.map(name => (name === oldName ? newName : name));
  localStorage.setItem(BOARDS_INDEX_KEY, JSON.stringify(boardsIndex));
  activeBoardName = newName;
  localStorage.setItem(ACTIVE_BOARD_KEY, activeBoardName);
  renderBoardSelect();
}

function deleteCurrentBoard() {
  if (boardsIndex.length <= 1) {
    window.alert("Can't delete the only board.");
    return;
  }
  if (!window.confirm(`Delete board "${activeBoardName}"? This can't be undone.`)) return;
  revertTransientViews();
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
document.querySelector("#renameBoard").addEventListener("click", renameCurrentBoard);
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
