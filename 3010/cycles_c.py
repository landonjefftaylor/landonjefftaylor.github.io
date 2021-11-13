import os

a_outs = [[6,5,4],
          [0,6,3],
          [1,0,4],
          [2,0,5],
          [3,1,6],
          [2,1,4],
          [5,3,2]]

class Tree:

  def __init__(self, data):
    self.children = []
    self.parents = []
    self.data = data

  def find_paths_back(self, target):
    for next in a_outs[self.data]:
      # print(next)
      if next not in self.parents:
        child = Tree(next)
        child.parents = self.parents
        child.parents.append(self.data)
        self.children.append(child)
        if child.data != target:
          child.find_paths_back(target)

  def print_tree(self, length, prefix):
    prefix = prefix + " " + str(self.data)
    if len(self.children) == 0:
      print(prefix, end=" ")
      with open("cycles_c.txt", 'a') as cycles:
        cycles.write(prefix)
      print(" length " + str(length))
      with open("cycles_c.txt", 'a') as cycles:
        cycles.write(" length " + str(length) + "\n")
    else:
      for child in self.children:
        child.print_tree(length+1, prefix)
    
    

with open("cycles_c.txt", 'a') as cycles:
  cycles.write("\n" + 80*"=" + "\n")
  cycles.write("Testing Graph C:\n")
  for i in range(0,7):
    root = Tree(i)
    root.find_paths_back(i)
    root.print_tree(0,"")

