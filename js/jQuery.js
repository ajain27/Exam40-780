$(function (){

	$friends = $("#friends div li");
	console.log($friends);
	$name = $("#name");
	$age = $("#age");

	$(".cancelData").on("click", function (){
		$(this).closest('li').removeClass("edit");
	})

	$friends.delegate('.editData', 'click', function (){
		$li = $(this).closest('li');
		console.log($li);
		
		$name = $li.find("form div span.name").html();
		$li.find("input.name").val( $name ).html();

		$age = $li.find("form div span.age").html();
		$li.find("input.age").val( $age ).html();

		$li.addClass("edit");
	})
})

