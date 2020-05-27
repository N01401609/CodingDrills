//J1: 2020

//alert("I am here");
window.onload = pageReady; 

function pageReady(){
    
    //Getting the submit button
    var submit = document.getElementById("submit");
    
    submit.onclick = processForm; 
    
    function processForm(){
      //alert("form has been submitted"); 
        
        //Get all the input from the user
        var small = document.getElementById("small").value;
        var medium = document.getElementById("medium").value;
        var large = document.getElementById("large").value;
        
        //Get the element where the result goes
        var result = document.getElementById("result");
        
        console.log(small);
        
        //Calculation
        var sum = 1*small + 2*medium + 3*large;
        
        if(sum>= 10){
            result.innerHTML = "Barley is happy";
        } else{
            result.innerHTML = " Barley is sad";
        }
         return false;
    }
    
    
    
}