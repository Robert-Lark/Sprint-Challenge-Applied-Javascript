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

const carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel-container');

  function bambamComponant(image){
      //crete the div the image will live in
      const imgDiv = document.createElement('div');
      //give it a class
      imgDiv.classList.add('carouselImgDiv');
      //create the image
      const carouselImg = document.createElement('img');
      // set its source
      carouselImg.src = image;
      carouselImg.style = 'width: 440px; height: 250px;'
      //append it to its div
      imgDiv.appendChild(carouselImg);
      //give it a class
      carouselImg.classList.add('carouselImg');
    
      return imgDiv
    }
    
  
  
  
  
  const imgDiv1 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.40.56 PM.png");
  const imgDiv2 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.27 PM.png");
  const imgDiv3 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.48 PM.png");
  const imgDiv4 = bambamComponant("assets/carousel/Screen Shot 2020-06-08 at 1.41.17 PM.png");

  carouselContainer.appendChild(imgDiv1);
  carouselContainer.appendChild(imgDiv2);
  carouselContainer.appendChild(imgDiv3);
  carouselContainer.appendChild(imgDiv4);

  const carouselbuttonLeft = document.createElement('div');
  carouselbuttonLeft.classList.add('left-button');
  carouselContainer.appendChild(carouselbuttonLeft);

  const carouselbuttonRight = document.createElement('div');
  carouselbuttonRight.classList.add('right-button');
  carouselContainer.appendChild(carouselbuttonRight);




const carcon = document.querySelector('.carousel-container');
carcon.appendChild(carouselContainer);



// // carouselbuttonLeft.addEventListener('click', function(){
// //   const slides = document.querySelectorAll('.carouselImg');
// //    let slideIndex = Array.from(slides);
// // let slideArray = [];
// // console.log(slideArray);
// //    slideIndex.forEach((img) => {
// //      slideArray.push(img);
// //    })
//   // slideIndex.push(slides[0]);
//   //   slideIndex.push(slides[1]);
//   //   slideIndex.push(slides[2]);
//   //   slideIndex.push(slides[3]);

    

//     // console.log(slide);

// // })

// //   let slideIndex = slides[0];
  
// //   function showSlides(n) {
   
// //     
// //     if (n > 4) {
// //         slideIndex = 1 
// //     }
// //     if (n < 1) {
// //         slideIndex = 3
// //     }
// //     slides[0].style.display = "none";
// //     slides[1].style.display = "none";
// //     slides[2].style.display = "none";
// //     slides[3].style.display = "none";
// // //     slides[slideIndex - 1].style.display = "block";
// // }
// // showSlides(slideIndex);