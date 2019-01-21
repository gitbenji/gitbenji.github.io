window.addEventListener("hashchange", hashChangeFunction);

const toDisplay = document.getElementById('display')
const notContainer = document.getElementById('not-container')

// const

function hashChangeFunction(e) {
	e.preventDefault();
	notContainer.style.display = "block"
	history.pushState({}, '', this.href)
	if (window.location.hash == "#teal-display") {
		toDisplay.style.display = "inline-flex"
		toDisplay.innerHTML = ''
		notContainer.style.display = "block"
	} else if (window.location.hash == "#dancer-display") {
		toDisplay.style.display = "inline-flex"
		toDisplay.innerHTML = '<object type="text/html" data="./dancer.html" style="width: 100vw;"></object>'
		notContainer.style.display = "block"
	} else if (window.location.hash == "#uru-display") {
		toDisplay.style.display = "inline-flex"
		toDisplay.innerHTML = '<object type="text/html" data="./uru.html" style="width: 100vw;"></object>'
		notContainer.style.display = "block"
	} else {
		toDisplay.style.display = "none"
		notContainer.style.display = "none"
	}
}