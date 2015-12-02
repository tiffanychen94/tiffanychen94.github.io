$(document).ready(function(){
	
	$("#create").click(function() {
	 $("#modal-box").show();
	 $("#modal-overlay").show();
	});

	$("#submit").click(function() {
	 $("#modal-box").show();
	 $("#modal-overlay").show();
	});

	$("#cancel").click(function() {
	 $("#modal-box").hide();
	 $("#modal-overlay").hide();
	});

	$("#modal-overlay").click(function() {
	 $("#modal-box").hide();
	 $("#modal-overlay").hide();
	});


  $("#top-row").hover(function() {
        $(this).children().css("background", "pink");
  }, function() {
        $(this).children().css({"background":"#85B1A8"});
  });

  $("#friend-row").hover(function() {
        $(this).children().css("background", "pink");
  }, function() {
        $(this).children().css({"background":"#85B1A8"});
  });

  $("#trending-row").hover(function() {
        $(this).children().css("background", "pink");
  }, function() {
        $(this).children().css("background", "#85B1A8");
  });




	

});