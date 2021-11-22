def moda(vetor):
    vet = {}
    for i in range(len(vetor)):
        vet[i] = vet.get(i, 0) + 1
        m = max(set(vetor), key=vetor.count) 
    maximo = 0       
    for j, k in vet.items():
        if k > maximo:
            maximo = j
    if maximo == 1:
        print("Não há moda pois todos os valores só aparecem uma vez")
    elif vet.values().count (maximo) > 1:
        print('Não há moda porque há mais de uma moda')
    else:
        print(m)


vetor = []
tamanho = int(input('Digite o numero de elementos do vetor: '))
for i in range(tamanho):
    x = int(input('Digite um numero para o vetor: '))
    vetor.append(x)

moda(vetor)


counts = {}
  for item in thelist:
    counts [item] = counts.get (item, 0) + 1
  maxcount = 0
  maxitem = None
  for k, v in counts.items ():
    if v > maxcount:
      maxitem = k
      maxcount = v
  if maxcount == 1:
    print "All values only appear once"
  elif counts.values().count (maxcount) > 1:
    print "List has multiple modes"
  else:
    print "Mode of list:", maxitem