//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function mainProgram () {

	var treeProperties = {
		treeHeight: "",
		treeCharacter: ""
	}

	var readyToBuild;
	var treeString;
	readyToBuild = readUserInput(treeProperties);
	if (readyToBuild) {
		treeString = buildTree(treeProperties);
		console.log(treeString);
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
	var treeString = "";

	for (var i=0; i<outputHeight; i++) {

		printSpaces = outputHeight - (i+1); // calculate #spaces to output
		printTreeChars = (2*i) + 1;			// calculate #characters to output
											// for this <i> line
		// build this <i> line <string>
		for (var j=0; j<printSpaces; j++) {
			treeString += " ";
		}
		for (var k=0; k<printTreeChars; k++) {
			treeString += outputChar;
		}

		treeString += "\n";
	}

	return treeString;
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
// event handler for <Enter> key
//*******************************************

enterChar.addEventListener("keyup", function(e) { 
    e.which = e.which || e.keyCode;			  
    if (e.which === 13) {
    	mainProgram();
    } else {
    	return false;
    }
});

//*******************************************
// event handler for <Grow your tree> button
//*******************************************
growButton.addEventListener("click", mainProgram);


