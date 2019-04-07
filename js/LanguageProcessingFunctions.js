
	var Dictionary = require("oxford-dictionary");			//npm install oxford-dictionary

 	var config = {
    	app_id : "f6ea9ce4",
    	app_key : "9698079718dfe76973308b851c6ed526",
    	source_lang : "en"
  	};
	var dict = new Dictionary(config);

	var methods = {
		//Read in Library
		readWordData: function(wordDataFile, wordDatabase) {

			var fs  = require("fs");
			var frequencies = fs.readFileSync(wordDataFile).toString().split(/\n|\r/);
			frequencies = frequencies.filter(Boolean)

			wordDatabase = wordDatabase.concat(frequencies);

			return wordDatabase;
		},

		//Split User input
		splitText: function(inpText) {
			inputWords =  inpText.match(/\b(\w+)'?(\w+)?\b/g);
			//array2 =  text.match(/\b(\w+)\/?(\w+)'?(\w+)?\b/g); 			//works for words like I/O where theres a / in the words

			for (var i = 0, L=inputWords.length ; i < L; i++) {
			  inputWords[i]=inputWords[i].toLowerCase();
			}

			inputWords = inputWords.filter( onlyUnique );
			return inputWords
		},

		//Helper Function for splitText filters
		onlyUnique: function(value, index, self) { 
    		return self.indexOf(value) === index;
		},

		isImportant: function(word, wordDatabase) {
			if (wordDatabase.includes(word)) {
				return true;
			}
			else {
				return false;
			}
		},		

		oxfordLookup: async function(word) {
			var lookup = dict.find(word);
 			var definition;
			await lookup.then(function(res) {
				var temp = JSON.parse(JSON.stringify(res, null, 4))
				definition = temp.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
			},
				function(err) {
				console.log(err);
			});
			return definition;
		}
	}
	module.exports = methods;






