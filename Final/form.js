$(function() {

  function requestFile(url){
    $ajax({
      url: url,
      cache: false,
      dataType:"json",
      success: function(data){
        $("#return").html(
          "Thank you for your subscription " + data["name"] + "!"
          );
        });
      },
      error: function() {
        window.alert("Please fill in the requested fields!")
      }

    })
  }

  $("#ajaxrequest").click(function() {
    requestFile("data.json");
  });

});