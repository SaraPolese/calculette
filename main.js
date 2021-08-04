//premiere calculatrice
function num1num2(){

    let num1 = document.getElementById("getToNumber").value;
    let num2 = document.getElementById("getToNumber2").value;
    let add= parseInt(num1) + parseInt(num2)
    let sus = parseInt(num1) - parseInt(num2)
    let multi= parseInt(num1) * parseInt(num2)
    let div= parseInt(num1) / parseInt(num2)
  console.log("test")
  document.getElementById("resultadd").innerHTML= add;
    document.getElementById("resultsus").innerHTML= sus;
    document.getElementById("resultmulti").innerHTML= multi;
    document.getElementById("resultdiv").innerHTML= div;
  }
// euxieme calculatrice
  function goadd (){
    let num1= document.getElementById("numero1").value;
    let num2= document.getElementById("numero2").value;
    let add= parseInt(num1) + parseInt(num2)
  
    document.getElementById("goresult").value = add;
  
  }
  