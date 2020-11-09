function changeColor (event) {
	document.querySelector('.active').classList.remove('active')

	event.target.classList.add('active')
}