let data = {
    title: [
        "Mi Qani Hogi - Tar Indz",
        "Mi Qani Hogi - SMS",
        "3.33 - Khachbar - Nkari Mej",
        "Mi Qani Hogi - Axjik Chxjik",
        "Misho - Tsar"
    ],
    song: [
        "music/Mi_Qani_Hogi-Tar_indz-world75.spcs.bio.mp3",
        "music/Mi_Qani_Hogi-SMS_(feat._Sebu_Simonian)-world75.spcs.bio.mp3",
        "music/333_-_Nkari_mej_resample_76662567.mp3",
        "music/Mi Qani Hogi Axjik Chxjik.mp3",
        "music/Misho - Tsar (www.mp3erger.ru) 2020.mp3"
    ],
    poster: [
        "https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif",
        "https://gifdb.com/images/high/upbeat-music-sound-wave-1uotbww4xs4eka6o.gif",
        "https://i.gifer.com/embedded/download/7h5t.gif",
        "https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif",
        "https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
    ]
}

let song = new Audio();
let currentSong = 0;

window.onload = function () {
    loadPlaylist();
    playSong();
}

function loadPlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';
    for (let i = 0; i < data.title.length; i++) {
        const li = document.createElement('li');
        li.textContent = data.title[i];
        li.onclick = () => selectSong(i);
        playlistElement.appendChild(li);
    }
}

function selectSong(index) {
    currentSong = index;
    play.src = "images/pause.png"
    playSong();
}

function addSong() {
    const titleInput = document.getElementById('songTitleInput');
    const urlInput = document.getElementById('songUrlInput');
    const posterInput = document.getElementById('songPosterInput');

    const newTitle = titleInput.value;
    const newUrl = urlInput.value;
    const newPoster = posterInput.value;

    if (newTitle && newUrl && newPoster) {
        data.title.push(newTitle);
        data.song.push(newUrl);
        data.poster.push(newPoster);

        loadPlaylist();

        titleInput.value = '';
        urlInput.value = '';
        posterInput.value = '';
    } else {
        alert('Please fill in all fields');
    }
}

function playSong() {
    song.src = data.song[currentSong];
    document.getElementsByClassName("songTitle")[0].textContent = data.title[currentSong];
    let img = document.getElementsByClassName("row1");
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementsByClassName("main");
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPause() {
    let play = document.getElementById("play");
    if (song.paused) {
        song.play();
        play.src = "images/pause.png";
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png";
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill");
    let position = song.currentTime / song.duration;
    fill[0].style.marginLeft = position * 100 + "%";

    convertTime(song.currentTime);

    if (song.ended) {
        next();
    }
});

function convertTime(seconds) {
    currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent = min + ":" + sec

    totalTime(Math.round(song.duration))
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent += "/" + min + ":" + sec
}

function next() {
    currentSong++

    if (currentSong >= data.song.length) {
        currentSong = 0
    }

    playSong()
    play.src = "images/pause.png"

}
function prev() {
    currentSong--

    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }

    playSong()
    play.src = "images/pause.png"
}

function increase() {
    song.volume += 0.2;
}

function decrease() {
    song.volume -= 0.2
}

function mute() {
    let mute = document.getElementById("mute")
    if (song.muted) {
        mute.src = "images/volume.png"
        song.muted = false
    } else {
        mute.src = "images/volume-mute.png"
        song.muted = true
    }

}

function changeSpeed(speed) {
    song.playbackRate = parseFloat(speed);
}

let isDragging = false;

function startDrag(event) {
    isDragging = true;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(event) {
    if (!isDragging) return;

    const seekBar = document.querySelector('.seek-bar');
    const handle = document.querySelector('.handle');
    const fill = document.querySelector('.fill');
    const rect = seekBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const barWidth = seekBar.clientWidth;
    let newPosition = offsetX / barWidth;

    if (newPosition < 0) {
        newPosition = 0;
    } else if (newPosition > 1) {
        newPosition = 1;
    }

    song.currentTime = song.duration * newPosition;
}

function stopDrag(event) {
    if (!isDragging) return;

    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

document.querySelector('.handle').addEventListener('mousedown', startDrag);


document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case ' ':
            playOrPause();
            break;
        case 'ArrowRight':
            next();
            break;
        case 'ArrowLeft':
            prev();
            break;
        case 'ArrowUp':
            increase();
            break;
        case 'ArrowDown':
            decrease();
            break;
        case 'm':
            mute();
            break;
    }
});




