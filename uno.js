/*
Realizar el algoritmo que tome los datos de un paralelogramo del documento.
Mostrar sus lados concatenados. 

Ej. LadoA: 5, LadoB: 2. Resultado: "Lados concatenados: 52."

Adicionalmente, 
de ser rectángulo, mostrar la superficie/área, 
de ser romboide, mostrar el perímetro,
de ser cuadrado, mostrar la multiplicación de sus lados,
y de ser rombo, mostrar la suma de sus lados. 

Caso de Prueba:
1) LadoA: 4, LadoB: 6, Ángulos Rectos: Sí, 
Resultado: "Lados concatenados: 46. La superficie es 24."
2) LadoA: 4, LadoB: 6, Ángulos Rectos: No, 
Resultado: "Lados concatenados: 46. El perímetro es 20."
3) LadoA: 5, LadoB: 5, Ángulos Rectos: Sí, 
Resultado: "Lados concatenados: 55. La multiplicación de los lados es 25."
4) LadoA: 5, LadoB: 5, Ángulos Rectos: No, 
Resultado: "Lados concatenados: 55. La suma de sus lados es 10."
*/
function mostrar()
{
    var ladoA= document.getElementById("ladoA").value;
    var ladoB= document.getElementById("ladoB").value;
    var angulosRectos= document.getElementById("angulosRectos").value;
    var area;
    var perimetro;
    var cuadrado;
    var rombo;
    var concatenado;

    concatenado = ladoA +ladoB;
    ladoA= parseInt(ladoA);
    ladoB= parseInt(ladoB);

    if (angulosRectos=='SI'&& ladoA==ladoB)
    {
        cuadrado = (ladoA*ladoB);
        alert("Lados concatenados: "+concatenado+ " Valor de cuadrado: "+cuadrado);
    }
    else if (angulosRectos=='SI'&& ladoA!=ladoB)
    {
        area= ladoA * ladoB; 
        alert("Lados concatenados: "+concatenado+ " Área: "+area);
        
    } 
    if (angulosRectos=='NO' && ladoA==ladoB) 
    {
        rombo = ladoA+ladoB;
        alert("Lados concatenados: "+concatenado+" Rombo " +rombo);

    }
    else if (angulosRectos=='NO' && ladoA!=ladoB)
    {
        perimetro= 2*(ladoA+ladoB);
        alert("Lados concatenados: "+concatenado+ " Perimetro: "+perimetro);
    } 


}
