from os.path import split
import requests
from bs4 import BeautifulSoup
import random
import sys

# print("You may want to format the file name 'inputs/x.txt'")
filename = "data.txt"
ofile = open(filename, 'a')
i_max = int(sys.argv[1])
# i_max = int(input("How many phrases to generate? "))
wordlength = 30

for i in range(i_max):
  response = requests.get("https://en.wikipedia.org/wiki/Special:Random")
  soup = BeautifulSoup(response.text, 'html.parser')
  foundp = soup.find_all('p')
  working_paragraph = ""
  loopbreak = 0
  while len(foundp) == 0 and loopbreak < 50:
    response = requests.get("https://en.wikipedia.org/wiki/Special:Random")
    soup = BeautifulSoup(response.text, 'html.parser')
    foundp = soup.find_all('p')
    loopbreak = loopbreak + 1
  loopbreak = 0
  while (not(working_paragraph.rstrip("\n")) or "This article" in working_paragraph or "Coordinates" in working_paragraph or "stub" in working_paragraph) and loopbreak < 50:
    randindex = random.randrange(len(foundp))
    working_paragraph = foundp[randindex].text
  working_paragraph = working_paragraph.replace("[", " [")
  # working_paragraph = working_paragraph.split(". ")[0] + "."
  sp = working_paragraph.split()
  n = 0
  while n != len(sp):
    if "[" in sp[n]:
      sp.pop(n)
    else:
      n = n + 1
  wordlength = random.randint(7,50)
  maxrange = wordlength
  if wordlength > len(sp):
    maxrange = len(sp)
  for x in range(0,maxrange):
    ofile.write(str(sp[x]))
    print(str(sp[x]), end=" ")
    if not(x == maxrange - 1):
      ofile.write(" ")
    else:
      ofile.write("\n")
      print()

ofile.close()

print("Removing any duplicates")
newfile = ""
with open(filename, 'r') as checkfile:
  seen = set()
  for line in checkfile:
    if line not in seen and "/" not in line:
      newfile = newfile + line
      seen.add(line)
with open(filename, 'w') as checkfile:
  checkfile.write(newfile)

print("\aALL DONE!")
print(80*"=")
print(80*"=")
print(80*"=")