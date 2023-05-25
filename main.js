// const slideWraper = document.querySelector('.slider-wrapper')
// var arr_img = [
//     "./assets/img/slide/slide1.webp",
//     "./assets/img/slide/slide2.webp",
//     "./assets/img/slide/slide3.webp",
//     "./assets/img/slide/slide4.webp"
// ]
// const htmls = arr_img.map((item)=>{
//     return `<a href="" class="slide__bot-link">
//     <img src="${item}" alt="" id="img" class="slide__bot-img">
//     </a>`
// })
// console.log(htmls)
// function render(){
//     slideWraper.insertAdjacentHTML("afterbegin", htmls.join(''))
// }
// var index = 0;

// function prev() {
//     index--;
//     if(index < 0) index=arr_img.length - 1;
//     document.getElementById("img").src = arr_img[index];
// }

// function next() {
//     index++;
//     if(index >= arr_img.length) index=0;
//     document.getElementById("img").src = arr_img[index];
// }
// console.log(slideWraper)
// // setInterval("next()",5000);
// render();



window.addEventListener("load", function() {
    const slider = document.querySelector(".slide__bot");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slide__bot-next");
    const prevBtn = document.querySelector(".slide__bot-prev");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;

    let postionX = 0;

    let index = 0;

    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1)
    })

    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1)
    })

    function handleChangeSlide(direction) {
        if(direction === 1) {
            if(index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            postionX = postionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
        } else if(direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--;
        }
    }

    setInterval(function() {handleChangeSlide(1)}, 5000)
});

