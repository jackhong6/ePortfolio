// Lightbulb ==============================================
// INVARIANT: The lightbulb image src attribute always matches its class.
//            If src="Images/lightbulbOn.png" then class="on"
//            If src="Images/lightbulbOff.png" then class="off"

var stepsTaken = 0;

// REQUIRES: 0 <= n <= 9
// Natural -> void
// switches the lightbulb clicked and the lightbulbs around it
function clickLight(n) {
    updateSteps();
    if (n == 0) {
        switchLight("lightbulb0");
        switchLight("lightbulb1");
        switchLight("lightbulb9");
    }
    else if (n == 9) {
        switchLight("lightbulb9");
        switchLight("lightbulb8");
        switchLight("lightbulb0");
    }
    else {
        thisLightID = getLightID(n);
        prevLightID = getLightID(n - 1);
        nextLightID = getLightID(n + 1);
        
        switchLight(thisLightID);
        switchLight(prevLightID);
        switchLight(nextLightID);
    }
    
    if (checkWin())
        setTimeout(function(){
                    if (confirm('Congratulations! You won in ' + stepsTaken + " steps! Try again?"))
                        resetLightbulbs();
                    }, 100);

}

// REQUIRES: Input is between 0 and 9 inclusive
// Natural -> String
function getLightID(n) {
    return "lightbulb" + n;
}

// String -> void
// Turns light on if off; turns light off if on
function switchLight(lightID) {
    if (document.getElementById(lightID).className == "on") {
        turnOff(lightID);
    }
    else {
        turnOn(lightID);
    }
}

// Turn lightbulb off
function turnOff(lightID) {
    document.getElementById(lightID).src = "Images/lightbulbOff.png";
    document.getElementById(lightID).className = "off";
}

// Turn lightbulb on
function turnOn(lightID) {
    document.getElementById(lightID).src = "Images/lightbulbOn.png";
    document.getElementById(lightID).className = "on";
}

// void -> boolean
// returns true if all lights are on
function checkWin() {
    var lightID;
    for (var i = 0; i<10; i++) {
        lightID = getLightID(i);
        if (document.getElementById(lightID).className == "off") {
            return false;
        }
    }
    return true;
}

// adds 1 to stepsTaken and updates the text on the page
function updateSteps() {
    stepsTaken += 1;
    document.getElementById('stepsTaken').innerHTML = "Steps Taken: " + stepsTaken;  
}

// Turns all the lightbulbs off and reset the steps counter
function resetLightbulbs() {
    for (var i = 0; i<10; i++) {
        lightID = getLightID(i);
        turnOff(lightID);
    }
    
    stepsTaken = 0;
    document.getElementById('stepsTaken').innerHTML = "Steps Taken: 0";
    
}

// Shows the solution to the lightbulb game from a reset board
function solveLightbulbs() {
    if (confirm('Are you sure you want to give up and see the solution?')) {
        resetLightbulbs();
        delayedClickLightLoop(0);
    }
}

// Steps through the solution at 1 second per step
function delayedClickLightLoop(i) {
    if (i < 10) {
        setTimeout(function(){
                        outlineLight(i);
                        clickLight(i);
                        i++;
                        delayedClickLightLoop(i);
                    }, 1000);
    }
}

// Creates a red outline around the ith light for 1 second
function outlineLight(i) {
    var lightID = getLightID(i);
    document.getElementById(lightID).style.outline="1px solid red";
    setTimeout(function(){
                var lightID = getLightID(i);
                document.getElementById(lightID).style.outline="none";
                }, 1000);
}
