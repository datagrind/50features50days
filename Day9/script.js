const sounds = ['Brian', 'Cleveland', 'Herbert', 'Quagmire','Stewie']

sounds.forEach( sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSounds(){
    sounds.forEach( sound => {
        const sounds = document.getElementById(sound)

        sounds.pause()

        sounds.currentTime = 0;
    })
}