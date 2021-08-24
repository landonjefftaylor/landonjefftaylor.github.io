import os 

i = 0

while True:
  os.system("python3 scrape.py 50")
  i = i + 1
  if i % 20 == 0:
    input("enter to continue")