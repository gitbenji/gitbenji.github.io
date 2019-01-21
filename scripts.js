console.log("yo")

const map = document.getElementById("map").children[0]
const checkboxContainer = document.getElementById("checkbox-container")
console.log(map)
function checkboxClick(event) {
	console.log(event.target.id)
	const layer = map.getElementById(event.target.id)
	if (event.target.checked == true) {
		layer.style.display = "block"
	} else {
		layer.style.display = "none"
	}
}

const children = Array.from(map.children)
children.forEach(function (child) {
	if (child.tagName == "g") {
		checkboxContainer.innerHTML += '\n<input type="checkbox" name="' + child.id + '" id="' + child.id + '" onclick=checkboxClick(event); checked="true"> <span>' + child.id + '</span><br>'
	}
})
