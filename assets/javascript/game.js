$(document).ready(function() {
    

    //---------------------------
    
        var target=Math.floor(Math.random()*120 + 19)  // generates random target number
    
        $('#numberToGuess').text("NUMBER TO GUESS: " + target);
        
    //---------------------------
    //                                              I realize I could have done this in a much simpler way,
    //                                              but this is how I first worked out how to genertae the random
    //                                              numbers for the buttons and it works so I just went with it.
    
        var crystalArray = [];   // generate random number and put them into an array to then assign values to buttons      
            for (var i=0; i<4; i++) {
            crystalArray.push(Math.round(Math.random() * 12)+1)
            }
    
        for (var i = 0; i < crystalArray.length; i++) {   // assign each value from the array to a variable  
            var crystalValue = crystalArray[i];
            console.log(crystalValue);
                }
    
            cV1 = crystalArray[0];                           // assign array values to  variables 
            cV2 = crystalArray[1];                           // now realizing i may not need to do this but oh well
            cV3 = crystalArray[2];
            cV4 = crystalArray[3];
    
    //---------------------------                                            	
    
        var total=0;        // score variables
        var wins=0;
        var losses=0;
    
        $('#wins').text("WINS: " + wins);               // pushes these variables to their respecful html elements
        $('#losses').text("LOSSES:" + losses);
    
    //---------------------------
    
            $('#c1').on('click', function(){        //      button number 1
        
                total=  total + cV1;
        
                $("#total").text("TOTAL: " + total);
        
                    if(total === target){
                        win();
                    }
        
                    else if(total > target){
                        lose();
                    }
                })
        
        
            $('#c2').on('click', function(){       //      button number 2
        
                total= total + cV2;
        
                $("#total").text("TOTAL: " + total);
        
                    if(total === target){
                        win();
                    }
        
                    else if(total > target){
                        lose();
                    }
                })
        
        
            $('#c3').on('click', function(){       //      button number 3
        
                total= total + cV3;
        
                $("#total").text("TOTAL: " + total);
        
                    if(total === target){
                        win();
                    }
        
                    else if(total > target){
                        lose();
                    }
                })
        
        
            $('#c4').on('click', function(){        //      button number 4
        
                total= total + cV4;
        
                $("#total").text("TOTAL: " + total);
        
                    if(total === target){
                        win();
                    }
                    
                    else if(total > target){
                        lose();
                    }
                })
        
        
            $('#new-game').on('click', function(){       //      new game button
        
                reset();
                wins = 0;
                losses = 0;
                $('#wins').text("WINS: " + wins);
                $('#losses').text("LOSSES: " + losses);
                })
        
    
   //---------------------------
    
        function win(){
            alert("WINNER!");
            wins++; 
            $('#wins').text("WINS: " + wins);
            reset();
        }
    
        
        function lose(){
            alert("YOU LOSE!");
            losses++;
            $('#losses').text("LOSSES: " + losses);
            reset();
        }
    
    //---------------------------
    
        function reset(){
    
    
            target=Math.floor(Math.random()*120 + 19);   // this resets the target number
            
            $('#numberToGuess').text("NUMBER TO GUESS: " + target);
        
    //---------------------------
    
            var crystalArray = [];   // generates random number and puts them into an array to then assign values to buttons      
                for (var i=0; i<4; i++) {
                crystalArray.push(Math.round(Math.random() * 12)+1)
                }
    
            for (var i = 0; i < crystalArray.length; i++) {   // assign each value from the array to a variable  
                var crystalValue = crystalArray[i];
                console.log(crystalValue);
                 }
    
             cV1 = crystalArray[0];   // assign array values to  variables 
             cV2 = crystalArray[1];   // now realizing i may not need to do this but oh well
             cV3 = crystalArray[2];
             cV4 = crystalArray[3];
    
    //-----------------------------
    
            total=0;                    // this resets the total to 0
            $('#total').text("TOTAL: " + total);
        }
    
    });
    
        
    