# HACKXX_DefNote


## Inspiration

Looking up terms in an acedemic article could be tedious. With no fast explaination of terms, students waste time searching for termiologies, and more than often get tired before finishing the whole paper.  We want to help users to have more time for learning and achieving their careers. 

>>We believe that women, with their great capability in any acedemic, have great future in (how to incooprparete women!ahah

## What it does
We created a web application that allows users to input passages from class, and auto identifies and defines the terms that most needed to be explained using Natural Language Processing API and python wiki package. After processing with our built database, the user could view the text at ease: for terms needed explanation, they would hover their mouse over the word, and the definition would be displayed in the definition box. After reading the text, users could also create a set of notecards by one click. 

## How we built it
We built the backend through:
### 1. convert data
In order to train the machine learning the subject-specific vocabulary, we need to distinguish words between academical word and daily used word. Thus, we integrate several Biological textbook into a big txt file. And we also integrate several novels into another big txt file.
### 2. prepare data
By using nltk(Natural Language Toolkit), we break text into single words. Then by using corpus from nltk, we filtered the word list by kicking out of stopwords and non-English words. Thus, every word in the list is meaning ful.
### 3. train the data
We loop through different database and generate a word_frequency txt file by counting the number of times a word has appeared in the database. So a biology-terminalogy will only appear in biology database, and a none-biology-terminology will appear in both of the databases. Then, by removing word appeared in both of the database, and the remaining will be biology terminology.
### 4. output the data
We output the biology terminalogy, and analyze whether there is word in user's input that is part of the biology terminology word list. Then, the word that satisfies the requirment will be the word that needs to be defined.

After completing the algorithm, we created a website to host the application using HTML5, CSS, and JavaScript. The website includes the structure of the application on the left, and perform the text intake, reading with definition, and notecard functions on the right hand side. Through this web app, users learn termiologies from text that are hard to understand with ease. 

## Challenges we ran into
Making our first webapp is very challenging. 

## Accomplishments that we're proud of 

## What we learned

## What's next for DefNote

## Built With



## Detailed description of files
#### Neuralscience.txt and Physics.txt are txt file of textbooks
#### biologyWord.txt and physicsWord.txt are txt file of word frequency
#### trainFromTextbook.py is the python code to generate from text to frequency txt

