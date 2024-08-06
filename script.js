const raceQuestions = {
    rootRace: {
        question: "Of the following, which reflects your ancestral origins?",
        answers: [
            { text: "A Distinguished heritage.", next: "followupNobleRace" },
            { text: "A Mystical ancestry.", next: "followupMysticalRace" },
            { text: "A Primal lineage.", next: "followupPrimalRace" }
        ]
    },
    followupNobleRace: {
        question: "Of the distinguished heritages, which relates to you most?",
        answers: [
            { text: "Enigmatic and timeless.", next: "finalElfRace" },
            { text: "Hardy and industrious.", next: "finalDwarfRace" },
            { text: "Between two worlds.", next: "finalHalfElfRace" },
            { text: "Diverse and dynamic.", result: "Human" },
            { text: "Curious and clever.", next: "finalGnomeRace" },
            { text: "Cheerful and nimble.", next: "finalHalflingRace" }
        ]
    },
    followupMysticalRace: {
        question: "Of the following, which reflects your mystical ancestry?",
        answers: [
            { text: "Mythical and diverse.", next: "followupMythicRace" },
            { text: "Mystical and elemental.", next: "finalGenasiRace" },
            { text: "Astral and disciplined.", next: "finalGithRace" },
            { text: "Celestial and Radiant.", next: "finalAasimarRace" },
            { text: "Otherworldly and mysterious.", next: "finalTieflingRace" }
        ]
    },
    followupPrimalRace: {
        question: "Of the following, which aligns with your primal nature?",
        answers: [
            { text: "Beast-born origins.", next: "followupBeastRace" },
            { text: "Sky-born origins.", next: "finalSkyRace" },
            { text: "Cold-blooded origins.", next: "finalColdRace" },
            { text: "Tribal origins.", next: "finalTribalRace" }
        ]
    },
    followupMythicRace: {
        question: "Of the mythical and diverse, which aligns with your arcane essence?",
        answers: [
            { text: "Elemental and spiritual.", next: "finalMythicRaceA" },
            { text: "Adaptive and innovative.", next: "finalMythicRaceB" }
        ]
    },
    followupBeastRace: {
        question: "Of the beast-born, which exemplifies your primal nature?",
        answers: [
            { text: "Large and mighty.", next: "finalLargeBeastRace" },
            { text: "Small and agile.", next: "finalSmallBeastRace" }
        ]
    },
    finalElfRace: {
        question: "Of the enigmatic and timeless, which embodies your ancient lineage?",
        answers: [
            { text: "Arcane and elegant.", result: "High Elf" },
            { text: "Sylvan and agile.", result: "Wood Elf" },
            { text: "Shadowed and cunning.", result: "Dark Elf" },
            { text: "Seasonal and fey.", result: "Eladrin" },
            { text: "Oceanic and fierce.", result: "Sea Elf" },
            { text: "Celestial and mysterious.", result: "Astral Elf" }
        ]
    },
    finalDwarfRace: {
        question: "Of the hardy and industrious, which exemplifies your deep roots?",
        answers: [
            { text: "Wise and resilient.", result: "Hill Dwarf" },
            { text: "Strong and sturdy.", result: "Mountain Dwarf" },
            { text: "Stealthy and psionic.", result: "Deep Dwarf" }
        ]
    },
    finalHalfElfRace: {
        question: "Of those who walk between worlds, which best describes your dual heritage?",
        answers: [
            { text: "Versatile and ambiguous.", result: "Standard Half-Elf" },
            { text: "Stealthy and magical.", result: "Half-Drow" },
            { text: "Cultured and intellectual.", result: "Half-High Elf" },
            { text: "Forest-born and stealthy.", result: "Half-Wood Elf" },
            { text: "Seasonal and resilient.", result: "Half-Eladrin" },
            { text: "Oceanic and diverse.", result: "Half-Sea Elf" },
            { text: "Shadowy and resilient.", result: "Half-Shadar-kai" },
            { text: "Mystical and adaptable.", result: "Half-Astral Elf" }
        ]
    },
    finalGnomeRace: {
        question: "Of the curious and clever, which represents your inventive spirit?",
        answers: [
            { text: "Illusionist and nature-bound.", result: "Forest Gnome" },
            { text: "Inventive and mechanical.", result: "Rock Gnome" },
            { text: "Reclusive and hardy.", result: "Deep Gnome" },
            { text: "Constructed and resilient.", result: "Autognome" }
        ]
    },
    finalHalflingRace: {
        question: "Of the cheerful and nimble, which captures your spirited nature?",
        answers: [
            { text: "Stealthy and charismatic.", result: "Lightfoot Halfling" },
            { text: "Tough and resilient.", result: "Stout Halfling" },
            { text: "Mystical and telepathic.", result: "Ghostwise Halfling" },
            { text: "Curious and brave.", result: "Kender" }
        ]
    },
    finalMythicRaceA: {
        question: "Of the elemental and spiritual, which embodies your arcane essence?",
        answers: [
            { text: "Radiant and ethereal.", result: "Luma" },
            { text: "Aquatic and protective.", result: "Triton" },
            { text: "Psychic and spiritual.", result: "Kalashtar" },
            { text: "Winged and fey.", result: "Fairy" }
        ]
    },
    finalMythicRaceB: {
        question: "Of the adaptive and innovative, which embodies your arcane essence?",
        answers: [
            { text: "Scaled and powerful.", result: "Dragonborn" },
            { text: "Synthetic and organic.", result: "Wechselkind" },
            { text: "Logical and inventive.", result: "Vedalken" },
            { text: "Amorphous and adaptable.", result: "Plasmoid" },
            { text: "Magically enhanced.", result: "Simic Hybrid" },
            { text: "Forged and resilient.", result: "Warforged" },
            { text: "Adaptable and elusive.", result: "Changeling" }
        ]
    },
    finalGithRace: {
        question: "Of the astral and disciplined, which showcases your psionic mastery?",
        answers: [
            { text: "Martial and psychic.", result: "Githyanki" },
            { text: "Mystic and wise.", result: "Githzerai" }
        ]
    },
    finalAasimarRace: {
        question: "Of the celestial and radiant, which fulfills your divine purpose?",
        answers: [
            { text: "Guardian and radiant.", result: "Protector Aasimar" },
            { text: "Vengeful and intense.", result: "Scourge Aasimar" },
            { text: "Dark and powerful.", result: "Fallen Aasimar" }
        ]
    },
    finalTieflingRace: {
        question: "Of the otherworldly and mysterious, which defines your dark legacy?",
        answers: [
            { text: "Fiery and shadowy.", result: "Infernal Tiefling" },
            { text: "Chaotic and unpredictable.", result: "Abyssal Tiefling" },
            { text: "Savage and agile.", result: "Feral Tiefling" }
        ]
    },
    finalLargeBeastRace: {
        question: "Of the large and mighty, which embodies your primal nature?",
        answers: [
            { text: "Strong and proud.", result: "Leonin" },
            { text: "Mighty and fierce.", result: "Minotaur" },
            { text: "Strong and disciplined.", result: "Giff" },
            { text: "Transformative and primal.", result: "Shifter" },
            { text: "Strong and communal.", result: "Loxodon" },
            { text: "Adept and gliding.", result: "Hadozee" },
            { text: "Fast and nature-loving.", result: "Centaur" }
        ]
    },
    finalSmallBeastRace: {
        question: "Of the small and agile, which embodies your primal nature?",
        answers: [
            { text: "Agile and curious.", result: "Tabaxi" },
            { text: "Quick and agile.", result: "Harengon" },
            { text: "Stealthy and nimble.", result: "Jerbeen" },
            { text: "Clever and resourceful.", result: "Mapach" },
            { text: "Cunning and agile.", result: "Vulpin" },
            { text: "Hedonistic and playful.", result: "Satyr" },
            { text: "Graceful and swift.", result: "Cervan" },
            { text: "Small and resilient.", result: "Hedge" }
        ]
    },
    finalSkyRace: {
        question: "Of the sky-born, which captures your soaring spirit?",
        answers: [
            { text: "Flight and freedom.", result: "Aarakocra" },
            { text: "Keen and agile.", result: "Owlin" },
            { text: "Mimicking and resourceful.", result: "Kenku" },
            { text: "Intelligent and cunning.", result: "Corvum" },
            { text: "Wise and stealthy.", result: "Strig" },
            { text: "Social and adventurous.", result: "Gallas" }
        ]
    },
    finalColdRace: {
        question: "Of the cold-blooded, which highlights your sharp instincts?",
        answers: [
            { text: "Pragmatic and skilled.", result: "Lizardfolk" },
            { text: "Cold and calculating.", result: "Yuan-ti" },
            { text: "Toxic and tribal.", result: "Grung" },
            { text: "Wise and resilient.", result: "Tortle" },
            { text: "Adept and aquatic.", result: "Locathah" },
            { text: "Swift and ferocious.", result: "Raptor" },
            { text: "Clever and resourceful.", result: "Kobold" }
        ]
    },
    finalTribalRace: {
        question: "Of the tribal groups, which embodies your ancestral honor?",
        answers: [
            { text: "Gentle and druidic.", result: "Firbolg" },
            { text: "Competitive and robust.", result: "Goliath" },
            { text: "Fierce and honorable.", result: "Orc" },
            { text: "Relentless and resilient.", result: "Half-Orc" },
            { text: "Small and cunning.", result: "Goblin" },
            { text: "Martial and strategic.", result: "Hobgoblin" },
            { text: "Strong and stealthy.", result: "Bugbear" },
            { text: "Adaptable and fey-linked.", result: "Verdan" },
            { text: "Agile and tough.", result: "Thri-Kreen" }
        ]
    }
};

