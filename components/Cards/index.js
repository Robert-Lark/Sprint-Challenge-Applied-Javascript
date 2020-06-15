// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
// Use your function to create a card for each of the articles and add the card to the DOM.

const body = document.querySelector('body');

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((res) => {
      console.log(res);  
      const articleData1 = res.data.articles.bootstrap
      console.log(articleData1)
       articleData1.forEach(res => body.appendChild(cardCreator(res.headline, res.authorName, res.authorPhoto)))
      const articleData2 = res.data.articles.javascript
      console.log(articleData2)
      articleData2.forEach(res => body.appendChild(cardCreator(res.headline, res.authorName, res.authorPhoto)))
      const articleData3 = res.data.articles.jquery
      console.log(articleData3)
      articleData3.forEach(res => body.appendChild(cardCreator(res.headline, res.authorName, res.authorPhoto)))
      const articleData4 = res.data.articles.node
      console.log(articleData4)
      articleData4.forEach(res => body.appendChild(cardCreator(res.headline, res.authorName, res.authorPhoto)))
      const articleData5 = res.data.articles.technology
      console.log(articleData5)
      articleData5.forEach(res => body.appendChild(cardCreator(res.headline, res.authorName, res.authorPhoto)))
  
      })
  .catch(err => {
    console.log('oh no!, ', err);
  })



function cardCreator(headline, authorsName, authorsImage) {
///create the elements
const cardDiv1 = document.createElement('div');
const cardDiv2 = document.createElement('div');
const cardDiv3 = document.createElement('div');
const cardDiv4 = document.createElement('div');
const cardImg = document.createElement('img');
const cardSpan = document.createElement('span');
///style them
cardDiv1.classList.add('card');
cardDiv2.classList.add('headline');
cardDiv3.classList.add('author');
cardDiv4.classList.add('img-container');
cardDiv2.innerText = headline;
cardImg.src = authorsImage;
cardSpan.innerText = authorsName;

//Appending
cardDiv1.appendChild(cardDiv2);
cardDiv1.appendChild(cardDiv3);
cardDiv3.appendChild(cardDiv4);
cardDiv4.appendChild(cardImg);
cardDiv3.appendChild(cardSpan);

return cardDiv1;


}

