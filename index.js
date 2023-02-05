let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

function home1(){
    homeCount += 1
    homeScore.innerText = homeCount
}

function home2(){
    homeCount += 2
    homeScore.innerText = homeCount
}

function home3(){
    homeCount += 3
    homeScore.innerText = homeCount
}

function guest1(){
    guestCount += 1
    guestScore.innerText = guestCount
}

function guest2(){
    guestCount += 2
    guestScore.innerText = guestCount
}

function guest3(){
    guestCount += 3
    guestScore.innerText = guestCount
}