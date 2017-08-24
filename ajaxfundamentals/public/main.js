$(function(){
	// searchBar
		$('#searchName').on('click', function(){
			let search = $('#searchRes').val();
			$.ajax({
				type: 'GET',
				url: 'https://swapi.co/api/people/?search=' + search
			}).done(function(data){
				let name = data.results[0].name
				$('#searchResults').append(name + 
					' was in:')

				data.results[0].films.forEach(function(film){
					let characterFilms = film
					// console.log(characterFilms)
					$.ajax({
						type:'GET',
						url: characterFilms,
					}).done(function(films){
						console.log(films.title)
						$('#filmResults').append
						('<li>' + films.title + '</li>')
					})
				})
			})
		})
	// tableOne
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/',
		}).done(function(data){
			let planets = data.results
			for (let j in planets){
			$("#planetTable").append('<tr> <td>' + planets[j].name + '</td> </tr>')
			}

		})
	// tableTwo
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
