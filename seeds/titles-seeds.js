const { Title } = require("../models");

const titlesData = [
  {
    name: "Animal Crossing: New Horizons",
    genre: "Simulation",
    decade_created: "2020s",
    rating: "9",
    platforms: "Nintendo Switch", // Nintendo Switch
  },
  {
    name: "Ape Escape 3",
    genre: "Platform",
    decade_created: "2000s",
    rating: "8",
    platforms: [14], // PS2
  },
  {
    name: "Assassin's Creed Origins",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "9",
    platforms: [12, 16, 25], // PC, PS4, Xbox One
  },
  {
    name: "Assassin's Creed Unity",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "7",
    platforms: [12, 16, 25], // PC, PS4, Xbox One
  },
  {
    name: "Baldur's Gate III",
    genre: "Action Role-Playing",
    decade_created: "2020s",
    rating: "10",
    platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
  },
  {
    name: "Banjo-Kazooie",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "9",
    platforms: [9, 24], // N64, Xbox 360
  },
  {
    name: "Batman: Arkham Asylum",
    genre: "Action-Adventure",
    decade_created: "2000s",
    rating: "9",
    platforms: "PC", // Nintendo Switch, PC, PS3, PS4, Xbox 360, Xbox One
  },
  {
    name: "Batman: Arkham City",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "9",
    platforms: "PS4", // Nintendo Switch, PC, PS3, PS4, Xbox 360, Xbox One
  },
  {
    name: "Batman: Arkham Knight",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "9",
    platforms: "PS4", // Nintendo Switch, PC, PS4, Xbox One
  },
  {
    name: "Bomberman 64",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "7",
    platforms: [9], // N64
  },
  {
    name: "Call of Duty: Black Ops",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "8",
    platforms: [12, 15, 24], // PC, PS3, Xbox 360
  },
  {
    name: "Call of Duty: Black Ops II",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "9",
    platforms: [12, 15, 24], // PC, PS4, Xbox 360
  },
  {
    name: "Capcom VS. SNK 2 Mark of the Millennium 2001",
    genre: "Fighting",
    decade_created: "2000s",
    rating: "8",
    platforms: [5, 14, 23], // GameCube, PS2, Xbox
  },
  {
    name: "Chip 'n Dale Rescue Rangers",
    genre: "Platform",
    decade_created: "1990s",
    rating: "7",
    platforms: [7], // NES
  },
  {
    name: "Conan Exiles",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "6",
    platforms: [12, 16, 25, 26], // PC, PS4, Xbox One, Xbox Series X/S
  },
  {
    name: "Cyberpunk 2077",
    genre: "Action Role-Playing",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Destiny 2",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "8",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Diablo IV",
    genre: "Action Role-Playing",
    decade_created: "2020s",
    rating: "9",
    platforms: [16, 17, 25, 26], // PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Donkey Kong Country",
    genre: "Platform",
    decade_created: "1990s",
    rating: "8",
    platforms: [3, 4, 20], // Game Boy Advance, Game Boy Color, SNES
  },
  {
    name: "Donkey Kong Country 2: Diddy's Kong Quest",
    genre: "Platform",
    decade_created: "1990s",
    rating: "8",
    platforms: [3, 20], // Game Boy Advance, SNES
  },
  {
    name: "Dragon Ball FighterZ",
    genre: "Fighting",
    decade_created: "2010s",
    rating: "8",
    platforms: "Nintendo Switch", // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "EarthBound",
    genre: "Role-Playing",
    decade_created: "1990s",
    rating: "9",
    platforms: [3, 20], // Game Boy Advance, SNES
  },
  {
    name: "Elden Ring",
    genre: "Action Role-Playing",
    decade_created: "2020s",
    rating: "10",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "The Elder Scrolls V: Skyrim",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "9",
    platforms: [12, 15, 16, 17, 24, 25, 26], // PC, PS3, PS4, PS5, Xbox 360, Xbox One, Xbox Series X/S
  },
  {
    name: "Excitebike",
    genre: "Racing",
    decade_created: "1980s",
    rating: "8",
    platforms: [7], // NES
  },
  {
    name: "Fall Guys",
    genre: "Platform",
    decade_created: "2020s",
    rating: "8",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Fallout 76",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "7",
    platforms: [12, 16, 25], // PC, PS4, Xbox One
  },
  {
    name: "Final Fantasy II",
    genre: "Role-Playing",
    decade_created: "1990s",
    rating: "8",
    platforms: [20], // SNES
  },
  {
    name: "Final Fantasy III",
    genre: "Role-Playing",
    decade_created: "1990s",
    rating: "9",
    platforms: "PS1", // Game Boy Advance, Nintendo Switch, PC, PS1, PS4, SNES
  },
  {
    name: "Final Fantasy VII",
    genre: "Role-Playing",
    decade_created: "1990s",
    rating: "8",
    platforms: "PS3", // Nintendo Switch, PC, PS3, PS4, Xbox One
  },
  {
    name: "Fossil Fighters",
    genre: "Role-Playing",
    decade_created: "2000s",
    rating: "7",
    platforms: [10], // Nintendo DS
  },
  {
    name: "Ghost of Tsushima",
    genre: "Platform",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 16, 17], // PC, PS4, PS5
  },
  {
    name: "God of War",
    genre: "Platform",
    decade_created: "2010s",
    rating: "10",
    platforms: [12, 16], // PC, PS4
  },
  {
    name: "God of War Ragnarök",
    genre: "Platform",
    decade_created: "2020s",
    rating: "10",
    platforms: [12, 16, 17], // PC, PS4, PS5
  },
  {
    name: "GoldenEye 007",
    genre: "First-Person Shooter",
    decade_created: "1990s",
    rating: "9",
    platforms: [9], // N64
  },
  {
    name: "Grand Theft Auto San Andreas",
    genre: "Platform",
    decade_created: "2000s",
    rating: "9",
    platforms: [14], // PS2
  },
  {
    name: "Grand Theft Auto: Vice City",
    genre: "Platform",
    decade_created: "2000s",
    rating: "9",
    platforms: [14], // PS2
  },
  {
    name: "Guilty Gear Strive",
    genre: "Fighting",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Halo 2",
    genre: "First-Person Shooter",
    decade_created: "2000s",
    rating: "9",
    platforms: [16, 23], // PC, Xbox
  },
  {
    name: "Halo 3",
    genre: "First-Person Shooter",
    decade_created: "2000s",
    rating: "9",
    platforms: [24], // Xbox 360
  },
  {
    name: "Halo 3: ODST",
    genre: "First-Person Shooter",
    decade_created: "2000s",
    rating: "9",
    platforms: [24], // Xbox 360
  },
  {
    name: "Halo 4",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "9",
    platforms: [24], // Xbox 360
  },
  {
    name: "Halo 5",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "9",
    platforms: [25], // Xbox One
  },
  {
    name: "Halo: Combat Evolved",
    genre: "First-Person Shooter",
    decade_created: "2000s",
    rating: "9",
    platforms: [12, 23, 24], // PC, Xbox, Xbox 360
  },
  {
    name: "Halo Infinite",
    genre: "First-Person Shooter",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 25, 26], // PC, Xbox One, Xbox Series X/S
  },
  {
    name: "Halo: Reach",
    genre: "First-Person Shooter",
    decade_created: "2010s",
    rating: "9",
    platforms: [24], // Xbox 360
  },
  {
    name: "High on Life",
    genre: "First-Person Shooter",
    decade_created: "2020s",
    rating: "8",
    platforms: [12, 16, 17, 25, 26], // PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "The King of Fighters XV",
    genre: "Fighting",
    decade_created: "2020s",
    rating: "8",
    platforms: [12, 16, 17, 26], // PC, PS4, PS5, Xbox Series X/S
  },
  {
    name: "Kingdom Hearts",
    genre: "Action Role-Playing",
    decade_created: "2000s",
    rating: "9",
    platforms: "PS2", // Game Boy Advance, Nintendo DS, Nintendo Switch, PC, PS2, PS3, PS4, Xbox One
  },
  {
    name: "Kingdom Hearts II",
    genre: "Action Role-Playing",
    decade_created: "2000s",
    rating: "9",
    platforms: [14], // PS2
  },
  {
    name: "Kingdom Hearts III",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "8",
    platforms: "PS4", // Nintendo Switch, PC, PS4, Xbox One
  },
  {
    name: "The Last of Us",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "10",
    platforms: [15, 16], // PS3, PS4
  },
  {
    name: "The Last of Us Part II",
    genre: "Action-Adventure",
    decade_created: "2020s",
    rating: "10",
    platforms: [16, 17], // PS4, PS5
  },
  {
    name: "The Legend of Zelda: A Link to the Past",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "9",
    platforms: [20], // SNES
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "10",
    platforms: "Nintendo Switch", // Nintendo Switch
  },
  {
    name: "The Legend of Zelda: Ocarina of Time",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "10",
    platforms: [5, 9], // GameCube, N64
  },
  {
    name: "Luigi's Mansion",
    genre: "Action-Adventure",
    decade_created: "2000s",
    rating: "7",
    platforms: [5, 8], // GameCube, Nintendo 3DS
  },
  {
    name: "Mario Golf",
    genre: "Sports",
    decade_created: "1990s",
    rating: "8",
    platforms: [4, 9], // Game Boy Color, N64
  },
  {
    name: "Mario Kart 8 Deluxe",
    genre: "Racing",
    decade_created: "2010s",
    rating: "9",
    platforms: "Nintendo Switch", // Nintendo Switch
  },
  {
    name: "Mario Party 8",
    genre: "Party",
    decade_created: "2000s",
    rating: "5",
    platforms: [21], // Wii
  },
  {
    name: "Mario Party 10",
    genre: "Party",
    decade_created: "2010s",
    rating: "6",
    platforms: [22], // Wii U
  },
  {
    name: "Mario Party Superstars",
    genre: "Party",
    decade_created: "2020s",
    rating: "8",
    platforms: "Nintendo Switch", // Nintendo Switch
  },
  {
    name: "Mario Tennis",
    genre: "Sports",
    decade_created: "2000s",
    rating: "9",
    platforms: [4, 9], // Game Boy Color, N64
  },
  {
    name: "Mario Tennis Aces",
    genre: "Sports",
    decade_created: "2010s",
    rating: "7",
    platforms: "Nintendo Switch", // Nintendo Switch
  },
  {
    name: "Marvel VS Capcom 2: New Age of Heroes",
    genre: "Fighting",
    decade_created: "2000s",
    rating: "9",
    platforms: [1, 14, 15, 23, 24], // Dreamcast, PS2, PS3, Xbox, Xbox 360
  },
  {
    name: "Mega Man X",
    genre: "Platform",
    decade_created: "1990s",
    rating: "9",
    platforms: "SNES", // GameCube, Nintendo Switch, PC, PS1, PS2, PS4, SNES, Xbox One
  },
  {
    name: "Metal Slug",
    genre: "Run and Gun",
    decade_created: "1990s",
    rating: "8",
    platforms: [6, 13, 19], // Neo Geo, PS1, Sega Saturn
  },
  {
    name: "Mike Tyson's Punch-Out!!",
    genre: "Sports",
    decade_created: "1980s",
    rating: "8",
    platforms: [7], // NES
  },
  {
    name: "Mortal Kombat 1",
    genre: "Fighting",
    decade_created: "2020s",
    rating: "8",
    platforms: "PS5", // Nintendo Switch, PC, PS5, Xbox Series X/S
  },
  {
    name: "New World",
    genre: "Role-Playing",
    decade_created: "2020s",
    rating: "6",
    platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
  },
  {
    name: "NBA 2K24",
    genre: "Sports",
    decade_created: "2020s",
    rating: "6",
    platforms: "Xbox One", // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Phasmophobia",
    genre: "Puzzle",
    decade_created: "2020s",
    rating: "7",
    platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
  },
  {
    name: "Pokémon Red, Blue, and Yellow",
    genre: "Role-Playing",
    decade_created: "1990s",
    rating: "10",
    platforms: [2, 4, 8], // Game Boy, Game Boy Color, Nintendo 3DS
  },
  {
    name: "Pokémon Ruby and Sapphire",
    genre: "Role-Playing",
    decade_created: "2000s",
    rating: "5",
    platforms: [3], // Game Boy Advance
  },
  {
    name: "Pokémon Snap",
    genre: "Rail Shooter",
    decade_created: "1990s",
    rating: "7",
    platforms: [9], // N64
  },
  {
    name: "Portal 2",
    genre: "Puzzle",
    decade_created: "2010s",
    rating: "9",
    platforms: "Nintendo Switch", // Nintendo 64, PC, PS3, Xbox 360
  },
  {
    name: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    decade_created: "2010s",
    rating: "10",
    platforms: [12, 16, 25], // PC, PS4, Xbox One
  },
  {
    name: "Resident Evil",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "8",
    platforms: [10, 12, 13, 19], // Nintendo DS, PC, PS1, Sega Saturn
  },
  {
    name: "Sonic the Hedgehog",
    genre: "Platform",
    decade_created: "1990s",
    rating: "8",
    platforms:"Nintendo Switch", // Game Boy Advance, Nintendo 3DS, Nintendo Switch, PC, Sega Genesis
  },
  {
    name: "Star Fox 64",
    genre: "Rail Shooter",
    decade_created: "1990s",
    rating: "8",
    platforms: [9], // N64
  },
  {
    name: "Star Wars Episode I: Racer",
    genre: "Racing",
    decade_created: "1990s",
    rating: "7",
    platforms: [1, 4, 9, "Nintendo Switch", 12, 16, 25], // Dreamcast, Game Boy Color, N64, Nintendo Switch, PC, PS4, Xbox One
  },
  {
    name: "Starfield",
    genre: "Action Role-Playing",
    decade_created: "2020s",
    rating: "7",
    platforms: [12, 26], // PC, Xbox Series X/S
  },
  {
    name: "Stardew Valley",
    genre: "Simulation",
    decade_created: "2010s",
    rating: "10",
    platforms: [12], // PC
  },
  {
    name: "Street Fighter 6",
    genre: "Fighting",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 16, 17, 26], // PC, PS4, PS5, Xbox Series X/S
  },
  {
    name: "Street Fighter III: 3rd Strike",
    genre: "Fighting",
    decade_created: "1990s",
    rating: "8",
    platforms: [1, "Nintendo Switch", 12, 14, 15, 16, 23, 24, 25], // Dreamcast, Nintendo Switch, PC, PS2, PS3, PS4, Xbox, Xbox 360, Xbox One
  },
  {
    name: "Super Mario 64",
    genre: "Platform",
    decade_created: "1990s",
    rating: "9",
    platforms: [9], // N64
  },
  {
    name: "Super Mario Sunshine",
    genre: "Platform",
    decade_created: "2000s",
    rating: "9",
    platforms: [5], // GameCube
  },
  {
    name: "Super Metroid",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "9",
    platforms: [20], // SNES
  },
  {
    name: "Super Smash Bros. Melee",
    genre: "Fighting",
    decade_created: "2000s",
    rating: "9",
    platforms: [5], // GameCube
  },
  {
    name: "Super Street Fighter II: The World Warrior",
    genre: "Fighting",
    decade_created: "1990s",
    rating: "7",
    platforms: [20], // SNES
  },
  {
    name: "Tony Hawk's Pro Skater",
    genre: "Sports",
    decade_created: "1990s",
    rating: "9",
    platforms: [1, 4, 9, 13], // Dreamcast, Game Boy Color, N64, PS1
  },
  {
    name: "Tony Hawk's Pro Skater 2",
    genre: "Sports",
    decade_created: "2000s",
    rating: "9",
    platforms: [1, 4, 5, 9, 12, 13], // Dreamcast, Game Boy Color, GameCube, N64, PC, PS1
  },
  {
    name: "Tony Hawk's Pro Skater 3",
    genre: "Sports",
    decade_created: "2000s",
    rating: "9",
    platforms: [3, 4, 5, 9, 12, 13, 14, 23], // Game Boy Advance, Game Boy Color, GameCube, N64, PC, PS1, PS2, Xbox
  },
  {
    name: "Tony Hawk's Pro Skater 4",
    genre: "Sports",
    decade_created: "2000s",
    rating: "9",
    platforms: [3, 5, 12, 13, 14, 23], // Game Boy Advance, GameCube, PC, PS1, PS2, Xbox
  },
  {
    name: "Tekken 8",
    genre: "Fighting",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 17, 26], // PC, PS5, Xbox Series X/S
  },
  {
    name: "Tomb Raider",
    genre: "Action-Adventure",
    decade_created: "1990s",
    rating: "9",
    platforms: [12, 13, 26], // PC, PS1, Sega Saturn
  },
  {
    name: "Ultimate Marvel VS Capcom 3",
    genre: "Fighting",
    decade_created: "2010s",
    rating: "8",
    platforms: [12, 15, 16, 24, 25], // PC, PS3, PS4, Xbox 360, Xbox One
  },
  {
    name: "Valheim",
    genre: "SandBox",
    decade_created: "2020s",
    rating: "9",
    platforms: [12, 25, 26], // PC, Xbox One, Xbox Series X/S
  },
  {
    name: "The Witcher 3: Wild Hunt",
    genre: "Action Role-Playing",
    decade_created: "2010s",
    rating: "9",
    platforms: ["Nintendo Switch", 12, 16, 17, 25, 26], // Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series X/S
  },
  {
    name: "Wizard101",
    genre: "Role-Playing",
    decade_created: "2000s",
    rating: "8",
    platforms: [12], // PC
  },
];

const seedTitles = () => Title.bulkCreate(titlesData);

module.exports = seedTitles;
