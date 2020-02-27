/*
Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares.
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados.
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores:
1) Nombre: "Argentina"; Cantidad: 271 (mal), Cantidad: 0 (mal), Cantidad: 40 (bien); Temperatura: -11.
2) Nombre: "Costa Rica"; Cantidad: 4; Temperatura: -51 (mal), Temperatura: 51 (mal), Temperatura: 22 (bien).
3) Nombre: "Brasil"; Cantidad: 200; Temperatura: 20.
4) Nombre: "Chile"; Cantidad: 15; Temperatura: -21.
5) Nombre: "Canadá"; Cantidad: 150; Temperatura: -40.
*/
function mostrar()
{
    var pais;
    var cantHab; //1 y 270
    var tem; //-50 y 50
    var temMin;
    var temMax;
    var nombrePaisTemMax;
    var cantTemImp=0;
    var paisAux;
    var cantHabAux;
    var respuesta;
    var bandera=true;
    var cantPaisCero=0;
    var contPais=1;
    var promedio=0;

    do {
        pais= prompt("Ingrese un país: ");
        cantHab= parseInt(prompt("Ingrese la cantidad de habitantes: "));
        while(cantHab<1 || cantHab >270 )
        {
            cantHab=parseInt(prompt("ERROR: Cantidad de habitantes invalida - Reintentar \nIngrese la cantidad de habitantes entre 1 y 270"));
        }
        tem=parseInt(prompt("Ingrese la temperatura: "));
        while(tem<-50 || tem>50)
        {
            tem=parseInt(prompt("ERROR: Temperatura invalida - Reintentar \nIngrese la temperatura: "));
        }
        if (tem%2!=0)
        {
            cantTemImp++;
        }
        
        if (bandera)
        {
            paisAux=pais;
            cantHabAux= cantHab;
            temMin= tem;
            temMax= tem;
            bandera=false;
        }
        else if (cantHabAux<cantHab)
        {
            cantHabAux=cantHab;
            paisAux=pais;

        }

        if(tem<20)
        {
            cantPaisCero++;
        }
        
        if(temMax<tem)
        {
            nombrePaisTemMax=pais;
            temMax=tem;
        }

        promedio+=cantHab;
        contPais++;
        bandera=false;
        respuesta=confirm("Continuar o Cancelar");
    }while(respuesta);
    promedio/=contPais;
    document.write("La cantidad de temperaturas impares: "+cantTemImp+
    "<br>El nombre del pais con más habitantes"+paisAux+
    "<br>La cantidad de paises por debajo de los 20 grados: "+cantPaisCero+
    "<br>El promedio de habitantes entre los paises ingresados"+promedio+
    "<br>La temperatura máxima ingresada es: "+temMax+", y nombre del pais que registro esa temperatura es "+nombrePaisTemMax);
}
