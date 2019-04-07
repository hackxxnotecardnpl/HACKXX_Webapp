# tester
import nltk
import re
from nltk.corpus import stopwords 
import math
import nltk.data
import wikipedia
from nltk.corpus import wordnet









def readWord(content):
	wordList = []
	wordList = content.split('\n')
	return wordList



def generate(path,fileName):

	file = open(path, 'r')

	content = file.read()

	wordCount = validWord(content)

	output = printWordCount(wordCount)

	text_file = open(fileName, "w")

	text_file.write(output)

	text_file.close()

def generateFile(content, file):
	text_file = open(file, "w")

	text_file.write(content)

	text_file.close()


def compareContent(content1, content2):
	wordCount1 = validWord(content1)
	wordCount2 = validWord(content2)

	wordCount = compareDataBase(wordCount1,wordCount2)

	output = printWord(wordCount)
	return output


def printWordCount(wordCount):

	output = ''

	for word in wordCount:
		output += word
		output += ' : '
		output += str(wordCount[word])
		output += '\n'
	return output

def printWord(wordCount):
	output = ''
	for word in wordCount:
		output += word
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
				if isEnglish(word):
					final_tokens.append(word)

	wordCount = {}

	for word in final_tokens:
		if word in wordCount:
			wordCount[word]+=1
		else:
			wordCount.update({word : 1})

	return wordCount
def isEnglish(word):
	if not wordnet.synsets(word):
		return False
	else:
		return True

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

cogs2_file = open('cogs2.txt', 'r')
cogs2 = cogs2_file.read()

bio_file = open('finalData.txt','r')
bio = bio_file.read()

cogs2_word = validWord(cogs2)

database_word = readWord(bio)

matchWord = []

for word in cogs2_word:
	if word in database_word:
		matchWord.append(word)

output = ''

for word in matchWord:
	output += word
	output += '\n'

generateFile(output, 'matchResult.txt')
