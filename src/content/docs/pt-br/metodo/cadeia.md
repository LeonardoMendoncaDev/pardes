---
title: A cadeia de 15 passos
description: Os 15 passos da cadeia PARDES — da intenção literal à operação emergente.
---

<div class="metodo-page">

A cadeia PARDES organiza o ciclo de vida de um sistema de software em quinze passos encadeados. Alterna entre **spec** (passos ímpares, onde se articula) e **execução** (passos pares, onde se materializa). Cada passo tem um artefato associado e uma camada hermenêutica — Peshat, Remez, Drash ou Sod.

A cadeia não é uma sequência rígida. É uma **taxonomia** — um mapa do que existe, não uma ordem obrigatória. Em muitos casos reais se aplica de forma mista ou retrospectiva: o código já existe e as *specs* são escritas lendo o código; ou há só intenção clara e uma fatia de execução antes de qualquer *spec* formal. O que importa é que, ao final, cada passo relevante tem o seu artefato coerente com os vizinhos.

## Os 15 passos mapeados às quatro camadas PaRDeS

| Passo | Tipo | Nome | Camada PaRDeS |
|-------|------|------|----------------|
| 1-2 | Spec | Propósito | Peshat (literal) |
| 3 | Spec | Domínio | Peshat (literal) |
| 4 | Spec | Capacidades | Remez (alusivo) |
| 5 | Spec | Contratos | Remez (alusivo) |
| 6 | Spec | Comportamento | Drash (interpretativo) |
| 7 | Spec | Orquestração | Drash (interpretativo) |
| 8 | Execução | Implementação | Drash (interpretativo) |
| 9 | Spec | Validação | Drash (interpretativo) |
| 10 | Execução | Validação executada | Drash (interpretativo) |
| 11 | Spec | *Deployment* | Sod (emergente) |
| 12 | Execução | *Deploy* executado | Sod (emergente) |
| 13 | Spec | Observabilidade | Sod (emergente) |
| 14 | Execução | Operação | Sod (emergente) |
| 15 | Spec | Evolução | Sod (emergente) |

Quando o passo 15 é executado, volta-se ao passo 1 — a intenção ainda é válida? A cadeia é um ciclo, não uma linha.

## Peshat — o literal (passos 1-3)

A camada onde a intenção é capturada em linguagem direta, sem metáfora nem alusão.

- **Propósito** (passos 1-2) responde a *por que este sistema deve existir, para quem, e o que ele expressamente não é*. O *não-propósito* é tão importante quanto o propósito — delimita o escopo e protege contra *feature creep*.
- **Domínio** (passo 3) captura os conceitos, regras e restrições do problema real. Não é modelagem de classes; é modelagem do mundo que o código vai representar.

## Remez — o alusivo (passos 4-5)

A camada onde o propósito aponta para o que o sistema vai fazer, sem ainda descrever como.

- **Capacidades** (passo 4) lista o que o sistema **faz**, do ponto de vista do ator. Verbos, não implementações.
- **Contratos** (passo 5) descreve como o sistema é acessado: *endpoints*, funções expostas, eventos emitidos, protocolos honrados.

## Drash — o interpretativo (passos 6-10)

A camada onde a intenção passa pelo filtro da realidade material e se traduz em código.

- **Comportamento** (passo 6) define *guardrails*, limites de autonomia, modos de escalação — especialmente crítico quando há agentes com alguma autonomia.
- **Orquestração** (passo 7) articula quem executa o quê, em que ordem, com que dependências. É o grafo de execução.
- **Implementação** (passo 8) é o código em si. Aqui se aplica a disciplina de aceitar cada bloco — ver [O teste das 3 frases](/pt-br/metodo/teste-3-frases/).
- **Validação** (passo 9) define os critérios de aceitação e os testes que os verificam.
- **Validação executada** (passo 10) é rodar os testes e ver o que falha.

## Sod — o emergente (passos 11-15)

