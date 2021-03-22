//window.onload;


 function showImg(){
  var type  = document.getElementsByName("type"); 
   if(type[1].checked)
   {
     var image1 = type[1].value;
    alert(image1); 

   }
   else if (type[2].checked){
     var image2 = type[2].value;
     alert(image2)
   }
   else if(type[3].checked){
     var image3 = type[3].value;
     alert(image3);
    
   }
  }