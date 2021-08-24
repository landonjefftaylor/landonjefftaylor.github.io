c = ["<",">","\\","{","}"]

with open("betterdata.txt", "r") as ifile:
  with open("sentences.js", "w") as ofile:
    ofile.write("const s = [\n")
    for line in ifile:
      if len(line) > 20:
        ok = True
        for ch in c:
          if ch in line:
            ok = False
        if ok:
          w = '\t"' + line.replace("\n","").replace('"',"'") + '",\n'
          ofile.write(w)
    ofile.write("\n\t]")