A camada que só se revela quando o sistema entra em operação real.

- ***Deployment*** (passo 11) define onde, como e em que condições o sistema vai para produção.
- ***Deploy* executado** (passo 12) é o ato de colocar em produção.
- **Observabilidade** (passo 13) define métricas, alertas e *dashboards*. Sem esta camada não se sabe se o propósito está sendo cumprido na realidade.
- **Operação** (passo 14) é o sistema rodando, sendo usado, ensinando sobre si próprio.
- **Evolução** (passo 15) reavalia a intenção original à luz do que o sistema ensinou. Quando é executada, volta-se ao passo 1.

## Como funciona na prática

A cadeia não é aplicada por inteiro em cada unidade de trabalho. Um *bug* de três linhas não precisa das quinze *specs* — basta atualizar o estado e *commitar*. Uma *feature* pequena pode ter duas a quatro *specs* escritas em registro curto. Um produto novo pode justificar a cadeia inteira. O critério é o **custo da decisão errada**: quanto maior o custo de se enganar, mais profunda faz sentido ser a *spec*.

A heurística que resume isso é simples: *a spec aparece quando a ausência dela estaria gerando decisões erradas*. Se você consegue progredir sem escrevê-la, não escreva. Se fica travado em discussões circulares sobre *"o que é essa coisa exatamente?"*, a *spec* aparece.

<div class="exercise">

**Para aplicar agora**

Pegue uma unidade de trabalho real em que você esteja envolvido — pode ser uma *feature* em andamento, um bug grande, uma integração.

Tente responder em prosa curta:

1. Em qual passo da cadeia você está, honestamente, neste momento?
2. Quais *specs* dos passos anteriores estão claras e acessíveis — e quais estão implícitas, na sua cabeça, ainda não escritas?
3. Se você tivesse que entregar esta unidade a outra pessoa amanhã, qual dessas *specs* implícitas criaria maior risco por ficar sem escrever?

A terceira pergunta normalmente aponta qual *spec* merece ser escrita primeiro.

</div>

## Armadilhas comuns

<div class="trap">

**Tratar a cadeia como sequência rígida**

Interpretar os quinze passos como ordem obrigatória trava o trabalho. A cadeia é taxonomia; a ordem em que se aplica depende da realidade — código existe, intenção é nova, o sistema já está em operação. A sequência 1 → 2 → … → 15 é ideal para *greenfield* puro, que é caso raro.

</div>

<div class="trap">

**Escrever todas as *specs* com o mesmo grau de detalhe**

Todas as quinze não recebem o mesmo investimento. Propósito e Contratos quase sempre merecem densidade; Observabilidade pode ser uma linha para um CLI local e vinte páginas para uma plataforma multi-região. O critério é o custo de se enganar, não a completude por si.

</div>

<div class="trap">

**Ignorar Evolução**

O passo 15 é frequentemente esquecido — entra-se em operação e se assume que o sistema está *pronto*. Mas a intenção original pode ter mudado; o sistema em operação ensina coisas que a *spec* inicial não previu; dependências externas envelhecem. Reavaliar a intenção periodicamente é o que fecha a cadeia como ciclo, não linha.

</div>

<div class="checklist">

- Sei em qual passo da cadeia está a unidade de trabalho em que estou
- As *specs* dos passos anteriores estão escritas ou conscientemente adiadas (não esquecidas)
- Tenho clareza sobre qual camada PaRDeS cada passo ocupa
- Aceito que a ordem pode ser mista (*retrospectiva*, *greenfield*, *mista*) conforme o caso
- Reavalio periodicamente se a intenção original continua válida (passo 15)

</div>

## Onde ir a seguir

- **[Onboarding em 1 dia](/pt-br/metodo/onboarding/)** — guia prático de 8 horas para começar com a cadeia num projeto real
- **[O teste das 3 frases](/pt-br/metodo/teste-3-frases/)** — a disciplina que se aplica no passo 8 (Implementação)

</div>
