const song1 = { path: "https://znatgd.github.io/backend/FutureAdventures.mp3", songTitle: "Future Adventures", artistTitle: "ZnatGD", genre: "Genre: Future Funk", duration: 283 };
const song2 = { path: "https://znatgd.github.io/backend/LOOP20.m4a", songTitle: "LOOP20", artistTitle: "ZnatGD", genre: "Genre: Freestyle", duration: 83 };

let currentIndex = 0;
let maxSongs = 2;
let isPlaying = false;

const audioPlayer = document.getElementById("player");

window.alert("Please select a song before playing audio...");

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
    } else if (index == 1) {
        document.body.style.backgroundImage = "url('https://znatgd.github.io/src/logo.png')";
        document.getElementById("songTitle").innerText = song2.songTitle;
        document.getElementById("artistTitle").innerText = song2.artistTitle;
        document.getElementById("genre").innerText = song2.genre;
        document.getElementById("player").src = song2.path;
    } else {
        document.body.style.backgroundImage = "url('https://znatgd.github.io/src/bg.png')";
        document.getElementById("songTitle").innerText = "noSuchSong";
        document.getElementById("artistTitle").innerText = "noSuchArtist";
        document.getElementById("genre").innerText = "noSuchGenre";
    }
}