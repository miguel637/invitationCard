let MAIN_MUSIC = new Audio('recursos/sounds/mainSound.mp3')
let POP_SOUND = new Audio('recursos/sounds/pop.mp3')
let SWORD_SOUND = new Audio('recursos/sounds/blade_btn.mp3')
let HORSE_SOUND = new Audio('recursos/sounds/horse_btn.mp3')

function mainSound() {
    MAIN_MUSIC.autoplay = true;
    MAIN_MUSIC.volume = 0.07;
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

function pop_btn() {
    POP_SOUND.autoplay = true;
    POP_SOUND.volume = 0.05;
    POP_SOUND.load();
}
