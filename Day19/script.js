const screens = document.querySelectorAll('.screen')

const choose_bad_btns = document.querySelectorAll('.choose-bad-btn')

const start_btn = document.getElementById('start-btn')

const game_container = document.getElementById('game-container')

const timeEle = document.getElementById('time')

const scoreEle = document.getElementById('score')

const messageEle = document.getElementById('message')

let seconds = 0
let score = 0
let selected_bad = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_bad_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_bad = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createBad, 1000)
        startGame()
    })
})

function startGame(){
    setInterval(increaseTime, 1000)
}

function increaseTime(){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEle.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createBad(){
    const bad = document.createElement('div')
    bad.classList.add('bad-guy')
    const { x, y } = getRandomLocation()
    bad.style.top = `${y}px`
    bad.style.left = `${x}px`
    bad.innerHTML = `<img src="${selected_bad.src} " alt="${selected_bad.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    bad.addEventListener('click', catchBad)

    game_container.appendChild(bad)
}

function getRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchBad(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addBads()
}

function addBads(){
    setTimeout(createBad, 1000)
    setTimeout(createBad, 1500)
}

function increaseScore(){
    score++
    if(score > 19){
        message.classList.add('visible')
    }
    scoreEle.innerHTML = `Score: ${score}`
}