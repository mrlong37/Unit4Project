// JavaScript goes here.

document.getElementById("form1").onsubmit=function() {
let resultImage = document.getElementById("result-image");  
  
      height = parseInt(document.querySelector('input[name = "q1"]:checked').value);
  
      desc = parseInt(document.querySelector('input[name = "q2"]:checked').value);
  
      concept = parseInt(document.querySelector('input[name = "q3"]:checked').value);

      glob = parseInt(document.querySelector('input[name = "q4"]:checked').value);
  
      total= height + desc + concept + glob;
      
  
  
       //document.getElementById("answer").innerHTML = total;
  let imagePath = "";

       if(total <= 20) {
  document.getElementById("answer2").innerHTML = "Congradulations! You are a cumulus cloud.";
  imagePath = "https://th.bing.com/th/id/R.fb6863fa895d6252ad632bc12f306ecc?rik=16l5Iry9z1%2b%2fOA&riu=http%3a%2f%2fstockarch.com%2ffiles%2f17%2f08%2ffluffy_clouds.jpg&ehk=46eltkn%2fFThGgPNwfymKvG4vdowZCTtx1QAMmSU1oSA%3d&risl=&pid=ImgRaw&r=0";
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

  resultImage.src = imagePath;

  
       return false; // required to not refresh the page; just leave this here
       }// end the submit function