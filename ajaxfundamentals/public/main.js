$(function(){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/',
		}).done(function(data){
			let planets = data.results
			for (let j in planets){
			$("#planetTable").append('<tr> <td>' + planets[j].name + '</td> </tr>')
			}

		})
		$.ajax({
			type: 'GET',
			url: "https://swapi.co/api/starships/",
		}).done(function(starships){
			let ships = starships.results
			// console.log(starships.results)
			for (let j in ships){
				$("#shipTable").append('<tr> <td>' + ships[j].name + '</td> </tr>')
			}
		})

	
})
