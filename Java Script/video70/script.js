function getRandomColor(){
    let letters="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}

const a = document.getElementsByClassName("box")
for (let index = 0; index < a.length; index++) {
    a[index].style.color=getRandomColor()
   a[index].style.backgroundColor=getRandomColor()
    
}