let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let watchlistContainer = document.getElementById("watchlistContainer");

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	var searchString = searchInput.value;
	console.log(searchString);
	fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=abfb5a92`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			console.log(data.Search[0].Title);
			for (let i = 0; i < data.Search.length; i++) {
				fetch(
					`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=abfb5a92`
				)
					.then((res) => res.json())
					.then((lol) => {
						console.log(lol);

						watchlistContainer.innerHTML += `
					<div>
						<div class="Card">
							<div class="movie-image">
								<img
									src="${data.Search[i].Poster}"
									alt="Image of movie"
								/>
							</div>
							<div class="movie-info">
								<div class="movie-name-rating">
									<span><h2>${data.Search[i].Title}</h2></span
									><span><i class="fa-solid fa-star"></i></span
									><span>${lol.imdbRating}</span>
								</div>
								<div class="movie-otherinfo">
									<span>164min</span> <span>${lol.Genre}</span
									><span><i class="fa-solid fa-circle-plus"></i></span
									><span>Watchlist</span>
								</div>
								<div class="movie-story">
									<p>
										${lol.Plot}
									</p>
								</div>
							</div>
						</div>
						<hr>
					</div>
	  
`
					})
			}
		})
})

// searchInput.addEventListener("input", (e) => {
// 	var searchString = e.target.value;
// 	console.log(searchString);
// 	fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=abfb5a92`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		});

// });

/* <div class="card mb-3" style="max-width: 540px;">
		<div class="row g-0">
		  <div class="col-md-4">
			<img src="${data.Search[i].Poster}" class="img-fluid rounded-start" alt="...">
		  </div>
		  <div class="col-md-8">
			<div class="card-body">
			  <h5 class="card-title">${data.Search[i].Title}</h5>
			  <p class="card-text">${lol.Plot}</p>
			  <p class="card-text"><small class="text-muted">IMDB Rating${lol.imdbRating}</small></p>
			</div>
		  </div>
		</div>
	  </div> */
