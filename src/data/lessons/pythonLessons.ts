import { Lesson } from '../../types';

export const pythonLessons: Lesson[] = [
  {
    id: 'py-intro',
    title: '1. Introdução e a Função print()',
    trackId: 'python',
    category: 'Fundamentos',
    description: 'Execute seu primeiro código em Python com a função nativa print().',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Bem-vindo ao Python!

Python é uma linguagem conhecida pela sua sintaxe limpa, expressiva e produtiva.
Para exibir mensagens na tela:

\`\`\`python
print("Olá, Mundo!")
\`\`\`

Não é necessário declarar classes ou colocar ponto e vírgula no final da linha.`,
    initialCode: `# Escreva sua primeira linha de Python:
# Imprima exatamente: Olá, DualDev!
`,
    solutionCode: `print("Olá, DualDev!")`,
    instructions: 'Use a função print() para exibir exatamente a mensagem "Olá, DualDev!".',
    hints: ['print("Olá, DualDev!")'],
    testCases: [
      {
        id: 't-py-intro',
        description: 'Imprimir "Olá, DualDev!"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Olá, DualDev!');
          return { passed: ok, message: ok ? 'Primeiro script executado!' : 'Esperado: "Olá, DualDev!"' };
        },
      },
    ],
  },
  {
    id: 'py-vars-types',
    title: '2. Variáveis e Tipagem Dinâmica',
    trackId: 'python',
    category: 'Fundamentos',
    description: 'Armazene números inteiros, decimais e textos sem declarar tipos manualmente.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Variáveis em Python

\`\`\`python
linguagem = "Python"
versao = 3.12
ativo = True
\`\`\``,
    initialCode: `nome = "DualDev"
ano = 2026
print(nome)
print(ano)
`,
    solutionCode: `nome = "DualDev"
ano = 2026
print(nome)
print(ano)
`,
    instructions: 'Imprima o nome e o ano armazenados nas variáveis.',
    hints: ['print(nome) e print(ano)'],
    testCases: [
      {
        id: 't-py-vars',
        description: 'Imprimir "DualDev" e "2026"',
        validator: (code, stdout) => {
          const ok = stdout.includes('DualDev') && stdout.includes('2026');
          return { passed: ok, message: ok ? 'Variáveis atribuídas com sucesso!' : 'Confira os valores impressos.' };
        },
      },
    ],
  },
  {
    id: 'py-input-output',
    title: '3. F-Strings (Interpolação)',
    trackId: 'python',
    category: 'Fundamentos',
    description: 'Formate textos dinâmicos de forma moderna e elegante.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### F-Strings no Python

\`\`\`python
usuario = "Ana"
pontos = 100
print(f"O jogador {usuario} possui {pontos} pontos.")
\`\`\``,
    initialCode: `dev = "Lucas"
nivel = 5
# Imprima: "Dev: Lucas | Nivel: 5" usando f-string
print(f"Dev: {dev} | Nivel: {nivel}")
`,
    solutionCode: `dev = "Lucas"
nivel = 5
print(f"Dev: {dev} | Nivel: {nivel}")
`,
    instructions: 'Formate a mensagem usando f-string para exibir "Dev: Lucas | Nivel: 5".',
    hints: ['print(f"Dev: {dev} | Nivel: {nivel}")'],
    testCases: [
      {
        id: 't-py-fstring',
        description: 'Exibir texto formatado com f-string',
        validator: (code, stdout) => {
          const ok = stdout.includes('Dev: Lucas | Nivel: 5');
          return { passed: ok, message: ok ? 'F-string executada com perfeição!' : 'Esperado: "Dev: Lucas | Nivel: 5"' };
        },
      },
    ],
  },
  {
    id: 'py-operators',
    title: '4. Operadores Matemáticos',
    trackId: 'python',
    category: 'Fundamentos',
    description: 'Execute operações aritméticas como soma, divisão e módulo.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Operadores Aritméticos

\`\`\`python
soma = 10 + 5       # 15
multi = 4 * 5       # 20
divisao = 20 / 4    # 5.0
modulo = 10 % 3     # 1
\`\`\``,
    initialCode: `a = 15
b = 3
print(f"Soma: {a + b}")
print(f"Multi: {a * b}")
`,
    solutionCode: `a = 15
b = 3
print(f"Soma: {a + b}")
print(f"Multi: {a * b}")
`,
    instructions: 'Calcule a soma (18) e multiplicação (45) e imprima.',
    hints: ['print(f"Soma: {a + b}")'],
    testCases: [
      {
        id: 't-py-ops',
        description: 'Imprimir "Soma: 18" e "Multi: 45"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma: 18') && stdout.includes('Multi: 45');
          return { passed: ok, message: ok ? 'Cálculos aritméticos corretos!' : 'Confira a soma e multiplicação.' };
        },
      },
    ],
  },
  {
    id: 'py-conditionals',
    title: '5. Condicionais com if e else',
    trackId: 'python',
    category: 'Controle de Fluxo',
    description: 'Tome decisões usando a indentação obrigatória de 4 espaços.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Condicionais no Python

\`\`\`python
nota = 8.5
if nota >= 7.0:
    print("Aprovado")
else:
    print("Reprovado")
\`\`\``,
    initialCode: `idade = 18
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
`,
    solutionCode: `idade = 18
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")
`,
    instructions: 'Verifique se a idade é maior ou igual a 18 e imprima "Maior de idade".',
    hints: ['if idade >= 18:'],
    testCases: [
      {
        id: 't-py-cond',
        description: 'Imprimir "Maior de idade"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Maior de idade');
          return { passed: ok, message: ok ? 'Condicional validada!' : 'Esperado: "Maior de idade"' };
        },
      },
    ],
  },
  {
    id: 'py-logical-ops',
    title: '6. Operadores Lógicos and, or, not',
    trackId: 'python',
    category: 'Controle de Fluxo',
    description: 'Combine múltiplas condições em uma única expressão lógica.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Operadores Lógicos

\`\`\`python
tem_saldo = True
conta_ativa = True

if tem_saldo and conta_ativa:
    print("Transação autorizada")
\`\`\``,
    initialCode: `tem_ingresso = True
tem_documento = True

if tem_ingresso and tem_documento:
    print("Entrada Permitida")
`,
    solutionCode: `tem_ingresso = True
tem_documento = True

if tem_ingresso and tem_documento:
    print("Entrada Permitida")
`,
    instructions: 'Use o operador and para verificar ambas as condições e imprimir "Entrada Permitida".',
    hints: ['if tem_ingresso and tem_documento:'],
    testCases: [
      {
        id: 't-py-log',
        description: 'Imprimir "Entrada Permitida"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Entrada Permitida');
          return { passed: ok, message: ok ? 'Operador lógico validado!' : 'Esperado: "Entrada Permitida"' };
        },
      },
    ],
  },
  {
    id: 'py-loops-while',
    title: '7. Laço de Repetição while',
    trackId: 'python',
    category: 'Controle de Fluxo',
    description: 'Repita blocos de código enquanto uma expressão for verdadeira.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Laço while

\`\`\`python
contador = 1
while contador <= 3:
    print(contador)
    contador += 1
\`\`\``,
    initialCode: `i = 1
while i <= 3:
    print(f"Contagem: {i}")
    i += 1
`,
    solutionCode: `i = 1
while i <= 3:
    print(f"Contagem: {i}")
    i += 1
`,
    instructions: 'Execute o laço while imprimindo "Contagem: 1", "Contagem: 2" e "Contagem: 3".',
    hints: ['i += 1 para incrementar a cada volta.'],
    testCases: [
      {
        id: 't-py-while',
        description: 'Imprimir contagens de 1 a 3',
        validator: (code, stdout) => {
          const ok = stdout.includes('Contagem: 1') && stdout.includes('Contagem: 3');
          return { passed: ok, message: ok ? 'While executado com sucesso!' : 'Confira a saída do loop.' };
        },
      },
    ],
  },
  {
    id: 'py-loops-range',
    title: '8. Laço for com range()',
    trackId: 'python',
    category: 'Controle de Fluxo',
    description: 'Gere sequências numéricas iteráveis com a função range().',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### A Função range()

\`\`\`python
for i in range(4): # Gera 0, 1, 2, 3
    print(i)
\`\`\``,
    initialCode: `for i in range(4):
    print(f"Item {i}")
`,
    solutionCode: `for i in range(4):
    print(f"Item {i}")
`,
    instructions: 'Itere de 0 a 3 usando range(4) e imprima cada item.',
    hints: ['for i in range(4):'],
    testCases: [
      {
        id: 't-py-range',
        description: 'Imprimir "Item 0" até "Item 3"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Item 0') && stdout.includes('Item 3');
          return { passed: ok, message: ok ? 'Laço for in range validado!' : 'Esperado itens de 0 a 3.' };
        },
      },
    ],
  },
  {
    id: 'py-lists',
    title: '9. Listas e Indexação',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Armazene múltiplos itens e acesse por índice numérico.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Listas em Python

\`\`\`python
frutas = ["Maçã", "Banana", "Laranja"]
print(frutas[0])  # Primeiro item
print(len(frutas)) # Total de itens
\`\`\``,
    initialCode: `cores = ["Vermelho", "Verde", "Azul"]
print(f"Primeira cor: {cores[0]}")
print(f"Total: {len(cores)}")
`,
    solutionCode: `cores = ["Vermelho", "Verde", "Azul"]
print(f"Primeira cor: {cores[0]}")
print(f"Total: {len(cores)}")
`,
    instructions: 'Imprima a primeira cor ("Vermelho") e o total de cores (3).',
    hints: ['cores[0] e len(cores)'],
    testCases: [
      {
        id: 't-py-lists',
        description: 'Imprimir primeira cor e total',
        validator: (code, stdout) => {
          const ok = stdout.includes('Primeira cor: Vermelho') && stdout.includes('Total: 3');
          return { passed: ok, message: ok ? 'Lista indexada com sucesso!' : 'Confira cores[0] e len(cores).' };
        },
      },
    ],
  },
  {
    id: 'py-lists-methods',
    title: '10. Métodos de Lista (append e sum)',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Adicione itens e some listas numeradas facilmente.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Manipulando Listas

\`\`\`python
valores = [10, 20]
valores.append(30) # Adiciona ao final
total = sum(valores) # 60
\`\`\``,
    initialCode: `pontos = [10, 20]
pontos.append(30)
print(f"Soma: {sum(pontos)}")
`,
    solutionCode: `pontos = [10, 20]
pontos.append(30)
print(f"Soma: {sum(pontos)}")
`,
    instructions: 'Adicione 30 à lista de pontos e imprima "Soma: 60".',
    hints: ['pontos.append(30)'],
    testCases: [
      {
        id: 't-py-append',
        description: 'Imprimir "Soma: 60"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma: 60');
          return { passed: ok, message: ok ? 'Métodos de lista aplicados!' : 'Esperado: "Soma: 60"' };
        },
      },
    ],
  },
  {
    id: 'py-lists-slicing',
    title: '11. Fatiamento de Listas (Slicing)',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Extraia sublistas com a sintaxe de fatiamento [inicio:fim].',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Slicing no Python

\`\`\`python
nums = [10, 20, 30, 40, 50]
primeiros = nums[0:2] # [10, 20]
\`\`\``,
    initialCode: `numeros = [1, 2, 3, 4, 5]
sub = numeros[0:3]
print(f"Sublista: {sub}")
`,
    solutionCode: `numeros = [1, 2, 3, 4, 5]
sub = numeros[0:3]
print(f"Sublista: {sub}")
`,
    instructions: 'Fatie os três primeiros números e imprima a sublista.',
    hints: ['numeros[0:3]'],
    testCases: [
      {
        id: 't-py-slice',
        description: 'Imprimir sublista [1, 2, 3]',
        validator: (code, stdout) => {
          const ok = stdout.includes('1') && stdout.includes('2') && stdout.includes('3');
          return { passed: ok, message: ok ? 'Fatiamento correto!' : 'Esperado primeiros 3 elementos.' };
        },
      },
    ],
  },
  {
    id: 'py-functions',
    title: '12. Funções com def e Parâmetros',
    trackId: 'python',
    category: 'Funções e Métodos',
    description: 'Crie blocos reutilizáveis de código com a palavra-chave def.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Funções em Python

\`\`\`python
def saudar(nome):
    print(f"Olá, {nome}!")

saudar("Maria")
\`\`\``,
    initialCode: `def dar_boas_vindas(usuario):
    print(f"Bem-vindo, {usuario}!")

dar_boas_vindas("Dev")
`,
    solutionCode: `def dar_boas_vindas(usuario):
    print(f"Bem-vindo, {usuario}!")

dar_boas_vindas("Dev")
`,
    instructions: 'Defina a função dar_boas_vindas e execute imprimindo "Bem-vindo, Dev!".',
    hints: ['def dar_boas_vindas(usuario):'],
    testCases: [
      {
        id: 't-py-func',
        description: 'Imprimir "Bem-vindo, Dev!"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Bem-vindo, Dev!');
          return { passed: ok, message: ok ? 'Função declarada e executada!' : 'Esperado: "Bem-vindo, Dev!"' };
        },
      },
    ],
  },
  {
    id: 'py-functions-return',
    title: '13. Funções com Retorno de Valor',
    trackId: 'python',
    category: 'Funções e Métodos',
    description: 'Retorne resultados de cálculos com a instrução return.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Retornando Valores

\`\`\`python
def multiplicar(a, b):
    return a * b

total = multiplicar(4, 5) # 20
\`\`\``,
    initialCode: `def somar(a, b):
    return a + b

res = somar(25, 15)
print(f"Resultado: {res}")
`,
    solutionCode: `def somar(a, b):
    return a + b

res = somar(25, 15)
print(f"Resultado: {res}")
`,
    instructions: 'Crie a função somar e imprima "Resultado: 40".',
    hints: ['return a + b'],
    testCases: [
      {
        id: 't-py-ret',
        description: 'Imprimir "Resultado: 40"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Resultado: 40');
          return { passed: ok, message: ok ? 'Retorno de função validado!' : 'Esperado: "Resultado: 40"' };
        },
      },
    ],
  },
  {
    id: 'py-strings-methods',
    title: '14. Métodos de String (upper e replace)',
    trackId: 'python',
    category: 'Manipulação de Dados',
    description: 'Manipule cadeias de caracteres com métodos nativos.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Strings em Python

\`\`\`python
texto = "python"
print(texto.upper()) # "PYTHON"
print(texto.replace("p", "P")) # "Python"
\`\`\``,
    initialCode: `titulo = "dualdev"
print(titulo.upper())
`,
    solutionCode: `titulo = "dualdev"
print(titulo.upper())
`,
    instructions: 'Converta a string para maiúsculas e imprima "DUALDEV".',
    hints: ['titulo.upper()'],
    testCases: [
      {
        id: 't-py-str',
        description: 'Imprimir "DUALDEV"',
        validator: (code, stdout) => {
          const ok = stdout.includes('DUALDEV');
          return { passed: ok, message: ok ? 'Método de string correto!' : 'Esperado: "DUALDEV"' };
        },
      },
    ],
  },
  {
    id: 'py-tuples',
    title: '15. Tuplas Imutáveis',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Armazene coleções protegidas contra modificações acidentais.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Tuplas em Python

Tuplas usam parênteses e não podem ser alteradas após criadas:

\`\`\`python
coordenadas = (10, 20)
print(coordenadas[0]) # 10
\`\`\``,
    initialCode: `posicao = (100, 200)
print(f"X: {posicao[0]} | Y: {posicao[1]}")
`,
    solutionCode: `posicao = (100, 200)
print(f"X: {posicao[0]} | Y: {posicao[1]}")
`,
    instructions: 'Acesse os elementos da tupla e imprima "X: 100 | Y: 200".',
    hints: ['posicao[0] e posicao[1]'],
    testCases: [
      {
        id: 't-py-tuple',
        description: 'Imprimir "X: 100 | Y: 200"',
        validator: (code, stdout) => {
          const ok = stdout.includes('X: 100') && stdout.includes('Y: 200');
          return { passed: ok, message: ok ? 'Tupla indexada com sucesso!' : 'Esperado "X: 100 | Y: 200".' };
        },
      },
    ],
  },
  {
    id: 'py-dicts',
    title: '16. Dicionários (Chave e Valor)',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Mapeie informações usando pares de chave e valor.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Dicionários em Python

\`\`\`python
aluno = { "nome": "Carlos", "curso": "Python" }
print(aluno["nome"]) # "Carlos"
\`\`\``,
    initialCode: `dev = { "nome": "Mariana", "nivel": "Senior" }
print(f"Nome: {dev['nome']}")
print(f"Nivel: {dev['nivel']}")
`,
    solutionCode: `dev = { "nome": "Mariana", "nivel": "Senior" }
print(f"Nome: {dev['nome']}")
print(f"Nivel: {dev['nivel']}")
`,
    instructions: 'Acesse as propriedades do dicionário e imprima Nome e Nivel.',
    hints: ['dev["nome"]'],
    testCases: [
      {
        id: 't-py-dict',
        description: 'Imprimir Nome: Mariana e Nivel: Senior',
        validator: (code, stdout) => {
          const ok = stdout.includes('Nome: Mariana') && stdout.includes('Nivel: Senior');
          return { passed: ok, message: ok ? 'Dicionário acessado com perfeição!' : 'Confira as chaves do dicionário.' };
        },
      },
    ],
  },
  {
    id: 'py-dicts-methods',
    title: '17. Métodos de Dicionário',
    trackId: 'python',
    category: 'Estruturas de Dados',
    description: 'Acesse chaves e valores com o método get().',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### O Método .get()

\`\`\`python
dados = { "porta": 3000 }
porta = dados.get("porta", 8080)
print(porta) # 3000
\`\`\``,
    initialCode: `config = { "host": "localhost", "port": 3000 }
print(f"Host: {config.get('host')}")
`,
    solutionCode: `config = { "host": "localhost", "port": 3000 }
print(f"Host: {config.get('host')}")
`,
    instructions: 'Use o método .get() para recuperar o host e imprimir "Host: localhost".',
    hints: ['config.get("host")'],
    testCases: [
      {
        id: 't-py-get',
        description: 'Imprimir "Host: localhost"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Host: localhost');
          return { passed: ok, message: ok ? 'Método get validado!' : 'Esperado: "Host: localhost"' };
        },
      },
    ],
  },
  {
    id: 'py-list-comprehension',
    title: '18. Compreensão de Listas',
    trackId: 'python',
    category: 'Manipulação de Dados',
    description: 'Gere novas listas de forma concisa e pythônica.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 9,
    theory: `### List Comprehension

\`\`\`python
nums = [1, 2, 3]
dobros = [n * 2 for n in nums] # [2, 4, 6]
\`\`\``,
    initialCode: `valores = [2, 4, 6]
quadrados = [x * x for x in valores]
print(f"Quadrados: {quadrados}")
`,
    solutionCode: `valores = [2, 4, 6]
quadrados = [x * x for x in valores]
print(f"Quadrados: {quadrados}")
`,
    instructions: 'Gere a lista com os quadrados [4, 16, 36] e imprima.',
    hints: ['[x * x for x in valores]'],
    testCases: [
      {
        id: 't-py-comp',
        description: 'Imprimir os quadrados 4, 16, 36',
        validator: (code, stdout) => {
          const ok = stdout.includes('4') && stdout.includes('16') && stdout.includes('36');
          return { passed: ok, message: ok ? 'List comprehension aplicada!' : 'Confira a lista resultante.' };
        },
      },
    ],
  },
  {
    id: 'py-lambdas',
    title: '19. Funções Lambda (Anônimas)',
    trackId: 'python',
    category: 'Funções e Métodos',
    description: 'Escreva funções curtas em uma única linha com lambda.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### Funções Lambda

\`\`\`python
triplo = lambda x: x * 3
print(triplo(5)) # 15
\`\`\``,
    initialCode: `dobro = lambda n: n * 2
resultado = dobro(7)
print(f"Dobro: {resultado}")
`,
    solutionCode: `dobro = lambda n: n * 2
resultado = dobro(7)
print(f"Dobro: {resultado}")
`,
    instructions: 'Defina a função lambda que dobra o número e imprima "Dobro: 14".',
    hints: ['lambda n: n * 2'],
    testCases: [
      {
        id: 't-py-lambda',
        description: 'Imprimir "Dobro: 14"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Dobro: 14');
          return { passed: ok, message: ok ? 'Expressão lambda correta!' : 'Esperado: "Dobro: 14"' };
        },
      },
    ],
  },
  {
    id: 'py-desafio-final',
    title: '20. Desafio Integrador: Processamento de Dados',
    trackId: 'python',
    category: 'Projeto Integrador',
    description: 'Combine listas, funções, condicionais e cálculos estatísticos.',
    difficulty: 'Avançado',
    xp: 100,
    estimatedMinutes: 12,
    theory: `### Desafio Final de Python

Aplique tudo o que aprendeu para criar uma função que analisa notas, calcula a média e determina o status de aprovação.`,
    initialCode: `def analisar_turma(notas):
    media = sum(notas) / len(notas)
    maior = max(notas)
    return media, maior

notas_finais = [8.0, 9.5, 9.5]
media_final, maior_nota = analisar_turma(notas_finais)

print(f"Media: {media_final:.1f}")
print(f"Maior: {maior_nota}")
if media_final >= 7.0:
    print("Status: Turma Aprovada")
`,
    solutionCode: `def analisar_turma(notas):
    media = sum(notas) / len(notas)
    maior = max(notas)
    return media, maior

notas_finais = [8.0, 9.5, 9.5]
media_final, maior_nota = analisar_turma(notas_finais)

print(f"Media: {media_final:.1f}")
print(f"Maior: {maior_nota}")
if media_final >= 7.0:
    print("Status: Turma Aprovada")
`,
    instructions: 'Execute a análise de turma imprimindo a média 9.0 e o status "Turma Aprovada".',
    hints: ['Verifique a saída Media: 9.0 e Status: Turma Aprovada.'],
    testCases: [
      {
        id: 't-py-final',
        description: 'Imprimir Media: 9.0 e Status: Turma Aprovada',
        validator: (code, stdout) => {
          const ok = stdout.includes('Media: 9.0') && stdout.includes('Turma Aprovada');
          return { passed: ok, message: ok ? 'Parabéns! Trilha de Python concluída com louvor!' : 'Esperado "Media: 9.0" e "Turma Aprovada".' };
        },
      },
    ],
  },
];
