const constantes ={
  nosotros: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  tituloServicios1:
  "MAYORISTA DE FRUTAS SECAS",
  descServicios1: 
  "Amplio súrtido de productos nacionales e importados. Entrega en Capital Federal y Gran Buenos Aires. Entregas al interior via encomienda. Acceda a nuestra",
  
  tituloServicios2:
  "ASESORAMIENTO",
  descServicios2:
  "Ofrecemos asesoramiento y facilidades para quien desee abrir una dietética. Cálculos orientativos para dar los primeros pasos.",
  
  // tituloServicios3:
  // "Filtros de aire tubulares y de habitáculo",
  // descServicios3:
  // "Servicio de fabricación de filtros de aire especiales para maquinaria pesada",

  // tituloServicios4:
  // "Asesoramiento tecnico",
  // descServicios4:
  // "Servicio de asesoramiento para la apertura de lubricentros. Facilidades en la compra inicial de mercaderia. ",

}

 //WHATSAPP FUNCTION
			$(function () {
        $('#WAButton').floatingWhatsApp({
          phone: '5491158150069', //WhatsApp Business phone number
           //headerTitle: 'Escribinos!', //Popup Title
          //popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
          showPopup: true, //Enables popup display
          buttonImage: '<img src="views/images/whatsappModern.png" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          //backgroundColor: 'crimson', //Custom background button color
          position: "right" //Position: left | right
   
        });
      })

// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes.nosotros);
inserstartextos("tituloServicios1", constantes.tituloServicios1);
inserstartextos("descServicios1",   constantes.descServicios1);
inserstartextos("tituloServicios2", constantes.tituloServicios2);
inserstartextos("descServicios2",   constantes.descServicios2);
// inserstartextos("tituloServicios3", constantes.tituloServicios3);
// inserstartextos("descServicios3",   constantes.descServicios3);
// inserstartextos("tituloServicios4", constantes.tituloServicios4);
// inserstartextos("descServicios4",   constantes.descServicios4);



window.onload = wpp();


