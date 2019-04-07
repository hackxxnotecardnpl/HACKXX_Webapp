/*
var express = require('express');
var app = express();


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

*/
var HashMap = require('hashmap');						//npm install hashmap
var Dictionary = require("oxford-dictionary");			//npm install oxford-dictionary

 var config = {
    app_id : "f6ea9ce4",
    app_key : "9698079718dfe76973308b851c6ed526",
    source_lang : "en"
  };
var dict = new Dictionary(config);


//Weight = num(datafile_word > WORD_FREQUENCY_THRESHOLD)/ numOfDataFiles
var numOfDataFiles = 0;
const WORD_FREQUENCY_THRESHOLD = 2;
const DATA_FREQUENCY_THRESHOLD = 0.5;

//Read in Library
function readWordData(wordDataFile, frequencyDatabase) {

	var fs  = require("fs");
	var frequencies = fs.readFileSync(wordDataFile).toString().split(/\n|\r/);
	frequencies = frequencies.filter(Boolean)

	frequencies = frequencies.map((value) => value.split(/ : /)).filter(Boolean)

	var map = new HashMap(frequencies);

	for (var i = 0; i < frequencies.length; i++) {
		if(frequencies[i][1] > WORD_FREQUENCY_THRESHOLD) {
			if(frequencyDatabase.has(frequencies[i][0])) {
				frequencyDatabase.set(frequencies[i][0], frequencyDatabase.get(frequencies[i][0]) + 1);
			}
			else {
				frequencyDatabase.set(frequencies[i][0], 1);

			}
		}
	}
	numOfDataFiles++;
	return frequencyDatabase;
}

//Split User input
function splitText(inpText) {
	inputWords =  inpText.match(/\b(\w+)'?(\w+)?\b/g);
	//array2 =  text.match(/\b(\w+)\/?(\w+)'?(\w+)?\b/g); 			//works for words like I/O where theres a / in the words

	for (var i = 0, L=inputWords.length ; i < L; i++) {
	  inputWords[i]=inputWords[i].toLowerCase();
	}

	inputWords = inputWords.filter( onlyUnique );
	return inputWords
}

//Helper Function for splitText filters
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function isFrequentlyUsed(word, frequencyDatabase) {
	if (frequencyDatabase.has(word)) {
		var weight = frequencyDatabase.get(word) / numOfDataFiles;
		if (weight > DATA_FREQUENCY_THRESHOLD) {
			return true;
		}
	}
	return false;
}

function test (phrase, frequencyDatabase){
	console.log("Start\n");
	var words = splitText(phrase)
	for (var i = 0; i < words.length; i++) {
		console.log(isFrequentlyUsed(words[i], frequencyDatabase));
	}
}

function oxfordLookup(word) {
	var lookup = dict.find(word);
 	var definition;
	lookup.then(function(res) {
		var temp = JSON.parse(JSON.stringify(res, null, 4))
		definition = temp.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
	},
		function(err) {
		console.log(err);
	});
	return definition;
}

var frequencyDatabase = new HashMap();

frequencyDatabase = readWordData("Test_File.txt", frequencyDatabase);

frequencyDatabase = readWordData("Test_File2.txt", frequencyDatabase);

console.log(frequencyDatabase);

console.log(isFrequentlyUsed("evil", frequencyDatabase));

test("I hate evil people.",frequencyDatabase);

let data = oxfordLookup("yes")
data.then(function(result){
	console.log(result)
})