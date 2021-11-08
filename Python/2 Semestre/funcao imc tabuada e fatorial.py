def tabuada(num):
    tab = 0
    if num>0 and num<10:
        print('Tabuada do '+ num)
        for i in range(1, 11, 1):
            tab = num * i
            print(num, 'x', 1, tab, '\n')

escolha = int(input('Escolha um numero da lista: \n1. Tabuada\n2. IMC\n3. Fatorial\n-1. Sair'))

