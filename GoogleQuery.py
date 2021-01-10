from bs4 import BeautifulSoup
from requests import get
import re
import json
import random
from time import sleep

linkki="https://www.google.fi/search?q="
#kuka+on+suomen+presidentti
#muuttuja= "Miten+dinosaurukset+kuolivat"
#muuttuja= input("Anna: ")
suomi= "&hl=fi"
n_maara = 2 

with open("file.txt", encoding="utf8") as file_in:
    kysymysL = []
    vastausL = []
    for line in file_in:
        muuttuja = " ".join(line.split())
        kysymysL.append(muuttuja)
        muuttuja = muuttuja.replace(' ', '+')
        url = linkki+muuttuja+"&num=" + str(n_maara)+suomi
        print (url)
        
        
        response = get(url)
        html_soup = BeautifulSoup(response.text, 'html.parser')
        html_soup = html_soup.find().text
        html_soup = html_soup[414:]
        text = html_soup[:200]
        vastausL.append(text)
        sleep(2)
        #print(html_soup[:200])
    #print(kysymysL)

    def crtjson(kysymys, vastaus):
            numero = random.randint(10, 50000)
            asd = { "tag": numero,
                    "patterns": [kysymys,],
                    "responses": [vastaus],
                    "context_set": ""}
            with open('kysymyksia.json', 'a',encoding="utf8") as outfile:
                outfile.seek(0,2)                 # end of file
                size=outfile.tell()               # koko
                outfile.truncate(size-2) 
                outfile.write(',')       
                json.dump(asd, outfile,indent=5,ensure_ascii=False )
                outfile.write(']}')
                outfile.close()

    for kysymys,vastaus in zip(kysymysL,vastausL):
        crtjson(kysymys,vastaus)

print("done")
