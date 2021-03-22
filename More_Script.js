"use strict";

/*
   Name: Hikmat Yusuf
   Filename: More_Script.js
*/


// startingday 
var startingday = new Date();

document.getElementById("calender").innerHTML = createCalendar(startingday);
//create a function 
function createCalendar(calDate) {
   var calendarHTML = "<table id = 'calendar_table'>";
  
   // insert the table caption
   calendarHTML += calCaption(calDate);

  // display the heading
   calendarHTML += calWeekdayRow();

   // display the days of the month
   calendarHTML += calDays(calDate);
   calendarHTML += "</tabl>";
   return calendarHTML;

}
 //2.2 funtion to write the table caption
 function calCaption(calDate){
    //month array contains the list of month names
    var monthName = ["January","February", "March", "April","May","June",
     "July","Augast","Sebtember", "October","Novmber","December"];

     // current month
     var thisMonth = calDate.getMonth(); //0,1,2,3,11
     //  the current year
     var thisYear = calDate.getFullYear(); // 2021 

     //write the caption
     return "<caption>" + monthName[thisMonth] + "  " + thisYear + "</caption>"; 
 }
 //3. create the table row countaining the days of the week
 function calWeekdayRow(){
    var dayName = ["Sun","MON", "TUE","WED","THR", "FRI","SAT"];
    //opening the <tr> tag
    var rowHTML = "<tr>";
    // a loop to get the day names
    for (var i =0; i < dayName.length; i ++){
       rowHTML += "<th class = 'calendar_weekdays'>" + dayName[i] +"</th>";
    }
      rowHTML += "</tr>";
       return rowHTML;
 }
 //4.create rows for each week in the month
 function daysInMonth(calDate){
    // 4-1. an array of days in each month
    var dayCount = [31,28,31,30,31, 30, 31,31,30,31,30,31];

    //4-2. extract the four digit year and month value
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();
    //4-3. calculate the leap year
    if (thisYear % 4 === 0){
       //not divisible by 100 or divisible by 400
       if (thisYear % 100 !== 0 || thisYear % 400 === 0){
          dayCount[1] = 29;
       }
    }
    return dayCount[thisMonth];
 }

// 5.function to write table rows for each day of the month
function calDays(calDate){
   // derermine the starting day of the month
   var day = new Date(calDate.getFullYear(),calDate.getMonth(),1);
   var weekDay = day.getDay();// 0-sunday, 1-Monday,...
   //wrirte blank cells
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++){
      htmlCode += "<td></td>"
   }
   var totalDays = daysInMonth(calDate); //# of days in the month
   // loop throght the total # of days 
   for (var i = 1; i <= totalDays; i ++){
      day.setDate(i); 


      weekDay = day.getDay();
   // sunday
   if(weekDay ===0){
      htmlCode += "<tr>";
   }
   // to hightlight today'S call
   if(i === calDate.getDate()){
      // id =calendar_today
      htmlCode += "<td class = 'calender_dates' id = 'calendar_today'>" + i + dayEvent[i] + "</td>";
   }
   else{

      htmlCode += "<td class = 'calender_dates'>" + i + dayEvent[i] + "</td>";
   }
      //if it's saturday 
      if (weekDay ===6){
         htmlCode += "</tr>";
      }
   }
   return htmlCode;
}

