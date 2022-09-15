var option = document.querySelector("#soma");
var option = document.querySelector("#subtrai");
var option = document.querySelector("#multiplica");
var option = document.querySelector("#divide");
var button = document.querySelector("#resultado")



var v1 = ('#numero1');
var v2 = ('#numero2');
var result;
          
    

        if(('#operacao') =="soma"){
        result=v1+v2;
      } 
      
      else if(('#operacao') =='subtrai'){
        result=v1-v2;
      }
       if(('#operacao') =="multiplica"){
        result=v1*v2;
      } 
      
      else if(('#operacao') =='divide'){
        result=v1/v2;
      }

      ('#resposta').html(result);

  