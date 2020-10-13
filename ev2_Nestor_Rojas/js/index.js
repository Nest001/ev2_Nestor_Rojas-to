import demo1 from "./module/demo1.js";


var caja=document.getElementById("caja");
window.aceptar=demo1.aceptar;
window.limpiar=demo1.limpiar.bind(demo1);

document.getElementById("eje1").addEventListener("click",()=>{
caja.innerHTML=demo1.data;
});
document.getElementById("eje1").addEventListener("click",()=>{
    caja.innerHTML=demo1.data;
    demo1.aceptar;
    });