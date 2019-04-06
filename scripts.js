//create a request variable and assign a new hmlhttprequest object to it
const request = new XMLHttpRequest();

//open a new connection to the API using a GET request on the url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  //begin accessing JSON data here. this dta variable contains all the JSON as an array of JS objects
  const data = JSON.parse(this.response);

  //create error response if not found. if everything works go through data array and display the title of each movie 
  if(request.status >= 200 && request.status < 400) {
    data.forEach(potato => {
      //creat a div witrh a card class
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //creat an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = potato.title;

      //create p element and set text content to 
      const p = document.createElement('p');
      potato.description = potato.description.substring(0,300); //limit to 300 characters
      p.textContent = `${potato.description}...`//end with an ellipses

      //append the cards to the container element
      container.appendChild(card);

      //make each card contain the h1 and p const we created above in it
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Something went wrong...';
    app.appendChild(errorMessage);
  };
};

//send request
request.send();


const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
