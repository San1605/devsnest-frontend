fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font=Impact&font_size=50", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eb92a43ecbmshd2b72fe1f7f23eap180f5ajsn1c0660a589e2",
		"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});