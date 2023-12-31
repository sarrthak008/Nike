

var tl = gsap.timeline()

tl.from("nav", {
    scale: 1.5,
    duration: 0.5,
    delay: 0.1,
    stagger: 0.1
})

tl.from("#container #head", {
    scale: 50,
    duration: 0.1,
    delay: 0.1,
    stagger: 0.1
})



tl.from("#logo", {
    x: -2000,
    duration: 0.2,
    delay: 0.1,
    stagger: 0.1
})

tl.from("#info", {
    x: -600,
    duration: 0.3,
    delay: 0.1,
    stagger: 1
})

tl.from("#cimg img", {
    x: -900,
    duration: 1,
    delay: 0.1,
    stagger: 1,
    yoyo: true
})


tl.from("#cpart3 #box  .picBox", {
    x: -900,
    duration: 0.3,
    delay: 0.1,
    stagger: 1,
    yoyo: true
})




var s1 = document.querySelector("#s1")
var s2 = document.querySelector("#s2")
var s3 = document.querySelector("#s3")
var s4 = document.querySelector("#s4")
var s5 = document.querySelector("#s5")
var simg = document.querySelector("#simg");
var pname = document.querySelector("#PName")
var slogan = document.querySelector("#slogan");
var prise = document.querySelector("#prise");
console.log(prise)

s1.addEventListener("dblclick", function (e) {

    simg.src = "./images/s11.png"
    pname.innerHTML = "AirMax";
    slogan.innerHTML = "walk with style";
    prise.innerHTML = "Rs:1000"



    tl.from("#cimg img", {
        x: -900,
        duration: 1,
        delay: 0.1,
        stagger: 1,
        yoyo: true
    })
})

s2.addEventListener("dblclick", function (e) {
    simg.src = "./images/s22.png"
    pname.innerHTML = "WalkLong";
    slogan.innerHTML = "wear own style";
    prise.innerHTML = "Rs:1150"


    tl.from("#cimg img", {
        x: -900,
        duration: 1,
        delay: 0.1,
        stagger: 1,
        yoyo: true
    })
})

s3.addEventListener("dblclick", function (e) {
    simg.src = "./images/s33.png"

    pname.innerHTML = "AirWalk70";
    slogan.innerHTML = "feel like Air";
    prise.innerHTML = "Rs:1150"

    

    tl.from("#cimg img", {
        x: -900,
        duration: 1,
        delay: 0.1,
        stagger: 1,
        yoyo: true
    })
})

s4.addEventListener("dblclick", function (e) {
    simg.src = "./images/s44.png"

    pname.innerHTML = "UltraMove";
    slogan.innerHTML = "Move on style";
    prise.innerHTML = "Rs:950"

    tl.from("#cimg img", {
        x: -900,
        duration: 1,
        delay: 0.1,
        stagger: 1,
        yoyo: true
    })
})

s5.addEventListener("dblclick", function (e) {
    simg.src = "./images/s55.png"
    pname.innerHTML = "WalkNike";
    slogan.innerHTML = "wear own style";
    prise.innerHTML = "Rs:1200"
    tl.from("#cimg img", {
        x: -900,
        duration: 1,
        delay: 0.1,
        stagger: 1,
        yoyo: true
    })
})