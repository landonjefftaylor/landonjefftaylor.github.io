with open("mat.txt", 'r') as ifile:
	with open("out.txt", 'w') as ofile:
		for line in ifile:
			ofile.write(line.replace(" ", " & ").strip() + " \\\\\n")
