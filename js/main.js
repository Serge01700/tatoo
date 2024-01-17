var zombieImage;
var imageLeft;
var treeOfLifeImage;
var eyeOfHorusImage;

document.addEventListener("DOMContentLoaded", function(){
    zombieImage = document.getElementById('zombie');
    imageLeft = document.getElementById('image-left');
    treeOfLifeImage = document.getElementById('tree-of-life');
    eyeOfHorusImage = document.getElementById('eye-of-horus');

    zombieImage.addEventListener('mouseover', function() {
        zombieImage.style.filter = 'grayscale(100%)';
    });

    zombieImage.addEventListener('mouseout', function() {
        zombieImage.style.filter = 'none';
    });

    imageLeft.addEventListener('mouseover', function() {
        imageLeft.style.filter = 'grayscale(100%)';
    });

    imageLeft.addEventListener('mouseout', function() {
        imageLeft.style.filter = 'none'; 
    });

    treeOfLifeImage.addEventListener('mouseover', function() {
        treeOfLifeImage.style.filter = 'grayscale(100%)';
    });

    treeOfLifeImage.addEventListener('mouseout', function() {
        treeOfLifeImage.style.filter = 'none';
    });

    eyeOfHorusImage.addEventListener('mouseover', function() {
        eyeOfHorusImage.style.filter = 'grayscale(100%)';
    });

    eyeOfHorusImage.addEventListener('mouseout', function() {
        eyeOfHorusImage.style.filter = 'none';
    });
});