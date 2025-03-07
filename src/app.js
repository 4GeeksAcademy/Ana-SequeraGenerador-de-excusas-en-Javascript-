import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['A talking squirrel', 'my neighbort', 'A ghost', 'A tiny Alien'];
let action = ['stole', 'started dancing', 'challenged me to a duel', 'exploded'];
let what = ['my homework', 'my last slice of pizza', 'the wifi router', 'my left shoe'];
let when = ['right before my meeting', 'whilr i was sleeping', 'during an import phone call', 'on my way to work'];

function getRandomnumber (a, b){
  return Math.floor(Math.random()*(b - a) +  a);
}

function getRandom(anyarray){
  let max = anyarray.length-1;
  let min = 0;
  console.log (max , min , anyarray)
  let random= getRandomnumber(min,max);
  return anyarray[random];
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
document.querySelector('#excuse').innerHTML= getRandom (who) +" "+getRandom (action)+" "+ getRandom (what) +" "+ getRandom (when)}
