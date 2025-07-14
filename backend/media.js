const songPath = [
    "/media/FutureAdventures.mp3",
    "/media/LOOP20.m4a",
]

const songFile = [
    "Future Adventures.mp3",
    "Loop 20 test.m4a"
]
const songTitle = [
    "Future Adventures",
    "LOOP20",
]

const artistTitle = [
    "MKMusic (ZnatGD)",
    "MKMusic (ZnatGD)",
]

const genre = [
    "Riced Future Funk",
    "Freeform",
]

const duration = [
    "04:43",
    "01:26"
]

const bgImg = [
    "/src/animebg.png",
    "/src/animebg.png"
]

let currentIndex = -1;
const maxSongs = 2;
let isPlaying = false;
let durationCurrent = "00:00";

const audioPlayer = document.getElementById("player");

// Function to track and display the current position
function trackAudioPosition() {
    let currentTimeHere = document.getElementById("player").currentTime.toFixed(0);
    formatData = ("0" + parseInt(Math.floor(currentTimeHere / 60))).slice(-2) + ":" +  ("0" + parseInt(Math.floor(currentTimeHere % 60))).slice(-2)
    if (audioPlayer) {
        document.getElementById("trackPos").innerText = (`${formatData} / ${durationCurrent}`);
    }
}

// Add an event listener to update the position as the audio plays
if (audioPlayer) {
    document.getElementById("player").addEventListener("timeupdate", trackAudioPosition);
}


function previous() {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById("playButton").innerText = "play";
    if ((currentIndex - 1) < 0) {
        currentIndex = 0;
        switchSong(currentIndex);
    } else {
        switchSong(--currentIndex);
    }
    console.log(currentIndex);
}

function seek(amount) {
    document.getElementById("player").currentTime = document.getElementById("player").currentTime + amount;
}

function next() {
    document.getElementById("player").pause();
    isPlaying = false;
    document.getElementById("playButton").innerText = "play";
    if ((currentIndex + 1) >= maxSongs) {
        currentIndex = 0;
        switchSong(currentIndex);
    } else {
        switchSong(++currentIndex);
    }
    console.log(currentIndex);
}

function play() {
    if (isPlaying) {
        document.getElementById("player").pause();
        isPlaying = false;
        document.getElementById("playButton").src = "/src/play.svg";
        
    } else {
        document.getElementById("player").play();
        isPlaying = true;
        document.getElementById("playButton").src = "/src/pause.svg";
    }
}
function switchSong(index) {
    document.getElementById("player").pause();
    isPlaying = false;
    document.getElementById("playButton").src = "/src/play.svg";
    currentIndex = index;

    document.body.style.backgroundImage = 'url($"{bgImg[currentIndex]}")';
    document.getElementById("songTitle").innerText = songTitle[currentIndex];
    document.getElementById("artistTitle").innerText = artistTitle[currentIndex];
    document.getElementById("genre").innerText = genre[currentIndex];
    document.getElementById("player").src = songPath[currentIndex];
    durationCurrent = duration[currentIndex];
}

function goTo() {
    const link = document.createElement('a');
    link.href = songPath[currentIndex];
    link.download = songFile[currentIndex];
    link.click();
}


window.addEventListener("keydown", (e) => {
    // Prevent Backspace navigation
    if (e.key === 'Backspace' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
    }

    // Prevent Arrow key scrolling
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
    }
    if (e.key == ' ' && e.target === document.body) {
        e.preventDefault(); // Prevent default scrolling behavior
    }

    switch (e.code) {
        case "ArrowLeft":
            seek(-10)
            break;
        case "ArrowRight":
            seek(10)
            break;
        case "Space":
            play()
            break;
        case "ArrowUp":
            next()
            break;
        case "ArrowDown":
            previous()
            break;
        case "KeyX":
            goTo()
            break;
    }
})