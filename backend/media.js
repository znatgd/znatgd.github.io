const song1 = { path: "https://znatgd.github.io/backend/FutureAdventures.mp3", songTitle: "Future Adventures", artistTitle: "ZnatGD", genre: "Genre: Future Funk", duration: "04:44"};
const song2 = { path: "https://znatgd.github.io/backend/LOOP20.m4a", songTitle: "LOOP20", artistTitle: "ZnatGD", genre: "Genre: Freestyle", duration: "01:27"};

let currentIndex = -1;
const maxSongs = 2;
let isPlaying = false;
let durationCurrent = "00:00";

const audioPlayer = document.getElementById("player");

window.alert("Please select a song before playing audio...");

// Function to track and display the current position
function trackAudioPosition() {
    let currentTimeHere = document.getElementById("player").currentTime.toFixed(0);
    formatData = ("0" + parseInt(Math.floor(currentTimeHere / 60))).slice(-2) + ":" +  ("0" + parseInt(Math.floor(currentTimeHere % 60))).slice(-2)
    if (audioPlayer) {
        document.getElementById("trackPos").innerText = (`Current Time: ${formatData} / ${durationCurrent}`);
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
        document.getElementById("playButton").innerText = "play";
        
    } else {
        document.getElementById("player").play();
        isPlaying = true;
        document.getElementById("playButton").innerText = "pause";
    }
}
function switchSong(index) {
    currentIndex = index;
    if (index == 0) {
        document.body.style.backgroundImage = "url('https://znatgd.github.io/src/bg.png')";
        document.getElementById("songTitle").innerText = song1.songTitle;
        document.getElementById("artistTitle").innerText = song1.artistTitle;
        document.getElementById("genre").innerText = song1.genre;
        document.getElementById("player").src = song1.path;
        durationCurrent = song1.duration;
    } else if (index == 1) {
        document.body.style.backgroundImage = "url('https://znatgd.github.io/src/bg.png')";
        document.getElementById("songTitle").innerText = song2.songTitle;
        document.getElementById("artistTitle").innerText = song2.artistTitle;
        document.getElementById("genre").innerText = song2.genre;
        document.getElementById("player").src = song2.path;
        durationCurrent = song2.duration;
    } else {
        document.body.style.backgroundImage = "url('https://znatgd.github.io/src/bg.png')";
        document.getElementById("songTitle").innerText = "noSuchSong";
        document.getElementById("artistTitle").innerText = "noSuchArtist";
        document.getElementById("genre").innerText = "noSuchGenre";
    }
}

function goTo() {
    if (currentIndex == 0) {
        window.location.href = "https://znatgd.github.io/backend/FutureAdventures.mp3";
    }else if (currentIndex == 1) {
        window.location.href = "https://znatgd.github.io/backend/LOOP20.m4a";
    } else {
        window.location.href = "https://torishiro.com/@mkmusic";
    }
}