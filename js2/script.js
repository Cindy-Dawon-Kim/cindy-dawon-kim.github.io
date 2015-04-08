window.onload = function() {

	var link = document.getElementById("words");

	link.onclick = function() {

		var adjective1 = prompt("Choose an adjective ending with -ing!");
		document.getElementById("word_a").innerHTML = adjective1 + " from the ";

		var place1 = prompt("Choose a place!");
		document.getElementById("word_b").innerHTML = place1;

		var noun_plural = prompt("Choose a plural noun!");
		document.getElementById("word_c").innerHTML = "Fallen " + noun_plural;

		var adjective2 = prompt("Choose another adjective!");
		document.getElementById("word_d").innerHTML = adjective2;

		var place2 = prompt("Choose another place!");
		document.getElementById("word_e").innerHTML = " at the " + place2;

	};

};