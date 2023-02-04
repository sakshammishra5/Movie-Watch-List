let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
	var searchString = searchInput.value;
	console.log(searchString);
	fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=abfb5a92`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
        
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
