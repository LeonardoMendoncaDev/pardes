---
title: Começar com pardes init
description: Em dois minutos você vai ter PARDES aplicado a uma feature real sua, com seu agente de IA pronto a conduzir a entrevista profunda com você. Um único comando, uma única pergunta de escolha, um Cmd+V.
---

<div class="metodo-page">

> **Audiência.** *Developer* com pelo menos um ano de experiência, que usa Claude Code, Cursor, Copilot, Windsurf, Gemini CLI ou Aider no dia a dia, e que se reviu no [diagnóstico](/pt-br/diagnostico/) — entregas inconsistentes, dia bom e dia mau sem conseguir prever em qual está.
>
> **Objetivo.** Ao fim de dois minutos, você vai ter PARDES aplicado a uma *feature* sua, o agente de IA com o briefing certo nas mãos, e a entrevista profunda começando com você no editor. Você não vai dominar o método. Vai ter sentido, num caso seu, a diferença entre invocar a IA com a intenção fixada e invocar com pressa.
>
> **Pré-requisitos.** A CLI `pardes` instalada (ver [instalar a CLI](/pt-br/cli/instalar/)). Uma *feature* pequena sua que já queria fazer hoje. Dois minutos sem reuniões.

---

## A ideia central — em duas frases

A inconsistência das entregas com IA não vem do agente, vem da intenção que você nunca fixou antes do *prompt*. PARDES coreografa a captura dessa intenção com você e com seu agente — você faz um único gesto na linha de comando, e o agente assume o papel de entrevistador profundo a partir daí.

PARDES tem 15 passos no total. Hoje você vai começar pelo passo 1-2: a *Spec de Intenção*. Os outros vivem para outras horas; este é o que muda mais o resultado.

---

## Os próximos dois minutos, passo a passo

### 1. Escolha uma *feature* (30 segundos)

Pega numa coisa que estava mesmo planejando fazer hoje ou amanhã. Critérios:

- **Pequena.** Algo que normalmente despacharia em uma a três horas. Não um produto novo, não uma reescrita arquitetural — uma *feature*, um *endpoint*, uma tela, uma integração simples, um *script*.
- **Real.** Não invente pro exercício. O efeito vem de aplicar o método a algo onde você mesmo tem *stake* no resultado.

Crie a pasta da *feature* (ou navegue até ela se já existe) no terminal.

### 2. Rode `pardes init` (30 segundos)

```bash
pardes init
```

A CLI vai te perguntar o idioma — escolha e siga. A partir daí, você vai ver no terminal um conjunto de etapas aparecendo com `✓` verde à frente: detectando a *stack* do seu projeto, inferindo se é *greenfield* ou *brownfield*, escrevendo os arquivos `pardes/_estado.md` e `pardes/intent.md`, montando o briefing-mestre e copiando para o seu *clipboard*. Você não precisa fazer nada — só ver o que está acontecendo.

### 3. Escolha seu agente de IA (10 segundos)

A seguir, a CLI faz uma única pergunta: qual agente de IA você usa? Aparece uma lista com os principais — Claude Code, Gemini CLI, Aider, Codex CLI, Cursor, Windsurf, VS Code com Copilot, VS Code com Cline, ou *"outro / só copiar para o clipboard"*. Escolhe um e segue.

A CLI abre automaticamente um terminal novo com o agente CLI já rodando na pasta da *feature*, ou o IDE já com a chat lateral aberta. Se o sistema não conseguir abrir automaticamente, mostra o comando para você rodar — mas o briefing já está sempre no clipboard.

### 4. Cole com `Cmd+V` (5 segundos)

Na janela do agente, faz `Cmd+V` (ou `Ctrl+V` no Linux/Windows). É seu último gesto manual.

A CLI imprime no final uma caixa colorida bem visível lembrando você disso, com seta amarela, pra você não esquecer — sem esse *paste* nada acontece. Se passar lendo rápido, fique olhando para a caixa.

### 5. Deixe o agente conduzir a entrevista (daqui — minutos a dias)

Assim que o agente recebe o briefing, ele:

- Lê o esqueleto de `intent.md` e percebe que ainda está vazio.
- Apresenta-se a você como o entrevistador profundo da Spec de Intenção.
- Faz a primeira pergunta — quem é o usuário dessa *feature*. Em uma frase.
- A partir das suas respostas, vai preenchendo o `intent.md` colaborativamente, seção a seção: para quem é, qual a intenção, que valor entrega, o que NÃO é (não-intenção), restrições conhecidas.
- Pergunta uma de cada vez. Não despeja questionários. Adapta as perguntas seguintes às suas respostas anteriores.

Quando o agente perguntar pelo **não-intenção**, preste atenção redobrada — é a seção que seu cérebro vai querer pular e é a que evita que o agente preencha vazios com plausibilidade.

---

## Sinais de que funcionou

Se os primeiros minutos rodaram como deviam, você deve estar sentindo uma ou mais dessas coisas:

- O agente te fez perguntas que normalmente nunca faz — porque dessa vez tinha contexto suficiente para detectar lacunas.
- Você se sentiu ouvido em vez de empurrando uma *prompt* atrás da outra.
- Você se deu conta, ao responder ao não-intenção, de pelo menos uma decisão implícita que estava tomando sem saber.
- O `intent.md` no seu editor foi se enchendo enquanto vocês conversavam, sem você ter que escrever à mão.

Se não sentiu nada disso, é provável que a *feature* escolhida fosse simples demais (não havia intenção nenhuma para fixar) ou complexa demais (não era para começar por aqui). Repita amanhã com outra.

## E agora?

Hoje você deu um único comando e o agente assumiu daí. O que mudou foi pequeno na superfície — só rodou `pardes init` antes do *prompt* — e grande no efeito. A pergunta honesta agora é: você vai voltar a fazer isso amanhã, na próxima *feature*?

Se a resposta é *sim*, instale o hábito uma semana e revisite os outros materiais quando a dúvida aparecer:

- [A cadeia de 15 passos](/pt-br/metodo/cadeia/) — o mapa completo, para quando uma *feature* maior justificar avançar para Domínio, Capacidades, Contratos e por aí adiante.
- [O teste das 3 frases](/pt-br/metodo/teste-3-frases/) — a regra do final em detalhe, com exemplos e armadilhas.
- [Sobre o autor](/pt-br/sobre-o-autor/) — para abrir canal direto.

Se a resposta é *não tenho certeza*, escreva. O custo da pergunta é sempre menor que o custo de caminhar na direção errada.

</div>
