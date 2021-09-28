let MAIN_MUSIC = new Audio('recursos/sounds/mainSound.mp3');
let POP_SOUND = new Audio('recursos/sounds/pop.mp3');
let SWORD_SOUND = new Audio('recursos/sounds/blade_btn.mp3');
let HORSE_SOUND = new Audio('recursos/sounds/horse_btn.mp3');

let shrekSound = new Audio('recursos/sounds/Shrek/shrek'+getRandomInt(1, 10)+'.mp3');

let mainValue = 0.07;

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function esc_btn() {
    shrekSound.pause();
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

function shrek_btn() {
    shrekSound.pause();
    MAIN_MUSIC.volume = 0.01;
    shrekSound = new Audio('recursos/sounds/Shrek/shrek'+getRandomInt(1, 10)+'.mp3');
    shrekSound.autoplay = true;
    shrekSound.volume = 0.8;
    shrekSound.load();
}

function pop_btn() {
    console.log(MAIN_MUSIC.volume);
}
window.onload = mainSound;