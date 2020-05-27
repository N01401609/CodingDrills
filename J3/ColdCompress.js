//J3: 2019

//alert("I am here");
window.onload = pageReady; 

function pageReady(){
    
    //Getting the submit button for the amount of lines
    var submitlines = document.getElementById("submitl");
    
    //Getting the submit button for encoding the message
    var submitxt = document.getElementById("submitxt");
    
    //Get the result span
    var encodemsg = document.getElementById("result");
    
    //Set lines to 0 at the beginning
    var lines = 0;
    
    //On click get the user input
    submitlines.onclick = getLines; 
    
    //On click encode the message
    submitxt.onclick = encodeMessage;
    
    
    //Function print lines depending on the user input
    function getLines(){
        
        //If it is a re-submission wipe all the lines 
        var htmlline = "";
        input.innerHTML = htmlline;
        encodemsg.innerHTML = "";
        
        //Get how many lines does the user has?
        lines = document.getElementById("lines").value;
        //console.log(lines);
        
        //Display the amount of lines the user will need
        showLines(lines);
        
         return false;
    }
    
    //Show the lines
    function showLines(lines){
        
        //Show the input container
        document.getElementById("input-container").style.display = "block";
        
        //Get the div to put the inputs 
        var input = document.getElementById("input");
        
        //inner html the new input lines
        for(var i = 0; i < lines; i++){
            
            var htmlline = "<div><label for='msg"+i+"'> Line "+(i+1)+": </label><input type='text' name='msg"+i+"' id='msg"+i+"' placeholder='80 characters no spaces allowed'/> </div>";
            
            //Adding the line to the html page
            input.innerHTML += htmlline;
            
            //Test to see what line is being used
            console.log(htmlline);
           
            
        }
        
        return false;
        
    }
    
    //Encode the message
    function encodeMessage(){
        
        //Grab the Html from the inputs
        //console.log(lines);
        encodemsg.innerHTML = "<br> Compressed Message";
        
        //Get all the inputs
        for(var i = 0; i < lines; i++ ){
            
            //Variable to count repetition of letters
            var count = 0;
            
            //Create a break from the title
            encodemsg.innerHTML += "<br>";
            
            //Assign the id names for the elements
            var msgid = "msg"+i;
            //console.log(msgid);
            
            
            //Get the elements value
            var message = document.getElementById(msgid).value;
            console.log(message);
            
            //LOGIC Encode Result
            
            //Loop through all of the characters of that line
            console.log(message.length);
            
            for(var x = 0; x <= message.length; x++ ) {
                
                //Check if it is the first letter, if it is count that letter
                if(x === 0){
                    
                    count++;
                    
                } else { // If it is not the first check the following
                    
                    //Check if the character is the same as the previous one
                    if(message.charAt(x) === message.charAt(x-1)){
                        
                        //If it is count it
                        count++;
                        
                    } else { // if it is not print the count and previous character

                        encodemsg.innerHTML += " " + count + " " + message.charAt(x-1);
                        
                        //Then make the count 1 as this is a unique new character that needs to be counted again
                        count = 1;
                    }
            
                    
                }
                
            }
            //console.log(count);
            
        }
        
        return false;
        
    }
    
    
    
}