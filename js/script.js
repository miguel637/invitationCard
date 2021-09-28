let URL = "https://miguel637.github.io/invitationCard/";
let MAIN_MUSIC = new Audio(src=URL+"recursos/sounds/mainSound.mp3");
let TRUMPET_SOUND = new Audio(src=URL+"recursos/sounds/trumpet_btn.mp3");
let SWORD_SOUND = new Audio(src=URL+"recursos/sounds/blade_btn.mp3");
let HORSE_SOUND = new Audio(src=URL+"recursos/sounds/horse_btn.mp3");

let shrekSound = new Audio(URL+"recursos/sounds/Shrek/Shrek"+getRandomInt(1, 11)+".mp3");
let disneySound = new Audio(src=URL+"recursos/sounds/Disney/disney"+getRandomInt(1, 9)+".mp3");
let grimmSound = new Audio(src=URL+"recursos/sounds/Grimm/grimm"+getRandomInt(1, 3)+".mp3");
let medievalSound = new Audio(src=URL+"recursos/sounds/Medieval/medieval"+getRandomInt(1, 6)+".mp3");

let maxVolume = 0.07;
let minVolume = 0.008;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function esc_btn() {
    shrekSound.pause();
    disneySound.pause();
    grimmSound.pause();
    medievalSound.pause();
    MAIN_MUSIC.volume = maxVolume;
}
function mainSound() {
    MAIN_MUSIC.autoplay = true;
    MAIN_MUSIC.volume = maxVolume;
    MAIN_MUSIC.loop = true;
    MAIN_MUSIC.load();
}
function sword_btn() {
    SWORD_SOUND.autoplay = true;
    SWORD_SOUND.volume = 0.05;
    SWORD_SOUND.load();
}
function horse_btn() {
    HORSE_SOUND.autoplay = true;
    HORSE_SOUND.volume = 0.05;
    HORSE_SOUND.load();
}
function trumpet_btn() {
    TRUMPET_SOUND.autoplay = true;
    TRUMPET_SOUND.volume = 0.05;
    TRUMPET_SOUND.load();
}
function pauseAll(){
    shrekSound.pause();
    disneySound.pause();
    grimmSound.pause();
    medievalSound.pause();
}
function shrek_btn() {
    pauseAll();
    MAIN_MUSIC.volume = minVolume;
    shrekSound = new Audio(src=URL+"recursos/sounds/Shrek/shrek"+getRandomInt(1, 11)+".mp3");
    shrekSound.autoplay = true;
    shrekSound.volume = 0.8;
    shrekSound.load();
}
function disney_btn() {
    pauseAll();
    MAIN_MUSIC.volume = minVolume;
    disneySound = new Audio(src=URL+"recursos/sounds/Disney/disney"+getRandomInt(1, 9)+".mp3");
    disneySound.autoplay = true;
    disneySound.volume = 0.6;
    disneySound.load();
}
function grimm_btn() {
    pauseAll();
    MAIN_MUSIC.volume = minVolume;
    grimmSound = new Audio(src=URL+"recursos/sounds/Grimm/grimm"+getRandomInt(1, 3)+".mp3");
    grimmSound.autoplay = true;
    grimmSound.volume = 0.4;
    grimmSound.load();
}
function medieval_btn() {
    pauseAll();
    MAIN_MUSIC.volume = minVolume;
    medievalSound = new Audio(src=URL+"recursos/sounds/Medieval/medieval"+getRandomInt(1, 6)+".mp3");
    medievalSound.autoplay = true;
    medievalSound.volume = 0.6;
    medievalSound.load();
}
window.onload = mainSound;