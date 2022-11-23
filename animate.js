let changeWord;
let count = 0;
let index = 0;

let head = document.getElementById('head');
let word = document.getElementById('word');

window.onload = function(){
  word.style.visibility = "hidden";

  document.addEventListener("mousemove", function(event) {
  myFunction(event);
  ChangeWord();
});
}

function myFunction(e) {
  word.style.left = e.pageX + 'px';
  word.style.top = e.pageY + 'px';
}

function ChangeWord(){
  word.style.visibility = "visible";
  count++;
  if(count > 70){
    let sourceName = '/word' + index + '.PNG';
    word.src = sourceName;
    index = (++index) % 5;
    count = 0;
  }
}
