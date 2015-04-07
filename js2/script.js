window.onload = function() {

	var link = document.getElementById("words");

	link.onclick = function() {

		var adjective1 = prompt("Choose an adjective!");
		document.getElementById("word-a").innerHTML = adjective1 + "from the";

		var place1 = prompt("Choose a place!");
		document.getElementById("word-b").innerHTML = place1;

		var noun-plural = prompt("Choose a plural noun!");
		document.getElementById("word-c").innerHTML = "Fallen" + noun-plural;

		var adjective2 = prompt("Choose another adjective!");
		document.getElementById("word-d").innerHTML = adjective2;

		var place2 = prompt("Choose another place!");
		document.getElementById("word-e").innerHTML = "at the" + place2;

	};

};