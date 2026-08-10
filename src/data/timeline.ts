export type MediaType = 'movie' | 'show';
export type Phase = 1 | 2 | 3 | 4 | 5 | 6 | 'Legacy';

export interface MCUItem {
  id: string;
  title: string;
  type: MediaType;
  phase: Phase;
  year: number;
  runtime: number; // in minutes (total for shows)
  timelineOrder: number;
  posterUrl?: string;
  extended?: boolean;
  importance?: "imp" | "optional";
  synopsis: string;
  characters: string[];
}

// The Infinity Saga & Multiverse Saga in chronological timeline order
export const mcuTimeline: MCUItem[] = [
  {
    id: "blade-1",
    title: "Blade",
    year: 1998,
    runtime: 120,
    synopsis: "A half-vampire, half-mortal man becomes a protector of the mortal race.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.01,
    characters: [],
    posterUrl: "/posters/blade-1.jpg"
  },
  {
    id: "x-men",
    title: "X-Men",
    year: 2000,
    runtime: 104,
    synopsis: "Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.02,
    characters: [],
    posterUrl: "/posters/x-men.jpg"
  },
  {
    id: "blade-2",
    title: "Blade II",
    year: 2002,
    runtime: 117,
    synopsis: "Blade forms an uneasy alliance with the vampire council in order to combat the Reapers.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.03,
    characters: [],
    posterUrl: "/posters/blade-2.jpg"
  },
  {
    id: "spider-man-1",
    title: "Spider-Man",
    year: 2002,
    runtime: 121,
    synopsis: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.04,
    characters: [],
    posterUrl: "/posters/spider-man-1.jpg"
  },
  {
    id: "x2",
    title: "X2: X-Men United",
    year: 2003,
    runtime: 134,
    synopsis: "When anti-mutant Colonel William Stryker kidnaps Professor X and attacks his school, the X-Men must ally with their archenemy Magneto.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.05,
    characters: [],
    posterUrl: "/posters/x2.jpg"
  },
  {
    id: "daredevil",
    title: "Daredevil",
    year: 2003,
    runtime: 103,
    synopsis: "A man blinded by toxic waste which also enhanced his remaining senses fights crime as an acrobatic martial arts superhero.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.06,
    characters: [],
    posterUrl: "/posters/daredevil.jpg"
  },
  {
    id: "blade-trinity",
    title: "Blade: Trinity",
    year: 2004,
    runtime: 113,
    synopsis: "Blade is framed for numerous murders and joins forces with the Nightstalkers.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.07,
    characters: [],
    posterUrl: "/posters/blade-trinity.jpg"
  },
  {
    id: "spider-man-2",
    title: "Spider-Man 2",
    year: 2004,
    runtime: 127,
    synopsis: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.08,
    characters: [],
    posterUrl: "/posters/spider-man-2.jpg"
  },
  {
    id: "elektra",
    title: "Elektra",
    year: 2005,
    runtime: 97,
    synopsis: "Elektra the warrior survives a near-death experience, becomes an assassin-for-hire, and tries to protect her two latest targets.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.09,
    characters: [],
    posterUrl: "/posters/elektra.jpg"
  },
  {
    id: "fantastic-four-2005",
    title: "Fantastic Four",
    year: 2005,
    runtime: 106,
    synopsis: "A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.1,
    characters: [],
    posterUrl: "/posters/fantastic-four-2005.jpg"
  },
  {
    id: "x-men-last-stand",
    title: "X-Men: The Last Stand",
    year: 2006,
    runtime: 104,
    synopsis: "The human government develops a cure for mutations, and Jean Grey becomes a dark uncontrollable force.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.11,
    characters: [],
    posterUrl: "/posters/x-men-last-stand.jpg"
  },
  {
    id: "spider-man-3",
    title: "Spider-Man 3",
    year: 2007,
    runtime: 139,
    synopsis: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.12,
    characters: [],
    posterUrl: "/posters/spider-man-3.jpg"
  },
  {
    id: "fantastic-four-silver-surfer",
    title: "Fantastic Four: Rise of the Silver Surfer",
    year: 2007,
    runtime: 92,
    synopsis: "The Fantastic Four learn that they aren't the only super-powered beings in the universe.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.13,
    characters: [],
    posterUrl: "/posters/fantastic-four-silver-surfer.jpg"
  },
  {
    id: "ghost-rider",
    title: "Ghost Rider",
    year: 2007,
    runtime: 110,
    synopsis: "Stunt motorcyclist Johnny Blaze gives up his soul to become a hellblazing vigilante.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.14,
    characters: [],
    posterUrl: "/posters/ghost-rider.jpg"
  },
  {
    id: "x-men-origins-wolverine",
    title: "X-Men Origins: Wolverine",
    year: 2009,
    runtime: 107,
    synopsis: "The early years of James Logan, featuring his rivalry with his brother Victor Creed.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.15,
    characters: [],
    posterUrl: "/posters/x-men-origins-wolverine.jpg"
  },
  {
    id: "ghost-rider-spirit",
    title: "Ghost Rider: Spirit of Vengeance",
    year: 2011,
    runtime: 95,
    synopsis: "Johnny Blaze, tortured by the Ghost Rider's curse, gets a chance of redemption through protecting the Devil's son.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.16,
    characters: [],
    posterUrl: "/posters/ghost-rider-spirit.jpg"
  },
  {
    id: "x-men-first-class",
    title: "X-Men: First Class",
    year: 2011,
    runtime: 131,
    synopsis: "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.17,
    characters: [],
    posterUrl: "/posters/x-men-first-class.jpg"
  },
  {
    id: "amazing-spider-man-1",
    title: "The Amazing Spider-Man",
    year: 2012,
    runtime: 136,
    synopsis: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.18,
    characters: [],
    posterUrl: "/posters/amazing-spider-man-1.jpg"
  },
  {
    id: "the-wolverine",
    title: "The Wolverine",
    year: 2013,
    runtime: 126,
    synopsis: "Wolverine comes to Japan to meet an old friend whose life he saved years ago.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.19,
    characters: [],
    posterUrl: "/posters/the-wolverine.jpg"
  },
  {
    id: "amazing-spider-man-2",
    title: "The Amazing Spider-Man 2",
    year: 2014,
    runtime: 142,
    synopsis: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.2,
    characters: [],
    posterUrl: "/posters/amazing-spider-man-2.jpg"
  },
  {
    id: "x-men-dofp",
    title: "X-Men: Days of Future Past",
    year: 2014,
    runtime: 132,
    synopsis: "The X-Men send Wolverine to the past in a desperate effort to change history.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.21,
    characters: [],
    posterUrl: "/posters/x-men-dofp.jpg"
  },
  {
    id: "fantastic-four-2015",
    title: "Fantastic Four",
    year: 2015,
    runtime: 100,
    synopsis: "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.22,
    characters: [],
    posterUrl: "/posters/fantastic-four-2015.jpg"
  },
  {
    id: "deadpool-1",
    title: "Deadpool",
    year: 2016,
    runtime: 108,
    synopsis: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.23,
    characters: [],
    posterUrl: "/posters/deadpool-1.jpg"
  },
  {
    id: "x-men-apocalypse",
    title: "X-Men: Apocalypse",
    year: 2016,
    runtime: 144,
    synopsis: "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.24,
    characters: [],
    posterUrl: "/posters/x-men-apocalypse.jpg"
  },
  {
    id: "logan",
    title: "Logan",
    year: 2017,
    runtime: 137,
    synopsis: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.25,
    characters: [],
    posterUrl: "/posters/logan.jpg"
  },
  {
    id: "venom-1",
    title: "Venom",
    year: 2018,
    runtime: 112,
    synopsis: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.26,
    characters: [],
    posterUrl: "/posters/venom-1.jpg"
  },
  {
    id: "deadpool-2",
    title: "Deadpool 2",
    year: 2018,
    runtime: 119,
    synopsis: "Foul-mouthed mutant mercenary Wade Wilson brings together a team of fellow mutant rogues.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.27,
    characters: [],
    posterUrl: "/posters/deadpool-2.jpg"
  },
  {
    id: "dark-phoenix",
    title: "Dark Phoenix",
    year: 2019,
    runtime: 113,
    synopsis: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.28,
    characters: [],
    posterUrl: "/posters/dark-phoenix.jpg"
  },
  {
    id: "new-mutants",
    title: "The New Mutants",
    year: 2020,
    runtime: 94,
    synopsis: "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.29,
    characters: [],
    posterUrl: "/posters/new-mutants.jpg"
  },
  {
    id: "venom-ltbc",
    title: "Venom: Let There Be Carnage",
    year: 2021,
    runtime: 97,
    synopsis: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.3,
    characters: [],
    posterUrl: "/posters/venom-ltbc.jpg"
  },
  {
    id: "morbius",
    title: "Morbius",
    year: 2022,
    runtime: 104,
    synopsis: "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.31,
    characters: [],
    posterUrl: "/posters/morbius.jpg"
  },
  {
    id: "madame-web",
    title: "Madame Web",
    year: 2024,
    runtime: 116,
    synopsis: "Cassandra Webb is a New York metropolis paramedic who begins to demonstrate signs of clairvoyance.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.32,
    characters: [],
    posterUrl: "/posters/madame-web.jpg"
  },
  {
    id: "venom-last-dance",
    title: "Venom: The Last Dance",
    year: 2024,
    runtime: 110,
    synopsis: "Eddie and Venom are on the run. Hunted by both of their worlds.",
    type: "movie",
    phase: "Legacy",
    importance: "optional",
    timelineOrder: 0.33,
    characters: [],
    posterUrl: "/posters/venom-last-dance.jpg"
  },
  {
    id: "ca-first-avenger",
    title: "Captain America: The First Avenger",
    type: "movie",
    phase: 1,
    year: 2011,
    runtime: 124,
    timelineOrder: 1,
    synopsis: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    characters: [
      "Steve Rogers",
      "Peggy Carter",
      "Bucky Barnes",
      "Red Skull"
    ],
    posterUrl: "/posters/ca-first-avenger.jpg",
    importance: "imp"
  },
  {
    id: "captain-marvel",
    title: "Captain Marvel",
    type: "movie",
    phase: 3,
    year: 2019,
    runtime: 123,
    timelineOrder: 2,
    synopsis: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    characters: [
      "Carol Danvers",
      "Nick Fury",
      "Talos"
    ],
    posterUrl: "/posters/captain-marvel.jpg",
    importance: "imp"
  },
  {
    id: "agent-carter-s1",
    title: "Agent Carter (Season 1)",
    type: "show",
    phase: 1,
    year: 2015,
    runtime: 340,
    timelineOrder: 2.1,
    extended: true,
    posterUrl: "/posters/agent-carter-s1.jpg",
    synopsis: "In 1946, Peggy Carter balances routine office work with secret missions for Howard Stark.",
    characters: [
      "Peggy Carter",
      "Howard Stark",
      "Edwin Jarvis"
    ],
    importance: "optional"
  },
  {
    id: "iron-man",
    title: "Iron Man",
    type: "movie",
    phase: 1,
    year: 2008,
    runtime: 126,
    timelineOrder: 3,
    synopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    characters: [
      "Tony Stark",
      "Pepper Potts",
      "Obadiah Stane"
    ],
    posterUrl: "/posters/iron-man.jpg",
    importance: "imp"
  },
  {
    id: "iron-man-2",
    title: "Iron Man 2",
    type: "movie",
    phase: 1,
    year: 2010,
    runtime: 124,
    timelineOrder: 4,
    synopsis: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    characters: [
      "Tony Stark",
      "Pepper Potts",
      "Natasha Romanoff",
      "Justin Hammer"
    ],
    posterUrl: "/posters/iron-man-2.jpg",
    importance: "imp"
  },
  {
    id: "incredible-hulk",
    title: "The Incredible Hulk",
    type: "movie",
    phase: 1,
    year: 2008,
    runtime: 112,
    timelineOrder: 5,
    synopsis: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    characters: [
      "Bruce Banner",
      "Betty Ross",
      "Emil Blonsky"
    ],
    posterUrl: "/posters/incredible-hulk.jpg",
    importance: "imp"
  },
  {
    id: "thor",
    title: "Thor",
    type: "movie",
    phase: 1,
    year: 2011,
    runtime: 115,
    timelineOrder: 6,
    synopsis: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    characters: [
      "Thor",
      "Loki",
      "Jane Foster",
      "Odin"
    ],
    posterUrl: "/posters/thor.jpg",
    importance: "imp"
  },
  {
    id: "avengers",
    title: "The Avengers",
    type: "movie",
    phase: 1,
    year: 2012,
    runtime: 143,
    timelineOrder: 7,
    synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    characters: [
      "Tony Stark",
      "Steve Rogers",
      "Thor",
      "Bruce Banner",
      "Natasha Romanoff",
      "Clint Barton",
      "Loki"
    ],
    posterUrl: "/posters/avengers.jpg",
    importance: "imp"
  },
  {
    id: "iron-man-3",
    title: "Iron Man 3",
    type: "movie",
    phase: 2,
    year: 2013,
    runtime: 130,
    timelineOrder: 8,
    synopsis: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    characters: [
      "Tony Stark",
      "Pepper Potts",
      "Aldrich Killian"
    ],
    posterUrl: "/posters/iron-man-3.jpg",
    importance: "imp"
  },
  {
    id: "thor-dark-world",
    title: "Thor: The Dark World",
    type: "movie",
    phase: 2,
    year: 2013,
    runtime: 112,
    timelineOrder: 9,
    synopsis: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
    characters: [
      "Thor",
      "Loki",
      "Jane Foster",
      "Malekith"
    ],
    posterUrl: "/posters/thor-dark-world.jpg",
    importance: "imp"
  },
  {
    id: "ca-winter-soldier",
    title: "Captain America: The Winter Soldier",
    type: "movie",
    phase: 2,
    year: 2014,
    runtime: 136,
    timelineOrder: 10,
    synopsis: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat.",
    characters: [
      "Steve Rogers",
      "Natasha Romanoff",
      "Bucky Barnes",
      "Sam Wilson",
      "Nick Fury"
    ],
    posterUrl: "/posters/ca-winter-soldier.jpg",
    importance: "imp"
  },
  {
    id: "gotg",
    title: "Guardians of the Galaxy",
    type: "movie",
    phase: 2,
    year: 2014,
    runtime: 121,
    timelineOrder: 11,
    synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    characters: [
      "Peter Quill",
      "Gamora",
      "Drax",
      "Rocket",
      "Groot",
      "Ronan"
    ],
    posterUrl: "/posters/gotg.jpg",
    importance: "imp"
  },
  {
    id: "gotg-vol-2",
    title: "Guardians of the Galaxy Vol. 2",
    type: "movie",
    phase: 3,
    year: 2017,
    runtime: 136,
    timelineOrder: 12,
    synopsis: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    characters: [
      "Peter Quill",
      "Gamora",
      "Drax",
      "Rocket",
      "Groot",
      "Ego"
    ],
    posterUrl: "/posters/gotg-vol-2.jpg",
    importance: "imp"
  },
  {
    id: "avengers-aou",
    title: "Avengers: Age of Ultron",
    type: "movie",
    phase: 2,
    year: 2015,
    runtime: 141,
    timelineOrder: 13,
    synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong.",
    characters: [
      "Tony Stark",
      "Steve Rogers",
      "Thor",
      "Bruce Banner",
      "Ultron",
      "Wanda Maximoff"
    ],
    posterUrl: "/posters/avengers-aou.jpg",
    importance: "imp"
  },
  {
    id: "ant-man",
    title: "Ant-Man",
    type: "movie",
    phase: 2,
    year: 2015,
    runtime: 117,
    timelineOrder: 14,
    synopsis: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.",
    characters: [
      "Scott Lang",
      "Hope van Dyne",
      "Hank Pym"
    ],
    posterUrl: "/posters/ant-man.jpg",
    importance: "imp"
  },
  {
    id: "ca-civil-war",
    title: "Captain America: Civil War",
    type: "movie",
    phase: 3,
    year: 2016,
    runtime: 147,
    timelineOrder: 15,
    synopsis: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    characters: [
      "Steve Rogers",
      "Tony Stark",
      "Bucky Barnes",
      "T'Challa",
      "Peter Parker"
    ],
    posterUrl: "/posters/ca-civil-war.jpg",
    importance: "imp"
  },
  {
    id: "black-widow",
    title: "Black Widow",
    type: "movie",
    phase: 4,
    year: 2021,
    runtime: 134,
    timelineOrder: 16,
    synopsis: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    characters: [
      "Natasha Romanoff",
      "Yelena Belova",
      "Alexei Shostakov"
    ],
    posterUrl: "/posters/black-widow.jpg",
    importance: "imp"
  },
  {
    id: "black-panther",
    title: "Black Panther",
    type: "movie",
    phase: 3,
    year: 2018,
    runtime: 134,
    timelineOrder: 17,
    synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    characters: [
      "T'Challa",
      "Killmonger",
      "Shuri",
      "Okoye"
    ],
    posterUrl: "/posters/black-panther.jpg",
    importance: "imp"
  },
  {
    id: "spider-man-homecoming",
    title: "Spider-Man: Homecoming",
    type: "movie",
    phase: 3,
    year: 2017,
    runtime: 133,
    timelineOrder: 18,
    synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.",
    characters: [
      "Peter Parker",
      "Tony Stark",
      "Adrian Toomes",
      "Ned Leeds"
    ],
    posterUrl: "/posters/spider-man-homecoming.jpg",
    importance: "imp"
  },
  {
    id: "doctor-strange",
    title: "Doctor Strange",
    type: "movie",
    phase: 3,
    year: 2016,
    runtime: 115,
    timelineOrder: 19,
    synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    characters: [
      "Stephen Strange",
      "Wong",
      "Mordo",
      "Ancient One"
    ],
    posterUrl: "/posters/doctor-strange.jpg",
    importance: "imp"
  },
  {
    id: "thor-ragnarok",
    title: "Thor: Ragnarok",
    type: "movie",
    phase: 3,
    year: 2017,
    runtime: 130,
    timelineOrder: 20,
    synopsis: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    characters: [
      "Thor",
      "Loki",
      "Hela",
      "Valkyrie",
      "Bruce Banner"
    ],
    posterUrl: "/posters/thor-ragnarok.jpg",
    importance: "imp"
  },
  {
    id: "ant-man-wasp",
    title: "Ant-Man and the Wasp",
    type: "movie",
    phase: 3,
    year: 2018,
    runtime: 118,
    timelineOrder: 21,
    synopsis: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    characters: [
      "Scott Lang",
      "Hope van Dyne",
      "Hank Pym",
      "Janet van Dyne"
    ],
    posterUrl: "/posters/ant-man-wasp.jpg",
    importance: "imp"
  },
  {
    id: "avengers-infinity-war",
    title: "Avengers: Infinity War",
    type: "movie",
    phase: 3,
    year: 2018,
    runtime: 149,
    timelineOrder: 22,
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    characters: [
      "Tony Stark",
      "Thor",
      "Thanos",
      "Steve Rogers",
      "Stephen Strange",
      "Peter Quill"
    ],
    posterUrl: "/posters/avengers-infinity-war.jpg",
    importance: "imp"
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    type: "movie",
    phase: 3,
    year: 2019,
    runtime: 181,
    timelineOrder: 23,
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions.",
    characters: [
      "Tony Stark",
      "Steve Rogers",
      "Thor",
      "Bruce Banner",
      "Natasha Romanoff",
      "Clint Barton",
      "Scott Lang",
      "Thanos"
    ],
    posterUrl: "/posters/avengers-endgame.jpg",
    importance: "imp"
  },
  {
    id: "loki-s1",
    title: "Loki (Season 1)",
    type: "show",
    phase: 4,
    year: 2021,
    runtime: 290,
    timelineOrder: 24,
    synopsis: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame'.",
    characters: [
      "Loki",
      "Mobius",
      "Sylvie",
      "He Who Remains"
    ],
    posterUrl: "/posters/loki-s1.jpg",
    importance: "imp"
  },
  {
    id: "wandavision",
    title: "WandaVision",
    type: "show",
    phase: 4,
    year: 2021,
    runtime: 350,
    timelineOrder: 25,
    synopsis: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
    characters: [
      "Wanda Maximoff",
      "Vision",
      "Agatha Harkness",
      "Monica Rambeau"
    ],
    posterUrl: "/posters/wandavision.jpg",
    importance: "imp"
  },
  {
    id: "shang-chi",
    title: "Shang-Chi and the Legend of the Ten Rings",
    type: "movie",
    phase: 4,
    year: 2021,
    runtime: 132,
    timelineOrder: 26,
    synopsis: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    characters: [
      "Shang-Chi",
      "Katy",
      "Wenwu"
    ],
    posterUrl: "/posters/shang-chi.jpg",
    importance: "imp"
  },
  {
    id: "tfatws",
    title: "The Falcon and the Winter Soldier",
    type: "show",
    phase: 4,
    year: 2021,
    runtime: 320,
    timelineOrder: 27,
    synopsis: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities—and their patience.",
    characters: [
      "Sam Wilson",
      "Bucky Barnes",
      "John Walker",
      "Zemo"
    ],
    posterUrl: "/posters/tfatws.jpg",
    importance: "imp"
  },
  {
    id: "spider-man-ffh",
    title: "Spider-Man: Far From Home",
    type: "movie",
    phase: 3,
    year: 2019,
    runtime: 129,
    timelineOrder: 28,
    synopsis: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    characters: [
      "Peter Parker",
      "Mysterio",
      "Nick Fury",
      "MJ"
    ],
    posterUrl: "/posters/spider-man-ffh.jpg",
    importance: "imp"
  },
  {
    id: "spider-man-nwh",
    title: "Spider-Man: No Way Home",
    type: "movie",
    phase: 4,
    year: 2021,
    runtime: 148,
    timelineOrder: 29,
    synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    characters: [
      "Peter Parker",
      "Stephen Strange",
      "MJ",
      "Ned Leeds",
      "Green Goblin",
      "Doc Ock"
    ],
    posterUrl: "/posters/spider-man-nwh.jpg",
    importance: "imp"
  },
  {
    id: "eternals",
    title: "Eternals",
    type: "movie",
    phase: 4,
    year: 2021,
    runtime: 156,
    timelineOrder: 30,
    synopsis: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
    characters: [
      "Sersi",
      "Ikaris",
      "Kingo",
      "Sprite",
      "Phastos",
      "Makkari",
      "Druig",
      "Gilgamesh",
      "Ajak",
      "Thena"
    ],
    posterUrl: "/posters/eternals.jpg",
    importance: "imp"
  },
  {
    id: "hawkeye",
    title: "Hawkeye",
    type: "show",
    phase: 4,
    year: 2021,
    runtime: 270,
    timelineOrder: 31,
    synopsis: "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate Bishop, who took on the role after the original Avenger, Clint Barton.",
    characters: [
      "Clint Barton",
      "Kate Bishop",
      "Yelena Belova",
      "Kingpin"
    ],
    posterUrl: "/posters/hawkeye.jpg",
    importance: "optional"
  },
  {
    id: "doctor-strange-mom",
    title: "Doctor Strange in the Multiverse of Madness",
    type: "movie",
    phase: 4,
    year: 2022,
    runtime: 126,
    timelineOrder: 32,
    synopsis: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
    characters: [
      "Stephen Strange",
      "Wanda Maximoff",
      "America Chavez",
      "Wong"
    ],
    posterUrl: "/posters/doctor-strange-mom.jpg",
    importance: "imp"
  },
  {
    id: "moon-knight",
    title: "Moon Knight",
    type: "show",
    phase: 4,
    year: 2022,
    runtime: 280,
    timelineOrder: 33,
    synopsis: "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
    characters: [
      "Marc Spector",
      "Steven Grant",
      "Arthur Harrow",
      "Khonshu"
    ],
    posterUrl: "/posters/moon-knight.jpg",
    importance: "optional"
  },
  {
    id: "ms-marvel",
    title: "Ms. Marvel",
    type: "show",
    phase: 4,
    year: 2022,
    runtime: 270,
    timelineOrder: 34,
    synopsis: "Kamala is a superhero fan with an imagination, particularly when it comes to Captain Marvel; Kamala feels like she doesn't fit in at school and sometimes even at home, that is until she gets superpowers like the heroes she's looked up to.",
    characters: [
      "Kamala Khan",
      "Bruno",
      "Nakia"
    ],
    posterUrl: "/posters/ms-marvel.jpg",
    importance: "optional"
  },
  {
    id: "thor-love-thunder",
    title: "Thor: Love and Thunder",
    type: "movie",
    phase: 4,
    year: 2022,
    runtime: 119,
    timelineOrder: 35,
    synopsis: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    characters: [
      "Thor",
      "Jane Foster",
      "Gorr",
      "Valkyrie",
      "Korg"
    ],
    posterUrl: "/posters/thor-love-thunder.jpg",
    importance: "imp"
  },
  {
    id: "she-hulk",
    title: "She-Hulk: Attorney at Law",
    type: "show",
    phase: 4,
    year: 2022,
    runtime: 310,
    timelineOrder: 36,
    synopsis: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
    characters: [
      "Jennifer Walters",
      "Bruce Banner",
      "Wong",
      "Emil Blonsky"
    ],
    posterUrl: "/posters/she-hulk.jpg",
    importance: "optional"
  },
  {
    id: "black-panther-wf",
    title: "Black Panther: Wakanda Forever",
    type: "movie",
    phase: 4,
    year: 2022,
    runtime: 161,
    timelineOrder: 37,
    synopsis: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    characters: [
      "Shuri",
      "Ramonda",
      "Namor",
      "Okoye",
      "Riri Williams"
    ],
    posterUrl: "/posters/black-panther-wf.jpg",
    importance: "imp"
  },
  {
    id: "ant-man-quantumania",
    title: "Ant-Man and the Wasp: Quantumania",
    type: "movie",
    phase: 5,
    year: 2023,
    runtime: 124,
    timelineOrder: 38,
    synopsis: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
    characters: [
      "Scott Lang",
      "Hope van Dyne",
      "Kang the Conqueror",
      "Cassie Lang"
    ],
    posterUrl: "/posters/ant-man-quantumania.jpg",
    importance: "imp"
  },
  {
    id: "gotg-vol-3",
    title: "Guardians of the Galaxy Vol. 3",
    type: "movie",
    phase: 5,
    year: 2023,
    runtime: 150,
    timelineOrder: 39,
    synopsis: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
    characters: [
      "Peter Quill",
      "Rocket",
      "High Evolutionary",
      "Nebula",
      "Mantis",
      "Drax",
      "Groot"
    ],
    posterUrl: "/posters/gotg-vol-3.jpg",
    importance: "imp"
  },
  {
    id: "secret-invasion",
    title: "Secret Invasion",
    type: "show",
    phase: 5,
    year: 2023,
    runtime: 255,
    timelineOrder: 40,
    synopsis: "Fury and Talos try to stop the Skrulls who have infiltrated the highest spheres of the Marvel Universe.",
    characters: [
      "Nick Fury",
      "Talos",
      "Gravik",
      "G'iah"
    ],
    posterUrl: "/posters/secret-invasion.jpg",
    importance: "optional"
  },
  {
    id: "loki-s2",
    title: "Loki (Season 2)",
    type: "show",
    phase: 5,
    year: 2023,
    runtime: 280,
    timelineOrder: 41,
    synopsis: "Loki navigates an ever-expanding and increasingly dangerous multiverse in search of Sylvie, Judge Renslayer, and Miss Minutes.",
    characters: [
      "Loki",
      "Mobius",
      "Sylvie",
      "O.B.",
      "Victor Timely"
    ],
    posterUrl: "/posters/loki-s2.jpg",
    importance: "imp"
  },
  {
    id: "the-marvels",
    title: "The Marvels",
    type: "movie",
    phase: 5,
    year: 2023,
    runtime: 105,
    timelineOrder: 42,
    synopsis: "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.",
    characters: [
      "Carol Danvers",
      "Kamala Khan",
      "Monica Rambeau",
      "Nick Fury",
      "Dar-Benn"
    ],
    posterUrl: "/posters/the-marvels.jpg",
    importance: "imp"
  },
  {
    id: "echo",
    title: "Echo",
    type: "show",
    phase: 5,
    year: 2024,
    runtime: 220,
    timelineOrder: 43,
    synopsis: "Maya Lopez's ruthless behavior in New York City catches up with her in her hometown. She must face her past, reconnect with her Native American roots and embrace the meaning of family and community if she ever hopes to move forward.",
    characters: [
      "Maya Lopez",
      "Kingpin",
      "Daredevil"
    ],
    posterUrl: "/posters/echo.jpg",
    importance: "optional"
  },
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    type: "movie",
    phase: 5,
    year: 2024,
    runtime: 127,
    timelineOrder: 44,
    synopsis: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    characters: [
      "Deadpool",
      "Wolverine",
      "Cassandra Nova"
    ],
    posterUrl: "/posters/deadpool-wolverine.jpg",
    importance: "imp"
  },
  {
    id: "agatha-all-along",
    title: "Agatha All Along",
    type: "show",
    phase: 5,
    year: 2024,
    runtime: 360,
    timelineOrder: 45,
    synopsis: "A spell-bound Agatha Harkness regains freedom thanks to a teen's help. Intriguingly, he begs her to take him on the legendary Witches' Road, a magical gauntlet of trials that rewards surviving witches with what they're missing.",
    characters: [
      "Agatha Harkness",
      "Teen",
      "Rio Vidal"
    ],
    posterUrl: "/posters/agatha-all-along.jpg",
    importance: "optional"
  },
  {
    id: "captain-america-bnw",
    title: "Captain America: Brave New World",
    type: "movie",
    phase: 5,
    year: 2025,
    runtime: 130,
    timelineOrder: 46,
    synopsis: "Sam Wilson finds himself in the middle of an international incident and must discover the reason behind a nefarious global plot.",
    characters: [
      "Sam Wilson",
      "Joaquin Torres",
      "Thaddeus Ross",
      "The Leader"
    ],
    posterUrl: "/posters/captain-america-bnw.jpg",
    importance: "imp"
  },
  {
    id: "thunderbolts",
    title: "Thunderbolts*",
    type: "movie",
    phase: 5,
    year: 2025,
    runtime: 130,
    timelineOrder: 47,
    synopsis: "A group of antiheroes goes on missions for the American government.",
    characters: [
      "Yelena Belova",
      "Bucky Barnes",
      "Red Guardian",
      "Ghost",
      "Taskmaster",
      "US Agent",
      "Valentina"
    ],
    posterUrl: "/posters/thunderbolts.jpg",
    importance: "imp"
  },
  {
    id: "fantastic-four",
    title: "The Fantastic Four: First Steps",
    type: "movie",
    phase: 6,
    year: 2025,
    runtime: 130,
    timelineOrder: 48,
    synopsis: "Set in a retro-futuristic 1960s universe, the Fantastic Four must protect their world.",
    characters: [
      "Reed Richards",
      "Sue Storm",
      "Johnny Storm",
      "Ben Grimm",
      "Galactus"
    ],
    posterUrl: "/posters/fantastic-four.jpg",
    importance: "imp"
  },
  {
    id: "spiderman-brand-new-day",
    title: "Spider-Man: Brand New Day",
    type: "movie",
    phase: 6,
    year: 2026,
    runtime: 145,
    timelineOrder: 49,
    importance: "imp",
    synopsis: "A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers a dangerous change and a powerful new enemy emerges.",
    characters: [
      "Peter Parker",
      "MJ",
      "Ned Leeds",
      "Hulk"
    ],
    posterUrl: "/posters/spiderman-brand-new-day.jpg"
  }
];

export const AVENGERS_DOOMSDAY_RELEASE_DATE = "2026-12-18T06:00:00Z";
