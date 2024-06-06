  function sumar(){
    let suma=0;
    let contador=0;
    let numero1=Number(document.getElementById(`numero1`).value);
    let numero2=Number(document.getElementById(`numero2`).value);
    
    let resultado= numero1+numero2;
       document.getElementById('resultado').textContent = `${resultado}`;;
  }

  