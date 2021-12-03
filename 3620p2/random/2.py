with open("mat2.txt", 'r') as ifile:
	with open("out2.txt", 'w') as ofile:
		for line in ifile:
			ofile.write(line.replace("1", "-1"))
