$(function (){


	var friendsTemplate = $('#friends-template').html();
	console.log(friendsTemplate);
	
	$friendList = $("#friends div li");

	$name = $("#name");
	$age = $("#age");

	$(".cancelData").on("click", function (){
		$(this).closest('li').removeClass("edit");
	})

	$friendList.delegate('.editData', 'click', function (){
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
					$.each(friends, function  (i, friend){
						$friendList.append(Mustache.render(friendsTemplate, friend));
					})				
				}, 
				error:function (error){
					console.log("Cannot load friends");
				}				

			});
		
	})


})

