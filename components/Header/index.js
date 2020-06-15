// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer = document.querySelector('.header-container');


function Header() {

    ////create the elements
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newH1 = document.createElement('h1');
    const newSpan1 = document.createElement('span');
    //add styling
    newDiv.classList.add('header');
    newSpan.classList.add('date');
    newSpan1.classList.add('temp');
    newSpan.innerText = 'SMARCH 28, 2019';
    newH1.innerText = 'Lambda Times';
    newSpan1.innerText='98°';
    //put it on the page
    
    headerContainer.appendChild(newDiv);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newSpan1);
    
    return newDiv
}

Header();