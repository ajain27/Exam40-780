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
		$(this).closest('li').removeClass("edit");
	})

	$friends.delegate('.editData', 'click', function (){
		$li = $(this).closest('li');
		console.log($li);
		var some = $li.find("form div span.name").html();
		console.log(some);
		$li.find("input.name").val( $li.find("form div span.name") ).html();
		$li.addClass("edit");
	})
})

