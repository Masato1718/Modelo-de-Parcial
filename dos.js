/*
Debemos realizar la carga de cuatro personas, 
de cada una debo obtener los siguientes datos: 
el nombre, 
el género (validar "masculino", "femenino" u "otro"), 
la edad (validar que sea un número y esté entre 18 y 100), 
y el peso (validar que sea un número y mayor a 1).

a) El promedio de las edades mayores o iguales a 25.
b) El nombre de la persona menos pesada y su peso.
c) La cantidad personas de género distinto a masculino ó peso mayor a 80.

Caso de prueba:
1) Nombre: "Ana"; Género: "mujer" (mal), Género: "f"(mal), Género: "femenino" (bien); Edad: 40; Peso: 60.
2) Nombre: "Gaby"; Género: "otro"; Edad: "a" (mal), Edad: 17 (mal), Edad: 101 (mal), Edad: 18 (bien); Peso: 40.
3) Nombre: "Luis"; Género: "masculino"; Edad: 60; Peso: "k" (mal), Peso: 0 (mal), Peso: 79 (bien).
4) Nombre: "Alan"; Género: "masculino"; Edad: 25; Peso: 90.

Resultado:
- Promedio de las edades mayores o iguales a 25: 41,67 (apróx).
- Nombre de la persona menos pesada y su peso: "Gaby" (40 kg).
- Cantidad de personas de género distinto a masculino ó peso mayor a 80: 3 (tres).
*/
function mostrar()
{
    var nombre;
    var genero;
    var edad=2;
    var peso=0;
    var promedio; 
    var acuEdades = 0;//edades mayores o iguales a 25
    var cont25;
    var pesoMin;
    var nombreAux;
    var contGoP=0;

    for (var personas=1;personas<5;personas++)
    {
        nombre = prompt("Ingrese su nombre: ");
        genero=prompt("Ingrese su género: masculino / femenino / otro").toLowerCase();
        
        while(genero!="masculino" && genero!="femenino" && genero!="otro")
        {
            genero=prompt("ERROR: El genero es invalido. REINTENTAR. \nIngrese su género: masculino / femenino / otro").toLowerCase();
        }
        edad= parseInt(prompt("Ingrese su edad:  Entre 18 y 100"));
        while(edad<18 || edad>100 || isNaN(edad))
        {
            edad= parseInt(prompt("ERROR: La edad es invalido. REINTENTAR. \nIngrese su edad:  Entre 18 y 100"));
        }
        peso= parseInt(prompt("Ingrese su peso: "));
        while(isNaN(peso) || peso<1)
        {
            peso= parseInt(prompt("ERROR: El peso es invalido. REINTENTAR.\nIngrese su peso: "));
        }

        if(edad>=25)
        {   
            acuEdades += edad;
            cont25++;
        }    
        if (personas==1)
        {
            pesoMin=peso;
            nombreAux= nombre;
        }
        else if(peso<pesoMin)
        {
            pesoMin=peso;
            nombreAux=nombre;
        }

        if (genero!="masculino" || peso>80)
        {
            contGoP++;
        }
        genero='f';
        edad=2;
        peso=0;
    }
    promedio=acuEdades/cant25;
    alert("El promedio de las edades mayores o iguales a 25: "+promedio+"\nEl nombre de la persona menos pesada y su peso: "+nombreAux+ " y su peso es: "+pesoMin+"\nLa cantidad personas de género distinto a masculino ó peso mayor a 80: "+contGoP);
}
