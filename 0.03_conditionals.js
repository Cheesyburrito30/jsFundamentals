// conditionals
//if statement syntax
// if (/*variables to compare*/) {
// 	//code to run if true
// } else if ( second variables to compare) {
// 	//code to run if true
// } else {
// 	//code to run if other statements are false
// } 	

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0 ) {
		console.log("FizzBuzz!")
	} else if (i % 3 === 0) {
		console.log("fizz")
	} else if (i % 5 === 0) {
		console.log("buzz")
	}else {
		console.log(i)
	}
}




//
var name = "vernon"
if (name[0] === name[0].toUpperCase()) {
	console.log("Good job, " + name + " you know grammar")
} else {
	var res = name.replace(name[0], name[0].toUpperCase())
	console.log(res)
}
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue|house|car/gi, function myFunction(x){return x.toUpperCase();});
console.log(str)
console.log(res)