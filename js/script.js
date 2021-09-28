let MAIN_MUSIC = new Audio('recursos/sounds/mainSound.mp3');
let POP_SOUND = new Audio('recursos/sounds/pop.mp3');
let SWORD_SOUND = new Audio('recursos/sounds/blade_btn.mp3');
let HORSE_SOUND = new Audio('recursos/sounds/horse_btn.mp3');

let shrekSound = new Audio('recursos/sounds/Shrek/shrek'+getRandomInt(1, 11)+'.mp3');
let disneySound = new Audio('recursos/sounds/Disney/disney'+getRandomInt(1, 9)+'.mp3');
let grimmSound = new Audio('recursos/sounds/Grimm/grimm'+getRandomInt(1, 3)+'.mp3');
let medievalSound = new Audio('recursos/sounds/Medieval/medieval'+getRandomInt(1, 6)+'.mp3');

let mainValue = 0.07;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function esc_btn() {
    shrekSound.pause();
    disneySound.pause();
    MAIN_MUSIC.volume = mainValue;
}
function mainSound() {
    MAIN_MUSIC.autoplay = true;
    MAIN_MUSIC.volume = mainValue;
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
function pauseAll(){
    shrekSound.pause();
    disneySound.pause();
    grimmSound.pause();
    medievalSound.pause();
}
function shrek_btn() {
    pauseAll();
    MAIN_MUSIC.volume = 0.01;
    shrekSound = new Audio('recursos/sounds/Shrek/shrek'+getRandomInt(1, 11)+'.mp3');
    shrekSound.autoplay = true;
    shrekSound.volume = 0.8;
    shrekSound.load();
}
function disney_btn() {
    pauseAll();
    MAIN_MUSIC.volume = 0.01;
    disneySound = new Audio('recursos/sounds/Disney/disney'+getRandomInt(1, 9)+'.mp3');
    disneySound.autoplay = true;
    disneySound.volume = 0.7;
    disneySound.load();
}
function grimm_btn() {
    pauseAll();
    MAIN_MUSIC.volume = 0.01;
    grimmSound = new Audio('recursos/sounds/Grimm/grimm'+getRandomInt(1, 3)+'.mp3');
    grimmSound.autoplay = true;
    grimmSound.volume = 0.7;
    grimmSound.load();
}

function medieval_btn() {
    pauseAll();
    MAIN_MUSIC.volume = 0.01;
    medievalSound = new Audio('recursos/sounds/Medieval/medieval'+getRandomInt(1, 6)+'.mp3');
    medievalSound.autoplay = true;
    medievalSound.volume = 0.8;
    medievalSound.load();
}

function pop_btn() {
    console.log(MAIN_MUSIC.volume);
}
window.onload = mainSound;