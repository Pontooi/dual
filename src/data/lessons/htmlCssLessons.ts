import { Lesson } from '../../types';

export const htmlLessons: Lesson[] = [
  {
    id: 'html-intro',
    title: '1. Estrutura Básica HTML5',
    trackId: 'html',
    category: 'Fundamentos',
    description: 'Crie a base semântica com doctype, html, head e body.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### A Estrutura de um Documento HTML5

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Título</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
</body>
</html>
\`\`\``,
    initialCode: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>DualDev</title>
</head>
<body>
  <h1>DualDev Academy</h1>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>DualDev</title>
</head>
<body>
  <h1>DualDev Academy</h1>
</body>
</html>`,
    instructions: 'Mantenha a estrutura HTML5 contendo a tag h1 com "DualDev Academy".',
    hints: ['Verifique a presença de <h1>DualDev Academy</h1>.'],
    testCases: [
      {
        id: 't-h1',
        description: 'Conter tag h1 com "DualDev Academy"',
        validator: (code) => {
          const ok = /<h1>.*DualDev Academy.*<\/h1>/i.test(code);
          return { passed: ok, message: ok ? 'Estrutura HTML5 válida!' : 'Falta a tag <h1>DualDev Academy</h1>.' };
        },
      },
    ],
  },
  {
    id: 'html-headings',
    title: '2. Hierarquia de Títulos (h1 a h6)',
    trackId: 'html',
    category: 'Estruturação',
    description: 'Aprenda a estruturar o conteúdo com níveis semânticos de cabeçalho.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Níveis de Título

- \`<h1>\`: Título principal da página (recomenda-se apenas um por página).
- \`<h2>\`: Seções principais.
- \`<h3>\`: Subseções.`,
    initialCode: `<h1>Capítulo 1</h1>
<h2>Seção 1.1</h2>
<h3>Tópico de Estudo</h3>`,
    solutionCode: `<h1>Capítulo 1</h1>
<h2>Seção 1.1</h2>
<h3>Tópico de Estudo</h3>`,
    instructions: 'Declare os títulos h1, h2 e h3.',
    hints: ['Inclua as tags <h1>, <h2> e <h3>.'],
    testCases: [
      {
        id: 't-headings',
        description: 'Conter h1, h2 e h3',
        validator: (code) => {
          const ok = /<h1>.*<\/h1>/.test(code) && /<h2>.*<\/h2>/.test(code) && /<h3>.*<\/h3>/.test(code);
          return { passed: ok, message: ok ? 'Hierarquia respeitada!' : 'Declare tags h1, h2 e h3.' };
        },
      },
    ],
  },
  {
    id: 'html-paragraphs',
    title: '3. Parágrafos e Formatação de Texto',
    trackId: 'html',
    category: 'Estruturação',
    description: 'Use tags p, strong (negrito semântico) e em (ênfase).',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Textos e Ênfase

\`\`\`html
<p>Este é um parágrafo com <strong>importância</strong> e <em>ênfase</em>.</p>
\`\`\``,
    initialCode: `<p>Aprenda programação com <strong>prática constante</strong>.</p>`,
    solutionCode: `<p>Aprenda programação com <strong>prática constante</strong>.</p>`,
    instructions: 'Crie um parágrafo usando strong para destacar "prática constante".',
    hints: ['<p>...<strong>prática constante</strong>...</p>'],
    testCases: [
      {
        id: 't-p-strong',
        description: 'Conter parágrafo com strong',
        validator: (code) => {
          const ok = /<p>.*<strong>.*<\/strong>.*<\/p>/i.test(code);
          return { passed: ok, message: ok ? 'Parágrafo formatado com sucesso!' : 'Falta a tag <p> com <strong>.' };
        },
      },
    ],
  },
  {
    id: 'html-lists-unordered',
    title: '4. Listas Não Ordenadas (ul e li)',
    trackId: 'html',
    category: 'Listas e Navegação',
    description: 'Crie listas de marcadores para agrupar tópicos relacionados.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Listas com Marcadores

\`\`\`html
<ul>
  <li>Java</li>
  <li>Python</li>
</ul>
\`\`\``,
    initialCode: `<ul>
  <li>Java</li>
  <li>Python</li>
  <li>JavaScript</li>
</ul>`,
    solutionCode: `<ul>
  <li>Java</li>
  <li>Python</li>
  <li>JavaScript</li>
</ul>`,
    instructions: 'Crie uma lista ul com pelo menos 3 itens li.',
    hints: ['<ul> contendo <li>'],
    testCases: [
      {
        id: 't-ul',
        description: 'Conter tag ul com pelo menos 3 itens li',
        validator: (code) => {
          const matches = code.match(/<li>/gi);
          const ok = /<ul>/i.test(code) && matches !== null && matches.length >= 3;
          return { passed: ok, message: ok ? 'Lista criada com sucesso!' : 'Declare <ul> com pelo menos 3 <li>.' };
        },
      },
    ],
  },
  {
    id: 'html-lists-ordered',
    title: '5. Listas Ordenadas (ol e li)',
    trackId: 'html',
    category: 'Listas e Navegação',
    description: 'Crie sequências numeradas para passos de tutoriais e rankings.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Listas Numeradas

\`\`\`html
<ol>
  <li>Primeiro passo</li>
  <li>Segundo passo</li>
</ol>
\`\`\``,
    initialCode: `<ol>
  <li>Escrever código</li>
  <li>Executar testes</li>
  <li>Evoluir XP</li>
</ol>`,
    solutionCode: `<ol>
  <li>Escrever código</li>
  <li>Executar testes</li>
  <li>Evoluir XP</li>
</ol>`,
    instructions: 'Crie uma lista ordenada ol com 3 passos.',
    hints: ['<ol> contendo <li>'],
    testCases: [
      {
        id: 't-ol',
        description: 'Conter tag ol com 3 itens li',
        validator: (code) => {
          const matches = code.match(/<li>/gi);
          const ok = /<ol>/i.test(code) && matches !== null && matches.length >= 3;
          return { passed: ok, message: ok ? 'Lista ordenada criada!' : 'Declare <ol> com pelo menos 3 <li>.' };
        },
      },
    ],
  },
  {
    id: 'html-links',
    title: '6. Links de Navegação (a href)',
    trackId: 'html',
    category: 'Navegação',
    description: 'Crie âncoras para direcionar o usuário entre páginas e links externos.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Hiperlinks em HTML

\`\`\`html
<a href="https://exemplo.com" target="_blank">Visitar Site</a>
\`\`\``,
    initialCode: `<a href="https://dualdev.academy" target="_blank">Acessar Academia</a>`,
    solutionCode: `<a href="https://dualdev.academy" target="_blank">Acessar Academia</a>`,
    instructions: 'Crie um link usando a tag a com o atributo href.',
    hints: ['<a href="...">Texto</a>'],
    testCases: [
      {
        id: 't-link',
        description: 'Conter tag a com atributo href',
        validator: (code) => {
          const ok = /<a\s+[^>]*href=["'][^"']+["'][^>]*>.*<\/a>/i.test(code);
          return { passed: ok, message: ok ? 'Link declarado com sucesso!' : 'Falta a tag <a> com href válido.' };
        },
      },
    ],
  },
  {
    id: 'html-images',
    title: '7. Imagens Acessíveis (img com alt)',
    trackId: 'html',
    category: 'Mídia e Acessibilidade',
    description: 'Insira imagens com descrição de acessibilidade obrigatória.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### A Tag img e o Atributo alt

\`\`\`html
<img src="logo.png" alt="Logotipo do DualDev" width="200" />
\`\`\`
O atributo \`alt\` é essencial para leitores de tela e SEO.`,
    initialCode: `<img src="banner.jpg" alt="Banner da Academia" width="300">`,
    solutionCode: `<img src="banner.jpg" alt="Banner da Academia" width="300">`,
    instructions: 'Insira uma tag img contendo os atributos src e alt preenchidos.',
    hints: ['<img src="..." alt="...">'],
    testCases: [
      {
        id: 't-img',
        description: 'Conter tag img com src e alt',
        validator: (code) => {
          const ok = /<img\s+[^>]*src=["'][^"']+["'][^>]*alt=["'][^"']+["']/i.test(code);
          return { passed: ok, message: ok ? 'Imagem acessível validada!' : 'A tag <img> deve ter src e alt.' };
        },
      },
    ],
  },
  {
    id: 'html-semantic-header-nav',
    title: '8. Cabeçalhos Semânticos (header e nav)',
    trackId: 'html',
    category: 'Semântica HTML5',
    description: 'Organize a barra de navegação com elementos semânticos modernos.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Semântica: header e nav

\`\`\`html
<header>
  <h1>Logo</h1>
  <nav>
    <a href="#home">Início</a>
    <a href="#sobre">Sobre</a>
  </nav>
</header>
\`\`\``,
    initialCode: `<header>
  <h1>DualDev</h1>
  <nav>
    <a href="#cursos">Cursos</a>
    <a href="#contato">Contato</a>
  </nav>
</header>`,
    solutionCode: `<header>
  <h1>DualDev</h1>
  <nav>
    <a href="#cursos">Cursos</a>
    <a href="#contato">Contato</a>
  </nav>
</header>`,
    instructions: 'Estruture um cabeçalho usando <header> contendo uma tag <nav>.',
    hints: ['<header> com <nav> e links internos.'],
    testCases: [
      {
        id: 't-header-nav',
        description: 'Conter header com nav interno',
        validator: (code) => {
          const ok = /<header>[\s\S]*<nav>[\s\S]*<\/nav>[\s\S]*<\/header>/i.test(code);
          return { passed: ok, message: ok ? 'Semântica de cabeçalho perfeita!' : 'Estruture <header> contendo <nav>.' };
        },
      },
    ],
  },
  {
    id: 'html-semantic-main-footer',
    title: '9. Áreas Principais (main e footer)',
    trackId: 'html',
    category: 'Semântica HTML5',
    description: 'Isole o conteúdo principal da página e o rodapé de direitos autorais.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Semântica: main e footer

\`\`\`html
<main>
  <p>Conteúdo central da aplicação.</p>
</main>
<footer>
  <p>&copy; 2026 DualDev Academy</p>
</footer>
\`\`\``,
    initialCode: `<main>
  <h2>Conteúdo Principal</h2>
</main>
<footer>
  <p>&copy; 2026 Todos os direitos reservados.</p>
</footer>`,
    solutionCode: `<main>
  <h2>Conteúdo Principal</h2>
</main>
<footer>
  <p>&copy; 2026 Todos os direitos reservados.</p>
</footer>`,
    instructions: 'Crie uma tag <main> e uma tag <footer>.',
    hints: ['<main>...</main> e <footer>...</footer>'],
    testCases: [
      {
        id: 't-main-footer',
        description: 'Conter tags main e footer',
        validator: (code) => {
          const ok = /<main>[\s\S]*<\/main>/i.test(code) && /<footer>[\s\S]*<\/footer>/i.test(code);
          return { passed: ok, message: ok ? 'Áreas principais estruturadas!' : 'Declare <main> e <footer>.' };
        },
      },
    ],
  },
  {
    id: 'html-semantic-article-section',
    title: '10. Seções e Artigos (section e article)',
    trackId: 'html',
    category: 'Semântica HTML5',
    description: 'Estruture blocos de conteúdo com section e postagens com article.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Semântica: section e article

- \`<section>\`: Agrupa conteúdos temáticos com cabeçalho.
- \`<article>\`: Representa um conteúdo autônomo (post, notícia, cartão).`,
    initialCode: `<section>
  <article>
    <h3>Novidades do Java</h3>
    <p>Confira os novos recursos da linguagem.</p>
  </article>
</section>`,
    solutionCode: `<section>
  <article>
    <h3>Novidades do Java</h3>
    <p>Confira os novos recursos da linguagem.</p>
  </article>
</section>`,
    instructions: 'Estruture uma <section> contendo um <article>.',
    hints: ['<section> contendo <article>'],
    testCases: [
      {
        id: 't-section-article',
        description: 'Conter section com article',
        validator: (code) => {
          const ok = /<section>[\s\S]*<article>[\s\S]*<\/article>[\s\S]*<\/section>/i.test(code);
          return { passed: ok, message: ok ? 'Seção e artigo semânticos válidos!' : 'Use <section> com <article>.' };
        },
      },
    ],
  },
  {
    id: 'html-tables-basic',
    title: '11. Tabelas Básicas (table, tr, td)',
    trackId: 'html',
    category: 'Tabelas',
    description: 'Construa grades tabulares de dados com linhas e colunas.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Tabelas em HTML

\`\`\`html
<table>
  <tr>
    <td>Dado 1</td>
    <td>Dado 2</td>
  </tr>
</table>
\`\`\``,
    initialCode: `<table>
  <tr>
    <td>Java</td>
    <td>50 XP</td>
  </tr>
</table>`,
    solutionCode: `<table>
  <tr>
    <td>Java</td>
    <td>50 XP</td>
  </tr>
</table>`,
    instructions: 'Declare uma tabela <table> com pelo menos uma linha <tr> e células <td>.',
    hints: ['<table> com <tr> e <td>'],
    testCases: [
      {
        id: 't-table-basic',
        description: 'Conter table, tr e td',
        validator: (code) => {
          const ok = /<table>[\s\S]*<tr>[\s\S]*<td>[\s\S]*<\/td>[\s\S]*<\/tr>[\s\S]*<\/table>/i.test(code);
          return { passed: ok, message: ok ? 'Tabela criada com sucesso!' : 'Estruture <table> com <tr> e <td>.' };
        },
      },
    ],
  },
  {
    id: 'html-tables-headers',
    title: '12. Estrutura thead, tbody e th',
    trackId: 'html',
    category: 'Tabelas',
    description: 'Adicione cabeçalhos semânticos th para colunas em tabelas.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Cabeçalhos de Tabela

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Curso</th>
      <th>Dificuldade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>Iniciante</td>
    </tr>
  </tbody>
</table>
\`\`\``,
    initialCode: `<table>
  <thead>
    <tr>
      <th>Trilha</th>
      <th>Aulas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>20</td>
    </tr>
  </tbody>
</table>`,
    solutionCode: `<table>
  <thead>
    <tr>
      <th>Trilha</th>
      <th>Aulas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>20</td>
    </tr>
  </tbody>
</table>`,
    instructions: 'Construa a tabela utilizando thead com th e tbody com td.',
    hints: ['<thead> com <th> e <tbody> com <td>.'],
    testCases: [
      {
        id: 't-table-thead',
        description: 'Conter thead com th e tbody com td',
        validator: (code) => {
          const ok = /<thead>[\s\S]*<th>/i.test(code) && /<tbody>[\s\S]*<td>/i.test(code);
          return { passed: ok, message: ok ? 'Tabela semântica aprovada!' : 'Use <thead> com <th> e <tbody> com <td>.' };
        },
      },
    ],
  },
  {
    id: 'html-forms-inputs',
    title: '13. Formulários Básicos (form, label, input)',
    trackId: 'html',
    category: 'Formulários',
    description: 'Receba entradas de dados dos usuários com campos de texto.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Formulários e Rótulos

\`\`\`html
<form>
  <label for="nome">Seu Nome:</label>
  <input type="text" id="nome" name="nome" />
</form>
\`\`\``,
    initialCode: `<form>
  <label for="usuario">Usuário:</label>
  <input type="text" id="usuario" name="usuario">
</form>`,
    solutionCode: `<form>
  <label for="usuario">Usuário:</label>
  <input type="text" id="usuario" name="usuario">
</form>`,
    instructions: 'Crie um formulário <form> com uma <label> e um <input type="text">.',
    hints: ['<form> com <label> e <input>'],
    testCases: [
      {
        id: 't-form-basic',
        description: 'Conter form, label e input text',
        validator: (code) => {
          const ok = /<form>[\s\S]*<label[\s\S]*<input\s+[^>]*type=["']text["']/i.test(code);
          return { passed: ok, message: ok ? 'Formulário básico estruturado!' : 'Falta <form> com <label> e <input type="text">.' };
        },
      },
    ],
  },
  {
    id: 'html-forms-types',
    title: '14. Tipos de Input (email, password, number)',
    trackId: 'html',
    category: 'Formulários',
    description: 'Use validações nativas do navegador com inputs especializados.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### Tipos Especializados

\`\`\`html
<input type="email" placeholder="dev@email.com" />
<input type="password" />
<input type="number" min="1" max="100" />
\`\`\``,
    initialCode: `<form>
  <input type="email" placeholder="Digite seu e-mail">
  <input type="password" placeholder="Digite sua senha">
</form>`,
    solutionCode: `<form>
  <input type="email" placeholder="Digite seu e-mail">
  <input type="password" placeholder="Digite sua senha">
</form>`,
    instructions: 'Crie inputs dos tipos email e password.',
    hints: ['type="email" e type="password"'],
    testCases: [
      {
        id: 't-form-types',
        description: 'Conter input type="email" e type="password"',
        validator: (code) => {
          const ok = /type=["']email["']/i.test(code) && /type=["']password["']/i.test(code);
          return { passed: ok, message: ok ? 'Inputs especializados definidos!' : 'Declare inputs de email e password.' };
        },
      },
    ],
  },
  {
    id: 'html-forms-buttons',
    title: '15. Botões de Envio (button submit)',
    trackId: 'html',
    category: 'Formulários',
    description: 'Envie formulários com button type="submit".',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Botão de Submissão

\`\`\`html
<button type="submit">Enviar Cadastro</button>
\`\`\``,
    initialCode: `<form>
  <input type="text" placeholder="Nome">
  <button type="submit">Cadastrar</button>
</form>`,
    solutionCode: `<form>
  <input type="text" placeholder="Nome">
  <button type="submit">Cadastrar</button>
</form>`,
    instructions: 'Insira um botão com type="submit" dentro do formulário.',
    hints: ['<button type="submit">Cadastrar</button>'],
    testCases: [
      {
        id: 't-form-btn',
        description: 'Conter button com type="submit"',
        validator: (code) => {
          const ok = /<button\s+[^>]*type=["']submit["'][^>]*>.*<\/button>/i.test(code);
          return { passed: ok, message: ok ? 'Botão submit validado!' : 'Falta <button type="submit">.' };
        },
      },
    ],
  },
  {
    id: 'html-forms-select',
    title: '16. Seleção Suspensa (select e option)',
    trackId: 'html',
    category: 'Formulários',
    description: 'Permita escolha de itens em menus dropdown.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### A Tag select

\`\`\`html
<select name="trilha">
  <option value="java">Java</option>
  <option value="python">Python</option>
</select>
\`\`\``,
    initialCode: `<select name="linguagem">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</select>`,
    solutionCode: `<select name="linguagem">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</select>`,
    instructions: 'Crie uma tag <select> com pelo menos duas opções <option>.',
    hints: ['<select> com <option>'],
    testCases: [
      {
        id: 't-select',
        description: 'Conter select com pelo menos 2 options',
        validator: (code) => {
          const matches = code.match(/<option/gi);
          const ok = /<select/i.test(code) && matches !== null && matches.length >= 2;
          return { passed: ok, message: ok ? 'Menu dropdown validado!' : 'Declare <select> com pelo menos 2 <option>.' };
        },
      },
    ],
  },
  {
    id: 'html-forms-textarea',
    title: '17. Campo Multilinha (textarea)',
    trackId: 'html',
    category: 'Formulários',
    description: 'Receba comentários e textos longos com a tag textarea.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### A Tag textarea

\`\`\`html
<textarea rows="4" cols="50" placeholder="Digite seu feedback"></textarea>
\`\`\``,
    initialCode: `<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4"></textarea>`,
    solutionCode: `<label for="bio">Biografia:</label>
<textarea id="bio" name="bio" rows="4"></textarea>`,
    instructions: 'Insira a tag <textarea> com o atributo rows.',
    hints: ['<textarea id="bio" rows="4"></textarea>'],
    testCases: [
      {
        id: 't-textarea',
        description: 'Conter tag textarea',
        validator: (code) => {
          const ok = /<textarea[\s\S]*<\/textarea>/i.test(code);
          return { passed: ok, message: ok ? 'Campo multilinha criado!' : 'Declare a tag <textarea>.' };
        },
      },
    ],
  },
  {
    id: 'html-media-audio',
    title: '18. Elemento de Áudio (audio controls)',
    trackId: 'html',
    category: 'Mídia e Acessibilidade',
    description: 'Incorpore reprodutores de som com controles nativos.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### Áudio em HTML5

\`\`\`html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
  Seu navegador não suporta áudio.
</audio>
\`\`\``,
    initialCode: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>`,
    solutionCode: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>`,
    instructions: 'Declare a tag <audio> com o atributo controls e uma tag <source>.',
    hints: ['<audio controls><source ...></audio>'],
    testCases: [
      {
        id: 't-audio',
        description: 'Conter audio controls com source',
        validator: (code) => {
          const ok = /<audio\s+[^>]*controls/i.test(code) && /<source/i.test(code);
          return { passed: ok, message: ok ? 'Player de áudio configurado!' : 'Falta <audio controls> com <source>.' };
        },
      },
    ],
  },
  {
    id: 'html-media-video',
    title: '19. Elemento de Vídeo (video controls)',
    trackId: 'html',
    category: 'Mídia e Acessibilidade',
    description: 'Incorpore reprodutores de vídeo com dimensões definidas.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### Vídeo em HTML5

\`\`\`html
<video width="640" height="360" controls>
  <source src="aula.mp4" type="video/mp4" />
</video>
\`\`\``,
    initialCode: `<video width="480" controls>
  <source src="aula.mp4" type="video/mp4">
</video>`,
    solutionCode: `<video width="480" controls>
  <source src="aula.mp4" type="video/mp4">
</video>`,
    instructions: 'Declare a tag <video> com o atributo controls.',
    hints: ['<video controls><source ...></video>'],
    testCases: [
      {
        id: 't-video',
        description: 'Conter video controls com source',
        validator: (code) => {
          const ok = /<video\s+[^>]*controls/i.test(code) && /<source/i.test(code);
          return { passed: ok, message: ok ? 'Player de vídeo validado!' : 'Falta <video controls> com <source>.' };
        },
      },
    ],
  },
  {
    id: 'html-desafio-final',
    title: '20. Desafio Integrador: Landing Page Semântica',
    trackId: 'html',
    category: 'Projeto Integrador',
    description: 'Monte a estrutura completa de uma página semântica com cabeçalho, conteúdo e rodapé.',
    difficulty: 'Avançado',
    xp: 100,
    estimatedMinutes: 12,
    theory: `### Desafio Final de HTML5

Combine header, nav, main, section e footer em uma página semântica completa e profissional.`,
    initialCode: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portal DualDev</title>
</head>
<body>
  <header>
    <h1>DualDev Academy</h1>
    <nav>
      <a href="#cursos">Cursos</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Trilhas Disponíveis</h2>
      <p>Aprenda na prática com código em tempo real.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 DualDev</p>
  </footer>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portal DualDev</title>
</head>
<body>
  <header>
    <h1>DualDev Academy</h1>
    <nav>
      <a href="#cursos">Cursos</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Trilhas Disponíveis</h2>
      <p>Aprenda na prática com código em tempo real.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 DualDev</p>
  </footer>
</body>
</html>`,
    instructions: 'Mantenha a página semântica completa contendo header, nav, main, section e footer.',
    hints: ['Verifique se todas as 5 tags semânticas estão presentes.'],
    testCases: [
      {
        id: 't-html-final',
        description: 'Conter header, nav, main, section e footer',
        validator: (code) => {
          const ok = /<header>/i.test(code) && /<nav>/i.test(code) && /<main>/i.test(code) && /<section>/i.test(code) && /<footer>/i.test(code);
          return { passed: ok, message: ok ? 'Parabéns! Trilha de HTML5 concluída com perfeição semântica!' : 'Faltam tags semânticas obrigatórias.' };
        },
      },
    ],
  },
];

export const cssLessons: Lesson[] = [
  {
    id: 'css-intro',
    title: '1. Sintaxe de Regras e Seletores',
    trackId: 'css',
    category: 'Fundamentos',
    description: 'Compreenda seletores, propriedades e valores no CSS.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### A Anatomia do CSS

\`\`\`css
seletor {
  propriedade: valor;
}
\`\`\``,
    initialCode: `h1 {
  color: #ffbe82;
}`,
    solutionCode: `h1 {
  color: #ffbe82;
}`,
    instructions: 'Estilize o seletor h1 com a propriedade color.',
    hints: ['h1 { color: #ffbe82; }'],
    testCases: [
      {
        id: 't-css-intro',
        description: 'Conter regra h1 com color',
        validator: (code) => {
          const ok = /h1\s*\{[^}]*color\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Regra CSS válida!' : 'Falta a regra h1 com propriedade color.' };
        },
      },
    ],
  },
  {
    id: 'css-colors',
    title: '2. Cores Hexadecimais e RGB',
    trackId: 'css',
    category: 'Estilos Visuais',
    description: 'Defina cores em formato hexadecimal ou rgb().',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### Formatos de Cores

\`\`\`css
p {
  color: #9FD6F2;
  background-color: rgb(15, 23, 42);
}
\`\`\``,
    initialCode: `p {
  color: #9FD6F2;
  background-color: #0f172a;
}`,
    solutionCode: `p {
  color: #9FD6F2;
  background-color: #0f172a;
}`,
    instructions: 'Defina a cor do texto e a cor de fundo usando valores hexadecimais.',
    hints: ['color: #9FD6F2 e background-color: #0f172a'],
    testCases: [
      {
        id: 't-css-colors',
        description: 'Conter color e background-color',
        validator: (code) => {
          const ok = /color\s*:[^;]+;/i.test(code) && /background(-color)?\s*:[^;]+;/i.test(code);
          return { passed: ok, message: ok ? 'Cores declaradas com sucesso!' : 'Declare color e background-color.' };
        },
      },
    ],
  },
  {
    id: 'css-typography',
    title: '3. Tipografia (font-size e font-weight)',
    trackId: 'css',
    category: 'Tipografia',
    description: 'Ajuste o tamanho e o peso das fontes.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Tipografia Básica

\`\`\`css
h2 {
  font-size: 24px;
  font-weight: 700;
}
\`\`\``,
    initialCode: `h2 {
  font-size: 20px;
  font-weight: bold;
}`,
    solutionCode: `h2 {
  font-size: 20px;
  font-weight: bold;
}`,
    instructions: 'Defina font-size e font-weight para o h2.',
    hints: ['font-size: 20px e font-weight: bold'],
    testCases: [
      {
        id: 't-css-typo',
        description: 'Conter font-size e font-weight',
        validator: (code) => {
          const ok = /font-size\s*:/i.test(code) && /font-weight\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Tipografia ajustada!' : 'Declare font-size e font-weight.' };
        },
      },
    ],
  },
  {
    id: 'css-text-align',
    title: '4. Alinhamento de Texto (text-align)',
    trackId: 'css',
    category: 'Tipografia',
    description: 'Alinhe textos ao centro, esquerda ou direita.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 5,
    theory: `### text-align

\`\`\`css
.centro {
  text-align: center;
}
\`\`\``,
    initialCode: `.titulo {
  text-align: center;
  line-height: 1.5;
}`,
    solutionCode: `.titulo {
  text-align: center;
  line-height: 1.5;
}`,
    instructions: 'Defina text-align: center para a classe .titulo.',
    hints: ['text-align: center;'],
    testCases: [
      {
        id: 't-css-align',
        description: 'Conter text-align: center',
        validator: (code) => {
          const ok = /text-align\s*:\s*center/i.test(code);
          return { passed: ok, message: ok ? 'Alinhamento aplicado!' : 'Falta text-align: center.' };
        },
      },
    ],
  },
  {
    id: 'css-box-model-padding',
    title: '5. Espaçamento Interno (padding)',
    trackId: 'css',
    category: 'Box Model',
    description: 'Crie respiro interno entre o conteúdo e as bordas de um card.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Padding no Box Model

\`\`\`css
.card {
  padding: 16px;
}
\`\`\``,
    initialCode: `.card {
  padding: 20px;
}`,
    solutionCode: `.card {
  padding: 20px;
}`,
    instructions: 'Aplique padding de 20px no elemento .card.',
    hints: ['padding: 20px;'],
    testCases: [
      {
        id: 't-css-pad',
        description: 'Conter propriedade padding',
        validator: (code) => {
          const ok = /padding\s*:\s*20px/i.test(code);
          return { passed: ok, message: ok ? 'Padding interno ajustado!' : 'Falta padding: 20px.' };
        },
      },
    ],
  },
  {
    id: 'css-box-model-margin',
    title: '6. Espaçamento Externo (margin)',
    trackId: 'css',
    category: 'Box Model',
    description: 'Separe elementos vizinhos ou centralize blocos com margin: 0 auto.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Margin no Box Model

\`\`\`css
.container {
  margin: 0 auto;
}
\`\`\``,
    initialCode: `.container {
  margin: 24px auto;
}`,
    solutionCode: `.container {
  margin: 24px auto;
}`,
    instructions: 'Defina margin para afastar e centralizar o container.',
    hints: ['margin: 24px auto;'],
    testCases: [
      {
        id: 't-css-mar',
        description: 'Conter propriedade margin',
        validator: (code) => {
          const ok = /margin\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Margem externa configurada!' : 'Declare a propriedade margin.' };
        },
      },
    ],
  },
  {
    id: 'css-box-model-border',
    title: '7. Bordas e Cantos Arredondados',
    trackId: 'css',
    category: 'Box Model',
    description: 'Defina espessura, cor e border-radius.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Bordas e Arredondamento

\`\`\`css
.botao {
  border: 1px solid #6fb7db;
  border-radius: 8px;
}
\`\`\``,
    initialCode: `.botao {
  border: 1px solid #6fb7db;
  border-radius: 8px;
}`,
    solutionCode: `.botao {
  border: 1px solid #6fb7db;
  border-radius: 8px;
}`,
    instructions: 'Aplique border e border-radius na classe .botao.',
    hints: ['border: 1px solid #6fb7db; e border-radius: 8px;'],
    testCases: [
      {
        id: 't-css-border',
        description: 'Conter border e border-radius',
        validator: (code) => {
          const ok = /border\s*:/i.test(code) && /border-radius\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Borda estilizada!' : 'Declare border e border-radius.' };
        },
      },
    ],
  },
  {
    id: 'css-width-height',
    title: '8. Dimensões (width e max-width)',
    trackId: 'css',
    category: 'Layout',
    description: 'Controle a largura máxima para layouts responsivos.',
    difficulty: 'Iniciante',
    xp: 50,
    estimatedMinutes: 6,
    theory: `### Largura Responsiva

\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
}
\`\`\``,
    initialCode: `.wrapper {
  width: 100%;
  max-width: 960px;
}`,
    solutionCode: `.wrapper {
  width: 100%;
  max-width: 960px;
}`,
    instructions: 'Defina width: 100% e max-width: 960px.',
    hints: ['width: 100%; e max-width: 960px;'],
    testCases: [
      {
        id: 't-css-dim',
        description: 'Conter width e max-width',
        validator: (code) => {
          const ok = /width\s*:\s*100%/i.test(code) && /max-width\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Dimensões responsivas configuradas!' : 'Declare width e max-width.' };
        },
      },
    ],
  },
  {
    id: 'css-box-sizing',
    title: '9. Box-Sizing: border-box',
    trackId: 'css',
    category: 'Box Model',
    description: 'Inclua padding e bordas dentro do cálculo de largura total.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 6,
    theory: `### Reset Universal de Box-Sizing

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\``,
    initialCode: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
    solutionCode: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
    instructions: 'Aplique box-sizing: border-box no seletor universal *.',
    hints: ['box-sizing: border-box;'],
    testCases: [
      {
        id: 't-css-boxsizing',
        description: 'Conter box-sizing: border-box',
        validator: (code) => {
          const ok = /box-sizing\s*:\s*border-box/i.test(code);
          return { passed: ok, message: ok ? 'Box sizing definido!' : 'Declare box-sizing: border-box.' };
        },
      },
    ],
  },
  {
    id: 'css-backgrounds',
    title: '10. Gradientes em Background',
    trackId: 'css',
    category: 'Estilos Visuais',
    description: 'Crie fundos dinâmicos com linear-gradient().',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Linear Gradient

\`\`\`css
.hero {
  background: linear-gradient(135deg, #0e1626, #070c14);
}
\`\`\``,
    initialCode: `.hero {
  background: linear-gradient(135deg, #ffbe82, #6fb7db);
}`,
    solutionCode: `.hero {
  background: linear-gradient(135deg, #ffbe82, #6fb7db);
}`,
    instructions: 'Aplique um gradiente linear no background da classe .hero.',
    hints: ['linear-gradient(...)'],
    testCases: [
      {
        id: 't-css-grad',
        description: 'Conter background com linear-gradient',
        validator: (code) => {
          const ok = /linear-gradient/i.test(code);
          return { passed: ok, message: ok ? 'Gradiente aplicado!' : 'Falta linear-gradient no background.' };
        },
      },
    ],
  },
  {
    id: 'css-flexbox-container',
    title: '11. Flexbox e justify-content',
    trackId: 'css',
    category: 'Flexbox',
    description: 'Alinhe itens horizontalmente no eixo principal com display: flex.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Flexbox Inicial

\`\`\`css
.linha {
  display: flex;
  justify-content: space-between;
}
\`\`\``,
    initialCode: `.nav {
  display: flex;
  justify-content: space-between;
}`,
    solutionCode: `.nav {
  display: flex;
  justify-content: space-between;
}`,
    instructions: 'Defina display: flex e justify-content: space-between.',
    hints: ['display: flex; e justify-content: space-between;'],
    testCases: [
      {
        id: 't-css-flex',
        description: 'Conter display: flex e justify-content',
        validator: (code) => {
          const ok = /display\s*:\s*flex/i.test(code) && /justify-content\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Flexbox configurado!' : 'Declare display: flex e justify-content.' };
        },
      },
    ],
  },
  {
    id: 'css-flexbox-align',
    title: '12. Alinhamento Vertical (align-items)',
    trackId: 'css',
    category: 'Flexbox',
    description: 'Centralize elementos no eixo cruzado verticalmente.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### align-items

\`\`\`css
.header {
  display: flex;
  align-items: center;
}
\`\`\``,
    initialCode: `.header {
  display: flex;
  align-items: center;
  height: 56px;
}`,
    solutionCode: `.header {
  display: flex;
  align-items: center;
  height: 56px;
}`,
    instructions: 'Aplique display: flex e align-items: center na classe .header.',
    hints: ['align-items: center;'],
    testCases: [
      {
        id: 't-css-alignitems',
        description: 'Conter align-items: center',
        validator: (code) => {
          const ok = /align-items\s*:\s*center/i.test(code);
          return { passed: ok, message: ok ? 'Alinhamento vertical perfeito!' : 'Falta align-items: center.' };
        },
      },
    ],
  },
  {
    id: 'css-flexbox-direction',
    title: '13. Direção Flex (flex-direction: column)',
    trackId: 'css',
    category: 'Flexbox',
    description: 'Empilhe elementos verticalmente para menus mobile.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### flex-direction: column

\`\`\`css
.menu-mobile {
  display: flex;
  flex-direction: column;
}
\`\`\``,
    initialCode: `.sidebar {
  display: flex;
  flex-direction: column;
}`,
    solutionCode: `.sidebar {
  display: flex;
  flex-direction: column;
}`,
    instructions: 'Aplique display: flex e flex-direction: column.',
    hints: ['flex-direction: column;'],
    testCases: [
      {
        id: 't-css-dir',
        description: 'Conter flex-direction: column',
        validator: (code) => {
          const ok = /flex-direction\s*:\s*column/i.test(code);
          return { passed: ok, message: ok ? 'Direção flex configurada!' : 'Declare flex-direction: column.' };
        },
      },
    ],
  },
  {
    id: 'css-flexbox-gap',
    title: '14. Espaçamento Flex com gap',
    trackId: 'css',
    category: 'Flexbox',
    description: 'Adicione espaçamento homogêneo sem margins complicadas.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 6,
    theory: `### A Propriedade gap

\`\`\`css
.lista {
  display: flex;
  gap: 16px;
}
\`\`\``,
    initialCode: `.botoes {
  display: flex;
  gap: 12px;
}`,
    solutionCode: `.botoes {
  display: flex;
  gap: 12px;
}`,
    instructions: 'Defina display: flex com gap de 12px.',
    hints: ['gap: 12px;'],
    testCases: [
      {
        id: 't-css-gap',
        description: 'Conter display: flex com gap',
        validator: (code) => {
          const ok = /display\s*:\s*flex/i.test(code) && /gap\s*:\s*12px/i.test(code);
          return { passed: ok, message: ok ? 'Espaçamento gap validado!' : 'Declare gap: 12px.' };
        },
      },
    ],
  },
  {
    id: 'css-grid-template',
    title: '15. CSS Grid e Colunas',
    trackId: 'css',
    category: 'CSS Grid',
    description: 'Crie layouts bidimensionais com grid-template-columns.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 8,
    theory: `### CSS Grid Básico

\`\`\`css
.grade {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\``,
    initialCode: `.catalogo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    solutionCode: `.catalogo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    instructions: 'Defina display: grid e grid-template-columns: repeat(3, 1fr).',
    hints: ['grid-template-columns: repeat(3, 1fr);'],
    testCases: [
      {
        id: 't-css-grid',
        description: 'Conter display: grid e grid-template-columns',
        validator: (code) => {
          const ok = /display\s*:\s*grid/i.test(code) && /grid-template-columns\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Grade CSS Grid declarada!' : 'Declare grid-template-columns.' };
        },
      },
    ],
  },
  {
    id: 'css-grid-gap',
    title: '16. Espaçamento em Grade (Grid Gap)',
    trackId: 'css',
    category: 'CSS Grid',
    description: 'Controle o espaçamento entre linhas e colunas na grade.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### Espaçamento na Grade

\`\`\`css
.grid-container {
  display: grid;
  gap: 24px;
}
\`\`\``,
    initialCode: `.cards-grid {
  display: grid;
  gap: 20px;
}`,
    solutionCode: `.cards-grid {
  display: grid;
  gap: 20px;
}`,
    instructions: 'Defina display: grid com gap de 20px.',
    hints: ['gap: 20px;'],
    testCases: [
      {
        id: 't-css-gridgap',
        description: 'Conter display: grid com gap',
        validator: (code) => {
          const ok = /display\s*:\s*grid/i.test(code) && /gap\s*:\s*20px/i.test(code);
          return { passed: ok, message: ok ? 'Grid gap validado!' : 'Declare display: grid com gap: 20px.' };
        },
      },
    ],
  },
  {
    id: 'css-pseudo-classes',
    title: '17. Pseudo-classe :hover',
    trackId: 'css',
    category: 'Interações',
    description: 'Crie feedback visual quando o cursor passa sobre um botão.',
    difficulty: 'Intermediário',
    xp: 60,
    estimatedMinutes: 7,
    theory: `### A Pseudo-classe :hover

\`\`\`css
.btn:hover {
  background-color: #ffbe82;
  cursor: pointer;
}
\`\`\``,
    initialCode: `.btn {
  background: #141f30;
}
.btn:hover {
  background: #6fb7db;
}`,
    solutionCode: `.btn {
  background: #141f30;
}
.btn:hover {
  background: #6fb7db;
}`,
    instructions: 'Crie uma regra com a pseudo-classe :hover alterando o background.',
    hints: ['.btn:hover { background: #6fb7db; }'],
    testCases: [
      {
        id: 't-css-hover',
        description: 'Conter seletor com :hover',
        validator: (code) => {
          const ok = /:hover\s*\{[^}]*background/i.test(code);
          return { passed: ok, message: ok ? 'Efeito hover configurado!' : 'Falta regra :hover alterando o background.' };
        },
      },
    ],
  },
  {
    id: 'css-transitions',
    title: '18. Transições Suaves (transition)',
    trackId: 'css',
    category: 'Interações',
    description: 'Anime mudanças de estilo com transições fluidas.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### A Propriedade transition

\`\`\`css
.card {
  transition: all 0.3s ease;
}
\`\`\``,
    initialCode: `.card {
  transition: all 0.3s ease-in-out;
}`,
    solutionCode: `.card {
  transition: all 0.3s ease-in-out;
}`,
    instructions: 'Aplique a propriedade transition no elemento .card.',
    hints: ['transition: all 0.3s ease-in-out;'],
    testCases: [
      {
        id: 't-css-trans',
        description: 'Conter propriedade transition',
        validator: (code) => {
          const ok = /transition\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Transição fluida configurada!' : 'Declare a propriedade transition.' };
        },
      },
    ],
  },
  {
    id: 'css-shadows',
    title: '19. Sombras Elegantes (box-shadow)',
    trackId: 'css',
    category: 'Estilos Visuais',
    description: 'Crie profundidade e elevação com box-shadow.',
    difficulty: 'Avançado',
    xp: 70,
    estimatedMinutes: 8,
    theory: `### box-shadow

\`\`\`css
.aero-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
\`\`\``,
    initialCode: `.card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}`,
    solutionCode: `.card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}`,
    instructions: 'Aplique box-shadow para criar elevação no .card.',
    hints: ['box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);'],
    testCases: [
      {
        id: 't-css-shadow',
        description: 'Conter propriedade box-shadow',
        validator: (code) => {
          const ok = /box-shadow\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Sombra de elevação aplicada!' : 'Declare a propriedade box-shadow.' };
        },
      },
    ],
  },
  {
    id: 'css-desafio-final',
    title: '20. Desafio Integrador: Card Moderno de Interface',
    trackId: 'css',
    category: 'Projeto Integrador',
    description: 'Combine Flexbox, cores Dark Pastel, bordas, sombras e transições.',
    difficulty: 'Avançado',
    xp: 100,
    estimatedMinutes: 12,
    theory: `### Desafio Final de CSS3

Combine background, padding, border-radius, box-shadow, display: flex e transition para criar um componente de interface de alta qualidade.`,
    initialCode: `.card-premium {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease-out;
}
.card-premium:hover {
  border-color: #6fb7db;
}`,
    solutionCode: `.card-premium {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease-out;
}
.card-premium:hover {
  border-color: #6fb7db;
}`,
    instructions: 'Mantenha o card estilizado com display: flex, padding, border-radius, box-shadow e transition.',
    hints: ['Verifique todas as propriedades estilizadas do componente.'],
    testCases: [
      {
        id: 't-css-final',
        description: 'Conter display flex, padding, border-radius e box-shadow',
        validator: (code) => {
          const ok = /display\s*:\s*flex/i.test(code) && /padding\s*:/i.test(code) && /border-radius\s*:/i.test(code) && /box-shadow\s*:/i.test(code);
          return { passed: ok, message: ok ? 'Parabéns! Trilha de CSS3 concluída com excelência em design!' : 'Faltam propriedades essenciais no card.' };
        },
      },
    ],
  },
];
