import Hero from "././models/Hero.js";

const SEED_HEROES = [
  new Hero(null, "Superman", "male", ["strength","flight","durability","speed"], "kryptonian", "dc", "1938", "191", "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"),
  new Hero(null, "Batman", "male", ["martial arts","stealth","technology"], "human", "dc", "1939", "188", "https://upload.wikimedia.org/wikipedia/en/8/85/Batman_DC_Comics.png"),
  new Hero(null, "Wonder Woman", "female", ["strength","durability","martial arts"], "amazon", "dc", "1941", "183", "https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg"),
  new Hero(null, "Flash", "male", ["speed","healing"], "metahuman", "dc", "1940", "183", "https://upload.wikimedia.org/wikipedia/en/e/ed/Flash_%28Barry_Allen%29.jpg"),
  new Hero(null, "Green Lantern", "male", ["flight","durability","energy"], "human", "dc", "1940", "188", "https://upload.wikimedia.org/wikipedia/en/0/0d/Green_Lantern_Rebirth_6.jpg"),
  new Hero(null, "Spider-Man", "male", ["strength","speed","stealth"], "human", "marvel", "1962", "178", "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg"),
  new Hero(null, "Iron Man", "male", ["technology","flight","durability"], "human", "marvel", "1963", "185", "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"),
  new Hero(null, "Captain America", "male", ["strength","durability","martial arts"], "human", "marvel", "1941", "188", "https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg"),
  new Hero(null, "Thor", "male", ["strength","flight","durability"], "asgardian", "marvel", "1962", "198", "https://upload.wikimedia.org/wikipedia/en/4/4c/Thor_%28Marvel_Comics_character%29.jpg"),
  new Hero(null, "Black Widow", "female", ["martial arts","stealth"], "human", "marvel", "1964", "170", "https://upload.wikimedia.org/wikipedia/en/e/e1/Black_Widow_%28Natasha_Romanova%29.png"),

  // Adicionando mais 40:
  new Hero(null, "Hulk", "male", ["strength","durability","healing"], "human", "marvel", "1962", "244", "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png"),
  new Hero(null, "Doctor Strange", "male", ["energy","intelligence","durability"], "human", "marvel", "1963", "185", "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg"),
  new Hero(null, "Black Panther", "male", ["strength","martial arts","stealth"], "human", "marvel", "1966", "183", "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png"),
  new Hero(null, "Scarlet Witch", "female", ["energy","durability","flight"], "mutant", "marvel", "1964", "170", "https://upload.wikimedia.org/wikipedia/en/1/10/Scarlet_Witch.jpg"),
  new Hero(null, "Vision", "male", ["durability","energy","flight"], "synthetic", "marvel", "1968", "193", "https://upload.wikimedia.org/wikipedia/en/0/0d/Vision_Avengers_Vol_4_24.1.png"),
  new Hero(null, "Hawkeye", "male", ["martial arts","stealth","technology"], "human", "marvel", "1964", "185", "https://upload.wikimedia.org/wikipedia/en/1/1e/Hawkeye_%28Clint_Barton%29.png"),
  new Hero(null, "Ant-Man", "male", ["technology","durability","stealth"], "human", "marvel", "1962", "178", "https://upload.wikimedia.org/wikipedia/en/6/6b/Ant-Man_%28Scott_Lang%29.png"),
  new Hero(null, "Wasp", "female", ["flight","durability","stealth"], "human", "marvel", "1963", "168", "https://upload.wikimedia.org/wikipedia/en/0/0b/Wasp_Marvel_Comics.png"),
  new Hero(null, "Falcon", "male", ["flight","martial arts","stealth"], "human", "marvel", "1969", "183", "https://upload.wikimedia.org/wikipedia/en/6/6b/Falcon_Comics.png"),
  new Hero(null, "Winter Soldier", "male", ["strength","martial arts","stealth"], "human", "marvel", "1969", "183", "https://upload.wikimedia.org/wikipedia/en/e/e8/Winter_Soldier.png"),

  new Hero(null, "Aquaman", "male", ["strength","durability","speed"], "atlantean", "dc", "1941", "188", "https://upload.wikimedia.org/wikipedia/en/4/4e/Aquaman_Rebirth_1.png"),
  new Hero(null, "Cyborg", "male", ["technology","strength","durability"], "cyborg", "dc", "1980", "198", "https://upload.wikimedia.org/wikipedia/en/c/c0/Cyborg_%28Victor_Stone%29.png"),
  new Hero(null, "Green Arrow", "male", ["martial arts","stealth","technology"], "human", "dc", "1941", "188", "https://upload.wikimedia.org/wikipedia/en/4/4a/Green_Arrow_%28Connor_Hawke%29.png"),
  new Hero(null, "Shazam", "male", ["strength","durability","flight"], "human", "dc", "1940", "193", "https://upload.wikimedia.org/wikipedia/en/3/3a/Shazam%21_Vol_1_1.png"),
  new Hero(null, "Martian Manhunter", "male", ["strength","flight","durability"], "martian", "dc", "1955", "196", "https://upload.wikimedia.org/wikipedia/en/0/02/Martian_Manhunter.png"),
  new Hero(null, "Zatanna", "female", ["energy","stealth","intelligence"], "human", "dc", "1964", "173", "https://upload.wikimedia.org/wikipedia/en/6/65/Zatanna.png"),
  new Hero(null, "Nightwing", "male", ["martial arts","stealth","speed"], "human", "dc", "1984", "185", "https://upload.wikimedia.org/wikipedia/en/0/04/Nightwing.png"),
  new Hero(null, "Batgirl", "female", ["martial arts","stealth","intelligence"], "human", "dc", "1961", "170", "https://upload.wikimedia.org/wikipedia/en/1/19/Barbara_Gordon_Batgirl.png"),
  new Hero(null, "Supergirl", "female", ["strength","flight","durability"], "kryptonian", "dc", "1959", "178", "https://upload.wikimedia.org/wikipedia/en/0/05/Supergirl.png"),
  new Hero(null, "Blue Beetle", "male", ["technology","durability","flight"], "human", "dc", "1939", "178", "https://upload.wikimedia.org/wikipedia/en/6/66/Blue_Beetle_1979.png"),

  // E mais extras até chegar em 50:
  new Hero(null, "Storm", "female", ["energy","flight","durability"], "mutant", "marvel", "1975", "180", "https://upload.wikimedia.org/wikipedia/en/f/f0/Storm_%28Marvel_Comics%29.png"),
  new Hero(null, "Wolverine", "male", ["strength","healing","durability"], "mutant", "marvel", "1974", "160", "https://upload.wikimedia.org/wikipedia/en/b/be/Wolverine_%28comic_character%29.png"),
  new Hero(null, "Jean Grey", "female", ["energy","durability","intelligence"], "mutant", "marvel", "1963", "168", "https://upload.wikimedia.org/wikipedia/en/f/fd/Jean_Grey.png"),
  new Hero(null, "Cyclops", "male", ["energy","leadership","durability"], "mutant", "marvel", "1963", "183", "https://upload.wikimedia.org/wikipedia/en/c/cd/Cyclops_%28Marvel_Comics%29.png"),
  new Hero(null, "Rogue", "female", ["strength","durability","flight"], "mutant", "marvel", "1981", "173", "https://upload.wikimedia.org/wikipedia/en/1/1f/Rogue_%28Anna_Marie%29.png"),
  new Hero(null, "Gambit", "male", ["stealth","martial arts","energy"], "mutant", "marvel", "1990", "185", "https://upload.wikimedia.org/wikipedia/en/5/5c/Gambit_%28Marvel_Comics%29.png"),
  new Hero(null, "Beast", "male", ["strength","intelligence","durability"], "mutant", "marvel", "1963", "188", "https://upload.wikimedia.org/wikipedia/en/2/23/Beast_%28Marvel_Comics_character%29.png"),
  new Hero(null, "Professor X", "male", ["intelligence","leadership","energy"], "mutant", "marvel", "1963", "183", "https://upload.wikimedia.org/wikipedia/en/f/f3/Professor_X.png"),
  new Hero(null, "Magneto", "male", ["energy","durability","leadership"], "mutant", "marvel", "1963", "188", "https://upload.wikimedia.org/wikipedia/en/1/19/Magneto_%28Marvel_Comics%29.png"),
  new Hero(null, "Deadpool", "male", ["martial arts","healing","stealth"], "mutant", "marvel", "1991", "183", "https://upload.wikimedia.org/wikipedia/en/3/3b/Deadpool.png"),
  new Hero(null, "Blade", "male", ["martial arts","stealth","strength"], "human", "marvel", "1973", "185", "https://upload.wikimedia.org/wikipedia/en/3/36/Blade_%28Marvel_Comics%29.png"),

  new Hero(null, "Constantine", "male", ["intelligence","stealth","energy"], "human", "dc", "1985", "183", "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/John_Constantine.jpg/220px-John_Constantine.jpg"),
  new Hero(null, "Raven", "female", ["energy","stealth","intelligence"], "human", "dc", "1980", "168", "https://upload.wikimedia.org/wikipedia/en/7/76/Raven_%28DC_Comics%29.png"),
  new Hero(null, "Starfire", "female", ["strength","flight","energy"], "alien", "dc", "1980", "183", "https://upload.wikimedia.org/wikipedia/en/f/fd/Starfire.png"),
  new Hero(null, "Beast Boy", "male", ["stealth","durability","speed"], "metahuman", "dc", "1965", "175", "https://upload.wikimedia.org/wikipedia/en/5/5e/Beast_Boy.png"),
  new Hero(null, "Red Hood", "male", ["martial arts","stealth","strength"], "human", "dc", "1951", "185", "https://upload.wikimedia.org/wikipedia/en/1/1f/Red_Hood.png"),
  new Hero(null, "Catwoman", "female", ["stealth","martial arts","intelligence"], "human", "dc", "1940", "170", "https://upload.wikimedia.org/wikipedia/en/c/c7/Catwoman_%28Selina_Kyle%29.png"),
  new Hero(null, "Black Canary", "female", ["martial arts","stealth","strength"], "human", "dc", "1947", "170", "https://upload.wikimedia.org/wikipedia/en/f/f0/Black_Canary.png"),
  new Hero(null, "Doctor Fate", "male", ["energy","durability","flight"], "human", "dc", "1940", "188", "https://upload.wikimedia.org/wikipedia/en/e/e4/Doctor_Fate.png"),
  new Hero(null, "Etrigan", "male", ["strength","durability","energy"], "demon", "dc", "1972", "198", "https://upload.wikimedia.org/wikipedia/en/a/a2/Etrigan_the_Demon.png"),
  new Hero(null, "Plastic Man", "male", ["durability","stealth","intelligence"], "human", "dc", "1941", "193", "https://upload.wikimedia.org/wikipedia/en/7/70/Plastic_Man.png"),
];

SEED_HEROES.map(x => x.add());
