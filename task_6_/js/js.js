$(document).ready(function(){
	$.get(
		"goods.php", 
		{
			"art":"1",
		},
		function(data){
		var obj = JSON.parse(data);
		console.log(obj);
		$('#name').html(obj.name);
		$('#weight').html(obj.weight);
		$('#cost').html(obj.cost);
		$('img').attr('src', obj.img);

	});
});
