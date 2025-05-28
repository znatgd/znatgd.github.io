const song1 = { path: "https://znatgd.github.io/backend/FutureAdventures.mp3", songTitle: "Future Adventures", artistTitle: "ZnatGD", genre: "Genre: Future Funk", duration: 283, albumCover: "https://znatgd.github.io/src/bg.png"};
const song2 = { path: "https://znatgd.github.io/backend/LOOP20.m4a", songTitle: "LOOP20", artistTitle: "ZnatGD", genre: "Genre: Freestyle", duration: 83, albumCover: "https://znatgd.github.io/src/logo.png"};

let currentIndex = 0;
let maxSongs = 2;
let isPlaying = false;

console.log(document.getElementById("player"));
window.alert("Please select a song before playing audio...");

function previous() {
    if ((currentIndex - 1) < 0) {
        document.getElementById("player").pause();
        isPlaying = false;
        document.getElementById("playButton").innerText = "play";
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
    if ((currentIndex + 1) >= maxSongs) {
        document.getElementById("player").pause();
        isPlaying = false;
        document.getElementById("playButton").innerText = "play";
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
        document.body.style.backgroundImage = song1.albumCover;
        document.getElementById("songTitle").innerText = song1.songTitle;
        document.getElementById("artistTitle").innerText = song1.artistTitle;
        document.getElementById("genre").innerText = song1.genre;
        document.getElementById("player").src = song1.path;
    } else if (index == 1) {
        document.body.style.backgroundImage = song2.albumCover;
        document.getElementById("songTitle").innerText = song2.songTitle;
        document.getElementById("artistTitle").innerText = song2.artistTitle;
        document.getElementById("genre").innerText = song2.genre;
        document.getElementById("player").src = song2.path;
    } else {
        document.body.style.backgroundImage = "https://znatgd.github.io/src/bg.png";
        document.getElementById("songTitle").innerText = "noSuchSong";
        document.getElementById("artistTitle").innerText = "noSuchArtist";
        document.getElementById("genre").innerText = "noSuchGenre";
    }
}