
function agregarfila(){
 var table = document.getElementById("tabla_remate");
 var row = table.insertRow(1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 var cell4 = row.insertCell(3);
 cell1.innerHTML = "478";
 cell2.innerHTML = "Facundo Cabral";
 cell3.innerHTML = "MOntevideo, Uru";
 cell4.innerHTML = "$"+document.getElementById("input_oferta").value;
 swal("Su Oferta por "+cell4.innerHTML + " se realizo con exito!");
 window.scrollTo(0,0);
 document.getElementById("ofertar").style.zIndex="0";

 if (window.matchMedia("(max-width: 776px)").matches) {
   document.getElementById("pedigree").style.display="block";
} else {
	document.getElementById("video").style.display="block";
}
document.getElementById("preoferta").innerHTML=document.getElementById("input_oferta").value;
 document.getElementById("tabla").style.display="none";

 indicador=true;


}


 function mostrarVideo(){
    document.getElementById("video").style.display="block";
    document.getElementById("pedigree").style.display="none";
    document.getElementById("tabla").style.display="none";
    document.getElementById("ofertar").style.display="block";
 }

 function mostrarPedigree(){
    document.getElementById("video").style.display="none";
    document.getElementById("tabla").style.display="none";
    document.getElementById("pedigree").style.display="block";
    document.getElementById("ofertar").style.display="block";
    window.scrollTo(0,document.body.scrollHeight);

    element.scrollIntoView({block: "end"});

 }

 var indicador=true;

 function mostrarOfertas(){
   if (indicador){
      document.getElementById("video").style.display="none";
      document.getElementById("pedigree").style.display="none";
      document.getElementById("tabla").style.display="flex"
      document.getElementById("ofertar").style.zIndex="block";
      document.getElementById("ofertar").style.backgroundColor="red";
      indicador=false;
   }
   else {
     
      agregarfila();  
      document.getElementById("ofertar").style.backgroundColor="grey";
    
   }  
   window.scrollTo(0, 1000);
}


function mostrarLogin(){
   document.getElementById("video").style.display="none";
   document.getElementById("pedigree").style.display="none";
   document.getElementById("tabla").style.display="none";
   document.getElementById("ofertar").style.display="block";

}



function on() {
   document.getElementById("overlay").style.display = "block";
 }
 
 function off() {
   document.getElementById("overlay").style.display = "none";
 }