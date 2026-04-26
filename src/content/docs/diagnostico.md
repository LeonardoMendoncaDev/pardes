---
title: Porque é que a tua IA falha
description: Diagnóstico honesto de porque é que as entregas com IA são inconsistentes — e o que tem de mudar antes de qualquer método resolver o problema.
---

*Antes de mostrar o método, é preciso falar do problema. Se este texto não descreve a tua experiência, PARDES provavelmente não é para ti.*

## A experiência típica

Há doze meses que tens Claude, Cursor ou Copilot abertos a maior parte do dia útil. No início foi entusiasmo: tarefas que demoravam tardes resolvem-se em minutos, *boilerplate* desaparece, *refactors* mecânicos passam a ser triviais. A produtividade dispara nas primeiras semanas.

Depois acontece o que ninguém promete: a velocidade média deixa de subir. Pior, a **variância** entre dias começa a doer. Numa segunda-feira despachas três *features* antes do almoço. Na quarta perdes seis horas a desfazer um *output* que parecia certo, compilou, passou nos testes — e estava semanticamente errado, ou tinha um pressuposto que não se verificava, ou contradizia uma decisão tomada há duas semanas que ninguém tinha registado em lado nenhum.

Ao fim de algum tempo, descobres que a parte difícil deixou de ser escrever código. A parte difícil é confiar no código que o agente entrega.

## A explicação que não funciona

A primeira hipótese tentadora é técnica: *"falta-me um modelo melhor"*, *"falta-me um IDE com melhor integração"*, *"falta-me a *skill* certa configurada"*. Trocas de Cursor para Windsurf, sobes de plano, instalas extensões, lês *threads* sobre o último *prompt* mágico. Melhora pontualmente. Não resolve.

A segunda hipótese é de processo: *"falta-me revisão de código mais rigorosa"*, *"tenho de escrever mais testes"*, *"preciso de fazer *pair programming* com a IA"*. Também ajuda, marginalmente. Também não resolve.

O sintoma volta sempre: dia bom, dia mau, e tu sem conseguir prever em qual estás.

## O que realmente está a falhar

A tua IA não está a falhar a gerar código. Está a gerar código com base numa intenção que tu próprio não fixaste antes de a invocar.

Pensa no típico ciclo de uma manhã: abres o editor, lês a tarefa em cima, formulas mentalmente o que queres, escreves um *prompt* com essa formulação mental, recebes código, ajustas o que está visivelmente errado, *commitas*. A intenção viveu **dentro da tua cabeça** durante todo o ciclo — o agente nunca a viu. O que ele viu foi a tradução abreviada que conseguiste digitar num *prompt*.

Quando a intenção é simples e a tua tradução é boa, o resultado é excelente. Quando a intenção tem sutilezas — uma regra de negócio que tu sabes mas não articulaste, uma restrição implícita do sistema, uma decisão arquitectural anterior, um *edge case* que aprendeste há três semanas e já esqueceste de explicar — o agente preenche os espaços em branco com plausibilidade. E plausibilidade não é correcção. É código que parece certo até falhar.

A inconsistência das tuas entregas não vem do agente. Vem do facto de a fonte da verdade da intenção estar na tua memória de curto prazo, que oscila entre dias, entre cafés, entre *calls* que te interromperam.

## Porque é que isto piora à medida que usas mais IA

Há um efeito perverso. Quanto mais código o agente gera por unidade de tempo, mais decisões implícitas estão a entrar no sistema sem ninguém as fixar. Cada *prompt* que dás materializa pressupostos que tu não escreveste em lado nenhum. Ao fim de uma semana, o teu código contém centenas de mini-decisões que vivem só na tua memória — e a tua memória esquece a maior parte delas em três dias.

Daqui a um mês, alguém (tu próprio, um colega, o agente numa nova sessão) vai ler esse código e perguntar *porquê* assim. A resposta honesta é *já não sei*. E aí começa a corrosão.

## O que é preciso mudar

A cura não é técnica. É de disciplina. Tens de tirar a intenção da tua cabeça e pô-la num sítio onde o agente, o teu colega e o teu eu de daqui a três meses possam consultá-la, contestá-la e revê-la antes de qualquer linha de código.

Isto soa a documentação, mas não é. Documentação serve um leitor humano futuro que quer aprender o sistema. O que precisas é de algo diferente: uma cadeia de decisões fixadas que cada *prompt*, cada revisão, cada nova *feature* possa derivar com previsibilidade. Em PARDES chamamos a isso uma cadeia de *specs*. São curtas, são vivas, e são a única coisa que separa código consistente de código por sorte.

A boa notícia é que, depois de instalado o hábito, isto deixa de parecer trabalho extra. A intenção fixada no início poupa-te horas de retrabalho ao fim do dia, e o agente — com a intenção em frente dele em vez de adivinhar — passa a entregar com a previsibilidade que sempre devia ter tido.

## Próximo passo

Se este diagnóstico bateu, o caminho é o método. A primeira hora basta para verificares na prática se o problema que descrevi é o teu.

→ [Começar em 1 hora](/metodo/onboarding/)
