$(document).ready(function(){
 	$('button').on('click', fff);
});

function fff(event){

	$.post(
			'a2.php',
			{
				'year': 1991,
			},
			function(data){
				console.log(data); 
			}
		);
}

