const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const backgroundMusic = document.getElementById('background-music');
const screamSound = document.getElementById('scream-sound');

let story = [
    {
        text: "You stand before an old, decrepit mansion. The door creaks open by itself. Do you enter?",
        choices: [
            { text: "Enter the mansion", next: 1 },
            { text: "Run away", next: 2 }
        ]
    },
    {
        text: "The door slams shut behind you. You hear a whispering voice. Do you follow the voice or explore the room?",
        choices: [
            { text: "Follow the voice", next: 3 },
            { text: "Explore the room", next: 4 }
        ]
    },
    {
        text: "You run away and feel a cold hand grab your shoulder. Game over.",
        choices: []
    },
    {
        text: "The voice leads you to a dark hallway. You see a faint light at the end. Do you walk towards it?",
        choices: [
            { text: "Walk towards the light", next: 5 },
            { text: "Turn back", next: 6 }
        ]
    },
    {
        text: "You find a dusty old book. Do you open it?",
        choices: [
            { text: "Open the book", next: 7 },
            { text: "Leave it alone", next: 8 }
        ]
    },
    {
        text: "The light flickers and you see a shadowy figure. Do you confront it or hide?",
        choices: [
            { text: "Confront the figure", next: 9 },
            { text: "Hide", next: 10 }
        ]
    },
    {
        text: "You turn back and feel a cold breath on your neck. Game over.",
        choices: []
    },
    {
        text: "The book contains a map of the mansion. Do you follow the map?",
        choices: [
            { text: "Follow the map", next: 11 },
            { text: "Ignore the map", next: 12 }
        ]
    },
    {
        text: "You leave the book alone and hear a noise behind you. Do you investigate?",
        choices: [
            { text: "Investigate the noise", next: 13 },
            { text: "Ignore it", next: 14 }
        ]
    },
    {
        text: "The figure screams and vanishes. You find a hidden door. Do you open it?",
        choices: [
            { text: "Open the door", next: 15 },
            { text: "Walk away", next: 16 }
        ]
    },
    {
        text: "You hide but the figure finds you. Game over.",
        choices: []
    },
    {
        text: "The map leads you to a secret room with treasure. You win!",
        choices: []
    },
    {
        text: "You ignore the map and get lost. Game over.",
        choices: []
    },
    {
        text: "You investigate and find a hidden staircase. Do you go down?",
        choices: [
            { text: "Go down the staircase", next: 17 },
            { text: "Stay where you are", next: 18 }
        ]
    },
    {
        text: "You ignore the noise and feel something cold wrap around your leg. Game over.",
        choices: []
    },
    {
        text: "The door creaks open to reveal a room filled with mirrors. Do you enter?",
        choices: [
            { text: "Enter the room", next: 19 },
            { text: "Stay outside", next: 20 }
        ]
    },
    {
        text: "You walk away and fall through a trapdoor. Game over.",
        choices: []
    },
    {
        text: "The staircase leads to a dark cellar. Do you explore it?",
        choices: [
            { text: "Explore the cellar", next: 21 },
            { text: "Return upstairs", next: 22 }
        ]
    },
    {
        text: "You enter the room and your reflection starts moving on its own. Do you touch the mirror?",
        choices: [
            { text: "Touch the mirror", next: 23 },
            { text: "Back away", next: 24 }
        ]
    },
    {
        text: "You stay outside and hear a sinister laugh. Game over.",
        choices: []
    },
    {
        text: "The cellar contains a strange box. Do you open it?",
        choices: [
            { text: "Open the box", next: 25 },
            { text: "Leave it alone", next: 26 }
        ]
    },
    {
        text: "You return upstairs and find the front door is gone. Game over.",
        choices: []
    },
    {
        text: "Your hand gets pulled into the mirror. Game over.",
        choices: []
    },
    {
        text: "You back away and find a hidden key. Do you take it?",
        choices: [
            { text: "Take the key", next: 27 },
            { text: "Leave it", next: 28 }
        ]
    },
    {
        text: "The box contains an old locket. Do you open it?",
        choices: [
            { text: "Open the locket", next: 29 },
            { text: "Leave it closed", next: 30 }
        ]
    },
    {
        text: "You leave the box alone and hear whispers around you. Game over.",
        choices: []
    },
    {
        text: "The key opens a door to the outside. You escape! You win!",
        choices: []
    },
    {
        text: "You leave the key and the mirrors shatter. Game over.",
        choices: []
    },
    {
        text: "The locket shows a picture of you. You drop it and run. Game over.",
        choices: []
    },
    {
        text: "You leave the locket and find a hidden passage. You escape! You win!",
        choices: []
    }
];

function startGame() {
    backgroundMusic.play();
    showStory(0);
}

function showStory(index) {
    const storyNode = story[index];
    storyElement.textContent = storyNode.text;
    choicesElement.innerHTML = '';

    if (storyNode.choices.length === 0) {
        endGame(index);
    } else {
        storyNode.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.classList.add('choice-button');
            button.onclick = () => showStory(choice.next);
            choicesElement.appendChild(button);
        });
    }
}

function endGame(index) {
    if (story[index].text.includes("Game over")) {
        screamSound.play();
        setTimeout(() => {
            alert("download complete *_* ");
            alert("deleting C:\DRIVER\Intel_SST files in 3..2...1... ");
            alert(" error error C:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_SSTC:\DRIVER\Intel_S");
            startGame();
        }, 3000);
    } else {
        setTimeout(() => {
            alert("Congratulations! You survived the haunted house!");
            startGame();
        }, 3000);
    }
}

startGame();
