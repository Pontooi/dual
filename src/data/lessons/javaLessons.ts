import { Lesson } from '../../types';

export const javaLessons: Lesson[] = [
  {
    id: 'java-intro',
    title: '1. Introdução e Saída no Console',
    trackId: 'java',
    category: 'Fundamentos',
    description: 'Execute seu primeiro código em Java utilizando System.out.println.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Bem-vindo ao Java Moderno!

Java é uma linguagem orientada a objetos, fortemente tipada e com alta performance corporativa.
Para imprimir dados na saída padrão do console, utilizamos:

\`\`\`java
System.out.println("Texto a ser exibido");
\`\`\`

- \`System\`: Classe essencial com utilitários de sistema.
- \`out\`: Objeto de fluxo de saída padrão.
- \`println\`: Imprime a mensagem e salta para a próxima linha.
- Toda linha de instrução deve terminar com ponto e vírgula (\`;\`).`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Imprima exatamente: Olá, DualDev!
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, DualDev!");
    }
}`,
    instructions: 'Complete o método main para exibir exatamente a mensagem "Olá, DualDev!" no console.',
    hints: ['Use System.out.println("Olá, DualDev!");', 'Lembre-se de colocar ponto e vírgula no final.'],
    testCases: [
      {
        id: 't-intro',
        description: 'Imprimir a mensagem "Olá, DualDev!"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Olá, DualDev!');
          return { passed: ok, message: ok ? 'Mensagem exibida com perfeição!' : 'Saída esperada: "Olá, DualDev!"' };
        },
      },
    ],
  },
  {
    id: 'java-class-main',
    title: '2. Estrutura de Classe e Método main',
    trackId: 'java',
    category: 'Estrutura Básica',
    description: 'Compreenda a anatomia da classe Java e seu ponto de entrada.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### A Estrutura de um Programa Java

Todo código em Java vive dentro de uma classe. O ponto de entrada da aplicação é o método:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // Código executado primeiro
    }
}
\`\`\`

- \`public\`: O método é acessível de qualquer lugar.
- \`static\`: Não requer instanciar um objeto para ser chamado.
- \`void\`: Não retorna valor.
- \`String[] args\`: Vetor de argumentos de linha de comando.`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java Academy");
        System.out.println("Versão: 21");
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java Academy");
        System.out.println("Versão: 21");
    }
}`,
    instructions: 'Mantenha a classe Main e execute o programa exibindo as duas linhas.',
    hints: ['Clique em Executar ou Verificar para testar.'],
    testCases: [
      {
        id: 't-main-1',
        description: 'Exibir "Java Academy" e "Versão: 21"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Java Academy') && stdout.includes('Versão: 21');
          return { passed: ok, message: ok ? 'Estrutura válida!' : 'Certifique-se de imprimir ambas as linhas.' };
        },
      },
    ],
  },
  {
    id: 'java-variables',
    title: '3. Variáveis e Tipos Primitivos',
    trackId: 'java',
    category: 'Fundamentos',
    description: 'Armazene dados em variáveis com tipos int, double e boolean.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Tipos Primitivos em Java

Java exige que você declare o tipo antes do nome da variável:

\`\`\`java
int idade = 25;           // Números inteiros
double preco = 19.90;     // Números decimais de dupla precisão
boolean ativo = true;     // Verdadeiro ou falso
String nome = "Dev";      // Texto (cadeia de caracteres)
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int idade = 20;
        double nota = 9.5;
        // Imprima: "Idade: " + idade e "Nota: " + nota
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int idade = 20;
        double nota = 9.5;
        System.out.println("Idade: " + idade);
        System.out.println("Nota: " + nota);
    }
}`,
    instructions: 'Imprima "Idade: 20" e "Nota: 9.5" concatenando as variáveis.',
    hints: ['Use System.out.println("Idade: " + idade);'],
    testCases: [
      {
        id: 't-vars',
        description: 'Imprimir Idade e Nota com as variáveis',
        validator: (code, stdout) => {
          const ok = stdout.includes('Idade: 20') && stdout.includes('Nota: 9.5');
          return { passed: ok, message: ok ? 'Tipos declarados e impressos corretamente!' : 'Saída deve conter "Idade: 20" e "Nota: 9.5".' };
        },
      },
    ],
  },
  {
    id: 'java-operators',
    title: '4. Operadores Aritméticos',
    trackId: 'java',
    category: 'Fundamentos',
    description: 'Realize cálculos de soma, subtração, multiplicação e divisão.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Operações Matemáticas

- Adição: \`+\`
- Subtração: \`-\`
- Multiplicação: \`*\`
- Divisão: \`/\`
- Resto (módulo): \`%\`

\`\`\`java
int a = 15;
int b = 5;
int soma = a + b; // 20
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int x = 20;
        int y = 4;
        // Calcule e imprima:
        // "Soma: " + (x + y)
        // "Multiplicacao: " + (x * y)
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int x = 20;
        int y = 4;
        System.out.println("Soma: " + (x + y));
        System.out.println("Multiplicacao: " + (x * y));
    }
}`,
    instructions: 'Calcule a soma (24) e a multiplicação (80) e imprima no formato solicitado.',
    hints: ['Coloque (x + y) entre parênteses para evitar concatenação de texto.'],
    testCases: [
      {
        id: 't-ops',
        description: 'Imprimir "Soma: 24" e "Multiplicacao: 80"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma: 24') && stdout.includes('Multiplicacao: 80');
          return { passed: ok, message: ok ? 'Operações aritméticas perfeitas!' : 'Verifique os cálculos.' };
        },
      },
    ],
  },
  {
    id: 'java-conditionals',
    title: '5. Condicionais com if e else',
    trackId: 'java',
    category: 'Controle de Fluxo',
    description: 'Tome decisões com estruturas lógicas baseadas em booleanos.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Decisões no Código

\`\`\`java
int nota = 8;
if (nota >= 7) {
    System.out.println("Aprovado");
} else {
    System.out.println("Recuperação");
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int pontos = 85;
        // Se pontos >= 70, imprima "Aprovado"
        // Senao, imprima "Reprovado"
        
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int pontos = 85;
        if (pontos >= 70) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }
    }
}`,
    instructions: 'Verifique se pontos é maior ou igual a 70 e imprima "Aprovado".',
    hints: ['Use if (pontos >= 70) { ... } else { ... }'],
    testCases: [
      {
        id: 't-cond',
        description: 'Imprimir "Aprovado" para 85 pontos',
        validator: (code, stdout) => {
          const ok = stdout.includes('Aprovado');
          return { passed: ok, message: ok ? 'Condicional validada!' : 'Esperado: "Aprovado"' };
        },
      },
    ],
  },
  {
    id: 'java-switch',
    title: '6. Seleção com switch-case',
    trackId: 'java',
    category: 'Controle de Fluxo',
    description: 'Substitua múltiplos ifs por uma estrutura switch organizada.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### A Estrutura switch

\`\`\`java
int dia = 2;
switch (dia) {
    case 1:
        System.out.println("Domingo");
        break;
    case 2:
        System.out.println("Segunda");
        break;
    default:
        System.out.println("Outro dia");
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int opcao = 1;
        // Com switch(opcao):
        // case 1 -> "Iniciar Jogo"
        // case 2 -> "Configuracoes"
        switch (opcao) {
            case 1:
                System.out.println("Iniciar Jogo");
                break;
            default:
                System.out.println("Opcao Invalida");
        }
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int opcao = 1;
        switch (opcao) {
            case 1:
                System.out.println("Iniciar Jogo");
                break;
            default:
                System.out.println("Opcao Invalida");
        }
    }
}`,
    instructions: 'Execute o switch para a opção 1 imprimindo "Iniciar Jogo".',
    hints: ['Verifique o case 1 e o comando break.'],
    testCases: [
      {
        id: 't-switch',
        description: 'Imprimir "Iniciar Jogo"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Iniciar Jogo');
          return { passed: ok, message: ok ? 'Switch executado!' : 'Esperado: "Iniciar Jogo"' };
        },
      },
    ],
  },
  {
    id: 'java-loops-while',
    title: '7. Laço de Repetição while',
    trackId: 'java',
    category: 'Controle de Fluxo',
    description: 'Repita instruções enquanto uma condição permanecer verdadeira.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Laço while

\`\`\`java
int contador = 1;
while (contador <= 3) {
    System.out.println("Contagem: " + contador);
    contador++;
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int i = 1;
        // Imprima os numeros de 1 a 3 com while
        while (i <= 3) {
            System.out.println(i);
            i++;
        }
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i++;
        }
    }
}`,
    instructions: 'Execute o laço while imprimindo os números 1, 2 e 3.',
    hints: ['Incremente i++ a cada repetição.'],
    testCases: [
      {
        id: 't-while',
        description: 'Imprimir 1, 2 e 3 sequencialmente',
        validator: (code, stdout) => {
          const ok = stdout.includes('1') && stdout.includes('2') && stdout.includes('3');
          return { passed: ok, message: ok ? 'While concluído!' : 'Verifique os valores impressos.' };
        },
      },
    ],
  },
  {
    id: 'java-loops-for',
    title: '8. Laço de Repetição for',
    trackId: 'java',
    category: 'Controle de Fluxo',
    description: 'Utilize o laço for clássico com contador, condição e incremento.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 7,
    theory: `### Laço for Clássico

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println("Indice: " + i);
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Crie um loop for de 0 ate 4 (inclusive)
        // Imprima: "Passo " + i
        for (int i = 0; i < 5; i++) {
            System.out.println("Passo " + i);
        }
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println("Passo " + i);
        }
    }
}`,
    instructions: 'Execute o for imprimindo de "Passo 0" até "Passo 4".',
    hints: ['for (int i = 0; i < 5; i++)'],
    testCases: [
      {
        id: 't-for',
        description: 'Imprimir passos de 0 a 4',
        validator: (code, stdout) => {
          const ok = stdout.includes('Passo 0') && stdout.includes('Passo 4');
          return { passed: ok, message: ok ? 'Loop for perfeito!' : 'Esperado passos de 0 a 4.' };
        },
      },
    ],
  },
  {
    id: 'java-methods-params',
    title: '9. Métodos com Parâmetros',
    trackId: 'java',
    category: 'Funções e Métodos',
    description: 'Crie métodos auxiliares estáticos que recebem argumentos.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Definindo Métodos

\`\`\`java
public static void exibirMensagem(String nome) {
    System.out.println("Olá, " + nome);
}
\`\`\``,
    initialCode: `public class Main {
    public static void saudar(String usuario) {
        System.out.println("Bem-vindo, " + usuario);
    }

    public static void main(String[] args) {
        saudar("Dev");
    }
}`,
    solutionCode: `public class Main {
    public static void saudar(String usuario) {
        System.out.println("Bem-vindo, " + usuario);
    }

    public static void main(String[] args) {
        saudar("Dev");
    }
}`,
    instructions: 'Chame o método saudar passando "Dev" e veja o resultado.',
    hints: ['saudar("Dev");'],
    testCases: [
      {
        id: 't-method-params',
        description: 'Imprimir "Bem-vindo, Dev"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Bem-vindo, Dev');
          return { passed: ok, message: ok ? 'Método executado!' : 'Esperado: "Bem-vindo, Dev"' };
        },
      },
    ],
  },
  {
    id: 'java-methods-return',
    title: '10. Métodos com Retorno de Valor',
    trackId: 'java',
    category: 'Funções e Métodos',
    description: 'Retorne cálculos a partir de métodos com return.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Métodos que Retornam Valores

\`\`\`java
public static int somar(int a, int b) {
    return a + b;
}
\`\`\``,
    initialCode: `public class Main {
    public static int multiplicar(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        int resultado = multiplicar(6, 7);
        System.out.println("Resultado: " + resultado);
    }
}`,
    solutionCode: `public class Main {
    public static int multiplicar(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        int resultado = multiplicar(6, 7);
        System.out.println("Resultado: " + resultado);
    }
}`,
    instructions: 'Execute o método multiplicar(6, 7) e imprima "Resultado: 42".',
    hints: ['Verifique o retorno 42.'],
    testCases: [
      {
        id: 't-method-ret',
        description: 'Imprimir "Resultado: 42"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Resultado: 42');
          return { passed: ok, message: ok ? 'Retorno validado!' : 'Esperado: "Resultado: 42"' };
        },
      },
    ],
  },
  {
    id: 'java-arrays',
    title: '11. Arrays e Indexação',
    trackId: 'java',
    category: 'Estruturas de Dados',
    description: 'Armazene múltiplos itens homogêneos em um array.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Arrays em Java

\`\`\`java
int[] numeros = { 10, 20, 30 };
System.out.println(numeros[0]); // Primeiro item: 10
System.out.println(numeros.length); // Tamanho: 3
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] notas = { 8, 9, 10 };
        // Imprima o primeiro item (indice 0) e o tamanho do array
        System.out.println("Primeira nota: " + notas[0]);
        System.out.println("Total: " + notas.length);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int[] notas = { 8, 9, 10 };
        System.out.println("Primeira nota: " + notas[0]);
        System.out.println("Total: " + notas.length);
    }
}`,
    instructions: 'Imprima a primeira nota (8) e o tamanho do array (3).',
    hints: ['notas[0] e notas.length'],
    testCases: [
      {
        id: 't-arrays-1',
        description: 'Exibir primeira nota e tamanho',
        validator: (code, stdout) => {
          const ok = stdout.includes('Primeira nota: 8') && stdout.includes('Total: 3');
          return { passed: ok, message: ok ? 'Array indexado com sucesso!' : 'Confira notas[0] e notas.length.' };
        },
      },
    ],
  },
  {
    id: 'java-arrays-iteration',
    title: '12. Iterando sobre Arrays',
    trackId: 'java',
    category: 'Estruturas de Dados',
    description: 'Percorra e some todos os itens de um array.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Percorrendo com for Tradicional

\`\`\`java
int[] valores = { 5, 10, 15 };
int total = 0;
for (int i = 0; i < valores.length; i++) {
    total += valores[i];
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] valores = { 10, 20, 30 };
        int soma = 0;
        for (int i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        System.out.println("Soma total: " + soma);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int[] valores = { 10, 20, 30 };
        int soma = 0;
        for (int i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        System.out.println("Soma total: " + soma);
    }
}`,
    instructions: 'Some os itens do array {10, 20, 30} e imprima "Soma total: 60".',
    hints: ['soma += valores[i];'],
    testCases: [
      {
        id: 't-arr-iter',
        description: 'Imprimir "Soma total: 60"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma total: 60');
          return { passed: ok, message: ok ? 'Iteração e soma corretas!' : 'Esperado: "Soma total: 60"' };
        },
      },
    ],
  },
  {
    id: 'java-for-each',
    title: '13. Laço For-Each Aprimorado',
    trackId: 'java',
    category: 'Estruturas de Dados',
    description: 'Use o for-each para percorrer arrays de forma limpa e direta.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### For-Each em Java

\`\`\`java
String[] linguagens = { "Java", "Python", "JS" };
for (String lang : linguagens) {
    System.out.println(lang);
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        String[] cursos = { "Java", "Web", "Cloud" };
        for (String c : cursos) {
            System.out.println("Curso: " + c);
        }
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String[] cursos = { "Java", "Web", "Cloud" };
        for (String c : cursos) {
            System.out.println("Curso: " + c);
        }
    }
}`,
    instructions: 'Imprima cada curso usando o for-each.',
    hints: ['for (String c : cursos)'],
    testCases: [
      {
        id: 't-foreach',
        description: 'Imprimir os três cursos',
        validator: (code, stdout) => {
          const ok = stdout.includes('Curso: Java') && stdout.includes('Curso: Web') && stdout.includes('Curso: Cloud');
          return { passed: ok, message: ok ? 'For-each validado!' : 'Verifique os cursos impressos.' };
        },
      },
    ],
  },
  {
    id: 'java-strings-methods',
    title: '14. Manipulação de Strings',
    trackId: 'java',
    category: 'Manipulação de Dados',
    description: 'Aprenda os métodos length(), toUpperCase() e concat().',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Métodos da Classe String

\`\`\`java
String texto = "java";
int tamanho = texto.length(); // 4
String maiusculo = texto.toUpperCase(); // "JAVA"
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        String titulo = "dualdev";
        System.out.println(titulo.toUpperCase());
        System.out.println("Tamanho: " + titulo.length());
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String titulo = "dualdev";
        System.out.println(titulo.toUpperCase());
        System.out.println("Tamanho: " + titulo.length());
    }
}`,
    instructions: 'Imprima "DUALDEV" em maiúsculo e seu tamanho "Tamanho: 7".',
    hints: ['titulo.toUpperCase() e titulo.length()'],
    testCases: [
      {
        id: 't-strings-m',
        description: 'Exibir DUALDEV e Tamanho: 7',
        validator: (code, stdout) => {
          const ok = stdout.includes('DUALDEV') && stdout.includes('Tamanho: 7');
          return { passed: ok, message: ok ? 'Strings manipuladas com sucesso!' : 'Esperado "DUALDEV" e "Tamanho: 7".' };
        },
      },
    ],
  },
  {
    id: 'java-string-comparison',
    title: '15. Comparando Strings com equals()',
    trackId: 'java',
    category: 'Manipulação de Dados',
    description: 'Entenda por que usamos .equals() em vez de == para comparar textos.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Comparação Segura de Strings

Em Java, o operador \`==\` compara a referência de memória de objetos. Para comparar o conteúdo real do texto, usamos \`.equals()\`:

\`\`\`java
String s1 = "admin";
if (s1.equals("admin")) {
    System.out.println("Acesso concedido");
}
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        String role = "admin";
        if (role.equals("admin")) {
            System.out.println("Acesso Permitido");
        } else {
            System.out.println("Acesso Negado");
        }
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String role = "admin";
        if (role.equals("admin")) {
            System.out.println("Acesso Permitido");
        } else {
            System.out.println("Acesso Negado");
        }
    }
}`,
    instructions: 'Execute a verificação com .equals() imprimindo "Acesso Permitido".',
    hints: ['role.equals("admin")'],
    testCases: [
      {
        id: 't-str-eq',
        description: 'Imprimir "Acesso Permitido"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Acesso Permitido');
          return { passed: ok, message: ok ? 'Comparação com .equals() correta!' : 'Esperado: "Acesso Permitido"' };
        },
      },
    ],
  },
  {
    id: 'java-math',
    title: '16. Métodos Matemáticos (Math)',
    trackId: 'java',
    category: 'Funções e Métodos',
    description: 'Utilize a classe java.lang.Math para cálculos avançados.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### A Classe Math

- \`Math.max(a, b)\`: Retorna o maior valor.
- \`Math.min(a, b)\`: Retorna o menor valor.
- \`Math.abs(n)\`: Retorna o valor absoluto.
- \`Math.sqrt(n)\`: Raiz quadrada.

\`\`\`java
int maior = Math.max(15, 27); // 27
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int a = 42;
        int b = 18;
        int maior = Math.max(a, b);
        System.out.println("Maior: " + maior);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int a = 42;
        int b = 18;
        int maior = Math.max(a, b);
        System.out.println("Maior: " + maior);
    }
}`,
    instructions: 'Use Math.max para identificar o maior número e imprimir "Maior: 42".',
    hints: ['Math.max(a, b)'],
    testCases: [
      {
        id: 't-math',
        description: 'Imprimir "Maior: 42"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Maior: 42');
          return { passed: ok, message: ok ? 'Cálculo Math executado!' : 'Esperado: "Maior: 42"' };
        },
      },
    ],
  },
  {
    id: 'java-type-casting',
    title: '17. Conversão de Tipos (Casting)',
    trackId: 'java',
    category: 'Fundamentos',
    description: 'Converta tipos numéricos primitivos explicitamente.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### Casting Explícito e Implícito

\`\`\`java
double valorDecimal = 9.78;
int valorInteiro = (int) valorDecimal; // Trunca para 9
System.out.println(valorInteiro);
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        double preco = 19.99;
        int precoInteiro = (int) preco;
        System.out.println("Inteiro: " + precoInteiro);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        double preco = 19.99;
        int precoInteiro = (int) preco;
        System.out.println("Inteiro: " + precoInteiro);
    }
}`,
    instructions: 'Faça o casting explícito de double para int e imprima "Inteiro: 19".',
    hints: ['(int) preco'],
    testCases: [
      {
        id: 't-casting',
        description: 'Imprimir "Inteiro: 19"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Inteiro: 19');
          return { passed: ok, message: ok ? 'Casting validado!' : 'Esperado: "Inteiro: 19"' };
        },
      },
    ],
  },
  {
    id: 'java-arrays-bidimensional',
    title: '18. Matrizes Bidimensionais',
    trackId: 'java',
    category: 'Estruturas de Dados',
    description: 'Trabalhe com grades e tabelas de linhas e colunas.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 9,
    theory: `### Matrizes em Java

\`\`\`java
int[][] matriz = {
    { 1, 2 },
    { 3, 4 }
};
System.out.println(matriz[0][1]); // Linha 0, Coluna 1 = 2
\`\`\``,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[][] grade = {
            { 10, 20 },
            { 30, 40 }
        };
        System.out.println("Elemento: " + grade[1][1]);
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int[][] grade = {
            { 10, 20 },
            { 30, 40 }
        };
        System.out.println("Elemento: " + grade[1][1]);
    }
}`,
    instructions: 'Acesse a linha 1 coluna 1 da matriz e imprima "Elemento: 40".',
    hints: ['grade[1][1]'],
    testCases: [
      {
        id: 't-matriz',
        description: 'Imprimir "Elemento: 40"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Elemento: 40');
          return { passed: ok, message: ok ? 'Acesso bidimensional correto!' : 'Esperado: "Elemento: 40"' };
        },
      },
    ],
  },
  {
    id: 'java-methods-overload',
    title: '19. Sobrecarga de Métodos (Overload)',
    trackId: 'java',
    category: 'Funções e Métodos',
    description: 'Declare métodos com o mesmo nome e assinaturas de parâmetros diferentes.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 9,
    theory: `### Sobrecarga (Overloading)

