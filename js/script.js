//wait until page is ready
$(document).ready(function() {
	
	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function(){
		$(this).prev().slideToggle('fast');
	});
	
	 
	$("img").click(function(){
		$(this).next().children("p").slideDown();
	});
	

	$("#all_btn").click(function(){
		$(".card").show();
	});
	
	$("#select_btn").click(function(){
		$(".card:not(highlight)").hide();
	});
	
	// Check box for discussed topics
	function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("discussed-text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  
  
  
}
});

//When user scrolls page, execute myFunction
  //window.onscroll = function() {myFunction()};
  
  //Get the header
  //var header = document.getElementById("myHeader");
  
  //Get the offset position of the navbar
  //var sticky = header.offsetTop;
  
  //Add sticky class to header when you reach its scroll position. Remove "sticky"
  //when you leave scroll position
  //function myFunction() {
  	//if (window.pageYOffset > sticky) {
  	//	header.classList.add("sticky");
  	//} else {
  	//	header.classList.remove("sticky");
  	//}