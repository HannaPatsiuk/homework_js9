$(document).ready(function(){
 	$('button').on('click', fff);
});

function fff(event){

	$.post(
			'a3.php',
			{
				'sex': $('input[name=sex]:checked').val(),
				'height': $('input[name=height]').val()
			},
			
			function(data){
				console.log(data);
			}
		);
}