const classQuestions = [
    {
        question: "How do you prefer to engage in combat?",
        answers: [
            { text: "Up close and personal with melee attacks.", classes: ["Barbarian", "Fighter", "Paladin"] },
            { text: "From a distance with ranged attacks.", classes: ["Ranger", "Fighter", "Rogue"] },
            { text: "Using spells and magical abilities.", classes: ["Sorcerer", "Wizard", "Warlock"] }
        ]
    },
    {
        question: "What role do you enjoy playing in a group?",
        answers: [
            { text: "Tank, absorbing damage and protecting allies.", classes: ["Paladin", "Fighter", "Barbarian"] },
            { text: "Damage dealer, focusing on dealing high damage.", classes: ["Barbarian", "Fighter", "Rogue"] },
            { text: "Support, healing and buffing allies.", classes: ["Cleric", "Bard", "Druid"] },
            { text: "Control, using abilities to control the battlefield.", classes: ["Wizard", "Warlock", "Sorcerer"] }
        ]
    },
    {
        question: "How complex do you like your character's mechanics to be?",
        answers: [
            { text: "Simple and straightforward.", classes: ["Barbarian", "Fighter", "Rogue"] },
            { text: "Moderate complexity with some special abilities.", classes: ["Paladin", "Ranger", "Sorcerer"] },
            { text: "Highly complex with many options and abilities.", classes: ["Wizard", "Druid", "Bard"] }
        ]
    },
    {
        question: "What best describes your character's personality?",
        answers: [
            { text: "Honorable and just.", classes: ["Paladin", "Cleric"] },
            { text: "Wild and untamed.", classes: ["Barbarian", "Druid"] },
            { text: "Mysterious and cunning.", classes: ["Rogue", "Warlock"] },
            { text: "Scholarly and wise.", classes: ["Wizard", "Bard"] }
        ]
    },
    {
        question: "What kind of themes resonate with you?",
        answers: [
            { text: "Nature and the wild.", classes: ["Druid", "Ranger"] },
            { text: "Ancient and mystical.", classes: ["Wizard", "Sorcerer"] },
            { text: "Urban and technological.", classes: ["Artificer", "Rogue"] },
            { text: "Dark and supernatural.", classes: ["Warlock", "Cleric"] }
        ]
    }
];

