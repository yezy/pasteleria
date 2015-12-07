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
		 alert ("error en la conexio");	
		},
		success: function(respuesta){
		  var pastel=JSON.parse(respuesta);
		  $('#nombre_pastel').html(pastel.nombre_pastel);
		    $('#clave_pastel').html(pastel.clave_pastel);
			  $('#precio_pastel').html(pastel.precio_pastel);
			    $('#numpersonas_pastel').html(pastel.numpersonas_pastel);
				$(':mobile-pagecontainer').pagecontainer('change','#pedido',{transition:'pop'
				});
		}
	});
});

//}); 
});

