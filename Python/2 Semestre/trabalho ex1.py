# Aaron Wendell 23736 Engenharia de Software
def valorp(vet, prestacao, atraso):
    soma = 0
    if atraso == 0 and prestacao > 0:
        valor = prestacao
        vet.append(valor)
    elif atraso > 0 and prestacao > 0:
        valor = (prestacao*1.03) + (atraso*0.001)
        print(f"Valor da prestação= {valor:.2f}")
        vet.append(valor)
    elif prestacao == 0:
        for i in range(len(vet)):
            print(f'Prestacao {i+1}: {vet[i]}')
            soma += vet[i]
        print('Transações concluídas')
        print('Numero de prestações:', len(vet))
        print('Valor total das prestações pagas:', soma)
    
vet = []
vet2 = []

prestacao = float(input('Digite o valor da prestacao: '))
while prestacao != 0:
    atraso = int(input('Digite os dias em atraso: '))
    valorp(vet, prestacao, atraso)
    while atraso < 0:
        atraso = int(input('Valor invalido. Digite os dias em atraso: '))
    prestacao = float(input('Digite o valor da prestacao: '))

valorp(vet, prestacao, atraso)
