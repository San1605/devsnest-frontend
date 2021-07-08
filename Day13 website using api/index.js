fetch("https://newsapi.org/v2/everything?q=india&apiKey=24b3039098a44ffb88caaa5d8944e823")
.then(response=>response.json())
.then(data => {
	let newsAccordion = document.getElementById('newsAccordion');
	let newsHtml = "";
 console.log(data)

	if(data.articles){

		data.articles.forEach(function(element, index) {
			// console.log(element, index)
			// console.log(data.articles)
			let news = `<div class="card">
			<div class="card-header" id="heading${index}">
				<h2 class="mb-0">
				<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
					aria-expanded="false" aria-controls="collapse${index}">
				  ${element["title"]}
				</button>
				</h2>
			</div>

			<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
				<div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
			</div>
		</div>`;
		newsHtml += news;
	})
	newsAccordion.innerHTML = newsHtml;
}
else {
	console.log("Some error occured")
}
})


