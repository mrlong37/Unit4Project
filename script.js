// JavaScript goes here.
document.getElementById("form1").onsubmit=function() {
  
  
      height = parseInt(document.querySelector('input[name = "q1"]:checked').value);
  
      desc = parseInt(document.querySelector('input[name = "q2"]:checked').value);
  
      concept = parseInt(document.querySelector('input[name = "q3"]:checked').value);

      glob = parseInt(document.querySelector('input[name = "q4"]:checked').value);
  
      total= height + desc + concept + glob;
  
  
       document.getElementById("answer").innerHTML = total;
  
       if(total < 4) {
  document.getElementById("answer2").innerHTML = "You got Quiet Company.";
  }
  
     if(total >=4 && total < 7) {
  document.getElementById("answer2").innerHTML = "You got Spoon.";
  }
  
    if(total >=7) {
  document.getElementById("answer2").innerHTML = "You got Willie Nelson.";
  }
  
       return false; // required to not refresh the page; just leave this here
       }// end the submit function