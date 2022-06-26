
let myLink = document.querySelector(".links")
let myLis = document.querySelector(".li-box")
let myBtn = document.querySelector(".btnS")
let myBtn2 = document.querySelector(".btnS2")
let myImg = document.getElementById("imgS")
let myImg2 = document.getElementById("imgS2")

// console.log(myLink)
// myLink.onclick = function() {
//   myLis.style.display = "block"
// }
myBtn.onclick  = function () {
  myImg2.style.opacity = "1"
  myImg.style.opacity = "0" 
}
myBtn2.onclick  = function () {
  myImg2.style.opacity = "0"
  myImg.style.opacity = "1" 
}


console.log(document.styleSheets.rules  )
let main =document.getElementById("opacityhos")
let mainS =document.getElementById("opacitysec")
let mainF =document.getElementById("opacityfooter")
let btnHH = document.getElementById("btnHH")


window.onscroll = function(){
  if(window.scrollY >= 1100) {
    mainS.style.opacity = "1"
  }
    if(window.scrollY >= 1600) {
    mainF.style.opacity = "1"
  }
    if(window.scrollY >= 300) {
    main.style.opacity = "1"
  }
  if (window.scrollY >= 500) {
    btnHH.style.opacity = "1";
    if(window.scrollY <= 600) {
      btnHH.style.opacity = "0";
    }
  }
}

btnHH.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};