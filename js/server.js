var express = require('express');
var app = express();
var http = require('http');
var lan = require('./LanguageProcessingFunctions.js');


app.use(express.static('css'))

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   app.get('/',function(req,res) {
		res.sendFile('newfile.html', { root: '.' })
	});
   
   console.log("Example app listening at http://%s:%s", host, port)
})

/*

var wordDatabase = new Array();

wordDatabase = lan.readWordData("Test_File.txt", wordDatabase);

console.log(wordDatabase);

console.log(lan.isImportant("evil", wordDatabase));

		
*/

var Language = require("./LanguageProcessingFunctions.js");
var cardSet = new Array();

var userInput = "";
function storeInput(input) {
	userInput = input;
}
//var database = map<word, freq>;
function defineInput() {
	//Space separated words as our note input
	var words = userInput.split(" "); 
	words.forEach(function(element) {
		//Lowercase and trimmed word
		var term = element.replace(/[.,'"!?\s]/gi, '').toLowerCase();
		//If found in the map, we do not define the input.
		//OR if the rarity value is too high (common word)
		var condition = isFrequentlyUsed(term, frequencyDatabase);
		var mydiv = document.getElementById("paragraph"); 
		mydiv.innerHTML = ""; //Reset input. For debugging.
		var newcontent = document.createElement('div');
		newcontent.innerHTML = element + " "; //Default if common element. Not defined.
		if (!condition) {
			//If the element is rarely found, then add an onmouseover
			//that displays its definition in the corresponding text box.
			//Highlight text with class="highlight".
			var startStr = "<div class=\"highlight\" onmouseover=\"showDef(\'";
			var midStr = "\')\" onmouseout=\"default()\">";
			var endStr = " </div>"; //Included space after element to restore format post-splitting
			newcontent.innerHTML = startStr + term + midStr + term + endStr;
			let data = Lan.oxfordLookup(term);
			data.then(function(result){
					cardSet.push(term + ", " + result;			
			});	
		} 
		if (newcontent.firstChild) {
			mydiv.appendChild(newcontent.firstChild);
		}
	});
}

//Output the word and its definition to the textbox when hovered over
function showDef(name) {
	document.getElementById("textbox").innerHTML = name;
	document.getElementById("answerbox").innerHTML = cardSet.get(name);
}
//When not hovering, return to default state (informative text box)
function default() {
	document.getElementById("textbox").innerHTML = "Hover a highlghted word to see its definition!";
	document.getElementById("answerbox").innerHTML = "";
}
