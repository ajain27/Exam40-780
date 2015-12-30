$(function (){

	$friends = $("#friends div li");
	$name = $("#name");
	$age = $("#age");

	$(".cancelData").on("click", function (){
		$(this).closest('li').removeClass("edit");
	})

	$friends.delegate('.editData', 'click', function (){
		$li = $(this).closest('li');

		$name = $li.find("form div span.name").html();
		$li.find("input.name").val( $name ).html();

		$age = $li.find("form div span.age").html();
		$li.find("input.age").val( $age ).html();

		$li.addClass("edit");
	})

	$('.saveData').on('click', function (argument){
			$.ajax({
				type:'GET',
				url:'/friends.json',
				success:function (friends){
					console.log(friends);					
				}, 
				error:function (error){
					console.log("Cannot load friends");
				}				

			});
		
	})


})

