// JavaScript Document
$(document).ready(function(e) {
	
//document.addEventListener("deviceready",function(){

$('.imagenpastel').on('tap', function(){
	$.ajax({
		type: "POST",
		url: "http://192.168.1.82/proyecto/buscarpasteles.php",
		data: "pastel=" + $(this).attr('id'),
		error: function()
		{
		 alart ("error en la conexio");	
		},
		success: function(respuesta){
		 alert (respuesta);	
		}
	});
});

//}); 
});

