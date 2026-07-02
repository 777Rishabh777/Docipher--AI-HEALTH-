const triviaQuestions = [
    {
        "q": "What is the standard SI unit for time?",
        "options": [
            "Minute",
            "Hour",
            "Day",
            "Second"
        ],
        "answer": 3
    },
    {
        "q": "A positron is an antiparticle of a what?",
        "options": [
            "Neutron",
            "Proton",
            "Photon",
            "Electron"
        ],
        "answer": 3
    },
    {
        "q": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
        "options": [
            "3",
            "5",
            "6",
            "4"
        ],
        "answer": 3
    },
    {
        "q": "Which moon is the only satellite in our solar system to possess a dense atmosphere?",
        "options": [
            "Europa",
            "Miranda",
            "Callisto",
            "Titan"
        ],
        "answer": 3
    },
    {
        "q": "What is the molecular formula of Glucose?",
        "options": [
            "C2H4O2",
            "K+",
            "CH4",
            "C6H12O6"
        ],
        "answer": 3
    },
    {
        "q": "What is the unit of electrical resistance?",
        "options": [
            "Mho",
            "Tesla",
            "Joule",
            "Ohm"
        ],
        "answer": 3
    },
    {
        "q": "Which is the most abundant element in the universe?",
        "options": [
            "Helium",
            "Lithium",
            "Oxygen",
            "Hydrogen"
        ],
        "answer": 3
    },
    {
        "q": "How many laws of thermodynamics are there?",
        "options": [
            "Three",
            "Two",
            "Five",
            "Four"
        ],
        "answer": 3
    },
    {
        "q": "How many planets are there in the Solar System?",
        "options": [
            "9",
            "11",
            "10",
            "8"
        ],
        "answer": 3
    },
    {
        "q": "The asteroid belt is located between which two planets?",
        "options": [
            "Jupiter and Saturn",
            "Mercury and Venus",
            "Earth and Mars",
            "Mars and Jupiter"
        ],
        "answer": 3
    },
    {
        "q": "How many baby/milk teeth does a human child have in total?",
        "options": [
            "10",
            "15",
            "25",
            "20"
        ],
        "answer": 3
    },
    {
        "q": "Which chemical element has the lowest boiling point?",
        "options": [
            "Hydrogen",
            "Neon",
            "Nitrogen",
            "Helium"
        ],
        "answer": 3
    },
    {
        "q": "Stars consist mainly of hydrogen and which other gas?",
        "options": [
            "Oxygen",
            "Argon",
            "Nitrogen",
            "Helium"
        ],
        "answer": 3
    },
    {
        "q": "What mineral has the lowest number on the Mohs scale?",
        "options": [
            "Quartz",
            "Diamond",
            "Gypsum",
            "Talc"
        ],
        "answer": 3
    },
    {
        "q": "71% of the Earth's surface is made up of",
        "options": [
            "Deserts",
            "Continents",
            "Forests",
            "Water"
        ],
        "answer": 3
    },
    {
        "q": "Which planet in the Solar System is the closest to the Sun?",
        "options": [
            "Earth",
            "Mars",
            "Venus",
            "Mercury"
        ],
        "answer": 3
    },
    {
        "q": "Which noble gas has the lowest atomic number?",
        "options": [
            "Neon",
            "Argon",
            "Krypton",
            "Helium"
        ],
        "answer": 3
    },
    {
        "q": "What part of the brain takes its name from the Greek for seahorse?",
        "options": [
            "Cerebellum",
            "Thalamus",
            "Amygdala",
            "Hippocampus"
        ],
        "answer": 3
    },
    {
        "q": "What was the first living creature in space?",
        "options": [
            "Monkey",
            "Dog",
            "Mouse",
            "Fruit Flies "
        ],
        "answer": 3
    },
    {
        "q": "What is the thin, outermost layer of the Earth?",
        "options": [
            "Exosphere",
            "Mantle",
            "Outer Core",
            "Crust"
        ],
        "answer": 3
    },
    {
        "q": "Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?",
        "options": [
            "Cough",
            "Yawn",
            "Hiccup",
            "Sneeze"
        ],
        "answer": 3
    },
    {
        "q": "What is the hottest planet in the solar system",
        "options": [
            "Jupiter",
            "Mercury ",
            "Mars",
            "Venus"
        ],
        "answer": 3
    },
    {
        "q": "What is the colour of unoxidized blood?",
        "options": [
            "Blue",
            "Purple",
            "Green",
            "Red"
        ],
        "answer": 3
    },
    {
        "q": "What is the unit of electrical capacitance?",
        "options": [
            "Gauss",
            "Henry",
            "Watt",
            "Farad"
        ],
        "answer": 3
    },
    {
        "q": "The 'Islets of Langerhans' is found in which human organ?",
        "options": [
            "Kidney",
            "Liver",
            "Brain",
            "Pancreas"
        ],
        "answer": 3
    },
    {
        "q": "What term is best associated with Sigmund Freud?",
        "options": [
            "Cognitive-Behavioral Therapy",
            "Theory of Gravity",
            "Dialectical Behavior Therapy",
            "Psychoanalysis"
        ],
        "answer": 3
    },
    {
        "q": "What is considered the rarest form of color blindness?",
        "options": [
            "Red",
            "Green",
            "Purple",
            "Blue"
        ],
        "answer": 3
    },
    {
        "q": "Where did the Great Storm of 1987 make landfall at, first?",
        "options": [
            "Surrey",
            "Wales",
            "The Midlands",
            "Cornwall"
        ],
        "answer": 3
    },
    {
        "q": "When the Falcon Heavy was launched on it's test flight, what was the only part of the operation that failed?",
        "options": [
            "Side Booster Landing",
            "Deployment of Starman",
            "Ignition and Liftoff",
            "Center Core Landing"
        ],
        "answer": 3
    },
    {
        "q": "Which desert is the only desert in the world where the \"Saguaro\" cactus grows indigenously?",
        "options": [
            "The Gobi Desert",
            "The Yuma Desert",
            "The Arabian Desert",
            "The Sonoran Desert"
        ],
        "answer": 3
    },
    {
        "q": "Alzheimer's disease primarily affects which part of the human body?",
        "options": [
            "Lungs",
            "Skin",
            "Heart",
            "Brain"
        ],
        "answer": 3
    },
    {
        "q": "Deuterium is an isotope of which element?",
        "options": [
            "Nitrogen",
            "Helium",
            "Neon",
            "Hydrogen"
        ],
        "answer": 3
    },
    {
        "q": "What is the chemical symbol for lead?",
        "options": [
            "Ld",
            "Le",
            "Pm",
            "Pb"
        ],
        "answer": 3
    },
    {
        "q": "What is the standard SI unit for mass?",
        "options": [
            "Tonne",
            "Pound",
            "Gram",
            "Kilogram"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is NOT a real element?",
        "options": [
            "Praseodymium",
            "Hassium",
            "Lutetium",
            "Vitrainium"
        ],
        "answer": 3
    },
    {
        "q": "Au on the Periodic Table refers to which element?",
        "options": [
            "Silver",
            "Oxygen",
            "Nickel",
            "Gold"
        ],
        "answer": 3
    },
    {
        "q": "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
        "options": [
            "Z boson",
            "Tau neutrino",
            "Gluon",
            "Graviton"
        ],
        "answer": 3
    },
    {
        "q": "Rhinoplasty is a surgical procedure on what part of the human body?",
        "options": [
            "Ears",
            "Chin",
            "Neck",
            "Nose"
        ],
        "answer": 3
    },
    {
        "q": "How many teeth does the average adult mouth have (except for wisdom teeth)?",
        "options": [
            "36",
            "20",
            "28",
            "32"
        ],
        "answer": 3
    },
    {
        "q": "The human heart has how many chambers?",
        "options": [
            "2",
            "6",
            "3",
            "4"
        ],
        "answer": 3
    },
    {
        "q": "Dry ice is the solid form of what substance?",
        "options": [
            "Nitrogen",
            "Ammonia",
            "Oxygen",
            "Carbon dioxide"
        ],
        "answer": 3
    },
    {
        "q": "An organism described as \"heliotropic\" has a tendancy to move towards which of these things?",
        "options": [
            "Water",
            "Trees",
            "Pollen",
            "Light"
        ],
        "answer": 3
    },
    {
        "q": "On which mission did the Space Shuttle Columbia break up upon re-entry?",
        "options": [
            "STS-51-L",
            "STS-61-C",
            "STS-109",
            "STS-107"
        ],
        "answer": 3
    },
    {
        "q": "The humerus, paired radius, and ulna come together to form what joint?",
        "options": [
            "Knee",
            "Sholder",
            "Ankle",
            "Elbow"
        ],
        "answer": 3
    },
    {
        "q": "Which of these elements on the Periodic Table is a Noble Gas?",
        "options": [
            "Potassium",
            "Iodine",
            "Colbalt",
            "Neon"
        ],
        "answer": 3
    },
    {
        "q": "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
        "options": [
            "low, some",
            "high, all",
            "high, some",
            "low, all"
        ],
        "answer": 3
    },
    {
        "q": "All the following metal elements are liquids at or near room temperature EXCEPT:",
        "options": [
            "Gallium",
            "Caesium",
            "Mercury",
            "Beryllium"
        ],
        "answer": 3
    },
    {
        "q": "Who discovered the Law of Gravity?",
        "options": [
            "Galileo Galilei",
            "Charles Darwin",
            "Albert Einstein",
            "Sir Isaac Newton"
        ],
        "answer": 3
    },
    {
        "q": "What is radiation measured in?",
        "options": [
            "Watt",
            "Decibel",
            "Kelvin",
            "Gray "
        ],
        "answer": 3
    },
    {
        "q": "Which scientific unit is named after an Italian nobleman?",
        "options": [
            "Pascal",
            "Ohm",
            "Hertz",
            "Volt"
        ],
        "answer": 3
    },
    {
        "q": "Which chemical element was originally known as Alabamine?",
        "options": [
            "Selenium",
            "Antimony",
            "Molybdenum",
            "Astatine"
        ],
        "answer": 3
    },
    {
        "q": "On the Beaufort Scale of wind force, what wind name is given to number 8?",
        "options": [
            "Storm",
            "Hurricane",
            "Breeze",
            "Gale"
        ],
        "answer": 3
    },
    {
        "q": "The Sun consists of mostly which two elements?",
        "options": [
            "Hydrogen & Nitrogen",
            "Carbon & Nitrogen",
            "Carbon & Helium",
            "Hydrogen & Helium"
        ],
        "answer": 3
    },
    {
        "q": "What is the scientific name of the red fox?",
        "options": [
            "Vulpes Redus",
            "Red Fox",
            "Vulpes Vulpie",
            "Vulpes Vulpes"
        ],
        "answer": 3
    },
    {
        "q": "What animal takes part in Schr\u00f6dinger's most famous thought experiment?",
        "options": [
            "Dog",
            "Bat",
            "Butterfly",
            "Cat"
        ],
        "answer": 3
    },
    {
        "q": "Deionized water is water with which of the following removed?",
        "options": [
            "Oxygen",
            "Hydrogen",
            "Uncharged atoms",
            "Iron"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following are cells of the adaptive immune system?",
        "options": [
            "Dendritic cells",
            "Natural killer cells",
            "White blood cells",
            "Cytotoxic T cells"
        ],
        "answer": 3
    },
    {
        "q": "What does LASER stand for?",
        "options": [
            "Lite analysing by stereo ecorazer",
            "Light amplifier by standby energy of radio",
            "Life antimatter by standing entry of range",
            "Light amplification by stimulated emission of radiation"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following bones is not in the leg?",
        "options": [
            "Patella",
            "Tibia",
            "Fibula ",
            "Radius"
        ],
        "answer": 3
    },
    {
        "q": "How many planets make up our Solar System?",
        "options": [
            "7",
            "9",
            "6",
            "8"
        ],
        "answer": 3
    },
    {
        "q": "When was the first mammal successfully cloned?",
        "options": [
            "2009",
            "1999",
            "1985",
            "1996"
        ],
        "answer": 3
    },
    {
        "q": "What is the largest living organism currently known to man?",
        "options": [
            "Blue Whale",
            "Redwood Tree",
            "The Coral Reef",
            "Honey Fungus"
        ],
        "answer": 3
    },
    {
        "q": "Which is the chemical name of H2O?",
        "options": [
            "Ammonium chloride",
            "Anhydrous Sodium Carbonate",
            "Manganese dioxide",
            "Dihydrogen Monoxide"
        ],
        "answer": 3
    },
    {
        "q": "How many bones are in the human body?",
        "options": [
            "203",
            "209",
            "200",
            "206"
        ],
        "answer": 3
    },
    {
        "q": "What is the medical term for low blood sugar?",
        "options": [
            "Hypothyroidism",
            "Hypothermia",
            "Hypoxia",
            "Hypoglycemia"
        ],
        "answer": 3
    },
    {
        "q": "What is the half-life of Uranium-235?",
        "options": [
            "4,300,400,000 years",
            "1,260,900,000 years",
            "Uranium-235 is a stable isotope",
            "703,800,000 years"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following blood vessels carries deoxygenated blood?",
        "options": [
            "Pulmonary Vein",
            "Aorta",
            "Coronary Artery",
            "Pulmonary Artery"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
        "options": [
            "Polyethylene (PE)",
            "Polypropylene (PP)",
            "Polystyrene (PS)",
            "Polyvinylchloride (PVC) "
        ],
        "answer": 3
    },
    {
        "q": "Which country first successfully farm-hatched and raised bluefin tuna in 1979?",
        "options": [
            "France",
            "USA",
            "Philippines",
            "Japan"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is the term for \"surgical complications resulting from surgical sponges left inside the patient's body?",
        "options": [
            "Gongoozler",
            "Jentacular",
            "Meupareunia",
            "Gossypiboma"
        ],
        "answer": 3
    },
    {
        "q": "What is the chemical makeup of water?",
        "options": [
            "C12H6O2",
            "CO2",
            "H",
            "H20"
        ],
        "answer": 3
    },
    {
        "q": "Which Landsat Satellite currently has had the longest operational life?",
        "options": [
            "Landsat 8",
            "Landsat 7",
            "Landsat 6",
            "Landsat 5"
        ],
        "answer": 3
    },
    {
        "q": "What is the common name of the chemical compound \"dihydrogen monoxide\"?",
        "options": [
            "Methane",
            "Ammonia ",
            "Laughing Gas",
            "Water"
        ],
        "answer": 3
    },
    {
        "q": "An organic compound is considered an alcohol if it has what functional group?",
        "options": [
            "Carbonyl",
            "Alkyl",
            "Aldehyde",
            "Hydroxyl"
        ],
        "answer": 3
    },
    {
        "q": "What part of the body produces insulin?",
        "options": [
            "Kidney",
            "Liver",
            "Stomach",
            "Pancreas"
        ],
        "answer": 3
    },
    {
        "q": "A comet's gaseous envelope (which creates the tail) is called what?",
        "options": [
            "The wake",
            "The backwash",
            "The ablative",
            "The coma"
        ],
        "answer": 3
    },
    {
        "q": "Which one of these is scientific term for \"Brain Freeze\"?",
        "options": [
            "Hyacinthoides Italica",
            "Amaranthus Retroflexus",
            "Amblyomma Americanum",
            "Sphenopalatine Ganglioneuralgia"
        ],
        "answer": 3
    },
    {
        "q": "Which continent do sweet potatoes originally come from?",
        "options": [
            "Asia",
            "Africa",
            "Europe",
            "South America"
        ],
        "answer": 3
    },
    {
        "q": "Who made the discovery of X-rays?",
        "options": [
            "Thomas Alva Edison",
            "James Watt",
            "Albert Einstein",
            "Wilhelm Conrad R\u00f6ntgen"
        ],
        "answer": 3
    },
    {
        "q": "What are the smallest blood vessels in the human body?",
        "options": [
            "Arterioles",
            "Veinules",
            "Lymphatics",
            "Capillaries"
        ],
        "answer": 3
    },
    {
        "q": "What is the \"powerhouse\" of the Eukaryotic animal cell?",
        "options": [
            "Nucleus",
            "Chloroplast",
            "Endoplasmic Reticulum",
            "Mitochondria"
        ],
        "answer": 3
    },
    {
        "q": "What medication was once commonly used as rat poison?",
        "options": [
            "Aspirin",
            "Eliquis",
            "Tylenol",
            "Coumadin"
        ],
        "answer": 3
    },
    {
        "q": "Which element has the chemical symbol 'Fe'?",
        "options": [
            "Gold",
            "Silver",
            "Tin",
            "Iron"
        ],
        "answer": 3
    },
    {
        "q": "The medial meniscus forms which part of what joint in the human body?",
        "options": [
            "Elbow",
            "Ankle",
            "Shoulder",
            "Knee"
        ],
        "answer": 3
    },
    {
        "q": "What is the atomic mass of Carbon?",
        "options": [
            "14",
            "16",
            "10",
            "12"
        ],
        "answer": 3
    },
    {
        "q": "What is the molecular formula of the active component of chili peppers(Capsaicin)?",
        "options": [
            "C21H23NO3",
            "C6H4Cl2",
            "C13H25NO4",
            "C18H27NO3"
        ],
        "answer": 3
    },
    {
        "q": "What is an example of a bacterial pathogen?",
        "options": [
            "Measles ",
            "AIDS",
            "Ringworm",
            "Cholera"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is NOT a bone found in the human arm?",
        "options": [
            "Humerus",
            "Ulna",
            "Radius",
            "Tibia"
        ],
        "answer": 3
    },
    {
        "q": "What is the most potent toxin known?",
        "options": [
            "Ricin",
            "Cyanide",
            "Asbestos",
            "Botulinum toxin"
        ],
        "answer": 3
    },
    {
        "q": "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
        "options": [
            "Jupiter",
            "Venus",
            "Neptune",
            "Uranus"
        ],
        "answer": 3
    },
    {
        "q": "Where in the human body is the Pineal Gland located?",
        "options": [
            "Groin",
            "Chest",
            "Throat",
            "Brain"
        ],
        "answer": 3
    },
    {
        "q": "What is the standard SI unit for temperature?",
        "options": [
            "Fahrenheit",
            "Celsius",
            "Rankine",
            "Kelvin"
        ],
        "answer": 3
    },
    {
        "q": "Botanically speaking, which of these fruits is NOT a berry?",
        "options": [
            "Blueberry",
            "Banana",
            "Concord Grape",
            "Strawberry"
        ],
        "answer": 3
    },
    {
        "q": "What was the first organic compound to be synthesized from inorganic compounds?",
        "options": [
            "Propane",
            "Ethanol",
            "Formaldehyde",
            "Urea"
        ],
        "answer": 3
    },
    {
        "q": "How many protons are in an oxygen atom?",
        "options": [
            "Four",
            "Two",
            "Six",
            "Eight"
        ],
        "answer": 3
    },
    {
        "q": " What is the chemical symbol for Helium?",
        "options": [
            "H",
            "Hg",
            "Hs",
            "He"
        ],
        "answer": 3
    },
    {
        "q": "The Western Lowland Gorilla is scientifically know as?",
        "options": [
            "Gorilla Gorilla Diehli",
            "Gorilla Beringei Graueri",
            "Gorilla Beringei Beringei",
            "Gorilla Gorilla Gorilla"
        ],
        "answer": 3
    },
    {
        "q": "What is the elemental symbol for mercury?",
        "options": [
            "Me",
            "Mc",
            "Hy",
            "Hg"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following spacecraft never touched the moon?",
        "options": [
            "Apollo 11",
            "Luna 2",
            "SMART-1",
            "Mariner 4"
        ],
        "answer": 3
    },
    {
        "q": "What is the standard atomic weight of a Plutonium nucleus?",
        "options": [
            "94",
            "481",
            "128",
            "244"
        ],
        "answer": 3
    },
    {
        "q": "At what temperature does water boil?",
        "options": [
            "200\u00b0F",
            "181\u00b0F",
            "178\u00b0F",
            "212\u00b0F"
        ],
        "answer": 3
    },
    {
        "q": "Which portion of the Marijuana plant produces the psychoactive substance known as THC?",
        "options": [
            "Leaves",
            "Male Flower",
            "Root Ball",
            "Female Flower"
        ],
        "answer": 3
    },
    {
        "q": "The word \"science\" stems from the word \"scire\" meaning what?",
        "options": [
            "To measure",
            "To live",
            "To count",
            "To know"
        ],
        "answer": 3
    },
    {
        "q": "What is the same in Celsius and Fahrenheit?",
        "options": [
            "32",
            "-39",
            "-42",
            "-40"
        ],
        "answer": 3
    },
    {
        "q": "What does the yellow diamond on the NFPA 704 fire diamond represent?",
        "options": [
            "Health",
            "Flammability",
            "Radioactivity",
            "Reactivity"
        ],
        "answer": 3
    },
    {
        "q": "Which of these Elements is a metalloid?",
        "options": [
            "Tin",
            "Bromine",
            "Rubidium",
            "Antimony"
        ],
        "answer": 3
    },
    {
        "q": "Which of these animals belongs in class Chondrichthyes?",
        "options": [
            "Octopus",
            "Killer whale",
            "Catfish",
            "Great white shark"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is used to show that Earth spins on an axis? ",
        "options": [
            "Polaris",
            "Sundial",
            "Tectonic Plates ",
            "Foucault Pendulum "
        ],
        "answer": 3
    },
    {
        "q": "\"The Big Bang Theory\" was first theorized by a priest of what religious ideology?",
        "options": [
            "Christian",
            "Jewish",
            "Islamic",
            "Catholic"
        ],
        "answer": 3
    },
    {
        "q": "What is the powerhouse of the cell?",
        "options": [
            "Ribosome",
            "Redbull",
            "Nucleus",
            "Mitochondria"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the Supermassive Black Hole in the centre of the Milky Way?",
        "options": [
            "Messier 87",
            "Alpha Centauri",
            "Andromeda",
            "Sagittarius A*"
        ],
        "answer": 3
    },
    {
        "q": "What is the name for the auditory illusion of a note that seems to be rising infinitely?",
        "options": [
            "Glissandro Illusion",
            "Fransen Effect",
            "McGurck Effect",
            "Shepard Tone"
        ],
        "answer": 3
    },
    {
        "q": "Which is not a type of neuron?",
        "options": [
            "Sensory Neuron",
            "Motor Neuron",
            "Interneuron",
            "Perceptual Neuron"
        ],
        "answer": 3
    },
    {
        "q": "What is the scientific name for the extinct hominin known as \"Lucy\"?",
        "options": [
            "Australopithecus Africanus",
            "Australopithecus Architeuthis",
            "Australopithecus Antaris",
            "Australopithecus Afarensis"
        ],
        "answer": 3
    },
    {
        "q": "Tetsuya Fujita was a scientist that developed the scale for which natural disaster?",
        "options": [
            "Hurricanes",
            "Earthquakes",
            "Volcanoes",
            "Tornadoes"
        ],
        "answer": 3
    },
    {
        "q": "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
        "options": [
            "Soyuz 7K-OK",
            "Zenit-2",
            "Voskhod 3KV",
            "Sputnik 1"
        ],
        "answer": 3
    },
    {
        "q": "What does CPR, the emergency procedure to assist someone who has suffered cardiac arrest, stand for?",
        "options": [
            "Chronic pain relief",
            "Cancer pain release",
            "Contraceptive prevalence rate",
            "Cardiopulmonary resuscitation"
        ],
        "answer": 3
    },
    {
        "q": "Which type of rock is created by intense heat AND pressure?",
        "options": [
            "Sedimentary",
            "Igneous",
            "Diamond",
            "Metamorphic"
        ],
        "answer": 3
    },
    {
        "q": "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
        "options": [
            "Prophase",
            "Stasis",
            "Telophase",
            "Interphase"
        ],
        "answer": 3
    },
    {
        "q": "What does the letter 'S' stand for in 'NASA'?",
        "options": [
            "Science",
            "Society",
            "Star",
            "Space"
        ],
        "answer": 3
    },
    {
        "q": "What name is given to all baby marsupials?",
        "options": [
            "Calf",
            "Pup",
            "Cub",
            "Joey"
        ],
        "answer": 3
    },
    {
        "q": "Where did the dog breed \"Chihuahua\" originate?",
        "options": [
            "France",
            "Spain",
            "Russia",
            "Mexico"
        ],
        "answer": 3
    },
    {
        "q": "What is the atomic number of Uranium ",
        "options": [
            "235",
            "17",
            "167",
            "92"
        ],
        "answer": 3
    },
    {
        "q": "What is the atomic number of the element Strontium?",
        "options": [
            "73",
            "47",
            "11",
            "38"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is the male pollen-producing reproductive part of a flower?",
        "options": [
            "Sepal",
            "Pistil",
            "Petal",
            "Stamen"
        ],
        "answer": 3
    },
    {
        "q": "How many moons does the Earth have?",
        "options": [
            "0",
            "2",
            "3",
            "1"
        ],
        "answer": 3
    },
    {
        "q": "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
        "options": [
            "8",
            "16",
            "32",
            "24"
        ],
        "answer": 3
    },
    {
        "q": "What is the standard SI unit for electric current?",
        "options": [
            "Volt",
            "Ohm",
            "Watt",
            "Ampere"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is NOT a word used to describe an earthquake?",
        "options": [
            "Foreshock",
            "Strike-slip",
            "Temblor",
            "Drop-slide"
        ],
        "answer": 3
    },
    {
        "q": "What is the standard SI unit for luminous intensity?",
        "options": [
            "Lumen",
            "Faraday",
            "Coulomb",
            "Candela"
        ],
        "answer": 3
    },
    {
        "q": "Which element has the highest melting point?",
        "options": [
            "Tungsten",
            "Platinum",
            "Osmium",
            "Carbon"
        ],
        "answer": 3
    },
    {
        "q": "What do you study if you are studying entomology?",
        "options": [
            "Humans",
            "the Brain",
            "Fish",
            "Insects"
        ],
        "answer": 3
    },
    {
        "q": "What is the unit of electrical inductance?",
        "options": [
            "Weber",
            "Coulomb",
            "Mho",
            "Henry"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is a type of stretch/deep tendon reflex?",
        "options": [
            "Gag reflex",
            "Pupillary light reflex",
            "Scratch reflex",
            "Ankle jerk reflex"
        ],
        "answer": 3
    },
    {
        "q": "What polymer is used to make CDs, safety goggles and riot shields?",
        "options": [
            "Rubber",
            "Nylon",
            "Bakelite",
            "Polycarbonate"
        ],
        "answer": 3
    },
    {
        "q": "Human cells typically have how many copies of each gene?",
        "options": [
            "1",
            "4",
            "3",
            "2"
        ],
        "answer": 3
    },
    {
        "q": "What does the term \"isolation\" refer to in microbiology?",
        "options": [
            "A lack of nutrition in microenviroments",
            "The nitrogen level in soil",
            "Testing effects of certain microorganisms in an isolated enviroments, such as caves",
            "The separation of a strain from a natural, mixed population of living microbes"
        ],
        "answer": 3
    },
    {
        "q": "What is the mathematical formula of Ohm's law?",
        "options": [
            "I = V*R",
            "R = V*I",
            "V = I / R",
            "V = I*R"
        ],
        "answer": 3
    },
    {
        "q": "What causes Lyme disease?",
        "options": [
            "A virus",
            "A parasitic worm",
            "An amoeba",
            "A bacteria"
        ],
        "answer": 3
    },
    {
        "q": "About what percentage of the Earth's surface is water? ",
        "options": [
            "30%",
            "50%",
            "90%",
            "70%"
        ],
        "answer": 3
    },
    {
        "q": "What physics principle relates the net electric flux out of a closed surface to the charge enclosed by that surface?",
        "options": [
            "Faraday's Law",
            "Ampere's Law",
            "Biot-Savart Law",
            "Gauss's Law"
        ],
        "answer": 3
    },
    {
        "q": "Which Landsat Satellite failed to reach orbit?",
        "options": [
            "Landsat 5",
            "Landsat 4",
            "Landsat 3",
            "Landsat 6"
        ],
        "answer": 3
    },
    {
        "q": "After which Danish city is the 72th element on the periodic table named?",
        "options": [
            "Odense",
            "Herning",
            "Skagen",
            "Copenhagen"
        ],
        "answer": 3
    },
    {
        "q": "What is the chemical formula for ammonia?",
        "options": [
            "CO2",
            "NO3",
            "CH4",
            "NH3"
        ],
        "answer": 3
    },
    {
        "q": "What produces the green colour of most plant leaves?",
        "options": [
            "Light refraction",
            "Natural pigments",
            "UV radiation",
            "Chlorophyll"
        ],
        "answer": 3
    },
    {
        "q": "Which is the longest bone in the human body? ",
        "options": [
            "Scapula",
            "Fibula",
            "Ulna",
            "Femur"
        ],
        "answer": 3
    },
    {
        "q": "What organelle aids in synthesis of DNA in cells?",
        "options": [
            "Nuclei",
            "Lysosomes",
            "Mitochondria",
            "Ribosomes"
        ],
        "answer": 3
    },
    {
        "q": "Naturally occuring uranium primarily consists of which isotope?",
        "options": [
            "235",
            "239",
            "233",
            "238"
        ],
        "answer": 3
    },
    {
        "q": "Which horizon in a soil profile consists of bedrock?",
        "options": [
            "O",
            "B",
            "D",
            "R"
        ],
        "answer": 3
    },
    {
        "q": "The medical term for the belly button is which of the following?",
        "options": [
            "Nevus",
            "Nares",
            "Paxillus",
            "Umbilicus"
        ],
        "answer": 3
    },
    {
        "q": "Approximately how long is a year on Uranus?",
        "options": [
            "47 Earth years",
            "62 Earth years",
            "109 Earth years",
            "84 Earth years"
        ],
        "answer": 3
    },
    {
        "q": "If you planted the seeds of Quercus robur what would grow?",
        "options": [
            "Flowers",
            "Vegtables",
            "Grains",
            "Trees"
        ],
        "answer": 3
    },
    {
        "q": "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
        "options": [
            "Tennis Elbow",
            "Carpal Tunnel",
            "Housemaid's Knee",
            "Shin Splints"
        ],
        "answer": 3
    },
    {
        "q": "The human right lung has how many lobes?",
        "options": [
            "4",
            "2",
            "1",
            "3"
        ],
        "answer": 3
    },
    {
        "q": "How many objects are equivalent to one mole?",
        "options": [
            "6.002 x 10^22",
            "6.022 x 10^22",
            "6.002 x 10^23",
            "6.022 x 10^23"
        ],
        "answer": 3
    },
    {
        "q": "How many legs is it biologically impossible for a centipede to have?",
        "options": [
            "26",
            "50",
            "74",
            "100"
        ],
        "answer": 3
    },
    {
        "q": "Which of these choices is not one of the phases of mitosis?",
        "options": [
            "Metaphase",
            "Anaphase",
            "Telophase",
            "Diplophase"
        ],
        "answer": 3
    },
    {
        "q": "Which constellation contains the center of the Milky Way?",
        "options": [
            "Scorpius",
            "Ophiuchus",
            "Capricornus",
            "Sagittarius"
        ],
        "answer": 3
    },
    {
        "q": "Approximately what percentage of Earth's atmosphere is Oxygen?",
        "options": [
            "54%",
            "78%",
            "7%",
            "21%"
        ],
        "answer": 3
    },
    {
        "q": "What is \"Stenoma\"?",
        "options": [
            "A combat stimulant from WW2",
            "A type of seasoning",
            "A port city in the carribean",
            "A genus of moths"
        ],
        "answer": 3
    },
    {
        "q": "How much radiation does a banana emit?",
        "options": [
            "0.3 Microsievert",
            "0.5 Microsievert",
            "0.7 Microsievert",
            "0.1 Microsievert"
        ],
        "answer": 3
    },
    {
        "q": "What causes the sound of a heartbeat?",
        "options": [
            "Contraction of the heart chambers",
            "Blood exiting the heart",
            "Relaxation of the heart chambers",
            "Closure of the heart valves"
        ],
        "answer": 3
    },
    {
        "q": "Myopia is the scientific term for which condition?",
        "options": [
            "Farsightedness",
            "Double Vision",
            "Clouded Vision",
            "Shortsightedness"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is not one of the groups on the periodic table?",
        "options": [
            "Alkali Metals",
            "Halogens",
            "Noble Gases",
            "Fluorines"
        ],
        "answer": 3
    },
    {
        "q": "What did Gregory Mendel use to test genetic crossovers?",
        "options": [
            "Cats",
            "Flowers",
            "Parrots",
            "Peas"
        ],
        "answer": 3
    },
    {
        "q": "What is the hottest planet in the Solar System?",
        "options": [
            "Mars",
            "Mercury",
            "Jupiter",
            "Venus"
        ],
        "answer": 3
    },
    {
        "q": "How long is a light-year?",
        "options": [
            "1 AU",
            "105.40 Earth-years",
            "501.2 Million Miles",
            "9.461 Trillion Kilometres"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the default theme that is installed with Windows XP?",
        "options": [
            "Neptune",
            "Whistler",
            "Bliss",
            "Luna"
        ],
        "answer": 3
    },
    {
        "q": "What was the name of the image that features as the default background wallpaper for Windows XP?",
        "options": [
            "Azul",
            "Red moon desert",
            "Tulips",
            "Bliss"
        ],
        "answer": 3
    },
    {
        "q": "The Harvard architecture for micro-controllers added which additional bus?",
        "options": [
            "Address",
            "Data",
            "Control",
            "Instruction"
        ],
        "answer": 3
    },
    {
        "q": "What does CPU stand for?",
        "options": [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
            "Central Processing Unit"
        ],
        "answer": 3
    },
    {
        "q": "Lenovo acquired IBM's personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
        "options": [
            "1999",
            "2002",
            "2008",
            "2005"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
        "options": [
            "Enigma Machine",
            "Skipjack",
            "Nautilus",
            "Clipper Chip"
        ],
        "answer": 3
    },
    {
        "q": "On which computer hardware device is the BIOS chip located?",
        "options": [
            "Hard Disk Drive",
            "Central Processing Unit",
            "Graphics Processing Unit",
            "Motherboard"
        ],
        "answer": 3
    },
    {
        "q": "How many kilobytes in one gigabyte (in decimal)?",
        "options": [
            "1024",
            "1000",
            "1048576",
            "1000000"
        ],
        "answer": 3
    },
    {
        "q": "In the server hosting industry IaaS stands for...",
        "options": [
            "Internet as a Service",
            "Internet and a Server",
            "Infrastructure as a Server",
            "Infrastructure as a Service"
        ],
        "answer": 3
    },
    {
        "q": "What major programming language does Unreal Engine 4 use?",
        "options": [
            "Assembly",
            "C#",
            "ECMAScript",
            "C++"
        ],
        "answer": 3
    },
    {
        "q": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
        "options": [
            "HD Graphics 700 ",
            "HD Graphics 600",
            "HD Graphics 7000",
            "HD Graphics 500"
        ],
        "answer": 3
    },
    {
        "q": "What did the name of the Tor Anonymity Network orignially stand for?",
        "options": [
            "The Only Router",
            "The Orange Router",
            "The Ominous Router",
            "The Onion Router"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is not a key value of Agile software development?",
        "options": [
            "Individuals and interactions",
            "Customer collaboration",
            "Responding to change",
            "Comprehensive documentation"
        ],
        "answer": 3
    },
    {
        "q": "In programming, the ternary operator is mostly defined with what symbol(s)?",
        "options": [
            "??",
            "if then",
            "?",
            "?:"
        ],
        "answer": 3
    },
    {
        "q": "What does \"LCD\" stand for?",
        "options": [
            "Language Control Design",
            "Last Common Difference",
            "Long Continuous Design",
            "Liquid Crystal Display"
        ],
        "answer": 3
    },
    {
        "q": "Which computer hardware device provides an interface for all other connected devices to communicate?",
        "options": [
            "Central Processing Unit",
            "Hard Disk Drive",
            "Random Access Memory",
            "Motherboard"
        ],
        "answer": 3
    },
    {
        "q": "What was the first company to use the term \"Golden Master\"?",
        "options": [
            "IBM",
            "Microsoft",
            "Google",
            "Apple"
        ],
        "answer": 3
    },
    {
        "q": "On a standard American QWERTY keyboard, what symbol will you enter if you hold the shift key and press 1?",
        "options": [
            "Dollar Sign",
            "Percent Sign",
            "Asterisk",
            "Exclamation Mark"
        ],
        "answer": 3
    },
    {
        "q": "What is the number of keys on a standard Windows Keyboard?",
        "options": [
            "64",
            "94",
            "76",
            "104"
        ],
        "answer": 3
    },
    {
        "q": "Which of these names was an actual codename for a cancelled Microsoft project?",
        "options": [
            "Enceladus",
            "Pollux",
            "Saturn",
            "Neptune"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following computer components can be built using only NAND gates?",
        "options": [
            "CPU",
            "RAM",
            "Register",
            "ALU"
        ],
        "answer": 3
    },
    {
        "q": "The name of technology company HP stands for what?",
        "options": [
            "Howard Packmann",
            "Husker-Pollosk",
            "Hellman-Pohl",
            "Hewlett-Packard"
        ],
        "answer": 3
    },
    {
        "q": "Linus Torvalds created which of these?",
        "options": [
            "Microsoft Windows",
            "Python",
            "Wikipedia",
            "Linux"
        ],
        "answer": 3
    },
    {
        "q": "Who invented the \"Spanning Tree Protocol\"?",
        "options": [
            "Paul Vixie",
            "Vint Cerf",
            "Michael Roberts",
            "Radia Perlman"
        ],
        "answer": 3
    },
    {
        "q": "How many cores does the Intel i7-6950X have?",
        "options": [
            "12",
            "8",
            "4",
            "10"
        ],
        "answer": 3
    },
    {
        "q": "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
        "options": [
            "Puma",
            "Tiger",
            "Leopard",
            "Cheetah"
        ],
        "answer": 3
    },
    {
        "q": "Australia, Japan, and Southeast Asia are in which ITU Region?",
        "options": [
            "Region 1",
            "Region 2",
            "Region 4",
            "Region 3"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
        "options": [
            "PC-9801",
            "Xmillennium ",
            "MSX",
            "FM-7"
        ],
        "answer": 3
    },
    {
        "q": "What does AD stand for in relation to Windows Operating Systems? ",
        "options": [
            "Alternative Drive",
            "Automated Database",
            "Active Department",
            "Active Directory"
        ],
        "answer": 3
    },
    {
        "q": "Which RAID array type is associated with data mirroring?",
        "options": [
            "RAID 0",
            "RAID 10",
            "RAID 5",
            "RAID 1"
        ],
        "answer": 3
    },
    {
        "q": "Which kind of algorithm is Ron Rivest not famous for creating?",
        "options": [
            "Hashing algorithm",
            "Asymmetric encryption",
            "Stream cipher",
            "Secret sharing scheme"
        ],
        "answer": 3
    },
    {
        "q": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        "options": [
            "Microsoft",
            "Atari",
            "Commodore",
            "Apple"
        ],
        "answer": 3
    },
    {
        "q": "How fast is USB 3.1 Gen 2 theoretically?",
        "options": [
            "5 Gb/s",
            "8 Gb/s",
            "1 Gb/s",
            "10 Gb/s"
        ],
        "answer": 3
    },
    {
        "q": "Whistler was the codename of this Microsoft Operating System.",
        "options": [
            "Windows 2000",
            "Windows 7",
            "Windows 95",
            "Windows XP"
        ],
        "answer": 3
    },
    {
        "q": "HTML is what type of language?",
        "options": [
            "Macro Language",
            "Programming Language",
            "Scripting Language",
            "Markup Language"
        ],
        "answer": 3
    },
    {
        "q": "What does LTS stand for in the software market?",
        "options": [
            "Long Taco Service",
            "Ludicrous Transfer Speed",
            "Ludicrous Turbo Speed",
            "Long Term Support"
        ],
        "answer": 3
    },
    {
        "q": "What is the most preferred image format used for logos in the Wikimedia database?",
        "options": [
            ".png",
            ".jpeg",
            ".gif",
            ".svg"
        ],
        "answer": 3
    },
    {
        "q": "The programming language 'Swift' was created to replace what other programming language?",
        "options": [
            "C#",
            "Ruby",
            "C++",
            "Objective-C"
        ],
        "answer": 3
    },
    {
        "q": "What was the name of the security vulnerability found in Bash in 2014?",
        "options": [
            "Heartbleed",
            "Bashbug",
            "Stagefright",
            "Shellshock"
        ],
        "answer": 3
    },
    {
        "q": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
        "options": [
            "512",
            "1024",
            "500",
            "1000"
        ],
        "answer": 3
    },
    {
        "q": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
        "options": [
            "United States",
            "Germany",
            "China (People's Republic of)",
            "Taiwan"
        ],
        "answer": 3
    },
    {
        "q": "What language does Node.js use?",
        "options": [
            "Java",
            "Java Source",
            "Joomla Source Code",
            "JavaScript"
        ],
        "answer": 3
    },
    {
        "q": "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
        "options": [
            "C#",
            "Python",
            "PHP",
            "JavaScript"
        ],
        "answer": 3
    },
    {
        "q": "Originally used in PCM adapters, what frequency is the standard for sampling audio in the Compact Disc Digital Audio format?",
        "options": [
            "32.0 kHz",
            "1.5 MHz",
            "20.5 kHz",
            "44.1 kHz"
        ],
        "answer": 3
    },
    {
        "q": "While Apple was formed in California, in which western state was Microsoft founded?",
        "options": [
            "Washington",
            "Colorado",
            "Arizona",
            "New Mexico"
        ],
        "answer": 3
    },
    {
        "q": "Which of these people was NOT a founder of Apple Inc?",
        "options": [
            "Steve Jobs",
            "Ronald Wayne",
            "Steve Wozniak",
            "Jonathan Ive"
        ],
        "answer": 3
    },
    {
        "q": "Unix Time is defined as the number of seconds that have elapsed since when?",
        "options": [
            "Midnight, July 4, 1976",
            "Midnight on the creator of Unix's birthday",
            "Midnight, July 4, 1980",
            "Midnight, January 1, 1970"
        ],
        "answer": 3
    },
    {
        "q": "Which one of these is not an official development name for a Ubuntu release?",
        "options": [
            "Trusty Tahr",
            "Utopic Unicorn",
            "Wily Werewolf",
            "Mystic Mansion"
        ],
        "answer": 3
    },
    {
        "q": "What does the International System of Quantities refer 1024 bytes as?",
        "options": [
            "Kylobyte",
            "Kilobyte",
            "Kelobyte",
            "Kibibyte"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the process that sends one qubit of information using two bits of classical information?",
        "options": [
            "Super Dense Coding",
            "Quantum Entanglement",
            "Quantum Programming",
            "Quantum Teleportation"
        ],
        "answer": 3
    },
    {
        "q": "How long is an IPv6 address?",
        "options": [
            "32 bits",
            "64 bits",
            "128 bytes",
            "128 bits"
        ],
        "answer": 3
    },
    {
        "q": "CMOS is tech used for constructing integrated circuits. What does CMOS stand for?",
        "options": [
            "Complementary magnetic-ohms-semiconductor",
            "Computer-made operating system",
            "Computer-made oscillating static",
            "Complementary metal\u2013oxide\u2013semiconductor"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of Layer 7 of the OSI model?",
        "options": [
            "Session",
            "Network",
            "Present",
            "Application"
        ],
        "answer": 3
    },
    {
        "q": "Which of these programming languages is a low-level language?",
        "options": [
            "Python",
            "C#",
            "Pascal",
            "Assembly"
        ],
        "answer": 3
    },
    {
        "q": "When Gmail first launched, how much storage did it provide for your email?",
        "options": [
            "512MB",
            "5GB",
            "Unlimited",
            "1GB"
        ],
        "answer": 3
    },
    {
        "q": "On which day did the World Wide Web go online?",
        "options": [
            "December 17, 1996",
            "November 12, 1990",
            "November 24, 1995",
            "December 20, 1990"
        ],
        "answer": 3
    },
    {
        "q": "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
        "options": [
            "FM Synthesizer",
            "Programmable Sound Generator (PSG)",
            "PCM Sampler",
            "ADPCM Sampler"
        ],
        "answer": 3
    },
    {
        "q": "What does the DOS in Microsoft's first operating system \"MS-DOS\" stand for?",
        "options": [
            "Dumb Operating System",
            "Driver Oriented System",
            "Diskless Operating System",
            "Disk Operating System"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is the oldest of these computers by release date?",
        "options": [
            "Commodore 64",
            "ZX Spectrum",
            "Apple 3",
            "TRS-80"
        ],
        "answer": 3
    },
    {
        "q": "What port does HTTP run on?",
        "options": [
            "53",
            "443",
            "23",
            "80"
        ],
        "answer": 3
    },
    {
        "q": "Which programming language shares its name with an island in Indonesia?",
        "options": [
            "Python",
            "C",
            "Jakarta",
            "Java"
        ],
        "answer": 3
    },
    {
        "q": "What does RAID stand for?",
        "options": [
            "Rapid Access for Indexed Devices",
            "Range of Applications with Identical Designs",
            "Randomized Abstract Identification Description",
            "Redundant Array of Independent Disks"
        ],
        "answer": 3
    },
    {
        "q": "What is the commonly used keyboard shortcut for the 'Copy' function on Windows OS?",
        "options": [
            "Ctrl + X",
            "Alt + C",
            "Alt + X",
            "Ctrl + C"
        ],
        "answer": 3
    },
    {
        "q": "Which data structure does FILO apply to?",
        "options": [
            "Queue",
            "Heap",
            "Tree",
            "Stack"
        ],
        "answer": 3
    },
    {
        "q": "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
        "options": [
            "Stencyl",
            "Construct",
            "Torque 2D",
            "Game Maker"
        ],
        "answer": 3
    },
    {
        "q": "The teapot often seen in many 3D modeling applications is called what?",
        "options": [
            "Pixar Teapot",
            "3D Teapot",
            "Tennessee Teapot",
            "Utah Teapot"
        ],
        "answer": 3
    },
    {
        "q": "In computing, how many bits are in a nibble?",
        "options": [
            "16",
            "32",
            "2",
            "4"
        ],
        "answer": 3
    },
    {
        "q": "The C programming language was created by this American computer scientist. ",
        "options": [
            "Tim Berners Lee",
            "al-Khw\u0101rizm\u012b",
            "Willis Ware",
            "Dennis Ritchie"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following physical typologies are used with Ethernet Networks?",
        "options": [
            "Ring",
            "Mesh",
            "Hex",
            "Star"
        ],
        "answer": 3
    },
    {
        "q": "What was the first commerically available computer processor?",
        "options": [
            "Intel 486SX",
            "TMS 1000",
            "AMD AM386",
            "Intel 4004"
        ],
        "answer": 3
    },
    {
        "q": "Who is the founder of Palantir?",
        "options": [
            "Mark Zuckerberg",
            "Marc Benioff",
            "Jack Dorsey",
            "Peter Thiel"
        ],
        "answer": 3
    },
    {
        "q": "Which computer language would you associate Django framework with?",
        "options": [
            "C#",
            "C++",
            "Java",
            "Python"
        ],
        "answer": 3
    },
    {
        "q": "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
        "options": [
            "Shellshock",
            "Corrupted Blood",
            "Shellscript",
            "Heartbleed"
        ],
        "answer": 3
    },
    {
        "q": "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
        "options": [
            "Session",
            "Data link",
            "Network",
            "Transport"
        ],
        "answer": 3
    },
    {
        "q": "What does SSD stand for?",
        "options": [
            "Solution Source Disk",
            "Solid State Disk",
            "Source Solution Drive",
            "Solid State Drive"
        ],
        "answer": 3
    },
    {
        "q": "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
        "options": [
            "A'B + B'A",
            "A'B'",
            "AB' + AB",
            "A' + B'"
        ],
        "answer": 3
    },
    {
        "q": "In CSS, which of these values CANNOT be used with the \"position\" property?",
        "options": [
            "static",
            "absolute",
            "relative",
            "center"
        ],
        "answer": 3
    },
    {
        "q": "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
        "options": [
            "Broken Authentication",
            "Cross-Site Scripting",
            "Insecure Direct Object References",
            "Injection "
        ],
        "answer": 3
    },
    {
        "q": "In programming, what do you call functions with the same name but different implementations?",
        "options": [
            "Overriding",
            "Abstracting",
            "Inheriting",
            "Overloading"
        ],
        "answer": 3
    },
    {
        "q": "In the programming language \"Python\", which of these statements would display the string \"Hello World\" correctly?",
        "options": [
            "console.log(\"Hello World\")",
            "echo \"Hello World\"",
            "printf(\"Hello World\")",
            "print(\"Hello World\")"
        ],
        "answer": 3
    },
    {
        "q": "What is known as \"the brain\" of the Computer?",
        "options": [
            "Motherboard",
            "Graphics Processing Unit",
            "Keyboard",
            "Central Processing Unit"
        ],
        "answer": 3
    },
    {
        "q": "Generally, which component of a computer draws the most power?",
        "options": [
            "Hard Drive",
            "Processor",
            "Power Supply",
            "Video Card"
        ],
        "answer": 3
    },
    {
        "q": "In networking, what does OSPF stand for?",
        "options": [
            "Order State Part First",
            "Order Sense Ping Find",
            "Open Signal Path Finder",
            "Open Shortest Path First"
        ],
        "answer": 3
    },
    {
        "q": "The Electron computer was released in Britain during 1983 for the home computing market, by which company? ",
        "options": [
            "Sinclair Research",
            "Amstrad PLC",
            "Commodore Business Machines",
            "Acorn Computers"
        ],
        "answer": 3
    },
    {
        "q": "What was the name of the first Bulgarian personal computer?",
        "options": [
            "Pravetz 82",
            "Pravetz 8D",
            "IZOT 1030",
            "IMKO-1"
        ],
        "answer": 3
    },
    {
        "q": "How many bits make up the significand portion of a single precision floating point number?",
        "options": [
            "8",
            "53",
            "15",
            "23"
        ],
        "answer": 3
    },
    {
        "q": "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
        "options": [
            "<scroll></scroll>",
            "<move></move>",
            "<slide></slide>",
            "<marquee></marquee>"
        ],
        "answer": 3
    },
    {
        "q": "Color model CMYK stands for?",
        "options": [
            "Cream, Maroon, Yellow, and Black",
            "Cyan, Magenta, Yellow, and Khaki",
            "Cream, Maroon, Yellow, and Khaki",
            "Cyan, Magenta, Yellow, and Black"
        ],
        "answer": 3
    },
    {
        "q": "In computing terms, typically what does CLI stand for?",
        "options": [
            "Common Language Input",
            "Control Line Interface",
            "Common Language Interface",
            "Command Line Interface"
        ],
        "answer": 3
    },
    {
        "q": "What is largely considered the precursor to the USB format?",
        "options": [
            "SVGA",
            "PCIe",
            "FireWire",
            "PS/2"
        ],
        "answer": 3
    },
    {
        "q": "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        "options": [
            "Fiji",
            "Tuvalu",
            "Marshall Islands",
            "Micronesia"
        ],
        "answer": 3
    },
    {
        "q": "What does the computer software acronym JVM stand for?",
        "options": [
            "Java Vendor Machine",
            "Java Visual Machine",
            "Just Virtual Machine",
            "Java Virtual Machine"
        ],
        "answer": 3
    },
    {
        "q": "What is the code name for the mobile operating system Android 7.0?",
        "options": [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
            "Nougat"
        ],
        "answer": 3
    },
    {
        "q": "In \"Hexadecimal\", what color would be displayed from the color code? \"#00FF00\"?",
        "options": [
            "Red",
            "Blue",
            "Yellow",
            "Green"
        ],
        "answer": 3
    },
    {
        "q": "How many bits are commonly in a single byte?",
        "options": [
            "Six bits",
            "Twelve bits",
            " Fifteen bits",
            "Eight bits"
        ],
        "answer": 3
    },
    {
        "q": "The Windows OS was delevoped by which company?",
        "options": [
            "Apple",
            "Nokia",
            "IBM",
            "Microsoft"
        ],
        "answer": 3
    },
    {
        "q": "All of the following programs are classified as raster graphics editors EXCEPT:",
        "options": [
            "Paint.NET",
            "GIMP",
            "Adobe Photoshop",
            "Inkscape"
        ],
        "answer": 3
    },
    {
        "q": "What does the \"MP\" stand for in MP3?",
        "options": [
            "Music Player",
            "Multi Pass",
            "Micro Point",
            "Moving Picture"
        ],
        "answer": 3
    },
    {
        "q": "What internet protocol was documented in RFC 1459?",
        "options": [
            "HTTP",
            "HTTPS",
            "FTP",
            "IRC"
        ],
        "answer": 3
    },
    {
        "q": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        "options": [
            "Static",
            "Private",
            "Public",
            "Final"
        ],
        "answer": 3
    },
    {
        "q": "America Online (AOL) started out as which of these online service providers?",
        "options": [
            "CompuServe",
            "Prodigy",
            "GEnie",
            "Quantum Link"
        ],
        "answer": 3
    },
    {
        "q": "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
        "options": [
            "Sandy Bridge",
            "Skylake",
            "Broadwell",
            "Coffee Lake"
        ],
        "answer": 3
    },
    {
        "q": "What does the Prt Sc button do?",
        "options": [
            "Nothing",
            "Saves a .png file of what's on the screen in your screenshots folder in photos",
            "Closes all windows",
            "Captures what's on the screen and copies it to your clipboard"
        ],
        "answer": 3
    },
    {
        "q": "This mobile OS held the largest market share in 2012.",
        "options": [
            "Android",
            "BlackBerry",
            "Symbian",
            "iOS"
        ],
        "answer": 3
    },
    {
        "q": "What is the maximum value of a 32-bit signed binary integer?",
        "options": [
            "255",
            "2048",
            "9,223,372,036,854,775,807",
            "2,147,483,647"
        ],
        "answer": 3
    },
    {
        "q": "How many values can a single byte represent?",
        "options": [
            "8",
            "1",
            "1024",
            "256"
        ],
        "answer": 3
    },
    {
        "q": "What does the term MIME stand for, in regards to computing?",
        "options": [
            "Mail Internet Mail Exchange",
            "Multipurpose Interleave Mail Exchange",
            "Mail Interleave Method Exchange",
            "Multipurpose Internet Mail Extensions"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is not a layer in the OSI model for data communications?",
        "options": [
            "Application Layer",
            "Transport Layer",
            "Physical Layer",
            "Connection Layer"
        ],
        "answer": 3
    },
    {
        "q": "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
        "options": [
            "CPU Vent",
            "Temperature Decipator",
            "Heat Vent",
            "Heat Sink"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is NOT a computer science algorithm?",
        "options": [
            "Bubble Sort",
            "Merge Sort",
            "Quick Sort",
            "Float Sort"
        ],
        "answer": 3
    },
    {
        "q": "The acronym \"RIP\" stands for which of these?",
        "options": [
            "Runtime Instance Processes",
            "Regular Interval Processes",
            "Routine Inspection Protocol",
            "Routing Information Protocol"
        ],
        "answer": 3
    },
    {
        "q": "When was the programming language \"C#\" released?",
        "options": [
            "1998",
            "1999",
            "2001",
            "2000"
        ],
        "answer": 3
    },
    {
        "q": "What does the term GPU stand for?",
        "options": [
            "Gaming Processor Unit",
            "Graphite Producing Unit",
            "Graphical Proprietary Unit",
            "Graphics Processing Unit"
        ],
        "answer": 3
    },
    {
        "q": "What kind of memory is used on memory cache?",
        "options": [
            "DRAM",
            "ROM",
            "Flash",
            "SRAM"
        ],
        "answer": 3
    },
    {
        "q": "On Twitter, what was the original character limit for a Tweet?",
        "options": [
            "120",
            "160",
            "100",
            "140"
        ],
        "answer": 3
    },
    {
        "q": "What was the first Android version specifically optimized for tablets?",
        "options": [
            "Eclair",
            "Froyo",
            "Marshmellow",
            "Honeycomb"
        ],
        "answer": 3
    },
    {
        "q": "What does the term USB stand for?",
        "options": [
            "Universal Simtex Blot",
            "Unified Signal Bus",
            "Unityped Semtex Backer",
            "Universal Serial Bus"
        ],
        "answer": 3
    },
    {
        "q": "How many Hz does the video standard PAL support?",
        "options": [
            "59",
            "60",
            "25",
            "50"
        ],
        "answer": 3
    },
    {
        "q": "Approximately how many Apple I personal computers were created?",
        "options": [
            "100",
            "500",
            "1000",
            "200"
        ],
        "answer": 3
    },
    {
        "q": "Nvidia's headquarters are based in which Silicon Valley city?",
        "options": [
            "Palo Alto",
            "Cupertino",
            "Mountain View",
            "Santa Clara"
        ],
        "answer": 3
    },
    {
        "q": "What programming language was GitHub written in?",
        "options": [
            "JavaScript",
            "Python",
            "Lua",
            "Ruby"
        ],
        "answer": 3
    },
    {
        "q": "What does the 'S' in the RSA encryption algorithm stand for?",
        "options": [
            "Secure",
            "Schottky",
            "Stable",
            "Shamir"
        ],
        "answer": 3
    },
    {
        "q": "Which operating system was released first?",
        "options": [
            "Windows",
            "Linux",
            "OS/2",
            "Mac OS"
        ],
        "answer": 3
    },
    {
        "q": "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
        "options": [
            "Four Years",
            "Two Years",
            "Eight Years",
            "Year"
        ],
        "answer": 3
    },
    {
        "q": "Which SQL keyword is used to fetch data from a database?",
        "options": [
            "INDEX",
            "VALUES",
            "EXEC",
            "SELECT"
        ],
        "answer": 3
    },
    {
        "q": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
        "options": [
            "Zilog Z80",
            "Yamaha YM2612",
            "Intel 8088",
            "Motorola 68000"
        ],
        "answer": 3
    },
    {
        "q": "What was the name given to Android 4.3?",
        "options": [
            "Lollipop",
            "Nutella",
            "Froyo",
            "Jelly Bean"
        ],
        "answer": 3
    },
    {
        "q": "What does the acronym CDN stand for in terms of networking?",
        "options": [
            "Content Distribution Network",
            "Computational Data Network",
            "Compressed Data Network",
            "Content Delivery Network"
        ],
        "answer": 3
    },
    {
        "q": "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
        "options": [
            "Cherry MX Black",
            "Cherry MX Red",
            "Cherry MX Brown",
            "Cherry MX Blue"
        ],
        "answer": 3
    },
    {
        "q": "In web design, what does CSS stand for?",
        "options": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ],
        "answer": 3
    },
    {
        "q": "In computing, what does MIDI stand for?",
        "options": [
            "Musical Interface of Digital Instruments",
            "Modular Interface of Digital Instruments",
            "Musical Instrument Data Interface",
            "Musical Instrument Digital Interface"
        ],
        "answer": 3
    },
    {
        "q": "What is the domain name for the country Tuvalu?",
        "options": [
            ".tu",
            ".tt",
            ".tl",
            ".tv"
        ],
        "answer": 3
    },
    {
        "q": "The numbering system with a radix of 16 is more commonly referred to as ",
        "options": [
            "Binary",
            "Duodecimal",
            "Octal",
            "Hexidecimal"
        ],
        "answer": 3
    },
    {
        "q": "According to the United States' CDC, one in how many Americans die annually due to smoking?",
        "options": [
            "Twenty",
            "Ten",
            "One hundred",
            "Five"
        ],
        "answer": 3
    },
    {
        "q": "What is Tasmania?",
        "options": [
            "A flavor of Ben and Jerry's ice-cream",
            "A Psychological Disorder",
            "The Name of a Warner Brothers Cartoon Character",
            "An Australian State"
        ],
        "answer": 3
    },
    {
        "q": "What is a dead mall?",
        "options": [
            "A mall with no stores",
            "A mall that has been condemed",
            "A mall after business hours",
            "A mall with high vacancy rates or low consumer foot traffic"
        ],
        "answer": 3
    },
    {
        "q": "What fast food chain has the most locations globally? ",
        "options": [
            "Starbucks",
            "McDonalds",
            "KFC",
            "Subway"
        ],
        "answer": 3
    },
    {
        "q": "What does VR stand for?",
        "options": [
            "Very Real",
            "Visual Recognition",
            "Voice Recognition",
            "Virtual Reality"
        ],
        "answer": 3
    },
    {
        "q": "Which mountain has the highest peak in Africa?",
        "options": [
            "Mount Kenya, Kenya",
            "Mount Stanley, DR Congo/Uganda",
            "Mount Speke, Uganda",
            "Mount Kilimanjaro, Tanzania"
        ],
        "answer": 3
    },
    {
        "q": "What is the Spanish word for \"donkey\"?",
        "options": [
            "Caballo",
            "Toro",
            "Perro",
            "Burro"
        ],
        "answer": 3
    },
    {
        "q": "Frank Lloyd Wright was the architect behind what famous building?",
        "options": [
            "Villa Savoye",
            "Sydney Opera House",
            "The Space Needle",
            "The Guggenheim"
        ],
        "answer": 3
    },
    {
        "q": "What is the last letter of the Greek alphabet?",
        "options": [
            "Mu",
            "Epsilon",
            "Kappa",
            "Omega"
        ],
        "answer": 3
    },
    {
        "q": "The term \"scientist\" was coined in which year?",
        "options": [
            "1933",
            "1942",
            "1796",
            "1833"
        ],
        "answer": 3
    },
    {
        "q": "What is the romanized Russian word for \"winter\"?",
        "options": [
            "Leto",
            "Vesna",
            "Osen'",
            "Zima"
        ],
        "answer": 3
    },
    {
        "q": "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
        "options": [
            "Transformers",
            "Care Bears",
            "Rubik\u2019s Cube",
            "Cabbage Patch Kids"
        ],
        "answer": 3
    },
    {
        "q": "What is the romanized Japanese word for \"university\"?",
        "options": [
            "Toshokan",
            "Jimusho",
            "Shokudou",
            "Daigaku"
        ],
        "answer": 3
    },
    {
        "q": "What is the largest living species of penguin?",
        "options": [
            "King",
            "Gentoo",
            "Adele",
            "Emperor"
        ],
        "answer": 3
    },
    {
        "q": "Which mountain has the highest peak in North America?",
        "options": [
            "Mount Saint Elias, US/Canada border",
            "Mount Logan, Canada",
            "Pico de Orizaba, Mexico",
            "Denali, USA"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of NASA\u2019s most famous space telescope?",
        "options": [
            "Big Eye",
            "Death Star",
            "Millenium Falcon",
            "Hubble Space Telescope"
        ],
        "answer": 3
    },
    {
        "q": "Xanthophobia is the fear of what color?",
        "options": [
            "Blue",
            "Red",
            "Green",
            "Yellow"
        ],
        "answer": 3
    },
    {
        "q": "Which of these American singers and songwriters won a Nobel Prize in Literature?",
        "options": [
            "Buddy Holly",
            "Johnny Cash",
            "Alice Cooper",
            "Bob Dylan"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following card games revolves around numbers and basic math?",
        "options": [
            "Go Fish",
            "Twister",
            "Munchkin",
            "Uno"
        ],
        "answer": 3
    },
    {
        "q": "What was the name given to Japanese military dictators who ruled the country through the 12th and 19th Century?",
        "options": [
            "Ninja",
            "Samurai",
            "Shinobi",
            "Shogun"
        ],
        "answer": 3
    },
    {
        "q": "Terry Gilliam was an animator that worked with which British comedy group?",
        "options": [
            "The Goodies\u200e",
            "The League of Gentlemen\u200e",
            "The Penny Dreadfuls",
            "Monty Python"
        ],
        "answer": 3
    },
    {
        "q": "How many letters are there in the English alphabet?",
        "options": [
            "28",
            "23",
            "24",
            "26"
        ],
        "answer": 3
    },
    {
        "q": "In what year did Halley's Comet, which will not appear again until the year 2061, previously approach Earth?",
        "options": [
            "2001",
            "1942",
            "1909",
            "1986"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the popular animatronic singing fish prop, singing such hits such as \"Don't Worry, Be Happy\"?",
        "options": [
            "Big Billy Bass",
            "Singing Fish",
            "Sardeen",
            "Big Mouth Billy Bass"
        ],
        "answer": 3
    },
    {
        "q": "What is the full meaning of RAM?",
        "options": [
            "Random Assist Memory",
            "Rand Assist Mandate",
            "Ram",
            "Random Access Memory"
        ],
        "answer": 3
    },
    {
        "q": "In the English language, what is the name of the \"&\" character?",
        "options": [
            "Eightslash",
            "And Sign",
            "Obelus ",
            "Ampersand"
        ],
        "answer": 3
    },
    {
        "q": "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
        "options": [
            "13%",
            "20%",
            "7%",
            "28%"
        ],
        "answer": 3
    },
    {
        "q": "Going by the International Code of Signals, which single flag is interpreted as \"I require assistance (not distress)\"?",
        "options": [
            "Kilo",
            "Papa",
            "Delta",
            "Victor"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is the IATA code for Manchester Airport?",
        "options": [
            "EGLL",
            "LHR",
            "EGCC",
            "MAN"
        ],
        "answer": 3
    },
    {
        "q": "What is the defining characteristic of someone who is described as hirsute?",
        "options": [
            "Rude",
            "Funny",
            "Tall",
            "Hairy"
        ],
        "answer": 3
    },
    {
        "q": "What do the letters of the fast food chain KFC stand for?",
        "options": [
            "Kentucky Fresh Cheese",
            "Kibbled Freaky Cow",
            "Kiwi Food Cut",
            "Kentucky Fried Chicken"
        ],
        "answer": 3
    },
    {
        "q": "In the MMO RPG \"Realm of the Mad God\", what dungeon is widely considered to be the most difficult?",
        "options": [
            "Snake Pit",
            "The Tomb of the Acient's",
            "The Puppet Master's Theater",
            "The Shatter's"
        ],
        "answer": 3
    },
    {
        "q": "Which is the most popular spoken language in the Southern Hemisphere?",
        "options": [
            "English ",
            "Spanish",
            "French",
            "Portuguese"
        ],
        "answer": 3
    },
    {
        "q": "Who is depicted on the US hundred dollar bill?",
        "options": [
            "George Washington",
            "Abraham Lincoln",
            "Thomas Jefferson",
            "Benjamin Franklin"
        ],
        "answer": 3
    },
    {
        "q": "Which sign of the zodiac comes between Virgo and Scorpio?",
        "options": [
            "Gemini",
            "Taurus",
            "Capricorn",
            "Libra"
        ],
        "answer": 3
    },
    {
        "q": "Of the following months, which has the most amount of days?",
        "options": [
            "April",
            "September",
            "November ",
            "December"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following correctly describes Japanese word order?",
        "options": [
            "Subject Verb Object",
            "Verb Subject Object",
            "Verb Object Subject",
            "Subject Object Verb"
        ],
        "answer": 3
    },
    {
        "q": "The New York Times slogan is, \u201cAll the News That\u2019s Fit to\u2026\u201d",
        "options": [
            "Digest",
            "Look",
            "Read",
            "Print"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following languages does NOT use gender as a part of its grammar?",
        "options": [
            "German",
            "Danish",
            "Polish",
            "Turkish"
        ],
        "answer": 3
    },
    {
        "q": "The likeness of which president is featured on the rare $2 bill of USA currency?",
        "options": [
            "Martin Van Buren",
            "Ulysses Grant",
            "John Quincy Adams",
            "Thomas Jefferson"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following carbonated soft drinks were introduced first?",
        "options": [
            "Coca-Cola",
            "Sprite",
            "Mountain Dew",
            "Dr. Pepper"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the antagonist group in Danganronpa Another Episode: Ultra Despair Girls?",
        "options": [
            "The Monokubs",
            "Warriors of Despair",
            "The Ultimate Despair",
            "Warriors of Hope"
        ],
        "answer": 3
    },
    {
        "q": "In ancient Greece, if your job were a \"hippeus\" which of these would you own?",
        "options": [
            "Weave",
            "Guitar",
            "Boat",
            "Horse"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the company in Lethal Company?",
        "options": [
            "Planet Scrap Co.",
            "Lethal Robotics",
            "Gordian Shipping Co.",
            "The Company"
        ],
        "answer": 3
    },
    {
        "q": "What is on display in the Madame Tussaud's museum in London?",
        "options": [
            "Designer clothing",
            "Unreleased film reels",
            "Vintage cars",
            "Wax sculptures"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is NOT one of Aesop's fables?",
        "options": [
            "The Fox and the Grapes",
            "The Tortoise and the Hare",
            "The Frog and the Ox",
            "The Fox and the Hound"
        ],
        "answer": 3
    },
    {
        "q": "Scotch whisky and Drambuie make up which cocktail?",
        "options": [
            "Screwdriver",
            "Sex on the Beach",
            "Manhattan",
            "Rusty Nail"
        ],
        "answer": 3
    },
    {
        "q": "What year was the first Apple iPod introduced?",
        "options": [
            "2000",
            "1999",
            "1998",
            "2001"
        ],
        "answer": 3
    },
    {
        "q": "Who is the founder of \"The Lego Group\"?",
        "options": [
            " Jens Niels Christiansen",
            "Kirstine Christiansen",
            " Gerhardt Kirk Christiansen",
            "Ole Kirk Christiansen"
        ],
        "answer": 3
    },
    {
        "q": "Which one of the following rhythm games was made by Harmonix?",
        "options": [
            "Meat Beat Mania",
            "Guitar Hero Live",
            "Dance Dance Revolution",
            "Rock Band"
        ],
        "answer": 3
    },
    {
        "q": "What alcoholic drink is made from molasses?",
        "options": [
            "Gin",
            "Vodka",
            "Whisky",
            "Rum"
        ],
        "answer": 3
    },
    {
        "q": "How many fingers does a single human hand have?",
        "options": [
            "Five",
            "Ten",
            "Eight",
            "Four"
        ],
        "answer": 3
    },
    {
        "q": "How many syllables make up a haiku?",
        "options": [
            "15",
            "10",
            "21",
            "17"
        ],
        "answer": 3
    },
    {
        "q": "Whose greyscale face is on the kappa emoticon on Twitch?",
        "options": [
            "Justin DeSeno",
            "John DeSeno",
            "Jimmy DeSeno",
            "Josh DeSeno"
        ],
        "answer": 3
    },
    {
        "q": "Roughly how many ingested apple seeds would it take to receive a fatal dose of cyanide?",
        "options": [
            "20",
            "2,000",
            "20,000",
            "200"
        ],
        "answer": 3
    },
    {
        "q": "On average, Americans consume 100 pounds of what per second?",
        "options": [
            "Potatoes",
            "Donuts",
            "Cocaine",
            "Chocolate"
        ],
        "answer": 3
    },
    {
        "q": "Originally another word for poppy, coquelicot is a shade of what?",
        "options": [
            "Green",
            "Blue",
            "Pink",
            "Red"
        ],
        "answer": 3
    },
    {
        "q": "Which slogan did the fast food company, McDonald's, use before their \"I'm Lovin' It\" slogan?",
        "options": [
            "Why Pay More!?",
            "Have It Your Way",
            "Making People Happy Through Food",
            "We Love to See You Smile"
        ],
        "answer": 3
    },
    {
        "q": "What is the Zodiac symbol for Gemini?",
        "options": [
            "Fish",
            "Scales",
            "Maiden",
            "Twins"
        ],
        "answer": 3
    },
    {
        "q": "In flight systems, what does the initialism \"TCAS\" stand for?",
        "options": [
            "Traffic Communication Alert System",
            "Traffic Configuration Alignment System",
            "Traffic Call-sign Abbreviation System",
            "Traffic Collision Avoidance System"
        ],
        "answer": 3
    },
    {
        "q": "Which product did Nokia, the telecommunications company, originally sell?",
        "options": [
            "Phones",
            "Computers",
            "Processors",
            "Paper"
        ],
        "answer": 3
    },
    {
        "q": "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
        "options": [
            "Iron",
            "Nickel",
            "Silver",
            "Copper"
        ],
        "answer": 3
    },
    {
        "q": "Which language is NOT Indo-European?",
        "options": [
            "Russian",
            "Greek",
            "Latvian",
            "Hungarian"
        ],
        "answer": 3
    },
    {
        "q": "Earth is located in which galaxy?",
        "options": [
            "The Mars Galaxy",
            "The Galaxy Note",
            "The Black Hole",
            "The Milky Way Galaxy"
        ],
        "answer": 3
    },
    {
        "q": "What do the letters in the GMT time zone stand for?",
        "options": [
            "Global Meridian Time",
            "General Median Time",
            "Glasgow Man Time",
            "Greenwich Mean Time"
        ],
        "answer": 3
    },
    {
        "q": "What alcoholic drink is mainly made from juniper berries?",
        "options": [
            "Vodka",
            "Rum",
            "Tequila",
            "Gin"
        ],
        "answer": 3
    },
    {
        "q": "Which country developed the AK-47 assault rifle?",
        "options": [
            "Iran",
            "Israel",
            "Poland",
            "Soviet Union"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the very first video uploaded to YouTube?",
        "options": [
            "tribute",
            "carrie rides a truck",
            "Her new puppy from great grandpa vern.",
            "Me at the zoo"
        ],
        "answer": 3
    },
    {
        "q": "What organ of the body produces bile?",
        "options": [
            "Gallbladder",
            "Pancreas",
            "Stomach",
            "Liver"
        ],
        "answer": 3
    },
    {
        "q": "Nephelococcygia is the practice of doing what?",
        "options": [
            "Sleeping with your eyes open",
            "Breaking glass with your voice",
            "Swimming in freezing water",
            "Finding shapes in clouds"
        ],
        "answer": 3
    },
    {
        "q": "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a \"Guardians of the Galaxy\" themed ride?",
        "options": [
            "The Haunted Mansion",
            "Pirates of the Caribbean",
            "Peter Pan's Flight",
            "Twilight Zone Tower of Terror"
        ],
        "answer": 3
    },
    {
        "q": "What is the romanized Korean word for \"heart\"?",
        "options": [
            "Aejeong",
            "Jeongsin",
            "Segseu",
            "Simjang"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is not the host of a program on NPR?",
        "options": [
            "Terry Gross",
            "Ira Glass",
            "Peter Sagal",
            "Ben Shapiro"
        ],
        "answer": 3
    },
    {
        "q": "When was Hubba Bubba first introduced?",
        "options": [
            "1984",
            "1972",
            "1980",
            "1979"
        ],
        "answer": 3
    },
    {
        "q": "All Souls and Merton are constituent colleges of what university?",
        "options": [
            "Cambridge",
            "Manchester",
            "Leeds",
            "Oxford"
        ],
        "answer": 3
    },
    {
        "q": "Which musician has collaborated with American producer Porter Robinson and released the 2016 song \"Shelter\"?",
        "options": [
            "Mat Zo",
            "deadmau5",
            "Zedd",
            "Madeon"
        ],
        "answer": 3
    },
    {
        "q": "When someone is inexperienced they are said to be what color?",
        "options": [
            "Red",
            "Blue",
            "Yellow",
            "Green"
        ],
        "answer": 3
    },
    {
        "q": "What do the Dutch call their language?",
        "options": [
            "Dansk",
            "Deutsch",
            "Hollander",
            "Nederlands"
        ],
        "answer": 3
    },
    {
        "q": "What was the soft drink Pepsi originally introduced as?",
        "options": [
            "Pepsin Pop",
            "Carolina Cola",
            "Pepsin Syrup",
            "Brad's Drink"
        ],
        "answer": 3
    },
    {
        "q": "Death Valley's Badwater Basin is North America's point of lowest elevation at how many feet below sea level?",
        "options": [
            "79 feet",
            "1,640 feet",
            "12,092 feet",
            "282 feet"
        ],
        "answer": 3
    },
    {
        "q": "What is the weight of a Gold Bar in Fallout: New Vegas?",
        "options": [
            "30 Pounds",
            "40 Pounds",
            "32.50 Pounds",
            "35 Pounds"
        ],
        "answer": 3
    },
    {
        "q": "Which famed architect, who died in 2019 aged 102, designed the glass pyramid at the Louvre museum in Paris?",
        "options": [
            "Pascale Gu\u00e9dot",
            "Frank Gehry",
            "Wang Shu",
            "I. M. Pei"
        ],
        "answer": 3
    },
    {
        "q": "Rolex is a company that specializes in what type of product?",
        "options": [
            "Cars",
            "Computers",
            "Sports equipment",
            "Watches"
        ],
        "answer": 3
    },
    {
        "q": "If you are caught \"Goldbricking\", what are you doing wrong?",
        "options": [
            "Smoking",
            "Stealing",
            "Cheating",
            "Slacking"
        ],
        "answer": 3
    },
    {
        "q": "What step in cellular respiration forms ATP?",
        "options": [
            "Glycolysis",
            "Pyruvate Oxidation",
            "Calvin Cycle",
            "Oxidative Phosphorylation"
        ],
        "answer": 3
    },
    {
        "q": "What is the average life span of a garden ant?",
        "options": [
            "24 hours",
            "1 week",
            "3 years",
            "15 years"
        ],
        "answer": 3
    },
    {
        "q": "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
        "options": [
            "The Dream Team",
            "The Bushwhackers",
            "The British Bulldogs",
            "Demolition"
        ],
        "answer": 3
    },
    {
        "q": "The Canadian $1 coin is colloquially known as a what?",
        "options": [
            "Boolie",
            "Foolie",
            "Moodie",
            "Loonie"
        ],
        "answer": 3
    },
    {
        "q": "What do sailors call the right side of a boat?",
        "options": [
            "Port",
            "Stern",
            "Bow",
            "Starboard"
        ],
        "answer": 3
    },
    {
        "q": "Which mountain has the highest peak in Europe?",
        "options": [
            "Shkhara, Georgia",
            "Mount Ararat, Turkey",
            "Mont Blanc, France",
            "Mount Elbrus, Russia"
        ],
        "answer": 3
    },
    {
        "q": "What is the name of the alcoholic beverage made from potatoes or grains that originates from Poland and Russia?",
        "options": [
            "Absinthe",
            "Rum",
            "Sake",
            "Vodka"
        ],
        "answer": 3
    },
    {
        "q": "Out of these four buildings, which one is the tallest, with a height of 1,483 ft (451.9 m)?",
        "options": [
            "Zifeng Tower, China",
            "Trump Intl. Hotel & Tower, United States",
            "Al Hamra Tower, Kuwait",
            "Petronas Twin Towers, Malaysia"
        ],
        "answer": 3
    },
    {
        "q": "Which company did Valve cooperate with in the creation of the Vive?",
        "options": [
            "Oculus",
            "Google",
            "Razer",
            "HTC"
        ],
        "answer": 3
    },
    {
        "q": "In a standard Gregorian calendar, how many months begin with the letter 'J'?",
        "options": [
            "Four",
            "Five",
            "Two",
            "Three"
        ],
        "answer": 3
    },
    {
        "q": "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
        "options": [
            "Yelloh Village",
            "Keycamp",
            "Villa Plus",
            "Center Parcs"
        ],
        "answer": 3
    },
    {
        "q": "What is the most frequently used letter in the english alphabet?",
        "options": [
            "A",
            "I",
            "O",
            "E"
        ],
        "answer": 3
    },
    {
        "q": "What nuts are used in the production of marzipan?",
        "options": [
            "Peanuts",
            "Walnuts",
            "Pistachios",
            "Almonds"
        ],
        "answer": 3
    },
    {
        "q": "What is the name given to Indian food cooked over charcoal in a clay oven?",
        "options": [
            "Biryani",
            "Pani puri",
            "Tiki masala",
            "Tandoori"
        ],
        "answer": 3
    },
    {
        "q": "What is the highest number of Michelin stars a restaurant can receive?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Three"
        ],
        "answer": 3
    },
    {
        "q": "In which year did Ghana gain independence?",
        "options": [
            "1947",
            "1960",
            "1958",
            "1957"
        ],
        "answer": 3
    },
    {
        "q": "What is a Burgee?",
        "options": [
            "A rope",
            "A window",
            "A type of food",
            "A flag"
        ],
        "answer": 3
    },
    {
        "q": "The words \"bungalow\" and \"shampoo\" originate from the languages of which country?",
        "options": [
            "Papua New Guinea",
            "Ethiopia",
            "China",
            "India"
        ],
        "answer": 3
    },
    {
        "q": "The Quran is the holy book of which Abrahamic religion?",
        "options": [
            "Christianity",
            "Judaism",
            "Rastafarianism",
            "Islam"
        ],
        "answer": 3
    },
    {
        "q": "Which country drives on the left side of the road?",
        "options": [
            "Germany",
            "Russia",
            "China",
            "Japan"
        ],
        "answer": 3
    },
    {
        "q": "Who is considered the \"Father of Modern Philosophy\"?",
        "options": [
            "Plato",
            "Albert Einstein",
            "Antoine Lavoiser",
            "Ren\u00e9 Descartes"
        ],
        "answer": 3
    },
    {
        "q": "Which of these cities does NOT have a United States Minting location?",
        "options": [
            "San Fransisco, CA",
            "Philidelphia, PA",
            "West Point, NY",
            "St. Louis, MO"
        ],
        "answer": 3
    },
    {
        "q": "In Half-Life, what is the name of the alien that attaches to heads?",
        "options": [
            "Bullsquid",
            "Vortigaunt",
            "Facehugger",
            "Headcrab"
        ],
        "answer": 3
    },
    {
        "q": "Which language is most widely spoken in Switzerland?",
        "options": [
            "French",
            "Italian",
            "Swiss",
            "German"
        ],
        "answer": 3
    },
    {
        "q": "According to the BBPA, what is the most common pub name in the UK?",
        "options": [
            "Royal Oak",
            "White Hart",
            "King's Head",
            "Red Lion"
        ],
        "answer": 3
    },
    {
        "q": "What country does sushi & karaoke come from?",
        "options": [
            "China",
            "South Korea",
            "Vietnam",
            "Japan"
        ],
        "answer": 3
    },
    {
        "q": "What is the nickname of the US state of California?",
        "options": [
            "Sunshine State",
            "Bay State",
            "Treasure State",
            "Golden State"
        ],
        "answer": 3
    },
    {
        "q": "Linus Pauling, one of the only winners of multiple Nobel Prizes, earned his Nobel Prizes in Chemistry and what?",
        "options": [
            "Physics",
            "Economics",
            "Physiology/Medicine",
            "Peace"
        ],
        "answer": 3
    },
    {
        "q": "What is the full title of the Prime Minister of the UK?",
        "options": [
            "Duke of Cambridge",
            "Her Majesty's Loyal Opposition",
            "Manager of the Crown Estate",
            "First Lord of the Treasury"
        ],
        "answer": 3
    },
    {
        "q": "The drug cartel run by Pablo Escobar originated in which South American city?",
        "options": [
            "Bogot\u00e1",
            "Quito",
            "Cali",
            "Medell\u00edn"
        ],
        "answer": 3
    },
    {
        "q": "Antibiotics are generally taken to combat what?",
        "options": [
            "Viruses",
            "Migraines",
            "Muscular pains",
            "Bacterial infections"
        ],
        "answer": 3
    },
    {
        "q": "What year was Walt Disney born?",
        "options": [
            "1902",
            "1903",
            "1900",
            "1901"
        ],
        "answer": 3
    },
    {
        "q": "Which of these words means \"idle spectator\"?",
        "options": [
            "Gossypiboma",
            "Jentacular",
            "Meupareunia",
            "Gongoozler"
        ],
        "answer": 3
    },
    {
        "q": "In \"Shrek\", what comedic actor voices Donkey?",
        "options": [
            "Chris Rock",
            "Richard Pryor",
            "Bernie Mac",
            "Eddie Murphy"
        ],
        "answer": 3
    },
    {
        "q": "Which of these is the name of a Japanese system of alternative medicine, literally meaning \"finger pressure\"?",
        "options": [
            "Ukiyo",
            "Majime",
            "Ikigai",
            "Shiatsu"
        ],
        "answer": 3
    },
    {
        "q": "Astraphobia is the irrational fear of what?",
        "options": [
            "Rain",
            "Wind",
            "Snow",
            "Thunder"
        ],
        "answer": 3
    },
    {
        "q": "Virtual reality company Oculus VR lost which of it's co-founders in a freak car accident in 2013?",
        "options": [
            "Nate Mitchell",
            "Jack McCauley",
            "Palmer Luckey",
            "Andrew Scott Reisse"
        ],
        "answer": 3
    },
    {
        "q": "Directly between the Washington Monument and the Reflecting Pool is a memorial to which war?",
        "options": [
            "Vietnam War",
            "American Civil War",
            "American Revolutionary War",
            "World War II"
        ],
        "answer": 3
    },
    {
        "q": "Which logical fallacy means to attack the character of your opponent rather than their arguments?",
        "options": [
            "Post hoc ergo propter hoc",
            "Tu quoque",
            "Argumentum ad populum",
            "Ad hominem"
        ],
        "answer": 3
    },
    {
        "q": "What direction does the Statue of Liberty face?",
        "options": [
            "Southwest",
            "Northwest",
            "Northeast",
            "Southeast"
        ],
        "answer": 3
    },
    {
        "q": "When was the Declaration of Independence approved by the Second Continental Congress?",
        "options": [
            "May 4, 1776",
            "June 4, 1776",
            "July 2, 1776",
            "July 4, 1776"
        ],
        "answer": 3
    },
    {
        "q": "When did the website \"Facebook\" launch?",
        "options": [
            "2005",
            "2003",
            "2006",
            "2004"
        ],
        "answer": 3
    },
    {
        "q": "In \"Resident Evil 3\", how many inventory slots does Jill have at the start of the game?",
        "options": [
            "6",
            "10",
            "12",
            "8"
        ],
        "answer": 3
    },
    {
        "q": "What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
        "options": [
            "Stealth Blimp",
            "Jet",
            "Space Capsule",
            "Helicopter"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following  British Monarchs never appeared on a circulated pound sterling coin?",
        "options": [
            "Victoria",
            "George VI",
            "Charles II",
            "Edward VIII"
        ],
        "answer": 3
    },
    {
        "q": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        "options": [
            "Sword",
            "Pen",
            "Cellphone",
            "Key"
        ],
        "answer": 3
    },
    {
        "q": "Which of these Indian languages is not part of the Indo-European language family?",
        "options": [
            "Hindi",
            "Punjabi",
            "Urdu",
            "Tamil"
        ],
        "answer": 3
    },
    {
        "q": "Named after the mallow flower, mauve is a shade of what?",
        "options": [
            "Red",
            "Brown",
            "Pink",
            "Purple"
        ],
        "answer": 3
    },
    {
        "q": "What year was Queen Elizabeth II born?",
        "options": [
            "1923",
            "1929",
            "1930",
            "1926"
        ],
        "answer": 3
    },
    {
        "q": "What is a \"dakimakura\"?",
        "options": [
            "A Chinese meal, essentially composed of fish",
            "A yoga posture",
            "A word used to describe two people who truly love each other",
            "A body pillow"
        ],
        "answer": 3
    },
    {
        "q": "What is the first book of the Old Testament?",
        "options": [
            "Exodus",
            "Leviticus",
            "Numbers",
            "Genesis"
        ],
        "answer": 3
    },
    {
        "q": "Which is the capital of Spain?",
        "options": [
            "Paris",
            "Barcelona",
            "Lisboa",
            "Madrid"
        ],
        "answer": 3
    },
    {
        "q": "In the Morse code, which letter is indicated by 3 dots? ",
        "options": [
            "O",
            "A",
            "C",
            "S"
        ],
        "answer": 3
    },
    {
        "q": "In what year did Canada stop producing the penny?",
        "options": [
            "2013",
            "2011",
            "2010",
            "2012"
        ],
        "answer": 3
    },
    {
        "q": "How many cards are there in a standard deck of playing cards?",
        "options": [
            "32",
            "40",
            "64",
            "52"
        ],
        "answer": 3
    },
    {
        "q": "Which church's interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?",
        "options": [
            "Catania Cathedral",
            "St. Mark\u2019s Basilica",
            "The Duomo of Florence",
            "St. Peter's Basilica"
        ],
        "answer": 3
    },
    {
        "q": "What is the famous Papa John's last name?",
        "options": [
            "Chowder",
            "Williams",
            "ANDERSON",
            "Schnatter"
        ],
        "answer": 3
    },
    {
        "q": "What English word means to \"think deeply\"?",
        "options": [
            "Confiscate",
            "Constipate",
            "Condensate",
            "Contemplate"
        ],
        "answer": 3
    },
    {
        "q": "What is the shape of the toy invented by Hungarian professor Ern\u0151 Rubik?",
        "options": [
            "Sphere",
            "Cylinder",
            "Pyramid",
            "Cube"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following chemicals are found in eggplant seeds?",
        "options": [
            "Mescaline",
            "Cyanide",
            "Psilocybin",
            "Nicotine"
        ],
        "answer": 3
    },
    {
        "q": "Which of these companies does NOT manufacture automobiles?",
        "options": [
            "Nissan",
            "GMC",
            "Fiat",
            "Ducati"
        ],
        "answer": 3
    },
    {
        "q": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
        "options": [
            "Alan Sugar",
            "Donald Trump",
            "Bill Gates",
            "Richard Branson"
        ],
        "answer": 3
    },
    {
        "q": "Why is the night sky dark? ",
        "options": [
            "Dust clouds absorb light ",
            "Redshift doesn't let us see distant stars ",
            "Quantum mechanics",
            "The universe is finite in age and size"
        ],
        "answer": 3
    },
    {
        "q": "How tall is the Burj Khalifa?",
        "options": [
            "2,717 ft",
            "2,546 ft",
            "3,024 ft",
            "2,722 ft"
        ],
        "answer": 3
    },
    {
        "q": "The word \"abulia\" means which of the following?",
        "options": [
            "The inability to stand up",
            "The inability to concentrate on anything",
            "A feverish desire to rip one's clothes off",
            "The inability to make decisions"
        ],
        "answer": 3
    },
    {
        "q": "Which mountain has the highest peak in South America?",
        "options": [
            "Ojos del Salado, Argentina/Chile border",
            "Monte Pissis, Argentina",
            "Huascar\u00e1n, Peru",
            "Aconcagua, Argentina"
        ],
        "answer": 3
    },
    {
        "q": "What is the Portuguese word for \"Brazil\"?",
        "options": [
            "Brazil",
            "Brasilia",
            "Bras\u00edl",
            "Brasil"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following is not another name for the eggplant?",
        "options": [
            "Brinjal",
            "Guinea Squash",
            "Melongene",
            "Potimarron"
        ],
        "answer": 3
    },
    {
        "q": "Which type of cutlery is most suited for eating soup?",
        "options": [
            "Fork",
            "Knife",
            "Chopsticks",
            "Spoon"
        ],
        "answer": 3
    },
    {
        "q": "What is the largest organ of the human body?",
        "options": [
            "Heart",
            "large Intestine",
            "Liver",
            "Skin"
        ],
        "answer": 3
    },
    {
        "q": "What was the original name of the search engine \"Google\"?",
        "options": [
            "CatMassage",
            "SearchPro",
            "Netscape Navigator",
            "BackRub"
        ],
        "answer": 3
    },
    {
        "q": "In which country was the 1992 Summer Olympics Games held?",
        "options": [
            "Russia",
            "Korea",
            "USA",
            "Spain"
        ],
        "answer": 3
    },
    {
        "q": "Chartreuse is a color between yellow and what?",
        "options": [
            "Red",
            "Black",
            "Purple",
            "Green"
        ],
        "answer": 3
    },
    {
        "q": "Which river flows through the Scottish city of Glasgow?",
        "options": [
            "Tay",
            "Dee",
            "Tweed",
            "Clyde"
        ],
        "answer": 3
    },
    {
        "q": "What does the Latin phrase \"Veni, vidi, vici\" translate into English?",
        "options": [
            "See no evil, hear no evil, speak no evil",
            "Life, liberty, and happiness",
            "Past, present, and future",
            "I came, I saw, I conquered"
        ],
        "answer": 3
    },
    {
        "q": "After how many years would you celebrate your crystal anniversary?",
        "options": [
            "20",
            "10",
            "25",
            "15"
        ],
        "answer": 3
    },
    {
        "q": "What zodiac sign is represented by a pair of scales?",
        "options": [
            "Aries",
            "Capricorn",
            "Sagittarius",
            "Libra"
        ],
        "answer": 3
    },
    {
        "q": "Which restaurant's mascot is a clown?",
        "options": [
            "Whataburger",
            "Burger King",
            "Sonic",
            "McDonald's"
        ],
        "answer": 3
    },
    {
        "q": "Which American-owned brewery led the country in sales by volume in 2015?",
        "options": [
            "Anheuser Busch",
            "Boston Beer Company",
            "Miller Coors",
            "D. G. Yuengling and Son, Inc"
        ],
        "answer": 3
    },
    {
        "q": "Red Vines is a brand of what type of candy?",
        "options": [
            "Lollipop",
            "Chocolate",
            "Bubblegum",
            "Licorice"
        ],
        "answer": 3
    },
    {
        "q": "Which of these words refers to something made, distributed, or sold illegally?",
        "options": [
            "Bootblack",
            "Bootlace",
            "Bootstrap",
            "Bootleg"
        ],
        "answer": 3
    },
    {
        "q": "What was the destination of the missing flight MH370?",
        "options": [
            "Kuala Lumpur",
            "Singapore",
            "Tokyo",
            "Beijing"
        ],
        "answer": 3
    },
    {
        "q": "Which essential condiment is also known as Japanese horseradish?",
        "options": [
            "Mentsuyu",
            "Karashi",
            "Ponzu",
            "Wasabi "
        ],
        "answer": 3
    },
    {
        "q": "In past times, what would a gentleman keep in his fob pocket?",
        "options": [
            "Money",
            "Keys",
            "Notebook",
            "Watch"
        ],
        "answer": 3
    },
    {
        "q": "This field is sometimes known as \u201cThe Dismal Science.\u201d",
        "options": [
            "Philosophy",
            "Politics",
            "Physics",
            "Economics"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following nations was NOT a belligerent in World War I?",
        "options": [
            "Portugal",
            "Greece",
            "Romania",
            "Denmark"
        ],
        "answer": 3
    },
    {
        "q": "Which sign of the zodiac is represented by the Crab?",
        "options": [
            "Libra",
            "Virgo",
            "Sagittarius",
            "Cancer"
        ],
        "answer": 3
    },
    {
        "q": "The tale of Robin Hood originates from which country?",
        "options": [
            "France",
            "Portugal",
            "Scotland",
            "England"
        ],
        "answer": 3
    },
    {
        "q": "Where in La Coru\u00f1a (Spain) is the headquarters of \"Inditex\", the biggest fashion group in the world?",
        "options": [
            "Sanjenjo",
            "Mug\u00eda",
            "\u00d3rdenes",
            "Arteijo"
        ],
        "answer": 3
    },
    {
        "q": "In DC comics where does the Green Arrow (Oliver Queen) live?",
        "options": [
            "Central City",
            "Gotham City",
            "Metropolis",
            "Star City"
        ],
        "answer": 3
    },
    {
        "q": "In what year was McDonald's founded?",
        "options": [
            "1964",
            "1951",
            "1947",
            "1955"
        ],
        "answer": 3
    },
    {
        "q": "What was Mountain Dew's original slogan?",
        "options": [
            "Give Me A Dew",
            "Do The Dew",
            "Get' that barefoot feelin' drinkin' Mountain Dew",
            "Yahoo! Mountain Dew... It'll tickle your innards!"
        ],
        "answer": 3
    },
    {
        "q": "What is the shortest month of the year?",
        "options": [
            "December",
            "April",
            "September",
            "February"
        ],
        "answer": 3
    },
    {
        "q": "What was Bank of America originally established as?",
        "options": [
            "Bank of Long Island",
            "Bank of Pennsylvania",
            "Bank of Charlotte",
            "Bank of Italy"
        ],
        "answer": 3
    },
    {
        "q": "What is Cuba's official, most widely spoken language?",
        "options": [
            "Portuguese",
            "French",
            "Italian",
            "Spanish"
        ],
        "answer": 3
    },
    {
        "q": "What company owns Outlook?",
        "options": [
            "Google",
            "Apple",
            "Yahoo",
            "Microsoft"
        ],
        "answer": 3
    },
    {
        "q": "What Latin phrase roughly translates to \"seize the day\"?",
        "options": [
            "Memento mori",
            "Plus ultra",
            "Sic semper tyrannis",
            "Carpe diem"
        ],
        "answer": 3
    },
    {
        "q": "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
        "options": [
            "Tiger",
            "Panda",
            "Crocodile",
            "Gorilla"
        ],
        "answer": 3
    },
    {
        "q": "Disney's Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?",
        "options": [
            "Gus",
            "Phineas",
            "Ezra",
            "Harry"
        ],
        "answer": 3
    },
    {
        "q": "What is the German word for \"spoon\"?",
        "options": [
            "Gabel",
            "Messer",
            "Essst\u00e4bchen",
            "L\u00f6ffel"
        ],
        "answer": 3
    },
    {
        "q": "What is the largest rapid transit system in the world by number of stations, with 472 stations in operation?",
        "options": [
            "Shanghai Metro",
            "London Underground",
            "Berlin U-Bahn",
            "New York City Subway"
        ],
        "answer": 3
    },
    {
        "q": "The Quadrangularis Reversum is best described as which of the following?",
        "options": [
            "A building in Oxford University",
            "A chess move",
            "A geometric theorem",
            "A percussion instrument"
        ],
        "answer": 3
    },
    {
        "q": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
        "options": [
            "Princeton University",
            "Harvard University",
            "Columbia University",
            "Yale University"
        ],
        "answer": 3
    },
    {
        "q": " In which country was the Michelin tire company founded in 1889?",
        "options": [
            "United Kingdom",
            "Italy",
            "Germany",
            "France"
        ],
        "answer": 3
    },
    {
        "q": "What is the real name of viral internet meme Grumpy Cat?",
        "options": [
            "Lil Bub",
            "Maru",
            "Colonel Meow",
            "Tardar Sauce"
        ],
        "answer": 3
    },
    {
        "q": "The architect known as Le Corbusier was an important figure in what style of architecture?",
        "options": [
            "Neoclassical",
            "Baroque",
            "Gothic Revival",
            "Modernism"
        ],
        "answer": 3
    },
    {
        "q": "A doctor with a PhD is a doctor of what?",
        "options": [
            "Psychology",
            "Phrenology",
            "Physical Therapy",
            "Philosophy"
        ],
        "answer": 3
    },
    {
        "q": "Out of these four buildings, which one is the tallest, with a height of 1,776 ft (541.3 m)?",
        "options": [
            "Taipei 101, Taiwan",
            "Willis Tower, United States",
            "Jin Mao Tower, China",
            "One World Trade Center, United States"
        ],
        "answer": 3
    },
    {
        "q": "In a standard set of playing cards, which is the only king without a moustache?",
        "options": [
            "Spades",
            "Diamonds",
            "Clubs",
            "Hearts"
        ],
        "answer": 3
    },
    {
        "q": "If someone said \"you are olid\", what would they mean?",
        "options": [
            "You are out of shape/weak.",
            "Your appearance is repulsive.",
            "You are incomprehensible/an idiot.",
            "You smell extremely unpleasant."
        ],
        "answer": 3
    },
    {
        "q": "What is the romanized Arabic word for \"moon\"?",
        "options": [
            "Najma",
            "Kawkab",
            "Shams",
            "Qamar"
        ],
        "answer": 3
    },
    {
        "q": "The early part of which decade, did the Goth Subculture begin?",
        "options": [
            "1990s",
            "2000s",
            "1970s",
            "1980s"
        ],
        "answer": 3
    },
    {
        "q": "Which American manufactured submachine gun was informally known by the American soldiers that used it as \"Grease Gun\"?",
        "options": [
            "Colt 9mm",
            "Thompson",
            "MAC-10",
            "M3"
        ],
        "answer": 3
    },
    {
        "q": "When was the website reddit founded ?",
        "options": [
            "2008",
            "2004",
            "2006",
            "2005"
        ],
        "answer": 3
    },
    {
        "q": "Which of these Marvel games was released on the Playstation 2?",
        "options": [
            "Silver Surfer",
            "Howard the Duck",
            "Wolverine: Adamantium Rage",
            "Spider-Man 2"
        ],
        "answer": 3
    },
    {
        "q": "\"Gum arabic\" is a natural gum consisting of the hardened sap of which tree species?",
        "options": [
            "Palm",
            "Ficus",
            "Eucalyptus",
            "Acacia"
        ],
        "answer": 3
    },
    {
        "q": "Which one of these is not a typical European sword design?",
        "options": [
            "Falchion",
            "Ulfberht",
            "Flamberge",
            "Scimitar"
        ],
        "answer": 3
    },
    {
        "q": "\"A3\", \"B1\", and \"Legal\" are typical names of sizes for what object?",
        "options": [
            "Airplanes",
            "Law books",
            "Phone screens",
            "Paper"
        ],
        "answer": 3
    },
    {
        "q": "What type of dog is 'Handsome Dan', the mascot of Yale University?",
        "options": [
            "Yorkshire Terrier",
            "Boxer",
            "Pug",
            "Bulldog"
        ],
        "answer": 3
    }
];
