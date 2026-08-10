export type MediaType = 'movie' | 'show';
export type Phase = 1 | 2 | 3 | 4 | 5 | 6;

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
  synopsis: string;
  characters: string[];
}

// The Infinity Saga & Multiverse Saga in chronological timeline order
export const mcuTimeline: MCUItem[] = [
  {
    id: "agent-carter-s1",
    title: "Agent Carter (Season 1)",
    type: "show",
    phase: 1,
    year: 2015,
    runtime: 340,
    timelineOrder: 2.1,
    extended: true,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMwMTcxMTIyNV5BMl5BanBnXkFtZTgwMzc0OTc2MzE@._V1_SX300.jpg",
    synopsis: "In 1946, Peggy Carter balances routine office work with secret missions for Howard Stark.",
    characters: ["Peggy Carter", "Howard Stark", "Edwin Jarvis"],
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    ]
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_QL75_UY562_CR7,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_QL75_UX380_CR0,1,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTMyZTA0ZTItYjY3Yi00ODNjLWExYTgtYzgxZTk0NTg0Y2FlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODVkY2ZmZTAtYzFhMi00YzZlLWE2YWMtMDBiYjY2OTU4ZWM0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    ]
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTMxMmM1ODItMTZiMS00NjI1LWEwODctMjQ4ZjY4ODliNDI0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmJkOGNlNmEtMmQyOS00YjZiLTgxM2EtNmEzNzUzNTU5ODYwXkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTBiZjI2M2UtZTNiNy00NmU4LWJiMjYtZjk4MDIzMzhlMjFlXkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGU5ZDBlOTAtOTZmYS00MWE0LTg0NzktNDcxZGJhN2FhZmM2XkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzlkNjBmOWUtOTgzZS00OWIzLThkNWEtZTg5MGY2ODAyYzZjXkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjg4ZTQ1MjctNzEyMS00YWM2LTk1ZTQtNDU3ZDJjNjhhMDhkXkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWY5NDY1ZjItZDQxMy00MTAzLTgyOGQtNTQxYjFiMzZjMjUyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMThkYWY5ZjQtYjJlMS00MDFmLWFkYzEtODEzZjg5YWFmMGY4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNmYzYzA2NzMtOTVmMC00ZDY4LThlMDctZmUyN2NlMjQ2ODViXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    ]
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzczOWM4MzItMWMyOS00ZDczLWIxMzctNzBmYTgzOTI1MzI3XkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGFiYzI1ZDctM2U1Zi00ZWI5LWFiMmQtNGU0NTU5MTg3OWM3XkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDcyZTNjOTEtNzc5Yy00Y2UzLThkMWYtNTY4YmM4OWI5OTMzXkEyXkFqcGc@._V1_SX300.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
  }
];

export const AVENGERS_DOOMSDAY_RELEASE_DATE = "2026-12-18T06:00:00Z";
