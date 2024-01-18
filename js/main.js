var zombieImage;
var imageLeft;
var treeOfLifeImage;
var eyeOfHorusImage;

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var menuList = document.getElementById('menuList');

    menuToggle.addEventListener('click', function () {
        event.preventDefault();
        menuList.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {

    zombieImage = document.getElementsByClassName('blackwhite');
    
    for(const img of zombieImage){
        img.addEventListener('mouseover', function () {
            this.style.filter = 'grayscale(100%)';
        });

        img.addEventListener('mouseout', function () {
            this.style.filter = 'none';
        });
    }
});