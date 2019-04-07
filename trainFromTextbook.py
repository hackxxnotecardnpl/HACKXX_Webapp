import nltk
import re
from nltk.corpus import stopwords 
import math
import nltk.data
import wikipedia





def generate(path,fileName):

	file = open(path, 'r')

	content = file.read()

	wordCount = validWord(content)

	output = printWordCount(wordCount)

	text_file = open(fileName, "w")

	text_file.write(output)

	text_file.close()

def printWordCount(wordCount):

	output = ''

	for word in wordCount:
		output += word
		output += ' : '
		output += str(wordCount[word])
		output += '\n'
	return output

def validWord(content):

	content = content.lower()
	content = removeDelimiter(content)


	word_list = nltk.word_tokenize(content)
	stop_words = set(stopwords.words('english'))
	final_tokens = []
	for word in word_list:
		if word not in stop_words:
			if word != '' and word.isalpha():
				final_tokens.append(word)

	wordCount = {}

	for word in final_tokens:
		if word in wordCount:
			wordCount[word]+=1
		else:
			wordCount.update({word : 1})

	return wordCount	


def removeDelimiter(content):
	new_content = ''
	delimiter = [",", ".", "!", "?", "/", "&", "-", 
				":", ";", "@", "'", "...","(",")","{","}"
				,"<",">","^","|","/"];
	for char in content:
		if char not in delimiter:
			new_content += char
	return new_content


def intoSentence(content):
	start = 0;
	end = 0;
	str = ''
	sentences = []
	for i in range(0,len(content)):
		if(content[1] == '.' or content[i]=='!'or content[i] == '?' 
			or content[i]=='\n'):
			end = i+1
			sentence = content[start:end]
			start = end
			sentences.append(sentence)
	return sentences


def askDefinition(term):
	page = wikipedia.page(term)

	#print('the URL is ' + page.url)
	#print('the first relevant link is  ' + page.links[0])

	definition = ''

	# loop through to get the first paragraph of content
	for char in page.content:
		definition += char
		if(char == '\n'):
			break

	#print(definition)
	return definition
	#return page.content



generate('Physics.txt','physicsWord.txt')