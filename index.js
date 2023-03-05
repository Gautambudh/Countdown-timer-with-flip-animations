
const D_topHalf = document.querySelector(".D-top")
const D_bottomHalf = document.querySelector(".D-bottom")
const D_topFlip = document.querySelector(".D-top-flip")
const D_bottomFlip = document.querySelector(".D-bottom-flip")

const H_topHalf = document.querySelector(".H-top")
const H_bottomHalf = document.querySelector(".H-bottom")
const H_topFlip = document.querySelector(".H-top-flip")
const H_bottomFlip = document.querySelector(".H-bottom-flip")

const M_topHalf = document.querySelector(".M-top")
const M_bottomHalf = document.querySelector(".M-bottom")
const M_topFlip = document.querySelector(".M-top-flip")
const M_bottomFlip = document.querySelector(".M-bottom-flip")

const S_topHalf = document.querySelector(".S-top")
const S_bottomHalf = document.querySelector(".S-bottom")
const S_topFlip = document.querySelector(".S-top-flip")
const S_bottomFlip = document.querySelector(".S-bottom-flip")


const date = new Date();
let D = date.getDate();
let H = date.getHours();
// let H = 2
let M = date.getMinutes();
// let M = 2
let S = date.getSeconds();
// let S = 2


const updateDOM = () => {
  setInterval ( () => {
    S_topFlip.classList.toggle("active")
    S_bottomFlip.classList.toggle("active")
    M_topFlip.classList.remove("active")
    M_bottomFlip.classList.remove("active")
    H_topFlip.classList.remove("active")
    H_bottomFlip.classList.remove("active")
    D_topFlip.classList.remove("active")
    D_bottomFlip.classList.remove("active")
    }, 500)
}
updateDOM()
// let S = 5
// console.log(S);/
setInterval( () => {
    S--
    if ( S === 0) {
        S = 60;
        M--;
        M_topFlip.classList.toggle("active")
        M_bottomFlip.classList.toggle("active")
    }
    if ( M === 0) {
          M = 60;
          H--;
          
          H_topFlip.classList.toggle("active")
          H_bottomFlip.classList.toggle("active")
        }
        if (H === 0) {
          H = 24;
          D--;
          
          D_topFlip.classList.toggle("active")
          D_bottomFlip.classList.toggle("active")
        }
        
        H_topFlip.innerHTML = H
        H_bottomFlip.innerHTML = H
        H_topHalf.innerHTML = H
        H_bottomHalf.innerHTML = H

        D_topFlip.innerHTML = D
        D_bottomFlip.innerHTML = D
        D_topHalf.innerHTML = D 
        D_bottomHalf.innerHTML = D

        M_topFlip.innerHTML = M
        M_bottomFlip.innerHTML = M
        M_topHalf.innerHTML = M
        M_bottomHalf.innerHTML = M
          
        S_topFlip.innerHTML = S
        S_bottomFlip.innerHTML = S
        S_topHalf.innerHTML = S 
        S_bottomHalf.innerHTML = S 
}, 1000)

