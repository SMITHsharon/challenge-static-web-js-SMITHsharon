//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function mainProgram () {

	var treeProperties = ["treeHeight", "treeCharacter"];
	// <treeHeight> and <treeCharacter> input by user
	
	treeProperties[0] = document.getElementById("treeHeight").value;

	treeProperties[1] = document.getElementById("treeChar").value;

//*******************************************
// If either of the input fields does not have a value in it 
// when the user presses the enter key, or presses the button, 
// then display an alert stating that both fields must have a value.
//*******************************************


	buildTree(treeProperties);

}



//*******************************************
// SUPPORTING FUNCTIONS
//*******************************************

function buildTree(properties) {
	var outputHeight = properties[0];
	var outputChar = properties[1];
	var printSpaces; 
	var printTreeChars;
	var thisString = "";

	for (var i=0; i<outputHeight; i++) {

		printSpaces = outputHeight - (i+1); // calculate #spaces to output
		printTreeChars = (2*i) + 1;			// calculate #characters to output
											// for this <i> line
		// build this <i> line <string>
		for (var j=0; j<printSpaces; j++) {
			thisString += " ";
		}
		for (var k=0; k<printTreeChars; k++) {
			thisString += outputChar;
		}

		// output this <i> line
		console.log(thisString);

		// clear the string for the next line
		thisString = "";
	}
}


//*******************************************
// EVENT LISTENERS
//*******************************************
var enterHeight = document.getElementById("treeHeight");
var enterChar = document.getElementById("treeChar");
var growButton = document.getElementById("btnText");


//*******************************************
// Once the user enters in a number, and a character, 
// the user can either then just press the enter key 
// (as long as the cursor is in one of the input fields) ... 
//*******************************************

enterHeight.addEventListener("keyup", inputKeyUp);
enterChar.addEventListener("keyup", inputKeyUp);

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
// console.log("in function inputKeyUp");
    if (e.which === 13) {
    	mainProgram();
        // mainLaunchEnter();
    } else {
    	return false;
    }
}

// NOT WORKING ???
// enterKey.addEventListener("keyup", function() { // from Justin
//     e.which = e.which || e.keyCode;			   // NOT TESTED ... BUT SHOULD WORK
// console.log("in <enterKey> eventHandler");
//     if (e.which === 13) {
//     	buildTree();
//         // mainLaunchEnter();
//     } else {
//     	return false;
//     }
// });


//*******************************************
// ... or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. 
//*******************************************

growButton.addEventListener("click", mainProgram);


// clearButton.addEventListener("click", clearAll);

function clearAll (clickEvent) {
	inputTemp = document.getElementById("temp").value = "";
	document.getElementById("cels").checked = false;
	document.getElementById("fahr").checked = false;
	document.getElementById("output").innerHTML = "";
}



