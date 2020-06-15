/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {

const carouselDiv1 = document.createElement('div');
const carouselDiv2 = document.createElement('div');
const carouselDiv3 = document.createElement('div');
const imgDiv1 = document.createElement('div');
const imgDiv2 = document.createElement('div');
const imgDiv3 = document.createElement('div');
const imgDiv4 = document.createElement('div');
const carouselImg1 = document.createElement('img');
const carouselImg2 = document.createElement('img');
const carouselImg3 = document.createElement('img');
const carouselImg4 = document.createElement('img');

carouselDiv1.classList.add('carousel');
carouselDiv2.classList.add('left-button');
carouselDiv3.classList.add('right-button');
carouselImg1.src="./assets/carousel/mountains.jpeg";
carouselImg2.src="./assets/carousel/computer.jpeg";
carouselImg3.src="./assets/carousel/trees.jpeg";
carouselImg4.src="./assets/carousel/turntable.jpeg";
imgDiv1.classList.add('carouselImg1');
imgDiv2.classList.add('carouselImg1');
imgDiv3.classList.add('carouselImg1');
imgDiv4.classList.add('carouselImg1');
carouselDiv1.appendChild(carouselDiv2);
carouselDiv1.appendChild(imgDiv1);
carouselDiv1.appendChild(imgDiv2);
carouselDiv1.appendChild(imgDiv3);
carouselDiv1.appendChild(imgDiv4);
carouselDiv1.appendChild(carouselImg1);
imgDiv1.appendChild(carouselImg1);
carouselDiv1.appendChild(carouselImg2);
imgDiv2.appendChild(carouselImg2);
carouselDiv1.appendChild(carouselImg3);
imgDiv3.appendChild(carouselImg3);
carouselDiv1.appendChild(carouselImg4);
imgDiv4.appendChild(carouselImg4);
carouselDiv1.appendChild(carouselDiv3);

carouselDiv2.addEventListener('click', function showSlides(n) {
  var slides = document.getElementsByClassName("carouselImg1");
  if (n > 3) {
      slideIndex = 3 
  }
  if (n < 1) {
      slideIndex = 1
  }
  slides[0].style.display = "none";
  slides[1].style.display = "none";
  slides[2].style.display = "none";
  slides[slideIndex - 1].style.display = "block";
})
return carouselDiv1;
}

body.appendChild(carousel());