$(function (){

	$friends = $("#friends div li");
	console.log($friends);
	$name = $("#name");
	$age = $("#age");


	// $("#editData").on("click", function (){
	// 	$li = $(this).closest('li');
	// 	console.log($li);
	// 	$li.find("input.name").val( $li.find("span.name") ).html();
	// 	$li.addClass("edit");
	// })

	$(".cancelData").on("click", function (){
		console.log("Cancelling...");
		$(this).closest('li').removeClass("edit");
	})

	$friends.delegate('.editData', 'click', function (){
		$li = $(this).closest('li');
		console.log($li);
		$li.find("input.name").val( $li.find("span.name") ).html();
		$li.addClass("edit");
	})
})

