"use strict";

/*
   Name:Hikmat Yusuf
   Filename: index_script.js
*/
window.onload 
 //Question #7
var date = new Date();
 var dateStr = date.toLocaleDateString();

 var dateHTML = "<h2>" +dateStr +"</h2>";
 var date = date.getDay();
 document.getElementById("currentdate").insertAdjacentHTML("afterbegin", dateHTML);




//5. create new "li" element
  var liElm = document.createElement("li");
// create "a" tag 
var aTag = document.createElement("a");
var menu = document.getElementById("menu_nav").getElementsByTagName("ul")[0];
//appendChild
menu.appendChild(liElm);
liElm.appendChild(aTag);
aTag.innerHTML = "Contact";  

 // removeChild
 var parent = document.getElementById("menu_nav").getElementsByTagName("ul")[3];

var child = parent.getElementsByTagName("li")[3];

child.parentNode.removeChild(child); 

 
//===================================//



// Question #6 
 window.addEventListener("load", updateStyles);

function updateStyles(){
   var  updateNum = randInt(6);
   var myStyle = document.createElement("link");
   myStyle.setAttribute("rel", "stylesheet");
   myStyle.setAttribute("id", "newStyle" );
   myStyle.setAttribute("href","ss_insert_"+ updateNum + "css");
   // append the link element to the document head
   document.head.appendChild(myStyle);

   
//Question #11
   var imgBox = document.createElement("div");
   imgBox.setAttribute("id", "sunStyle");
   document.getElementsByClassName("box")[0].appendChild(imgBox);

   for (var i =1; i <= 6; i++){
      var img = document.createElement("img");
      img.setAttribute("src", "Red_sunset_" + i + ".jpg");
      img.setAttribute("alt", "ss_insert_" + i + ".css");

      img.addEventListener("mouseover", e =>{
         document.getElementById("newStyle").href = e.target.alt;
      });
      image.appendChild(img);
   }
   var betterStyles = document.createElement("Style");
   document.head.appendChild(betterStyles);
   document.styleSheets[document.styleSheets.length-1].insertRule(

      "div#betterStyles { \
         position: absolute; \
         left: 0px; \
         bottom: 0px; \
         }", 0);
      
      document.styleSheets[document.styleSheets.length-1].insertRule(
      
      "dive#betterStyles img { \
         outline: 1px solid black; \
         cursor: pointer; \
         opacity: 0.75; \
         }", 1);

      document.styleSheets[document.styleSheets.length-1].insertRule(

         "div#betterStyles img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
             }", 2);
         
            
            
            
            function randInt(size) {
               return Math.floor(size * Math.random());
            }
         }

            //Question #10 
            //create form using Text Field with <input>
         
         
            email.addEventListener('textInput', emailVerify);
            password.addEventListener('textInput', passVerify);
         
           
            var password = document.forms['form']['password'];

            function validated(){
               var email = document.forms['form']['email']; 

               if (email.value.length < 9) {
                  alert("Email invalid");
                   email.focus();
                  return false;
               }
               if (password.value.length < 6) {

                  var password = document.forms['form']['password'];


                 alert("password incorrect")
                  password.focus();
                  return false;
               }
            
            }
            function emailVerify(){
               if (email.value.length >= 8) {
                  return true;
               }
            }
            function passVerify(){
               if (password.value.length >= 5) {
                  
                  return true;
               }
            }

            function biggerImg(img) {
      img.style.height = "400px";
      img.style.width = "400px";
  }
  
  function normalImg(img) {
    img.style.height = "500px";
    img.style.width = "500px";
  }
 
         

        