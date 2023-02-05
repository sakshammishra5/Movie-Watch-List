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

						watchlistContainer.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
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
	  </div>
	  
`;
					});
			}
		});

	watchlistContainer.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
		<div class="row g-0">
		  <div class="col-md-4">
			<img src="https://images.unsplash.com/photo-1675453442429-1ea5b9652743?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="img-fluid rounded-start" alt="...">
		  </div>
		  <div class="col-md-8">
			<div class="card-body">
			  <h5 class="card-title">Movie Name</h5>
			  <p>99min</p><p>Action,Crime,Thriller</p>
			  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			</div>
		  </div>
		</div>
	  </div>
`;
});

// searchInput.addEventListener("input", (e) => {
// 	var searchString = e.target.value;
// 	console.log(searchString);
// 	fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=abfb5a92`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		});

// });
