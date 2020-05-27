//alert("I am here");
window.onload = pageReady; 

function pageReady(){
    
    //Getting the submit button for the amount of lines
    var submitlines = document.getElementById("submitl");
    
    //Getting the submit button for decoding the message
    var submitxt = document.getElementById("submitxt");
    
    //Get the result span
    var decodemsg = document.getElementById("result");
    
    //Set lines to 0 at the beggining
    var lines = 0;
    
    //On click get the user input
    submitlines.onclick = getLines; 
    
    //On click decode the message
    submitxt.onclick = decodeMessage;
    
    
    //Function print lines depending on the user input
    function getLines(){
        
        //If it is a re-submission wipe all the lines 
        var htmlline = "";
        input.innerHTML = htmlline;
        decodemsg.innerHTML = "";
        
        //Get how many lines does the user has?
        lines = document.getElementById("lines").value;
        console.log(lines);
        
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
            var htmlline = "<div><label for='int"+i+"'> Line "+(i+1)+": </label><input type='number' name='int"+i+"' id='int"+i+"' placeholder='integer between 0 - 80'/><input type='text' name='char"+i+"' id='char"+i+"' placeholder='character(no spaces allowed)'/> </div>";
            
            //Adding the line to the html page
            input.innerHTML += htmlline;
            
            //Test to see what line is being used
            console.log(htmlline);
           
            
        }
        
        return false;
        
    }
    
    //Decode the message
    function decodeMessage(){
        
        //Grab the Html from the inputs
        //console.log(lines);
        decodemsg.innerHTML = "<br> Decompress Message";
        
        //get all the inputs
        for(var i = 0; i < lines; i++ ){
            decodemsg.innerHTML += "<br>";
            
            //Assign the id names for the elements
            var intid = "int"+i;
            var charid = "char"+i;
            //console.log(intid);
            //console.log(charid);
            
            
            //Get the elements value
            var int = document.getElementById(intid).value;
            console.log(int);
            var char = document.getElementById(charid).value;
            console.log(char);
            
            //Decode Result
            for(var x = 0; x < int; x++){
                decodemsg.innerHTML += char; 
            }
            
            
        }
        
        return false;
        
    }
    
    
    
}