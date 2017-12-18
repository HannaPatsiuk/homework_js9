$(document).ready(function(){
 	$('button').on('click', fff);
});

$(document).ready(function(){
	$('input[name=height]').on('change', function (){
		console.log($(this).val());
	})	;
});




function fff(event){
	//куда послать
	// что взять
	// что делать

	$.post(
			'a3.php',
			{
				'sex': $('input[name=sex]:checked').val(),
				'height': $('input[name=height]').val()
			},
			
			function(data){
				console.log(data); //функция обработки запроса
			}
		);
}

