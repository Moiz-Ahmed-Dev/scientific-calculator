var result=document.getElementById("result").value



    function getNumb(num){
        // document.getElementById("result").value+=num
        document.getElementById("result").value+=num
    
    
    }
    
    
    function clearNum(){
         
        document.getElementById("result").value=""
        
    }

   
   
    
    function getResult(){
    
    document.getElementById("result").value= eval(document.getElementById("result").value)
    
    }

    
    function deleteCharacter() {
        var result = document.getElementById('result').value;
        document.getElementById('result').value = result.slice(0, -1);
      }

      function square(){
        if (result.value.length != 0 || result.value != "") {
            result.value = result.value * result.value
        }
    }