const subclasses = {
    Barbarian: ["Path of the Ancestral Guardian", "Path of the Battlerager", "Path of the Beast", "Path of the Berserker", "Path of the Giant", "Path of the Storm Herald", "Path of the Totem Warrior", "Path of Wild Magic", "Path of the Zealot", "Path of the World Tree"],
    Fighter: ["Arcane Archer", "Banneret", "Battle Master", "Cavalier", "Champion", "Echo Knight", "Eldritch Knight", "Psi Warrior", "Purple Dragon Knight", "Rune Knight", "Samurai"],
    Monk: ["Way of the Ascendant Dragon", "Way of the Astral Self", "Way of the Drunken Master", "Way of the Four Elements", "Way of the Kensei", "Way of the Long Death", "Way of the Mercy", "Way of the Open Hand", "Way of the Shadow", "Way of the Sun Soul"],
    Paladin: ["Oath of the Ancients", "Oath of Conquest", "Oath of the Crown", "Oath of Devotion", "Oath of Glory", "Oathbreaker", "Oath of Redemption", "Oath of Vengeance", "Oath of the Watchers"],
    Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
    Blood_Hunter: ["Order of the Ghostslayer", "Order of the Lycan", "Order of the Mutant", "Order of the Profane Soul"],
    Cleric: ["Arcana Domain", "Death Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", "Order Domain", "Peace Domain", "Tempest Domain", "Trickery Domain", "Twilight Domain", "War Domain"],
    Druid: ["Circle of Dreams", "Circle of the Land", "Circle of the Moon", "Circle of the Shepherd", "Circle of Stars", "Circle of Spores", "Circle of the Sea", "Circle of Wildfire"],
    Ranger: ["Beast Master", "Drakewarden", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Hunter", "Monster Slayer", "Swarmkeeper"],
    Rogue: ["Arcane Trickster", "Assassin", "Inquisitive", "Mastermind", "Phantom", "Scout", "Soulknife", "Swashbuckler", "Thief"],
    Bard: ["College of Dance", "College of Creation", "College of Eloquence", "College of Glamour", "College of Lore", "College of Spirits", "College of Swords", "College of Valor", "College of Whispers"],
    Sorcerer: ["Aberrant Mind", "Clockwork Soul", "Divine Soul", "Draconic Bloodline", "Lunar Sorcery", "Shadow Magic", "Storm Sorcery", "Wild Magic"],
    Warlock: ["Archfey", "Celestial", "Fathomless", "Fiend", "Genie", "Great Old One", "Hexblade", "Undead", "Undying"],
    Wizard: ["Bladesinging", "Chronurgy", "Graviturgy", "Order of Scribes", "School of Abjuration", "School of Conjuration", "School of Divination", "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy", "School of Transmutation"]
};

let userResponses = {};
let classResponses = [];

function displayQuestion(questionKey) {
    const questionData = raceQuestions[questionKey];
    if (!questionData) return;

    const questionContainer = document.getElementById('race-questions');
    questionContainer.innerHTML = ''; // Clear previous question

    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const questionText = document.createElement('h3');
    questionText.textContent = questionData.question;
    questionElement.appendChild(questionText);

    const shuffledAnswers = questionData.answers.sort(() => 0.5 - Math.random());
    shuffledAnswers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer.text;
        answerButton.addEventListener('click', () => handleAnswer(answer, questionKey));
        questionElement.appendChild(answerButton);
    });

    questionContainer.appendChild(questionElement);
}

