$(function (){

	$friendList = $("#myfriends");
	console.log($friendList);

	$name = $("#name");
	$age = $("#age");


	var friendsTemplate = $('#friends-template').html();
	$.ajax({
		type:'GET',
		url:'/friends.json',
		success:function (friends){
			$.each(friends, function  (i, myfriend){
				$friendList.append(Mustache.render(friendsTemplate, myfriend));
			})				
		}, 
		error:function (error){
			console.log("Cannot load friends");
			}				

		});


	$friendList.delegate(".cancelData", "click", function (){
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
		console.log("This is save");
		
	})


})