\`\`\`java
public static int somar(int a, int b) { return a + b; }
public static int somar(int a, int b, int c) { return a + b + c; }
\`\`\``,
    initialCode: `public class Main {
    public static int somar(int a, int b) {
        return a + b;
    }
    public static int somar(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Soma 2: " + somar(2, 3));
        System.out.println("Soma 3: " + somar(2, 3, 4));
    }
}`,
    solutionCode: `public class Main {
    public static int somar(int a, int b) {
        return a + b;
    }
    public static int somar(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Soma 2: " + somar(2, 3));
        System.out.println("Soma 3: " + somar(2, 3, 4));
    }
}`,
    instructions: 'Execute a sobrecarga imprimindo "Soma 2: 5" e "Soma 3: 9".',
    hints: ['somar(2, 3) e somar(2, 3, 4)'],
    testCases: [
      {
        id: 't-overload',
        description: 'Imprimir Soma 2: 5 e Soma 3: 9',
        validator: (code, stdout) => {
          const ok = stdout.includes('Soma 2: 5') && stdout.includes('Soma 3: 9');
          return { passed: ok, message: ok ? 'Sobrecarga de métodos validada!' : 'Confira ambas as chamadas.' };
        },
      },
    ],
  },
  {
    id: 'java-desafio-final',
    title: '20. Desafio Integrador: Calculadora de Média',
    trackId: 'java',
    category: 'Projeto Integrador',
    description: 'Integre variáveis, arrays, loops e métodos em um algoritmo completo.',
    difficulty: 'Avançado',
    xp: 100,
    estimatedMinutes: 12,
    theory: `### Desafio Final de Java

Você aprendeu a declarar classes, métodos, variáveis, condicionais, loops e arrays.
Agora vamos construir um analisador de notas completo!`,
    initialCode: `public class Main {
    public static double calcularMedia(double[] notas) {
        double soma = 0;
        for (double n : notas) {
            soma += n;
        }
        return soma / notas.length;
    }

    public static void main(String[] args) {
        double[] notasAluno = { 8.0, 9.0, 10.0 };
        double media = calcularMedia(notasAluno);
        System.out.println("Media: " + media);
        if (media >= 7.0) {
            System.out.println("Status: Aprovado");
        }
    }
}`,
    solutionCode: `public class Main {
    public static double calcularMedia(double[] notas) {
        double soma = 0;
        for (double n : notas) {
            soma += n;
        }
        return soma / notas.length;
    }

    public static void main(String[] args) {
        double[] notasAluno = { 8.0, 9.0, 10.0 };
        double media = calcularMedia(notasAluno);
        System.out.println("Media: " + media);
        if (media >= 7.0) {
            System.out.println("Status: Aprovado");
        }
    }
}`,
    instructions: 'Execute o programa para calcular a média (9.0) e imprimir "Status: Aprovado".',
    hints: ['Verifique a saída Media: 9.0 e Status: Aprovado.'],
    testCases: [
      {
        id: 't-desafio-java',
        description: 'Imprimir "Media: 9.0" e "Status: Aprovado"',
        validator: (code, stdout) => {
          const ok = stdout.includes('Media: 9.0') && stdout.includes('Status: Aprovado');
          return { passed: ok, message: ok ? 'Parabéns! Trilha de Java concluída com maestria!' : 'Esperado "Media: 9.0" e "Status: Aprovado".' };
        },
      },
    ],
  },
];
