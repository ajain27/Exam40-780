$(function (){

	$friends = $("#friends");
	$name = $("#name");
	$age = $("#age");


	$("#editData").on("click", function (){
		$li = $(this).closest('li');
		console.log($li);
		$li.find("input.name").val( $li.find("span.name") ).html();
		$li.addClass("edit");
	})
})

