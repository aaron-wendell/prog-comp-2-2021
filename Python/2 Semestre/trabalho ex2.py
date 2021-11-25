def moda(vetor):
    vet = {}
    m = []
    for i in range(len(vetor)):
        vet[i] = vet.get(i, 0) + 1
        m = max(set(vetor), key=vetor.count)
        
    if len(vet) == 1:
        print(m)
    elif len(vet) > 1:
        print('Não há moda porque há mais de uma moda')
    else:
        print("Não há moda pois todos os valores só aparecem uma vez")


vetor = []
tamanho = int(input('Digite o numero de elementos do vetor: '))
while tamanho<2:
  tamanho = int(input('Digite o numero de elementos do vetor, seja ele ao menos igual a 2: '))
for i in range(tamanho):
    x = int(input('Digite um numero para o vetor: '))
    vetor.append(x)

moda(vetor)
