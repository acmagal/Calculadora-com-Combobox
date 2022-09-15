function calculaOperacao(){

	var numero1 = document.getElementById('numero1').value;
	var numero2 = document.getElementById('numero2').value;
  var operacao = document.getElementById('operacao').value
	var resultado;

          
    

        if((operacao) =='soma'){
        resultado=parseInt(numero1)+parseInt(numero2);
      } 
      
      else if((operacao) =='subtrai'){
        resultado=parseInt(numero1)-parseInt(numero2);
      }
       if((operacao) =='multiplica'){
        resultado=parseInt(numero1)*parseInt(numero2);
      } 
      
      else if((operacao) =='divide'){
        resultado=parseInt(numero1)/parseInt(numero2);
      }

        // ('#resposta').html(resultado);
      alert(resultado);

} 