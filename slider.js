let totalImages = document.querySelectorAll(".photo");
let leftArr = document.querySelector("#leftArrow");
let righttArr = document.querySelector("#rightArrow");
let counter = 0;

function img() {
    for (let i = 0; i < totalImages.length; i++) {
        totalImages[i].style.display = "none";
    }
}

//right button
function showRight() {
    img();
    if (counter === totalImages.length - 1) counter = -1;
    totalImages[counter + 1].style.display = "block";
    counter++;
}
rightArr.addEventListener("click", function () {
    showRight();
});

//left button
function showLeft() {
    img();
    if (counter === 0) counter = totalImages.length;
    totalImages[counter - 1].style.display = "block";
    counter--;
}
leftArr.addEventListener("click", function () {
    showLeft();
});

startphoto(); //works as initilizer, photo is class shared by all image