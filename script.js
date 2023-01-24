
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
    { songName: "Badnaamiyan", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Aashiq-Banaya-Aapne", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Aao-Kabhi-Haveli-Pe", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Aankh-Marey", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Akh-Lad-Jaave", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Ankhiyon-Se-Goli-Mare", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Bam Bhole", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Besabriyaan", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
    { songName: "Boond-Boond", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
    { songName: "Chalti-Hai-Kya-9-Se-12", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
    { songName: "Chammak-Challo", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
    { songName: "Cheez-Badi", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
    { songName: "Coca-Cola", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },
    { songName: "Dil", filePath: "songs/24.mp3", coverPath: "covers/24.jpg" },
    { songName: "Dil Mein Ho Tum", filePath: "songs/25.mp3", coverPath: "covers/25.jpg" },
    { songName: "Dilbar", filePath: "songs/26.mp3", coverPath: "covers/26.jpg" },
    { songName: "Duniya", filePath: "songs/27.mp3", coverPath: "covers/27.jpg" },
    { songName: "Ek-Do-Teen", filePath: "songs/28.mp3", coverPath: "covers/28.jpg" },
    { songName: "Ek-Toh-Kum-Zindagani", filePath: "songs/29.mp3", coverPath: "covers/29.jpg" },
    { songName: "Enni Soni", filePath: "songs/30.mp3", coverPath: "covers/30.jpg" },
    { songName: "Maan Meri Jaan", filePath: "songs/31.mp3", coverPath: "covers/31.jpg" },
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

