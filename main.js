//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function mainProgram () {

	var treeProperties = {
		treeHeight: "",
		treeCharacter: ""
	}

	var readyToBuild;
	readyToBuild = readUserInput(treeProperties);
	if (readyToBuild) {
		buildTree(treeProperties);
	} else {
		alert("Must specify both height and character to build the tree! <duh>");
	}

	clearFields(treeProperties); // reinitialize user interface
}



//*******************************************
// SUPPORTING FUNCTIONS
//*******************************************

function readUserInput(properties) {

	properties[0] = document.getElementById("treeHeight").value;
	properties[1] = document.getElementById("treeChar").value;

	if ((properties[0] !== "") && (properties[1] !== "")) {
		return true; // readyToBuild
	} else {
		return false;
	}
}

	
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


// reiniatialize everything to start state
function clearFields(properties) {

	document.getElementById("treeHeight").value = "";
	document.getElementById("treeChar").value = "";
	document.getElementById("treeHeight").placeholder = "Height of Tree ::  ";
	document.getElementById("treeChar").placeholder = "Character for Tree :: ";
	properties[0] = "";
	properties[1] = "";

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


