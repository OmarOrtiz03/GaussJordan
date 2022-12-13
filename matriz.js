var n=2,m=2;
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
            matg[i][j]=parseFloat(matg[i][j]);
        }
    }
}


function agñadeFila(){
    m++;
    if(m>2){
        var comprobar = document.getElementById('reduccionf');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    var elementoEntrada = document.createElement('tr');
    var elementoEntradar = document.createElement('tr');
    matriz.appendChild(elementoEntrada);
    matrizr.appendChild(elementoEntradar);
    console.log(matriz.childNodes);
    for(var i=0;i<n;i++){
        //agregar el elemento a cada celda del input
        var elementoTabla=document.createElement('td');
        var element= document.createElement('input');
        element.setAttribute('name','mat');
        element.setAttribute('placeholder','0');
        element.setAttribute('onkeypress','return error(event);');
        elementoTabla.appendChild(element);
        elementoEntrada.appendChild(elementoTabla);
        //agregar el elemento a cada label del resultado
        var elementoTablar=document.createElement('td');
        var elementr= document.createElement('label');
        elementr.innerHTML =0;
        elementr.setAttribute('name','res');
        elementoTablar.appendChild(elementr);
        elementoEntradar.appendChild(elementoTablar);
    }
}
function reduceFila(){
    m--;
    if(m<=2){
        var comprobar = document.getElementById('reduccionf');
        comprobar.setAttribute("hidden","true");
    }
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
    if(n>2){
        var comprobar = document.getElementById('reduccionc');
        comprobar.removeAttribute("hidden")
    }
    var matriz=document.getElementById("matgj").firstElementChild;
    var matrizr=document.getElementById("resgj").firstElementChild;
    for (var filas of matriz.childNodes) {
        if(filas.nodeType==1){
            //agregar el elemento a cada celda del input
            var elementoTabla=document.createElement('td');
            var element= document.createElement('input');
            element.setAttribute('name','mat');
            element.setAttribute('placeholder','0');
            element.setAttribute('onkeypress','return error(event);');
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
    if(n<=2){
        var comprobar = document.getElementById('reduccionc');
        comprobar.setAttribute("hidden","true");
    }
    var matriz=document.getElementById("matgj").firstElementChild;;
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
function error(evt){
    if(window.event){
        keynum=evt.keyCode;
    }
    else{
        keynum=evt.which;
    }
    if(keynum>47 && keynum<58 || keynum==46 || keynum==13){
        return true;
    }
    else{
        alert("Ingresar solo numeros")
        return false;
    }
}
function limpiar(){
    var limpieza = document.getElementsByName("mat");
    if(m>2){
        for(var i=0;i<m-2;i++){
            reduceFila();
        }
        if(m>2) limpiar();
    }
    if(n>2){
        for(var i=0;i<n-2;i++){
            reduceColumna();
        }
        if(n>2) limpiar();
    }
    for (var i=0; i<limpieza.length; i++){
        limpieza[i].value='';
    }
}
function arrastre(evt){
    evt.preventDefault();
    console.log("arrastre");
}
function soltar(evt){
    limpiar();
    evt.preventDefault();
    var lista= new Array();
    var numc=0;
    var bandera = 1;
    var bandera2=1;
    console.log("soltar");
    console.log(evt.dataTransfer.items[0].type);
    if(evt.dataTransfer.items[0].type=="text/plain"){
        var contenido=evt.dataTransfer.items[0].getAsFile();
        var lectura= new FileReader();
        lectura.onload=function(){
            console.log(lectura.result);
            var filas = lectura.result.split(/\r?\n/);
            for(var i=0; i<filas.length; i++){
                if(filas[i]==""){
                    filas.splice(i,1);
                }
            }
            for(var i=0; i<filas.length; i++){
                var columnas = filas[i].split(" ");
                if(bandera==1){
                    numc=columnas.length;
                    bandera=0;
                }
                else{
                    if(columnas.length!=numc){
                        alert("Formato incorrecto");
                        break;
                    }
                }
                for(var j=0; j<columnas.length; j++){
                    lista.push(columnas[j]);
                }
            }
            for(var i=0; i<lista.length; i++){
                lista[i]=parseFloat(lista[i]);
                if(!lista[i]){
                    alert("Solo numeros");
                    bandera2=0;
                    break;
                }
            }
            if(bandera2==1){
                if(filas.length>2){
                    for(var i=0; i<filas.length - 2; i++){
                        agñadeFila();
                    }
                }
                if(numc>2){
                    for(var i=0; i<numc - 2; i++){
                        añadeColumna();
                    }
                }
                var reemplazo=document.getElementsByName("mat");
                for(var i=0; i<reemplazo.length; i++){
                    reemplazo[i].value=lista[i];
                }
            }
            console.log(filas);
            console.log(lista);
        }
        lectura.readAsText(contenido);
    }
    else {
        alert("Solo se aceptan archivos de texto");
    }
}
