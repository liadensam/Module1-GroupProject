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
			element: posterElement,
		}))
	);

	// Loopum yfir öll objectin og setjum api gögnin inní elementið
	movies.forEach((movie) => {
		let div = document.createElement("div");
		const movieUrl = movie.data.Poster.substring(
			0,
			movie.data.Poster.length - 4
		);
		div.innerHTML = `
      <div class='card' style='background-image: url(${movieUrl}); background-size: 185px 220px;'>
        <div class='card-content'>
            <h2 class='card-title'>${movie.data.Title}</h2>
            <p class='card-body'>
                Salur 1 <br/>
                kl 17:00
            </p>
            <a href='#' class='button'> Kaupa miða </a>
        </div>
      </div>`;

		movie.element.appendChild(div);
	});

	// Sækjum öll elementin
	const comingPosterElements = document.getElementsByClassName("comingPoster");

	// Sækjum gögnin frá api og setjum þau inní object með elementinu
	const coming = await Promise.all(
		Array.from(comingPosterElements).map(async (posterElement) => ({
			data: await fetch(
				`https://www.omdbapi.com/?t=${posterElement.dataset.movie}&apikey=81939349`
			).then((response) => response.json()),
			element: posterElement,
		}))
	);

	// Loopum yfir öll objectin og setjum api gögnin inní elementið
	coming.forEach((movie) => {
		let div = document.createElement("div");
		const movieUrl = movie.data.Poster.substring(
			0,
			movie.data.Poster.length - 4
		);
		div.innerHTML = `
      <div class='card' style='background-image: url(${movieUrl}); background-size: 185px 220px;'>
        <div class='card-content'>
            <h2 class='card-title'>${movie.data.Title}</h2>
            <p class='card-body'>
                Væntanleg <br/>
                18/09/21
            </p>
            <a href='#' class='button'> Skoða </a>
        </div>
      </div>`;

		movie.element.appendChild(div);
	});
};

main();
