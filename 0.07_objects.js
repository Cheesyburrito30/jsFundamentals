// Objects
//This creates a function object, NOT an object
// let Person = function(age, sandwhiches) {
// 	let pies = pie
// 	console.log(this)
// 	this.sandwhiches = sandwhiches
// 	this.getPies = function() {
// 		return pies;
// 	}
// }


// let pies = new Food(['pecan', 'blueberry', 'cherry', 'key lime'], 'reuben')

//let pies = {
	//let pies: ['pecan', 'blueberry', 'cherry', 'key lime']
	//sandwhiches : ['reuben', 'pb%j', 'turkey']
	//getPies = function() {
		//return pies;
	//}
//}
// console.log(typeof(pies))

// console.log(pies)


// console.log(pies.pies);
// pies.pies.forEach(function(i) {
// 	console.log(i + ' pie')
// })
// console.log(pies.getPies())





//Objects are full of Key-Valuess
let Team = {
	members: [
				member1= {
					name: 'Jay',
					age: 22,
					height: 6.2
				},
				member2= {
					name: 'Nicholas',
					age: 23,
					height: 8.2
				}
			]

}
//console.log(Team.members[0].name)

let food = {
	pies: ['pecan', 'blueberry','cherry', 'key lime'],
	newArray: [],
	// getPies: function(){
	// 	console.log(this)
	// 	return pies
	// },
	addPie: function(){
		this.pies.forEach(function(i){
			food.newArray.push(i + ' pies')
		})
		return food.newArray
	},
}
//console.log(food.pieName())
console.log(food.addPie())
food.addPie