function handleAnswer(answer, questionKey) {
    if (answer.result) {
        userResponses.race = answer.result;
        showClassQuestions(); // Move to class questions after race is determined
    } else {
        displayQuestion(answer.next);
    }
}

function showClassQuestions() {
    document.getElementById('race-questions').style.display = 'none';
    document.getElementById('class-questions').style.display = 'block';
    displayClassQuestion(0); // Start with the first class question
}

function displayClassQuestion(questionIndex) {
    const questionContainer = document.getElementById('class-questions');
    questionContainer.innerHTML = ''; // Clear previous question

    const question = classQuestions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    const questionText = document.createElement('h3');
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    const shuffledAnswers = question.answers.sort(() => 0.5 - Math.random());
    shuffledAnswers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer.text;
        answerButton.addEventListener('click', () => handleClassAnswer(questionIndex, answer.classes));
        questionElement.appendChild(answerButton);
    });

    questionContainer.appendChild(questionElement);
}

function handleClassAnswer(questionIndex, classes) {
    classResponses.push(...classes);
    if (questionIndex + 1 < classQuestions.length) {
        displayClassQuestion(questionIndex + 1);
    } else {
        calculateClassResults();
    }
}

function calculateClassResults() {
    const resultsContainer = document.getElementById('results-container');
    const resultsText = document.getElementById('results');

    // Calculate the most suitable class and subclass based on classResponses
    const classCounts = classResponses.reduce((acc, className) => {
        acc[className] = (acc[className] || 0) + 1;
        return acc;
    }, {});

    const bestClass = Object.keys(classCounts).reduce((a, b) => classCounts[a] > classCounts[b] ? a : b);

    // Determine the best subclass for the selected class
    const subclassList = subclasses[bestClass];
    const bestSubclass = subclassList[Math.floor(Math.random() * subclassList.length)]; // Randomly select a subclass for simplicity

    const displayClass = bestClass.replace('_', ' '); // Replace underscore with space for display
    resultsText.textContent = `You are a ${userResponses.race} ${displayClass}: ${bestSubclass}.`;
    resultsContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion('rootRace'); // Start with the first race question
});