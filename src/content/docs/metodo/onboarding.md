---
title: Começar com pardes init
description: Em dois minutos vais ter PARDES aplicado a uma feature real tua, com o teu agente de IA pronto a conduzir a entrevista profunda contigo. Um único comando, uma única pergunta de escolha, um Cmd+V.
---

<div class="metodo-page">

> **Audiência.** *Developer* com pelo menos um ano de experiência, que usa Claude Code, Cursor, Copilot, Windsurf, Gemini CLI ou Aider no dia a dia, e que se reviu no [diagnóstico](/diagnostico/) — entregas inconsistentes, dia bom e dia mau sem conseguir prever em qual está.
>
> **Objectivo.** Ao fim de dois minutos, vais ter PARDES aplicado a uma *feature* tua, o agente de IA com o briefing certo nas mãos, e a entrevista profunda a começar contigo no editor. Não vais dominar o método. Vais ter sentido, num caso teu, a diferença entre invocar a IA com a intenção fixada e invocar à pressa.
>
> **Pré-requisitos.** A CLI `pardes` instalada (ver [instalar a CLI](/cli/instalar/)). Uma *feature* pequena tua que já querias fazer hoje. Dois minutos sem reuniões.

---

## A ideia central — em duas frases

A inconsistência das entregas com IA não vem do agente, vem da intenção que tu nunca fixaste antes do *prompt*. PARDES coreografa a captura dessa intenção contigo e com o teu agente — tu fazes um único gesto na linha de comandos, e o agente assume o papel de entrevistador profundo a partir daí.

PARDES tem 15 passos no total. Hoje vais começar pelo passo 1-2: a *Spec de Intenção*. Os outros vivem para outras horas; este é o que muda mais o resultado.

---

## Os próximos dois minutos, passo a passo

### 1. Escolhe uma *feature* (30 segundos)

Pega numa coisa que estavas mesmo a planear fazer hoje ou amanhã. Critérios:

- **Pequena.** Algo que normalmente despacharias em uma a três horas. Não um produto novo, não uma reescrita arquitectural — uma *feature*, um *endpoint*, um ecrã, uma integração simples, um *script*.
- **Real.** Não inventes para o exercício. O efeito vem de aplicar o método a algo onde tu próprio tens *stake* no resultado.

Cria a pasta da *feature* (ou navega até ela se já existe) no terminal.

### 2. Corre `pardes init` (30 segundos)

```bash
pardes init
```

A CLI vai perguntar-te o idioma — escolhe e segue. A partir daí, vais ver no terminal um conjunto de etapas a aparecer com `✓` verde à frente: a detectar a *stack* do teu projecto, a inferir se é *greenfield* ou *brownfield*, a escrever os ficheiros `pardes/_estado.md` e `pardes/intent.md`, a montar o briefing-mestre e a copiá-lo para o teu *clipboard*. Não tens de fazer nada — só ver o que está a acontecer.

### 3. Escolhe o teu agente de IA (10 segundos)

A seguir, a CLI faz-te uma única pergunta: qual agente de IA usas? Aparece uma lista com os principais — Claude Code, Gemini CLI, Aider, Codex CLI, Cursor, Windsurf, VS Code com Copilot, VS Code com Cline, ou *"outro / só copiar para o clipboard"*. Escolhes um e segue.

A CLI abre-te automaticamente um terminal novo com o agente CLI já a correr na pasta da *feature*, ou o IDE já com a chat lateral aberta. Se o sistema não conseguir abrir automaticamente, mostra-te o comando para correres tu — mas o briefing já está sempre no clipboard.

### 4. Cola com `Cmd+V` (5 segundos)

Na janela do agente, faz `Cmd+V` (ou `Ctrl+V` no Linux/Windows). É o teu último gesto manual.

A CLI imprime no fim uma caixa colorida bem visível a lembrar-te exactamente isto, com seta amarela, para não te esqueceres — sem este *paste* nada acontece. Se o passas a ler depressa, fica a olhar para a caixa.

### 5. Deixa o agente conduzir a entrevista (a partir daqui — minutos a dias)

Assim que o agente recebe o briefing, ele:

- Lê o esqueleto de `intent.md` e percebe que ainda está vazio.
- Apresenta-se a ti como o entrevistador profundo da Spec de Intenção.
- Faz-te a primeira pergunta — quem é o utilizador desta *feature*. Em uma frase.
- A partir das tuas respostas, vai preenchendo o `intent.md` colaborativamente, secção a secção: para quem é, qual a intenção, que valor entrega, o que NÃO é (não-intenção), restrições conhecidas.
- Pergunta uma de cada vez. Não despeja questionários. Adapta as perguntas seguintes às tuas respostas anteriores.

Quando o agente perguntar pelo **não-intenção**, presta atenção redobrada — é a secção que o teu cérebro vai querer saltar e é a que evita que o agente preencha vazios com plausibilidade.

---

## Sinais de que funcionou

Se os primeiros minutos correram como deviam, deves estar a sentir uma ou mais destas coisas:

- O agente fez-te perguntas que normalmente nunca te faz — porque desta vez tinha contexto suficiente para detectar lacunas.
- Sentiste-te ouvido em vez de a empurrar uma *prompt* atrás de outra.
- Apercebeste-te, ao responder ao não-intenção, de pelo menos uma decisão implícita que estavas a tomar sem saber.
- O `intent.md` no teu editor foi-se enchendo enquanto conversavas, sem teres de o escrever à mão.

Se não sentiste nada disto, é provável que a *feature* escolhida fosse demasiado simples (não havia intenção nenhuma para fixar) ou demasiado complexa (não era para começar por aqui). Repete amanhã com outra.

## E agora?

Hoje deste um único comando e o agente assumiu daí. O que mudou foi pequeno na superfície — só correste `pardes init` antes do *prompt* — e grande no efeito. A questão honesta agora é: vais voltar a fazer isto amanhã, na próxima *feature*?

Se a resposta é *sim*, instala o hábito uma semana e revisita os outros materiais quando a dúvida aparecer:

- [A cadeia de 15 passos](/metodo/cadeia/) — o mapa completo, para quando uma *feature* maior justifique avançar para Domínio, Capacidades, Contratos e por aí adiante.
- [O teste das 3 frases](/metodo/teste-3-frases/) — a regra do final em detalhe, com exemplos e armadilhas.
- [Sobre o autor](/sobre-o-autor/) — para abrir canal directo.

Se a resposta é *não tenho a certeza*, escreve. O custo da pergunta é sempre menor que o custo de caminhar na direcção errada.

</div>
