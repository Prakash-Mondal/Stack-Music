
// Initialize the variables
let songIndex = 1;

let clickCount = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgreessBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "TheFatRat - Electrified", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "TheFatRat - Time Lapse", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "TheFatRat - Monody (feat. Laura Brehm)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Banna Re - DJ Shadow Dubai", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Besharam Rang", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Gatividhi - Yo Yo Honey Singh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Jaam - Yo Yo Honey Singh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]


songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    // element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});





function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {


        // We need to the button same as previous or not. if same button pressed we need to pause the audio.
        if (e.target.id == songIndex) {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                makeAllPlays();
                audioElement.play();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
            }
            else {
                audioElement.pause();
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play');
                gif.style.opacity = 0;
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
            }
        }
        else {

            // If clicked buttom does not repeate, we have to play new song.
            makeAllPlays();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');

            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex}.mp3`;
            masterSongName.innerText = songs[songIndex - 1].songName;
            audioElement.currentTime = 0;
            myProgreessBar.value = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }

    });
});




//Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgreessBar.value = progress;

    let x = myProgreessBar.value;
    let color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '% )';
    myProgreessBar.style.background = color;

    // Update to play button when song is completed

    if (audioElement.currentTime == audioElement.duration) {
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        myProgreessBar.value = 0;

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-pause');
        target.classList.add('fa-circle-play');

    }
})


myProgreessBar.addEventListener('change', () => {
    audioElement.currentTime = myProgreessBar.value * audioElement.duration / 100;
})


// Handle play pause click

masterPlay.addEventListener("click", () => {



    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-pause');
        target.classList.add('fa-circle-play');

    }
}
)



document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1;

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-circle-pause');

        let target2 = document.getElementById('10');
        target2.classList.remove('fa-circle-pause');
        target2.classList.add('fa-circle-play');

    }
    else {
        songIndex += 1;

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-circle-pause');

        let target2 = document.getElementById(`${songIndex - 1}`);
        target2.classList.remove('fa-circle-pause');
        target2.classList.add('fa-circle-play');

    }



})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 10;

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-circle-pause');

        let target2 = document.getElementById('1');
        target2.classList.remove('fa-circle-pause');
        target2.classList.add('fa-circle-play');
    }
    else {
        songIndex -= 1;

        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        let target = document.getElementById(`${songIndex}`);
        target.classList.remove('fa-circle-play');
        target.classList.add('fa-circle-pause');

        let target2 = document.getElementById(`${songIndex + 1}`);
        target2.classList.remove('fa-circle-pause');
        target2.classList.add('fa-circle-play');
    }



})

