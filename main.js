//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function buildTree (clickEvent) {
//*******************************************
// It accepts a single object as an argument. The object should have two key/value pairs.
//
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
//*******************************************

//*******************************************
// Once the user enters in a number, and a character, the user can either then just 
// press the enter key (as long as the cursor is in one of the input fields), ...
//*******************************************

//*******************************************
// ... or click a button that is labeled "Grow your tree"  ... 
//*******************************************

//*******************************************
// ... and the tree should be shown in the console. 
//*******************************************

//*******************************************
// If either of the input fields does not have a value in it 
// when the user presses the enter key, or presses the button, 
// then display an alert stating that both fields must have a value.
//*******************************************
	}



//*******************************************
// define Event Listeners
//*******************************************
var enterKey = document.getElementsByClassName("tempForm");
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");


//*******************************************
// Once the user enters in a number, and a character, 
// the user can either then just press the enter key 
// (as long as the cursor is in one of the input fields) ... 
//*******************************************

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if (e.which === 13) {
    	performConversion();
        // mainLaunchEnter();
    } else {
    	return false;
    }
}

// enterKey.addEventListener("keyup", function() { // NOT TESTED ... BUT SHOULD WORK
//     e.which = e.which || e.keyCode;
//     if (e.which === 13) {
//     	performConversion();
//         // mainLaunchEnter();
//     } else {
//     	return false;
//     }
// });


//*******************************************
// ... or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. 
//*******************************************

//  converterButton.addEventListener("click", function() {
// 	performConversion();
// });


clearButton.addEventListener("click", clearAll);

function clearAll (clickEvent) {
	inputTemp = document.getElementById("temp").value = "";
	document.getElementById("cels").checked = false;
	document.getElementById("fahr").checked = false;
	document.getElementById("output").innerHTML = "";
}



