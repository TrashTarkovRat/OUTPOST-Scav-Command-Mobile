// ===== STATIC GAME DATA =====

const FIRST_NAMES = ["Korin","Tessa","Brakka","Doyle","Ines","Marsh","Quill","Vesna","Otto","Bram","Una","Hale","Priya","Loke","Marrow","Sable","Vex","Juno","Crane","Wren","Astrid","Bex","Cael","Delphi","Esme","Farro","Gideon","Harlow","Isolde","Jace","Kestrel","Liora","Moss","Nessa","Orin","Piper","Quade","Roan","Sten","Talen"];
const LAST_NAMES = ["Vance","Holt","Greaves","Okafor","Sten","Rourke","Bishop","Nakamura","Foss","Brandt","Sloane","Ivers","Quade","Marsh","Calloway","Ashford","Briggs","Corvin","Drummond","Esparza","Fenwick","Gallow","Hatcher","Iverson","Lockhart","Marrow"];

const GEAR_CATALOG = {
  weapon: [
    { id: "fists", name: "Bare Hands", tier: 0, combat: 0, cost: null,
      desc: "Whatever you can throw, whatever you can swing — last resort gear for scavs who haven't found anything better yet." },
    { id: "pipe", name: "Pipe Wrench", tier: 1, combat: 6, cost: { scrap: 15 },
      desc: "Heavy, rusted, and dependable. Half the camp's plumbing went into making more of these than the other half." },
    { id: "machete", name: "Machete", tier: 2, combat: 14, cost: { scrap: 40, gold: 5 },
      desc: "Keeps an edge longer than it has any right to. Good for clearing brush, better for everything else out there." },
    { id: "pistol", name: "Sidearm", tier: 3, combat: 24, cost: { scrap: 80, gold: 20 },
      desc: "Quiet enough to draw, loud enough to regret firing indoors. Ammo's the real cost — the gun's just the start." },
    { id: "rifle", name: "Battle Rifle", tier: 4, combat: 38, cost: { scrap: 160, gold: 60 },
      desc: "The kind of gun that ends an argument before it starts. Heavy, hungry for parts, and worth every bit of trouble to keep running." },
    { id: "rebar", name: "Sharpened Rebar", tier: 1, combat: 3, improvised: true, craftCost: { scrap: 12 }, minWorkshopLevel: 0,
      desc: "A length of construction rebar ground down to a point at the Workshop. Crude, but it's free and it's always there when you need it." },
    // --- side-grades, added v2.30: same tier, similar power, different flavor ---
    { id: "hatchet", name: "Camp Hatchet", tier: 1, combat: 7, cost: { scrap: 16 },
      desc: "Half tool, half weapon, same as it ever was. Splits kindling in the morning, skulls in the evening." },
    { id: "crowbar", name: "Bent Crowbar", tier: 1, combat: 5, cost: { scrap: 13 },
      desc: "Pries open doors, crates, and ribs with equal indifference. Every scav's first real upgrade from nothing." },
    { id: "cleaver", name: "Butcher's Cleaver", tier: 2, combat: 13, cost: { scrap: 38, gold: 6 },
      desc: "Wide, heavy, and built to go through things in one stroke. The kitchen it came from didn't make it." },
    { id: "spear", name: "Rebar Spear", tier: 2, combat: 15, cost: { scrap: 44, gold: 4 },
      desc: "Reach over edge. Keeps whatever's coming at arm's length a little longer than a blade would." },
    { id: "revolver", name: "Six-Shot Revolver", tier: 3, combat: 22, cost: { scrap: 70, gold: 24 },
      desc: "Slow to reload, never jams. The kind of gun a scav trusts precisely because there's nothing clever about it." },
    { id: "smg", name: "Stamped SMG", tier: 3, combat: 26, cost: { scrap: 90, gold: 16 },
      desc: "Welded together from a parts kit that probably wasn't meant to leave the factory floor. Loud, hungry, effective." },
    { id: "compound_bow", name: "Compound Bow", tier: 3, combat: 23, cost: { scrap: 75, gold: 22 },
      desc: "Silent where a gun would draw every eye in the block. Whoever strung this knew exactly what they were avoiding." },
    { id: "shotgun", name: "Sawed-Off Shotgun", tier: 4, combat: 36, cost: { scrap: 150, gold: 70 },
      desc: "Useless past ten feet and unforgettable inside it. Most scavs who carry one never get a second chance to need it twice." },
    { id: "carbine", name: "Marksman Carbine", tier: 4, combat: 40, cost: { scrap: 170, gold: 55 },
      desc: "Scoped, suppressed, and zeroed by someone who knew what they were doing. Trades the Battle Rifle's weight for reach." },
    { id: "shiv", name: "Scrap Shiv", tier: 1, combat: 4, improvised: true, craftCost: { scrap: 10 }, minWorkshopLevel: 0,
      desc: "A sharpened strip of sheet metal wrapped in tape at the Workshop. Not much of a weapon, but it's better than a fist." },
  ],
  armor: [
    { id: "rags", name: "Ragged Coat", tier: 0, defense: 0, cost: null,
      desc: "More habit than protection at this point. Keeps the wind off, mostly." },
    { id: "padded", name: "Padded Vest", tier: 1, defense: 5, cost: { scrap: 15 },
      desc: "Layers of scavenged padding stitched into something wearable. Stops a glancing hit from being a real one." },
    { id: "leather", name: "Leather Plate", tier: 2, defense: 12, cost: { scrap: 40, gold: 5 },
      desc: "Stiff, hot, and genuinely useful — old work gear repurposed for a world that got a lot less forgiving." },
    { id: "kevlar", name: "Kevlar Rig", tier: 3, defense: 22, cost: { scrap: 80, gold: 20 },
      desc: "Pre-collapse police surplus, if the patches are anything to go by. Doesn't stop everything, but it stops enough." },
    { id: "ceramic", name: "Ceramic Plate", tier: 4, defense: 34, cost: { scrap: 160, gold: 60 },
      desc: "Military-grade plate carriers, the real article. Whoever had these first didn't need them anymore by the time a scav found them." },
    { id: "cardboard", name: "Taped Cardboard Plate", tier: 1, defense: 2, improvised: true, craftCost: { scrap: 14 }, minWorkshopLevel: 1,
      desc: "Layered cardboard and packing tape, built at the Workshop. It is exactly as good as it sounds, and exactly as good as nothing." },
    // --- side-grades, added v2.30: same tier, similar power, different flavor ---
    { id: "denim_layer", name: "Layered Denim Jacket", tier: 1, defense: 4, cost: { scrap: 12 },
      desc: "Three jackets sewn into one. Won't stop a blade, but it'll take the worst of a fall or a scrape without complaint." },
    { id: "tire_plate", name: "Tire-Rubber Plating", tier: 1, defense: 6, cost: { scrap: 18 },
      desc: "Cut from truck tires and lashed over the chest. Heavy, ugly, and absorbs a hit better than it has any right to." },
    { id: "riot_vest", name: "Riot Vest", tier: 2, defense: 11, cost: { scrap: 36, gold: 6 },
      desc: "Stripped off whatever was left of the precinct's gear locker. Built for crowds, repurposed for everything else." },
    { id: "chainmail", name: "Hand-Linked Chainmail", tier: 2, defense: 13, cost: { scrap: 46, gold: 4 },
      desc: "Thousands of wire loops, linked by hand over a long winter. Slower to make than to wear, and it shows." },
    { id: "trauma_plate", name: "Trauma Plate Carrier", tier: 3, defense: 20, cost: { scrap: 75, gold: 18 },
      desc: "A single hard plate over the chest, soft padding everywhere else. Lighter than full Kevlar, almost as good where it matters." },
    { id: "scale_armor", name: "Scrap-Scale Cuirass", tier: 3, defense: 24, cost: { scrap: 85, gold: 22 },
      desc: "Hundreds of can-lids overlapped like fish scales and riveted to a leather backing. Slow to make, slower to get through." },
    { id: "blast_suit", name: "Patched Blast Suit", tier: 3, defense: 21, cost: { scrap: 78, gold: 20 },
      desc: "Bomb-disposal gear from a department that doesn't exist anymore. Stiff to move in, but it stops more than it should." },
    { id: "exo_frame", name: "Composite Exo-Frame", tier: 4, defense: 32, cost: { scrap: 150, gold: 55 },
      desc: "A lightweight rigid frame under soft armor, spreading the impact before it ever reaches skin. Faster than the plate, nearly as tough." },
    { id: "siege_plate", name: "Siege Plate", tier: 4, defense: 37, cost: { scrap: 170, gold: 65 },
      desc: "Overbuilt even by Ceramic Plate standards — slower to move in, but whoever's wearing it walks away from things that drop other scavs." },
    { id: "duct_armor", name: "Duct-Taped Bumper Guard", tier: 1, defense: 3, improvised: true, craftCost: { scrap: 16 }, minWorkshopLevel: 1,
      desc: "A car bumper cut down and strapped to the torso at the Workshop. Heavier than the cardboard plate, and it actually stops something." },
  ],
  pack: [
    { id: "satchel", name: "Worn Satchel", tier: 0, lootBonus: 0, cost: null,
      desc: "Just enough room for the basics. Most scavs outgrow it on their first real haul." },
    { id: "ruck", name: "Field Ruck", tier: 1, lootBonus: 0.15, cost: { scrap: 20 },
      desc: "A proper hiking frame, patched and re-patched. Carries more than it looks like it should." },
    { id: "frame", name: "Frame Pack", tier: 2, lootBonus: 0.35, cost: { scrap: 50, gold: 10 },
      desc: "An external frame takes the weight off your back and puts it where it belongs — on your hips, and in the haul." },
    { id: "cargo", name: "Cargo Rig", tier: 3, lootBonus: 0.6, cost: { scrap: 100, gold: 30 },
      desc: "Built for hauling, not for comfort. Whatever you find, this is built to bring it all home." },
    { id: "tote", name: "Patched Tote Bag", tier: 1, lootBonus: 0.05, improvised: true, craftCost: { scrap: 18 }, minWorkshopLevel: 2,
      desc: "Reinforced at the Workshop with whatever scrap was lying around. Not much, but it's better than carrying things in your arms." },
    // --- side-grades, added v2.30: same tier, similar power, different flavor ---
    { id: "duffel", name: "Canvas Duffel", tier: 1, lootBonus: 0.12, cost: { scrap: 18 },
      desc: "Slung over one shoulder, not built for distance. Holds a surprising amount for something this beat-up." },
    { id: "milk_crate_pack", name: "Strapped Milk Crate", tier: 1, lootBonus: 0.18, cost: { scrap: 22 },
      desc: "Bungee-corded to a backpack frame because somebody decided crates hold more than bags. They weren't wrong." },
    { id: "courier_bag", name: "Courier Messenger Bag", tier: 2, lootBonus: 0.3, cost: { scrap: 46, gold: 8 },
      desc: "Built for someone who needed to move fast with a full load. Doesn't hold as much as a frame pack, but it never slows you down." },
    { id: "hiking_pack", name: "Expedition Hiking Pack", tier: 2, lootBonus: 0.4, cost: { scrap: 55, gold: 12 },
      desc: "Meant for a trip nobody's taking anymore. Every strap and pocket still does exactly what it was designed to." },
    { id: "utility_harness", name: "Utility Harness", tier: 3, lootBonus: 0.5, cost: { scrap: 90, gold: 25 },
      desc: "Less a bag than a frame of pouches and clips. Slower to fill, but nothing in it ever shifts or rattles." },
    { id: "salvage_sled", name: "Drag Sled", tier: 3, lootBonus: 0.7, cost: { scrap: 110, gold: 28 },
      desc: "Hauled behind instead of worn — trades speed for sheer capacity. Useless down stairs, unbeatable everywhere else." },
    { id: "molle_rig", name: "MOLLE Carry Rig", tier: 3, lootBonus: 0.55, cost: { scrap: 95, gold: 27 },
      desc: "Modular pouches clipped to a webbing vest, pre-collapse military surplus. Adaptable, sturdy, and never quite full." },
    { id: "hauler_pack", name: "Hauler's Pack", tier: 4, lootBonus: 0.65, cost: { scrap: 160, gold: 50 },
      desc: "A working rig built for scavs who measure a good day in pounds carried, not close calls survived." },
    { id: "armored_rig", name: "Armored Cargo Rig", tier: 4, lootBonus: 0.72, cost: { scrap: 175, gold: 65 },
      desc: "The Cargo Rig's bigger, meaner cousin — reinforced seams and a steel frame so a full haul never tears it apart." },
    { id: "feed_sack", name: "Lined Feed Sack", tier: 1, lootBonus: 0.08, improvised: true, craftCost: { scrap: 14 }, minWorkshopLevel: 2,
      desc: "A burlap feed sack stitched with a fabric liner at the Workshop. Not pretty, not roomy, but it's another set of hands' worth of carrying." },
  ],
};

// ===== PATCH NOTES =====
// Add a new entry to the TOP of this array each time you ship an update.
// version: short label shown in the header (e.g. "1.3")
// date: whatever format you like, shown next to the version
// notes: array of plain strings, rendered as bullet points
const PATCH_NOTES = [
  {
    version: "2.37",
    date: "Latest",
    notes: [
      "Time now actually pauses while the game is closed. Raids, healing, resting, the day/night cycle, and daily upkeep all used to keep running on real-world time even with the tab shut, so reopening the game would \"catch up\" however long you'd been away. Not anymore — close it mid-raid and that raid is in exactly the same spot when you come back, however long that takes.",
      "Added Prestige — a New Game+ button in the Scout Tower (build it first), for 2000 gold. Starting a new run resets the camp completely — every building, every resource, the rest of the roster — but lets you carry forward exactly one chosen scav (kept exactly as they are: level, skills, gear, all of it) and up to 2 chosen items from the stash. Boss and dungeon uniques aren't eligible to carry over — regular tier 1-4 gear only.",
      "Each prestige stacks: every site's risk climbs 15% and loot climbs 20%, compounding with every run before it — NG+2 is harder and richer than NG+1, which was harder and richer than the base game. The Arena scales too: the flat win chance drops a little each prestige (never below 6%), while the reward range climbs the same as everywhere else.",
      "Prestiging is permanent the moment it's confirmed — there's a \"click again to confirm\" safety catch in the menu, same as wiping a save, since there's no undoing it once it runs.",
    ],
  },
  {
    version: "2.36",
    date: "",
    notes: [
      "Added the Arena — a third tab on the raid select screen, next to Region and Dungeons. One scav, one fixed 240-second tournament fight at The Scrapyard Pit, no mid-fight events and no boss — just a flat 18% chance to win.",
      "Nothing about the arena can actually hurt anyone. No survival roll, no injury, no radiation, no morale hit — the scav who steps in always walks back out, win or lose. Winning the tournament pays out 30-70 gold plus a tier-appropriate piece of gear; losing just means no payout that trip.",
      "The Arena tab keeps its own simple flow — pick a fighter, see the flat win chance and reward range stated plainly, send them in. No survival-odds math to read into, since there isn't any.",
    ],
  },
  {
    version: "2.35",
    date: "",
    notes: [
      "Recruiting a new scav now costs food instead of scrap (gold stays as the secondary cost) — feeding a new mouth at camp rather than paying them in parts. Rescaled to fit food's much smaller economy rather than just swapping the unit on the old scrap number, so an empty roster's first recruit runs about 6 food + 2 gold instead of the old scrap price.",
      "Every option in a mid-raid event or boss encounter popup now shows the survival chance picking it would leave you at, not just the flavor text — so \"Fight head-on\" vs \"Fight cautiously\" vs breaking off all show a real number instead of asking you to guess how much riskier one is than the others. Reflects everything already locked in earlier that same raid (an earlier event's effect, if one already fired), so the number always matches what actually happens at the end, not just the option in isolation.",
    ],
  },
  {
    version: "2.34",
    date: "",
    notes: [
      "Added Dungeons — 3 new end-game locations, each locked behind its own named key: The Vault, Site Halcyon, and The Drydock, in roughly that order of difficulty. Find them on a new \"Dungeons\" tab at the top of the raid screen, right next to the regular region map.",
      "Dungeons are mandatory full-group raids — exactly 3 scavs, no more, no fewer — and sit far above every regular site's difficulty, even the Drowned Quarter. The reward matches: noticeably better loot tables than anywhere else, and a guaranteed boss fight every single run (on top of the usual chance of a regular hazard or hostile encounter along the way, not instead of it).",
      "Each dungeon's key is consumed the moment the group actually launches — win, lose, or flee the boss, the key is spent either way. There are two ways to get one: a small chance off that dungeon's own boss kill, or a very rare listing at the Flea Market (steep, gold-only, and uncommon enough that it's a stroke of luck more than a strategy).",
      "Each dungeon boss drops its own tier-6 unique on a kill — one notch above every regular boss unique in the game — and has its own named fight with sharper, scarier trade-offs than the standard fight/flee choice.",
      "Dungeon keys show up in their own section at the top of the Stash, above even unique gear, so it's always clear at a glance what's sitting in reserve.",
    ],
  },
  {
    version: "2.33",
    date: "",
    notes: [
      "Food can now turn up as raid loot at two sites: Greenfield Farmstead (2-6 per successful raid — it's a farm, after all) and Flooded Suburb (1-4, raided pantries and kitchens). No other site has added it; everywhere else, the Farm is still the only source.",
      "The Flea Market now occasionally trades in food too — buy it with scrap or gold, or sell surplus food for either, alongside the existing scrap/gold/meds bundles. Same daily refresh, same odds of showing up as any other bundle offer.",
    ],
  },
  {
    version: "2.32",
    date: "",
    notes: [
      "Added Food — a new resource — and a seventh camp building, the Farm. Build it to start growing food every in-game day; higher levels grow more (+4 food/day per level, up to +20/day at max level).",
      "The camp now has a daily upkeep: 3 food and 3 gold, charged automatically once per in-game day regardless of whether a Farm has been built. A Farm is how you cover it, not a requirement for owing it.",
      "If a day's upkeep can't be fully paid, the whole roster goes hungry — every living scav loses a flat chunk of HP and morale. Resources never go negative paying it, though: whatever's short just stays unpaid and the roster takes the hit instead of the camp going into debt.",
      "Stepping away for a few days and coming back charges upkeep for each day actually missed (capped at 14 days' worth, so a very old save doesn't replay months of it at once) rather than treating a long absence as a single free pass.",
      "Food shows up next to scrap/gold/meds on the Warehouse's hover tooltip, and the Farm itself sits in the camp scene as a tilled plot that fills in with more wheat at higher levels.",
    ],
  },
  {
    version: "2.31",
    date: "",
    notes: [
      "The day/night cycle now actually affects raids, not just the camp scene's lighting. A raid launched at night locks that in for its whole trip: +20% loot, and any mid-raid event that fires is noticeably more likely to be a hostile encounter (Looters, Feral Packs, Raider Patrols, and the like) rather than an environmental hazard. Daytime raids are unaffected — this only ever makes night riskier and more rewarding, never day worse.",
      "Whether a raid launched at night is shown wherever that raid shows up: a small ☾ next to its entry on the radio log and in raid history, a banner on the field report explaining the bonus, and a heads-up on the raid prep screen (with the loot range and odds already adjusted) before you commit — so the numbers you see before sending someone out always match what actually happens.",
      "Whether it's currently night is the exact same window the camp scene already uses for its lighting — nothing new to learn, no separate clock to track.",
    ],
  },
  {
    version: "2.30",
    date: "",
    notes: [
      "Added 30 new gear side-grades — 10 weapon, 10 armor, 10 pack — slotted in alongside the existing tier 1-4 lineup rather than above it. Same general power level as what's already there, different flavor and fluff cost, so there's a real choice within a tier instead of one obvious best pick. A few round out the Workshop's improvised tier too: a Scrap Shiv, a Duct-Taped Bumper Guard, and a Lined Feed Sack.",
      "Every weapon, armor, and pack in the game now has its own unique icon instead of sharing one generic icon per slot — that's 47 in total. Shows up on the Character screen, the Workshop's recipe list, and the Codex's Items tab.",
      "Fixed raid loot finds always handing back the same item when multiple pieces of gear shared a tier — finds now pick randomly among everything reachable at the best tier the Armory allows, so side-grades actually turn up out in the field instead of only being buyable or craftable.",
    ],
  },
  {
    version: "2.29",
    date: "",
    notes: [
      "Added Radiation — a new per-scav stat that eats into max HP without touching the level-based max underneath it. Picked up as a chance on any successful raid, much higher at Blackpine Refinery and The Drowned Quarter. Treated at the Infirmary alongside (or instead of) a regular injury — one trip covers whatever's wrong.",
      "Added Morale — drops a little on every raid, worse on riskier sites, and pulls down loot yield the lower it gets (down to -30% at zero). Rested off for free at the Barracks, no meds involved, just time.",
      "The Character screen now shows Radiation and Morale bars alongside HP, and the Roster shows a quick flag on anyone carrying either.",
    ],
  },
  {
    version: "2.28",
    date: "",
    notes: [
      "Fixed a bug where opening Infirmary, Barracks, Workshop, or the Flea Market from inside that building's popup left the popup stuck open underneath — it could end up blocking clicks on the screen you just opened, including its own Back button. Opening any of those now properly closes the popup first.",
      "Added five common hostile encounters that can turn up mid-raid: Looters and Feral Packs on virtually any site, Raider Patrols and Armed Crews on riskier ones, and Irradiated Stalkers on only the most dangerous. Each comes with its own fight-or-avoid choice, same as the existing hazard events.",
      "Added an Enemies tab to the Codex listing all five, with where they show up and a short description.",
    ],
  },
  {
    version: "2.27",
    date: "",
    notes: [
      "Widened the whole layout to use more of the screen on bigger monitors — the page no longer caps out at 1400px, and the left-side panels grew along with it.",
      "Added a sixth camp building: the Radio Tower. Build it to unlock the Flea Market, where randomly-named sellers post a handful of one-line offers — pay in resources, or barter away gear you already own for something better. Offers refresh once every in-game day.",
      "Higher Radio Tower levels add more offers per day (3 at level 1, up to 5 at max level).",
      "The market lives behind the same building popup every other structure uses — click the tower, build it, then Open Flea Market from there.",
    ],
  },
  {
    version: "2.26",
    date: "",
    notes: [
      "Reworked survivor sprites again — less blocky, more human. Tapered shoulders and waist instead of one flat rectangle, a rounder head with a proper chin, and arms that angle in at the cuff instead of hanging as straight bars.",
      "Added a couple of worn, scavenged details — a mismatched shoulder patch and an uneven hem — to keep them looking like survivors, not a clean uniform.",
      "Walk cycle, hover labels, and click-to-loadout all carry over unchanged — this was purely a shape pass on the existing art.",
    ],
  },
  {
    version: "2.25",
    date: "",
    notes: [
      "Added a day/night cycle to the camp scene — one full day takes 20 real minutes and runs continuously off the clock, so it keeps advancing whether the game is open or not. A badge in the corner of the scene shows the current day and time.",
      "Sky, stars, and ground lighting now shift smoothly through night, dawn, overcast day, and dusk instead of staying fixed on one permanent night look. Right now this is visual only — raids, loot, and odds are unaffected by time of day.",
      "Cut the cost of recruiting a new scav by about 30%, scaling the same way it always did as the roster grows.",
    ],
  },
  {
    version: "2.24",
    date: "",
    notes: [
      "Reworked the camp scene's art — survivors and every building are bigger and noticeably more detailed (proper roofs, plank-line walls, foundations, a bunkhouse with real windows) instead of the old flat-color silhouettes.",
      "The walk cycle, hover labels, and click targets all carry over unchanged — this was purely a visual pass.",
    ],
  },
  {
    version: "2.23",
    date: "",
    notes: [
      "Every camp building (Infirmary, Armory, Scout Tower, Barracks, Workshop) is visible by the fire now even before it's built, shown dimmed with a NOT BUILT tag instead of being invisible until the first level is bought.",
      "Clicking any building opens a popup with its description, current effect, and a Build/Upgrade button — Infirmary, Barracks, and Workshop also get a direct Open button into their own screen from there.",
      "Added the Warehouse, a new prop by the fire — hover it to see current scrap, gold, and meds without opening anything.",
      "Removed the standalone Camp screen entirely now that every building manages itself. Recruiting a new scav moved into the Barracks popup, since Barracks already governs roster size.",
    ],
  },
  {
    version: "2.22",
    date: "",
    notes: [
      "The Stash is a compact popup now, opened by clicking a chest that sits by the campfire instead of a header button — same shape as the Raid Log popup rather than a full-screen takeover.",
      "On narrow screens where the camp scene (and the chest) is hidden, a Stash button reappears in the header so it's never out of reach.",
    ],
  },
  {
    version: "2.21",
    date: "",
    notes: [
      "Beating a boss in a fight (not running from it) now has a small chance to drop a unique piece of gear named after that boss — eleven of them, one per boss, each better than anything craftable or found on a normal raid.",
      "Unique drops show up in the Stash, the equip menu, and the Codex with their own gold-accented styling so they stand out from regular finds.",
    ],
  },
  {
    version: "2.20",
    date: "",
    notes: [
      "Camp screen is wider now and the upgrade cards lay out in a grid, so there's a lot less empty space on bigger windows.",
      "Reworked the solo raid select screen into a Tarkov-style map — one big region view with a dot for every site instead of a row of thumbnails. Click a dot to open a popup on the right with that site's info, scav picker, and launch button; the map stays visible behind it the whole time.",
    ],
  },
  {
    version: "2.19",
    date: "",
    notes: [
      "Renamed three maps: Rail Depot is now Train Yard, Flood Suburb is now Flooded Suburb, and Strip Mall Lot is now just Strip Mall.",
      "Reworked the skill tree from a flat list into an actual web — three branches radiate out from a central hub, with a detail panel showing whichever skill you click on. First pass; more polish to come.",
    ],
  },
  {
    version: "2.18",
    date: "",
    notes: [
      "Raid Log is now a compact popup like the Settings menu, instead of taking over the whole screen — the button stays right where it was.",
      "Added the Codex — a reference notebook next to Settings covering every boss, every site, every weapon and piece of armor, and every camp building, each with its own description.",
    ],
  },
  {
    version: "2.17",
    date: "",
    notes: [
      "Fixed a bug where picking a map on the raid screen would snap the map strip's scroll position back to the start every time.",
      "Sending a scav to the Infirmary now costs meds, scaled to how hurt they are — a scav who's barely injured costs next to nothing, a scav at death's door costs the full price. The Send In button shows the cost up front and disables itself if the camp can't afford it.",
      "Relabeled the Infirmary's upgrade effect from \"injury severity\" to \"Recovery Speed\" — that's what the building actually does. Injury severity reduction now lives entirely with the Iron Will skill, where it always mechanically belonged.",
    ],
  },
  {
    version: "2.16",
    date: "",
    notes: [
      "Added one new map per difficulty tier: Riverside Marina (low), Greenfield Farmstead (medium), Underline Metro (high), and The Drowned Quarter — a new top-end extreme site, more dangerous than even Blackpine Refinery.",
      "Each comes with its own art, loot table, and named boss: The Harbormaster, Old Man Thresher, Conductor, and The Tide.",
      "11 maps total now, all gated by the same per-scav level rules as before.",
    ],
  },
  {
    version: "2.15",
    date: "",
    notes: [
      "The camp buildings get the same treatment as survivors now — hover one to see its level, click it to jump straight to the right screen (Infirmary, Barracks, and Workshop open their own screen; Armory and Scout Tower open Camp, where their upgrade cards live).",
      "Fixed an invisible click-blocking issue where the survivor layer was silently swallowing clicks meant for buildings standing behind it.",
    ],
  },
  {
    version: "2.14",
    date: "",
    notes: [
      "Hovering a survivor by the campfire now shows their current HP right above their name, color-coded the same way the roster's HP bars are.",
      "Clicking a survivor opens their Character Screen directly — a quick way to check on or gear up whoever catches your eye around the fire.",
    ],
  },
  {
    version: "2.13",
    date: "",
    notes: [
      "Map unlocking is per scav now, not camp-wide — one veteran reaching a high level no longer opens up dangerous sites for your whole roster. Each scav (or, for a group, the weakest member of the group) has to individually earn access to a site.",
      "Launching a raid now keeps you on the map select screen instead of dropping you back to camp, so queuing up the next raid is one click instead of three.",
    ],
  },
  {
    version: "2.12",
    date: "",
    notes: [
      "Added boss encounters — a rare (roughly 3%) chance for a named threat to show up partway through a raid, one per map: Kingpin at Strip Mall Lot, Rivet at Rail Depot, Jack \"The Watchman\" Cole at Flood Suburb, Pavel \"Bonesaw\" Orlov at St. Aldric's Hospital, The Verdict at 16th Precinct, The Overlook at Vantage Tower, and The Furnace at Blackpine Refinery.",
      "A boss fight gives a real choice — fight head-on for the biggest haul and the worst odds, fight cautiously for a safer but smaller win, or break off and run with whatever's already been found.",
      "Bosses are the one thing that happens on a raid that rolls one — no regular mid-raid event competes with it for the same trip.",
      "Field reports call out a boss fight with its own banner, and the raid log remembers which named threats you've faced.",
    ],
  },
  {
    version: "2.11",
    date: "",
    notes: [
      "Added skill trees — but per scav, not one shared tree for the whole camp. Every scav builds out their own Combat, Survival, and Scavenging branches independently, with their own pool of points.",
      "Open it from a scav's Character Screen via the new Skills button. One point earned per level gained, spent permanently on whichever scav you're looking at.",
      "Combat: more combat power, better survival odds, and a capstone that cuts injury chance. Survival: more max HP, less injury severity, and faster Infirmary stays. Scavenging: more loot, and a capstone that kicks back a little scrap and gold whenever that scav makes it home.",
      "Unspent points show up as a badge right on the roster card and the Skills button, so it's easy to spot who's got points waiting.",
    ],
  },
  {
    version: "2.10",
    date: "",
    notes: [
      "Camp buildings are bigger now and line up in a single skyline row right behind the campfire, instead of being tucked off to the sides.",
      "Survivors actually walk around the camp now instead of just standing in place — they wander off to a new spot every so often, with a proper walk animation and legs that move, then settle in and idle for a while before moving again.",
      "Survivors turn to face whichever direction they're walking, and steer clear of the fire itself while wandering.",
    ],
  },
  {
    version: "2.9",
    date: "",
    notes: [
      "The campfire scene now fills the full height of the screen instead of a fixed box, matching the left column.",
      "Camp buildings now appear in the scene as you build them — a medic tent for the Infirmary, supply crates for the Armory, a watchtower for Scout Tower, a bunkhouse for Barracks, and a tool shed for the Workshop.",
      "Buildings pick up small visual details as their upgrade levels climb — extra windows, more crates, a lit lamp — and never crowd the survivors gathered around the fire.",
    ],
  },
  {
    version: "2.8",
    date: "",
    notes: [
      "Added a campfire scene to the open space beside the menus — one idling pixel survivor for every living scav in the roster, gathered around the fire at night.",
      "Survivors come and go as the roster changes: recruiting adds someone to the circle, losing a scav removes them, without disturbing anyone else already sitting there.",
      "Hover a survivor to see their name.",
    ],
  },
  {
    version: "2.7",
    date: "",
    notes: [
      "Fixed a bug where the Raid Log button would silently do nothing for save files with raid history from before the group-raids update.",
      "Roster and Camp are now their own buttons in the left column, opening full screens the same way Send a Raid does, instead of cramming everything into a fixed-width panel.",
      "The full Roster screen lays scavs out in a grid instead of one cramped column, and the full Camp screen gives Recruit and Base Upgrades a lot more room to breathe.",
    ],
  },
  {
    version: "2.6",
    date: "",
    notes: [
      "Reworked the camp screen layout — Roster, Send a Raid, and Camp now stack in a single column on the left, leaving the rest of the screen open.",
      "Stash and Raid Log are now their own buttons next to Settings, opening as full screens instead of tabs buried in the Camp panel.",
      "Removed the Scrap/Gold/Meds readout from the header since the same numbers already live in the Camp panel — the roster count moved to the Roster panel's own header instead.",
    ],
  },
  {
    version: "2.5",
    date: "",
    notes: [
      "Reworked the Workshop into a real crafting station — open it from the Base Upgrades panel to craft improvised gear straight from scrap.",
      "Three new improvised items: Sharpened Rebar, a Taped Cardboard Plate, and a Patched Tote Bag — each weaker than what you'd find on a raid, but never dependent on luck.",
      "Each recipe unlocks at a different Workshop level, giving the upgrade a reason to keep climbing beyond the raid-speed bonus.",
      "Crafted gear goes straight into the shared stash, one copy at a time, same as a raid find — nothing here is unlimited.",
      "Improvised gear shows up right alongside found gear in a scav's loadout, clearly tagged so it's never confused for the real thing.",
    ],
  },
  {
    version: "2.4",
    date: "",
    notes: [
      "Added mid-raid events — while a raid's in progress, something can come up that needs a call from camp: an ambush, a hidden cache, a distress call, and more.",
      "Each event gives 2-3 options with a real trade-off — push for more loot and risk it, play it safe and lose some time, or cut the raid short and bring home less.",
      "The radio log flags any raid awaiting orders, and a popup can also catch you straight away if you're not already looking at something else.",
      "Riskier maps have a wider pool of events to draw from, including a few nastier ones that only show up once things get dangerous enough.",
      "Field reports now mention what happened and the call that was made, so the story of a raid actually reflects the choices behind it.",
    ],
  },
  {
    version: "2.3",
    date: "",
    notes: [
      "Added group raids — open the Barracks from the Base Upgrades panel to form a raid party of up to 3 ready scavs and send them out together.",
      "Bigger groups mean better odds: each extra member adds a flat survival bonus and a loot bonus for the whole group, on top of their own gear.",
      "Each scav in a group still rolls their own survival individually, so a raid can come back with everyone fine, a mix of hits, or — if luck runs out — nobody at all.",
      "Field reports, the radio log, and the raid log now all handle multi-scav raids, with a per-scav breakdown when the group doesn't come back clean.",
    ],
  },
  {
    version: "2.2",
    date: "",
    notes: [
      "Reworked the Infirmary into a real heal-over-time system — open it from the Base Upgrades panel and assign any injured, ready scav to a bed.",
      "Heal time scales with how much HP they're missing, and drops at higher Infirmary levels.",
      "Healing scavs are locked out of raids and camp defense until they're done, same as being out on a raid — and can be recalled early if you need them back sooner, though that skips the heal.",
    ],
  },
  {
    version: "2.1",
    date: "",
    notes: [
      "Added camp defense events — a small chance after any successful raid that something follows a scav back to camp.",
      "Pick which available scavs join the defense — more defenders means better odds, but they're locked out of raids until it's resolved.",
      "If the defense fails, every participating scav drops to 1 HP and the camp loses some scrap, meds, and gold — though never more than you actually have in stock.",
      "While a threat is pending, raids are blocked until you respond — there's a clear prompt in the Send a Raid panel so it's never easy to lose track of.",
    ],
  },
  {
    version: "2.0",
    date: "",
    notes: [
      "Added a Raid Log tab next to Camp and Stash — shows your last 5 raids with scav, map, outcome, and what was found, lost, or earned.",
    ],
  },
  {
    version: "1.9",
    date: "",
    notes: [
      "Added an opening video splash screen before the camp loads — click, press any key, or just let it play through to skip ahead.",
    ],
  },
  {
    version: "1.8",
    date: "",
    notes: [
      "Added 20 new first names and 11 new last names to the scav name pool — more variety in the roster, fewer repeats over a long playthrough.",
    ],
  },
  {
    version: "1.7",
    date: "",
    notes: [
      "Removed gear crafting entirely — gear is now found-only, picked up as a rare drop on successful raids.",
      "Added a Stash tab next to Camp, showing every piece of gear your camp has in storage and how many of each.",
      "Gear is now a real limited resource: each find adds exactly one copy to the stash, and equipping it on a scav uses that copy up. Switching a scav back to basic gear returns their old item to the stash for someone else to use.",
      "Armory's upgrade now raises the tier of gear your scavs can find on raids, instead of unlocking crafting.",
    ],
  },
  {
    version: "1.6",
    date: "",
    notes: [
      "Increased font sizes across the whole game for easier reading — text should feel a bit more comfortable everywhere from the roster to the raid screen.",
    ],
  },
  {
    version: "1.5",
    date: "",
    notes: [
      "Scavs now have a small chance to find a piece of gear on a successful raid — odds scale with map danger, from about 2% on Strip Mall Lot up to 14% on Blackpine Refinery.",
      "Found gear unlocks for the whole camp immediately, same as crafting it — any scav can equip it afterward.",
      "Added a dedicated Loadout screen — click \"Loadout\" on any scav in the Roster, or \"Manage Loadout\" from the raid screen, to assign weapon/armor/pack and see live Combat/Defense/Loot Bonus stats.",
      "The raid select screen now shows a scav's current loadout as a quick summary instead of a picker — gear management lives in one place now.",
    ],
  },
  {
    version: "1.4",
    date: "",
    notes: [
      "All raid durations increased by 60 seconds across every map, low risk through extreme.",
      "Added a Patch Notes tab right here in Settings, so updates are easy to track.",
    ],
  },
  {
    version: "1.3",
    date: "",
    notes: [
      "Reset Progress button added to Settings — wipes your save and starts a brand new camp. Two-click confirm so it can't be triggered by accident.",
      "Fixed a bug where finishing a raid didn't always refresh the roster and \"scavs ready\" counter right away.",
    ],
  },
  {
    version: "1.2",
    date: "",
    notes: [
      "Send a Raid is now a full-screen map select screen, in the style of Escape from Tarkov's raid launcher — a scrollable strip of illustrated map cards, a large preview panel, scav and loadout picking, and live odds before you launch.",
      "Every map got its own hand-illustrated card art reflecting its danger level, from the calm Strip Mall Lot to the flame-lit Blackpine Refinery.",
    ],
  },
  {
    version: "1.1",
    date: "",
    notes: [
      "Added an in-game Settings menu (gear icon, top-right) with fullscreen toggle and selectable window resolutions (1280×800 / 1600×900 / 1920×1080).",
      "Added an Exit Game button to Settings, for closing the app cleanly while in fullscreen. Two-click confirm to prevent accidental quits.",
      "New custom watchtower app icon, replacing the placeholder.",
    ],
  },
  {
    version: "1.0",
    date: "",
    notes: [
      "First build of OUTPOST. Send scavs out on raids, manage risk vs. reward across 7 locations, upgrade your camp, and watch raids resolve through a narrated field report.",
      "Packaged as a real Windows desktop app via Electron, with save data stored locally so progress persists between sessions.",
    ],
  },
];

const MAPS = [
  {
    id: "lot",
    name: "Strip Mall",
    risk: "low",
    riskMult: 1.0,
    desc: "Picked-over storefronts. Mostly empty, mostly safe.",
    duration: 78, // seconds
    lootTable: { scrap: [4, 10], gold: [0, 2], meds: [0, 1] },
    minLevel: 1,
  },
  {
    id: "marina",
    name: "Riverside Marina",
    risk: "low",
    riskMult: 1.15,
    desc: "A couple of boats still afloat and a row of bait shacks. Quiet, if the docks hold your weight.",
    duration: 80,
    lootTable: { scrap: [5, 12], gold: [1, 2], meds: [0, 2] },
    minLevel: 1,
  },
  {
    id: "depot",
    name: "Train Yard",
    risk: "low",
    riskMult: 1.3,
    desc: "Old freight containers. Locks keep most scavs out — but not all of them.",
    duration: 85,
    lootTable: { scrap: [8, 16], gold: [1, 3], meds: [0, 1] },
    minLevel: 1,
  },
  {
    id: "farmstead",
    name: "Greenfield Farmstead",
    risk: "med",
    riskMult: 2.0,
    desc: "A barn and a silo full of scrap metal and tools. The grass out front is taller than it should be.",
    duration: 98,
    lootTable: { scrap: [12, 26], gold: [1, 4], meds: [1, 3], food: [2, 6] },
    minLevel: 2,
  },
  {
    id: "suburb",
    name: "Flooded Suburb",
    risk: "med",
    riskMult: 1.8,
    desc: "Waterlogged houses. Slower going, better cabinets.",
    duration: 95,
    lootTable: { scrap: [10, 22], gold: [2, 5], meds: [1, 2], food: [1, 4] },
    minLevel: 2,
  },
  {
    id: "hospital",
    name: "St. Aldric's Hospital",
    risk: "med",
    riskMult: 2.2,
    desc: "Meds galore, if you don't mind what's wandering the wards.",
    duration: 100,
    lootTable: { scrap: [8, 16], gold: [2, 4], meds: [3, 6] },
    minLevel: 2,
  },
  {
    id: "precinct",
    name: "16th Precinct",
    risk: "high",
    riskMult: 2.8,
    desc: "Armory in the basement. Whoever's holding it now isn't sharing.",
    duration: 110,
    lootTable: { scrap: [14, 28], gold: [4, 9], meds: [1, 3] },
    minLevel: 3,
  },
  {
    id: "metro",
    name: "Underline Metro",
    risk: "high",
    riskMult: 3.0,
    desc: "Collapsed subway tunnels, one stalled train, and no clean way to tell what's coming until it's close.",
    duration: 115,
    lootTable: { scrap: [15, 30], gold: [5, 10], meds: [1, 2] },
    minLevel: 3,
  },
  {
    id: "tower",
    name: "Vantage Tower",
    risk: "high",
    riskMult: 3.2,
    desc: "Forty floors of corner offices. Good loot near the top — long way down if it goes wrong.",
    duration: 120,
    lootTable: { scrap: [16, 32], gold: [6, 12], meds: [1, 3] },
    minLevel: 4,
  },
  {
    id: "refinery",
    name: "Blackpine Refinery",
    risk: "extreme",
    riskMult: 4.0,
    desc: "Nobody's come back from here twice. The fuel's worth it to someone.",
    duration: 135,
    lootTable: { scrap: [24, 44], gold: [10, 20], meds: [2, 4] },
    minLevel: 5,
    radioactive: true, // elevated radiation exposure chance — see RADIATION_CHANCE_BASE
  },
  {
    id: "drowned",
    name: "The Drowned Quarter",
    risk: "extreme",
    riskMult: 4.5,
    desc: "What used to be downtown, now half underwater and worse than the refinery on a bad day. The whole district agrees on that much.",
    duration: 145,
    lootTable: { scrap: [28, 50], gold: [12, 24], meds: [2, 5] },
    minLevel: 5,
    radioactive: true,
  },
];

// ===== DUNGEONS (key-locked end-game raids) =====
// Three sealed sites, each gated behind its own named key rather than a
// level or Armory check — DUNGEON_KEYS below. Mechanically they're just
// entries in MAPS with `dungeon: true` and `requiresKey` set, so the
// entire existing raid pipeline (resolveRaid, rollLoot, rollGearFind,
// checkRaidEvents) handles them with no special casing there — the
// special casing lives entirely in launchRaid (key consumption + the
// mandatory 3-scav group + a guaranteed boss on top of the normal event
// roll) and in the UI layer that gates access on owning a key at all.
// riskMult sits well above every regular site (4.5 was the old ceiling)
// — even with a full 3-scav group's survival bonus and the best gear in
// the game, these are meant to be genuinely dangerous, not just a longer
// version of the Drowned Quarter.
const DUNGEONS = [
  {
    id: "vault",
    name: "The Vault",
    risk: "dungeon",
    riskMult: 6.0,
    desc: "A pre-collapse bank vault, sealed since the day everything stopped mattering. Whatever's keeping the lights on in there isn't on a schedule anyone can predict.",
    duration: 170,
    lootTable: { scrap: [36, 64], gold: [22, 40], meds: [3, 6], food: [4, 9] },
    minLevel: 6,
    dungeon: true,
    requiresKey: "vault_key",
  },
  {
    id: "halcyon",
    name: "Site Halcyon",
    risk: "dungeon",
    riskMult: 6.8,
    desc: "A black-site bunker, abandoned mid-experiment. The doors still cycle on their own schedule, and something down there still answers to a name nobody on the surface ever learned.",
    duration: 185,
    lootTable: { scrap: [42, 72], gold: [26, 46], meds: [4, 8], food: [3, 7] },
    minLevel: 7,
    dungeon: true,
    requiresKey: "halcyon_key",
    radioactive: true,
  },
  {
    id: "drydock",
    name: "The Drydock",
    risk: "dungeon",
    riskMult: 7.5,
    desc: "A naval hulk run aground decades before the collapse, half-swallowed by the tideline ever since. Worse than the Drowned Quarter on its worst day, and everyone who's been both agrees on that much.",
    duration: 200,
    lootTable: { scrap: [48, 84], gold: [30, 52], meds: [4, 9], food: [4, 8] },
    minLevel: 8,
    dungeon: true,
    requiresKey: "drydock_key",
    radioactive: true,
  },
];

// Folded into MAPS itself (not just kept in their own DUNGEONS list) so
// every existing piece of the raid pipeline that looks a map up by id —
// resolveRaid, checkRaidEvents' eligibility, the field report, the Codex's
// Locations tab, radiation/injury/loot-find math — handles a dungeon raid
// automatically with zero special-casing there. DUNGEONS itself stays
// around separately so the dungeon-select UI can iterate just these 3
// without filtering the full MAPS list by `dungeon` every render.
MAPS.push(...DUNGEONS);

// ===== ARENA (fixed-length tournament fight) =====
// A third kind of site alongside the regular region map and the
// dungeons: one scav, one fixed-length fight, no mid-raid events, no
// boss, and a flat win/lose tournament roll instead of the usual
// survival formula — see resolveArenaRaid for the dedicated resolution
// path and ARENA_WIN_CHANCE/ARENA_GOLD_MIN/ARENA_GOLD_MAX for the actual
// numbers. riskMult here only feeds XP-on-completion (same formula every
// other map uses) and the Codex's risk badge — it has nothing to do with
// the fight's actual odds, since there's no survival roll to scale.
const ARENAS = [
  {
    id: "arena",
    name: "The Scrapyard Pit",
    risk: "med",
    riskMult: 2.5,
    desc: "A ring of stacked car husks and floodlights rigged off a generator. Whoever runs the book here takes a cut either way — the only question is which side of the bet you end up on.",
    duration: 240,
    lootTable: {}, // unused — see resolveArenaRaid, which builds its own gold/gear reward directly rather than rolling against a table
    minLevel: 1,
    arena: true,
    noEvents: true,
  },
];

// Folded into MAPS for the same reason DUNGEONS is — every existing
// raid-by-id lookup (resolveRaid's dispatch, checkRaidCompletions, the
// field report, raid history, the Codex) just works without needing to
// know there's a third category of site at all. ARENAS stays around
// separately so the Arena tab can iterate just this one without
// filtering MAPS by `arena` every render.
MAPS.push(...ARENAS);

// `let`, not `const` — applyNgPlusScaling() below adjusts these per
// prestige level. Declared here (ahead of the NG+ snapshot immediately
// below, which reads their starting values) rather than down with the
// rest of the arena mechanics, so nothing tries to read them before
// they're initialized.
let ARENA_WIN_CHANCE = 0.18;
let ARENA_GOLD_MIN = 30;
let ARENA_GOLD_MAX = 70;

// ===== NEW GAME+ SCALING =====
// Snapshotted once, right here, before any prestige has ever had a
// chance to run — these are the permanent "as designed" values every
// later scaling pass computes from, so re-prestiging (NG+2, NG+3...)
// always derives fresh from the original numbers rather than compounding
// on top of an already-scaled value from the previous prestige. Without
// this snapshot, applyNgPlusScaling would have no stable baseline to
// scale from on a second or third run.
const NG_PLUS_BASE_RISK_MULT = {};
const NG_PLUS_BASE_LOOT_TABLE = {};
for (const map of MAPS) {
  NG_PLUS_BASE_RISK_MULT[map.id] = map.riskMult;
  NG_PLUS_BASE_LOOT_TABLE[map.id] = { ...map.lootTable };
}
const NG_PLUS_BASE_ARENA_WIN_CHANCE = ARENA_WIN_CHANCE;
const NG_PLUS_BASE_ARENA_GOLD_MIN = ARENA_GOLD_MIN;
const NG_PLUS_BASE_ARENA_GOLD_MAX = ARENA_GOLD_MAX;

const NG_PLUS_RISK_PER_LEVEL = 0.15; // +15% riskMult per prestige level — see resolveRaid/calcOdds for how far that goes
const NG_PLUS_LOOT_PER_LEVEL = 0.2; // +20% loot table ranges per prestige level
const NG_PLUS_ARENA_WIN_PENALTY_PER_LEVEL = 0.02; // arena's flat win chance drops a little each level — it's still risk-free, just less likely to pay off
const NG_PLUS_ARENA_WIN_CHANCE_FLOOR = 0.06; // never below this, however many prestiges deep — "harder" shouldn't mean "functionally impossible"

// Recomputes every map's riskMult and lootTable, plus the arena's win
// chance and reward range, from the permanent base snapshot above and
// the current STATE.ngPlusLevel. Called once on load (covers a save that
// already has a prestige level) and once right after a prestige
// completes (see startNewGamePlus) — everywhere else in the game just
// reads map.riskMult/map.lootTable/ARENA_WIN_CHANCE etc. as plain values
// with zero awareness that NG+ exists, the same way the night-raid and
// dungeon systems both lean on scaling a small number of source values
// rather than threading a multiplier through every formula that
// ultimately depends on them.
function applyNgPlusScaling() {
  const level = STATE.ngPlusLevel || 0;
  const riskMult = 1 + NG_PLUS_RISK_PER_LEVEL * level;
  const lootMult = 1 + NG_PLUS_LOOT_PER_LEVEL * level;
  for (const map of MAPS) {
    map.riskMult = NG_PLUS_BASE_RISK_MULT[map.id] * riskMult;
    const baseLoot = NG_PLUS_BASE_LOOT_TABLE[map.id];
    const scaledLoot = {};
    for (const [res, range] of Object.entries(baseLoot)) {
      scaledLoot[res] = [Math.round(range[0] * lootMult), Math.round(range[1] * lootMult)];
    }
    map.lootTable = scaledLoot;
  }
  ARENA_WIN_CHANCE = Math.max(
    NG_PLUS_ARENA_WIN_CHANCE_FLOOR,
    NG_PLUS_BASE_ARENA_WIN_CHANCE - NG_PLUS_ARENA_WIN_PENALTY_PER_LEVEL * level
  );
  ARENA_GOLD_MIN = Math.round(NG_PLUS_BASE_ARENA_GOLD_MIN * lootMult);
  ARENA_GOLD_MAX = Math.round(NG_PLUS_BASE_ARENA_GOLD_MAX * lootMult);
}

// ===== PRESTIGE (NEW GAME+) =====
// Costs gold, resets everything else about the camp, and carries forward
// exactly one chosen scav (kept exactly as they are — level, skills, XP,
// gear, all of it) plus up to 2 chosen items from the stash. Repeatable —
// each run stacks the difficulty/reward scaling further (see
// applyNgPlusScaling above).
const NG_PLUS_COST = { gold: 2000 };
const NG_PLUS_MAX_CARRY_ITEMS = 2;

// What's actually eligible to carry over as one of the 2 items: ordinary
// tier 1-4 gear only. Tier-0 basics are excluded because every fresh game
// already starts with them for free — there's nothing to "carry" there —
// and unique boss/dungeon drops (tier 5-6) are excluded by design (see
// the prestige menu's own copy explaining why): letting a single
// prestige hand a brand new camp a top-tier unique would skip past most
// of what NG+ is supposed to still be for.
function getEligibleCarryOverItems() {
  const stash = getStash();
  const eligible = [];
  for (const slot of ["weapon", "armor", "pack"]) {
    for (const item of GEAR_CATALOG[slot]) {
      if (item.tier <= 0 || item.unique || item.improvised) continue;
      const count = stash[slot][item.id] || 0;
      if (count > 0) eligible.push({ slot, id: item.id, item, count });
    }
  }
  return eligible;
}

// Executes the actual prestige: spends the cost, snapshots the chosen
// scav and item picks, then rebuilds STATE from scratch via freshState's
// carryOver parameter — same reset mechanics wipeProgress() uses, just
// seeded with what's being kept instead of starting completely empty.
// Returns { ok: true } on success, or { ok: false, reason } if anything
// about the picks was invalid — checked again here rather than trusting
// the UI already validated it, the same defensive pattern launchRaid
// uses for its own preconditions.
function startNewGamePlus(scavId, itemPicks) {
  if (!canAfford(NG_PLUS_COST)) return { ok: false, reason: "Not enough gold." };

  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status === "dead") return { ok: false, reason: "Pick a living scav to carry forward." };

  const requestedPicks = itemPicks || [];
  if (requestedPicks.length > NG_PLUS_MAX_CARRY_ITEMS) return { ok: false, reason: `Only ${NG_PLUS_MAX_CARRY_ITEMS} items can come with you.` };
  const picks = requestedPicks;
  const eligible = getEligibleCarryOverItems();
  for (const itemPick of picks) {
    const match = eligible.find((e) => e.slot === itemPick.slot && e.id === itemPick.id);
    if (!match) return { ok: false, reason: "One of the picked items isn't eligible to carry over." };
  }

  spend(NG_PLUS_COST);

  const carryOver = {
    scav: { ...scav, status: "ready" }, // always arrives ready, regardless of what they were doing the moment prestige was confirmed
    items: picks.map((p) => ({ slot: p.slot, id: p.id })),
    ngPlusLevel: (STATE.ngPlusLevel || 0) + 1,
  };

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Could not clear save before prestige:", e);
  }
  STATE = freshState(carryOver);
  applyNgPlusScaling();
  selectedScavId = null;
  selectedMapId = null;
  selectedDungeonId = null;
  dungeonGroup = [];
  arenaScavId = null;
  raidScreenOpen = false;
  saveState();
  return { ok: true, ngPlusLevel: carryOver.ngPlusLevel };
}

// One named key per dungeon — the only way into that specific site.
// Owning a key doesn't get spent just by looking at the dungeon; it's
// consumed at launch (see launchRaid) the moment a raid actually goes
// out, so a failed or aborted attempt still costs the key the same as a
// successful one. Keys live in their own STATE.dungeonKeys bucket, not
// the gear stash — they're not equippable, just a consumable unlock.
const DUNGEON_KEYS = {
  vault_key: { id: "vault_key", name: "Vault Key", dungeonId: "vault",
    desc: "Heavy, cut steel, etched with a number that doesn't match any door left standing. Whoever had this knew exactly what it opened." },
  halcyon_key: { id: "halcyon_key", name: "Halcyon Keycard", dungeonId: "halcyon",
    desc: "A keycard with most of its print worn off — the magnetic strip's still good, somehow, on a door that shouldn't still have power." },
  drydock_key: { id: "drydock_key", name: "Drydock Key", dungeonId: "drydock",
    desc: "Corroded almost solid, salt-fused at the teeth. Somebody kept this dry for a long time, on purpose, for exactly this." },
};

function getDungeonKeyDef(keyId) {
  return DUNGEON_KEYS[keyId] || null;
}

function dungeonKeyCount(keyId) {
  if (!STATE.dungeonKeys) return 0;
  return STATE.dungeonKeys[keyId] || 0;
}

function addDungeonKey(keyId, amount = 1) {
  if (!STATE.dungeonKeys) STATE.dungeonKeys = {};
  STATE.dungeonKeys[keyId] = (STATE.dungeonKeys[keyId] || 0) + amount;
}

// Spends one key. Returns false (no state change) if there isn't one to
// spend — callers should always check dungeonKeyCount first, but this
// stays safe to call regardless.
function removeDungeonKey(keyId, amount = 1) {
  const have = dungeonKeyCount(keyId);
  if (have < amount) return false;
  STATE.dungeonKeys[keyId] = have - amount;
  return true;
}

// ===== BOSSES (rare mid-raid encounters) =====
// Every map has exactly one named boss who can show up on a raid there.
// Bosses are deliberately separate from the regular RAID_EVENTS pool —
// rarer, higher stakes, and always framed as a fight rather than an
// ordinary decision. Whether a given raid has a boss waiting is decided
// once at launch (rollBossEncounter), not re-rolled every tick the way
// regular events are, so "roughly 3%" stays a flat per-raid chance instead
// of quietly compounding over a long raid's runtime.
//
// Options use the same effect vocabulary as RAID_EVENTS (survivalAdd,
// lootMult, injuryRiskAdd, timeAddSec, forceGearFind, abortNow) so the
// existing resolution pipeline in resolveRaid handles them with no special
// casing — a boss fight is just an event with scarier numbers and a
// guaranteed bonus on top for actually winning.
const BOSS_CHANCE_PER_RAID = 0.03;
const BOSS_CATALOG = {
  lot: {
    name: "Kingpin",
    desc: "He's been running this lot since before the world ended, and he's not interested in sharing it with scavengers.",
  },
  marina: {
    name: "The Harbormaster",
    desc: "Nobody remembers her actual name anymore — just that she still keeps the docks, and doesn't like visitors touching her boats.",
  },
  depot: {
    name: "Rivet",
    desc: "Built out of salvage and spite, Rivet doesn't talk — it just comes through the containers after whoever's inside them.",
  },
  farmstead: {
    name: "Old Man Thresher",
    desc: "Whoever he used to be, he's been out among the silos so long the grass moves with him before you ever see him.",
  },
  suburb: {
    name: "Jack \"The Watchman\" Cole",
    desc: "He's been watching this street long enough to know every angle of approach — and every way out.",
  },
  hospital: {
    name: "Pavel \"Bonesaw\" Orlov",
    desc: "Whatever he was before, the wards made him into something that doesn't stop coming once it's found you.",
  },
  precinct: {
    name: "The Verdict",
    desc: "Self-appointed judge of whoever wanders into the holding cells. It doesn't take long to reach a decision.",
  },
  metro: {
    name: "Conductor",
    desc: "Something still rides the dead line between stations, and it's never once let a train run empty.",
  },
  tower: {
    name: "The Overlook",
    desc: "Forty floors up, something has made the penthouse its own — and it can see you coming from every window.",
  },
  refinery: {
    name: "The Furnace",
    desc: "The thing living in Blackpine's old boiler room doesn't need to chase you. It just needs you to stay long enough.",
  },
  drowned: {
    name: "The Tide",
    desc: "Nobody agrees on what it actually is, only that the water rises a little whenever it's close, and it's always close down here.",
  },
  // Dungeon bosses, added alongside DUNGEONS. Unlike every boss above,
  // these always show up (see launchRaid's guaranteed-boss flag on
  // dungeon raids, separate from BOSS_CHANCE_PER_RAID) and carry their
  // own `options` array instead of falling back to the shared generic
  // three in bossEncounterOptions — sharper trade-offs to match a fight
  // that's never optional and never the only thing that happened that
  // raid (dungeons still roll a normal hazard/enemy event too).
  vault: {
    name: "The Teller",
    desc: "Whatever's left of the vault's last line of defense, still running the only program it ever had: nobody who isn't authorized leaves with the contents.",
    options: [
      { label: "Force the vault door", detail: "Loud, slow, and it knows you're coming the whole time. Worst odds, best haul if it pays off.",
        effect: { survivalAdd: -0.28, injuryRiskAdd: 0.3, lootMult: 2.8, timeAddSec: 35 } },
      { label: "Work the mechanism by hand", detail: "Quieter, and it buys real time to be careful — at the cost of being careful for a long time.",
        effect: { survivalAdd: -0.14, injuryRiskAdd: 0.14, lootMult: 1.9, timeAddSec: 60 } },
      { label: "Pull back from the vault floor", detail: "Whatever's already in hand stays in hand. The vault keeps the rest.",
        isFlee: true, effect: { abortNow: true, lootMult: 0.5 } },
    ],
  },
  halcyon: {
    name: "Subject Seven",
    desc: "Whatever Halcyon was actually researching, Seven is what came out the other end of it — and it's been the only thing down here for a long time that still remembers wanting something.",
    options: [
      { label: "Engage directly", detail: "There's no good angle on this fight, only a fast one or a slow one. This is the fast one.",
        effect: { survivalAdd: -0.32, injuryRiskAdd: 0.34, lootMult: 3.0, timeAddSec: 30 } },
      { label: "Fall back through the wards and regroup", detail: "The corridors buy distance, if everyone holds together moving through them.",
        effect: { survivalAdd: -0.16, injuryRiskAdd: 0.16, lootMult: 2.0, timeAddSec: 65 } },
      { label: "Seal the ward and leave it behind", detail: "Whatever's already out comes out. Subject Seven stays exactly where it's been.",
        isFlee: true, effect: { abortNow: true, lootMult: 0.5 } },
    ],
  },
  drydock: {
    name: "The Keel",
    desc: "Something the size of the hulk itself, or close enough that nobody who's seen it has ever found the edges. It doesn't chase. It just waits for the tide to do the work.",
    options: [
      { label: "Hold the deck and fight", detail: "No retreat once the tide's this far in. Everything or nothing.",
        effect: { survivalAdd: -0.36, injuryRiskAdd: 0.38, lootMult: 3.2, timeAddSec: 30 } },
      { label: "Retreat to the upper decks, fight from there", detail: "Higher ground costs time against a rising tide, but it's still ground.",
        effect: { survivalAdd: -0.18, injuryRiskAdd: 0.18, lootMult: 2.1, timeAddSec: 70 } },
      { label: "Get off the hulk before the tide finishes coming in", detail: "Whatever's already found is what comes home. Everything else stays with the ship.",
        isFlee: true, effect: { abortNow: true, lootMult: 0.5 } },
    ],
  },
};

function getBossForMap(mapId) {
  return BOSS_CATALOG[mapId] || null;
}

// ===== BOSS UNIQUE GEAR =====
// One unique, named piece of gear per boss — the only way to get these is
// to actually beat that boss in a fight (not run from it) and make it home
// alive. Tier 5, sitting one notch above the best craftable/findable gear
// (tier 4), and flagged `unique` so every tier-gated system that scans
// GEAR_CATALOG (availableGear, rollGearFind's normal pool, crafting) can
// explicitly exclude it — these never enter the game any other way.
// `bossId`/`mapId` are kept on the item for the Codex and field-report text.
const BOSS_UNIQUE_DROP_CHANCE = 0.12; // chance per successful boss kill
const BOSS_UNIQUE_CATALOG = {
  lot: { slot: "weapon", id: "kingpin_iron", name: "Kingpin's Iron", tier: 5, unique: true, combat: 30,
    desc: "Pried from the Kingpin's grip. Still warm, somehow — a souvenir from the last lot rat who ever tried to run this place." },
  marina: { slot: "pack", id: "harbormaster_satchel", name: "Harbormaster's Satchel", tier: 5, unique: true, lootBonus: 0.5,
    desc: "Waxed canvas and brass fittings, salt-stained from decades on the docks. Whatever she used to carry her own hauls in." },
  depot: { slot: "armor", id: "rivet_plating", name: "Rivet's Plating", tier: 5, unique: true, defense: 28,
    desc: "Scavenged container steel, welded into something that used to be a person and now just stops bullets." },
  farmstead: { slot: "weapon", id: "threshers_scythe", name: "Thresher's Scythe", tier: 5, unique: true, combat: 32,
    desc: "Still sharp. Still smells like the silo. Nobody at camp wants to ask how he kept the edge on it this long." },
  suburb: { slot: "armor", id: "watchmans_coat", name: "The Watchman's Coat", tier: 5, unique: true, defense: 26,
    desc: "Lined with scavenged Kevlar scraps under the lining. He always said he could see every angle coming — this is how." },
  hospital: { slot: "pack", id: "bonesaw_kit", name: "Bonesaw's Kit", tier: 5, unique: true, lootBonus: 0.55,
    desc: "A surgeon's roll-bag, repurposed. Still has his tools in the side pocket. Nobody's cleaned it, and nobody plans to." },
  precinct: { slot: "weapon", id: "verdicts_gavel", name: "The Verdict's Gavel", tier: 5, unique: true, combat: 34,
    desc: "A length of riot baton, scarred from use. Whatever case it was meant to close, it isn't closing any more." },
  metro: { slot: "armor", id: "conductors_coat", name: "Conductor's Coat", tier: 5, unique: true, defense: 30,
    desc: "Transit-issue, decades out of date, and somehow still holding together better than the line it used to run." },
  tower: { slot: "pack", id: "overlook_case", name: "The Overlook's Case", tier: 5, unique: true, lootBonus: 0.6,
    desc: "A forty-floor commute's worth of paperwork, still inside. Whatever was worth keeping up there, it's yours now." },
  refinery: { slot: "weapon", id: "furnace_poker", name: "The Furnace's Poker", tier: 5, unique: true, combat: 38,
    desc: "Pulled from Blackpine's boiler room still glowing at one end. It's cooled down. Mostly." },
  drowned: { slot: "armor", id: "tides_shell", name: "The Tide's Shell", tier: 5, unique: true, defense: 32,
    desc: "Waterlogged plate, fused with barnacle and rust into something closer to armor than scrap has any right to be." },
  // Dungeon boss uniques — tier 6, one notch above every regular boss
  // unique above (tier 5). Same drop mechanics (resolveBossKillDrop,
  // BOSS_UNIQUE_DROP_CHANCE), just sitting at the top of the gear ladder
  // to match what it actually takes to get a shot at them: a key, a full
  // 3-scav group, and surviving a fight that's never optional.
  vault: { slot: "weapon", id: "tellers_drawer", name: "The Teller's Drawer", tier: 6, unique: true, combat: 46,
    desc: "Pried off whatever was left of the vault's last line of defense. Heavier than it looks, and it never once misfires." },
  halcyon: { slot: "armor", id: "subject_sevens_husk", name: "Subject Seven's Husk", tier: 6, unique: true, defense: 41,
    desc: "Whatever Halcyon was building Seven into, this is the part of it that came off intact. Nobody's figured out what it's made of, only that it works." },
  drydock: { slot: "pack", id: "keels_hold", name: "The Keel's Hold", tier: 6, unique: true, lootBonus: 0.8,
    desc: "Pulled from somewhere deep in the hulk, barnacled shut for who knows how long. Whatever the Keel was guarding, this is what's left of it." },
};

function getBossUniqueForMap(mapId) {
  return BOSS_UNIQUE_CATALOG[mapId] || null;
}

// Fold every boss unique into GEAR_CATALOG itself (with cost: null — they're
// never purchasable, only droppable) so the entire existing gear pipeline
// (getGearItem, stashCount, addToStash, equip menus, the stash panel) just
// works on them for free. Tier-gated systems that should NOT surface these
// on their own (availableGear, rollGearFind's normal pool, crafting) check
// the `unique` flag explicitly and skip them — see those functions below.
for (const mapId in BOSS_UNIQUE_CATALOG) {
  const drop = BOSS_UNIQUE_CATALOG[mapId];
  GEAR_CATALOG[drop.slot].push({ ...drop, cost: null, bossMapId: mapId });
}

// One flat roll at launch — true means this raid has a boss encounter
// waiting to fire partway through, same gating window as a regular event
// (before 85% of the raid's duration has elapsed).
function rollBossEncounter() {
  return Math.random() < BOSS_CHANCE_PER_RAID;
}

// Most bosses share these three generic options; dungeon bosses define
// their own (see BOSS_CATALOG.vault/halcyon/drydock) and take priority
// when present, since their fights are meant to read as sharper and
// scarier than a regular site's boss encounter.
function bossEncounterOptions(boss) {
  if (boss && boss.options) return boss.options;
  return [
    { label: "Fight head-on", detail: "All in. Best loot if it goes your way, worst odds if it doesn't.",
      effect: { survivalAdd: -0.22, injuryRiskAdd: 0.25, lootMult: 2.4, timeAddSec: 25 } },
    { label: "Fight cautiously", detail: "Hang back, pick your moments. Safer, still pays off, takes longer.",
      effect: { survivalAdd: -0.1, injuryRiskAdd: 0.1, lootMult: 1.6, timeAddSec: 45 } },
    { label: "Break off and run", detail: "Cut losses. Whatever's already found stays found — nothing more.",
      isFlee: true, effect: { abortNow: true, lootMult: 0.5 } },
  ];
}

// ===== RAID EVENTS (mid-raid decision popups) =====
// While a raid is in progress, there's a chance something happens that
// needs a call from camp — a scav radios in, the player picks one of a
// few options, and that choice feeds into how the raid resolves. Each
// option's `effect` object is stashed on the raid and read by resolveRaid:
//   survivalAdd    - flat addition to survival chance (can be negative)
//   lootMult       - multiplier applied to the raid's loot roll
//   injuryRiskAdd  - flat addition to the post-raid injury chance
//   timeAddSec     - seconds added to (or, if negative, cut from) the
//                    raid's remaining duration, applied immediately
//   forceGearFind  - guarantees a gear find on resolution if the raid
//                    succeeds, skipping the normal roll
//   abortNow       - ends the raid immediately: scavs return right away
//                    with whatever loot/effects are already locked in,
//                    skipping whatever time was left
// Any field can be omitted from an effect if it doesn't apply.
const RAID_EVENTS = [
  {
    id: "ambush",
    title: "Ambush",
    desc: "Movement in the next room — too coordinated to be wildlife. They haven't noticed your scav yet.",
    minRisk: 1, // available on every map
    options: [
      { label: "Push through fast", detail: "Higher risk, but you keep moving and the haul stays intact.", effect: { survivalAdd: -0.08, timeAddSec: -15 } },
      { label: "Wait them out", detail: "Costs time, but you slip by once they move on.", effect: { timeAddSec: 35 } },
      { label: "Fall back to the entry point", detail: "Cuts the raid short — safe, but you come home with less.", effect: { abortNow: true, lootMult: 0.4, survivalAdd: 0.1 } },
    ],
  },
  {
    id: "stash_cache",
    title: "Hidden Cache",
    desc: "A loose floor panel — someone's stash, untouched. Cracking it open will take a minute someone could use to come looking.",
    minRisk: 1,
    options: [
      { label: "Crack it open", detail: "Good odds it's worth the time, but you're exposed while you work.", effect: { lootMult: 1.6, survivalAdd: -0.05, timeAddSec: 20 } },
      { label: "Grab what's visible and go", detail: "A smaller, safer take.", effect: { lootMult: 1.2, timeAddSec: 5 } },
      { label: "Leave it", detail: "Not worth the risk. Keep moving.", effect: {} },
    ],
  },
  {
    id: "structural",
    title: "Structure's Failing",
    desc: "Something groans overhead — the floor or ceiling isn't holding much longer. There's a faster way out, if it's still clear.",
    minRisk: 1.5,
    options: [
      { label: "Sprint for the gap", detail: "Quick, but a bad landing means a real injury.", effect: { timeAddSec: -20, injuryRiskAdd: 0.15 } },
      { label: "Take the long way around", detail: "Slower, but nobody gets hurt getting out.", effect: { timeAddSec: 30, injuryRiskAdd: -0.1 } },
      { label: "Pull out now", detail: "Whatever's already found stays found — nothing more.", effect: { abortNow: true } },
    ],
  },
  {
    id: "distress",
    title: "Distress Call",
    desc: "Static, then a voice — somebody else is out here too, hurt and asking for help. Could be a trap. Could be a friend.",
    minRisk: 1,
    options: [
      { label: "Go help", detail: "If it's legit, they'll remember it — could be worth gear or goodwill. If not, you're walking into something.", effect: { survivalAdd: -0.1, lootMult: 1.3, timeAddSec: 25 } },
      { label: "Stay quiet and keep moving", detail: "Not your problem today.", effect: { timeAddSec: 5 } },
      { label: "Radio camp for backup, then proceed", detail: "Burns time getting a second opinion, but nothing's riskier for it.", effect: { timeAddSec: 15 } },
    ],
  },
  {
    id: "gear_locker",
    title: "Locked Gear Locker",
    desc: "A reinforced locker, bolted shut. Could be exactly the kind of gear that's hard to find out here. Could be empty.",
    minRisk: 1.8,
    options: [
      { label: "Force it open", detail: "Loud, and it takes real time — but a guaranteed look at what's inside.", effect: { timeAddSec: 30, survivalAdd: -0.06, forceGearFind: true } },
      { label: "Pick the lock quietly", detail: "Slower and safer than forcing it.", effect: { timeAddSec: 45, forceGearFind: true } },
      { label: "Not worth it", detail: "Leave the locker. Keep to the plan.", effect: {} },
    ],
  },
  {
    id: "toxic_air",
    title: "Bad Air",
    desc: "Whatever's leaking in this section isn't labeled, and it's not agreeing with anyone breathing it. The good stuff is past it.",
    minRisk: 2,
    options: [
      { label: "Push through without protection", detail: "Faster, but it'll take a toll.", effect: { timeAddSec: -10, injuryRiskAdd: 0.2, lootMult: 1.25 } },
      { label: "Mask up and go slow", detail: "Safer, but eats into the clock.", effect: { timeAddSec: 25, injuryRiskAdd: -0.05 } },
      { label: "Turn back from this section", detail: "Skip it entirely — safe, but less to show for it.", effect: { lootMult: 0.75 } },
    ],
  },
  // The five below are common hostile encounters rather than environmental
  // hazards — `enemy: true` and `enemyName` mark them for the Codex's
  // Enemies tab (see renderCodexEnemiesTab) but don't change anything
  // about how they're rolled or resolved: they ride the exact same
  // eligibleRaidEvents/checkRaidEvents/resolveRaidEventChoice pipeline as
  // every hazard above, just gated to progressively higher-risk maps so
  // the nastier ones don't show up on a first Strip Mall run.
  {
    id: "looters",
    title: "Looters",
    enemy: true,
    enemyName: "Looters",
    desc: "Two, maybe three of them, working the same room from the other end. They've seen the exits same as you have.",
    minRisk: 1, // available on every map
    options: [
      { label: "Stare them down", detail: "Most scavengers back off rather than start something. Most.", effect: { survivalAdd: -0.07, injuryRiskAdd: 0.1, lootMult: 1.2 } },
      { label: "Let them have this room", detail: "There's nothing here worth a fight.", effect: { timeAddSec: 15 } },
      { label: "Slip out before they clock you", detail: "Costs time moving quiet, but nobody has to know you were here.", effect: { timeAddSec: 25, survivalAdd: 0.04 } },
    ],
  },
  {
    id: "feral_pack",
    title: "Feral Pack",
    enemy: true,
    enemyName: "Feral Pack",
    desc: "Dogs, or what's left of being dogs — lean, quiet, and already circling. They know this place better than you do.",
    minRisk: 1.3,
    options: [
      { label: "Hold ground and fight them off", detail: "They scatter once a couple go down, but not before someone gets bitten.", effect: { survivalAdd: -0.1, injuryRiskAdd: 0.18, lootMult: 1.15 } },
      { label: "Throw them something else to chase", detail: "Costs a little time finding the bait, buys a clean exit.", effect: { timeAddSec: 20, survivalAdd: 0.03 } },
      { label: "Climb out of reach and wait", detail: "Safe, slow, and undignified.", effect: { timeAddSec: 35 } },
    ],
  },
  {
    id: "raider_patrol",
    title: "Raider Patrol",
    enemy: true,
    enemyName: "Raider Patrol",
    desc: "A working patrol, not stragglers — matched gear, covering each other's angles. Someone trained them, or they trained each other.",
    minRisk: 1.8,
    options: [
      { label: "Engage before they spread out", detail: "Best odds come from hitting them while they're still bunched up.", effect: { survivalAdd: -0.14, injuryRiskAdd: 0.2, lootMult: 1.7 } },
      { label: "Break contact and reroute", detail: "Backtracking costs real time but keeps the patrol someone else's problem.", effect: { timeAddSec: 40, survivalAdd: 0.05 } },
      { label: "Let them pass, then follow at a distance", detail: "Patient, and it pays off if they're walking toward something worth finding.", effect: { timeAddSec: 30, lootMult: 1.3 } },
    ],
  },
  {
    id: "armed_crew",
    title: "Armed Crew",
    enemy: true,
    enemyName: "Armed Crew",
    desc: "A crew running this stretch like it's theirs — because right now, it is. They're not interested in sharing the take.",
    minRisk: 2.5,
    options: [
      { label: "Fight for the ground", detail: "Whoever's left standing keeps whatever's here.", effect: { survivalAdd: -0.18, injuryRiskAdd: 0.24, lootMult: 2.0 } },
      { label: "Cut losses and pull back", detail: "Walking away with what's already in hand beats not walking away at all.", effect: { abortNow: true, lootMult: 0.5 } },
      { label: "Try to talk a split", detail: "Half of something is better than all of nothing — if they're willing to deal.", effect: { timeAddSec: 20, survivalAdd: -0.04, lootMult: 1.4 } },
    ],
  },
  {
    id: "irradiated_stalker",
    title: "Irradiated Stalker",
    enemy: true,
    enemyName: "Irradiated Stalker",
    desc: "Something that used to be a person, moving wrong in the dark at the edge of the light. It hasn't decided about you yet.",
    minRisk: 3.2,
    options: [
      { label: "Put it down before it decides", detail: "Ugly, close, and over fast either way.", effect: { survivalAdd: -0.2, injuryRiskAdd: 0.22, lootMult: 1.5 } },
      { label: "Back away slowly", detail: "It hasn't moved yet. Best to keep it that way.", effect: { timeAddSec: 25, survivalAdd: 0.06 } },
      { label: "Use it as a distraction and move past", detail: "Whatever it's reacting to isn't you — yet.", effect: { timeAddSec: 10, survivalAdd: -0.05, lootMult: 1.2 } },
    ],
  },
];

function getRaidEvent(id) {
  return RAID_EVENTS.find((e) => e.id === id);
}

// Mid-raid events get more likely to fire — and skew toward nastier ones —
// the more dangerous the map is. Calm maps mostly stay quiet.
// Maps flagged noEvents (currently just the arena — see ARENAS) never
// pull from this pool at all, regardless of their riskMult — a fixed,
// no-surprises fight, not a raid that could throw a hazard or hostile
// encounter at the player mid-way through.
function eligibleRaidEvents(map) {
  if (map.noEvents) return [];
  return RAID_EVENTS.filter((e) => map.riskMult >= e.minRisk);
}

// The single overview map used as the backdrop for the Tarkov-style raid
// select screen — one illustrated region with all 11 sites scattered
// across it as dots, rather than 11 separate thumbnails.
const REGION_MAP_ART = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InNreS1yZWdpb24iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBFMTAwOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzEzMTUwRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxODFBMTIiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhhemUtaW5kdXN0cmlhbCIgY3g9Ijc4JSIgY3k9Ijc4JSIgcj0iMzUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0E4MzQxRiIgc3RvcC1vcGFjaXR5PSIwLjE2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0E4MzQxRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJoYXplLXVyYmFuIiBjeD0iNDglIiBjeT0iNDUlIiByPSIzOCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNTQ2OTZDIiBzdG9wLW9wYWNpdHk9IjAuMTIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNTQ2OTZDIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndhdGVyLXJlZ2lvbiIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUUzMzJFIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzEwMUQxQSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI3NreS1yZWdpb24pIi8+CiAgPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2hhemUtdXJiYW4pIi8+CiAgPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2hhemUtaW5kdXN0cmlhbCkiLz4KCiAgPCEtLSB3YXRlciBib2R5LCBsb3dlci1sZWZ0IGNvYXN0IChtYXJpbmEgKyBkcm93bmVkIHF1YXJ0ZXIgdGVycml0b3J5KSAtLT4KICA8cGF0aCBkPSJNMCw2MjAgUTE1MCw1ODAgMjYwLDY0MCBRMzQwLDY5MCAyODAsODAwIEwwLDgwMCBaIiBmaWxsPSJ1cmwoI3dhdGVyLXJlZ2lvbikiIG9wYWNpdHk9IjAuODUiLz4KICA8ZyBzdHJva2U9IiMyRTRBNDIiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0xMCw2NTAgUTE0MCw2MTUgMjQwLDY2NSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTIwLDcwMCBRMTUwLDY2OCAyNTAsNzEwIiBmaWxsPSJub25lIi8+CiAgPC9nPgoKICA8IS0tIHJ1cmFsIGdyb3VuZCwgdXBwZXItbGVmdCAoZmFybXN0ZWFkIHRlcnJpdG9yeSkgLS0+CiAgPGVsbGlwc2UgY3g9IjE5MCIgY3k9IjE3MCIgcng9IjIzMCIgcnk9IjE0MCIgZmlsbD0iIzE3MUExMCIgb3BhY2l0eT0iMC41NSIvPgogIDxnIHN0cm9rZT0iIzNBNDIyNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuMzUiPgogICAgPHBhdGggZD0iTTQwLDE0MCBRMTkwLDExMCAzNDAsMTUwIiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNMzAsMTkwIFExOTAsMTY1IDM1MCwxOTUiIGZpbGw9Im5vbmUiLz4KICA8L2c+CgogIDwhLS0gZGVuc2UgdXJiYW4gY29yZSwgY2VudGVyLXJpZ2h0IChwcmVjaW5jdCwgdG93ZXIsIG1ldHJvIHRlcnJpdG9yeSkgLS0+CiAgPGcgZmlsbD0iIzE4MTYxMCIgb3BhY2l0eT0iMC43Ij4KICAgIDxyZWN0IHg9IjY0MCIgeT0iMTIwIiB3aWR0aD0iNTAiIGhlaWdodD0iMjIwIi8+CiAgICA8cmVjdCB4PSI3MDAiIHk9IjE2MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE4MCIvPgogICAgPHJlY3QgeD0iNjEwIiB5PSIyMDAiIHdpZHRoPSIzNSIgaGVpZ2h0PSIxNDAiLz4KICAgIDxyZWN0IHg9Ijc1MCIgeT0iMTAwIiB3aWR0aD0iNTUiIGhlaWdodD0iMjQwIi8+CiAgICA8cmVjdCB4PSI2ODAiIHk9IjI4MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyMCIvPgogIDwvZz4KCiAgPCEtLSBpbmR1c3RyaWFsIHpvbmUsIGxvd2VyLXJpZ2h0IChyZWZpbmVyeSB0ZXJyaXRvcnkpIC0tPgogIDxnIGZpbGw9IiMyMjFBMTQiIG9wYWNpdHk9IjAuNiI+CiAgICA8cmVjdCB4PSI5MjAiIHk9IjU4MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE2MCIvPgogICAgPHJlY3QgeD0iOTcwIiB5PSI2MTAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMzAiLz4KICAgIDxjaXJjbGUgY3g9IjkzNSIgY3k9IjU3NSIgcj0iMTAiIGZpbGw9IiMyQTFFMTQiLz4KICA8L2c+CiAgPGcgc3Ryb2tlPSIjQTgzNDFGIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMjUiPgogICAgPHBhdGggZD0iTTkwMCw1NjAgUTk2MCw1NDAgMTAxMCw1NjUiIGZpbGw9Im5vbmUiLz4KICA8L2c+CgogIDwhLS0gZmFpbnQgY29ubmVjdGluZyBwYXRocyBiZXR3ZWVuIHJlZ2lvbnMsIHN1Z2dlc3Rpbmcgcm91dGVzIC0tPgogIDxnIHN0cm9rZT0iIzJBMkQyMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsNiIgb3BhY2l0eT0iMC41IiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yNjAsMjAwIFE0MjAsMjYwIDU0MCwzMzAiLz4KICAgIDxwYXRoIGQ9Ik0yNTAsNjYwIFE0MjAsNTYwIDYwMCw0NjAiLz4KICAgIDxwYXRoIGQ9Ik03ODAsMzQwIFE4NjAsNDQwIDkzMCw1NjAiLz4KICAgIDxwYXRoIGQ9Ik01NDAsMzMwIFE3MDAsMzAwIDc2MCwyNTAiLz4KICAgIDxwYXRoIGQ9Ik02MDAsNDYwIFE3MDAsNDAwIDcyMCwzMzAiLz4KICA8L2c+CgogIDwhLS0gc2NhdHRlcmVkIGFtYmllbnQgdGV4dHVyZTogZmFpbnQgZG90cyBsaWtlIGRpc3RhbnQgbGlnaHRzIG9yIGRlYnJpcyAtLT4KICA8ZyBmaWxsPSIjM0EzRDJFIiBvcGFjaXR5PSIwLjQiPgogICAgPGNpcmNsZSBjeD0iMTIwIiBjeT0iOTAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iMzgwIiBjeT0iNjAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iOTAwIiBjeT0iMTAwIiByPSIxLjUiLz4KICAgIDxjaXJjbGUgY3g9IjEwODAiIGN5PSIyMDAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iNjAiIGN5PSI0NTAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iMTE0MCIgY3k9IjUwMCIgcj0iMS41Ii8+CiAgPC9nPgo8L3N2Zz4K";

const MAP_ART = {
  lot: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LWxvdCIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPiAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTQxNjBGIi8+ICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFBMUQxNSIvPiAgICAgPC9saW5lYXJHcmFkaWVudD4gICA8L2RlZnM+ICAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9InVybCgjc2t5LWxvdCkiLz4gICA8IS0tIGZsYXQgbG93IHN0cmlwIG1hbGwgc2lsaG91ZXR0ZSwgc3BhcnNlLCBjYWxtIC0tPiAgIDxnIGZpbGw9IiMyMjI1MTkiPiAgICAgPHJlY3QgeD0iMCIgeT0iMTgwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjUwIi8+ICAgICA8cmVjdCB4PSIwIiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIvPiAgICAgPHJlY3QgeD0iNjAiIHk9IjE2OCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjEyIi8+ICAgICA8cmVjdCB4PSIxMzAiIHk9IjE5MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0MCIvPiAgICAgPHJlY3QgeD0iMTUwIiB5PSIxNzgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIvPiAgICAgPHJlY3QgeD0iMjIwIiB5PSIxNzgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIvPiAgICAgPHJlY3QgeD0iMzEwIiB5PSIxODQiIHdpZHRoPSI5MCIgaGVpZ2h0PSI0NiIvPiAgICAgPHJlY3QgeD0iMzMwIiB5PSIxNzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMiIvPiAgICAgPHJlY3QgeD0iNDIwIiB5PSIxOTUiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzNSIvPiAgIDwvZz4gICA8IS0tIHBhcmtpbmcgbG90IGxhbXAgcG9zdHMsIHNwYXJzZSAtLT4gICA8ZyBzdHJva2U9IiMzQTNEMkUiIHN0cm9rZS13aWR0aD0iMyI+ICAgICA8bGluZSB4MT0iMTAwIiB5MT0iMjMwIiB4Mj0iMTAwIiB5Mj0iMTk1Ii8+ICAgICA8bGluZSB4MT0iMjUwIiB5MT0iMjMwIiB4Mj0iMjUwIiB5Mj0iMTkwIi8+ICAgICA8bGluZSB4MT0iMzgwIiB5MT0iMjMwIiB4Mj0iMzgwIiB5Mj0iMTkyIi8+ICAgPC9nPiAgIDxnIGZpbGw9IiM2Qjg1NTAiIG9wYWNpdHk9IjAuNSI+ICAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxOTMiIHI9IjQiLz4gICAgIDxjaXJjbGUgY3g9IjI1MCIgY3k9IjE4OCIgcj0iNCIvPiAgICAgPGNpcmNsZSBjeD0iMzgwIiBjeT0iMTkwIiByPSI0Ii8+ICAgPC9nPiAgIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzBGMTExMCIvPiA8L3N2Zz4g",
  marina: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LW1hcmluYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTAxMzBGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE2MUMxOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0id2F0ZXItbWFyaW5hIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNjQzM0MiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTAxRDFBIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNza3ktbWFyaW5hKSIvPgogIDwhLS0gZGlzdGFudCB3YXJlaG91c2Ugc2lsaG91ZXR0ZXMgYWxvbmcgdGhlIHNob3JlIC0tPgogIDxnIGZpbGw9IiMxQzIwMTgiPgogICAgPHJlY3QgeD0iMCIgeT0iMTcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNDAiLz4KICAgIDxyZWN0IHg9IjgwIiB5PSIxNjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIvPgogICAgPHJlY3QgeD0iMzcwIiB5PSIxNjUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0NSIvPgogICAgPHJlY3QgeD0iNDMwIiB5PSIxNzUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIzNSIvPgogIDwvZz4KICA8IS0tIHdhdGVyLCBkcmF3biBiZWZvcmUgdGhlIGRvY2svYm9hdHMgc28gdGhleSBzaXQgdmlzaWJseSBvbiB0b3Agb2YgaXQgLS0+CiAgPHJlY3QgeD0iMCIgeT0iMjA2IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY0IiBmaWxsPSJ1cmwoI3dhdGVyLW1hcmluYSkiLz4KICA8ZyBzdHJva2U9IiMzRDVDNTAiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQ1Ij4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjM0IiB4Mj0iNDgwIiB5Mj0iMjM0Ii8+CiAgICA8bGluZSB4MT0iMCIgeTE9IjI1MCIgeDI9IjQ4MCIgeTI9IjI1MCIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyNjQiIHgyPSI0ODAiIHkyPSIyNjQiLz4KICA8L2c+CiAgPCEtLSBkb2NrIHBvc3RzLCBzdGFuZGluZyBpbiB0aGUgd2F0ZXIgLS0+CiAgPGcgc3Ryb2tlPSIjM0EzMzI0IiBzdHJva2Utd2lkdGg9IjQiPgogICAgPGxpbmUgeDE9IjQwIiB5MT0iMjIyIiB4Mj0iNDAiIHkyPSIxODAiLz4KICAgIDxsaW5lIHgxPSIxNDAiIHkxPSIyMjQiIHgyPSIxNDAiIHkyPSIxNzgiLz4KICAgIDxsaW5lIHgxPSIyNDAiIHkxPSIyMjIiIHgyPSIyNDAiIHkyPSIxNzYiLz4KICAgIDxsaW5lIHgxPSIzNDAiIHkxPSIyMjQiIHgyPSIzNDAiIHkyPSIxODAiLz4KICA8L2c+CiAgPCEtLSBkb2NrIHdhbGt3YXkgLS0+CiAgPHJlY3QgeD0iMCIgeT0iMTk2IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjMkEyNTE4Ii8+CiAgPGcgc3Ryb2tlPSIjMUExNzEwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNiI+CiAgICA8bGluZSB4MT0iMCIgeTE9IjE5NiIgeDI9IjQ4MCIgeTI9IjE5NiIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyMTAiIHgyPSI0ODAiIHkyPSIyMTAiLz4KICA8L2c+CiAgPCEtLSB0d28gc21hbGwgYm9hdHMsIGh1bGxzIHJpZGluZyBvbiB0aGUgd2F0ZXIgYmVsb3cgdGhlIGRvY2sgbGluZSAtLT4KICA8ZyBmaWxsPSIjNEE0NTMwIiBzdHJva2U9IiMxQTE3MTAiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgIDxwYXRoIGQ9Ik0xNTAsMjI0IFExNTAsMjQwIDE3NSwyNDAgTDIxNSwyNDAgUTIyMiwyMjQgMjE1LDIyNCBaIi8+CiAgICA8cGF0aCBkPSJNMjgwLDIyOCBRMjgwLDI0MCAyOTgsMjQwIEwzMzAsMjQwIFEzMzUsMjI4IDMzMCwyMjggWiIvPgogIDwvZz4KICA8IS0tIG1hc3RzIC0tPgogIDxnIHN0cm9rZT0iIzNBMzMyNCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgIDxsaW5lIHgxPSIxODUiIHkxPSIyMjQiIHgyPSIxODUiIHkyPSIxODYiLz4KICAgIDxsaW5lIHgxPSIzMDUiIHkxPSIyMjgiIHgyPSIzMDUiIHkyPSIxOTYiLz4KICA8L2c+CiAgPCEtLSBvbmUgbGl0IGxhbXAgb24gdGhlIGRvY2sgLS0+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMTcyIiByPSI0IiBmaWxsPSIjQzJBOTRGIiBvcGFjaXR5PSIwLjc1Ii8+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMTcyIiByPSIxMSIgZmlsbD0iI0MyQTk0RiIgb3BhY2l0eT0iMC4yMiIvPgogIDxsaW5lIHgxPSIyNDAiIHkxPSIxNzYiIHgyPSIyNDAiIHkyPSIxOTYiIHN0cm9rZT0iIzNBMzMyNCIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=",
  depot: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LWRlcG90IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+ICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxNDE2MEYiLz4gICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUMxQTEyIi8+ICAgICA8L2xpbmVhckdyYWRpZW50PiAgIDwvZGVmcz4gICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNza3ktZGVwb3QpIi8+ICAgPCEtLSBzdGFja2VkIHNoaXBwaW5nIGNvbnRhaW5lcnMgLS0+ICAgPGcgZmlsbD0iIzI0MUYxNCI+ICAgICA8cmVjdCB4PSIxMCIgeT0iMjAwIiB3aWR0aD0iOTAiIGhlaWdodD0iMzQiLz4gICAgIDxyZWN0IHg9IjIwIiB5PSIxNjgiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiIvPiAgICAgPHJlY3QgeD0iMTEwIiB5PSIxOTUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzOSIvPiAgICAgPHJlY3QgeD0iMjAwIiB5PSIyMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjQiLz4gICAgIDxyZWN0IHg9IjIxMCIgeT0iMTc4IiB3aWR0aD0iNjAiIGhlaWdodD0iMzIiLz4gICAgIDxyZWN0IHg9IjMyMCIgeT0iMTk4IiB3aWR0aD0iODUiIGhlaWdodD0iMzYiLz4gICAgIDxyZWN0IHg9IjMzMCIgeT0iMTY4IiB3aWR0aD0iNTUiIGhlaWdodD0iMzAiLz4gICAgIDxyZWN0IHg9IjQxMCIgeT0iMjA1IiB3aWR0aD0iNzAiIGhlaWdodD0iMjkiLz4gICA8L2c+ICAgPCEtLSBjb250YWluZXIgcmlkZ2UgbGluZXMgLS0+ICAgPGcgc3Ryb2tlPSIjMUExNTBEIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyI+ICAgICA8bGluZSB4MT0iMTAiIHkxPSIyMTIiIHgyPSIxMDAiIHkyPSIyMTIiLz4gICAgIDxsaW5lIHgxPSIxMTAiIHkxPSIyMDgiIHgyPSIxOTAiIHkyPSIyMDgiLz4gICAgIDxsaW5lIHgxPSIzMjAiIHkxPSIyMTAiIHgyPSI0MDUiIHkyPSIyMTAiLz4gICA8L2c+ICAgPCEtLSBjcmFuZSBzaWxob3VldHRlIC0tPiAgIDxnIHN0cm9rZT0iIzhDN0EzRCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIj4gICAgIDxsaW5lIHgxPSIyNTAiIHkxPSIyMzQiIHgyPSIyNTAiIHkyPSIxMTAiLz4gICAgIDxsaW5lIHgxPSIyNTAiIHkxPSIxMTAiIHgyPSIzNDAiIHkyPSIxMjUiLz4gICAgIDxsaW5lIHgxPSIyNTAiIHkxPSIxMTgiIHgyPSIyMjUiIHkyPSIxMjUiLz4gICAgIDxsaW5lIHgxPSIzMjAiIHkxPSIxMjMiIHgyPSIzMjAiIHkyPSIxNTUiLz4gICA8L2c+ICAgPCEtLSByYWlsIGxpbmUgLS0+ICAgPGcgc3Ryb2tlPSIjM0EzRDJFIiBzdHJva2Utd2lkdGg9IjIiPiAgICAgPGxpbmUgeDE9IjAiIHkxPSIyNDAiIHgyPSI0ODAiIHkyPSIyNDAiLz4gICAgIDxsaW5lIHgxPSIwIiB5MT0iMjQ4IiB4Mj0iNDgwIiB5Mj0iMjQ4Ii8+ICAgPC9nPiAgIDxyZWN0IHg9IjAiIHk9IjIzNCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzNiIgZmlsbD0iIzBGMTExMCIvPiA8L3N2Zz4g",
  farmstead: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LWZhcm0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEyMTQwRCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxQTFEMTQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI3NreS1mYXJtKSIvPgogIDwhLS0gZGlzdGFudCB0cmVlIGxpbmUgLS0+CiAgPGcgZmlsbD0iIzFFMjIxNiIgb3BhY2l0eT0iMC44Ij4KICAgIDxlbGxpcHNlIGN4PSIzMCIgY3k9IjE5MCIgcng9IjQwIiByeT0iMjYiLz4KICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjE5NSIgcng9IjM0IiByeT0iMjIiLz4KICAgIDxlbGxpcHNlIGN4PSI0MjAiIGN5PSIxODgiIHJ4PSIzOCIgcnk9IjI0Ii8+CiAgICA8ZWxsaXBzZSBjeD0iNDU1IiBjeT0iMTk0IiByeD0iMzAiIHJ5PSIyMCIvPgogIDwvZz4KICA8IS0tIGJhcm4gLS0+CiAgPHBvbHlnb24gcG9pbnRzPSIyNTAsMTUwIDI1MCwxMDggMzAwLDgwIDM1MCwxMDggMzUwLDE1MCIgZmlsbD0iIzJBMUQxNiIvPgogIDxyZWN0IHg9IjI1MCIgeT0iMTUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjMjQxNzEwIi8+CiAgPHJlY3QgeD0iMjg4IiB5PSIxNzgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIzNiIgZmlsbD0iIzBGMEEwNyIvPgogIDwhLS0gYmFybiBsb2Z0IGRvb3IgLS0+CiAgPHJlY3QgeD0iMjg4IiB5PSIxMTYiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFBMTIwQyIvPgogIDwhLS0gc2lsbyAtLT4KICA8cmVjdCB4PSIzNzAiIHk9IjEwMCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjExNCIgcng9IjE4IiBmaWxsPSIjMjYyMjE5Ii8+CiAgPGVsbGlwc2UgY3g9IjM4OSIgY3k9IjEwMCIgcng9IjE5IiByeT0iMTAiIGZpbGw9IiMzMjJDMUUiLz4KICA8IS0tIHNpbG8gcmlkZ2UgbGluZXMgLS0+CiAgPGcgc3Ryb2tlPSIjMUExNjEwIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNiI+CiAgICA8bGluZSB4MT0iMzcwIiB5MT0iMTMwIiB4Mj0iNDA4IiB5Mj0iMTMwIi8+CiAgICA8bGluZSB4MT0iMzcwIiB5MT0iMTYwIiB4Mj0iNDA4IiB5Mj0iMTYwIi8+CiAgICA8bGluZSB4MT0iMzcwIiB5MT0iMTkwIiB4Mj0iNDA4IiB5Mj0iMTkwIi8+CiAgPC9nPgogIDwhLS0gZmVuY2UgbGluZSBpbiB0aGUgZm9yZWdyb3VuZCAtLT4KICA8ZyBzdHJva2U9IiMzQTMzMjQiIHN0cm9rZS13aWR0aD0iMyI+CiAgICA8bGluZSB4MT0iMCIgeTE9IjIzMiIgeDI9IjQ4MCIgeTI9IjIzMiIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyNDQiIHgyPSI0ODAiIHkyPSIyNDQiLz4KICA8L2c+CiAgPGcgc3Ryb2tlPSIjM0EzMzI0IiBzdHJva2Utd2lkdGg9IjQiPgogICAgPGxpbmUgeDE9IjIwIiB5MT0iMjIwIiB4Mj0iMjAiIHkyPSIyNTAiLz4KICAgIDxsaW5lIHgxPSI5MCIgeTE9IjIyMCIgeDI9IjkwIiB5Mj0iMjUwIi8+CiAgICA8bGluZSB4MT0iMTYwIiB5MT0iMjIwIiB4Mj0iMTYwIiB5Mj0iMjUwIi8+CiAgICA8bGluZSB4MT0iNDAwIiB5MT0iMjIwIiB4Mj0iNDAwIiB5Mj0iMjUwIi8+CiAgICA8bGluZSB4MT0iNDUwIiB5MT0iMjIwIiB4Mj0iNDUwIiB5Mj0iMjUwIi8+CiAgPC9nPgogIDwhLS0gdGFsbCBncmFzcyB0ZXh0dXJlLCBzcGFyc2Ugc3Ryb2tlcyAtLT4KICA8ZyBzdHJva2U9IiM0QTVEM0EiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ij4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjI1MiIgeDI9IjQ2IiB5Mj0iMjM4Ii8+CiAgICA8bGluZSB4MT0iMTIwIiB5MT0iMjU0IiB4Mj0iMTI0IiB5Mj0iMjQwIi8+CiAgICA8bGluZSB4MT0iMjAwIiB5MT0iMjUyIiB4Mj0iMTk2IiB5Mj0iMjQwIi8+CiAgICA8bGluZSB4MT0iMzMwIiB5MT0iMjU0IiB4Mj0iMzM0IiB5Mj0iMjQwIi8+CiAgPC9nPgogIDwhLS0gbG93IHJvbGxpbmcgZ3JvdW5kIC0tPgogIDxyZWN0IHg9IjAiIHk9IjI1MCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzE0MTUwRSIvPgo8L3N2Zz4K",
  suburb: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LXN1YnVyYiIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPiAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTExNDBGIi8+ICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE5MjAxOCIvPiAgICAgPC9saW5lYXJHcmFkaWVudD4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0id2F0ZXIiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4gICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJBM0QzOCIvPiAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNDIwMUMiLz4gICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgPC9kZWZzPiAgIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI3NreS1zdWJ1cmIpIi8+ICAgPCEtLSBob3VzZXMsIHBlYWtlZCByb29mcywgcGFydGlhbGx5IGZsb29kZWQgLS0+ICAgPGcgZmlsbD0iIzIwMjYxOCI+ICAgICA8cG9seWdvbiBwb2ludHM9IjIwLDIwMCAyMCwxNzAgNTUsMTUwIDkwLDE3MCA5MCwyMDAiLz4gICAgIDxyZWN0IHg9IjIwIiB5PSIyMDAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIvPiAgICAgPHBvbHlnb24gcG9pbnRzPSIxMjAsMjA1IDEyMCwxNzUgMTU1LDE1OCAxOTAsMTc1IDE5MCwyMDUiLz4gICAgIDxyZWN0IHg9IjEyMCIgeT0iMjA1IiB3aWR0aD0iNzAiIGhlaWdodD0iMTUiLz4gICAgIDxwb2x5Z29uIHBvaW50cz0iMjMwLDE5OCAyMzAsMTY1IDI3MCwxNDUgMzEwLDE2NSAzMTAsMTk4Ii8+ICAgICA8cmVjdCB4PSIyMzAiIHk9IjE5OCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIyIi8+ICAgICA8cG9seWdvbiBwb2ludHM9IjM0MCwyMDMgMzQwLDE3MiAzNzUsMTU1IDQxMCwxNzIgNDEwLDIwMyIvPiAgICAgPHJlY3QgeD0iMzQwIiB5PSIyMDMiIHdpZHRoPSI3MCIgaGVpZ2h0PSIxNyIvPiAgICAgPHBvbHlnb24gcG9pbnRzPSI0MzAsMjA2IDQzMCwxODAgNDYwLDE2NiA0ODAsMTgwIDQ4MCwyMDYiLz4gICAgIDxyZWN0IHg9IjQzMCIgeT0iMjA2IiB3aWR0aD0iNTAiIGhlaWdodD0iMTQiLz4gICA8L2c+ICAgPCEtLSBmbG9vZCB3YXRlciBvdmVybGF5LCByaXNlcyB1cCBvdmVyIGJ1aWxkaW5nIGJhc2VzIC0tPiAgIDxyZWN0IHg9IjAiIHk9IjIxNiIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NCIgZmlsbD0idXJsKCN3YXRlcikiIG9wYWNpdHk9IjAuODgiLz4gICA8IS0tIHdhdGVyIHJpcHBsZSBsaW5lcyAtLT4gICA8ZyBzdHJva2U9IiMzRDVDNTAiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjUiPiAgICAgPGxpbmUgeDE9IjAiIHkxPSIyMzAiIHgyPSI0ODAiIHkyPSIyMzAiLz4gICAgIDxsaW5lIHgxPSIwIiB5MT0iMjQ1IiB4Mj0iNDgwIiB5Mj0iMjQ1Ii8+ICAgICA8bGluZSB4MT0iMCIgeTE9IjI2MCIgeDI9IjQ4MCIgeTI9IjI2MCIvPiAgIDwvZz4gPC9zdmc+IA==",
  hospital: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LWhvc3AiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4gICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEyMEYwRSIvPiAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxQzE0MTAiLz4gICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgPC9kZWZzPiAgIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI3NreS1ob3NwKSIvPiAgIDwhLS0gbG93IHN1cnJvdW5kaW5nIGJ1aWxkaW5ncyAtLT4gICA8ZyBmaWxsPSIjMUUxQTE0Ij4gICAgIDxyZWN0IHg9IjAiIHk9IjIwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjM0Ii8+ICAgICA8cmVjdCB4PSIzODAiIHk9IjE5NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjM5Ii8+ICAgICA8cmVjdCB4PSI0MzAiIHk9IjIwOCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjI2Ii8+ICAgPC9nPiAgIDwhLS0gbWFpbiBob3NwaXRhbCBibG9jaywgdGFsbCwgZ3JpZCB3aW5kb3dzIC0tPiAgIDxyZWN0IHg9IjE0MCIgeT0iNjAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTc0IiBmaWxsPSIjMjIxQzE2Ii8+ICAgPGcgZmlsbD0iIzNBMkUyMiIgb3BhY2l0eT0iMC44Ij4gICAgIDwhLS0gd2luZG93IGdyaWQgLS0+ICAgICA8cmVjdCB4PSIxNTYiIHk9Ijc2IiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgIDxyZWN0IHg9IjE4MCIgeT0iNzYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgPHJlY3QgeD0iMjA0IiB5PSI3NiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIyMjgiIHk9Ijc2IiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgIDxyZWN0IHg9IjI1MiIgeT0iNzYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgPHJlY3QgeD0iMjc2IiB5PSI3NiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIzMDAiIHk9Ijc2IiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgICA8cmVjdCB4PSIxNTYiIHk9IjEwNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIxODAiIHk9IjEwNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIyNTIiIHk9IjEwNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIyNzYiIHk9IjEwNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIzMDAiIHk9IjEwNCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICAgPHJlY3QgeD0iMTU2IiB5PSIxMzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgPHJlY3QgeD0iMjA0IiB5PSIxMzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgPHJlY3QgeD0iMjI4IiB5PSIxMzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgPHJlY3QgeD0iMzAwIiB5PSIxMzIiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIvPiAgICAgIDxyZWN0IHg9IjE4MCIgeT0iMTYwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgIDxyZWN0IHg9IjIwNCIgeT0iMTYwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgIDxyZWN0IHg9IjI1MiIgeT0iMTYwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgIDxyZWN0IHg9IjI3NiIgeT0iMTYwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTYiLz4gICAgICA8cmVjdCB4PSIxNTYiIHk9IjE4OCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIyMjgiIHk9IjE4OCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIyNzYiIHk9IjE4OCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgICA8cmVjdCB4PSIzMDAiIHk9IjE4OCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2Ii8+ICAgPC9nPiAgIDwhLS0gb25lIGxpdCB3aW5kb3csIHJ1c3QtcmVkLCB0aGUgb25seSAiYWN0aXZlIiBzaWduIG9mIGxpZmUgLS0+ICAgPHJlY3QgeD0iMjA0IiB5PSIxMDQiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0E4MzQxRiIgb3BhY2l0eT0iMC43NSIvPiAgIDwhLS0gcm9vZnRvcCBoZWxpcGFkIGNyb3NzIC0tPiAgIDxnIGZpbGw9IiM4QzdBM0QiIG9wYWNpdHk9IjAuNiI+ICAgICA8cmVjdCB4PSIyMjIiIHk9IjQ0IiB3aWR0aD0iMzYiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjIzNCIgeT0iMzIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzNCIvPiAgIDwvZz4gPC9zdmc+IA==",
  precinct: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1wcmVjaW5jdCIgY3g9IjUwJSIgY3k9IjcwJSIgcj0iNTAlIj4gICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0E4MzQxRiIgc3RvcC1vcGFjaXR5PSIwLjIyIi8+ICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0E4MzQxRiIgc3RvcC1vcGFjaXR5PSIwIi8+ICAgICA8L3JhZGlhbEdyYWRpZW50PiAgIDwvZGVmcz4gICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0iIzEwMEUwQyIvPiAgIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2dsb3ctcHJlY2luY3QpIi8+ICAgPCEtLSBibG9ja3kgY2l2aWMgYnVpbGRpbmcgLS0+ICAgPHJlY3QgeD0iMTAwIiB5PSIxMDAiIHdpZHRoPSIyODAiIGhlaWdodD0iMTM0IiBmaWxsPSIjMUMxNjExIi8+ICAgPHJlY3QgeD0iMTAwIiB5PSI5MCIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIxNCIgZmlsbD0iIzI0MUQxNiIvPiAgIDwhLS0gY29sdW1ucyAtLT4gICA8ZyBmaWxsPSIjMEYwQzBBIj4gICAgIDxyZWN0IHg9IjEyMCIgeT0iMTA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTMwIi8+ICAgICA8cmVjdCB4PSIxNjAiIHk9IjEwNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEzMCIvPiAgICAgPHJlY3QgeD0iMjAwIiB5PSIxMDQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMzAiLz4gICAgIDxyZWN0IHg9IjI2NCIgeT0iMTA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTMwIi8+ICAgICA8cmVjdCB4PSIzMDQiIHk9IjEwNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEzMCIvPiAgICAgPHJlY3QgeD0iMzQ0IiB5PSIxMDQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMzAiLz4gICA8L2c+ICAgPCEtLSBicm9rZW4gZW50cnkgLyBkYXJrIGRvb3J3YXkgLS0+ICAgPHJlY3QgeD0iMjE2IiB5PSIxNzAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI2NCIgZmlsbD0iIzA1MDQwMyIvPiAgIDwhLS0gYmFycmljYWRlcyBvdXQgZnJvbnQgLS0+ICAgPGcgc3Ryb2tlPSIjM0EyRTFDIiBzdHJva2Utd2lkdGg9IjQiPiAgICAgPGxpbmUgeDE9IjYwIiB5MT0iMjQ0IiB4Mj0iMTIwIiB5Mj0iMjIyIi8+ICAgICA8bGluZSB4MT0iODAiIHkxPSIyNDQiIHgyPSIxNDAiIHkyPSIyMjIiLz4gICAgIDxsaW5lIHgxPSIzNDAiIHkxPSIyMjIiIHgyPSI0MDAiIHkyPSIyNDQiLz4gICAgIDxsaW5lIHgxPSIzNjAiIHkxPSIyMjIiIHgyPSI0MjAiIHkyPSIyNDQiLz4gICA8L2c+ICAgPCEtLSBsb3cgc2lkZSBydWJibGUgLS0+ICAgPGcgZmlsbD0iIzE2MTIxMCI+ICAgICA8cmVjdCB4PSIwIiB5PSIyMTQiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIvPiAgICAgPHJlY3QgeD0iNDAwIiB5PSIyMTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyNCIvPiAgIDwvZz4gICA8IS0tIHNpbmdsZSBydXN0IHdhcm5pbmcgbGlnaHQgb3ZlciB0aGUgZG9vciAtLT4gICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSIxNTgiIHI9IjUiIGZpbGw9IiNENDUwMkYiIG9wYWNpdHk9IjAuOSIvPiAgIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjE1OCIgcj0iMTEiIGZpbGw9IiNENDUwMkYiIG9wYWNpdHk9IjAuMjUiLz4gPC9zdmc+IA==",
  metro: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1tZXRybyIgY3g9IjUwJSIgY3k9IjQwJSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzU0Njk2QyIgc3RvcC1vcGFjaXR5PSIwLjIyIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU0Njk2QyIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0iIzBDMEUwQyIvPgogIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI2dsb3ctbWV0cm8pIi8+CiAgPCEtLSB0dW5uZWwgYXJjaCwgcmVjZWRpbmcgLS0+CiAgPHBhdGggZD0iTTAsMjYwIEwwLDkwIFEyNDAsMjAgNDgwLDkwIEw0ODAsMjYwIFoiIGZpbGw9IiMxNTE0MEYiLz4KICA8cGF0aCBkPSJNNDAsMjYwIEw0MCwxMTAgUTI0MCw1NSA0NDAsMTEwIEw0NDAsMjYwIFoiIGZpbGw9IiMwRjBFMEEiLz4KICA8cGF0aCBkPSJNOTAsMjYwIEw5MCwxMzAgUTI0MCw5MCAzOTAsMTMwIEwzOTAsMjYwIFoiIGZpbGw9IiMwODA3MDUiLz4KICA8IS0tIHR1bm5lbCByaWIgc3VwcG9ydHMgLS0+CiAgPGcgc3Ryb2tlPSIjMjIxRTE2IiBzdHJva2Utd2lkdGg9IjUiIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTQwLDI2MCBMNDAsMTEwIFEyNDAsNTUgNDQwLDExMCBMNDQwLDI2MCIvPgogICAgPHBhdGggZD0iTTE1MCwyNjAgTDE1MCwxNDggUTI0MCwxMjggMzMwLDE0OCBMMzMwLDI2MCIvPgogIDwvZz4KICA8IS0tIHJhaWxzIG9uIHRoZSB0dW5uZWwgZmxvb3IgLS0+CiAgPGcgc3Ryb2tlPSIjM0EzMzI0IiBzdHJva2Utd2lkdGg9IjMiPgogICAgPGxpbmUgeDE9IjE5MCIgeTE9IjI2MCIgeDI9IjIxMCIgeTI9IjE2MCIvPgogICAgPGxpbmUgeDE9IjI5MCIgeTE9IjI2MCIgeDI9IjI3MCIgeTI9IjE2MCIvPgogIDwvZz4KICA8IS0tIGEgc3RhbGxlZCB0cmFpbiBjYXIsIGhhbGYgc3dhbGxvd2VkIGJ5IGRlYnJpcyAtLT4KICA8cmVjdCB4PSIxNjAiIHk9IjE5NSIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzFDMTgxMiIvPgogIDxnIGZpbGw9IiMwQjA5MDYiPgogICAgPHJlY3QgeD0iMTgwIiB5PSIyMDUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIvPgogICAgPHJlY3QgeD0iMjE1IiB5PSIyMDUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIvPgogICAgPHJlY3QgeD0iMjUwIiB5PSIyMDUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIvPgogIDwvZz4KICA8IS0tIHJ1YmJsZSBwaWxlcyBidXJ5aW5nIHRoZSB0cmFja3MgLS0+CiAgPGcgZmlsbD0iIzFBMTYxMCI+CiAgICA8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iMjUyIiByeD0iNTAiIHJ5PSIxNiIvPgogICAgPGVsbGlwc2UgY3g9IjM5MCIgY3k9IjI1MCIgcng9IjU1IiByeT0iMTgiLz4KICA8L2c+CiAgPCEtLSBzaW5nbGUgZmxpY2tlcmluZyBlbWVyZ2VuY3kgbGlnaHQgLS0+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMTAwIiByPSI0IiBmaWxsPSIjRDQ1MDJGIiBvcGFjaXR5PSIwLjgiLz4KICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSIxMDAiIHI9IjE0IiBmaWxsPSIjRDQ1MDJGIiBvcGFjaXR5PSIwLjIiLz4KPC9zdmc+Cg==",
  tower: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic2t5LXRvd2VyIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+ICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwRDBGMEMiLz4gICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMUExNDBGIi8+ICAgICA8L2xpbmVhckdyYWRpZW50PiAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93LXRvd2VyIiBjeD0iNTAlIiBjeT0iODUlIiByPSI2MCUiPiAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRDQ1MDJGIiBzdG9wLW9wYWNpdHk9IjAuMTgiLz4gICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRDQ1MDJGIiBzdG9wLW9wYWNpdHk9IjAiLz4gICAgIDwvcmFkaWFsR3JhZGllbnQ+ICAgPC9kZWZzPiAgIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSJ1cmwoI3NreS10b3dlcikiLz4gICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNnbG93LXRvd2VyKSIvPiAgIDwhLS0gc2hvcnQgc3Vycm91bmRpbmcgYnVpbGRpbmdzIC0tPiAgIDxnIGZpbGw9IiMxQTE2MTEiPiAgICAgPHJlY3QgeD0iMCIgeT0iMTkwIiB3aWR0aD0iNzAiIGhlaWdodD0iNDQiLz4gICAgIDxyZWN0IHg9IjM4MCIgeT0iMjAwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzQiLz4gICAgIDxyZWN0IHg9IjQ0MCIgeT0iMTg1IiB3aWR0aD0iNDAiIGhlaWdodD0iNDkiLz4gICA8L2c+ICAgPCEtLSBtYWluIHRvd2VyLCB2ZXJ5IHRhbGwsIG5hcnJvdyAtLT4gICA8cmVjdCB4PSIxOTAiIHk9IjIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIxNCIgZmlsbD0iIzFFMTgxMyIvPiAgIDwhLS0gd2luZG93IGdyaWQsIHNwYXJzZSBsaXQgd2luZG93cyBjbGltYmluZyB1cCAtLT4gICA8ZyBmaWxsPSIjMTAwRDBBIj4gICAgIDxyZWN0IHg9IjIwMCIgeT0iMzQiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxOTAiLz4gICA8L2c+ICAgPGcgZmlsbD0iIzhDN0EzRCIgb3BhY2l0eT0iMC41NSI+ICAgICA8cmVjdCB4PSIyMDgiIHk9IjQ0IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjI2MiIgeT0iNDQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIvPiAgICAgPHJlY3QgeD0iMjI2IiB5PSI2OCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIi8+ICAgICA8cmVjdCB4PSIyNDQiIHk9IjkyIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjIwOCIgeT0iMTE2IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjI2MiIgeT0iMTQwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjIyNiIgeT0iMTY0IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICAgIDxyZWN0IHg9IjI0NCIgeT0iMTg4IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiLz4gICA8L2c+ICAgPCEtLSBhbnRlbm5hIC0tPiAgIDxsaW5lIHgxPSIyNDAiIHkxPSIyMCIgeDI9IjI0MCIgeTI9IjIiIHN0cm9rZT0iIzhDN0EzRCIgc3Ryb2tlLXdpZHRoPSIzIi8+ICAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMCIgcj0iMyIgZmlsbD0iI0Q0NTAyRiIvPiA8L3N2Zz4g",
  refinery: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICA8ZGVmcz4gICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1yZWZpbmVyeSIgY3g9IjUwJSIgY3k9IjU1JSIgcj0iNTUlIj4gICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0E4MzQxRiIgc3RvcC1vcGFjaXR5PSIwLjQiLz4gICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTgzNDFGIiBzdG9wLW9wYWNpdHk9IjAiLz4gICAgIDwvcmFkaWFsR3JhZGllbnQ+ICAgPC9kZWZzPiAgIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSIjMEMwQTA5Ii8+ICAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9InVybCgjZ2xvdy1yZWZpbmVyeSkiLz4gICA8IS0tIGluZHVzdHJpYWwgdGFua3MgLS0+ICAgPGcgZmlsbD0iIzFDMTQxMCI+ICAgICA8cmVjdCB4PSIyMCIgeT0iMTkwIiB3aWR0aD0iNjAiIGhlaWdodD0iNDQiIHJ4PSI0Ii8+ICAgICA8cmVjdCB4PSI5MCIgeT0iMTcwIiB3aWR0aD0iNTAiIGhlaWdodD0iNjQiIHJ4PSI0Ii8+ICAgICA8cmVjdCB4PSIzNjAiIHk9IjE4MCIgd2lkdGg9IjU1IiBoZWlnaHQ9IjU0IiByeD0iNCIvPiAgICAgPHJlY3QgeD0iNDIwIiB5PSIxOTUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIzOSIgcng9IjQiLz4gICA8L2c+ICAgPCEtLSBwaXBld29yayAtLT4gICA8ZyBzdHJva2U9IiMyQTFGMTYiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSI+ICAgICA8bGluZSB4MT0iODAiIHkxPSIyMTAiIHgyPSI5MCIgeTI9IjIxMCIvPiAgICAgPGxpbmUgeDE9IjE0MCIgeTE9IjIwMCIgeDI9IjIwMCIgeTI9IjIwMCIvPiAgICAgPGxpbmUgeDE9IjI4MCIgeTE9IjIwMCIgeDI9IjM2MCIgeTI9IjIwMCIvPiAgIDwvZz4gICA8IS0tIG1haW4gc21va2VzdGFja3MgLS0+ICAgPHJlY3QgeD0iMjAwIiB5PSI2MCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjE3NCIgZmlsbD0iIzFBMTMwRSIvPiAgIDxyZWN0IHg9IjI0MCIgeT0iNDAiIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOTQiIGZpbGw9IiMxQTEzMEUiLz4gICA8cmVjdCB4PSIyODAiIHk9IjgwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTU0IiBmaWxsPSIjMUExMzBFIi8+ICAgPCEtLSBmbGFtZSBhdCB0b3Agb2YgdGFsbGVzdCBzdGFjayAtLT4gICA8Zz4gICAgIDxlbGxpcHNlIGN4PSIyNTEiIGN5PSIzMiIgcng9IjEwIiByeT0iMTYiIGZpbGw9IiNENDUwMkYiIG9wYWNpdHk9IjAuOSIvPiAgICAgPGVsbGlwc2UgY3g9IjI1MSIgY3k9IjI4IiByeD0iNSIgcnk9IjkiIGZpbGw9IiNDMkE5NEYiIG9wYWNpdHk9IjAuODUiLz4gICA8L2c+ICAgPGNpcmNsZSBjeD0iMjUxIiBjeT0iMjAiIHI9IjIyIiBmaWxsPSIjRDQ1MDJGIiBvcGFjaXR5PSIwLjE4Ii8+ICAgPCEtLSBsb3cgcnViYmxlIGZvcmVncm91bmQgLS0+ICAgPGcgZmlsbD0iIzEwMEMwOSI+ICAgICA8cmVjdCB4PSIwIiB5PSIyMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNCIvPiAgICAgPHJlY3QgeD0iNDQwIiB5PSIyMjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI5Ii8+ICAgPC9nPiA8L3N2Zz4g",
  drowned: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1kcm93bmVkIiBjeD0iNTAlIiBjeT0iNjAlIiByPSI2MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQTgzNDFGIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNBODM0MUYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0id2F0ZXItZHJvd25lZCIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjQyMDFBIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBBMDkwOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiMwQjBBMDgiLz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNnbG93LWRyb3duZWQpIi8+CiAgPCEtLSBza3lsaW5lIG9mIGhhbGYtc3VibWVyZ2VkIHRvd2VycywgbGVhbmluZyAtLT4KICA8ZyBmaWxsPSIjMTkxNDBGIj4KICAgIDxyZWN0IHg9IjEwIiB5PSI0MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjE4MCIgdHJhbnNmb3JtPSJyb3RhdGUoMiAzNSAxMzApIi8+CiAgICA8cmVjdCB4PSI4MCIgeT0iNzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNTAiLz4KICAgIDxyZWN0IHg9IjE1MCIgeT0iMjAiIHdpZHRoPSI1NSIgaGVpZ2h0PSIyMDAiIHRyYW5zZm9ybT0icm90YXRlKC0xLjUgMTc3IDEyMCkiLz4KICAgIDxyZWN0IHg9IjIzMCIgeT0iNTUiIHdpZHRoPSI0NSIgaGVpZ2h0PSIxNjUiLz4KICAgIDxyZWN0IHg9IjMwMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMTAiIHRyYW5zZm9ybT0icm90YXRlKDEuNSAzMzAgMTE1KSIvPgogICAgPHJlY3QgeD0iMzgwIiB5PSI2NSIgd2lkdGg9IjQyIiBoZWlnaHQ9IjE1NSIvPgogICAgPHJlY3QgeD0iNDM1IiB5PSI4NSIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjEzNSIvPgogIDwvZz4KICA8IS0tIHNjYXR0ZXJlZCBicm9rZW4gd2luZG93cywgZGltIC0tPgogIDxnIGZpbGw9IiMyQTIyMTgiIG9wYWNpdHk9IjAuNyI+CiAgICA8cmVjdCB4PSIyMCIgeT0iNzAiIHdpZHRoPSI4IiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSIyMCIgeT0iMTAwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iMTY1IiB5PSI1MCIgd2lkdGg9IjgiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjE2NSIgeT0iOTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjEwIi8+CiAgICA8cmVjdCB4PSIzMTUiIHk9IjQwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIvPgogICAgPHJlY3QgeD0iMzE1IiB5PSI4MCIgd2lkdGg9IjgiIGhlaWdodD0iMTAiLz4KICAgIDxyZWN0IHg9IjMxNSIgeT0iMTIwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIvPgogIDwvZz4KICA8IS0tIG9uZSB0b3dlciB3aXRoIGEgcnVzdC1saXQgZmxvb3IsIHRoZSBvbmx5IHNpZ24gYW55dGhpbmcgc3RpbGwgaGFzIHBvd2VyIC0tPgogIDxyZWN0IHg9IjIzMCIgeT0iMTIwIiB3aWR0aD0iNDUiIGhlaWdodD0iMTIiIGZpbGw9IiNENDUwMkYiIG9wYWNpdHk9IjAuNTUiLz4KICA8IS0tIGZsb29kd2F0ZXIgY292ZXJpbmcgdGhlIGxvd2VyIHRoaXJkIG9mIGV2ZXJ5dGhpbmcgLS0+CiAgPHJlY3QgeD0iMCIgeT0iMTkwIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjgwIiBmaWxsPSJ1cmwoI3dhdGVyLWRyb3duZWQpIi8+CiAgPGcgc3Ryb2tlPSIjM0EzMDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjEwIiB4Mj0iNDgwIiB5Mj0iMjEwIi8+CiAgICA8bGluZSB4MT0iMCIgeTE9IjIzMCIgeDI9IjQ4MCIgeTI9IjIzMCIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyNTAiIHgyPSI0ODAiIHkyPSIyNTAiLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjY2IiB4Mj0iNDgwIiB5Mj0iMjY2Ii8+CiAgPC9nPgogIDwhLS0gZGVicmlzIGZsb2F0aW5nIG9uIHRoZSB3YXRlciAtLT4KICA8ZyBmaWxsPSIjMTQxMTBEIj4KICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjIwMiIgcng9IjIyIiByeT0iNSIvPgogICAgPGVsbGlwc2UgY3g9IjIwMCIgY3k9IjIwNiIgcng9IjE2IiByeT0iNCIvPgogICAgPGVsbGlwc2UgY3g9IjM1MCIgY3k9IjIwMCIgcng9IjI2IiByeT0iNiIvPgogIDwvZz4KPC9zdmc+Cg==",
  vault: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy12YXVsdCIgY3g9IjUwJSIgY3k9IjU1JSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzU0Njk2QyIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU0Njk2QyIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJmbG9vci12YXVsdCIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUMxRTE4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBFMEYwQyIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiMwQjBBMDgiLz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNnbG93LXZhdWx0KSIvPgogIDxyZWN0IHg9IjEwMCIgeT0iNDAiIHdpZHRoPSIyODAiIGhlaWdodD0iMTkwIiBmaWxsPSIjMUExQzE2Ii8+CiAgPGcgZmlsbD0iIzEzMTQwRiI+CiAgICA8cmVjdCB4PSIxMjAiIHk9IjYwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTcwIi8+CiAgICA8cmVjdCB4PSIxNzAiIHk9IjYwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTcwIi8+CiAgICA8cmVjdCB4PSIyMjAiIHk9IjYwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTcwIi8+CiAgICA8cmVjdCB4PSIyNzAiIHk9IjYwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTcwIi8+CiAgICA8cmVjdCB4PSIzMjAiIHk9IjYwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTcwIi8+CiAgPC9nPgogIDxwb2x5Z29uIHBvaW50cz0iMTAwLDQwIDI0MCw1IDM4MCw0MCIgZmlsbD0iIzE2MTgxMiIvPgogIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjE3NSIgcj0iNDIiIGZpbGw9IiMwRTBGMEMiIHN0cm9rZT0iIzNBM0QzMiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMTc1IiByPSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTQ2OTZDIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNiIvPgogIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjE3NSIgcj0iNiIgZmlsbD0iIzU0Njk2QyIgb3BhY2l0eT0iMC43Ii8+CiAgPGcgc3Ryb2tlPSIjNTQ2OTZDIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40NSI+CiAgICA8bGluZSB4MT0iMjQwIiB5MT0iMTQ1IiB4Mj0iMjQwIiB5Mj0iMjA1Ii8+CiAgICA8bGluZSB4MT0iMjEwIiB5MT0iMTc1IiB4Mj0iMjcwIiB5Mj0iMTc1Ii8+CiAgPC9nPgogIDxyZWN0IHg9IjAiIHk9IjIzMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNmbG9vci12YXVsdCkiLz4KICA8ZyBzdHJva2U9IiMyQTJEMjIiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ij4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjQ1IiB4Mj0iNDgwIiB5Mj0iMjQ1Ii8+CiAgPC9nPgogIDxnIGZpbGw9IiMxNDE1MEYiPgogICAgPGVsbGlwc2UgY3g9IjYwIiBjeT0iMjMyIiByeD0iMzAiIHJ5PSI2Ii8+CiAgICA8ZWxsaXBzZSBjeD0iNDIwIiBjeT0iMjM0IiByeD0iMzQiIHJ5PSI2Ii8+CiAgPC9nPgo8L3N2Zz4K",
  halcyon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1oYWxjeW9uIiBjeD0iNTAlIiBjeT0iNjUlIiByPSI2MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQTgzNDFGIiBzdG9wLW9wYWNpdHk9IjAuMjUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQTgzNDFGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InJhbXAtaGFsY3lvbiIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTcxNzEyIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBBMEEwOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiMwQjBBMDgiLz4KICA8cmVjdCB4PSIwIiB5PSIxNTAiIHdpZHRoPSI0ODAiIGhlaWdodD0iNDAiIGZpbGw9IiMxQTFCMTYiLz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNnbG93LWhhbGN5b24pIi8+CiAgPHJlY3QgeD0iMTkwIiB5PSIxMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMEUwRjBCIi8+CiAgPHJlY3QgeD0iMTk1IiB5PSIxMjUiIHdpZHRoPSI0NCIgaGVpZ2h0PSI5MCIgZmlsbD0iIzE1MTYwRiIgc3Ryb2tlPSIjMkEyRDIyIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cmVjdCB4PSIyNDEiIHk9IjEyNSIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjkwIiBmaWxsPSIjMTUxNjBGIiBzdHJva2U9IiMyQTJEMjIiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxnIGZpbGw9IiNBODM0MUYiIG9wYWNpdHk9IjAuNTUiPgogICAgPHBvbHlnb24gcG9pbnRzPSIxNjAsMTAwIDE3NSw5MCAxNzUsMTEwIi8+CiAgICA8cG9seWdvbiBwb2ludHM9IjMyMCwxMDAgMzA1LDkwIDMwNSwxMTAiLz4KICA8L2c+CiAgPHJlY3QgeD0iMTcwIiB5PSIxNjAiIHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiBmaWxsPSIjQTgzNDFGIiBvcGFjaXR5PSIwLjYiLz4KICA8bGluZSB4MT0iMzgwIiB5MT0iMTUwIiB4Mj0iMzgwIiB5Mj0iNjAiIHN0cm9rZT0iIzJBMkQyMiIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGxpbmUgeDE9IjM2NSIgeTE9Ijc1IiB4Mj0iMzk1IiB5Mj0iNzUiIHN0cm9rZT0iIzJBMkQyMiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGNpcmNsZSBjeD0iMzgwIiBjeT0iNTgiIHI9IjMiIGZpbGw9IiNBODM0MUYiIG9wYWNpdHk9IjAuNyIvPgogIDxwb2x5Z29uIHBvaW50cz0iMCwyNzAgNDgwLDI3MCAzNjAsMTkwIDEyMCwxOTAiIGZpbGw9InVybCgjcmFtcC1oYWxjeW9uKSIvPgogIDxnIHN0cm9rZT0iIzJBMkQyMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iMjA1IiB4Mj0iODAiIHkyPSIyNzAiLz4KICAgIDxsaW5lIHgxPSIzMzAiIHkxPSIyMDUiIHgyPSI0MDAiIHkyPSIyNzAiLz4KICA8L2c+CiAgPGcgc3Ryb2tlPSIjMUYyMTE4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNiI+CiAgICA8bGluZSB4MT0iMjAiIHkxPSIyNzAiIHgyPSIyMCIgeTI9IjIwMCIvPgogICAgPGxpbmUgeDE9IjIwIiB5MT0iMjAwIiB4Mj0iNjAiIHkyPSIxOTUiLz4KICA8L2c+Cjwvc3ZnPgo=",
  drydock: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1kcnlkb2NrIiBjeD0iNTAlIiBjeT0iNTUlIiByPSI2MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM0Q1QzUwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzRDVDNTAiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0id2F0ZXItZHJ5ZG9jayIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjYzMzJDIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBFMTUxMiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiMwQTBDMEEiLz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjI3MCIgZmlsbD0idXJsKCNnbG93LWRyeWRvY2spIi8+CiAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoLTMgMjQwIDE2NSkiPgogICAgPHBhdGggZD0iTTQwLDIwNSBMNDAsMTgwIEw3MCwxNTAgUTEwMCwxMjggMTYwLDEyMCBMMzgwLDEyMCBRNDEwLDEyMiA0MjAsMTUwIEw0MjAsMjA1IFoiIGZpbGw9IiMxODFFMUEiLz4KICAgIDxwYXRoIGQ9Ik00MCwxOTAgTDQyMCwxOTAgTDQyMCwyMDUgTDQwLDIwNSBaIiBmaWxsPSIjMTExNTBGIi8+CiAgICA8cGF0aCBkPSJNNzAsMTUwIFExMDAsMTI4IDE2MCwxMjAgTDM4MCwxMjAgUTQxMCwxMjIgNDIwLDE1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkEzMTI4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuOCIvPgogICAgPHBhdGggZD0iTTQwLDE4MCBRMzUsMTU1IDcwLDE1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyQTIyIiBzdHJva2Utd2lkdGg9IjMiLz4KICA8L2c+CiAgPGcgZmlsbD0iIzExMTUwRiIgdHJhbnNmb3JtPSJyb3RhdGUoLTMgMjQwIDE2NSkiPgogICAgPHJlY3QgeD0iMjYwIiB5PSI2NSIgd2lkdGg9IjkwIiBoZWlnaHQ9IjU4Ii8+CiAgICA8cmVjdCB4PSIyODIiIHk9IjM1IiB3aWR0aD0iNDIiIGhlaWdodD0iMzIiLz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoLTMgMjQwIDE2NSkiIGZpbGw9IiMwRTExMEQiPgogICAgPHJlY3QgeD0iMzMwIiB5PSI0OCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjM2Ii8+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKC0zIDI0MCAxNjUpIiBmaWxsPSIjMDgwOTA2IiBvcGFjaXR5PSIwLjkiPgogICAgPHJlY3QgeD0iMjg2IiB5PSI0NCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjYiLz4KICA8L2c+CiAgPGcgc3Ryb2tlPSIjNEEzNTI2IiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTMgMjQwIDE2NSkiPgogICAgPGxpbmUgeDE9IjEyMCIgeTE9IjEyOCIgeDI9IjExMiIgeTI9IjE5NSIvPgogICAgPGxpbmUgeDE9IjIyMCIgeTE9IjEyMSIgeDI9IjIxNiIgeTI9IjE5OCIvPgogICAgPGxpbmUgeDE9IjM0MCIgeTE9IjEyMSIgeDI9IjM0OCIgeTI9IjE5OCIvPgogIDwvZz4KICA8cG9seWdvbiBwb2ludHM9IjE1NSwxNTggMTk4LDE0NCAyMTIsMTc4IDE3MCwxOTAiIGZpbGw9IiMwODA5MDYiIHRyYW5zZm9ybT0icm90YXRlKC0zIDI0MCAxNjUpIi8+CiAgPGNpcmNsZSBjeD0iMzAzIiBjeT0iMzMiIHI9IjMiIGZpbGw9IiMzRDVDNTAiIG9wYWNpdHk9IjAuOCIvPgogIDxjaXJjbGUgY3g9IjMwMyIgY3k9IjMzIiByPSI5IiBmaWxsPSIjM0Q1QzUwIiBvcGFjaXR5PSIwLjIyIi8+CiAgPHJlY3QgeD0iMCIgeT0iMjA1IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjY1IiBmaWxsPSJ1cmwoI3dhdGVyLWRyeWRvY2spIi8+CiAgPGcgc3Ryb2tlPSIjM0Q1QzUwIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMjIyIiB4Mj0iNDgwIiB5Mj0iMjIyIi8+CiAgICA8bGluZSB4MT0iMCIgeTE9IjI0MCIgeDI9IjQ4MCIgeTI9IjI0MCIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyNTgiIHgyPSI0ODAiIHkyPSIyNTgiLz4KICA8L2c+CiAgPGcgZmlsbD0iIzBFMTMxMCI+CiAgICA8ZWxsaXBzZSBjeD0iNjAiIGN5PSIyMTYiIHJ4PSIyMCIgcnk9IjUiLz4KICAgIDxlbGxpcHNlIGN4PSI0NDAiIGN5PSIyMjAiIHJ4PSIyNCIgcnk9IjUiLz4KICA8L2c+Cjwvc3ZnPgo=",
  arena: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDgwIDI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdy1hcmVuYSIgY3g9IjUwJSIgY3k9IjU1JSIgcj0iNjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0MyQTk0RiIgc3RvcC1vcGFjaXR5PSIwLjI4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0MyQTk0RiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwaXQtYXJlbmEiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFDMUExNCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwQzBBMDciLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMjcwIiBmaWxsPSIjMEEwOTA4Ii8+CiAgPHJlY3Qgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNzAiIGZpbGw9InVybCgjZ2xvdy1hcmVuYSkiLz4KICA8ZyBmaWxsPSIjMUUxQjE0Ij4KICAgIDxyZWN0IHg9IjIwIiB5PSIxMjAiIHdpZHRoPSI1NSIgaGVpZ2h0PSI5MCIgdHJhbnNmb3JtPSJyb3RhdGUoLTYgNDcgMTY1KSIvPgogICAgPHJlY3QgeD0iODAiIHk9IjEwNSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjEwMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTMgMTA3IDE1NSkiLz4KICAgIDxyZWN0IHg9IjM0MCIgeT0iMTA1IiB3aWR0aD0iNTUiIGhlaWdodD0iMTAwIiB0cmFuc2Zvcm09InJvdGF0ZSgzIDM2NyAxNTUpIi8+CiAgICA8cmVjdCB4PSI0MDAiIHk9IjEyMCIgd2lkdGg9IjU1IiBoZWlnaHQ9IjkwIiB0cmFuc2Zvcm09InJvdGF0ZSg2IDQyNyAxNjUpIi8+CiAgPC9nPgogIDxnIGZpbGw9IiMxNzE1MTAiPgogICAgPHJlY3QgeD0iMTUwIiB5PSI5NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwNSIvPgogICAgPHJlY3QgeD0iMjA1IiB5PSI4OCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjExMiIvPgogICAgPHJlY3QgeD0iMjcwIiB5PSI5NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwNSIvPgogIDwvZz4KICA8ZyBzdHJva2U9IiMwRTBDMDkiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC42Ij4KICAgIDxsaW5lIHgxPSIxNTAiIHkxPSIxMzAiIHgyPSIyMDAiIHkyPSIxMzAiLz4KICAgIDxsaW5lIHgxPSIyMDUiIHkxPSIxMjUiIHgyPSIyNjUiIHkyPSIxMjUiLz4KICAgIDxsaW5lIHgxPSIyNzAiIHkxPSIxMzAiIHgyPSIzMjAiIHkyPSIxMzAiLz4KICA8L2c+CiAgPGcgc3Ryb2tlPSIjM0EzMzI0IiBzdHJva2Utd2lkdGg9IjMiPgogICAgPGxpbmUgeDE9IjYwIiB5MT0iMjMwIiB4Mj0iNjAiIHkyPSI3MCIvPgogICAgPGxpbmUgeDE9IjQyMCIgeTE9IjIzMCIgeDI9IjQyMCIgeTI9IjcwIi8+CiAgPC9nPgogIDxnIGZpbGw9IiMxQTE4MTIiIHN0cm9rZT0iIzNBMzMyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgPHJlY3QgeD0iNDQiIHk9IjU4IiB3aWR0aD0iMzIiIGhlaWdodD0iMTQiLz4KICAgIDxyZWN0IHg9IjQwNCIgeT0iNTgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNCIvPgogIDwvZz4KICA8cG9seWdvbiBwb2ludHM9IjYwLDcyIDIwLDIwMCAxMDAsMjAwIiBmaWxsPSIjQzJBOTRGIiBvcGFjaXR5PSIwLjEwIi8+CiAgPHBvbHlnb24gcG9pbnRzPSI0MjAsNzIgMzgwLDIwMCA0NjAsMjAwIiBmaWxsPSIjQzJBOTRGIiBvcGFjaXR5PSIwLjEwIi8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2NSIgcj0iNCIgZmlsbD0iI0MyQTk0RiIgb3BhY2l0eT0iMC44NSIvPgogIDxjaXJjbGUgY3g9IjQyMCIgY3k9IjY1IiByPSI0IiBmaWxsPSIjQzJBOTRGIiBvcGFjaXR5PSIwLjg1Ii8+CiAgPGVsbGlwc2UgY3g9IjI0MCIgY3k9IjIyNSIgcng9IjE5MCIgcnk9IjM1IiBmaWxsPSJ1cmwoI3BpdC1hcmVuYSkiLz4KICA8ZWxsaXBzZSBjeD0iMjQwIiBjeT0iMjIyIiByeD0iMTUwIiByeT0iMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNBMzMyNCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz4KICA8ZyBzdHJva2U9IiMyQTJEMjIiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ij4KICAgIDxwYXRoIGQ9Ik03MCwyMzIgUTI0MCwyNTAgNDEwLDIzMiIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTcwLDIyMiBRMjQwLDIzOCA0MTAsMjIyIiBmaWxsPSJub25lIi8+CiAgPC9nPgogIDxnIGZpbGw9IiMxQTE4MTIiPgogICAgPHJlY3QgeD0iNjUiIHk9IjIxMCIgd2lkdGg9IjgiIGhlaWdodD0iMzAiLz4KICAgIDxyZWN0IHg9IjIzNyIgeT0iMjE4IiB3aWR0aD0iOCIgaGVpZ2h0PSIzNCIvPgogICAgPHJlY3QgeD0iNDA3IiB5PSIyMTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjMwIi8+CiAgPC9nPgogIDxnIGZpbGw9IiMxMDBFMEIiIG9wYWNpdHk9IjAuODUiPgogICAgPGVsbGlwc2UgY3g9IjE2MCIgY3k9IjIwNSIgcng9IjYiIHJ5PSIxMCIvPgogICAgPGVsbGlwc2UgY3g9IjE3OCIgY3k9IjIwNyIgcng9IjYiIHJ5PSIxMCIvPgogICAgPGVsbGlwc2UgY3g9IjMwMCIgY3k9IjIwNiIgcng9IjYiIHJ5PSIxMCIvPgogICAgPGVsbGlwc2UgY3g9IjMxOCIgY3k9IjIwNCIgcng9IjYiIHJ5PSIxMCIvPgogIDwvZz4KPC9zdmc+Cg==",
};

const UPGRADE_CATALOG = [
  {
    id: "infirmary",
    name: "Infirmary",
    track: "survival",
    desc: "Speeds up scav recovery time.",
    lore: "A back room turned sick bay, stocked with whatever meds the camp can spare. Nobody trained for this — they learned because somebody had to.",
    maxLevel: 5,
    baseCost: { scrap: 30, gold: 5 },
    costMult: 1.9,
    effect: (lvl) => `+${lvl * 15}% Recovery Speed`,
  },
  {
    id: "armory",
    name: "Armory",
    track: "gear",
    desc: "Raises the ceiling on what tier of gear your scavs can turn up on a raid.",
    lore: "Racks and lockers for whatever's worth keeping. The better the Armory, the more your scavs know what real gear looks like when they see it out there.",
    maxLevel: 4,
    baseCost: { scrap: 50, gold: 10 },
    costMult: 2.1,
    effect: (lvl) => lvl === 0 ? "Basic gear only — build to find better tiers" : `Tier ${lvl + 1} gear can now be found`,
  },
  {
    id: "scoutTower",
    name: "Scout Tower",
    track: "intel",
    desc: "Reveals precise survival odds before launch and improves loot rolls.",
    lore: "A jury-rigged platform with a clear line of sight over the camp and beyond. Whoever's on watch up there has talked more than one raid out of going in blind.",
    maxLevel: 3,
    baseCost: { scrap: 40, gold: 8 },
    costMult: 2.0,
    effect: (lvl) => `+${lvl * 6}% loot yield`,
  },
  {
    id: "barracks",
    name: "Barracks",
    track: "roster",
    desc: "Adds bunk space for more scavs, and lets you form raid groups of up to 3.",
    lore: "Bunks built from whatever frames and scrap could be found. More beds means more scavs willing to throw in with the camp — and more hands to send out together.",
    maxLevel: 4,
    baseCost: { scrap: 60, gold: 12 },
    costMult: 2.2,
    effect: (lvl) => `+${lvl} roster slots`,
  },
  {
    id: "workshop",
    name: "Workshop",
    track: "gear",
    desc: "Speeds up raid timers, and lets you craft improvised gear from scrap.",
    lore: "Workbenches, a vice, and whatever tools survived the years. Nothing built here is pretty, but it's yours, and it's there when the real thing never turns up.",
    maxLevel: 4,
    baseCost: { scrap: 45, gold: 10 },
    costMult: 2.0,
    effect: (lvl) => `-${lvl * 8}% raid duration`,
  },
  {
    id: "radioTower",
    name: "Radio Tower",
    track: "intel",
    desc: "Picks up chatter from other survivors trading nearby — opens the Flea Market once built.",
    lore: "Scavenged antenna, a hand-crank set, and a lot of patience. Most of what comes through is static, but every so often somebody's selling.",
    maxLevel: 3,
    baseCost: { scrap: 70, gold: 15 },
    costMult: 2.1,
    effect: (lvl) => lvl === 0 ? "Build to unlock the Flea Market" : `${FLEA_BASE_OFFERS + (lvl - 1)} offers per day`,
  },
  {
    id: "farm",
    name: "Farm",
    track: "survival",
    desc: "Grows food for the camp every day — covers the daily upkeep, with more to spare at higher levels.",
    lore: "Raised beds and a couple of scavenged grow-lights, tended between raids. Doesn't look like much, but it's the difference between the camp eating and the camp not.",
    maxLevel: 5,
    baseCost: { scrap: 35, gold: 6 },
    costMult: 1.9,
    effect: (lvl) => lvl === 0 ? "Not built — no food production" : `+${FARM_FOOD_PER_LEVEL * lvl} food per day`,
  },
];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickName() {
  const f = FIRST_NAMES[randInt(0, FIRST_NAMES.length - 1)];
  const l = LAST_NAMES[randInt(0, LAST_NAMES.length - 1)];
  return `${f} ${l}`;
}

// ===== SKILL TREE (per scav) =====
// Each scav has their own independent tree and their own pool of points —
// nothing here is shared across the roster. A scav earns one point per
// level gained and spends it permanently on whichever branch fits how
// you're using them. Three branches, three nodes each: a multi-rank node,
// a second multi-rank node gated behind the first, and a single-rank
// capstone gated behind both and a level requirement.
//
// Every effect plugs into a value that's already computed per scav
// elsewhere (combat power, survival odds, injury rolls, heal time) rather
// than touching anything shared across a raid group, so a skill always
// reflects that one scav's choices and nothing else's.
const SKILL_TREE = {
  combat: {
    label: "Combat",
    nodes: [
      { id: "hardened", name: "Hardened", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `+${rank * 2} combat power`, next: () => "+2 combat power per rank" },
      { id: "steadyAim", name: "Steady Aim", maxRank: 3, minLevel: 2, requires: { id: "hardened", rank: 1 },
        desc: (rank) => `+${(rank * 1.5).toFixed(1)}% survival odds`, next: () => "+1.5% survival per rank" },
      { id: "veteranInstinct", name: "Veteran Instinct", maxRank: 1, minLevel: 5, requires: { id: "steadyAim", rank: 2 },
        desc: () => "-20% chance of injury on a raid", next: () => "-20% injury chance" },
    ],
  },
  survival: {
    label: "Survival",
    nodes: [
      { id: "thickSkin", name: "Thick Skin", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `+${rank * 8} max HP`, next: () => "+8 max HP per rank" },
      { id: "ironWill", name: "Iron Will", maxRank: 2, minLevel: 2, requires: { id: "thickSkin", rank: 1 },
        desc: (rank) => `-${rank * 12}% injury severity`, next: () => "-12% injury severity per rank" },
      { id: "fastHealer", name: "Fast Healer", maxRank: 1, minLevel: 5, requires: { id: "ironWill", rank: 1 },
        desc: () => "-25% time spent in the Infirmary", next: () => "-25% heal time" },
    ],
  },
  scavenging: {
    label: "Scavenging",
    nodes: [
      { id: "lightFingers", name: "Light Fingers", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `+${rank * 5}% loot from raids`, next: () => "+5% loot per rank" },
      { id: "packMule", name: "Pack Mule", maxRank: 2, minLevel: 2, requires: { id: "lightFingers", rank: 1 },
        desc: (rank) => `+${rank * 6}% loot from raids`, next: () => "+6% loot per rank" },
      { id: "scrounger", name: "Scrounger", maxRank: 1, minLevel: 5, requires: { id: "packMule", rank: 1 },
        desc: () => "+1 scrap, +1 gold whenever this scav personally makes it back", next: () => "+1 scrap, +1 gold on personal survival" },
    ],
  },
};

function getSkillNodeDef(branchId, nodeId) {
  const branch = SKILL_TREE[branchId];
  if (!branch) return null;
  return branch.nodes.find((n) => n.id === nodeId) || null;
}

function findSkillNodeAnyBranch(nodeId) {
  for (const branchId of Object.keys(SKILL_TREE)) {
    const node = getSkillNodeDef(branchId, nodeId);
    if (node) return { branchId, node };
  }
  return null;
}

// Safe accessor: scavs from a save predating this feature won't have a
// `skills` object at all, so this lazily attaches one rather than crashing
// every time something reads it.
function getScavSkills(scav) {
  if (!scav.skills) scav.skills = {};
  return scav.skills;
}

function getSkillRank(scav, nodeId) {
  return getScavSkills(scav)[nodeId] || 0;
}

// A scav's total skill points ever earned is derived from their level
// rather than stored as its own incrementing counter — that way an old
// save automatically grants whatever points a scav's current level
// implies, with nothing to migrate by hand.
function totalSkillPointsEarned(scav) {
  return Math.max(0, scav.level - 1);
}

function skillPointsSpent(scav) {
  const skills = getScavSkills(scav);
  return Object.values(skills).reduce((sum, rank) => sum + rank, 0);
}

function unspentSkillPoints(scav) {
  return totalSkillPointsEarned(scav) - skillPointsSpent(scav);
}

// Whether a node could ever be ranked up further right now: prerequisite
// met, level high enough, not already at max rank. Doesn't check whether
// the scav actually has a free point — that's surfaced separately so the
// UI can show a node as "locked" vs. "unlocked but can't afford" distinctly.
function isSkillNodeUnlocked(scav, branchId, nodeId) {
  const node = getSkillNodeDef(branchId, nodeId);
  if (!node) return false;
  if (scav.level < node.minLevel) return false;
  if (node.requires && getSkillRank(scav, node.requires.id) < node.requires.rank) return false;
  return true;
}

// Spends one of the scav's unspent points on a rank of this node. Returns
// false (no state change) if the node isn't unlocked, is already maxed, or
// the scav has no point free to spend.
function learnSkillRank(scav, branchId, nodeId) {
  const node = getSkillNodeDef(branchId, nodeId);
  if (!node) return false;
  if (!isSkillNodeUnlocked(scav, branchId, nodeId)) return false;
  const skills = getScavSkills(scav);
  const currentRank = skills[nodeId] || 0;
  if (currentRank >= node.maxRank) return false;
  if (unspentSkillPoints(scav) <= 0) return false;
  skills[nodeId] = currentRank + 1;
  // Thick Skin's max HP bonus is a one-time stat bump applied the moment
  // it's learned (same as how leveling up grants HP directly), rather than
  // something recomputed live — so the extra HP is immediately usable, not
  // just a number that shows up next time the scav happens to heal.
  if (nodeId === "thickSkin") {
    scav.maxHp += 8;
    scav.hp += 8;
  }
  saveState();
  return true;
}

// Aggregate skill bonuses for a scav, computed fresh each time rather than
// cached — cheap to recompute and never goes stale. Every consumer below
// (combat power, odds, injury rolls, heal time) reads from this single
// place so the numbers shown in the UI and the numbers actually applied
// can never drift apart.
function scavSkillBonuses(scav) {
  const hardened = getSkillRank(scav, "hardened");
  const steadyAim = getSkillRank(scav, "steadyAim");
  const veteranInstinct = getSkillRank(scav, "veteranInstinct");
  const ironWill = getSkillRank(scav, "ironWill");
  const fastHealer = getSkillRank(scav, "fastHealer");
  const lightFingers = getSkillRank(scav, "lightFingers");
  const packMule = getSkillRank(scav, "packMule");
  const scrounger = getSkillRank(scav, "scrounger");
  return {
    combatPower: hardened * 2,
    survivalAdd: steadyAim * 0.015,
    injuryChanceMult: veteranInstinct ? 0.8 : 1,
    injurySeverityMult: 1 - ironWill * 0.12,
    healTimeMult: fastHealer ? 0.75 : 1,
    lootMult: 1 + lightFingers * 0.05 + packMule * 0.06,
    scroungerBonus: scrounger ? { scrap: 1, gold: 1 } : null,
  };
}

function makeScav(idOverride) {
  return {
    id: idOverride || `scav_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: pickName(),
    level: 1,
    xp: 0,
    maxHp: 100,
    hp: 100,
    radiation: 0, // 0-RADIATION_CAP — eats into effective max HP, see effectiveMaxHp(). Treated at the Infirmary, same as injuries.
    morale: 100, // 0-100 — drops a little on every raid, eats into loot yield, see moraleLootFactor(). Rested off at the Barracks.
    status: "ready", // ready | away | dead | defending | healing | resting
    gear: { weapon: "fists", armor: "rags", pack: "satchel" },
    raidsCompleted: 0,
    skills: {}, // { nodeId: rank } — see SKILL_TREE; points spent permanently, per scav
  };
}

// carryOver, when provided (see startNewGamePlus), is { scav, items, ngPlusLevel }
// — scav is a full scav object kept exactly as it was (level/skills/gear
// intact, per the prestige design), items is an array of up to 2
// { slot, id } picks added to the otherwise-empty stash, and ngPlusLevel
// is the new prestige count to carry forward. A plain freshState() call
// (no argument) is still a completely vanilla new game — wipeProgress()
// and the very first launch both still go through this same path
// unchanged.
function freshState(carryOver) {
  // lastUpkeepDay below needs "what day number would this be," but
  // getDayNumber() works by reading STATE.campStartedAt off the live
  // STATE global — which, while this object literal is still being
  // built, is either null (first-ever launch) or still the *previous*
  // state (on wipeProgress()), not this one. Computing day-1-equivalent
  // directly from local variables instead of going through STATE avoids
  // reading the wrong epoch (or crashing on a null STATE) mid-construction.
  const freshCampStartedAt = Date.now();
  const freshGameClockOffset = 0;
  // Day number for an epoch of "right now, offset 0" is always 1 —
  // elapsed-since-epoch is 0 by construction, so this doesn't need the
  // full getDayNumber() formula at all, just its base case.
  const freshLastUpkeepDay = 1;

  const scavs = carryOver && carryOver.scav
    ? [carryOver.scav, makeScav(), makeScav()] // the kept scav plus 2 fresh recruits, same starting roster size as a vanilla game
    : [makeScav(), makeScav(), makeScav()];

  const stash = { weapon: {}, armor: {}, pack: {} };
  if (carryOver && carryOver.items) {
    for (const { slot, id } of carryOver.items) {
      stash[slot][id] = (stash[slot][id] || 0) + 1;
    }
  }

  return {
    version: 1,
    resources: { scrap: 40, gold: 5, meds: 2, food: 6 },
    scavs,
    upgrades: { infirmary: 0, armory: 0, scoutTower: 0, barracks: 0, workshop: 0, radioTower: 0, farm: 0 },
    activeRaids: [], // { id, scavIds:[], mapId, gearById:{scavId:{}}, startedAt, duration, resolved, pendingEvent, effects:[] }
    log: [],
    rosterCap: 4,
    stash, // { slot: { gearId: count } } — only tier > 0 items are tracked here
    campEvent: null, // { id, triggeredAt } while a camp defense is awaiting a response, otherwise null
    infirmaryQueue: [], // { scavId, startedAt, duration, treatsInjury, treatsRadiation } — scavs currently healing
    restQueue: [], // { scavId, startedAt, duration } — scavs currently resting off morale at the Barracks
    campStartedAt: freshCampStartedAt, // epoch for the day/night cycle's "Day N" counter — see getCampStartedAt
    fleaMarket: null, // { generatedOnDay, offers: [...] } — built lazily the first time the market is opened, see getFleaMarket
    lastUpkeepDay: freshLastUpkeepDay, // last day number upkeep was charged through — see checkDailyUpkeep. Starts at "today" (day 1 for a brand new camp) so a fresh camp doesn't immediately owe a day it never lived through.
    dungeonKeys: {}, // { keyId: count } — see DUNGEON_KEYS / dungeonKeyCount. Separate from `stash` since keys aren't equippable gear, just a consumable unlock.
    gameClockOffset: freshGameClockOffset, // see gameNow() — total real ms the game has spent closed, subtracted out of every elapsed-time calculation. Starts at 0; nothing's been closed yet.
    lastSeenAt: freshCampStartedAt, // see syncGameClockOnLoad — real timestamp of the last moment the game was confirmed open. Same instant as campStartedAt is fine — they're conceptually "now" for a fresh camp either way.
    // The one field that survives a prestige reset on purpose — see
    // applyNgPlusScaling, which reads this to scale every map's risk and
    // the global loot multiplier. A vanilla game (or wipeProgress()) has
    // no carryOver at all, so this is just 0, same as it always was.
    ngPlusLevel: (carryOver && carryOver.ngPlusLevel) || 0,
  };
}
// ===== STATE & PERSISTENCE =====

const STORAGE_KEY = "outpost-save";
let STATE = null;
let selectedScavId = null;
let selectedMapId = null;
let raidScreenOpen = false;
let tickInterval = null;
let activeModalRaid = null;
let raidScreenTab = "region"; // "region" | "dungeons" | "arena" — which tab the raid select screen is showing
let dungeonGroup = []; // array of scavIds, in pick order — mirrors barracksGroup, but dungeons require exactly 3
let selectedDungeonId = null;
let arenaScavId = null; // single scav picked for the arena tab — there's no map to pick, just one fighter

async function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // basic shape guard
      if (parsed && parsed.scavs && parsed.resources) {
        STATE = parsed;
        // Backfill upgrade tracks added after this save was created. Every
        // STATE.upgrades[id] read in the codebase assumes a number, not
        // undefined — purchaseUpgrade in particular does `+= 1` on it with
        // no fallback, so a missing key would silently corrupt into NaN
        // the first time someone tried to build it. Doing it once here
        // covers every read site instead of scattering `|| 0` everywhere.
        if (typeof STATE.upgrades.radioTower !== "number") STATE.upgrades.radioTower = 0;
        // Same backfill, for the Farm — added alongside food/upkeep. An
        // existing camp starts at farm level 0 (not built) and a food
        // stockpile of 0 — it never had food before, so there's nothing
        // to credit it with retroactively. lastUpkeepDay anchors to
        // "today" rather than day 1, for the same reason campStartedAt
        // does above: an old save shouldn't suddenly owe weeks of back
        // upkeep the moment this patch loads.
        if (typeof STATE.upgrades.farm !== "number") STATE.upgrades.farm = 0;
        if (typeof STATE.resources.food !== "number") STATE.resources.food = 0;
        if (typeof STATE.lastUpkeepDay !== "number") STATE.lastUpkeepDay = getDayNumber();
        // Same backfill, for dungeon keys — an existing camp simply never
        // had any, same reasoning as the stash starting empty on a fresh
        // game rather than being credited with anything retroactively.
        if (!STATE.dungeonKeys || typeof STATE.dungeonKeys !== "object") STATE.dungeonKeys = {};
        // Same backfill, for prestige — an existing camp simply hasn't
        // prestiged yet, same as a brand new one.
        if (typeof STATE.ngPlusLevel !== "number") STATE.ngPlusLevel = 0;
        // Backfill for the virtual clock — an existing save has no
        // lastSeenAt to compare against (it predates the concept), so
        // there's no real gap to count retroactively. Seeding it to right
        // now rather than guessing means time simply starts not-advancing
        // while closed from this point forward, instead of trying to
        // reconstruct a "how long was this save sitting closed" figure
        // there's no good way to know.
        if (typeof STATE.gameClockOffset !== "number") STATE.gameClockOffset = 0;
        if (typeof STATE.lastSeenAt !== "number") STATE.lastSeenAt = Date.now();
        // Backfill radiation/morale on every scav from a save that predates
        // these stats — new fields on an existing array element, same
        // problem as the upgrade key above. Fresh scavs start clean (0
        // radiation, full morale) rather than guessing at a history they
        // don't have.
        for (const scav of STATE.scavs) {
          if (typeof scav.radiation !== "number") scav.radiation = 0;
          if (typeof scav.morale !== "number") scav.morale = 100;
        }
        return;
      }
    }
  } catch (e) {
    // no save yet, or corrupted — fall through to fresh state
  }
  STATE = freshState();
  saveState();
}

async function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
  } catch (e) {
    console.error("Save failed:", e);
    pushToast("Couldn't save progress — storage error.", true);
  }
}

function wipeProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Could not clear save:", e);
  }
  STATE = freshState();
  selectedScavId = null;
  selectedMapId = null;
  raidScreenOpen = false;
  saveState();
  pushToast("Progress wiped. Starting fresh.");
  renderAll();
}

// ===== DERIVED HELPERS =====

function getGearItem(slot, id) {
  return GEAR_CATALOG[slot].find((g) => g.id === id) || GEAR_CATALOG[slot][0];
}

function getUpgradeDef(id) {
  return UPGRADE_CATALOG.find((u) => u.id === id);
}

function upgradeCost(def, currentLevel) {
  const mult = Math.pow(def.costMult, currentLevel);
  const cost = {};
  for (const [res, amt] of Object.entries(def.baseCost)) {
    cost[res] = Math.ceil(amt * mult);
  }
  return cost;
}

function canAfford(cost) {
  for (const [res, amt] of Object.entries(cost)) {
    if ((STATE.resources[res] || 0) < amt) return false;
  }
  return true;
}

function spend(cost) {
  for (const [res, amt] of Object.entries(cost)) {
    STATE.resources[res] -= amt;
  }
}

function gearUnlockTier() {
  // armory level gates which tiers can be found on raids: lvl 0 = tier 1 max, lvl N = tier N+1 max
  return STATE.upgrades.armory + 1;
}

// Found gear (from raids) is gated by Armory tier. Improvised gear (crafted
// at the Workshop) is a separate track entirely — it's gated by Workshop
// level instead, regardless of what tier number it happens to share with
// found gear, so a low-Armory camp can still see and use its own crafted
// stopgaps without waiting on a lucky find.
function availableGear(slot) {
  const maxTier = gearUnlockTier();
  const workshopLvl = STATE.upgrades.workshop;
  return GEAR_CATALOG[slot].filter((g) => {
    if (g.unique) return stashCount(slot, g.id) > 0; // only ever shown once you actually have one
    if (g.improvised) return workshopLvl >= (g.minWorkshopLevel || 0);
    return g.tier <= maxTier;
  });
}

// Ensures STATE.stash exists even on saves from before this feature existed.
function getStash() {
  if (!STATE.stash) STATE.stash = { weapon: {}, armor: {}, pack: {} };
  return STATE.stash;
}

// Ensures STATE.infirmaryQueue exists even on saves from before this feature existed.
function getInfirmaryQueue() {
  if (!STATE.infirmaryQueue) STATE.infirmaryQueue = [];
  return STATE.infirmaryQueue;
}

function getRestQueue() {
  if (!STATE.restQueue) STATE.restQueue = [];
  return STATE.restQueue;
}

// ===== VIRTUAL GAME CLOCK =====
// Everything timed in this game (raids, healing, resting, the day/night
// cycle, daily upkeep) used to read elapsed time directly off Date.now(),
// which meant time kept moving even while the tab was closed — reopening
// the game would "catch up" however long you were away. gameNow() is the
// fix: a virtual clock that only advances while the game is actually
// open and ticking, by tracking how much real time has elapsed while it
// was closed (STATE.gameClockOffset) and subtracting that out of every
// elapsed-time calculation. Every startedAt/elapsed computation in the
// game should read from gameNow() instead of Date.now() directly — the
// only things that should still use real Date.now() are id generation
// (doesn't care about game time) and the cosmetic "3 minutes ago" raid
// log, which is genuinely describing real-world time passing, not
// something that should pause.
function gameNow() {
  if (!STATE) return Date.now(); // bootstrapping, before any save exists yet
  if (typeof STATE.gameClockOffset !== "number") STATE.gameClockOffset = 0;
  return Date.now() - STATE.gameClockOffset;
}

// Called once on load (see init()) to fold however long the game was
// closed into the offset, so every timer effectively "paused" for that
// stretch rather than catching up. lastSeenAt is then kept current every
// tick while the game is open (see gameTick), so no gap accumulates
// during an active session — only the time between sessions counts.
function syncGameClockOnLoad() {
  if (typeof STATE.gameClockOffset !== "number") STATE.gameClockOffset = 0;
  if (typeof STATE.lastSeenAt === "number") {
    // Clamped at 0 so a backward system clock change (or a save synced
    // across devices with mismatched clocks) can't ever subtract time
    // and push the offset negative — the worst case is just "no time
    // counted as having passed," never "time ran backward."
    const closedGapMs = Math.max(0, Date.now() - STATE.lastSeenAt);
    STATE.gameClockOffset += closedGapMs;
  }
  STATE.lastSeenAt = Date.now();
}

// Epoch the day/night cycle counts "Day N" from. Saves from before the
// cycle existed never stored this — rather than guessing at a past start
// time (which would make an old save's first reload jump to some
// arbitrary "Day 47"), it's backfilled to right now the first time it's
// read, so an existing camp's count starts fresh at Day 1 going forward.
function getCampStartedAt() {
  if (!STATE.campStartedAt) STATE.campStartedAt = gameNow();
  return STATE.campStartedAt;
}

// How many unequipped copies of this item are sitting in the stash.
function stashCount(slot, id) {
  const item = getGearItem(slot, id);
  if (item.tier === 0) return Infinity; // basics are always available, never tracked
  return getStash()[slot][id] || 0;
}

function addToStash(slot, id, amount = 1) {
  const item = getGearItem(slot, id);
  if (item.tier === 0) return; // no need to track infinite basics
  const stash = getStash();
  stash[slot][id] = (stash[slot][id] || 0) + amount;
}

function removeFromStash(slot, id, amount = 1) {
  const item = getGearItem(slot, id);
  if (item.tier === 0) return true; // basics are free, nothing to remove
  const stash = getStash();
  const have = stash[slot][id] || 0;
  if (have < amount) return false;
  stash[slot][id] = have - amount;
  return true;
}

// ===== WORKSHOP CRAFTING =====
// The Workshop's only craftable items are the improvised tier — scrap-and-
// tape stopgaps, each gated behind its own Workshop level. Crafting spends
// resources straight out of camp stock and adds exactly one copy to the
// shared stash, same as a raid find would; nothing here is ever unlimited.

// All improvised recipes across every slot, flattened into one list with
// their slot attached — convenient for a crafting menu that shows every
// recipe together rather than splitting by weapon/armor/pack tabs.
function allCraftableGear() {
  const out = [];
  for (const slot of ["weapon", "armor", "pack"]) {
    for (const item of GEAR_CATALOG[slot]) {
      if (item.improvised) out.push({ ...item, slot });
    }
  }
  return out;
}

// Recipes the current Workshop level has actually unlocked, regardless of
// whether the player can currently afford them — unlock state and
// affordability are deliberately kept separate so a recipe can still be
// shown (greyed out) rather than disappearing the moment scrap runs low.
function unlockedCraftableGear() {
  const workshopLvl = STATE.upgrades.workshop;
  return allCraftableGear().filter((item) => workshopLvl >= (item.minWorkshopLevel || 0));
}

// Crafts one copy of an improvised item: spends its resource cost and adds
// it to the shared stash. Returns false (no state change) if the recipe
// isn't unlocked yet or the camp can't afford it.
function craftGear(slot, gearId) {
  const item = getGearItem(slot, gearId);
  if (!item.improvised) return false;
  const workshopLvl = STATE.upgrades.workshop;
  if (workshopLvl < (item.minWorkshopLevel || 0)) return false;
  if (!canAfford(item.craftCost)) return false;
  spend(item.craftCost);
  addToStash(slot, gearId, 1);
  saveState();
  return true;
}

// Swaps a scav's gear in one slot: returns their old item to the stash,
// pulls the new one out of it. Fails (and changes nothing) if the new
// item isn't actually available. Equipping the same item already worn
// is a no-op success.
function equipGear(scav, slot, newId) {
  const currentId = scav.gear[slot];
  if (currentId === newId) return true;
  if (stashCount(slot, newId) < 1) return false;
  removeFromStash(slot, newId, 1);
  addToStash(slot, currentId, 1); // old gear goes back to the shared stash
  scav.gear[slot] = newId;
  return true;
}

function raidDurationMult() {
  return 1 - STATE.upgrades.workshop * 0.08;
}

function lootYieldMult() {
  return 1 + STATE.upgrades.scoutTower * 0.06;
}

// ===== INFIRMARY: HEAL-OVER-TIME =====
// Sending an injured scav to the Infirmary takes them off the roster (same
// as being on a raid) for a stretch of time, then returns them at full HP.
// Time scales with how much HP they're missing — more missing HP takes
// longer — and is cut down by the Infirmary's level, same way Workshop
// speeds up raid timers.

const INFIRMARY_BASE_SECONDS = 90; // time to heal a scav from 0 HP to full, at infirmary level 0
const INFIRMARY_REDUCTION_PER_LEVEL = 0.15; // -15% heal time per level
const INFIRMARY_MIN_SECONDS = 8; // floor, so even a high-level infirmary isn't instant

function infirmaryTimeMult() {
  return Math.max(0.25, 1 - STATE.upgrades.infirmary * INFIRMARY_REDUCTION_PER_LEVEL);
}

// How long (in seconds) it would take to fully heal this scav right now,
// given their current missing HP and the infirmary's current level.
function healDuration(scav) {
  const missingFraction = 1 - scav.hp / scav.maxHp;
  const skills = scavSkillBonuses(scav);
  const raw = missingFraction * INFIRMARY_BASE_SECONDS * infirmaryTimeMult() * skills.healTimeMult;
  return Math.max(INFIRMARY_MIN_SECONDS, Math.round(raw));
}

// Meds cost to send this scav to heal, scaled the same way duration is —
// a scav who's barely hurt costs barely anything, a scav at death's door
// costs the full amount. Rounded up so any real injury costs at least 1
// med rather than rounding down to free.
const INFIRMARY_MAX_MEDS_COST = 3; // cost to heal a scav from 0 HP to full
function healMedsCost(scav) {
  const missingFraction = 1 - scav.hp / scav.maxHp;
  if (missingFraction <= 0) return 0;
  return Math.max(1, Math.ceil(missingFraction * INFIRMARY_MAX_MEDS_COST));
}

// Radiation treatment duration/cost mirrors healDuration/healMedsCost
// exactly — same base seconds, same max meds cost, same infirmary level
// speedup — just driven by how much of RADIATION_CAP is currently built
// up instead of how much HP is missing. A scav can owe both costs at
// once; sendToInfirmary below adds them together rather than picking one.
function radiationTreatDuration(scav) {
  const fraction = scav.radiation / RADIATION_CAP;
  if (fraction <= 0) return 0;
  const skills = scavSkillBonuses(scav);
  const raw = fraction * INFIRMARY_BASE_SECONDS * infirmaryTimeMult() * skills.healTimeMult;
  return Math.max(INFIRMARY_MIN_SECONDS, Math.round(raw));
}

function radiationTreatMedsCost(scav) {
  const fraction = scav.radiation / RADIATION_CAP;
  if (fraction <= 0) return 0;
  return Math.max(1, Math.ceil(fraction * INFIRMARY_MAX_MEDS_COST));
}

// Sends a ready scav to the infirmary for whatever ails them — a regular
// injury, radiation, or both at once if they've got both. One trip
// covers everything that's wrong rather than making the player run two
// separate visits for two separate numbers; duration is whichever
// treatment takes longer (they're being looked after, not queued twice),
// meds cost is the sum of both. Fails silently (returns false) if
// they're not eligible — not ready, nothing to treat, or the camp can't
// afford the meds.
function sendToInfirmary(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status !== "ready") return false;
  const needsHeal = scav.hp < scav.maxHp;
  const needsRadiation = scav.radiation > 0;
  if (!needsHeal && !needsRadiation) return false;

  const medsCost = healMedsCost(scav) + radiationTreatMedsCost(scav);
  if (!canAfford({ meds: medsCost })) return false;
  spend({ meds: medsCost });

  const duration = Math.max(healDuration(scav), radiationTreatDuration(scav));
  getInfirmaryQueue().push({
    scavId, startedAt: gameNow(), duration,
    treatsInjury: needsHeal, treatsRadiation: needsRadiation,
  });
  scav.status = "healing";
  saveState();
  return true;
}

// Pulls a scav back out of the infirmary early, with no healing applied —
// an escape hatch in case they're needed for something urgent.
function recallFromInfirmary(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav) return false;
  const queue = getInfirmaryQueue();
  const idx = queue.findIndex((e) => e.scavId === scavId);
  if (idx === -1) return false;
  queue.splice(idx, 1);
  scav.status = "ready";
  saveState();
  return true;
}

// Checked every game tick, same as raid completions: resolves any scav
// whose heal timer has elapsed, clearing whichever of injury/radiation
// that trip was actually treating (an entry from before this distinction
// existed has neither flag set — treat that the same as a pure injury
// visit, the only thing the infirmary used to do, so an in-progress
// heal from an older save still resolves sensibly after this update).
function checkInfirmaryCompletions() {
  const queue = getInfirmaryQueue();
  if (queue.length === 0) return false;
  const now = gameNow();
  let changed = false;
  for (const entry of queue) {
    const elapsed = (now - entry.startedAt) / 1000;
    if (elapsed >= entry.duration) {
      const scav = STATE.scavs.find((s) => s.id === entry.scavId);
      if (scav) {
        const treatsInjury = entry.treatsInjury !== false; // undefined (legacy entry) -> true
        const treatsRadiation = !!entry.treatsRadiation;
        if (treatsInjury) scav.hp = scav.maxHp;
        if (treatsRadiation) scav.radiation = 0;
        scav.status = "ready";
      }
      entry.done = true;
      changed = true;
    }
  }
  if (changed) {
    STATE.infirmaryQueue = queue.filter((e) => !e.done);
    saveState();
  }
  return changed;
}

// ===== RADIATION =====
// A scav's `radiation` stat (0-RADIATION_CAP) eats into their effective
// max HP without touching the real maxHp leveling grows — see
// effectiveMaxHp(). Gained as a chance on any successful raid (a small
// background rate everywhere, much higher on maps flagged `radioactive`
// in MAPS), and treated at the Infirmary alongside or instead of a
// regular injury — see sendToInfirmary/checkInfirmaryCompletions.
const RADIATION_CAP = 40;
const RADIATION_CHANCE_BASE = 0.05;
const RADIATION_CHANCE_PER_RISK = 0.035; // per point of riskMult above 1
const RADIATION_CHANCE_RADIOACTIVE_BONUS = 0.18;
const RADIATION_EXPOSURE_MIN = 4;
const RADIATION_EXPOSURE_MAX = 12;

function radiationChance(map) {
  let chance = RADIATION_CHANCE_BASE + (map.riskMult - 1) * RADIATION_CHANCE_PER_RISK;
  if (map.radioactive) chance += RADIATION_CHANCE_RADIOACTIVE_BONUS;
  return Math.min(0.6, chance);
}

// A scav's usable max HP right now — their real, level-grown maxHp minus
// whatever radiation hasn't been treated yet. Every place that used to
// read scav.maxHp for a percentage or an odds calculation (the HP bars,
// hpClass, calcOdds's hpFactor) reads this instead, so a irradiated scav's
// HP bar genuinely tops out lower rather than just looking like a scav
// who's taken damage. scav.maxHp itself is never touched by radiation —
// it stays exactly what leveling and Thick Skin have earned.
function effectiveMaxHp(scav) {
  return Math.max(1, scav.maxHp - scav.radiation);
}

// ===== MORALE =====
// A scav's `morale` stat (0-100) drops a little on every resolved raid
// they come back from (rougher maps wear on it faster) and pulls down
// loot yield the lower it gets — see moraleLootFactor(). Purely a loot
// penalty, not a survival one, and free to rest off at the Barracks
// (unlike radiation, no meds involved) — see sendToRest.
const MORALE_DROP_BASE = 4;
const MORALE_DROP_PER_RISK = 1.5; // per point of riskMult above 1

function moraleDropForMap(map) {
  return Math.round(MORALE_DROP_BASE + (map.riskMult - 1) * MORALE_DROP_PER_RISK);
}

// Same 0.7-1.0 shape as calcOdds's hpFactor penalty on survival — full
// morale is neutral, burnt-out morale costs up to 30% of loot yield.
function moraleLootFactor(scav) {
  return 0.7 + 0.3 * (scav.morale / 100);
}

// Resting off morale at the Barracks — same "missing fraction" shape as
// healDuration, but free (no meds, no resource cost at all) and not
// sped up by the Barracks' own level, which only ever grows roster
// size/group cap. A scav at 0 morale takes the longest rest; full morale
// has nothing to recover and never gets a queue entry in the first place.
const BARRACKS_REST_BASE_SECONDS = 70;
const BARRACKS_REST_MIN_SECONDS = 6;

function restDuration(scav) {
  const missingFraction = 1 - scav.morale / 100;
  if (missingFraction <= 0) return 0;
  const raw = missingFraction * BARRACKS_REST_BASE_SECONDS;
  return Math.max(BARRACKS_REST_MIN_SECONDS, Math.round(raw));
}

// Sends a ready scav to rest at the Barracks. Fails silently (returns
// false) if they're not eligible — not ready, or already at full morale.
function sendToRest(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status !== "ready" || scav.morale >= 100) return false;
  const duration = restDuration(scav);
  getRestQueue().push({ scavId, startedAt: gameNow(), duration });
  scav.status = "resting";
  saveState();
  return true;
}

// Pulls a scav back out of the Barracks early, with no morale recovered —
// same escape hatch recallFromInfirmary offers for an interrupted heal.
function recallFromRest(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav) return false;
  const queue = getRestQueue();
  const idx = queue.findIndex((e) => e.scavId === scavId);
  if (idx === -1) return false;
  queue.splice(idx, 1);
  scav.status = "ready";
  saveState();
  return true;
}

// Checked every game tick, same as checkInfirmaryCompletions: resolves
// anyone whose rest timer has elapsed back to full morale and "ready".
function checkRestCompletions() {
  const queue = getRestQueue();
  if (queue.length === 0) return false;
  const now = gameNow();
  let changed = false;
  for (const entry of queue) {
    const elapsed = (now - entry.startedAt) / 1000;
    if (elapsed >= entry.duration) {
      const scav = STATE.scavs.find((s) => s.id === entry.scavId);
      if (scav) {
        scav.morale = 100;
        scav.status = "ready";
      }
      entry.done = true;
      changed = true;
    }
  }
  if (changed) {
    STATE.restQueue = queue.filter((e) => !e.done);
    saveState();
  }
  return changed;
}

function scavCombatPower(scav, gear) {
  const w = getGearItem("weapon", gear.weapon);
  const a = getGearItem("armor", gear.armor);
  const levelBonus = (scav.level - 1) * 4;
  const skills = scavSkillBonuses(scav);
  return {
    combat: w.combat + levelBonus + skills.combatPower,
    defense: a.defense + levelBonus,
  };
}

function calcOdds(scav, map, gear) {
  const power = scavCombatPower(scav, gear);
  const skills = scavSkillBonuses(scav);
  const survivalBase = 0.94 - (map.riskMult - 1) * 0.13;
  const gearBonus = (power.combat + power.defense) * 0.0035;
  const hpFactor = scav.hp / effectiveMaxHp(scav);
  let survival = survivalBase + gearBonus + skills.survivalAdd;
  survival *= 0.7 + 0.3 * hpFactor; // hurt scavs are more likely to die
  survival = Math.max(0.05, Math.min(0.97, survival));

  const pack = getGearItem("pack", gear.pack);
  const lootMult = (1 + pack.lootBonus) * lootYieldMult() * skills.lootMult * moraleLootFactor(scav);

  return { survival, lootMult };
}

// Group raids (2-3 scavs together): survival is the average of everyone's
// individual odds, plus a flat per-extra-member bonus — they watch each
// other's backs out there. Loot scales up too: more hands carry back more,
// on top of whatever pack bonuses each member is already getting.
const GROUP_SURVIVAL_BONUS_PER_EXTRA = 0.06;
const GROUP_LOOT_BONUS_PER_EXTRA = 0.25;

function calcGroupOdds(scavs, map, gearById) {
  const individual = scavs.map((scav) => calcOdds(scav, map, gearById[scav.id]));
  const avgSurvival = individual.reduce((sum, o) => sum + o.survival, 0) / individual.length;
  const extraMembers = scavs.length - 1;
  const survival = Math.max(0.05, Math.min(0.97, avgSurvival + extraMembers * GROUP_SURVIVAL_BONUS_PER_EXTRA));

  const avgLootMult = individual.reduce((sum, o) => sum + o.lootMult, 0) / individual.length;
  const lootMult = avgLootMult * (1 + extraMembers * GROUP_LOOT_BONUS_PER_EXTRA);

  return { survival, lootMult, perScavOdds: individual };
}

function rollLoot(map, lootMult) {
  const loot = {};
  for (const [res, range] of Object.entries(map.lootTable)) {
    const base = randInt(range[0], range[1]);
    const amt = Math.round(base * lootMult);
    if (amt > 0) loot[res] = amt;
  }
  return loot;
}

// Chance of finding a piece of gear on a successful raid, scaled by map
// danger — used both by rollGearFind itself and by the raid select screen,
// so the displayed odds can never drift out of sync with the real roll.
function gearFindChance(map) {
  return 0.02 + (map.riskMult - 1) * 0.04;
}

// Small chance to find a piece of gear on a successful raid. Scales with
// map danger: ~2% on the calmest map up to ~14% on the most extreme one.
// Found gear goes straight into the shared camp stash as +1 copy — gear is
// consumed when equipped, so duplicates are genuinely useful, not wasted.
// Pass forceFind to skip the chance roll entirely (a raid event option can
// guarantee a find as its reward for the time/risk spent getting it).
function rollGearFind(map, forceFind = false) {
  const findChance = gearFindChance(map);
  if (!forceFind && Math.random() >= findChance) return null;

  const slot = pick(["weapon", "armor", "pack"]);
  const maxTier = gearUnlockTier();
  // Improvised gear is craft-only at the Workshop, and unique boss drops only
  // ever come from resolveBossKillDrop — both excluded from every pool below
  // regardless of tier.
  const findable = GEAR_CATALOG[slot].filter((g) => !g.improvised && !g.unique);
  // Bias toward tiers the camp can already use; rare chance of one tier above.
  const reachableTiers = findable.filter((g) => g.tier > 0 && g.tier <= maxTier);
  // Several items can now share the same tier (side-grades), so "one tier
  // above" is a pool too, not a single item — pick() over it spreads finds
  // across all of them instead of always handing back the same one.
  const stretchPool = findable.filter((g) => g.tier === maxTier + 1);
  const bestReachableTier = reachableTiers.length ? Math.max(...reachableTiers.map((g) => g.tier)) : 0;
  const topTierPool = reachableTiers.filter((g) => g.tier === bestReachableTier);
  const pool = topTierPool.length ? topTierPool : findable.filter((g) => g.tier > 0);
  if (!pool.length && !stretchPool.length) return null;

  let found;
  if (stretchPool.length && Math.random() < 0.15) {
    found = pick(stretchPool);
  } else if (pool.length) {
    found = pick(pool); // a random item from the best tier currently reachable
  } else {
    found = pick(stretchPool);
  }
  if (!found) return null;

  const hadBefore = stashCount(slot, found.id) > 0;
  addToStash(slot, found.id, 1);
  const newCount = stashCount(slot, found.id);
  return { slot, item: found, hadBefore, newCount };
}

// ===== CAMP DEFENSE EVENT =====

// Success odds climb with each defender committed, but never reach a sure
// thing — even the whole roster thrown at it leaves some risk. Zero
// defenders is a real gamble, by design.
function calcDefenseOdds(defenderCount) {
  const base = 0.2;
  const perDefender = 0.13;
  return Math.min(0.92, base + defenderCount * perDefender);
}

// Locks the chosen scavs in as defenders (status -> "defending", so they
// drop out of every raid/loadout picker automatically) and rolls the
// outcome immediately. Returns the result so the UI can show it.
function resolveCampDefense(defenderIds) {
  const defenders = STATE.scavs.filter((s) => defenderIds.includes(s.id) && s.status === "ready");
  defenders.forEach((s) => { s.status = "defending"; });

  const odds = calcDefenseOdds(defenders.length);
  const success = Math.random() < odds;

  let result = { success, defenderNames: defenders.map((s) => s.name) };

  if (!success) {
    const lost = spendClamped({
      scrap: randInt(10, 25),
      meds: randInt(1, 3),
      gold: randInt(2, 6),
    });
    result.lost = lost;
    defenders.forEach((s) => { s.hp = 1; });
  }

  defenders.forEach((s) => { s.status = "ready"; });
  STATE.campEvent = null;
  saveState();
  return result;
}

// Like spend(), but clamps every amount to what's actually in the
// stockpile — never goes negative — and returns what was actually taken
// (which may be less than requested) so the UI can report it accurately.
function spendClamped(amounts) {
  const taken = {};
  for (const [res, amt] of Object.entries(amounts)) {
    const have = STATE.resources[res] || 0;
    const actual = Math.min(have, amt);
    if (actual > 0) {
      STATE.resources[res] = have - actual;
      taken[res] = actual;
    }
  }
  return taken;
}



// Launches a raid with 1-3 scavs (regular maps) or exactly 3 (dungeons —
// see map.dungeon below). Each scav's gear is snapshotted at launch time
// (re-equipping someone after they've left doesn't retroactively change
// what they took with them). Duration is set by the slowest map
// regardless of group size — they travel together.
function launchRaid(scavIds, mapId) {
  const ids = Array.isArray(scavIds) ? scavIds : [scavIds];
  const map = MAPS.find((m) => m.id === mapId);
  if (!map) return false;

  if (map.dungeon) {
    // Dungeons are never a solo or 2-person trip — the group bonus to
    // survival is part of what makes these survivable at all, so the
    // requirement is exact, not just "up to 3" like every other map.
    if (ids.length !== 3) return false;
    if (dungeonKeyCount(map.requiresKey) < 1) return false;
  } else if (map.arena) {
    // The arena is one scav, one fight — there's no group bonus to gain
    // and no group to share the spot with; it's a personal tournament
    // entry, not a raid party.
    if (ids.length !== 1) return false;
  } else {
    if (ids.length < 1 || ids.length > 3) return false;
  }

  const scavs = ids.map((id) => STATE.scavs.find((s) => s.id === id));
  if (scavs.some((s) => !s || s.status !== "ready")) return false;

  // Key is spent the moment the raid actually launches, win or lose —
  // same "cost is paid at commitment, not at success" rule as every
  // resource spent elsewhere in the game. Checked again right before
  // spending (rather than trusting the check above) so two near-
  // simultaneous launch attempts can't both pass the count check and
  // then both try to spend the same last key.
  if (map.dungeon && !removeDungeonKey(map.requiresKey, 1)) return false;

  const gearById = {};
  scavs.forEach((s) => { gearById[s.id] = { ...s.gear }; });

  // The arena's fight clock is fixed — a tournament runs on its own
  // schedule, not something a Workshop upgrade has any business
  // shortening — so it skips raidDurationMult() entirely rather than
  // just happening to use a multiplier of 1 today.
  const duration = map.arena ? map.duration : Math.max(8, Math.round(map.duration * raidDurationMult()));
  const raid = {
    id: `raid_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    scavIds: ids,
    mapId,
    gearById,
    startedAt: gameNow(),
    duration,
    resolved: false,
    pendingEvent: null, // { eventId, firedAt } while a mid-raid event is awaiting a response
    pendingBoss: null, // { firedAt } while a boss encounter is awaiting a response
    // Dungeons always get their boss fight — guaranteed, not the normal
    // rare roll — on top of (not instead of) a regular hazard/enemy
    // event. See checkRaidEvents/checkBossEncounters for how the two
    // staying independent for dungeons specifically is handled. The
    // arena never has a boss at all — getBossForMap('arena') has nothing
    // to return anyway, but skipping the roll outright is clearer than
    // relying on that null-guard elsewhere to quietly do nothing.
    bossEncountered: map.dungeon ? true : (map.arena ? false : rollBossEncounter()), // decided once, up front — see BOSS_CHANCE_PER_RAID
    bossFired: false, // whether the pending boss encounter has already been triggered this raid
    nightRaid: isNightNow(), // locked in at launch, same reasoning as bossEncountered — see NIGHT_LOOT_MULT/NIGHT_ENEMY_EVENT_WEIGHT
    effects: [], // accumulated consequences from event choices, applied at resolution
    eventLog: [], // { eventTitle, optionLabel } history, shown in the field report
  };
  scavs.forEach((s) => { s.status = "away"; });
  STATE.activeRaids.push(raid);
  saveState();
  return true;
}

function checkRaidCompletions() {
  const now = gameNow();
  let changed = false;
  for (const raid of STATE.activeRaids) {
    if (raid.resolved) continue;
    const elapsed = (now - raid.startedAt) / 1000;
    if (elapsed >= raid.duration) {
      resolveRaid(raid);
      changed = true;
    }
  }
  if (changed) {
    STATE.activeRaids = STATE.activeRaids.filter((r) => !r.resolved);
    saveState();
  }
  return changed;
}

// Rolls, once per tick, for a new mid-raid event on any raid that doesn't
// already have one pending and hasn't had one yet this trip (capped at one
// per raid so a longer raid doesn't turn into a string of pop-ups). Skipped
// in the raid's last 15% of runtime so a choice never lands with no time
// left to matter, and skipped entirely once the raid is set to abort early
// from a previous choice.
const RAID_EVENT_CHANCE_PER_TICK = 0.012;

// Night raids (decided once at launch — see launchRaid's nightRaid flag)
// run a little richer and a little nastier than the same trip in daylight:
// better hauls, because the loot is the whole reason to go out after dark,
// balanced by hostile encounters (the `enemy: true` events in RAID_EVENTS)
// showing up more often than environmental hazards do. The overall chance
// an event fires at all on a given tick doesn't change — only, when one
// does fire on a night raid, how much more likely it is to be an enemy
// rather than a hazard. That keeps "more enemies at night" from quietly
// also becoming "more events of every kind at night".
const NIGHT_LOOT_MULT = 1.2; // +20% loot on a raid that launched at night
const NIGHT_ENEMY_EVENT_WEIGHT = 3; // how much more likely an enemy event is to be the one picked, vs. a hazard, once an event fires at night

// Picks one event from the eligible pool, weighting enemy encounters
// heavier than hazards when atNight is true. Plain unweighted pick()
// otherwise — same behavior as before night raids existed.
function pickRaidEvent(pool, atNight) {
  if (!atNight) return pick(pool);
  const weighted = [];
  for (const event of pool) {
    const weight = event.enemy ? NIGHT_ENEMY_EVENT_WEIGHT : 1;
    for (let i = 0; i < weight; i++) weighted.push(event);
  }
  return pick(weighted);
}

function checkRaidEvents() {
  let fired = false;
  for (const raid of STATE.activeRaids) {
    if (raid.resolved || raid.pendingEvent || raid.eventLog.length > 0) continue;
    const map = MAPS.find((m) => m.id === raid.mapId);
    if (!map) continue;
    // A raid with a boss anywhere in its future (whether it's already
    // fired, is currently pending a response, or hasn't shown up yet)
    // never also rolls a regular event on every map except dungeons —
    // there, the boss is guaranteed rather than the rare exception, so
    // it's deliberately additive: a dungeon raid can still pull a normal
    // hazard/enemy event on top of the boss fight it was always going to
    // get, instead of the boss crowding out the regular event roll the
    // way it does everywhere else.
    if (raid.bossEncountered && !map.dungeon) continue;
    const elapsed = (gameNow() - raid.startedAt) / 1000;
    if (elapsed >= raid.duration * 0.85) continue;
    const pool = eligibleRaidEvents(map);
    if (!pool.length) continue;
    if (Math.random() < RAID_EVENT_CHANCE_PER_TICK) {
      raid.pendingEvent = { eventId: pickRaidEvent(pool, raid.nightRaid).id, firedAt: gameNow() };
      fired = true;
    }
  }
  if (fired) saveState();
  return fired;
}

// Triggers the boss fight for any raid that rolled one at launch
// (bossEncountered) and hasn't fired it yet. Fires somewhere in the
// middle third of the raid rather than right at the start or the very
// end — early enough that a "break off and run" choice still means
// something, late enough that it feels like it was building to this.
function checkBossEncounters() {
  let fired = false;
  for (const raid of STATE.activeRaids) {
    if (raid.resolved || !raid.bossEncountered || raid.bossFired || raid.pendingBoss) continue;
    const elapsed = (gameNow() - raid.startedAt) / 1000;
    const progress = elapsed / raid.duration;
    if (progress < 0.3 || progress > 0.75) continue;
    raid.pendingBoss = { firedAt: gameNow() };
    raid.bossFired = true;
    fired = true;
  }
  if (fired) saveState();
  return fired;
}

// Applies a chosen option for a raid's pending event. Time and abort
// effects take hold immediately (they're visible on the radio log right
// away); everything else is queued onto raid.effects and read later by
// resolveRaid, since survival/loot/injury odds only make sense to apply
// once, at the moment the raid actually resolves.
// Applies an option's effect to a raid's immediate, observable state (time
// remaining, early abort) and queues anything else onto raid.effects for
// resolveRaid to read at the end. Shared by regular events and boss fights
// so the two stay perfectly in sync — a boss fight is just an event with
// bigger numbers, not a separate code path that could drift from this one.
function applyRaidEffect(raid, effect) {
  if (typeof effect.timeAddSec === "number") {
    const elapsed = (gameNow() - raid.startedAt) / 1000;
    const remaining = Math.max(0, raid.duration - elapsed);
    const newRemaining = Math.max(2, remaining + effect.timeAddSec); // always leave at least a couple seconds
    raid.duration = elapsed + newRemaining;
  }
  if (effect.abortNow) {
    // Set duration to exactly the elapsed time so far — checkRaidCompletions
    // resolves as soon as elapsed >= duration, which is true the moment the
    // next tick runs (elapsed only grows from here). No floor here: aborting
    // 1 second into a raid should resolve 1 second from now, not artificially
    // wait out a minimum.
    raid.duration = (gameNow() - raid.startedAt) / 1000;
  }
  // Everything else (survivalAdd, lootMult, injuryRiskAdd, forceGearFind)
  // rides along on raid.effects for resolveRaid to read at the end.
  const { timeAddSec, abortNow, ...deferred } = effect;
  if (Object.keys(deferred).length) {
    raid.effects.push(deferred);
  }
}

function resolveRaidEventChoice(raidId, optionIndex) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || !raid.pendingEvent) return false;
  const eventDef = getRaidEvent(raid.pendingEvent.eventId);
  const option = eventDef && eventDef.options[optionIndex];
  if (!option) return false;

  raid.eventLog.push({ eventTitle: eventDef.title, optionLabel: option.label });
  applyRaidEffect(raid, option.effect || {});

  raid.pendingEvent = null;
  saveState();
  return true;
}

// Same shape as resolveRaidEventChoice, but for the rarer boss encounter:
// reads from raid.pendingBoss instead, and logs into raid.bossLog so the
// field report can call the fight out by the boss's actual name rather
// than folding it into the regular event log.
function resolveBossEncounterChoice(raidId, optionIndex) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || !raid.pendingBoss) return false;
  const boss = getBossForMap(raid.mapId);
  const option = boss && bossEncounterOptions(boss)[optionIndex];
  if (!option) return false;

  raid.bossLog = { bossName: boss.name, optionLabel: option.label, mapId: raid.mapId, isFlee: !!option.isFlee };
  applyRaidEffect(raid, option.effect || {});

  raid.pendingBoss = null;
  saveState();
  return true;
}

// Rolls for a boss's unique gear drop. Only ever called when the raid's
// boss encounter was actually fought (not fled) and the raid came back a
// success — "killed in raid" in this game's terms, since bosses don't have
// a separate HP/death state of their own, just the same fight/flee choice
// every boss encounter resolves through. A flat, low chance per kill, same
// spirit as gearFindChance but deliberately not scaled by anything — these
// are meant to stay rare even once a camp is fully built out.
function resolveBossKillDrop(raid) {
  if (!raid.bossLog || raid.bossLog.isFlee) return null;
  const drop = getBossUniqueForMap(raid.bossLog.mapId);
  if (!drop) return null;
  if (Math.random() >= BOSS_UNIQUE_DROP_CHANCE) return null;
  const hadBefore = stashCount(drop.slot, drop.id) > 0;
  addToStash(drop.slot, drop.id, 1);
  return { slot: drop.slot, item: drop, hadBefore };
}

// Separate from resolveBossKillDrop above: a dungeon boss kill also gets
// its own small, independent chance to drop a fresh key to that same
// dungeon — the only way to fund a future run other than the flea
// market's much rarer listing (see rollFleaOffer's keySell kind). Rolled
// on its own rather than folded into BOSS_UNIQUE_DROP_CHANCE so getting
// the gear unique and getting a key back are two separate strokes of
// luck, not one shared roll standing in for both.
const DUNGEON_KEY_DROP_CHANCE = 0.1; // chance per dungeon boss kill
function resolveDungeonKeyDrop(raid, map) {
  if (!map || !map.dungeon) return null;
  if (!raid.bossLog || raid.bossLog.isFlee) return null;
  if (Math.random() >= DUNGEON_KEY_DROP_CHANCE) return null;
  addDungeonKey(map.requiresKey, 1);
  return { keyId: map.requiresKey, key: getDungeonKeyDef(map.requiresKey) };
}

// ===== ARENA (fixed-length tournament fight) =====
// A genuinely different shape from every other raid in the game: one
// scav, a fixed-length fight with no mid-raid events (see eligibleRaidEvents'
// noEvents check) and no boss, and a flat win/lose roll instead of the
// usual gear/skill-modified survival formula. No risk either way — the
// scav always comes home — so there's no injury, radiation, or morale
// hit to apply regardless of the outcome, and no consolation prize for
// losing: it's the tournament reward on a win, or nothing.
// ARENA_WIN_CHANCE/ARENA_GOLD_MIN/ARENA_GOLD_MAX are declared up near
// MAPS.push(...ARENAS) instead of here, as `let` rather than `const` —
// applyNgPlusScaling() adjusts them per prestige level, and they need to
// exist before the NG+ base-value snapshot reads their starting numbers.

function resolveArenaRaid(raid, map) {
  raid.resolved = true;
  const scav = STATE.scavs.find((s) => s.id === raid.scavIds[0]);
  if (!scav) return;

  const won = Math.random() < ARENA_WIN_CHANCE;
  const outcome = {
    isGroup: false,
    map,
    arena: true,
    scavName: scav.name,
    scavNames: [scav.name],
    survived: true, // always comes home — see the block comment above
    won,
    perScav: [{ name: scav.name, survived: true }],
    eventLog: [],
    bossLog: null,
    nightRaid: false, // the tournament runs on its own schedule, not the day/night cycle
  };

  if (won) {
    outcome.loot = { gold: randInt(ARENA_GOLD_MIN, ARENA_GOLD_MAX) };
    STATE.resources.gold = (STATE.resources.gold || 0) + outcome.loot.gold;
    // Guaranteed gear on a win, same rollGearFind everything else in the
    // game uses for a find — forceFind:true skips the normal per-map
    // gearFindChance roll, since the win itself is already the rare part.
    const gearFind = rollGearFind(map, true);
    if (gearFind) outcome.gearFind = gearFind;
  }

  scav.status = "ready";
  scav.raidsCompleted += 1;
  // Still earns XP either way — entering the tournament is the effort,
  // win or lose — at the same rate the riskMult-based formula would give
  // for a site this "dangerous" on paper, even though nothing here can
  // actually hurt them.
  scav.xp += 10 + Math.round(map.riskMult * 5);
  const xpNeeded = scav.level * 30;
  let leveledUp = false;
  if (scav.xp >= xpNeeded) {
    scav.level += 1;
    scav.xp = 0;
    scav.maxHp += 8;
    scav.hp = effectiveMaxHp(scav);
    leveledUp = true;
  }
  outcome.perScav[0].leveledUp = leveledUp;
  outcome.leveledUp = leveledUp;
  outcome.died = false;
  outcome.injured = false;

  STATE.log.unshift({ ts: Date.now(), outcome });
  STATE.log = STATE.log.slice(0, 30);
  activeModalRaid = { raid, outcome };
}

function resolveRaid(raid) {
  raid.resolved = true;
  const map = MAPS.find((m) => m.id === raid.mapId);
  const scavs = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  if (!scavs.length || !map) return;

  if (map.arena) {
    resolveArenaRaid(raid, map);
    return;
  }

  const isGroup = scavs.length > 1;
  const { survival, lootMult } = calcGroupOdds(scavs, map, raid.gearById);

  // Fold in whatever the player's mid-raid choices added up to. Effects
  // accumulate (a raid only ever gets one event right now, but this stays
  // correct if that cap is ever lifted) and are clamped at the edges same
  // as the base odds — a string of bad calls can hurt your odds, but never
  // past the same floor/ceiling the base formula already respects.
  const effects = raid.effects || [];
  const survivalAdd = effects.reduce((sum, e) => sum + (e.survivalAdd || 0), 0);
  const lootEffectMult = effects.reduce((mult, e) => mult * (e.lootMult ?? 1), 1);
  const injuryRiskAdd = effects.reduce((sum, e) => sum + (e.injuryRiskAdd || 0), 0);
  const forceGearFind = effects.some((e) => e.forceGearFind);

  const adjustedSurvival = Math.max(0.05, Math.min(0.97, survival + survivalAdd));
  const nightLootMult = raid.nightRaid ? NIGHT_LOOT_MULT : 1;
  const adjustedLootMult = lootMult * lootEffectMult * nightLootMult;

  // Each scav rolls independently against the shared (group-boosted) odds,
  // so a 3-person raid can come back with partial losses rather than
  // succeeding or failing as one unit.
  const perScav = scavs.map((scav) => {
    const survived = Math.random() < adjustedSurvival;
    return { scav, survived };
  });

  const anySurvived = perScav.some((p) => p.survived);
  let outcome = {
    isGroup,
    map,
    scavName: scavs[0].name, // kept for any code path that only knows about one scav
    scavNames: scavs.map((s) => s.name),
    survived: anySurvived,
    perScav: [],
    eventLog: raid.eventLog || [],
    bossLog: raid.bossLog || null,
    nightRaid: !!raid.nightRaid,
  };

  // Loot and gear finds happen once for the raid (whatever the group
  // collectively carries back), but only if at least one member makes it
  // out — a total wipe brings nothing home.
  if (anySurvived) {
    const loot = rollLoot(map, adjustedLootMult);
    for (const [res, amt] of Object.entries(loot)) {
      STATE.resources[res] = (STATE.resources[res] || 0) + amt;
    }
    outcome.loot = loot;

    const gearFind = rollGearFind(map, forceGearFind);
    if (gearFind) outcome.gearFind = gearFind;

    const bossDrop = resolveBossKillDrop(raid);
    if (bossDrop) outcome.bossDrop = bossDrop;

    const keyDrop = resolveDungeonKeyDrop(raid, map);
    if (keyDrop) outcome.keyDrop = keyDrop;
  }

  for (const { scav, survived } of perScav) {
    const detail = { name: scav.name, survived };
    if (survived) {
      const skills = scavSkillBonuses(scav);
      // chance of injury even on success, scaled by risk
      const injuryRoll = Math.random();
      const injuryChance = Math.max(0, Math.min(0.9, (0.15 + (map.riskMult - 1) * 0.1 + injuryRiskAdd) * skills.injuryChanceMult));
      if (injuryRoll < injuryChance) {
        const sevRoll = randInt(15, 40) * skills.injurySeverityMult;
        scav.hp = Math.max(5, Math.round(scav.hp - sevRoll));
        detail.injured = true;
        detail.hpLost = Math.round(sevRoll);
      } else {
        detail.injured = false;
      }
      // Independent roll for radiation exposure — a background rate on
      // every map, much higher on ones flagged `radioactive`. Stacks with
      // whatever radiation a scav is already carrying, capped so it can
      // never reduce their effective max HP below 1.
      if (Math.random() < radiationChance(map)) {
        const exposure = randInt(RADIATION_EXPOSURE_MIN, RADIATION_EXPOSURE_MAX);
        scav.radiation = Math.min(RADIATION_CAP, scav.radiation + exposure);
        scav.hp = Math.min(scav.hp, effectiveMaxHp(scav)); // ceiling just dropped — never leave hp above it
        detail.irradiated = true;
        detail.radiationGained = exposure;
      }
      // Morale takes a hit on every raid regardless of how it went —
      // rougher sites wear on it faster. No floor check needed; it's
      // clamped below.
      scav.morale = Math.max(0, scav.morale - moraleDropForMap(map));

      if (skills.scroungerBonus) {
        for (const [res, amt] of Object.entries(skills.scroungerBonus)) {
          STATE.resources[res] = (STATE.resources[res] || 0) + amt;
        }
        detail.scroungerBonus = skills.scroungerBonus;
      }

      scav.status = "ready";
      scav.raidsCompleted += 1;
      scav.xp += 10 + Math.round(map.riskMult * 5);
      const xpNeeded = scav.level * 30;
      if (scav.xp >= xpNeeded) {
        scav.level += 1;
        scav.xp = 0;
        scav.maxHp += 8;
        scav.hp = effectiveMaxHp(scav);
        detail.leveledUp = true;
      }
    } else {
      scav.status = "dead";
      scav.hp = 0;
      detail.died = true;
    }
    outcome.perScav.push(detail);
  }

  // Convenience fields mirroring the old single-scav outcome shape, so any
  // remaining code that only handles one scav at a time still works for
  // solo raids (group size 1) without extra branching.
  const lead = outcome.perScav[0];
  outcome.died = lead.died;
  outcome.injured = lead.injured;
  outcome.hpLost = lead.hpLost;
  outcome.leveledUp = outcome.perScav.some((p) => p.leveledUp);

  if (anySurvived) {
    // Small flat chance a raid's return triggers a camp defense event —
    // something followed a scav back. Only one event can be pending at a
    // time, so a string of raids resolving in quick succession won't stack
    // multiple simultaneous threats.
    if (!STATE.campEvent && Math.random() < 0.05) {
      STATE.campEvent = { id: `event_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, triggeredAt: gameNow() };
      raidScreenOpen = false; // never leave raid prep open underneath the threat modal
    }
  }

  STATE.log.unshift({ ts: Date.now(), outcome });
  STATE.log = STATE.log.slice(0, 30);
  activeModalRaid = { raid, outcome };
}

// Shared by recruitScav and recruitCost so the price actually charged can
// never drift from the price displayed — previously each had its own copy
// of the same formula. Costs food instead of scrap — feeding a new mouth
// at camp, not paying them — rescaled to fit food's much smaller economy
// (a maxed Farm only produces 20/day, and 3/day of that already goes to
// upkeep) rather than directly porting over what used to be the scrap
// number. Base cost cut by ~30% (was food:8/gold:3 at an empty roster,
// scaled down the same way the original scrap version was) per a balance
// pass; the per-scav scaling stays the same shape so the discount holds
// steady at roughly 30% off no matter how large the roster already is,
// rather than shrinking toward nothing as aliveCount climbs.
function recruitCost() {
  const aliveCount = STATE.scavs.filter((s) => s.status !== "dead").length;
  return {
    food: Math.round((8 + aliveCount * 3) * 0.7),
    gold: Math.round((3 + aliveCount * 2) * 0.7),
  };
}

function recruitScav() {
  const aliveCount = STATE.scavs.filter((s) => s.status !== "dead").length;
  if (aliveCount >= STATE.rosterCap) return false;
  const cost = recruitCost();
  if (!canAfford(cost)) return { ok: false, cost };
  spend(cost);
  STATE.scavs.push(makeScav());
  saveState();
  return { ok: true };
}

function purchaseUpgrade(id) {
  const def = getUpgradeDef(id);
  const lvl = STATE.upgrades[id];
  if (lvl >= def.maxLevel) return false;
  const cost = upgradeCost(def, lvl);
  if (!canAfford(cost)) return false;
  spend(cost);
  STATE.upgrades[id] += 1;
  if (id === "barracks") {
    STATE.rosterCap += 1;
  }
  saveState();
  return true;
}
// ===== SETTINGS PANEL =====

const GEAR_ICON_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;

// Per-slot icons used on the character screen (equip slots + stash tiles).
const SLOT_ICON_SVG = {
  weapon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path><path d="M13 19l6-6"></path><path d="M16 16l4 4"></path><path d="M19 21l2-2"></path></svg>`,
  armor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"></path></svg>`,
  pack: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12H6V8z"></path><path d="M9 4h6"></path><path d="M9 13h6"></path></svg>`,
};
const SLOT_LABELS = { weapon: "Weapon", armor: "Armor", pack: "Pack" };
const SLOT_STAT_KEY = { weapon: "combat", armor: "defense", pack: "lootBonus" };

// Per-item icons, added v2.30 — every weapon/armor/pack in GEAR_CATALOG gets
// its own distinct silhouette instead of sharing one icon per slot. All use
// the same outline-icon convention as GEAR_ICON_SVG/SLOT_ICON_SVG: 24x24
// viewBox, currentColor stroke/fill so the existing tier-tint CSS (.t1/.t2/
// .t3/.t4/.unique/.improvised on the parent tile) keeps working untouched.
// Guns share one base silhouette (grip + trigger guard + barrel), knives
// share another (blade + crossguard + handle) — varied just enough per item
// (barrel length, scope, blade size) to stay distinct at icon scale without
// turning into unreadable detail. Boss-unique weapons/armor/packs aren't
// listed here; they fall back to the per-slot icon via getGearIconSvg below.
const GEAR_ITEM_ICON_SVG = {
  // --- weapon ---
  fists: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13a3 3 0 1 1 4-4l4 4a3 3 0 1 1-4 4z"></path><path d="M14 9l3 3"></path></svg>`,
  pipe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="14" height="3" rx="1"></rect><circle cx="19" cy="12.5" r="3"></circle></svg>`,
  machete: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 4L6 17l-3 3 3-1 13-13z"></path><path d="M9 14l1 1"></path></svg>`,
  pistol: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h11v3H8v5H5v-5H3z"></path><path d="M14 11.5h6v2h-6z"></path><path d="M9 11V8.5"></path></svg>`,
  rifle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 14h10v2H2z"></path><path d="M12 15h8"></path><path d="M7 14V8h4v6"></path><path d="M9 8V6"></path><path d="M5 16v3"></path></svg>`,
  rebar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 19L17 4l2 1.5L8 21z"></path></svg>`,
  hatchet: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.2 7.5H9.8z"></path><path d="M9.8 9.5h4.4v2.5H9.8z"></path><path d="M6 12h12"></path><path d="M11 12.8h2v7H11z"></path></svg>`,
  crowbar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21l2-6 9-9 3 3-9 9-6 2z"></path><path d="M16 6l2-2 2 2-2 2z"></path></svg>`,
  cleaver: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.4 7.5H8.6z"></path><path d="M8.6 9.5h6.8v2H8.6z"></path><path d="M6 11.5h12"></path><path d="M11 12.3h2v8H11z"></path></svg>`,
  spear: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V7"></path><path d="M8 7l4-5 4 5"></path><path d="M9.5 7h5"></path></svg>`,
  revolver: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h11v3H8v5H5v-5H3z"></path><path d="M14 11.5h6v2h-6z"></path><path d="M9 11V8.5"></path></svg>`,
  smg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h11v3H8v5H5v-5H3z"></path><path d="M14 11.5h7v2h-7z"></path><path d="M9 11V9h2.5v2"></path></svg>`,
  compound_bow: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c7 1.5 7 14.5 0 16"></path><path d="M4 4l16 8-16 8"></path><path d="M9 11h2"></path></svg>`,
  shotgun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h11v3H8v5H5v-5H3z"></path><path d="M14 11.5h7.5l-1 2H14z"></path><path d="M9 11V8.5"></path></svg>`,
  carbine: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h11v3H8v5H5v-5H3z"></path><path d="M14 11.5h8v2h-8z"></path><path d="M9 11V8.5"></path><path d="M16 8.7l3-1.4"></path></svg>`,
  shiv: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l1.3 5.5h-2.6z"></path><path d="M10.7 10.5h2.6v1.8h-2.6z"></path><path d="M8.2 12.3h7.6"></path><path d="M11 13.1h2v5.4H11z"></path></svg>`,
  // --- armor ---
  rags: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2 2 1 4-1 5-3 1-4 4-2 7 1-2 3-2 4-1 2 2 1 5-1 6"></path></svg>`,
  padded: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M8 8v9M12 7v10M16 8v9"></path></svg>`,
  leather: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 9h6v3H9z"></path></svg>`,
  kevlar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M8 9h3v3H8zM13 9h3v3h-3zM10.5 13h3v3h-3z"></path></svg>`,
  ceramic: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M12 6v13"></path></svg>`,
  cardboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 8l1.5 1.5L9 11M15 8l-1.5 1.5L15 11"></path></svg>`,
  denim_layer: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 7v8M12 6v9M15 7v8"></path></svg>`,
  tire_plate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M7 9q5 2 10 0M7 13q5 2 10 0"></path></svg>`,
  riot_vest: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><rect x="9" y="9" width="6" height="5" rx="1"></rect></svg>`,
  chainmail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><circle cx="9" cy="9" r="1.3"></circle><circle cx="12" cy="9" r="1.3"></circle><circle cx="15" cy="9" r="1.3"></circle><circle cx="10.5" cy="12" r="1.3"></circle><circle cx="13.5" cy="12" r="1.3"></circle><circle cx="12" cy="15" r="1.3"></circle></svg>`,
  trauma_plate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><rect x="9.5" y="7.5" width="5" height="7" rx="1"></rect></svg>`,
  scale_armor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M8 8q2 1 4 0q2 1 4 0M8 11q2 1 4 0q2 1 4 0M8 14q2 1 4 0q2 1 4 0"></path></svg>`,
  blast_suit: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 8h6v3H9z"></path><path d="M9 13h6"></path></svg>`,
  exo_frame: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 7v10M15 7v10M7 10h10M7 13h10"></path></svg>`,
  siege_plate: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M9 9h6v6H9z"></path></svg>`,
  duct_armor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"></path><path d="M8 9l3-1 2 2 2-2 1 1-3 3v4l-1 1-1-1v-4z"></path></svg>`,
  // --- pack ---
  satchel: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v9H5z"></path><path d="M9 5l1 4M15 5l-1 4"></path></svg>`,
  ruck: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12H6z"></path><path d="M9 4h6M9 13h6"></path></svg>`,
  frame: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12H6z"></path><path d="M7 6v14M17 6v14"></path></svg>`,
  cargo: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v12H6z"></path><path d="M9 9h6v4H9z"></path><path d="M9 16h6"></path></svg>`,
  tote: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v11H5z"></path><path d="M9 14l2-2 2 2"></path></svg>`,
  duffel: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9H5z"></path><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"></path><path d="M9 9h6"></path></svg>`,
  milk_crate_pack: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 11H6z"></path><path d="M5 8l2-3h10l2 3"></path><path d="M5 12h14M5 16h14"></path></svg>`,
  courier_bag: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 4-2 11-12-2z"></path><path d="M4 7l3-3 13 3"></path></svg>`,
  hiking_pack: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v12H7z"></path><path d="M10 5h4M9 11h6M9 15h6"></path></svg>`,
  utility_harness: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="14" rx="2"></rect><path d="M6 10h12M6 14h12"></path><circle cx="9" cy="12" r="0.6" fill="currentColor"></circle><circle cx="9" cy="17" r="0.6" fill="currentColor"></circle></svg>`,
  salvage_sled: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="13" height="8" rx="1"></rect><path d="M17 14l4 1M3 18l3-2"></path></svg>`,
  molle_rig: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5v14M11 5v14M15 5v14"></path><rect x="5" y="8" width="4" height="3"></rect><rect x="13" y="13" width="4" height="3"></rect></svg>`,
  hauler_pack: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10H6z"></path><path d="M9 6V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"></path><rect x="9" y="11" width="6" height="4"></rect></svg>`,
  armored_rig: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10H6z"></path><path d="M9 6V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"></path><path d="M6 12h12M6 15h12"></path></svg>`,
  feed_sack: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10l1 5-2 11H8L6 9z"></path><path d="M9 4V3h6v1"></path></svg>`,
};

// Safe lookup: any gear item with a hand-authored icon above gets it;
// anything else (boss-unique drops, or a future item someone forgets to
// add an icon for) falls back to its slot's generic icon rather than
// rendering blank.
function getGearIconSvg(slot, gearId) {
  return GEAR_ITEM_ICON_SVG[gearId] || SLOT_ICON_SVG[slot];
}


const RESOLUTION_LABELS = {
  "1280x800": "1280 × 800",
  "1600x900": "1600 × 900",
  "1920x1080": "1920 × 1080",
};

// Wires a button to require two clicks before firing — first click arms it
// and shows a warning label for 3 seconds, second click (within that window)
// actually runs the action. Used for anything irreversible (quit, wipe save).
function wireConfirmButton(btn, confirmLabel, onConfirm) {
  const originalLabel = btn.textContent;
  btn.addEventListener("click", () => {
    if (btn.dataset.confirming === "true") {
      btn.dataset.confirming = "false";
      onConfirm();
      return;
    }
    btn.dataset.confirming = "true";
    btn.textContent = confirmLabel;
    setTimeout(() => {
      if (btn.dataset.confirming === "true") {
        btn.dataset.confirming = "false";
        btn.textContent = originalLabel;
      }
    }, 3000);
  });
}

function renderPatchNotesTab() {
  const entries = PATCH_NOTES.map((entry, i) => {
    const isLatest = i === 0;
    return `
      <div class="patch-entry">
        <div class="patch-entry-header">
          <span class="patch-version">v${escapeHtml(entry.version)}</span>
          ${isLatest ? `<span class="patch-latest-tag">Latest</span>` : ""}
        </div>
        <ul class="patch-notes-list">
          ${entry.notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}
        </ul>
      </div>
    `;
  }).join("");

  return `<div class="patch-notes-scroll">${entries}</div>`;
}

// ===== CHARACTER SCREEN (drag-and-drop loadout) =====
// Replaces the old click-to-equip loadout modal with a full-screen RPG-style
// character sheet: portrait + stat block on the left, three equipment slots
// in the middle, and a draggable stash inventory on the right. Items can be
// dragged from the stash onto a slot to equip, dragged off a slot back onto
// the stash to unequip, or just clicked as a fallback for accessibility.

let charScreenActiveTab = "weapon"; // which stash tab is showing
let skillWebSelectedNode = "hardened"; // which node's detail is showing in the skill web's side panel

function renderCharPortraitCol(scav) {
  const power = scavCombatPower(scav, scav.gear);
  const pack = getGearItem("pack", scav.gear.pack);
  const statusLabel = scav.status === "defending" ? "defending camp" : scav.status;
  const unspent = unspentSkillPoints(scav);
  const effMax = effectiveMaxHp(scav);
  const radPct = Math.round((scav.radiation / RADIATION_CAP) * 100);
  return `
    <div class="char-portrait-art">${GEAR_ICON_SVG}</div>
    <div class="char-portrait-name">${escapeHtml(scav.name)}<span class="lvl">Lv.${scav.level}</span></div>
    <div class="char-portrait-status">${escapeHtml(statusLabel)}</div>
    <div class="char-hp-row">
      <div class="hp-bar-track"><div class="hp-bar-fill ${hpClass(scav)}" style="width:${(scav.hp / effMax) * 100}%"></div></div>
      <div class="hp-label">${scav.hp}/${effMax}${scav.radiation > 0 ? ` <span class="hp-rad-note">(-${scav.radiation} rad)</span>` : ""}</div>
    </div>
    <div class="char-secondary-row">
      <div class="char-secondary-track rad-track"><div class="char-secondary-fill rad-fill" style="width:${radPct}%"></div></div>
      <div class="char-secondary-label">Radiation ${scav.radiation}/${RADIATION_CAP}</div>
    </div>
    <div class="char-secondary-row">
      <div class="char-secondary-track morale-track"><div class="char-secondary-fill morale-fill" style="width:${scav.morale}%"></div></div>
      <div class="char-secondary-label">Morale ${scav.morale}/100${scav.morale < 100 ? ` <span class="hp-rad-note">(${Math.round((1 - moraleLootFactor(scav)) * 100)}% less loot)</span>` : ""}</div>
    </div>
    <div class="char-stats-stack">
      <div class="cs-item"><span class="cs-lbl">Combat</span><span class="cs-val">${power.combat}</span></div>
      <div class="cs-item"><span class="cs-lbl">Defense</span><span class="cs-val">${power.defense}</span></div>
      <div class="cs-item"><span class="cs-lbl">Loot Bonus</span><span class="cs-val">+${Math.round(pack.lootBonus * 100)}%</span></div>
    </div>
    <button class="btn secondary char-skills-btn" id="openSkillTreeBtn" style="margin-top:10px;">Skills${unspent > 0 ? ` (${unspent})` : ""}</button>
    <div class="char-xp-note">${scav.raidsCompleted} raid${scav.raidsCompleted === 1 ? "" : "s"} completed</div>
  `;
}

function equipSlotStatLabel(slot, item) {
  if (slot === "weapon") return item.combat > 0 ? `+${item.combat} Combat` : "No combat bonus";
  if (slot === "armor") return item.defense > 0 ? `+${item.defense} Defense` : "No defense bonus";
  return item.lootBonus > 0 ? `+${Math.round(item.lootBonus * 100)}% Loot` : "No loot bonus";
}

function renderCharEquipCol(scav) {
  const slots = ["weapon", "armor", "pack"];
  const slotsHtml = slots.map((slot) => {
    const item = getGearItem(slot, scav.gear[slot]);
    const filled = item.tier > 0;
    return `
      <div class="equip-slot ${filled ? "filled" : ""}" data-equip-slot="${slot}" draggable="${filled}">
        <div class="equip-slot-icon">${getGearIconSvg(slot, item.id)}</div>
        <div class="equip-slot-body">
          <div class="equip-slot-label">${SLOT_LABELS[slot]}</div>
          <div class="equip-slot-name">${escapeHtml(item.name)}${item.improvised ? `<span class="equip-slot-improvised-tag">Improvised</span>` : ""}${item.unique ? `<span class="equip-slot-unique-tag">Unique</span>` : ""}</div>
          ${filled ? `<div class="equip-slot-stat">${equipSlotStatLabel(slot, item)}</div>` : `<div class="equip-slot-empty-hint">Drag gear here</div>`}
        </div>
        ${filled ? `<button class="equip-slot-clear-btn" data-unequip-slot="${slot}" title="Unequip">✕</button>` : ""}
      </div>
    `;
  }).join("");
  return `
    ${slotsHtml}
    <div class="char-equip-hint">Drag items from the stash onto a slot to equip them. Drag equipped gear back out — or click the ✕ — to return it to the stash.</div>
  `;
}

function renderCharStashCol(scav) {
  const tabs = ["weapon", "armor", "pack"].map((slot) => `
    <button class="char-stash-tab ${charScreenActiveTab === slot ? "active" : ""}" data-stash-tab="${slot}">${SLOT_LABELS[slot]}</button>
  `).join("");

  const slot = charScreenActiveTab;
  const items = availableGear(slot);
  const tiles = items.map((item) => {
    const equippedHere = scav.gear[slot] === item.id;
    const count = stashCount(slot, item.id);
    const draggable = equippedHere || count > 0;
    const statLabel = item.tier === 0 ? "Standard issue" : equipSlotStatLabel(slot, item);
    const countLabel = item.tier === 0 ? "" : `<div class="char-item-count">${count}</div>`;
    return `
      <div class="char-item-tile t${item.tier} ${item.improvised ? "improvised" : ""} ${item.unique ? "unique" : ""} ${equippedHere ? "equipped" : ""} ${draggable ? "" : "unavailable"}"
           data-slot="${slot}" data-gear-id="${item.id}" draggable="${draggable && !equippedHere}">
        <div class="char-item-icon">${getGearIconSvg(slot, item.id)}</div>
        <div class="char-item-body">
          <div class="char-item-name">${escapeHtml(item.name)}</div>
          <div class="char-item-stat">${statLabel}${item.improvised ? `<span class="char-item-improvised-tag">Improvised</span>` : ""}${item.unique ? `<span class="char-item-unique-tag">Unique</span>` : ""}</div>
        </div>
        ${equippedHere ? `<div class="char-item-equipped-tag">Equipped</div>` : countLabel}
      </div>
    `;
  }).join("");

  return `
    <div class="char-stash-tabs">${tabs}</div>
    <div class="char-stash-grid char-stash-dropzone" data-stash-dropzone="${slot}">${tiles}</div>
  `;
}

function openLoadoutModal(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav) return;
  charScreenActiveTab = "weapon";

  const overlay = document.createElement("div");
  overlay.className = "char-screen";
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">CHARACTER — <span>${escapeHtml(scav.name)}</span></div>
      <button class="rs-back-btn" id="closeCharScreenBtn">← Back to Camp</button>
    </div>
    <div class="char-body">
      <section class="char-portrait-col" id="charPortraitCol"></section>
      <section class="char-equip-col" id="charEquipCol"></section>
      <section class="char-stash-col" id="charStashCol"></section>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    refreshCharScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector("#charPortraitCol").innerHTML = renderCharPortraitCol(scav);
    overlay.querySelector("#charEquipCol").innerHTML = renderCharEquipCol(scav);
    overlay.querySelector("#charStashCol").innerHTML = renderCharStashCol(scav);
    refreshWarehouseTooltip();
    wireInteractions();
  }

  // Exposed so renderAll() (called when the Skill Tree screen opened on
  // top of this one closes) can refresh the portrait column's unspent-
  // points badge and stat numbers in place.
  refreshCharScreen = () => {
    if (!document.body.contains(overlay)) { refreshCharScreen = null; return; }
    refresh();
  };

  function tryEquip(slot, gearId) {
    const ok = equipGear(scav, slot, gearId);
    if (!ok) {
      pushToast(`None in the stash — find one on a raid first.`);
      return;
    }
    saveState();
    refresh();
  }

  function tryUnequip(slot) {
    const base = GEAR_CATALOG[slot][0]; // tier-0 basic, e.g. "Bare Hands"
    if (scav.gear[slot] === base.id) return; // already bare, nothing to do
    equipGear(scav, slot, base.id);
    saveState();
    refresh();
  }

  function wireInteractions() {
    // Back / dismiss
    overlay.querySelector("#closeCharScreenBtn").addEventListener("click", closeScreen);

    const openSkillTreeBtn = overlay.querySelector("#openSkillTreeBtn");
    if (openSkillTreeBtn) {
      openSkillTreeBtn.addEventListener("click", () => openSkillTreeScreen(scav.id));
    }

    // Stash tab switching
    overlay.querySelectorAll("[data-stash-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        charScreenActiveTab = tab.getAttribute("data-stash-tab");
        refresh();
      });
    });

    // Click-to-equip fallback from stash tiles (skip the tile already worn)
    overlay.querySelectorAll(".char-item-tile:not(.unavailable):not(.equipped)").forEach((tile) => {
      tile.addEventListener("click", () => {
        tryEquip(tile.getAttribute("data-slot"), tile.getAttribute("data-gear-id"));
      });
    });

    // Click ✕ to unequip
    overlay.querySelectorAll("[data-unequip-slot]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        tryUnequip(btn.getAttribute("data-unequip-slot"));
      });
    });

    // --- Drag from stash tile onto an equip slot ---
    overlay.querySelectorAll(".char-item-tile[draggable='true']").forEach((tile) => {
      tile.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({
          from: "stash",
          slot: tile.getAttribute("data-slot"),
          gearId: tile.getAttribute("data-gear-id"),
        }));
        tile.classList.add("dragging");
      });
      tile.addEventListener("dragend", () => tile.classList.remove("dragging"));
    });

    // --- Drag an equipped item back out of its slot ---
    overlay.querySelectorAll(".equip-slot[draggable='true']").forEach((slotEl) => {
      slotEl.addEventListener("dragstart", (e) => {
        const slot = slotEl.getAttribute("data-equip-slot");
        e.dataTransfer.setData("text/plain", JSON.stringify({ from: "equip", slot, gearId: scav.gear[slot] }));
      });
    });

    // --- Equip slot as drop target ---
    overlay.querySelectorAll(".equip-slot").forEach((slotEl) => {
      const targetSlot = slotEl.getAttribute("data-equip-slot");
      slotEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        slotEl.classList.add("drag-over");
      });
      slotEl.addEventListener("dragleave", () => slotEl.classList.remove("drag-over"));
      slotEl.addEventListener("drop", (e) => {
        e.preventDefault();
        slotEl.classList.remove("drag-over");
        let data;
        try { data = JSON.parse(e.dataTransfer.getData("text/plain")); } catch { return; }
        if (!data || data.slot !== targetSlot) {
          if (data) pushToast("That doesn't fit in this slot.");
          return;
        }
        tryEquip(targetSlot, data.gearId);
      });
    });

    // --- Stash area as drop target (drag equipped item out = unequip) ---
    const dropzone = overlay.querySelector("[data-stash-dropzone]");
    if (dropzone) {
      dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("drag-over");
      });
      dropzone.addEventListener("dragleave", () => dropzone.classList.remove("drag-over"));
      dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("drag-over");
        let data;
        try { data = JSON.parse(e.dataTransfer.getData("text/plain")); } catch { return; }
        if (!data || data.from !== "equip") return;
        tryUnequip(data.slot);
      });
    }
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });

  refresh();
}

// ===== SKILL TREE SCREEN (per scav) =====
// Each scav gets their own tree and their own points — nothing here is
// shared with the rest of the roster. Three branches side by side, each
// with three nodes: a multi-rank node, a second multi-rank node gated
// behind the first, and a single-rank capstone gated behind both that and
// a level requirement. See SKILL_TREE for the actual nodes and effects.

// ===== SKILL TREE WEB LAYOUT =====
// Three branches radiating from a central hub like spokes — Combat
// straight up, Survival down-right, Scavenging down-left — each spoke
// holding its 3 nodes in sequence outward from the hub. Coordinates are
// fixed in a 900x700 viewBox; nodes are small circular badges connected by
// SVG lines, with a detail panel below showing whichever node is
// currently selected (full text doesn't fit in a small circle the way it
// did in the old list layout).
const SKILL_WEB_CENTER = { x: 450, y: 380 };
const SKILL_WEB_BRANCH_ANGLES = { combat: -90, scavenging: 150, survival: 30 };
const SKILL_WEB_RADII = [120, 210, 300];

function skillWebNodePosition(branchId, nodeIndex) {
  const angle = (SKILL_WEB_BRANCH_ANGLES[branchId] * Math.PI) / 180;
  const r = SKILL_WEB_RADII[nodeIndex];
  return {
    x: SKILL_WEB_CENTER.x + r * Math.cos(angle),
    y: SKILL_WEB_CENTER.y + r * Math.sin(angle),
  };
}

// One scav's worth of node state, keyed by node id, so the SVG/badge layer
// and the detail panel can both read the same computed state without
// duplicating the unlock/rank logic.
function skillWebNodeState(scav, branchId, node) {
  const rank = getSkillRank(scav, node.id);
  const maxed = rank >= node.maxRank;
  const unlocked = isSkillNodeUnlocked(scav, branchId, node.id);
  const hasPoint = unspentSkillPoints(scav) > 0;
  return { rank, maxed, unlocked, hasPoint, canLearn: unlocked && !maxed && hasPoint };
}

function renderSkillWebSvg(scav) {
  let connectors = "";
  let badges = "";

  Object.keys(SKILL_TREE).forEach((branchId) => {
    const branch = SKILL_TREE[branchId];
    let prevPos = SKILL_WEB_CENTER;
    branch.nodes.forEach((node, i) => {
      const pos = skillWebNodePosition(branchId, i);
      const state = skillWebNodeState(scav, branchId, node);
      const lineClass = state.rank > 0 ? "learned" : "";
      connectors += `<line x1="${prevPos.x}" y1="${prevPos.y}" x2="${pos.x}" y2="${pos.y}" class="skill-web-line ${lineClass}" />`;

      const badgeClass = [
        "skill-web-node",
        state.maxed ? "maxed" : "",
        !state.unlocked ? "locked" : "",
        state.rank > 0 ? "learned" : "",
        node.id === skillWebSelectedNode ? "selected" : "",
      ].filter(Boolean).join(" ");

      badges += `
        <g class="${badgeClass}" data-branch="${branchId}" data-node="${node.id}" transform="translate(${pos.x},${pos.y})">
          <circle r="26" class="skill-web-node-circle" />
          <text class="skill-web-node-rank" y="5">${state.rank}/${node.maxRank}</text>
        </g>
      `;
      prevPos = pos;
    });
  });

  // Branch labels sit just past the outermost node on each spoke.
  const labels = Object.keys(SKILL_TREE).map((branchId) => {
    const branch = SKILL_TREE[branchId];
    const pos = skillWebNodePosition(branchId, 2);
    const angle = (SKILL_WEB_BRANCH_ANGLES[branchId] * Math.PI) / 180;
    const labelPos = { x: SKILL_WEB_CENTER.x + (SKILL_WEB_RADII[2] + 50) * Math.cos(angle), y: SKILL_WEB_CENTER.y + (SKILL_WEB_RADII[2] + 50) * Math.sin(angle) };
    return `<text class="skill-web-branch-label" x="${labelPos.x}" y="${labelPos.y}" text-anchor="middle">${escapeHtml(branch.label)}</text>`;
  }).join("");

  return `
    <svg viewBox="0 0 900 700" class="skill-web-svg">
      ${connectors}
      <circle cx="${SKILL_WEB_CENTER.x}" cy="${SKILL_WEB_CENTER.y}" r="34" class="skill-web-hub" />
      <text x="${SKILL_WEB_CENTER.x}" y="${SKILL_WEB_CENTER.y + 5}" class="skill-web-hub-label" text-anchor="middle">${escapeHtml(scav.name.split(" ")[0])}</text>
      ${badges}
      ${labels}
    </svg>
  `;
}

function renderSkillWebDetailPanel(scav) {
  const found = findSkillNodeAnyBranch(skillWebSelectedNode);
  if (!found) {
    return `<div class="skill-detail-empty">Click a node on the web to see what it does.</div>`;
  }
  const { branchId, node } = found;
  const state = skillWebNodeState(scav, branchId, node);

  let lockReason = "";
  if (!state.unlocked) {
    if (scav.level < node.minLevel) {
      lockReason = `Requires level ${node.minLevel}`;
    } else if (node.requires) {
      const reqNode = getSkillNodeDef(branchId, node.requires.id);
      lockReason = `Requires ${reqNode.name} rank ${node.requires.rank}`;
    }
  }

  const effectLine = state.rank > 0 ? node.desc(state.rank) : "Not learned";
  const nextLine = !state.maxed ? node.next() : null;

  return `
    <div class="skill-detail ${state.maxed ? "maxed" : ""} ${!state.unlocked ? "locked" : ""} ${state.rank > 0 ? "learned" : ""}">
      <div class="skill-detail-top">
        <span class="skill-detail-name">${escapeHtml(node.name)}</span>
        <span class="skill-detail-rank">${state.rank}/${node.maxRank}</span>
      </div>
      <div class="skill-detail-branch">${escapeHtml(SKILL_TREE[branchId].label)}</div>
      <div class="skill-detail-effect">${escapeHtml(effectLine)}</div>
      ${!state.unlocked ? `<div class="skill-detail-lock">${escapeHtml(lockReason)}</div>` : ""}
      ${state.unlocked && !state.maxed ? `<div class="skill-detail-next">Next: ${escapeHtml(nextLine)}</div>` : ""}
      ${state.unlocked ? `<button class="btn secondary skill-learn-btn" data-branch="${branchId}" data-node="${node.id}" ${state.maxed || !state.hasPoint ? "disabled" : ""}>${state.maxed ? "Maxed" : "Learn"}</button>` : ""}
    </div>
  `;
}

function renderSkillTreeBody(scav) {
  const unspent = unspentSkillPoints(scav);
  return `
    <div class="skill-tree-header-row">
      <div class="skill-tree-points">Unspent points: <b>${unspent}</b></div>
      <div class="skill-tree-hint">One point per level gained. Spent permanently on this scav only.</div>
    </div>
    <div class="skill-web-layout">
      <div class="skill-web-canvas" id="skillWebCanvas">${renderSkillWebSvg(scav)}</div>
      <div class="skill-detail-panel" id="skillDetailPanel">${renderSkillWebDetailPanel(scav)}</div>
    </div>
  `;
}

function openSkillTreeScreen(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav) return;

  const overlay = document.createElement("div");
  overlay.className = "skill-tree-screen";
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">SKILLS — <span>${escapeHtml(scav.name)}</span></div>
      <button class="rs-back-btn" id="closeSkillTreeBtn">← Back to Character</button>
    </div>
    <div class="skill-tree-body" id="skillTreeBody">${renderSkillTreeBody(scav)}</div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    overlay.remove();
    renderAll(); // brings the Character Screen underneath back up to date via refreshCharScreen
  }

  function refresh() {
    overlay.querySelector("#skillTreeBody").innerHTML = renderSkillTreeBody(scav);
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeSkillTreeBtn").addEventListener("click", closeScreen);

    // Clicking a node on the web just selects it, swapping the detail
    // panel to show that node's info — spending a point is a separate,
    // explicit action via the Learn button below.
    overlay.querySelectorAll(".skill-web-node").forEach((el) => {
      el.addEventListener("click", () => {
        skillWebSelectedNode = el.getAttribute("data-node");
        overlay.querySelector("#skillDetailPanel").innerHTML = renderSkillWebDetailPanel(scav);
        overlay.querySelectorAll(".skill-web-node").forEach((n) => {
          n.classList.toggle("selected", n.getAttribute("data-node") === skillWebSelectedNode);
        });
        wireLearnButton();
      });
    });

    wireLearnButton();
  }

  function wireLearnButton() {
    const btn = overlay.querySelector(".skill-learn-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const branchId = btn.getAttribute("data-branch");
      const nodeId = btn.getAttribute("data-node");
      const node = getSkillNodeDef(branchId, nodeId);
      const ok = learnSkillRank(scav, branchId, nodeId);
      if (ok) {
        pushToast(`${scav.name} learned ${node.name} (rank ${getSkillRank(scav, nodeId)}).`);
        refresh();
      }
    });
  }
  wireInteractions();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}


// Full-screen panel for assigning injured, ready scavs to heal over time.
// Mirrors the structure of the character screen: a render() that rebuilds
// the DOM and a wire() that re-attaches listeners after every re-render.
// `refreshInfirmaryScreen` is exposed at module scope so the game tick can
// update the live countdown bars while this screen is open, the same way
// the radio log refreshes itself for active raids.

let refreshInfirmaryScreen = null;
let refreshRosterScreen = null;
let refreshBuildingPopup = null;
let refreshFleaMarketScreen = null;
let refreshCharScreen = null;

function renderInfirmaryQueueList() {
  const queue = getInfirmaryQueue();
  if (queue.length === 0) {
    return `<div class="empty-note">No one's healing right now.</div>`;
  }
  const now = gameNow();
  const rows = queue.map((entry) => {
    const scav = STATE.scavs.find((s) => s.id === entry.scavId);
    if (!scav) return "";
    const elapsed = (now - entry.startedAt) / 1000;
    const pct = Math.min(100, (elapsed / entry.duration) * 100);
    const remaining = Math.max(0, Math.ceil(entry.duration - elapsed));
    const treatsRadiation = !!entry.treatsRadiation;
    const treatsInjury = entry.treatsInjury !== false;
    const metaParts = [];
    if (treatsInjury) metaParts.push(`${scav.hp}/${scav.maxHp} HP → ${scav.maxHp}/${scav.maxHp}`);
    if (treatsRadiation) metaParts.push(`${scav.radiation} rad → 0`);
    return `
      <div class="infirmary-bed">
        <div class="infirmary-bed-top">
          <span class="infirmary-bed-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></span>
          <button class="infirmary-recall-btn" data-recall-id="${scav.id}" title="Recall now (no heal)">✕</button>
        </div>
        <div class="bar-track heal-bar-track"><div class="bar-fill heal-bar-fill" style="width:${pct}%"></div></div>
        <div class="infirmary-bed-meta">
          <span>${metaParts.join(" · ")}</span>
          <span>${remaining}s left</span>
        </div>
      </div>
    `;
  }).join("");
  return `<div class="infirmary-queue-list">${rows}</div>`;
}

function renderInfirmaryCandidateList() {
  // Eligible for a trip if they're hurt OR irradiated — either alone is
  // enough to justify a visit, and sendToInfirmary treats whichever (or
  // both) actually apply.
  const candidates = STATE.scavs.filter((s) => s.status === "ready" && (s.hp < s.maxHp || s.radiation > 0));
  if (candidates.length === 0) {
    return `<div class="empty-note">No one needs the Infirmary right now — anyone hurt or irradiated is either already in, on a raid, or defending camp.</div>`;
  }
  const rows = candidates.map((scav) => {
    const duration = Math.max(healDuration(scav), radiationTreatDuration(scav));
    const medsCost = healMedsCost(scav) + radiationTreatMedsCost(scav);
    const affordable = canAfford({ meds: medsCost });
    const effMax = effectiveMaxHp(scav);
    return `
      <div class="infirmary-candidate" data-send-id="${scav.id}">
        <div class="infirmary-candidate-info">
          <div class="infirmary-bed-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
          <div class="hp-row" style="margin:4px 0 0;">
            <div class="hp-bar-track"><div class="hp-bar-fill ${hpClass(scav)}" style="width:${(scav.hp / effMax) * 100}%"></div></div>
            <div class="hp-label">${scav.hp}/${effMax}</div>
          </div>
          ${scav.radiation > 0 ? `<div class="infirmary-rad-note">${scav.radiation} radiation</div>` : ""}
        </div>
        <div class="infirmary-candidate-eta">
          <span class="infirmary-eta-val">${duration}s</span>
          <span class="infirmary-meds-cost ${affordable ? "afford" : "short"}">${medsCost} meds</span>
          <button class="btn secondary infirmary-send-btn" data-send-id="${scav.id}" ${affordable ? "" : "disabled"}>Send In</button>
        </div>
      </div>
    `;
  }).join("");
  return `<div class="infirmary-candidate-list">${rows}</div>`;
}

function openInfirmaryScreen() {
  const overlay = document.createElement("div");
  overlay.className = "infirmary-screen";
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">INFIRMARY <span>— LV.${STATE.upgrades.infirmary}</span></div>
      <button class="rs-back-btn" id="closeInfirmaryBtn">← Back to Camp</button>
    </div>
    <div class="infirmary-body">
      <section class="infirmary-col">
        <div class="section-divider" style="margin-top:0;">Currently Healing</div>
        <div id="infirmaryQueueCol">${renderInfirmaryQueueList()}</div>
      </section>
      <section class="infirmary-col">
        <div class="section-divider" style="margin-top:0;">Send a Scav to Heal</div>
        <div class="infirmary-hint">Heal time depends on how hurt they are — and drops as the Infirmary levels up (currently -${STATE.upgrades.infirmary * INFIRMARY_REDUCTION_PER_LEVEL * 100}%).</div>
        <div id="infirmaryCandidateCol">${renderInfirmaryCandidateList()}</div>
      </section>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    refreshInfirmaryScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector("#infirmaryQueueCol").innerHTML = renderInfirmaryQueueList();
    overlay.querySelector("#infirmaryCandidateCol").innerHTML = renderInfirmaryCandidateList();
    refreshWarehouseTooltip();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeInfirmaryBtn").addEventListener("click", closeScreen);

    overlay.querySelectorAll("[data-send-id]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-send-id");
        const scav = STATE.scavs.find((s) => s.id === id);
        if (scav && !canAfford({ meds: healMedsCost(scav) })) {
          pushToast(`Not enough meds to treat ${scav.name}.`);
          return;
        }
        const ok = sendToInfirmary(id);
        if (ok) {
          pushToast(`${scav.name} sent to the infirmary.`);
          refresh();
        }
      });
    });

    overlay.querySelectorAll("[data-recall-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-recall-id");
        const scav = STATE.scavs.find((s) => s.id === id);
        recallFromInfirmary(id);
        if (scav) pushToast(`${scav.name} recalled — no heal applied.`);
        refresh();
      });
    });
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });

  // Exposed so gameTick can keep the countdown bars live while this is open,
  // without forcing a full renderAll() (which would tear down this overlay).
  refreshInfirmaryScreen = () => {
    if (!document.body.contains(overlay)) { refreshInfirmaryScreen = null; return; }
    overlay.querySelector("#infirmaryQueueCol").innerHTML = renderInfirmaryQueueList();
    wireInteractions();
  };

  wireInteractions();
}

// ===== BARRACKS SCREEN (group raids) =====
// Lets the player form a raid group of up to 3 ready scavs and send them
// out together. More hands means better survival odds and bigger hauls —
// see calcGroupOdds for the exact bonus curve. Structurally this mirrors
// the solo raid-select screen (same map strip, same odds-bar pattern) but
// the scav picker is multi-select instead of single-select.

const MAX_GROUP_SIZE = 3;
let barracksGroup = []; // array of scavIds, in pick order, max length 3
let barracksSelectedMapId = null;

function renderBarracksScavGrid() {
  const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
  const groupFull = barracksGroup.length >= MAX_GROUP_SIZE;
  return livingScavs.map((scav) => {
    const pickIndex = barracksGroup.indexOf(scav.id);
    const isPicked = pickIndex !== -1;
    const unavailable = scav.status !== "ready" && !isPicked;
    const unavailableLabel = scav.status === "healing" ? "Healing" : scav.status === "resting" ? "Resting" : scav.status === "defending" ? "Defending" : "On raid";
    const disabledByFull = !isPicked && groupFull;
    return `
      <div class="rs-scav-pick group-pick ${isPicked ? "active" : ""} ${unavailable ? "unavailable" : ""} ${disabledByFull ? "full-disabled" : ""}" data-group-scav-id="${scav.id}">
        ${isPicked ? `<div class="group-pick-badge">${pickIndex + 1}</div>` : ""}
        <div class="rsp-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
        <div class="rsp-hp">${unavailable ? unavailableLabel : `${scav.hp}/${effectiveMaxHp(scav)} HP`}</div>
      </div>
    `;
  }).join("") || `<div class="empty-note">No scavs available.</div>`;
}

function renderBarracksGroupSlots() {
  const slots = [];
  for (let i = 0; i < MAX_GROUP_SIZE; i++) {
    const scavId = barracksGroup[i];
    const scav = scavId ? STATE.scavs.find((s) => s.id === scavId) : null;
    slots.push(scav
      ? `<div class="group-slot filled"><span>${escapeHtml(scav.name)}</span><button class="group-slot-remove" data-remove-group-id="${scav.id}" title="Remove">✕</button></div>`
      : `<div class="group-slot">Empty Slot</div>`
    );
  }
  return slots.join("");
}

function renderBarracksMapStrip() {
  const groupScavs = barracksGroup.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  // Dungeons and the arena are both deliberately excluded here — dungeons
  // live on their own "Dungeons" tab (key-gate UI, not a level lock) and
  // the arena lives on its own "Arena" tab (exactly 1 scav, not a group)
  // in the raid select screen. Neither fits this screen's "pick 1-3 for
  // a regular group raid" model.
  const regularMaps = MAPS.filter((m) => !m.dungeon && !m.arena);
  if (!barracksSelectedMapId) barracksSelectedMapId = regularMaps[0].id;
  return regularMaps.map((map) => {
    const locked = mapLockedForGroup(map, groupScavs);
    const isActive = map.id === barracksSelectedMapId;
    return `
      <div class="rs-map-card ${isActive ? "active" : ""} ${locked ? "locked" : ""}" data-barracks-map-id="${map.id}" style="background-image:url('${MAP_ART[map.id]}')">
        <div class="rs-card-risk ${map.risk}">${map.risk}</div>
        <div class="rs-card-overlay"><div class="rs-card-name">${escapeHtml(map.name)}</div></div>
        ${locked ? `<div class="rs-card-lock">Locked — Lv.${map.minLevel}</div>` : ""}
      </div>
    `;
  }).join("");
}

function renderBarracksBottomBar() {
  const activeMap = MAPS.find((m) => m.id === barracksSelectedMapId) || MAPS[0];
  const groupScavs = barracksGroup.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);

  if (groupScavs.length === 0) {
    return `<div class="empty-note" style="flex:1;">Pick 1-3 ready scavs above to form a raid group.</div>`;
  }
  const mapLocked = mapLockedForGroup(activeMap, groupScavs);
  if (mapLocked) {
    return `<div class="empty-note" style="flex:1;">At least one of your picks isn't strong enough for this site yet.</div>`;
  }

  const gearById = {};
  groupScavs.forEach((s) => { gearById[s.id] = s.gear; });
  const duration = Math.max(8, Math.round(activeMap.duration * raidDurationMult()));
  const { survival, lootMult } = calcGroupOdds(groupScavs, activeMap, gearById);
  const survivalPct = Math.round(survival * 100);
  const lootPct = Math.round(lootMult * 100);
  const names = groupScavs.map((s) => s.name).join(", ");

  return `
    <div class="rs-odds">
      <div class="o-item"><span class="o-lbl">Survival</span><span class="o-val survive">${survivalPct}%</span></div>
      <div class="o-item"><span class="o-lbl">Loot</span><span class="o-val loot">${lootPct}%</span></div>
      <div class="o-item"><span class="o-lbl">Time</span><span class="o-val">${duration}s</span></div>
    </div>
    <button class="btn" id="launchGroupBtn">Send ${groupScavs.length > 1 ? `Group (${groupScavs.length})` : escapeHtml(names)}</button>
  `;
}

function renderBarracksScreen() {
  return `
    <div class="barracks-screen">
      <div class="rs-header">
        <div class="rs-title">BARRACKS — <span>Form a Raid Group</span></div>
        <button class="rs-back-btn" id="closeBarracksBtn">← Back to Camp</button>
      </div>
      <div class="rs-strip-wrap">
        <div class="rs-strip" id="barracksMapStrip">${renderBarracksMapStrip()}</div>
      </div>
      <div class="rs-body">
        <div class="rs-info-panel" style="grid-column: 1 / -1;">
          <div class="section-divider" style="margin-top:0;">Raid group (max ${MAX_GROUP_SIZE})</div>
          <div class="group-slots-row" id="barracksGroupSlots">${renderBarracksGroupSlots()}</div>
          <div class="group-bonus-note">Each extra member adds +${Math.round(GROUP_SURVIVAL_BONUS_PER_EXTRA * 100)}% survival and +${Math.round(GROUP_LOOT_BONUS_PER_EXTRA * 100)}% loot to the whole group.</div>
          <div class="section-divider">Choose scavs</div>
          <div class="rs-scav-grid" id="barracksScavGrid">${renderBarracksScavGrid()}</div>
          <div class="section-divider">Morale — resting (free, takes time)</div>
          <div class="infirmary-queue-list" id="barracksMoraleQueue">${renderBarracksMoraleQueueList()}</div>
          <div class="infirmary-candidate-list" id="barracksMoraleCandidates">${renderBarracksMoraleCandidateList()}</div>
        </div>
      </div>
      <div class="rs-bottom-bar" id="barracksBottomBar">${renderBarracksBottomBar()}</div>
    </div>
  `;
}

// Mirrors renderInfirmaryQueueList exactly, just reading the rest queue
// and morale instead of the heal queue and HP.
function renderBarracksMoraleQueueList() {
  const queue = getRestQueue();
  if (queue.length === 0) return "";
  const now = gameNow();
  const rows = queue.map((entry) => {
    const scav = STATE.scavs.find((s) => s.id === entry.scavId);
    if (!scav) return "";
    const elapsed = (now - entry.startedAt) / 1000;
    const pct = Math.min(100, (elapsed / entry.duration) * 100);
    const remaining = Math.max(0, Math.ceil(entry.duration - elapsed));
    return `
      <div class="infirmary-bed">
        <div class="infirmary-bed-top">
          <span class="infirmary-bed-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></span>
          <button class="infirmary-recall-btn" data-rest-recall-id="${scav.id}" title="Recall now (no rest)">✕</button>
        </div>
        <div class="bar-track heal-bar-track rest-bar-track"><div class="bar-fill heal-bar-fill rest-bar-fill" style="width:${pct}%"></div></div>
        <div class="infirmary-bed-meta">
          <span>${scav.morale} morale → 100</span>
          <span>${remaining}s left</span>
        </div>
      </div>
    `;
  }).join("");
  return rows;
}

// Mirrors renderInfirmaryCandidateList — anyone ready with less than full
// morale can be sent in. No meds cost shown since resting is always free.
function renderBarracksMoraleCandidateList() {
  const candidates = STATE.scavs.filter((s) => s.status === "ready" && s.morale < 100);
  if (candidates.length === 0) {
    return `<div class="empty-note">Nobody needs to rest right now.</div>`;
  }
  const rows = candidates.map((scav) => {
    const duration = restDuration(scav);
    return `
      <div class="infirmary-candidate" data-rest-send-id="${scav.id}">
        <div class="infirmary-candidate-info">
          <div class="infirmary-bed-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
          <div class="hp-row" style="margin:4px 0 0;">
            <div class="char-secondary-track morale-track" style="flex:1;"><div class="char-secondary-fill morale-fill" style="width:${scav.morale}%"></div></div>
            <div class="hp-label">${scav.morale}/100</div>
          </div>
        </div>
        <div class="infirmary-candidate-eta">
          <span class="infirmary-eta-val">${duration}s</span>
          <button class="btn secondary infirmary-send-btn" data-rest-send-id="${scav.id}">Send In</button>
        </div>
      </div>
    `;
  }).join("");
  return rows;
}

let refreshBarracksScreen = null;

function openBarracksScreen() {
  barracksGroup = [];
  barracksSelectedMapId = null;
  const overlay = document.createElement("div");
  overlay.innerHTML = renderBarracksScreen();
  document.body.appendChild(overlay.firstElementChild);
  wireBarracksScreen();
  refreshBarracksScreen = () => {
    const screen = document.querySelector(".barracks-screen");
    if (!screen) { refreshBarracksScreen = null; return; }
    const moraleQueue = screen.querySelector("#barracksMoraleQueue");
    if (moraleQueue) moraleQueue.innerHTML = renderBarracksMoraleQueueList();
  };
}

function wireBarracksScreen() {
  const screen = document.querySelector(".barracks-screen");
  if (!screen) return;

  function refresh() {
    screen.querySelector("#barracksMapStrip").innerHTML = renderBarracksMapStrip();
    screen.querySelector("#barracksGroupSlots").innerHTML = renderBarracksGroupSlots();
    screen.querySelector("#barracksScavGrid").innerHTML = renderBarracksScavGrid();
    screen.querySelector("#barracksBottomBar").innerHTML = renderBarracksBottomBar();
    screen.querySelector("#barracksMoraleQueue").innerHTML = renderBarracksMoraleQueueList();
    screen.querySelector("#barracksMoraleCandidates").innerHTML = renderBarracksMoraleCandidateList();
    wireBarracksScreen();
  }

  screen.querySelector("#closeBarracksBtn").addEventListener("click", () => {
    refreshBarracksScreen = null;
    screen.remove();
    renderAll();
  });

  screen.querySelectorAll("[data-barracks-map-id]").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("locked")) return;
      barracksSelectedMapId = card.getAttribute("data-barracks-map-id");
      refresh();
    });
  });

  screen.querySelectorAll("[data-group-scav-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-group-scav-id");
      const scav = STATE.scavs.find((s) => s.id === id);
      if (!scav) return;
      const idx = barracksGroup.indexOf(id);
      if (idx !== -1) {
        barracksGroup.splice(idx, 1);
      } else {
        if (scav.status !== "ready") return; // not eligible to join
        if (barracksGroup.length >= MAX_GROUP_SIZE) return; // group full
        barracksGroup.push(id);
      }
      refresh();
    });
  });

  screen.querySelectorAll("[data-remove-group-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-remove-group-id");
      barracksGroup = barracksGroup.filter((gid) => gid !== id);
      refresh();
    });
  });

  const launchGroupBtn = screen.querySelector("#launchGroupBtn");
  if (launchGroupBtn) {
    launchGroupBtn.addEventListener("click", () => {
      const names = barracksGroup.map((id) => STATE.scavs.find((s) => s.id === id)?.name).filter(Boolean);
      const mapName = MAPS.find((m) => m.id === barracksSelectedMapId)?.name || "";
      const ok = launchRaid([...barracksGroup], barracksSelectedMapId);
      if (ok) {
        const label = names.length > 1 ? `${names.join(", ")} head out` : `${names[0]} heads out`;
        pushToast(`${label} to ${mapName}.`);
        // Stay on the Barracks screen rather than dropping back to camp —
        // clear the group (everyone in it is away now) and refresh in
        // place so another group can be queued up right away.
        barracksGroup = [];
        refresh();
      }
    });
  }

  screen.querySelectorAll("[data-rest-send-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-rest-send-id");
      const scav = STATE.scavs.find((s) => s.id === id);
      const ok = sendToRest(id);
      if (ok && scav) {
        pushToast(`${scav.name} is resting off the trail.`);
        refresh();
      }
    });
  });

  screen.querySelectorAll("[data-rest-recall-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-rest-recall-id");
      recallFromRest(id);
      refresh();
    });
  });
}

// ===== WORKSHOP SCREEN (crafting) =====
// Improvised gear is the only thing on the menu here — found gear keeps
// coming from raids same as always. Each recipe spends resources straight
// out of camp stock and adds exactly one copy to the shared stash, same as
// a raid find would. Recipes gated behind a Workshop level the player
// hasn't reached yet are still shown, just locked, so there's a clear
// reason to keep investing in the upgrade.

function renderWorkshopRecipeList() {
  const recipes = allCraftableGear();
  const workshopLvl = STATE.upgrades.workshop;
  if (!recipes.length) {
    return `<div class="empty-note">Nothing to craft yet.</div>`;
  }
  return recipes.map((item) => {
    const locked = workshopLvl < (item.minWorkshopLevel || 0);
    const afford = !locked && canAfford(item.craftCost);
    const count = stashCount(item.slot, item.id);
    const costStr = Object.entries(item.craftCost).map(([res, amt]) => `${amt} ${res}`).join(" + ");
    const statLabel = equipSlotStatLabel(item.slot, item);
    return `
      <div class="workshop-recipe ${locked ? "locked" : ""}">
        <div class="workshop-recipe-icon">${getGearIconSvg(item.slot, item.id)}</div>
        <div class="workshop-recipe-body">
          <div class="workshop-recipe-name">${escapeHtml(item.name)}</div>
          <div class="workshop-recipe-stat">${escapeHtml(statLabel)}</div>
          ${locked ? `<div class="workshop-recipe-locked">Requires Workshop Lv.${item.minWorkshopLevel}</div>` : ""}
        </div>
        <div class="workshop-recipe-side">
          <div class="workshop-recipe-cost ${locked ? "" : (afford ? "afford" : "short")}">${costStr}</div>
          <div class="workshop-recipe-count">In stash: ${count}</div>
          <button class="btn secondary workshop-craft-btn" data-craft-slot="${item.slot}" data-craft-id="${item.id}" ${locked || !afford ? "disabled" : ""}>Craft</button>
        </div>
      </div>
    `;
  }).join("");
}

function openWorkshopScreen() {
  const overlay = document.createElement("div");
  overlay.className = "workshop-screen";
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">WORKSHOP — <span>Craft Improvised Gear</span></div>
      <button class="rs-back-btn" id="closeWorkshopBtn">← Back to Camp</button>
    </div>
    <div class="workshop-body">
      <div class="workshop-hint">Improvised gear is rough — weaker than what you can find on a raid — but it costs nothing more than scrap and never depends on luck. Crafted items go straight into the shared stash, same as a find.</div>
      <div class="workshop-recipe-list" id="workshopRecipeList">${renderWorkshopRecipeList()}</div>
    </div>
  `;
  document.body.appendChild(overlay);

  function refresh() {
    overlay.querySelector("#workshopRecipeList").innerHTML = renderWorkshopRecipeList();
    refreshWarehouseTooltip();
    wireWorkshopScreen();
  }

  overlay.querySelector("#closeWorkshopBtn").addEventListener("click", () => {
    overlay.remove();
    renderAll();
  });

  function wireWorkshopScreen() {
    overlay.querySelectorAll("[data-craft-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slot = btn.getAttribute("data-craft-slot");
        const id = btn.getAttribute("data-craft-id");
        const item = getGearItem(slot, id);
        const ok = craftGear(slot, id);
        if (ok) {
          pushToast(`Crafted ${item.name}.`);
          refresh();
        }
      });
    });
  }
  wireWorkshopScreen();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      renderAll();
    }
  });
}

// ===== ROSTER SCREEN =====
// Full-screen view of every living scav, reusing renderRoster()'s card
// markup as-is. Needs its own refresh (rather than a plain renderAll())
// because a scav's status can change while this is open — most commonly,
// clicking a card's "Loadout" button opens the Character Screen on top,
// and when that closes it calls renderAll() to update the screen
// underneath; the Roster screen needs the same courtesy.
function openRosterScreen() {
  const overlay = document.createElement("div");
  overlay.className = "roster-screen";
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">ROSTER <span>— ${STATE.scavs.filter((s) => s.status !== "dead").length}/${STATE.rosterCap}</span></div>
      <button class="rs-back-btn" id="closeRosterBtn">← Back to Camp</button>
    </div>
    <div class="side-screen-body"><div class="roster-screen-grid" id="rosterScreenBody">${renderRoster()}</div></div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    refreshRosterScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector(".rs-title").innerHTML = `ROSTER <span>— ${STATE.scavs.filter((s) => s.status !== "dead").length}/${STATE.rosterCap}</span>`;
    overlay.querySelector("#rosterScreenBody").innerHTML = renderRoster();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeRosterBtn").addEventListener("click", closeScreen);
    overlay.querySelectorAll("[data-loadout-scav-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openLoadoutModal(btn.getAttribute("data-loadout-scav-id"));
      });
    });
  }
  wireInteractions();

  // Exposed so renderAll() (called when an overlay opened on top of this
  // one, like the Character Screen, closes) can refresh this screen in
  // place instead of leaving it showing stale scav data underneath.
  refreshRosterScreen = () => {
    if (!document.body.contains(overlay)) { refreshRosterScreen = null; return; }
    refresh();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}

// ===== BUILDING POPUP =====
// One shared popup for every camp building (Infirmary, Armory, Scout
// Tower, Barracks, Workshop, Radio Tower), opened by clicking its sprite
// by the campfire. Same compact modal-overlay/settings-box shape as the
// Stash and Raid Log popups. Shows the building's lore, its current
// effect, and a Build/Upgrade button wired straight to purchaseUpgrade —
// the same function the old Camp screen used, so costs and leveling
// logic are unchanged. Buildings with their own dedicated screen
// (Infirmary, Barracks, Workshop, Radio Tower once built) get an extra
// "Open" button into that screen; Armory and Scout Tower don't have one,
// since their only interaction is the upgrade itself. Recruiting a new
// scav has moved here too, folded into the Barracks popup specifically —
// Barracks already governs roster size, so it's the natural place for
// "get another scav" to live now that the standalone Camp screen is gone.
function renderBuildingPopupBody(buildingId) {
  const def = getUpgradeDef(buildingId);
  const lvl = STATE.upgrades[buildingId];
  const maxed = lvl >= def.maxLevel;
  const cost = maxed ? null : upgradeCost(def, lvl);
  const afford = cost ? canAfford(cost) : false;
  const costStr = maxed
    ? "MAX LEVEL"
    : Object.entries(cost).map(([res, amt]) => `${amt} ${res}`).join(" + ");

  const healingCount = buildingId === "infirmary" ? getInfirmaryQueue().length : 0;
  const groupRaidCount = buildingId === "barracks" ? STATE.activeRaids.filter((r) => r.scavIds.length > 1).length : 0;
  const fleaOfferLiveCount = buildingId === "radioTower" && lvl >= 1 ? getFleaMarket().offers.length : 0;

  const openScreenBtn = buildingId === "infirmary"
    ? `<button class="btn secondary" id="openBuildingScreenBtn" style="margin-top:8px;">Open Infirmary${healingCount > 0 ? ` (${healingCount} healing)` : ""}</button>`
    : buildingId === "barracks"
    ? `<button class="btn secondary" id="openBuildingScreenBtn" style="margin-top:8px;">Open Barracks${groupRaidCount > 0 ? ` (${groupRaidCount} out)` : ""}</button>`
    : buildingId === "workshop"
    ? `<button class="btn secondary" id="openBuildingScreenBtn" style="margin-top:8px;">Open Workshop</button>`
    : buildingId === "radioTower" && lvl >= 1
    ? `<button class="btn secondary" id="openBuildingScreenBtn" style="margin-top:8px;">Open Flea Market${fleaOfferLiveCount > 0 ? ` (${fleaOfferLiveCount} offers)` : " (sold out today)"}</button>`
    : buildingId === "scoutTower" && lvl >= 1
    ? `<button class="btn secondary" id="openBuildingScreenBtn" style="margin-top:8px;">Open Prestige Menu${STATE.ngPlusLevel > 0 ? ` (NG+${STATE.ngPlusLevel})` : ""}</button>`
    : "";

  let recruitSection = "";
  if (buildingId === "barracks") {
    const rCost = recruitCost();
    const aliveCount = STATE.scavs.filter((s) => s.status !== "dead").length;
    const rosterFull = aliveCount >= STATE.rosterCap;
    const canRecruit = !rosterFull && canAfford(rCost);
    recruitSection = `
      <div class="section-divider" style="margin-top:14px;">Recruit</div>
      <div class="upgrade-card">
        <div class="upgrade-top"><div class="upgrade-name">New Scav</div><div class="upgrade-lvl">${aliveCount}/${STATE.rosterCap}</div></div>
        <div class="upgrade-desc">${rosterFull ? "Roster full — upgrade the Barracks to add slots." : "Bring on another pair of hands."}</div>
        <div class="upgrade-cost ${canRecruit ? "afford" : "short"}">${Object.entries(rCost).map(([res, amt]) => `${amt} ${res}`).join(" + ")}</div>
        <button class="btn secondary" id="recruitBtn" ${!canRecruit ? "disabled" : ""}>${rosterFull ? "Roster full" : "Recruit"}</button>
      </div>
    `;
  }

  return `
    <div class="upgrade-card building-popup-card">
      <div class="upgrade-top">
        <div class="upgrade-name">${escapeHtml(def.name)}</div>
        <div class="upgrade-lvl">${lvl === 0 ? "NOT BUILT" : `LV.${lvl}/${def.maxLevel}`}</div>
      </div>
      <div class="building-popup-lore">${escapeHtml(def.lore)}</div>
      <div class="upgrade-desc">${escapeHtml(def.desc)}<br><span style="color:var(--brass-bright)">${escapeHtml(def.effect(lvl))}</span></div>
      <div class="upgrade-cost ${maxed ? "" : (afford ? "afford" : "short")}">${costStr}</div>
      <button class="btn" data-upgrade-id="${def.id}" ${maxed || !afford ? "disabled" : ""}>${maxed ? "Maxed" : lvl === 0 ? "Build" : "Upgrade"}</button>
      ${openScreenBtn}
    </div>
    ${recruitSection}
  `;
}

function openBuildingPopup(buildingId) {
  const def = getUpgradeDef(buildingId);
  if (!def) return;

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> ${escapeHtml(def.name.toUpperCase())}</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll" id="buildingPopupBody">${renderBuildingPopupBody(buildingId)}</div>
        <button class="btn secondary" id="closeBuildingPopupBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    refreshBuildingPopup = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector("#buildingPopupBody").innerHTML = renderBuildingPopupBody(buildingId);
    refreshWarehouseTooltip();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeBuildingPopupBtn").addEventListener("click", closeModal);

    const upgradeBtn = overlay.querySelector("[data-upgrade-id]");
    if (upgradeBtn) {
      upgradeBtn.addEventListener("click", () => {
        const ok = purchaseUpgrade(buildingId);
        if (ok) {
          pushToast(`${def.name} upgraded.`);
          refresh();
        }
      });
    }

    const openScreenBtn = overlay.querySelector("#openBuildingScreenBtn");
    if (openScreenBtn) {
      openScreenBtn.addEventListener("click", () => {
        // Close this popup first — it's a .modal-overlay (z-index 180),
        // and every dedicated screen it can hand off to (Infirmary,
        // Barracks, Workshop, Flea Market) is a lower z-index full-screen
        // overlay. Left in the DOM, this popup's backdrop would sit on
        // top of that screen and swallow every click on it, including
        // its own "Back to Camp" button — not just fail to auto-close,
        // but make the screen underneath unusable until a renderAll()
        // happened to clear it some other way.
        refreshBuildingPopup = null;
        overlay.remove();
        if (buildingId === "infirmary") openInfirmaryScreen();
        else if (buildingId === "barracks") openBarracksScreen();
        else if (buildingId === "workshop") openWorkshopScreen();
        else if (buildingId === "radioTower") openFleaMarketScreen();
        else if (buildingId === "scoutTower") openPrestigeMenu();
      });
    }

    const recruitBtn = overlay.querySelector("#recruitBtn");
    if (recruitBtn) {
      recruitBtn.addEventListener("click", () => {
        const result = recruitScav();
        if (result && result.ok) {
          pushToast("New scav recruited.");
          refresh();
        }
      });
    }
  }
  wireInteractions();

  // Exposed so renderAll() (called when Infirmary/Barracks/Workshop opens
  // on top of this popup and then closes) can refresh this popup's numbers
  // in place instead of leaving them stale underneath.
  refreshBuildingPopup = () => {
    if (!document.body.contains(overlay)) { refreshBuildingPopup = null; return; }
    refresh();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===== STASH SCREEN =====
// Read-only view of every piece of gear sitting in the shared stash.
// Reuses renderStashPanel() as-is — that function already returns just the
// inner content, same convention as the other panel renderers. Same compact
// popup shape as the Raid Log (modal-overlay + settings-box) rather than a
// full-screen takeover, since this is opened from the campfire chest now
// and a quick glance shouldn't swallow the whole screen.
function openStashScreen() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> STASH</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll">${renderStashPanel()}</div>
        <button class="btn" id="closeStashBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    overlay.remove();
    renderAll();
  }
  overlay.querySelector("#closeStashBtn").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===== FLEA MARKET =====
// Unlocked by building the Radio Tower. A handful of one-line offers from
// randomly-named sellers, refreshed once per in-game day — riding the
// same wall-clock day counter the day/night cycle already uses (see
// getDayNumber), rather than its own timer. Every offer either costs
// resources, costs a specific piece of gear the player already owns (a
// barter), or both, and pays out either gear or a resource bundle. There
// is no selling-for-gold path here on purpose: the market is something
// the player buys from, not a way to launder gear into resources.
const FLEA_BASE_OFFERS = 3;

// A few stock lines so each day's sellers feel like distinct people
// without needing a hand-authored NPC catalog — paired with a fresh
// pickName() every refresh, the same name pool scavs themselves draw
// from, so a seller might even share a name with someone on the roster.
// That's a feature, not a bug: it's the same wasteland, not a separate
// cast of characters.
const FLEA_SELLER_LINES = [
  "Got more than I need. Make it worth the walk back.",
  "Found this further out than I'd like to admit. Yours if the price is right.",
  "Not haggling. Take it or leave it.",
  "Last one of these I'm parting with. Don't ask where it came from.",
  "Picked clean from a place I won't be going back to.",
  "Trade fair and I'll remember you next time through.",
  "Heavier than it looks. Lighter on my conscience once it's gone.",
  "Don't get many chances to offload this kind of thing out here.",
];

// Builds one offer. `kind` controls the shape of give/get:
// - "buyGear": pay resources, receive a piece of gear (tier-gated by the
//   Armory like everything else, but allowed one tier above what's
//   currently findable on raids — a reason to save up rather than wait).
// - "buyBundle": pay one resource, receive a bundle of another — useful
//   when a camp is scrap-rich but meds- or gold-poor.
// - "barter": pay a specific gear item the player must own (a duplicate,
//   a low-tier hand-me-down) plus a smaller resource top-up, receive a
//   better piece of gear. Only ever offered for slots/tiers that
//   realistically exist in the gear catalog — never a unique.
// - "keySell": pay resources, receive a dungeon key. Rolled as its own
//   check before the normal kind pick below (see KEY_SELL_CHANCE),
//   deliberately not just another weighted option in that pick — a flat
//   weight there would make keys far too common given how few other
//   `kind`s there are to share weight with. This is the "VERY small
//   chance" secondary path; the primary one is a dungeon boss kill (see
//   resolveDungeonKeyDrop).
const KEY_SELL_CHANCE = 0.015; // chance, per individual offer rolled, of being a key listing instead
function rollFleaOffer() {
  if (Math.random() < KEY_SELL_CHANCE) {
    const seller = pickName();
    const line = pick(FLEA_SELLER_LINES);
    const key = pick(Object.values(DUNGEON_KEYS));
    // Priced steep and in gold specifically — keys are an end-game item,
    // and a camp that can casually afford one off a scrap surplus would
    // undercut the entire point of them being a rare boss drop otherwise.
    const cost = randInt(120, 200);
    return { id: cryptoRandomId(), seller, line, kind: "keySell", give: { gold: cost }, get: { keyId: key.id, keyName: key.name } };
  }

  const kind = pick(["buyGear", "buyGear", "buyBundle", "barter"]); // buyGear weighted slightly more common
  const seller = pickName();
  const line = pick(FLEA_SELLER_LINES);

  if (kind === "buyBundle") {
    const pairs = [
      ["scrap", "meds"], ["scrap", "gold"], ["meds", "scrap"], ["gold", "scrap"],
      ["scrap", "food"], ["food", "scrap"], ["gold", "food"], ["food", "gold"],
    ];
    const [payRes, getRes] = pick(pairs);
    const getAmt = getRes === "gold" ? randInt(3, 8) : getRes === "meds" ? randInt(2, 5) : getRes === "food" ? randInt(3, 9) : randInt(15, 35);
    const rate = { scrap: 1, gold: 6, meds: 4, food: 3 }; // rough relative value, for pricing the pay side off the get side
    const payAmt = Math.max(1, Math.round((getAmt * rate[getRes]) / rate[payRes] * 0.8)); // priced under raw rate — it's a deal, not a tax
    return { id: cryptoRandomId(), seller, line, kind, give: { [payRes]: payAmt }, get: { [getRes]: getAmt } };
  }

  const slot = pick(["weapon", "armor", "pack"]);
  const maxTier = gearUnlockTier();

  if (kind === "barter") {
    // The cost side: any non-unique, non-improvised item already in the
    // catalog at tier 1+ (don't ask for someone's bare hands). The reward
    // side: a strictly better item, one tier up, same slot.
    const giveable = GEAR_CATALOG[slot].filter((g) => g.tier >= 1 && !g.unique && !g.improvised);
    const giveItem = pick(giveable);
    const rewardPool = GEAR_CATALOG[slot].filter((g) => g.tier === giveItem.tier + 1 && !g.unique && !g.improvised);
    const getItem = rewardPool.length ? pick(rewardPool) : null;
    if (!getItem) return rollFleaOffer(); // no item a tier up in this slot — reroll into a different shape
    const topUp = randInt(5, 20);
    const topUpRes = pick(["scrap", "gold"]);
    return {
      id: cryptoRandomId(), seller, line, kind, slot,
      give: { gearId: giveItem.id, gearName: giveItem.name, [topUpRes]: topUp },
      get: { gearId: getItem.id, gearName: getItem.name },
    };
  }

  // buyGear — allowed one tier above what's currently raid-findable, as
  // a deliberate small luxury: gold (and patience) can outrun the Armory.
  const findable = GEAR_CATALOG[slot].filter((g) => g.tier >= 1 && g.tier <= maxTier + 1 && !g.unique && !g.improvised);
  if (!findable.length) return rollFleaOffer();
  const getItem = pick(findable);
  const overTier = getItem.tier > maxTier;
  const baseCost = getItem.cost || { scrap: 20 };
  const markup = overTier ? 1.8 : 1.3; // above-tier gear costs a real premium, in-tier gear a modest one
  const give = {};
  for (const res in baseCost) give[res] = Math.max(1, Math.round(baseCost[res] * markup));
  return { id: cryptoRandomId(), seller, line, kind, slot, give, get: { gearId: getItem.id, gearName: getItem.name } };
}

// Small id helper for offers — they only ever need to be unique within a
// single day's batch, not globally, but crypto.randomUUID (when available)
// is simplest and never collides in practice.
function cryptoRandomId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `flea-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function fleaOfferCount() {
  const lvl = STATE.upgrades.radioTower;
  return lvl > 0 ? FLEA_BASE_OFFERS + (lvl - 1) : 0;
}

// Lazily (re)generates the market on whatever day it's first touched —
// called every time the screen opens, not on a separate timer, so an
// idle camp doesn't burn through days of offers it never saw. Riding
// getDayNumber() means a multi-day absence just means "today's fresh
// batch" rather than replaying every missed day's offers.
function getFleaMarket() {
  const today = getDayNumber();
  if (!STATE.fleaMarket || STATE.fleaMarket.generatedOnDay !== today) {
    const count = fleaOfferCount();
    const offers = [];
    for (let i = 0; i < count; i++) offers.push(rollFleaOffer());
    STATE.fleaMarket = { generatedOnDay: today, offers };
    saveState();
  }
  return STATE.fleaMarket;
}

// Whether the player can currently afford an offer's give side — resource
// cost via canAfford, plus owning the bartered gear item if there is one.
function canAffordFleaOffer(offer) {
  const resCost = {};
  for (const k in offer.give) {
    if (k !== "gearId" && k !== "gearName") resCost[k] = offer.give[k];
  }
  if (!canAfford(resCost)) return false;
  if (offer.give.gearId && stashCount(offer.slot, offer.give.gearId) < 1) return false;
  return true;
}

// Executes a purchase: spends the resource side, removes the bartered
// gear if any, and adds whatever the offer pays out. Returns false
// without touching state if the offer can no longer be afforded (e.g.
// the player spent the gear it wanted elsewhere first) or doesn't exist.
function purchaseFleaOffer(offerId) {
  const market = getFleaMarket();
  const offer = market.offers.find((o) => o.id === offerId);
  if (!offer || !canAffordFleaOffer(offer)) return false;

  const resCost = {};
  for (const k in offer.give) {
    if (k !== "gearId" && k !== "gearName") resCost[k] = offer.give[k];
  }
  spend(resCost);
  if (offer.give.gearId) removeFromStash(offer.slot, offer.give.gearId, 1);

  if (offer.get.gearId) {
    addToStash(offer.slot, offer.get.gearId, 1);
  } else if (offer.get.keyId) {
    addDungeonKey(offer.get.keyId, 1);
  } else {
    for (const res in offer.get) {
      STATE.resources[res] = (STATE.resources[res] || 0) + offer.get[res];
    }
  }

  market.offers = market.offers.filter((o) => o.id !== offerId);
  saveState();
  return true;
}

// One card per offer: seller name + their one-line flavor, what they
// want (give) and what they're offering (get), and a Buy/Trade button —
// disabled with a reason when the player can't currently cover it. Gear
// sides render with their slot icon for a quick visual read; resource
// sides just list amount + name, same convention as every other cost
// line in the game (upgrade cards, recruit, etc.).
function renderFleaOfferCard(offer) {
  const formatSide = (side) => {
    const parts = [];
    if (side.gearName) parts.push(escapeHtml(side.gearName));
    if (side.keyName) parts.push(escapeHtml(side.keyName));
    for (const k in side) {
      if (k !== "gearId" && k !== "gearName" && k !== "keyId" && k !== "keyName") parts.push(`${side[k]} ${k}`);
    }
    return parts.join(" + ");
  };
  const afford = canAffordFleaOffer(offer);
  const missingGear = offer.give.gearId && stashCount(offer.slot, offer.give.gearId) < 1;
  const actionLabel = offer.kind === "barter" ? "Trade" : "Buy";
  return `
    <div class="upgrade-card flea-offer-card">
      <div class="upgrade-top">
        <div class="upgrade-name">${escapeHtml(offer.seller)}</div>
      </div>
      <div class="flea-offer-line">"${escapeHtml(offer.line)}"</div>
      <div class="flea-offer-trade">
        <div class="flea-offer-side">
          <div class="flea-offer-side-label">Wants</div>
          <div class="${missingGear ? "flea-offer-missing" : ""}">${formatSide(offer.give)}</div>
        </div>
        <div class="flea-offer-arrow">→</div>
        <div class="flea-offer-side">
          <div class="flea-offer-side-label">Offers</div>
          <div class="flea-offer-get">${formatSide(offer.get)}</div>
        </div>
      </div>
      <button class="btn secondary" data-flea-offer-id="${offer.id}" ${!afford ? "disabled" : ""}>
        ${afford ? actionLabel : (missingGear ? "Don't have it" : "Can't afford")}
      </button>
    </div>
  `;
}

function renderFleaMarketPanel() {
  const market = getFleaMarket();
  if (market.offers.length === 0) {
    return `<div class="empty-note">Nobody's selling anything today. Check back tomorrow — offers refresh once a day.</div>`;
  }
  return market.offers.map(renderFleaOfferCard).join("");
}

// ===== FLEA MARKET SCREEN =====
// Same compact modal-overlay/settings-box popup as Stash and Raid Log.
// Only reachable once the Radio Tower is built — openBuildingPopup's
// "Open Flea Market" button is the sole entry point, gated there on
// STATE.upgrades.radioTower >= 1, so this never needs to re-check that
// itself.
function openFleaMarketScreen() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> FLEA MARKET — DAY ${getDayNumber()}</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll" id="fleaMarketBody">${renderFleaMarketPanel()}</div>
        <button class="btn" id="closeFleaMarketBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    refreshFleaMarketScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector("#fleaMarketBody").innerHTML = renderFleaMarketPanel();
    refreshWarehouseTooltip();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeFleaMarketBtn").addEventListener("click", closeModal);
    overlay.querySelectorAll("[data-flea-offer-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-flea-offer-id");
        const ok = purchaseFleaOffer(id);
        if (ok) {
          pushToast("Deal done.");
          refresh();
        }
      });
    });
  }
  wireInteractions();

  // Same pattern as the building popup's own refresh hook — if this
  // screen is somehow still open when renderAll() fires (it won't
  // normally be, since closing it is the only way out, but staying
  // consistent with every other popup costs nothing), keep it current.
  refreshFleaMarketScreen = () => {
    if (!document.body.contains(overlay)) { refreshFleaMarketScreen = null; return; }
    refresh();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===== RAID LOG SCREEN =====
// Read-only history of recent raids. Reuses renderRaidLogPanel() as-is.
function openRaidLogScreen() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> RAID LOG</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll">${renderRaidLogPanel()}</div>
        <button class="btn" id="closeRaidLogBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    overlay.remove();
    renderAll();
  }
  overlay.querySelector("#closeRaidLogBtn").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===== PRESTIGE MENU (New Game+) =====
// Picker state lives at module scope, same pattern as dungeonGroup/
// selectedDungeonId — reset every time the menu opens (see openPrestigeMenu)
// rather than persisted, since there's nothing to resume: either you
// confirm a prestige in this sitting or the picks don't matter anymore.
let prestigeScavId = null;
let prestigeItemPicks = []; // array of { slot, id }, capped at NG_PLUS_MAX_CARRY_ITEMS

function renderPrestigeScavList() {
  const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
  if (!livingScavs.length) return `<div class="empty-note">No scavs to carry forward.</div>`;
  return livingScavs.map((scav) => {
    const isActive = scav.id === prestigeScavId;
    const statusLabel = scav.status === "ready" ? `${scav.hp}/${effectiveMaxHp(scav)} HP`
      : scav.status === "away" ? "On raid — comes back ready either way"
      : scav.status === "healing" ? "Healing — comes back ready either way"
      : scav.status === "resting" ? "Resting — comes back ready either way"
      : "Defending — comes back ready either way";
    return `
      <div class="rs-scav-pick ${isActive ? "active" : ""}" data-prestige-scav-id="${scav.id}">
        <div class="rsp-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
        <div class="rsp-hp">${statusLabel}</div>
      </div>
    `;
  }).join("");
}

function renderPrestigeItemList() {
  const eligible = getEligibleCarryOverItems();
  if (!eligible.length) {
    return `<div class="empty-note">Nothing eligible in the stash right now — only regular tier 1-4 gear can come with you, not unique boss/dungeon drops.</div>`;
  }
  const fullUp = prestigeItemPicks.length >= NG_PLUS_MAX_CARRY_ITEMS;
  return eligible.map(({ slot, id, item, count }) => {
    const isPicked = prestigeItemPicks.some((p) => p.slot === slot && p.id === id);
    const disabledByFull = !isPicked && fullUp;
    const statLabel = slot === "weapon" ? `+${item.combat} combat` : slot === "armor" ? `+${item.defense} defense` : `+${Math.round(item.lootBonus * 100)}% loot`;
    return `
      <div class="rs-scav-pick ${isPicked ? "active" : ""} ${disabledByFull ? "full-disabled" : ""}" data-prestige-item-slot="${slot}" data-prestige-item-id="${id}">
        <div class="rsp-name">${escapeHtml(item.name)}<span class="lvl">${escapeHtml(statLabel)}</span></div>
        <div class="rsp-hp">${count > 1 ? `×${count} in stash` : "in stash"}</div>
      </div>
    `;
  }).join("");
}

function renderPrestigeBody() {
  const level = STATE.ngPlusLevel || 0;
  const nextLevel = level + 1;
  const afford = canAfford(NG_PLUS_COST);
  const scav = STATE.scavs.find((s) => s.id === prestigeScavId);
  const ready = !!scav && scav.status !== "dead" && afford;

  const riskPct = Math.round(NG_PLUS_RISK_PER_LEVEL * 100);
  const lootPct = Math.round(NG_PLUS_LOOT_PER_LEVEL * 100);

  return `
    <div class="event-warning" style="margin-bottom:14px;">
      Starting New Game+ resets the camp completely — every building, every resource, the rest of the roster, all of it — in exchange for going in harder and richer next time. This can't be undone once confirmed.
    </div>
    <div class="upgrade-desc" style="margin-bottom:10px;">
      Currently <b style="color:var(--brass-bright);">${level === 0 ? "NG+0 (base game)" : `NG+${level}`}</b>. Starting another run moves you to <b style="color:var(--brass-bright);">NG+${nextLevel}</b>: every site's risk climbs another ${riskPct}%, and loot climbs another ${lootPct}%, stacking with every prestige before it.
    </div>
    <div class="upgrade-cost ${afford ? "afford" : "short"}" style="margin-bottom:14px;">${Object.entries(NG_PLUS_COST).map(([res, amt]) => `${amt} ${res}`).join(" + ")}</div>

    <div class="section-divider" style="margin-top:0;">Bring one scav with you</div>
    <div class="raidlog-modal-scroll" style="max-height:160px;">
      <div class="rs-scav-grid" id="prestigeScavList">${renderPrestigeScavList()}</div>
    </div>

    <div class="section-divider">Bring up to ${NG_PLUS_MAX_CARRY_ITEMS} items (regular gear only — no uniques)</div>
    <div class="raidlog-modal-scroll" style="max-height:160px;">
      <div class="rs-scav-grid" id="prestigeItemList">${renderPrestigeItemList()}</div>
    </div>

    <button class="btn" id="confirmPrestigeBtn" style="margin-top:14px;" ${!ready ? "disabled" : ""}>
      ${!afford ? "Not enough gold" : !scav ? "Pick a scav first" : "Start New Game+"}
    </button>
  `;
}

function openPrestigeMenu() {
  prestigeScavId = null;
  prestigeItemPicks = [];

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> PRESTIGE — NEW GAME+</div>
      <div class="panel-body" id="prestigeBody">${renderPrestigeBody()}</div>
    </div>
  `;
  document.body.appendChild(overlay);

  function refresh() {
    overlay.querySelector("#prestigeBody").innerHTML = renderPrestigeBody();
    wireBody();
  }

  function wireBody() {
    overlay.querySelectorAll("[data-prestige-scav-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-prestige-scav-id");
        prestigeScavId = prestigeScavId === id ? null : id;
        refresh();
      });
    });

    overlay.querySelectorAll("[data-prestige-item-slot]").forEach((card) => {
      card.addEventListener("click", () => {
        const slot = card.getAttribute("data-prestige-item-slot");
        const id = card.getAttribute("data-prestige-item-id");
        const idx = prestigeItemPicks.findIndex((p) => p.slot === slot && p.id === id);
        if (idx !== -1) {
          prestigeItemPicks.splice(idx, 1);
        } else {
          if (prestigeItemPicks.length >= NG_PLUS_MAX_CARRY_ITEMS) return; // full — see the disabled state in renderPrestigeItemList
          prestigeItemPicks.push({ slot, id });
        }
        refresh();
      });
    });

    const confirmBtn = overlay.querySelector("#confirmPrestigeBtn");
    if (confirmBtn) {
      wireConfirmButton(confirmBtn, "Click again to confirm — this can't be undone", () => {
        const result = startNewGamePlus(prestigeScavId, prestigeItemPicks);
        if (result.ok) {
          overlay.remove();
          pushToast(`New Game+${result.ngPlusLevel} begins.`);
          renderAll();
        } else {
          pushToast(result.reason || "Couldn't start New Game+.", true);
          refresh();
        }
      });
    }
  }

  wireBody();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      renderAll();
    }
  });
}

// ===== CODEX =====
// A reference notebook covering everything you'll run into: every boss,
// every site, every piece of gear, every camp building. Pure reference —
// nothing here depends on live game state, so unlike the other side
// screens it never needs a refresh hook.

let codexActiveTab = "bosses";

function renderCodexBossesTab() {
  const entries = MAPS.map((map) => {
    const boss = BOSS_CATALOG[map.id];
    if (!boss) return "";
    return `
      <div class="codex-entry">
        <div class="codex-entry-name">${escapeHtml(boss.name)}</div>
        <div class="codex-entry-meta">${escapeHtml(map.name)} · <span class="codex-risk ${map.risk}">${map.risk}</span></div>
        <div class="codex-entry-desc">${escapeHtml(boss.desc)}</div>
      </div>
    `;
  }).join("");
  return `<div class="codex-entry-list">${entries}</div>`;
}

// Common hostile encounters — distinct from Bosses (one named, rare,
// per-map adversary with a unique drop) in that these are recurring
// threat-types that can turn up on any map at or above their minRisk,
// rolled through the same RAID_EVENTS pool as environmental hazards like
// Bad Air or Structure's Failing. Filters RAID_EVENTS for `enemy: true`
// rather than keeping a separate catalog, so this tab can never drift out
// of sync with what can actually fire mid-raid.
function renderCodexEnemiesTab() {
  const enemies = RAID_EVENTS.filter((e) => e.enemy);
  const riskLabel = (mult) => mult <= 1.0 ? "low" : mult <= 2.0 ? "medium" : mult <= 3.0 ? "high" : "extreme";
  const entries = enemies.map((enemy) => {
    // Excludes noEvents maps (the arena) — they can never actually have
    // any mid-raid encounter at all (see eligibleRaidEvents), so listing
    // one here on riskMult alone would be misleading about where this
    // enemy can really show up.
    const maps = MAPS.filter((m) => m.riskMult >= enemy.minRisk && !m.noEvents);
    // A short list of specific maps is useful at a glance; a near-total
    // list (Looters show up almost everywhere) just reads as clutter, so
    // it collapses to a risk-tier phrase instead once it gets long.
    const where = maps.length <= 5
      ? `Encountered on: ${maps.map((m) => m.name).join(", ")}`
      : `Encountered on ${maps.length} sites — anywhere ${riskLabel(enemy.minRisk)} risk or above`;
    return `
      <div class="codex-entry">
        <div class="codex-entry-name">${escapeHtml(enemy.enemyName)}</div>
        <div class="codex-entry-meta">${escapeHtml(where)}</div>
        <div class="codex-entry-desc">${escapeHtml(enemy.desc)}</div>
      </div>
    `;
  }).join("");
  return `<div class="codex-entry-list">${entries}</div>`;
}

function renderCodexLocationsTab() {
  const entries = MAPS.map((map) => {
    return `
      <div class="codex-entry">
        <div class="codex-entry-art" style="background-image:url('${MAP_ART[map.id]}')"></div>
        <div class="codex-entry-name">${escapeHtml(map.name)}</div>
        <div class="codex-entry-meta">
          <span class="codex-risk ${map.risk}">${map.risk}</span> · Lv.${map.minLevel}+ · ${map.duration}s
        </div>
        <div class="codex-entry-desc">${escapeHtml(map.desc)}</div>
      </div>
    `;
  }).join("");
  return `<div class="codex-entry-list codex-locations-list">${entries}</div>`;
}

function renderCodexItemsTab() {
  const sections = ["weapon", "armor", "pack"].map((slot) => {
    const items = GEAR_CATALOG[slot].map((item) => {
      const statLabel = equipSlotStatLabel(slot, item);
      const boss = item.unique ? getBossForMap(item.bossMapId) : null;
      const dropNote = boss ? `<div class="codex-entry-meta">Dropped by <b>${escapeHtml(boss.name)}</b> — rare chance on a successful boss kill</div>` : "";
      return `
        <div class="codex-entry">
          <div class="codex-entry-icon">${getGearIconSvg(slot, item.id)}</div>
          <div class="codex-entry-name">${escapeHtml(item.name)}${item.improvised ? `<span class="codex-improvised-tag">Improvised</span>` : ""}${item.unique ? `<span class="codex-unique-tag">Unique</span>` : ""}</div>
          <div class="codex-entry-meta">${escapeHtml(statLabel)}</div>
          ${dropNote}
          <div class="codex-entry-desc">${escapeHtml(item.desc || "")}</div>
        </div>
      `;
    }).join("");
    return `
      <div class="codex-item-section">
        <div class="codex-section-label">${escapeHtml(SLOT_LABELS[slot])}s</div>
        <div class="codex-entry-list">${items}</div>
      </div>
    `;
  }).join("");
  return sections;
}

function renderCodexCampTab() {
  const entries = UPGRADE_CATALOG.map((def) => {
    return `
      <div class="codex-entry">
        <div class="codex-entry-icon codex-building-icon">${buildingSvgMarkup(def.id, 3)}</div>
        <div class="codex-entry-name">${escapeHtml(def.name)}</div>
        <div class="codex-entry-meta">${escapeHtml(def.desc)}</div>
        <div class="codex-entry-desc">${escapeHtml(def.lore || "")}</div>
      </div>
    `;
  }).join("");
  return `<div class="codex-entry-list">${entries}</div>`;
}

const CODEX_TABS = [
  { id: "bosses", label: "Bosses", render: renderCodexBossesTab },
  { id: "enemies", label: "Enemies", render: renderCodexEnemiesTab },
  { id: "locations", label: "Locations", render: renderCodexLocationsTab },
  { id: "items", label: "Items", render: renderCodexItemsTab },
  { id: "camp", label: "Camp", render: renderCodexCampTab },
];

function renderCodexBody() {
  const active = CODEX_TABS.find((t) => t.id === codexActiveTab) || CODEX_TABS[0];
  return active.render();
}

function openCodexScreen() {
  const overlay = document.createElement("div");
  overlay.className = "codex-screen";
  const tabsHtml = CODEX_TABS.map((tab) => `
    <button class="codex-tab ${tab.id === codexActiveTab ? "active" : ""}" data-codex-tab="${tab.id}">${escapeHtml(tab.label)}</button>
  `).join("");

  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">CODEX</div>
      <button class="rs-back-btn" id="closeCodexBtn">← Back to Camp</button>
    </div>
    <div class="codex-body">
      <div class="codex-tabs">${tabsHtml}</div>
      <div class="codex-page" id="codexPage">${renderCodexBody()}</div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelectorAll("[data-codex-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-codex-tab") === codexActiveTab);
    });
    overlay.querySelector("#codexPage").innerHTML = renderCodexBody();
    overlay.querySelector("#codexPage").scrollTop = 0;
  }

  overlay.querySelector("#closeCodexBtn").addEventListener("click", closeScreen);
  overlay.querySelectorAll("[data-codex-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      codexActiveTab = btn.getAttribute("data-codex-tab");
      refresh();
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}

async function openSettingsPanel() {
  const isElectron = !!window.outpostSettings;
  let current = { resolution: "1600x900", fullscreen: false };
  let presets = ["1280x800", "1600x900", "1920x1080"];

  if (isElectron) {
    try {
      current = await window.outpostSettings.getSettings();
      presets = await window.outpostSettings.getPresets();
    } catch (e) {
      console.error("Could not load settings:", e);
    }
  }

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const browserNotice = isElectron
    ? ""
    : `<div class="settings-notice">Display settings need the desktop app — this works once you've built and launched OUTPOST.exe.</div>`;

  const resOptions = presets.map((key) => {
    const active = key === current.resolution;
    const label = RESOLUTION_LABELS[key] || key;
    return `<div class="gear-opt res-opt ${active ? "active" : ""} ${!isElectron ? "disabled" : ""}" data-res-key="${key}">${escapeHtml(label)}</div>`;
  }).join("");

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> SETTINGS</div>
      <div class="settings-tabs">
        <button class="settings-tab active" data-tab="settings">Settings</button>
        <button class="settings-tab" data-tab="patchnotes">Patch Notes</button>
      </div>
      <div class="panel-body settings-tab-panel" data-tab-panel="settings">
        ${browserNotice}
        <div class="section-divider" style="margin-top:0;">Display</div>
        <div class="launch-row" style="margin-top:10px;">
          <span class="lbl">Fullscreen</span>
        </div>
        <button class="btn secondary" id="fullscreenToggleBtn" ${!isElectron ? "disabled" : ""}>
          ${current.fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        </button>
        <div class="launch-row" style="margin-top:16px;">
          <span class="lbl">Window resolution</span>
        </div>
        <div class="gear-picker">${resOptions}</div>
        <div class="section-divider">Game</div>
        <button class="btn danger" id="exitGameBtn" ${!isElectron ? "disabled" : ""}>Exit Game</button>
        ${!isElectron ? `<div class="settings-notice" style="margin-top:8px;margin-bottom:0;">Closing the app this way also needs the desktop build — just close the browser tab for now.</div>` : ""}
        <button class="btn danger" id="wipeProgressBtn" style="margin-top:10px;">Reset Progress</button>
        <div class="settings-notice" style="margin-top:8px;margin-bottom:0;">Deletes your save completely — roster, base upgrades, resources, everything. Click twice to confirm. Can't be undone.</div>
      </div>
      <div class="panel-body settings-tab-panel" data-tab-panel="patchnotes" style="display:none;">
        ${renderPatchNotesTab()}
      </div>
      <div class="modal-result" style="display:block;">
        <button class="btn" id="closeSettingsBtn">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });

  overlay.querySelector("#closeSettingsBtn").addEventListener("click", () => overlay.remove());

  overlay.querySelectorAll(".settings-tab").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const targetTab = tabBtn.getAttribute("data-tab");
      overlay.querySelectorAll(".settings-tab").forEach((b) => b.classList.toggle("active", b === tabBtn));
      overlay.querySelectorAll(".settings-tab-panel").forEach((panel) => {
        panel.style.display = panel.getAttribute("data-tab-panel") === targetTab ? "block" : "none";
      });
    });
  });

  const exitBtn = overlay.querySelector("#exitGameBtn");
  if (isElectron) {
    wireConfirmButton(exitBtn, "Click again to confirm", () => {
      window.outpostSettings.quitGame();
    });
  }

  const wipeBtn = overlay.querySelector("#wipeProgressBtn");
  wireConfirmButton(wipeBtn, "Click again to wipe everything", () => {
    wipeProgress();
    overlay.remove();
  });

  const fsBtn = overlay.querySelector("#fullscreenToggleBtn");
  if (isElectron) {
    fsBtn.addEventListener("click", async () => {
      const next = !current.fullscreen;
      current = await window.outpostSettings.setFullscreen(next);
      fsBtn.textContent = current.fullscreen ? "Exit fullscreen" : "Enter fullscreen";
      overlay.querySelectorAll(".res-opt").forEach((opt) => {
        opt.classList.toggle("active", opt.getAttribute("data-res-key") === current.resolution);
      });
    });
  }

  overlay.querySelectorAll(".res-opt").forEach((opt) => {
    if (!isElectron) return;
    opt.addEventListener("click", async () => {
      const key = opt.getAttribute("data-res-key");
      current = await window.outpostSettings.setResolution(key);
      overlay.querySelectorAll(".res-opt").forEach((o) => {
        o.classList.toggle("active", o.getAttribute("data-res-key") === key);
      });
      fsBtn.textContent = current.fullscreen ? "Exit fullscreen" : "Enter fullscreen";
    });
  });
}



function pushToast(msg, isDeath) {
  const wrap = document.getElementById("toastWrap");
  const el = document.createElement("div");
  el.className = "toast" + (isDeath ? " death-toast" : "");
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity 0.4s";
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 400);
  }, 4200);
}

// ===== FIELD REPORT (signature element) =====

const REPORT_LINES = {
  travel: [
    "{name} slips out through the perimeter gap.",
    "{name} moves low along the tree line toward {map}.",
    "{name} crosses the open ground at a jog, watching the windows.",
    "{name} reaches the edge of {map}. No movement yet.",
  ],
  searchGood: [
    "Inside now. Shelves mostly intact — this is promising.",
    "Found a stash room, half-buried under debris.",
    "Quiet so far. {name} works fast, room to room.",
    "A locked cabinet gives way. Worth the effort.",
  ],
  searchTense: [
    "Something moved two rooms over. {name} freezes, waits it out.",
    "Footsteps on the floor above. Not {name}'s.",
    "A noise outside — wind, probably. Probably.",
    "{name} backs away from a door that won't sit right.",
  ],
  fightWin: [
    "Contact. {name} takes the first swing and it lands.",
    "A scrap of a fight in the doorway — {name} comes out on top.",
    "Close call near the loading dock, but {name} holds the line.",
  ],
  fightLose: [
    "Contact. It's faster than {name} expected.",
    "The exchange goes wrong fast.",
    "{name} doesn't see it coming until it's already too close.",
  ],
  extractGood: [
    "{name} shoulders the haul and starts back.",
    "Pack's heavier going out than it was coming in. Good sign.",
    "{name} clears the perimeter, breathing hard but upright.",
  ],
  extractHurt: [
    "{name} limps back through the gap, favoring one side.",
    "Bleeding, but moving under their own power. {name} makes it back.",
  ],
  death: [
    "Radio goes quiet on {name}'s channel.",
    "No further contact from {name}.",
    "{name} doesn't check back in.",
  ],
};

function pick(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function fmtLine(template, vars) {
  const filled = template.replace(/\{(\w+)\}/g, (_, k) => vars[k] || "");
  return filled.charAt(0).toUpperCase() + filled.slice(1);
}

// Arena outcomes get their own short script instead of running through
// the generic travel/search/fight beats above — those are written for a
// raid with real survival stakes, and "X moves low along the tree line"
// doesn't fit a tournament fight in a fixed ring with a referee and a
// crowd. Much shorter too: there's only one real beat (won or lost),
// since nothing else happens during an arena fight by design.
function buildArenaReportScript(outcome) {
  const name = outcome.scavNames[0];
  const lines = [];
  lines.push(`${name} steps into the ring at ${outcome.map.name}.`);
  if (outcome.won) {
    lines.push(pick([
      `${name} takes the bout — the crowd actually means it this time.`,
      `${name} comes out on top. Whoever was running the book just paid out.`,
      `${name} wins it clean. Worth the walk back, for once.`,
    ]));
  } else {
    lines.push(pick([
      `${name} doesn't take this one. Walks out under their own power, at least.`,
      `${name} loses the bout. No shame in it — most of the book does, most nights.`,
      `${name} comes up short. Nothing for it but the walk home.`,
    ]));
  }
  return lines;
}

function buildReportScript(outcome) {
  if (outcome.arena) return buildArenaReportScript(outcome);
  // For shared narrative lines, use a collective phrase ("Wren Holt", "the
  // pair", "the trio") so singular-verb templates ("{name} moves low...")
  // stay grammatically correct whether it's one scav or a group. Individual
  // names are used later for the per-scav resolution lines, where each gets
  // their own sentence anyway.
  const groupWord = outcome.scavNames.length === 3 ? "the trio" : outcome.scavNames.length === 2 ? "the pair" : outcome.scavNames[0];
  const vars = { name: groupWord, map: outcome.map.name };
  const lines = [];
  lines.push(fmtLine(pick(REPORT_LINES.travel), vars));

  // A boss fight is the bigger deal of the two, so it gets mentioned ahead
  // of any regular mid-raid event.
  if (outcome.bossLog) {
    lines.push(`${outcome.bossLog.bossName} — camp calls it: ${outcome.bossLog.optionLabel.toLowerCase()}.`);
  }

  // If a mid-raid event fired, mention it and the call that was made before
  // moving on to the regular search/fight beats — it's the reason whatever
  // happens next happens the way it does.
  if (outcome.eventLog && outcome.eventLog.length) {
    for (const ev of outcome.eventLog) {
      lines.push(`${ev.eventTitle} — camp calls it: ${ev.optionLabel.toLowerCase()}.`);
    }
  }

  const tense = outcome.map.riskMult > 2;
  if (tense || Math.random() < 0.5) {
    lines.push(fmtLine(pick(REPORT_LINES.searchTense), vars));
  } else {
    lines.push(fmtLine(pick(REPORT_LINES.searchGood), vars));
  }

  if (!outcome.survived) {
    lines.push(fmtLine(pick(REPORT_LINES.fightLose), vars));
  } else if (outcome.map.riskMult > 1.5) {
    lines.push(fmtLine(pick(REPORT_LINES.fightWin), vars));
  } else {
    lines.push(fmtLine(pick(REPORT_LINES.searchGood), vars));
  }

  if (outcome.gearFind) {
    lines.push(`Someone pockets a ${outcome.gearFind.item.name.toLowerCase()} off the floor — still usable.`);
  }

  if (outcome.bossDrop) {
    lines.push(`${outcome.bossLog ? outcome.bossLog.bossName : "It"} didn't get up again — and left ${outcome.bossDrop.item.name} behind.`);
  }

  if (outcome.keyDrop) {
    lines.push(`Tucked away in what was left: another ${outcome.keyDrop.key.name}.`);
  }

  // One line per scav, so a mixed-outcome group raid (some make it,
  // some don't) reads clearly instead of collapsing into one verdict.
  for (const detail of outcome.perScav) {
    const soloVars = { name: detail.name, map: outcome.map.name };
    if (detail.died) {
      lines.push(fmtLine(pick(REPORT_LINES.death), soloVars));
    } else if (detail.injured) {
      lines.push(fmtLine(pick(REPORT_LINES.extractHurt), soloVars));
    } else {
      lines.push(fmtLine(pick(REPORT_LINES.extractGood), soloVars));
    }
  }
  return lines;
}

function showCampEventModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  let selected = new Set();

  function renderBody() {
    const readyScavs = STATE.scavs.filter((s) => s.status === "ready");
    const odds = Math.round(calcDefenseOdds(selected.size) * 100);

    const rows = readyScavs.map((scav) => {
      const isChecked = selected.has(scav.id);
      return `
        <div class="defend-pick ${isChecked ? "active" : ""}" data-defend-scav-id="${scav.id}">
          <span class="defend-pick-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></span>
          <span class="defend-pick-hp">${scav.hp}/${effectiveMaxHp(scav)} HP</span>
        </div>
      `;
    }).join("") || `<div class="empty-note">No scavs available to defend — everyone's out on a raid.</div>`;

    return `
      <div class="event-warning">Something followed a scav back to camp. Pick defenders — more hands means better odds, but they can't be sent on raids until this is settled.</div>
      <div class="section-divider" style="margin-top:0;">Available scavs</div>
      <div class="defend-pick-list">${rows}</div>
      <div class="defend-odds-row">
        <div class="o-item"><span class="o-lbl">Defense odds</span><span class="o-val survive">${odds}%</span></div>
        <div class="o-item"><span class="o-lbl">Defenders</span><span class="o-val" style="color:var(--bone);">${selected.size}</span></div>
      </div>
    `;
  }

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot"></span> CAMP UNDER THREAT</div>
      <div class="panel-body" id="campEventBody">${renderBody()}</div>
      <div class="modal-result" style="display:block;">
        <button class="btn danger" id="confirmDefenseBtn">Commit Defenders</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function wireRows() {
    overlay.querySelectorAll("[data-defend-scav-id]").forEach((row) => {
      row.addEventListener("click", () => {
        const id = row.getAttribute("data-defend-scav-id");
        if (selected.has(id)) {
          selected.delete(id);
        } else {
          selected.add(id);
        }
        overlay.querySelector("#campEventBody").innerHTML = renderBody();
        wireRows();
      });
    });
  }
  wireRows();

  overlay.querySelector("#confirmDefenseBtn").addEventListener("click", () => {
    const result = resolveCampDefense(Array.from(selected));
    showDefenseResult(overlay, result);
  });
}

function showDefenseResult(overlay, result) {
  const modalBox = overlay.querySelector(".modal-box");
  const names = result.defenderNames.length ? result.defenderNames.join(", ") : "Nobody";

  let html = `<div class="modal-header"><span class="dot" style="animation:none;background:${result.success ? "var(--olive-bright)" : "var(--rust-bright)"};"></span> CAMP UNDER THREAT</div>`;
  html += `<div class="panel-body">`;
  if (result.success) {
    html += `<div class="result-title success">DEFENSE HELD</div>`;
    html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(names)} drove it off. Everyone's fine.</div>`;
  } else {
    html += `<div class="result-title death">DEFENSE FAILED</div>`;
    html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(names)} got hit hard — down to 1 HP. The camp lost supplies in the chaos.</div>`;
    if (result.lost && Object.keys(result.lost).length) {
      html += `<div class="loot-list">` + Object.entries(result.lost).map(([res, amt]) =>
        `<span class="loot-item" style="color:var(--rust-bright);border-color:var(--rust);">-${amt} ${res}</span>`).join("") + `</div>`;
    }
  }
  html += `<button class="btn" id="closeDefenseBtn">Continue</button>`;
  html += `</div>`;
  modalBox.innerHTML = html;

  modalBox.querySelector("#closeDefenseBtn").addEventListener("click", () => {
    overlay.remove();
    renderAll();
  });
}

// Mirrors the survival math in resolveRaid exactly (base group odds, plus
// whatever's already accumulated in raid.effects from an earlier choice
// this same raid) — used to show each option's odds in the event/boss
// popups below so the number on screen always matches what resolveRaid
// will actually compute later, not an approximation that could drift from
// it. Reads raid.gearById (the gear snapshot taken at launch) rather than
// each scav's live current gear, for the same reason resolveRaid does:
// what they're actually carrying out there, not whatever's equipped back
// at camp right now.
function currentRaidSurvival(raid) {
  const map = MAPS.find((m) => m.id === raid.mapId);
  const scavs = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  if (!map || !scavs.length) return null;
  const { survival } = calcGroupOdds(scavs, map, raid.gearById);
  const effects = raid.effects || [];
  const survivalAdd = effects.reduce((sum, e) => sum + (e.survivalAdd || 0), 0);
  return Math.max(0.05, Math.min(0.97, survival + survivalAdd));
}

// Given a raid's current baseline (see currentRaidSurvival) and a specific
// option's effect, returns what survival chance picking that option would
// leave the raid at — same clamp resolveRaid applies, so a wildly negative
// survivalAdd shows the real floor (5%) rather than a number that implies
// it could go lower.
function survivalChanceForOption(baseline, effect) {
  if (baseline === null) return null;
  const survivalAdd = (effect && effect.survivalAdd) || 0;
  return Math.max(0.05, Math.min(0.97, baseline + survivalAdd));
}

// Shown when a raid's mid-raid event fires. Pulls the raid and its
// pendingEvent fresh from STATE each time rather than capturing it in a
// closure, since the raid object reference stays the same across saves but
// this keeps the modal honest if anything else somehow changes it first.
function showRaidEventModal(raidId) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || !raid.pendingEvent) return;
  const eventDef = getRaidEvent(raid.pendingEvent.eventId);
  if (!eventDef) return;

  const names = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)?.name || "???");
  const whoLabel = names.length > 1 ? names.join(", ") : names[0];
  const map = MAPS.find((m) => m.id === raid.mapId);

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const baseline = currentRaidSurvival(raid);
  const optionsHtml = eventDef.options.map((opt, i) => {
    const survPct = survivalChanceForOption(baseline, opt.effect || {});
    return `
    <button class="raid-event-opt" data-option-index="${i}">
      <span class="reo-label">${escapeHtml(opt.label)}</span>
      <span class="reo-detail">${escapeHtml(opt.detail)}</span>
      ${survPct !== null ? `<span class="reo-survival">Survival: ${Math.round(survPct * 100)}%</span>` : ""}
    </button>
  `;
  }).join("");

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot"></span> ${escapeHtml(eventDef.title.toUpperCase())} — ${escapeHtml(whoLabel)}</div>
      <div class="panel-body">
        <div class="event-warning">${escapeHtml(eventDef.desc)}</div>
        <div class="raid-event-meta">${escapeHtml(map ? map.name : "")} — awaiting your call</div>
        <div class="raid-event-opt-list">${optionsHtml}</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelectorAll("[data-option-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-option-index"), 10);
      const ok = resolveRaidEventChoice(raid.id, idx);
      overlay.remove();
      if (ok) {
        pushToast(`${whoLabel}: ${eventDef.options[idx].label}.`);
      }
      renderAll();
    });
  });
}

// A boss encounter uses the same options-modal shape as a regular raid
// event, just dressed up to feel like the bigger deal it is — a named
// threat instead of an anonymous situation, and a danger-red header
// instead of the usual brass one.
function showBossEncounterModal(raidId) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || !raid.pendingBoss) return;
  const boss = getBossForMap(raid.mapId);
  if (!boss) return;

  const names = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)?.name || "???");
  const whoLabel = names.length > 1 ? names.join(", ") : names[0];
  const map = MAPS.find((m) => m.id === raid.mapId);
  const options = bossEncounterOptions(boss);

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const baseline = currentRaidSurvival(raid);
  const optionsHtml = options.map((opt, i) => {
    const survPct = survivalChanceForOption(baseline, opt.effect || {});
    return `
    <button class="raid-event-opt boss-opt" data-boss-option-index="${i}">
      <span class="reo-label">${escapeHtml(opt.label)}</span>
      <span class="reo-detail">${escapeHtml(opt.detail)}</span>
      ${survPct !== null ? `<span class="reo-survival">Survival: ${Math.round(survPct * 100)}%</span>` : ""}
    </button>
  `;
  }).join("");

  overlay.innerHTML = `
    <div class="modal-box settings-box boss-modal-box">
      <div class="modal-header boss-modal-header"><span class="dot"></span> ${escapeHtml(boss.name.toUpperCase())} — ${escapeHtml(whoLabel)}</div>
      <div class="panel-body">
        <div class="event-warning boss-warning">${escapeHtml(boss.desc)}</div>
        <div class="raid-event-meta">${escapeHtml(map ? map.name : "")} — a real fight, not just a scrap</div>
        <div class="raid-event-opt-list">${optionsHtml}</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelectorAll("[data-boss-option-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-boss-option-index"), 10);
      const ok = resolveBossEncounterChoice(raid.id, idx);
      overlay.remove();
      if (ok) {
        pushToast(`${whoLabel} vs ${boss.name}: ${options[idx].label}.`);
      }
      renderAll();
    });
  });
}

function showFieldReport(raidOutcomeWrapper) {
  const { outcome } = raidOutcomeWrapper;
  const headerNames = outcome.scavNames.length > 1
    ? `${outcome.scavNames.length}-Scav Group`
    : outcome.scavNames[0];
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-header"><span class="dot"></span> FIELD REPORT — ${escapeHtml(headerNames)} / ${escapeHtml(outcome.map.name)}</div>
      <div class="modal-log" id="reportLog"></div>
      <div class="modal-result" id="reportResult" style="display:none;"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const lines = buildReportScript(outcome);
  const logEl = overlay.querySelector("#reportLog");
  let i = 0;

  function appendLine() {
    if (i >= lines.length) {
      finishReport();
      return;
    }
    const lineEl = document.createElement("div");
    lineEl.className = "log-line";
    const ts = new Date(Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    lineEl.innerHTML = `<span class="ts">[${ts}]</span>${escapeHtml(lines[i])}`;
    logEl.appendChild(lineEl);
    logEl.scrollTop = logEl.scrollHeight;
    i++;
    setTimeout(appendLine, 650 + Math.random() * 400);
  }

  function finishReport() {
    const resultEl = overlay.querySelector("#reportResult");
    resultEl.style.display = "block";
    let html = "";

    if (outcome.arena) {
      // The arena's only real outcome is won or lost — there's no
      // survival/injury/death framing to show since none of that risk
      // exists here (see resolveArenaRaid). "hurt"'s brass color is
      // reused for a loss not because anyone got hurt, but because
      // "success" (olive) would read as a win even when it wasn't, and
      // "death" (rust) overstates a clean, harmless loss.
      const d = outcome.perScav[0];
      if (outcome.won) {
        html += `<div class="result-title success">TOURNAMENT WON</div>`;
        if (d.leveledUp) {
          html += `<div style="font-size:11.5px;color:var(--brass-bright);margin-bottom:6px;">${escapeHtml(d.name)} leveled up!</div>`;
        }
      } else {
        html += `<div class="result-title hurt">LOST THE BOUT</div>`;
        html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(d.name)} came home empty-handed — no harm done, just no payout this time.</div>`;
      }
    } else if (outcome.perScav.length === 1) {
      // ----- Solo raid: same single-scav summary as before -----
      const d = outcome.perScav[0];
      if (d.died) {
        html += `<div class="result-title death">KIA — ${escapeHtml(d.name)}</div>`;
        html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">Lost on ${escapeHtml(outcome.map.name)}. Removed from roster.</div>`;
      } else if (d.injured) {
        html += `<div class="result-title hurt">RETURNED WOUNDED</div>`;
        html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(d.name)} lost ${d.hpLost} HP. Recovers over time, or speed it up at the Infirmary.</div>`;
      } else {
        html += `<div class="result-title success">CLEAN EXTRACT</div>`;
        if (d.leveledUp) {
          html += `<div style="font-size:11.5px;color:var(--brass-bright);margin-bottom:6px;">${escapeHtml(d.name)} leveled up!</div>`;
        }
      }
    } else {
      // ----- Group raid: overall verdict + a line per member -----
      const deaths = outcome.perScav.filter((d) => d.died).length;
      if (deaths === outcome.perScav.length) {
        html += `<div class="result-title death">GROUP LOST</div>`;
        html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">Nobody made it back from ${escapeHtml(outcome.map.name)}.</div>`;
      } else if (deaths > 0) {
        html += `<div class="result-title hurt">PARTIAL RETURN</div>`;
        html += `<div style="font-size:11.5px;color:var(--bone-dim);margin-bottom:10px;">${deaths} of ${outcome.perScav.length} didn't make it back from ${escapeHtml(outcome.map.name)}.</div>`;
      } else {
        html += `<div class="result-title success">GROUP RETURNED</div>`;
      }
      html += `<div class="group-result-list">` + outcome.perScav.map((d) => {
        const statusClass = d.died ? "death" : d.injured ? "hurt" : "success";
        const statusLabel = d.died ? "KIA" : d.injured ? `-${d.hpLost} HP` : d.leveledUp ? "Leveled up" : "Clean";
        return `<div class="group-result-row"><span>${escapeHtml(d.name)}</span><span class="raidlog-status ${statusClass}">${escapeHtml(statusLabel)}</span></div>`;
      }).join("") + `</div>`;
    }

    if (outcome.bossLog) {
      const bossWon = outcome.survived;
      html += `<div class="boss-result-banner ${bossWon ? "won" : "fled"}"><span class="boss-result-tag">${bossWon ? "Boss Encounter" : "Boss Encounter — Broke Off"}</span> Faced down <b>${escapeHtml(outcome.bossLog.bossName)}</b>.</div>`;
    }

    if (outcome.nightRaid) {
      html += `<div class="gear-find-banner"><span class="gf-tag">Night Raid</span> Richer haul, rougher company — loot ran heavier and enemies were more likely than usual out there after dark.</div>`;
    }

    if (outcome.loot && Object.keys(outcome.loot).length) {
      html += `<div class="loot-list">` + Object.entries(outcome.loot).map(([res, amt]) =>
        `<span class="loot-item">+${amt} ${res}</span>`).join("") + `</div>`;
    }
    if (outcome.gearFind) {
      const { item, hadBefore, newCount } = outcome.gearFind;
      const tag = hadBefore ? `Now have ${newCount}` : "New find!";
      html += `<div class="gear-find-banner"><span class="gf-tag">${escapeHtml(tag)}</span> Found <b>${escapeHtml(item.name)}</b> on the way back.</div>`;
    }
    if (outcome.bossDrop) {
      const { item, hadBefore } = outcome.bossDrop;
      const tag = hadBefore ? "Another one" : "Unique drop!";
      html += `<div class="boss-drop-banner"><span class="bd-tag">${escapeHtml(tag)}</span> ${escapeHtml(outcome.bossLog.bossName)} dropped <b>${escapeHtml(item.name)}</b>.</div>`;
    }
    if (outcome.keyDrop) {
      html += `<div class="boss-drop-banner"><span class="bd-tag">Key recovered</span> Found another <b>${escapeHtml(outcome.keyDrop.key.name)}</b> on the way out.</div>`;
    }
    html += `<button class="btn" id="closeReportBtn">Continue</button>`;
    resultEl.innerHTML = html;
    resultEl.querySelector("#closeReportBtn").addEventListener("click", () => {
      overlay.remove();
      activeModalRaid = null;
      renderAll();
      if (STATE.campEvent) {
        showCampEventModal();
      }
    });
  }

  appendLine();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatTimeAgo(ts) {
  const seconds = Math.floor((Date.now() - ts) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// ===== RENDER: HEADER =====

// Keeps resource numbers live wherever they're currently shown — the Camp
// panel's resource rows — without forcing a full renderAll(). Called from
// inside full-screen overlays (Character/Infirmary/Barracks/Workshop) after
// any action that spends or earns scrap/gold/meds, same as before; the
// resource display just lives in the Camp panel now instead of the header.
// Keeps resource numbers current wherever they're displayed outside the
// normal renderAll() cycle — called after actions (crafting, healing,
// building, recruiting) that change STATE.resources but, for screens like
// the Loadout modal or Infirmary, don't want a full renderAll() tearing
// down their own DOM mid-interaction. The only live display left after
// the Camp screen's removal is the Warehouse's hover tooltip, so that's
// what this patches now. Shared with syncCampfireScene's own per-tick
// pass so the two never drift out of sync with each other.
function refreshWarehouseTooltip() {
  const warehouseSupplies = document.querySelector(".cf-warehouse-supplies");
  if (warehouseSupplies) {
    warehouseSupplies.innerHTML = `
      <span class="cf-supply-line scrap">${STATE.resources.scrap} scrap</span>
      <span class="cf-supply-line gold">${STATE.resources.gold} gold</span>
      <span class="cf-supply-line meds">${STATE.resources.meds} meds</span>
      <span class="cf-supply-line food">${STATE.resources.food || 0} food</span>
    `;
  }
}

function renderHeader() {
  return `
    <div class="header">
      <div class="logo">OUTPOST</div>
      <div class="header-stats">
        <button class="header-btn mobile-stash-btn" id="openStashBtnMobile">Stash</button>
        <button class="header-btn" id="openRaidLogBtn">Raid Log</button>
        <button class="header-btn" id="openCodexBtn">Codex</button>
        <button class="icon-btn" id="settingsBtn" title="Settings" aria-label="Settings">${GEAR_ICON_SVG}</button>
      </div>
    </div>
  `;
}

// ===== RENDER: RADIO LOG (active raids) =====

function renderRadioLog() {
  if (STATE.activeRaids.length === 0) {
    return `<div class="radio-log empty"></div>`;
  }
  const now = gameNow();
  const entries = STATE.activeRaids.map((raid) => {
    const names = raid.scavIds.map((id) => {
      const s = STATE.scavs.find((sc) => sc.id === id);
      return s ? s.name : "???";
    });
    const map = MAPS.find((m) => m.id === raid.mapId);
    const elapsed = (now - raid.startedAt) / 1000;
    const pct = Math.min(100, (elapsed / raid.duration) * 100);
    const remaining = Math.max(0, Math.ceil(raid.duration - elapsed));
    const whoLabel = names.length > 1 ? `${names[0]} +${names.length - 1}` : names[0];
    const awaitingBoss = !!raid.pendingBoss;
    const awaitingEvent = !!raid.pendingEvent;
    const awaiting = awaitingBoss || awaitingEvent;
    const boss = getBossForMap(raid.mapId);
    let etaContent;
    if (awaitingBoss) {
      etaContent = `<span class="awaiting-tag boss-tag">☠ ${escapeHtml(boss ? boss.name : "Boss")} appeared</span>`;
    } else if (awaitingEvent) {
      etaContent = `<span class="awaiting-tag">⚠ Awaiting orders</span>`;
    } else {
      etaContent = remaining > 0 ? remaining + "s" : "arriving";
    }
    return `
      <div class="radio-entry ${awaiting ? "awaiting" : ""} ${awaitingBoss ? "boss-awaiting" : ""}" ${awaiting ? `data-pending-raid-id="${raid.id}"` : ""}>
        <div class="who" title="${escapeHtml(names.join(", "))}${raid.nightRaid ? " — night raid: richer loot, more hostiles" : ""}">${raid.nightRaid ? "☾ " : ""}${escapeHtml(whoLabel)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
        <div class="eta">${etaContent} · ${escapeHtml(map ? map.name : "")}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="radio-log">
      <div class="radio-log-header"><span class="dot"></span> ACTIVE RAIDS — ${STATE.activeRaids.length} IN THE FIELD</div>
      <div class="radio-entries">${entries}</div>
    </div>
  `;
}

// ===== RENDER: ROSTER =====

function hpClass(scav) {
  const pct = scav.hp / effectiveMaxHp(scav);
  if (pct > 0.66) return "healthy";
  if (pct > 0.33) return "mid";
  return "";
}

function renderRoster() {
  const living = STATE.scavs.filter((s) => s.status !== "dead");
  if (living.length === 0) {
    return `<div class="empty-note">No scavs left. Recruit someone before they pick the camp apart for parts.</div>`;
  }
  const cards = living.map((scav) => {
    const isSelected = scav.id === selectedScavId;
    const isAway = scav.status === "away";
    const isDefending = scav.status === "defending";
    const isHealingNow = scav.status === "healing";
    const isRestingNow = scav.status === "resting";
    const isUnavailable = isAway || isDefending || isHealingNow || isRestingNow;
    const effMax = effectiveMaxHp(scav);
    const gearTags = ["weapon", "armor", "pack"].map((slot) => {
      const item = getGearItem(slot, scav.gear[slot]);
      return item.tier > 0 ? `<span class="gear-tag">${escapeHtml(item.name)}</span>` : "";
    }).filter(Boolean).join("");

    let statusClass, statusLabel;
    if (isDefending) {
      statusClass = "defending";
      statusLabel = "Defending";
    } else if (isHealingNow) {
      statusClass = "healing";
      statusLabel = "Healing";
    } else if (isRestingNow) {
      statusClass = "resting";
      statusLabel = "Resting";
    } else if (isAway) {
      statusClass = "away";
      statusLabel = "On raid";
    } else if (scav.hp < effMax * 0.5) {
      statusClass = "hurt";
      statusLabel = "Hurt";
    } else {
      statusClass = "ready";
      statusLabel = "Ready";
    }

    const healEntry = isHealingNow ? getInfirmaryQueue().find((e) => e.scavId === scav.id) : null;
    let healRow = "";
    if (healEntry) {
      const elapsed = (gameNow() - healEntry.startedAt) / 1000;
      const pct = Math.min(100, (elapsed / healEntry.duration) * 100);
      const remaining = Math.max(0, Math.ceil(healEntry.duration - elapsed));
      healRow = `
        <div class="heal-row">
          <div class="bar-track heal-bar-track"><div class="bar-fill heal-bar-fill" style="width:${pct}%"></div></div>
          <div class="heal-eta">${remaining}s</div>
        </div>
      `;
    }

    const restEntry = isRestingNow ? getRestQueue().find((e) => e.scavId === scav.id) : null;
    let restRow = "";
    if (restEntry) {
      const elapsed = (gameNow() - restEntry.startedAt) / 1000;
      const pct = Math.min(100, (elapsed / restEntry.duration) * 100);
      const remaining = Math.max(0, Math.ceil(restEntry.duration - elapsed));
      restRow = `
        <div class="heal-row">
          <div class="bar-track heal-bar-track rest-bar-track"><div class="bar-fill heal-bar-fill rest-bar-fill" style="width:${pct}%"></div></div>
          <div class="heal-eta">${remaining}s</div>
        </div>
      `;
    }

    // A quick at-a-glance flag rather than full bars (those live on the
    // Character screen) — only shown once either stat has actually
    // drifted from baseline, so a healthy, high-morale scav's card stays
    // uncluttered.
    const flags = [];
    if (scav.radiation > 0) flags.push(`<span class="scav-flag rad-flag">☢ ${scav.radiation}</span>`);
    if (scav.morale < 100) flags.push(`<span class="scav-flag morale-flag">Morale ${scav.morale}</span>`);

    const unspent = unspentSkillPoints(scav);
    return `
      <div class="scav-card ${isSelected ? "selected" : ""} ${isUnavailable ? "away" : ""}" data-scav-id="${scav.id}">
        <div class="scav-top">
          <div class="scav-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span>${unspent > 0 ? `<span class="skill-point-badge" title="${unspent} unspent skill point${unspent === 1 ? "" : "s"}">+${unspent}</span>` : ""}</div>
          <div class="scav-status ${statusClass}">${statusLabel}</div>
        </div>
        <div class="hp-row">
          <div class="hp-bar-track"><div class="hp-bar-fill ${hpClass(scav)}" style="width:${(scav.hp / effMax) * 100}%"></div></div>
          <div class="hp-label">${scav.hp}/${effMax}</div>
        </div>
        ${healRow}
        ${restRow}
        ${flags.length ? `<div class="scav-flags-row">${flags.join("")}</div>` : ""}
        <div class="scav-stats-row">
          <span>Raids: <b>${scav.raidsCompleted}</b></span>
          <span>XP: <b>${scav.xp}/${scav.level * 30}</b></span>
        </div>
        ${gearTags ? `<div class="scav-gear-tags">${gearTags}</div>` : ""}
        <button class="btn secondary scav-loadout-btn" data-loadout-scav-id="${scav.id}">Loadout</button>
      </div>
    `;
  }).join("");

  return cards;
}

// ===== RENDER: SEND-A-RAID LAUNCHER CARD (sits in the main grid) =====

// Map unlocking is per scav, not camp-wide — one veteran reaching a high
// level doesn't open up dangerous sites for everyone else on the roster.
// Keeps the same +1 leeway the old camp-wide check used (a scav one level
// short of a map's stated minimum can still attempt it). With nobody
// selected yet, evaluates against a level-1 scav so the screen still shows
// its genuinely-always-open maps as unlocked rather than locking
// everything until a pick is made.
function mapLockedForScav(map, scav) {
  const level = scav ? scav.level : 1;
  return map.minLevel > level + 1;
}

// For a raid group: locked if ANY selected member doesn't individually
// meet the bar. A high-level scav doesn't get to drag the rest of the
// group into a site they haven't personally earned. With nobody picked
// yet, falls back to the same level-1 default as mapLockedForScav so the
// strip isn't all locked before a group has even been started.
function mapLockedForGroup(map, scavs) {
  if (!scavs || scavs.length === 0) return mapLockedForScav(map, null);
  return scavs.some((scav) => mapLockedForScav(map, scav));
}

function renderRosterSummaryCard() {
  const living = STATE.scavs.filter((s) => s.status !== "dead");
  const ready = living.filter((s) => s.status === "ready").length;
  const hurt = living.filter((s) => s.status === "ready" && s.hp < effectiveMaxHp(s) * 0.5).length;
  const away = living.length - ready;
  const statusBits = [];
  if (ready > 0) statusBits.push(`<b>${ready}</b> ready`);
  if (away > 0) statusBits.push(`<b>${away}</b> out`);
  if (hurt > 0) statusBits.push(`<b>${hurt}</b> hurt`);
  const statusLine = living.length === 0 ? "No scavs left." : (statusBits.join(", ") || "Nobody available.");
  return `
    <div class="raid-launcher-card">
      <div class="rl-status">${statusLine}</div>
      <button class="btn secondary" id="openRosterScreenBtn">Open Roster</button>
    </div>
  `;
}

// ===== CAMPFIRE SCENE =====
// A small ambient 8-bit-style scene in the open space right of the left
// column — one idling pixel survivor per living scav, gathered around a
// fire. This is deliberately NOT rebuilt by renderAll(): every survivor
// sprite runs its own CSS bob/flicker animation, and tearing the DOM down
// and back up on every render (renderAll fires constantly — every raid
// tick, every purchase, every recruit) would restart all of those
// animations from frame zero, producing a visible stutter. Instead the
// scene mounts once and `syncCampfireScene()` only adds or removes the
// specific sprites that need it whenever the living roster actually
// changes, leaving everyone else's animation running undisturbed.

// ===== DAY/NIGHT CYCLE =====
// Driven by the virtual game clock (gameNow()), not real wall-clock time
// directly — one in-game day is a fixed duration of game time, which
// pauses while the game is closed the same way every other timer does.
// There's still no simulated "game time" field of its own to advance or
// save beyond the clock offset gameNow() already maintains; the current
// phase is always just a function of gameNow(). That means it resumes
// exactly where it left off across reloads and tab closes, rather than
// fast-forwarding through whatever stretch the game was closed for.
const DAY_LENGTH_MS = 20 * 60 * 1000; // 1 in-game day = 20 real-world minutes of actual play time

// Same outline-icon style as GEAR_ICON_SVG (currentColor stroke, so it
// picks up whatever color .cf-clock's data-phase attribute sets).
const CLOCK_ICON_SVG = `<svg class="cf-clock-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`;

// Returns a 0-1 value for how far through the current in-game day we are.
// 0 = midnight (start of night), 0.5 = noon. Pure function of the virtual
// game clock (see gameNow()) and the camp's epoch — never stored, always
// recomputed, and frozen along with everything else while the game is closed.
function getDayProgress() {
  const elapsed = gameNow() - getCampStartedAt();
  return ((elapsed % DAY_LENGTH_MS) + DAY_LENGTH_MS) % DAY_LENGTH_MS / DAY_LENGTH_MS;
}

// Which day count we're on — Day 1 is the first day after the camp's
// epoch, climbing forever after. Floors rather than rounds so the count
// only ticks over exactly at midnight, in step with getDayProgress() wrapping.
function getDayNumber() {
  const elapsed = gameNow() - getCampStartedAt();
  return Math.floor(elapsed / DAY_LENGTH_MS) + 1;
}

// ===== FARM & DAILY UPKEEP =====
// The Farm produces food once per in-game day (scaling with its level),
// and every day the camp owes a flat upkeep of food and gold regardless
// of whether a Farm exists at all — the Farm is how you cover it, not a
// prerequisite for owing it. Both ride the same getDayNumber() clock the
// rest of the day/night system already uses, charged via checkDailyUpkeep
// (called from gameTick) rather than its own timer.
const FARM_FOOD_PER_LEVEL = 4; // food produced per day, per Farm level
const DAILY_UPKEEP_COST = { food: 3, gold: 3 };
// Safety cap on catch-up. Under the old always-real-time clock this
// protected against a long closed absence; now that gameNow() pauses
// while the game is closed (see syncGameClockOnLoad), STATE.lastUpkeepDay
// can really only fall behind during a single long *open* session left
// running for many in-game days straight (20 real minutes each) without
// the tab ever closing — a closed gap, however long, no longer advances
// the day count at all. Kept as a cap regardless, so that scenario still
// can't replay a wall of starvation rolls in one tick.
const UPKEEP_MAX_CATCHUP_DAYS = 14;

// Starvation: when a day's upkeep can't be fully paid (food or gold came
// up short — see spendClamped's return), every living scav takes a hit
// instead of the shortfall just being absorbed silently. Smaller and
// blunter than a raid injury: a flat HP cost (no severity roll) plus a
// real morale hit, since an unfed camp is a camp with worse loot, not a
// camp where someone's necessarily badly hurt.
const STARVATION_HP_LOSS = 6;
const STARVATION_MORALE_LOSS = 15;

function applyStarvation() {
  for (const scav of STATE.scavs) {
    if (scav.status === "dead") continue;
    scav.hp = Math.max(1, scav.hp - STARVATION_HP_LOSS); // never the killing blow on its own
    scav.morale = Math.max(0, scav.morale - STARVATION_MORALE_LOSS);
  }
}

// Charges every day of upkeep owed since STATE.lastUpkeepDay, one day at a
// time (so a Farm built partway through a long stretch still only
// contributes its current level's production to each day it actually
// covers — there's no real per-day history to simulate more precisely
// than that). Under the time-pause model this almost always charges
// exactly one day at a time in practice — multiple days only stack up
// here if the game was left open and running for a long unbroken
// session, not from being closed, since closed time no longer advances
// the day count at all. Returns a summary so the caller can toast/report
// what happened, or null if no day has actually turned over yet.
function checkDailyUpkeep() {
  const today = getDayNumber();
  if (today <= STATE.lastUpkeepDay) return null;

  const daysOwed = Math.min(today - STATE.lastUpkeepDay, UPKEEP_MAX_CATCHUP_DAYS);
  const farmLevel = STATE.upgrades.farm || 0;
  const foodPerDay = FARM_FOOD_PER_LEVEL * farmLevel;

  let totalProduced = 0;
  let starvedDays = 0;
  for (let i = 0; i < daysOwed; i++) {
    if (foodPerDay > 0) {
      STATE.resources.food = (STATE.resources.food || 0) + foodPerDay;
      totalProduced += foodPerDay;
    }
    const paid = spendClamped(DAILY_UPKEEP_COST);
    const shortfall = (paid.food || 0) < DAILY_UPKEEP_COST.food || (paid.gold || 0) < DAILY_UPKEEP_COST.gold;
    if (shortfall) {
      applyStarvation();
      starvedDays++;
    }
  }
  STATE.lastUpkeepDay = today;
  saveState();
  return { daysCharged: daysOwed, totalProduced, starvedDays };
}

// Named phase for the current moment — used by the clock badge's label
// and accent color. Boundaries match DAYNIGHT_KEYFRAMES below; kept as a
// separate simple lookup rather than derived from the keyframe list so
// this stays trivial to read at a glance.
function getDayPhase(progress) {
  if (progress < 0.20) return "night";
  if (progress < 0.30) return "dawn";
  if (progress < 0.65) return "day";
  if (progress < 0.80) return "dusk";
  return "night";
}

// Whether a given moment in the day cycle counts as "night" for raid
// mechanics (loot bonus, enemy encounter chance — see launchRaid and
// resolveRaid). Deliberately just "is getDayPhase 'night'", not its own
// separate boundary, so the mechanical night window can never drift out
// of sync with the visual one the player actually sees in the camp scene.
function isNightAt(progress) {
  return getDayPhase(progress) === "night";
}

// Convenience for "is it night right now" — used at the moment a raid is
// launched (see launchRaid) and by the raid-prep popup so the odds shown
// before committing match what launching immediately would actually lock in.
function isNightNow() {
  return isNightAt(getDayProgress());
}

// Keyframes the sky/ground/stars/tint are interpolated between, each as
// [r,g,b] so plain linear interpolation works without parsing CSS color
// strings every tick. `tint` is a warm overlay (dawn amber / dusk rust)
// blended in on top via mix-blend-mode:multiply — see .cf-sky-tint — and
// `tintA` is its opacity, 0 outside dawn/dusk. Deliberately desaturated
// and dim even at "noon" (a clear blue sky reads wrong against this
// game's grim, washed-out palette) — daytime is meant to look overcast,
// not bright.
const DAYNIGHT_KEYFRAMES = [
  { p: 0.00, top: [10, 13, 16], mid: [14, 16, 15], bot: [20, 21, 15], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.75, tint: [0, 0, 0], tintA: 0 },
  { p: 0.20, top: [10, 13, 16], mid: [14, 16, 15], bot: [20, 21, 15], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.75, tint: [0, 0, 0], tintA: 0 },
  { p: 0.27, top: [26, 29, 34], mid: [46, 42, 36], bot: [70, 55, 38], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.2, tint: [212, 128, 80], tintA: 0.30 },
  { p: 0.38, top: [43, 51, 58], mid: [51, 59, 52], bot: [60, 62, 48], gTop: [38, 39, 29], gBot: [28, 29, 21], star: 0.0, tint: [0, 0, 0], tintA: 0 },
  { p: 0.58, top: [43, 51, 58], mid: [51, 59, 52], bot: [60, 62, 48], gTop: [38, 39, 29], gBot: [28, 29, 21], star: 0.0, tint: [0, 0, 0], tintA: 0 },
  { p: 0.68, top: [33, 25, 36], mid: [58, 38, 34], bot: [92, 52, 36], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.15, tint: [212, 80, 47], tintA: 0.35 },
  { p: 0.80, top: [10, 13, 16], mid: [14, 16, 15], bot: [20, 21, 15], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.55, tint: [0, 0, 0], tintA: 0 },
  { p: 1.00, top: [10, 13, 16], mid: [14, 16, 15], bot: [20, 21, 15], gTop: [27, 28, 20], gBot: [20, 21, 15], star: 0.75, tint: [0, 0, 0], tintA: 0 },
];

function lerp(a, b, t) { return a + (b - a) * t; }
function lerpColor(c1, c2, t) { return [0, 1, 2].map((i) => Math.round(lerp(c1[i], c2[i], t))); }
function rgbStr(c) { return `rgb(${c[0]},${c[1]},${c[2]})`; }

// Samples DAYNIGHT_KEYFRAMES at the given 0-1 progress, linearly
// interpolating between whichever pair of keyframes bracket it. Called
// once per tick (every 1s, from gameTick -> applyDayNightLighting), not
// per-frame, since a real-time CSS transition handles the visual
// smoothing between ticks far cheaper than animating in JS would.
function sampleDayNight(progress) {
  for (let i = 0; i < DAYNIGHT_KEYFRAMES.length - 1; i++) {
    const a = DAYNIGHT_KEYFRAMES[i];
    const b = DAYNIGHT_KEYFRAMES[i + 1];
    if (progress >= a.p && progress <= b.p) {
      const t = (progress - a.p) / (b.p - a.p || 1);
      return {
        top: lerpColor(a.top, b.top, t),
        mid: lerpColor(a.mid, b.mid, t),
        bot: lerpColor(a.bot, b.bot, t),
        gTop: lerpColor(a.gTop, b.gTop, t),
        gBot: lerpColor(a.gBot, b.gBot, t),
        star: lerp(a.star, b.star, t),
        tint: lerpColor(a.tint, b.tint, t),
        tintA: lerp(a.tintA, b.tintA, t),
      };
    }
  }
  return DAYNIGHT_KEYFRAMES[0];
}

// "HH:MM" on a 24-hour clock mapped linearly onto the day's 0-1 progress
// — 00:00 at midnight (progress 0), 12:00 at noon (progress 0.5). Purely
// cosmetic labeling for a compressed cycle, not a claim that any phase
// boundary lines up with a real-world sunrise/sunset time.
function formatGameClock(progress) {
  const totalMin = Math.round(progress * 24 * 60) % (24 * 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Applies the current day/night sample to the live scene DOM — called
// once on initial mount and then every gameTick (every 1s). CSS
// transitions on .cf-sky/.cf-stars/.cf-sky-tint/.cf-ground (see index.html)
// smooth out the once-per-second steps into continuous-looking motion,
// the same trick the radio log's progress bars already use elsewhere.
function applyDayNightLighting() {
  const sky = document.querySelector(".cf-sky");
  const stars = document.querySelector(".cf-stars");
  const tint = document.querySelector(".cf-sky-tint");
  const ground = document.querySelector(".cf-ground");
  if (!sky) return; // scene not mounted yet
  const progress = getDayProgress();
  const s = sampleDayNight(progress);
  sky.style.background = `linear-gradient(to bottom, ${rgbStr(s.top)} 0%, ${rgbStr(s.mid)} 55%, ${rgbStr(s.bot)} 100%)`;
  if (stars) stars.style.opacity = s.star;
  if (tint) tint.style.background = `rgba(${s.tint[0]},${s.tint[1]},${s.tint[2]},${s.tintA})`;
  if (ground) ground.style.background = `linear-gradient(to bottom, ${rgbStr(s.gTop)} 0%, ${rgbStr(s.gBot)} 100%)`;

  const clockTime = document.querySelector(".cf-clock-time");
  const clockDay = document.querySelector(".cf-clock-day");
  const clockBadge = document.querySelector(".cf-clock");
  if (clockTime) clockTime.textContent = formatGameClock(progress);
  if (clockDay) clockDay.textContent = `DAY ${getDayNumber()}`;
  if (clockBadge) clockBadge.dataset.phase = getDayPhase(progress);
}

// A few outfit palettes pulled from the game's own theme colors, cycled by
// a hash of each scav's id so the group reads as a handful of distinct
// people rather than identical clones, without introducing off-theme hues.
// `hair` was added alongside the sprite rework below — older saves never
// stored anything here, so this is purely a rendering-time lookup, never
// persisted, and needs no migration.
const SURVIVOR_PALETTES = [
  { shirt: "#6B8550", shirtDark: "#5A7042", pants: "#3A4A4D", skin: "#C9A876", skinShade: "#B8916A", hair: "#2A1E16" }, // olive-bright / gunmetal
  { shirt: "#8C7A3D", shirtDark: "#766428", pants: "#4A5D3A", skin: "#C9A876", skinShade: "#B8916A", hair: "#1A1410" }, // brass / olive
  { shirt: "#54696C", shirtDark: "#445a5c", pants: "#3A4A4D", skin: "#B8916A", skinShade: "#a87f58", hair: "#241F18" }, // gunmetal-bright / gunmetal
  { shirt: "#A8341F", shirtDark: "#8f2c19", pants: "#3A2A1F", skin: "#C9A876", skinShade: "#B8916A", hair: "#1A1410" }, // rust / dark brown
  { shirt: "#4A5D3A", shirtDark: "#3d4c30", pants: "#54696C", skin: "#B8916A", skinShade: "#a87f58", hair: "#3A2A1F" }, // olive / gunmetal-bright
  { shirt: "#8A8470", shirtDark: "#726d5c", pants: "#3A4A4D", skin: "#C9A876", skinShade: "#B8916A", hair: "#2A2418" }, // bone-dim / gunmetal
];

// Pixel-person on a 16x30 grid — reworked from the original blunt
// rectangular silhouette to read as more human while staying flat-color
// and crisp (no curves or gradients, just smarter pixel placement): a
// rounded hairline and tapered chin instead of a square head sitting
// flush on the shoulders, a torso that's wider at the shoulders than the
// waist instead of one uniform block, and arms that angle slightly in at
// the cuff rather than hanging as straight vertical bars. The torn hem
// and scavenged shoulder patch are new apocalyptic-flavor details — worn,
// mismatched gear rather than a clean uniform. The two leg rects keep the
// exact `cf-leg`/`cf-leg-a`/`cf-leg-b` classes the walk-cycle CSS targets
// (transform-box: fill-box rotation around the hip) — sendSurvivorWalking()
// and the .walking keyframes don't know or care that the art changed.
function survivorSvgMarkup(palette) {
  const { shirt, shirtDark, pants, skin, skinShade, hair } = palette;
  return `
    <svg viewBox="0 0 16 30" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="0" width="4" height="1" fill="${hair}" />
      <rect x="5" y="1" width="6" height="2" fill="${hair}" />
      <rect x="4" y="3" width="1" height="1" fill="${hair}" />
      <rect x="11" y="3" width="1" height="1" fill="${hair}" />
      <rect x="5" y="3" width="6" height="4" fill="${skin}" />
      <rect x="5" y="4" width="6" height="1" fill="${skinShade}" opacity="0.7" />
      <rect x="6" y="7" width="4" height="1" fill="${skinShade}" />
      <rect x="7" y="8" width="2" height="1" fill="${skinShade}" />
      <rect x="2" y="9" width="12" height="2" fill="#2E3A2E" />
      <rect x="2" y="11" width="12" height="3" fill="${shirt}" />
      <rect x="3" y="14" width="10" height="5" fill="${shirt}" />
      <rect x="4" y="19" width="3" height="1" fill="${shirt}" />
      <rect x="9" y="19" width="3" height="1" fill="${shirt}" />
      <rect x="7" y="12" width="2" height="7" fill="${shirtDark}" />
      <rect x="2" y="11" width="3" height="2" fill="#8C7A3D" />
      <rect x="4" y="20" width="8" height="1" fill="${hair}" />
      <rect x="0" y="11" width="3" height="7" fill="${shirtDark}" />
      <rect x="1" y="18" width="2" height="2" fill="${shirtDark}" />
      <rect x="13" y="11" width="3" height="7" fill="${shirtDark}" />
      <rect x="13" y="18" width="2" height="2" fill="${shirtDark}" />
      <rect x="0" y="18" width="3" height="2" fill="${skin}" />
      <rect x="13" y="18" width="3" height="2" fill="${skin}" />
      <rect class="cf-leg cf-leg-a" x="4" y="21" width="4" height="8" fill="${pants}" />
      <rect class="cf-leg cf-leg-b" x="8" y="21" width="4" height="8" fill="${pants}" />
      <rect x="3" y="29" width="5" height="2" fill="#171510" />
      <rect x="8" y="29" width="5" height="2" fill="#171510" />
    </svg>
  `;
}

// Fixed seats arranged in a loose arc behind the fire so sprites don't
// overlap; supports up to 8, which comfortably covers any realistic
// roster cap. Positions are percentages of the scene's width/height.
const CAMPFIRE_SEATS = [
  { left: "41%", bottom: "9%" },
  { left: "59%", bottom: "9%" },
  { left: "31%", bottom: "16%" },
  { left: "69%", bottom: "16%" },
  { left: "50%", bottom: "22%" },
  { left: "22%", bottom: "24%" },
  { left: "78%", bottom: "24%" },
  { left: "50%", bottom: "3%" },
];

// Camp buildings: one small pixel structure per base upgrade track. Always
// visible now, even at level 0 (unbuilt) — buildingSvgMarkup already draws
// a sensible silhouette at level 0 (dark windows, no lit details), so an
// `unbuilt` class is all that's needed on top to read as "not built yet"
// rather than "built and just dim." Positioned along the back edges of the
// ground, outside the seat arc, so they read as the camp standing behind
// the survivors rather than crowding the fire circle. Each gets a tiny
// detail change at higher levels (a lit window, a second story) rather
// than a full redraw — these are meant to be glanced at, not studied.
const CAMP_BUILDINGS = [
  { id: "infirmary", left: "8%", bottom: "36%", scale: 1.32 },
  { id: "armory", left: "22%", bottom: "36%", scale: 1.24 },
  { id: "radioTower", left: "36%", bottom: "36%", scale: 0.72 },
  { id: "farm", left: "50%", bottom: "36%", scale: 1.1 },
  { id: "scoutTower", left: "64%", bottom: "36%", scale: 0.86 },
  { id: "barracks", left: "78%", bottom: "36%", scale: 1.44 },
  { id: "workshop", left: "92%", bottom: "36%", scale: 1.12 },
];

function buildingSvgMarkup(id, level) {
  const lit = level >= 1;
  const windowColor = lit ? "var(--brass-bright)" : "#1a1812";
  if (id === "infirmary") {
    // A proper medic cabin — gabled roof with a shaded underside, plank-line
    // siding, a red cross sign that lights up once built, and a door that
    // only appears at lvl 3+ (matches the original's "second flap" cue,
    // just drawn as an actual doorway now that there's room for one).
    const crossColor = level >= 1 ? "var(--rust-bright)" : "#544c3c";
    const door = level >= 3
      ? `<rect x="13" y="25" width="7" height="15" fill="#241f16" /><rect x="18" y="31" width="1" height="2" fill="#8C7A3D" />`
      : `<rect x="13" y="29" width="7" height="11" fill="#241f16" />`;
    return `
      <svg viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg">
        <polygon points="22,0 41,16 3,16" fill="#5c5440" />
        <polygon points="22,0 41,16 36,16 22,4" fill="#6b6248" />
        <rect x="3" y="15" width="38" height="2" fill="#241f16" />
        <rect x="5" y="17" width="34" height="23" fill="#3a3528" />
        <rect x="5" y="17" width="34" height="2" fill="#46402f" />
        <rect x="5" y="24" width="34" height="1" fill="#2e2a1f" opacity="0.6" />
        <rect x="5" y="31" width="34" height="1" fill="#2e2a1f" opacity="0.6" />
        ${door}
        <rect x="27" y="20" width="9" height="3" fill="${crossColor}" />
        <rect x="30" y="17" width="3" height="9" fill="${crossColor}" />
        <rect x="6" y="26" width="6" height="6" fill="${windowColor}" stroke="#241f16" stroke-width="1" />
        <rect x="4" y="39" width="36" height="3" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "armory") {
    // Stacked supply crates, now with lid lines for a bit of texture — more
    // crates appear at lvl 2+ and lvl 4+, same thresholds as before.
    const crate2 = level >= 2 ? `<rect x="6" y="3" width="13" height="11" fill="#4a4030" stroke="#241f16" stroke-width="1" /><rect x="7" y="4" width="11" height="2" fill="#5a4f3a" />` : "";
    const crate4 = level >= 4 ? `<rect x="22" y="7" width="10" height="10" fill="#4a4030" stroke="#241f16" stroke-width="1" /><rect x="23" y="8" width="8" height="2" fill="#5a4f3a" />` : "";
    return `
      <svg viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="14" width="16" height="16" fill="#4a4030" stroke="#241f16" stroke-width="1" />
        <rect x="3" y="15" width="14" height="2" fill="#5a4f3a" />
        <rect x="20" y="19" width="16" height="11" fill="#3e3526" stroke="#241f16" stroke-width="1" />
        <rect x="21" y="20" width="14" height="2" fill="#4c4330" />
        ${crate2}
        ${crate4}
        <rect x="8" y="22" width="4" height="3" fill="${windowColor}" />
        <rect x="26" y="23" width="4" height="2" fill="${windowColor}" />
        <rect x="4" y="29" width="32" height="3" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "scoutTower") {
    // A tall lookout — the platform rises at lvl 2+ (taller legs below it)
    // and a lit lamp appears on top at lvl 3+, same thresholds as before.
    const platformY = level >= 2 ? 0 : 7;
    const lamp = level >= 3 ? `<circle cx="15" cy="${platformY - 3}" r="2.6" fill="var(--brass-bright)" />` : "";
    return `
      <svg viewBox="0 0 30 52" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="${platformY + 6}" width="3" height="${43 - platformY}" fill="#4a4030" />
        <rect x="23" y="${platformY + 6}" width="3" height="${43 - platformY}" fill="#4a4030" />
        <line x1="4" y1="${platformY + 28}" x2="26" y2="${platformY + 6}" stroke="#3a3326" stroke-width="2.5" />
        <line x1="26" y1="${platformY + 28}" x2="4" y2="${platformY + 6}" stroke="#3a3326" stroke-width="2.5" />
        <line x1="4" y1="49" x2="26" y2="${platformY + 28}" stroke="#3a3326" stroke-width="2" />
        <line x1="26" y1="49" x2="4" y2="${platformY + 28}" stroke="#3a3326" stroke-width="2" />
        <rect x="1" y="${platformY}" width="28" height="7" fill="#5c5440" stroke="#241f16" stroke-width="1" />
        ${lamp}
        <rect x="1" y="49" width="3" height="3" fill="#241f16" />
        <rect x="26" y="49" width="3" height="3" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "barracks") {
    // A long bunk cabin — extra window per level, capped at 3, same as before.
    const winCount = Math.min(3, level);
    const positions = [6, 19, 32];
    let windows = "";
    for (let i = 0; i < winCount; i++) {
      windows += `<rect x="${positions[i]}" y="17" width="5" height="5" fill="${windowColor}" stroke="#241f16" stroke-width="1" />`;
    }
    return `
      <svg viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,0 47,12 1,12" fill="#5c5440" />
        <rect x="1" y="11" width="46" height="2" fill="#241f16" />
        <rect x="3" y="13" width="42" height="14" fill="#3a3528" />
        <rect x="3" y="13" width="42" height="2" fill="#46402f" />
        ${windows}
        <rect x="20" y="18" width="8" height="9" fill="#241f16" />
        <rect x="4" y="29" width="40" height="1" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "workshop") {
    // A lean-to shed with a gear motif — gear and window light up at lvl 1+,
    // same as before, now with a shaded roof ridge for some extra depth.
    const gearColor = level >= 1 ? "var(--brass-bright)" : "#544c3c";
    return `
      <svg viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="12" width="34" height="21" fill="#3e3526" stroke="#241f16" stroke-width="1" />
        <polygon points="3,12 37,12 30,3 10,3" fill="#544c3c" />
        <polygon points="10,3 30,3 27,1 13,1" fill="#615640" />
        <circle cx="20" cy="22" r="6" fill="none" stroke="${gearColor}" stroke-width="3" />
        <circle cx="20" cy="22" r="1.8" fill="${gearColor}" />
        <rect x="27" y="25" width="5" height="5" fill="${windowColor}" />
        <rect x="8" y="26" width="6" height="7" fill="#241f16" />
        <rect x="3" y="32" width="34" height="2" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "radioTower") {
    // A tall comms mast — double-X lattice with a mid-platform (distinct
    // from the Scout Tower's single-X frame and flat lookout deck) and a
    // beacon at the top that only lights up once built.
    const beaconColor = level >= 1 ? "var(--rust-bright)" : "#544c3c";
    return `
      <svg viewBox="0 0 26 56" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="2" height="44" fill="#4a4030" />
        <rect x="20" y="6" width="2" height="44" fill="#4a4030" />
        <line x1="5" y1="28" x2="21" y2="6" stroke="#3a3326" stroke-width="2" />
        <line x1="21" y1="28" x2="5" y2="6" stroke="#3a3326" stroke-width="2" />
        <line x1="5" y1="50" x2="21" y2="28" stroke="#3a3326" stroke-width="2" />
        <line x1="21" y1="50" x2="5" y2="28" stroke="#3a3326" stroke-width="2" />
        <rect x="2" y="22" width="22" height="3" fill="#4a4030" stroke="#241f16" stroke-width="1" />
        <line x1="13" y1="6" x2="13" y2="0" stroke="#4a4030" stroke-width="1.5" />
        <circle cx="13" cy="0" r="1.7" fill="${beaconColor}" />
        <rect x="1" y="50" width="3" height="3" fill="#241f16" />
        <rect x="22" y="50" width="3" height="3" fill="#241f16" />
      </svg>
    `;
  }
  if (id === "farm") {
    // A tilled plot that fills in with wheat as it levels up — bare dirt at
    // level 0 (nothing planted yet), then progressively more stalks, taller
    // and a richer gold, through level 5. Stalk x-positions are spread
    // evenly across the row rather than hand-placed per level, so the
    // count just reads as "fuller" each time without needing its own
    // hand-tuned layout per level the way the gabled buildings above do.
    const stalkCount = level * 3; // 0, 3, 6, 9, 12, 15 stalks at levels 0-5
    const stalkColor = level >= 4 ? "var(--brass-bright)" : "#8C7A3D"; // richer gold once the field's nearly full
    const baseHeight = 5; // how tall a level-1 stalk stands above the row
    const heightGrowth = 1.6; // extra height per level, so later levels visibly stand taller too
    let stalks = "";
    for (let i = 0; i < stalkCount; i++) {
      const x = 3 + (i * (38 / Math.max(1, stalkCount - 1)));
      const jitter = (i % 3) * 0.8; // slight stagger so a dense row doesn't look like a single repeated tile
      const stalkTop = 20 - (baseHeight + level * heightGrowth) - jitter;
      stalks += `<line x1="${x.toFixed(1)}" y1="20" x2="${x.toFixed(1)}" y2="${stalkTop.toFixed(1)}" stroke="${stalkColor}" stroke-width="1.1" stroke-linecap="round" />`;
      stalks += `<circle cx="${x.toFixed(1)}" cy="${stalkTop.toFixed(1)}" r="1.05" fill="${stalkColor}" />`;
    }
    return `
      <svg viewBox="0 0 44 26" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="18" width="44" height="3" fill="#4a4030" />
        <rect x="2" y="20" width="40" height="5" fill="${level >= 1 ? "#3a3326" : "#2e2a1f"}" />
        ${stalks}
      </svg>
    `;
  }
  return "";
}

function renderCampfireBuildings() {
  return CAMP_BUILDINGS.map((b) => {
    const level = STATE.upgrades[b.id] || 0;
    const def = getUpgradeDef(b.id);
    const maxed = level >= def.maxLevel;
    const unbuilt = level < 1;
    return `
      <div class="cf-building ${unbuilt ? "unbuilt" : ""}" data-building-id="${b.id}" style="left:${b.left}; bottom:${b.bottom}; transform:translateX(-50%) scale(${b.scale});">
        ${buildingSvgMarkup(b.id, level)}
        <div class="cf-building-label">
          <div class="cf-building-level ${maxed ? "maxed" : ""} ${unbuilt ? "unbuilt" : ""}">${unbuilt ? "NOT BUILT" : `LV.${level}/${def.maxLevel}`}</div>
          <div class="cf-building-name">${escapeHtml(def.name)}</div>
        </div>
      </div>
    `;
  }).join("");
}

// The stash chest: a small fixed prop sitting near the fire, not gated by
// any upgrade (it's always there — the stash itself always exists, even
// empty), so it's kept entirely separate from CAMP_BUILDINGS rather than
// shoehorned into that level-gated list. Clicking it opens the same
// openStashScreen() popup the old header button used to.
const STASH_CHEST_POS = { left: "6%", bottom: "9%", scale: 1 };

function chestSvgMarkup() {
  return `
    <svg viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="9" width="26" height="12" fill="#4a4030" stroke="#241f16" stroke-width="1" />
      <rect x="1" y="9" width="26" height="2" fill="#5a4f3a" />
      <path d="M1,9 Q14,-3 27,9" fill="#5c5440" stroke="#241f16" stroke-width="1" />
      <path d="M3,8 Q14,-1 25,8" fill="none" stroke="#46402f" stroke-width="0.6" />
      <rect x="3" y="13" width="22" height="1" fill="#3a3326" opacity="0.7" />
      <rect x="3" y="17" width="22" height="1" fill="#3a3326" opacity="0.7" />
      <rect x="11" y="9" width="6" height="7" fill="#2a2418" stroke="#1a160e" stroke-width="1" />
      <circle cx="14" cy="12.5" r="1.3" fill="var(--brass-bright)" />
      <rect x="0" y="19" width="2" height="3" fill="#241f16" />
      <rect x="26" y="19" width="2" height="3" fill="#241f16" />
    </svg>
  `;
}

function renderStashChest() {
  return `
    <div class="cf-building cf-chest" data-building-id="stashChest" style="left:${STASH_CHEST_POS.left}; bottom:${STASH_CHEST_POS.bottom}; transform:translateX(-50%) scale(${STASH_CHEST_POS.scale});">
      ${chestSvgMarkup()}
      <div class="cf-building-label">
        <div class="cf-building-name">Stash</div>
      </div>
    </div>
  `;
}

// The warehouse: a second always-present prop, mirroring the chest on the
// opposite side of the scene. Hover-only by design — it's a readout, not
// an interactive building, so it doesn't get a data-building-id or a
// BUILDING_CLICK_TARGETS entry at all. The resource numbers are kept live
// the same way survivor HP is: syncCampfireScene() patches the existing
// .cf-warehouse-supplies text on every render rather than this function
// being called again, since the node itself is long-lived once mounted.
const WAREHOUSE_POS = { left: "94%", bottom: "9%", scale: 1 };

function warehouseSvgMarkup() {
  return `
    <svg viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="9" width="30" height="14" fill="#3e3526" stroke="#241f16" stroke-width="1" />
      <rect x="1" y="9" width="30" height="2" fill="#4c4330" />
      <polygon points="1,9 31,9 27,2 5,2" fill="#544c3c" />
      <polygon points="5,2 27,2 24,0 8,0" fill="#615640" />
      <rect x="1" y="16" width="30" height="1" fill="#241f16" opacity="0.6" />
      <rect x="4" y="13" width="6" height="10" fill="#2a2418" stroke="#1a160e" stroke-width="1" />
      <rect x="13" y="13" width="6" height="10" fill="#2a2418" stroke="#1a160e" stroke-width="1" />
      <rect x="22" y="13" width="6" height="10" fill="#2a2418" stroke="#1a160e" stroke-width="1" />
      <rect x="5" y="15" width="4" height="3" fill="#1a160e" />
      <rect x="14" y="15" width="4" height="3" fill="#1a160e" />
      <rect x="23" y="15" width="4" height="3" fill="#1a160e" />
      <rect x="14" y="4" width="4" height="3" fill="var(--brass-bright)" />
      <rect x="0" y="21" width="2" height="3" fill="#241f16" />
      <rect x="30" y="21" width="2" height="3" fill="#241f16" />
    </svg>
  `;
}

function renderWarehouse() {
  return `
    <div class="cf-building cf-warehouse" style="left:${WAREHOUSE_POS.left}; bottom:${WAREHOUSE_POS.bottom}; transform:translateX(-50%) scale(${WAREHOUSE_POS.scale});">
      ${warehouseSvgMarkup()}
      <div class="cf-building-label">
        <div class="cf-warehouse-supplies">
          <span class="cf-supply-line scrap">${STATE.resources.scrap} scrap</span>
          <span class="cf-supply-line gold">${STATE.resources.gold} gold</span>
          <span class="cf-supply-line meds">${STATE.resources.meds} meds</span>
          <span class="cf-supply-line food">${STATE.resources.food || 0} food</span>
        </div>
        <div class="cf-building-name">Warehouse</div>
      </div>
    </div>
  `;
}

function renderCampfireSceneShell() {
  return `
    <div class="campfire-scene" id="campfireScene">
      <div class="cf-sky"></div>
      <div class="cf-stars"><div class="cf-stars-twinkle"></div></div>
      <div class="cf-sky-tint"></div>
      <div class="cf-ground"></div>
      <div class="cf-buildings" id="cfBuildings">${renderCampfireBuildings()}</div>
      <div class="cf-chest-layer" id="cfChestLayer">${renderStashChest()}</div>
      <div class="cf-warehouse-layer" id="cfWarehouseLayer">${renderWarehouse()}</div>
      <div class="cf-glow"></div>
      <div class="cf-fire">
        <div class="cf-log"></div>
        <div class="cf-flame"></div>
        <div class="cf-flame cf-flame-inner"></div>
      </div>
      <div class="cf-embers"><div class="cf-ember"></div><div class="cf-ember"></div><div class="cf-ember"></div></div>
      <div class="cf-survivors" id="cfSurvivors"></div>
      <div class="cf-clock" data-phase="night">
        ${CLOCK_ICON_SVG}
        <span class="cf-clock-day">DAY 1</span>
        <span class="cf-clock-time">00:00</span>
      </div>
    </div>
  `;
}

function makeSurvivorSprite(scav, seatIndex) {
  const seat = CAMPFIRE_SEATS[seatIndex % CAMPFIRE_SEATS.length];
  // Palette assigned by seat position rather than a hash of the scav's id —
  // guarantees neighbors around the fire never end up wearing the same
  // outfit, which a hash can occasionally produce by chance on a small
  // roster (e.g. 3 scavs landing on 2 similar palettes).
  const palette = SURVIVOR_PALETTES[seatIndex % SURVIVOR_PALETTES.length];
  const el = document.createElement("div");
  el.className = "cf-survivor";
  el.dataset.scavId = scav.id;
  el.dataset.seatIndex = String(seatIndex);
  el.title = ""; // suppress the native browser tooltip; the custom label below covers this
  el.style.left = seat.left;
  el.style.bottom = seat.bottom;
  // The pose div is a separate inner element so the bob/walk animation and
  // left/right facing flip (both applied via `transform`) never fight with
  // the outer div's left/bottom positioning during a walk transition.
  el.innerHTML = `
    <div class="cf-survivor-pose" style="--bob-dur:${(2.1 + (seatIndex % 4) * 0.25).toFixed(2)}s; --bob-delay:${(seatIndex * 0.35).toFixed(2)}s;">
      ${survivorSvgMarkup(palette)}
    </div>
    <div class="cf-survivor-label">
      <div class="cf-survivor-hp">${scav.hp}/${effectiveMaxHp(scav)} HP</div>
      <div class="cf-survivor-name">${escapeHtml(scav.name)}</div>
    </div>
  `;
  // Clicking a survivor opens their Character Screen, same as the
  // "Loadout" button on a roster card — a quick way to check on or gear up
  // whoever catches your eye by the fire.
  el.addEventListener("click", () => {
    if (!document.querySelector(".modal-overlay")) {
      openLoadoutModal(scav.id);
    }
  });
  return el;
}

// ===== SURVIVOR WANDERING =====
// Every so often, each survivor who isn't already walking gets sent to a
// new random spot on the ground. Movement itself is a plain CSS transition
// on left/bottom (cheap, and keeps running fine independent of renderAll
// since it lives entirely on already-mounted DOM nodes) — this controller
// just decides *when* and *where*, and flips the facing class to match.
// Roams the open ground in front of the building skyline, clear of the
// fire itself so nobody appears to walk through it.
const WANDER_BOUNDS = { minLeft: 8, maxLeft: 92, minBottom: 3, maxBottom: 27 };
const FIRE_EXCLUSION = { left: 50, halfWidth: 9, bottom: 0, top: 16 }; // keep clear of the fire's footprint
const WALK_SPEED_PCT_PER_SEC = 9; // roughly how fast a sprite crosses the scene

function pctFromStyle(value) {
  return parseFloat(value) || 0;
}

function pickWanderTarget(fromLeft, fromBottom) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const left = WANDER_BOUNDS.minLeft + Math.random() * (WANDER_BOUNDS.maxLeft - WANDER_BOUNDS.minLeft);
    const bottom = WANDER_BOUNDS.minBottom + Math.random() * (WANDER_BOUNDS.maxBottom - WANDER_BOUNDS.minBottom);
    const insideFire = Math.abs(left - FIRE_EXCLUSION.left) < FIRE_EXCLUSION.halfWidth && bottom < FIRE_EXCLUSION.top;
    if (!insideFire) return { left, bottom };
  }
  // Fallback after a few unlucky rolls: nudge from the current spot instead.
  return { left: Math.min(WANDER_BOUNDS.maxLeft, Math.max(WANDER_BOUNDS.minLeft, fromLeft + (Math.random() - 0.5) * 20)), bottom: fromBottom };
}

function sendSurvivorWalking(el) {
  if (el.dataset.walking === "1") return; // already mid-walk, leave it be
  const fromLeft = pctFromStyle(el.style.left);
  const fromBottom = pctFromStyle(el.style.bottom);
  const target = pickWanderTarget(fromLeft, fromBottom);
  const dist = Math.hypot(target.left - fromLeft, target.bottom - fromBottom);
  const duration = Math.max(0.6, dist / WALK_SPEED_PCT_PER_SEC);

  const pose = el.querySelector(".cf-survivor-pose");
  el.dataset.walking = "1";
  el.style.transition = `left ${duration}s linear, bottom ${duration}s linear`;
  if (pose) {
    pose.classList.toggle("facing-left", target.left < fromLeft);
    pose.classList.add("walking");
  }
  // Force layout to flush the starting position before changing it, so the
  // transition actually animates instead of jumping straight to the target.
  void el.offsetWidth;
  el.style.left = `${target.left}%`;
  el.style.bottom = `${target.bottom}%`;

  setTimeout(() => {
    if (!el.isConnected) return;
    el.dataset.walking = "0";
    el.style.transition = "";
    if (pose) pose.classList.remove("walking");
  }, duration * 1000 + 30);
}

let wanderInterval = null;

// Periodically sends a random idle survivor for a walk. Started once and
// left running for the page's lifetime — it's a no-op when there are no
// survivors, and sendSurvivorWalking() already ignores anyone mid-walk, so
// there's no need to start/stop this alongside the roster changing.
function startSurvivorWandering() {
  if (wanderInterval) return;
  wanderInterval = setInterval(() => {
    const sprites = Array.from(document.querySelectorAll(".cf-survivor"));
    const idle = sprites.filter((el) => el.dataset.walking !== "1");
    if (idle.length === 0) return;
    // Send roughly one idle survivor at a time so the camp doesn't look
    // like everyone got up to walk at once.
    const chosen = idle[Math.floor(Math.random() * idle.length)];
    sendSurvivorWalking(chosen);
  }, 1800);
}

// Adds/removes sprites to match the current living roster, leaving sprites
// for scavs who are still here completely untouched (so their in-progress
// CSS animations keep running rather than restarting). Safe to call after
// every renderAll() — it's a no-op whenever the roster hasn't changed.
function syncCampfireScene() {
  const container = document.getElementById("cfSurvivors");
  const sceneRoot = document.getElementById("campfireScene");
  if (!container || !sceneRoot) return;
  startSurvivorWandering();

  const living = STATE.scavs.filter((s) => s.status !== "dead");
  const emptyNote = sceneRoot.querySelector(".cf-empty-note");

  if (living.length === 0) {
    container.innerHTML = "";
    if (!emptyNote) {
      const note = document.createElement("div");
      note.className = "cf-empty-note";
      note.textContent = "Nobody left to sit by the fire. Recruit someone.";
      sceneRoot.appendChild(note);
    }
    return;
  }
  if (emptyNote) emptyNote.remove();

  const livingIds = new Set(living.map((s) => s.id));
  // Remove sprites for anyone no longer living (dead, or otherwise gone).
  container.querySelectorAll(".cf-survivor").forEach((el) => {
    if (!livingIds.has(el.dataset.scavId)) el.remove();
  });
  // Keep the HP shown on hover current for everyone still here — sprite
  // nodes are long-lived (see the note on syncCampfireScene above), so the
  // text baked in at creation time would otherwise go stale the moment a
  // scav takes damage or heals.
  container.querySelectorAll(".cf-survivor").forEach((el) => {
    const scav = living.find((s) => s.id === el.dataset.scavId);
    if (!scav) return;
    const hpEl = el.querySelector(".cf-survivor-hp");
    if (hpEl) {
      hpEl.textContent = `${scav.hp}/${effectiveMaxHp(scav)} HP`;
      hpEl.className = `cf-survivor-hp ${hpClass(scav)}`;
    }
  });
  // Whichever seat indices are still in use by sprites we just left alone —
  // new arrivals need to claim a seat nobody else already occupies, not
  // just "their position in the living array" (which can collide with an
  // existing sprite's seat once people have died and been replaced).
  const existingEls = Array.from(container.querySelectorAll(".cf-survivor"));
  const existingIds = new Set(existingEls.map((el) => el.dataset.scavId));
  const occupiedSeats = new Set(existingEls.map((el) => parseInt(el.dataset.seatIndex, 10)));
  let nextSeat = 0;
  function claimFreeSeat() {
    while (occupiedSeats.has(nextSeat)) nextSeat++;
    occupiedSeats.add(nextSeat);
    return nextSeat++;
  }
  living.forEach((scav) => {
    if (!existingIds.has(scav.id)) {
      container.appendChild(makeSurvivorSprite(scav, claimFreeSeat()));
    }
  });

  // Buildings have no running animation to protect, so re-rendering them is
  // cheap — but skip it when nothing's actually changed (this runs after
  // every renderAll(), which is most of the time unrelated to upgrades) by
  // comparing against a fingerprint of the current upgrade levels.
  const buildingsContainer = document.getElementById("cfBuildings");
  if (buildingsContainer) {
    const fingerprint = CAMP_BUILDINGS.map((b) => STATE.upgrades[b.id] || 0).join(",");
    if (buildingsContainer.dataset.fingerprint !== fingerprint) {
      buildingsContainer.innerHTML = renderCampfireBuildings();
      buildingsContainer.dataset.fingerprint = fingerprint;
    }
  }
  // The warehouse's hover tooltip shows live resource counts. Its DOM node
  // is long-lived (renderCampfireSceneShell only runs once, on first
  // mount — see the note at the top of this function), so the numbers
  // baked in at creation time would otherwise go stale the moment scrap,
  // gold, or meds change.
  refreshWarehouseTooltip();
  wireCampfireBuildings();
}

// Which screen opens when a given building is clicked. Infirmary, Barracks,
// and Workshop each have their own dedicated screen; Armory and Scout Tower
// don't (their upgrade cards live directly in the Camp screen), so those
// two just open Camp instead of going nowhere. The stash chest isn't an
// upgrade at all, but slots into this same map since it's wired through
// the same click-handling path as every other clickable camp prop.
// Every camp building now opens the same building popup on click — it has
// its own Build/Upgrade button plus, for Infirmary/Barracks/Workshop, an
// "Open" button into that building's dedicated screen. The stash chest is
// the one exception, since it isn't a building at all (no level, no
// upgrade) — it goes straight to the stash popup, same as before.
const BUILDING_CLICK_TARGETS = {
  infirmary: () => openBuildingPopup("infirmary"),
  barracks: () => openBuildingPopup("barracks"),
  workshop: () => openBuildingPopup("workshop"),
  armory: () => openBuildingPopup("armory"),
  scoutTower: () => openBuildingPopup("scoutTower"),
  radioTower: () => openBuildingPopup("radioTower"),
  farm: () => openBuildingPopup("farm"),
  stashChest: openStashScreen,
};

// Re-wires click handlers on whatever building (and chest) elements
// currently exist. Safe to call repeatedly — these are plain innerHTML-
// replaced (no animation state to protect the way survivor sprites have),
// so there's no risk of double-binding old, removed elements.
function wireCampfireBuildings() {
  document.querySelectorAll("#cfBuildings [data-building-id], #cfChestLayer [data-building-id]").forEach((el) => {
    el.onclick = () => {
      if (document.querySelector(".modal-overlay")) return;
      const handler = BUILDING_CLICK_TARGETS[el.dataset.buildingId];
      if (handler) handler();
    };
  });
}

function renderRaidLauncherCard() {
  if (STATE.campEvent) {
    return `
      <div class="raid-launcher-card">
        <div class="rl-status" style="color:var(--rust-bright);">Camp is under threat — deal with it before sending anyone out.</div>
        <button class="btn danger" id="reopenCampEventBtn">Respond to Threat</button>
      </div>
    `;
  }
  const readyCount = STATE.scavs.filter((s) => s.status === "ready").length;
  const hasReady = readyCount > 0;
  return `
    <div class="raid-launcher-card">
      <div class="rl-status">${hasReady ? `<b>${readyCount}</b> scav${readyCount === 1 ? "" : "s"} ready to deploy` : "No scavs ready — wait for raids to finish or recruit more."}</div>
      <button class="btn" id="openRaidScreenBtn" ${!hasReady ? "disabled" : ""}>Open Raid Map</button>
    </div>
  `;
}

// ===== RENDER: FULL-SCREEN RAID SELECT (Tarkov-style map select) =====

// Dot positions on the region overview map (1200x800 viewBox), placed to
// loosely reflect each site's setting — low-risk sites toward open or
// residential-feeling ground, high/extreme sites toward the dense urban
// core and the industrial haze in the corner.
const RAID_MAP_DOTS = {
  lot: { x: 280, y: 280 },
  marina: { x: 120, y: 640 },
  depot: { x: 420, y: 480 },
  farmstead: { x: 180, y: 160 },
  suburb: { x: 420, y: 350 },
  hospital: { x: 560, y: 280 },
  precinct: { x: 700, y: 220 },
  metro: { x: 660, y: 340 },
  tower: { x: 780, y: 160 },
  refinery: { x: 940, y: 640 },
  drowned: { x: 280, y: 700 },
};

function renderRaidSelectScreen() {
  const tabs = `
    <div class="rs-tabs">
      <button class="rs-tab ${raidScreenTab === "region" ? "active" : ""}" data-raid-tab="region">Region</button>
      <button class="rs-tab ${raidScreenTab === "dungeons" ? "active" : ""}" data-raid-tab="dungeons">Dungeons</button>
      <button class="rs-tab ${raidScreenTab === "arena" ? "active" : ""}" data-raid-tab="arena">Arena</button>
    </div>
  `;
  const activeMapName = raidScreenTab === "region"
    ? (MAPS.find((m) => m.id === selectedMapId)?.name || null)
    : raidScreenTab === "dungeons"
    ? (DUNGEONS.find((d) => d.id === selectedDungeonId)?.name || null)
    : (arenaScavId ? ARENAS[0].name : null);

  let tabBody;
  if (raidScreenTab === "region") tabBody = renderRegionTab();
  else if (raidScreenTab === "dungeons") tabBody = renderDungeonsTab();
  else tabBody = renderArenaTab();

  return `
    <div class="raid-select-screen">
      <div class="rs-header">
        <div class="rs-title">SEND A RAID${activeMapName ? ` — <span>${escapeHtml(activeMapName)}</span>` : ""}</div>
        <button class="rs-back-btn" id="closeRaidScreenBtn">← Back to Camp</button>
      </div>
      ${tabs}
      ${tabBody}
    </div>
  `;
}

// The original single-scav region map — unchanged in behavior from before
// the Dungeons tab existed, just split out into its own function so the
// two tabs can live side by side without one screen trying to do both
// single-scav and mandatory-group-of-3 selection at once.
function renderRegionTab() {
  const selScav = STATE.scavs.find((s) => s.id === selectedScavId) || null;
  const activeMap = MAPS.find((m) => m.id === selectedMapId) || null;

  const dots = MAPS.filter((m) => !m.dungeon && !m.arena).map((map) => {
    const pos = RAID_MAP_DOTS[map.id];
    const locked = mapLockedForScav(map, selScav);
    const isActive = map.id === selectedMapId;
    return `
      <button class="rs-map-dot ${map.risk} ${isActive ? "active" : ""} ${locked ? "locked" : ""}" data-map-id="${map.id}" style="left:${(pos.x / 1200) * 100}%; top:${(pos.y / 800) * 100}%;">
        <span class="rs-map-dot-core"></span>
        <span class="rs-map-dot-label">${escapeHtml(map.name)}</span>
      </button>
    `;
  }).join("");

  const popup = activeMap ? renderRaidMapPopup(activeMap, selScav) : "";

  return `
    <div class="rs-map-stage">
      <div class="rs-map-canvas" style="background-image:url('${REGION_MAP_ART}')">
        ${dots}
      </div>
      <div class="rs-side-popup ${activeMap ? "open" : ""}" id="rsSidePopup">${popup}</div>
    </div>
  `;
}

// ===== DUNGEONS TAB =====
// Mirrors the Barracks group-raid flow (renderBarracksGroupSlots/
// renderBarracksScavGrid/MAX_GROUP_SIZE) closely on purpose — same
// interaction model the player already knows from forming a regular
// group raid — but with two differences that run through every piece of
// this tab: the group must be exactly 3, not 1-3, and a dungeon's lock
// state depends on owning its key in addition to the normal level bar.

function renderDungeonGroupSlots() {
  const slots = [];
  for (let i = 0; i < MAX_GROUP_SIZE; i++) {
    const scavId = dungeonGroup[i];
    const scav = scavId ? STATE.scavs.find((s) => s.id === scavId) : null;
    slots.push(scav
      ? `<div class="group-slot filled"><span>${escapeHtml(scav.name)}</span><button class="group-slot-remove" data-remove-dungeon-group-id="${scav.id}" title="Remove">✕</button></div>`
      : `<div class="group-slot">Empty Slot</div>`
    );
  }
  return slots.join("");
}

function renderDungeonScavGrid() {
  const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
  const groupFull = dungeonGroup.length >= MAX_GROUP_SIZE;
  return livingScavs.map((scav) => {
    const pickIndex = dungeonGroup.indexOf(scav.id);
    const isPicked = pickIndex !== -1;
    const unavailable = scav.status !== "ready" && !isPicked;
    const unavailableLabel = scav.status === "healing" ? "Healing" : scav.status === "resting" ? "Resting" : scav.status === "defending" ? "Defending" : "On raid";
    const disabledByFull = !isPicked && groupFull;
    return `
      <div class="rs-scav-pick group-pick ${isPicked ? "active" : ""} ${unavailable ? "unavailable" : ""} ${disabledByFull ? "full-disabled" : ""}" data-dungeon-scav-id="${scav.id}">
        ${isPicked ? `<div class="group-pick-badge">${pickIndex + 1}</div>` : ""}
        <div class="rsp-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
        <div class="rsp-hp">${unavailable ? unavailableLabel : `${scav.hp}/${effectiveMaxHp(scav)} HP`}</div>
      </div>
    `;
  }).join("") || `<div class="empty-note">No scavs available.</div>`;
}

// One card per dungeon — same visual language as renderBarracksMapStrip's
// cards, but only 3 of them and laid out as a static row rather than a
// scroll strip (there's no need to scroll 3 cards), plus a key-count badge
// so the lock reason (level vs. no key) is visible without opening the
// card at all.
function renderDungeonCards() {
  const groupScavs = dungeonGroup.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  return DUNGEONS.map((dungeon) => {
    const levelLocked = mapLockedForGroup(dungeon, groupScavs);
    const keyCount = dungeonKeyCount(dungeon.requiresKey);
    const noKey = keyCount < 1;
    const locked = levelLocked || noKey;
    const isActive = dungeon.id === selectedDungeonId;
    let lockLabel = "";
    if (levelLocked) lockLabel = `Locked — Lv.${dungeon.minLevel}`;
    else if (noKey) lockLabel = `Locked — needs ${getDungeonKeyDef(dungeon.requiresKey).name}`;
    return `
      <div class="rs-map-card dungeon-card ${isActive ? "active" : ""} ${locked ? "locked" : ""}" data-dungeon-id="${dungeon.id}" style="background-image:url('${MAP_ART[dungeon.id]}')">
        <div class="rs-card-risk ${dungeon.risk}">${dungeon.risk}</div>
        <div class="dungeon-key-badge">${keyCount > 0 ? `🔑 ×${keyCount}` : ""}</div>
        <div class="rs-card-overlay"><div class="rs-card-name">${escapeHtml(dungeon.name)}</div></div>
        ${locked ? `<div class="rs-card-lock">${lockLabel}</div>` : ""}
      </div>
    `;
  }).join("");
}

function renderDungeonBottomBar() {
  const activeDungeon = DUNGEONS.find((d) => d.id === selectedDungeonId);
  if (!activeDungeon) {
    return `<div class="empty-note" style="flex:1;">Pick a dungeon above to see what it takes to get in.</div>`;
  }
  const groupScavs = dungeonGroup.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  const keyCount = dungeonKeyCount(activeDungeon.requiresKey);
  const keyDef = getDungeonKeyDef(activeDungeon.requiresKey);

  if (groupScavs.length < MAX_GROUP_SIZE) {
    return `<div class="empty-note" style="flex:1;">Dungeons need a full 3-scav group — ${groupScavs.length}/3 picked so far.</div>`;
  }
  if (mapLockedForGroup(activeDungeon, groupScavs)) {
    return `<div class="empty-note" style="flex:1;">At least one of your picks isn't strong enough for this site yet (Lv.${activeDungeon.minLevel}+ required).</div>`;
  }
  if (keyCount < 1) {
    return `<div class="empty-note" style="flex:1;">You don't have a ${escapeHtml(keyDef.name)}. Boss kills here have a small chance to drop one — or watch the Flea Market.</div>`;
  }

  const gearById = {};
  groupScavs.forEach((s) => { gearById[s.id] = s.gear; });
  const duration = Math.max(8, Math.round(activeDungeon.duration * raidDurationMult()));
  const { survival, lootMult } = calcGroupOdds(groupScavs, activeDungeon, gearById);
  const survivalPct = Math.round(survival * 100);
  const lootPct = Math.round(lootMult * 100);
  const names = groupScavs.map((s) => s.name).join(", ");

  return `
    <div class="rs-odds">
      <div class="o-item"><span class="o-lbl">Survival</span><span class="o-val survive">${survivalPct}%</span></div>
      <div class="o-item"><span class="o-lbl">Loot</span><span class="o-val loot">${lootPct}%</span></div>
      <div class="o-item"><span class="o-lbl">Time</span><span class="o-val">${duration}s</span></div>
    </div>
    <button class="btn dungeon-launch-btn" id="launchDungeonBtn">Spend ${escapeHtml(keyDef.name)} — Send Group</button>
  `;
}

function renderDungeonsTab() {
  const activeDungeon = DUNGEONS.find((d) => d.id === selectedDungeonId);
  const boss = activeDungeon ? getBossForMap(activeDungeon.id) : null;
  return `
    <div class="rs-strip-wrap">
      <div class="rs-strip dungeon-strip" id="dungeonCardStrip">${renderDungeonCards()}</div>
    </div>
    ${activeDungeon ? `
      <div class="dungeon-detail">
        <div class="dungeon-desc">${escapeHtml(activeDungeon.desc)}</div>
        <div class="rs-art-meta">
          <div><span class="m-lbl">Risk</span><span class="m-val">${activeDungeon.risk}</span></div>
          <div><span class="m-lbl">Min Level</span><span class="m-val">${activeDungeon.minLevel}</span></div>
          <div><span class="m-lbl">Boss</span><span class="m-val">${boss ? escapeHtml(boss.name) : "—"}</span></div>
        </div>
        <div class="dungeon-note">Guaranteed boss fight, on top of the usual chance of a hazard or hostile encounter along the way. A key is spent the moment the group goes out — win or lose.</div>
      </div>
    ` : ""}
    <div class="rs-body">
      <div class="rs-info-panel" style="grid-column: 1 / -1;">
        <div class="section-divider" style="margin-top:0;">Raid group (exactly ${MAX_GROUP_SIZE})</div>
        <div class="group-slots-row" id="dungeonGroupSlots">${renderDungeonGroupSlots()}</div>
        <div class="group-bonus-note">Each extra member adds +${Math.round(GROUP_SURVIVAL_BONUS_PER_EXTRA * 100)}% survival and +${Math.round(GROUP_LOOT_BONUS_PER_EXTRA * 100)}% loot to the whole group — with a fight this dangerous, all 3 slots are mandatory, not optional.</div>
        <div class="section-divider">Choose scavs</div>
        <div class="rs-scav-grid" id="dungeonScavGrid">${renderDungeonScavGrid()}</div>
      </div>
    </div>
    <div class="rs-bottom-bar" id="dungeonBottomBar">${renderDungeonBottomBar()}</div>
  `;
}

// ===== ARENA TAB =====
// Simpler than either of the other two tabs: there's only one arena, so
// no map-picking UI at all, and it's single-scav like the Region tab
// rather than a group like Dungeons — just a fighter pick and a launch
// button. No loot table, no odds bar in the usual sense (no survival
// formula exists here — see resolveArenaRaid), just the flat win chance
// and reward range stated plainly.

function renderArenaScavGrid() {
  const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
  return livingScavs.map((scav) => {
    const isActive = scav.id === arenaScavId;
    const unavailable = scav.status !== "ready";
    const unavailableLabel = scav.status === "healing" ? "Healing" : scav.status === "resting" ? "Resting" : scav.status === "defending" ? "Defending" : "On raid";
    return `
      <div class="rs-scav-pick ${isActive ? "active" : ""} ${unavailable ? "unavailable" : ""}" data-arena-scav-id="${scav.id}">
        <div class="rsp-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
        <div class="rsp-hp">${unavailable ? unavailableLabel : `${scav.hp}/${effectiveMaxHp(scav)} HP`}</div>
      </div>
    `;
  }).join("") || `<div class="empty-note">No scavs available.</div>`;
}

function renderArenaBottomBar() {
  const scav = STATE.scavs.find((s) => s.id === arenaScavId);
  if (!scav || scav.status !== "ready") {
    return `<div class="empty-note" style="flex:1;">Pick a scav above to enter them in the tournament.</div>`;
  }
  return `
    <div class="rs-odds">
      <div class="o-item"><span class="o-lbl">Win Chance</span><span class="o-val survive">${Math.round(ARENA_WIN_CHANCE * 100)}%</span></div>
      <div class="o-item"><span class="o-lbl">Reward</span><span class="o-val loot">${ARENA_GOLD_MIN}-${ARENA_GOLD_MAX} gold + gear</span></div>
      <div class="o-item"><span class="o-lbl">Time</span><span class="o-val">${ARENAS[0].duration}s</span></div>
    </div>
    <button class="btn" id="launchArenaBtn">Enter ${escapeHtml(scav.name)}</button>
  `;
}

function renderArenaTab() {
  const arena = ARENAS[0];
  return `
    <div class="rs-body">
      <div class="rs-art-panel" style="background-image:url('${MAP_ART[arena.id]}')">
        <div class="rs-art-content">
          <div class="rs-art-name">${escapeHtml(arena.name)}</div>
          <div class="rs-art-desc">${escapeHtml(arena.desc)}</div>
          <div class="rs-art-meta">
            <div><span class="m-lbl">Duration</span><span class="m-val">${arena.duration}s</span></div>
            <div><span class="m-lbl">Win Chance</span><span class="m-val">${Math.round(ARENA_WIN_CHANCE * 100)}%</span></div>
            <div><span class="m-lbl">Reward</span><span class="m-val">${ARENA_GOLD_MIN}-${ARENA_GOLD_MAX} gold + gear</span></div>
          </div>
        </div>
      </div>
      <div class="rs-info-panel">
        <div class="dungeon-note" style="margin-top:0; padding-top:0; border-top:none;">No mid-fight events, no boss, and no risk to whoever steps in — win or lose, they walk out the same way they walked in. A win pays out a tier-appropriate piece of gear on top of the gold; a loss just means no payout this time.</div>
        <div class="section-divider">Choose a scav</div>
        <div class="rs-scav-grid" id="arenaScavGrid">${renderArenaScavGrid()}</div>
      </div>
    </div>
    <div class="rs-bottom-bar" id="arenaBottomBar">${renderArenaBottomBar()}</div>
  `;
}

function renderRaidMapPopup(activeMap, selScav) {
  const duration = Math.max(8, Math.round(activeMap.duration * raidDurationMult()));
  const gearFindPct = Math.round(gearFindChance(activeMap) * 100);
  // Launching right now would lock in whatever the day cycle currently
  // shows — same "decided once at launch" reasoning as launchRaid's
  // nightRaid flag. Showing the bonus here keeps this popup's numbers
  // from silently disagreeing with what resolveRaid actually pays out.
  const nightNow = isNightNow();
  const nightLootMult = nightNow ? NIGHT_LOOT_MULT : 1;
  const lootEntries = Object.entries(activeMap.lootTable).map(([res, range]) => {
    const yieldMult = lootYieldMult() * nightLootMult;
    const lo = Math.round(range[0] * yieldMult);
    const hi = Math.round(range[1] * yieldMult);
    return `<div class="lt-item"><b>${lo}-${hi}</b>${escapeHtml(res)}</div>`;
  }).join("");

  const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
  const scavPicks = livingScavs.map((scav) => {
    const isActive = scav.id === selectedScavId;
    const unavailable = scav.status !== "ready";
    const unavailableLabel = scav.status === "healing" ? "Healing" : scav.status === "resting" ? "Resting" : scav.status === "defending" ? "Defending" : "On raid";
    return `
      <div class="rs-scav-pick ${isActive ? "active" : ""} ${unavailable ? "unavailable" : ""}" data-scav-id="${scav.id}">
        <div class="rsp-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></div>
        <div class="rsp-hp">${unavailable ? unavailableLabel : `${scav.hp}/${effectiveMaxHp(scav)} HP`}</div>
      </div>
    `;
  }).join("") || `<div class="empty-note">No scavs available.</div>`;

  const mapLocked = mapLockedForScav(activeMap, selScav);

  let bottomBarContent;
  if (!selScav || selScav.status !== "ready") {
    bottomBarContent = `<div class="empty-note" style="flex:1;">Select a ready scav above to prep this raid.</div>`;
  } else if (mapLocked) {
    bottomBarContent = `<div class="empty-note" style="flex:1;">This site is locked until your scavs are stronger.</div>`;
  } else {
    const { survival, lootMult } = calcOdds(selScav, activeMap, selScav.gear);
    const survivalPct = Math.round(survival * 100);
    const lootPct = Math.round(lootMult * nightLootMult * 100);
    bottomBarContent = `
      <div class="rs-odds">
        <div class="o-item"><span class="o-lbl">Survival</span><span class="o-val survive">${survivalPct}%</span></div>
        <div class="o-item"><span class="o-lbl">Loot</span><span class="o-val loot">${lootPct}%</span></div>
        <div class="o-item"><span class="o-lbl">Time</span><span class="o-val">${duration}s</span></div>
      </div>
      <button class="btn" id="launchBtn">Send ${escapeHtml(selScav.name)}</button>
    `;
  }

  return `
    <button class="rs-popup-close" id="closeMapPopupBtn" aria-label="Close">✕</button>
    <div class="rs-popup-scroll">
      <div class="rs-art-panel" style="background-image:url('${MAP_ART[activeMap.id]}')">
        <div class="rs-art-content">
          <div class="rs-art-name">${escapeHtml(activeMap.name)}</div>
          <div class="rs-art-desc">${escapeHtml(activeMap.desc)}</div>
          <div class="rs-art-meta">
            <div><span class="m-lbl">Risk</span><span class="m-val">${activeMap.risk}</span></div>
            <div><span class="m-lbl">Duration</span><span class="m-val">${duration}s</span></div>
            <div><span class="m-lbl">Min Level</span><span class="m-val">${activeMap.minLevel}</span></div>
            <div><span class="m-lbl">Gear Find</span><span class="m-val">${gearFindPct}%</span></div>
          </div>
        </div>
      </div>
      <div class="rs-info-panel">
        ${nightNow ? `<div class="gear-find-banner" style="margin-top:0;"><span class="gf-tag">Night</span> Launching now locks in a richer haul and a higher chance of running into hostiles out there.</div>` : ""}
        <div class="section-divider" style="margin-top:0;">Choose a scav</div>
        <div class="rs-scav-grid">${scavPicks}</div>
        <div class="section-divider">Expected loot</div>
        <div class="rs-loot-table">${lootEntries}</div>
        ${selScav && selScav.status === "ready" && !mapLocked ? `
          <div class="section-divider">Loadout</div>
          <div class="rs-loadout-summary">
            ${["weapon", "armor", "pack"].map((slot) => {
              const item = getGearItem(slot, selScav.gear[slot]);
              return `<div class="rs-loadout-row"><span class="lbl">${slot}</span><span class="rs-loadout-val">${escapeHtml(item.name)}</span></div>`;
            }).join("")}
          </div>
          <button class="btn secondary" id="manageLoadoutBtn" data-loadout-scav-id="${selScav.id}" style="margin-top:8px;">Manage Loadout</button>
        ` : ""}
      </div>
    </div>
    <div class="rs-bottom-bar">${bottomBarContent}</div>
  `;
}

// Re-renders just the raid-select screen's own contents in place, rather
// than going through renderAll() (which rebuilds the whole #app, including
// the camp grid underneath). Updates innerHTML on the EXISTING element
// rather than swapping in a new one — replacing the element itself would
// re-trigger its CSS mount animation (a fade-in from opacity:0) on every
// click, which is what was letting the camp grid show through underneath
// for the duration of the fade. Used for interactions that happen while
// the screen is already open — picking a map, picking a scav — so only
// genuinely opening/closing the screen goes through the full renderAll().
function refreshRaidScreen() {
  const existing = document.querySelector(".raid-select-screen");
  if (!existing) return;
  // Replacing innerHTML below recreates the popup's scroll container from
  // scratch, which resets its scroll position to 0 — capture it first so
  // picking a scav or checking the loot table doesn't snap the popup back
  // to the top every time.
  const scrollBefore = existing.querySelector(".rs-popup-scroll");
  const scrollTop = scrollBefore ? scrollBefore.scrollTop : 0;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderRaidSelectScreen();
  existing.innerHTML = wrapper.firstElementChild.innerHTML;
  refreshWarehouseTooltip();
  wireRaidScreenInteractions();

  const scrollAfter = existing.querySelector(".rs-popup-scroll");
  if (scrollAfter) scrollAfter.scrollTop = scrollTop;
}

// Wires just the controls that live inside the raid-select screen. Split
// out from wireEvents() so refreshRaidScreen() can re-attach listeners
// after an in-place re-render without re-wiring the entire app.
function wireRaidScreenInteractions() {
  const closeRaidBtn = document.getElementById("closeRaidScreenBtn");
  if (closeRaidBtn) {
    closeRaidBtn.addEventListener("click", () => {
      raidScreenOpen = false;
      renderAll();
    });
  }

  document.querySelectorAll(".rs-tab").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const tab = tabBtn.getAttribute("data-raid-tab");
      if (tab === raidScreenTab) return;
      raidScreenTab = tab;
      refreshRaidScreen();
    });
  });

  if (raidScreenTab === "region") {
    document.querySelectorAll(".rs-map-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        if (dot.classList.contains("locked")) {
          pushToast("Your scavs aren't ready for this yet. Level up first.");
          return;
        }
        selectedMapId = dot.getAttribute("data-map-id");
        refreshRaidScreen();
      });
    });

    const closePopupBtn = document.getElementById("closeMapPopupBtn");
    if (closePopupBtn) {
      closePopupBtn.addEventListener("click", () => {
        selectedMapId = null;
        selectedScavId = null;
        refreshRaidScreen();
      });
    }

    // Scoped to [data-scav-id] specifically (not the more general
    // .rs-scav-pick class) since the Dungeons tab's group-pick cards
    // share that same visual class but carry data-dungeon-scav-id
    // instead — without this scoping, this handler would also match
    // dungeon cards and silently no-op on them (data-scav-id would read
    // as null there).
    document.querySelectorAll(".raid-select-screen [data-scav-id]").forEach((card) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("unavailable")) return;
        selectedScavId = card.getAttribute("data-scav-id");
        refreshRaidScreen();
      });
    });

    document.querySelectorAll(".raid-select-screen [data-loadout-scav-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openLoadoutModal(btn.getAttribute("data-loadout-scav-id"));
      });
    });

    const launchBtn = document.getElementById("launchBtn");
    if (launchBtn) {
      launchBtn.addEventListener("click", () => {
        const scav = STATE.scavs.find((s) => s.id === selectedScavId);
        if (!scav) return;
        const ok = launchRaid([selectedScavId], selectedMapId);
        if (ok) {
          pushToast(`${scav.name} heads out to ${MAPS.find(m => m.id === selectedMapId).name}.`);
          // Stay on the map screen rather than dropping back to camp — clear
          // the scav pick (they're away now and can't be re-selected anyway)
          // and refresh in place so the next raid can be queued up right away.
          selectedScavId = null;
          refreshRaidScreen();
        }
      });
    }
  } else if (raidScreenTab === "dungeons") {
    wireDungeonsTabInteractions();
  } else {
    wireArenaTabInteractions();
  }
}

// Dungeons-tab-specific wiring, split out from the region tab's block
// above for the same reason renderDungeonsTab is split from
// renderRegionTab — distinct selection model (exactly-3 group instead of
// a single scav), distinct lock condition (key, not just level).
function wireDungeonsTabInteractions() {
  document.querySelectorAll("[data-dungeon-id]").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("locked")) {
        const dungeon = DUNGEONS.find((d) => d.id === card.getAttribute("data-dungeon-id"));
        const groupScavs = dungeonGroup.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
        if (dungeon && mapLockedForGroup(dungeon, groupScavs)) {
          pushToast("Your scavs aren't ready for this yet. Level up first.");
        } else if (dungeon) {
          pushToast(`You need a ${getDungeonKeyDef(dungeon.requiresKey).name} to get in here.`);
        }
        return;
      }
      selectedDungeonId = card.getAttribute("data-dungeon-id");
      refreshRaidScreen();
    });
  });

  document.querySelectorAll("[data-dungeon-scav-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-dungeon-scav-id");
      const scav = STATE.scavs.find((s) => s.id === id);
      if (!scav) return;
      const idx = dungeonGroup.indexOf(id);
      if (idx !== -1) {
        dungeonGroup.splice(idx, 1);
      } else {
        if (scav.status !== "ready") return; // not eligible to join
        if (dungeonGroup.length >= MAX_GROUP_SIZE) return; // group full
        dungeonGroup.push(id);
      }
      refreshRaidScreen();
    });
  });

  document.querySelectorAll("[data-remove-dungeon-group-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-remove-dungeon-group-id");
      dungeonGroup = dungeonGroup.filter((gid) => gid !== id);
      refreshRaidScreen();
    });
  });

  const launchDungeonBtn = document.getElementById("launchDungeonBtn");
  if (launchDungeonBtn) {
    launchDungeonBtn.addEventListener("click", () => {
      const dungeon = DUNGEONS.find((d) => d.id === selectedDungeonId);
      if (!dungeon) return;
      const names = dungeonGroup.map((id) => STATE.scavs.find((s) => s.id === id)?.name).filter(Boolean);
      const ok = launchRaid([...dungeonGroup], dungeon.id);
      if (ok) {
        pushToast(`${names.join(", ")} head into ${dungeon.name}.`);
        // Same "stay on the screen, clear the picks" pattern as the
        // region tab and the Barracks group screen — everyone in the
        // group is away now, and the key is already spent, so there's
        // nothing left to leave selected.
        dungeonGroup = [];
        refreshRaidScreen();
      } else {
        // launchRaid can still fail here in a narrow race (e.g. the key
        // count check passed when the card rendered but something else
        // spent the last one a moment later) — surface that rather than
        // silently doing nothing.
        pushToast("Couldn't launch — check your group and key count.");
      }
    });
  }
}

// Arena-tab-specific wiring — single-scav pick, same shape as the Region
// tab's [data-scav-id] handler but scoped to [data-arena-scav-id] so the
// two never collide (same reasoning as the dungeon scoping note above).
function wireArenaTabInteractions() {
  document.querySelectorAll("[data-arena-scav-id]").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("unavailable")) return;
      arenaScavId = card.getAttribute("data-arena-scav-id");
      refreshRaidScreen();
    });
  });

  const launchArenaBtn = document.getElementById("launchArenaBtn");
  if (launchArenaBtn) {
    launchArenaBtn.addEventListener("click", () => {
      const scav = STATE.scavs.find((s) => s.id === arenaScavId);
      if (!scav) return;
      const ok = launchRaid([arenaScavId], ARENAS[0].id);
      if (ok) {
        pushToast(`${scav.name} steps into the ring at ${ARENAS[0].name}.`);
        // Same pattern as the other two tabs — clear the pick and refresh
        // in place so another fighter can be queued up right away.
        arenaScavId = null;
        refreshRaidScreen();
      }
    });
  }
}

// ===== RENDER: BASE PANEL =====

function renderStashPanel() {
  const slots = ["weapon", "armor", "pack"];
  const slotLabels = { weapon: "Weapons", armor: "Armor", pack: "Packs" };
  let anyItems = false;

  // Dungeon keys get their own section, above even the unique gear — a
  // key isn't gear at all (nothing to equip, no slot, no stat line), so
  // grouping it with the tiered weapon/armor/pack lists below would be
  // actively misleading about what it does.
  const keyRows = Object.values(DUNGEON_KEYS).map((key) => {
    const count = dungeonKeyCount(key.id);
    if (count <= 0) return "";
    anyItems = true;
    return `
      <div class="stash-item-row">
        <div class="stash-item-name unique">${escapeHtml(key.name)}<span class="stash-item-stat">${escapeHtml(MAPS.find((m) => m.requiresKey === key.id)?.name || "")}</span></div>
        <div class="stash-item-count">×${count}</div>
      </div>
    `;
  }).join("");
  const keySection = keyRows ? `<div class="section-divider" style="margin-top:0;">Dungeon Keys</div>${keyRows}` : "";

  // Unique boss drops get their own section up top, regardless of slot —
  // they're rare enough, and different enough in kind from regular tiered
  // gear, that burying one in the middle of the Armor list would undersell
  // it. Everything else still groups by slot below, same as always.
  const uniqueRows = slots.flatMap((slot) =>
    GEAR_CATALOG[slot].filter((g) => g.unique).map((item) => {
      const count = stashCount(slot, item.id);
      if (count <= 0) return "";
      anyItems = true;
      const statLabel = slot === "weapon" ? `+${item.combat} combat` : slot === "armor" ? `+${item.defense} defense` : `+${Math.round(item.lootBonus * 100)}% loot`;
      return `
        <div class="stash-item-row">
          <div class="stash-item-name unique">${escapeHtml(item.name)}<span class="stash-item-stat">${statLabel}</span></div>
          <div class="stash-item-count">×${count}</div>
        </div>
      `;
    })
  ).join("");
  const uniqueSection = uniqueRows ? `<div class="section-divider" style="margin-top:${keySection ? "14px" : "0"};">Unique Gear</div>${uniqueRows}` : "";

  const sections = slots.map((slot) => {
    const items = GEAR_CATALOG[slot].filter((g) => g.tier > 0 && !g.unique);
    const rows = items.map((item) => {
      const count = stashCount(slot, item.id);
      if (count <= 0) return "";
      anyItems = true;
      const statLabel = slot === "weapon" ? `+${item.combat} combat` : slot === "armor" ? `+${item.defense} defense` : `+${Math.round(item.lootBonus * 100)}% loot`;
      return `
        <div class="stash-item-row">
          <div class="stash-item-name">${escapeHtml(item.name)}<span class="stash-item-stat">${statLabel}</span></div>
          <div class="stash-item-count">×${count}</div>
        </div>
      `;
    }).join("");
    if (!rows) return "";
    return `<div class="section-divider" style="margin-top:14px;">${slotLabels[slot]}</div>${rows}`;
  }).join("");

  if (!anyItems) {
    return `<div class="empty-note">Nothing in the stash yet. Gear turns up as a rare find on successful raids — better odds on riskier maps.</div>`;
  }
  return keySection + uniqueSection + sections;
}

function renderRaidLogPanel() {
  const recent = STATE.log.slice(0, 5);
  if (recent.length === 0) {
    return `<div class="empty-note">No raids yet. Send a scav out to start building a history.</div>`;
  }

  const rows = recent.map((entry) => {
    const { outcome, ts } = entry;
    const timeAgo = formatTimeAgo(ts);

    // Saves from before group raids only ever stored a single scav's
    // result directly on the outcome (scavName/died/injured/hpLost) with
    // no perScav/scavNames arrays at all. Reconstruct that shape here so
    // an old save's history still renders instead of throwing.
    const perScav = outcome.perScav || [{
      name: outcome.scavName || "Unknown",
      survived: outcome.survived,
      died: !!outcome.died,
      injured: !!outcome.injured,
      hpLost: outcome.hpLost,
      leveledUp: !!outcome.leveledUp,
    }];
    const scavNames = outcome.scavNames || [outcome.scavName || "Unknown"];

    const isGroup = perScav.length > 1;
    const deaths = perScav.filter((d) => d.died).length;
    const anyInjured = perScav.some((d) => d.injured);

    let statusClass, statusLabel;
    if (outcome.arena) {
      // Neither the death/injury logic below applies — see resolveArenaRaid,
      // there's no risk either way — so this needs its own branch, or a
      // tournament loss would otherwise fall through to "Clean" exactly
      // like a win, which is the one thing this log entry most needs to
      // distinguish.
      statusClass = outcome.won ? "success" : "hurt";
      statusLabel = outcome.won ? "Won" : "Lost";
    } else if (deaths === perScav.length) {
      statusClass = "death";
      statusLabel = isGroup ? "Group lost" : "KIA";
    } else if (deaths > 0) {
      statusClass = "hurt";
      statusLabel = `${deaths} lost`;
    } else if (anyInjured) {
      statusClass = "hurt";
      statusLabel = "Wounded";
    } else {
      statusClass = "success";
      statusLabel = "Clean";
    }

    const scavLabel = isGroup ? scavNames.join(", ") : scavNames[0];

    const details = [];
    if (outcome.bossLog) {
      details.push(`faced ${outcome.bossLog.bossName}`);
    }
    if (outcome.loot && Object.keys(outcome.loot).length) {
      details.push(Object.entries(outcome.loot).map(([res, amt]) => `+${amt} ${res}`).join(", "));
    }
    if (outcome.gearFind) {
      details.push(`found ${outcome.gearFind.item.name}`);
    }
    if (outcome.leveledUp) {
      details.push("leveled up");
    }
    if (!isGroup) {
      if (outcome.died) {
        details.push("lost on the raid");
      } else if (outcome.injured) {
        details.push(`-${outcome.hpLost} HP`);
      }
    }

    return `
      <div class="raidlog-row">
        <div class="raidlog-top">
          <span class="raidlog-scav">${escapeHtml(scavLabel)}</span>
          <span class="raidlog-status ${statusClass}">${statusLabel}</span>
        </div>
        <div class="raidlog-meta">
          <span class="raidlog-map">${outcome.nightRaid ? "☾ " : ""}${escapeHtml(outcome.map.name)}</span>
          <span class="raidlog-time">${timeAgo}</span>
        </div>
        ${details.length ? `<div class="raidlog-details">${escapeHtml(details.join(" · "))}</div>` : ""}
      </div>
    `;
  }).join("");

  return `<div class="raidlog-list">${rows}</div>`;
}

// ===== MAIN RENDER =====

function renderAll() {
  const app = document.getElementById("app");
  // The campfire scene runs continuous CSS animations per survivor sprite.
  // renderAll() fires very often (every raid tick, every purchase, every
  // recruit), and innerHTML-replacing #app would normally destroy and
  // recreate that whole subtree each time, snapping every animation back
  // to frame zero. Detach the live node first so it survives the rebuild
  // intact, then drop it back into its slot afterward.
  const existingScene = document.getElementById("campfireScene");
  if (existingScene) existingScene.remove();

  app.innerHTML = `
    ${renderHeader()}
    ${renderRadioLog()}
    <div class="main-grid">
      <div class="left-stack">
        <div class="panel">
          <div class="panel-header">
            <span>Roster</span>
            <span class="roster-count">${STATE.scavs.filter((s) => s.status !== "dead").length}/${STATE.rosterCap}</span>
          </div>
          <div class="panel-body">${renderRosterSummaryCard()}</div>
        </div>
        <div class="panel">
          <div class="panel-header">Send a Raid</div>
          <div class="panel-body">${renderRaidLauncherCard()}</div>
        </div>
      </div>
      <div id="campfireSceneSlot"></div>
    </div>
    ${raidScreenOpen ? renderRaidSelectScreen() : ""}
  `;

  const sceneSlot = document.getElementById("campfireSceneSlot");
  if (sceneSlot) {
    if (existingScene) {
      sceneSlot.replaceWith(existingScene);
    } else {
      sceneSlot.outerHTML = renderCampfireSceneShell();
      applyDayNightLighting(); // first paint — gameTick keeps it current after this
    }
  }
  syncCampfireScene();

  wireEvents();
  // These overlays live outside #app (appended directly to document.body),
  // so rebuilding #app above doesn't touch them at all. If one happens to
  // be open — most commonly because something was opened on top of it and
  // just closed, like the Character Screen over the Roster screen — bring
  // it up to date rather than leaving it showing whatever was true before.
  if (typeof refreshInfirmaryScreen === "function") refreshInfirmaryScreen();
  if (typeof refreshRosterScreen === "function") refreshRosterScreen();
  if (typeof refreshBuildingPopup === "function") refreshBuildingPopup();
  if (typeof refreshFleaMarketScreen === "function") refreshFleaMarketScreen();
  if (typeof refreshCharScreen === "function") refreshCharScreen();
}

// ===== EVENT WIRING =====

function wireEvents() {
  const settingsBtn = document.getElementById("settingsBtn");
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => openSettingsPanel());
  }

  const openStashBtnMobile = document.getElementById("openStashBtnMobile");
  if (openStashBtnMobile) {
    openStashBtnMobile.addEventListener("click", () => openStashScreen());
  }

  const openRaidLogBtn = document.getElementById("openRaidLogBtn");
  if (openRaidLogBtn) {
    openRaidLogBtn.addEventListener("click", () => openRaidLogScreen());
  }

  const openCodexBtn = document.getElementById("openCodexBtn");
  if (openCodexBtn) {
    openCodexBtn.addEventListener("click", () => openCodexScreen());
  }

  document.querySelectorAll("[data-pending-raid-id]").forEach((entry) => {
    entry.addEventListener("click", () => {
      if (!document.querySelector(".modal-overlay")) {
        showRaidEventModal(entry.getAttribute("data-pending-raid-id"));
      }
    });
  });

  const openRaidBtn = document.getElementById("openRaidScreenBtn");
  if (openRaidBtn) {
    openRaidBtn.addEventListener("click", () => {
      raidScreenOpen = true;
      renderAll();
    });
  }

  const openRosterScreenBtn = document.getElementById("openRosterScreenBtn");
  if (openRosterScreenBtn) {
    openRosterScreenBtn.addEventListener("click", () => openRosterScreen());
  }

  const reopenEventBtn = document.getElementById("reopenCampEventBtn");
  if (reopenEventBtn) {
    reopenEventBtn.addEventListener("click", () => {
      if (!document.querySelector(".modal-overlay")) {
        showCampEventModal();
      }
    });
  }

  // Map picks, scav picks, and the launch button all live inside the raid
  // screen and re-render just that screen in place (see refreshRaidScreen)
  // rather than going through renderAll() — otherwise every click while
  // the screen is open would flash the camp grid underneath for a frame.
  if (document.querySelector(".raid-select-screen")) {
    wireRaidScreenInteractions();
  }

  // Every "Loadout" button except the raid screen's own "Manage Loadout"
  // button, which wireRaidScreenInteractions() already handles — excluding
  // by scope here instead of including by a specific container, since
  // Roster now renders inside its own full-screen overlay rather than a
  // fixed #rosterBody container.
  document.querySelectorAll("[data-loadout-scav-id]").forEach((btn) => {
    if (btn.closest(".raid-select-screen")) return;
    btn.addEventListener("click", () => {
      openLoadoutModal(btn.getAttribute("data-loadout-scav-id"));
    });
  });
}

// ===== GAME LOOP =====

function gameTick() {
  // Keeps the virtual clock's bookkeeping current while the game is
  // actually ticking — see gameNow()/syncGameClockOnLoad. If the tab gets
  // backgrounded or throttled by the browser for a long stretch without
  // a tick firing, that stretch counts as "closed" too once a tick (or a
  // fresh load) finally runs again — the game genuinely wasn't
  // progressing during it either, so that's the correct call, not just
  // a side effect of how this is implemented.
  STATE.gameClockOffset = (STATE.gameClockOffset || 0) + Math.max(0, Date.now() - STATE.lastSeenAt - 1000);
  STATE.lastSeenAt = Date.now();
  // Saved every tick (not just when a completion or event triggers a
  // save elsewhere below) specifically so lastSeenAt stays fresh on disk.
  // Without this, an idle session with nothing in-flight would update
  // lastSeenAt only in memory — fine if the tab closes cleanly, but a
  // crash or an OS killing the tab would leave a stale on-disk value,
  // and the next load would wrongly count that idle-but-open stretch as
  // closed time. The write itself is cheap at this save size, so doing
  // it unconditionally here is simpler and safer than only saving when
  // something else already needed to.
  saveState();
  // Unconditional and first — every other branch below has an early
  // return once it finds something to handle, but the sky shouldn't
  // freeze just because a raid completed or an event fired this same tick.
  applyDayNightLighting();
  const upkeepResult = checkDailyUpkeep();
  if (upkeepResult) {
    const dayLabel = upkeepResult.daysCharged > 1 ? `${upkeepResult.daysCharged} days'` : "Today's";
    if (upkeepResult.starvedDays > 0) {
      pushToast(`${dayLabel} upkeep came up short — the camp went hungry. Roster lost HP and morale.`, true);
    } else {
      pushToast(`${dayLabel} camp upkeep paid (3 food + 3 gold/day).`);
    }
    renderAll();
  }
  const hadRaidCompletion = checkRaidCompletions();
  const hadHealCompletion = checkInfirmaryCompletions();
  const hadRestCompletion = checkRestCompletions();
  const hadBossEncounter = checkBossEncounters();
  const hadRaidEvent = checkRaidEvents();
  if (hadRaidCompletion) {
    renderAll();
    if (activeModalRaid && !document.querySelector(".modal-overlay")) {
      showFieldReport(activeModalRaid);
    } else if (STATE.campEvent && !document.querySelector(".modal-overlay")) {
      showCampEventModal();
    }
    return;
  }
  if (hadHealCompletion) {
    renderAll();
    return;
  }
  if (hadRestCompletion) {
    renderAll();
    return;
  }
  if (hadBossEncounter) {
    renderAll();
    if (!document.querySelector(".modal-overlay")) {
      const pendingRaid = STATE.activeRaids.find((r) => r.pendingBoss);
      if (pendingRaid) showBossEncounterModal(pendingRaid.id);
    }
    return;
  }
  if (hadRaidEvent) {
    renderAll();
    if (!document.querySelector(".modal-overlay")) {
      const pendingRaid = STATE.activeRaids.find((r) => r.pendingEvent);
      if (pendingRaid) showRaidEventModal(pendingRaid.id);
    }
    return;
  }
  // re-render radio log progress bars even without completions
  const radioContainer = document.querySelector(".radio-log");
  if (STATE.activeRaids.length > 0 || (radioContainer && !radioContainer.classList.contains("empty"))) {
    const existing = document.querySelector(".radio-log");
    if (existing) {
      existing.outerHTML = renderRadioLog();
      document.querySelectorAll("[data-pending-raid-id]").forEach((entry) => {
        entry.addEventListener("click", () => {
          if (document.querySelector(".modal-overlay")) return;
          const raidId = entry.getAttribute("data-pending-raid-id");
          const raid = STATE.activeRaids.find((r) => r.id === raidId);
          if (raid && raid.pendingBoss) {
            showBossEncounterModal(raidId);
          } else {
            showRaidEventModal(raidId);
          }
        });
      });
    }
  }
  // refresh infirmary screen progress bars live, if it's open
  const infirmaryScreen = document.querySelector(".infirmary-screen");
  if (infirmaryScreen && typeof refreshInfirmaryScreen === "function") {
    refreshInfirmaryScreen();
  }
  // same for the Barracks screen's resting-queue progress bars
  const barracksScreen = document.querySelector(".barracks-screen");
  if (barracksScreen && typeof refreshBarracksScreen === "function") {
    refreshBarracksScreen();
  }
}

// ===== INIT =====

async function init() {
  await loadState();
  // Re-derives every map's riskMult/lootTable and the arena's win
  // chance/reward from STATE.ngPlusLevel — needed on every load, not
  // just right after a fresh prestige, since the scaled values
  // themselves are never what's actually saved (MAPS is rebuilt fresh
  // from its source each page load; only ngPlusLevel persists).
  applyNgPlusScaling();
  // Must run before any of the completion checks below — they all read
  // elapsed time through gameNow(), which depends on gameClockOffset
  // already reflecting however long the game was just closed. Folding
  // that gap in here, before anything else touches the clock, is what
  // makes time "stop" while closed instead of catching up on reopen.
  syncGameClockOnLoad();
  // safety: if any raid, heal, or rest was active when page closed, let it resolve immediately on load if overdue
  checkRaidCompletions();
  checkInfirmaryCompletions();
  checkRestCompletions();
  renderAll();
  if (activeModalRaid) {
    showFieldReport(activeModalRaid);
  } else if (STATE.campEvent) {
    showCampEventModal();
  } else {
    const pendingBossRaid = STATE.activeRaids.find((r) => r.pendingBoss);
    const pendingRaid = STATE.activeRaids.find((r) => r.pendingEvent);
    if (pendingBossRaid) showBossEncounterModal(pendingBossRaid.id);
    else if (pendingRaid) showRaidEventModal(pendingRaid.id);
  }
  tickInterval = setInterval(gameTick, 1000);
}

init();
