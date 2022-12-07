var n=3,m=3;
function Calcular(){
    var matg=new Array();
    var cont=0;
    var gauss=document.getElementsByName("Gauss Jordan");
    for(var i=0;i<gauss.length;i++){
        gauss[i].removeAttribute("hidden");
    }
    for(var i=0;i<n;i++){
        matg[i]=new Array();
        for(var j=0;j<m;j++){
            matg[i][j]=document.getElementsByName("mat")[cont].value;
            cont++;
        }
    }
    cont=0;
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){

        }
    }
}


function agñadeFila(){
    m++;
    var arreglo=new Array();
    arreglo=[7,3,4];
    contador=0;
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var elementoEntrada = document.createElement('tr');
    var elementoEntradar = document.createElement('tr');
    matriz.appendChild(elementoEntrada);
    matrizr.appendChild(elementoEntradar);
    for(var i=0;i<n;i++){
        //agregar el elemento a cada celda del input
        var elementoTabla=document.createElement('td');
        var element= document.createElement('input');
        element.setAttribute('name','mat');
        element.setAttribute('placeholder','0');
        elementoTabla.appendChild(element);
        elementoEntrada.appendChild(elementoTabla);
        //agregar el elemento a cada label del resultado
        var elementoTablar=document.createElement('td');
        var elementr= document.createElement('label');
        elementr.innerHTML = arreglo[contador];
        elementr.setAttribute('name','res');
        elementoTablar.appendChild(elementr);
        elementoEntradar.appendChild(elementoTablar);
        contador++;
    }
}
function reduceFila(){
    m--;
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    if(matriz.lastChild.nodeType==1){
        matriz.removeChild(matriz.lastChild);
        matrizr.removeChild(matrizr.lastChild);
    }
    else{
        matriz.removeChild(matriz.lastChild);
        matriz.removeChild(matriz.lastChild);
        matrizr.removeChild(matrizr.lastChild);
        matrizr.removeChild(matrizr.lastChild);
    }
}
function añadeColumna(){
    n++;
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    for (var filas of matriz.childNodes) {
        if(filas.nodeType==1){
            //agregar el elemento a cada celda del input
            var elementoTabla=document.createElement('td');
            var element= document.createElement('input');
            element.setAttribute('name','mat');
            element.setAttribute('placeholder','0');
            elementoTabla.appendChild(element);
            filas.appendChild(elementoTabla);
        }
    }
    for(var filasr of matrizr.childNodes){
        //agregar el elemento a cada label del resultado
        if(filasr.nodeType==1){
            var elementoTablar=document.createElement('td');
            var elementr= document.createElement('label');
            elementr.innerHTML = '0';
            elementr.setAttribute('name','res');
            elementoTablar.appendChild(elementr);
            filasr.appendChild(elementoTablar);
        }
    }
}
function reduceColumna(){
    n--;
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    for (var filas of matriz.childNodes) {
        if(filas.nodeType==1){
            filas.removeChild(filas.lastChild);         
        }
    }
    for (var filasr of matrizr.childNodes) {
        if(filasr.nodeType==1){
            filasr.removeChild(filasr.lastChild);         
        }
    }
}
