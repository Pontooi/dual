# 🎨 DualDev Academy — Especificação Completa para Wireframe no Figma

Este documento serve como guia arquitetural e manual de design passo a passo para desenhar o **Wireframe (Baixa e Alta Fidelidade)** e o **Design System do DualDev** no **Figma**.

Ele contém todas as dimensões de tela, tokens de cores, tipografia, componentes atômicos, hierarquia de layout e os fluxos de navegação necessários para documentar, apresentar ou expandir o projeto.

---

## 📌 Sumário
1. [Configuração de Frames no Figma](#1-configuração-de-frames-no-figma)
2. [Design Tokens & Estilos Globais](#2-design-tokens--estilos-globais)
   - [Paleta de Cores (Dark Pastel)](#paleta-de-cores-dark-pastel)
   - [Tipografia](#tipografia)
   - [Espaçamentos e Bordas](#espaçamentos-e-bordas)
3. [Biblioteca de Componentes (Design System Atômico)](#3-biblioteca-de-componentes-design-system-atômico)
4. [Estrutura Detalhada das Telas (Wireframe por Tela)](#4-estrutura-detalhada-das-telas-wireframe-por-tela)
   - [Tela 1: Início (Home / Catálogo)](#tela-1-início-home--catálogo)
   - [Tela 2: Academia (Ambiente de Aula Interativo)](#tela-2-academia-ambiente-de-aula-interativo)
   - [Tela 3: Playground Livre (Sandbox)](#tela-3-playground-livre-sandbox)
   - [Tela 4: Conquistas & Missões (Gamificação)](#tela-4-conquistas--missões-gamificação)
   - [Tela 5: Sobre & Catálogo de Snippets](#tela-5-sobre--catálogo-de-snippets)
5. [Adaptação Mobile (Versão Celular / PWA)](#5-adaptação-mobile-versão-celular--pwa)
6. [Fluxos do Usuário e Interações para Prototipagem](#6-fluxos-do-usuário-e-interações-para-prototipagem)

---

## 1. Configuração de Frames no Figma

Crie uma página no Figma chamada **`DualDev - Wireframes & UI`** e organize os seguintes frames principais:

| Dispositivo | Largura x Altura | Grid / Layout Guides |
| :--- | :--- | :--- |
| **Desktop 1440p (Padrão)** | `1440 x 1024 px` | 12 Colunas, Margem: `80px`, Gutter: `24px` |
| **Desktop Compacto (Laptop)** | `1280 x 800 px` | 12 Colunas, Margem: `48px`, Gutter: `16px` |
| **Mobile (iPhone 14 / Android)** | `393 x 852 px` | 4 Colunas, Margem: `16px`, Gutter: `12px` |

---

## 2. Design Tokens & Estilos Globais

Crie estes estilos como **Color Styles** e **Text Styles** no painel direito do Figma para garantir consistência.

### Paleta de Cores (Dark Pastel)

| Token Figma | Hexadecimal | Uso no Projeto |
| :--- | :--- | :--- |
| `Bg / App Background` | `#0B101B` | Fundo principal da aplicação |
| `Surface / Card Base` | `#0F172A` | Superfície dos cartões, painéis e teoria |
| `Surface / Header & Topbar` | `#0E1626` | Barra de navegação e cabeçalhos de janela |
| `Surface / Code Editor` | `#09101A` | Área de digitação do editor |
| `Surface / Line Numbers` | `#070C14` | Calha lateral de numeração de linhas |
| `Accent / Peach (Primário)` | `#FFBE82` | Botão "Executar", CTAs, badges de XP |
| `Accent / Sky (Secundário)` | `#9FD6F2` | Bordas finas, títulos, saídas do terminal |
| `Accent / Cerulean (Ativo)` | `#6FB7DB` | Linguagem ativa, abas selecionadas |
| `Feedback / Mint (Sucesso)` | `#86EFAC` | Botão "Verificar", testes aprovados |
| `Feedback / Rose (Erro)` | `#FCA5A5` | Erros de compilação, falha de teste |
| `Border / Subtle` | `#1E293B` | Divisores e bordas estruturais |
| `Text / High Contrast` | `#FFFFFF` | Títulos e textos de ênfase |
| `Text / Medium` | `#CBD5E1` | Parágrafos de leitura teórica |
| `Text / Muted` | `#64748B` | Textos secundários, contadores e placeholders |

---

### Tipografia

Instale ou selecione as seguintes famílias gratuitas do Google Fonts no Figma:

1. **Interface Geral (UI):** `Inter`
   - **Hero Display:** `36px` / `Extrabold` / Line-height `44px`
   - **H1 (Título de Página):** `24px` / `Bold` / Line-height `32px`
   - **H2 (Seção):** `18px` / `Bold` / Line-height `26px`
   - **H3 (Subtítulo):** `14px` / `SemiBold` / Line-height `20px`
   - **Body (Corpo de Texto):** `13px` / `Regular` / Line-height `20px`
   - **Caption (Legendas/Badges):** `11px` / `Medium` / Line-height `14px`

2. **Editor de Código e Terminal:** `JetBrains Mono`
   - **Code Editor:** `13px` / `Regular` / Line-height `24px`
   - **Gutter Numbers:** `12px` / `Regular` / Line-height `24px`
   - **Terminal Output:** `12px` / `Medium` / Line-height `18px`
   - **Badges de XP:** `11px` / `Bold` / Line-height `14px`

---

### Espaçamentos e Bordas

- **Corner Radius (Arredondamento):**
  - Botões, chips e tags: `6px` ou `8px`
  - Cartões e painéis (`aero-card`): `12px`
  - Banner Hero: `16px`
- **Auto-Layout Spacing:** `4px`, `8px`, `12px`, `16px`, `24px`, `32px`

---

## 3. Biblioteca de Componentes (Design System Atômico)

Crie estes componentes como **Main Components (`❖`)** no Figma:

### A. Botões
1. **Button / Primary (Pêssego):**
   - Altura: `36px` | Auto-layout horizontal | Gap `6px` | Padding `12px 16px`
   - Fill: `#FFBE82` | Text: `#0B101B` (`13px`, Bold) | Icon: `Play`
2. **Button / Success (Menta):**
   - Altura: `36px` | Fill: `#86EFAC` | Text: `#0B101B` | Icon: `CheckCircle2`
3. **Button / Glass (Secundário):**
   - Altura: `36px` | Fill: `#141F30` | Stroke: `1px #9FD6F2` (opacidade 25%) | Text: `#FFFFFF`
4. **Button / Icon Only:**
   - Tamanho: `32 x 32 px` | Fill: `transparent` ou `#141F30` | Ícone: `Trash`, `Copy`, `RotateCcw`

### B. Chips & Indicadores
1. **XP & Level Chip (Navbar):**
   - Fill: `#131D2E` | Stroke: `1px #FFBE82` (opacidade 30%)
   - Conteúdo: Ícone de Raio (`#FFBE82`) + Texto `"120 XP | Nv. 1"`
2. **Track Language Pill:**
   - Estado Inativo: Fill `#131D2E` | Text `#94A3B8`
   - Estado Ativo: Fill `#6FB7DB` | Text `#0B101B` (Bold) + Badge `% concluído`

### C. Cards Estruturais (`aero-card`)
- Fill: `#0F172A` | Stroke: `1px #1E293B` | Radius: `12px`
- Sombra suave: `Y: 4px`, `Blur: 12px`, Cor: `rgba(0, 0, 0, 0.35)`

---

## 4. Estrutura Detalhada das Telas (Wireframe por Tela)

---

### Tela 1: Início (Home / Catálogo)
**Objetivo:** Apresentar a plataforma, permitir seleção rápida de trilhas e dar acesso imediato aos exercícios.

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (56px fixo) [Logo DualDev] [Links: Início, Academia...] [XP Nv] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ BANNER HERO (Fundo #0F172A, Borda #1E293B, Radius 16px)          │  │
│  │  [✦ Trilha Java Ativa]                                           │  │
│  │  DOMINE JAVA E PROGRAMAÇÃO ORIENTADA A OBJETOS NA PRÁTICA        │  │
│  │  Escreva código no navegador com feedback e testes em tempo real │  │
│  │                                                                  │  │
│  │  [▶ Acessar Academia Java]  [</> Playground Livre]  [🏆 Conquistas]│
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  Destaques da Trilha Java                               [Ver todas →]  │
│  ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐  │
│  │ Lição 1: Variáveis │ │ Lição 2: Métodos   │ │ Lição 3: Arrays    │  │
│  │ Fundamentos        │ │ Estruturas         │ │ Coleções           │  │
│  │ +20 XP [Concluído] │ │ +25 XP [Pendente]  │ │ +30 XP [Pendente]  │  │
│  └────────────────────┘ └────────────────────┘ └────────────────────┘  │
│                                                                        │
│  Todas as Trilhas de Aprendizagem                                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ Java         │ │ Python       │ │ JavaScript   │ │ HTML5 & CSS3 │   │
│  │ 6 aulas • Ativa│ 5 aulas      │ │ 5 aulas      │ │ 8 aulas      │   │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Tela 2: Academia (Ambiente de Aula Interativo)
**Objetivo:** O coração da aplicação. Layout profissional dividido em 3 painéis para manter teoria, código e execução visíveis simultaneamente.

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVBAR: [Logo DualDev] [Abas] [Instalar PWA] [Linguagem ▾] [XP / Nível]│
├────────────────────────────────────────────────────────────────────────┤
│ SUB-BARRA: [Java 50%] [Python 0%] [JS 0%] [HTML 0%]    [☰ Exercícios] │
├──────────────┬─────────────────────────┬───────────────────────────────┤
│ PAINEL 1:    │ PAINEL 2: TEORIA & GUIA │ PAINEL 3: EDITOR & TERMINAL   │
│ LATERAL      │ (Largura: 40%)          │ (Largura: 60%)                │
│ (Retrátil)   │                         │                               │
│              │ [Badge Categoria] [XP]  │ ┌───────────────────────────┐ │
│ Trilha Java  │ Título da Aula          │ │ Main.java [Snippets] [Run]│ │
│ 3/6 Feitas   │                         │ ├───────────────────────────┤ │
│              │ Teoria em Markdown:     │ │ 1 public class Main {     │ │
│ ✓ Aula 1     │ - Conceito explicado    │ │ 2   public static void... │ │
│ ● Aula 2     │ - Blocos de exemplo ``` │ │ 3     System.out.println..│ │
│ ○ Aula 3     │                         │ │ 4   }                     │ │
│ ○ Aula 4     │ ┌─────────────────────┐ │ │ 5 }                       │ │
│ ○ Aula 5     │ │ Objetivo do Desafio │ │ └───────────────────────────┘ │
│ ○ Aula 6     │ └─────────────────────┘ │ ┌───────────────────────────┐ │
│              │ [▼ Precisa de Ajuda?]   │ │ [Terminal] [Testes (2/2)] │ │
│              │                         │ ├───────────────────────────┤ │
│              │ [← Ant]     [Próxima →] │ │ Olá, DualDev!             │ │
│              │                         │ │ ✓ Teste 1: Passou (4ms)   │ │
│              │                         │ └───────────────────────────┘ │
└──────────────┴─────────────────────────┴───────────────────────────────┘
```

---

### Tela 3: Playground Livre (Sandbox)
**Objetivo:** Espaço desimpedido para testar qualquer algoritmo sem obrigações de lição ou regras de testes.

- **Topo:** Título com ícone de Terminal + Botões de Linguagem (`JAVA`, `PYTHON`, `JS`) + Dropdown de Modelos (`Presets`).
- **Divisão 50% / 50%:**
  - **Lado Esquerdo:** Editor de código completo com atalhos de autocompletar e numeração de linhas.
  - **Lado Direito:** Terminal de saída com suporte a logs e relatórios de erro com destaque em rosa pastel.

---

### Tela 4: Conquistas & Missões (Gamificação)
**Objetivo:** Retenção e engajamento do aluno através de metas claras e recompensas visuais.

```
┌────────────────────────────────────────────────────────────────────────┐
│ RESUMO DO DESENVOLVEDOR                                                │
│ ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐   │
│ │ NÍVEL DO DEV       │ │ MISSÕES DIÁRIAS    │ │ INSÍGNIAS          │   │
│ │ Nível 2 (245 XP)   │ │ 2 / 3 Concluídas   │ │ 4 / 6 Desbloqueadas│   │
│ │ [Barra: 63% → Nv 3]│ │ Reinicia às 00:00  │ │                    │   │
│ └────────────────────┘ └────────────────────┘ └────────────────────┘   │
│                                                                        │
│ MISSÕES DE HOJE                                                        │
│ ┌─────────────────────────┐ ┌─────────────────────────┐                │
│ │ Primeiro Código do Dia  │ │ Maratona de Execuções   │                │
│ │ Execute código 1 vez    │ │ Execute código 3 vezes  │                │
│ │ [Barra: 1/1 Concluída ✓]│ │ [Barra: 2/3 Em andamento]│                │
│ └─────────────────────────┘ └─────────────────────────┘                │
│                                                                        │
│ GALERIA DE INSÍGNIAS [Filtros: Todas | Java | Progresso]               │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│ │ 🏆 Hello Dev │ │ ☕ Mestre Java│ │ ⚡ Em Chamas  │ │ 🔒 Arquitetura │    │
│ │ Desbloqueada │ │ Desbloqueada │ │ Desbloqueada │ │ Bloqueada    │    │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘    │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Tela 5: Sobre & Catálogo de Snippets
**Objetivo:** Documentação interativa das ferramentas, atalhos do teclado e funcionamento interno.

- **Cabeçalho:** Logotipo com ícone de código em degradê pêssego/celeste e introdução.
- **Card de Snippets Estilo VS Code:**
  - Abas para alternar a linguagem (`Java`, `Python`, `JS`, etc.).
  - Grid de snippets com prefixo (`sout`, `main`, `def`, `clg`), descrição, código pré-formatado e botão de copiar para a área de transferência.

---

## 5. Adaptação Mobile (Versão Celular / PWA)

No frame mobile (`393 x 852 px`), aplique as seguintes alterações ergonômicas:

1. **Barra de Navegação Inferior (Bottom Bar - 60px):**
   - Substitui o menu do topo por 5 abas com ícone e texto:
     `[Início]  [Academia]  [Playground]  [Conquistas]  [Sobre]`
2. **Tela da Academia no Celular:**
   - Em vez de 3 colunas laterais, use **pilha vertical com abas de topo**:
     `[Aba 1: Teoria] | [Aba 2: Código] | [Aba 3: Terminal]`
   - Isso permite que o usuário leia a explicação e, ao tocar em "Programar", tenha a tela inteira dedicada ao editor de código e teclado virtual.
3. **Botão Flutuante de Instalação PWA:**
   - Exibir botão fixo no topo: `"Instalar App"` para adicionar à tela inicial sem a barra de URL do navegador.

---

## 6. Fluxos do Usuário e Interações para Prototipagem

Conecte as seguintes interações na aba **Prototype** do Figma:

### Fluxo 1: Resolver um Exercício com Sucesso
1. **Origem:** Tela Início ➔ Clicar no botão `"Acessar Academia"`.
2. **Destino:** Tela Academia com o código inicial carregado no Editor.
3. **Ação:** Clicar no botão `"Verificar"` (Menta).
4. **Transição:**
   - O botão exibe spinner de carregamento (`Loader2`).
   - A aba inferior muda automaticamente de `"Terminal"` para `"Testes"`.
   - Os cards de teste exibem o selo verde `"PASSOU"`.
   - O indicador de XP na Navbar sobe com animação sutil.

### Fluxo 2: Modo Foco / Recolher Exercícios
1. **Origem:** Tela Academia ➔ Clicar no botão `"Recolher"` / Ícone de Menu (`☰`).
2. **Transição:** Smart Animate (`Ease Out 200ms`).
3. **Resultado:** A barra lateral de aulas desliza para a esquerda (`w-0`), expandindo o Editor de Código e o Terminal para 100% da largura útil.

### Fluxo 3: Visualizar Gabarito / Dica
1. **Origem:** Painel de Teoria ➔ Clicar em `"Precisa de ajuda? (3 dicas)"`.
2. **Transição:** O acordeão expande para baixo exibindo as dicas.
3. **Ação:** Clicar em `"Ver código da solução sugerida"`.
4. **Resultado:** O editor de código é preenchido com a resposta correta para estudo.

---

## 💡 Dicas de Apresentação no Figma
- **Auto-Layout em tudo:** Configure todos os botões, cards e grids com Auto-Layout (`Shift + A`). Isso facilita testar o design em telas largas e estreitas.
- **Variáveis do Figma (Tokens):** Crie variáveis para as cores da paleta Dark Pastel para que você consiga alternar estilos facilmente.
- **Componentes Interativos:** Crie variantes para os botões (`Default`, `Hover`, `Loading`, `Disabled`).
