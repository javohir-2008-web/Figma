let random1 = Math.floor(Math.random() * 6) + 1
let random2 = Math.floor(Math.random() * 6) + 1

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')

img1.setAttribute('src' , `./images/dice${random1}.png`) //string literal
img2.setAttribute('src' , `./images/dice${random2}.png`)

let text = document.querySelector('h1')

if (random1 > random2) {
    text.innerText = 'Player 1 won'
}

if (random2 > random1) {
    text.innerText = 'Player 2 won'
}

if (random1 == random2) {
    text.innerText = 'Draw'
}