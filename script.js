var random = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
// document.querySelector("img.img1").setAttribute("src", "images/");
document.querySelector("img.img2").setAttribute("src", "images/dice6.png"); 
// console.log(random);
// console.log(random2);\
// console.log(image);
// for(var i = 0; i < 6; i++){
//     if(random === 1){
//         document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
//     }
//     else if(random === 2){
//         document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
//     }
//     else if(random === 3){
//         document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
//     }
//     else if(random === 4){
//         document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
//     }
//     else if(random === 5){
//         document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
//     }
//     else{
//         document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
//     }
// // }
// // for(var i = 0; i < 6; i++){
//     if(random2 === 1){
//         document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
//     }
//     else if(random2 === 2){
//         document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
//     }
//     else if(random2 === 3){
//         document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
//     }
//     else if(random2 === 4){
//         document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
//     }
//     else if(random2 === 5){
//         document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
//     }
//     else{
//         document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
//     }
// }

var randomImage = "dice" + random + ".png";
var randomImageSource = "images/" + randomImage;
document.querySelector("img.img1").setAttribute("src", randomImageSource);

var randomImage2 = "dice" + random2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
document.querySelector("img.img2").setAttribute("src", randomImageSource2);

if(random > random2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if (random <random2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "ITS A DRAW\nRETRY AGAIN";
}