vertices = [
  [0],
  [2,15,14,9], #1
  [1,12,6,3], #2
  [2,4,8,13], #3
  [3,12,14,5], #4
  [4,13,9,6], #5
  [5,2,10,7], #6
  [6,14,8,11], #7
  [7,10,3,9], #8
  [8,1,11,5], #9
  [8,6,15,12], #10
  [9,12,13,7], #11
  [2,4,10,11], #12
  [3,5,15,11], #13
  [4,15,1,7], #14
  [10,14,13,1], #15
]

dist = [[0]*16 for _ in range(16)]

for v in vertices:
  for i in range(0,16):
    if vertices.index(v) == i:
      continue
    if i in v:
      dist[int(vertices.index(v))][i] = 1
      print("dist[" + str(vertices.index(v)) + "][" + str(i) + "] = 1")
      continue
    for j in v:
      print(str(v) + "->" + str(vertices[j]))
      if i in vertices[j]:
        print("i (" + str(i) + ") in vertices[" + str(j) + "]")
        dist[int(vertices.index(v))][i] = 2
        print("dist[" + str(vertices.index(v)) + "][" + str(i) + "] = 2")
        break
    if dist[vertices.index(v)][i] == 0:
      print("dist[" + str(vertices.index(v)) + "][" + str(i) + "] = 9")
      dist[int(vertices.index(v))][i] = 9
  print(dist)

dist[0] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for i in range(16):
  dist[i][0] = i

print(dist)

with open('2steps.txt', 'w') as wr:
  wr.write(str(dist) + "\n")
  for line in dist:
    for item in line:
      wr.write(str(item) + " & ")
    wr.write("\\\\\n")