
function agregarfila(){
 var table = document.getElementById("tabla");
 var row = table.insertRow(1);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);
 var cell3 = row.insertCell(2);
 var cell4 = row.insertCell(3);
 cell1.innerHTML = "478";
 cell2.innerHTML = "Fernando";
 cell3.innerHTML = "MOntevideo, Uru";
 cell4.innerHTML = "$14500";

}


 function mostrarVideo(){
    document.getElementById("video").style.display="block";
    document.getElementById("pedigree").style.display="none";
    document.getElementById("tabla").style.display="none";

 }

 function mostrarPedigree(){
    document.getElementById("video").style.display="none";
    document.getElementById("pedigree").style.display="block";
    document.getElementById("tabla").style.display="none";
 }


 function mostrarOfertas(){
   document.getElementById("video").style.display="none";
   document.getElementById("pedigree").style.display="none";
   document.getElementById("tabla").style.display="block";
}
