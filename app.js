const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const start = document.getElementById("start");
const next = document.getElementById("next");
const previus = document.getElementById("previus");
const likeButton = document.getElementById("like");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");

const sledGehammer = {
    songName: "Sledgehammer",
    artist: "Rihanna",
    file: "sledgehammer",
    liked: false,
};
const depecheMode = {
    songName: "Enjoy the Silence",
    artist: "Depechemode",
    file: "enjoythesilence",
    liked: false,
};
const givenUp = {
    songName: "Given Up",
    artist: "Linkin Park",
    file: "givenup",
    liked: false,
};

let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
const originalPlaylist = JSON.parse(localStorage.getItem("playlist")) ?? [sledGehammer, depecheMode, givenUp];
let sortedPlaylist = [...originalPlaylist];
let index = 0;

function songStart(){
    start.querySelector(".bi").classList.remove("bi-play-circle-fill");
    start.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}
function pauseStart(){
    start.querySelector(".bi").classList.add("bi-play-circle-fill");
    start.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}
function playPauseDecider(){
    if (isPlaying == true){
        pauseStart();
    }
    else{
        songStart();
    }
}
function likeButtonRender(){
    if (sortedPlaylist[index].liked === true){
        likeButton.querySelector(".bi").classList.remove("bi-heart");
        likeButton.querySelector(".bi").classList.add("bi-heart-fill");
        likeButton.classList.add("button-active");
    }
    else{
        likeButton.querySelector(".bi").classList.add("bi-heart");
        likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
        likeButton.classList.remove("button-active");
    }
}
function initializeSong(){
    cover.src = `img/${sortedPlaylist[index].file}.webp`;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText=sortedPlaylist[index].songName;
    bandName.innerText=sortedPlaylist[index].artist;
    likeButtonRender();
}
function previusSong(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playsong();
}