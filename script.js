// JavaScript goes here.

document.getElementById("form1").onsubmit=function() {
 
  
      height = parseInt(document.querySelector('input[name = "q1"]:checked').value);
  
      desc = parseInt(document.querySelector('input[name = "q2"]:checked').value);
  
      concept = parseInt(document.querySelector('input[name = "q3"]:checked').value);

      glob = parseInt(document.querySelector('input[name = "q4"]:checked').value);
  
      total= height + desc + concept + glob;
      
  
  
       //document.getElementById("answer").innerHTML = total;
 

       if(total <= 20) {
  document.querySelector(".imgcumu").style.display = "block";
  document.getElementById("answer2").innerHTML = "Congradulations! You are a cumulus cloud.";
  
  }
  
     else if(total <= 40) {
  document.getElementById("answer2").innerHTML = "Congradulations! You are a stratus cloud.";
  }
  
    else if(total <= 60) {
  document.getElementById("answer2").innerHTML = "Congradulations! You are a cirrus cloud.";
  }

    else if(total <= 80){
 document.getElementById("answer2").innerHTML = "Congradulations! You are a nimbus cloud.";
  }

    else{
 document.getElementById("answer2").innerHTML = "Congradulations! You are an alto cloud.";
  }


  
       return false; // required to not refresh the page; just leave this here
       }// end the submit function