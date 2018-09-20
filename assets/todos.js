// check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on traash icon to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// adding new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo from input tag
		var todoText = $(this).val();
		$(this).val("");
		//create neew li, span and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

//toggle input box on clicking
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
