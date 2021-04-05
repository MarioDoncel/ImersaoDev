let posters = [
    'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131110-uau-posters-filmes-bumblebee.jpg', 
    'https://assets0.minhaserie.com.br/uploads/editor_pictures/000/050/824/content_pic.jpg',
    'http://br.web.img2.acsta.net/r_1280_720/pictures/19/04/30/17/13/2380866.jpg'
]
let filmes = [
    'Bumblebee',
    'Justice League',
    'Sonic - O Filme'
]
let index = 0

const movieRight = document.querySelector('.movie.right')
const movieLeft = document.querySelector('.movie.left')
const movieActive = document.querySelector('.movie.active')

function populateMovies() {
    let leftindex = index 
    let activeIndex = index + 1 
    let rightIndex = index + 2 

    if (leftindex == -1) leftindex = posters.length-1
    if (leftindex == -2) leftindex = posters.length-2

    if (activeIndex == -1) activeIndex = posters.length-1
    if (activeIndex == posters.length) activeIndex = 0

    if (rightIndex == posters.length) rightIndex = 0
    if (rightIndex == posters.length+1) rightIndex = 1

    movieRight.innerHTML = `
        <img src="${posters[rightIndex]}" alt="">
        <h3>${filmes[rightIndex]}</h3>`
    movieLeft.innerHTML = `
        <img src="${posters[leftindex]}" alt="">
        <h3>${filmes[leftindex]}</h3>`
    movieActive.innerHTML = `
        <img src="${posters[activeIndex]}" alt="">
        <h3>${filmes[activeIndex]}</h3>`
}

populateMovies()

var timer
const stopTimer = clearInterval(timer)
function moveRight(e, ms) {
    clearInterval(timer)
    timer = setInterval(() => {
        index++
            if (index >= posters.length) {
                index = 0
            }
        populateMovies()
    },ms)
    e.target.onmouseleave = () => {clearInterval(timer)}
}

function moveLeft(e, ms) {
    clearInterval(timer)
    timer = setInterval(() => {
        index--
        if (index <= -3) {
            index = 2
        }
    populateMovies()
},ms)
    e.target.onmouseleave = () => {clearInterval(timer)}
}


