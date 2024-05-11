let data = {
    title: [
        "Alex production",
        "Drift phonk",
        "Drift Phonk 2",
        "Metaphonk"
    ],
    song: [
        "music/alex-productions-brazilian-phonk.mp3",
        "music/drift-phonk-2-178692.mp3",
        "music/drift-rush-house-phonk-164907.mp3",
        "music/Metaphonk-Long-Version(chosic.com).mp3"
    ],
    poster: [
        "https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif",
        "https://gifdb.com/images/high/upbeat-music-sound-wave-1uotbww4xs4eka6o.gif",
        "https://i.gifer.com/embedded/download/7h5t.gif",
        "https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif"
    ]
}


let song = new Audio()

window.onload = function(){
    playSong()
}

let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
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
    }
    else{
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}