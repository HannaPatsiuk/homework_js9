$(document).ready(function(){
 	$('button').on('click', fff);
});

// $(document).ready(function(){
// 	$('input[name=height]').on('change', function (){
// 		console.log($(this).val());
// 	})	;
// });




function fff(event){
	//куда послать
	// что взять
	// что делать

	$.post(
			'mail.php',
			{
				'fio': $('input[name=fio]').val(),
				'phone': $('input[name=phone]').val(),
				'email': $('input[name=email]').val()
			},
			
			function(data){
				console.log(data); //функция обработки запроса
			}
		);
}

