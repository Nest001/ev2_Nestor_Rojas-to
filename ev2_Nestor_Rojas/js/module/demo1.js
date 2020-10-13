export default {
    data: `
 
    <br>
Nombre <br>
    <input id="nombre" type="text"/>
   <br>
   Edad<br>
    <input id="edad" type="number" />
    <br><br>
    Sexo<br>

    <input id="rd1" type="radio" name="rd" value="Masculino"/>M
    <input id="rd2" type="radio" name="rd" value="Femenino"/>F
<br>
<br>
Telefono <br>
<input id="celu" type="text"/>
<br><br>
Ciudad <br>
    <select name="ciudad" id="ciudad">
            <option value="0">Seleccione Ciudad</option>
            <option value="Talca">Talca</option>
            <option value="Linares">Linares </option>
            <option value="Curico">Curico</option>
    
        </select>
        <br>  
<br>
    <button onclick="aceptar()" "id="bt1">Aceptar</button>
    <button onclick="limpiar()" id="bt2">Limpiar</button>


    <p id="salida" ></p>`,

    aceptar: () => {


        var nombre = document.getElementById("nombre").value;
        var edad = document.getElementById("edad").value;
        var celu = document.getElementById("celu").value;
        var sexos = document.getElementsByName("rd");
        var ciudad = document.getElementById("ciudad").value;
        var salida = document.getElementById("salida");

        var errorN = false;
        var respN="";
        if (nombre == "") {
            errorN = true;
            respN = "ingrese nombre";

        } else {
            errorN = false;
        }
        var errorC = false;
        var respC="";
        if (celu == "") {
            errorC = true;
              respC= "ingrese un numero";
        } else {

            if (celu.length >= 12) {
                errorC = true;
               respC = "ingrese un numero de 12 digitos";

            } else {
                errorC = false;
            }

        }


        var errorE = false;
     var respE ="";
        if (edad == "") {
            errorE = true;
            respE = "ingrese edad";
        } else {

            if (Number(edad) < 18 || Number(edad) > 50) {
                respE= "ingrese edad entre 18 y 50";
                errorE = true;

            } else {
                errorE = false;

            }

        }

        var errorS = 0;
        var respS="";
        sexos.forEach((item) => {
            if (item.checked) {

            } else {
                errorS = errorS + 1;
            }
        });
        if (errorS == 2) {
            respS= "seleccione un genero";
        }

        var errorCi = false;
        var respCi="";
        if (ciudad == "0") {
            errorCi = true;
            respCi= "seleccione ciudad";
        } else {
            errorCi = false;
        }


          
        if (errorN == false && errorE == false && errorC == false && errorS == 1 && errorCi == false) {
            salida.innerHTML = " ";
            salida.innerHTML = nombre + "<br>";
            salida.innerHTML += edad +"<br>";
            sexos.forEach((item) => {
                if (item.checked) {
                    salida.innerHTML += item.value +"<br>";
                }
            });
   
            salida.innerHTML += celu + "<br>";
            salida.innerHTML += ciudad +"<br>";
        } else {
            
            salida.innerHTML = " ";
            salida.innerHTML=respN +"<br>";
            salida.innerHTML+=respE+"<br>";
            salida.innerHTML+=respS+"<br>";
            salida.innerHTML+=respC+"<br>";
            salida.innerHTML+=respCi+"<br>";

            salida.style.background="red";
        }
       



    },
    limpiar:()=>{
           document.getElementById("nombre").value="";
            document.getElementById("celu").value="";
             document.getElementById("ciudad").value="0";
             salida.innerHTML = " ";

    }
  
}