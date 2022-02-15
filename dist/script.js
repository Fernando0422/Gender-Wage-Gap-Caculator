// defining the variables to their set value (the differnce between a white man and a women poc)
var woman_percentage = new Array();
woman_percentage["latina"]= .54;
woman_percentage["native"]= .59;
woman_percentage["africa"]= .64;
woman_percentage["nhpi"]= .65;
woman_percentage["asian"]= .90;

//This function finds the filling price based on the
//drop down selection
function getPercentage()
{
    var ethnicityPercentage=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["wage-gap"];
    //Get a reference to the select id="filling"
     var selectedEthnicity = theForm.elements["womanethnicity"];

    //set ethnicityPercentage Price equal to value user chose
  
  ethnicityPercentage = woman_percentage[selectedEthnicity.value]
  
// lastly return the amount
  return ethnicityPercentage;
 
}

// 

function getInitialSalary() {
  //reference the id of the form
  var theForm = document.forms["wage-gap"];
  //reference the text box
  var initialSalaryAmount = theForm.elements["salary-initial"];
  var initialSalary = 0;
  //if the textbox is not blank
  if (initialSalaryAmount.value != "") {
    initialSalary = parseInt(initialSalaryAmount.value);
  }
 return initialSalary;
}

// calculate the totallll

function calculateTotal(){
  
  var getCalculatedSalary = getInitialSalary() * getPercentage();
  var calculatedSalary = 
  Math.round(getCalculatedSalary * Math.pow(10,2))/Math.pow(10,2);
  
//   display all of the hard work that the computer has to do
  
  document.getElementById('salary-calculated').innerHTML = "$"+ calculatedSalary;
}