// create a business name generator by combining list of adjectives and shop name an another word 
// don't use arrays use functions strings
/*
Adjectives:
Crazy 
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros 
Limited 
Hub


*/

let a=Math.floor(Math.random()*3)
let b=Math.floor(Math.random()*3)
let c=Math.floor(Math.random()*3)

let adjectives={
    0:"Crazy", 
1:"Amazing",
2:"Fire"
}

let Shop_Name={
    0:"Engine", 
1:"Foods",
2:"Garments"
}

let Another_word={
    0:"Bros", 
1:"Limited",
2:"Hub"
}

console.log(`Business Name : ${adjectives[a]} ${Shop_Name[b]} ${Another_word[c]}`)


