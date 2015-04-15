$(function() {

	function submitClick() {

		var adjective1 = $("#aText").val();
		var place1 = $("#bText").val();
		var pluralNoun = $("#cText").val();
		var adjective2 = $("#dText").val();
		var place2 = $("#eText").val();

		$("#result").fadeIn();
		$(".a").html(adjective1);
		$(".b").html(place1);
		$(".c").html(pluralNoun);
		$(".d").html(adjective2);
		$(".e").html(place2);

	} 

	$("#result").hide();
	$("#submit").click(submitClick);

})