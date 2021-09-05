// Wröppum þetta inní function svo það sé hægt að nota async/await
const main = async () => {
    // Sækjum öll elementin
  const moviePosterElements = document.getElementsByClassName("moviePoster");

  // Sækjum gögnin frá api og setjum þau inní object með elementinu
  const movies = await Promise.all(
    Array.from(moviePosterElements).map(async (posterElement) => ({
      data: await fetch(
        `https://www.omdbapi.com/?t=${posterElement.dataset.movie}&apikey=81939349`
      ).then((response) => response.json()),
      element: posterElement
    }))
  );

  // Loopum yfir öll objectin og setjum api gögnin inní elementið
  movies.forEach((movie) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class='img-container'>
        <img src='${movie.data.Poster}' />
    </div>
    <div class='card'>
        <div class='card-content'>
            <h2 class='card-title'>${movie.data.Title}</h2>
            <p class='card-body'>
                (actors) <br/>
                (actors)
            </p>
            <a href='#' class='button'> Kaupa miða </a>
        </div>
    </div>`;

    movie.element.appendChild(div);
  });
};

main();