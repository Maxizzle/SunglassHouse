

let modal = document.getElementById('myModal');
let button = document.getElementById('myButton');
let span = document.getElementsByClassName('close')[0];

button.onclick = function() {
    modal.style.display = 'block';

}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




