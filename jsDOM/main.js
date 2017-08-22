let input = document.getElementById('input')
let output = document.getElementById('output')
function capitalize() {
	let newName  = ""
		for (let j in input.value)
			if (j == 0) {
				newName = input.value[j].toUpperCase()
			} else {
				newName += input.value[j].toLowerCase()
			}
	output.innerHTML += '<li>' + newName + '</li>' 
	input.value=''
}
// document.onkeypress = function(e) {
// 	if (e.keyCode === 13) {
// 		capitalize()
// 	}
// }




input.onkeydown = function(e){
	if(e.keyCode == 13) {
		capitalize()
	}
}
