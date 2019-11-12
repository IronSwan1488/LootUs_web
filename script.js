menu.onclick = function myFunction() {
	var idValue = document.getElementById('myTopnav');

	if (idValue.className === "topnav") {
		idValue.className += " responsive";
	} else {
		idValue.className = "topnav";
	}
} 