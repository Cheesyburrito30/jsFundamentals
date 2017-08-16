// function Person(age, birthYear, graduationYear, numSiblings) {
// 	this.age = age;
// 	this.birthYear = birthYear;
// 	this.graduationYear = graduationYear;
// 	this.numSiblings = numSiblings;
// }
// var vernon = new Person(21, 1995, 2014, 1);
// console.log (vernon);

const Person = function(age, birthYear, graduationYear, numSiblings) {
	this.age = age;
	this.birthYear = birthYear;
	this.graduationYear = graduationYear;
	this.numSiblings = numSiblings;
}
let vernon = new Person(21, 1995, 2014, 1);
console.log(vernon);
console.log(Object.keys(vernon).length);
// for (let i in vernon) {
// 	console.log(vernon[i]);
// }
for (let i = 0; i < Object.keys(vernon).length; i++){
	console.
}