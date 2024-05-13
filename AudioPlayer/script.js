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


let song = new Audio()

window.onload = function(){
    playSong()
}

let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    console.log(song);
    let songTitle = document.getElementsByClassName("songTitle")
    songTitle[0].textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+ data.poster[currentSong] +")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url("+ data.poster[currentSong] +")"
}

function playOrPause(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function(){
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 100 + "%"

    convertTime(song.currentTime)

    if(song.ended){
        next()
    }
})

function convertTime(seconds){
    currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent = min + ":" + sec
    console.log(song.currentTime);
      
    totallTime(Math.round(song.duration))
}

function totallTime(seconds){
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent += "/" + min + ":" + sec
}

//bag
// function next() {
//     currentSong++

//     if(currentSong >= data.song.length){
//         currentSong = 0
//     }

//     playSong()
//     play.src = "images/pause.png"
  
// }
// function prev(){
//     currentSong--

//     if(currentSong < 0){
//         currentSong = data.song.length - 1
//     }

//     playSong()
//     play.src = "images/pause.png"
// }


