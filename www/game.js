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
    { id: "fire_axe", name: "Fire Axe", tier: 2, combat: 14, cost: { scrap: 42, gold: 5 },
      desc: "Pulled off a wall behind broken glass, still red. Built to go through doors. Goes through plenty else too." },
    { id: "nail_bat", name: "Nail-Studded Bat", tier: 2, combat: 13, cost: { scrap: 36, gold: 7 },
      desc: "Crude, loud, unmistakable. The kind of weapon that announces exactly what's about to happen." },
    { id: "shop_blade", name: "Workshop Cleaver", tier: 2, combat: 16, improvised: true, craftCost: { scrap: 55, gold: 6 }, minWorkshopLevel: 4,
      desc: "Forged and balanced properly at the Workshop, not just sharpened and hoped for. The first weapon the camp actually builds rather than scavenges." },
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
    // NG+-exclusive — never drops, never craftable, never purchasable
    // below ngPlusLevel 2. See resolveNgPlusUniqueDrop for the actual
    // gated drop logic; this entry exists purely so the item has a
    // real definition to reference once it does drop.
    { id: "ashbringer", name: "The Ashbringer", tier: 7, unique: true, combat: 58,
      desc: "Forged from whatever survived enough collapses to still hold an edge. Nobody who's carried this one came back from their first run unchanged — or came back at all, the runs before this one." },
    // Quartermaster's exclusive — earned through reputation, not found,
    // crafted, or NG+-gated. See traderExclusiveUnlocked("quartermaster")
    // and its consumption in the trader UI for the actual unlock check.
    { id: "voss_contract", name: "Voss' Contract", tier: 5, unique: true, combat: 33,
      desc: "Issued, not found — Voss doesn't hand these out to anyone who hasn't actually done business with him first. Stamped, numbered, accounted for. The kind of weapon that comes with paperwork." },
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
    { id: "moving_pads", name: "Quilted Moving Blanket Rig", tier: 2, defense: 12, cost: { scrap: 38, gold: 5 },
      desc: "Stitched together from furniture pads, layered thick across the chest and back. Ugly, surprisingly effective." },
    { id: "shin_guard_armor", name: "Sports Pad Harness", tier: 2, defense: 11, cost: { scrap: 33, gold: 7 },
      desc: "Hockey and football pads strapped together with whatever held. Looks ridiculous. Works." },
    { id: "shop_plate", name: "Workshop Trauma Plate", tier: 2, defense: 14, improvised: true, craftCost: { scrap: 58, gold: 6 }, minWorkshopLevel: 4,
      desc: "Cut and fitted properly at the Workshop, not just strapped on and prayed over. The camp's first real armor build." },
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
    // Earned, not found or bought — awarded directly by
    // checkArenaStreakReward when a scav holds rank 1 on the Arena
    // leaderboard for 7 consecutive days straight. cost: null like
    // every other unique in this file, but unlike the boss uniques this
    // one isn't folded in from BOSS_UNIQUE_CATALOG at all — there's no
    // boss or map tied to it, just the leaderboard itself, so it's
    // registered directly here instead.
    { id: "scrapyard_plate", name: "Scrapyard Plate Armor", tier: 5, unique: true, defense: 31,
      desc: "Welded together from whatever held up best in the pit, plate by plate, over however many fights it took to never lose the lead. Nobody questions it anymore — they just ask how long you can hold the spot wearing it." },
    // NG+-exclusive, same gating as The Ashbringer above
    { id: "last_resolve", name: "Last Resolve", tier: 7, unique: true, defense: 50,
      desc: "Plated by someone who'd already buried more than one camp and decided this would be the last time. Doesn't look like much. Hasn't failed yet, however many times it's been asked to." },
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
    { id: "cart_pack", name: "Wheeled Utility Cart", tier: 2, lootBonus: 0.38, cost: { scrap: 48, gold: 10 },
      desc: "A hand truck with a strapped-on crate, dragged more than carried. Slow, but it carries what a back never could." },
    { id: "hockey_bag", name: "Oversized Gear Bag", tier: 2, lootBonus: 0.32, cost: { scrap: 40, gold: 9 },
      desc: "Built for hauling equipment nobody plays with anymore. Zippers still work, which is more than most things." },
    { id: "shop_rig", name: "Workshop Frame Rig", tier: 2, lootBonus: 0.42, improvised: true, craftCost: { scrap: 60, gold: 8 }, minWorkshopLevel: 4,
      desc: "Welded and fitted at the Workshop to an actual frame, not just whatever bag happened to hold together. Carries more, sits better." },
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
    version: "3.00",
    date: "Latest",
    notes: [
      "Added a Legacy Patch Notes button to the patch notes screen. The ten most recent versions stay visible up top, and everything older (ninety entries, all the way back to v1.0) now tucks behind the button instead of making you scroll through the entire history every time. Click it to expand the full archive, click again to collapse it.",
    ],
  },
  {
    version: "2.99",
    date: "",
    notes: [
      "Found the actual reason building popups looked see-through: the ruined-skyline layer was painting on top of the buildings. The skyline had an explicit stacking order while the buildings layer didn't, so the skyline won and the popups rendered behind it — anywhere a popup overlapped the skyline, the buildings behind showed through. The buildings, fire, embers, and survivors now have a proper stacking order that keeps them in front of the distant skyline, so popups always render on top.",
    ],
  },
  {
    version: "2.98",
    date: "",
    notes: [
      "Made the building hover popups fully solid so they no longer look see-through. The body-wide film-grain filter multiplies over everything including the popups, which was darkening them enough to read as translucent — the popup backgrounds are now light enough to stay solid under that grain, with a thicker border and stronger shadow. Built popups are a solid green-bordered box; unbuilt are a solid gray box.",
      "Swapped the Workshop's sign from a gear (which read like a target/crosshair) to a hammer, with a second crossed hammer appearing at max level. Fits the fabrication-hut theme better and won't be mistaken for a targeting reticle.",
    ],
  },
  {
    version: "2.97",
    date: "",
    notes: [
      "Actually fixed the unbuilt building popups blending into the skyline. The real cause: unbuilt buildings dim their whole sprite to 55% opacity and half brightness for the ghost look, and because the hover popup was a child of that sprite, it got dimmed right along with it. The dimming now applies only to the building art, never the popup, so the label always shows at full strength.",
      "Built and unbuilt popups now look clearly different: built buildings get the solid box with a green border, and unbuilt buildings get a solid gray box — easy to tell at a glance which is which.",
    ],
  },
  {
    version: "2.96",
    date: "",
    notes: [
      "Fixed building hover popups blending into the ruined skyline behind them. The tooltip panel is now a distinctly lighter warm-dark surface (rather than the near-black that matched the silhouette) with a bright brass border and a strong halo shadow, so it always reads as a floating label no matter what's behind it.",
      "Fixed popup text size being inconsistent between buildings. Because each popup lives inside its building's sprite, it was inheriting that building's scale — so the small Radio Tower's label rendered tiny while the large Barracks' label rendered oversized. Every popup now counter-scales to a consistent, readable size regardless of how big or small its building is drawn.",
    ],
  },
  {
    version: "2.95",
    date: "",
    notes: [
      "Redrew the remaining six buildings to match the detailed art style, so the whole camp is now consistent. The Armory is a fortified blockhouse with a heavy reinforced door, munitions crates, and sandbag emplacements. The Scout Tower has a proper roofed lookout cabin with a lit window and blinking lamps. The Radio Tower gained an equipment shack at its base, a satellite dish, guy-wires, and a blinking beacon. The Farm has raised soil beds, a fence, a water barrel, and a scarecrow. The Decon Tent is a fuller tarp station with gradient basins and a glowing filtration drum. The Rec Yard has a gradient court surface, detailed backboards with nets, and a bench. All nine buildings now use gradient shading, warm-lit windows, and ground shadows.",
      "Reworked the building hover popups so they're readable instead of blending into the dark scene. Solid dark backing, a bright brass border, a drop shadow, and brighter text — the building name and level now lift cleanly off the camp scene.",
    ],
  },
  {
    version: "2.94",
    date: "",
    notes: [
      "Redrew the Barracks and Workshop to match the Infirmary's detailed art style. The Barracks is now a long timber bunkhouse with a gradient shingled roof, plank siding, a stone foundation, a brick chimney with animated smoke, and four windows that light up warm one by one as the building levels up — plus a roof vent at level 4 and a waving flag at max level. The Workshop is a fabrication shed with a slanted lean-to roof, a forge bay that glows orange when running, an anvil silhouette, a brass gear sign that lights up, a smoking chimney, and hanging tools and a second meshing gear at higher levels. Both use their own uniquely-named gradients so nothing collides in the shared scene.",
    ],
  },
  {
    version: "2.93",
    date: "",
    notes: [
      "When every scav is dead, the roster panel now offers a way forward instead of a dead end — a Recruit button (showing the current food/gold cost, disabled if you can't afford it, since warehouse income still trickles in) and a Reset Progress button (click-again-to-confirm, same as Settings). No more getting stranded with an empty camp.",
      "Redrew the Infirmary with real detail: a shingled gable roof with gradient shading, plank siding, a stone foundation, warm glowing windows, and a brick chimney that puffs smoke once it's built. The medic cross is now green instead of red — a red cross on a structure that isn't the actual Red Cross is a Geneva Conventions emblem violation, so green is the correct neutral medical marker. An IV drip banner and a flickering lantern appear at level 3, and a second window plus a roof vent at max level.",
    ],
  },
  {
    version: "2.92",
    date: "",
    notes: [
      "Fixed field report line repetition — a pickFrom helper now tracks the last pick from each pool and avoids consecutive repeats, and a structural bug where searchGood was being picked twice on clean low-risk raids is fixed. All six narrative pools expanded from 3-4 lines to 7-11 lines each (74 total, up from 26). Raid log entries are now clickable — click any row to open the full field report for that raid, showing the log lines all at once and the result summary.",
    ],
  },
  {
    version: "2.91",
    date: "",
    notes: [
      "Field report overhaul. Deaths now explain what killed the scav: boss encounters name the boss, hostile events name the encounter, attrition deaths acknowledge there was no clear cause. The narrative lines expand to four pools (boss kill, hostile event, rookie, veteran) rather than one flat bank. Unfinished personal objectives are mentioned at death if they'd already been revealed. Event narration in the scrolling log drops the mechanical 'camp calls it:' format in favor of direct prose. The result summary describes injury severity as light/noticeable/bad based on HP lost rather than just the number. Group result rows show cause of death inline per member.",
    ],
  },
  {
    version: "2.90",
    date: "",
    notes: [
      "Route planner: map blueprint added to raid select screen with 11 hand-authored room layouts. Pick which rooms to visit — more rooms means longer raid, more loot, more encounters. Room types (hostile/loot/supply) now bias which events fire during the raid. Expand button opens the blueprint in a full-size modal.",
      "Crossroads events: 8 narrative camp decisions that trigger based on actual conditions — low food, someone breaking down, a stranger at the gate, two scavs at odds. Each has 2-3 choices with real mechanical consequences. Fire at most once each.",
      "Hidden personal objectives: every scav gets a secret goal tied to their background. Reveals as a cryptic hint after day 1, full text at day 3. Completing it gives a permanent individual bonus — more HP, better combat, faster raids, reduced injuries. All 10 tracking stats wired to the correct game events. Bonuses fully connected to the math.",
      "Mid-raid interventions: at 40-85% progress, the radio log card shows three options — extract early (partial loot, guaranteed safe), push deeper (spend 2 meds for a loot boost and higher injury risk), or leave them to it. One choice per raid, timer keeps running.",
      "Resource crisis indicators: flashing warnings appear directly on the camp scene when food drops to 3 or below, or any scav's morale hits 25 or below. Visible at a glance.",
      "CRT/PSX visual overhaul: full phosphor-green palette, Press Start 2P pixel font, scanlines, vignette, chromatic aberration on headers, subtle screen flicker. Background changed to a clean dark radial gradient — the static grid and SVG noise filter are gone. Font sizes corrected throughout for the new pixel font. Header buttons (Codex, Raid Log, Settings) made properly visible.",
      "Camp scene: ruined city silhouette added at the horizon with randomly-timed explosion flashes (every 4-18 seconds, occasionally in bursts). Buildings repositioned across the ground plane at varied depths. Unbuilt buildings now show as a phosphor-green ghost outline instead of being invisible against the dark background.",
    ],
  },
  {
    version: "2.79",
    date: "",
    notes: [
      "Added a map blueprint and route planner to the raid select screen. When you pick a region map, a top-down blueprint appears showing that map's layout — rooms connected by paths, each room labelled by type (loot, hostile, supply, general). The entry room is always included. Click any reachable room to add it to your route; click it again to remove it. More rooms means more loot and more encounters, but also a longer raid — the timer shown in the odds bar updates live as you build the route. Minimum route (entry only) runs at 40% of the map's full time. All 11 region maps have distinct hand-authored layouts. Dungeons and the Arena are unchanged.",
    ],
  },
  {
    version: "2.78",
    date: "",
    notes: [
      "Added a first-time tutorial. Eight steps covering the core loop — your scavs, equipping them, sending a raid, watching the radio log, and building. Each step highlights the relevant part of the UI with a pulsing ring so you can see exactly what's being described. Skip button is always visible. The whole thing only shows once, remembered via localStorage, so returning players never see it again. Added a Replay Tutorial button to the Settings menu for when you want to run through it again.",
    ],
  },
  {
    version: "2.77",
    date: "",
    notes: [
      "Fixed sending scavs on raids breaking the camp screen. The sitting-by-the-fire system was repositioning sprites to specific seat coordinates around the fire using a fairly complex seat-claiming mechanism — something was going wrong in that path in a way that couldn't be caught through static analysis alone (no browser debug console available here). Replaced the whole approach with a simpler one: away scavs just freeze in place with the sitting pose applied directly, rather than being moved to new positions. Less visually polished but completely reliable — the seated geometry and animation still work exactly the same, the sprite just sits wherever it was standing rather than sliding toward the fire.",
    ],
  },
  {
    version: "2.76",
    date: "",
    notes: [
      "Fixed the skill tree losing pan/zoom after spending a point. The Learn button was triggering a full re-render of the skill tree body, which destroyed the canvas div the pan/zoom listeners were attached to — each refresh created a brand-new element that looked identical but had none of the event handlers. Now only the three things that actually change get patched in place (unspent points counter, the SVG node states, the detail panel), leaving the canvas element itself untouched so the listeners and the current pan/zoom position survive.",
      "Fixed the loadout gear list not showing items the player has actually found. Items above the current Armory tier were being filtered out of the equip list regardless of whether they were in the stash — so a pistol found on a raid simply wouldn't appear as an option if the Armory wasn't leveled high enough to normally unlock it. Items in the stash now always show regardless of tier; the tier gate only applies to items the player doesn't have yet.",
    ],
  },
  {
    version: "2.75",
    date: "",
    notes: [
      "Scavs at camp now occasionally say something out loud — a chat bubble appears above a random ready scav's sprite every several seconds, cycling through 36 lines of camp conversation: complaints about the weather, observations, dark humor, the kind of things people actually say around a fire. Seated scavs (on raids, healing, etc.) don't talk since they're not there. At most one bubble at a time, so it feels like someone piping up rather than everyone talking at once. Distinct from the self-talk bubbles in the raid log, which are interior monologue while a scav is on a mission.",
    ],
  },
  {
    version: "2.74",
    date: "",
    notes: [
      "The skill tree is now pannable with left-click drag and zoomable with the scroll wheel. Zoom aims at whatever the cursor is pointing at rather than the canvas center, so you can zoom into a specific branch without losing your place. Dragging more than a few pixels is treated as a pan and won't accidentally select a node you passed over. Scale clamps between 0.25× and 2.5×.",
    ],
  },
  {
    version: "2.73",
    date: "",
    notes: [
      "Reworked the sitting sprite legs again — replaced the flat rectangular lap blob with a wider seated mass that extends visibly past the torso width, with two knee bumps poking above the lap line and dark boots clearly visible at the outer sides. The wider-than-body shape is the actual visual cue that reads as sitting at this scale, since you can't convey a complex cross-legged silhouette in a handful of 4-pixel-wide blocks.",
      "Added weather effects to the camp scene. Rain draws animated diagonal streaks across the whole scene. Storm uses denser, faster streaks plus a blue-grey tint over everything. Fog sits as a low-lying haze across the bottom of the scene that drifts slightly. Overcast is a subtle grey veil. Clear leaves the scene untouched. All driven by the same data-weather update that already ran every second for the fire and glow elements, so weather changes are immediate and cost nothing extra.",
    ],
  },
  {
    version: "2.72",
    date: "",
    notes: [
      "Reworked the sitting-by-the-fire pose. Seats are now clustered much closer to the actual fire (the original positions were designed against a stale exclusion zone that didn't match where the fire element actually sits, so they ended up reading as too far away). Legs now rotate outward from the hip instead of just being vertically squashed — the old squash treatment made it look like the sprite was sinking into the ground rather than sitting; the rotated version actually reads as bent knees, which works even at the pixel-block scale these sprites use.",
    ],
  },
  {
    version: "2.71",
    date: "",
    notes: [
      "Fixed the \"sitting by the fire\" change from last patch — it wasn't actually working. The seated CSS class was landing on the wrong element (the sprite's outer wrapper instead of the inner part the actual sitting animation is defined on), so away scavs were correctly pulled out of the wander rotation and moved near the fire, but just stood there frozen instead of sitting. Also fixed a second gap: a scav who was already away the very first moment their sprite ever got created — loading a save mid-raid, for instance — was never being caught at all and would spawn wandering normally. Both fixed; verified this time against an actual DOM-accurate test, not just a syntax check.",
    ],
  },
  {
    version: "2.70",
    date: "",
    notes: [
      "Scavs who are away from camp — on a raid, healing, resting, defending, or assigned to the Outpost — now sit by the fire instead of wandering camp like nothing's different. They're pulled out of the usual wandering rotation, snapped to one of a tight ring of seats right around the fire, and settle into a still, seated pose instead of strolling the grounds. The moment their status flips back to ready, they get up and rejoin the wander like everyone else.",
    ],
  },
  {
    version: "2.69",
    date: "",
    notes: [
      "Cut raid durations on the early maps. Strip Mall, Riverside Marina, and Train Yard — the three lowest-risk sites, the ones almost everyone runs first — are down about 30%, with Greenfield Farmstead, Flooded Suburb, and St. Aldric's Hospital getting a smaller cut on top. Everything from 16th Precinct up, including every dungeon, is untouched. Early raids were taking too long relative to what a fresh camp actually gets back from them; this is aimed specifically at that, not at slowing down the late game's own pacing, which wasn't the complaint.",
    ],
  },
  {
    version: "2.68",
    date: "",
    notes: [
      "Added a second site — the Outpost, unlocked the moment a camp reaches its first New Game+. A genuinely separate place with its own 3-building track (Lookout Post for scrap/gold, Forward Cache for intel, Outpost Bunkhouse for how many scavs it can usefully support), but sharing the main camp's resource pool directly rather than keeping a second stash. Assigning a scav there is a free toggle, not a commitment — no cooldown, no cost, recall them back to camp any time. Generation scales with assigned scavs and ticks once a day alongside the Farm, with a soft cap rather than a hard wall: go over what the Bunkhouse currently supports and it still helps, just at a reduced rate instead of doing nothing. Outpost buildings survive a prestige reset the same way research does; who's actually assigned there doesn't, since the roster a fresh run starts with isn't the one that was stationed out there before. New header button, only ever shown once it's actually unlocked.",
    ],
  },
  {
    version: "2.67",
    date: "",
    notes: [
      "Added 3 new questlines, joining The Long Way Back. Deep Country tracks clearing all three dungeons in their actual difficulty order, finishing with holding a key for all three at once. Good Standing tracks reputation breadth across all three traders rather than depth in just one. Who's Left follows choosing a camp Leader and watching what happens — deliberately built so losing a Leader doesn't block it from finishing, only changes how the final entry reads; the camp remembers either outcome rather than treating one as the real ending.",
      "Filled a real gap in general (non-enemy) raid hazards — the pool stopped scaling at risk 2.0, meaning Blackpine Refinery and The Drowned Quarter (risk 4.0+) had nothing but combat encounters once a raid rolled past that point. Added 6 new hazards spanning 2.5 through 5.0: unstable floors, sealed rooms, collapsed stairwells, live wiring, and a buried cache among them. Every region map now has real non-combat variety at every risk tier, not just the calm ones.",
      "Expanded what scavs actually say to themselves mid-raid. The two newest skill branches (Fieldcraft, Command) never got their own self-talk lines when they were added — fixed. All 7 scav backgrounds get their own bank too, for the first time ever, mixed in unconditionally since every scav has a background from the moment they're recruited (unlike branch flavor, which still only kicks in once a scav's actually specialized into one). Generic pool grew by 6 more lines on top of all that.",
    ],
  },
  {
    version: "2.66",
    date: "",
    notes: [
      "Ran a full verification pass across everything — every function cross-checked against its actual call sites, the prestige boundary re-tested with all 5 surviving fields (NG+ level/perks, quest progress, research, trader reputation) together in one run, and every cross-system interaction built across separate sessions this year (Leader bonuses stacking with research, the new trader-exclusive weapon correctly counting toward Arena's unique bonus and salvage protection and death's no-exceptions gear loss) checked directly rather than assumed. No correctness bugs turned up. Found and removed 2 dead functions that were never actually called by anything — harmless, but stale and worth clearing out rather than leaving misleading code behind.",
    ],
  },
  {
    version: "2.65",
    date: "",
    notes: [
      "Added 3 persistent named traders — Quartermaster Voss, Doc Reyes, and The Broker — distinct from the Flea Market's anonymous randomized sellers. Each one remembers you: reputation builds through repeated trading, unlocking better stock and better prices at 30 and 80 reputation, and a genuinely exclusive offer at 150 that isn't available anywhere else in the game. Voss sells a unique weapon (Voss' Contract), repeatable like any other unique. Doc offers instant treatment — no Infirmary queue, resolves the moment it's paid for, the only way to heal a scav without spending any time at all. The Broker sells guaranteed Intel for scrap and gold, the only way to get it without going on a raid. Unlocked progressively by Radio Tower level (2, 3, and 4) rather than all at once, giving the building's max level a real reason to be pushed all the way. New Traders screen, reachable from the Radio Tower's building popup alongside the Flea Market. Reputation survives a prestige reset — a relationship built with someone isn't something a fresh camp starts over on.",
    ],
  },
  {
    version: "2.64",
    date: "",
    notes: [
      "Added a research tree — 4 branches, 16 nodes total, spent with a brand new resource: Intel. Earned only from raids (small chance, scales with how dangerous the site is — dungeons are the best source by a wide margin) and spent only on research, nothing else. Dungeon Intel makes dungeons specifically faster, safer on the boss fight, better loot, and more likely to drop a bonus key. Arena Tactics adds flat win chance, bigger payouts, a shorter path to Scrapyard Plate Armor, and a hard floor so the odds can never bottom out no matter how deep into NG+ a camp goes. Weather Reading blunts both the good and bad swings a weather day causes — nothing in the game touched weather at all before this — and extends the forecast panel one more day out. Field Medicine cuts injury severity, radiation exposure, every death-consequence morale hit, and Infirmary time/cost, camp-wide, stacking with whatever a scav's own skills already do. New Codex tab — Research — shows the full tree, what's unlocked, what's next, and what's still locked behind a prerequisite. Like quest progress, research survives a prestige reset; the Intel resource itself doesn't.",
    ],
  },
  {
    version: "2.63",
    date: "",
    notes: [
      "Added a questline system — \"The Long Way Back,\" a 5-step chain tracking the camp's own first real milestones in order: survive 10 raids camp-wide, beat any boss, hit the top of the Arena leaderboard, max out any one building, then start a New Game+ run. Each step pays out on completion (scrap, gold, meds, eventually Scrapyard Plate Armor for finishing the whole thing) and unlocks the next. New Codex tab — Quests — shows the full chain at a glance: what's done, what's next, and what's still ahead. Progress survives a prestige reset, same as NG+ level and perks do, since the chain is framed as the camp's own ongoing story rather than something a fresh run starts over on.",
    ],
  },
  {
    version: "2.62",
    date: "",
    notes: [
      "Added a Camp Leader system. On Day 6, if at least 2 scavs are still standing, the camp picks one to lead — a one-time choice, not something offered again later. The Leader gives +5% survival on every group raid and cuts camp-wide morale loss by 10%, for as long as they're around. If they don't make it back from a raid, the loss hits harder than any other death — an extra morale hit on top of the usual one, scaled by how high a level they'd reached — and the role goes vacant for good. No automatic replacement; the camp just runs without a leader again, the same as it did before day 6. Shown on every scav picker, the character sheet, and (for a fallen one) the memorial tab.",
    ],
  },
  {
    version: "2.61",
    date: "",
    notes: [
      "New Game+ got real depth. Every prestige now includes a permanent perk pick — 6 to choose from (Veteran's Resolve, Scrounger's Network, Battle-Hardened, Iron Supply Lines, Quick Start, Lucky Break), each a genuine camp-wide passive that stacks across every future run rather than resetting with the rest of the camp. Once all 6 are earned, prestige stops asking — there's nothing left to pick.",
      "Reaching NG+2, NG+3, and NG+5 specifically now means something concrete, not just bigger numbers. NG+2 opens a small chance at two brand new tier-7 uniques (The Ashbringer, Last Resolve) on any boss kill — stats clearly above anything obtainable before that point. NG+3 introduces The Returned, a new enemy that can now show up almost anywhere, gated entirely behind prestige depth rather than map risk. NG+5 permanently raises how many items can carry forward through every future prestige, from 2 to 3.",
      "All of it stacks — perks, exclusive drops, and the carry-over bump all build on each other the deeper a camp goes, rather than prestige being the same harder-numbers reset every single time.",
    ],
  },
  {
    version: "2.60",
    date: "",
    notes: [
      "Fixed a real bug in the skill web — the two newest branches (Fieldcraft, Command) had never been given a position in the layout at all, so every single node and connector line in both was collapsing onto one broken point. That's what was reading as lines drawn through everything. Separately and independently, any branch that had grown to 7 nodes was hitting the same problem for its 6th and 7th node specifically, since the layout only had room for 5. Both fixed — every node in all 7 branches now has a real position, and the canvas grew to fit rather than cramming the original layout tighter.",
      "Lead From Front moved out of Command entirely and is now a true cross-branch capstone, requiring full investment in both Combat (Executioner) and Fortitude (Iron-Willed) to unlock — not a specialist's payoff, but the convergence of being genuinely dangerous AND someone whose presence steadies everyone else. War Bond is Command's new natural capstone in its place.",
      "Filled in the gear economy's thinnest spot — tier 2 only had 3 items per slot, noticeably less variety than tier 1's 5, right where players are making their first real upgrade decisions. Added 2 new tier-2 items per slot plus a 3rd that's craftable at the Workshop specifically (Workshop Cleaver, Workshop Trauma Plate, Workshop Frame Rig), gated at Workshop level 4 — the first time crafting has ever gone past tier 1, and a real reason to push the Workshop past its midpoint beyond just raid speed.",
      "Added salvaging — break down any non-unique, non-basic item sitting in the stash for scrap, roughly 40% of what it cost to get in the first place. Duplicate finds were previously dead weight with no use at all once a scav had what they needed; now they're worth something. Available right on the loadout screen's stash tiles.",
    ],
  },
  {
    version: "2.59",
    date: "",
    notes: [
      "Every recruit now has a background — who they were before the camp found them. 7 backgrounds total (Soldier, Medic, Scavenger, Stalker, Tough, Composed, Scrapper), each with a real passive effect that shapes how that scav operates. Shown on picker cards, the character sheet, and the Fallen memorial. Stalkers move slower but are less likely to stumble into ambushes; Medics cost less to heal; Soldiers hit harder but wear down faster; and so on. Existing scavs in saves get a stable background assigned from their ID rather than a random re-roll.",
      "The skill tree grew from 5 branches and 25 nodes to 7 branches and 45 nodes. Two new branches: Fieldcraft (raid speed, event-time reduction, familiar-map bonuses, and a capstone that stops raids from triggering camp defense events on return) and Command (group survival bonuses, reduced death morale hits, a war bond system for pairs who've run together 10+ times, and a capstone that gives +5% flat survival to everyone in any raid this scav is part of). Each of the original 5 branches also got 2 new nodes — one incremental and one major milestone. Highlights: Executioner (no injury on successful boss kills), Second Wind (30% chance to shrug off an injury), Black Market (15% chance of a gear find per raid), Rad-Proof (radiation capped at 50% of the cap), Rally (surviving below 25 morale gives +20 morale instead of a drop), and others. All 20 new nodes are fully wired — no placeholders.",
    ],
  },
  {
    version: "2.58",
    date: "",
    notes: [
      "All equipped gear is permanently lost when a scav dies — nothing is recovered regardless of rarity. A Stormbreaker or Scrapyard Plate goes down with them the same as anything else.",
      "Scav deaths now ripple through the camp. Survivors who made it back from the same raid take a heavy morale hit; everyone else at camp takes a smaller one just from hearing about it. Both scale with how experienced the dead scav was — a rookie dying barely registers, losing someone with 50 raids behind them drops survivors by 45 points and everyone else by 24. The field report now shows the morale consequence explicitly so it's not a surprise, and names any significant gear that went down with the scav.",
    ],
  },
  {
    version: "2.57",
    date: "",
    notes: [
      "Added 9 dungeon-specific hazard events — 3 per dungeon — that only ever appear inside their designated site. The Vault gets a laser grid still running its pre-collapse patrol, a sealed chamber with a keypad that still has power, and a gold reserve room that'll slow you down if you get greedy. Site Halcyon gets a red-lit containment door, an abandoned mid-run experiment still sitting on its workbench, and an automated PA system reading out a shutdown procedure in a language nobody recognizes. The Drydock gets a flooding bulkhead, a seized engine room that something's been nesting in, and the crew — still at their stations.",
      "Region map boss kills now have a small chance (3%) to drop a dungeon key thematically tied to that boss's location — urban and institutional bosses drop Vault Keys, the more secretive or clinical ones drop Halcyon Keycards, and the water-adjacent or industrial bosses drop Drydock Keys. This gives a real secondary path to first dungeon access without depending entirely on Flea Market luck, while keeping it rare enough that it's an unexpected find rather than a reliable farming route.",
    ],
  },
  {
    version: "2.56",
    date: "",
    notes: [
      "Dungeons now have a multi-stage structure — two regular encounters before the guaranteed boss, not just one. Each stage fires in its own sequential window so they read as distinct rooms rather than events that happen to cluster near each other. Durations extended proportionally to fit (240s / 260s / 280s, up from 170/185/200). Added repeat-avoidance so a run can't pull the same encounter twice back-to-back within the same dungeon.",
      "The staged structure also surfaced and fixed several real timing bugs that were already there but rarely triggered in practice: the boss could permanently skip itself if a regular event happened to still be awaiting the player's response the exact moment the boss's own window opened (bossFired would latch true, the modal would never show, and nothing could retry it); raids could resolve entirely out from under an unanswered pending choice if the timer ran out while that choice was still open; and any pending event or boss whose modal couldn't show the exact tick it fired (because another modal was already open) had no retry mechanism at all — it would just sit in state with nothing ever prompting the player to actually respond to it. All three fixed.",
    ],
  },
  {
    version: "2.55",
    date: "",
    notes: [
      "Found and fixed two real bugs in the Decontaminated skill (Resilience branch) during a verification pass — neither was new, both had been quietly wrong for a while. The time discount it claims (\"-30% radiation treatment time\") was doing nothing at all, at any radiation level — the actual duration formula was never connected to this skill, only to Fast Healer (a different branch). Now it's correctly Decontaminated, and only Decontaminated, that speeds up radiation treatment time specifically. Separately, the meds-cost discount was a percentage applied to a cost so small it got swallowed by rounding more often than not — switched to a flat reduction, the same fix already used for the Infirmary's own tier-6 meds discount, so it now reliably shows up.",
    ],
  },
  {
    version: "2.54",
    date: "",
    notes: [
      "Added 6 new enemy encounters — Trapper's Snare, Nest Swarm, Rooftop Sniper, Zealot Circle, Drowned Chorus, and Vault Sentinel — filling out the gap between the existing 5 and reaching well past where they used to stop. The big one: dungeons (The Vault, Site Halcyon, The Drydock) previously had zero chance of a hostile encounter at all, since nothing in the old roster was gated high-risk enough to ever show up there. They've got 10-11 eligible enemies apiece now, same as everywhere else.",
    ],
  },
  {
    version: "2.53",
    date: "",
    notes: [
      "Fixed a real bug where a site's actual level requirement was one level more lenient than what it displayed — a scav one level below a site's posted \"Lv.5+\" could get in anyway. Sites now lock at exactly the level they say they do.",
      "Equipped unique gear now boosts Arena win chance — +4% per unique piece worn (weapon, armor, pack), up to +12% with a full unique set. At the base 18% win chance, a full unique set raises that to 30%. Regular gear tiers still don't affect the Arena's odds, only unique pieces specifically. Shown live on the Arena tab as soon as a scav's picked, so the displayed odds always match what actually gets rolled.",
    ],
  },
  {
    version: "2.52",
    date: "",
    notes: [
      "Every scav-picker card now also shows their best piece of equipped gear, color-coded the same way the loadout screen already colors gear tiers — a quick read on how dangerous a scav actually is to send out, not just what they've trained into. Unequipped/starting gear shows nothing, same as a scav with no skill points doesn't get a branch badge either.",
      "Added Scrapyard Plate Armor — a new unique, earned rather than found or bought. Hold rank 1 on the Arena leaderboard for 7 days straight and it's yours. The streak resets the moment someone else takes the top spot, even for a day, and starts over fresh rather than picking back up where it left off — so it's genuinely 7 days running, not 7 days total. Can be earned more than once if a scav holds the top spot for multiple separate weeks.",
    ],
  },
  {
    version: "2.51",
    date: "",
    notes: [
      "Fixed the Decon Tent and Rec Yard still reading small even after the last size fix. The real issue was that matching the same scale NUMBER as the other buildings doesn't actually match rendered SIZE — every building has a different shape, so the same scale value comes out a different height for each one. Both now render close to the height of the survivor sprites standing next to them.",
      "Fixed clicking the Decon Tent or Rec Yard not opening their upgrade screen at all. Both buildings were missing from the list that decides what a click on a given building actually does — they could be seen and hovered, just never clicked.",
      "Building construction now feeds into the Camp Journal the same way boss kills, raids survived, and arena wins already do — finishing a brand new building, and fully maxing one out, both get a mention. Every level in between stays routine, same as how the journal doesn't call out every single raid either.",
    ],
  },
  {
    version: "2.50",
    date: "",
    notes: [
      "Fixed the Decon Tent and Rec Yard rendering noticeably smaller than every other camp building — they were sized for an earlier layout plan that got scrapped before shipping, and never got resized when they ended up next to the fire instead.",
      "The camp overhaul is done — all 7 original buildings now go one level past their old cap. Infirmary and Armory get a different kind of bonus at their new top tier rather than more of the same (both of their old formulas were already maxed out, so simply adding a level would have done nothing): Infirmary knocks meds cost down, Armory makes finding gear at all more likely. The other five (Scout Tower, Barracks, Workshop, Radio Tower, Farm) keep climbing the same way they always did, just one tier further.",
      "Every one of the 7 buildings also gets a new visual detail at its new top level, so reaching it actually looks different — a second window, a third supply crate, a chimney with a wisp of smoke, a second meshing gear, and so on.",
      "While going through all 7 for this, found and fixed two real bugs that predate this patch: Workshop's raid-speed bonus had no floor at all, which would eventually have pushed raid duration to zero or negative at a high enough level — never an issue at today's levels, but worth guarding against now that the formula's being extended again. Separately, Scout Tower's signal lamp had been positioned outside its own artwork's visible bounds since the day it was written, meaning it had likely never actually been visible at any level — fixed alongside adding the new second lamp for the top tier.",
    ],
  },
  {
    version: "2.49",
    date: "",
    notes: [
      "Moved the Decon Tent and Rec Yard from the back row to flank the campfire directly, between the chest and warehouse — reads more like part of the camp's daily life now, less like two buildings off on their own.",
      "Redrew the campfire itself as proper art instead of the old CSS-shape log and flame — a real crossed-log pile and layered, curved flame instead of straight-edged polygons.",
      "The fire now reacts to the day/weather systems already running in the background: the glow burns brighter at night and dusk, and it visibly dampens — smaller, dimmer, flickering harder — on a rain or storm day. Same fire, just actually responding to what's happening around it.",
    ],
  },
  {
    version: "2.48",
    date: "",
    notes: [
      "Added two new camp buildings, part of a broader camp overhaul still in progress.",
      "Decon Tent — cuts radiation exposure chance camp-wide, and brings down the meds cost of treating it at the Infirmary. Stacks with the Resilience skill branch rather than competing with it; a building that helps everyone a little, on top of whatever any one scav's own investment already gives them.",
      "Rec Yard — a salvaged half-court. Cuts time spent resting off morale at the Barracks camp-wide and raises the loot floor at low morale, the Fortitude branch's camp-wide counterpart. Starts as just one hoop on cracked ground; fully built out, it's a real two-hoop court.",
    ],
  },
  {
    version: "2.47",
    date: "",
    notes: [
      "The chat bubbles scavs mutter to themselves mid-raid now sometimes reflect what they've actually built into — a Resilience scav might grumble about the Geiger counter clicking, a Scavenging one can't help checking every drawer, a Combat scav talks themselves up before a fight. Mixed in with the existing generic lines rather than replacing them, so a specialized scav still mutters something universal sometimes too, not branch flavor every single time. A scav with no skill points spent anywhere yet just gets the generic lines, same as before.",
    ],
  },
  {
    version: "2.46",
    date: "",
    notes: [
      "Reworked every scav-picker card across the game (Region, Dungeons, Arena, Barracks) to show more than just name/level/HP. Each card now shows a small badge for whichever skill branch that scav's actually invested the most into, plus a warning icon when there's a real mismatch worth knowing about before you send them out — no radiation resistance heading into a radioactive site, no morale resistance on a day the weather's working against you.",
      "Death narration now actually reflects who the scav was, not just a flat 3-line bank for everyone. A rookie dying on their first raid reads differently than a 20-raid veteran going down — the line picked depends on their actual record, and a veteran's line can reference the real number of raids they'd survived.",
      "The Camp Journal now names names when someone dies, instead of the old generic \"lost someone this week.\" Correctly picks out just the scav who actually died even out of a mixed-outcome group raid where the others made it back fine.",
      "Added a Fallen tab to the Codex — every scav who's died, with their final level, where and when they died, raids survived, and total boss kills. Nothing fancy, just somewhere they don't just quietly disappear from the game entirely.",
    ],
  },
  {
    version: "2.45",
    date: "",
    notes: [
      "Fixed the chat bubble above a scav's name flickering every second while a raid's timer ticks down. The bubble's text was actually holding steady the whole time — the flicker was the radio log rebuilding each card's entire display from scratch every tick just to update the countdown, which meant the bubble's fade-in animation kept replaying from the very start even when nothing about it had changed. The countdown and progress bar now update directly without touching the rest of the card, so a held bubble stays put and only animates in on the tick it actually first appears.",
      "While in there, fixed a smaller related bug noticed along the way: clicking a raid card pending a boss fight could, in one specific case, open the wrong popup (a regular event prompt instead of the boss encounter one) if it happened right as the camp screen did a full refresh.",
      "The Camp Journal now occasionally calls out specific milestones by name — a scav's first kill against a given boss, hitting a round number of raids survived (10, 25, 50, 100, 200), or taking the top spot on the Arena leaderboard. Shows up as a line appended after the day's usual mood read, not in place of it, and an unusually eventful day caps out at 2 mentions rather than turning into a list.",
    ],
  },
  {
    version: "2.44",
    date: "",
    notes: [
      "Added a leaderboard to the Arena tab — 10 Scrapyard Pit regulars, mostly the same names build to build, slowly racking up wins day by day whether or not you're watching. A new challenger occasionally bumps out whoever's currently at the bottom. Win the tournament yourself and your scav joins the board on the same terms — climb high enough and an NPC gets bumped instead.",
      "Your own scavs show up in blue on the leaderboard so they actually stand out from the regulars — the one genuinely blue color anywhere in the game's otherwise warm/grey palette, on purpose.",
      "Added a Stats screen, opened from a new button on the Character screen — raids survived, total bosses killed, arena wins, a full per-boss kill breakdown across every site and dungeon, and a running tally of scrap/gold/meds/food that scav has personally helped bring home over their whole career. All of it's been tracked retroactively as zero for existing scavs — there's no real way to reconstruct history that happened before this patch, so it starts counting from here.",
    ],
  },
  {
    version: "2.43",
    date: "",
    notes: [
      "Added a Camp Journal — a new Codex tab with one entry written every in-game day, reacting to how things are actually going: low supplies, high or low morale, a recent death, a winning streak, going hungry. No single entry covers everything; which lines show up depends on what's actually true that day, the same way the field report mixes and matches its own narration beats.",
      "Every boss now has real lore — 3 lines each, for all 14 named bosses across the regular map and the dungeons. Locked until you've actually beaten that boss in a fight (fleeing doesn't count); until then the Codex just tells you to go beat them first.",
      "Added weather. Each in-game day rolls one of five conditions — Clear, Overcast, Rain, Fog, or Storm (rare) — that holds for the whole day and pushes survival odds, loot, radiation chance, and morale loss up or down. Rain and Fog actually help survival (washed-out tracks, harder to be seen) at some cost to loot; Storm is the big gamble, a real hit to survival in exchange for a big loot bonus, since hardly anyone else is out raiding in it.",
      "Hover the clock in camp for a forecast — today's weather and tomorrow's, both with their effects spelled out, so it's possible to actually plan around a storm coming rather than just discovering it mid-raid.",
      "Whatever weather a raid launches under is what it resolves under, even if the in-game day turns over while it's still out — same reasoning as how night-raid status already gets locked in at launch.",
    ],
  },
  {
    version: "2.42",
    date: "",
    notes: [
      "Switched the game's fonts — Impact for headers/buttons/labels, Consolas for body and UI text, replacing Arial Narrow and Courier New. Both are genuine Windows system fonts (no network fetch, works fully offline), picked for a grittier, more apocalyptic read than the previous pairing.",
      "Bumped text size throughout — every font size in the game went up, smaller text by a larger relative amount than text that was already a comfortable size. Aimed specifically at the places that were hardest to read: camp popups, menus, and small print generally.",
      "Massively expanded the skill tree. The 3 existing branches (Combat, Survival, Scavenging) each grow 2 new tiers — Kill Instinct and Last Stand for Combat, Iron Lungs and Unbreakable for Survival, Keen Eye and Treasure Hunter for Scavenging — reaching up to level 12 for each branch's new capstone. Two entirely new branches join them: Resilience (reduces radiation chance and exposure, faster/cheaper radiation treatment) and Fortitude (less morale lost per raid, a higher loot floor at low morale, faster rest, and a capstone that puts a hard floor under morale itself). The skill web is now a 5-pointed wheel instead of 3, evenly spaced, with a bigger canvas to fit the deeper tree.",
    ],
  },
  {
    version: "2.41",
    date: "",
    notes: [
      "Turned ambient site audio down further — another 50% on top of the previous cut, so it's now at about a fifth of its original volume at full slider. This was specifically about the raid/dungeon/arena select screens still feeling loud; the UI click sound is untouched and stays exactly where it was.",
    ],
  },
  {
    version: "2.40",
    date: "",
    notes: [
      "The Warehouse's hover tooltip now shows the camp's daily upkeep (3 food, 3 gold) alongside the resource totals, so the cost is visible at a glance without needing to remember it.",
      "Reworked the Active Raids panel — each raid is now a bigger card with that site's own art behind the progress bar, scrolling horizontally instead of stacking as thin ticker rows. Same information as before (who's out, ETA, night-raid marker, awaiting-orders state), just easier to read at a glance.",
      "Added speech bubbles — every so often, a scav out on a raid will mutter something to themselves, shown as a chat bubble over their name on the new raid cards. Purely cosmetic, randomly timed, and separate from the field report's own narration.",
    ],
  },
  {
    version: "2.39",
    date: "",
    notes: [
      "Turned overall audio down by 60% across the board — both the UI click and every site's ambience. The volume slider in Settings still works exactly the same way (0-100%, same feel), this just lowers the ceiling everything plays at underneath it.",
      "The camp screen now actually fills a fullscreen window instead of stopping short and leaving empty space around it — the layout didn't have a real height anchor before, so it only ever grew to fit its own content. The Roster and Send a Raid cards are sized up to match, rather than sitting small inside a now-bigger screen.",
      "Added Stormbreaker — a new unique sledgehammer, dropped only by Rivet at the Train Yard alongside the existing Rivet's Plating. Whichever of the two drops is decided at random per kill; getting a drop at all from Rivet is no more likely now than it was with just one unique to its name, there's just more variety in what comes home.",
    ],
  },
  {
    version: "2.38",
    date: "",
    notes: [
      "Added sound. Every button in the game now has a short click, and each region map, dungeon, and the arena has its own ambient loop that fades in when you select it — distant sirens and city hum at the Precinct, water and creaking dock at the Marina, a dissonant drone at Site Halcyon, and so on for all 15 sites. A volume slider lives in Settings under a new Audio section, saved separately from your save file so it isn't reset by wiping progress or starting New Game+.",
      "Fixed ambient site audio not actually playing. The cause was a timing bug — the code was resetting a track's playback position immediately after pointing it at a new file, before the browser had loaded enough of that file to do so reliably, which could leave playback silently stuck at zero volume forever with nothing failing loudly enough to notice. Site ambience should now reliably fade in the moment a map, dungeon, or the arena is selected.",
      "While in there, simplified how the UI click sound replays on rapid clicking — it now restarts the same already-loaded sound instead of cloning a fresh copy of it from disk on every single click, which was unnecessary overhead and a little more failure-prone than it needed to be.",
    ],
  },
  {
    version: "2.37",
    date: "",
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
    // Cut from the original 78s — early-game raids were taking too long
    // relative to how little a fresh camp gets back from them, and this
    // is the very first map most players ever run. Tapered rather than
    // a flat cut everywhere: the lowest-risk maps lose the most (here,
    // ~32%), shrinking down to nothing by risk 2.2 — see Hospital's
    // duration comment below for where the taper actually ends.
    duration: 53, // seconds
    lootTable: { scrap: [4, 10], gold: [0, 2], meds: [0, 1] },
    minLevel: 1,
  },
  {
    id: "marina",
    name: "Riverside Marina",
    risk: "low",
    riskMult: 1.15,
    desc: "A couple of boats still afloat and a row of bait shacks. Quiet, if the docks hold your weight.",
    duration: 55, // was 80s — same early-game taper as Strip Mall
    lootTable: { scrap: [5, 12], gold: [1, 2], meds: [0, 2] },
    minLevel: 1,
  },
  {
    id: "depot",
    name: "Train Yard",
    risk: "low",
    riskMult: 1.3,
    desc: "Old freight containers. Locks keep most scavs out — but not all of them.",
    duration: 60, // was 85s — same early-game taper as Strip Mall
    lootTable: { scrap: [8, 16], gold: [1, 3], meds: [0, 1] },
    minLevel: 1,
  },
  {
    id: "farmstead",
    name: "Greenfield Farmstead",
    risk: "med",
    riskMult: 2.0,
    desc: "A barn and a silo full of scrap metal and tools. The grass out front is taller than it should be.",
    duration: 88, // was 98s — taper continuing to shrink as risk climbs
    lootTable: { scrap: [12, 26], gold: [1, 4], meds: [1, 3], food: [2, 6] },
    minLevel: 2,
  },
  {
    id: "suburb",
    name: "Flooded Suburb",
    risk: "med",
    riskMult: 1.8,
    desc: "Waterlogged houses. Slower going, better cabinets.",
    duration: 77, // was 95s — taper continuing to shrink as risk climbs
    lootTable: { scrap: [10, 22], gold: [2, 5], meds: [1, 2], food: [1, 4] },
    minLevel: 2,
  },
  {
    id: "hospital",
    name: "St. Aldric's Hospital",
    risk: "med",
    riskMult: 2.2,
    desc: "Meds galore, if you don't mind what's wandering the wards.",
    // Was 100s — last map the taper touches at all; everything above
    // this risk tier (16th Precinct onward, plus every dungeon) is
    // untouched, on the read that early-game pacing was the actual
    // problem, not the mid-to-late game's.
    duration: 90,
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
    duration: 240,
    lootTable: { scrap: [36, 64], gold: [22, 40], meds: [3, 6], food: [4, 9] },
    minLevel: 6,
    dungeon: true,
    requiresKey: "vault_key",
    // Multi-stage structure: 2 regular hazard/enemy encounters in
    // sequence, then the guaranteed boss — see checkRaidEvents'
    // dungeon-aware stage gating and DUNGEON_STAGE_WINDOWS for the
    // actual timing windows each stage fires within.
    stageCount: 3,
  },
  {
    id: "halcyon",
    name: "Site Halcyon",
    risk: "dungeon",
    riskMult: 6.8,
    desc: "A black-site bunker, abandoned mid-experiment. The doors still cycle on their own schedule, and something down there still answers to a name nobody on the surface ever learned.",
    duration: 260,
    lootTable: { scrap: [42, 72], gold: [26, 46], meds: [4, 8], food: [3, 7] },
    minLevel: 7,
    dungeon: true,
    requiresKey: "halcyon_key",
    radioactive: true,
    stageCount: 3,
  },
  {
    id: "drydock",
    name: "The Drydock",
    risk: "dungeon",
    riskMult: 7.5,
    desc: "A naval hulk run aground decades before the collapse, half-swallowed by the tideline ever since. Worse than the Drowned Quarter on its worst day, and everyone who's been both agrees on that much.",
    duration: 280,
    lootTable: { scrap: [48, 84], gold: [30, 52], meds: [4, 9], food: [4, 8] },
    minLevel: 8,
    dungeon: true,
    requiresKey: "drydock_key",
    radioactive: true,
    stageCount: 3,
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

// ===== OUTPOST (second site, NG+1-gated) =====
// Unlocked the moment a camp reaches NG+1 — see isOutpostUnlocked, the
// single gate every other Outpost function checks before doing
// anything. A genuinely separate site rather than a second copy of the
// whole camp: its own small 3-building track, its own scav assignment
// list, but sharing the main camp's resource pool directly rather than
// keeping a separate stash — what it generates lands straight in
// STATE.resources, the same pool everything else spends from.
// Assignment is a free toggle, not a commitment (see assignToOutpost/
// recallFromOutpost) — an assigned scav just can't be picked for a
// raid/Arena/Leader while there, the same exclusion every other
// non-"ready" status already gets, with no cooldown or cost to move
// back and forth.
const OUTPOST_BUILDINGS = {
  lookout: {
    id: "lookout",
    name: "Lookout Post",
    desc: "Raises scrap and gold generated by the Outpost each day.",
    lore: "A platform lashed together from whatever was already standing. Whoever's up there sees the comings and goings long before anyone walking up does.",
    maxLevel: 4,
    baseCost: { scrap: 60, gold: 15 },
    costMult: 1.8,
    effect: (lvl) => `+${lvl * 4} scrap, +${lvl * 2} gold per day`,
  },
  cache: {
    id: "cache",
    name: "Forward Cache",
    desc: "Raises intel generated by the Outpost each day.",
    lore: "A buried supply point, stocked and re-stocked by whoever's stationed out here long enough to start noticing patterns nobody back at camp would ever see.",
    maxLevel: 4,
    baseCost: { scrap: 80, gold: 25 },
    costMult: 1.9,
    effect: (lvl) => `+${lvl} intel per day`,
  },
  bunkhouse: {
    id: "bunkhouse",
    name: "Outpost Bunkhouse",
    desc: "Raises how many scavs can be usefully assigned to the Outpost at once — generation per scav drops off past this cap, not before it.",
    lore: "Cots and a roof, nothing more. Built for however many people are actually willing to spend their nights out here instead of at the fire.",
    maxLevel: 3,
    baseCost: { scrap: 50, gold: 10 },
    costMult: 2.0,
    effect: (lvl) => `${OUTPOST_BASE_SCAV_CAP + lvl} scavs before generation starts dropping off`,
  },
};

// Base cap before any Bunkhouse investment — the same "generation per
// scav has a soft cap" shape as GROUP_SURVIVAL_BONUS_PER_EXTRA having
// diminishing returns past the first couple of raid-group members,
// rather than a hard wall that just stops counting extra scavs
// entirely once reached. See outpostDailyGeneration's actual per-scav
// math for how the drop-off is applied.
const OUTPOST_BASE_SCAV_CAP = 2;

function isOutpostUnlocked() {
  return (STATE.ngPlusLevel || 0) >= 1;
}

function getOutpostState() {
  if (!STATE.outpost) {
    STATE.outpost = { buildings: { lookout: 0, cache: 0, bunkhouse: 0 }, assignedScavIds: [] };
  }
  return STATE.outpost;
}

function getOutpostBuildingDef(id) {
  return OUTPOST_BUILDINGS[id];
}

function outpostScavCap() {
  return OUTPOST_BASE_SCAV_CAP + getOutpostState().buildings.bunkhouse;
}

function purchaseOutpostUpgrade(id) {
  const def = OUTPOST_BUILDINGS[id];
  if (!def) return false;
  const outpost = getOutpostState();
  const lvl = outpost.buildings[id] || 0;
  if (lvl >= def.maxLevel) return false;
  const cost = upgradeCost(def, lvl);
  if (!canAfford(cost)) return false;
  spend(cost);
  outpost.buildings[id] = lvl + 1;
  if (lvl === 0) {
    queueMilestone(`The Outpost finished building its ${def.name}.`);
  } else if (outpost.buildings[id] === def.maxLevel) {
    queueMilestone(`The Outpost's ${def.name} is fully built out now.`);
  }
  checkQuestProgress();
  saveState();
  return true;
}

function isAssignedToOutpost(scavId) {
  return getOutpostState().assignedScavIds.includes(scavId);
}

// Free toggle, both directions — no cooldown, no cost, no commitment.
// Only real guard is that a scav has to be "ready" to be assigned in
// the first place (can't pull someone out of a raid or off a healing
// bed and plant them at the Outpost instead), the same status check
// every other scav-picker in the game already respects.
function assignToOutpost(scavId) {
  if (!isOutpostUnlocked()) return false;
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status !== "ready") return false;
  const outpost = getOutpostState();
  if (outpost.assignedScavIds.includes(scavId)) return false;
  outpost.assignedScavIds.push(scavId);
  scav.status = "outpost";
  saveState();
  return true;
}

function recallFromOutpost(scavId) {
  const outpost = getOutpostState();
  const idx = outpost.assignedScavIds.indexOf(scavId);
  if (idx === -1) return false;
  outpost.assignedScavIds.splice(idx, 1);
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (scav && scav.status === "outpost") scav.status = "ready";
  saveState();
  return true;
}

// Per-scav generation has a soft cap (outpostScavCap) — each scav up to
// the cap contributes their full share; every scav past it contributes
// at a reduced rate instead of zero, so over-assigning still helps a
// little rather than becoming pure waste the instant the Bunkhouse's
// current level is exceeded. Mirrors the same diminishing-rather-than-
// hard-walled shape the raid group bonus already uses.
const OUTPOST_OVERFLOW_SCAV_MULT = 0.35;

function outpostDailyGeneration() {
  const outpost = getOutpostState();
  const assignedCount = outpost.assignedScavIds.length;
  if (assignedCount === 0) return { scrap: 0, gold: 0, intel: 0 };
  const cap = outpostScavCap();
  const fullShareCount = Math.min(assignedCount, cap);
  const overflowCount = Math.max(0, assignedCount - cap);
  const effectiveScavs = fullShareCount + overflowCount * OUTPOST_OVERFLOW_SCAV_MULT;

  const lookoutLvl = outpost.buildings.lookout || 0;
  const cacheLvl = outpost.buildings.cache || 0;
  // Flat per-scav base (so even an Outpost with no buildings yet still
  // produces something for having people stationed there at all) plus
  // the building-driven bonus on top, both scaled by effectiveScavs.
  const scrap = Math.round((3 + lookoutLvl * 4) * effectiveScavs);
  const gold = Math.round((1 + lookoutLvl * 2) * effectiveScavs);
  const intel = Math.round(cacheLvl * effectiveScavs);
  return { scrap, gold, intel };
}


// Three persistent named traders, distinct from the Flea Market's
// anonymous randomized sellers (rollFleaOffer draws a fresh pickName()
// every single offer, with zero memory of who you traded with last
// time) — these are the same person every visit, with their own
// reputation track that grows through trading and gates better prices,
// better stock, and eventually a reputation-locked exclusive (an item
// or service unavailable through any other system in the game).
// Unlocked progressively by Radio Tower level rather than all at once
// the moment the Flea Market itself opens — gives the building's own
// max level (4) a real reason to be pushed all the way, similar to how
// Workshop's tier-2 crafting recipes gave its higher levels a second
// purpose beyond raid speed.
const TRADERS = {
  quartermaster: {
    id: "quartermaster",
    name: "Quartermaster Voss",
    minRadioTowerLevel: 2,
    theme: "Ex-military, runs a tight account of everything that passes through. Doesn't haggle — the price is the price, and the price gets better the more you've actually done business.",
    // Reputation thresholds — same shape as ARENA_TOP_STREAK_REWARD_DAYS
    // and similar: a flat number to cross, not a percentage or curve.
    repForTier2: 30,
    repForTier3: 80,
    repForExclusive: 150,
    exclusiveSlot: "weapon",
    exclusiveId: "voss_contract",
  },
  doc: {
    id: "doc",
    name: "Doc Reyes",
    minRadioTowerLevel: 3,
    theme: "Used to run a real trauma ward, before. Doesn't ask what happened, just what's needed — and what the camp can actually spare for it.",
    repForTier2: 30,
    repForTier3: 80,
    repForExclusive: 150,
    // Doc's exclusive is a SERVICE, not gear — see tradeWithTrader's
    // dedicated handling of kind: "instantHeal", the one offer kind
    // that doesn't grant an item or resource at all, just resolves a
    // scav's injury immediately. Nothing else in the game can heal a
    // scav without the Infirmary's own time cost — that's the entire
    // point of this being exclusive to reputation with Doc specifically.
  },
  broker: {
    id: "broker",
    name: "The Broker",
    minRadioTowerLevel: 4,
    theme: "Doesn't sell anything you could find yourself — sells what you'd have to ask around for. Knows things. Charges for knowing them.",
    repForTier2: 30,
    repForTier3: 80,
    repForExclusive: 150,
    // The Broker's exclusive: guaranteed intel for scrap/gold, the
    // ONLY non-raid source of intel anywhere in the game (see
    // rollIntelFind — every other intel source requires a raid to even
    // roll the chance at all). See tradeWithTrader's "intelBuy" kind.
  },
};

function getTraderReputation(traderId) {
  if (!STATE.traderReputation) STATE.traderReputation = {};
  return STATE.traderReputation[traderId] || 0;
}

function addTraderReputation(traderId, amount) {
  if (!STATE.traderReputation) STATE.traderReputation = {};
  STATE.traderReputation[traderId] = (STATE.traderReputation[traderId] || 0) + amount;
}

function isTraderUnlocked(traderId) {
  const trader = TRADERS[traderId];
  if (!trader) return false;
  return (STATE.upgrades.radioTower || 0) >= trader.minRadioTowerLevel;
}

// 1-3, based on reputation thresholds — higher tier means better stock
// (see rollTraderOffer's tier-scaled pricing/selection) and is shown to
// the player directly so the relationship's progress is legible, not
// just a hidden number behind the scenes.
function traderTier(traderId) {
  const trader = TRADERS[traderId];
  if (!trader) return 1;
  const rep = getTraderReputation(traderId);
  if (rep >= trader.repForTier3) return 3;
  if (rep >= trader.repForTier2) return 2;
  return 1;
}

function traderExclusiveUnlocked(traderId) {
  const trader = TRADERS[traderId];
  if (!trader) return false;
  return getTraderReputation(traderId) >= trader.repForExclusive;
}

// Each trader's regular stock is tier-scaled by reputation rather than
// pulling from the same fully-random pool the Flea Market does — a
// trader who knows you gets you better gear at a better price, not
// just a different random roll. 2 standing offers per trader (smaller
// than the Flea Market's count, deliberately — these are curated, not
// a flood of random chatter), regenerated once per day the same way
// getFleaMarket already works.
function rollTraderOffer(traderId) {
  const tier = traderTier(traderId);
  const trader = TRADERS[traderId];
  const maxTier = Math.min(4, gearUnlockTier() + (tier - 1)); // higher trader tier reaches further above what raids can currently find
  const slot = pick(["weapon", "armor", "pack"]);
  const findable = GEAR_CATALOG[slot].filter((g) => g.tier >= 1 && g.tier <= maxTier && !g.unique && !g.improvised);
  if (!findable.length) return null;
  const getItem = pick(findable);
  const baseCost = getItem.cost || { scrap: 20 };
  // Markup shrinks as trader tier rises — tier 1 is a real premium over
  // buying it yourself (if you even could), tier 3 is close to raw cost,
  // the actual reward for a deep relationship rather than gear access
  // alone (which the Flea Market and raids already both provide).
  const markup = tier === 3 ? 1.05 : tier === 2 ? 1.2 : 1.4;
  const give = {};
  for (const res in baseCost) give[res] = Math.max(1, Math.round(baseCost[res] * markup));
  return { id: cryptoRandomId(), traderId, kind: "buyGear", slot, give, get: { gearId: getItem.id, gearName: getItem.name } };
}

function getTraderStock(traderId) {
  const today = getDayNumber();
  if (!STATE.traderStock) STATE.traderStock = {};
  if (!STATE.traderStock[traderId] || STATE.traderStock[traderId].generatedOnDay !== today) {
    const offers = [];
    for (let i = 0; i < 2; i++) {
      const offer = rollTraderOffer(traderId);
      if (offer) offers.push(offer);
    }
    STATE.traderStock[traderId] = { generatedOnDay: today, offers };
    saveState();
  }
  return STATE.traderStock[traderId];
}

// Reputation gained per standard trade — flat, not scaled by trade
// value, so reaching a trader's tier/exclusive thresholds is about how
// many times you've actually done business with them, not how much
// gold happened to change hands in one trade.
const TRADER_REP_PER_TRADE = 5;

function canAffordTraderOffer(offer) {
  const resCost = {};
  for (const k in offer.give) {
    if (k !== "gearId" && k !== "gearName") resCost[k] = offer.give[k];
  }
  return canAfford(resCost);
}

function executeTraderOffer(offer) {
  if (!canAffordTraderOffer(offer)) return false;
  const resCost = {};
  for (const k in offer.give) {
    if (k !== "gearId" && k !== "gearName") resCost[k] = offer.give[k];
  }
  spend(resCost);
  if (offer.get.gearId) addToStash(offer.slot, offer.get.gearId, 1);
  addTraderReputation(offer.traderId, TRADER_REP_PER_TRADE);
  const stock = getTraderStock(offer.traderId);
  stock.offers = stock.offers.filter((o) => o.id !== offer.id);
  checkQuestProgress();
  saveState();
  return true;
}

// Doc's exclusive — instantly resolves a scav's injury (no Infirmary
// queue, no time cost at all) for a steep meds + gold price. The one
// genuinely exclusive SERVICE in the trader system, as opposed to the
// Quartermaster's exclusive ITEM and the Broker's exclusive
// RESOURCE CONVERSION — three different shapes of "can't get this
// anywhere else" rather than three reskins of the same mechanic.
const DOC_INSTANT_HEAL_COST = { meds: 4, gold: 40 };
function docInstantHeal(scavId) {
  if (!traderExclusiveUnlocked("doc")) return false;
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status === "dead") return false;
  if (scav.hp >= scav.maxHp) return false; // nothing to heal
  if (!canAfford(DOC_INSTANT_HEAL_COST)) return false;
  spend(DOC_INSTANT_HEAL_COST);
  scav.hp = scav.maxHp;
  addTraderReputation("doc", TRADER_REP_PER_TRADE);
  checkQuestProgress();
  saveState();
  return true;
}

// Quartermaster's exclusive — Voss' Contract, purchasable once
// reputation crosses the threshold. Repeatable, same as every other
// unique in the game (boss drops, Scrapyard Plate Armor, NG+
// exclusives) — losing it to a death shouldn't mean it's gone forever
// any more than losing a boss-dropped unique does.
const QUARTERMASTER_EXCLUSIVE_COST = { scrap: 120, gold: 90 };
function quartermasterBuyExclusive() {
  if (!traderExclusiveUnlocked("quartermaster")) return false;
  if (!canAfford(QUARTERMASTER_EXCLUSIVE_COST)) return false;
  spend(QUARTERMASTER_EXCLUSIVE_COST);
  addToStash("weapon", "voss_contract", 1);
  addTraderReputation("quartermaster", TRADER_REP_PER_TRADE);
  checkQuestProgress();
  saveState();
  return true;
}

// The Broker's exclusive — guaranteed intel for scrap/gold, the ONLY
// non-raid source of intel in the game (every other path requires
// rollIntelFind's chance roll, which only ever fires on a raid).
const BROKER_INTEL_BUY_COST = { scrap: 40, gold: 20 };
const BROKER_INTEL_BUY_AMOUNT = 3;
function brokerBuyIntel() {
  if (!traderExclusiveUnlocked("broker")) return false;
  if (!canAfford(BROKER_INTEL_BUY_COST)) return false;
  spend(BROKER_INTEL_BUY_COST);
  STATE.resources.intel = (STATE.resources.intel || 0) + BROKER_INTEL_BUY_AMOUNT;
  addTraderReputation("broker", TRADER_REP_PER_TRADE);
  checkQuestProgress();
  saveState();
  return true;
}


// Permanent, one-time camp-wide unlocks — distinct from buildings
// (leveled, scrap/gold-funded, narrow single-purpose effects) and
// skills (per-scav, learned through play, capped by level). Spent
// exclusively with intel (see rollIntelFind/intelFindChance), earned
// only from raids, never bought or converted from any other resource.
// Each branch deliberately covers ground nothing else in the game
// touches at all: Dungeon Intel (buildings have zero dungeon-specific
// effects anywhere), Arena Tactics (same — no building touches the
// Arena), Weather Reading (nothing currently blunts a bad-weather day,
// only skills/backgrounds that happen to reduce morale loss as a side
// effect), and Field Medicine (death consequences and radiation beyond
// what Infirmary's building level or the Resilience/Survival skill
// branches already cover).
const RESEARCH_TREE = {
  dungeonIntel: {
    label: "Dungeon Intel",
    nodes: [
      { id: "chartedRoutes", name: "Charted Routes", cost: { intel: 15 },
        desc: "-10% dungeon raid duration, camp-wide — every dungeon, not just ones a scav's personally run before.",
        requires: null },
      { id: "knownWeakPoints", name: "Known Weak Points", cost: { intel: 25, scrap: 40 }, requires: "chartedRoutes",
        desc: "+5% survival on dungeon boss fights specifically, camp-wide." },
      { id: "salvageEye", name: "Salvage Eye", cost: { intel: 30 }, requires: "chartedRoutes",
        desc: "+15% loot multiplier inside dungeons specifically — region maps and the Arena unaffected." },
      { id: "deepRecon", name: "Deep Recon", cost: { intel: 50, scrap: 80 }, requires: ["knownWeakPoints", "salvageEye"],
        desc: "+5% chance per dungeon boss kill of a bonus key drop for that same dungeon, on top of the existing chance." },
    ],
  },
  arenaTactics: {
    label: "Arena Tactics",
    nodes: [
      { id: "readTheCrowd", name: "Read the Crowd", cost: { intel: 15 },
        desc: "+3% flat Arena win chance, camp-wide — stacks with everything else (gear, NG+ scaling).",
        requires: null },
      { id: "showmanship", name: "Showmanship", cost: { intel: 20 }, requires: "readTheCrowd",
        desc: "+15% gold reward range on every Arena win." },
      { id: "crowdFavorite", name: "Crowd Favorite", cost: { intel: 30, gold: 50 }, requires: "readTheCrowd",
        desc: "+2 consecutive-day credit toward the rank-1 streak needed for Scrapyard Plate Armor — effectively shortens the 7-day requirement to 5." },
      { id: "houseAlwaysWins", name: "The House Always Loses", cost: { intel: 45, gold: 80 }, requires: ["showmanship", "crowdFavorite"],
        desc: "Arena win chance can never drop below 25%, regardless of NG+ scaling." },
    ],
  },
  weatherReading: {
    label: "Weather Reading",
    nodes: [
      { id: "readTheSky", name: "Read the Sky", cost: { intel: 15 },
        desc: "Weather's effect on survival odds and loot is reduced by 30%, camp-wide — good weather is slightly less good, bad weather is meaningfully less bad.",
        requires: null },
      { id: "stormproofing", name: "Stormproofing", cost: { intel: 25, scrap: 30 }, requires: "readTheSky",
        desc: "Weather's effect on morale loss and radiation chance is also reduced by 30%, same mitigation extended to the two fields Read the Sky doesn't cover." },
      { id: "forecasting", name: "Forecasting", cost: { intel: 20 }, requires: "readTheSky",
        desc: "Extends the forecast hover panel one more day — the day after tomorrow shows up alongside today and tomorrow, not just the two days it already covers." },
      { id: "allWeatherCamp", name: "All-Weather Camp", cost: { intel: 50, scrap: 60 }, requires: ["stormproofing", "forecasting"],
        desc: "Weather's effect on every field is reduced by 60% total (not stacking multiplicatively with the two 30% nodes above — this replaces them at a stronger flat rate)." },
    ],
  },
  fieldMedicine: {
    label: "Field Medicine",
    nodes: [
      { id: "triageProtocol", name: "Triage Protocol", cost: { intel: 15 },
        desc: "-10% injury severity, camp-wide, on top of any per-scav reduction from skills or background.",
        requires: null },
      { id: "radSuppressants", name: "Rad Suppressants", cost: { intel: 25, meds: 5 }, requires: "triageProtocol",
        desc: "-10% radiation exposure amount, camp-wide, stacking with Resilience skills the same way weather and skill multipliers already stack." },
      { id: "graveCounsel", name: "Grave Counsel", cost: { intel: 30 }, requires: "triageProtocol",
        desc: "-15% to every death-consequence morale hit, camp-wide — survivor hit, camp-wide hit, and the Leader-specific hit, all three." },
      { id: "fieldSurgeons", name: "Field Surgeons", cost: { intel: 50, meds: 10 }, requires: ["radSuppressants", "graveCounsel"],
        desc: "-20% Infirmary time and meds cost, camp-wide, on top of the building's own level-based reduction." },
    ],
  },
};

function isResearchUnlocked(nodeId) {
  return !!(STATE.research && STATE.research[nodeId]);
}

// requires can be a single node id, an array of node ids (all must be
// unlocked), or null (no prerequisite — every branch's first node).
// Same shape as the skill tree's own requires field, for the same
// reason: a capstone occasionally needs more than one prerequisite
// satisfied at once, and forcing every node into a single-prereq shape
// would mean awkwardly chaining prerequisites instead of expressing
// "needs both of these" directly.
function isResearchNodeAvailable(node) {
  if (isResearchUnlocked(node.id)) return false;
  if (!node.requires) return true;
  const reqs = Array.isArray(node.requires) ? node.requires : [node.requires];
  return reqs.every((r) => isResearchUnlocked(r));
}

function findResearchNode(nodeId) {
  for (const branch of Object.values(RESEARCH_TREE)) {
    const node = branch.nodes.find((n) => n.id === nodeId);
    if (node) return node;
  }
  return null;
}

function unlockResearch(nodeId) {
  const node = findResearchNode(nodeId);
  if (!node) return false;
  if (!isResearchNodeAvailable(node)) return false;
  if (!canAfford(node.cost)) return false;
  spend(node.cost);
  if (!STATE.research) STATE.research = {};
  STATE.research[nodeId] = true;
  queueMilestone(`The camp learned something new: ${node.name}.`);
  checkQuestProgress();
  saveState();
  return true;
}


// On day 6, if at least 2 living scavs are at camp, the player chooses
// one as Leader — a one-time event (see checkLeaderElectionTrigger),
// not something re-offered every day it's possible. The Leader grants
// two fixed, always-on camp-wide bonuses (not a choice between them,
// unlike prestige perks — the role itself has one consistent identity
// regardless of who holds it) and, if they die, an extra morale hit on
// top of the normal death-consequence system already in resolveRaid,
// scaled by the Leader's own level rather than raids survived — losing
// someone the camp specifically chose to follow is a different kind of
// loss than losing any other scav, regardless of how seasoned they
// were in the field.
const LEADER_ELECTION_DAY = 6;
const LEADER_MIN_ROSTER = 2;

function hasLeader() {
  if (!STATE.leaderScavId) return false;
  const leader = STATE.scavs.find((s) => s.id === STATE.leaderScavId);
  return !!leader && leader.status !== "dead";
}

// Command Presence — group raids specifically get a flat survival
// bump, reflecting coordination mattering most when more than one
// scav is in the field together. Applied in calcGroupOdds alongside
// leadFromFront/groupTactics (the Command skill branch's own group
// bonuses), additively, same as those already stack with each other.
const LEADER_GROUP_SURVIVAL_BONUS = 0.05;
// Steady Hand — flat camp-wide morale-loss reduction, multiplicative
// with every other moraleDropMult source (skills, backgrounds), same
// pattern those already use.
const LEADER_MORALE_DROP_MULT = 0.9;

function leaderGroupSurvivalBonus() {
  return hasLeader() ? LEADER_GROUP_SURVIVAL_BONUS : 0;
}

function leaderMoraleDropMult() {
  return hasLeader() ? LEADER_MORALE_DROP_MULT : 1;
}

// Checked once per actual day processed in checkDailyUpkeep's catch-up
// loop (dayNum below is that loop's per-iteration day, not just
// "today" — see its own comment for why that distinction matters for
// multi-day catch-up). Fires exactly once per camp, ever — not "every
// day from 6 onward until someone's chosen," and not again if a chosen
// Leader later dies and the role goes vacant. leaderEverChosen is the
// guard for that; STATE.leaderScavId alone isn't enough since it's
// null both before the first election and after a Leader's death.
function checkLeaderElectionTrigger(dayNum) {
  if (dayNum !== LEADER_ELECTION_DAY) return;
  if (STATE.leaderEverChosen) return;
  const aliveCount = STATE.scavs.filter((s) => s.status !== "dead").length;
  if (aliveCount < LEADER_MIN_ROSTER) return;
  STATE.pendingLeaderElection = true;
}

// Confirms the player's pick — sets the Leader, marks the one-time
// trigger as spent (so dying later and the role going vacant doesn't
// re-offer this), and queues a journal milestone the same way every
// other significant camp moment does.
function chooseLeader(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status === "dead") return false;
  STATE.leaderScavId = scavId;
  STATE.leaderEverChosen = true;
  STATE.pendingLeaderElection = false;
  // Recorded on the scav itself, not just the live STATE.leaderScavId
  // pointer — the death-consequence code in resolveRaid deliberately
  // clears leaderScavId to null the moment a Leader dies (so hasLeader()
  // correctly reflects there's no leader anymore), which would
  // otherwise make it impossible for anything checked after that point
  // — like the Fallen Codex tab — to know this scav had ever held the
  // role at all.
  scav.wasLeader = true;
  queueMilestone(`The camp chose ${scav.name} to lead.`);
  saveState();
  return true;
}


// Specific NG+ levels get a journal callout, not just every level —
// same reasoning as RAIDS_SURVIVED_MILESTONES only firing at round
// numbers rather than every single raid. Tied directly to what that
// level actually unlocks (see resolveNgPlusUniqueDrop's
// NG_PLUS_UNIQUE_MIN_LEVEL and "the_returned"'s ngPlusMinLevel in
// RAID_EVENTS) so reaching one of these isn't just a bigger number —
// it's the moment something genuinely new becomes possible.
const NG_PLUS_LEVEL_MILESTONES = {
  2: { text: "Something changed, this deep in. Boss kills are turning up things that were never on any battlefield before this point." },
  3: { text: "Whatever's out there now has been here before — not this place, but somewhere like it. The camp's never run into anything quite like it." },
  5: { text: "Five times over now. Whoever's still standing isn't running the same camp they started with, however many times the walls came back down." },
};

// ===== QUESTLINES =====
// A questline is a fixed sequence of steps, each checked against state
// that already exists elsewhere in the game — raids survived, boss
// kills, the Arena leaderboard, building tiers, NG+ level — rather than
// introducing any new progress-tracking of its own. checkQuestProgress
// is called from every place that already updates one of those
// underlying numbers (resolveRaid, purchaseUpgrade, startNewGamePlus,
// checkArenaTopStreak), and just asks "does the current step's
// condition() now return true?" Completing a step grants its reward
// and advances to the next; completing the last step finishes the
// whole questline. Only one questline exists today (THE_LONG_WAY_BACK)
// but QUESTLINES is a catalog, not a single object, so adding a second
// is just another entry — nothing about checkQuestProgress assumes
// there's only ever one.
const QUESTLINES = {
  longWayBack: {
    id: "longWayBack",
    name: "The Long Way Back",
    desc: "Five marks of a camp that's actually going to make it, in order. Each one used to be the whole story. Now it's just the start of the next one.",
    steps: [
      {
        id: "survive10",
        title: "Hold On",
        desc: "Survive 10 raids, camp-wide — doesn't matter who, doesn't matter how close.",
        condition: () => STATE.scavs.reduce((sum, s) => sum + (s.stats.raidsSurvived || 0), 0) >= 10,
        reward: { scrap: 60, gold: 15 },
        rewardText: "60 scrap, 15 gold",
      },
      {
        id: "firstBoss",
        title: "First Blood",
        desc: "Beat any named boss, anywhere.",
        condition: () => Object.keys(STATE.bossesBeaten || {}).length >= 1,
        reward: { scrap: 80, gold: 30, meds: 3 },
        rewardText: "80 scrap, 30 gold, 3 meds",
      },
      {
        id: "arenaTop",
        title: "Name In Lights",
        desc: "Get a scav onto the Arena leaderboard's top spot, even for a day.",
        condition: () => {
          const board = getArenaLeaderboard();
          return board.length > 0 && board[0].isPlayerScav;
        },
        reward: { gold: 100 },
        rewardText: "100 gold",
      },
      {
        id: "maxBuilding",
        title: "Built to Last",
        desc: "Take any one camp building all the way to its max level.",
        condition: () => CAMP_BUILDINGS.some((b) => STATE.upgrades[b.id] >= getUpgradeDef(b.id).maxLevel),
        reward: { scrap: 150, gold: 60 },
        rewardText: "150 scrap, 60 gold",
      },
      {
        id: "firstPrestige",
        title: "The Long Way Back",
        desc: "Start a New Game+ run — whatever's left standing carries forward.",
        condition: () => (STATE.ngPlusLevel || 0) >= 1,
        reward: { slot: "armor", id: "scrapyard_plate" },
        rewardText: "Scrapyard Plate Armor",
      },
    ],
  },
  // Dungeon-focused chain — clear order deliberately matches the
  // dungeons' own escalating riskMult (Vault 6.0, Halcyon 6.8, Drydock
  // 7.5), so the chain naturally paces alongside however the player
  // would realistically be approaching them anyway, not an arbitrary
  // order imposed on top of difficulty that doesn't match it.
  deepCountry: {
    id: "deepCountry",
    name: "Deep Country",
    desc: "Three places that used to be something else. Whoever's left when this is done knows exactly what's still down there, in all three.",
    steps: [
      {
        id: "clearVault",
        title: "The Vault",
        desc: "Beat The Teller, the Vault's own boss.",
        condition: () => !!STATE.bossesBeaten.vault,
        reward: { scrap: 70, gold: 25 },
        rewardText: "70 scrap, 25 gold",
      },
      {
        id: "clearHalcyon",
        title: "Site Halcyon",
        desc: "Beat Subject Seven, Site Halcyon's own boss.",
        condition: () => !!STATE.bossesBeaten.halcyon,
        reward: { scrap: 90, gold: 35, meds: 4 },
        rewardText: "90 scrap, 35 gold, 4 meds",
      },
      {
        id: "clearDrydock",
        title: "The Drydock",
        desc: "Beat The Keel, the Drydock's own boss.",
        condition: () => !!STATE.bossesBeaten.drydock,
        reward: { scrap: 110, gold: 45 },
        rewardText: "110 scrap, 45 gold",
      },
      {
        id: "allThreeKeys",
        title: "Every Door",
        desc: "Hold a key for all three dungeons at the same time — not spent, not used yet, all three sitting in the stash together.",
        condition: () => dungeonKeyCount("vault_key") > 0 && dungeonKeyCount("halcyon_key") > 0 && dungeonKeyCount("drydock_key") > 0,
        reward: { intel: 20 },
        rewardText: "20 intel",
      },
    ],
  },
  // Trader-focused chain — breadth across all three relationships
  // rather than depth in just one, since maxing a single trader is
  // already its own visible progress (the reputation bar). This chain
  // rewards actually doing business with everyone, not just whichever
  // trader happened to be most convenient.
  goodStanding: {
    id: "goodStanding",
    name: "Good Standing",
    desc: "Reputation isn't free anywhere. Three people who know your name now, for what that's worth out here.",
    steps: [
      {
        id: "anyTier2",
        title: "A Familiar Face",
        desc: "Reach Tier 2 with any one trader.",
        condition: () => Object.keys(TRADERS).some((id) => traderTier(id) >= 2),
        reward: { scrap: 50 },
        rewardText: "50 scrap",
      },
      {
        id: "anyTier3",
        title: "Good Word",
        desc: "Reach Tier 3 with any one trader.",
        condition: () => Object.keys(TRADERS).some((id) => traderTier(id) >= 3),
        reward: { scrap: 80, gold: 20 },
        rewardText: "80 scrap, 20 gold",
      },
      {
        id: "allThreeExclusive",
        title: "Known Everywhere",
        desc: "Reach every trader's exclusive threshold — Voss, Doc, and the Broker, all three.",
        condition: () => Object.keys(TRADERS).every((id) => traderExclusiveUnlocked(id)),
        reward: { gold: 150, intel: 10 },
        rewardText: "150 gold, 10 intel",
      },
    ],
  },
  // Leader-focused chain — deliberately designed so a Leader's death
  // doesn't block this from completing. Requiring a loss to progress
  // would be bad design (rewarding or requiring something the player
  // can't fully control and might actively be trying to avoid); instead
  // the final step branches on whichever is currently true, recognizing
  // either outcome rather than demanding one specific path.
  whosLeft: {
    id: "whosLeft",
    name: "Who's Left",
    desc: "Somebody has to be in charge. What that actually costs is a different question.",
    steps: [
      {
        id: "chooseLeader",
        title: "Someone's In Charge",
        desc: "Choose a camp Leader.",
        condition: () => STATE.leaderEverChosen,
        reward: { scrap: 40 },
        rewardText: "40 scrap",
      },
      {
        id: "leaderProven",
        title: "Proven",
        desc: "The current Leader personally survives 5 raids while holding the role.",
        condition: () => {
          if (!STATE.leaderScavId) return false;
          const leader = STATE.scavs.find((s) => s.id === STATE.leaderScavId);
          return !!leader && (leader.stats.raidsSurvived || 0) >= 5;
        },
        reward: { gold: 60 },
        rewardText: "60 gold",
      },
      {
        id: "leaderLegacy",
        title: "Who's Left",
        // No condition() that fails — this step completes the moment
        // it's reached. milestoneText (see checkQuestProgress) composes
        // the actual journal text at completion time instead of using
        // the generic generated message, since the real outcome here
        // depends on live state. Both outcomes are framed as worth
        // recognizing rather than one being the "real" ending and the
        // other a consolation — losing a Leader was never something
        // this chain required to finish, see the design note at the
        // top of this questline.
        desc: "Whatever's true about the Leader by now — still standing, or not — the camp remembers either way.",
        condition: () => true,
        reward: { gold: 80, meds: 5 },
        rewardText: "80 gold, 5 meds",
        milestoneText: () => {
          // leaderScavId is null the moment a Leader dies (see the
          // death-consequence code in resolveRaid), so a fallen Leader
          // has to be found via wasLeader instead — the one flag that
          // survives their death specifically so moments like this can
          // still reference who they were.
          if (STATE.leaderScavId) {
            const leader = STATE.scavs.find((s) => s.id === STATE.leaderScavId);
            const name = leader ? leader.name : "Whoever's leading now";
            return `"Who's Left" complete. ${name}'s still standing, still leading. 80 gold, 5 meds.`;
          }
          const fallen = STATE.scavs.find((s) => s.wasLeader && s.status === "dead");
          if (fallen) {
            return `"Who's Left" complete. ${fallen.name} didn't make it, but the camp's still here because of what they built before that. 80 gold, 5 meds.`;
          }
          return `"Who's Left" complete. Whoever's been leading, the camp's still standing. 80 gold, 5 meds.`;
        },
      },
    ],
  },
};

// Backfill-safe accessor — STATE.questProgress predates nothing yet
// (this is the first version with quests at all), but follows the same
// defensive pattern as getScavSkills/getStash for consistency with how
// every other lazily-initialized piece of state in this game is read.
function getQuestProgress() {
  if (!STATE.questProgress) STATE.questProgress = {};
  return STATE.questProgress;
}

// { stepIndex, completed } per questline id. stepIndex is which step is
// CURRENTLY active (0-based); completed is true once every step in the
// chain has been finished. A questline not yet present in questProgress
// is simply at stepIndex 0, not started — there's no separate
// "unlocked" state; every questline in QUESTLINES is active from the
// start, the same way the Codex's other tabs don't need to be unlocked
// before they're readable.
function getQuestState(questlineId) {
  const progress = getQuestProgress();
  if (!progress[questlineId]) {
    progress[questlineId] = { stepIndex: 0, completed: false };
  }
  return progress[questlineId];
}

// Checked from every place that already updates state a quest step
// might care about — resolveRaid (raids survived, boss kills),
// purchaseUpgrade (building tiers), startNewGamePlus (NG+ level),
// checkArenaTopStreak (leaderboard). Cheap to call liberally: walks
// every questline, and for each one not yet completed, checks only its
// current step's condition — never re-checks already-completed steps,
// never skips ahead even if a later step's condition happens to already
// be true (the chain is meant to be experienced in order, not just
// "whichever conditions you happen to satisfy first").
function checkQuestProgress() {
  for (const questline of Object.values(QUESTLINES)) {
    const state = getQuestState(questline.id);
    if (state.completed) continue;
    const step = questline.steps[state.stepIndex];
    if (!step) continue;
    if (!step.condition()) continue;

    if (step.reward) {
      if (step.reward.slot && step.reward.id) {
        addToStash(step.reward.slot, step.reward.id, 1);
      } else {
        for (const [res, amt] of Object.entries(step.reward)) {
          STATE.resources[res] = (STATE.resources[res] || 0) + amt;
        }
      }
    }

    const isLastStep = state.stepIndex >= questline.steps.length - 1;
    // milestoneText is optional — only Who's Left's final step uses it,
    // for a case where the actual journal text needs to reflect live
    // state (whether the Leader survived) rather than being fixed at
    // definition time the way every other step's generated text is.
    // Falls back to the same generated message every other step uses
    // when absent, so this doesn't change behavior for the other 3
    // questlines at all.
    if (isLastStep) {
      state.completed = true;
      const text = step.milestoneText ? step.milestoneText() : `"${questline.name}" complete. ${step.rewardText} — well-earned.`;
      queueMilestone(text);
    } else {
      state.stepIndex += 1;
      const text = step.milestoneText ? step.milestoneText() : `"${step.title}" done. ${step.rewardText}, and the next part of "${questline.name}" opens up.`;
      queueMilestone(text);
    }
    saveState();
  }
}


// One perk is chosen at every prestige — not a single choice made once,
// but a fresh pick every time NG+ is started, stacking permanently with
// every perk picked on a prior run. STATE.ngPlusPerks is the one other
// field (alongside ngPlusLevel) that survives freshState's reset on
// purpose — see startNewGamePlus and freshState's carryOver handling.
// Each perk is a flat, camp-wide passive rather than anything tied to a
// specific scav, since the whole roster (besides the one carried-over
// scav) is freshly recruited every run — a perk on the carried scav
// alone would mean most of a fresh NG+ roster never benefits from it at
// all, which defeats the point of making prestige itself feel like
// permanent progress.
const PRESTIGE_PERKS = {
  veteransResolve: {
    id: "veteransResolve",
    name: "Veteran's Resolve",
    desc: "Every scav — recruits included — starts with +10 max HP from here on.",
  },
  scroungersNetwork: {
    id: "scroungersNetwork",
    name: "Scrounger's Network",
    desc: "+10% loot from every raid, camp-wide, stacking with everything else.",
  },
  battleHardened: {
    id: "battleHardened",
    name: "Battle-Hardened",
    desc: "-15% injury severity, camp-wide, on top of any per-scav reduction.",
  },
  ironSupplyLines: {
    id: "ironSupplyLines",
    name: "Iron Supply Lines",
    desc: "-20% cost on every Infirmary and Barracks upgrade from here on.",
  },
  quickStart: {
    id: "quickStart",
    name: "Quick Start",
    desc: "Every future New Game+ run begins with 2 extra recruits already at camp instead of the usual fresh-roster pace.",
  },
  luckyBreak: {
    id: "luckyBreak",
    name: "Lucky Break",
    desc: "+5% gear find chance on every raid, camp-wide.",
  },
};

// Perks a fresh prestige run can actually offer — already-owned ones
// are excluded so the same pick can't be taken twice (no point in two
// stacks of the same flat bonus when there are 6 genuinely different
// ones to choose between instead). Once all 6 are owned, no further
// pick is offered at all — see renderPrestigeBody's handling of an
// empty list.
function getAvailablePrestigePerks() {
  const owned = new Set(STATE.ngPlusPerks || []);
  return Object.values(PRESTIGE_PERKS).filter((p) => !owned.has(p.id));
}

function hasPrestigePerk(id) {
  return (STATE.ngPlusPerks || []).includes(id);
}

// Costs gold, resets everything else about the camp, and carries forward
// exactly one chosen scav (kept exactly as they are — level, skills, XP,
// gear, all of it) plus up to 2 chosen items from the stash. Repeatable —
// each run stacks the difficulty/reward scaling further (see
// applyNgPlusScaling above).
const NG_PLUS_COST = { gold: 2000 };
// 2 items normally, 3 once the camp has reached NG+5 — see
// NG_PLUS_LEVEL_MILESTONES[5]. A function rather than a flat constant
// since the limit itself changes based on how deep the current run
// already is; every consumer below reads STATE.ngPlusLevel through
// this rather than a hardcoded number, so the carry limit is always
// correct no matter which prestige depth it's checked from.
function ngPlusMaxCarryItems() {
  return (STATE.ngPlusLevel || 0) >= 5 ? 3 : 2;
}

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
function startNewGamePlus(scavId, itemPicks, perkId) {
  if (!canAfford(NG_PLUS_COST)) return { ok: false, reason: "Not enough gold." };

  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav || scav.status === "dead") return { ok: false, reason: "Pick a living scav to carry forward." };

  const requestedPicks = itemPicks || [];
  if (requestedPicks.length > ngPlusMaxCarryItems()) return { ok: false, reason: `Only ${ngPlusMaxCarryItems()} items can come with you.` };
  const picks = requestedPicks;
  const eligible = getEligibleCarryOverItems();
  for (const itemPick of picks) {
    const match = eligible.find((e) => e.slot === itemPick.slot && e.id === itemPick.id);
    if (!match) return { ok: false, reason: "One of the picked items isn't eligible to carry over." };
  }

  // Perk pick is optional only once every perk has already been earned
  // (getAvailablePrestigePerks returns empty) — otherwise required, same
  // as the scav pick above, so a run can't accidentally skip past a
  // choice that's still actually available.
  const availablePerks = getAvailablePrestigePerks();
  if (availablePerks.length > 0) {
    if (!perkId || !PRESTIGE_PERKS[perkId] || hasPrestigePerk(perkId)) {
      return { ok: false, reason: "Pick a perk for this run." };
    }
  }

  spend(NG_PLUS_COST);

  const newPerks = perkId && PRESTIGE_PERKS[perkId] && !hasPrestigePerk(perkId)
    ? [...(STATE.ngPlusPerks || []), perkId]
    : (STATE.ngPlusPerks || []);

  const carryOver = {
    scav: { ...scav, status: "ready" }, // always arrives ready, regardless of what they were doing the moment prestige was confirmed
    items: picks.map((p) => ({ slot: p.slot, id: p.id })),
    ngPlusLevel: (STATE.ngPlusLevel || 0) + 1,
    ngPlusPerks: newPerks,
    // Carried through deliberately — the chain's final step is "reach
    // NG+1," and the player is in the middle of doing exactly that
    // right now. Checking quest progress before the wipe (against the
    // about-to-be-destroyed old state) and after (against the fresh
    // state) are NOT equivalent here: the final step's reward grants
    // gear via addToStash, and the old state's stash is destroyed the
    // moment freshState runs — granting the reward before the wipe
    // would mean it's gone the instant it's given. See the
    // checkQuestProgress() call below, placed after the reset for
    // exactly the same reason NG_PLUS_LEVEL_MILESTONES is checked
    // after it rather than before.
    questProgress: STATE.questProgress,
    // Survives the wipe the same way questProgress does, and for the
    // same structural reason freshState's own comment explains —
    // research is permanent camp knowledge, not the spendable intel
    // used to earn it (which correctly resets along with every other
    // resource, untouched by this carryOver object at all).
    research: STATE.research,
    // Survives the wipe the same way research/questProgress do
    traderReputation: STATE.traderReputation,
    // Only the buildings sub-object, not all of STATE.outpost — see
    // freshState's own comment on why assignedScavIds is deliberately
    // left out of what survives a prestige reset.
    outpostBuildings: STATE.outpost ? STATE.outpost.buildings : null,
  };

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Could not clear save before prestige:", e);
  }
  STATE = freshState(carryOver);
  applyNgPlusScaling();
  // NG+ level milestones — queued against the fresh STATE (after the
  // reset above), since queuing against the old STATE before the wipe
  // would just be discarded along with everything else freshState
  // replaces. NG_PLUS_LEVEL_MILESTONES below maps specific levels to
  // both a journal line and what that level actually unlocks.
  const levelMilestone = NG_PLUS_LEVEL_MILESTONES[carryOver.ngPlusLevel];
  if (levelMilestone) {
    queueMilestone(levelMilestone.text);
  }
  checkQuestProgress();
  selectedScavId = null;
  selectedMapId = null;
  selectedRooms = [];
  selectedDungeonId = null;
  dungeonGroup = [];
  arenaScavId = null;
  raidScreenOpen = false;
  AmbientPlayer.stop();
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
    lore: [
      "Nobody at camp agrees on what he did before. A few say enforcer. One says landlord, and means it as the worse insult of the two.",
      "He doesn't run the lot so much as occupy it completely — every car husk, every overturned trailer, arranged like he's still expecting customers.",
      "The strange part isn't that he's still here. It's that he still keeps the place orderly, like someone might come back and need it kept that way.",
    ],
  },
  marina: {
    name: "The Harbormaster",
    desc: "Nobody remembers her actual name anymore — just that she still keeps the docks, and doesn't like visitors touching her boats.",
    lore: [
      "There's a logbook in the harbormaster's shack, still being kept. Nobody's gotten close enough to read the most recent entries.",
      "The boats haven't moved in years. She still checks the lines every night, same hour, same route down the pier.",
      "Maybe she's waiting for someone. Maybe she just doesn't know there's nothing left to wait for. Either way, she's not leaving the dock.",
    ],
  },
  depot: {
    name: "Rivet",
    desc: "Built out of salvage and spite, Rivet doesn't talk — it just comes through the containers after whoever's inside them.",
    lore: [
      "Whoever welded Rivet together knew what they were doing. It's not pretty, but every plate overlaps the next, and nothing about it rattles when it moves.",
      "It doesn't patrol so much as wait — folded into the containers, motionless, until something inside one of them is worth standing up for.",
      "The yard workers who built it are long gone. Whatever instructions they left it with, it's still following them to the letter.",
    ],
  },
  farmstead: {
    name: "Old Man Thresher",
    desc: "Whoever he used to be, he's been out among the silos so long the grass moves with him before you ever see him.",
    lore: [
      "Older scavs say he used to actually farm this land, before. Younger ones say that's just a story to make him sound less like what he is now.",
      "He doesn't come to you. The grass does — and by the time you notice it's moving wrong, he's already closer than the sound ever was.",
      "There's a scarecrow out past the third silo wearing clothes too clean for this place. Nobody's checked if it's actually a scarecrow.",
    ],
  },
  suburb: {
    name: "Jack \"The Watchman\" Cole",
    desc: "He's been watching this street long enough to know every angle of approach — and every way out.",
    lore: [
      "Cole used to run neighborhood watch here, back when there was a neighborhood and something worth watching it for.",
      "He knows this street better than anyone alive, because he's the only one who never left it. Every fence line, every blind corner, every roof someone could drop from.",
      "He doesn't shoot first. He waits to see if you're smart enough to notice he's already decided where you're going to run.",
    ],
  },
  hospital: {
    name: "Pavel \"Bonesaw\" Orlov",
    desc: "Whatever he was before, the wards made him into something that doesn't stop coming once it's found you.",
    lore: [
      "There's a name tag still pinned to what's left of his coat. Half the letters are gone. Nobody's gotten close enough to read what remains twice.",
      "He moves through St. Aldric's like he still has rounds to make. Maybe he does, in whatever's left of his head.",
      "The wards he haunts are the ones that never got evacuated. Make of that what you will.",
    ],
  },
  precinct: {
    name: "The Verdict",
    desc: "Self-appointed judge of whoever wanders into the holding cells. It doesn't take long to reach a decision.",
    lore: [
      "It wears what's left of a uniform, but nothing about how it moves says officer. More like it found the uniform and decided to grow into the job.",
      "The 16th's holding cells are the one part of the building it never lets sit empty for long.",
      "Scavs who've made it out say it doesn't chase so much as preside — like the verdict was always going to be the same, and the chase is just procedure.",
    ],
  },
  metro: {
    name: "Conductor",
    desc: "Something still rides the dead line between stations, and it's never once let a train run empty.",
    lore: [
      "The line's been dead for years. Conductor doesn't seem to know that, or doesn't care — it still makes every stop, right on whatever schedule it's keeping in its head.",
      "Nobody's seen it clearly enough to say what it actually looks like. Just the uniform, and the lantern, and the sound of it counting passengers that aren't there.",
      "It's never been seen above ground. Whatever Underline used to be carrying people toward, Conductor's still making sure somebody gets there.",
    ],
  },
  tower: {
    name: "The Overlook",
    desc: "Forty floors up, something has made the penthouse its own — and it can see you coming from every window.",
    lore: [
      "Vantage Tower's top floor used to be the kind of address people fought to get into. Something's still fighting to keep it.",
      "It doesn't come down to the lower floors. It doesn't have to — every window in that penthouse faces a different angle of the climb up.",
      "Scavs who've made the forty-floor climb and lived say the worst part isn't the fight. It's realizing partway up that it's been watching the whole way.",
    ],
  },
  refinery: {
    name: "The Furnace",
    desc: "The thing living in Blackpine's old boiler room doesn't need to chase you. It just needs you to stay long enough.",
    lore: [
      "Nobody's sure if it's a person who never left the boiler room or something the boiler room eventually grew on its own.",
      "It doesn't move fast and it doesn't move far. It just keeps the room hot enough that staying becomes the actual threat, not it.",
      "The refinery's been cold and dead everywhere except that one room for as long as anyone's scavenged it. That room's never once gone cold.",
    ],
  },
  drowned: {
    name: "The Tide",
    desc: "Nobody agrees on what it actually is, only that the water rises a little whenever it's close, and it's always close down here.",
    lore: [
      "Half the scavs who've seen it call it a person. The other half won't call it anything at all.",
      "The flooded blocks rise and fall on their own schedule, tide or no tide. Camp's stopped pretending that's a coincidence.",
      "It's never been seen on dry ground. Whatever it is, it doesn't seem to need to be.",
    ],
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
    lore: [
      "There's no body to find. Whatever The Teller actually is, it's built into the vault itself — wiring, plating, whatever's left of the original security system.",
      "It doesn't speak, but the vault door cycles through the same sequence every time something gets close: lock, check, deny. Over and over, like it's still expecting someone with the right code to eventually show up.",
      "Nobody who's beaten it has figured out what was actually worth protecting in there in the first place. The vault's contents stopped mattering to anyone but The Teller a long time ago.",
    ],
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
    lore: [
      "The records in the upper levels are burned past reading. Whatever Halcyon was actually for, Seven's the only thing left that might still know.",
      "Six other subject numbers are referenced in what's left of the paperwork. None of them are anywhere in the facility. Seven is the only one anyone's ever found.",
      "It doesn't attack like something defending territory. It attacks like something that's been alone with the dark for a very long time and finally has someone to talk to.",
    ],
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
    lore: [
      "Nobody who's gone deep enough into the hulk to see it clearly has come back able to describe where it actually begins or ends.",
      "It doesn't seem to live in the ship so much as be becoming the ship, one flooded compartment at a time.",
      "The Drydock's tide rises faster than any tide should. Camp's working theory is that's not weather. That's the Keel, deciding how much time you get.",
    ],
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
//
// Each map id maps to an ARRAY of possible drops, not a single item —
// most maps only ever have one entry, but a boss can have more than one
// named unique to its name (see depot's Stormbreaker, added alongside
// Rivet's Plating). resolveBossKillDrop still rolls BOSS_UNIQUE_DROP_CHANCE
// only once per kill regardless of pool size, then picks one at random
// from whichever map's pool — so a boss with two possible drops doesn't
// also become twice as likely to drop *something* compared to one with
// only a single unique to its name; it just has more variety in what
// that something turns out to be.
const BOSS_UNIQUE_DROP_CHANCE = 0.12; // chance per successful boss kill
const BOSS_UNIQUE_CATALOG = {
  lot: [{ slot: "weapon", id: "kingpin_iron", name: "Kingpin's Iron", tier: 5, unique: true, combat: 30,
    desc: "Pried from the Kingpin's grip. Still warm, somehow — a souvenir from the last lot rat who ever tried to run this place." }],
  marina: [{ slot: "pack", id: "harbormaster_satchel", name: "Harbormaster's Satchel", tier: 5, unique: true, lootBonus: 0.5,
    desc: "Waxed canvas and brass fittings, salt-stained from decades on the docks. Whatever she used to carry her own hauls in." }],
  depot: [
    { slot: "armor", id: "rivet_plating", name: "Rivet's Plating", tier: 5, unique: true, defense: 28,
      desc: "Scavenged container steel, welded into something that used to be a person and now just stops bullets." },
    { slot: "weapon", id: "stormbreaker", name: "Stormbreaker", tier: 5, unique: true, combat: 36,
      desc: "A sturdy hammer with a viking head carved into the side, whoever previously owned this thing loves to bonk." },
  ],
  farmstead: [{ slot: "weapon", id: "threshers_scythe", name: "Thresher's Scythe", tier: 5, unique: true, combat: 32,
    desc: "Still sharp. Still smells like the silo. Nobody at camp wants to ask how he kept the edge on it this long." }],
  suburb: [{ slot: "armor", id: "watchmans_coat", name: "The Watchman's Coat", tier: 5, unique: true, defense: 26,
    desc: "Lined with scavenged Kevlar scraps under the lining. He always said he could see every angle coming — this is how." }],
  hospital: [{ slot: "pack", id: "bonesaw_kit", name: "Bonesaw's Kit", tier: 5, unique: true, lootBonus: 0.55,
    desc: "A surgeon's roll-bag, repurposed. Still has his tools in the side pocket. Nobody's cleaned it, and nobody plans to." }],
  precinct: [{ slot: "weapon", id: "verdicts_gavel", name: "The Verdict's Gavel", tier: 5, unique: true, combat: 34,
    desc: "A length of riot baton, scarred from use. Whatever case it was meant to close, it isn't closing any more." }],
  metro: [{ slot: "armor", id: "conductors_coat", name: "Conductor's Coat", tier: 5, unique: true, defense: 30,
    desc: "Transit-issue, decades out of date, and somehow still holding together better than the line it used to run." }],
  tower: [{ slot: "pack", id: "overlook_case", name: "The Overlook's Case", tier: 5, unique: true, lootBonus: 0.6,
    desc: "A forty-floor commute's worth of paperwork, still inside. Whatever was worth keeping up there, it's yours now." }],
  refinery: [{ slot: "weapon", id: "furnace_poker", name: "The Furnace's Poker", tier: 5, unique: true, combat: 38,
    desc: "Pulled from Blackpine's boiler room still glowing at one end. It's cooled down. Mostly." }],
  drowned: [{ slot: "armor", id: "tides_shell", name: "The Tide's Shell", tier: 5, unique: true, defense: 32,
    desc: "Waterlogged plate, fused with barnacle and rust into something closer to armor than scrap has any right to be." }],
  // Dungeon boss uniques — tier 6, one notch above every regular boss
  // unique above (tier 5). Same drop mechanics (resolveBossKillDrop,
  // BOSS_UNIQUE_DROP_CHANCE), just sitting at the top of the gear ladder
  // to match what it actually takes to get a shot at them: a key, a full
  // 3-scav group, and surviving a fight that's never optional.
  vault: [{ slot: "weapon", id: "tellers_drawer", name: "The Teller's Drawer", tier: 6, unique: true, combat: 46,
    desc: "Pried off whatever was left of the vault's last line of defense. Heavier than it looks, and it never once misfires." }],
  halcyon: [{ slot: "armor", id: "subject_sevens_husk", name: "Subject Seven's Husk", tier: 6, unique: true, defense: 41,
    desc: "Whatever Halcyon was building Seven into, this is the part of it that came off intact. Nobody's figured out what it's made of, only that it works." }],
  drydock: [{ slot: "pack", id: "keels_hold", name: "The Keel's Hold", tier: 6, unique: true, lootBonus: 0.8,
    desc: "Pulled from somewhere deep in the hulk, barnacled shut for who knows how long. Whatever the Keel was guarding, this is what's left of it." }],
};

// Returns the full pool of possible unique drops for a map (an array),
// or null if that map has no boss unique at all. Callers that want a
// single random pick from the pool (resolveBossKillDrop) should use
// pick() on the result themselves rather than this function assuming
// that for them — the Codex's item listing wants every entry in the
// pool, not just one, so this stays the raw array.
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
  for (const drop of BOSS_UNIQUE_CATALOG[mapId]) {
    GEAR_CATALOG[drop.slot].push({ ...drop, cost: null, bossMapId: mapId });
  }
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
  {
    id: "unstable_floor",
    title: "Unstable Floor",
    desc: "The floor ahead gives a little under the first step, the kind of give that means everything below it isn't load-bearing anymore.",
    minRisk: 2.5,
    options: [
      { label: "Cross it fast, one at a time", detail: "Less time for it to fail under anyone specifically — more chances for it to fail at all.", effect: { timeAddSec: -10, survivalAdd: -0.1, injuryRiskAdd: 0.16 } },
      { label: "Test it with whatever's nearby first", detail: "Throw something heavy ahead, see what happens to the floor before anyone's standing on it.", effect: { timeAddSec: 30, survivalAdd: 0.05 } },
      { label: "Find a way around", detail: "Slower, but the floor stops being anyone's problem.", effect: { timeAddSec: 40, lootMult: 0.85 } },
    ],
  },
  {
    id: "sealed_vault_room",
    title: "Sealed Room",
    desc: "A door that was meant to stay shut, with a reason stenciled on it that's worn away to nothing readable.",
    minRisk: 3,
    options: [
      { label: "Break the seal and go in", detail: "Whatever kept this shut is about to stop mattering.", effect: { timeAddSec: 20, survivalAdd: -0.12, lootMult: 1.9 } },
      { label: "Check what's stenciled on it first", detail: "Most of it's gone, but not all of it. Worth the extra look.", effect: { timeAddSec: 25, survivalAdd: 0.04, lootMult: 1.3 } },
      { label: "Leave it sealed", detail: "Somebody shut this on purpose. That's reason enough.", effect: { survivalAdd: 0.07 } },
    ],
  },
  {
    id: "collapsed_stairwell",
    title: "Collapsed Stairwell",
    desc: "The way down used to be stairs. Now it's a drop, with enough debris still hanging that the rest could come loose at any point.",
    minRisk: 3.5,
    options: [
      { label: "Climb down through it", detail: "Direct, and exactly as risky as it looks.", effect: { timeAddSec: -15, survivalAdd: -0.16, injuryRiskAdd: 0.2 } },
      { label: "Rig a rope and lower down carefully", detail: "Takes real setup time, but it's controlled instead of a fall.", effect: { timeAddSec: 45, survivalAdd: 0.08 } },
      { label: "Find another route down", detail: "There's usually one, somewhere. Takes time to find it.", effect: { timeAddSec: 35, lootMult: 0.9 } },
    ],
  },
  {
    id: "live_wiring",
    title: "Live Wiring",
    desc: "Power that shouldn't still be running, running anyway — exposed, sparking, and exactly in the way of where this needs to go.",
    minRisk: 4,
    options: [
      { label: "Push past it fast", detail: "A few seconds in the open is a few seconds too many, but it's still just seconds.", effect: { timeAddSec: -10, survivalAdd: -0.14, injuryRiskAdd: 0.18 } },
      { label: "Cut the power at the source first", detail: "Takes time to trace it back, but it's the actual fix.", effect: { timeAddSec: 35, survivalAdd: 0.06 } },
      { label: "Route around through another section", detail: "Longer, but nobody has to walk past it at all.", effect: { timeAddSec: 30, lootMult: 0.9 } },
    ],
  },
  {
    id: "buried_cache",
    title: "Buried Cache",
    desc: "Something's been deliberately hidden here — sealed, weighted down, and built to survive whoever buried it not coming back for it.",
    minRisk: 4.5,
    options: [
      { label: "Dig it out completely", detail: "Whoever buried this meant for it to last. Getting it all out takes time.", effect: { timeAddSec: 40, lootMult: 2.2, survivalAdd: -0.06 } },
      { label: "Take what's accessible and move on", detail: "Not everything, but enough, and faster.", effect: { timeAddSec: 15, lootMult: 1.4 } },
      { label: "Leave it — whoever buried this might come back", detail: "Not every find is worth whatever buried it in the first place.", effect: { survivalAdd: 0.05 } },
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
  {
    id: "trapper",
    title: "Trapper's Snare",
    enemy: true,
    enemyName: "Trapper",
    desc: "A tripwire, half-hidden — and whoever set it isn't far, watching to see who's dumb enough to walk into their own work.",
    minRisk: 1.5,
    options: [
      { label: "Disarm it and wait for them", detail: "Turn their own setup around — works better than it should, when it works.", effect: { timeAddSec: 20, survivalAdd: -0.06, injuryRiskAdd: 0.08, lootMult: 1.3 } },
      { label: "Step around it carefully", detail: "Slow going, but the trap stays exactly somebody else's problem.", effect: { timeAddSec: 25, survivalAdd: 0.05 } },
      { label: "Trip it on purpose from a safe angle", detail: "Loud, and it tells the trapper exactly where you are, but at least it's not where you're standing.", effect: { timeAddSec: 5, survivalAdd: -0.04 } },
    ],
  },
  {
    id: "nest_swarm",
    title: "Nest Swarm",
    enemy: true,
    enemyName: "Nest Swarm",
    desc: "Whatever's nesting in the walls here doesn't care that you're bigger — there's a lot more of it than there is of you.",
    minRisk: 2.1,
    options: [
      { label: "Smoke them out and push through", detail: "Buys clear air fast, but it announces exactly where you are to anything else listening.", effect: { timeAddSec: -10, survivalAdd: -0.1, injuryRiskAdd: 0.16, lootMult: 1.3 } },
      { label: "Seal the gap and go the long way", detail: "Costs real time, but a sealed nest is a nest that stays somebody else's problem.", effect: { timeAddSec: 35, survivalAdd: 0.05 } },
      { label: "Move fast and don't stop", detail: "A few stings either way. Better than standing still.", effect: { timeAddSec: -15, survivalAdd: -0.13, injuryRiskAdd: 0.14, lootMult: 1.1 } },
    ],
  },
  {
    id: "sniper_nest",
    title: "Sniper's Nest",
    enemy: true,
    enemyName: "Rooftop Sniper",
    desc: "A glint up high that wasn't there a second ago — somebody's got a line on this whole stretch and isn't shy about using it.",
    minRisk: 2.9,
    options: [
      { label: "Sprint between cover", detail: "A hard target moves fast. Doesn't mean a miss is guaranteed.", effect: { timeAddSec: -15, survivalAdd: -0.16, injuryRiskAdd: 0.18, lootMult: 1.4 } },
      { label: "Wait for them to lose interest", detail: "Nobody holds a scope forever. Patience costs time, not blood.", effect: { timeAddSec: 40, survivalAdd: 0.07 } },
      { label: "Find an angle they can't cover", detail: "Takes longer, and it isn't always there to find.", effect: { timeAddSec: 20, survivalAdd: -0.02 } },
    ],
  },
  {
    id: "zealot_circle",
    title: "Zealot Circle",
    enemy: true,
    enemyName: "Zealot Circle",
    desc: "Whatever they're chanting around isn't in any language worth knowing, and they've all turned to look at once.",
    minRisk: 3.8,
    options: [
      { label: "Break the circle by force", detail: "However many of them there are, fewer once you're through.", effect: { survivalAdd: -0.22, injuryRiskAdd: 0.26, lootMult: 1.8 } },
      { label: "Back out the way you came", detail: "Whatever they're doing isn't worth finding out about up close.", effect: { timeAddSec: 30, survivalAdd: 0.06 } },
      { label: "Wait for the chant to break", detail: "It has to end sometime. Standing still while it does is the hard part.", effect: { timeAddSec: 45, survivalAdd: 0.02, lootMult: 1.2 } },
    ],
  },
  {
    id: "drowned_chorus",
    title: "Drowned Chorus",
    enemy: true,
    enemyName: "Drowned Chorus",
    desc: "Something under the waterline is singing, low and wrong, and the water's rising faster than the tide explains.",
    minRisk: 4.8,
    options: [
      { label: "Push through before it rises further", detail: "Whatever's making that sound doesn't seem to like being approached fast.", effect: { timeAddSec: -20, survivalAdd: -0.24, injuryRiskAdd: 0.24, lootMult: 1.7 } },
      { label: "Climb to higher ground and wait it out", detail: "The water always recedes eventually. The singing takes longer.", effect: { timeAddSec: 50, survivalAdd: 0.08 } },
      { label: "Follow the sound to its source", detail: "Reckless, and occasionally rewarded for it.", effect: { timeAddSec: 15, survivalAdd: -0.18, lootMult: 2.1 } },
    ],
  },
  {
    id: "vault_sentinel",
    title: "Vault Sentinel",
    enemy: true,
    enemyName: "Vault Sentinel",
    desc: "Something built specifically to be down here, still running whatever program it was given long after anyone who gave it stopped mattering.",
    minRisk: 6.2,
    options: [
      { label: "Take it head-on", detail: "It's old, but it was built to last. So, increasingly, are you.", effect: { survivalAdd: -0.26, injuryRiskAdd: 0.28, lootMult: 2.2 } },
      { label: "Find its blind spot", detail: "Whatever built it didn't plan for everything. Finding the gap takes time.", effect: { timeAddSec: 40, survivalAdd: -0.04, lootMult: 1.5 } },
      { label: "Retreat to a sealed section", detail: "Sentinels don't open doors. That's still true even when you're the one closing them.", effect: { timeAddSec: 30, survivalAdd: 0.09 } },
    ],
  },

  // ===== VAULT-SPECIFIC EVENTS =====
  {
    id: "vault_laser_grid",
    dungeonId: "vault",
    title: "Laser Grid",
    desc: "A security grid that nobody turned off — still sweeping the corridor in the same patient pattern it's been running since before the collapse.",
    minRisk: 6.0,
    options: [
      { label: "Time the pattern and move through", detail: "A minute of watching tells you everything. A second of distraction tells you nothing good.", effect: { timeAddSec: 30, survivalAdd: -0.08, lootMult: 1.6 } },
      { label: "Find a maintenance panel and cut power", detail: "Slow, loud if you get it wrong, and the panel's probably around a corner you can't see from here.", effect: { timeAddSec: 50, survivalAdd: -0.04, lootMult: 1.3 } },
      { label: "Find another route", detail: "These things were put here for a reason. Going around is slower, but whatever's on the other side will still be there.", effect: { timeAddSec: 40, survivalAdd: 0.06 } },
    ],
  },
  {
    id: "vault_sealed_chamber",
    dungeonId: "vault",
    title: "Sealed Chamber",
    desc: "A door with a keypad that still has power — still showing a green light, still waiting for a code that somebody left behind somewhere in here.",
    minRisk: 6.0,
    options: [
      { label: "Search the area for the code", detail: "Banks wrote these things down. Somebody always wrote them down.", effect: { timeAddSec: 45, lootMult: 2.2, survivalAdd: -0.02 } },
      { label: "Force the door", detail: "Loud, slow, and the vault's air will tell everything still living in here exactly where you are.", effect: { timeAddSec: 15, survivalAdd: -0.15, injuryRiskAdd: 0.12, lootMult: 1.9 } },
      { label: "Leave it and move on", detail: "Whatever's in there has been in there since before everything fell apart. It can stay.", effect: { timeAddSec: -10, survivalAdd: 0.04 } },
    ],
  },
  {
    id: "vault_currency_cache",
    dungeonId: "vault",
    title: "Old Currency Cache",
    desc: "A room full of pre-collapse paper money — worthless for most things, but the gold reserve beneath it is another matter entirely.",
    minRisk: 6.0,
    options: [
      { label: "Take as much gold as you can carry", detail: "Heavy, and you'll be moving slower. Worth it if you make it out.", effect: { timeAddSec: 20, lootMult: 2.5, survivalAdd: -0.1 } },
      { label: "Take a manageable amount and keep moving", detail: "The right call and you already know it.", effect: { lootMult: 1.6, survivalAdd: 0.02 } },
      { label: "Photograph the serial numbers and leave it", detail: "Nobody to sell the information to, but the information is still good to have.", effect: { timeAddSec: -5, survivalAdd: 0.05 } },
    ],
  },

  // ===== SITE HALCYON-SPECIFIC EVENTS =====
  {
    id: "halcyon_containment_door",
    dungeonId: "halcyon",
    title: "Containment Door",
    desc: "A door rated for something that apparently needed containing — the indicator light is red, but the scratches on the far side of the porthole aren't recent.",
    minRisk: 6.8,
    options: [
      { label: "Check the porthole before opening", detail: "Whatever left those scratches did it a long time ago. That doesn't mean you stop checking.", effect: { timeAddSec: 20, survivalAdd: 0.05 } },
      { label: "Open it fast and deal with what's inside", detail: "Slow is how you get surprised. Fast is how you stay in control of the situation, assuming the situation cooperates.", effect: { timeAddSec: -10, survivalAdd: -0.18, injuryRiskAdd: 0.22, lootMult: 1.8 } },
      { label: "Leave it sealed", detail: "Somebody rated that door for a reason. The reason is probably still in there.", effect: { timeAddSec: 15, survivalAdd: 0.08 } },
    ],
  },
  {
    id: "halcyon_abandoned_experiment",
    dungeonId: "halcyon",
    title: "Abandoned Lab",
    desc: "A row of workbenches, still set up — whatever they were testing mid-run when the lights went out is still sitting exactly where they left it.",
    minRisk: 6.8,
    options: [
      { label: "Collect whatever samples are still stable", detail: "Most of it isn't. The rest is worth something to someone who'd know what to do with it.", effect: { timeAddSec: 30, lootMult: 2.0, injuryRiskAdd: 0.16 } },
      { label: "Photograph everything and leave it untouched", detail: "The knowledge is worth more than whatever's in the vials. Safer, too.", effect: { timeAddSec: 15, lootMult: 1.2, survivalAdd: 0.03 } },
      { label: "Neutralize anything that looks unstable and move on", detail: "Takes time and the protocol's mostly guesswork at this point, but leaving it running isn't the answer either.", effect: { timeAddSec: 35, survivalAdd: 0.07 } },
    ],
  },
  {
    id: "halcyon_automated_system",
    dungeonId: "halcyon",
    title: "Active Protocol",
    desc: "A PA system crackles on and starts reading out a shutdown procedure for something — in a language that isn't any language anyone in the group recognizes.",
    minRisk: 6.8,
    options: [
      { label: "Follow the prompts and see what it shuts down", detail: "Could be the grid. Could be the air supply. No way to know until you press the key.", effect: { survivalAdd: -0.12, lootMult: 1.7, injuryRiskAdd: 0.1 } },
      { label: "Ignore it and push deeper while it's distracted", detail: "Whatever it's talking to isn't you. Use that.", effect: { timeAddSec: -15, survivalAdd: -0.06, lootMult: 1.4 } },
      { label: "Kill power to the whole floor and go dark", detail: "Whatever it controls stops. So does your visibility. Even trade until it isn't.", effect: { timeAddSec: 25, survivalAdd: 0.06 } },
    ],
  },

  // ===== DRYDOCK-SPECIFIC EVENTS =====
  {
    id: "drydock_flooding_bulkhead",
    dungeonId: "drydock",
    title: "Flooding Bulkhead",
    desc: "A section of corridor with six inches of standing water that wasn't there before — and a seal somewhere ahead that isn't holding the way it should be.",
    minRisk: 7.5,
    options: [
      { label: "Wade through fast before it gets worse", detail: "Cold, loud, and whatever's sharing the water with you can feel the movement.", effect: { timeAddSec: -20, survivalAdd: -0.2, injuryRiskAdd: 0.2, lootMult: 1.5 } },
      { label: "Find the failing seal and brace it", detail: "Buys time. Not a fix, but enough of one.", effect: { timeAddSec: 40, survivalAdd: 0.08 } },
      { label: "Take the upper maintenance walkway", detail: "Not on any map you've seen, but it's there. Slower and noisier, but dry.", effect: { timeAddSec: 25, survivalAdd: 0.04 } },
    ],
  },
  {
    id: "drydock_seized_machinery",
    dungeonId: "drydock",
    title: "Seized Engine Room",
    desc: "The main drive shaft has been sitting here so long the metal's fused with the hull — and something's been using the cavity as a nest for considerably less time than that.",
    minRisk: 7.5,
    options: [
      { label: "Clear the nest before it becomes a problem", detail: "Whatever built it doesn't go quietly. Neither would you.", effect: { survivalAdd: -0.16, injuryRiskAdd: 0.2, lootMult: 1.6 } },
      { label: "Move through the far side carefully", detail: "Stay low, stay quiet, stay between the machinery. Don't look at the nest.", effect: { timeAddSec: 20, survivalAdd: -0.05, lootMult: 1.2 } },
      { label: "Backtrack and find the secondary passage", detail: "Longer, but the engine room doesn't have to be your problem today.", effect: { timeAddSec: 35, survivalAdd: 0.07 } },
    ],
  },
  {
    id: "drydock_crew_remains",
    dungeonId: "drydock",
    title: "The Crew",
    desc: "They're still at their stations. Whoever they were before the collapse, they ended up here, at their posts, and here they stayed. Some of them are still in uniform.",
    minRisk: 7.5,
    options: [
      { label: "Search the remains and the stations", detail: "They might have minded, once. They don't anymore.", effect: { timeAddSec: 25, lootMult: 2.0, survivalAdd: -0.04 } },
      { label: "Check only the officer's quarters", detail: "Officers carry the useful things. The crew carries more of the same.", effect: { timeAddSec: 15, lootMult: 1.4, survivalAdd: 0.02 } },
      { label: "Leave them be", detail: "They're not going anywhere. Neither is the instinct to leave people to their dignity.", effect: { timeAddSec: -10, survivalAdd: 0.05 } },
    ],
  },
  {
    id: "the_returned",
    title: "The Returned",
    enemy: true,
    enemyName: "The Returned",
    desc: "Something that's been here before — not this site, not this collapse, but a version of it. It looks at the group like it's already seen how this goes, and isn't impressed.",
    minRisk: 1.0,
    ngPlusMinLevel: 3,
    options: [
      { label: "Fight it on your own terms this time", detail: "Whatever happened before, this isn't that anymore. Prove it.", effect: { survivalAdd: -0.3, injuryRiskAdd: 0.3, lootMult: 2.4 } },
      { label: "Refuse to engage with it at all", detail: "It wants a fight that already happened. Don't give it one.", effect: { timeAddSec: 35, survivalAdd: 0.1 } },
      { label: "Push past before it decides what this is", detail: "Whatever it's deciding, it hasn't decided yet.", effect: { timeAddSec: 5, survivalAdd: -0.12, lootMult: 1.6 } },
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
  return RAID_EVENTS.filter((e) => {
    if (map.riskMult < e.minRisk) return false;
    // Dungeon-specific events only appear in their designated dungeon —
    // an event tagged dungeonId:"vault" never fires at Site Halcyon or
    // anywhere on the surface, even if the risk numbers would otherwise
    // qualify it. The reverse is also true: general events still fire
    // in dungeons unless they have a dungeonId restriction.
    if (e.dungeonId && e.dungeonId !== map.id) return false;
    // NG+-exclusive events never appear before the camp has reached
    // that prestige depth, same shape as dungeonId's restriction above
    // — an absent field means no restriction at all, present means a
    // hard gate regardless of how dangerous the map is on its own.
    if (e.ngPlusMinLevel && (STATE.ngPlusLevel || 0) < e.ngPlusMinLevel) return false;
    return true;
  });
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
    desc: "Speeds up scav recovery time. Fully built out, it also cuts the meds cost of treatment.",
    lore: "A back room turned sick bay, stocked with whatever meds the camp can spare. Nobody trained for this — they learned because somebody had to.",
    maxLevel: 6,
    baseCost: { scrap: 30, gold: 5 },
    costMult: 1.9,
    // Recovery speed maxes out at level 5 (infirmaryTimeMult's own
    // floor) — level 6 grants a flat -1 meds cost instead of more speed
    // that would silently do nothing, see infirmaryMedsCostFlatDiscount.
    effect: (lvl) => lvl >= 6 ? `+${Math.min(lvl, 5) * 15}% Recovery Speed, -1 meds cost` : `+${lvl * 15}% Recovery Speed`,
  },
  {
    id: "armory",
    name: "Armory",
    track: "gear",
    desc: "Raises the ceiling on what tier of gear your scavs can turn up on a raid. Fully built out, it also makes finding gear at all more likely.",
    lore: "Racks and lockers for whatever's worth keeping. The better the Armory, the more your scavs know what real gear looks like when they see it out there.",
    maxLevel: 5,
    baseCost: { scrap: 50, gold: 10 },
    costMult: 2.1,
    // Tier-unlock effect tops out functionally at level 4 (tier 5 unlock
    // covers every gear tier that actually exists) — level 5 grants a
    // flat +5% gear find chance instead, see ARMORY_TIER5_FIND_CHANCE_BONUS.
    effect: (lvl) => lvl === 0 ? "Basic gear only — build to find better tiers" : lvl >= 5 ? `Tier ${Math.min(lvl, 4) + 1} gear can now be found, +5% find chance` : `Tier ${lvl + 1} gear can now be found`,
  },
  {
    id: "scoutTower",
    name: "Scout Tower",
    track: "intel",
    desc: "Reveals precise survival odds before launch and improves loot rolls.",
    lore: "A jury-rigged platform with a clear line of sight over the camp and beyond. Whoever's on watch up there has talked more than one raid out of going in blind.",
    maxLevel: 4,
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
    maxLevel: 5,
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
    maxLevel: 5,
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
    maxLevel: 4,
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
    maxLevel: 6,
    baseCost: { scrap: 35, gold: 6 },
    costMult: 1.9,
    effect: (lvl) => lvl === 0 ? "Not built — no food production" : `+${FARM_FOOD_PER_LEVEL * lvl} food per day`,
  },
  {
    id: "deconTent",
    name: "Decon Tent",
    track: "survival",
    desc: "Cuts radiation exposure chance camp-wide, and brings down the meds cost of treating it at the Infirmary.",
    lore: "A scavenged tarp, a wash basin, and whatever filtration somebody managed to rig up. Doesn't look like much next to the Infirmary, but it's the difference between a scrape with the wrong rust and a real problem.",
    maxLevel: 4,
    baseCost: { scrap: 55, gold: 10 },
    costMult: 2.0,
    // Stacks multiplicatively with the Resilience skill branch's own
    // radiationChanceMult/radiationTreatMedsMult (see scavSkillBonuses
    // and DECON_TENT_RADIATION_CHANCE_MULT_PER_LEVEL below) rather than
    // overriding it — a camp-wide building helping everyone a little,
    // on top of whatever any one scav's own skill investment already
    // contributes, the same way weather's modifiers already stack with
    // skills rather than competing with them.
    effect: (lvl) => lvl === 0 ? "Not built — no camp-wide radiation protection" : `-${lvl * 8}% radiation chance, -${lvl * 10}% treatment meds cost`,
  },
  {
    id: "recYard",
    name: "Rec Yard",
    track: "survival",
    desc: "Cuts time spent resting off morale at the Barracks camp-wide, and raises the loot floor at low morale.",
    lore: "A cracked half-court somebody cleared the rubble off, a salvaged hoop bolted to whatever's still standing. Nobody admits how much they actually look forward to a few minutes here between raids.",
    maxLevel: 4,
    baseCost: { scrap: 55, gold: 10 },
    costMult: 2.0,
    // Same stacking philosophy as Decon Tent above — these compound
    // multiplicatively with Unshaken's restTimeMult and Steel Nerves'
    // moraleLootFloorBonus (see scavSkillBonuses) rather than competing
    // with them, a camp-wide baseline everyone benefits from on top of
    // whatever any one scav's own Fortitude investment already gives them.
    effect: (lvl) => lvl === 0 ? "Not built — no camp-wide morale recovery bonus" : `-${lvl * 8}% rest time, +${lvl * 3}% low-morale loot floor`,
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
      { id: "pointBlank", name: "Point Blank", maxRank: 2, minLevel: 6, requires: { id: "steadyAim", rank: 1 },
        desc: (rank) => `+${rank * 2}% survival on high-risk sites (riskMult 3.0+) — fighting above their weight class`, next: () => "+2% survival on dangerous sites per rank" },
      { id: "killInstinct", name: "Kill Instinct", maxRank: 2, minLevel: 8, requires: { id: "veteranInstinct", rank: 1 },
        desc: (rank) => `+${rank * 4} combat power`, next: () => "+4 combat power per rank" },
      { id: "lastStand", name: "Last Stand", maxRank: 1, minLevel: 12, requires: { id: "killInstinct", rank: 2 },
        desc: () => "+8% survival odds on top of everything else this scav has", next: () => "+8% survival odds" },
      { id: "executioner", name: "Executioner", maxRank: 1, minLevel: 14, requires: { id: "pointBlank", rank: 2 },
        desc: () => "Never takes an injury on a successful boss kill — knows exactly where to hit", next: () => "No injury on boss kills" },
      // Cross-branch capstone — requires full investment in BOTH Combat
      // (Executioner) and Fortitude (Iron-Willed), not just one deep
      // branch. Sits on Combat's spoke in the web for rendering
      // purposes, but isSkillNodeUnlocked checks both requirements
      // regardless of which branch's array it's defined in — see the
      // array form of `requires` there. The idea: someone who's both a
      // genuinely dangerous fighter and someone whose presence steadies
      // everyone else, not a specialist in either alone.
      { id: "leadFromFront", name: "Lead From Front", maxRank: 1, minLevel: 16,
        requires: [{ id: "executioner", rank: 1 }, { id: "ironWilled", rank: 1 }],
        desc: () => "+5% flat survival for all group members on any raid this scav is on", next: () => "+5% group survival" },
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
      { id: "callused", name: "Callused", maxRank: 3, minLevel: 6, requires: { id: "ironWill", rank: 1 },
        desc: (rank) => `+${rank * 4} max HP — the body learning from every hit`, next: () => "+4 max HP per rank" },
      { id: "ironLungs", name: "Iron Lungs", maxRank: 2, minLevel: 8, requires: { id: "fastHealer", rank: 1 },
        desc: (rank) => `+${rank * 12} max HP`, next: () => "+12 max HP per rank" },
      { id: "unbreakable", name: "Unbreakable", maxRank: 1, minLevel: 12, requires: { id: "ironLungs", rank: 2 },
        desc: () => "-40% injury severity on top of Iron Will's reduction", next: () => "-40% injury severity" },
      { id: "secondWind", name: "Second Wind", maxRank: 1, minLevel: 14, requires: { id: "callused", rank: 2 },
        desc: () => "30% chance to shrug off an injury entirely — has taken enough hits that some stop registering", next: () => "30% chance to ignore injuries" },
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
      { id: "opportunist", name: "Opportunist", maxRank: 2, minLevel: 6, requires: { id: "packMule", rank: 1 },
        desc: (rank) => `+${rank * 5} scrap, +${rank * 3} gold on every boss kill this scav personally survives`, next: () => "+5 scrap, +3 gold per boss kill per rank" },
      { id: "keenEye", name: "Keen Eye", maxRank: 2, minLevel: 8, requires: { id: "scrounger", rank: 1 },
        desc: (rank) => `+${rank * 4}% loot from raids`, next: () => "+4% loot per rank" },
      { id: "treasureHunter", name: "Treasure Hunter", maxRank: 1, minLevel: 12, requires: { id: "keenEye", rank: 2 },
        desc: () => "+3 scrap, +2 gold whenever this scav personally makes it back, on top of Scrounger's bonus", next: () => "+3 scrap, +2 gold on personal survival" },
      { id: "blackMarket", name: "Black Market", maxRank: 1, minLevel: 14, requires: { id: "opportunist", rank: 2 },
        desc: () => "15% chance per raid to find a piece of gear in the loot — knows who to ask and what to look for", next: () => "15% chance of a bonus gear find per raid" },
    ],
  },
  resilience: {
    label: "Resilience",
    nodes: [
      { id: "leadLined", name: "Lead-Lined", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `-${rank * 8}% chance of radiation exposure on a raid`, next: () => "-8% radiation chance per rank" },
      { id: "ironStomach", name: "Iron Stomach", maxRank: 2, minLevel: 2, requires: { id: "leadLined", rank: 1 },
        desc: (rank) => `-${rank * 10}% radiation exposure amount, when it happens`, next: () => "-10% radiation exposure per rank" },
      { id: "decontaminated", name: "Decontaminated", maxRank: 1, minLevel: 5, requires: { id: "ironStomach", rank: 1 },
        desc: () => "-30% time spent treating radiation at the Infirmary, -1 meds cost", next: () => "-30% radiation treatment time, -1 meds cost" },
      { id: "cleanBlood", name: "Clean Blood", maxRank: 2, minLevel: 6, requires: { id: "ironStomach", rank: 1 },
        desc: (rank) => `Radiation drops by ${rank} point${rank > 1 ? "s" : ""} per raid survived — the body slowly learning to process it`, next: () => "-1 radiation per survival per rank" },
      { id: "hardenedCells", name: "Hardened Cells", maxRank: 2, minLevel: 8, requires: { id: "decontaminated", rank: 1 },
        desc: (rank) => `-${rank * 10}% chance of radiation exposure, on top of Lead-Lined`, next: () => "-10% radiation chance per rank" },
      { id: "immuneSystem", name: "Immune System", maxRank: 1, minLevel: 12, requires: { id: "hardenedCells", rank: 2 },
        desc: () => "-50% radiation exposure amount, on top of Iron Stomach's reduction", next: () => "-50% radiation exposure" },
      { id: "radProof", name: "Rad-Proof", maxRank: 1, minLevel: 14, requires: { id: "cleanBlood", rank: 2 },
        desc: () => "Radiation can never exceed half the cap — the body simply stops absorbing what it can't process", next: () => "Radiation capped at 50% max" },
    ],
  },
  fortitude: {
    label: "Fortitude",
    nodes: [
      { id: "thickHide", name: "Thick Hide", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `-${rank * 8}% morale lost per raid`, next: () => "-8% morale loss per rank" },
      { id: "steelNerves", name: "Steel Nerves", maxRank: 2, minLevel: 2, requires: { id: "thickHide", rank: 1 },
        desc: (rank) => `+${rank * 5}% loot yield floor when morale is low`, next: () => "+5% low-morale loot floor per rank" },
      { id: "unshaken", name: "Unshaken", maxRank: 1, minLevel: 5, requires: { id: "steelNerves", rank: 1 },
        desc: () => "-40% time spent resting off morale at the Barracks", next: () => "-40% rest time" },
      { id: "veteransCalm", name: "Veteran's Calm", maxRank: 2, minLevel: 6, requires: { id: "steelNerves", rank: 1 },
        desc: (rank) => `No morale loss on easy raids (riskMult ≤ ${rank === 1 ? "2.0" : "2.5"}) when this scav makes it back — routine by now`, next: () => "No morale loss on successful low-risk raids per rank" },
      { id: "hardenedResolve", name: "Hardened Resolve", maxRank: 2, minLevel: 8, requires: { id: "unshaken", rank: 1 },
        desc: (rank) => `-${rank * 8}% morale lost per raid, on top of Thick Hide`, next: () => "-8% morale loss per rank" },
      { id: "ironWilled", name: "Iron-Willed", maxRank: 1, minLevel: 12, requires: { id: "hardenedResolve", rank: 2 },
        desc: () => "Morale never drops below 40, however rough the raid", next: () => "Morale floor of 40" },
      { id: "rally", name: "Rally", maxRank: 1, minLevel: 14, requires: { id: "veteransCalm", rank: 2 },
        desc: () => "Surviving a raid below 25 morale gives +20 morale instead of a drop — something about almost breaking and not breaking", next: () => "+20 morale on sub-25 survival" },
    ],
  },
  fieldcraft: {
    label: "Fieldcraft",
    nodes: [
      { id: "lightfoot", name: "Lightfoot", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `-${rank * 5}% raid duration — moves efficiently, doesn't waste steps`, next: () => "-5% raid duration per rank" },
      { id: "quickRead", name: "Quick Read", maxRank: 2, minLevel: 3, requires: { id: "lightfoot", rank: 1 },
        desc: (rank) => `-${rank * 10}% time added by mid-raid events — reads a situation fast and doesn't lose as much clock on complications`, next: () => "-10% event time penalties per rank" },
      { id: "siteKnowledge", name: "Site Knowledge", maxRank: 1, minLevel: 6, requires: { id: "quickRead", rank: 1 },
        desc: () => "+10% survival on any map this scav has run 5 or more times — knows the layout", next: () => "+10% survival on familiar maps (5+ runs)" },
      { id: "ghostRun", name: "Ghost Run", maxRank: 2, minLevel: 9, requires: { id: "siteKnowledge", rank: 1 },
        desc: (rank) => `-${rank * 10}% raid duration on top of Lightfoot`, next: () => "-10% additional raid duration per rank" },
      { id: "noTrace", name: "No Trace", maxRank: 1, minLevel: 14, requires: { id: "ghostRun", rank: 2 },
        desc: () => "Raids this scav is on never trigger a camp defense event on return — comes and goes clean", next: () => "No camp events on return" },
    ],
  },
  command: {
    label: "Command",
    nodes: [
      { id: "steadyPresence", name: "Steady Presence", maxRank: 3, minLevel: 1, requires: null,
        desc: (rank) => `-${rank * 5} morale hit to surviving squadmates when anyone dies on a raid this scav is on`, next: () => "-5 survivor morale hit per rank" },
      { id: "groupTactics", name: "Group Tactics", maxRank: 2, minLevel: 3, requires: { id: "steadyPresence", rank: 1 },
        desc: (rank) => `+${rank * 2}% survival per additional group member when this scav is in the group`, next: () => "+2% survival per squadmate per rank" },
      { id: "keepItTogether", name: "Keep It Together", maxRank: 1, minLevel: 6, requires: { id: "groupTactics", rank: 1 },
        desc: () => "If this scav dies, the camp-wide morale hit is halved — they'd want people to hold it together", next: () => "Half camp morale hit on own death" },
      { id: "warBond", name: "War Bond", maxRank: 2, minLevel: 9, requires: { id: "keepItTogether", rank: 1 },
        desc: (rank) => `+${rank * 4}% survival when raiding with any squadmate this scav has run with 10+ times — trust built through repetition`, next: () => "+4% survival with bonded squadmates per rank" },
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

// Sums invested ranks per branch and returns whichever branch a scav has
// put the most points into — { id, label, points } or null if they
// haven't spent anything anywhere yet (a fresh scav has no "strongest
// branch" worth displaying). Ties go to whichever branch is defined
// first in SKILL_TREE (the same stable iteration order Object.keys
// already gives), so this is deterministic rather than depending on
// insertion-order quirks anyone reading this would need to puzzle out —
// in practice a tie is rare enough this almost never matters, but it
// shouldn't ever flicker between two answers on repeated calls either.
function getStrongestBranch(scav) {
  let best = null;
  for (const branchId of Object.keys(SKILL_TREE)) {
    const branch = SKILL_TREE[branchId];
    const points = branch.nodes.reduce((sum, node) => sum + getSkillRank(scav, node.id), 0);
    if (points > 0 && (!best || points > best.points)) {
      best = { id: branchId, label: branch.label, points };
    }
  }
  return best;
}

// Genuinely actionable mismatches between a scav's own skill investment
// and the specific trip they're about to be sent on — not a general
// "this scav is weak" warning (HP/morale are already shown plainly on
// every picker card), just the two cases where a totally different
// branch would have actually helped here and this scav has none of it.
// Returns an array of short strings, usually empty — most scav/map
// pairings have nothing worth flagging. map can be null/undefined (the
// Arena tab has no real map to check radioactivity against) — every
// check below already guards for that.
function getScavWarnings(scav, map) {
  const warnings = [];
  if (map && map.radioactive && getSkillRank(scav, "leadLined") === 0 && getSkillRank(scav, "hardenedCells") === 0) {
    warnings.push("No radiation resistance — this site is radioactive");
  }
  const weather = getCurrentWeather();
  if (weather && weather.moraleDropMult > 1 && getSkillRank(scav, "thickHide") === 0 && getSkillRank(scav, "hardenedResolve") === 0) {
    warnings.push(`${weather.name} today — no morale resistance`);
  }
  return warnings;
}

// Whether a node could ever be ranked up further right now: prerequisite
// met, level high enough, not already at max rank. Doesn't check whether
// the scav actually has a free point — that's surfaced separately so the
// UI can show a node as "locked" vs. "unlocked but can't afford" distinctly.
function isSkillNodeUnlocked(scav, branchId, nodeId) {
  const node = getSkillNodeDef(branchId, nodeId);
  if (!node) return false;
  if (scav.level < node.minLevel) return false;
  // requires can be a single { id, rank } (every existing node) or an
  // array of them (cross-branch capstones like Lead From Front, which
  // needs investment in two different branches rather than just
  // deepening one). getSkillRank works the same regardless of which
  // branch the prerequisite node actually lives in — it just reads
  // scav.skills[nodeId] — so an array of cross-branch requirements
  // needs no special handling beyond checking each one in turn.
  if (node.requires) {
    const reqs = Array.isArray(node.requires) ? node.requires : [node.requires];
    for (const req of reqs) {
      if (getSkillRank(scav, req.id) < req.rank) return false;
    }
  }
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
  // Thick Skin's and Iron Lungs' max HP bonuses are one-time stat bumps
  // applied the moment they're learned (same as how leveling up grants
  // HP directly), rather than something recomputed live — so the extra
  // HP is immediately usable, not just a number that shows up next time
  // the scav happens to heal.
  if (nodeId === "thickSkin") {
    scav.maxHp += 8;
    scav.hp += 8;
  } else if (nodeId === "ironLungs") {
    scav.maxHp += 12;
    scav.hp += 12;
  } else if (nodeId === "callused") {
    scav.maxHp += 4;
    scav.hp += 4;
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
  // Backfill background for scavs from saves predating this feature —
  // deterministic from scav.id so the same scav always gets the same
  // background on every reload rather than re-rolling each time.
  if (!scav.background) {
    const ids = Object.keys(SCAV_BACKGROUNDS);
    const idx = Math.abs(scav.id.split("").reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0)) % ids.length;
    scav.background = ids[idx];
  }
  const bg = SCAV_BACKGROUNDS[scav.background] || SCAV_BACKGROUNDS.scrapper;

  const hardened = getSkillRank(scav, "hardened");
  const steadyAim = getSkillRank(scav, "steadyAim");
  const veteranInstinct = getSkillRank(scav, "veteranInstinct");
  const killInstinct = getSkillRank(scav, "killInstinct");
  const lastStand = getSkillRank(scav, "lastStand");
  const ironWill = getSkillRank(scav, "ironWill");
  const fastHealer = getSkillRank(scav, "fastHealer");
  const unbreakable = getSkillRank(scav, "unbreakable");
  const lightFingers = getSkillRank(scav, "lightFingers");
  const packMule = getSkillRank(scav, "packMule");
  const scrounger = getSkillRank(scav, "scrounger");
  const keenEye = getSkillRank(scav, "keenEye");
  const treasureHunter = getSkillRank(scav, "treasureHunter");
  const leadLined = getSkillRank(scav, "leadLined");
  const ironStomach = getSkillRank(scav, "ironStomach");
  const decontaminated = getSkillRank(scav, "decontaminated");
  const hardenedCells = getSkillRank(scav, "hardenedCells");
  const immuneSystem = getSkillRank(scav, "immuneSystem");
  const cleanBlood = getSkillRank(scav, "cleanBlood");
  const radProof = getSkillRank(scav, "radProof");
  const thickHide = getSkillRank(scav, "thickHide");
  const steelNerves = getSkillRank(scav, "steelNerves");
  const unshaken = getSkillRank(scav, "unshaken");
  const hardenedResolve = getSkillRank(scav, "hardenedResolve");
  const ironWilled = getSkillRank(scav, "ironWilled");
  const veteransCalm = getSkillRank(scav, "veteransCalm");
  const rally = getSkillRank(scav, "rally");
  const pointBlank = getSkillRank(scav, "pointBlank");
  const executioner = getSkillRank(scav, "executioner");
  const callused = getSkillRank(scav, "callused");
  const secondWind = getSkillRank(scav, "secondWind");
  const opportunist = getSkillRank(scav, "opportunist");
  const blackMarket = getSkillRank(scav, "blackMarket");
  // Fieldcraft branch
  const lightfoot = getSkillRank(scav, "lightfoot");
  const quickRead = getSkillRank(scav, "quickRead");
  const siteKnowledge = getSkillRank(scav, "siteKnowledge");
  const ghostRun = getSkillRank(scav, "ghostRun");
  const noTrace = getSkillRank(scav, "noTrace");
  // Command branch
  const steadyPresence = getSkillRank(scav, "steadyPresence");
  const groupTactics = getSkillRank(scav, "groupTactics");
  const keepItTogether = getSkillRank(scav, "keepItTogether");
  const warBond = getSkillRank(scav, "warBond");
  const leadFromFront = getSkillRank(scav, "leadFromFront");

  // scroungerBonus merges all flat-resource-on-survival bonuses into one
  // object (Scrounger, Treasure Hunter, Opportunist boss-kill bonus).
  // Opportunist is keyed separately (bossBonus) since it only fires on
  // boss kills, not every survival — see resolveRaid for application.
  let scroungerBonus = null;
  if (scrounger || treasureHunter) {
    scroungerBonus = {
      scrap: (scrounger ? 1 : 0) + (treasureHunter ? 3 : 0),
      gold: (scrounger ? 1 : 0) + (treasureHunter ? 2 : 0),
    };
  }
  const opportunistBossBonus = opportunist
    ? { scrap: opportunist * 5, gold: opportunist * 3 }
    : null;

  return {
    combatPower: hardened * 2 + killInstinct * 4
      + (bg.id === "soldier" ? 4 : 0)
      + (bg.id === "scrapper" ? 2 : 0)
      - (bg.id === "medic" ? 4 : 0),
    survivalAdd: steadyAim * 0.015 + (lastStand ? 0.08 : 0),
    injuryChanceMult: veteranInstinct ? 0.8 : 1,
    injurySeverityMult: (1 - ironWill * 0.12) * (unbreakable ? 0.6 : 1)
      * (bg.id === "soldier" ? 0.9 : 1)
      * (bg.id === "scrapper" ? 0.8 : 1)
      * (hasPrestigePerk("battleHardened") ? 0.85 : 1),
    healTimeMult: fastHealer ? 0.75 : 1,
    healMedsFlatDiscount: bg.id === "medic" ? 1 : 0,
    lootMult: 1 + lightFingers * 0.05 + packMule * 0.06 + keenEye * 0.04
      + (bg.id === "scavenger" ? 0.10 : 0)
      - (bg.id === "scrapper" ? 0.06 : 0)
      + (hasPrestigePerk("scroungersNetwork") ? 0.10 : 0),
    scroungerBonus,
    opportunistBossBonus,
    blackMarketChance: blackMarket ? 0.15 : 0,
    // Combat extensions
    pointBlankSurvivalAdd: pointBlank * 0.02, // applied only on high-risk maps in calcOdds
    executioner, // flag: no injury on boss kills
    // Survival extensions
    callused, // HP applied at learn-time in learnSkillRank
    secondWindChance: secondWind ? 0.3 : 0, // chance to ignore injury roll entirely
    // Resilience extensions
    cleanBloodRadPerSurvival: cleanBlood, // radiation dropped per raid survived
    radProof, // flag: radiation capped at 50% of RADIATION_CAP
    // Fortitude extensions
    veteransCalm, // rank used to compute riskMult threshold in resolveRaid
    rally, // flag: +20 morale instead of drop when surviving below 25 morale
    // Fieldcraft branch
    raidDurationMult: Math.max(0.35, 1 - lightfoot * 0.05 - ghostRun * 0.10),
    quickReadTimeMult: Math.max(0.4, 1 - quickRead * 0.10),
    siteKnowledgeSurvivalAdd: siteKnowledge ? 0.10 : 0, // applied in calcOdds when run count qualifies
    noTrace, // flag: no camp defense event on return
    // Command branch
    steadyPresenceMoraleReduction: steadyPresence * 5, // flat reduction to survivor morale hit
    groupTacticsSurvivalAdd: groupTactics * 0.02, // per extra group member
    keepItTogether, // flag: halve camp-wide morale hit on own death
    warBondSurvivalAdd: warBond * 0.04, // per bonded squadmate (10+ runs together)
    leadFromFront: leadFromFront ? 0.05 : 0, // flat survival bonus for all group members
    // Stalker (background): reduces chance of enemy-type events; adds duration
    stalkerEnemyChanceMult: bg.id === "stalker" ? 0.8 : 1,
    stalkerDurationAdd: bg.id === "stalker" ? 0.15 : 0,
    radiationChanceMult: Math.max(0.1, 1 - leadLined * 0.08 - hardenedCells * 0.1),
    radiationExposureMult: Math.max(0.2, (1 - ironStomach * 0.1) * (immuneSystem ? 0.5 : 1)),
    radiationTreatTimeMult: decontaminated ? 0.7 : 1,
    radiationTreatMedsFlatDiscount: decontaminated ? 1 : 0,
    moraleDropMult: Math.max(0.1, 1 - thickHide * 0.08 - hardenedResolve * 0.08)
      * (bg.id === "soldier" || bg.id === "tough" ? 1.10 : 1),
    moraleLootFloorBonus: steelNerves * 0.05,
    restTimeMult: unshaken ? 0.6 : 1,
    moraleFloor: Math.max(ironWilled ? 40 : 0, bg.id === "composed" ? 25 : 0, scav.objectiveMoraleFloor || 0, (() => {
      // Camp-wide morale bonus from any living scav who completed an
      // objective that boosts everyone — takes the highest across all
      // living scavs so stacking multiple Composed scavs is additive
      // in intent but floored at the single highest individual bonus.
      if (!STATE || !STATE.scavs) return 0;
      return Math.max(0, ...STATE.scavs.filter(s => s.status !== "dead").map(s => s.objectiveMoraleBonus || 0));
    })()),
  };
}

// Every recruit arrives with a background — a persistent trait from
// their life before camp that shapes how they operate in the field.
// Unlike skills (earned through play), this is innate and never changes.
// Displayed on picker cards and the character sheet, and wired into
// scavSkillBonuses so the effect is real, not just flavor text.
const SCAV_BACKGROUNDS = {
  soldier: {
    id: "soldier",
    name: "Soldier",
    color: "var(--rust-bright)",
    desc: "Military or paramilitary background. Trained to push through situations most people would run from.",
    bonus: "+4 combat power, -10% injury severity — but takes 10% more morale damage per raid (high-stress conditioning cuts both ways).",
  },
  medic: {
    id: "medic",
    name: "Medic",
    color: "var(--olive-bright)",
    desc: "Former field medic or trauma responder. Knows how to patch a wound fast and keep moving.",
    bonus: "-25% Infirmary time for themselves, -1 meds cost on personal treatment — but -4 starting combat power (non-combatant by trade).",
  },
  scavenger: {
    id: "scavenger",
    name: "Scavenger",
    color: "var(--brass-bright)",
    desc: "Spent years picking through wreckage before the camp found them. Knows where things hide.",
    bonus: "+10% loot from raids — but -8 max HP (lean and fast, not built to take hits).",
  },
  stalker: {
    id: "stalker",
    name: "Stalker",
    color: "var(--bone-dim)",
    desc: "Knows how to move through hostile territory without being noticed. Still alive because they've never been where they shouldn't.",
    bonus: "-20% chance of any mid-raid hostile encounter rolling in — but +15% longer raids (moves slow and careful, not fast).",
  },
  tough: {
    id: "tough",
    name: "Tough",
    color: "var(--rust-dim)",
    desc: "Built to absorb punishment. Not particularly strategic about it, but very hard to put down.",
    bonus: "+20 max HP — but 10% more morale damage per raid (takes the hits without flinching, but it still wears on them).",
  },
  composed: {
    id: "composed",
    name: "Composed",
    color: "var(--bone-bright)",
    desc: "Seen enough to stop being surprised by any of it. Doesn't panic, doesn't freeze, just does the work.",
    bonus: "Morale never drops below 25 (even without Iron-Willed) — but -8 max HP (more head than body).",
  },
  scrapper: {
    id: "scrapper",
    name: "Scrapper",
    color: "var(--rust-mid)",
    desc: "Learned to fight in situations where tactics were a luxury. Good in close, unpredictable, hard to read.",
    bonus: "-20% injury severity, +2 combat power — but -6% loot (grabs what matters in the moment, not what's most valuable).",
  },
};

// Roll a background for a new scav — weighted equally so no background
// is noticeably more common than the others, and the player's roster
// naturally diversifies over time without needing to engineer it.
function rollScavBackground() {
  const ids = Object.keys(SCAV_BACKGROUNDS);
  return SCAV_BACKGROUNDS[ids[Math.floor(Math.random() * ids.length)]];
}

// activePerks is optional — when omitted, reads live STATE.ngPlusPerks
// (the normal case: recruitScav, called well after STATE is fully
// constructed and stable). freshState passes it explicitly instead,
// since STATE is either null (first-ever launch) or still the
// *previous* run's state while freshState is mid-construction — the
// same reliability problem Quick Start's recruit count already has to
// work around above, for the same underlying reason.
function makeScav(idOverride, activePerks) {
  const bg = rollScavBackground();
  const perks = activePerks !== undefined ? activePerks : (STATE && STATE.ngPlusPerks) || [];
  // HP adjustments from background applied at creation — same pattern
  // as thickSkin/ironLungs applying their bonus the moment they're
  // learned rather than waiting for a recalculation to catch it.
  const bgHpDelta = bg.id === "scavenger" ? -8
    : bg.id === "tough" ? 20
    : bg.id === "composed" ? -8
    : 0;
  const veteransResolveBonus = perks.includes("veteransResolve") ? 10 : 0;
  const startHp = 100 + bgHpDelta + veteransResolveBonus;
  const obj = rollPersonalObjective(bg.id);
  const startObjective = obj ? {
    id: obj.id,
    assignedDay: (STATE && typeof getDayNumber === "function") ? getDayNumber() : 1,
    completed: false,
  } : null;
  return {
    id: idOverride || `scav_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: pickName(),
    background: bg.id,
    level: 1,
    xp: 0,
    maxHp: startHp,
    hp: startHp,
    radiation: 0,
    morale: 100,
    status: "ready",
    gear: { weapon: "fists", armor: "rags", pack: "satchel" },
    raidsCompleted: 0,
    skills: {},
    stats: {
      bossKills: {},
      raidsSurvived: 0,
      scrapBrought: 0,
      goldBrought: 0,
      medsBrought: 0,
      foodBrought: 0,
    },
    objective: startObjective,
  };
}

// ===== HIDDEN PERSONAL OBJECTIVES =====
// Every scav gets one secret objective at creation, drawn from a pool
// specific to their background. The player doesn't see the full objective
// text until it's been partially revealed — the scav has to spend a few
// days at camp before their personal agenda becomes clear. Completing the
// objective gives the scav a permanent bonus. The objective is about the
// scav's character, not a generic task — a Medic who wants to heal every
// hurt scav at camp is expressing who they are, not performing a checklist.
const PERSONAL_OBJECTIVES = {
  soldier: [
    {
      id: "soldier_survive10",
      hint: "This one's been through worse. They're not done yet.",
      title: "Survive 10 raids",
      desc: "Survive 10 raids without dying — not impressive by their standards, just the minimum to feel like they're holding their own.",
      reward: { type: "stat", stat: "maxHp", amount: 15 },
      rewardText: "+15 max HP permanently",
      check: (scav) => (scav.stats.raidsSurvived || 0) >= 10,
    },
    {
      id: "soldier_lead",
      hint: "They watch how decisions get made around here. Quietly.",
      title: "Become camp Leader",
      desc: "Take the Leader role — not for the status, but because someone with real training should be making the calls.",
      reward: { type: "stat", stat: "combat", amount: 5 },
      rewardText: "+5 combat power permanently",
      check: (scav) => STATE.leaderScavId === scav.id,
    },
    {
      id: "soldier_boss",
      hint: "They're looking for a real fight. Something worth their time.",
      title: "Kill a named boss",
      desc: "Take down a named boss — the kind of opponent that actually tests what they know.",
      reward: { type: "morale", amount: 20 },
      rewardText: "Permanent +20 morale floor for this scav",
      check: (scav) => Object.values(scav.stats.bossKills || {}).some(n => n > 0),
    },
  ],
  medic: [
    {
      id: "medic_heal3",
      hint: "Every time someone limps back in, they're already thinking about what it'll take.",
      title: "Heal 3 injured scavs",
      desc: "Personally ensure 3 injured scavs get treated — through the Infirmary, the Doc, or their own recovery.",
      reward: { type: "stat", stat: "injuryReduction", amount: 0.15 },
      rewardText: "-15% injury severity for this scav permanently",
      check: (scav) => (scav.stats.healsAssisted || 0) >= 3,
    },
    {
      id: "medic_survive_hurt",
      hint: "They keep going back out even when they shouldn't. Old habit.",
      title: "Complete a raid below half HP",
      desc: "Finish a raid while wounded — come back half-dead and still functional. Prove the training holds even when the body doesn't.",
      reward: { type: "stat", stat: "maxHp", amount: 20 },
      rewardText: "+20 max HP permanently",
      check: (scav) => (scav.stats.survivedWhileHurt || false),
    },
    {
      id: "medic_noinjury10",
      hint: "They're careful. More careful than most.",
      title: "Survive 10 raids without injury",
      desc: "Complete 10 raids without taking a single wound serious enough to need treatment.",
      reward: { type: "stat", stat: "combat", amount: 4 },
      rewardText: "+4 combat power (field composure)",
      check: (scav) => (scav.stats.cleanRaids || 0) >= 10,
    },
  ],
  scavenger: [
    {
      id: "scavenger_loot",
      hint: "They're counting every haul. Looking for the one that matters.",
      title: "Bring back 200 scrap total",
      desc: "Accumulate 200 scrap brought back across all raids — the baseline for someone who actually knows where things are.",
      reward: { type: "loot", amount: 0.1 },
      rewardText: "+10% loot from raids permanently",
      check: (scav) => (scav.stats.scrapBrought || 0) >= 200,
    },
    {
      id: "scavenger_unique",
      hint: "They're looking for something specific. Won't say what.",
      title: "Find a unique item",
      desc: "Bring back something that can't be found just anywhere — a boss drop, a dungeon reward, anything with a real story behind it.",
      reward: { type: "stat", stat: "gearFind", amount: 0.05 },
      rewardText: "+5% gear find chance permanently",
      check: (scav) => (scav.stats.uniquesFound || 0) >= 1,
    },
    {
      id: "scavenger_raids15",
      hint: "They're building something in their head. Some kind of map.",
      title: "Survive 15 raids",
      desc: "Fifteen runs in. At that point they've learned the patterns — where the good stuff is, where not to step.",
      reward: { type: "stat", stat: "raidSpeed", amount: 0.1 },
      rewardText: "-10% raid duration permanently",
      check: (scav) => (scav.stats.raidsSurvived || 0) >= 15,
    },
  ],
  stalker: [
    {
      id: "stalker_noenemy10",
      hint: "They've been out there a lot. Nobody's seen them come back hurt.",
      title: "Complete 10 raids without a hostile encounter",
      desc: "Ten runs, no fights. That's not luck — that's knowing how to move.",
      reward: { type: "stat", stat: "hostileReduction", amount: 0.15 },
      rewardText: "-15% hostile encounter chance permanently",
      check: (scav) => (scav.stats.ghostRaids || 0) >= 10,
    },
    {
      id: "stalker_boss_solo",
      hint: "They haven't said much about what they've seen. That's telling.",
      title: "Solo a boss encounter",
      desc: "Come back from a boss fight alone — no group, no backup, just the preparation and whatever happened out there.",
      reward: { type: "stat", stat: "combat", amount: 8 },
      rewardText: "+8 combat power permanently",
      check: (scav) => (scav.stats.soloKills || 0) >= 1,
    },
    {
      id: "stalker_lowrisk20",
      hint: "They pick the safe routes. Not out of fear — out of preference.",
      title: "Survive 20 raids on low-risk maps",
      desc: "Twenty runs on the safer ground. Not the most dramatic legacy, but they'll still be here when everyone else isn't.",
      reward: { type: "morale", amount: 15 },
      rewardText: "Permanent +15 morale floor",
      check: (scav) => (scav.stats.lowRiskRaids || 0) >= 20,
    },
  ],
  tough: [
    {
      id: "tough_tankhit",
      hint: "They've taken hits that would have dropped anyone else. They notice.",
      title: "Survive an injury that would kill most",
      desc: "Survive a raid where the injury roll hit hard enough to kill a weaker scav — the same hit, different result.",
      reward: { type: "stat", stat: "maxHp", amount: 25 },
      rewardText: "+25 max HP permanently",
      check: (scav) => (scav.stats.bigHitSurvived || false),
    },
    {
      id: "tough_defend",
      hint: "They're always the first one to step up when something's at the door.",
      title: "Defend camp successfully 3 times",
      desc: "Show up every time the camp needs someone to stand between it and whatever's outside.",
      reward: { type: "stat", stat: "combat", amount: 6 },
      rewardText: "+6 combat power permanently",
      check: (scav) => (scav.stats.defenseWins || 0) >= 3,
    },
    {
      id: "tough_raids8",
      hint: "They're not subtle about it. Every run is a test of something.",
      title: "Survive 8 raids",
      desc: "Eight runs. Simple as that.",
      reward: { type: "stat", stat: "injuryReduction", amount: 0.1 },
      rewardText: "-10% injury severity permanently",
      check: (scav) => (scav.stats.raidsSurvived || 0) >= 8,
    },
  ],
  composed: [
    {
      id: "composed_morale",
      hint: "They don't panic. Even when things are bad they seem settled.",
      title: "Keep morale above 60 for 7 days straight",
      desc: "A camp with this person in it tends to keep it together. Seven days without hitting the floor says something.",
      reward: { type: "stat", stat: "moraleBonus", amount: 10 },
      rewardText: "+10 morale floor for all scavs permanently (while alive)",
      check: (scav) => (scav.stats.highMoraleDays || 0) >= 7,
    },
    {
      id: "composed_allweather",
      hint: "They've been out in everything. Never complained about it once.",
      title: "Complete raids in 3 different weather conditions",
      desc: "Rain, fog, storm, clear — doesn't matter. Out there is out there.",
      reward: { type: "stat", stat: "raidSpeed", amount: 0.08 },
      rewardText: "-8% raid duration permanently",
      check: (scav) => Object.keys(scav.stats.weatherRaids || {}).length >= 3,
    },
    {
      id: "composed_witness",
      hint: "They've seen people go down. Still here.",
      title: "Be present when another scav dies",
      desc: "Survive a run where someone else didn't make it back. Carry that, and keep going.",
      reward: { type: "stat", stat: "combat", amount: 3 },
      rewardText: "+3 combat power (survivor's edge)",
      check: (scav) => (scav.stats.witnessedDeath || false),
    },
  ],
  scrapper: [
    {
      id: "scrapper_fight5",
      hint: "They're not looking for trouble. But they don't back down from it either.",
      title: "Survive 5 hostile encounters",
      desc: "Five fights, still standing. That's the whole philosophy.",
      reward: { type: "stat", stat: "combat", amount: 7 },
      rewardText: "+7 combat power permanently",
      check: (scav) => (scav.stats.hostilesSurvived || 0) >= 5,
    },
    {
      id: "scrapper_comeback",
      hint: "They've been in worse spots than this. Probably.",
      title: "Return from a raid below 20 HP",
      desc: "Come back breathing when they probably shouldn't have. That counts.",
      reward: { type: "stat", stat: "maxHp", amount: 20 },
      rewardText: "+20 max HP permanently",
      check: (scav) => (scav.stats.nearDeathReturn || false),
    },
    {
      id: "scrapper_gold",
      hint: "They're always looking for the angle. Every situation has one.",
      title: "Bring back 100 gold total",
      desc: "A hundred gold across all runs — proof they know how to spot value when they see it.",
      reward: { type: "loot", amount: 0.08 },
      rewardText: "+8% loot from raids permanently",
      check: (scav) => (scav.stats.goldBrought || 0) >= 100,
    },
  ],
};

function rollPersonalObjective(backgroundId) {
  const pool = PERSONAL_OBJECTIVES[backgroundId];
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getPersonalObjective(scav) {
  if (!scav.objective) return null;
  const pool = PERSONAL_OBJECTIVES[scav.background];
  if (!pool) return null;
  return pool.find(o => o.id === scav.objective.id) || null;
}

// Check whether a scav's hidden objective is now complete, and if so
// apply the reward and mark it done. Called from resolveRaid and from
// checkDailyUpkeep so time-based objectives get caught promptly.
function checkPersonalObjective(scav) {
  if (!scav.objective || scav.objective.completed) return;
  const def = getPersonalObjective(scav);
  if (!def) return;
  if (!def.check(scav)) return;
  scav.objective.completed = true;
  // Apply reward
  if (def.reward.type === "stat") {
    if (def.reward.stat === "maxHp") {
      scav.maxHp = (scav.maxHp || 100) + def.reward.amount;
      scav.hp = Math.min(scav.hp + def.reward.amount, scav.maxHp);
    } else if (def.reward.stat === "combat") {
      scav.objectiveCombatBonus = (scav.objectiveCombatBonus || 0) + def.reward.amount;
    } else if (def.reward.stat === "injuryReduction") {
      scav.objectiveInjuryReduction = (scav.objectiveInjuryReduction || 0) + def.reward.amount;
    } else if (def.reward.stat === "hostileReduction") {
      scav.objectiveHostileReduction = (scav.objectiveHostileReduction || 0) + def.reward.amount;
    } else if (def.reward.stat === "gearFind") {
      scav.objectiveGearFind = (scav.objectiveGearFind || 0) + def.reward.amount;
    } else if (def.reward.stat === "raidSpeed") {
      scav.objectiveRaidSpeed = (scav.objectiveRaidSpeed || 0) + def.reward.amount;
    } else if (def.reward.stat === "moraleBonus") {
      scav.objectiveMoraleBonus = (scav.objectiveMoraleBonus || 0) + def.reward.amount;
    } else if (def.reward.stat === "loot") {
      scav.objectiveLootBonus = (scav.objectiveLootBonus || 0) + def.reward.amount;
    }
  } else if (def.reward.type === "morale") {
    scav.objectiveMoraleFloor = (scav.objectiveMoraleFloor || 0) + def.reward.amount;
  } else if (def.reward.type === "loot") {
    scav.objectiveLootBonus = (scav.objectiveLootBonus || 0) + def.reward.amount;
  }
  queueMilestone(`${scav.name} completed their personal objective: "${def.title}." ${def.rewardText}.`);
  saveState();
}

// Reveal the objective after the scav has been at camp for 3+ days —
// the hint shows immediately, the full title/desc reveals at day 3.
function getObjectiveRevealLevel(scav) {
  if (!scav.objective) return 0;
  const daysSince = getDayNumber() - (scav.objective.assignedDay || 1);
  if (daysSince >= 3) return 2; // full reveal
  if (daysSince >= 1) return 1; // hint only
  return 0; // just arrived, nothing yet
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

  // Quick Start perk: 2 extra recruits on top of the usual roster.
  // ngPlusPerks lives in carryOver here (passed through from
  // startNewGamePlus, same as ngPlusLevel) rather than reading the
  // live STATE.ngPlusPerks — STATE is mid-replacement while freshState
  // is still being constructed, so it could either be null (first-ever
  // launch) or still hold the *previous* run's state, neither of which
  // is reliable to read from here.
  const hasQuickStart = carryOver && carryOver.ngPlusPerks && carryOver.ngPlusPerks.includes("quickStart");
  const extraRecruits = hasQuickStart ? 2 : 0;
  const freshPerks = (carryOver && carryOver.ngPlusPerks) || [];
  const scavs = carryOver && carryOver.scav
    ? [carryOver.scav, makeScav(null, freshPerks), makeScav(null, freshPerks), ...Array.from({ length: extraRecruits }, () => makeScav(null, freshPerks))]
    : [makeScav(null, freshPerks), makeScav(null, freshPerks), makeScav(null, freshPerks)];

  const stash = { weapon: {}, armor: {}, pack: {} };
  if (carryOver && carryOver.items) {
    for (const { slot, id } of carryOver.items) {
      stash[slot][id] = (stash[slot][id] || 0) + 1;
    }
  }

  return {
    version: 1,
    resources: { scrap: 40, gold: 5, meds: 2, food: 6, intel: 0 },
    scavs,
    upgrades: { infirmary: 0, armory: 0, scoutTower: 0, barracks: 0, workshop: 0, radioTower: 0, farm: 0, deconTent: 0, recYard: 0 },
    activeRaids: [], // { id, scavIds:[], mapId, gearById:{scavId:{}}, startedAt, duration, resolved, pendingEvent, effects:[] }
    log: [],
    rosterCap: 4 + extraRecruits,
    stash, // { slot: { gearId: count } } — only tier > 0 items are tracked here
    campEvent: null, // { id, triggeredAt } while a camp defense is awaiting a response, otherwise null
    pendingCrossroads: null, // { id, firedAt } while a Crossroads event is awaiting a response
    crossroadsHistory: [], // ids of events already seen, prevents repeats
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
    // Survives a prestige reset the same way ngPlusLevel does, and for
    // the same reason — these are meant to be permanent progress, not
    // something a fresh camp starts over without. A vanilla game (or
    // wipeProgress()) has no carryOver, so this is just an empty array,
    // same as ngPlusLevel defaults to 0.
    ngPlusPerks: (carryOver && carryOver.ngPlusPerks) || [],
    journal: [], // { day, text } — one entry per in-game day, newest first, see writeJournalEntry/checkDailyUpkeep
    bossesBeaten: {}, // { mapId: true } — which named bosses have ever been beaten (fled doesn't count), drives the Codex's unlocked lore tier for each
    weather: {}, // { dayNumber: weatherId } — see getWeatherForDay/rollWeatherForDay, pruned to a small rolling window rather than ever growing unbounded
    arenaLeaderboard: [], // { id, name, wins, isPlayerScav } — see getArenaLeaderboard/tickArenaLeaderboard, lazily seeded with 10 NPC regulars the first time it's actually read rather than right here
    pendingMilestones: [], // queued strings, consumed and cleared once a day by writeJournalEntry — see queueMilestone
    // Leader system — resets on prestige (unlike ngPlusLevel/ngPlusPerks
    // just above), since the Leader is tied to the current roster, which
    // prestige wipes down to just the one carried-over scav. A fresh
    // camp earns its own leader on day 6 again, same as it re-earns
    // every building from scratch. leaderEverChosen is separate from
    // leaderScavId being non-null specifically so a dead/vacated Leader
    // doesn't cause the day-6 election event to fire a second time —
    // see checkLeaderElectionTrigger.
    leaderScavId: null,
    leaderEverChosen: false,
    pendingLeaderElection: false, // true while the day-6 election modal is awaiting the player's pick
    // Survives a prestige reset, same as ngPlusLevel/ngPlusPerks and for
    // a similar reason — questlines like "The Long Way Back" are framed
    // as the camp's own ongoing story across however many prestiges it
    // takes, not something a fresh run starts over on. A vanilla game
    // (or wipeProgress()) has no carryOver, so this is just an empty
    // object, same as the other survives-prestige fields default.
    questProgress: (carryOver && carryOver.questProgress) || {},
    // Survives a prestige reset, same reasoning as questProgress just
    // above — research is permanent camp knowledge, not something a
    // fresh run re-learns from scratch. Note this is NOT the same as
    // the intel resource itself, which DOES reset with everything else
    // (same as scrap/gold/meds/food) — the knowledge persists, the
    // currency used to earn it doesn't, the same split prestige perks
    // already draw between "the perk itself" (permanent) and "the gold
    // spent earning it" (gone).
    research: (carryOver && carryOver.research) || {},
    // Survives a prestige reset, same reasoning as research/questProgress
    // — a relationship built with a person over however many trades it
    // took isn't something a fresh camp should have to rebuild from
    // zero. { traderId: number } — see getTraderReputation/
    // addTraderReputation.
    traderReputation: (carryOver && carryOver.traderReputation) || {},
    // Outpost buildings survive a prestige reset the same way research
    // does — permanent infrastructure, not something rebuilt from
    // scratch every run. assignedScavIds is deliberately NOT carried
    // through, even when buildings are: prestige wipes the roster down
    // to one carried-over scav, so whoever was assigned to the Outpost
    // before almost certainly isn't part of the new roster at all — an
    // empty assignment list is the only state that's actually still
    // valid the moment a new run starts, regardless of what the old
    // camp's assignments looked like.
    outpost: {
      buildings: (carryOver && carryOver.outpostBuildings) || { lookout: 0, cache: 0, bunkhouse: 0 },
      assignedScavIds: [],
    },
  };
}
// ===== STATE & PERSISTENCE =====

const STORAGE_KEY = "outpost-save";

// ===== AUDIO =====
// Volume lives in its own localStorage key, separate from STORAGE_KEY —
// it's a device/browser preference, not game progress, so wiping a save
// (see wipeProgress) or starting New Game+ shouldn't silently reset it,
// and it needs to be readable before STATE has even finished loading.
const AUDIO_VOLUME_KEY = "outpost-audio-volume";
const AUDIO_DEFAULT_VOLUME = 0.6;
// Applied on top of the user's own slider setting, not in place of it —
// getAudioVolume() below still returns the raw, unscaled value the
// slider displays and stores (so "60%" on the slider always means
// "60%", never a confusingly-scaled number), and these multipliers are
// applied separately, only at the point audio actually gets played
// (see effectiveClickVolume/effectiveAmbientVolume), to bring the
// overall loudness ceiling down without changing what the slider shows
// or how its range feels.
//
// Split into two scales rather than one shared constant: ambient site
// loops needed turning down further than the UI click did, and a
// single shared scale can't express "these two things should end up at
// different loudness" — only "everything gets quieter by the same
// amount." UI_CLICK_VOLUME_SCALE alone is the original 60% cut;
// AMBIENT_VOLUME_SCALE stacks an additional 50% on top of that same cut
// for ambient specifically (0.4 * 0.5 = 0.2 of the original unscaled
// volume), since that's the one players kept noticing as still loud,
// particularly on the raid/dungeon/arena select screens.
const UI_CLICK_VOLUME_SCALE = 0.4; // 100% - 60% reduction
const AMBIENT_VOLUME_SCALE = 0.2; // a further 50% on top of the 60% cut above

function getAudioVolume() {
  try {
    const raw = localStorage.getItem(AUDIO_VOLUME_KEY);
    if (raw === null) return AUDIO_DEFAULT_VOLUME;
    const parsed = parseFloat(raw);
    if (Number.isNaN(parsed)) return AUDIO_DEFAULT_VOLUME;
    return Math.max(0, Math.min(1, parsed));
  } catch (e) {
    return AUDIO_DEFAULT_VOLUME; // localStorage unavailable (rare, e.g. private-mode edge cases) — fall back rather than throw
  }
}

// What actually gets assigned to the UI click <audio> element's .volume
// — the user's raw slider preference, scaled down by
// UI_CLICK_VOLUME_SCALE. Every place that sets .volume on the click
// element should go through this rather than getAudioVolume() directly;
// getAudioVolume() itself stays reserved for anything displaying or
// persisting the raw slider value (the Settings panel's percentage
// label and the slider's own value attribute).
function effectiveClickVolume() {
  return getAudioVolume() * UI_CLICK_VOLUME_SCALE;
}

// Same idea as effectiveClickVolume, for the ambient site loops
// specifically — kept as its own function (not just a different
// constant passed into the same one) so every ambient call site reads
// clearly as "the ambient volume," not "the click volume, but for
// ambient," if these ever need to diverge further later.
function effectiveAmbientVolume() {
  return getAudioVolume() * AMBIENT_VOLUME_SCALE;
}

function setAudioVolume(vol) {
  const clamped = Math.max(0, Math.min(1, vol));
  try {
    localStorage.setItem(AUDIO_VOLUME_KEY, String(clamped));
  } catch (e) {
    // Same private-mode edge case as getAudioVolume — the slider still
    // works for the current session even if it can't persist.
  }
  AmbientPlayer.setMasterVolume(clamped * AMBIENT_VOLUME_SCALE);
  if (uiClickAudioEl) uiClickAudioEl.volume = clamped * UI_CLICK_VOLUME_SCALE;
  return clamped;
}

// One shared <audio> element for the UI click, reused on every click by
// restarting it from position 0 rather than constructing/cloning a new
// element each time — see playUiClick for why cloning was dropped.
let uiClickAudioEl = null;
function playUiClick() {
  if (!uiClickAudioEl) {
    uiClickAudioEl = new Audio("audio/ui_click.mp3");
    uiClickAudioEl.volume = effectiveClickVolume();
  }
  // Resetting currentTime here (rather than the ambient player's
  // approach) is safe specifically because this element's src never
  // changes after the first load — it's always the same already-loaded
  // clip, just restarted. That's different from AmbientPlayer.playSite,
  // where currentTime was being reset on a brand new src that hadn't
  // loaded yet, which was the actual bug there.
  //
  // Previously this cloned the element on every click instead
  // (cloneNode(true).play()) to let rapid clicks overlap rather than
  // cut each other off — but cloning doesn't carry over the original's
  // already-loaded media data, so every single click forced a full
  // reload from disk. That's wasteful in any case, and more likely to
  // glitch or silently fail in a packaged app than in a typical browser
  // tab. Restarting the one shared element is simple enough that an
  // overlapping click just retriggers the same short sound — not worth
  // the reload cost to avoid.
  try {
    uiClickAudioEl.currentTime = 0;
  } catch (e) {
    // Some browsers throw if currentTime is set before any metadata has
    // loaded yet (e.g. the very first click ever) — harmless to skip,
    // play() below still starts from the beginning either way.
  }
  uiClickAudioEl.volume = effectiveClickVolume();
  const playPromise = uiClickAudioEl.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch((err) => {
      console.error("UI click sound failed to play:", err);
    });
  }
}

// Ambient site loops. Two <audio> elements alternate as "current" and
// "incoming" so switching sites can crossfade smoothly instead of
// hard-cutting one track and starting the next — same general approach
// a music player would use, just hand-rolled with two native <audio>
// tags rather than the Web Audio API, since looped background tracks
// with a simple fade are well within what <audio>.volume can do without
// needing AudioContext/GainNode machinery.
const AmbientPlayer = (() => {
  let masterVolume = effectiveAmbientVolume();
  let currentSiteId = null;
  let players = [new Audio(), new Audio()];
  let activeIndex = 0;
  players.forEach((p) => { p.loop = true; p.volume = 0; });

  const FADE_MS = 900;
  let fadeRaf = null;

  function cancelFade() {
    if (fadeRaf) { cancelAnimationFrame(fadeRaf); fadeRaf = null; }
  }

  function crossfadeTo(nextIndex) {
    cancelFade();
    const from = players[activeIndex];
    const to = players[nextIndex];
    const start = performance.now();
    const fromStartVol = from.volume;
    function step() {
      const elapsed = performance.now() - start;
      const t = Math.min(1, elapsed / FADE_MS);
      from.volume = fromStartVol * (1 - t);
      to.volume = masterVolume * t;
      if (t < 1) {
        fadeRaf = requestAnimationFrame(step);
      } else {
        from.pause();
        from.volume = 0;
        fadeRaf = null;
      }
    }
    fadeRaf = requestAnimationFrame(step);
  }

  return {
    // Switches the ambient track to the given site id (a map/dungeon/
    // arena id — anything with a matching file in audio/). Calling this
    // again with the site already playing is a harmless no-op, so
    // callers don't need to track "did this already start" themselves.
    playSite(siteId) {
      if (siteId === currentSiteId) return;
      currentSiteId = siteId;
      const nextIndex = activeIndex === 0 ? 1 : 0;
      const next = players[nextIndex];
      next.src = `audio/${siteId}.mp3`;
      next.volume = 0;
      // No explicit currentTime reset here — a freshly assigned src
      // already starts playback from position 0 on its own, and setting
      // currentTime immediately after assigning src (before any
      // metadata has actually loaded) is unreliable across browser
      // engines: it can leave the element in a bad internal state where
      // the play() call below resolves without ever actually producing
      // audio, with nothing throwing to reveal it.
      const playPromise = next.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch((err) => {
          console.error(`Ambient audio failed to play for "${siteId}":`, err);
        });
      }
      crossfadeTo(nextIndex);
      activeIndex = nextIndex;
    },
    // Fades out and stops whatever's playing — used when leaving the
    // raid select screen entirely, or switching to a tab/state with no
    // site-specific ambience of its own.
    stop() {
      if (!currentSiteId) return;
      currentSiteId = null;
      cancelFade();
      const from = players[activeIndex];
      const start = performance.now();
      const fromStartVol = from.volume;
      function step() {
        const elapsed = performance.now() - start;
        const t = Math.min(1, elapsed / FADE_MS);
        from.volume = fromStartVol * (1 - t);
        if (t < 1) {
          fadeRaf = requestAnimationFrame(step);
        } else {
          from.pause();
          fadeRaf = null;
        }
      }
      fadeRaf = requestAnimationFrame(step);
    },
    setMasterVolume(vol) {
      masterVolume = vol;
      // Apply immediately to whichever player is actually audible right
      // now, rather than waiting for the next crossfade to pick it up —
      // dragging the slider should change the volume of what's playing
      // in real time.
      const active = players[activeIndex];
      if (active.volume > 0 || currentSiteId) active.volume = vol;
    },
  };
})();


let STATE = null;
let selectedScavId = null;
let selectedMapId = null;
let selectedRooms = []; // room ids the player has chosen for this raid's path
let raidScreenOpen = false;
let campScreenOpen = false;
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
        // Same backfill, for the Decon Tent — an existing camp simply
        // hasn't built one yet, same as a brand new camp.
        if (typeof STATE.upgrades.deconTent !== "number") STATE.upgrades.deconTent = 0;
        // Same backfill, for the Rec Yard — an existing camp simply
        // hasn't built one yet, same as a brand new camp.
        if (typeof STATE.upgrades.recYard !== "number") STATE.upgrades.recYard = 0;
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
        // Same backfill, for the intel resource — an existing camp
        // simply hasn't earned any yet. Unlike most of the other
        // backfills on this list, this one isn't just cosmetic: intel
        // is used in direct arithmetic (spending on research), where
        // undefined would silently produce NaN instead of failing
        // loudly or behaving sensibly.
        if (typeof STATE.resources.intel !== "number") STATE.resources.intel = 0;
        // Same backfill, for the journal and boss-lore tracking — an
        // existing camp simply hasn't written any entries yet, and
        // every boss it may have already beaten before this patch
        // counts as "not yet recorded" rather than trying to guess at
        // history there's no real record of.
        if (!Array.isArray(STATE.journal)) STATE.journal = [];
        if (!STATE.bossesBeaten || typeof STATE.bossesBeaten !== "object") STATE.bossesBeaten = {};
        // Same backfill, for weather — an existing camp simply has no
        // weather rolled yet for any day; the next checkDailyUpkeep
        // tick rolls today's and tomorrow's the same as it would for a
        // brand new save.
        if (!STATE.weather || typeof STATE.weather !== "object") STATE.weather = {};
        // Same backfill, for the Arena leaderboard — an existing camp
        // simply has none yet; getArenaLeaderboard seeds it fresh with
        // 10 NPC regulars the first time anything actually reads it.
        if (!Array.isArray(STATE.arenaLeaderboard)) STATE.arenaLeaderboard = [];
        // Same backfill, for the milestone queue — an existing camp
        // simply has nothing pending yet.
        if (!Array.isArray(STATE.pendingMilestones)) STATE.pendingMilestones = [];
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
          // Same backfill, for lifetime stat tracking — an existing
          // scav simply has no history recorded yet for any of this;
          // there's no good way to reconstruct "how many bosses has
          // this scav actually beaten across however long this save's
          // been played" after the fact, so it starts at zero same as
          // a brand new scav would.
          if (!scav.stats || typeof scav.stats !== "object") {
            scav.stats = { bossKills: {}, raidsSurvived: 0, scrapBrought: 0, goldBrought: 0, medsBrought: 0, foodBrought: 0 };
          }
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
  selectedRooms = [];
  raidScreenOpen = false;
  AmbientPlayer.stop();
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
  // ironSupplyLines only discounts Infirmary and Barracks specifically,
  // not every building — a deliberately narrower scope than the other
  // perks, which are all flat camp-wide bonuses. Matches what the perk
  // actually says it does rather than a blanket building discount that
  // would have made every other building's own economy less meaningful.
  const perkDiscount = hasPrestigePerk("ironSupplyLines") && (def.id === "infirmary" || def.id === "barracks") ? 0.8 : 1;
  const cost = {};
  for (const [res, amt] of Object.entries(def.baseCost)) {
    cost[res] = Math.ceil(amt * mult * perkDiscount);
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
    if (g.unique) return stashCount(slot, g.id) > 0;
    if (g.improvised) return workshopLvl >= (g.minWorkshopLevel || 0);
    // Always show items the player actually has in the stash, even if
    // their tier is above the current Armory unlock level — they found
    // it through play and should be able to equip it. The tier gate only
    // applies to items not yet in the stash (preventing the gear list
    // from showing things the player can't have yet).
    if (stashCount(slot, g.id) > 0) return true;
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

// Salvage rate — roughly what a tier's own crafting cost is, scaled
// down, rather than a flat number per item. A tier-4 rifle salvages for
// noticeably more than a tier-1 shiv, same as it cost noticeably more
// to get in the first place. 40% rather than something closer to full
// refund — salvage is meant to make duplicate gear not a complete dead
// end, not a way to launder gear finds into free scrap at full value.
const SALVAGE_RATE = 0.4;

// What salvaging one copy of this item would actually return — a flat
// {scrap} object, computed from whatever the item's own cost (bought)
// or craftCost (crafted) happens to be. Uniques and basics (tier 0)
// have neither field, so they fall through to 0 — salvageGear below
// refuses those outright rather than relying on this returning 0 alone,
// since a unique returning 0 scrap could otherwise look like a UI bug
// rather than "this can't be salvaged at all."
function salvageValue(slot, id) {
  const item = getGearItem(slot, id);
  const cost = item.cost || item.craftCost;
  if (!cost) return { scrap: 0 };
  const scrapPortion = cost.scrap || 0;
  const goldPortion = cost.gold || 0;
  // Gold folded into the scrap return at a rough 3:1 rate rather than
  // tracked as its own separate salvage currency — keeps the salvage
  // result a single number on the button rather than a two-resource
  // breakdown for what's meant to be a quick, low-friction action.
  return { scrap: Math.max(1, Math.round((scrapPortion + goldPortion * 3) * SALVAGE_RATE)) };
}

// Converts one copy of a stashed item back into scrap. Refuses unique
// items outright (never destroyable, full stop — these are meant to
// stay precious) and tier-0 basics (nothing to salvage, no cost was
// ever paid for them). Only ever pulls from the stash, never from a
// scav's equipped gear — stashCount/removeFromStash already only see
// the stash itself, so an equipped item is naturally untouchable here
// without any extra guard needed.
function salvageGear(slot, id, amount = 1) {
  const item = getGearItem(slot, id);
  if (item.unique || item.tier === 0) return false;
  if (stashCount(slot, id) < amount) return false;
  const value = salvageValue(slot, id);
  if (!removeFromStash(slot, id, amount)) return false;
  STATE.resources.scrap = (STATE.resources.scrap || 0) + value.scrap * amount;
  saveState();
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
  // Floored the same way every other reduction multiplier in this game
  // already is — this was the one exception, with no clamp at all. Not
  // an issue at today's levels (even the new max of 5 only reaches
  // 0.60), but raising the level cap again later without a floor here
  // would eventually walk this past zero into a negative raid duration,
  // which breaks far more than just "this one number is a bit low."
  return Math.max(0.35, 1 - STATE.upgrades.workshop * 0.08);
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

// Infirmary's tier-6 capstone — a discount on meds cost specifically,
// not more time reduction. Levels 1-5 already hit infirmaryTimeMult's
// own floor (1 - 5*0.15 = 0.25, exactly the clamp) by level 5, so a
// flat linear 6th tier of the same formula would be silently worthless
// — the player would pay real resources for a level that does nothing
// at all. healMedsCost previously had no Infirmary-level discount
// whatsoever, which made it the natural place for the capstone to
// actually do something new rather than continuing a formula that's
// already maxed out.
//
// Implemented as a flat subtraction (applied directly in healMedsCost/
// radiationTreatMedsCost below), not a percentage multiplier — meds
// costs here are tiny integers (max 3), and a percentage discount on a
// number that small gets swallowed by Math.ceil's rounding across most
// of the actual range a scav's injury severity falls into. A flat -1,
// still floored at a minimum of 1 the same way the cost already is,
// reliably shows up as a real, visible discount instead of one that's
// mathematically present but invisible in practice most of the time.
const INFIRMARY_TIER6_MEDS_FLAT_DISCOUNT = 1;
function infirmaryMedsCostFlatDiscount() {
  return STATE.upgrades.infirmary >= 6 ? INFIRMARY_TIER6_MEDS_FLAT_DISCOUNT : 0;
}

const DECON_TENT_RADIATION_CHANCE_MULT_PER_LEVEL = 0.08; // -8% radiation chance per level, camp-wide
const DECON_TENT_MEDS_COST_MULT_PER_LEVEL = 0.10; // -10% radiation treatment meds cost per level, camp-wide

// Camp-wide radiation chance reduction from the Decon Tent — stacks
// multiplicatively with a scav's own Resilience skill bonuses (see
// scavSkillBonuses' radiationChanceMult) at the actual roll site in
// resolveRaid, the same way weather's own radiation modifier already
// stacks with skills rather than overriding them. Floored well above 0
// for the same reason every other reduction multiplier in this game is
// floored — a maxed-out anything shouldn't make a real hazard
// functionally disappear outright.
function deconTentRadiationChanceMult() {
  return Math.max(0.4, 1 - STATE.upgrades.deconTent * DECON_TENT_RADIATION_CHANCE_MULT_PER_LEVEL);
}

// Camp-wide radiation treatment meds-cost reduction — stacks with
// Decontaminated's own radiationTreatMedsMult the same multiplicative
// way, applied inside radiationTreatMedsCost.
function deconTentMedsCostMult() {
  return Math.max(0.3, 1 - STATE.upgrades.deconTent * DECON_TENT_MEDS_COST_MULT_PER_LEVEL);
}

const REC_YARD_REST_TIME_MULT_PER_LEVEL = 0.08; // -8% rest time per level, camp-wide
const REC_YARD_LOOT_FLOOR_BONUS_PER_LEVEL = 0.03; // +3% low-morale loot floor per level, camp-wide

// Camp-wide rest-time reduction from the Rec Yard — stacks with
// Unshaken's own restTimeMult (see scavSkillBonuses) at the point
// restDuration actually applies it, the same multiplicative-stacking
// philosophy as everything else added this round.
function recYardRestTimeMult() {
  return Math.max(0.4, 1 - STATE.upgrades.recYard * REC_YARD_REST_TIME_MULT_PER_LEVEL);
}

// Camp-wide addition to the loot floor moraleLootFactor can't drop
// below — stacks additively with Steel Nerves' own moraleLootFloorBonus
// (additive is correct here, not multiplicative, since this is itself
// already a bonus added on top of the base 0.7 floor rather than a
// reduction multiplier being applied to something).
function recYardLootFloorBonus() {
  return STATE.upgrades.recYard * REC_YARD_LOOT_FLOOR_BONUS_PER_LEVEL;
}

// How long (in seconds) it would take to fully heal this scav right now,
// given their current missing HP and the infirmary's current level.
function healDuration(scav) {
  const missingFraction = 1 - scav.hp / scav.maxHp;
  const skills = scavSkillBonuses(scav);
  // Field Surgeons research: -20% Infirmary time, camp-wide, on top of
  // the building's own level-based reduction (infirmaryTimeMult).
  const fieldSurgeonsTimeMult = isResearchUnlocked("fieldSurgeons") ? 0.8 : 1;
  const raw = missingFraction * INFIRMARY_BASE_SECONDS * infirmaryTimeMult() * skills.healTimeMult * fieldSurgeonsTimeMult;
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
  const skills = scavSkillBonuses(scav);
  // Field Surgeons research's meds discount is a flat -1, not a
  // percentage — same reasoning as infirmaryMedsCostFlatDiscount and
  // Decontaminated's own meds discount (see scavSkillBonuses' comment
  // on radiationTreatMedsFlatDiscount): INFIRMARY_MAX_MEDS_COST is a
  // tiny integer (3), and a percentage discount on a number that small
  // gets swallowed by Math.ceil's rounding across roughly half the
  // realistic range, the exact bug already found and fixed once before
  // for a different system built on this same constant.
  const fieldSurgeonsFlatDiscount = isResearchUnlocked("fieldSurgeons") ? 1 : 0;
  const totalDiscount = infirmaryMedsCostFlatDiscount() + (skills.healMedsFlatDiscount || 0) + fieldSurgeonsFlatDiscount;
  return Math.max(1, Math.ceil(missingFraction * INFIRMARY_MAX_MEDS_COST) - totalDiscount);
}

// Radiation treatment duration/cost shares the same base seconds, same
// max meds cost, and the same Infirmary building-level speedup as
// healDuration/healMedsCost — but NOT the same skill speedup. Fast
// Healer (Survival) only speeds up regular injury healing;
// Decontaminated (Resilience) is the sole skill-driven speedup for
// radiation treatment specifically, confirmed as the intended design
// rather than an oversight — the two trees stay genuinely separate
// here rather than Fast Healer becoming a do-everything heal-speed
// stat. A scav can owe both injury and radiation treatment at once;
// sendToInfirmary below adds the two durations/costs together rather
// than picking one.
function radiationTreatDuration(scav) {
  const fraction = scav.radiation / RADIATION_CAP;
  if (fraction <= 0) return 0;
  const skills = scavSkillBonuses(scav);
  const raw = fraction * INFIRMARY_BASE_SECONDS * infirmaryTimeMult() * skills.radiationTreatTimeMult;
  return Math.max(INFIRMARY_MIN_SECONDS, Math.round(raw));
}

function radiationTreatMedsCost(scav) {
  const fraction = scav.radiation / RADIATION_CAP;
  if (fraction <= 0) return 0;
  const skills = scavSkillBonuses(scav);
  const base = Math.ceil(fraction * INFIRMARY_MAX_MEDS_COST * deconTentMedsCostMult());
  const totalFlatDiscount = infirmaryMedsCostFlatDiscount() + skills.radiationTreatMedsFlatDiscount;
  return Math.max(1, base - totalFlatDiscount);
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
        // healsAssisted: credit every ready Medic-background scav at camp
        // for contributing to a successful heal — the objective is about
        // the camp's healing culture, not personally administering treatment
        STATE.scavs.filter(s => s.status === "ready" && s.background === "medic" && s.id !== scav.id)
          .forEach(s => {
            s.stats.healsAssisted = (s.stats.healsAssisted || 0) + 1;
            checkPersonalObjective(s);
          });
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
// morale is neutral, burnt-out morale costs up to 30% of loot yield by
// default. Steel Nerves raises the floor this can drop to (toward 1.0,
// never past it — there's nothing to raise once morale's already full)
// without changing what full morale itself is worth.
function moraleLootFactor(scav) {
  const skills = scavSkillBonuses(scav);
  const floor = Math.min(1, 0.7 + skills.moraleLootFloorBonus + recYardLootFloorBonus());
  return floor + (1 - floor) * (scav.morale / 100);
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
  const skills = scavSkillBonuses(scav);
  const raw = missingFraction * BARRACKS_REST_BASE_SECONDS * skills.restTimeMult * recYardRestTimeMult();
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
  const objBonus = (scav.objectiveCombatBonus || 0);
  return {
    combat: w.combat + levelBonus + skills.combatPower + objBonus,
    defense: a.defense + levelBonus,
  };
}

// weatherIdOverride lets a caller pin this to a specific day's weather
// rather than whatever's live right now — resolveRaid uses this to
// apply the weather that was actually locked in at launch (see
// raid.weatherId), so a raid spanning a day boundary resolves against
// the conditions it left under, not whatever the new day happens to
// roll. The raid prep popup calls this with no override at all, since
// showing "if you launched right now" odds is exactly what live weather
// should mean there.
function calcOdds(scav, map, gear, weatherIdOverride) {
  const power = scavCombatPower(scav, gear);
  const skills = scavSkillBonuses(scav);
  const weather = weatherIdOverride ? WEATHER_CATALOG[weatherIdOverride] : getCurrentWeather();
  const survivalBase = 0.94 - (map.riskMult - 1) * 0.13;
  const gearBonus = (power.combat + power.defense) * 0.0035;
  const hpFactor = scav.hp / effectiveMaxHp(scav);
  // pointBlank: bonus on high-risk maps only (fighting above weight class)
  const pointBlankBonus = map.riskMult >= 3.0 ? skills.pointBlankSurvivalAdd : 0;
  // siteKnowledge: bonus on maps this scav has run 5+ times
  const runCount = (scav.stats && scav.stats.bossKills) ? (scav.raidsCompleted || 0) : 0;
  const mapRunCount = scav.mapRunCounts ? (scav.mapRunCounts[map.id] || 0) : 0;
  const siteBonus = mapRunCount >= 5 ? skills.siteKnowledgeSurvivalAdd : 0;
  // Known Weak Points research: +5% survival on dungeon raids
  // specifically — every dungeon guarantees a boss fight as its
  // centerpiece (see DUNGEONS' bossEncountered: true in launchRaid), so
  // "dungeon boss fights specifically" and "dungeon raids overall" are
  // functionally the same scope here, since calcOdds computes one
  // survival number for the whole raid rather than per-encounter.
  const knownWeakPointsBonus = (map.dungeon && isResearchUnlocked("knownWeakPoints")) ? 0.05 : 0;
  let survival = survivalBase + gearBonus + skills.survivalAdd + weatherMitigatedAdditive(weather.survivalAdd) + pointBlankBonus + siteBonus + knownWeakPointsBonus;
  survival *= 0.7 + 0.3 * hpFactor;
  survival = Math.max(0.05, Math.min(0.97, survival));

  const pack = getGearItem("pack", gear.pack);
  // Salvage Eye research: +15% loot multiplier inside dungeons specifically
  const salvageEyeMult = (map.dungeon && isResearchUnlocked("salvageEye")) ? 1.15 : 1;
  // Personal objective loot bonus — flat multiplier earned by completing
  // the scav's hidden objective (see checkPersonalObjective)
  const objLootMult = 1 + (scav.objectiveLootBonus || 0);
  const lootMult = (1 + pack.lootBonus) * lootYieldMult() * skills.lootMult * moraleLootFactor(scav) * weatherMitigatedMult(weather.lootMult, false) * salvageEyeMult * objLootMult;

  return { survival, lootMult };
}

// Group raids (2-3 scavs together): survival is the average of everyone's
// individual odds, plus a flat per-extra-member bonus — they watch each
// other's backs out there. Loot scales up too: more hands carry back more,
// on top of whatever pack bonuses each member is already getting.
const GROUP_SURVIVAL_BONUS_PER_EXTRA = 0.06;
const GROUP_LOOT_BONUS_PER_EXTRA = 0.25;

function calcGroupOdds(scavs, map, gearById, weatherIdOverride) {
  const individual = scavs.map((scav) => calcOdds(scav, map, gearById[scav.id], weatherIdOverride));
  const avgSurvival = individual.reduce((sum, o) => sum + o.survival, 0) / individual.length;
  const extraMembers = scavs.length - 1;

  // leadFromFront: the highest-ranked version in the group applies once
  const leadBonus = Math.max(...scavs.map((s) => scavSkillBonuses(s).leadFromFront || 0));
  // groupTactics: per-scav sum, each scav's own bonus multiplied by extra members
  const tacticsBonus = scavs.reduce((sum, s) => sum + scavSkillBonuses(s).groupTacticsSurvivalAdd * extraMembers, 0) / scavs.length;
  // warBond: bonus for each pairing where both scavs have 10+ runs together
  let warBondBonus = 0;
  if (scavs.length > 1) {
    for (let i = 0; i < scavs.length; i++) {
      const s = scavs[i];
      const sBonus = scavSkillBonuses(s).warBondSurvivalAdd;
      if (!sBonus) continue;
      for (let j = 0; j < scavs.length; j++) {
        if (i === j) continue;
        const partner = scavs[j];
        const runsTogether = (s.raidBondCounts && s.raidBondCounts[partner.id]) || 0;
        if (runsTogether >= 10) warBondBonus += sBonus / scavs.length;
      }
    }
  }

  const survival = Math.max(0.05, Math.min(0.97,
    avgSurvival + extraMembers * GROUP_SURVIVAL_BONUS_PER_EXTRA + leadBonus + tacticsBonus + warBondBonus + leaderGroupSurvivalBonus()
  ));

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
// Armory's tier-5 capstone adds a flat bonus here rather than unlocking
// a higher tier ceiling — the highest tier of gear that actually exists
// is 4, already reachable at Armory's previous max of level 4 (which
// unlocks "tier 5"), so a 5th level continuing that same unlock pattern
// would have nothing left to unlock. Finding gear more often is a real,
// previously Armory-untouched lever instead.
const ARMORY_TIER5_FIND_CHANCE_BONUS = 0.05;
function gearFindChance(map) {
  const armoryBonus = STATE.upgrades.armory >= 5 ? ARMORY_TIER5_FIND_CHANCE_BONUS : 0;
  const luckyBreakBonus = hasPrestigePerk("luckyBreak") ? 0.05 : 0;
  return 0.02 + (map.riskMult - 1) * 0.04 + armoryBonus + luckyBreakBonus;
}

// Same risk-scaling shape as gearFindChance — slightly more generous
// at the low end (intel is the only way to ever earn this resource at
// all, unlike gear, which still has crafting and the Flea Market as
// alternate sources) so a calm-map camp isn't completely locked out of
// research progress while still waiting on a higher Armory level or
// better maps to open up.
function intelFindChance(map) {
  return 0.04 + (map.riskMult - 1) * 0.03;
}

// Intel doesn't have gear's tier-pool selection logic — it's just a
// flat amount, scaled by how dangerous the map was, since a single
// flat roll-or-don't is enough complexity for a resource whose entire
// purpose is "a number to spend on research," not its own item economy
// the way gear is. Returns the amount found, or null on a miss — same
// null-on-no-find convention rollGearFind already uses, so callers can
// check truthiness the same way.
function rollIntelFind(map) {
  if (Math.random() >= intelFindChance(map)) return null;
  const amount = randInt(1, 2 + Math.floor(map.riskMult));
  STATE.resources.intel = (STATE.resources.intel || 0) + amount;
  return amount;
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

// ===== CROSSROADS EVENTS =====
// Narrative camp events that trigger when specific STATE conditions are
// true — not random post-raid chance, but "the situation has reached a
// point where this needs to happen." A Crossroads about food scarcity
// only fires when food is actually low. A Crossroads about a hurt scav
// only fires when someone is actually injured. The goal is events that
// feel like the game noticing what's happening and reacting to it.
//
// Each event has:
//   trigger: STATE condition function (checked daily against history)
//   weight: higher = more likely when multiple events are eligible
//   title, flavor: narrative text
//   options: array of { label, detail, effect: function }
//
// Tracked in STATE.crossroadsHistory (set of event ids) so each fires
// at most once, and STATE.pendingCrossroads ({ id, firedAt }) while
// awaiting a player response.

const CROSSROADS_CATALOG = [
  {
    id: "stranger_at_gate",
    title: "Someone at the Gate",
    flavor: "A figure appeared at the camp perimeter overnight. Alone, unarmed as far as anyone can tell. They haven't tried to get in — just standing there, waiting.",
    weight: 1,
    trigger: () => STATE.scavs.filter(s => s.status !== "dead").length >= 2 && STATE.resources.food >= 4,
    options: [
      {
        label: "Let them in",
        detail: "Another pair of hands. Another mouth too.",
        effect: () => {
          const newScav = makeScav();
          newScav.morale = 70;
          STATE.scavs.push(newScav);
          pushToast(`${newScav.name} joined the camp.`);
        },
      },
      {
        label: "Turn them away",
        detail: "The camp can't afford the risk. Or the food.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.max(0, s.morale - 8);
          });
          pushToast("The stranger left. Nobody feels great about it.");
        },
      },
      {
        label: "Give them supplies and send them on",
        detail: "Not a member of this camp, but not left with nothing either.",
        effect: () => {
          const cost = { food: 2, meds: 1 };
          if (canAfford(cost)) spend(cost);
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.min(100, s.morale + 5);
          });
          pushToast("Supplied and gone. The camp feels decent about it.");
        },
      },
    ],
  },
  {
    id: "last_rations",
    title: "Last Rations",
    flavor: "The food stores hit a point that nobody wants to say out loud. There's enough for maybe two more days if rationing starts now. Someone has to make the call.",
    weight: 1,
    trigger: () => STATE.resources.food <= 3 && STATE.scavs.filter(s => s.status !== "dead").length >= 2,
    options: [
      {
        label: "Strict rationing — everyone eats less",
        detail: "Morale takes a hit but the food stretches further.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.max(0, s.morale - 15);
          });
          STATE.resources.food = (STATE.resources.food || 0) + 3;
          pushToast("Rationing in effect. Nobody's happy but the food lasts.");
        },
      },
      {
        label: "Send someone out immediately, whatever it takes",
        detail: "A scav goes on an emergency run — no preparation, worse odds.",
        effect: () => {
          const ready = STATE.scavs.find(s => s.status === "ready");
          if (ready) {
            ready.morale = Math.max(0, ready.morale - 10);
            ready.hp = Math.max(1, ready.hp - 15);
            STATE.resources.food = (STATE.resources.food || 0) + 5;
            pushToast(`${ready.name} came back with food. Came back hurt too.`);
          } else {
            pushToast("Nobody was available to go. The camp waits.");
          }
        },
      },
      {
        label: "Say nothing and hope it resolves",
        detail: "Maybe something comes in on the next run. Maybe not.",
        effect: () => {
          if (Math.random() < 0.4) {
            STATE.resources.food = (STATE.resources.food || 0) + 2;
            pushToast("Scraped together a bit more. Got lucky.");
          } else {
            STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
              s.morale = Math.max(0, s.morale - 20);
            });
            pushToast("Nothing came in. Morale is suffering for it.");
          }
        },
      },
    ],
  },
  {
    id: "scav_breakdown",
    title: "Breaking Point",
    flavor: "One of the scavs hasn't said anything for two days. Not quiet — gone somewhere else behind their eyes. Everyone's noticed. Nobody's said anything.",
    weight: 1,
    trigger: () => STATE.scavs.some(s => s.status !== "dead" && s.morale <= 30),
    options: [
      {
        label: "Sit with them — don't fix it, just be there",
        detail: "Doesn't cost anything except time.",
        effect: () => {
          const hurt = STATE.scavs.find(s => s.status !== "dead" && s.morale <= 30);
          if (hurt) {
            hurt.morale = Math.min(100, hurt.morale + 25);
            pushToast(`${hurt.name} seems steadier. Whatever was said, it helped.`);
          }
        },
      },
      {
        label: "Pull them off active duty until they're ready",
        detail: "Removes them from rotation temporarily. Everyone else picks up the slack.",
        effect: () => {
          const hurt = STATE.scavs.find(s => s.status === "ready" && s.morale <= 30);
          if (hurt) {
            hurt.status = "resting";
            hurt.morale = Math.min(100, hurt.morale + 35);
            pushToast(`${hurt.name} is resting. They needed it.`);
          }
        },
      },
      {
        label: "Tell them the camp needs everyone right now",
        detail: "Honest. Not kind.",
        effect: () => {
          const hurt = STATE.scavs.find(s => s.status !== "dead" && s.morale <= 30);
          if (hurt) {
            hurt.morale = Math.max(0, hurt.morale - 5);
            STATE.scavs.filter(s => s.status !== "dead" && s.id !== hurt.id).forEach(s => {
              s.morale = Math.min(100, s.morale + 5);
            });
            pushToast("Camp keeps moving. Not everyone thinks it was the right call.");
          }
        },
      },
    ],
  },
  {
    id: "old_grudge",
    title: "Old Business",
    flavor: "Two of the scavs had a run-in out on a recent job. Nobody said anything when they got back, but there's a wall between them now and it's starting to affect the whole camp.",
    weight: 1,
    trigger: () => STATE.scavs.filter(s => s.status !== "dead").length >= 3,
    options: [
      {
        label: "Make them work through it together — same raid",
        detail: "Either they sort it out or something worse happens. Those are the options.",
        effect: () => {
          const scavs = STATE.scavs.filter(s => s.status === "ready").slice(0, 2);
          if (Math.random() < 0.6) {
            scavs.forEach(s => { s.morale = Math.min(100, s.morale + 15); });
            pushToast("They came back different. Still not friends. But the wall's down.");
          } else {
            scavs.forEach(s => { s.morale = Math.max(0, s.morale - 10); });
            pushToast("Didn't help. Came back worse, if anything.");
          }
        },
      },
      {
        label: "Stay out of it",
        detail: "People work things out on their own time, or they don't.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.max(0, s.morale - 5);
          });
          pushToast("The tension stays. Everyone feels it.");
        },
      },
      {
        label: "Speak to each of them separately",
        detail: "Takes time. Might not land. Worth trying.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.min(100, s.morale + 8);
          });
          pushToast("Things are calmer. Not resolved, but calmer.");
        },
      },
    ],
  },
  {
    id: "injured_choice",
    title: "The Ones Who Came Back",
    flavor: "Two scavs came back hurt on the same run. There's only enough medicine to treat one of them properly right now. The other waits, and waiting has costs.",
    weight: 1,
    trigger: () => {
      const hurt = STATE.scavs.filter(s => s.status !== "dead" && s.hp < effectiveMaxHp(s) * 0.5);
      return hurt.length >= 2 && STATE.resources.meds >= 2 && STATE.resources.meds < 4;
    },
    options: [
      {
        label: "Treat the more seriously wounded one first",
        detail: "Triage. By the numbers.",
        effect: () => {
          const hurt = STATE.scavs
            .filter(s => s.status !== "dead" && s.hp < effectiveMaxHp(s) * 0.5)
            .sort((a, b) => (a.hp / effectiveMaxHp(a)) - (b.hp / effectiveMaxHp(b)));
          if (hurt[0]) {
            hurt[0].hp = Math.min(effectiveMaxHp(hurt[0]), hurt[0].hp + 30);
            STATE.resources.meds = Math.max(0, (STATE.resources.meds || 0) - 2);
            pushToast(`${hurt[0].name} treated first. ${hurt[1] ? hurt[1].name + " waits." : ""}`);
          }
        },
      },
      {
        label: "Split what's left — a little for each",
        detail: "Neither gets fully treated. Both get something.",
        effect: () => {
          const hurt = STATE.scavs.filter(s => s.status !== "dead" && s.hp < effectiveMaxHp(s) * 0.5);
          hurt.slice(0, 2).forEach(s => {
            s.hp = Math.min(effectiveMaxHp(s), s.hp + 15);
          });
          STATE.resources.meds = Math.max(0, (STATE.resources.meds || 0) - 2);
          pushToast("Divided what was there. Both better. Neither fully right.");
        },
      },
      {
        label: "Send someone on an emergency run for more meds",
        detail: "Delays treatment but might mean everyone gets what they need.",
        effect: () => {
          const runner = STATE.scavs.find(s => s.status === "ready");
          if (runner) {
            STATE.resources.meds = (STATE.resources.meds || 0) + 4;
            runner.hp = Math.max(1, runner.hp - 10);
            pushToast(`${runner.name} found more. Took a hit getting them.`);
          } else {
            pushToast("Nobody available to go. The injured wait.");
          }
        },
      },
    ],
  },
  {
    id: "found_cache",
    title: "Something Left Behind",
    flavor: "A scav found a sealed cache on their last run — not looted, deliberately hidden, stocked for someone who clearly wasn't coming back for it. They brought back a question: take it all, take some, or leave it.",
    weight: 1,
    trigger: () => STATE.resources.scrap >= 30,
    options: [
      {
        label: "Take everything",
        detail: "It's been here long enough. Nobody's coming.",
        effect: () => {
          STATE.resources.scrap = (STATE.resources.scrap || 0) + 40;
          STATE.resources.gold = (STATE.resources.gold || 0) + 15;
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.max(0, s.morale - 5);
          });
          pushToast("Took it all. Hard not to think about who left it.");
        },
      },
      {
        label: "Take half and leave the rest",
        detail: "In case whoever hid it comes back. They probably won't.",
        effect: () => {
          STATE.resources.scrap = (STATE.resources.scrap || 0) + 20;
          STATE.resources.meds = (STATE.resources.meds || 0) + 2;
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.min(100, s.morale + 5);
          });
          pushToast("Took half. Left the rest. Something about it felt right.");
        },
      },
      {
        label: "Leave it alone",
        detail: "It wasn't ours to find.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.min(100, s.morale + 10);
          });
          pushToast("Left it. The camp's in better spirits than expected for walking away empty-handed.");
        },
      },
    ],
  },
  {
    id: "leadership_test",
    title: "The Decision Nobody Wants",
    flavor: "A call has to be made that affects everyone and nobody agrees on. Whoever speaks up owns the outcome, whatever it is. Someone has to.",
    weight: 0.7,
    trigger: () => {
      const morale = STATE.scavs.filter(s => s.status !== "dead").map(s => s.morale);
      const avg = morale.reduce((a, b) => a + b, 0) / (morale.length || 1);
      return avg < 60 && STATE.scavs.filter(s => s.status !== "dead").length >= 2;
    },
    options: [
      {
        label: "Make the call and own it",
        detail: "Some people won't like it. Everyone needed someone to say something.",
        effect: () => {
          const leader = STATE.leaderScavId
            ? STATE.scavs.find(s => s.id === STATE.leaderScavId)
            : STATE.scavs.find(s => s.status !== "dead");
          if (leader) {
            leader.morale = Math.max(0, leader.morale - 10);
            STATE.scavs.filter(s => s.status !== "dead" && s.id !== leader.id).forEach(s => {
              s.morale = Math.min(100, s.morale + 15);
            });
            pushToast(`${leader.name} made the call. Camp settled, even if it wasn't unanimous.`);
          }
        },
      },
      {
        label: "Put it to the group",
        detail: "Takes longer. Everyone has a say. The decision sticks better.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.min(100, s.morale + 10);
          });
          pushToast("Group made the call together. Slower but steadier.");
        },
      },
      {
        label: "Table it — not the right moment",
        detail: "Wait for a clearer head. Or for things to get worse.",
        effect: () => {
          STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
            s.morale = Math.max(0, s.morale - 8);
          });
          pushToast("Nobody decided. The tension stays.");
        },
      },
    ],
  },
  {
    id: "ghost_of_the_camp",
    title: "Something Left Behind",
    flavor: "One of the scavs hasn't come out of their corner since the last run. Their gear is still stacked by the fire. They haven't asked to go out. Haven't said anything. Just — present, in the way a photo is present.",
    weight: 0.8,
    trigger: () => STATE.scavs.some(s => s.status !== "dead" && s.morale < 25 && s.stats.raidsSurvived > 3),
    options: [
      {
        label: "Give them space and time",
        detail: "Some things take as long as they take.",
        effect: () => {
          const scav = STATE.scavs.find(s => s.status !== "dead" && s.morale < 25 && s.stats.raidsSurvived > 3);
          if (scav) {
            scav.morale = Math.min(100, scav.morale + 20);
            pushToast(`${scav.name} started coming back. Slowly.`);
          }
        },
      },
      {
        label: "Ask them directly what they need",
        detail: "They might not have an answer. Asking still matters.",
        effect: () => {
          const scav = STATE.scavs.find(s => s.status !== "dead" && s.morale < 25);
          if (scav) {
            scav.morale = Math.min(100, scav.morale + 30);
            pushToast(`${scav.name} said something. The camp's listening.`);
          }
        },
      },
      {
        label: "Tell them the camp still needs them",
        detail: "True. Also insufficient. But it's what gets said.",
        effect: () => {
          const scav = STATE.scavs.find(s => s.status !== "dead" && s.morale < 25);
          if (scav) {
            scav.morale = Math.min(100, scav.morale + 10);
            pushToast(`${scav.name} nodded. Went back to their corner. Still something.`);
          }
        },
      },
    ],
  },
];

// Check whether a Crossroads event should fire today. Called from
// checkDailyUpkeep once per in-game day. Only one event at a time —
// if STATE.pendingCrossroads is already set, or STATE.campEvent is
// pending, nothing new fires. Events fire at most once (tracked in
// STATE.crossroadsHistory). Among eligible events, picks by weight.
function checkCrossroadsEvents() {
  if (STATE.pendingCrossroads || STATE.campEvent) return;
  if (!Array.isArray(STATE.crossroadsHistory)) STATE.crossroadsHistory = [];
  // Roll each day — not every day fires, but when conditions are met it's
  // more likely than the old defense-only campEvent
  if (Math.random() > 0.35) return;
  const eligible = CROSSROADS_CATALOG.filter(e =>
    !STATE.crossroadsHistory.includes(e.id) && e.trigger()
  );
  if (eligible.length === 0) return;
  // Weighted random selection
  const totalWeight = eligible.reduce((s, e) => s + (e.weight || 1), 0);
  let roll = Math.random() * totalWeight;
  const chosen = eligible.find(e => { roll -= (e.weight || 1); return roll <= 0; }) || eligible[0];
  STATE.pendingCrossroads = { id: chosen.id, firedAt: gameNow() };
  saveState();
}

function showCrossroadsModal() {
  if (!STATE.pendingCrossroads) return;
  const event = CROSSROADS_CATALOG.find(e => e.id === STATE.pendingCrossroads.id);
  if (!event) { STATE.pendingCrossroads = null; return; }

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header">
        <span class="dot" style="background:var(--brass-bright);animation:pulse 2s ease-in-out infinite;"></span>
        CROSSROADS
      </div>
      <div class="panel-body">
        <div class="crossroads-title">${escapeHtml(event.title)}</div>
        <div class="crossroads-flavor">${escapeHtml(event.flavor)}</div>
        <div class="section-divider">What do you do?</div>
        <div class="crossroads-options">
          ${event.options.map((opt, i) => `
            <div class="crossroads-option" data-crossroads-option="${i}">
              <div class="crossroads-opt-label">${escapeHtml(opt.label)}</div>
              <div class="crossroads-opt-detail">${escapeHtml(opt.detail)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelectorAll("[data-crossroads-option]").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-crossroads-option"), 10);
      const opt = event.options[idx];
      if (!opt) return;
      opt.effect();
      if (!Array.isArray(STATE.crossroadsHistory)) STATE.crossroadsHistory = [];
      STATE.crossroadsHistory.push(event.id);
      STATE.pendingCrossroads = null;
      saveState();
      overlay.remove();
      renderAll();
    });
  });
}

// ===== LANDSCAPE & EXPLOSIONS =====
// A ruined city silhouette sitting at the horizon, rendered as an inline
// SVG so it scales perfectly with the scene and requires no image assets.
// The explosion flash system fires CSS-animated light bursts from random
// positions behind the ruins, simulating distant artillery or structural
// fires. Both are cosmetic-only — no game state, no performance budget
// beyond a small setInterval.

function renderLandscapeSvg() {
  // 600×120 viewBox, positioned at the bottom of the sky area.
  // Buildings are dark silhouettes — slightly lighter than black so they
  // read as shapes against the sky rather than just merging into it.
  return `
    <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none" style="width:100%;height:100%;display:block;">
      <!-- Far background: low hills/rubble mounds, darkest -->
      <ellipse cx="80" cy="110" rx="120" ry="18" fill="#090c07"/>
      <ellipse cx="300" cy="115" rx="200" ry="14" fill="#0a0d08"/>
      <ellipse cx="520" cy="108" rx="130" ry="22" fill="#090c07"/>
      <!-- Ruined buildings — mid silhouette, slightly lighter -->
      <!-- Far left: collapsed tower stump -->
      <rect x="12" y="70" width="22" height="50" fill="#0d1009"/>
      <polygon points="12,70 24,54 34,70" fill="#0d1009"/>
      <rect x="16" y="62" width="4" height="8" fill="#0d1009"/>
      <!-- Broken building left -->
      <rect x="44" y="55" width="30" height="65" fill="#101408"/>
      <rect x="44" y="55" width="14" height="30" fill="#0d1009"/>
      <rect x="62" y="48" width="12" height="20" fill="#0d1009"/>
      <!-- Shattered window rows on left building -->
      <rect x="48" y="60" width="4" height="5" fill="#060806" opacity="0.7"/>
      <rect x="56" y="60" width="4" height="5" fill="#060806" opacity="0.7"/>
      <rect x="48" y="72" width="4" height="5" fill="#060806" opacity="0.7"/>
      <!-- Mid-left: industrial chimney pair -->
      <rect x="92" y="40" width="10" height="80" fill="#0e1208"/>
      <rect x="106" y="52" width="8" height="68" fill="#0c1007"/>
      <!-- Squat industrial block -->
      <rect x="88" y="78" width="40" height="42" fill="#10150a"/>
      <!-- Central ruined tower — tallest structure, partially collapsed -->
      <rect x="180" y="22" width="26" height="98" fill="#0f1309"/>
      <rect x="200" y="22" width="6" height="40" fill="#0c1007"/>
      <!-- Jagged break at top of central tower -->
      <polygon points="180,22 186,14 192,20 198,10 204,18 206,22" fill="#0f1309"/>
      <!-- Smaller building cluster mid-center -->
      <rect x="216" y="58" width="20" height="62" fill="#0e1208"/>
      <rect x="236" y="65" width="16" height="55" fill="#0d1108"/>
      <rect x="252" y="72" width="22" height="48" fill="#0c1007"/>
      <!-- Far ruins right of center -->
      <rect x="310" y="48" width="32" height="72" fill="#0f1309"/>
      <rect x="310" y="36" width="12" height="20" fill="#0d1109"/>
      <!-- Crumbled section — angled rubble -->
      <polygon points="310,120 342,120 342,96 330,86" fill="#0a0d08"/>
      <!-- Right cluster: comms tower skeleton -->
      <rect x="380" y="30" width="6" height="90" fill="#0c1007"/>
      <rect x="386" y="30" width="6" height="90" fill="#0e1208"/>
      <line x1="383" y1="35" x2="383" y2="70" stroke="#090c07" stroke-width="2"/>
      <!-- Crossbeams on comms tower -->
      <rect x="376" y="40" width="20" height="2" fill="#090c07"/>
      <rect x="377" y="55" width="18" height="2" fill="#090c07"/>
      <rect x="378" y="68" width="16" height="2" fill="#090c07"/>
      <!-- Right: wide collapsed structure -->
      <rect x="420" y="62" width="50" height="58" fill="#101408"/>
      <rect x="420" y="50" width="22" height="20" fill="#0e1208"/>
      <polygon points="420,50 431,38 442,50" fill="#0e1208"/>
      <!-- Windows/voids right building -->
      <rect x="426" y="68" width="6" height="8" fill="#060807" opacity="0.8"/>
      <rect x="438" y="68" width="6" height="8" fill="#060807" opacity="0.8"/>
      <rect x="450" y="68" width="6" height="8" fill="#060807" opacity="0.8"/>
      <!-- Far right: small blocky ruins -->
      <rect x="490" y="75" width="18" height="45" fill="#0d1008"/>
      <rect x="512" y="82" width="22" height="38" fill="#0c1007"/>
      <rect x="538" y="68" width="14" height="52" fill="#0e1208"/>
      <rect x="556" y="78" width="30" height="42" fill="#0d1009"/>
      <!-- Distant structure far right -->
      <rect x="574" y="52" width="12" height="68" fill="#0b0e08"/>
      <polygon points="574,52 580,42 586,52" fill="#0b0e08"/>
      <!-- Rubble/debris at ground level throughout -->
      <polygon points="0,120 40,120 35,108 20,112 5,105" fill="#090c07"/>
      <polygon points="130,120 175,120 170,112 155,108 140,114" fill="#0a0d08"/>
      <polygon points="270,120 310,120 305,110 290,114 275,108" fill="#090c07"/>
      <polygon points="360,120 400,120 395,112 380,116 365,110" fill="#0a0d08"/>
      <polygon points="560,120 600,120 600,110 585,114 568,108" fill="#090c07"/>
    </svg>
  `;
}

let explosionInterval = null;

function startExplosions() {
  if (explosionInterval) return;

  function fireExplosion() {
    const layer = document.getElementById("cfExplosionLayer");
    if (!layer) return;

    // Random position biased toward the horizon area where the ruins are
    const x = 5 + Math.random() * 90; // % from left
    const y = 30 + Math.random() * 35; // % from top — horizon band

    // Random character for the flash: large or small burst
    const isBig = Math.random() < 0.3;
    const size = isBig ? (60 + Math.random() * 80) : (25 + Math.random() * 40);

    // Color: primarily orange/amber, occasionally white-hot
    const isWhite = Math.random() < 0.15;
    const color = isWhite
      ? `rgba(255,240,200,0.9)`
      : `rgba(${200 + Math.floor(Math.random()*55)},${80 + Math.floor(Math.random()*60)},20,0.85)`;

    const flash = document.createElement("div");
    flash.className = "cf-explosion" + (isBig ? " big" : "");
    flash.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle, ${color} 0%, transparent 70%);
      pointer-events: none;
      z-index: 3;
    `;
    layer.appendChild(flash);

    // Secondary smaller flash slightly offset for realism
    if (isBig) {
      const secondary = document.createElement("div");
      secondary.style.cssText = `
        position: absolute;
        left: ${x + (Math.random() - 0.5) * 6}%;
        top: ${y + (Math.random() - 0.5) * 4}%;
        width: ${size * 0.4}px;
        height: ${size * 0.4}px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,220,120,0.8) 0%, transparent 70%);
        pointer-events: none;
        z-index: 3;
      `;
      layer.appendChild(secondary);
      setTimeout(() => secondary.remove(), 300);
    }

    // Animate: quick bright flash then fade
    flash.animate([
      { opacity: 0, transform: "translate(-50%, -50%) scale(0.3)" },
      { opacity: 1, transform: "translate(-50%, -50%) scale(1)", offset: 0.12 },
      { opacity: 0.7, transform: "translate(-50%, -50%) scale(1.1)", offset: 0.3 },
      { opacity: 0, transform: "translate(-50%, -50%) scale(1.4)" },
    ], {
      duration: isBig ? 800 : 400,
      easing: "ease-out",
      fill: "none",
    }).onfinish = () => flash.remove();

    // Brief sky illumination — flash the whole scene with a warm glow
    const scene = document.getElementById("campfireScene");
    if (scene && isBig) {
      scene.style.transition = "filter 0.05s ease-out";
      scene.style.filter = `brightness(1.15) sepia(0.3)`;
      setTimeout(() => {
        scene.style.transition = "filter 0.4s ease-out";
        scene.style.filter = "";
      }, 60);
    }
  }

  // Schedule next explosion with random interval — clusters occasionally
  function scheduleNext() {
    // Base interval 4-18 seconds, occasionally a quick follow-up burst
    const baseDelay = 4000 + Math.random() * 14000;
    explosionInterval = setTimeout(() => {
      fireExplosion();
      // 25% chance of a rapid second explosion nearby 300-800ms later
      if (Math.random() < 0.25) {
        setTimeout(fireExplosion, 300 + Math.random() * 500);
      }
      scheduleNext();
    }, baseDelay);
  }

  scheduleNext();
}



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
  } else {
    // Track successful defenses for personal objectives
    defenders.forEach((s) => {
      s.stats.defenseWins = (s.stats.defenseWins || 0) + 1;
    });
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
  // Fieldcraft's lightfoot/ghostRun duration reduction — take the best
  // across the group (the efficient one sets the pace for the whole group,
  // same as Workshop's reduction applies to everyone equally) then stack
  // with the Workshop multiplier. Stalker's duration is additive (slower
  // movement) while Fieldcraft's is multiplicative (fewer wasted steps).
  const bestFieldcraftMult = Math.min(...scavs.map((s) => scavSkillBonuses(s).raidDurationMult || 1));
  const stalkerBonus = scavs.reduce((sum, s) => sum + (scavSkillBonuses(s).stalkerDurationAdd || 0), 0);
  // Personal objective speed bonus — takes the best across the group
  // (same logic as bestFieldcraftMult: whoever's fastest sets the pace)
  const objSpeedBonus = Math.max(0, ...scavs.map(s => s.objectiveRaidSpeed || 0));
  const chartedRoutesMult = (map.dungeon && isResearchUnlocked("chartedRoutes")) ? 0.9 : 1;
  const baseDuration = (map.dungeon || map.arena) ? map.duration : raidPathDuration(map, selectedRooms);
  const duration = map.arena ? map.duration : Math.max(8, Math.round(baseDuration * raidDurationMult() * bestFieldcraftMult * chartedRoutesMult * (1 + stalkerBonus) * (1 - objSpeedBonus)));
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
    weatherId: getWeatherIdForDay(getDayNumber()), // locked in at launch, same reasoning as nightRaid — a raid spanning a day boundary keeps the weather it left under, not whatever the new day rolls
    effects: [], // accumulated consequences from event choices, applied at resolution
    eventLog: [], // { eventTitle, optionLabel } history, shown in the field report
    // Snapshot the room types the player chose for this raid's route —
    // locked in at launch so the event biasing during the raid reflects
    // the path that was actually committed to, not whatever the player
    // might later change in the route planner for a different raid.
    roomTypes: MAP_LAYOUTS[mapId]
      ? (selectedRooms.length > 0 ? selectedRooms.map(id => {
          const room = MAP_LAYOUTS[mapId].rooms.find(r => r.id === id);
          return room ? room.type : "utility";
        }) : [])
      : [],
    intervention: null,      // null | "extract_early" | "push_deeper" | "ignored"
    interventionLootBoost: 0, // accumulated loot multiplier bonus from push_deeper
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
    // Never resolves while a choice is still awaiting the player's
    // response — without this, a raid running up against its own
    // duration with an unanswered event/boss modal still open could
    // have that choice silently yanked away and the raid resolved
    // without it ever being made. The raid just keeps running past its
    // own nominal duration until the player actually answers; there's
    // no real harm in a raid taking a little longer than planned if
    // someone stepped away from the modal, only in resolving it
    // without the choice that was supposed to happen first.
    if (raid.pendingEvent || raid.pendingBoss) continue;
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
// Compute event selection weights based on the room types the player
// chose for this raid's route. Hostile rooms tilt toward enemy events,
// loot rooms toward cache/supply events, supply rooms toward medical
// events. Biasing is intentionally modest — a hostile-heavy path should
// make enemy encounters more likely, not guaranteed.
function roomTypeBias(roomTypes) {
  if (!roomTypes || roomTypes.length === 0) return {};
  const counts = { hostile: 0, loot: 0, supply: 0, total: roomTypes.length };
  for (const t of roomTypes) {
    if (t === "hostile") counts.hostile++;
    else if (t === "loot") counts.loot++;
    else if (t === "supply") counts.supply++;
  }
  return {
    hostileFrac: counts.hostile / counts.total,
    lootFrac: counts.loot / counts.total,
    supplyFrac: counts.supply / counts.total,
  };
}

function pickRaidEvent(pool, atNight, roomTypes) {
  const bias = roomTypeBias(roomTypes);
  const weighted = [];
  for (const event of pool) {
    let weight = 1;
    // Night multiplier (existing)
    if (atNight && event.enemy) weight *= NIGHT_ENEMY_EVENT_WEIGHT;
    // Room type biasing — hostile rooms boost enemy events, loot rooms
    // boost non-enemy events, supply rooms boost supply-flavoured events.
    // Implemented as a multiplier so the effect stacks with night properly.
    if (event.enemy && bias.hostileFrac > 0.3) weight *= 1 + bias.hostileFrac;
    if (!event.enemy && bias.lootFrac > 0.3) weight *= 1 + bias.lootFrac * 0.8;
    // Supply room bias: favour events with positive lootMult (caches,
    // locked lockers) since we don't have a dedicated "supply" event tag
    if (!event.enemy && bias.supplyFrac > 0.3) {
      const hasPositiveLoot = event.options && event.options.some(o => o.effect && o.effect.lootMult > 1.3);
      if (hasPositiveLoot) weight *= 1 + bias.supplyFrac * 0.7;
    }
    // Push the event once per weight unit — integer-floored to keep it simple
    const count = Math.max(1, Math.round(weight));
    for (let i = 0; i < count; i++) weighted.push(event);
  }
  return pick(weighted);
}

// Sequential timing windows for a dungeon's multi-stage structure —
// stage 1 (first regular event) fires early, stage 2 (second regular
// event) fires in the middle third, and the boss (see
// checkBossEncounters' own 0.3-0.75 window) fires late. Deliberately
// not perfectly evenly split into thirds — a little overlap margin on
// each window (35%/65% rather than a strict 33%/67%) gives each stage's
// random per-tick roll (RAID_EVENT_CHANCE_PER_TICK) enough real time to
// actually land before its window closes, rather than a razor-thin
// window where bad luck could skip a stage's chance to fire entirely.
const DUNGEON_STAGE_WINDOWS = [
  { minProgress: 0, maxProgress: 0.35 },
  { minProgress: 0.35, maxProgress: 0.65 },
];

function checkRaidEvents() {
  let fired = false;
  for (const raid of STATE.activeRaids) {
    if (raid.resolved || raid.pendingEvent) continue;
    const map = MAPS.find((m) => m.id === raid.mapId);
    if (!map) continue;
    // Non-dungeons keep the original one-event-total cap. Dungeons can
    // fire up to stageCount-1 regular events (the boss occupies the
    // final stage slot, handled separately by checkBossEncounters) —
    // see DUNGEONS' stageCount field and the block comment on the old
    // version of this exclusivity check for why dungeons were already
    // special-cased here even before stages existed (the boss being
    // guaranteed rather than the rare exception there).
    const maxRegularEvents = map.dungeon ? (map.stageCount || 3) - 1 : 1;
    if (raid.eventLog.length >= maxRegularEvents) continue;
    if (raid.bossEncountered && !map.dungeon) continue;
    const elapsed = (gameNow() - raid.startedAt) / 1000;
    const progress = elapsed / raid.duration;
    if (map.dungeon) {
      // Confined to this stage's own window specifically — a dungeon
      // raid's 2nd regular event shouldn't fire during what's supposed
      // to be the 1st stage's window, or vice versa once one's already
      // fired late. raid.eventLog.length is exactly which stage (0 or
      // 1) is currently up next, since each resolved event advances it.
      const stageIndex = raid.eventLog.length;
      const window = DUNGEON_STAGE_WINDOWS[stageIndex];
      if (!window || progress < window.minProgress || progress > window.maxProgress) continue;
    } else {
      if (elapsed >= raid.duration * 0.85) continue;
    }
    let pool = eligibleRaidEvents(map);
    if (!pool.length) continue;
    // Repeat-avoidance — only matters once a raid can fire more than one
    // event at all (dungeons), so a 2-stage dungeon run doesn't have a
    // real chance of rolling the exact same encounter twice in a row.
    // Falls back to allowing repeats only if excluding them would leave
    // nothing eligible at all (a very low-risk dungeon with a thin
    // pool), rather than ever skipping a stage's event entirely over it.
    const firedIds = raid.eventLog.map((e) => e.eventId);
    const freshPool = pool.filter((e) => !firedIds.includes(e.id));
    if (freshPool.length) pool = freshPool;
    if (Math.random() < RAID_EVENT_CHANCE_PER_TICK) {
      const chosenEvent = pickRaidEvent(pool, raid.nightRaid, raid.roomTypes);
      // Stalker background: if the chosen event would be a hostile
      // encounter, a Stalker in the group gets a second roll at a
      // reduced chance — their instinct to avoid being caught in the
      // open doesn't stop floods or sealed doors, just ambushes.
      if (chosenEvent.enemy) {
        const raidScavs = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
        const stalkerMult = raidScavs.reduce((m, s) => m * (scavSkillBonuses(s).stalkerEnemyChanceMult || 1), 1);
        if (stalkerMult < 1 && Math.random() > stalkerMult) continue; // stalker dodged it
      }
      raid.pendingEvent = { eventId: chosenEvent.id, firedAt: gameNow() };
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
    // Never fires while a regular event is still awaiting the player's
    // response — bossFired latches permanently true the instant this
    // function decides to fire (no chance roll, just a window check,
    // unlike regular events), so doing that while another modal is
    // already open would mean the boss modal silently never shows and
    // nothing ever gets a second chance to fire it for this raid. Held
    // back here rather than skipped outright: the very next tick where
    // pendingEvent has been resolved, this re-checks and fires
    // normally, as long as the window hasn't fully closed by then.
    if (raid.pendingEvent) continue;
    const map = MAPS.find((m) => m.id === raid.mapId);
    const elapsed = (gameNow() - raid.startedAt) / 1000;
    const progress = elapsed / raid.duration;
    // Dungeons get a wider late-end window than regular maps (0.92 vs
    // 0.75) — the multi-stage structure means stage 2's event can still
    // be sitting unanswered when the boss's window would otherwise
    // open, and the pendingEvent check above correctly holds the boss
    // back until that's resolved. Without the extra margin here, a
    // player who simply takes their time answering that popup (more
    // than the ~10% of the raid's duration the original 0.75 cutoff
    // left to spare) could cause the boss to miss its window and never
    // fire at all for that raid — worse than the bug this was fixing,
    // since it'd be reachable through completely normal play rather
    // than only a rare timing coincidence.
    const maxProgress = map && map.dungeon ? 0.92 : 0.75;
    if (progress < 0.3 || progress > maxProgress) continue;
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
    // quickRead: reduces time penalties from events (positive timeAddSec
    // only — doesn't affect time you save by making the fast choice)
    let timeAdd = effect.timeAddSec;
    if (timeAdd > 0) {
      const raidScavs = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
      const bestQuickRead = Math.min(...raidScavs.map((s) => scavSkillBonuses(s).quickReadTimeMult || 1));
      timeAdd = Math.round(timeAdd * bestQuickRead);
    }
    const newRemaining = Math.max(2, remaining + timeAdd);
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

// Mid-raid player interventions — distinct from pendingEvent (which is an
// event that needs a response before the raid continues) in that the
// player can ignore these entirely and the raid finishes normally. Two
// types: extract_early immediately ends the raid with proportional loot,
// push_deeper spends meds to boost the loot on return, ignored means the
// player saw the window but didn't act.
function resolveRaidIntervention(raidId, type) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || raid.resolved || raid.intervention) return false;
  const now = gameNow();
  const elapsed = (now - raid.startedAt) / 1000;
  const progress = elapsed / raid.duration;

  if (type === "extract_early") {
    // End the raid now at proportional loot — scav gets home safe with
    // whatever they could grab from however far they got. Raid is
    // immediately moved to completion with adjusted duration.
    raid.intervention = "extract_early";
    // Force the raid to complete on the next checkRaidCompletions by
    // setting its duration to exactly elapsed — the same technique
    // boss encounters use when they need to snap a raid to completion.
    raid.duration = elapsed;
    raid.interventionLootBoost = -(1 - progress) * 0.6; // penalty: partial loot
    saveState();
    return true;
  }
  if (type === "push_deeper") {
    // Spend meds to push further into the map — higher injury risk but
    // better loot on return. Only available while meds can actually be
    // spent (the benefit is meaningless if the camp is already out).
    const medsCost = 2;
    if ((STATE.resources.meds || 0) < medsCost) return false;
    STATE.resources.meds -= medsCost;
    raid.intervention = "push_deeper";
    raid.interventionLootBoost = 0.35; // boost: worth the meds
    // Also increases injury risk for this raid
    raid.effects = raid.effects || [];
    raid.effects.push({ injuryRiskAdd: 0.15 });
    saveState();
    return true;
  }
  if (type === "ignore") {
    raid.intervention = "ignored";
    saveState();
    return true;
  }
  return false;
}

function resolveRaidEventChoice(raidId, optionIndex) {
  const raid = STATE.activeRaids.find((r) => r.id === raidId);
  if (!raid || !raid.pendingEvent) return false;
  const eventDef = getRaidEvent(raid.pendingEvent.eventId);
  const option = eventDef && eventDef.options[optionIndex];
  if (!option) return false;

  raid.eventLog.push({ eventId: eventDef.id, eventTitle: eventDef.title, optionLabel: option.label });
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
  const pool = getBossUniqueForMap(raid.bossLog.mapId);
  if (!pool || !pool.length) return null;
  if (Math.random() >= BOSS_UNIQUE_DROP_CHANCE) return null;
  // One roll decides IF something drops at all (above); this pick
  // decides WHICH of the map's possible uniques it turns out to be —
  // see the comment on BOSS_UNIQUE_CATALOG for why a map with more
  // possible drops doesn't also get a higher overall chance of dropping
  // something, just more variety in what that something is.
  const drop = pick(pool);
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
  const deepReconBonus = isResearchUnlocked("deepRecon") ? 0.05 : 0;
  if (Math.random() >= DUNGEON_KEY_DROP_CHANCE + deepReconBonus) return null;
  addDungeonKey(map.requiresKey, 1);
  return { keyId: map.requiresKey, key: getDungeonKeyDef(map.requiresKey) };
}

// Region boss kills have a small independent chance of yielding a dungeon
// key — a secondary path to first-dungeon access that doesn't require
// either already being inside a dungeon (the primary 10% self-drop above)
// or depending on Flea Market luck (the only other existing path). Lower
// chance than the dungeon's own self-drop (3% vs 10%) since farming region
// bosses should be a meaningful but not dominant key source. Each boss
// maps to one specific key rather than a random roll — thematically tied
// to that boss's own setting, so there's a real strategic target for players
// who want a specific dungeon key rather than just "kill any boss and hope."
const REGION_BOSS_KEY_DROP_CHANCE = 0.03;
const REGION_BOSS_KEY_MAP = {
  // Vault Key — urban/institutional bosses, the kind who'd have had
  // access to or known about a pre-collapse bank vault
  lot: "vault_key",
  depot: "vault_key",
  precinct: "vault_key",
  tower: "vault_key",
  refinery: "vault_key",
  // Halcyon Keycard — clinical or secretive bosses, the kind who'd have
  // passed through or known about a black-site facility
  marina: "halcyon_key",
  hospital: "halcyon_key",
  farmstead: "halcyon_key",
  // Drydock Key — water-adjacent or industrial/transit bosses, the kind
  // who'd have had reason to go near the docks
  suburb: "drydock_key",
  metro: "drydock_key",
  drowned: "drydock_key",
};
function resolveRegionBossKeyDrop(raid, map) {
  if (!map || map.dungeon || map.arena) return null;
  if (!raid.bossLog || raid.bossLog.isFlee) return null;
  const keyId = REGION_BOSS_KEY_MAP[map.id];
  if (!keyId) return null;
  if (Math.random() >= REGION_BOSS_KEY_DROP_CHANCE) return null;
  addDungeonKey(keyId, 1);
  return { keyId, key: getDungeonKeyDef(keyId) };
}

// NG+-exclusive unique drop — completely independent of
// BOSS_UNIQUE_CATALOG's per-map pools, gated behind STATE.ngPlusLevel
// rather than which boss was killed or which map it happened on. Any
// boss kill (region or dungeon) is eligible once the gate is open.
// Genuinely rare (2%, well below the regular boss-unique rate) since
// these are tier-7 items meant to feel like a real prestige-depth
// reward, not something routinely farmed once the gate opens.
const NG_PLUS_UNIQUE_DROP_CHANCE = 0.02;
const NG_PLUS_UNIQUE_MIN_LEVEL = 2;
const NG_PLUS_UNIQUE_POOL = [
  { slot: "weapon", id: "ashbringer" },
  { slot: "armor", id: "last_resolve" },
];
function resolveNgPlusUniqueDrop(raid) {
  if ((STATE.ngPlusLevel || 0) < NG_PLUS_UNIQUE_MIN_LEVEL) return null;
  if (!raid.bossLog || raid.bossLog.isFlee) return null;
  if (Math.random() >= NG_PLUS_UNIQUE_DROP_CHANCE) return null;
  const drop = pick(NG_PLUS_UNIQUE_POOL);
  const item = getGearItem(drop.slot, drop.id);
  const hadBefore = stashCount(drop.slot, drop.id) > 0;
  addToStash(drop.slot, drop.id, 1);
  return { slot: drop.slot, item, hadBefore };
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
//
// One exception to "no gear-modified formula" above: unique gear
// specifically gives a flat win-chance bonus, +4% per unique piece
// equipped (weapon/armor/pack), capping at +12% with a full unique set
// — e.g. 18% base -> 30% with all three. Stacks additively on top of
// whatever ARENA_WIN_CHANCE currently is (already adjusted for NG+
// level by this point, not the original 18% baseline), so a deep-
// prestige run with a full unique set still gets the full +12%, just
// added to a lower starting number. Regular (non-unique) gear tier
// still does nothing here — this is specifically a reward for unique
// items, not a continuation of the normal combat-power formula the
// rest of the game already uses everywhere else.
const ARENA_UNIQUE_WIN_BONUS_PER_PIECE = 0.04;
function arenaUniqueGearWinBonus(scav) {
  const slots = ["weapon", "armor", "pack"];
  const uniqueCount = slots.filter((slot) => getGearItem(slot, scav.gear[slot]).unique).length;
  return uniqueCount * ARENA_UNIQUE_WIN_BONUS_PER_PIECE;
}

// Single shared source for the Arena's actual win chance — used by the
// real roll in resolveArenaRaid below AND both display sites (the
// bottom bar and the tab header), so the number shown before launch
// can never drift from the number actually used. Previously this
// formula was written out three separate times; folding research's
// bonuses in here means they apply correctly everywhere at once rather
// than needing the same edit made three times (and three places to
// possibly miss one of).
function arenaEffectiveWinChance(scav) {
  const readTheCrowdBonus = isResearchUnlocked("readTheCrowd") ? 0.03 : 0;
  const floor = isResearchUnlocked("houseAlwaysWins") ? 0.25 : 0;
  const raw = ARENA_WIN_CHANCE + arenaUniqueGearWinBonus(scav) + readTheCrowdBonus;
  return Math.max(floor, Math.min(0.95, raw));
}

// Same shared-source reasoning as arenaEffectiveWinChance — used by the
// actual roll and both display sites, so Showmanship's bonus shows up
// correctly everywhere the gold range is shown, not just where it's
// actually rolled.
function arenaGoldRange() {
  const showmanshipMult = isResearchUnlocked("showmanship") ? 1.15 : 1;
  return {
    min: Math.round(ARENA_GOLD_MIN * showmanshipMult),
    max: Math.round(ARENA_GOLD_MAX * showmanshipMult),
  };
}

function resolveArenaRaid(raid, map) {
  raid.resolved = true;
  const scav = STATE.scavs.find((s) => s.id === raid.scavIds[0]);
  if (!scav) return;

  const effectiveWinChance = arenaEffectiveWinChance(scav);
  const won = Math.random() < effectiveWinChance;
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
    const goldRange = arenaGoldRange();
    outcome.loot = { gold: randInt(goldRange.min, goldRange.max) };
    STATE.resources.gold = (STATE.resources.gold || 0) + outcome.loot.gold;
    scav.stats.goldBrought += outcome.loot.gold;
    // Guaranteed gear on a win, same rollGearFind everything else in the
    // game uses for a find — forceFind:true skips the normal per-map
    // gearFindChance roll, since the win itself is already the rare part.
    const gearFind = rollGearFind(map, true);
    if (gearFind) outcome.gearFind = gearFind;
    recordArenaWin(scav);
  }
  scav.stats.raidsSurvived += 1; // the arena always survives, by design — see the block comment near the top of this function
  checkRaidsSurvivedMilestone(scav);

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

  checkQuestProgress();
  STATE.log.unshift({ ts: Date.now(), outcome });
  STATE.log = STATE.log.slice(0, 30);
  activeModalRaid = { raid, outcome };
}

function resolveRaid(raid) {
  raid.resolved = true;
  // Cleans up after itself rather than leaving a permanently-unreachable
  // entry behind — once a raid resolves it leaves STATE.activeRaids for
  // good, so its id in scavBubbleState (see getOrRollScavBubble) would
  // otherwise just sit there forever, never read again by anything.
  delete scavBubbleState[raid.id];
  const map = MAPS.find((m) => m.id === raid.mapId);
  const scavs = raid.scavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  if (!scavs.length || !map) return;

  if (map.arena) {
    resolveArenaRaid(raid, map);
    return;
  }

  const isGroup = scavs.length > 1;
  const { survival, lootMult } = calcGroupOdds(scavs, map, raid.gearById, raid.weatherId);
  // Falls back to clear weather (no modifiers) for any raid that was
  // already in flight when this feature shipped — an old in-progress
  // raid simply has no weatherId stored on it at all, same general
  // backfill philosophy as loadState's other fields: treat genuinely
  // missing history as the neutral case rather than guessing at it.
  const weather = WEATHER_CATALOG[raid.weatherId] || WEATHER_CATALOG.clear;

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
  const interventionMult = 1 + (raid.interventionLootBoost || 0);
  const adjustedLootMult = lootMult * lootEffectMult * nightLootMult * interventionMult;

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

    // Credited to every surviving member, not split between them — the
    // group brought this haul home together, same reasoning as the
    // boss-kill credit just below. A solo raider gets full credit for
    // their own haul; a 3-person group each separately get full credit
    // for the same haul, since "how much has this scav personally
    // helped bring home over their career" is the stat in question, not
    // "how much of any one haul was uniquely theirs."
    for (const { scav, survived } of perScav) {
      if (!survived) continue;
      scav.stats.scrapBrought += loot.scrap || 0;
      scav.stats.goldBrought += loot.gold || 0;
      scav.stats.medsBrought += loot.meds || 0;
      scav.stats.foodBrought += loot.food || 0;
    }

    const gearFind = rollGearFind(map, forceGearFind);
    if (gearFind) outcome.gearFind = gearFind;

    const intelFind = rollIntelFind(map);
    if (intelFind) outcome.intelFind = intelFind;

    const bossDrop = resolveBossKillDrop(raid);
    if (bossDrop) outcome.bossDrop = bossDrop;

    // "Beaten" specifically means survived a boss encounter that wasn't
    // fled — same condition resolveBossKillDrop already requires for a
    // unique to drop, checked here explicitly rather than inferred from
    // whether a drop happened to roll, since a beaten boss with no
    // drop that particular time should still count. Drives which lore
    // tier the Codex shows for this boss — see renderCodexBossesTab.
    if (raid.bossLog && !raid.bossLog.isFlee) {
      STATE.bossesBeaten[raid.bossLog.mapId] = true;
      // Same group-credit reasoning as the loot stats above — everyone
      // who survived this raid was part of beating that boss, so
      // everyone's personal kill count for this map goes up by one,
      // not just whoever's "the lead" on a group raid.
      for (const { scav, survived } of perScav) {
        if (!survived) continue;
        const mapId = raid.bossLog.mapId;
        const isFirstKill = (scav.stats.bossKills[mapId] || 0) === 0;
        scav.stats.bossKills[mapId] = (scav.stats.bossKills[mapId] || 0) + 1;
        if (isFirstKill) {
          const boss = getBossForMap(mapId);
          queueMilestone(`${scav.name} took down ${boss ? boss.name : "a boss"} for the first time.`);
        }
      }
    }

    const keyDrop = resolveDungeonKeyDrop(raid, map);
    if (keyDrop) outcome.keyDrop = keyDrop;
    const regionKeyDrop = resolveRegionBossKeyDrop(raid, map);
    if (regionKeyDrop) outcome.regionKeyDrop = regionKeyDrop;
    const ngPlusDrop = resolveNgPlusUniqueDrop(raid);
    if (ngPlusDrop) outcome.ngPlusDrop = ngPlusDrop;
  }

  for (const { scav, survived } of perScav) {
    if (survived) {
      scav.stats.raidsSurvived += 1;
      checkRaidsSurvivedMilestone(scav);
      // Track stats needed by personal objectives
      if (!map.dungeon && !map.arena) {
        if (map.riskMult <= 1.5) scav.stats.lowRiskRaids = (scav.stats.lowRiskRaids || 0) + 1;
        // Near-death return: survived with <= 20% max HP
        if (scav.hp <= effectiveMaxHp(scav) * 0.2) scav.stats.nearDeathReturn = true;
        // Survived while hurt (below 50% at start of raid — approximated by end HP)
        if (scav.hp < effectiveMaxHp(scav) * 0.5) scav.stats.survivedWhileHurt = true;
        // Weather-specific raid tracking
        if (raid.weatherId) {
          if (!scav.stats.weatherRaids) scav.stats.weatherRaids = {};
          scav.stats.weatherRaids[raid.weatherId] = true;
        }
      }
    }
    const detail = { name: scav.name, id: scav.id, survived };
    if (survived) {
      const skills = scavSkillBonuses(scav);

      // Track which maps this scav has run for siteKnowledge
      if (!scav.mapRunCounts) scav.mapRunCounts = {};
      scav.mapRunCounts[map.id] = (scav.mapRunCounts[map.id] || 0) + 1;

      // Track raid bond counts with squadmates (for warBond)
      if (!scav.raidBondCounts) scav.raidBondCounts = {};
      for (const partnerId of raid.scavIds) {
        if (partnerId !== scav.id) {
          scav.raidBondCounts[partnerId] = (scav.raidBondCounts[partnerId] || 0) + 1;
        }
      }

      // Injury roll — secondWind gives a 30% chance to ignore it entirely
      const injuryRoll = Math.random();
      const injuryChance = Math.max(0, Math.min(0.9, (0.15 + (map.riskMult - 1) * 0.1 + injuryRiskAdd) * skills.injuryChanceMult));
      const injuryWouldHit = injuryRoll < injuryChance;
      const secondWindBlocked = injuryWouldHit && skills.secondWindChance > 0 && Math.random() < skills.secondWindChance;
      // executioner: no injury on boss kills specifically
      const executionerBlocked = injuryWouldHit && skills.executioner && outcome.bossLog && !outcome.bossLog.isFlee;
      if (injuryWouldHit && !secondWindBlocked && !executionerBlocked) {
        // Triage Protocol research: -10% injury severity, camp-wide,
        // applied as its own multiplier alongside the per-scav
        // skills.injurySeverityMult rather than folded into it —
        // scavSkillBonuses is conceptually this scav's own personal
        // bonuses; mixing camp-wide research in there would blur that
        // boundary the same way Leader/weather mitigation are kept as
        // their own separate multipliers rather than merged into it.
        const triageMult = isResearchUnlocked("triageProtocol") ? 0.9 : 1;
        const objInjuryMult = 1 - (scav.objectiveInjuryReduction || 0);
        const sevRoll = randInt(15, 40) * skills.injurySeverityMult * triageMult * objInjuryMult;
        scav.hp = Math.max(5, Math.round(scav.hp - sevRoll));
        detail.injured = true;
        detail.hpLost = Math.round(sevRoll);
        // bigHitSurvived: took a hit severe enough to kill most scavs
        // (30+ raw HP loss) and stayed on their feet — Tough objective
        if (sevRoll >= 30) scav.stats.bigHitSurvived = true;
      } else {
        detail.injured = false;
        if (secondWindBlocked) detail.secondWind = true;
        if (executionerBlocked) detail.executionerBlocked = true;
      }

      // Radiation exposure
      let radCap = skills.radProof ? Math.floor(RADIATION_CAP * 0.5) : RADIATION_CAP;
      if (Math.random() < radiationChance(map) * skills.radiationChanceMult * weatherMitigatedMult(weather.radiationChanceMult, true) * deconTentRadiationChanceMult()) {
        // Rad Suppressants research: -10% radiation exposure amount, camp-wide
        const radSuppressantsMult = isResearchUnlocked("radSuppressants") ? 0.9 : 1;
        const exposure = Math.round(randInt(RADIATION_EXPOSURE_MIN, RADIATION_EXPOSURE_MAX) * skills.radiationExposureMult * radSuppressantsMult);
        scav.radiation = Math.min(radCap, scav.radiation + exposure);
        scav.hp = Math.min(scav.hp, effectiveMaxHp(scav));
        detail.irradiated = true;
        detail.radiationGained = exposure;
      }
      // cleanBlood: radiation drops a little each survival
      if (skills.cleanBloodRadPerSurvival && scav.radiation > 0) {
        scav.radiation = Math.max(0, scav.radiation - skills.cleanBloodRadPerSurvival);
      }

      // Morale — veteransCalm: no loss on easy successful raids
      const veteransCalmThreshold = skills.veteransCalm === 2 ? 2.5 : skills.veteransCalm === 1 ? 2.0 : 0;
      const moraleExempt = veteransCalmThreshold > 0 && map.riskMult <= veteransCalmThreshold;
      if (!moraleExempt) {
        const moraleDrop = Math.round(moraleDropForMap(map) * skills.moraleDropMult * weatherMitigatedMult(weather.moraleDropMult, true) * leaderMoraleDropMult());
        // rally: surviving below 25 morale gives +20 instead of a drop
        if (skills.rally && scav.morale < 25) {
          scav.morale = Math.min(100, scav.morale + 20);
          detail.rallied = true;
        } else {
          scav.morale = Math.max(skills.moraleFloor, scav.morale - moraleDrop);
        }
      }

      if (skills.scroungerBonus) {
        for (const [res, amt] of Object.entries(skills.scroungerBonus)) {
          STATE.resources[res] = (STATE.resources[res] || 0) + amt;
        }
        detail.scroungerBonus = skills.scroungerBonus;
      }
      // opportunistBossBonus: extra resources on boss kills
      if (skills.opportunistBossBonus && outcome.bossLog && !outcome.bossLog.isFlee) {
        for (const [res, amt] of Object.entries(skills.opportunistBossBonus)) {
          STATE.resources[res] = (STATE.resources[res] || 0) + amt;
        }
        detail.opportunistBonus = skills.opportunistBossBonus;
      }
      // blackMarket: 15% chance of a bonus gear find
      if (skills.blackMarketChance && Math.random() < skills.blackMarketChance && !outcome.gearFind) {
        const bmFind = rollGearFind(map);
        if (bmFind) { outcome.gearFind = bmFind; detail.blackMarketFind = true; }
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
      scav.diedOnMapName = map.name;
      scav.diedOnDay = getDayNumber();
      detail.lostGear = ["weapon", "armor", "pack"]
        .map((slot) => getGearItem(slot, scav.gear[slot]))
        .filter((item) => item && item.tier > 0);
      detail.raidsSurvived = scav.stats.raidsSurvived;
      // Cause of death — used by composeDeathLine for specific narrative.
      // Priority: boss fight > hostile event > any event > attrition.
      if (outcome.bossLog && !outcome.bossLog.isFlee) {
        detail.deathCause = "boss";
        detail.deathDetail = outcome.bossLog.bossName;
      } else {
        const hostileEvent = (raid.eventLog || []).findLast?.(e => {
          const ev = RAID_EVENTS.find(r => r.id === e.eventId);
          return ev && ev.enemy;
        }) || (raid.eventLog || []).filter(e => {
          const ev = RAID_EVENTS.find(r => r.id === e.eventId);
          return ev && ev.enemy;
        }).pop();
        const anyEvent = (raid.eventLog || []).slice(-1)[0];
        if (hostileEvent) {
          detail.deathCause = "hostile";
          detail.deathDetail = hostileEvent.eventTitle;
        } else if (anyEvent) {
          detail.deathCause = "event";
          detail.deathDetail = anyEvent.eventTitle;
        } else {
          detail.deathCause = "attrition";
        }
      }
    }
    outcome.perScav.push(detail);
    // Personal objective stat tracking — wired here so every check()
    // function has accurate stats to read when checkPersonalObjective
    // runs immediately below.
    if (detail.survived) {
      // cleanRaids: survived without any injury (Medic no-injury objective)
      if (!detail.injured) scav.stats.cleanRaids = (scav.stats.cleanRaids || 0) + 1;
      else scav.stats.cleanRaids = 0; // streak resets on any injury
      // ghostRaids: survived without any hostile encounter (Stalker objective)
      const hadEnemy = raid.eventLog && raid.eventLog.some(e => {
        const ev = RAID_EVENTS.find(r => r.id === e.eventId);
        return ev && ev.enemy;
      });
      if (!hadEnemy) scav.stats.ghostRaids = (scav.stats.ghostRaids || 0) + 1;
      else scav.stats.ghostRaids = 0; // streak resets on any enemy encounter
      // hostilesSurvived: count each hostile encounter survived (Scrapper objective)
      if (hadEnemy) {
        const enemyCount = raid.eventLog ? raid.eventLog.filter(e => {
          const ev = RAID_EVENTS.find(r => r.id === e.eventId); return ev && ev.enemy;
        }).length : 0;
        scav.stats.hostilesSurvived = (scav.stats.hostilesSurvived || 0) + enemyCount;
      }
      // soloKills: solo boss kill (Stalker objective)
      if (raid.bossLog && !raid.bossLog.isFlee && raid.scavIds.length === 1) {
        scav.stats.soloKills = (scav.stats.soloKills || 0) + 1;
      }
    }
    // witnessedDeath: any scav who survived while a squadmate died (Composed)
    if (detail.survived) {
      const anyDied = perScav.some(ps => ps !== detail && !ps.survived);
      if (anyDied) scav.stats.witnessedDeath = true;
    }
    // Check personal objective completion after every raid resolution
    checkPersonalObjective(scav);
  }

  // Track uniquesFound for all surviving scavs if a unique item was found
  // this raid — boss drops and NG+ drops are always unique items. Done
  // outside the per-scav loop since gearFind/bossDrop are raid-level.
  if (anySurvived) {
    const foundUnique = (outcome.bossDrop && !outcome.bossDrop.hadBefore) ||
                        (outcome.ngPlusDrop && !outcome.ngPlusDrop.hadBefore);
    if (foundUnique) {
      for (const { scav, survived } of perScav) {
        if (survived) scav.stats.uniquesFound = (scav.stats.uniquesFound || 0) + 1;
      }
    }
  }

  // Convenience fields mirroring the old single-scav outcome shape, so any
  // remaining code that only handles one scav at a time still works for
  // solo raids (group size 1) without extra branching.
  const lead = outcome.perScav[0];
  outcome.died = lead.died;
  outcome.injured = lead.injured;
  outcome.hpLost = lead.hpLost;
  outcome.leveledUp = outcome.perScav.some((p) => p.leveledUp);

  // Death consequences — morale hits rippling out from any deaths on
  // this raid. Each dead scav triggers its own hit separately, so a
  // raid that loses two scavs at once is genuinely worse than one.
  const deaths = outcome.perScav.filter((d) => d.died);
  // Grave Counsel research: -15% to every death-consequence morale hit
  // below — survivor, camp-wide, and the Leader-specific hit, computed
  // once here and reused at all three application points rather than
  // re-checking isResearchUnlocked three separate times for what's
  // always the same answer within a single resolveRaid call.
  const graveCounselMult = isResearchUnlocked("graveCounsel") ? 0.85 : 1;
  for (const deadDetail of deaths) {
    const raidsSurvived = deadDetail.raidsSurvived || 0;
    const experienceWeight = Math.min(3.0, 1 + raidsSurvived / 25);
    const deadScav = STATE.scavs.find((s) => s.name === deadDetail.name && s.status === "dead");

    // Survivor morale crash — reduced by steadyPresence on any surviving
    // group member who has it (take the highest in the group)
    const maxSteadyPresence = Math.max(...outcome.perScav
      .filter((d) => !d.died)
      .map((d) => {
        const s = STATE.scavs.find((sc) => sc.id === d.id);
        return s ? (scavSkillBonuses(s).steadyPresenceMoraleReduction || 0) : 0;
      }), 0);
    const survivorHit = Math.round(Math.max(0, Math.round(15 * experienceWeight) - maxSteadyPresence) * graveCounselMult);
    for (const d of outcome.perScav) {
      if (d.died) continue;
      const survivor = STATE.scavs.find((s) => s.id === d.id);
      if (!survivor) continue;
      const skills = scavSkillBonuses(survivor);
      survivor.morale = Math.max(skills.moraleFloor, survivor.morale - survivorHit);
    }

    // Camp-wide hit — halved if the dead scav has keepItTogether
    const keepItTogetherActive = deadScav && scavSkillBonuses(deadScav).keepItTogether;
    let campHit = Math.round(8 * experienceWeight);
    if (keepItTogetherActive) campHit = Math.max(0, Math.floor(campHit / 2));
    campHit = Math.round(campHit * graveCounselMult);
    const raidScavIds = new Set(raid.scavIds);
    for (const campScav of STATE.scavs) {
      if (campScav.status !== "ready") continue;
      if (raidScavIds.has(campScav.id)) continue;
      const skills = scavSkillBonuses(campScav);
      campScav.morale = Math.max(skills.moraleFloor, campScav.morale - campHit);
    }

    // Leader-specific consequence — on top of everything above, not
    // instead of it. Scaled by the Leader's own level rather than
    // raids survived (the generic experienceWeight used everywhere
    // else in this block) — losing the person the whole camp chose to
    // follow is a different kind of loss than losing any other scav,
    // regardless of how seasoned they happened to be in the field. The
    // role goes vacant immediately (not waiting for the next hasLeader()
    // read to notice the scav's status flipped to dead) — no automatic
    // succession; the camp simply has no leader again until the player
    // does something about it, the same as it had none before day 6.
    if (deadScav && STATE.leaderScavId === deadScav.id) {
      const leaderHit = Math.round((10 + deadScav.level * 2) * graveCounselMult);
      for (const campScav of STATE.scavs) {
        if (campScav.status !== "ready") continue;
        const skills = scavSkillBonuses(campScav);
        campScav.morale = Math.max(skills.moraleFloor, campScav.morale - leaderHit);
      }
      queueMilestone(`${deadScav.name} is gone. The camp's without a leader again.`);
      STATE.leaderScavId = null;
    }
  }

  if (anySurvived) {
    // noTrace: any survivor with this skill blocks the camp defense event
    const hasNoTrace = outcome.perScav.some((d) => {
      if (d.died) return false;
      const s = STATE.scavs.find((sc) => sc.id === d.id);
      return s && scavSkillBonuses(s).noTrace;
    });
    if (!hasNoTrace && !STATE.campEvent && Math.random() < 0.05) {
      STATE.campEvent = { id: `event_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, triggeredAt: gameNow() };
      raidScreenOpen = false;
      AmbientPlayer.stop();
    }
  }

  checkQuestProgress();
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
  // Same milestone queue boss kills/raids survived/arena wins already
  // feed into (see queueMilestone) — a building going up from never
  // having existed at all, or reaching the genuinely expensive new top
  // tier, are the two moments actually worth the camp commenting on;
  // every level in between is just routine progress the same way a
  // raid that doesn't cross a round-number threshold doesn't get its
  // own milestone line either.
  if (lvl === 0) {
    queueMilestone(`The camp finished building the ${def.name}.`);
  } else if (STATE.upgrades[id] === def.maxLevel) {
    queueMilestone(`The ${def.name} is fully built out now.`);
  }
  checkQuestProgress();
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

// How many of the most recent patch entries stay in the main view. The
// rest collapse behind the "Legacy Patch Notes" button. The current
// overhaul cycle (v2.90 onward) reads as "recent"; everything older is
// legacy. Since PATCH_NOTES is newest-first, that's simply the first N.
let showLegacyPatchNotes = false;
const RECENT_PATCH_COUNT = 11;

function renderPatchEntry(entry, isLatest) {
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
}

function renderPatchNotesTab() {
  const recent = PATCH_NOTES.slice(0, RECENT_PATCH_COUNT);
  const legacy = PATCH_NOTES.slice(RECENT_PATCH_COUNT);

  const recentHtml = recent.map((entry, i) => renderPatchEntry(entry, i === 0)).join("");
  const legacyHtml = legacy.map((entry) => renderPatchEntry(entry, false)).join("");

  const legacyToggle = legacy.length
    ? `
      <button class="btn secondary" id="legacyPatchToggle" style="margin:14px 0 6px;">
        ${showLegacyPatchNotes ? "Hide" : "Legacy Patch Notes"} (${legacy.length} older ${legacy.length === 1 ? "entry" : "entries"})
      </button>
      <div class="patch-legacy-section" style="display:${showLegacyPatchNotes ? "block" : "none"};">
        ${legacyHtml}
      </div>`
    : "";

  return `<div class="patch-notes-scroll">${recentHtml}${legacyToggle}</div>`;
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
    ${STATE.leaderScavId === scav.id ? `<div class="char-leader-line">★ CAMP LEADER</div>` : ""}
    <div class="char-portrait-status">${escapeHtml(statusLabel)}</div>
    ${scav.background && SCAV_BACKGROUNDS[scav.background] ? `<div class="char-background-line" title="${escapeHtml(SCAV_BACKGROUNDS[scav.background].bonus)}" style="color:${SCAV_BACKGROUNDS[scav.background].color}">${escapeHtml(SCAV_BACKGROUNDS[scav.background].name)} — <span class="char-bg-desc">${escapeHtml(SCAV_BACKGROUNDS[scav.background].desc)}</span></div>` : ""}
    ${(() => {
      if (!scav.objective) return "";
      const def = getPersonalObjective(scav);
      if (!def) return "";
      const revealLevel = getObjectiveRevealLevel(scav);
      if (revealLevel === 0) return "";
      if (scav.objective.completed) {
        return `<div class="char-objective completed"><span class="obj-label">✓ OBJECTIVE</span> ${escapeHtml(def.title)} — <span class="obj-reward">${escapeHtml(def.rewardText)}</span></div>`;
      }
      if (revealLevel === 1) {
        return `<div class="char-objective hint"><span class="obj-label">OBJECTIVE</span> <span class="obj-hint">${escapeHtml(def.hint)}</span></div>`;
      }
      return `<div class="char-objective"><span class="obj-label">OBJECTIVE</span> ${escapeHtml(def.title)} — <span class="obj-desc">${escapeHtml(def.desc)}</span></div>`;
    })()}
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
    <button class="btn secondary char-skills-btn" id="openStatsBtn" style="margin-top:6px;">Stats</button>
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
    // Salvage button — only for items actually in the stash (not
    // equipped right now, since equipped gear isn't counted in the
    // stash at all) and never for unique/tier-0 items, which
    // salvageGear already refuses outright. Shows the scrap return on
    // the button itself so the value is visible before committing.
    const salvageable = !item.unique && item.tier > 0 && count > 0;
    const salvageBtn = salvageable
      ? `<button class="char-item-salvage-btn" data-salvage-slot="${slot}" data-salvage-id="${item.id}" title="Break down one for scrap">+${salvageValue(slot, item.id).scrap} scrap</button>`
      : "";
    return `
      <div class="char-item-tile t${item.tier} ${item.improvised ? "improvised" : ""} ${item.unique ? "unique" : ""} ${equippedHere ? "equipped" : ""} ${draggable ? "" : "unavailable"}"
           data-slot="${slot}" data-gear-id="${item.id}" draggable="${draggable && !equippedHere}">
        <div class="char-item-icon">${getGearIconSvg(slot, item.id)}</div>
        <div class="char-item-body">
          <div class="char-item-name">${escapeHtml(item.name)}</div>
          <div class="char-item-stat">${statLabel}${item.improvised ? `<span class="char-item-improvised-tag">Improvised</span>` : ""}${item.unique ? `<span class="char-item-unique-tag">Unique</span>` : ""}</div>
        </div>
        ${equippedHere ? `<div class="char-item-equipped-tag">Equipped</div>` : countLabel}
        ${salvageBtn}
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

    const openStatsBtn = overlay.querySelector("#openStatsBtn");
    if (openStatsBtn) {
      openStatsBtn.addEventListener("click", () => openStatsScreen(scav.id));
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

    // Click to salvage one copy for scrap — stopPropagation is required
    // here, not optional: this button lives inside a .char-item-tile
    // that has its own click-to-equip handler above, and without
    // stopping the bubble a salvage click would also fire an equip
    // attempt on the same tile in the same click.
    overlay.querySelectorAll("[data-salvage-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        salvageGear(btn.getAttribute("data-salvage-slot"), btn.getAttribute("data-salvage-id"));
        refresh();
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
// Centered in a square viewBox now (was off-center in a 900x700 box) —
// both grew alongside the tree itself: 2 new branches (5 spokes instead
// of 3, each 72° apart instead of 120°) and 2 new tiers per branch (5
// radius positions instead of 3, reaching further from the hub). Kept
// square and centered rather than just stretching the old rectangle,
// since an evenly-spaced 5-pointed layout reads better symmetric than
// off-axis.
// Center/radii grew to fit 7 branches (up from 5) and up to 7 nodes per
// branch (up from 5) without compressing the original layout's spacing —
// found two real rendering bugs while doing this: SKILL_WEB_BRANCH_ANGLES
// only had entries for the original 5 branches, so every node in the 2
// newer branches (fieldcraft, command) was computing position from
// undefined*Math.PI/180 = NaN, collapsing every single one of their
// nodes and connector lines onto one broken point. Separately,
// SKILL_WEB_RADII only had 5 entries, so the 6th and 7th node in any
// branch that had grown to 7 nodes (every original branch, after a
// later expansion) was hitting the same NaN collapse independently of
// the branch-angle bug. Both are fixed here: 7 angles (evenly spaced,
// 360/7° apart) and 7 radii (continuing the same 85-unit step the
// original 5 already used), with the canvas grown to fit rather than
// shrinking the existing nodes' spacing to cram a 6th/7th tier in.
const SKILL_WEB_CENTER = { x: 785, y: 785 };
const SKILL_WEB_BRANCH_ANGLES = {
  combat: -90,
  survival: -38.6,
  scavenging: 12.9,
  resilience: 64.3,
  fortitude: 115.7,
  fieldcraft: 167.1,
  command: 218.6,
};
const SKILL_WEB_RADII = [110, 195, 280, 365, 450, 535, 620, 705];

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
          <circle r="34" fill="transparent" class="skill-web-node-hit" />
          <circle r="26" class="skill-web-node-circle" />
          <text class="skill-web-node-rank" y="5">${state.rank}/${node.maxRank}</text>
        </g>
      `;
      prevPos = pos;
    });
  });

  // Branch labels sit just past the outermost node on each spoke. Uses
  // each branch's own actual node count (branch.nodes.length - 1) and
  // matching radius rather than a hardcoded index, so this keeps working
  // correctly if a future branch ends up with a different depth than
  // the others instead of silently assuming everything is the same
  // length forever.
  const labels = Object.keys(SKILL_TREE).map((branchId) => {
    const branch = SKILL_TREE[branchId];
    const outerIndex = branch.nodes.length - 1;
    const angle = (SKILL_WEB_BRANCH_ANGLES[branchId] * Math.PI) / 180;
    const outerRadius = SKILL_WEB_RADII[outerIndex];
    const labelPos = { x: SKILL_WEB_CENTER.x + (outerRadius + 50) * Math.cos(angle), y: SKILL_WEB_CENTER.y + (outerRadius + 50) * Math.sin(angle) };
    return `<text class="skill-web-branch-label" x="${labelPos.x}" y="${labelPos.y}" text-anchor="middle">${escapeHtml(branch.label)}</text>`;
  }).join("");

  return `
    <svg viewBox="0 0 1570 1570" class="skill-web-svg">
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
      // requires may be a single { id, rank } or an array of them (see
      // isSkillNodeUnlocked) — and for a cross-branch capstone like
      // Lead From Front, the prerequisite node doesn't live in this
      // node's own branch, so the lookup needs findSkillNodeAnyBranch
      // rather than getSkillNodeDef(branchId, ...), which would
      // silently fail to find it and crash on reqNode.name.
      const reqs = Array.isArray(node.requires) ? node.requires : [node.requires];
      const unmetReqs = reqs.filter((req) => getSkillRank(scav, req.id) < req.rank);
      const reqLines = unmetReqs.map((req) => {
        const found = findSkillNodeAnyBranch(req.id);
        const reqName = found ? found.node.name : req.id;
        return `${reqName} rank ${req.rank}`;
      });
      lockReason = `Requires ${reqLines.join(" and ")}`;
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
      <div class="skill-tree-hint">One point per level gained. Spent permanently on this scav only. Tap a node to see it up close.</div>
    </div>
    <div class="skill-web-clip">
      <div class="skill-web-canvas" id="skillWebCanvas">${renderSkillWebSvg(scav)}</div>
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
    // Don't replace #skillTreeBody — that would destroy #skillWebCanvas
    // and kill all the pan/zoom event listeners attached to it (the
    // listeners are on the specific DOM node, not re-added on every
    // render). Instead patch only the two things that actually change
    // after a skill point is spent: the unspent-points counter and the
    // SVG inside the canvas (node colors/ranks). The canvas div itself
    // is never touched, so pan/zoom state (pan/scale) survives.
    const pointsEl = overlay.querySelector(".skill-tree-points");
    if (pointsEl) pointsEl.innerHTML = `Unspent points: <b>${unspentSkillPoints(scav)}</b>`;
    const canvasInner = overlay.querySelector("#skillWebCanvas");
    if (canvasInner) canvasInner.innerHTML = renderSkillWebSvg(scav);
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeSkillTreeBtn").addEventListener("click", closeScreen);

    // Clicking a node on the web opens a popup with that node's details
    // (rank, effect, lock reason, Learn button) instead of updating a
    // permanent side panel — the tree itself gets the whole screen.
    overlay.querySelectorAll(".skill-web-node").forEach((el) => {
      el.addEventListener("click", () => {
        skillWebSelectedNode = el.getAttribute("data-node");
        overlay.querySelectorAll(".skill-web-node").forEach((n) => {
          n.classList.toggle("selected", n.getAttribute("data-node") === skillWebSelectedNode);
        });
        openSkillNodeModal();
      });
    });
  }

  // Popup shown when a skill node is tapped — reuses the .modal-overlay/
  // .modal-box shell (same pattern as settings/raid report) and the
  // existing .skill-detail* content classes that used to live in the
  // permanent side panel.
  let skillNodeModal = null;

  function closeSkillNodeModal() {
    if (skillNodeModal) {
      skillNodeModal.remove();
      skillNodeModal = null;
    }
  }

  function openSkillNodeModal() {
    closeSkillNodeModal();
    const modal = document.createElement("div");
    modal.className = "modal-overlay skill-node-modal-overlay";
    modal.innerHTML = `
      <div class="modal-box skill-node-modal-box">
        <div class="modal-header">
          <span>SKILL DETAILS</span>
          <button class="rs-back-btn skill-node-modal-close" id="closeSkillNodeModalBtn">✕ Close</button>
        </div>
        <div class="skill-node-modal-body" id="skillNodeModalBody">${renderSkillWebDetailPanel(scav)}</div>
      </div>
    `;
    overlay.appendChild(modal);
    skillNodeModal = modal;

    function wireLearnButton() {
      const btn = modal.querySelector(".skill-learn-btn");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const branchId = btn.getAttribute("data-branch");
        const nodeId = btn.getAttribute("data-node");
        const node = getSkillNodeDef(branchId, nodeId);
        const ok = learnSkillRank(scav, branchId, nodeId);
        if (ok) {
          pushToast(`${scav.name} learned ${node.name} (rank ${getSkillRank(scav, nodeId)}).`);
          refresh(); // updates the canvas + points counter behind the popup
          const bodyEl = modal.querySelector("#skillNodeModalBody");
          if (bodyEl) bodyEl.innerHTML = renderSkillWebDetailPanel(scav);
          wireLearnButton(); // re-wire the fresh button (maxed / next rank)
        }
      });
    }
    wireLearnButton();

    modal.querySelector("#closeSkillNodeModalBtn").addEventListener("click", closeSkillNodeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeSkillNodeModal();
    });
  }

  // Pan and zoom state for the skill web canvas.
  // Transform is applied as a CSS transform on the canvas container div
  // (not by manipulating the SVG viewBox), so all existing node click
  // handlers work without any changes. A drag of more than 4px is
  // treated as a pan and the mouseup's click event is suppressed, so
  // panning over a node doesn't accidentally select it. Touch input
  // (one-finger drag to pan, two-finger pinch to zoom) shares this same
  // state and the same click-suppression logic — see the touchstart/
  // touchmove/touchend block below the wheel handler.
  const canvasEl = overlay.querySelector("#skillWebCanvas");
  let panX = 0, panY = 0, scale = 1;
  let isDragging = false, dragStartX = 0, dragStartY = 0, panStartX = 0, panStartY = 0;
  let didPan = false;
  let pinchActive = false, pinchStartDist = 0, pinchStartScale = 1;
  let pinchStartPanX = 0, pinchStartPanY = 0, pinchMidX = 0, pinchMidY = 0;
  const MIN_SCALE = 0.25, MAX_SCALE = 2.5;
  // Prevents the WebView/browser from handling the drag/pinch itself
  // (e.g. as a page-scroll or native zoom) so our own handlers below get
  // the gesture instead. No effect on mouse/desktop use.
  canvasEl.style.touchAction = "none";

  function applyTransform() {
    canvasEl.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    canvasEl.style.transformOrigin = "0 0";
    canvasEl.style.cursor = isDragging ? "grabbing" : "grab";
  }

  // Fit-to-view: on open, scale the tree and center it in the visible
  // clip area, instead of starting at pan 0,0 / scale 1 — which used to
  // place only a small, off-center sliver of the tree (near its own
  // top-left corner) inside the clip window, looking "offset to the left
  // and tiny". The canvas's native (pre-transform) size is a square
  // matching the clip's width (see .skill-web-canvas/.skill-web-svg CSS),
  // and the tree's hub sits at the exact center of that square, so
  // centering the whole square in the clip also centers the hub.
  //
  // Purely "contain" fitting the whole 45-node tree turned out to not be
  // mobile friendly in practice: on a landscape phone the clip area is
  // short, so fitting the entire tree shrank nodes down to ~7px across —
  // technically visible, but too small to reliably tap with a finger (and
  // the rank/label text became unreadable with it). This picks whichever
  // is LARGER of "fit the whole tree" and "keep nodes at a legible,
  // tappable size", so a short/small screen favors tappability over
  // seeing the whole tree at once (panning covers the rest — pinch/drag
  // pan still works exactly as before), while a big screen where contain-
  // fit already produces comfortable nodes is barely affected.
  function fitToClip() {
    const clipEl = overlay.querySelector(".skill-web-clip");
    if (!clipEl) return;
    const clipW = clipEl.clientWidth;
    const clipH = clipEl.clientHeight;
    const nativeW = canvasEl.offsetWidth;
    const nativeH = canvasEl.offsetHeight;
    if (!clipW || !clipH || !nativeW || !nativeH) return;
    const containScale = Math.min(clipW / nativeW, clipH / nativeH) * 0.92;
    // Node circles are drawn at r=26 (52 native SVG units across). Below
    // ~36 CSS px across, a real finger can't reliably pick one node out
    // of the densely packed web — this solves for whatever scale makes
    // that true regardless of screen size or resolution.
    const MIN_NODE_PX = 36;
    const NODE_DIAMETER_SVG_UNITS = 52;
    const nativePxPerSvgUnit = nativeW / 1570; // viewBox is 0 0 1570 1570
    const minTapScale = MIN_NODE_PX / (NODE_DIAMETER_SVG_UNITS * nativePxPerSvgUnit);
    const fitScale = Math.max(containScale, minTapScale);
    scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, fitScale));
    panX = clipW / 2 - (nativeW / 2) * scale;
    panY = clipH / 2 - (nativeH / 2) * scale;
  }
  fitToClip();
  applyTransform();

  canvasEl.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    didPan = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = panX;
    panStartY = panY;
    e.preventDefault();
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) didPan = true;
    panX = panStartX + dx;
    panY = panStartY + dy;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    applyTransform();
  });

  // Zoom toward the mouse cursor position, not the canvas origin — so
  // whatever the user's pointing at stays under the cursor as they zoom.
  canvasEl.addEventListener("wheel", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = canvasEl.getBoundingClientRect();
    // Mouse position in the pre-transform canvas coordinate space
    const mouseX = (e.clientX - rect.left) / scale;
    const mouseY = (e.clientY - rect.top) / scale;
    const delta = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * delta));
    // Adjust pan so the point under the cursor stays fixed
    panX -= mouseX * (newScale - scale);
    panY -= mouseY * (newScale - scale);
    scale = newScale;
    applyTransform();
  }, { passive: false });

  // ---- Touch equivalents: one finger drags to pan, two fingers pinch to
  // zoom. Mirrors the mouse/wheel math above so behavior matches exactly. ----
  function touchDist(t0, t1) {
    return Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
  }
  function touchMid(t0, t1) {
    return { x: (t0.clientX + t1.clientX) / 2, y: (t0.clientY + t1.clientY) / 2 };
  }

  canvasEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      pinchActive = false;
      isDragging = true;
      didPan = false;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      panStartX = panX;
      panStartY = panY;
    } else if (e.touches.length === 2) {
      // A second finger landing mid-drag means the gesture is a pinch, not
      // a pan — hand off cleanly rather than letting both run at once.
      isDragging = false;
      pinchActive = true;
      didPan = true; // a pinch should never be mistaken for a node click on release
      const rect = canvasEl.getBoundingClientRect();
      const mid = touchMid(e.touches[0], e.touches[1]);
      pinchStartDist = touchDist(e.touches[0], e.touches[1]);
      pinchStartScale = scale;
      pinchStartPanX = panX;
      pinchStartPanY = panY;
      // Midpoint between the two fingers, in pre-transform canvas
      // coordinates — held fixed under the fingers as scale changes,
      // same idea as anchoring zoom to the mouse cursor in the wheel handler.
      pinchMidX = (mid.x - rect.left - panX) / scale;
      pinchMidY = (mid.y - rect.top - panY) / scale;
    }
    e.preventDefault();
  }, { passive: false });

  canvasEl.addEventListener("touchmove", (e) => {
    if (pinchActive && e.touches.length === 2) {
      const dist = touchDist(e.touches[0], e.touches[1]);
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, pinchStartScale * (dist / pinchStartDist)));
      panX = pinchStartPanX - pinchMidX * (newScale - pinchStartScale);
      panY = pinchStartPanY - pinchMidY * (newScale - pinchStartScale);
      scale = newScale;
      applyTransform();
    } else if (isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - dragStartX;
      const dy = e.touches[0].clientY - dragStartY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) didPan = true;
      panX = panStartX + dx;
      panY = panStartY + dy;
      applyTransform();
    }
    e.preventDefault();
  }, { passive: false });

  function endTouch(e) {
    if (e.touches.length === 0) {
      isDragging = false;
      pinchActive = false;
      applyTransform();
    } else if (e.touches.length === 1) {
      // One finger lifted off a pinch — hand off to single-finger pan
      // starting from here, so the remaining finger keeps tracking
      // smoothly instead of the view jumping.
      pinchActive = false;
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      panStartX = panX;
      panStartY = panY;
    }
  }
  canvasEl.addEventListener("touchend", endTouch);
  canvasEl.addEventListener("touchcancel", endTouch);

  // Suppress node-select clicks that were actually pans — checked here
  // on capture so it fires before the individual node click handlers.
  // Also covers touch: a tap that turned into a drag/pinch sets didPan
  // above, and the browser's synthetic click after touchend hits this
  // same check.
  canvasEl.addEventListener("click", (e) => {
    if (didPan) { e.stopPropagation(); didPan = false; }
  }, true);

  // Clean up window-level listeners when the screen closes, since they're
  // on window (not the overlay) and won't be removed when the DOM node is.
  const cleanupPan = () => { isDragging = false; pinchActive = false; applyTransform(); };
  overlay.addEventListener("remove", cleanupPan);

  wireInteractions();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}

function openStatsScreen(scavId) {
  const scav = STATE.scavs.find((s) => s.id === scavId);
  if (!scav) return;

  const overlay = document.createElement("div");
  overlay.className = "skill-tree-screen"; // reuses the skill tree screen's full-screen layout shell — see index.html, nothing about that shell is skill-tree-specific
  overlay.innerHTML = `
    <div class="rs-header">
      <div class="rs-title">STATS — <span>${escapeHtml(scav.name)}</span></div>
      <button class="rs-back-btn" id="closeStatsBtn">← Back to Character</button>
    </div>
    <div class="stats-screen-body">${renderStatsScreenBody(scav)}</div>
  `;
  document.body.appendChild(overlay);

  function closeScreen() {
    overlay.remove();
    renderAll(); // brings the Character Screen underneath back up to date via refreshCharScreen
  }

  overlay.querySelector("#closeStatsBtn").addEventListener("click", closeScreen);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}

// Pure read-only display — unlike the skill tree screen this sits
// alongside, there's no interaction here at all (nothing to spend,
// nothing to pick), so the whole body is one render with no separate
// refresh/wireInteractions split to maintain.
function renderStatsScreenBody(scav) {
  const arenaEntry = getArenaLeaderboard().find((e) => e.isPlayerScav && e.id === scav.id);
  const arenaWins = arenaEntry ? arenaEntry.wins : 0;

  const bossRows = MAPS.filter((m) => BOSS_CATALOG[m.id]).map((map) => {
    const boss = BOSS_CATALOG[map.id];
    const kills = scav.stats.bossKills[map.id] || 0;
    return `
      <div class="stats-boss-row ${kills > 0 ? "" : "stats-boss-row-zero"}">
        <span class="stats-boss-name">${escapeHtml(boss.name)}</span>
        <span class="stats-boss-map">${escapeHtml(map.name)}</span>
        <span class="stats-boss-kills">${kills}</span>
      </div>
    `;
  }).join("");

  const totalBossKills = Object.values(scav.stats.bossKills).reduce((sum, n) => sum + n, 0);

  return `
    <div class="stats-summary-grid">
      <div class="stats-summary-item"><span class="ss-val">${scav.stats.raidsSurvived}</span><span class="ss-lbl">Raids Survived</span></div>
      <div class="stats-summary-item"><span class="ss-val">${totalBossKills}</span><span class="ss-lbl">Bosses Killed</span></div>
      <div class="stats-summary-item"><span class="ss-val">${arenaWins}</span><span class="ss-lbl">Arena Wins</span></div>
    </div>

    <div class="section-divider" style="margin-top:0;">Boss kills, by site</div>
    <div class="stats-boss-list">
      <div class="stats-boss-row stats-boss-header">
        <span class="stats-boss-name">Boss</span>
        <span class="stats-boss-map">Site</span>
        <span class="stats-boss-kills">Kills</span>
      </div>
      ${bossRows}
    </div>

    <div class="section-divider">Resources personally brought home</div>
    <div class="stats-summary-grid stats-resources-grid">
      <div class="stats-summary-item"><span class="ss-val scrap">${scav.stats.scrapBrought}</span><span class="ss-lbl">Scrap</span></div>
      <div class="stats-summary-item"><span class="ss-val gold">${scav.stats.goldBrought}</span><span class="ss-lbl">Gold</span></div>
      <div class="stats-summary-item"><span class="ss-val meds">${scav.stats.medsBrought}</span><span class="ss-lbl">Meds</span></div>
      <div class="stats-summary-item"><span class="ss-val food">${scav.stats.foodBrought}</span><span class="ss-lbl">Food</span></div>
    </div>
  `;
}


// Mirrors the structure of the character screen: a render() that rebuilds
// the DOM and a wire() that re-attaches listeners after every re-render.
// `refreshInfirmaryScreen` is exposed at module scope so the game tick can
// update the live countdown bars while this screen is open, the same way
// the radio log refreshes itself for active raids.

let refreshInfirmaryScreen = null;
let refreshRosterScreen = null;
let refreshBuildingPopup = null;
let refreshFleaMarketScreen = null;
let refreshTradersScreen = null;
let refreshOutpostScreen = null;
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
  const contextMap = MAPS.find((m) => m.id === barracksSelectedMapId) || null;
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
        ${renderScavPickExtras(scav, contextMap)}
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
  // Radio Tower's second screen — Traders, distinct from the Flea
  // Market and needing its own button slot since this popup only ever
  // had one before now. Shown starting at the same level the first
  // trader (Quartermaster) actually unlocks, so the button doesn't
  // appear before there's anything behind it to open.
  const openTradersBtn = buildingId === "radioTower" && lvl >= TRADERS.quartermaster.minRadioTowerLevel
    ? `<button class="btn secondary" id="openTradersScreenBtn" style="margin-top:8px;">Open Traders</button>`
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
      ${openTradersBtn}
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

    // Radio Tower's second screen button — separate id, separate
    // handler, since this popup only ever had room for one screen
    // hand-off before Traders needed its own slot alongside the Flea
    // Market. Same close-this-popup-first reasoning as openScreenBtn
    // above applies here too.
    const openTradersBtn = overlay.querySelector("#openTradersScreenBtn");
    if (openTradersBtn) {
      openTradersBtn.addEventListener("click", () => {
        refreshBuildingPopup = null;
        overlay.remove();
        openTradersScreen();
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

// ===== OUTPOST SCREEN =====
function renderOutpostBuildingsSection() {
  const outpost = getOutpostState();
  return Object.values(OUTPOST_BUILDINGS).map((def) => {
    const lvl = outpost.buildings[def.id] || 0;
    const maxed = lvl >= def.maxLevel;
    const cost = maxed ? null : upgradeCost(def, lvl);
    const afford = cost && canAfford(cost);
    const costStr = cost ? Object.entries(cost).map(([res, amt]) => `${amt} ${res}`).join(" + ") : "";
    return `
      <div class="upgrade-card">
        <div class="upgrade-top"><div class="upgrade-name">${escapeHtml(def.name)}</div><div class="upgrade-lvl">${maxed ? "MAX" : `Lv.${lvl}/${def.maxLevel}`}</div></div>
        <div class="upgrade-desc">${escapeHtml(def.desc)}<br><span style="color:var(--brass-bright)">${escapeHtml(def.effect(lvl))}</span></div>
        ${!maxed ? `
          <div class="upgrade-cost ${afford ? "afford" : "short"}">${costStr}</div>
          <button class="btn" data-outpost-upgrade-id="${def.id}" ${!afford ? "disabled" : ""}>${lvl === 0 ? "Build" : "Upgrade"}</button>
        ` : ""}
      </div>
    `;
  }).join("");
}

function renderOutpostScavSection() {
  const outpost = getOutpostState();
  const assigned = outpost.assignedScavIds.map((id) => STATE.scavs.find((s) => s.id === id)).filter(Boolean);
  const eligible = STATE.scavs.filter((s) => s.status === "ready");
  const cap = outpostScavCap();

  const assignedRows = assigned.map((s) => `
    <div class="outpost-scav-row assigned" data-outpost-recall-id="${s.id}">
      <span>${escapeHtml(s.name)} <span class="lvl">Lv.${s.level}</span></span>
      <span class="outpost-recall-label">Recall</span>
    </div>
  `).join("");
  const eligibleRows = eligible.map((s) => `
    <div class="outpost-scav-row" data-outpost-assign-id="${s.id}">
      <span>${escapeHtml(s.name)} <span class="lvl">Lv.${s.level}</span></span>
      <span class="outpost-assign-label">Assign</span>
    </div>
  `).join("");

  return `
    <div class="section-divider" style="margin-top:14px;">Assigned (${assigned.length}/${cap}${assigned.length > cap ? " — past the soft cap, generating less per scav past it" : ""})</div>
    ${assignedRows || `<div class="empty-note">Nobody assigned yet.</div>`}
    <div class="section-divider">Available</div>
    ${eligibleRows || `<div class="empty-note">No ready scavs at camp right now.</div>`}
  `;
}

function renderOutpostBody() {
  const gen = outpostDailyGeneration();
  return `
    <div class="trader-theme">A second foothold, set up the moment the first prestige made it clear the camp wasn't starting from nothing anymore. Scavs assigned here move freely — no commitment, no cooldown, just whoever's actually there on a given day.</div>
    <div class="research-intel-bar">Producing today: <b>${gen.scrap} scrap, ${gen.gold} gold, ${gen.intel} intel</b> per day, at current staffing.</div>
    <div class="section-divider" style="margin-top:0;">Buildings</div>
    ${renderOutpostBuildingsSection()}
    ${renderOutpostScavSection()}
  `;
}

function openOutpostScreen() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> THE OUTPOST</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll" id="outpostBody">${renderOutpostBody()}</div>
        <button class="btn" id="closeOutpostBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    refreshOutpostScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelector("#outpostBody").innerHTML = renderOutpostBody();
    refreshWarehouseTooltip();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeOutpostBtn").addEventListener("click", closeModal);
    overlay.querySelectorAll("[data-outpost-upgrade-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-outpost-upgrade-id");
        if (purchaseOutpostUpgrade(id)) { pushToast("Built."); refresh(); }
      });
    });
    overlay.querySelectorAll("[data-outpost-assign-id]").forEach((row) => {
      row.addEventListener("click", () => {
        const id = row.getAttribute("data-outpost-assign-id");
        if (assignToOutpost(id)) refresh();
      });
    });
    overlay.querySelectorAll("[data-outpost-recall-id]").forEach((row) => {
      row.addEventListener("click", () => {
        const id = row.getAttribute("data-outpost-recall-id");
        if (recallFromOutpost(id)) refresh();
      });
    });
  }
  wireInteractions();

  refreshOutpostScreen = () => {
    if (!document.body.contains(overlay)) { refreshOutpostScreen = null; return; }
    refresh();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===== TRADERS SCREEN =====
function renderTraderOfferCard(offer) {
  const formatSide = (side) => {
    const parts = [];
    if (side.gearName) parts.push(escapeHtml(side.gearName));
    for (const k in side) {
      if (k !== "gearId" && k !== "gearName") parts.push(`${side[k]} ${k}`);
    }
    return parts.join(" + ");
  };
  const afford = canAffordTraderOffer(offer);
  return `
    <div class="upgrade-card flea-offer-card">
      <div class="flea-offer-trade">
        <div class="flea-offer-side">
          <div class="flea-offer-side-label">Costs</div>
          <div>${formatSide(offer.give)}</div>
        </div>
        <div class="flea-offer-arrow">→</div>
        <div class="flea-offer-side">
          <div class="flea-offer-side-label">Get</div>
          <div class="flea-offer-get">${formatSide(offer.get)}</div>
        </div>
      </div>
      <button class="btn secondary" data-trader-offer-id="${offer.id}" ${!afford ? "disabled" : ""}>
        ${afford ? "Buy" : "Can't afford"}
      </button>
    </div>
  `;
}

// Reputation bar shows progress toward the NEXT threshold specifically
// (tier 2, tier 3, or the exclusive, whichever is next), not just a raw
// number — a player can see exactly how close the next real change is,
// the same spirit as a quest step or research node staying visible
// ahead of time rather than just a hidden counter.
function renderTraderRepBar(traderId) {
  const trader = TRADERS[traderId];
  const rep = getTraderReputation(traderId);
  const tier = traderTier(traderId);
  const nextThreshold = tier === 1 ? trader.repForTier2 : tier === 2 ? trader.repForTier3 : trader.repForExclusive;
  const atMax = traderExclusiveUnlocked(traderId);
  const pct = atMax ? 100 : Math.min(100, Math.round((rep / nextThreshold) * 100));
  const label = atMax ? `${rep} rep — max tier, exclusive unlocked` : `${rep} / ${nextThreshold} toward ${tier === 1 ? "Tier 2" : tier === 2 ? "Tier 3" : "their exclusive"}`;
  return `
    <div class="trader-rep-row">
      <div class="trader-rep-track"><div class="trader-rep-fill" style="width:${pct}%"></div></div>
      <div class="trader-rep-label">${escapeHtml(label)}</div>
    </div>
  `;
}

// Each trader's exclusive renders completely differently — Voss sells
// an ITEM (a normal-shaped buy button), Doc offers a SERVICE (a scav
// picker, since it needs to know who to heal), and the Broker sells a
// RESOURCE CONVERSION (a flat buy button with no item involved at all).
// Genuinely three different shapes of UI, not three skins on the same
// button, matching how differently the three mechanics themselves work.
function renderTraderExclusiveSection(traderId) {
  const trader = TRADERS[traderId];
  if (!traderExclusiveUnlocked(traderId)) {
    return `<div class="empty-note">Exclusive locked — reach ${trader.repForExclusive} reputation to unlock it.</div>`;
  }
  if (traderId === "quartermaster") {
    const afford = canAfford(QUARTERMASTER_EXCLUSIVE_COST);
    const costStr = Object.entries(QUARTERMASTER_EXCLUSIVE_COST).map(([r, a]) => `${a} ${r}`).join(" + ");
    return `
      <div class="trader-exclusive-card">
        <div class="trader-exclusive-name">Voss' Contract</div>
        <div class="trader-exclusive-desc">A unique weapon, issued rather than found. Repeatable — losing it doesn't mean it's gone for good.</div>
        <div class="trader-exclusive-cost">${escapeHtml(costStr)}</div>
        <button class="btn" id="buyQuartermasterExclusiveBtn" ${!afford ? "disabled" : ""}>${afford ? "Buy" : "Can't afford"}</button>
      </div>
    `;
  }
  if (traderId === "doc") {
    const injured = STATE.scavs.filter((s) => s.status !== "dead" && s.hp < s.maxHp);
    const afford = canAfford(DOC_INSTANT_HEAL_COST);
    const costStr = Object.entries(DOC_INSTANT_HEAL_COST).map(([r, a]) => `${a} ${r}`).join(" + ");
    if (!injured.length) {
      return `<div class="trader-exclusive-card"><div class="trader-exclusive-name">Instant Treatment</div><div class="empty-note">Nobody needs it right now.</div></div>`;
    }
    const rows = injured.map((s) => `
      <div class="trader-heal-pick" data-trader-heal-scav-id="${s.id}">
        <span>${escapeHtml(s.name)}</span><span>${s.hp}/${s.maxHp} HP</span>
      </div>
    `).join("");
    return `
      <div class="trader-exclusive-card">
        <div class="trader-exclusive-name">Instant Treatment</div>
        <div class="trader-exclusive-desc">No Infirmary queue, no wait — resolves the moment it's paid for. ${escapeHtml(costStr)} per scav.</div>
        <div class="trader-heal-list">${rows}</div>
        ${!afford ? `<div class="empty-note">Can't afford it right now.</div>` : ""}
      </div>
    `;
  }
  if (traderId === "broker") {
    const afford = canAfford(BROKER_INTEL_BUY_COST);
    const costStr = Object.entries(BROKER_INTEL_BUY_COST).map(([r, a]) => `${a} ${r}`).join(" + ");
    return `
      <div class="trader-exclusive-card">
        <div class="trader-exclusive-name">Guaranteed Intel</div>
        <div class="trader-exclusive-desc">+${BROKER_INTEL_BUY_AMOUNT} intel, no raid, no chance roll — the only way to get it without going out.</div>
        <div class="trader-exclusive-cost">${escapeHtml(costStr)}</div>
        <button class="btn" id="buyBrokerIntelBtn" ${!afford ? "disabled" : ""}>${afford ? "Buy" : "Can't afford"}</button>
      </div>
    `;
  }
  return "";
}

function renderTraderPanel(traderId) {
  const trader = TRADERS[traderId];
  if (!isTraderUnlocked(traderId)) {
    return `<div class="event-warning">${escapeHtml(trader.name)} isn't around yet — needs Radio Tower level ${trader.minRadioTowerLevel}.</div>`;
  }
  const stock = getTraderStock(traderId);
  const offersHtml = stock.offers.length
    ? stock.offers.map(renderTraderOfferCard).join("")
    : `<div class="empty-note">Nothing in stock today — check back tomorrow.</div>`;
  return `
    <div class="trader-theme">${escapeHtml(trader.theme)}</div>
    ${renderTraderRepBar(traderId)}
    <div class="section-divider" style="margin-top:14px;">Standing offers</div>
    ${offersHtml}
    <div class="section-divider">Exclusive</div>
    ${renderTraderExclusiveSection(traderId)}
  `;
}

function openTradersScreen() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const tabsHtml = Object.values(TRADERS).map((t) => `
    <button class="codex-tab ${t.id === tradersActiveTab ? "active" : ""}" data-trader-tab="${t.id}">${escapeHtml(t.name)}</button>
  `).join("");

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> TRADERS</div>
      <div class="codex-tabs" style="margin-bottom:10px;">${tabsHtml}</div>
      <div class="panel-body">
        <div class="raidlog-modal-scroll" id="tradersBody">${renderTraderPanel(tradersActiveTab)}</div>
        <button class="btn" id="closeTradersBtn" style="margin-top:14px;">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function closeModal() {
    refreshTradersScreen = null;
    overlay.remove();
    renderAll();
  }

  function refresh() {
    overlay.querySelectorAll("[data-trader-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-trader-tab") === tradersActiveTab);
    });
    overlay.querySelector("#tradersBody").innerHTML = renderTraderPanel(tradersActiveTab);
    refreshWarehouseTooltip();
    wireInteractions();
  }

  function wireInteractions() {
    overlay.querySelector("#closeTradersBtn").addEventListener("click", closeModal);
    overlay.querySelectorAll("[data-trader-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        tradersActiveTab = btn.getAttribute("data-trader-tab");
        refresh();
      });
    });
    overlay.querySelectorAll("[data-trader-offer-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-trader-offer-id");
        const stock = getTraderStock(tradersActiveTab);
        const offer = stock.offers.find((o) => o.id === id);
        if (offer && executeTraderOffer(offer)) {
          pushToast("Deal done.");
          refresh();
        }
      });
    });
    const qBtn = overlay.querySelector("#buyQuartermasterExclusiveBtn");
    if (qBtn) {
      qBtn.addEventListener("click", () => {
        if (quartermasterBuyExclusive()) { pushToast("Voss' Contract acquired."); refresh(); }
      });
    }
    const brokerBtn = overlay.querySelector("#buyBrokerIntelBtn");
    if (brokerBtn) {
      brokerBtn.addEventListener("click", () => {
        if (brokerBuyIntel()) { pushToast("Intel acquired."); refresh(); }
      });
    }
    overlay.querySelectorAll("[data-trader-heal-scav-id]").forEach((row) => {
      row.addEventListener("click", () => {
        const scavId = row.getAttribute("data-trader-heal-scav-id");
        if (docInstantHeal(scavId)) { pushToast("Treated."); refresh(); }
        else pushToast("Can't afford it right now.", true);
      });
    });
  }
  wireInteractions();

  refreshTradersScreen = () => {
    if (!document.body.contains(overlay)) { refreshTradersScreen = null; return; }
    refresh();
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
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

  // Wire row clicks here — wireEvents() only runs during renderAll() and
  // doesn't reach rows inside this separately-created modal overlay.
  overlay.querySelectorAll("[data-log-index]").forEach(row => {
    row.addEventListener("click", () => {
      const idx = parseInt(row.getAttribute("data-log-index"), 10);
      if (!isNaN(idx)) showStoredFieldReport(idx);
    });
  });

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
let prestigeItemPicks = []; // array of { slot, id }, capped at ngPlusMaxCarryItems()
let prestigePerkId = null; // which perk this run will earn, see PRESTIGE_PERKS

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
        ${renderScavPickExtras(scav, null, false)}
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
  const fullUp = prestigeItemPicks.length >= ngPlusMaxCarryItems();
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
  const availablePerks = getAvailablePrestigePerks();
  const needsPerkPick = availablePerks.length > 0;
  const ready = !!scav && scav.status !== "dead" && afford && (!needsPerkPick || !!prestigePerkId);

  const riskPct = Math.round(NG_PLUS_RISK_PER_LEVEL * 100);
  const lootPct = Math.round(NG_PLUS_LOOT_PER_LEVEL * 100);

  const ownedPerks = (STATE.ngPlusPerks || []).map((id) => PRESTIGE_PERKS[id]).filter(Boolean);
  const ownedPerksHtml = ownedPerks.length
    ? `<div class="section-divider" style="margin-top:0;">Perks already earned</div>
       <div class="prestige-perk-list owned">${ownedPerks.map((p) => `
         <div class="prestige-perk-card owned"><div class="pp-name">${escapeHtml(p.name)}</div><div class="pp-desc">${escapeHtml(p.desc)}</div></div>
       `).join("")}</div>`
    : "";

  const perkPickerHtml = needsPerkPick
    ? `<div class="section-divider">Pick a permanent perk for this run</div>
       <div class="prestige-perk-list">${availablePerks.map((p) => `
         <div class="prestige-perk-card ${prestigePerkId === p.id ? "selected" : ""}" data-prestige-perk-id="${p.id}">
           <div class="pp-name">${escapeHtml(p.name)}</div><div class="pp-desc">${escapeHtml(p.desc)}</div>
         </div>
       `).join("")}</div>`
    : `<div class="section-divider">Perks</div><div class="empty-note">Every perk has already been earned across past runs — nothing new to pick this time.</div>`;

  return `
    <div class="event-warning" style="margin-bottom:14px;">
      Starting New Game+ resets the camp completely — every building, every resource, the rest of the roster, all of it — in exchange for going in harder and richer next time. This can't be undone once confirmed.
    </div>
    <div class="upgrade-desc" style="margin-bottom:10px;">
      Currently <b style="color:var(--brass-bright);">${level === 0 ? "NG+0 (base game)" : `NG+${level}`}</b>. Starting another run moves you to <b style="color:var(--brass-bright);">NG+${nextLevel}</b>: every site's risk climbs another ${riskPct}%, and loot climbs another ${lootPct}%, stacking with every prestige before it.
    </div>
    <div class="upgrade-cost ${afford ? "afford" : "short"}" style="margin-bottom:14px;">${Object.entries(NG_PLUS_COST).map(([res, amt]) => `${amt} ${res}`).join(" + ")}</div>

    ${ownedPerksHtml}
    ${perkPickerHtml}

    <div class="section-divider">Bring one scav with you</div>
    <div class="raidlog-modal-scroll" style="max-height:160px;">
      <div class="rs-scav-grid" id="prestigeScavList">${renderPrestigeScavList()}</div>
    </div>

    <div class="section-divider">Bring up to ${ngPlusMaxCarryItems()} items (regular gear only — no uniques)</div>
    <div class="raidlog-modal-scroll" style="max-height:160px;">
      <div class="rs-scav-grid" id="prestigeItemList">${renderPrestigeItemList()}</div>
    </div>

    <button class="btn" id="confirmPrestigeBtn" style="margin-top:14px;" ${!ready ? "disabled" : ""}>
      ${!afford ? "Not enough gold" : !scav ? "Pick a scav first" : (needsPerkPick && !prestigePerkId) ? "Pick a perk first" : "Start New Game+"}
    </button>
  `;
}

function openPrestigeMenu() {
  prestigeScavId = null;
  prestigeItemPicks = [];
  prestigePerkId = null;

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
          if (prestigeItemPicks.length >= ngPlusMaxCarryItems()) return; // full — see the disabled state in renderPrestigeItemList
          prestigeItemPicks.push({ slot, id });
        }
        refresh();
      });
    });

    overlay.querySelectorAll("[data-prestige-perk-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-prestige-perk-id");
        prestigePerkId = prestigePerkId === id ? null : id;
        refresh();
      });
    });

    const confirmBtn = overlay.querySelector("#confirmPrestigeBtn");
    if (confirmBtn) {
      wireConfirmButton(confirmBtn, "Click again to confirm — this can't be undone", () => {
        const result = startNewGamePlus(prestigeScavId, prestigeItemPicks, prestigePerkId);
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
let tradersActiveTab = "quartermaster";

function renderCodexBossesTab() {
  const entries = MAPS.map((map) => {
    const boss = BOSS_CATALOG[map.id];
    if (!boss) return "";
    const beaten = !!STATE.bossesBeaten[map.id];
    const loreHtml = beaten
      ? boss.lore.map((line) => `<p class="codex-lore-line">${escapeHtml(line)}</p>`).join("")
      : `<p class="codex-lore-locked">Beat ${escapeHtml(boss.name)} in a fight — not a flee — to unlock what's actually known about it.</p>`;
    return `
      <div class="codex-entry">
        <div class="codex-entry-name">${escapeHtml(boss.name)} ${beaten ? `<span class="codex-beaten-tag">BEATEN</span>` : ""}</div>
        <div class="codex-entry-meta">${escapeHtml(map.name)} · <span class="codex-risk ${map.risk}">${map.risk}</span></div>
        <div class="codex-entry-desc">${escapeHtml(boss.desc)}</div>
        ${loreHtml}
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
      // Scrapyard Plate Armor is the one unique item with no boss tied
      // to it at all — earned through the Arena leaderboard streak
      // instead (see checkArenaTopStreak), not dropped by anything.
      // Without its own note here it would show no indication of how
      // to actually get it, since the boss-drop note below only ever
      // fires for items that do have a bossMapId set.
      const dropNote = boss
        ? `<div class="codex-entry-meta">Dropped by <b>${escapeHtml(boss.name)}</b> — rare chance on a successful boss kill</div>`
        : item.id === "scrapyard_plate"
          ? `<div class="codex-entry-meta">Earned by holding rank 1 on the Arena leaderboard for ${arenaStreakRequiredDays()} days straight</div>`
          : (item.id === "ashbringer" || item.id === "last_resolve")
            ? `<div class="codex-entry-meta">Rare chance on any boss kill — only once the camp has reached New Game+${NG_PLUS_UNIQUE_MIN_LEVEL}</div>`
            : item.id === "voss_contract"
              ? `<div class="codex-entry-meta">Purchased from Quartermaster Voss, once reputation with him is high enough — see the Traders screen</div>`
              : "";
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

// Newest first, same reading order as STATE.log's raid history — a
// journal reads naturally front-to-back starting from "what's most
// recent," same as opening any logbook to its last written page.
function renderCodexJournalTab() {
  if (!STATE.journal.length) {
    return `<div class="empty-note">No entries yet — the first one writes itself in at the end of Day 1.</div>`;
  }
  const entries = STATE.journal.map((entry) => `
    <div class="journal-entry">
      <div class="journal-entry-day">Day ${entry.day}</div>
      <div class="journal-entry-text">${escapeHtml(entry.text)}</div>
    </div>
  `).join("");
  return `<div class="journal-entry-list">${entries}</div>`;
}

// Dead scavs stay in STATE.scavs forever (filtered out of every "living"
// list elsewhere, but never actually removed — see the 18+ status !==
// "dead" checks throughout), which is exactly what makes a memorial like
// this possible without needing its own separate storage: everything
// it needs (final level, lifetime stats, where/when they died) is
// already sitting right there on the scav object.
function renderCodexFallenTab() {
  const fallen = STATE.scavs.filter((s) => s.status === "dead");
  if (!fallen.length) {
    return `<div class="empty-note">Nobody's been lost yet. Stays that way as long as you can manage it.</div>`;
  }
  const entries = fallen.map((scav) => {
    const totalBossKills = Object.values(scav.stats.bossKills).reduce((sum, n) => sum + n, 0);
    const cause = scav.diedOnMapName
      ? `Lost at ${escapeHtml(scav.diedOnMapName)}${scav.diedOnDay ? `, Day ${scav.diedOnDay}` : ""}`
      : "Lost — circumstances predate this record"; // a scav who died before this field existed simply has no value here at all — no loadState backfill needed, this fallback message is the only handling required
    const bg = scav.background ? SCAV_BACKGROUNDS[scav.background] : null;
    const bgLine = bg ? `<div class="fallen-entry-bg" style="color:${bg.color}">${escapeHtml(bg.name)}</div>` : "";
    const leaderLine = scav.wasLeader ? `<div class="fallen-entry-leader">★ Former Leader</div>` : "";
    return `
      <div class="fallen-entry">
        <div class="fallen-entry-name">${escapeHtml(scav.name)} <span class="fallen-entry-lvl">Lv.${scav.level}</span></div>
        ${leaderLine}
        ${bgLine}
        <div class="fallen-entry-cause">${cause}</div>
        <div class="fallen-entry-stats">
          <span>${scav.stats.raidsSurvived} raid${scav.stats.raidsSurvived === 1 ? "" : "s"} survived</span>
          <span>${totalBossKills} boss kill${totalBossKills === 1 ? "" : "s"}</span>
        </div>
      </div>
    `;
  }).join("");
  return `<div class="fallen-entry-list">${entries}</div>`;
}

// Every step in a questline is shown regardless of progress — completed
// (checkmark, reward shown as already earned), current (highlighted,
// the actual goal right now), or future (visible but dimmed, so the
// player can see where the chain is headed without it feeling like a
// black box, the same spirit as a real quest log showing the whole
// chain's shape up front rather than revealing steps one at a time).
function renderCodexQuestsTab() {
  const sections = Object.values(QUESTLINES).map((questline) => {
    const state = getQuestState(questline.id);
    const stepsHtml = questline.steps.map((step, i) => {
      const isDone = state.completed || i < state.stepIndex;
      const isCurrent = !state.completed && i === state.stepIndex;
      const statusClass = isDone ? "done" : isCurrent ? "current" : "future";
      const statusIcon = isDone ? "✓" : isCurrent ? "▶" : "○";
      return `
        <div class="quest-step ${statusClass}">
          <div class="quest-step-icon">${statusIcon}</div>
          <div class="quest-step-body">
            <div class="quest-step-title">${escapeHtml(step.title)}</div>
            <div class="quest-step-desc">${escapeHtml(step.desc)}</div>
            <div class="quest-step-reward">${isDone ? "Earned: " : "Reward: "}${escapeHtml(step.rewardText)}</div>
          </div>
        </div>
      `;
    }).join("");
    return `
      <div class="quest-line ${state.completed ? "complete" : ""}">
        <div class="quest-line-header">
          <div class="quest-line-name">${escapeHtml(questline.name)}${state.completed ? ` <span class="quest-line-complete-tag">Complete</span>` : ""}</div>
          <div class="quest-line-desc">${escapeHtml(questline.desc)}</div>
        </div>
        <div class="quest-step-list">${stepsHtml}</div>
      </div>
    `;
  }).join("");
  return `<div class="quest-line-container">${sections}</div>`;
}

// Each node shows one of three states: unlocked (done, shown dimmed
// with a checkmark — same visual language as a completed quest step),
// available (cost shown, clickable, highlighted if actually affordable
// right now), or locked (prerequisite not yet met, shown but not
// clickable — visible so the player can see the branch's shape ahead
// of time, same reasoning as future quest steps staying visible rather
// than hidden).
function renderCodexResearchTab() {
  const intel = STATE.resources.intel || 0;
  const branchesHtml = Object.values(RESEARCH_TREE).map((branch) => {
    const nodesHtml = branch.nodes.map((node) => {
      const unlocked = isResearchUnlocked(node.id);
      const available = !unlocked && isResearchNodeAvailable(node);
      const affordable = available && canAfford(node.cost);
      const statusClass = unlocked ? "done" : available ? (affordable ? "available" : "unaffordable") : "locked";
      const costStr = Object.entries(node.cost).map(([res, amt]) => `${amt} ${res}`).join(" + ");
      const clickAttr = available ? `data-research-node-id="${node.id}"` : "";
      return `
        <div class="research-node ${statusClass}" ${clickAttr}>
          <div class="research-node-icon">${unlocked ? "✓" : available ? "▶" : "○"}</div>
          <div class="research-node-body">
            <div class="research-node-title">${escapeHtml(node.name)}</div>
            <div class="research-node-desc">${escapeHtml(node.desc)}</div>
            ${!unlocked ? `<div class="research-node-cost">${escapeHtml(costStr)}</div>` : ""}
          </div>
        </div>
      `;
    }).join("");
    return `
      <div class="research-branch">
        <div class="research-branch-name">${escapeHtml(branch.label)}</div>
        <div class="research-node-list">${nodesHtml}</div>
      </div>
    `;
  }).join("");
  return `
    <div class="research-intel-bar">Intel: <b>${intel}</b> — earned from raids, spent only here.</div>
    <div class="research-branch-grid">${branchesHtml}</div>
  `;
}

const CODEX_TABS = [
  { id: "bosses", label: "Bosses", render: renderCodexBossesTab },
  { id: "enemies", label: "Enemies", render: renderCodexEnemiesTab },
  { id: "locations", label: "Locations", render: renderCodexLocationsTab },
  { id: "items", label: "Items", render: renderCodexItemsTab },
  { id: "camp", label: "Camp", render: renderCodexCampTab },
  { id: "research", label: "Research", render: renderCodexResearchTab },
  { id: "quests", label: "Quests", render: renderCodexQuestsTab },
  { id: "journal", label: "Journal", render: renderCodexJournalTab },
  { id: "fallen", label: "Fallen", render: renderCodexFallenTab },
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

  function wireResearchClicks() {
    // Only ever matters when the Research tab's markup is what's
    // currently in #codexPage — a harmless no-op querySelectorAll on
    // every other tab, since no matching elements exist there.
    overlay.querySelectorAll("[data-research-node-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const nodeId = card.getAttribute("data-research-node-id");
        const result = unlockResearch(nodeId);
        if (result) {
          refresh();
        } else {
          pushToast("Can't unlock that yet — check the cost and prerequisites.", true);
        }
      });
    });
  }

  function refresh() {
    overlay.querySelectorAll("[data-codex-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-codex-tab") === codexActiveTab);
    });
    overlay.querySelector("#codexPage").innerHTML = renderCodexBody();
    overlay.querySelector("#codexPage").scrollTop = 0;
    wireResearchClicks();
  }

  overlay.querySelector("#closeCodexBtn").addEventListener("click", closeScreen);
  overlay.querySelectorAll("[data-codex-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      codexActiveTab = btn.getAttribute("data-codex-tab");
      refresh();
    });
  });
  // Called once explicitly for the initial paint — refresh() (which
  // also calls wireResearchClicks) is otherwise only ever triggered by
  // a later tab switch, never by this function's own first render.
  // codexActiveTab is module-level state that persists across Codex
  // opens, so if it's already "research" the moment this screen opens,
  // the research tab's markup is already in the DOM from the innerHTML
  // assignment above with nothing wired to it until this runs.
  wireResearchClicks();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeScreen();
  });
}

async function openSettingsPanel() {
  const isElectron = !!window.outpostSettings;
  // Window resizing, fullscreen toggling, and a manual "Exit Game" button
  // are desktop-window concepts that don't mean anything on a native
  // Android install — there's no window to resize, the app is already
  // effectively fullscreen, and Android's own Back/recents handle exiting.
  // Rather than show them disabled with an explanatory notice (which is
  // the right call for someone testing the plain web build in a desktop
  // browser tab, see browserNotice below), just leave them out entirely
  // on the native app so Settings isn't cluttered with controls that can
  // never do anything here.
  const isNative = !!window.Capacitor;
  showLegacyPatchNotes = false; // always start collapsed when the panel opens
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

  const browserNotice = (isElectron || isNative)
    ? ""
    : `<div class="settings-notice">Display settings need the desktop app — this works once you've built and launched OUTPOST.exe.</div>`;

  const resOptions = presets.map((key) => {
    const active = key === current.resolution;
    const label = RESOLUTION_LABELS[key] || key;
    return `<div class="gear-opt res-opt ${active ? "active" : ""} ${!isElectron ? "disabled" : ""}" data-res-key="${key}">${escapeHtml(label)}</div>`;
  }).join("");

  const displaySection = isNative ? "" : `
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
  `;

  const exitGameSection = isNative ? "" : `
        <button class="btn danger" id="exitGameBtn" ${!isElectron ? "disabled" : ""}>Exit Game</button>
        ${!isElectron ? `<div class="settings-notice" style="margin-top:8px;margin-bottom:0;">Closing the app this way also needs the desktop build — just close the browser tab for now.</div>` : ""}
  `;

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> SETTINGS</div>
      <div class="settings-tabs">
        <button class="settings-tab active" data-tab="settings">Settings</button>
        <button class="settings-tab" data-tab="patchnotes">Patch Notes</button>
      </div>
      <div class="panel-body settings-tab-panel" data-tab-panel="settings">
        ${browserNotice}
        ${displaySection}
        <div class="section-divider" ${isNative ? 'style="margin-top:0;"' : ""}>Audio</div>
        <div class="launch-row" style="margin-top:10px;">
          <span class="lbl">Volume</span>
          <span class="lbl" id="volumeValueLabel">${Math.round(getAudioVolume() * 100)}%</span>
        </div>
        <input type="range" id="volumeSlider" min="0" max="100" step="1" value="${Math.round(getAudioVolume() * 100)}" style="width:100%;margin-top:6px;">
        <div class="settings-notice" style="margin-top:8px;margin-bottom:0;">Covers UI sounds and site ambience. Saved on this device — carries over even if you reset progress or start New Game+.</div>
        <div class="section-divider">Game</div>
        ${exitGameSection}
        <button class="btn secondary" id="replayTutorialBtn" ${isNative ? "" : 'style="margin-top:10px;"'}>Replay Tutorial</button>
        <div class="settings-notice" style="margin-top:8px;margin-bottom:0;">Walks through the basics again from the start.</div>
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

  // Legacy Patch Notes toggle. The settings panel is a standalone modal
  // (not part of renderAll/wireEvents), so this is wired here directly.
  // Toggling re-renders the patch panel in place and re-attaches itself.
  function wireLegacyPatchToggle() {
    const btn = overlay.querySelector("#legacyPatchToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      showLegacyPatchNotes = !showLegacyPatchNotes;
      const panel = overlay.querySelector('[data-tab-panel="patchnotes"]');
      if (panel) {
        panel.innerHTML = renderPatchNotesTab();
        wireLegacyPatchToggle();
      }
    });
  }
  wireLegacyPatchToggle();

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

  const replayTutBtn = overlay.querySelector("#replayTutorialBtn");
  if (replayTutBtn) {
    replayTutBtn.addEventListener("click", () => {
      overlay.remove();
      // Clear the done flag so startTutorial's isTutorialDone() check passes
      try { localStorage.removeItem(TUTORIAL_KEY); } catch {}
      // Reset in-memory step state in case tutorial was partially through
      tutorialStep = 0;
      if (tutorialOverlay) { tutorialOverlay.remove(); tutorialOverlay = null; }
      if (tutorialRingEl) { tutorialRingEl.remove(); tutorialRingEl = null; }
      startTutorial();
    });
  }

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

  const volumeSlider = overlay.querySelector("#volumeSlider");
  const volumeValueLabel = overlay.querySelector("#volumeValueLabel");
  if (volumeSlider) {
    // "input" fires continuously while dragging (not just on release),
    // so the percentage label and the actual playing volume both track
    // the handle in real time rather than only updating once you let go.
    volumeSlider.addEventListener("input", () => {
      const pct = parseInt(volumeSlider.value, 10);
      setAudioVolume(pct / 100);
      volumeValueLabel.textContent = `${pct}%`;
    });
  }
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

// pickFrom avoids picking the same line consecutively — tracks the last
// pick per pool key so a report never shows the same sentence back to back.
const _lastPick = {};
function pickFrom(key, arr) {
  const last = _lastPick[key];
  const candidates = arr.length > 1 ? arr.filter(x => x !== last) : arr;
  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  _lastPick[key] = chosen;
  return chosen;
}

const REPORT_LINES = {
  travel: [
    "{name} slips out through the perimeter gap.",
    "{name} moves low along the tree line toward {map}.",
    "{name} crosses the open ground at a jog, watching the windows.",
    "{name} reaches the edge of {map}. No movement yet.",
    "{name} takes the long way around. Safer.",
    "The road to {map} is quiet. That's either good or it isn't.",
    "{name} checks the sightlines before moving. Old habit.",
    "{name} pushes out at first light, before the cold lifts.",
    "Light's wrong for going straight in. {name} circles wide.",
    "{name} is moving. Signal's solid so far.",
  ],
  searchGood: [
    "Inside now. Shelves mostly intact — this is promising.",
    "Found a stash room, half-buried under debris.",
    "Quiet so far. {name} works fast, room to room.",
    "A locked cabinet gives way. Worth the effort.",
    "Back section is untouched. Someone left in a hurry.",
    "Most of the good stuff's still here. People moved fast when they left.",
    "{name} clears the rooms one at a time. Nothing's been here in a while.",
    "The kind of silence that means nobody's competing for this anymore.",
    "Whoever came through last didn't finish the job. {name} finishes it.",
    "An interior room, sealed. {name} pries it open. Could be something.",
  ],
  searchTense: [
    "Something moved two rooms over. {name} freezes, waits it out.",
    "Footsteps on the floor above. Not {name}'s.",
    "A noise outside — wind, probably. Probably.",
    "{name} backs away from a door that won't sit right.",
    "The kind of quiet that comes after something hears you.",
    "Fresh marks on the dust. Someone was here recently.",
    "{name} finds signs that the place isn't as empty as it looked.",
    "A shape in the far room. Doesn't move. {name} gives it a long count.",
    "Something's not right about this floor. {name} slows down.",
    "The back half of the building is darker than it should be.",
    "Multiple entry points. {name} checks each one.",
  ],
  fightWin: [
    "Contact. {name} takes the first swing and it lands.",
    "A scrap of a fight in the doorway — {name} comes out on top.",
    "Close call near the loading dock, but {name} holds the line.",
    "They had numbers. {name} had a better angle.",
    "Short and ugly. {name} walks away from it.",
    "Contact. Over fast. {name} doesn't stop moving.",
    "{name} hears them coming. That's the difference.",
    "Fight's over before it properly started. {name} had the initiative.",
    "They pushed first. {name} made them regret it.",
    "Not the worst fight. Not even close. {name} has seen worse.",
  ],
  fightLose: [
    "Contact. It's faster than {name} expected.",
    "The exchange goes wrong fast.",
    "{name} doesn't see it coming until it's already too close.",
    "Outnumbered before they had a chance to reassess.",
    "First contact goes bad. Everything after is damage control.",
    "The position's wrong and there's no time to fix it.",
    "{name} gets pushed into a corner. Not a corner you walk out of clean.",
    "They were waiting. {name} had no idea.",
    "Bad angle, bad timing. Nothing went right.",
    "The fight happens on their terms, not {name}'s.",
  ],
  extractGood: [
    "{name} shoulders the haul and starts back.",
    "Pack's heavier going out than it was coming in. Good sign.",
    "{name} clears the perimeter, breathing hard but upright.",
    "Clean egress. {name} makes it back without incident.",
    "{name} retraces the entry route and stays low the whole way.",
    "Nothing follows {name} out. They make sure of that.",
    "{name} comes back with more than they expected to find.",
    "The run took longer than planned. The haul made it worth it.",
    "{name} hits the checkpoint and checks in. Signal breaks clean.",
    "Nobody's waiting outside. {name} moves fast anyway.",
  ],
  extractHurt: [
    "{name} limps back through the gap, favoring one side.",
    "Bleeding, but moving under their own power. {name} makes it back.",
    "{name} makes it to the checkpoint. Took a hit but didn't stop.",
    "Slower going out than coming in. {name} manages it.",
    "{name} patches it as best they can and keeps moving.",
    "The injury slows {name} down. Not enough to stop them.",
    "{name} gets back. Checks in. Doesn't say much about what happened.",
  ],
  death: [
    "Radio goes quiet on {name}'s channel.",
    "No further contact from {name}.",
    "{name} doesn't check back in.",
    "Last signal from {name} was clean. Then nothing.",
    "{name} misses the checkpoint. Then the next one.",
    "Camp waits for the check-in. It doesn't come.",
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
  lines.push(fmtLine(pickFrom("travel", REPORT_LINES.travel), vars));

  if (outcome.bossLog) {
    lines.push(`${outcome.bossLog.bossName} — ${outcome.bossLog.optionLabel.toLowerCase()}.`);
  }

  if (outcome.eventLog && outcome.eventLog.length) {
    for (const ev of outcome.eventLog) {
      const evDef = RAID_EVENTS.find(r => r.id === ev.eventId);
      if (evDef && evDef.enemy) {
        lines.push(`${ev.eventTitle}: ${ev.optionLabel.toLowerCase()}.`);
      } else {
        lines.push(`${ev.eventTitle}. ${ev.optionLabel}.`);
      }
    }
  }

  const tense = outcome.map.riskMult > 2;
  if (tense || Math.random() < 0.5) {
    lines.push(fmtLine(pickFrom("searchTense", REPORT_LINES.searchTense), vars));
  } else {
    lines.push(fmtLine(pickFrom("searchGood", REPORT_LINES.searchGood), vars));
  }

  // Only add a second narrative beat if it's a different pool — avoid
  // picking searchGood twice (was the repetition source on clean raids)
  if (!outcome.survived) {
    lines.push(fmtLine(pickFrom("fightLose", REPORT_LINES.fightLose), vars));
  } else if (outcome.map.riskMult > 1.5) {
    lines.push(fmtLine(pickFrom("fightWin", REPORT_LINES.fightWin), vars));
  }
  // Low-risk clean raids: no second beat needed — the extract line covers it

  if (outcome.gearFind) {
    lines.push(`Someone pockets a ${outcome.gearFind.item.name.toLowerCase()} off the floor — still usable.`);
  }
  if (outcome.intelFind) {
    lines.push(`Notes, maps, a torn page from somewhere else's logbook — ${outcome.intelFind} intel worth keeping.`);
  }

  if (outcome.bossDrop) {
    lines.push(`${outcome.bossLog ? outcome.bossLog.bossName : "It"} didn't get up again — and left ${outcome.bossDrop.item.name} behind.`);
  }

  if (outcome.keyDrop) {
    lines.push(`Tucked away in what was left: another ${outcome.keyDrop.key.name}.`);
  }
  if (outcome.regionKeyDrop) {
    lines.push(`Found something unexpected among the boss's effects — a ${outcome.regionKeyDrop.key.name}.`);
  }
  if (outcome.ngPlusDrop) {
    lines.push(`Something came off this kill that doesn't belong to anything you've fought before — ${outcome.ngPlusDrop.item.name}.`);
  }
  // One line per scav, so a mixed-outcome group raid (some make it,
  // some don't) reads clearly instead of collapsing into one verdict.
  for (const detail of outcome.perScav) {
    const soloVars = { name: detail.name, map: outcome.map.name };
    if (detail.died) {
      lines.push(composeDeathLine(detail, outcome));
      // Show the morale consequence explicitly so the player sees it
      // here rather than only discovering it when they check the roster.
      const raidsSurvived = detail.raidsSurvived || 0;
      const experienceWeight = Math.min(3.0, 1 + raidsSurvived / 25);
      const survivorHit = Math.round(15 * experienceWeight);
      const campHit = Math.round(8 * experienceWeight);
      const hasOtherSurvivors = outcome.perScav.some((d) => !d.died && d.id !== detail.id);
      if (hasOtherSurvivors) {
        lines.push(`The rest of the group takes a ${survivorHit}-point morale hit. Camp takes ${campHit}.`);
      } else {
        lines.push(`Camp takes a ${campHit}-point morale hit.`);
      }
    } else if (detail.injured) {
      lines.push(fmtLine(pickFrom("extractHurt", REPORT_LINES.extractHurt), soloVars));
    } else {
      lines.push(fmtLine(pickFrom("extractGood", REPORT_LINES.extractGood), soloVars));
    }
  }
  return lines;
}

const REPORT_LINES_DEATH_ROOKIE = [
  "{name} doesn't make it back. First raid. Didn't get far enough to find anything worth finding.",
  "Barely out the gate, and {name} doesn't check back in. Camp hears nothing.",
  "{name} never got the chance to find their footing out there. Gone before they learned anything.",
  "First run, last run. {name} doesn't come back.",
];
const REPORT_LINES_DEATH_VETERAN = [
  "{name} doesn't check back in — not after everything they'd already gotten through.",
  "Radio goes quiet on {name}'s channel. {raids} raids survived, and this is the one that got them.",
  "{name} doesn't make it back. After this many trips out, camp half-expected they were unkillable. They weren't.",
  "Camp was used to {name} coming home. {raids} times already. Not today.",
  "{name} had seen worse than this. That's the part that doesn't make sense.",
];
// Cause-specific death lines
const REPORT_LINES_DEATH_BOSS = [
  "{name} ran into {detail} and didn't come back from it.",
  "{detail} was the last thing {name} saw out there.",
  "{name} went for {detail}. {detail} was ready for them.",
  "Contact with {detail}. Radio goes quiet shortly after.",
];
const REPORT_LINES_DEATH_HOSTILE = [
  "{name} ran into a fight they couldn't finish. Last contact was during {detail}.",
  "The {detail} — {name} didn't walk away from that one.",
  "{name} doesn't check in after the {detail}. The math on that is simple.",
  "What happened during {detail} is easy enough to piece together. {name} didn't make it.",
];
const REPORT_LINES_DEATH_ATTRITION = [
  "No contact. No event logged. {name} just doesn't come back.",
  "Radio was quiet the whole run. Now it's quiet for good. {name} is gone.",
  "{name} disappears somewhere between the entry point and the extraction. Nobody's sure where.",
  "The run was clean until it wasn't. {name} doesn't check in at the end of it.",
  "{name} is gone. No explanation comes back with them.",
];

function composeDeathLine(detail, outcome) {
  const scav = STATE.scavs.find((s) => s.id === detail.id);
  const raidsCount = scav ? scav.stats.raidsSurvived : 0;
  const background = scav ? scav.background : null;
  const vars = { name: detail.name, raids: raidsCount, detail: detail.deathDetail || "" };

  let line;

  // Cause of death takes priority — gives the most specific narrative
  if (detail.deathCause === "boss" && detail.deathDetail) {
    line = fmtLine(pick(REPORT_LINES_DEATH_BOSS), vars);
  } else if (detail.deathCause === "hostile" && detail.deathDetail) {
    // Clean up the event title for inline use
    vars.detail = detail.deathDetail.toLowerCase().replace(/^(a |an |the )/i, "");
    line = fmtLine(pick(REPORT_LINES_DEATH_HOSTILE), vars);
  } else if (raidsCount >= 15) {
    line = fmtLine(pick(REPORT_LINES_DEATH_VETERAN), vars);
  } else if (raidsCount === 0) {
    line = fmtLine(pick(REPORT_LINES_DEATH_ROOKIE), vars);
  } else if (detail.deathCause === "attrition") {
    line = fmtLine(pickFrom("deathAttrition", REPORT_LINES_DEATH_ATTRITION), vars);
  } else {
    line = fmtLine(pickFrom("death", REPORT_LINES.death), vars);
  }

  // Append gear lost
  const lost = detail.lostGear || [];
  if (lost.length > 0) {
    const uniqueLost = lost.filter((item) => item.unique);
    const regularLost = lost.filter((item) => !item.unique);
    if (uniqueLost.length > 0) {
      const uniqueNames = uniqueLost.map((item) => item.name).join(", ");
      line += ` ${uniqueNames} ${uniqueLost.length === 1 ? "goes" : "go"} down with them.`;
    } else if (regularLost.length > 0) {
      line += ` Their gear stays out there.`;
    }
  }

  // Objective status at time of death
  if (scav && scav.objective && !scav.objective.completed) {
    const objDef = getPersonalObjective(scav);
    if (objDef && getObjectiveRevealLevel(scav) >= 2) {
      line += ` Their objective — "${objDef.title}" — goes unfinished.`;
    }
  }

  return line;
}

function showLeaderElectionModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  let pickedId = null;

  function renderBody() {
    const livingScavs = STATE.scavs.filter((s) => s.status !== "dead");
    const rows = livingScavs.map((scav) => {
      const isPicked = pickedId === scav.id;
      return `
        <div class="defend-pick ${isPicked ? "active" : ""}" data-leader-pick-id="${scav.id}">
          <span class="defend-pick-name">${escapeHtml(scav.name)}<span class="lvl">LV.${scav.level}</span></span>
          <span class="defend-pick-hp">${scav.hp}/${effectiveMaxHp(scav)} HP</span>
        </div>
      `;
    }).join("");

    return `
      <div class="event-warning">Six days in, and the camp wants someone to actually be in charge. Pick a leader — +5% survival on every group raid, less morale lost camp-wide, for as long as they're around to lead. If they don't make it back from somewhere, the camp feels that loss harder than most.</div>
      <div class="section-divider" style="margin-top:0;">Pick a leader</div>
      <div class="defend-pick-list">${rows}</div>
    `;
  }

  overlay.innerHTML = `
    <div class="modal-box settings-box">
      <div class="modal-header"><span class="dot" style="background:var(--brass-bright);animation:none;"></span> CHOOSE A LEADER</div>
      <div class="panel-body" id="leaderElectionBody">${renderBody()}</div>
      <div class="modal-result" style="display:block;">
        <button class="btn" id="confirmLeaderBtn" disabled>Confirm Leader</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  function wireRows() {
    overlay.querySelectorAll("[data-leader-pick-id]").forEach((row) => {
      row.addEventListener("click", () => {
        pickedId = row.getAttribute("data-leader-pick-id");
        overlay.querySelector("#leaderElectionBody").innerHTML = renderBody();
        wireRows();
        const btn = overlay.querySelector("#confirmLeaderBtn");
        if (btn) btn.disabled = false;
      });
    });
  }
  wireRows();

  overlay.querySelector("#confirmLeaderBtn").addEventListener("click", () => {
    if (!pickedId) return;
    chooseLeader(pickedId);
    overlay.remove();
    renderAll();
  });
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
    html += `<div style="font-size:13.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(names)} drove it off. Everyone's fine.</div>`;
  } else {
    html += `<div class="result-title death">DEFENSE FAILED</div>`;
    html += `<div style="font-size:13.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(names)} got hit hard — down to 1 HP. The camp lost supplies in the chaos.</div>`;
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
  const { survival } = calcGroupOdds(scavs, map, raid.gearById, raid.weatherId);
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

// Shows a field report for a historical raid from STATE.log[index].
// Differs from showFieldReport in that we skip the sequential line-by-
// line animation and display everything at once — reviewing history
// should be instant, not make the player sit through the ticker again.
function showStoredFieldReport(index) {
  const entry = STATE.log[index];
  if (!entry) return;
  const outcome = entry.outcome;
  const headerNames = (outcome.scavNames || [outcome.scavName || "Unknown"]).join(", ");
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const lines = buildReportScript(outcome);
  const logHtml = lines.map(line => {
    const ts = new Date(entry.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    return `<div class="log-line"><span class="ts">[${ts}]</span>${escapeHtml(line)}</div>`;
  }).join("");

  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-header"><span class="dot" style="animation:none;opacity:0.5;"></span> RAID REPORT — ${escapeHtml(headerNames)} / ${escapeHtml(outcome.map?.name || "")} <span style="font-size:6px;color:var(--bone-dim);margin-left:8px;">${new Date(entry.ts).toLocaleDateString()}</span></div>
      <div class="modal-log">${logHtml}</div>
      <div class="modal-result" id="storedReportResult"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Re-use finishReport logic by calling showFieldReport's result builder
  // inline — same HTML, just rendered immediately without the animation
  const resultEl = overlay.querySelector("#storedReportResult");
  resultEl.style.display = "block";
  // Build result HTML the same way showFieldReport does
  const tempWrapper = { outcome };
  const fakeOverlay = { querySelector: (sel) => ({ style: {}, innerHTML: "" }) };
  // Manually build the result HTML (copy of finishReport logic)
  let html = "";
  const perScav = outcome.perScav || [];
  const deaths = perScav.filter(d => d.died).length;
  const anyInjured = perScav.some(d => d.injured);
  if (outcome.arena) {
    const d = perScav[0] || {};
    html += `<div class="result-title ${outcome.won ? "success" : "hurt"}">${outcome.won ? "TOURNAMENT WON" : "LOST THE BOUT"}</div>`;
  } else if (perScav.length === 1) {
    const d = perScav[0] || {};
    if (d.died) {
      const causeNote = d.deathCause === "boss" && d.deathDetail ? ` Killed by ${escapeHtml(d.deathDetail)}.` : d.deathCause === "hostile" && d.deathDetail ? ` Died during ${escapeHtml(d.deathDetail)}.` : "";
      html += `<div class="result-title death">KIA — ${escapeHtml(d.name)}</div>`;
      html += `<div style="font-size:7px;color:var(--bone-dim);margin-bottom:10px;line-height:1.7;">${escapeHtml(d.name)} didn't come back from ${escapeHtml(outcome.map?.name || "")}.${causeNote}</div>`;
    } else if (d.injured) {
      const severity = d.hpLost >= 30 ? "badly" : d.hpLost >= 20 ? "noticeably" : "lightly";
      html += `<div class="result-title hurt">RETURNED WOUNDED</div>`;
      html += `<div style="font-size:7px;color:var(--bone-dim);margin-bottom:10px;line-height:1.7;">${escapeHtml(d.name)} came back ${severity} hurt — lost ${d.hpLost} HP.</div>`;
    } else {
      html += `<div class="result-title success">CLEAN EXTRACT</div>`;
    }
  } else {
    if (deaths === perScav.length) html += `<div class="result-title death">GROUP LOST</div>`;
    else if (deaths > 0) html += `<div class="result-title hurt">PARTIAL RETURN</div>`;
    else html += `<div class="result-title success">GROUP RETURNED</div>`;
    html += `<div class="group-result-list">` + perScav.map(d => {
      const sc = d.died ? "death" : d.injured ? "hurt" : "success";
      const lbl = d.died ? "KIA" : d.injured ? `-${d.hpLost} HP` : d.leveledUp ? "Leveled up" : "Clean";
      return `<div class="group-result-row"><span>${escapeHtml(d.name)}</span><span class="raidlog-status ${sc}">${escapeHtml(lbl)}</span></div>`;
    }).join("") + `</div>`;
  }
  if (outcome.loot && Object.keys(outcome.loot).length) {
    html += `<div class="loot-list">` + Object.entries(outcome.loot).map(([res, amt]) =>
      `<span class="loot-item">+${amt} ${res}</span>`).join("") + `</div>`;
  }
  if (outcome.gearFind) {
    html += `<div class="gear-find-banner"><span class="gf-tag">${outcome.gearFind.hadBefore ? `×${outcome.gearFind.newCount}` : "New find"}</span> Found <b>${escapeHtml(outcome.gearFind.item.name)}</b>.</div>`;
  }
  html += `<button class="btn" id="closeStoredReportBtn">Close</button>`;
  resultEl.innerHTML = html;
  resultEl.querySelector("#closeStoredReportBtn").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });
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
          html += `<div style="font-size:13.5px;color:var(--brass-bright);margin-bottom:6px;">${escapeHtml(d.name)} leveled up!</div>`;
        }
      } else {
        html += `<div class="result-title hurt">LOST THE BOUT</div>`;
        html += `<div style="font-size:13.5px;color:var(--bone-dim);margin-bottom:10px;">${escapeHtml(d.name)} came home empty-handed — no harm done, just no payout this time.</div>`;
      }
    } else if (outcome.perScav.length === 1) {
      // ----- Solo raid: same single-scav summary as before -----
      const d = outcome.perScav[0];
      if (d.died) {
        const scav = STATE.scavs.find(s => s.id === d.id);
        const raidsNote = d.raidsSurvived > 0
          ? ` ${d.raidsSurvived} raid${d.raidsSurvived === 1 ? "" : "s"} survived before this one.`
          : " Never made it back from their first.";
        const causeNote = d.deathCause === "boss" && d.deathDetail
          ? ` Killed by ${escapeHtml(d.deathDetail)}.`
          : d.deathCause === "hostile" && d.deathDetail
          ? ` Died during ${escapeHtml(d.deathDetail)}.`
          : "";
        html += `<div class="result-title death">KIA — ${escapeHtml(d.name)}</div>`;
        html += `<div style="font-size:7px;color:var(--bone-dim);margin-bottom:10px;line-height:1.7;">${escapeHtml(d.name)} didn't come back from ${escapeHtml(outcome.map.name)}.${causeNote}${raidsNote} Removed from roster.</div>`;
      } else if (d.injured) {
        const severity = d.hpLost >= 30 ? "badly" : d.hpLost >= 20 ? "noticeably" : "lightly";
        html += `<div class="result-title hurt">RETURNED WOUNDED</div>`;
        html += `<div style="font-size:7px;color:var(--bone-dim);margin-bottom:10px;line-height:1.7;">${escapeHtml(d.name)} came back ${severity} hurt — lost ${d.hpLost} HP. Recovers over time. The Infirmary speeds it up.</div>`;
      } else {
        html += `<div class="result-title success">CLEAN EXTRACT</div>`;
        if (d.leveledUp) {
          html += `<div style="font-size:7px;color:var(--brass-bright);margin-bottom:6px;">${escapeHtml(d.name)} leveled up on this run.</div>`;
        }
      }
    } else {
      // ----- Group raid: overall verdict + a line per member -----
      const deaths = outcome.perScav.filter((d) => d.died).length;
      if (deaths === outcome.perScav.length) {
        html += `<div class="result-title death">GROUP LOST</div>`;
        html += `<div style="font-size:13.5px;color:var(--bone-dim);margin-bottom:10px;">Nobody made it back from ${escapeHtml(outcome.map.name)}.</div>`;
      } else if (deaths > 0) {
        html += `<div class="result-title hurt">PARTIAL RETURN</div>`;
        html += `<div style="font-size:13.5px;color:var(--bone-dim);margin-bottom:10px;">${deaths} of ${outcome.perScav.length} didn't make it back from ${escapeHtml(outcome.map.name)}.</div>`;
      } else {
        html += `<div class="result-title success">GROUP RETURNED</div>`;
      }
      html += `<div class="group-result-list">` + outcome.perScav.map((d) => {
        const statusClass = d.died ? "death" : d.injured ? "hurt" : "success";
        let statusLabel;
        if (d.died) {
          if (d.deathCause === "boss" && d.deathDetail) statusLabel = `KIA — ${d.deathDetail}`;
          else if (d.deathCause === "hostile") statusLabel = "KIA — hostile";
          else statusLabel = "KIA";
        } else if (d.injured) {
          statusLabel = `-${d.hpLost} HP`;
        } else {
          statusLabel = d.leveledUp ? "Leveled up" : "Clean";
        }
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
    if (outcome.regionKeyDrop) {
      html += `<div class="boss-drop-banner"><span class="bd-tag">Key found</span> Unexpected — <b>${escapeHtml(outcome.regionKeyDrop.key.name)}</b> among their things.</div>`;
    }
    if (outcome.ngPlusDrop) {
      const tag = outcome.ngPlusDrop.hadBefore ? "Another one" : "Something new";
      html += `<div class="boss-drop-banner ngplus-drop"><span class="bd-tag">${escapeHtml(tag)}</span> <b>${escapeHtml(outcome.ngPlusDrop.item.name)}</b>.</div>`;
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

// One color per branch, distinct enough to tell apart at a glance on a
// small badge — reuses existing palette colors where the association
// already makes sense (Combat/rust, Survival/olive, Scavenging/brass)
// and reaches for the newer accent-blue for Resilience specifically
// (radiation, otherwise unused anywhere outside the Arena leaderboard)
// and gunmetal for Fortitude (cool, steady, nothing else competing for it).
const SKILL_BRANCH_BADGE_COLOR = {
  combat: "var(--rust-bright)",
  survival: "var(--olive-bright)",
  scavenging: "var(--brass-bright)",
  resilience: "var(--accent-blue-bright)",
  fortitude: "var(--gunmetal-bright)",
  fieldcraft: "var(--bone-bright)",
  command: "var(--rust-mid)",
};

// Shared by every scav-picker card across the game (Region tab, Dungeons
// group picker, Arena, Barracks group picker) so the branch badge and
// any contextual warnings always look and behave the same way no matter
// which screen they show up on, rather than each picker re-implementing
// its own version that could quietly drift out of sync with the others.
// map is optional — pass null where there's no real map to check
// against (the Arena tab) and getScavWarnings already handles that.
// showWarnings defaults true; pass false for pickers with no actual
// raid-launch context at all (the Prestige scav picker) — the weather
// warning specifically isn't map-gated, so it would otherwise fire
// there too even though "no morale resistance" has nothing to do with
// choosing who to carry into New Game+.
// Same tier-color convention the loadout screen's gear tiles already
// use (see .char-item-tile.t1-t4 in index.html) — reused here rather
// than inventing a second color scheme for tiers, so "tier 3" reads as
// the same color no matter which screen it shows up on.
const GEAR_TIER_BADGE_COLOR = {
  1: "var(--bone-dim)",
  2: "var(--olive-bright)",
  3: "var(--brass-bright)",
  4: "var(--rust-bright)",
};

// The single highest-tier piece a scav has equipped, across all three
// slots — not a full loadout listing (too much for a compact picker
// card), just the one item that says the most about how dangerous this
// scav actually is to send out. Ties (two slots at the same tier) go to
// whichever slot is checked first below (weapon, then armor, then
// pack) — an arbitrary but stable tiebreak, not meant to imply weapon
// matters more than armor in general, just needs to pick one
// consistently rather than flicker between two equally-valid answers.
function getScavTopGearItem(scav) {
  const slots = ["weapon", "armor", "pack"];
  let best = null;
  for (const slot of slots) {
    const item = getGearItem(slot, scav.gear[slot]);
    if (item.tier > 0 && (!best || item.tier > best.tier)) {
      best = item;
    }
  }
  return best;
}

function renderScavPickExtras(scav, map, showWarnings = true) {
  const branch = getStrongestBranch(scav);
  const warnings = showWarnings ? getScavWarnings(scav, map) : [];
  const isLeader = STATE.leaderScavId === scav.id;
  const leaderBadge = isLeader
    ? `<span class="rsp-leader-badge" title="Leader — +5% survival on group raids, less morale lost camp-wide. If they don't make it back, the camp feels it harder than most.">★ LEADER</span>`
    : "";
  const badge = branch
    ? `<span class="rsp-branch-badge" style="color:${SKILL_BRANCH_BADGE_COLOR[branch.id]};border-color:${SKILL_BRANCH_BADGE_COLOR[branch.id]};">${escapeHtml(branch.label.toUpperCase())}</span>`
    : "";
  // Background badge — always visible, even on fresh scavs with no skill
  // branch yet. Shows who this person is rather than what they've become.
  const bg = scav.background ? SCAV_BACKGROUNDS[scav.background] : null;
  const bgBadge = bg
    ? `<span class="rsp-branch-badge" style="color:${bg.color};border-color:${bg.color};opacity:0.75;" title="${escapeHtml(bg.desc)}">${escapeHtml(bg.name.toUpperCase())}</span>`
    : "";
  const topGear = getScavTopGearItem(scav);
  const gearColor = topGear ? (topGear.unique ? "var(--brass-bright)" : GEAR_TIER_BADGE_COLOR[topGear.tier]) : null;
  const gearBadge = topGear
    ? `<span class="rsp-gear-badge ${topGear.unique ? "is-unique" : ""}" style="color:${gearColor};border-color:${gearColor};" title="${escapeHtml(topGear.name)}${topGear.unique ? " (unique)" : ` (tier ${topGear.tier})`}">${escapeHtml(topGear.name)}</span>`
    : "";
  const warningIcon = warnings.length
    ? `<span class="rsp-warning-icon" title="${escapeHtml(warnings.join(" · "))}">⚠</span>`
    : "";
  if (!leaderBadge && !badge && !bgBadge && !gearBadge && !warningIcon) return "";
  return `<div class="rsp-extras">${leaderBadge}${bgBadge}${badge}${gearBadge}${warningIcon}</div>`;
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
// Shared by renderWarehouse (first paint) and refreshWarehouseTooltip
// (every later update) so the two can never drift apart — same
// resource lines either one would have written out by hand, now in one
// place. The upkeep line uses the flat DAILY_UPKEEP_COST constant
// directly rather than re-deriving it, since that's a fixed cost
// regardless of Farm level or anything else — the Farm changes how much
// food comes IN, not what the camp owes OUT.
function warehouseSuppliesMarkup() {
  return `
    <span class="cf-supply-line scrap">${STATE.resources.scrap} scrap</span>
    <span class="cf-supply-line gold">${STATE.resources.gold} gold</span>
    <span class="cf-supply-line meds">${STATE.resources.meds} meds</span>
    <span class="cf-supply-line food">${STATE.resources.food || 0} food</span>
    <span class="cf-supply-line intel">${STATE.resources.intel || 0} intel</span>
    <span class="cf-supply-line upkeep">Upkeep: ${DAILY_UPKEEP_COST.food} food, ${DAILY_UPKEEP_COST.gold} gold/day</span>
  `;
}

function refreshWarehouseTooltip() {
  const warehouseSupplies = document.querySelector(".cf-warehouse-supplies");
  if (warehouseSupplies) {
    warehouseSupplies.innerHTML = warehouseSuppliesMarkup();
  }
}

function renderHeader() {
  const outpostBtn = isOutpostUnlocked()
    ? `<button class="header-btn" id="openOutpostBtn">Outpost</button>`
    : "";
  return `
    <div class="header">
      <div class="logo">OUTPOST</div>
      <div class="header-stats">
        <button class="header-btn" id="openRaidLogBtn">Raid Log</button>
        ${outpostBtn}
        <button class="header-btn" id="openCodexBtn">Codex</button>
        <button class="icon-btn" id="settingsBtn" title="Settings" aria-label="Settings">${GEAR_ICON_SVG}</button>
      </div>
    </div>
  `;
}

// Short first-person lines a scav might mutter to themselves mid-raid —
// distinct in voice from REPORT_LINES above, which narrates events about
// them in third person for the field report. These are overheard, not
// narrated: nervous, bored, grimly funny, the kind of thing someone says
// under their breath when they think no one's listening. Kept short on
// purpose — they show up as a speech bubble (see renderRadioLog), and a
// bubble that wraps to three lines stops reading as a quick aside.
const SCAV_SELF_TALK = [
  "Okay. Okay, just— okay.",
  "Nobody home. Good. Great. Love that.",
  "If I die in here I am going to be so annoyed.",
  "Whose idea was this again?",
  "Just gotta keep moving. Don't think about it.",
  "That smell is not getting better the longer I stand here.",
  "Worth it. This better be worth it.",
  "Quiet. Too quiet. Or normal quiet. Hard to tell anymore.",
  "One more room. One more, then I'm out.",
  "Definitely heard something. Definitely fine.",
  "Camp's gonna owe me for this one.",
  "Don't touch that. ...Touching it.",
  "I've got a bad feeling about this floor.",
  "Almost there. Almost. Maybe.",
  "Note to self: never volunteer first again.",
  "This is fine. Everything about this is fine.",
  "Just breathe. In, out. In, out. Okay, moving.",
  "Could really use a smoke right now.",
  "Stay sharp. Stay sharp. Stay—what was that.",
  "Whoever lived here had terrible taste.",
  "Should've eaten something before this.",
  "Not the worst place I've stood. Top ten, maybe.",
  "If anyone asks, this was someone else's idea.",
  "Getting too old for this. Said that last time too.",
  "Talking to myself again. Healthy coping mechanism, probably.",
  "Five more minutes. Then I'm done pretending I'm fine.",
];

// One small bank per skill branch, layered on top of the generic pool
// above rather than replacing it — see scavSelfTalkPool, which mixes a
// scav's branch-specific lines in with the generic ones once they've
// actually invested in a branch (see getStrongestBranch), so a Combat
// scav still occasionally mutters something universal too, not
// exclusively branch flavor every single time. A fresh scav with no
// skill points spent anywhere just gets the generic pool on its own,
// since there's no branch identity yet worth writing toward.
const SCAV_SELF_TALK_COMBAT = [
  "Come on then. Let's see it.",
  "Hands steady. Hands steady. Good.",
  "I've hit worse than this and walked away.",
  "First one to flinch loses. Not gonna be me.",
];
const SCAV_SELF_TALK_SURVIVAL = [
  "Takes more than this to put me down.",
  "Hurts. Doesn't matter. Keep moving.",
  "I've walked out of worse rooms than this one.",
  "Bleeding's fine as long as it's slow.",
];
const SCAV_SELF_TALK_SCAVENGING = [
  "Ooh, don't mind if I do.",
  "Check every drawer. Every single one.",
  "One man's trash, my whole paycheck.",
  "Camp's not gonna believe what's in this bag.",
];
const SCAV_SELF_TALK_RESILIENCE = [
  "Counter's clicking. Fine. Heard worse.",
  "Lead apron would be nice right about now.",
  "Glow-in-the-dark's a fashion choice at this point.",
  "Rads don't scare me. Mostly.",
];
const SCAV_SELF_TALK_FORTITUDE = [
  "Nothing rattles me. Nothing.",
  "Seen worse weather than this. Probably.",
  "Just another bad day. I've had plenty.",
  "Storm's not the worst thing I've walked through.",
];
const SCAV_SELF_TALK_FIELDCRAFT = [
  "In, get it, out. No wasted steps.",
  "Know this kind of place. Know how it works.",
  "Fast doesn't mean careless. Fast means efficient.",
  "Already mapped the way back out. Always do.",
];
const SCAV_SELF_TALK_COMMAND = [
  "Whoever's with me, stay close. I've got this.",
  "Eyes on everyone. That's the job too.",
  "Nobody gets left because I wasn't paying attention.",
  "Lead, don't follow. Easy to say.",
];
const SCAV_SELF_TALK_BY_BRANCH = {
  combat: SCAV_SELF_TALK_COMBAT,
  survival: SCAV_SELF_TALK_SURVIVAL,
  scavenging: SCAV_SELF_TALK_SCAVENGING,
  resilience: SCAV_SELF_TALK_RESILIENCE,
  fortitude: SCAV_SELF_TALK_FORTITUDE,
  fieldcraft: SCAV_SELF_TALK_FIELDCRAFT,
  command: SCAV_SELF_TALK_COMMAND,
};

// One small bank per background — distinct from the branch banks above
// in one key way: a scav always HAS a background from the moment
// they're recruited (see makeScav/rollScavBackground), unlike a skill
// branch, which requires actually spending points somewhere first. So
// background lines mix into the pool unconditionally for every scav
// (see scavSelfTalkPool below), giving even a fresh level-1 recruit
// some personality flavor right away, while branch lines stay
// conditional on having a strongest branch yet to draw from.
const SCAV_SELF_TALK_SOLDIER = [
  "Move like you've got cover. Even when you don't.",
  "Seen worse than this. Lived through worse than this.",
  "Discipline's the only thing keeping anyone alive in here.",
  "Don't think. Just execute. Thinking's for after.",
];
const SCAV_SELF_TALK_MEDIC = [
  "Already cataloging what's going to need stitches later.",
  "Worst thing about this job was always the waiting.",
  "Stay upright. Can't fix you if you go down here.",
  "Old habits. Still checking pulses out of reflex.",
];
const SCAV_SELF_TALK_SCAVENGER = [
  "Every room's got something. Just gotta look right.",
  "People always miss the obvious spots. Not me.",
  "This used to be someone's whole life. Now it's mine.",
  "Worth more broken down than it ever was whole.",
];
const SCAV_SELF_TALK_STALKER = [
  "Quiet. Stay quiet. Quiet gets you home.",
  "Nobody's seen me yet. Keeping it that way.",
  "Slow is invisible. Invisible is alive.",
  "Already know three ways out of this room.",
];
const SCAV_SELF_TALK_TOUGH = [
  "Hit me. Go ahead. See what happens.",
  "Takes a lot more than that to put me down.",
  "Pain's just information. Mostly ignoring it.",
  "Built for this. Built for exactly this.",
];
const SCAV_SELF_TALK_COMPOSED = [
  "Seen worse. Genuinely. This isn't close.",
  "Nothing here's going to surprise me at this point.",
  "Calm gets the job done. Panic doesn't.",
  "Just another Tuesday, more or less.",
];
const SCAV_SELF_TALK_SCRAPPER = [
  "Don't need a plan. Need to win the next ten seconds.",
  "Ugly fight's still a fight you can win.",
  "Improvise. Always improvise. Plans fall apart anyway.",
  "Whatever works. Doesn't have to be pretty.",
];
const SCAV_SELF_TALK_BY_BACKGROUND = {
  soldier: SCAV_SELF_TALK_SOLDIER,
  medic: SCAV_SELF_TALK_MEDIC,
  scavenger: SCAV_SELF_TALK_SCAVENGER,
  stalker: SCAV_SELF_TALK_STALKER,
  tough: SCAV_SELF_TALK_TOUGH,
  composed: SCAV_SELF_TALK_COMPOSED,
  scrapper: SCAV_SELF_TALK_SCRAPPER,
};

// Mixes a scav's branch-specific lines in with the generic pool, rather
// than picking one bank or the other outright — a Combat-built scav
// should still sometimes say something universal, not only ever combat
// flavor, the same way a real person's specialty doesn't dictate every
// single thing they mutter to themselves. Returns the plain generic
// pool unchanged for a scav with no branch investment yet (a fresh
// recruit has no specialty-flavored lines to draw from in the first
// place) — but background lines mix in regardless, every single time,
// since every scav has one from the moment they're recruited.
function scavSelfTalkPool(scav) {
  const branch = getStrongestBranch(scav);
  let pool = SCAV_SELF_TALK;
  if (branch && SCAV_SELF_TALK_BY_BRANCH[branch.id]) {
    pool = pool.concat(SCAV_SELF_TALK_BY_BRANCH[branch.id]);
  }
  if (scav.background && SCAV_SELF_TALK_BY_BACKGROUND[scav.background]) {
    pool = pool.concat(SCAV_SELF_TALK_BY_BACKGROUND[scav.background]);
  }
  return pool;
}

// ===== CAMP CHAT BUBBLES =====
// Distinct from the raid-log self-talk bubbles (scavBubbleState /
// getOrRollScavBubble) — those are interior monologue shown in the
// radio log while a scav is on a mission. These are overheard scraps
// of camp chatter that appear above sprites in the campfire scene
// while scavs are present at camp, simulating people talking to each
// other rather than thinking to themselves. Different tone, different
// mechanism, different display location.
const CAMP_CHAT_LINES = [
  "Anyone know how long that rain's supposed to last?",
  "I'm just saying, we could use another door.",
  "That smell isn't coming from me.",
  "Has anyone checked on the food situation lately?",
  "I slept maybe three hours. Total.",
  "The fire's getting low.",
  "Heard something moving around outside last night.",
  "Not complaining. Just noting it for the record.",
  "We need more meds.",
  "Good haul today.",
  "I could eat.",
  "Anyone else feel like we're being watched?",
  "This place is better than the last one. Mostly.",
  "How long have we been here now?",
  "I'll take first watch.",
  "Don't touch my stuff.",
  "Has anyone found any coffee? Asking for me.",
  "The roof held last night. Small victory.",
  "I think I saw a light out past the tree line.",
  "We should talk about the plan.",
  "Just glad to be back.",
  "Next time I'm taking the shorter route.",
  "Weather's turning. Feel it in my knee.",
  "Keep the fire going.",
  "Anyone know what day it is?",
  "That was close today. Too close.",
  "I found something out there. Not sure what yet.",
  "This fire's the best part of the day.",
  "We're out of the good screwdrivers again.",
  "Something ate the rest of the rations.",
  "I miss coffee. Real coffee.",
  "Quiet night. Don't jinx it.",
  "We should move out before it gets light.",
  "I'm fine. Ask me again later.",
  "Somebody fix that door before it rains again.",
  "You ever think about what this place looked like before?",
];

// How often the chat system picks a new speaker — long enough that
// bubbles feel occasional and noticed, not a constant ticker.
const CAMP_CHAT_INTERVAL_MS = 7000;
const CAMP_CHAT_DURATION_MS = 4500;
let campChatInterval = null;

function startCampChat() {
  if (campChatInterval) return;
  campChatInterval = setInterval(() => {
    const container = document.getElementById("cfSurvivors");
    if (!container) return;
    // Only ready scavs talk — seated ones (away on raids etc.) are
    // occupied elsewhere and shouldn't chime in from across the fire.
    const readySprites = Array.from(container.querySelectorAll(".cf-survivor"))
      .filter((el) => {
        const scav = STATE.scavs.find((s) => s.id === el.dataset.scavId);
        return scav && scav.status === "ready";
      });
    if (readySprites.length === 0) return;
    // Clear any existing bubbles first so there's at most one at a time.
    container.querySelectorAll(".cf-chat-bubble").forEach((b) => b.remove());
    const speaker = readySprites[Math.floor(Math.random() * readySprites.length)];
    const line = CAMP_CHAT_LINES[Math.floor(Math.random() * CAMP_CHAT_LINES.length)];
    const bubble = document.createElement("div");
    bubble.className = "cf-chat-bubble";
    bubble.textContent = line;
    speaker.appendChild(bubble);
    // Auto-remove after the display window closes — not driven by
    // renderAll since that would clobber the bubble's text each time
    // it re-renders the sprite's innerHTML from scratch.
    setTimeout(() => {
      if (bubble.parentElement) bubble.remove();
    }, CAMP_CHAT_DURATION_MS);
  }, CAMP_CHAT_INTERVAL_MS);
}


const SCAV_SELF_TALK_CHANCE = 1 / 12;
const SCAV_SELF_TALK_DURATION_MS = 3500; // how long a triggered bubble holds its line before clearing

// { raidId: { line, expiresAt } } — module-level, not part of STATE,
// since this is purely a cosmetic display detail with no game-state
// consequence and no reason to survive a save/reload (a bubble simply
// not being mid-display the moment someone reopens the game is fine).
// Read and written every render rather than driven by its own separate
// setTimeout/animation loop — renderRadioLog already runs on a steady
// roughly-1-second cadence via gameTick, which is a fine enough clock
// for "is this bubble's few-second window still open" without adding a
// second independent timer that could drift out of sync with the first.
const scavBubbleState = {};

function getOrRollScavBubble(raidId, scav) {
  const now = gameNow();
  const existing = scavBubbleState[raidId];
  if (existing && existing.expiresAt > now) return existing.line;
  if (existing) delete scavBubbleState[raidId]; // expired — clear it out rather than leaving a stale entry behind
  if (Math.random() >= SCAV_SELF_TALK_CHANCE) return null;
  // scav can be null/undefined defensively (shouldn't happen in
  // practice — every raid has at least one live scav by construction —
  // but scavSelfTalkPool itself would throw on a missing scav, and
  // there's no reason to let a render crash over a cosmetic bubble line
  // if that assumption is ever wrong) — falls back to the plain generic
  // pool rather than erroring.
  const pool = scav ? scavSelfTalkPool(scav) : SCAV_SELF_TALK;
  const line = pick(pool);
  scavBubbleState[raidId] = { line, expiresAt: now + SCAV_SELF_TALK_DURATION_MS };
  return line;
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

    // Intervention panel: appears at 40–85% progress on region maps,
    // only once, only when no event is pending and no intervention has
    // already been made. Not blocking — the player can dismiss it or
    // just let the raid finish normally.
    const canIntervene = !map?.dungeon && !map?.arena && !raid.intervention
      && !awaiting && pct >= 40 && pct < 85;
    const interventionPanel = canIntervene ? `
      <div class="intervention-panel" data-intervention-raid="${raid.id}">
        <div class="intervention-label">▶ Intervene</div>
        <div class="intervention-options">
          <button class="intervention-btn extract" data-intervention-type="extract_early">
            <span class="iv-title">Extract now</span>
            <span class="iv-detail">Come back with what they've found so far — less loot, guaranteed safe.</span>
          </button>
          <button class="intervention-btn push ${(STATE.resources.meds || 0) < 2 ? "disabled" : ""}" data-intervention-type="push_deeper"
            ${(STATE.resources.meds || 0) < 2 ? "disabled" : ""}>
            <span class="iv-title">Push deeper <span class="iv-cost">2 meds</span></span>
            <span class="iv-detail">Risk more, come back with better loot. Costs 2 meds now.</span>
          </button>
          <button class="intervention-btn ignore" data-intervention-type="ignore">
            <span class="iv-title">Leave them to it</span>
            <span class="iv-detail">No change. They finish the route as planned.</span>
          </button>
        </div>
      </div>
    ` : raid.intervention && raid.intervention !== "ignored" ? `
      <div class="intervention-resolved">
        ${raid.intervention === "extract_early" ? "↩ Extracting early" : "↓ Pushing deeper"}
      </div>
    ` : "";

    let etaContent;
    if (awaitingBoss) {
      etaContent = `<span class="awaiting-tag boss-tag">☠ ${escapeHtml(boss ? boss.name : "Boss")} appeared</span>`;
    } else if (awaitingEvent) {
      etaContent = `<span class="awaiting-tag">⚠ Awaiting orders</span>`;
    } else {
      etaContent = remaining > 0 ? remaining + "s" : "arriving";
    }
    // Held per raid for a few seconds at a time (see scavBubbleState
    // below) rather than re-rolled fresh every render — independent
    // re-rolling every tick (this function runs roughly once a second
    // while raids are active) meant a bubble would show for almost
    // exactly 1 second before either vanishing or, on the rare tick it
    // rolled true again, swapping to a completely different random
    // line — reading as a flicker, not something a player could
    // actually read. Skipped entirely once something needs a response
    // (awaiting a boss/event) — that's not really a moment for idle
    // muttering, the radio log's own awaiting-tag already has the
    // player's attention there.
    // Speaks as the same lead scav whoLabel already names first — keeps
    // the name shown and the voice behind the bubble consistent with
    // each other on a group raid, rather than randomly attributing a
    // line to a different unnamed member of the group every time it
    // refreshes.
    const leadScav = STATE.scavs.find((sc) => sc.id === raid.scavIds[0]);
    const bubbleLine = awaiting ? null : getOrRollScavBubble(raid.id, leadScav);
    const bubble = bubbleLine
      ? `<div class="re-bubble">${escapeHtml(bubbleLine)}</div>`
      : "";
    return `
      <div class="radio-entry ${awaiting ? "awaiting" : ""} ${awaitingBoss ? "boss-awaiting" : ""}" data-raid-id="${raid.id}" ${awaiting ? `data-pending-raid-id="${raid.id}"` : ""} style="background-image:url('${map ? MAP_ART[map.id] : ""}')">
        <div class="re-overlay">
          <div class="re-top">
            <div class="re-bubble-slot" data-bubble-text="${bubbleLine ? escapeHtml(bubbleLine) : ""}">${bubble}</div>
            <div class="who" title="${escapeHtml(names.join(", "))}${raid.nightRaid ? " — night raid: richer loot, more hostiles" : ""}">${raid.nightRaid ? "☾ " : ""}${escapeHtml(whoLabel)}</div>
          </div>
          <div>
            <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
            <div class="eta">${etaContent} · ${escapeHtml(map ? map.name : "")}</div>
          </div>
          ${interventionPanel}
        </div>
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

// Called every tick instead of blindly replacing .radio-log's entire
// outerHTML (see gameTick) — that approach recreated every card's whole
// DOM subtree every single second just to update a progress bar and a
// countdown number, which meant the chat bubble's fade-in CSS animation
// (see .re-bubble in index.html) replayed from scratch every tick too,
// even on ticks where the bubble's actual text hadn't changed at all —
// a held, stable line flickering as if it were a brand new element each
// time, because to the browser it genuinely was one. This patches the
// bar width/ETA text/bubble content of each existing card in place
// instead, only falling back to a full rebuild when the *set* of active
// raids has actually changed (one started or resolved since the last
// tick) — a structural change a surgical per-field patch can't express
// as cleanly as just re-rendering from scratch.
function refreshRadioLogInPlace() {
  const container = document.querySelector(".radio-log");
  if (!container) return false;

  const currentCards = Array.from(container.querySelectorAll("[data-raid-id]"));
  const currentIds = currentCards.map((el) => el.getAttribute("data-raid-id"));
  const activeIds = STATE.activeRaids.map((r) => r.id);
  // Order doesn't matter for this comparison, only membership — a raid
  // resolving and a different one launching in the same tick would
  // still correctly trigger the structural fallback below even if the
  // resulting set happened to be the same length.
  const sameSet = currentIds.length === activeIds.length && currentIds.every((id) => activeIds.includes(id));
  if (!sameSet) return false; // caller falls back to the full outerHTML rebuild

  const now = gameNow();
  for (const raid of STATE.activeRaids) {
    const card = container.querySelector(`[data-raid-id="${raid.id}"]`);
    if (!card) continue; // shouldn't happen given the sameSet check above, but never worth a crash if it somehow does

    const elapsed = (now - raid.startedAt) / 1000;
    const pct = Math.min(100, (elapsed / raid.duration) * 100);
    const remaining = Math.max(0, Math.ceil(raid.duration - elapsed));
    const awaitingBoss = !!raid.pendingBoss;
    const awaitingEvent = !!raid.pendingEvent;
    const awaiting = awaitingBoss || awaitingEvent;

    const barFill = card.querySelector(".bar-fill");
    if (barFill) barFill.style.width = `${pct}%`;

    const etaEl = card.querySelector(".eta");
    if (etaEl) {
      const map = MAPS.find((m) => m.id === raid.mapId);
      const boss = getBossForMap(raid.mapId);
      let etaContent;
      if (awaitingBoss) {
        etaContent = `<span class="awaiting-tag boss-tag">☠ ${escapeHtml(boss ? boss.name : "Boss")} appeared</span>`;
      } else if (awaitingEvent) {
        etaContent = `<span class="awaiting-tag">⚠ Awaiting orders</span>`;
      } else {
        etaContent = remaining > 0 ? remaining + "s" : "arriving";
      }
      etaEl.innerHTML = `${etaContent} · ${escapeHtml(map ? map.name : "")}`;
    }

    // The actual flicker fix: only touch the bubble's DOM at all if its
    // text genuinely changed since the last tick (tracked via the
    // data-bubble-text attribute set in renderRadioLog's template) —
    // leaving an unchanged bubble's element completely untouched is what
    // stops its fade-in animation from replaying, since the browser
    // never sees it as a new element if this code never recreates it.
    const bubbleSlot = card.querySelector(".re-bubble-slot");
    if (bubbleSlot) {
      const leadScav = STATE.scavs.find((sc) => sc.id === raid.scavIds[0]);
      const newLine = awaiting ? null : getOrRollScavBubble(raid.id, leadScav);
      const prevLine = bubbleSlot.getAttribute("data-bubble-text") || "";
      const newLineEscaped = newLine ? escapeHtml(newLine) : "";
      if (newLineEscaped !== prevLine) {
        bubbleSlot.setAttribute("data-bubble-text", newLineEscaped);
        bubbleSlot.innerHTML = newLine ? `<div class="re-bubble">${escapeHtml(newLine)}</div>` : "";
      }
    }

    // The awaiting/boss-awaiting classes and data-pending-raid-id can
    // also flip mid-tick (a pending event/boss firing) — kept in sync
    // here too rather than only ever being set at creation time, same
    // reasoning as everything else this function patches in place.
    card.classList.toggle("awaiting", awaiting);
    card.classList.toggle("boss-awaiting", awaitingBoss);
    if (awaiting && !card.hasAttribute("data-pending-raid-id")) {
      card.setAttribute("data-pending-raid-id", raid.id);
      // The outerHTML rebuild path re-wires every [data-pending-raid-id]
      // click listener fresh after replacing the DOM (see gameTick) —
      // this surgical path doesn't replace the DOM at all, so a card
      // that's only just now becoming awaiting needs its own listener
      // attached right here instead, or clicking it would silently do
      // nothing. Guarded by a dataset flag so a card already wired
      // (from an earlier tick, or from the initial render) never gets a
      // second duplicate listener stacked on top of the first.
      if (!card.dataset.wired) {
        card.dataset.wired = "true";
        card.addEventListener("click", () => {
          if (document.querySelector(".modal-overlay")) return;
          const liveRaid = STATE.activeRaids.find((r) => r.id === raid.id);
          if (liveRaid && liveRaid.pendingBoss) {
            showBossEncounterModal(raid.id);
          } else {
            showRaidEventModal(raid.id);
          }
        });
      }
    } else if (!awaiting && card.hasAttribute("data-pending-raid-id")) {
      card.removeAttribute("data-pending-raid-id");
    }

    // Wire intervention buttons when they first appear — the panel is
    // injected by renderRadioLog's full rebuild, but refreshRadioLogInPlace
    // also adds it surgically when progress crosses 40%. Either way, the
    // buttons need event listeners the moment they land in the DOM.
    // Use a data-iv-wired flag to prevent duplicate listeners on cards
    // that are patched in-place every second.
    const ivPanel = card.querySelector("[data-intervention-raid]");
    if (ivPanel && !ivPanel.dataset.ivWired) {
      ivPanel.dataset.ivWired = "true";
      ivPanel.querySelectorAll("[data-intervention-type]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const type = btn.getAttribute("data-intervention-type");
          const raidId = ivPanel.getAttribute("data-intervention-raid");
          if (resolveRaidIntervention(raidId, type)) {
            renderAll();
            if (type === "extract_early") pushToast("Extracting early.");
            else if (type === "push_deeper") pushToast("Pushing deeper. Higher risk, better haul.");
          }
        });
      });
    }
  }
  return true;
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
  // Was "minLevel > level + 1", which is equivalent to "level + 1 >=
  // minLevel" — letting a scav one full level below the displayed
  // requirement through anyway (a level-4 scav could access a site
  // shown everywhere as "Lv.5+"). Every display site (the map card's
  // lock label, the Codex, the dungeon group picker's note) shows the
  // raw minLevel with no +1 adjustment, so the gate needs to match
  // that number exactly, not be a level more lenient than what's
  // actually promised on screen.
  return map.minLevel > level;
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

  // All scavs dead — surface recruit + reset directly here so the player
  // isn't stranded on a screen with no way forward. Recruit uses the same
  // recruitScav()/recruitCost() path the barracks does; reset reuses the
  // settings panel's wipeProgress() with the same click-again confirm.
  if (living.length === 0) {
    const cost = recruitCost();
    const affordable = canAfford(cost);
    const costStr = `${cost.food} food${cost.gold ? ` + ${cost.gold} gold` : ""}`;
    return `
      <div class="raid-launcher-card">
        <div class="rl-status">The camp is empty. Everyone's gone.</div>
        <button class="btn" id="emptyRecruitBtn" ${!affordable ? "disabled" : ""}>Recruit a scav (${costStr})</button>
        ${!affordable ? `<div class="empty-note" style="margin-top:6px;">Not enough to recruit. Warehouse income still trickles in.</div>` : ""}
        <button class="btn danger" id="emptyResetBtn" style="margin-top:8px;">Reset Progress</button>
      </div>
    `;
  }

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

// ===== WEATHER =====
// One weather condition holds for an entire in-game day, rolled fresh
// each time the day actually turns over (see rollWeatherForDay, called
// from checkDailyUpkeep alongside the journal entry for that same day).
// Affects the same things skills already do — survivalAdd/lootMult/
// radiationChanceMult/moraleDropMult — applied in calcOdds and
// resolveRaid's radiation/morale block, multiplicatively on top of
// whatever a scav's own skills already contribute, the same way the
// night-raid bonus and skill bonuses already stack with each other
// rather than overriding one another.
const WEATHER_CATALOG = {
  clear: {
    name: "Clear",
    desc: "Plain daylight, nothing in the way of it.",
    weight: 35,
    survivalAdd: 0,
    lootMult: 1.0,
    radiationChanceMult: 1.0,
    moraleDropMult: 1.0,
  },
  overcast: {
    name: "Overcast",
    desc: "Flat grey sky, nothing falling out of it yet.",
    weight: 30,
    survivalAdd: -0.02,
    lootMult: 1.0,
    radiationChanceMult: 1.0,
    moraleDropMult: 1.0,
  },
  rain: {
    name: "Rain",
    desc: "Steady rain — washes out tracks and scent, but everyone comes back cold and miserable.",
    weight: 18,
    survivalAdd: 0.04,
    lootMult: 0.95,
    radiationChanceMult: 1.15,
    moraleDropMult: 1.2,
  },
  fog: {
    name: "Fog",
    desc: "Thick fog — cuts visibility both ways. Harder to be seen, harder to see what's worth taking.",
    weight: 12,
    survivalAdd: 0.05,
    lootMult: 0.85,
    radiationChanceMult: 1.0,
    moraleDropMult: 1.1,
  },
  storm: {
    name: "Storm",
    desc: "A real storm. Most people have the sense to stay in — which is exactly why whoever doesn't tends to come back with more.",
    weight: 5,
    survivalAdd: -0.12,
    lootMult: 1.45,
    radiationChanceMult: 1.3,
    moraleDropMult: 1.5,
  },
};

const WEATHER_IDS = Object.keys(WEATHER_CATALOG);

// Weighted random pick across WEATHER_CATALOG's `weight` fields — same
// shape as pick()/pickRaidEvent's weighting elsewhere, just inlined here
// since this is the only place that needs to roll specifically off
// WEATHER_CATALOG's weights rather than a flat array.
function rollWeatherType() {
  const totalWeight = WEATHER_IDS.reduce((sum, id) => sum + WEATHER_CATALOG[id].weight, 0);
  let roll = Math.random() * totalWeight;
  for (const id of WEATHER_IDS) {
    roll -= WEATHER_CATALOG[id].weight;
    if (roll <= 0) return id;
  }
  return WEATHER_IDS[0]; // floating point edge case safety net, should never actually hit
}

// STATE.weather is { [dayNumber]: weatherId } — keyed by day rather than
// just "today" and "tomorrow" so a forecast popup can show today's
// actual weather (already rolled and locked in) alongside tomorrow's
// (rolled in advance, same call, so the forecast is a real preview, not
// a guess). Old days are pruned opportunistically (see
// rollWeatherForDay) rather than ever growing unbounded.
function getWeatherForDay(day) {
  if (!STATE.weather[day]) {
    STATE.weather[day] = rollWeatherType();
  }
  return WEATHER_CATALOG[STATE.weather[day]];
}

function getWeatherIdForDay(day) {
  getWeatherForDay(day); // ensures it's rolled if it wasn't already
  return STATE.weather[day];
}

// Called once per day actually processed in checkDailyUpkeep's loop, so
// both today's and tomorrow's weather are guaranteed rolled and stored
// by the time anything tries to read them — the forecast popup reads
// tomorrow's via this same getter, never rolling it itself, so hovering
// the clock can never accidentally consume/change what tomorrow turns
// out to be before the day actually arrives.
function rollWeatherForDay(day) {
  getWeatherForDay(day);
  getWeatherForDay(day + 1); // pre-roll tomorrow too, so the forecast has something real to show
  // Prune anything more than a couple days stale — nothing ever reads
  // weather for a day that's already well in the past, so there's no
  // reason to let this object grow for the life of a save.
  for (const key of Object.keys(STATE.weather)) {
    if (Number(key) < day - 2) delete STATE.weather[key];
  }
}

// Returns whatever the camp clock should currently be experiencing's
// weather, mirroring getDayNumber()'s "what day is it right now" — used
// by calcOdds/resolveRaid so the modifiers actually applied always match
// the same day's weather the forecast popup is showing as "today."
function getCurrentWeather() {
  return getWeatherForDay(getDayNumber());
}

// Weather mitigation research — pulls weather's effect toward neutral
// by some percentage rather than mutating the shared weather object
// itself (which is read in many places; mutating it in place risks
// side effects wherever else it's referenced). Two separate helpers
// since "neutral" means something different for an additive field
// (survivalAdd, neutral = 0) versus a multiplicative one (lootMult/
// radiationChanceMult/moraleDropMult, neutral = 1) — pulling a
// multiplicative value toward 0 instead of 1 would be a completely
// different (and wrong) operation.
//
// allWeatherCamp REPLACES the two 30% nodes at a stronger flat 60%
// rather than stacking with them multiplicatively (which would
// compound to a stranger, harder-to-reason-about number) — matches
// the catalog's own description of that node.
function weatherMitigationPct() {
  if (isResearchUnlocked("allWeatherCamp")) return 0.6;
  // readTheSky covers survivalAdd/lootMult; stormproofing covers
  // radiationChanceMult/moraleDropMult — see weatherMitigatedAdditive/
  // weatherMitigatedMult below for which fields each one actually
  // applies to. Both return the same 0.3 here; the field-level gating
  // happens in the two functions that call this, not here.
  return 0.3;
}

function weatherMitigatedAdditive(rawValue) {
  // Checked independently rather than relying on allWeatherCamp's own
  // prerequisite chain (which requires stormproofing, which requires
  // readTheSky) to guarantee readTheSky is also unlocked — that's true
  // under the current tree shape, but making the gate explicit here
  // means this stays correct even if the tree's prerequisites are ever
  // restructured, rather than silently depending on an ordering
  // constraint defined somewhere else entirely.
  if (!isResearchUnlocked("readTheSky") && !isResearchUnlocked("allWeatherCamp")) return rawValue;
  return rawValue * (1 - weatherMitigationPct());
}

function weatherMitigatedMult(rawValue, requiresStormproofing) {
  const baseUnlocked = requiresStormproofing ? isResearchUnlocked("stormproofing") : isResearchUnlocked("readTheSky");
  if (!baseUnlocked && !isResearchUnlocked("allWeatherCamp")) return rawValue;
  const pct = weatherMitigationPct();
  // Pull toward 1 (neutral) by pct — e.g. a 1.3 lootMult at 30%
  // mitigation becomes 1 + 0.3*(1-0.3) = 1.21, not just 1.3*0.7=0.91
  // (which would push a BONUS multiplier toward zero instead of toward
  // neutral, the opposite of what mitigation should ever do to a
  // multiplier already favoring the player).
  return 1 + (rawValue - 1) * (1 - pct);
}

// Same outline-icon style as GEAR_ICON_SVG (currentColor stroke, so it
// picks up whatever color .cf-clock's data-phase attribute sets).
const CLOCK_ICON_SVG = `<svg class="cf-clock-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`;

// One small glyph per weather type, shown in the clock badge — kept
// deliberately simple (a handful of strokes each) to read clearly at
// the tiny size the clock badge renders at, same reasoning as
// CLOCK_ICON_SVG above just one level more varied.
const WEATHER_GLYPH_SVG = {
  clear: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5"></path></svg>`,
  overcast: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1.5A4.5 4.5 0 0 0 7 17z"></path></svg>`,
  rain: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1.5A4.5 4.5 0 0 0 7 13z"></path><path d="M8 18l-1 3M13 18l-1 3M18 18l-1 3"></path></svg>`,
  fog: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9h18M5 13h14M3 17h18M7 21h10"></path></svg>`,
  storm: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13h9a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1.5A4.5 4.5 0 0 0 7 13z"></path><path d="M13 17l-3 4h3l-2 3"></path></svg>`,
};

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

// ===== MILESTONES (connects stat-tracking to the journal) =====
// A small queue of stat-worthy events, appended to the moment they
// actually happen (a first boss kill, a round number of raids survived,
// taking the #1 arena spot — see queueMilestone's call sites in
// resolveRaid/recordArenaWin) and consumed once a day by
// writeJournalEntry, which decides whether to actually mention one and
// then clears the whole queue regardless — a milestone that goes
// unmentioned doesn't carry over and get brought up days later, the
// same way a real journal wouldn't suddenly bring up something
// noteworthy from three days ago out of nowhere. Kept as its own list
// rather than baked directly into the journal-line banks, since several
// different systems (raids, the arena) all feed into the same queue
// without needing to know anything about how journal entries get
// composed.
function queueMilestone(text) {
  if (!Array.isArray(STATE.pendingMilestones)) STATE.pendingMilestones = [];
  STATE.pendingMilestones.push(text);
}

// Round numbers worth calling out — checked against scav.stats.raidsSurvived
// right after it increments (see resolveRaid/resolveArenaRaid), firing
// only on the exact tick a threshold is crossed rather than every raid
// once past it.
const RAIDS_SURVIVED_MILESTONES = [10, 25, 50, 100, 200];

// Called right after scav.stats.raidsSurvived increments, from both
// resolveRaid and resolveArenaRaid — one shared check so the same
// thresholds and phrasing apply regardless of which kind of raid
// actually got them there.
function checkRaidsSurvivedMilestone(scav) {
  if (RAIDS_SURVIVED_MILESTONES.includes(scav.stats.raidsSurvived)) {
    queueMilestone(`${scav.name} just notched their ${scav.stats.raidsSurvived}th raid survived.`);
  }
}

// ===== ARENA LEADERBOARD =====
// A top-10 board of Scrapyard Pit regulars, persisting day to day rather
// than reshuffling — see ARENA_LEADERBOARD_SIZE. Mostly stays the same
// names build by build, slowly accumulating wins (see
// tickArenaLeaderboard, called once per day alongside the journal/
// weather rolls), with an occasional new challenger bumping whoever's
// currently lowest if the board's already full. Player scavs who win an
// arena fight (see resolveArenaRaid) get added/incremented the exact
// same way an NPC entry would, keyed by scav.id rather than name so a
// coincidental name collision with an NPC can never get confused for
// the same entry — see isPlayerScav below, which is what actually
// drives the blue highlight in the UI, not name matching.
const ARENA_LEADERBOARD_SIZE = 10;
const ARENA_NPC_DAILY_WIN_CHANCE = 0.15; // per NPC entry, per day
const ARENA_NEW_CHALLENGER_CHANCE = 0.12; // per day, board-wide
const ARENA_TOP_STREAK_REWARD_DAYS = 7; // consecutive days at rank 1 needed for Scrapyard Plate Armor

// Seeds a brand new leaderboard the first time it's ever read — 10 NPC
// regulars with a small head start of wins each (0-3) so the board
// doesn't look suspiciously freshly-empty the moment a player first
// opens the Arena tab.
function freshArenaLeaderboard() {
  const entries = [];
  for (let i = 0; i < ARENA_LEADERBOARD_SIZE; i++) {
    entries.push({ id: `npc_${Date.now()}_${i}_${Math.random().toString(36).slice(2, 7)}`, name: pickName(), wins: randInt(0, 3), isPlayerScav: false });
  }
  return entries;
}

function getArenaLeaderboard() {
  if (!STATE.arenaLeaderboard || !STATE.arenaLeaderboard.length) {
    STATE.arenaLeaderboard = freshArenaLeaderboard();
  }
  return STATE.arenaLeaderboard;
}

// Called once per day actually processed (see checkDailyUpkeep), same
// cadence as the journal entry and weather roll for that day. Two
// independent things can happen: any number of existing NPC entries
// might add a win each (rolled separately per entry, so multiple can
// win on the same day), and there's a separate, smaller chance a brand
// new challenger shows up and bumps out whoever currently has the
// fewest wins — never bumps a player scav's own entry, since that's the
// one thing on this board that should never just get replaced out from
// under the player for no reason they did anything wrong.
function tickArenaLeaderboard() {
  const board = getArenaLeaderboard();
  for (const entry of board) {
    if (Math.random() < ARENA_NPC_DAILY_WIN_CHANCE) entry.wins += 1;
  }
  if (Math.random() < ARENA_NEW_CHALLENGER_CHANCE) {
    const npcEntries = board.filter((e) => !e.isPlayerScav);
    if (npcEntries.length) {
      const weakest = npcEntries.reduce((min, e) => (e.wins < min.wins ? e : min), npcEntries[0]);
      const idx = board.indexOf(weakest);
      board[idx] = { id: `npc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`, name: pickName(), wins: 0, isPlayerScav: false };
    }
  }
  board.sort((a, b) => b.wins - a.wins);
  checkArenaTopStreak(board);
}

// Scrapyard Plate Armor's unlock condition — a player scav holding rank
// 1 on the leaderboard for 7 consecutive days straight, checked once
// per day right after the board re-sorts above (so this always reads
// the day's final standings, not a mid-tick snapshot that could change
// later the same day). Deliberately a daily check rather than tracking
// continuous real-time rank, which would mean reasoning about every
// single rank change a win could cause mid-day — once-a-day matches how
// every other leaderboard mechanic (NPC wins, new challengers) already
// resolves, and "held the top spot for a week" reads naturally as 7
// daily confirmations in a row regardless of how the rank briefly moved
// in between.
// Crowd Favorite research effectively shortens the requirement from 7
// days to 5 — implemented as a lower threshold rather than literally
// crediting +2 days toward the counter, since "needs 2 fewer days" and
// "starts 2 days ahead" produce the identical outcome for a counter
// that just needs to reach a target, and the threshold version is
// simpler to reason about and display correctly everywhere (including
// the Codex's own dropNote, which already needs this number).
function arenaStreakRequiredDays() {
  return isResearchUnlocked("crowdFavorite") ? ARENA_TOP_STREAK_REWARD_DAYS - 2 : ARENA_TOP_STREAK_REWARD_DAYS;
}

function checkArenaTopStreak(board) {
  const topEntry = board[0];
  const requiredDays = arenaStreakRequiredDays();
  for (const entry of board) {
    if (!entry.isPlayerScav) continue;
    if (entry === topEntry) {
      entry.consecutiveDaysAtTop = (entry.consecutiveDaysAtTop || 0) + 1;
      if (entry.consecutiveDaysAtTop >= requiredDays) {
        const scav = STATE.scavs.find((s) => s.id === entry.id);
        if (scav) {
          addToStash("armor", "scrapyard_plate", 1);
          queueMilestone(`${scav.name} held the top spot at the Pit for a full week straight — Scrapyard Plate Armor's theirs now.`);
        }
        entry.consecutiveDaysAtTop = 0; // resets rather than capping — a scav who holds #1 for two straight weeks earns it twice, same as a boss unique can drop more than once
      }
    } else {
      entry.consecutiveDaysAtTop = 0; // anyone not in first place today has no streak to speak of, regardless of how long they held it before
    }
  }
}

// Records a player scav's arena win on the leaderboard — called from
// resolveArenaRaid on every win, not just ones that happen to place.
// Finds or creates that scav's own entry (keyed by scav.id, so renaming
// a scav or two scavs sharing a name can never merge into one entry),
// increments it, then re-sorts and trims back down to
// ARENA_LEADERBOARD_SIZE. A player win can bump an NPC off the bottom
// of the board the same as a new challenger would — there's no special
// protection keeping a weak NPC on the board just because the player
// scav doing the bumping is a person rather than another NPC.
function recordArenaWin(scav) {
  const board = getArenaLeaderboard();
  let entry = board.find((e) => e.isPlayerScav && e.id === scav.id);
  const wasFirstPlace = board.length > 0 && board[0] === entry;
  if (!entry) {
    entry = { id: scav.id, name: scav.name, wins: 0, isPlayerScav: true };
    board.push(entry);
  }
  entry.wins += 1;
  entry.name = scav.name; // keeps the board in sync if the scav's been renamed since their last win — not currently a feature, but harmless insurance if one's ever added
  board.sort((a, b) => b.wins - a.wins);
  STATE.arenaLeaderboard = board.slice(0, ARENA_LEADERBOARD_SIZE);
  // Only fires the moment a scav newly reaches #1 — checked against
  // wasFirstPlace captured above (before this win's sort), so a scav
  // who's already sitting at #1 and wins again doesn't re-trigger the
  // same milestone every single win, only the one that actually got
  // them there.
  if (!wasFirstPlace && STATE.arenaLeaderboard[0] === entry) {
    queueMilestone(`${scav.name} took the top spot at the Scrapyard Pit.`);
  }
}

// ===== CAMP JOURNAL =====
// One entry per in-game day, written from whoever's around at the
// moment the day actually turns over (see checkDailyUpkeep below, which
// calls writeJournalEntry once per day it processes). Composed rather
// than templated: each call picks one line from whichever mood/category
// banks actually apply that day — low supplies, rough morale, a death
// or a big win in the last few raids, a starved night — and joins them
// into a short first-person entry. No single line ever describes
// everything; the variety comes from which combination of banks fired
// that particular day, the same way the field report's REPORT_LINES
// compose a raid out of several short beats rather than one fixed text.
const JOURNAL_MAX_ENTRIES = 60; // roughly two months of daily entries before the oldest start rolling off

const JOURNAL_LOW_SUPPLIES = [
  "Counted what's left in the warehouse twice. Didn't like the number either time.",
  "We're close to the bottom of the barrel. Need a good haul soon, not just any haul.",
  "Nobody's said it outright yet, but everyone's doing the same math I am.",
];
const JOURNAL_HEALTHY_SUPPLIES = [
  "Warehouse is looking solid. First time in a while I haven't worried about it.",
  "Stock's in good shape. Whoever's been pulling these hauls, keep it up.",
  "Plenty in reserve right now. Almost feels like we're getting ahead of things.",
];
const JOURNAL_LOW_MORALE = [
  "Camp's been quiet in the wrong way. Nobody's talking much.",
  "Morale's low across the board. People are tired in a way rest alone won't fix.",
  "Everyone's on edge. Can't blame them, but it's starting to show.",
];
const JOURNAL_HIGH_MORALE = [
  "Good mood around the fire tonight. First time in a while it's felt easy.",
  "Spirits are up. Whatever's been working, it's working.",
  "Camp feels steady right now. Nobody's saying it'll last, but nobody's saying it won't either.",
];
const JOURNAL_RECENT_DEATH = [
  "Lost someone this week. Didn't write much else today.",
  "Still feels wrong, putting their gear back in the stash like it's nothing.",
  "We don't talk about it much. Doesn't mean it isn't on everyone's mind.",
];
// Named version — used whenever the dead scav's actual name could be
// resolved (almost always), with the generic bank above kept only as a
// fallback for the rare case it somehow couldn't. {name} gets replaced
// directly rather than going through fmtLine's full template system,
// since this is the only variable any of these lines need.
const JOURNAL_RECENT_DEATH_NAMED = [
  "Lost {name} this week. Didn't write much else today.",
  "Still feels wrong, putting {name}'s gear back in the stash like it's nothing.",
  "We don't talk about {name} much. Doesn't mean they aren't on everyone's mind.",
  "Keep expecting to see {name} by the fire. Going to take a while, that.",
];
const JOURNAL_RECENT_WIN = [
  "Good run lately. Whatever we're doing right now, it's paying off.",
  "Hauls have been solid the past few raids. Nice change of pace.",
  "Things are going our way for once. Taking it while it lasts.",
];
const JOURNAL_STARVED = [
  "Went hungry today. Nobody died over it, but nobody's pretending it was fine either.",
  "Couldn't cover upkeep. The whole camp felt it.",
  "Another short day. We need the Farm running better, or someone needs to bring home more than scrap.",
];
const JOURNAL_NEUTRAL = [
  "Quiet day. Nothing much to report.",
  "Same as most days lately — raids out, raids back, the fire stays lit.",
  "Nothing's broken, nothing's great. We keep going.",
  "Another day the camp's still standing. That counts for something.",
];

// Reads the camp's actual current state — average roster morale, how
// the warehouse looks relative to what a day's upkeep costs, and
// whether anything notable happened in the last few resolved raids —
// and composes a short entry from whichever line banks above actually
// apply. starvedToday is passed in explicitly rather than re-derived,
// since checkDailyUpkeep already knows definitively whether THIS
// specific day's upkeep came up short — that's not something this
// function should have to guess at from current resource totals alone.
function writeJournalEntry(starvedToday) {
  const living = STATE.scavs.filter((s) => s.status !== "dead");
  const avgMorale = living.length ? living.reduce((sum, s) => sum + s.morale, 0) / living.length : 100;

  const lines = [];

  // Last 5 resolved raids, regardless of which day they happened on —
  // there's no per-day raid history kept, just the flat STATE.log list,
  // so "recent" means "most recently resolved" rather than "today
  // specifically." Good enough for a mood signal; a journal entry isn't
  // a precise record. Checked before the supplies/morale block below
  // (rather than after) specifically so a recent death can suppress the
  // positive supplies/morale lines — "stock's looking great, spirits
  // are up, also we lost someone this week" reads as tone-deaf in a way
  // "stock's running low, and we lost someone this week" doesn't. The
  // negative supplies/morale lines stay eligible either way; grief and
  // a thin warehouse are the kind of bad that sit together honestly.
  const recentOutcomes = STATE.log.slice(0, 5).map((entry) => entry.outcome);
  const recentDeaths = recentOutcomes.filter((o) => o.died).length;
  const recentWins = recentOutcomes.filter((o) => o.survived && !o.died).length;
  // Names of who actually died, not just how many — outcome.died is the
  // "lead scav" convenience flag (see resolveRaid), which only tells the
  // whole story for a solo raid; a group raid needs perScav itself to
  // find every name that didn't make it back, not just whichever scav
  // happens to be listed first.
  const recentDeadNames = recentOutcomes
    .flatMap((o) => (o.perScav || []).filter((p) => p.died).map((p) => p.name))
    .filter(Boolean);

  if (starvedToday) {
    lines.push(pick(JOURNAL_STARVED));
  } else {
    // Supplies and morale lines are skipped on a starved day — the
    // starvation line already says everything that matters about that
    // day, and stacking "supplies are healthy" right next to "we went
    // hungry" would read as contradictory rather than nuanced.
    const upkeepDaysOfFood = (STATE.resources.food || 0) / Math.max(1, DAILY_UPKEEP_COST.food);
    if (upkeepDaysOfFood < 2) lines.push(pick(JOURNAL_LOW_SUPPLIES));
    else if (upkeepDaysOfFood > 8 && recentDeaths === 0) lines.push(pick(JOURNAL_HEALTHY_SUPPLIES));

    if (avgMorale < 35) lines.push(pick(JOURNAL_LOW_MORALE));
    else if (avgMorale > 80 && recentDeaths === 0) lines.push(pick(JOURNAL_HIGH_MORALE));
  }

  if (recentDeaths > 0) {
    // Names the most recent death specifically (recentDeadNames[0], not
    // a random pick among several) — if more than one death happened in
    // this same 5-raid window, that's its own kind of bad week, but the
    // journal still only writes about the one freshest in everyone's
    // mind, the same way a real entry wouldn't eulogize two people at
    // once in one breath. Falls back to the old generic line on the
    // off chance no name could be resolved (shouldn't happen given
    // recentDeaths > 0 implies at least one perScav.died entry exists,
    // but there's no reason to let a missing name crash this instead of
    // just degrading gracefully).
    const name = recentDeadNames[0];
    lines.push(name ? pick(JOURNAL_RECENT_DEATH_NAMED).replace("{name}", name) : pick(JOURNAL_RECENT_DEATH));
  } else if (recentWins >= 4) {
    lines.push(pick(JOURNAL_RECENT_WIN));
  }

  if (lines.length === 0) lines.push(pick(JOURNAL_NEUTRAL));

  // Milestones are specific, factual things that actually happened
  // (a first boss kill, taking #1 at the Pit) rather than a mood read on
  // the day overall, so they're appended after the mood-based lines
  // above rather than competing with them for the same slot — always
  // included when there's something pending, not just sometimes. Capped
  // at 2 so an unusually eventful day doesn't turn the entry into a list;
  // the queue is cleared either way once this runs, so anything beyond
  // the cap simply never gets brought up rather than spilling into
  // tomorrow's entry.
  if (STATE.pendingMilestones && STATE.pendingMilestones.length) {
    lines.push(...STATE.pendingMilestones.slice(0, 2));
    STATE.pendingMilestones = [];
  }

  return lines.join(" ");
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
    const dayNum = STATE.lastUpkeepDay + i + 1;
    // Rolled before the journal entry below (not after) — purely so the
    // weather for that day is guaranteed to already exist if a future
    // entry ever wants to reference it; the journal text itself doesn't
    // currently read the weather, but the roll needs to happen exactly
    // once per day regardless, and here is as good a place as any since
    // this loop already iterates one real day at a time.
    rollWeatherForDay(dayNum);
    // Same once-per-actual-day cadence as the weather roll above — the
    // arena's NPC regulars get their daily shot at adding a win (or, on
    // a smaller separate roll, a new challenger shows up) regardless of
    // whether the player ever opens the Arena tab that day. The board
    // moves on its own, the same way the rest of the wasteland keeps
    // existing whether or not anyone's watching it.
    tickArenaLeaderboard();
    checkLeaderElectionTrigger(dayNum);
    checkCrossroadsEvents();
    // Track highMoraleDays for the Composed objective (keep morale > 60
    // for 7 consecutive days). Increments every day morale stays above
    // the threshold, resets the streak if it drops below.
    STATE.scavs.filter(s => s.status !== "dead").forEach(s => {
      if (s.morale >= 60) {
        s.stats.highMoraleDays = (s.stats.highMoraleDays || 0) + 1;
      } else {
        s.stats.highMoraleDays = 0;
      }
      checkPersonalObjective(s);
    });
    // Same once-per-actual-day cadence as everything else in this loop.
    // outpostDailyGeneration itself already returns all zeros if the
    // Outpost isn't unlocked yet or has nobody assigned, so the
    // isOutpostUnlocked() check here is really just skipping
    // unnecessary work on a vanilla/pre-NG+1 camp, not load-bearing for
    // correctness — calling it unconditionally would still produce the
    // right (zero) result either way.
    if (isOutpostUnlocked()) {
      const gen = outpostDailyGeneration();
      if (gen.scrap || gen.gold || gen.intel) {
        STATE.resources.scrap = (STATE.resources.scrap || 0) + gen.scrap;
        STATE.resources.gold = (STATE.resources.gold || 0) + gen.gold;
        STATE.resources.intel = (STATE.resources.intel || 0) + gen.intel;
      }
    }
    // One entry per day actually processed here, tagged with that
    // day's real number (STATE.lastUpkeepDay + i + 1, not just `today`)
    // so a multi-day catch-up still produces entries that read as
    // sequential days rather than several entries all claiming to be
    // the same most-recent day.
    STATE.journal.unshift({ day: dayNum, text: writeJournalEntry(shortfall) });
  }
  STATE.journal = STATE.journal.slice(0, JOURNAL_MAX_ENTRIES);
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

  const today = getDayNumber();
  const todayId = getWeatherIdForDay(today);
  const todayWeather = WEATHER_CATALOG[todayId];
  const glyphEl = document.querySelector("#cfClockWeatherGlyph");
  if (glyphEl) glyphEl.innerHTML = WEATHER_GLYPH_SVG[todayId];
  const forecastEl = document.querySelector("#cfForecastPanel");
  if (forecastEl) forecastEl.innerHTML = renderForecastPanel(today);

  // Fire/glow react to the same weather id and day phase already
  // computed above for the clock badge and forecast — see the CSS rules
  // keyed off these same data attributes (.cf-fire[data-weather=...],
  // .cf-glow[data-phase=...]) for what actually changes visually.
  const fireEl = document.querySelector(".cf-fire");
  if (fireEl) fireEl.dataset.weather = todayId;
  const glowEl = document.querySelector(".cf-glow");
  if (glowEl) glowEl.dataset.phase = getDayPhase(progress);
  const weatherOverlay = document.querySelector("#cfWeatherOverlay");
  if (weatherOverlay) weatherOverlay.dataset.weather = todayId;

  // Resource crisis overlays — visible at a glance on the camp scene
  // without opening any menus. Food warns when <= 3 units remain,
  // morale warns when any living scav is at or below 25.
  const foodEl = document.querySelector("#cfCrisisFood");
  if (foodEl) {
    const food = STATE.resources.food || 0;
    if (food <= 3) {
      foodEl.style.display = "block";
      foodEl.textContent = food === 0 ? "⚠ No food" : `⚠ ${food} food left`;
    } else {
      foodEl.style.display = "none";
    }
  }
  const moraleEl = document.querySelector("#cfCrisisMorale");
  if (moraleEl) {
    const criticalScav = STATE.scavs.find(s => s.status !== "dead" && s.morale <= 25);
    if (criticalScav) {
      moraleEl.style.display = "block";
      moraleEl.textContent = `⚠ ${criticalScav.name} breaking`;
    } else {
      moraleEl.style.display = "none";
    }
  }
}

// One line per weather effect that actually does anything (clear/
// overcast have nothing worth listing beyond their own neutral-ish
// survivalAdd, so a weather with every field at its neutral default
// just shows "No notable effect" instead of four lines of +0%).
function weatherEffectLines(weather) {
  const lines = [];
  if (weather.survivalAdd !== 0) lines.push(`${weather.survivalAdd > 0 ? "+" : ""}${Math.round(weather.survivalAdd * 100)}% survival`);
  if (weather.lootMult !== 1) lines.push(`${weather.lootMult > 1 ? "+" : ""}${Math.round((weather.lootMult - 1) * 100)}% loot`);
  if (weather.radiationChanceMult !== 1) lines.push(`${weather.radiationChanceMult > 1 ? "+" : ""}${Math.round((weather.radiationChanceMult - 1) * 100)}% radiation chance`);
  if (weather.moraleDropMult !== 1) lines.push(`${weather.moraleDropMult > 1 ? "+" : ""}${Math.round((weather.moraleDropMult - 1) * 100)}% morale loss`);
  return lines.length ? lines.join(", ") : "No notable effect";
}

// The forecast popup itself — today's weather (already locked in, and
// what any raid launched right now would actually experience) plus
// tomorrow's (pre-rolled the same moment today's was, see
// rollWeatherForDay, so this is a real preview rather than a guess).
// Pure hover-reveal CSS (.cf-forecast-panel, see index.html), same
// pattern as the building/survivor name labels elsewhere in the scene —
// no click needed, no separate popup state to manage.
function renderForecastPanel(today) {
  const todayWeather = WEATHER_CATALOG[getWeatherIdForDay(today)];
  const tomorrowWeather = WEATHER_CATALOG[getWeatherIdForDay(today + 1)];
  // Forecasting research extends this one more day — getWeatherIdForDay
  // lazily rolls and caches whatever day it's asked for (see its own
  // comment), so asking for today+2 here works correctly even though
  // rollWeatherForDay's own automatic pre-roll only ever goes one day
  // ahead by default; this just asks for one more than that, on demand,
  // only once the research is actually unlocked.
  const dayAfterRow = isResearchUnlocked("forecasting")
    ? (() => {
        const w = WEATHER_CATALOG[getWeatherIdForDay(today + 2)];
        return `
          <div class="forecast-row">
            <div class="forecast-label">Day After</div>
            <div class="forecast-name">${escapeHtml(w.name)}</div>
            <div class="forecast-effect">${escapeHtml(weatherEffectLines(w))}</div>
          </div>
        `;
      })()
    : "";
  return `
    <div class="forecast-row">
      <div class="forecast-label">Today</div>
      <div class="forecast-name">${escapeHtml(todayWeather.name)}</div>
      <div class="forecast-effect">${escapeHtml(weatherEffectLines(todayWeather))}</div>
    </div>
    <div class="forecast-row">
      <div class="forecast-label">Tomorrow</div>
      <div class="forecast-name">${escapeHtml(tomorrowWeather.name)}</div>
      <div class="forecast-effect">${escapeHtml(weatherEffectLines(tomorrowWeather))}</div>
    </div>
    ${dayAfterRow}
  `;
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
      <rect class="cf-seated-lap" x="0" y="21" width="16" height="3" fill="${pants}" />
      <rect class="cf-seated-lap" x="2" y="20" width="3" height="2" fill="${pants}" />
      <rect class="cf-seated-lap" x="11" y="20" width="3" height="2" fill="${pants}" />
      <rect class="cf-seated-lap" x="0" y="23" width="4" height="2" fill="#171510" />
      <rect class="cf-seated-lap" x="12" y="23" width="4" height="2" fill="#171510" />
    </svg>
  `;
}

// A tight ring of seats just outside the fire's own exclusion footprint
// (left:50±9%, bottom:0-16%, see FIRE_EXCLUSION) — distinct from
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
  // Left cluster — barracks furthest back-left, infirmary mid-depth,
  // radioTower slightly behind deconTent so it reads as background.
  { id: "barracks",   left: "10%", bottom: "14%", scale: 1.44 },
  { id: "infirmary",  left: "22%", bottom: "20%", scale: 1.32 },
  { id: "radioTower", left: "34%", bottom: "16%", scale: 0.72 },
  // Front row left — deconTent in the foreground, clearly in front of infirmary.
  { id: "deconTent",  left: "27%", bottom: "9%",  scale: 1.39 },
  { id: "farm",       left: "40%", bottom: "9%",  scale: 1.1  },
  // Mid-right — scoutTower pushed back so it reads behind recYard.
  { id: "scoutTower", left: "58%", bottom: "18%", scale: 0.86 },
  // Front row right — recYard clearly in front of scoutTower/armory.
  { id: "recYard",    left: "73%", bottom: "9%",  scale: 1.39 },
  // Right cluster — armory further back than recYard/workshop.
  { id: "armory",     left: "65%", bottom: "26%", scale: 1.24 },
  { id: "workshop",   left: "78%", bottom: "18%", scale: 1.12 },
];

function buildingSvgMarkup(id, level) {
  const lit = level >= 1;
  const windowColor = lit ? "var(--brass-bright)" : "#1a1812";
  if (id === "infirmary") {
    // A field infirmary — timber medic cabin with a shingled gable roof,
    // plank siding, stone footing, a chimney with smoke once built, and a
    // GREEN medic cross (green, not red — a red cross on a non-Red-Cross
    // structure is a Geneva Conventions emblem violation; green is the
    // standard neutral medical marker). Detail scales with level: an IV
    // banner and lantern appear at lvl 3+, a second window and a roof vent
    // at max level (6). Windows glow warm once built.
    const crossColor = lit ? "#5ad86a" : "#3a5a3e";
    const crossGlow = lit ? `filter="drop-shadow(0 0 2px #5ad86a)"` : "";
    const winFill = lit ? "url(#infWin)" : "#1a1812";
    const smoke = lit ? `
      <g opacity="0.5">
        <circle cx="46" cy="12" r="2" fill="#3a3a3a">
          <animate attributeName="cy" values="12;2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="46" cy="12" r="2" fill="#3a3a3a">
          <animate attributeName="cy" values="12;2" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </g>` : "";
    const ivBanner = level >= 3 ? `
      <rect x="7" y="36" width="12" height="7" fill="#2a2a2a" stroke="#151515" stroke-width="0.5" />
      <rect x="9" y="38" width="1.5" height="4" fill="${crossColor}" />
      <rect x="7.75" y="39.25" width="4" height="1.5" fill="${crossColor}" />
      <circle cx="15" cy="39.5" r="2" fill="none" stroke="#8899aa" stroke-width="0.6" opacity="0.7" />` : "";
    const lantern = level >= 3 && lit ? `
      <rect x="40" y="33" width="3" height="4" fill="#2a2416" stroke="#151208" stroke-width="0.4" />
      <rect x="40.7" y="34" width="1.6" height="2.4" fill="#ffcc55">
        <animate attributeName="opacity" values="0.7;1;0.8;1" dur="2.5s" repeatCount="indefinite" />
      </rect>` : "";
    const secondWindow = level >= 6 ? `
      <rect x="42" y="40" width="7" height="8" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="1" />
      <rect x="45.2" y="40" width="0.6" height="8" fill="#1a150c" opacity="0.6" />
      <rect x="42" y="43.7" width="7" height="0.6" fill="#1a150c" opacity="0.6" />` : "";
    const roofVent = level >= 6 ? `<rect x="26" y="4" width="4" height="3" fill="#2a2620" stroke="#151208" stroke-width="0.4" /><rect x="26.5" y="3" width="3" height="1.5" fill="#3a352a" />` : "";
    return `
      <svg viewBox="0 0 60 64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="infRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6b5a3e" />
            <stop offset="1" stop-color="#4a3d28" />
          </linearGradient>
          <linearGradient id="infWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#463f30" />
            <stop offset="0.5" stop-color="#3a3428" />
            <stop offset="1" stop-color="#2e2920" />
          </linearGradient>
          <radialGradient id="infWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="infStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3a382f" />
            <stop offset="1" stop-color="#25231c" />
          </linearGradient>
        </defs>
        ${smoke}
        <rect x="43" y="8" width="6" height="14" fill="#4a3428" stroke="#2a1e16" stroke-width="0.5" />
        <rect x="43" y="8" width="6" height="2" fill="#5a4232" />
        <rect x="42" y="7" width="8" height="2" fill="#3a2a1e" />
        <polygon points="30,2 56,24 4,24" fill="url(#infRoof)" stroke="#2a2318" stroke-width="0.5" />
        <polygon points="30,2 56,24 50,24 30,6" fill="#5a4d34" opacity="0.5" />
        ${roofVent}
        <line x1="9" y1="20" x2="51" y2="20" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="13" y1="16" x2="47" y2="16" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="17" y1="12" x2="43" y2="12" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="21" y1="8" x2="39" y2="8" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <rect x="4" y="23" width="52" height="3" fill="#241f16" />
        <rect x="7" y="25" width="46" height="31" fill="url(#infWall)" />
        <line x1="7" y1="31" x2="53" y2="31" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="7" y1="37" x2="53" y2="37" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="7" y1="43" x2="53" y2="43" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="7" y1="49" x2="53" y2="49" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <rect x="7" y="25" width="2" height="31" fill="#4a4132" opacity="0.6" />
        <rect x="51" y="25" width="2" height="31" fill="#231f18" opacity="0.6" />
        <rect x="16" y="38" width="11" height="18" fill="#1a1610" stroke="#0e0b07" stroke-width="0.5" />
        <rect x="16" y="38" width="11" height="18" fill="none" stroke="#3a3226" stroke-width="1" />
        <rect x="17" y="39" width="9" height="8" fill="#231e15" />
        <circle cx="24.5" cy="47" r="0.8" fill="#8C7A3D" />
        <rect x="33" y="40" width="8" height="9" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="1" />
        <rect x="36.7" y="40" width="0.6" height="9" fill="#1a150c" opacity="0.6" />
        <rect x="33" y="44" width="8" height="0.6" fill="#1a150c" opacity="0.6" />
        ${secondWindow}
        <g ${crossGlow}>
          <rect x="30" y="28" width="12" height="4" fill="${crossColor}" />
          <rect x="34" y="24" width="4" height="12" fill="${crossColor}" />
        </g>
        <rect x="29" y="23" width="14" height="14" fill="none" stroke="#231f18" stroke-width="0.6" opacity="0.5" />
        ${ivBanner}
        ${lantern}
        <rect x="5" y="55" width="50" height="5" fill="url(#infStone)" />
        <rect x="5" y="55" width="50" height="1" fill="#4a4638" opacity="0.6" />
        <line x1="18" y1="55" x2="18" y2="60" stroke="#1a1812" stroke-width="0.5" />
        <line x1="30" y1="55" x2="30" y2="60" stroke="#1a1812" stroke-width="0.5" />
        <line x1="42" y1="55" x2="42" y2="60" stroke="#1a1812" stroke-width="0.5" />
        <ellipse cx="30" cy="61" rx="28" ry="2.5" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "armory") {
    // A fortified supply depot — reinforced blockhouse with a heavy door,
    // stacked munitions crates, and sandbag emplacements. Matches the
    // detailed art style: gradient roof/walls, stone footing, warm-lit
    // window, ground shadow. Crates and sandbags accumulate with level.
    const winFill = lit ? "url(#armWin)" : "#1a1812";
    const crate2 = level >= 2 ? `
      <rect x="40" y="38" width="12" height="10" fill="#4a4030" stroke="#241f16" stroke-width="0.8" />
      <rect x="41" y="39" width="10" height="2" fill="#5a4f3a" />
      <line x1="46" y1="38" x2="46" y2="48" stroke="#241f16" stroke-width="0.6" />` : "";
    const crate3 = level >= 3 ? `
      <rect x="42" y="29" width="9" height="9" fill="#453b2c" stroke="#241f16" stroke-width="0.8" />
      <rect x="43" y="30" width="7" height="1.5" fill="#564b38" />` : "";
    const sandbags = level >= 4 ? `
      <ellipse cx="9" cy="48" rx="4" ry="2.2" fill="#5a5240" stroke="#2e2a1f" stroke-width="0.5" />
      <ellipse cx="15" cy="48" rx="4" ry="2.2" fill="#4e4636" stroke="#2e2a1f" stroke-width="0.5" />
      <ellipse cx="12" cy="45" rx="4" ry="2.2" fill="#564d3b" stroke="#2e2a1f" stroke-width="0.5" />` : "";
    const vent = level >= 5 ? `<rect x="30" y="26" width="8" height="3" fill="#2a2620" stroke="#151208" stroke-width="0.4" /><line x1="32" y1="26" x2="32" y2="29" stroke="#3a352a" stroke-width="0.5" /><line x1="34" y1="26" x2="34" y2="29" stroke="#3a352a" stroke-width="0.5" /><line x1="36" y1="26" x2="36" y2="29" stroke="#3a352a" stroke-width="0.5" />` : "";
    const smoke = lit ? `
      <g opacity="0.4">
        <circle cx="46" cy="14" r="1.8" fill="#3a3a3a">
          <animate attributeName="cy" values="14;5" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.2;3" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </g>` : "";
    return `
      <svg viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="armRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#5a5344" />
            <stop offset="1" stop-color="#3e3828" />
          </linearGradient>
          <linearGradient id="armWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#4a4536" />
            <stop offset="0.5" stop-color="#3c3729" />
            <stop offset="1" stop-color="#302c20" />
          </linearGradient>
          <radialGradient id="armWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="armStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3a382f" />
            <stop offset="1" stop-color="#25231c" />
          </linearGradient>
        </defs>
        ${smoke}
        <rect x="43" y="10" width="6" height="12" fill="#3a3326" stroke="#241f16" stroke-width="0.5" />
        <rect x="42" y="9" width="8" height="2" fill="#2e2a1f" />
        <!-- Flat reinforced roof with slight overhang -->
        <rect x="6" y="20" width="48" height="6" fill="url(#armRoof)" stroke="#241f16" stroke-width="0.5" />
        <rect x="4" y="24" width="52" height="3" fill="#241f16" />
        <line x1="18" y1="20" x2="18" y2="26" stroke="#2e2a1f" stroke-width="0.5" opacity="0.6" />
        <line x1="30" y1="20" x2="30" y2="26" stroke="#2e2a1f" stroke-width="0.5" opacity="0.6" />
        <line x1="42" y1="20" x2="42" y2="26" stroke="#2e2a1f" stroke-width="0.5" opacity="0.6" />
        ${vent}
        <!-- Blockhouse wall -->
        <rect x="8" y="26" width="44" height="24" fill="url(#armWall)" />
        <line x1="8" y1="33" x2="52" y2="33" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="8" y1="41" x2="52" y2="41" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <rect x="8" y="26" width="2" height="24" fill="#565040" opacity="0.6" />
        <rect x="50" y="26" width="2" height="24" fill="#231f18" opacity="0.6" />
        <!-- Heavy reinforced door -->
        <rect x="14" y="33" width="13" height="17" fill="#1a1610" stroke="#0e0b07" stroke-width="0.5" />
        <rect x="14" y="33" width="13" height="17" fill="none" stroke="#4a4132" stroke-width="1.5" />
        <line x1="20.5" y1="33" x2="20.5" y2="50" stroke="#3a3326" stroke-width="0.8" />
        <rect x="17" y="41" width="1.5" height="1.5" fill="#8C7A3D" />
        <rect x="23" y="41" width="1.5" height="1.5" fill="#8C7A3D" />
        <!-- Lit window -->
        <rect x="31" y="35" width="8" height="7" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="1" />
        <rect x="34.7" y="35" width="0.6" height="7" fill="#1a150c" opacity="0.6" />
        ${crate2}
        ${crate3}
        ${sandbags}
        <!-- Stone foundation -->
        <rect x="6" y="49" width="48" height="5" fill="url(#armStone)" />
        <rect x="6" y="49" width="48" height="1" fill="#4a4638" opacity="0.6" />
        <line x1="20" y1="49" x2="20" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="32" y1="49" x2="32" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="44" y1="49" x2="44" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <ellipse cx="30" cy="55" rx="28" ry="2.5" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "scoutTower") {
    // A tall timber lookout — matches the detailed art style with a proper
    // roofed cabin at the top, gradient-shaded legs, cross-bracing, and a
    // warm-lit window once built. Level adds height, a lamp, and a second
    // lamp at max (4).
    const raised = level >= 2;
    const cabinY = raised ? 2 : 9;
    const legTop = cabinY + 13;
    const winFill = lit ? "url(#sctWin)" : "#1a1812";
    const lamp = level >= 3 ? `<circle cx="22" cy="${cabinY + 5}" r="2.4" fill="var(--brass-bright)"><animate attributeName="opacity" values="0.8;1;0.85;1" dur="2.5s" repeatCount="indefinite" /></circle>` : "";
    const lamp2 = level >= 4 ? `<circle cx="8" cy="${cabinY + 5}" r="2" fill="var(--brass-bright)"><animate attributeName="opacity" values="1;0.8;1;0.85" dur="2.5s" repeatCount="indefinite" /></circle>` : "";
    return `
      <svg viewBox="0 0 30 56" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sctRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6b5a3e" />
            <stop offset="1" stop-color="#4a3d28" />
          </linearGradient>
          <linearGradient id="sctWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#463f30" />
            <stop offset="0.5" stop-color="#3a3428" />
            <stop offset="1" stop-color="#2e2920" />
          </linearGradient>
          <radialGradient id="sctWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="sctLeg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#524836" />
            <stop offset="1" stop-color="#332d21" />
          </linearGradient>
        </defs>
        <!-- Legs -->
        <rect x="4" y="${legTop}" width="3" height="${50 - legTop}" fill="url(#sctLeg)" />
        <rect x="23" y="${legTop}" width="3" height="${50 - legTop}" fill="url(#sctLeg)" />
        <!-- Cross bracing -->
        <line x1="5.5" y1="${legTop + 6}" x2="24.5" y2="${legTop + 18}" stroke="#3a3326" stroke-width="1.5" />
        <line x1="24.5" y1="${legTop + 6}" x2="5.5" y2="${legTop + 18}" stroke="#3a3326" stroke-width="1.5" />
        <line x1="5.5" y1="${legTop + 18}" x2="24.5" y2="49" stroke="#3a3326" stroke-width="1.5" />
        <line x1="24.5" y1="${legTop + 18}" x2="5.5" y2="49" stroke="#3a3326" stroke-width="1.5" />
        <!-- Ladder rungs on one leg -->
        <line x1="5.5" y1="${legTop + 4}" x2="9" y2="${legTop + 4}" stroke="#4a4030" stroke-width="0.8" />
        <line x1="5.5" y1="${legTop + 9}" x2="9" y2="${legTop + 9}" stroke="#4a4030" stroke-width="0.8" />
        <line x1="5.5" y1="${legTop + 14}" x2="9" y2="${legTop + 14}" stroke="#4a4030" stroke-width="0.8" />
        <!-- Platform deck -->
        <rect x="1" y="${cabinY + 11}" width="28" height="3" fill="#4a4030" stroke="#241f16" stroke-width="0.6" />
        <!-- Cabin wall -->
        <rect x="4" y="${cabinY + 4}" width="22" height="8" fill="url(#sctWall)" />
        <rect x="4" y="${cabinY + 4}" width="2" height="8" fill="#4a4132" opacity="0.6" />
        <rect x="24" y="${cabinY + 4}" width="2" height="8" fill="#231f18" opacity="0.6" />
        <!-- Lit window -->
        <rect x="11" y="${cabinY + 6}" width="8" height="5" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="0.8" />
        <rect x="14.7" y="${cabinY + 6}" width="0.5" height="5" fill="#1a150c" opacity="0.6" />
        <!-- Shingled roof -->
        <polygon points="15,${cabinY - 2} 28,${cabinY + 4} 2,${cabinY + 4}" fill="url(#sctRoof)" stroke="#2a2318" stroke-width="0.5" />
        <line x1="6" y1="${cabinY + 2} " x2="24" y2="${cabinY + 2}" stroke="#2e2718" stroke-width="0.4" opacity="0.6" />
        ${lamp}
        ${lamp2}
        <!-- Foot blocks -->
        <rect x="3" y="49" width="5" height="3" fill="#25231c" />
        <rect x="22" y="49" width="5" height="3" fill="#25231c" />
        <ellipse cx="15" cy="53" rx="13" ry="1.8" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "barracks") {
    // A long timber bunkhouse — the camp's living quarters. Matches the
    // Infirmary art style: gradient shingled roof, plank siding, stone
    // footing, warm-lit windows, a chimney with smoke once built. Detail
    // scales with level: more windows light up as bunks fill, a second
    // chimney and a flag appear toward max level (5).
    const winFill = lit ? "url(#brkWin)" : "#1a1812";
    const litWindows = Math.min(4, level); // how many of the 4 windows glow
    const windowX = [12, 26, 40, 54];
    let windows = "";
    windowX.forEach((x, i) => {
      const fill = i < litWindows ? winFill : "#1a1812";
      windows += `
        <rect x="${x}" y="34" width="8" height="9" rx="0.5" fill="${fill}" stroke="#1a150c" stroke-width="1" />
        <rect x="${x + 3.7}" y="34" width="0.6" height="9" fill="#1a150c" opacity="0.6" />
        <rect x="${x}" y="38" width="8" height="0.6" fill="#1a150c" opacity="0.6" />`;
    });
    const smoke = lit ? `
      <g opacity="0.5">
        <circle cx="16" cy="10" r="2" fill="#3a3a3a">
          <animate attributeName="cy" values="10;1" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3.5" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="16" cy="10" r="2" fill="#3a3a3a">
          <animate attributeName="cy" values="10;1" dur="3.2s" begin="1.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="3.2s" begin="1.6s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3.5" dur="3.2s" begin="1.6s" repeatCount="indefinite" />
        </circle>
      </g>` : "";
    const flag = level >= 5 ? `
      <rect x="60" y="6" width="1.2" height="18" fill="#3a3326" />
      <polygon points="61.2,6 68,8 61.2,11" fill="#6b5a3e">
        <animate attributeName="points" values="61.2,6 68,8 61.2,11; 61.2,6 67,9 61.2,11; 61.2,6 68,8 61.2,11" dur="2.5s" repeatCount="indefinite" />
      </polygon>` : "";
    const roofVent = level >= 4 ? `<rect x="44" y="5" width="4" height="3" fill="#2a2620" stroke="#151208" stroke-width="0.4" /><rect x="44.5" y="4" width="3" height="1.5" fill="#3a352a" />` : "";
    return `
      <svg viewBox="0 0 72 58" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brkRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6b5a3e" />
            <stop offset="1" stop-color="#4a3d28" />
          </linearGradient>
          <linearGradient id="brkWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#463f30" />
            <stop offset="0.5" stop-color="#3a3428" />
            <stop offset="1" stop-color="#2e2920" />
          </linearGradient>
          <radialGradient id="brkWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="brkStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3a382f" />
            <stop offset="1" stop-color="#25231c" />
          </linearGradient>
        </defs>
        ${smoke}
        <rect x="13" y="6" width="6" height="14" fill="#4a3428" stroke="#2a1e16" stroke-width="0.5" />
        <rect x="13" y="6" width="6" height="2" fill="#5a4232" />
        <rect x="12" y="5" width="8" height="2" fill="#3a2a1e" />
        ${flag}
        <polygon points="6,20 66,20 60,4 12,4" fill="url(#brkRoof)" stroke="#2a2318" stroke-width="0.5" />
        <polygon points="12,4 60,4 63,12 9,12" fill="#5a4d34" opacity="0.4" />
        ${roofVent}
        <line x1="10" y1="16" x2="62" y2="16" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="11" y1="12" x2="61" y2="12" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="12" y1="8" x2="60" y2="8" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <rect x="6" y="19" width="60" height="3" fill="#241f16" />
        <rect x="8" y="21" width="56" height="29" fill="url(#brkWall)" />
        <line x1="8" y1="27" x2="64" y2="27" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="8" y1="33" x2="64" y2="33" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="8" y1="44" x2="64" y2="44" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <rect x="8" y="21" width="2" height="29" fill="#4a4132" opacity="0.6" />
        <rect x="62" y="21" width="2" height="29" fill="#231f18" opacity="0.6" />
        <rect x="31" y="34" width="11" height="16" fill="#1a1610" stroke="#0e0b07" stroke-width="0.5" />
        <rect x="31" y="34" width="11" height="16" fill="none" stroke="#3a3226" stroke-width="1" />
        <rect x="32" y="35" width="9" height="7" fill="#231e15" />
        <circle cx="39.5" cy="43" r="0.8" fill="#8C7A3D" />
        ${windows}
        <rect x="6" y="49" width="60" height="5" fill="url(#brkStone)" />
        <rect x="6" y="49" width="60" height="1" fill="#4a4638" opacity="0.6" />
        <line x1="22" y1="49" x2="22" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="36" y1="49" x2="36" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="50" y1="49" x2="50" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <ellipse cx="36" cy="55" rx="33" ry="2.5" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "workshop") {
    // A working shed — the camp's fabrication hut. Matches the Infirmary
    // art style: gradient roof, plank siding, stone footing, a warm-lit
    // workbench window, a forge chimney with smoke once built. A brass
    // hammer sign glows when operational; a second crossed hammer and
    // hanging tools appear toward max level (5).
    const winFill = lit ? "url(#wshWin)" : "#1a1812";
    const gearColor = lit ? "#c2a94f" : "#544c3c";
    const gearGlow = lit ? `filter="drop-shadow(0 0 1.5px #c2a94f)"` : "";
    const smoke = lit ? `
      <g opacity="0.55">
        <circle cx="12" cy="12" r="2" fill="#3a3a3a">
          <animate attributeName="cy" values="12;2" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;0" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;4" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="12" r="2" fill="#4a3a2a">
          <animate attributeName="cy" values="12;3" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3.5" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
        </circle>
      </g>` : "";
    const forgeGlow = lit ? `
      <rect x="9" y="40" width="7" height="6" fill="#ff7722" opacity="0.5">
        <animate attributeName="opacity" values="0.35;0.6;0.4;0.55" dur="1.8s" repeatCount="indefinite" />
      </rect>` : "";
    const secondGear = level >= 5 ? `
      <g ${gearGlow}>
        <rect x="45" y="21" width="1.4" height="7" rx="0.5" fill="${gearColor}" transform="rotate(-25 45.7 24.5)" />
        <rect x="42.6" y="19.5" width="6" height="2.6" rx="0.6" fill="${gearColor}" transform="rotate(-25 45.7 20.8)" />
      </g>` : "";
    const tools = level >= 3 ? `
      <line x1="40" y1="34" x2="40" y2="42" stroke="#5a5040" stroke-width="1.2" />
      <rect x="38.5" y="33" width="3" height="2" fill="#6b5a3e" />
      <line x1="44" y1="34" x2="44" y2="41" stroke="#5a5040" stroke-width="1" />
      <polygon points="42.5,41 45.5,41 44,44" fill="#6b5a3e" />` : "";
    return `
      <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wshRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6b5a3e" />
            <stop offset="1" stop-color="#4a3d28" />
          </linearGradient>
          <linearGradient id="wshWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#463f30" />
            <stop offset="0.5" stop-color="#3a3428" />
            <stop offset="1" stop-color="#2e2920" />
          </linearGradient>
          <radialGradient id="wshWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="wshStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3a382f" />
            <stop offset="1" stop-color="#25231c" />
          </linearGradient>
        </defs>
        ${smoke}
        <rect x="8" y="8" width="6" height="14" fill="#4a3428" stroke="#2a1e16" stroke-width="0.5" />
        <rect x="8" y="8" width="6" height="2" fill="#5a4232" />
        <rect x="7" y="7" width="8" height="2" fill="#3a2a1e" />
        <!-- Lean-to slanted roof -->
        <polygon points="4,24 54,16 54,22 4,30" fill="url(#wshRoof)" stroke="#2a2318" stroke-width="0.5" />
        <polygon points="4,24 54,16 54,18 4,26" fill="#5a4d34" opacity="0.5" />
        <line x1="8" y1="26" x2="52" y2="18.5" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <line x1="8" y1="28" x2="52" y2="20.5" stroke="#2e2718" stroke-width="0.5" opacity="0.6" />
        <!-- Wall -->
        <rect x="6" y="28" width="46" height="22" fill="url(#wshWall)" />
        <line x1="6" y1="34" x2="52" y2="34" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="6" y1="40" x2="52" y2="40" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <line x1="6" y1="46" x2="52" y2="46" stroke="#252017" stroke-width="0.6" opacity="0.5" />
        <rect x="6" y="28" width="2" height="22" fill="#4a4132" opacity="0.6" />
        <rect x="50" y="28" width="2" height="22" fill="#231f18" opacity="0.6" />
        <!-- Open forge/workbench bay with warm glow -->
        <rect x="8" y="38" width="9" height="12" fill="#140f0a" stroke="#0e0b07" stroke-width="0.5" />
        ${forgeGlow}
        <!-- Anvil silhouette in the bay -->
        <rect x="10" y="45" width="5" height="2" fill="#2a2a2a" />
        <rect x="11.5" y="43" width="2" height="2" fill="#2a2a2a" />
        <polygon points="10,45 15,45 16,43.5 9,43.5" fill="#333" />
        <!-- Workbench window -->
        <rect x="30" y="32" width="9" height="8" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="1" />
        <rect x="34.2" y="32" width="0.6" height="8" fill="#1a150c" opacity="0.6" />
        <rect x="30" y="35.7" width="9" height="0.6" fill="#1a150c" opacity="0.6" />
        ${tools}
        <!-- Brass hammer sign -->
        <g ${gearGlow}>
          <!-- Handle -->
          <rect x="38.2" y="21" width="1.8" height="10" rx="0.6" fill="${gearColor}" transform="rotate(25 39 26)" />
          <!-- Head -->
          <rect x="34.5" y="18.5" width="8" height="3.4" rx="0.8" fill="${gearColor}" transform="rotate(25 39 20)" />
          <!-- Claw notch on one end of the head -->
          <polygon points="34.2,18.8 36,18.4 35.6,21.8 34,22" fill="${gearColor}" transform="rotate(25 39 20)" />
        </g>
        ${secondGear}
        <!-- Stone foundation -->
        <rect x="4" y="49" width="50" height="5" fill="url(#wshStone)" />
        <rect x="4" y="49" width="50" height="1" fill="#4a4638" opacity="0.6" />
        <line x1="17" y1="49" x2="17" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="29" y1="49" x2="29" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <line x1="41" y1="49" x2="41" y2="54" stroke="#1a1812" stroke-width="0.5" />
        <ellipse cx="29" cy="55" rx="27" ry="2.5" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "radioTower") {
    // A tall comms mast — matches the detailed art style with a gradient
    // lattice, an equipment shack at the base, a dish, and a beacon that
    // blinks once built. A satellite dish appears at lvl 2+, guy-wires at
    // max (4).
    const winFill = lit ? "url(#radWin)" : "#1a1812";
    const beacon = lit
      ? `<circle cx="13" cy="1.5" r="1.8" fill="var(--rust-bright)"><animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" /></circle>`
      : `<circle cx="13" cy="1.5" r="1.8" fill="#544c3c" />`;
    const dish = level >= 2 ? `
      <line x1="6" y1="24" x2="2" y2="20" stroke="#4a4030" stroke-width="1" />
      <path d="M2,24 A5,5 0 0 1 2,16 Z" fill="#3a4a4d" stroke="#241f16" stroke-width="0.6" transform="rotate(-20 2 20)" />
      <circle cx="2.5" cy="20" r="0.8" fill="#5a6b6e" />` : "";
    const guyWires = level >= 4 ? `
      <line x1="13" y1="8" x2="3" y2="42" stroke="#3a3326" stroke-width="0.4" opacity="0.6" />
      <line x1="13" y1="8" x2="23" y2="42" stroke="#3a3326" stroke-width="0.4" opacity="0.6" />` : "";
    return `
      <svg viewBox="0 0 26 56" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="radLeg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#524836" />
            <stop offset="1" stop-color="#332d21" />
          </linearGradient>
          <linearGradient id="radWall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#463f30" />
            <stop offset="0.5" stop-color="#3a3428" />
            <stop offset="1" stop-color="#2e2920" />
          </linearGradient>
          <radialGradient id="radWin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#ffe9a8" />
            <stop offset="0.6" stop-color="#e0b048" />
            <stop offset="1" stop-color="#8a6a28" />
          </radialGradient>
          <linearGradient id="radStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3a382f" />
            <stop offset="1" stop-color="#25231c" />
          </linearGradient>
        </defs>
        ${guyWires}
        <!-- Mast -->
        <rect x="11" y="4" width="1.6" height="4" fill="#4a4030" />
        ${beacon}
        <!-- Lattice legs -->
        <rect x="6" y="8" width="1.8" height="36" fill="url(#radLeg)" />
        <rect x="18.2" y="8" width="1.8" height="36" fill="url(#radLeg)" />
        <!-- Lattice X-bracing -->
        <line x1="7" y1="14" x2="19" y2="8" stroke="#3a3326" stroke-width="1.2" />
        <line x1="19" y1="14" x2="7" y2="8" stroke="#3a3326" stroke-width="1.2" />
        <line x1="7" y1="22" x2="19" y2="14" stroke="#3a3326" stroke-width="1.2" />
        <line x1="19" y1="22" x2="7" y2="14" stroke="#3a3326" stroke-width="1.2" />
        <line x1="7" y1="30" x2="19" y2="22" stroke="#3a3326" stroke-width="1.2" />
        <line x1="19" y1="30" x2="7" y2="22" stroke="#3a3326" stroke-width="1.2" />
        <line x1="7" y1="38" x2="19" y2="30" stroke="#3a3326" stroke-width="1.2" />
        <line x1="19" y1="38" x2="7" y2="30" stroke="#3a3326" stroke-width="1.2" />
        <!-- Mid platform -->
        <rect x="4" y="21" width="18" height="2.5" fill="#4a4030" stroke="#241f16" stroke-width="0.6" />
        ${dish}
        <!-- Equipment shack at base -->
        <rect x="3" y="42" width="20" height="10" fill="url(#radWall)" />
        <rect x="3" y="42" width="2" height="10" fill="#4a4132" opacity="0.6" />
        <rect x="21" y="42" width="2" height="10" fill="#231f18" opacity="0.6" />
        <polygon points="2,42 24,42 21,38 5,38" fill="#4a3d28" stroke="#241f16" stroke-width="0.5" />
        <rect x="6" y="45" width="6" height="6" fill="#1a1610" stroke="#0e0b07" stroke-width="0.4" />
        <rect x="15" y="45" width="5" height="4" rx="0.5" fill="${winFill}" stroke="#1a150c" stroke-width="0.8" />
        <rect x="1" y="51" width="24" height="3" fill="url(#radStone)" />
        <ellipse cx="13" cy="54.5" rx="12" ry="1.6" fill="#000" opacity="0.35" />
      </svg>
    `;
  }
  if (id === "farm") {
    // A tilled plot that fills in with wheat as it levels — matches the
    // detailed art style with a raised gradient soil bed, furrow lines, a
    // wooden fence, a water barrel, and a scarecrow at higher levels.
    const stalkCount = level * 4; // 0,4,8,12,16,20,24 across levels 0-6
    const stalkColor = level >= 4 ? "url(#frmWheat)" : "#8C7A3D";
    const headColor = level >= 4 ? "#d8c25a" : "#8C7A3D";
    const baseHeight = 6;
    const heightGrowth = 1.4;
    let stalks = "";
    for (let i = 0; i < stalkCount; i++) {
      const x = 6 + (i * (48 / Math.max(1, stalkCount - 1)));
      const jitter = (i % 3) * 0.9;
      const stalkTop = 26 - (baseHeight + level * heightGrowth) - jitter;
      stalks += `<line x1="${x.toFixed(1)}" y1="26" x2="${x.toFixed(1)}" y2="${stalkTop.toFixed(1)}" stroke="${stalkColor}" stroke-width="1.1" stroke-linecap="round" />`;
      stalks += `<ellipse cx="${x.toFixed(1)}" cy="${stalkTop.toFixed(1)}" rx="1.2" ry="1.8" fill="${headColor}" />`;
    }
    const barrel = level >= 2 ? `
      <ellipse cx="55" cy="20" rx="4" ry="1.5" fill="#3a4a4d" stroke="#1a1d15" stroke-width="0.5" />
      <rect x="51" y="20" width="8" height="10" fill="#4a3a2a" stroke="#241f16" stroke-width="0.6" />
      <ellipse cx="55" cy="20" rx="4" ry="1.5" fill="#5a6b6e" />
      <line x1="51" y1="24" x2="59" y2="24" stroke="#2e2a1f" stroke-width="0.6" />` : "";
    const scarecrow = level >= 5 ? `
      <line x1="10" y1="8" x2="10" y2="24" stroke="#4a3a2a" stroke-width="1.3" />
      <line x1="5" y1="13" x2="15" y2="13" stroke="#4a3a2a" stroke-width="1.1" />
      <circle cx="10" cy="7" r="2.4" fill="#6b5a3e" />
      <polygon points="6.5,5.5 13.5,5.5 10,2.5" fill="#4a3d28" />
      <rect x="7.5" y="10" width="5" height="5" fill="#5a4b38" opacity="0.7" />` : "";
    return `
      <svg viewBox="0 0 62 34" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="frmSoil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${level >= 1 ? "#463829" : "#332e22"}" />
            <stop offset="1" stop-color="#241d14" />
          </linearGradient>
          <linearGradient id="frmWheat" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#8C7A3D" />
            <stop offset="1" stop-color="#d8c25a" />
          </linearGradient>
        </defs>
        ${scarecrow}
        <!-- Raised soil bed -->
        <rect x="2" y="24" width="58" height="4" fill="#4a4030" />
        <rect x="4" y="26" width="54" height="6" fill="url(#frmSoil)" />
        <!-- Furrow lines -->
        <line x1="4" y1="29" x2="58" y2="29" stroke="#1a150c" stroke-width="0.5" opacity="0.5" />
        <line x1="4" y1="31" x2="58" y2="31" stroke="#1a150c" stroke-width="0.5" opacity="0.5" />
        <!-- Fence posts -->
        <rect x="2" y="20" width="1.5" height="10" fill="#4a3a2a" />
        <rect x="59" y="20" width="1.5" height="10" fill="#4a3a2a" />
        <line x1="2" y1="23" x2="60.5" y2="23" stroke="#4a3a2a" stroke-width="0.8" opacity="0.7" />
        ${stalks}
        ${barrel}
        <ellipse cx="31" cy="33" rx="30" ry="1.5" fill="#000" opacity="0.3" />
      </svg>
    `;
  }
  if (id === "deconTent") {
    // A scavenged decon station — tarp shelter over wash basins and rigged
    // filtration. Matches the detailed art style with gradient tarp/basins,
    // support poles, hazard tape, and an olive-glowing filtration drum at
    // higher levels.
    const tarpGrad = level >= 1 ? "url(#decTarp)" : "#3a3d32";
    const basinFill = "url(#decBasin)";
    const hazardTape = level >= 2 ? `
      <line x1="3" y1="40" x2="24" y2="33" stroke="#C2A94F" stroke-width="2.5" stroke-dasharray="4,2.5" />` : "";
    const secondBasin = level >= 3 ? `
      <ellipse cx="46" cy="42" rx="8" ry="3.5" fill="${basinFill}" stroke="#1a1d15" stroke-width="1" />
      <ellipse cx="46" cy="41" rx="6" ry="2.4" fill="#1a2420" opacity="0.7" />` : "";
    const filtrationDrum = level >= 4 ? `
      <rect x="48" y="20" width="9" height="17" fill="#3a4a4d" stroke="#1a1d15" stroke-width="1" />
      <ellipse cx="52.5" cy="20" rx="4.5" ry="1.6" fill="#4a5a5d" />
      <circle cx="52.5" cy="20" r="3.4" fill="var(--olive-bright)" opacity="0.55">
        <animate attributeName="opacity" values="0.4;0.65;0.45;0.6" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <rect x="49" y="27" width="7" height="1.5" fill="#2a3437" />
      <rect x="49" y="31" width="7" height="1.5" fill="#2a3437" />` : "";
    return `
      <svg viewBox="0 0 62 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="decTarp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#6a7b62" />
            <stop offset="1" stop-color="#48543f" />
          </linearGradient>
          <radialGradient id="decBasin" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stop-color="#5a6b6e" />
            <stop offset="1" stop-color="#2e3a3d" />
          </radialGradient>
        </defs>
        <!-- Tarp canopy -->
        <polygon points="6,18 31,5 56,18 56,22 6,22" fill="${tarpGrad}" stroke="#2a2e24" stroke-width="0.5" />
        <polygon points="6,18 31,5 31,9 8,20" fill="#7a8b70" opacity="0.4" />
        <!-- Tarp sag lines -->
        <path d="M10,20 Q31,24 52,20" fill="none" stroke="#2a2e24" stroke-width="0.5" opacity="0.5" />
        <!-- Support poles -->
        <rect x="5" y="18" width="2" height="24" fill="#3a3326" />
        <rect x="55" y="18" width="2" height="24" fill="#3a3326" />
        <line x1="31" y1="5" x2="31" y2="22" stroke="#2e2a1f" stroke-width="1.5" opacity="0.6" />
        <!-- Rope guy line -->
        <line x1="6" y1="18" x2="1" y2="30" stroke="#4a4030" stroke-width="0.5" opacity="0.6" />
        <line x1="56" y1="18" x2="61" y2="30" stroke="#4a4030" stroke-width="0.5" opacity="0.6" />
        ${hazardTape}
        <!-- Main wash basin -->
        <ellipse cx="22" cy="40" rx="10" ry="4.5" fill="${basinFill}" stroke="#1a1d15" stroke-width="1" />
        <ellipse cx="22" cy="38.5" rx="7.5" ry="3" fill="#1a2420" opacity="0.7" />
        <ellipse cx="20" cy="38" rx="2" ry="0.8" fill="#7a8b8e" opacity="0.5" />
        ${secondBasin}
        ${filtrationDrum}
        <!-- Dirt base -->
        <rect x="2" y="44" width="58" height="3" fill="#2e2a1f" />
        <ellipse cx="31" cy="47.5" rx="29" ry="1.8" fill="#000" opacity="0.3" />
      </svg>
    `;
  }
  if (id === "recYard") {
    // A cracked half-court built out with salvaged hoops — matches the
    // detailed art style with a gradient court surface, painted lines,
    // proper backboards, a bench, and warm backboard glow at max level.
    const lineColor = level >= 1 ? "#bcb495" : "#3a3528";
    const hoopGlow = level >= 4 ? 0.5 : 0;
    function hoop(x) {
      return `
        <rect x="${x - 1}" y="14" width="2" height="24" fill="#3a3a3a" />
        <rect x="${x - 4}" y="11" width="8" height="8" fill="#6b5a3e" stroke="#1a1d15" stroke-width="0.6" opacity="${0.85 + hoopGlow * 0.3}" />
        <rect x="${x - 2.5}" y="13" width="5" height="4" fill="none" stroke="#8C7A3D" stroke-width="0.5" />
        ${hoopGlow ? `<rect x="${x - 4}" y="11" width="8" height="8" fill="#e0b048" opacity="0.25"><animate attributeName="opacity" values="0.15;0.3;0.2" dur="2.5s" repeatCount="indefinite" /></rect>` : ""}
        <ellipse cx="${x}" cy="20" rx="3" ry="1" fill="none" stroke="var(--rust-bright)" stroke-width="1.2" />
        <path d="M${x - 2.8},20.5 L${x - 1.8},25 L${x + 1.8},25 L${x + 2.8},20.5" fill="none" stroke="#9c9c8c" stroke-width="0.5" />
      `;
    }
    const nearHoop = level >= 1 ? hoop(11) : "";
    const courtLines = level >= 2 ? `
      <rect x="18" y="30" width="20" height="12" fill="none" stroke="${lineColor}" stroke-width="0.9" />
      <ellipse cx="18" cy="36" rx="5" ry="5" fill="none" stroke="${lineColor}" stroke-width="0.9" />` : "";
    const farHoop = level >= 3 ? hoop(49) : "";
    const halfCourtLine = level >= 4 ? `
      <line x1="30" y1="28" x2="30" y2="46" stroke="${lineColor}" stroke-width="0.9" />
      <ellipse cx="30" cy="37" rx="4" ry="4" fill="none" stroke="${lineColor}" stroke-width="0.9" />` : "";
    const bench = level >= 2 ? `
      <rect x="24" y="46" width="12" height="1.5" fill="#4a3a2a" />
      <rect x="25" y="47.5" width="1.5" height="2.5" fill="#3a2e22" />
      <rect x="33.5" y="47.5" width="1.5" height="2.5" fill="#3a2e22" />` : "";
    return `
      <svg viewBox="0 0 60 52" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="recCourt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${level >= 1 ? "#524c3c" : "#332e22"}" />
            <stop offset="1" stop-color="#332f24" />
          </linearGradient>
        </defs>
        <!-- Court surface -->
        <rect x="4" y="28" width="52" height="16" fill="url(#recCourt)" />
        <!-- Cracks -->
        <path d="M12,28 L16,36 L13,44" fill="none" stroke="#1a1610" stroke-width="0.5" opacity="0.5" />
        <path d="M40,28 L37,34 L42,44" fill="none" stroke="#1a1610" stroke-width="0.5" opacity="0.5" />
        <!-- Court boundary lines -->
        <rect x="4" y="28" width="52" height="16" fill="none" stroke="${lineColor}" stroke-width="0.9" />
        ${courtLines}
        ${halfCourtLine}
        ${nearHoop}
        ${farHoop}
        ${bench}
        <ellipse cx="30" cy="45" rx="29" ry="1.6" fill="#000" opacity="0.3" />
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
      <div class="cf-building ${unbuilt ? "unbuilt" : ""}" data-building-id="${b.id}" style="left:${b.left}; bottom:${b.bottom}; transform:translateX(-50%) scale(${b.scale}); --bscale:${b.scale};">
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

// Replaces the old pure-CSS log (three rotated rectangles) and flame
// (two clip-path polygons) with actual hand-drawn SVG, same general
// approach as every building's art — proper curves on the flame instead
// of straight-edged jagged polygons, and a real crossed-log pile instead
// of three flat bars. The flame's own flicker animation still lives in
// CSS (.cf-flame-outer/-mid/-inner, see index.html) animating each
// path's transform, the same technique the old CSS divs used — hand-
// authoring frame-by-frame SVG path morphing for a flicker would be a
// lot of motion to draw for very little visual gain over scaling/
// skewing the whole shape the way the old implementation already did
// successfully.
function fireSvgMarkup() {
  return `
    <svg viewBox="0 0 50 56" xmlns="http://www.w3.org/2000/svg" class="cf-fire-svg">
      <ellipse cx="25" cy="50" rx="19" ry="4" fill="#1a140e" opacity="0.5" />
      <g class="cf-log-pile">
        <rect x="4" y="42" width="34" height="6" rx="1.5" fill="#2a1d14" stroke="#1a120a" stroke-width="1" transform="rotate(-8 21 45)" />
        <rect x="12" y="42" width="34" height="6" rx="1.5" fill="#332217" stroke="#1a120a" stroke-width="1" transform="rotate(11 29 45)" />
        <rect x="8" y="44" width="32" height="5.5" rx="1.5" fill="#2a1d14" stroke="#1a120a" stroke-width="1" transform="rotate(-2 24 47)" />
        <ellipse cx="8" cy="43.5" rx="2.2" ry="2.6" fill="#4a3220" transform="rotate(-8 21 45)" />
        <ellipse cx="34" cy="43.5" rx="2.2" ry="2.6" fill="#4a3220" transform="rotate(11 29 45)" />
      </g>
      <g class="cf-flame-outer">
        <path d="M25,4 C19,14 14,20 14,29 C14,38 19,44 25,44 C31,44 36,38 36,29 C36,20 31,14 25,4 Z" fill="var(--rust)" />
      </g>
      <g class="cf-flame-mid">
        <path d="M25,12 C21,19 18,24 18,30 C18,36 21,40 25,40 C29,40 32,36 32,30 C32,24 29,19 25,12 Z" fill="var(--rust-bright)" />
      </g>
      <g class="cf-flame-inner">
        <path d="M25,20 C22,24 20,27 20,31 C20,35 22,38 25,38 C28,38 30,35 30,31 C30,27 28,24 25,20 Z" fill="var(--brass-bright)" />
      </g>
    </svg>
  `;
}

function renderStashChest() {
  return `
    <div class="cf-building cf-chest" data-building-id="stashChest" style="left:${STASH_CHEST_POS.left}; bottom:${STASH_CHEST_POS.bottom}; transform:translateX(-50%) scale(${STASH_CHEST_POS.scale}); --bscale:${STASH_CHEST_POS.scale};">
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
    <div class="cf-building cf-warehouse" style="left:${WAREHOUSE_POS.left}; bottom:${WAREHOUSE_POS.bottom}; transform:translateX(-50%) scale(${WAREHOUSE_POS.scale}); --bscale:${WAREHOUSE_POS.scale};">
      ${warehouseSvgMarkup()}
      <div class="cf-building-label">
        <div class="cf-warehouse-supplies">${warehouseSuppliesMarkup()}</div>
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
      <div class="cf-landscape" id="cfLandscape">${renderLandscapeSvg()}</div>
      <div class="cf-explosion-layer" id="cfExplosionLayer"></div>
      <div class="cf-sky-tint"></div>
      <div class="cf-ground"></div>
      <div class="cf-buildings" id="cfBuildings">${renderCampfireBuildings()}</div>
      <div class="cf-chest-layer" id="cfChestLayer">${renderStashChest()}</div>
      <div class="cf-warehouse-layer" id="cfWarehouseLayer">${renderWarehouse()}</div>
      <div class="cf-glow"></div>
      <div class="cf-fire">
        ${fireSvgMarkup()}
      </div>
      <div class="cf-embers"><div class="cf-ember"></div><div class="cf-ember"></div><div class="cf-ember"></div></div>
      <div class="cf-weather-overlay" id="cfWeatherOverlay"></div>
      <div class="cf-survivors" id="cfSurvivors"></div>
      <div class="crisis-overlay crisis-food" id="cfCrisisFood" style="display:none;"></div>
      <div class="crisis-overlay crisis-morale" id="cfCrisisMorale" style="display:none;"></div>
      <div class="cf-clock" data-phase="night">
        ${CLOCK_ICON_SVG}
        <span class="cf-clock-day">DAY 1</span>
        <span class="cf-clock-time">00:00</span>
        <span class="cf-clock-weather-glyph" id="cfClockWeatherGlyph"></span>
        <div class="cf-forecast-panel" id="cfForecastPanel"></div>
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
    // Seated sprites (scavs who are away — raiding, healing, resting,
    // etc., see syncCampfireScene's status check) are never eligible to
    // be sent wandering, on top of the existing mid-walk exclusion —
    // they're meant to stay parked by the fire until their status
    // actually changes back to "ready", not randomly get pulled into
    // the wander rotation in between.
    const idle = sprites.filter((el) => el.dataset.walking !== "1" && !el.classList.contains("seated"));
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
  startCampChat();
  startExplosions();

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
  // Whether each scav is currently away from camp in spirit, even though
  // they're still in the living roster — raiding, healing, resting,
  // defending, or assigned to the Outpost, anything other than "ready".
  // These sprites get pulled out of the wandering rotation entirely and
  // parked sitting by the fire instead, rather than wandering camp
  // looking present when they're mechanically not. Re-checked every
  // single sync (not just at sprite creation) since a scav's status
  // changes constantly over time on what's otherwise a long-lived,
  // already-mounted DOM node — see the HP-label refresh loop just above
  // this for the same "keep already-existing sprites current" reasoning.
  container.querySelectorAll(".cf-survivor").forEach((el) => {
    const scav = living.find((s) => s.id === el.dataset.scavId);
    if (!scav) return;
    const isAway = scav.status !== "ready";
    const wasAway = el.dataset.away === "1";
    if (isAway === wasAway) return;
    el.dataset.away = isAway ? "1" : "0";
    const pose = el.querySelector(".cf-survivor-pose");
    if (isAway) {
      el.dataset.walking = "0";
      el.classList.add("seated");
      if (pose) { pose.classList.remove("walking"); pose.classList.add("seated"); }
    } else {
      el.classList.remove("seated");
      if (pose) pose.classList.remove("seated");
    }
  });

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
      const sprite = container.appendChild(makeSurvivorSprite(scav, claimFreeSeat()));
      // A scav can already be away the very first moment their sprite is
      // ever created — loading a save mid-raid, for instance, or
      // recruiting straight into a state where they're immediately
      // assigned somewhere. The status-sync loop above only checks
      // sprites that already existed before this function ran, so a
      // brand-new sprite needs its own explicit check right here,
      // rather than waiting for some later sync to notice a "change"
      // that never actually happened (their status was never anything
      // but away to begin with).
      if (scav.status !== "ready") {
        sprite.dataset.away = "1";
        sprite.dataset.walking = "0";
        sprite.classList.add("seated");
        const pose = sprite.querySelector(".cf-survivor-pose");
        if (pose) { pose.classList.remove("walking"); pose.classList.add("seated"); }
      }
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
  deconTent: () => openBuildingPopup("deconTent"),
  recYard: () => openBuildingPopup("recYard"),
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

// Small teaser card for the left-stack "Camp" panel — mirrors the shape of
// renderRaidLauncherCard (a line of status text plus one button) so the
// three left-stack panels read as a consistent set. The actual campfire
// scene (buildings, chest, survivors) lives in the full-screen overlay
// opened by the button here — see renderCampScreen.
function renderCampPanelCard() {
  return `
    <div class="raid-launcher-card">
      <div class="rl-status">Buildings, recruiting, and base upgrades.</div>
      <button class="btn" id="openCampScreenBtn">Open Camp</button>
    </div>
  `;
}

// Full-screen camp view — same fixed/inset overlay pattern as the Raid
// Select and Roster screens (see .camp-screen / .raid-select-screen /
// .roster-screen). Only holds a header and the #campfireSceneSlot mount
// point; renderAll() detaches/reattaches the live #campfireScene node into
// whatever slot exists in the freshly-built markup each render, exactly as
// it always has, so survivor animations keep running uninterrupted while
// this screen is open — this function doesn't need to know about that.
function renderCampScreen() {
  return `
    <div class="camp-screen">
      <div class="rs-header">
        <div class="rs-title">CAMP</div>
        <button class="rs-back-btn" id="closeCampScreenBtn">← Back</button>
      </div>
      <div id="campfireSceneSlot"></div>
    </div>
  `;
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
  const contextMap = DUNGEONS.find((d) => d.id === selectedDungeonId) || null;
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
        ${renderScavPickExtras(scav, contextMap)}
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
        ${renderScavPickExtras(scav, null, false)}
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
  const effectiveWinChance = arenaEffectiveWinChance(scav);
  const goldRange = arenaGoldRange();
  return `
    <div class="rs-odds">
      <div class="o-item"><span class="o-lbl">Win Chance</span><span class="o-val survive">${Math.round(effectiveWinChance * 100)}%</span></div>
      <div class="o-item"><span class="o-lbl">Reward</span><span class="o-val loot">${goldRange.min}-${goldRange.max} gold + gear</span></div>
      <div class="o-item"><span class="o-lbl">Time</span><span class="o-val">${ARENAS[0].duration}s</span></div>
    </div>
    <button class="btn" id="launchArenaBtn">Enter ${escapeHtml(scav.name)}</button>
  `;
}

// Player entries get the blue highlight class (see .leaderboard-row.is-player
// in index.html) keyed off isPlayerScav, never off name — see the
// ARENA LEADERBOARD section's comment on recordArenaWin for why a name
// match alone would be the wrong thing to key this off of.
function renderArenaLeaderboard() {
  const board = getArenaLeaderboard();
  const rows = board.map((entry, i) => `
    <div class="leaderboard-row ${entry.isPlayerScav ? "is-player" : ""}">
      <span class="leaderboard-rank">${i + 1}</span>
      <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
      <span class="leaderboard-wins">${entry.wins} win${entry.wins === 1 ? "" : "s"}</span>
    </div>
  `).join("");
  return `<div class="leaderboard-list">${rows}</div>`;
}

function renderArenaTab() {
  const arena = ARENAS[0];
  // Falls back to the flat base chance when nothing's selected yet (no
  // specific scav's gear to factor in at that point) — once a scav is
  // picked, this re-renders via refreshRaidScreen the same as the
  // bottom bar does, so showing their actual effective chance here too
  // keeps this header from quietly disagreeing with the number right
  // below it.
  const selectedScav = STATE.scavs.find((s) => s.id === arenaScavId);
  const headerWinChance = selectedScav
    ? arenaEffectiveWinChance(selectedScav)
    : ARENA_WIN_CHANCE;
  const headerGoldRange = arenaGoldRange();
  return `
    <div class="rs-body">
      <div class="rs-art-panel" style="background-image:url('${MAP_ART[arena.id]}')">
        <div class="rs-art-content">
          <div class="rs-art-name">${escapeHtml(arena.name)}</div>
          <div class="rs-art-desc">${escapeHtml(arena.desc)}</div>
          <div class="rs-art-meta">
            <div><span class="m-lbl">Duration</span><span class="m-val">${arena.duration}s</span></div>
            <div><span class="m-lbl">Win Chance</span><span class="m-val">${Math.round(headerWinChance * 100)}%</span></div>
            <div><span class="m-lbl">Reward</span><span class="m-val">${headerGoldRange.min}-${headerGoldRange.max} gold + gear</span></div>
          </div>
        </div>
      </div>
      <div class="rs-info-panel">
        <div class="dungeon-note" style="margin-top:0; padding-top:0; border-top:none;">No mid-fight events, no boss, and no risk to whoever steps in — win or lose, they walk out the same way they walked in. A win pays out a tier-appropriate piece of gear on top of the gold; a loss just means no payout this time.</div>
        <div class="section-divider">Choose a scav</div>
        <div class="rs-scav-grid" id="arenaScavGrid">${renderArenaScavGrid()}</div>
        <div class="section-divider">Pit regulars</div>
        <div id="arenaLeaderboard">${renderArenaLeaderboard()}</div>
      </div>
    </div>
    <div class="rs-bottom-bar" id="arenaBottomBar">${renderArenaBottomBar()}</div>
  `;
}

// ===== MAP LAYOUTS (path planner) =====
// Each map has a small graph of rooms: nodes (rooms) and edges (connections).
// Room types: "entry" (always first), "exit" (always last), "loot" (biases
// toward loot events), "hostile" (biases toward enemy events), "supply"
// (biases toward medicine/food), "utility" (neutral, general purpose).
// The player selects which rooms to visit — more rooms = more time = more
// loot + more risk. The entry room is always selected, exit is always the
// terminus. Minimum path is entry + exit. Maximum is all rooms.
const MAP_LAYOUTS = {
  lot: {
    rooms: [
      { id: "parking", type: "entry", label: "Parking Lot", x: 60, y: 160 },
      { id: "storefront_a", type: "loot", label: "Storefront A", x: 180, y: 80 },
      { id: "storefront_b", type: "loot", label: "Storefront B", x: 180, y: 160 },
      { id: "stockroom", type: "loot", label: "Stock Room", x: 300, y: 120 },
      { id: "loading_dock", type: "hostile", label: "Loading Dock", x: 300, y: 220 },
      { id: "back_exit", type: "exit", label: "Back Alley", x: 420, y: 160 },
    ],
    edges: [["parking","storefront_a"],["parking","storefront_b"],["storefront_a","stockroom"],["storefront_b","stockroom"],["storefront_b","loading_dock"],["stockroom","back_exit"],["loading_dock","back_exit"]],
  },
  marina: {
    rooms: [
      { id: "dock_gate", type: "entry", label: "Dock Gate", x: 60, y: 160 },
      { id: "bait_shop", type: "loot", label: "Bait Shop", x: 180, y: 80 },
      { id: "fuel_shed", type: "supply", label: "Fuel Shed", x: 180, y: 200 },
      { id: "pier_a", type: "loot", label: "Pier A", x: 300, y: 80 },
      { id: "pier_b", type: "hostile", label: "Pier B", x: 300, y: 200 },
      { id: "harbor_exit", type: "exit", label: "Harbor Road", x: 420, y: 140 },
    ],
    edges: [["dock_gate","bait_shop"],["dock_gate","fuel_shed"],["bait_shop","pier_a"],["fuel_shed","pier_b"],["pier_a","harbor_exit"],["pier_b","harbor_exit"]],
  },
  depot: {
    rooms: [
      { id: "yard_gate", type: "entry", label: "Yard Gate", x: 60, y: 160 },
      { id: "container_row", type: "loot", label: "Container Row", x: 180, y: 80 },
      { id: "maintenance", type: "supply", label: "Maintenance Bay", x: 180, y: 240 },
      { id: "freight_office", type: "loot", label: "Freight Office", x: 300, y: 80 },
      { id: "engine_house", type: "hostile", label: "Engine House", x: 300, y: 200 },
      { id: "signal_room", type: "loot", label: "Signal Room", x: 380, y: 140 },
      { id: "far_track", type: "exit", label: "Far Track", x: 480, y: 140 },
    ],
    edges: [["yard_gate","container_row"],["yard_gate","maintenance"],["container_row","freight_office"],["maintenance","engine_house"],["freight_office","signal_room"],["engine_house","signal_room"],["signal_room","far_track"]],
  },
  farmstead: {
    rooms: [
      { id: "field_road", type: "entry", label: "Field Road", x: 60, y: 160 },
      { id: "barn", type: "loot", label: "Barn", x: 200, y: 80 },
      { id: "farmhouse", type: "supply", label: "Farmhouse", x: 200, y: 240 },
      { id: "silo", type: "loot", label: "Grain Silo", x: 320, y: 80 },
      { id: "cellar", type: "supply", label: "Root Cellar", x: 320, y: 200 },
      { id: "workshop_shed", type: "loot", label: "Workshop Shed", x: 420, y: 140 },
      { id: "back_fence", type: "exit", label: "Back Fence", x: 520, y: 160 },
    ],
    edges: [["field_road","barn"],["field_road","farmhouse"],["barn","silo"],["farmhouse","cellar"],["silo","workshop_shed"],["cellar","workshop_shed"],["workshop_shed","back_fence"]],
  },
  suburb: {
    rooms: [
      { id: "flooded_street", type: "entry", label: "Flooded Street", x: 60, y: 160 },
      { id: "house_a", type: "loot", label: "House A", x: 180, y: 80 },
      { id: "house_b", type: "loot", label: "House B", x: 180, y: 200 },
      { id: "garage", type: "utility", label: "Garage", x: 280, y: 140 },
      { id: "cul_de_sac", type: "hostile", label: "Cul-de-sac", x: 380, y: 80 },
      { id: "community_hall", type: "supply", label: "Community Hall", x: 380, y: 200 },
      { id: "drainage_exit", type: "exit", label: "Drainage Ditch", x: 500, y: 140 },
    ],
    edges: [["flooded_street","house_a"],["flooded_street","house_b"],["house_a","garage"],["house_b","garage"],["garage","cul_de_sac"],["garage","community_hall"],["cul_de_sac","drainage_exit"],["community_hall","drainage_exit"]],
  },
  hospital: {
    rooms: [
      { id: "ambulance_bay", type: "entry", label: "Ambulance Bay", x: 60, y: 160 },
      { id: "triage", type: "supply", label: "Triage", x: 180, y: 100 },
      { id: "ward_a", type: "supply", label: "Ward A", x: 180, y: 220 },
      { id: "pharmacy", type: "supply", label: "Pharmacy", x: 300, y: 60 },
      { id: "surgery", type: "supply", label: "Surgery", x: 300, y: 160 },
      { id: "basement", type: "hostile", label: "Basement", x: 300, y: 260 },
      { id: "morgue", type: "hostile", label: "Morgue", x: 420, y: 200 },
      { id: "service_exit", type: "exit", label: "Service Exit", x: 520, y: 140 },
    ],
    edges: [["ambulance_bay","triage"],["ambulance_bay","ward_a"],["triage","pharmacy"],["triage","surgery"],["ward_a","surgery"],["ward_a","basement"],["pharmacy","service_exit"],["surgery","morgue"],["basement","morgue"],["morgue","service_exit"]],
  },
  precinct: {
    rooms: [
      { id: "front_desk", type: "entry", label: "Front Desk", x: 60, y: 160 },
      { id: "bullpen", type: "loot", label: "Detective Bullpen", x: 180, y: 100 },
      { id: "holding", type: "hostile", label: "Holding Cells", x: 180, y: 220 },
      { id: "evidence", type: "loot", label: "Evidence Room", x: 300, y: 80 },
      { id: "armoury", type: "loot", label: "Station Armory", x: 300, y: 180 },
      { id: "interrogation", type: "hostile", label: "Interrogation", x: 400, y: 260 },
      { id: "back_lot", type: "exit", label: "Back Lot", x: 500, y: 160 },
    ],
    edges: [["front_desk","bullpen"],["front_desk","holding"],["bullpen","evidence"],["bullpen","armoury"],["holding","armoury"],["holding","interrogation"],["evidence","back_lot"],["armoury","back_lot"],["interrogation","back_lot"]],
  },
  metro: {
    rooms: [
      { id: "entrance_tunnel", type: "entry", label: "Entrance Tunnel", x: 60, y: 160 },
      { id: "platform_a", type: "utility", label: "Platform A", x: 190, y: 90 },
      { id: "platform_b", type: "utility", label: "Platform B", x: 190, y: 230 },
      { id: "ticket_hall", type: "loot", label: "Ticket Hall", x: 300, y: 90 },
      { id: "maintenance_tunnel", type: "hostile", label: "Maintenance Tunnel", x: 300, y: 230 },
      { id: "control_room", type: "loot", label: "Control Room", x: 400, y: 160 },
      { id: "far_platform", type: "hostile", label: "Far Platform", x: 490, y: 90 },
      { id: "emergency_exit", type: "exit", label: "Emergency Exit", x: 560, y: 160 },
    ],
    edges: [["entrance_tunnel","platform_a"],["entrance_tunnel","platform_b"],["platform_a","ticket_hall"],["platform_b","maintenance_tunnel"],["ticket_hall","control_room"],["maintenance_tunnel","control_room"],["control_room","far_platform"],["control_room","emergency_exit"],["far_platform","emergency_exit"]],
  },
  tower: {
    rooms: [
      { id: "lobby", type: "entry", label: "Lobby", x: 60, y: 180 },
      { id: "ground_floor", type: "loot", label: "Ground Floor", x: 170, y: 120 },
      { id: "security_office", type: "hostile", label: "Security Office", x: 170, y: 240 },
      { id: "mid_floors", type: "loot", label: "Mid Floors", x: 280, y: 100 },
      { id: "server_room", type: "loot", label: "Server Room", x: 280, y: 220 },
      { id: "upper_floors", type: "hostile", label: "Upper Floors", x: 390, y: 100 },
      { id: "roof_access", type: "loot", label: "Roof Access", x: 480, y: 160 },
      { id: "fire_escape", type: "exit", label: "Fire Escape", x: 560, y: 200 },
    ],
    edges: [["lobby","ground_floor"],["lobby","security_office"],["ground_floor","mid_floors"],["security_office","server_room"],["mid_floors","upper_floors"],["server_room","upper_floors"],["upper_floors","roof_access"],["roof_access","fire_escape"],["server_room","fire_escape"]],
  },
  refinery: {
    rooms: [
      { id: "perimeter_gate", type: "entry", label: "Perimeter Gate", x: 50, y: 160 },
      { id: "control_shed", type: "utility", label: "Control Shed", x: 170, y: 90 },
      { id: "pump_station", type: "utility", label: "Pump Station", x: 170, y: 230 },
      { id: "processing_unit", type: "loot", label: "Processing Unit", x: 280, y: 90 },
      { id: "storage_tanks", type: "loot", label: "Storage Tanks", x: 280, y: 230 },
      { id: "cracking_towers", type: "hostile", label: "Cracking Towers", x: 380, y: 160 },
      { id: "worker_barracks", type: "supply", label: "Worker Barracks", x: 460, y: 90 },
      { id: "service_road", type: "exit", label: "Service Road", x: 550, y: 160 },
    ],
    edges: [["perimeter_gate","control_shed"],["perimeter_gate","pump_station"],["control_shed","processing_unit"],["pump_station","storage_tanks"],["processing_unit","cracking_towers"],["storage_tanks","cracking_towers"],["cracking_towers","worker_barracks"],["cracking_towers","service_road"],["worker_barracks","service_road"]],
  },
  drowned: {
    rooms: [
      { id: "flood_line", type: "entry", label: "Flood Line", x: 50, y: 170 },
      { id: "submerged_shops", type: "loot", label: "Submerged Shops", x: 170, y: 100 },
      { id: "waterlogged_apts", type: "loot", label: "Waterlogged Apts", x: 170, y: 240 },
      { id: "sewer_junction", type: "hostile", label: "Sewer Junction", x: 280, y: 170 },
      { id: "drowned_square", type: "hostile", label: "Drowned Square", x: 380, y: 100 },
      { id: "collapsed_church", type: "loot", label: "Collapsed Church", x: 380, y: 240 },
      { id: "utility_island", type: "supply", label: "Utility Island", x: 470, y: 170 },
      { id: "high_ground", type: "exit", label: "High Ground", x: 560, y: 170 },
    ],
    edges: [["flood_line","submerged_shops"],["flood_line","waterlogged_apts"],["submerged_shops","sewer_junction"],["waterlogged_apts","sewer_junction"],["sewer_junction","drowned_square"],["sewer_junction","collapsed_church"],["drowned_square","utility_island"],["collapsed_church","utility_island"],["utility_island","high_ground"]],
  },
};

// Room type visual config for the blueprint SVG
const ROOM_TYPE_CONFIG = {
  entry:   { fill: "rgba(60,90,50,0.6)",   stroke: "#7a9e6a", label: "ENTRY" },
  exit:    { fill: "rgba(40,70,80,0.6)",   stroke: "#6aaec4", label: "EXIT" },
  loot:    { fill: "rgba(80,70,30,0.5)",   stroke: "#c2a94f", label: "LOOT" },
  hostile: { fill: "rgba(100,35,30,0.5)",  stroke: "#c25045", label: "HOSTILE" },
  supply:  { fill: "rgba(40,80,70,0.5)",   stroke: "#5abba3", label: "SUPPLY" },
  utility: { fill: "rgba(50,50,60,0.5)",   stroke: "#8888aa", label: "GENERAL" },
};

// Compute the time cost of a specific room selection.
// Minimum time = entry only; maximum = all rooms (== map.duration base).
// Scales linearly between the two extremes.
function raidPathDuration(map, rooms) {
  const layout = MAP_LAYOUTS[map.id];
  if (!layout || !rooms || rooms.length === 0) return map.duration;
  const allCount = layout.rooms.length;
  const selCount = rooms.length;
  // Entry-only = 40% of full time; visiting everything = 100%
  const minFrac = 0.4;
  const t = (selCount - 1) / Math.max(1, allCount - 1); // 0 (just entry) → 1 (all rooms)
  return Math.round(map.duration * (minFrac + (1 - minFrac) * t));
}

// Build the blueprint SVG for the path planner.
// Rooms are rendered as labelled boxes; connections as dashed lines.
// Selected rooms are highlighted brass. The entry room is always
// shown as selected and non-toggleable. Rooms that aren't reachable
// from the current selection are shown disabled (can't add them until
// you've selected an adjacent room first).
function renderMapBlueprint(map, selRooms) {
  const layout = MAP_LAYOUTS[map.id];
  if (!layout) return "";
  const W = 620, H = 320;
  const selSet = new Set(selRooms);

  // Compute which rooms are reachable: a room is reachable if at least
  // one of its neighbours is in selSet (or it's the entry room).
  const adj = {};
  layout.rooms.forEach(r => { adj[r.id] = []; });
  layout.edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  const reachable = new Set();
  layout.rooms.forEach(r => {
    if (r.type === "entry") { reachable.add(r.id); return; }
    if (adj[r.id].some(n => selSet.has(n))) reachable.add(r.id);
  });

  // SVG edges
  const edgeSvg = layout.edges.map(([a, b]) => {
    const ra = layout.rooms.find(r => r.id === a);
    const rb = layout.rooms.find(r => r.id === b);
    const bothSel = selSet.has(a) && selSet.has(b);
    return `<line x1="${ra.x + 48}" y1="${ra.y + 16}" x2="${rb.x + 48}" y2="${rb.y + 16}"
      stroke="${bothSel ? "#c2a94f" : "#3a3d2a"}" stroke-width="${bothSel ? 2 : 1}"
      stroke-dasharray="${bothSel ? "none" : "4,4"}" opacity="${bothSel ? 0.9 : 0.45}"/>`;
  }).join("");

  // SVG room boxes
  const roomSvg = layout.rooms.map(r => {
    const cfg = ROOM_TYPE_CONFIG[r.type] || ROOM_TYPE_CONFIG.utility;
    const isSel = selSet.has(r.id);
    const isEntry = r.type === "entry";
    const isExit = r.type === "exit";
    const isReach = reachable.has(r.id);
    const canToggle = !isEntry && isReach;
    const fill = isSel ? (r.type === "entry" ? "rgba(60,90,50,0.85)" : r.type === "exit" ? "rgba(40,70,80,0.85)" : "rgba(90,75,20,0.8)") : cfg.fill;
    const stroke = isSel ? (r.type === "entry" ? "#7a9e6a" : r.type === "exit" ? "#6aaec4" : "#c2a94f") : (isReach ? cfg.stroke : "#2a2d1a");
    const opacity = !isReach && !isEntry ? 0.4 : 1;
    const cursor = canToggle ? "pointer" : "default";
    const labelColor = isSel ? "#e8dba8" : (isReach ? "#b0a870" : "#5a5a40");
    const typeColor = isSel ? cfg.stroke : (isReach ? cfg.stroke : "#3a3d2a");
    return `
      <g class="blueprint-room${canToggle ? " toggleable" : ""}" data-room-id="${r.id}"
         opacity="${opacity}" style="cursor:${cursor}">
        <rect x="${r.x}" y="${r.y}" width="96" height="32" rx="2"
          fill="${fill}" stroke="${stroke}" stroke-width="${isSel ? 1.5 : 1}"/>
        <text x="${r.x + 48}" y="${r.y + 12}" text-anchor="middle"
          font-family="monospace" font-size="8" fill="${typeColor}" letter-spacing="0.5">
          ${cfg.label}
        </text>
        <text x="${r.x + 48}" y="${r.y + 24}" text-anchor="middle"
          font-family="monospace" font-size="9" fill="${labelColor}">
          ${escapeHtml(r.label)}
        </text>
        ${isSel && !isEntry && !isExit ? `<circle cx="${r.x + 90}" cy="${r.y + 4}" r="4" fill="#c2a94f" opacity="0.9"/>` : ""}
      </g>`;
  }).join("");

  const selCount = selSet.size;
  const allCount = layout.rooms.length;
  const pathDur = raidPathDuration(map, selRooms);
  const baseActualDur = Math.max(8, Math.round(pathDur * raidDurationMult()));

  return `
    <div class="blueprint-wrap">
      <div class="blueprint-header">
        <span class="blueprint-title">ROUTE PLANNER — click rooms to add or remove</span>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="blueprint-stats">${selCount}/${allCount} rooms · ~${baseActualDur}s</span>
          <button class="btn secondary blueprint-expand-btn" id="expandBlueprintBtn" style="padding:3px 8px;font-size:11px;">⤢ Expand</button>
        </div>
      </div>
      <div class="blueprint-legend">
        ${Object.entries(ROOM_TYPE_CONFIG).map(([type, cfg]) =>
          `<span class="bl-key" style="border-color:${cfg.stroke};color:${cfg.stroke}">${cfg.label}</span>`
        ).join("")}
      </div>
      <svg class="blueprint-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" id="mapBlueprintSvg">
        <rect width="${W}" height="${H}" fill="#0d0f09"/>
        <!-- grid lines -->
        <g stroke="#1a1d12" stroke-width="0.5" opacity="0.6">
          ${Array.from({length: 12}, (_, i) => `<line x1="${i*52}" y1="0" x2="${i*52}" y2="${H}"/>`).join("")}
          ${Array.from({length: 7}, (_, i) => `<line x1="0" y1="${i*48}" x2="${W}" y2="${i*48}"/>`).join("")}
        </g>
        ${edgeSvg}
        ${roomSvg}
      </svg>
    </div>
  `;
}

// Opens the blueprint in a full modal overlay at a much larger size —
// the inline version inside the raid popup is constrained by the popup's
// own scroll panel, so complex maps with 8+ rooms can feel cramped. The
// modal reuses the exact same renderMapBlueprint output with the same
// room toggle wiring, and any changes persist back to selectedRooms and
// immediately refresh the underlying raid popup when the modal closes.
function openBlueprintModal(map) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.style.zIndex = "400"; // above the raid select screen (z-index 150)

  function renderModalContent() {
    return `
      <div class="modal-box" style="max-width:1100px;width:100%;max-height:90vh;padding:0;overflow:hidden;display:flex;flex-direction:column;">
        <div class="modal-header" style="padding:14px 16px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
          <span><span class="dot" style="background:var(--brass-bright);animation:none;"></span> ${escapeHtml(map.name).toUpperCase()} — ROUTE PLANNER</span>
          <button class="btn secondary" id="closeBlueprintModalBtn" style="padding:4px 12px;">Done</button>
        </div>
        <div class="blueprint-modal-scroll" style="padding:16px;flex:1;overflow:auto;display:flex;flex-direction:column;">
          <div class="blueprint-modal-inner">${renderMapBlueprint(map, selectedRooms)}</div>
        </div>
      </div>
    `;
  }

  overlay.innerHTML = renderModalContent();
  document.body.appendChild(overlay);

  function wireModalRooms() {
    overlay.querySelectorAll(".blueprint-room.toggleable").forEach((g) => {
      g.addEventListener("click", () => {
        const roomId = g.getAttribute("data-room-id");
        if (!roomId) return;
        const idx = selectedRooms.indexOf(roomId);
        if (idx === -1) {
          selectedRooms.push(roomId);
        } else {
          selectedRooms.splice(idx, 1);
          const layout = MAP_LAYOUTS[map.id];
          if (layout) {
            const adj = {};
            layout.rooms.forEach(r => { adj[r.id] = []; });
            layout.edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
            let changed = true;
            while (changed) {
              changed = false;
              selectedRooms = selectedRooms.filter(id => {
                const room = layout.rooms.find(r => r.id === id);
                if (room && room.type === "entry") return true;
                const reachable = adj[id] && adj[id].some(n => selectedRooms.includes(n));
                if (!reachable) { changed = true; return false; }
                return true;
              });
            }
          }
        }
        // Re-render the modal so the blueprint updates immediately. Like
        // refreshRaidScreen() does for the inline popup, capture and
        // restore the scroll container's scrollTop across the rebuild —
        // replacing innerHTML recreates .blueprint-modal-scroll from
        // scratch, which otherwise snaps it back to the top on every
        // single room toggle.
        const scrollEl = overlay.querySelector(".blueprint-modal-scroll");
        const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
        overlay.innerHTML = renderModalContent();
        wireModalRooms();
        const scrollElAfter = overlay.querySelector(".blueprint-modal-scroll");
        if (scrollElAfter) scrollElAfter.scrollTop = scrollTop;
      });
    });

    const closeBtn = overlay.querySelector("#closeBlueprintModalBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        overlay.remove();
        // Refresh the underlying raid popup so its inline blueprint and
        // duration display reflect whatever the player changed in the modal
        refreshRaidScreen();
      });
    }
  }

  wireModalRooms();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      refreshRaidScreen();
    }
  });
}

function renderRaidMapPopup(activeMap, selScav) {
  // Use the path-adjusted duration rather than the raw map duration —
  // the player has chosen which rooms to visit, and that directly sets
  // how long the raid takes (see raidPathDuration). The base map.duration
  // is now the theoretical maximum (visiting every room), not the default.
  const pathDur = raidPathDuration(activeMap, selectedRooms);
  const duration = Math.max(8, Math.round(pathDur * raidDurationMult()));
  const gearFindPct = Math.round(gearFindChance(activeMap) * 100);
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
        ${renderScavPickExtras(scav, activeMap)}
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
        ${renderMapBlueprint(activeMap, selectedRooms)}
        <div class="section-divider">Choose a scav</div>
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
      AmbientPlayer.stop();
      renderAll();
    });
  }

  document.querySelectorAll(".rs-tab").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const tab = tabBtn.getAttribute("data-raid-tab");
      if (tab === raidScreenTab) return;
      raidScreenTab = tab;
      // The Arena tab has exactly one site and no further pick-a-card
      // step the way Region/Dungeons do, so its ambience starts the
      // moment the tab itself opens rather than waiting on a selection
      // that doesn't exist here. Region/Dungeons clear whatever was
      // playing on the way out — each of those tabs starts its own
      // ambience only once something is actually selected (see the
      // map-dot and dungeon-card handlers below), not just from opening
      // the tab.
      if (tab === "arena") {
        AmbientPlayer.playSite("arena");
      } else {
        AmbientPlayer.stop();
      }
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
        // Reset room selection for the new map, defaulting to the
        // entry room only — the player chooses which others to add.
        const layout = MAP_LAYOUTS[selectedMapId];
        selectedRooms = layout ? [layout.rooms.find(r => r.type === "entry").id] : [];
        AmbientPlayer.playSite(selectedMapId);
        refreshRaidScreen();
      });
    });

    const closePopupBtn = document.getElementById("closeMapPopupBtn");
    if (closePopupBtn) {
      closePopupBtn.addEventListener("click", () => {
        selectedMapId = null;
        selectedScavId = null;
        selectedRooms = [];
        AmbientPlayer.stop();
        refreshRaidScreen();
      });
    }

    const expandBlueprintBtn = document.getElementById("expandBlueprintBtn");
    if (expandBlueprintBtn && selectedMapId) {
      expandBlueprintBtn.addEventListener("click", () => {
        const activeMap = MAPS.find((m) => m.id === selectedMapId);
        if (activeMap) openBlueprintModal(activeMap);
      });
    }

    // Blueprint room toggles — each clickable room in the path planner
    // adds or removes itself from selectedRooms, then refreshes so the
    // blueprint SVG and the duration display both update immediately.
    // The entry room is never in the toggleable class (see renderMapBlueprint)
    // and the exit room can be toggled (it's just another room, not
    // forced — a run that ends mid-map is a valid, faster choice).
    document.querySelectorAll(".blueprint-room.toggleable").forEach((g) => {
      g.addEventListener("click", () => {
        const roomId = g.getAttribute("data-room-id");
        if (!roomId || !selectedMapId) return;
        const idx = selectedRooms.indexOf(roomId);
        if (idx === -1) {
          selectedRooms.push(roomId);
        } else {
          selectedRooms.splice(idx, 1);
          // If removing this room made other rooms unreachable, drop them too.
          // Reachable = has at least one selected neighbour, or is entry.
          const layout = MAP_LAYOUTS[selectedMapId];
          if (layout) {
            const adj = {};
            layout.rooms.forEach(r => { adj[r.id] = []; });
            layout.edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
            let changed = true;
            while (changed) {
              changed = false;
              selectedRooms = selectedRooms.filter(id => {
                const room = layout.rooms.find(r => r.id === id);
                if (room && room.type === "entry") return true;
                const reachable = adj[id] && adj[id].some(n => selectedRooms.includes(n));
                if (!reachable) { changed = true; return false; }
                return true;
              });
            }
          }
        }
        refreshRaidScreen();
      });
    });

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
      AmbientPlayer.playSite(selectedDungeonId);
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

  const rows = recent.map((entry, idx) => {
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
      <div class="raidlog-row" data-log-index="${idx}" style="cursor:pointer;" title="Click to view full report">
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

// ===== TUTORIAL =====
const TUTORIAL_KEY = "outpost-tutorial-done";

const TUTORIAL_STEPS = [
  {
    id: "welcome",
    title: "Welcome to OUTPOST",
    text: "You're in charge of a small camp of survivors. The goal is simple: keep your people alive, scavenge what you can, and build something that lasts. This tutorial will walk you through the basics — or skip it if you've been here before.",
    highlight: null,
    action: "next",
  },
  {
    id: "roster",
    title: "Your Scavengers",
    text: "These are your scavs — the people doing the actual work. Tap \"Open Roster\" to see them, then tap any scav card to open their character sheet.",
    highlight: "#openRosterScreenBtn",
    action: "next",
  },
  {
    id: "loadout",
    title: "Equip Before You Send",
    text: "By default your scavs go out with fists, rags, and a basic satchel. That's survivable but not great. From the Roster, tap a scav's loadout button to equip better gear from your stash — it directly affects their survival odds.",
    highlight: "#openRosterScreenBtn",
    action: "next",
  },
  {
    id: "raid_launcher",
    title: "Send Them Out",
    text: "This is the raid launcher. Tap \"Open Raid Map\", pick a scav, pick a map, and send them. Every map has a risk level — start with the Strip Mall or Riverside Marina. Higher risk means better loot and worse odds.",
    highlight: "#openRaidScreenBtn",
    action: "next",
  },
  {
    id: "radio_log",
    title: "The Radio Log",
    text: "Once a scav is out, their progress shows here. You'll see a timer, their current status, and occasionally something they muttered to themselves. When they return, click the entry to see what they brought back.",
    highlight: ".radio-log",
    action: "next",
  },
  {
    id: "buildings",
    title: "Build and Expand",
    text: "Tap \"Open Camp\" to see your buildings, then tap any building silhouette there to build or upgrade it. The Infirmary is usually the first thing worth building — scavs get hurt, and without one they just have to wait it out. Buildings are bought with scrap and gold from raids.",
    highlight: "#openCampScreenBtn",
    action: "next",
  },
  {
    id: "resources",
    title: "Resources",
    text: "Scrap and gold come from raids. Meds heal injuries. Food gets consumed every day — if it runs out, morale drops. Intel unlocks research. Keep an eye on your totals as you spend them across camp and raids.",
    highlight: null,
    action: "next",
  },
  {
    id: "done",
    title: "That's the Core of It",
    text: "Raid, loot, build, repeat. There's a lot more — skill trees, dungeons, traders, quests — but all of it grows from this loop. Good luck out there.",
    highlight: null,
    action: "next",
  },
];

let tutorialStep = 0;
let tutorialOverlay = null;
let tutorialHighlightEl = null;
let tutorialRingEl = null;

function isTutorialDone() {
  try { return !!localStorage.getItem(TUTORIAL_KEY); } catch { return true; }
}

function markTutorialDone() {
  try { localStorage.setItem(TUTORIAL_KEY, "1"); } catch {}
}

function closeTutorial() {
  markTutorialDone();
  if (tutorialOverlay) { tutorialOverlay.remove(); tutorialOverlay = null; }
  if (tutorialRingEl) { tutorialRingEl.remove(); tutorialRingEl = null; }
  tutorialHighlightEl = null;
}

// Positions the tutorial tooltip near its target element, staying on-screen.
function positionTutorialCard(card, targetEl) {
  if (!targetEl) {
    // No target — center on screen
    card.style.position = "fixed";
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
    card.style.bottom = "auto";
    card.style.right = "auto";
    return;
  }
  const rect = targetEl.getBoundingClientRect();
  const cardW = 300;
  const cardH = 180;
  const pad = 16;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  card.style.transform = "none";
  card.style.position = "fixed";

  // Prefer below, then above, then right, then left
  if (rect.bottom + cardH + pad < vh) {
    card.style.top = (rect.bottom + pad) + "px";
    card.style.bottom = "auto";
  } else if (rect.top - cardH - pad > 0) {
    card.style.top = "auto";
    card.style.bottom = (vh - rect.top + pad) + "px";
  } else if (rect.right + cardW + pad < vw) {
    card.style.top = Math.max(pad, rect.top) + "px";
    card.style.bottom = "auto";
    card.style.left = (rect.right + pad) + "px";
    card.style.right = "auto";
    return;
  } else {
    card.style.top = Math.max(pad, rect.top) + "px";
    card.style.bottom = "auto";
    card.style.right = (vw - rect.left + pad) + "px";
    card.style.left = "auto";
    return;
  }

  // Horizontal alignment: center on target, clamp to viewport
  const idealLeft = rect.left + (rect.width / 2) - (cardW / 2);
  card.style.left = Math.min(vw - cardW - pad, Math.max(pad, idealLeft)) + "px";
  card.style.right = "auto";
}

function showTutorialStep(stepIndex) {
  // Clean up previous highlight ring
  if (tutorialRingEl) { tutorialRingEl.remove(); tutorialRingEl = null; }

  const step = TUTORIAL_STEPS[stepIndex];
  if (!step) { closeTutorial(); return; }

  // Find the highlight target — first matching element
  let targetEl = null;
  if (step.highlight) {
    const selectors = step.highlight.split(", ");
    for (const sel of selectors) {
      targetEl = document.querySelector(sel.trim());
      if (targetEl) break;
    }
  }

  // Add a pulsing ring directly around the target element
  if (targetEl) {
    const ring = document.createElement("div");
    ring.className = "tutorial-ring";
    const r = targetEl.getBoundingClientRect();
    ring.style.position = "fixed";
    ring.style.left = (r.left - 4) + "px";
    ring.style.top = (r.top - 4) + "px";
    ring.style.width = (r.width + 8) + "px";
    ring.style.height = (r.height + 8) + "px";
    ring.style.pointerEvents = "none";
    ring.style.zIndex = "9998";
    document.body.appendChild(ring);
    tutorialRingEl = ring;
  }

  // Build or update the tooltip card
  if (!tutorialOverlay) {
    tutorialOverlay = document.createElement("div");
    tutorialOverlay.className = "tutorial-card";
    tutorialOverlay.style.zIndex = "9999";
    document.body.appendChild(tutorialOverlay);
  }

  const isLast = stepIndex >= TUTORIAL_STEPS.length - 1;
  tutorialOverlay.innerHTML = `
    <div class="tutorial-progress">${stepIndex + 1} / ${TUTORIAL_STEPS.length}</div>
    <div class="tutorial-title">${escapeHtml(step.title)}</div>
    <div class="tutorial-text">${escapeHtml(step.text)}</div>
    <div class="tutorial-btns">
      <button class="btn secondary" id="tutSkipBtn">Skip tutorial</button>
      <button class="btn" id="tutNextBtn">${isLast ? "Got it" : "Next →"}</button>
    </div>
  `;

  positionTutorialCard(tutorialOverlay, targetEl);

  tutorialOverlay.querySelector("#tutNextBtn").addEventListener("click", () => {
    tutorialStep++;
    showTutorialStep(tutorialStep);
  });
  tutorialOverlay.querySelector("#tutSkipBtn").addEventListener("click", closeTutorial);
}

function startTutorial() {
  if (isTutorialDone()) return;
  tutorialStep = 0;
  showTutorialStep(0);

  // Keep the ring positioned correctly if the window resizes
  window.addEventListener("resize", () => {
    if (!tutorialOverlay) return;
    showTutorialStep(tutorialStep);
  });
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
        <div class="panel">
          <div class="panel-header">Camp</div>
          <div class="panel-body">${renderCampPanelCard()}</div>
        </div>
      </div>
    </div>
    ${campScreenOpen ? renderCampScreen() : ""}
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

  // Raid log rows — click to view the full field report for that raid
  document.querySelectorAll("[data-log-index]").forEach(row => {
    row.addEventListener("click", () => {
      const idx = parseInt(row.getAttribute("data-log-index"), 10);
      if (!isNaN(idx)) showStoredFieldReport(idx);
    });
  });

  const openRaidLogBtn = document.getElementById("openRaidLogBtn");
  if (openRaidLogBtn) {
    openRaidLogBtn.addEventListener("click", () => openRaidLogScreen());
  }

  const openCodexBtn = document.getElementById("openCodexBtn");
  if (openCodexBtn) {
    openCodexBtn.addEventListener("click", () => openCodexScreen());
  }

  const openOutpostBtn = document.getElementById("openOutpostBtn");
  if (openOutpostBtn) {
    openOutpostBtn.addEventListener("click", () => openOutpostScreen());
  }

  document.querySelectorAll("[data-pending-raid-id]").forEach((entry) => {
    entry.dataset.wired = "true"; // keeps refreshRadioLogInPlace's "already wired" guard consistent with cards wired via this full-render path too
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

  // Intervention buttons — wired here on full render, also wired in
  // refreshRadioLogInPlace when the panel first appears mid-raid.
  document.querySelectorAll("[data-intervention-type]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't bubble up to the raid entry click handler
      const type = btn.getAttribute("data-intervention-type");
      const panel = btn.closest("[data-intervention-raid]");
      if (!panel) return;
      const raidId = panel.getAttribute("data-intervention-raid");
      if (resolveRaidIntervention(raidId, type)) {
        renderAll();
        if (type === "extract_early") {
          pushToast("Extracting early — coming back with what they've found.");
        } else if (type === "push_deeper") {
          pushToast("Pushing deeper. Higher risk, better haul.");
        }
      }
    });
  });

  const openRaidBtn = document.getElementById("openRaidScreenBtn");
  if (openRaidBtn) {
    openRaidBtn.addEventListener("click", () => {
      raidScreenOpen = true;
      // raidScreenTab/selectedMapId/selectedDungeonId all persist across
      // opens (they're plain module-level variables, not reset when the
      // screen closes) — reopening straight onto the Arena tab, or onto
      // Region/Dungeons with something already selected, needs to start
      // the matching ambience here, since none of the in-screen click
      // handlers that normally do that will fire on a reopen.
      if (raidScreenTab === "arena") {
        AmbientPlayer.playSite("arena");
      } else if (raidScreenTab === "region" && selectedMapId) {
        AmbientPlayer.playSite(selectedMapId);
      } else if (raidScreenTab === "dungeons" && selectedDungeonId) {
        AmbientPlayer.playSite(selectedDungeonId);
      }
      renderAll();
    });
  }

  const openRosterScreenBtn = document.getElementById("openRosterScreenBtn");
  if (openRosterScreenBtn) {
    openRosterScreenBtn.addEventListener("click", () => openRosterScreen());
  }

  const openCampScreenBtn = document.getElementById("openCampScreenBtn");
  if (openCampScreenBtn) {
    openCampScreenBtn.addEventListener("click", () => {
      campScreenOpen = true;
      renderAll();
    });
  }
  const closeCampScreenBtn = document.getElementById("closeCampScreenBtn");
  if (closeCampScreenBtn) {
    closeCampScreenBtn.addEventListener("click", () => {
      campScreenOpen = false;
      renderAll();
    });
  }

  // Empty-roster (all scavs dead) recruit + reset buttons — only present
  // in renderRosterSummaryCard when living.length === 0.
  const emptyRecruitBtn = document.getElementById("emptyRecruitBtn");
  if (emptyRecruitBtn) {
    emptyRecruitBtn.addEventListener("click", () => {
      const result = recruitScav();
      if (result && result.ok) {
        pushToast("New scav recruited. The camp isn't done yet.");
        renderAll();
      }
    });
  }
  const emptyResetBtn = document.getElementById("emptyResetBtn");
  if (emptyResetBtn) {
    wireConfirmButton(emptyResetBtn, "Click again to wipe everything", () => {
      wipeProgress();
    });
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
  // Checked right here, immediately after upkeep — checkLeaderElectionTrigger
  // (called inside checkDailyUpkeep's catch-up loop) is the only place
  // STATE.pendingLeaderElection ever gets set to true, so this is the
  // earliest point in the tick it could possibly need showing. Same
  // modal-overlay guard as every other modal-opening site in this
  // function — if something else already has a modal open this tick,
  // this waits; nothing here marks the trigger as "handled" until the
  // player actually picks someone (see chooseLeader), so it isn't lost.
  if (STATE.pendingLeaderElection && !document.querySelector(".modal-overlay")) {
    showLeaderElectionModal();
    return;
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
    } else if (STATE.pendingCrossroads && !document.querySelector(".modal-overlay")) {
      showCrossroadsModal();
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
  // Catch-all retry for a pending event/boss that exists in STATE but
  // never actually got its modal shown — this can happen if it first
  // fired on a tick where some other modal (a field report, a camp
  // event, etc.) was already open, blocking the same-tick show calls
  // above. Those only fire on the exact tick hadBossEncounter/
  // hadRaidEvent was freshly true; nothing previously re-checked "is
  // there an unshown pending state from an earlier tick" the way
  // activeModalRaid already does for field reports. Runs every tick
  // (not gated behind hadBossEncounter/hadRaidEvent, which are both
  // false here) specifically to close that gap — without it, a raid
  // with such a pending state would now hang forever, since
  // checkRaidCompletions correctly refuses to resolve a raid while a
  // choice is still unanswered, but nothing was prompting the player to
  // actually answer it.
  if (!document.querySelector(".modal-overlay")) {
    const stuckBossRaid = STATE.activeRaids.find((r) => r.pendingBoss);
    const stuckEventRaid = STATE.activeRaids.find((r) => r.pendingEvent);
    if (stuckBossRaid) {
      showBossEncounterModal(stuckBossRaid.id);
      return;
    } else if (stuckEventRaid) {
      showRaidEventModal(stuckEventRaid.id);
      return;
    }
  }
  // re-render radio log progress bars even without completions —
  // refreshRadioLogInPlace patches each card's bar/ETA/bubble in place
  // and returns true when that's sufficient (the same set of raids is
  // still active); only on a structural change (a raid started or
  // resolved since the last tick) does it return false, falling back to
  // the full rebuild below. See refreshRadioLogInPlace's own comment for
  // why this exists at all — replacing the whole subtree every tick was
  // what caused the chat bubble to visibly flicker, since a freshly
  // recreated element replays its CSS fade-in animation even when its
  // text content hasn't actually changed.
  const radioContainer = document.querySelector(".radio-log");
  if (STATE.activeRaids.length > 0 || (radioContainer && !radioContainer.classList.contains("empty"))) {
    const patchedInPlace = refreshRadioLogInPlace();
    if (!patchedInPlace) {
      const existing = document.querySelector(".radio-log");
      if (existing) {
        existing.outerHTML = renderRadioLog();
        document.querySelectorAll("[data-pending-raid-id]").forEach((entry) => {
          entry.dataset.wired = "true"; // keeps refreshRadioLogInPlace's own "already wired" guard consistent with cards created via this path too
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
  // Attached once, here, rather than inside wireEvents() (which reruns
  // on every renderAll()) — a delegated listener on document doesn't
  // need re-attaching as the DOM underneath it changes, and doing it
  // there would stack a fresh duplicate listener on every single
  // re-render, playing the click sound multiple times per click after
  // enough renders had happened. Scoped to actual <button> elements
  // specifically (covers every primary action: launch, confirm, open
  // menu, equip, navigate) rather than every clickable div/card in the
  // game — a click sound on every item tap while browsing a long stash
  // list would get noisy fast; on every button press is the standard,
  // expected amount.
  document.addEventListener("click", (e) => {
    if (e.target.closest("button")) playUiClick();
  });

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
  // Tutorial runs after the first renderAll so the DOM is fully populated
  // and querySelector can actually find the elements being highlighted.
  // Only shows on a player's first session — isTutorialDone() checks
  // localStorage, so returning players skip it automatically.
  startTutorial();
  if (activeModalRaid) {
    showFieldReport(activeModalRaid);
  } else if (STATE.campEvent) {
    showCampEventModal();
  } else if (STATE.pendingCrossroads) {
    showCrossroadsModal();
  } else {
    const pendingBossRaid = STATE.activeRaids.find((r) => r.pendingBoss);
    const pendingRaid = STATE.activeRaids.find((r) => r.pendingEvent);
    if (pendingBossRaid) showBossEncounterModal(pendingBossRaid.id);
    else if (pendingRaid) showRaidEventModal(pendingRaid.id);
  }
  tickInterval = setInterval(gameTick, 1000);
}

init();
