

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
















// function (d){
// let itemclassName = 'carousel-photo';
// items = d.document.querySelectorAll(itemclassName),
// totalItems = items.lenght
// slide = 0
// moving = true
// }

// function setInittialClasses() {
//     items[totalItems-1].classList.add('prev');
//     items[0].classList.add('active');
//     items[1].classList.add('next')
// }

// function setEventListeners(){
//     let next = d.getElementByclassName('carousel-photo-next')[0]
//     prev = d.getElementByclassName('carousel-button-prev')[0;
    
//     next.addEventListener('click, moveNext');
// prev.addEventListener('click', moveprev)]
// }

// function moveNext(){
//     if(!moving) {
//         if(slide ===(totalItems-1)){
//             slide = 0
//         }else {
//             slide++;
//         }
//     }
// }

// function movePrev(){
//     if(!moving) {
//         if(slide=== 0) {
//             slide = (totalItems-1);
//         } else {
//             slide--;
//         }
//     }
// }

// function disableInteraction(){
//     moving = true;

//     setTiemout(function(){
//         moving = false
//     }, 500)
// }

// function moveCarouselTo(slide) {
//     if(!moving) {
//         disableInteraction();

//         let newPrevious = slide -1,
//         newNext = slide +1,
//         oldPrevious = slide -2,
//         oldNext = slide + 2;

//         if((totalItems - 1) > 3) {

//             if(newPrevious <= 0) {
//                 oldPrevious = (totalItems -1)

//             } else if (newNext >= (totalItems-1)) {
//              oldNext = 0;
//             }
//             items[oldPrevious].className = itemclassName;
//             items[oldNext].className = itemclassName;

//             items[newPrevious].className = itemclassName + 'preve';
//             items[slide].className = itemclassName + 'next'
//         }
//     }
// }

// function initCarousel() {
//     setInittialClasses();
//     setEventListeners();
// }
// initCarousel();