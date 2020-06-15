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

const carousel = document.createElement('div');
carousel.classList.add('carousel');

  function bambamComponant(image){
      const carouselImg = document.createElement('img');
      carouselImg.src = image;
      carouselImg.style = 'width: 440px; height: 250px;'
      carouselImg.classList.add('carouselImg');
      return carouselImg
    }
  
  const imgDiv1 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.40.56 PM.png");
  const imgDiv2 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.27 PM.png");
  const imgDiv3 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.48 PM.png");
  const imgDiv4 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.17 PM.png");

  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carousel);
  const carouselbuttonLeft = document.createElement('div');
  carouselbuttonLeft.classList.add('left-button');
  carousel.appendChild(carouselbuttonLeft);
  carousel.appendChild(imgDiv1);
  carousel.appendChild(imgDiv2);
  carousel.appendChild(imgDiv3);
  carousel.appendChild(imgDiv4);
  const carouselbuttonRight = document.createElement('div');
  carouselbuttonRight.classList.add('right-button');
  carousel.appendChild(carouselbuttonRight);








