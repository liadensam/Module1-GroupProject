var movieName = document.getElementsByClassName("card").id;
var data = fetch(`https://www.omdbapi.com/?s=batman&apikey=81939349`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    var movieTitle = data.Search[0].Title
})
.catch(function (err) {
    console.log("error: " + err);
});

console.log(data.movieTitle)

function appendDataToHTML(data) {
  
    var mainContainer = document.getElementById("jobListing");
  

    console.log(data.Search).length
    // get count of json objs
    var data_count = Object.keys(data.Search).length;
  
    // for each object, create card
    for (var i = 0; i < data_count; i++) {
      var job_title = data.jobs[i].title;
      var job_location = data.jobs[i].location.name;
      var job_link = data.jobs[i].absolute_url;
      var description = data.jobs[i].content;
      
      // create appropriate HTML elements
      var card = document.createElement("div");
      var cardBody = document.createElement("div");
      var cardTitle = document.createElement("div");
      var cardSubtitle = document.createElement("div");
      var cardCopy = document.createElement("div");
      
      // append classes to each element
      card.classList.add("card");
      cardBody.classList.add("card__body");
      cardTitle.classList.add("card__title");
      cardSubtitle.classList.add("card__subtitle");
      cardCopy.classList.add("card__copy");
  
      // set the text content for each node
      cardTitle.textContent = job_title;
      cardSubtitle.textContent = job_location;
      cardCopy.textContent = description;
  
      // append each element to where they belong
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardSubtitle);
      cardBody.appendChild(cardCopy);
      card.appendChild(cardBody);
  
      // append final `card` element to `mainContainer`
      mainContainer.appendChild(card);
    }
  }
  appendDataToHTML(data);