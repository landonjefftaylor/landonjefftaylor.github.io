outs = [
  [6,7,8,9,10], #0
  [2,7,10,5], #1
  [1,6,8,3], #2
  [2,7,9,4], #3
  [3,8,10,5], #4
  [1,6,9,4], #5
  [2,0,5], #6
  [1,0,3], #7
  [2,0,4], #8
  [3,0,5], #9
  [4,0,1] #10
]

class Tree:

  def __init__(self, data):
    self.children = []
    self.parents = []
    self.data = data
  
  def find_cycles(self, i):
    for next in outs[self.data]:
      if next != i and next not in self.parents:
        child = Tree(next)
        child.parents = self.parents
        child.parents.append(self.data)
        self.children.append(child)
        child.find_cycles(i)
      elif next == i:
        child = Tree(next)
        child.parents = self.parents
        child.parents.append(self.data)
        self.children.append(child)
      else:
        child = Tree(9999)
        child.parents = self.parents
        child.parents.append(self.data)
        self.children.append(child)

  def print_tree(self, length, prefix):
    prefix = prefix + " " + str(self.data)
    if len(self.children) == 0:
      print(prefix, end=" ")
      with open("cycles.txt", 'a') as cycles:
        cycles.write(prefix)
      print(" length " + str(length))
      with open("cycles.txt", 'a') as cycles:
        cycles.write(" length " + str(length) + "\n")
    else:
      for child in self.children:
        child.print_tree(length+1, prefix)


with open("cycles.txt", 'w') as cycles:
  cycles.write("\n" + 80*"=" + "\n")
  cycles.write("Testing Graph:\n")
  for i in range(0,11):
    root = Tree(i)
    root.find_cycles(i)
    root.print_tree(0,"")

with open("cycles.txt", 'r') as cycles:
  with open("cycles_clean.txt", 'w') as cyclesw:
    for line in cycles:
      if '9999' not in line:
        cyclesw.write(line)
