import { Lesson } from '../../types';

export const jsLessons: Lesson[] = [
  {
    id: 'js-intro',
    title: '1. Introdução e console.log()',
    trackId: 'javascript',
    category: 'Fundamentos',
    description: 'Execute seu primeiro código em JavaScript no console do navegador.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Bem-vindo ao JavaScript!

JavaScript é a linguagem fundamental da Web moderna, executada em todos os navegadores.
Para imprimir mensagens no console:

\`\`\`javascript
console.log("Olá, Mundo!");
\`\`\``,
    initialCode: `// Imprima exatamente: Olá, DualDev!
`,
    solutionCode: `console.log("Olá, DualDev!");`,
    instructions: 'Use o método console.log() para imprimir "Olá, DualDev!".',
    hints: ['console.log("Olá, DualDev!");'],
    testCases: [
      {
        id: 't-js-intro',
        description: 'Imprimir "Olá, DualDev!"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Olá, DualDev!');
          return { passed: ok, message: ok ? 'Console log executado com sucesso!' : 'Esperado: "Olá, DualDev!"' };
        },
      },
    ],
  },
  {
    id: 'js-variables',
    title: '2. Declaração com const e let',
    trackId: 'javascript',
    category: 'Fundamentos',
    description: 'Aprenda as diferenças entre const (valores fixos) e let (mutáveis).',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### const vs let no ES6

- \`const\`: Para variáveis cujo valor não será reatribuído.
- \`let\`: Para variáveis que podem mudar ao longo do programa.

\`\`\`javascript
const plataforma = "DualDev";
let pontos = 100;
pontos = 150;
\`\`\``,
    initialCode: `const nome = "JavaScript";
let versao = 2026;
console.log(nome);
console.log(versao);
`,
    solutionCode: `const nome = "JavaScript";
let versao = 2026;
console.log(nome);
console.log(versao);
`,
    instructions: 'Imprima os valores de nome e versao.',
    hints: ['console.log(nome) e console.log(versao)'],
    testCases: [
      {
        id: 't-js-vars',
        description: 'Imprimir "JavaScript" e "2026"',
        validator: (code, stdout) => {
          const ok = stdout.includes('JavaScript') && stdout.includes('2026');
          return { passed: ok, message: ok ? 'Variáveis declaradas corretamente!' : 'Esperado "JavaScript" e "2026".' };
        },
      },
    ],
  },
  {
    id: 'js-template-literals',
    title: '3. Template Literals (Strings Dinâmicas)',
    trackId: 'javascript',
    category: 'Fundamentos',
    description: 'Interpole variáveis usando crases e a sintaxe ${expressao}.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Template Literals

\`\`\`javascript
const usuario = "Carlos";
const xp = 200;
console.log(\`O desenvolvedor \${usuario} acumulou \${xp} XP.\`);
\`\`\``,
    initialCode: `const linguagem = "JS";
const ano = 2026;
console.log(\`Trilha: \${linguagem} | Ano: \${ano}\`);
`,
    solutionCode: `const linguagem = "JS";
const ano = 2026;
console.log(\`Trilha: \${linguagem} | Ano: \${ano}\`);
`,
    instructions: 'Execute a interpolação exibindo "Trilha: JS | Ano: 2026".',
    hints: ['Use crases e ${variavel}'],
    testCases: [
      {
        id: 't-js-tpl',
        description: 'Imprimir "Trilha: JS | Ano: 2026"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Trilha: JS | Ano: 2026');
          return { passed: ok, message: ok ? 'Template literal validado!' : 'Esperado: "Trilha: JS | Ano: 2026"' };
        },
      },
    ],
  },
  {
    id: 'js-operators',
    title: '4. Operadores e Comparação Estrita (===)',
    trackId: 'javascript',
    category: 'Fundamentos',
    description: 'Entenda por que usamos === (estrito) em vez de == (frouxo).',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Comparação Estrita (===)

O operador \`===\` compara tanto o valor quanto o tipo primitivo, evitando coerções inesperadas:

\`\`\`javascript
console.log(5 === "5"); // false
console.log(5 === 5);   // true
\`\`\``,
    initialCode: `const a = 10;
const b = 10;
const saoIguais = a === b;
console.log(\`Iguais: \${saoIguais}\`);
`,
    solutionCode: `const a = 10;
const b = 10;
const saoIguais = a === b;
console.log(\`Iguais: \${saoIguais}\`);
`,
    instructions: 'Compare a e b com === e imprima "Iguais: true".',
    hints: ['a === b'],
    testCases: [
      {
        id: 't-js-strict',
        description: 'Imprimir "Iguais: true"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Iguais: true');
          return { passed: ok, message: ok ? 'Comparador estrito correto!' : 'Esperado: "Iguais: true"' };
        },
      },
    ],
  },
  {
    id: 'js-conditionals',
    title: '5. Condicionais com if e else',
    trackId: 'javascript',
    category: 'Controle de Fluxo',
    description: 'Controle o fluxo de execução com base em booleanos.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Estruturas Condicionais

\`\`\`javascript
const score = 85;
if (score >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
\`\`\``,
    initialCode: `const pontuacao = 90;
if (pontuacao >= 70) {
    console.log("Status: Aprovado");
} else {
    console.log("Status: Reprovado");
}
`,
    solutionCode: `const pontuacao = 90;
if (pontuacao >= 70) {
    console.log("Status: Aprovado");
} else {
    console.log("Status: Reprovado");
}
`,
    instructions: 'Verifique se pontuacao >= 70 e imprima "Status: Aprovado".',
    hints: ['if (pontuacao >= 70)'],
    testCases: [
      {
        id: 't-js-cond',
        description: 'Imprimir "Status: Aprovado"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Status: Aprovado');
          return { passed: ok, message: ok ? 'Condicional validada!' : 'Esperado: "Status: Aprovado"' };
        },
      },
    ],
  },
  {
    id: 'js-ternary',
    title: '6. Operador Ternário',
    trackId: 'javascript',
    category: 'Controle de Fluxo',
    description: 'Escreva decisões curtas de uma linha com a sintaxe condicao ? sim : nao.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Operador Ternário

\`\`\`javascript
const idade = 20;
const status = idade >= 18 ? "Adulto" : "Menor";
\`\`\``,
    initialCode: `const nivel = 12;
const badge = nivel >= 10 ? "Mestre" : "Aprendiz";
console.log(\`Badge: \${badge}\`);
`,
    solutionCode: `const nivel = 12;
const badge = nivel >= 10 ? "Mestre" : "Aprendiz";
console.log(\`Badge: \${badge}\`);
`,
    instructions: 'Use o operador ternário para atribuir e imprimir "Badge: Mestre".',
    hints: ['nivel >= 10 ? "Mestre" : "Aprendiz"'],
    testCases: [
      {
        id: 't-js-ternary',
        description: 'Imprimir "Badge: Mestre"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Badge: Mestre');
          return { passed: ok, message: ok ? 'Ternário executado com perfeição!' : 'Esperado: "Badge: Mestre"' };
        },
      },
    ],
  },
  {
    id: 'js-switch',
    title: '7. Estrutura switch',
    trackId: 'javascript',
    category: 'Controle de Fluxo',
    description: 'Selecione caminhos de execução baseado em um valor fixo.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### switch no JavaScript

\`\`\`javascript
const tema = "dark";
switch (tema) {
    case "dark":
        console.log("Tema Escuro");
        break;
    default:
        console.log("Tema Padrão");
}
\`\`\``,
    initialCode: `const acao = "play";
switch (acao) {
    case "play":
        console.log("Iniciando reproducao");
        break;
    default:
        console.log("Aguardando");
}
`,
    solutionCode: `const acao = "play";
switch (acao) {
    case "play":
        console.log("Iniciando reproducao");
        break;
    default:
        console.log("Aguardando");
}
`,
    instructions: 'Execute o switch para a ação "play" imprimindo "Iniciando reproducao".',
    hints: ['case "play":'],
    testCases: [
      {
        id: 't-js-switch',
        description: 'Imprimir "Iniciando reproducao"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Iniciando reproducao');
          return { passed: ok, message: ok ? 'Switch validado!' : 'Esperado: "Iniciando reproducao"' };
        },
      },
    ],
  },
  {
    id: 'js-loops-for',
    title: '8. Laço for Tradicional',
    trackId: 'javascript',
    category: 'Controle de Fluxo',
    description: 'Repita blocos com contador numérico.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Laço for

\`\`\`javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
\`\`\``,
    initialCode: `for (let i = 1; i <= 3; i++) {
    console.log(\`Passo \${i}\`);
}
`,
    solutionCode: `for (let i = 1; i <= 3; i++) {
    console.log(\`Passo \${i}\`);
}
`,
    instructions: 'Imprima "Passo 1", "Passo 2" e "Passo 3".',
    hints: ['for (let i = 1; i <= 3; i++)'],
    testCases: [
      {
        id: 't-js-for',
        description: 'Imprimir de Passo 1 a Passo 3',
        validator: (code, stdout) => {
          const ok = stdout.includes('Passo 1') && stdout.includes('Passo 3');
          return { passed: ok, message: ok ? 'Laço for concluído!' : 'Confira a sequência de passos.' };
        },
      },
    ],
  },
  {
    id: 'js-loops-while',
    title: '9. Laço while',
    trackId: 'javascript',
    category: 'Controle de Fluxo',
    description: 'Execute enquanto a condição for avaliada como verdadeira.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Laço while

\`\`\`javascript
let c = 0;
while (c < 3) {
    console.log(c);
    c++;
}
\`\`\``,
    initialCode: `let cont = 1;
while (cont <= 3) {
    console.log(\`Volta \${cont}\`);
    cont++;
}
`,
    solutionCode: `let cont = 1;
while (cont <= 3) {
    console.log(\`Volta \${cont}\`);
    cont++;
}
`,
    instructions: 'Execute o loop while imprimindo de "Volta 1" a "Volta 3".',
    hints: ['cont++'],
    testCases: [
      {
        id: 't-js-while',
        description: 'Imprimir "Volta 1" até "Volta 3"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Volta 1') && stdout.includes('Volta 3');
          return { passed: ok, message: ok ? 'While executado com sucesso!' : 'Confira os valores do contador.' };
        },
      },
    ],
  },
  {
    id: 'js-functions',
    title: '10. Funções Tradicionais (function)',
    trackId: 'javascript',
    category: 'Funções e Métodos',
    description: 'Crie funções reutilizáveis com parâmetros e return.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Declaração de Funções

\`\`\`javascript
function calcularArea(largura, altura) {
    return largura * altura;
}
\`\`\``,
    initialCode: `function somar(a, b) {
    return a + b;
}
const resultado = somar(15, 25);
console.log(\`Soma: \${resultado}\`);
`,
    solutionCode: `function somar(a, b) {
    return a + b;
}
const resultado = somar(15, 25);
console.log(\`Soma: \${resultado}\`);
`,
    instructions: 'Execute a função somar e imprima "Soma: 40".',
    hints: ['somar(15, 25)'],
    testCases: [
      {
        id: 't-js-func',
        description: 'Imprimir "Soma: 40"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma: 40');
          return { passed: ok, message: ok ? 'Função validada!' : 'Esperado: "Soma: 40"' };
        },
      },
    ],
  },
  {
    id: 'js-arrow-functions',
    title: '11. Arrow Functions Modernas',
    trackId: 'javascript',
    category: 'Funções e Métodos',
    description: 'Sintaxe concisa para funções usando a flecha =>.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Arrow Functions

\`\`\`javascript
const dobrar = (n) => n * 2;
console.log(dobrar(8)); // 16
\`\`\``,
    initialCode: `const triplo = (x) => x * 3;
console.log(\`Triplo: \${triplo(7)}\`);
`,
    solutionCode: `const triplo = (x) => x * 3;
console.log(\`Triplo: \${triplo(7)}\`);
`,
    instructions: 'Defina a arrow function triplo e imprima "Triplo: 21".',
    hints: ['(x) => x * 3'],
    testCases: [
      {
        id: 't-js-arrow',
        description: 'Imprimir "Triplo: 21"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Triplo: 21');
          return { passed: ok, message: ok ? 'Arrow function executada!' : 'Esperado: "Triplo: 21"' };
        },
      },
    ],
  },
  {
    id: 'js-arrays',
    title: '12. Arrays e Propriedade length',
    trackId: 'javascript',
    category: 'Estruturas de Dados',
    description: 'Armazene e indexe listas de dados ordenadas.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Arrays no JavaScript

\`\`\`javascript
const tecnologias = ["React", "Node", "Vite"];
console.log(tecnologias[0]); // "React"
console.log(tecnologias.length); // 3
\`\`\``,
    initialCode: `const linguagens = ["Java", "Python", "JavaScript"];
console.log(\`Primeira: \${linguagens[0]}\`);
console.log(\`Total: \${linguagens.length}\`);
`,
    solutionCode: `const linguagens = ["Java", "Python", "JavaScript"];
console.log(\`Primeira: \${linguagens[0]}\`);
console.log(\`Total: \${linguagens.length}\`);
`,
    instructions: 'Acesse o primeiro item ("Java") e o tamanho total (3).',
    hints: ['linguagens[0] e linguagens.length'],
    testCases: [
      {
        id: 't-js-arr',
        description: 'Imprimir "Primeira: Java" e "Total: 3"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Primeira: Java') && stdout.includes('Total: 3');
          return { passed: ok, message: ok ? 'Array indexado com sucesso!' : 'Confira o primeiro item e total.' };
        },
      },
    ],
  },
  {
    id: 'js-array-push-pop',
    title: '13. Métodos push e pop',
    trackId: 'javascript',
    category: 'Estruturas de Dados',
    description: 'Adicione e remova itens no final de um array.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Mutando Arrays

\`\`\`javascript
const fila = [1, 2];
fila.push(3); // Adiciona 3
\`\`\``,
    initialCode: `const tarefas = ["Estudar", "Praticar"];
tarefas.push("Codificar");
console.log(\`Total de tarefas: \${tarefas.length}\`);
`,
    solutionCode: `const tarefas = ["Estudar", "Praticar"];
tarefas.push("Codificar");
console.log(\`Total de tarefas: \${tarefas.length}\`);
`,
    instructions: 'Adicione "Codificar" ao array e imprima "Total de tarefas: 3".',
    hints: ['tarefas.push("Codificar")'],
    testCases: [
      {
        id: 't-js-push',
        description: 'Imprimir "Total de tarefas: 3"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Total de tarefas: 3');
          return { passed: ok, message: ok ? 'Método push validado!' : 'Esperado: "Total de tarefas: 3"' };
        },
      },
    ],
  },
  {
    id: 'js-array-methods-map',
    title: '14. Transformação com array.map()',
    trackId: 'javascript',
    category: 'Programação Funcional',
    description: 'Transforme cada elemento gerando um novo array imutável.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### O Método map()

\`\`\`javascript
const nums = [1, 2, 3];
const dobrados = nums.map(x => x * 2); // [2, 4, 6]
\`\`\``,
    initialCode: `const precos = [10, 20, 30];
const comDesconto = precos.map(p => p * 0.9);
console.log(comDesconto[0]); // 9
console.log(comDesconto[1]); // 18
`,
    solutionCode: `const precos = [10, 20, 30];
const comDesconto = precos.map(p => p * 0.9);
console.log(comDesconto[0]);
console.log(comDesconto[1]);
`,
    instructions: 'Aplique 10% de desconto com .map e imprima os valores.',
    hints: ['precos.map(p => p * 0.9)'],
    testCases: [
      {
        id: 't-js-map',
        description: 'Imprimir 9 e 18',
        validator: (code, stdout) => {
          const ok = stdout.includes('9') && stdout.includes('18');
          return { passed: ok, message: ok ? 'Transformação com .map bem-sucedida!' : 'Esperado valores 9 e 18.' };
        },
      },
    ],
  },
  {
    id: 'js-array-methods-filter',
    title: '15. Filtragem com array.filter()',
    trackId: 'javascript',
    category: 'Programação Funcional',
    description: 'Filtre elementos que satisfazem um predicado booleano.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### O Método filter()

\`\`\`javascript
const idades = [12, 18, 25, 14];
const maiores = idades.filter(i => i >= 18); // [18, 25]
\`\`\``,
    initialCode: `const notas = [5.5, 8.0, 9.5, 6.0];
const aprovados = notas.filter(n => n >= 7.0);
console.log(\`Aprovados: \${aprovados.length}\`);
`,
    solutionCode: `const notas = [5.5, 8.0, 9.5, 6.0];
const aprovados = notas.filter(n => n >= 7.0);
console.log(\`Aprovados: \${aprovados.length}\`);
`,
    instructions: 'Filtre as notas maiores ou iguais a 7.0 e imprima "Aprovados: 2".',
    hints: ['notas.filter(n => n >= 7.0)'],
    testCases: [
      {
        id: 't-js-filter',
        description: 'Imprimir "Aprovados: 2"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Aprovados: 2');
          return { passed: ok, message: ok ? 'Filtro funcional validado!' : 'Esperado: "Aprovados: 2"' };
        },
      },
    ],
  },
  {
    id: 'js-array-methods-reduce',
    title: '16. Redução com array.reduce()',
    trackId: 'javascript',
    category: 'Programação Funcional',
    description: 'Acumule uma coleção em um único valor final.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 9,
    theory: `### O Método reduce()

\`\`\`javascript
const valores = [10, 20, 30];
const total = valores.reduce((acc, curr) => acc + curr, 0); // 60
\`\`\``,
    initialCode: `const precos = [10, 20, 30];
const total = precos.reduce((acc, v) => acc + v, 0);
console.log(\`Total: \${total}\`);
`,
    solutionCode: `const precos = [10, 20, 30];
const total = precos.reduce((acc, v) => acc + v, 0);
console.log(\`Total: \${total}\`);
`,
    instructions: 'Some os preços com .reduce e imprima "Total: 60".',
    hints: ['precos.reduce((acc, v) => acc + v, 0)'],
    testCases: [
      {
        id: 't-js-reduce',
        description: 'Imprimir "Total: 60"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Total: 60');
          return { passed: ok, message: ok ? 'Reduce executado com perfeição!' : 'Esperado: "Total: 60"' };
        },
      },
    ],
  },
  {
    id: 'js-objects',
    title: '17. Objetos Literais',
    trackId: 'javascript',
    category: 'Estruturas de Dados',
    description: 'Estruture dados complexos com propriedades nomeadas.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Objetos Literais

\`\`\`javascript
const curso = {
    titulo: "JavaScript",
    aulas: 20
};
console.log(curso.titulo);
\`\`\``,
    initialCode: `const dev = {
    nome: "Arthur",
    stack: "Frontend"
};
console.log(\`Dev: \${dev.nome} | Area: \${dev.stack}\`);
`,
    solutionCode: `const dev = {
    nome: "Arthur",
    stack: "Frontend"
};
console.log(\`Dev: \${dev.nome} | Area: \${dev.stack}\`);
`,
    instructions: 'Acesse as propriedades do objeto e imprima "Dev: Arthur | Area: Frontend".',
    hints: ['dev.nome e dev.stack'],
    testCases: [
      {
        id: 't-js-obj',
        description: 'Imprimir "Dev: Arthur | Area: Frontend"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Dev: Arthur | Area: Frontend');
          return { passed: ok, message: ok ? 'Objeto acessado corretamente!' : 'Esperado: "Dev: Arthur | Area: Frontend"' };
        },
      },
    ],
  },
  {
    id: 'js-destructuring',
    title: '18. Desestruturação (Destructuring)',
    trackId: 'javascript',
    category: 'Manipulação de Dados',
    description: 'Extraia dados de objetos e arrays em variáveis diretas.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### Destructuring no ES6

\`\`\`javascript
const config = { host: "localhost", port: 3000 };
const { host, port } = config;
\`\`\``,
    initialCode: `const config = { host: "localhost", porta: 3000 };
const { host, porta } = config;
console.log(\`Host: \${host} na porta \${porta}\`);
`,
    solutionCode: `const config = { host: "localhost", porta: 3000 };
const { host, porta } = config;
console.log(\`Host: \${host} na porta \${porta}\`);
`,
    instructions: 'Desestruture host e porta e imprima "Host: localhost na porta 3000".',
    hints: ['const { host, porta } = config;'],
    testCases: [
      {
        id: 't-js-destruct',
        description: 'Imprimir "Host: localhost na porta 3000"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Host: localhost na porta 3000');
          return { passed: ok, message: ok ? 'Desestruturação aplicada!' : 'Esperado mensagem com host e porta.' };
        },
      },
    ],
  },
  {
    id: 'js-spread-operator',
    title: '19. Operador Spread (...)',
    trackId: 'javascript',
    category: 'Manipulação de Dados',
    description: 'Clone e combine coleções e objetos facilmente.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### O Operador Spread

\`\`\`javascript
const a = [1, 2];
const b = [...a, 3, 4]; // [1, 2, 3, 4]
\`\`\``,
    initialCode: `const base = ["HTML", "CSS"];
const fullstack = [...base, "JS"];
console.log(\`Stack: \${fullstack.join(", ")}\`);
`,
    solutionCode: `const base = ["HTML", "CSS"];
const fullstack = [...base, "JS"];
console.log(\`Stack: \${fullstack.join(", ")}\`);
`,
    instructions: 'Espalhe base no array fullstack e imprima "Stack: HTML, CSS, JS".',
    hints: ['[...base, "JS"]'],
    testCases: [
      {
        id: 't-js-spread',
        description: 'Imprimir "Stack: HTML, CSS, JS"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Stack: HTML, CSS, JS');
          return { passed: ok, message: ok ? 'Operador spread validado!' : 'Esperado: "Stack: HTML, CSS, JS"' };
        },
      },
    ],
  },
  {
    id: 'js-desafio-final',
    title: '20. Desafio Integrador: Pipeline de Dados',
    trackId: 'javascript',
    category: 'Projeto Integrador',
    description: 'Combine filter, map e reduce para processar uma lista de produtos.',
    difficulty: 'Avançado',
    xp: 100,
    estimatedMinutes: 12,
    theory: `### Desafio Final de JavaScript

Você aprendeu tipos, template literals, funções, objetos e programação funcional.
Agora processe um carrinho de compras filtrando produtos ativos e somando seus valores!`,
    initialCode: `const produtos = [
    { nome: "Teclado", preco: 150, ativo: true },
    { nome: "Mouse", preco: 80, ativo: true },
    { nome: "Monitor", preco: 900, ativo: false }
];

const totalAtivos = produtos
    .filter(p => p.ativo)
    .reduce((acc, p) => acc + p.preco, 0);

console.log(\`Total ativo: \${totalAtivos}\`);
`,
    solutionCode: `const produtos = [
    { nome: "Teclado", preco: 150, ativo: true },
    { nome: "Mouse", preco: 80, ativo: true },
    { nome: "Monitor", preco: 900, ativo: false }
];

const totalAtivos = produtos
    .filter(p => p.ativo)
    .reduce((acc, p) => acc + p.preco, 0);

console.log(\`Total ativo: \${totalAtivos}\`);
`,
    instructions: 'Filtre os produtos ativos e some seus preços (150 + 80 = 230), imprimindo "Total ativo: 230".',
    hints: ['produtos.filter(p => p.ativo).reduce(...)'],
    testCases: [
      {
        id: 't-js-final',
        description: 'Imprimir "Total ativo: 230"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Total ativo: 230');
          return { passed: ok, message: ok ? 'Parabéns! Trilha de JavaScript concluída com excelência!' : 'Esperado: "Total ativo: 230"' };
        },
      },
    ],
  },
];
