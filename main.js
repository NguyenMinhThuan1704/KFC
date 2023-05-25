// window.addEventListener("load", function() {
//     const slider = document.querySelector(".slide__bot");
//     const sliderMain = document.querySelector(".slider-main");
//     const sliderItems = document.querySelectorAll(".slider-item");
//     const nextBtn = document.querySelector(".slide__bot-next");
//     const prevBtn = document.querySelector(".slide__bot-prev");
//     const sliderItemWidth = sliderItems[0].offsetWidth;
//     const sliderLength = sliderItems.length;

//     let postionX = 0;

//     let index = 0;

//     nextBtn.addEventListener("click", function() {
//         handleChangeSlide(1)
//     })

//     prevBtn.addEventListener("click", function() {
//         handleChangeSlide(-1)
//     })

//     function handleChangeSlide(direction) {
//         if(direction === 1) {
//             if(index >= sliderLength - 1) {
//                 index = sliderLength - 1;
//                 return;
//             }
//             postionX = postionX - sliderItemWidth;
//             sliderMain.style = `transform: translateX(${postionX}px)`;
//             index++;
//         } else if(direction === -1) {
//             if(index <= 0) {
//                 index = 0;
//                 return;
//             }
//             postionX = postionX + sliderItemWidth;
//             sliderMain.style = `transform: translateX(${postionX}px)`;
//             index--;
//         }
//     }

//     setInterval(function() {handleChangeSlide(1)}, 5000)
// });

var list =  document.getElementsByClassName("slider-img");
var index = 0;
for(x of list){
    x.style.display= 'none'; 
}
list[index].style.display= 'block';
function prev() {
    for(x of list){
        x.style.display= 'none';
    }
    if(index == 0) index =  list.length -1;
    else index = index -1;
    list[index].style.display= 'block';
    // setTimeout(prev, 2000); 
}

function next() {
    for(x of list){
        x.style.display= 'none';
    }
    if(index == list.length -1) index =  0;
    else index = index + 1;
    list[index].style.display= 'block';
}

setTimeout(prev, 5000); 
