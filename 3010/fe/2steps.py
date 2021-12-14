vertices = [
  [0],
  [2,15,14,9], #1
  [1,12,15,3], #2
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

dist = [[0] * 16] * 16

for v in vertices:
  for i in range(1,16):
    if i in v:
      dist[vertices.index(v)][i] = 1
      continue
    for j in vertices[i]:
      if i in vertices[j]:
        dist[vertices.index(v)][i] = 2
        break
    if dist[vertices.index(v)][i] == 0:
      dist[vertices.index(v)][i] = 9

print(dist)

with open('2steps.txt', 'w') as wr:
  wr.write(str(dist))