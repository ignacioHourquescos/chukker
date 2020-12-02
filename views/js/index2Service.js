



function insertarDatosEnNuevoDiv(elemento,data,i){
	var idColor = 1;
	//trae data del backend desde un google sheets y lo va insertando en el titulo, el detalle, el precio etc.
	//data.feed.entry[i].gsx$promo.$t y similares es la manera de acceder al dato que nos da google sheets. No asustarse!!
	$(elemento).find('.titulo').text(data.feed.entry[i].gsx$promo.$t);
	$(elemento).find('.detalle').text(data.feed.entry[i].gsx$descripcion.$t);
	$(elemento).find('.preciolista').text(data.feed.entry[i].gsx$preciolista.$t);
	$(elemento).find('.precioOferta').text(data.feed.entry[i].gsx$preciooferta.$t);
	$(elemento).find('.card').addClass('color'+idColor); 
	$(".competencias").append(elemento);
	$(elemento).find('.imagenOferta').attr("src",data.feed.entry[i].gsx$urlimagen.$t);
		  $(elemento).show();
}


cargarOfertas();



const caballos=[
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}, 
	{name:"Padrillo", detail:"Ver detalles",ubicacion:"Buenos Aires",oferta:"U$S 10000"}
]

var elemento = document.getElementById("promocion");
