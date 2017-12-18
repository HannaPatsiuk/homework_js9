$(document).ready(function(){
 	$('button').on('click', fff);
});

function fff(event){
	//куда послать
	// что взять
	// что делать
	var c = 33;
	$.post(
			'a1.php',
			{
				'num1': 2,
				'num2': c
			},
			function(data){
				console.log(data); //функция обработки запроса
			}
		);
}

