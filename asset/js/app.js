
const music = document.querySelector("audio");
const play = document.getElementById("play");
const next = document.getElementById("prev");
const prev = document.getElementById("next");

// it track is music is playing
let isPlaying = false;
// it track the currently selected song
let SongIndex = 0;


const songs = [
    {
        name: "Old Song",
        imgPath: './image/1.jpg',
        muspath: './songs/1.mp3'
    },
    {
        name: "Chaleya",
        imgPath: './image/2.jpeg',
        muspath: './songs/2.mp3'
    },
    {
        name: "Heeriye",
        imgPath: './image/3.jpg',
        muspath: './songs/3.mp3'
    },
    {
        name: "Remix",
        imgPath: './image/4.jpg',
        muspath: './songs/4.mp3'
    },
    {
        name: "Radha Rani",
        imgPath: './image/5.jpg',
        muspath: './songs/5.mp3'
    },
    {
        name: "Sang rahiyo",
        imgPath: './image/6.jpg',
        muspath: './songs/6.mp3'
    },
]

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    // play.classList.remove('fa-play');
    // play.classList.add('fa-pause');
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }


});

function prevSong() {
    SongIndex--;

    if (SongIndex < 0) {
        SongIndex = songs.length - 1;
    }

    const song = songs[SongIndex];
    music.src = song.muspath;
    document.getElementById('img_change').setAttribute('src', song.imgPath);
    document.getElementById('song_name').innerHTML = song.name;
    updateSong();;

    if (isPlaying) {
        playMusic();
    }
};
function nextSong() {
    SongIndex++;

    if (SongIndex > songs.length - 1) {
        SongIndex = 0;
    }


    const song = songs[SongIndex];
    music.src = song.muspath;
    document.getElementById('img_change').setAttribute('src', song.imgPath);
    document.getElementById('song_name').innerHTML = song.name;
    updateSong();
    // If the music was playing, start playing the new song
    if (isPlaying) {
        playMusic();
    }


};
function updateSong() {
    const song = songs[SongIndex];
    music.src = song.muspath;
    document.getElementById('img_change').setAttribute('src', song.imgPath);
    document.getElementById('song_name').innerHTML = song.name;
}
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);






function playmusic_1() {
    SongIndex = 0;
    updateSong();
    const imgPath = './image/1.jpg';
    const muspath = './songs/1.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Old Song";
    playMusic();


};



function playmusic_2() {
    SongIndex = 1;
    updateSong();
    const imgPath = './image/2.jpeg';
    const muspath = './songs/2.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Chaleya";
    playMusic();


};
function playmusic_3() {
    SongIndex = 2;
    updateSong();
    const imgPath = './image/3.jpg';
    const muspath = './songs/3.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Radha Rani";
    playMusic();

};

function playmusic_4() {
    SongIndex = 3;
    updateSong();
    const imgPath = './image/4.jpg';
    const muspath = './songs/4.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Sang rahiyo";
    playMusic(SongIndex);

};
function playmusic_5() {
    SongIndex = 4;
    updateSong();
    const imgPath = './image/5.jpg';
    const muspath = './songs/5.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Remix";
    playMusic();

};
function playmusic_6() {
    SongIndex = 5;
    updateSong();
    const imgPath = './image/6.jpg';
    const muspath = './songs/6.mp3';
    document.getElementById('change_song').setAttribute('src', muspath);
    document.getElementById('img_change').setAttribute('src', imgPath);
    // document.getElementById('song_name').innerHTML = "Heeriye";
    playMusic();

};




