$(function() {

	function requestFile(url){
		$.ajax({
			url: url,
			cache: false,
			dataType: "json",
			success: function(data){
				$("#fname").html(data.firstname);
				$("#lname").html(data.lastname);
			}
		})
	}

	$("#ajaxrequest1").click(function() {
		requestFile("data.json");
	})

});