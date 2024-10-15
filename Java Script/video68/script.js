console.log("XYZ")

let abc=document.getElementsByClassName("box")
// console.log(abc)

// abc[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"
// console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="pink"
});