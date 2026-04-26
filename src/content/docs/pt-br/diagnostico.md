---
title: Por que sua IA falha
description: Diagnóstico honesto de por que as entregas com IA são inconsistentes — e o que precisa mudar antes de qualquer método resolver o problema.
---

*Antes de mostrar o método, é preciso falar do problema. Se este texto não descreve a sua experiência, PARDES provavelmente não é para você.*

## A experiência típica

Há doze meses você tem Claude, Cursor ou Copilot abertos a maior parte do dia útil. No começo foi entusiasmo: tarefas que demoravam tardes se resolvem em minutos, *boilerplate* desaparece, *refactors* mecânicos passam a ser triviais. A produtividade dispara nas primeiras semanas.

Depois acontece o que ninguém promete: a velocidade média para de subir. Pior, a **variância** entre os dias começa a doer. Numa segunda você despacha três *features* antes do almoço. Na quarta perde seis horas desfazendo um *output* que parecia certo, compilou, passou nos testes — e estava semanticamente errado, ou tinha um pressuposto que não se verificava, ou contradizia uma decisão tomada duas semanas atrás que ninguém tinha registrado em lugar nenhum.

Ao fim de algum tempo, você descobre que a parte difícil deixou de ser escrever código. A parte difícil é confiar no código que o agente entrega.

## A explicação que não funciona

A primeira hipótese tentadora é técnica: *"me falta um modelo melhor"*, *"me falta um IDE com integração mais fina"*, *"me falta a *skill* certa configurada"*. Você troca Cursor por Windsurf, sobe de plano, instala extensões, lê *threads* sobre o último *prompt* mágico. Melhora pontualmente. Não resolve.

A segunda hipótese é de processo: *"me falta revisão de código mais rigorosa"*, *"preciso escrever mais testes"*, *"preciso fazer *pair programming* com a IA"*. Também ajuda, marginalmente. Também não resolve.

O sintoma volta sempre: dia bom, dia ruim, e você sem conseguir prever em qual está.

## O que realmente está falhando

Sua IA não está falhando em gerar código. Está gerando código com base numa intenção que você mesmo não fixou antes de invocá-la.

Pense no ciclo típico de uma manhã: você abre o editor, lê a tarefa em cima, formula mentalmente o que quer, escreve um *prompt* com essa formulação mental, recebe código, ajusta o que está visivelmente errado, *commita*. A intenção viveu **dentro da sua cabeça** durante todo o ciclo — o agente nunca a viu. O que ele viu foi a tradução abreviada que você conseguiu digitar num *prompt*.

Quando a intenção é simples e a sua tradução é boa, o resultado é excelente. Quando a intenção tem sutilezas — uma regra de negócio que você sabe mas não articulou, uma restrição implícita do sistema, uma decisão arquitetural anterior, um *edge case* que aprendeu há três semanas e já esqueceu de explicar — o agente preenche os vazios com plausibilidade. E plausibilidade não é correção. É código que parece certo até falhar.

A inconsistência das suas entregas não vem do agente. Vem do fato de a fonte da verdade da intenção estar na sua memória de curto prazo, que oscila entre dias, entre cafés, entre *calls* que te interromperam.

## Por que isto piora à medida que você usa mais IA

Há um efeito perverso. Quanto mais código o agente gera por unidade de tempo, mais decisões implícitas estão entrando no sistema sem ninguém fixá-las. Cada *prompt* que você dá materializa pressupostos que você não escreveu em lugar nenhum. Ao fim de uma semana, o seu código contém centenas de mini-decisões que vivem só na sua memória — e a sua memória esquece a maior parte delas em três dias.

Daqui a um mês, alguém (você mesmo, um colega, o agente numa nova sessão) vai ler esse código e perguntar *por que* assim. A resposta honesta é *já não sei*. E aí começa a corrosão.

## O que precisa mudar

A cura não é técnica. É de disciplina. Você precisa tirar a intenção da sua cabeça e pô-la num lugar onde o agente, o seu colega e o seu eu de daqui a três meses possam consultá-la, contestá-la e revisá-la antes de qualquer linha de código.

Isto soa como documentação, mas não é. Documentação serve um leitor humano futuro que quer aprender o sistema. O que você precisa é de algo diferente: uma cadeia de decisões fixadas que cada *prompt*, cada revisão, cada nova *feature* possa derivar com previsibilidade. Em PARDES chamamos isso de cadeia de *specs*. São curtas, são vivas, e são a única coisa que separa código consistente de código por sorte.

A boa notícia é que, depois do hábito instalado, isto deixa de parecer trabalho extra. A intenção fixada no começo te poupa horas de retrabalho ao fim do dia, e o agente — com a intenção na frente dele em vez de adivinhar — passa a entregar com a previsibilidade que sempre deveria ter tido.

## Próximo passo

Se este diagnóstico bateu, o caminho é o método. A primeira hora basta para você verificar na prática se o problema que descrevi é o seu.

→ [Começar em 1 hora](/pt-br/metodo/onboarding/)
