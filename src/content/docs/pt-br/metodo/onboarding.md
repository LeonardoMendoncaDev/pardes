---
title: Onboarding em 1 dia
description: Guia autocontido para um desenvolvedor sênior arrancar com PARDES em 8 horas, com exercício prático e armadilhas a evitar.
---

<div class="metodo-page">

> **Audiência:** desenvolvedor sênior (5+ anos) que nunca trabalhou formalmente com Spec Driven Development. Pressupõe à vontade com *git*, uma linguagem moderna, e um agente de código (Claude Code, Cursor, Windsurf, Copilot). Não pressupõe conhecimento de Clean Architecture, DDD nem TDD — ajuda, não é requisito.
>
> **Objetivo do dia:** ao final de 8 horas, você terá um *workspace* PARDES próprio, uma spec de Propósito preenchida para um projeto real seu, e uma primeira fatia vertical implementada sob disciplina PARDES. Não vai dominar a metodologia — vai ter o **loop fundamental** rodando e um guia para aprofundar depois.
>
> **Duração sugerida:** 1 dia útil (8h), partido em 3 blocos.

---

## 1. A premissa única

Tudo o que PARDES afirma se apoia numa frase:

> **O único ato exclusivamente humano no desenvolvimento de software é a intenção.** *"Quero que isto exista para este propósito."*

Todo o resto — desenho de domínio, capacidades, contratos, orquestração, código, testes, *deploy*, observabilidade — é **derivável por agentes** (humanos ou de IA) a partir de uma cadeia de *specs* que parte dessa intenção.

O problema histórico não é que essa cadeia não existisse — sempre existiu, na cabeça de alguém. O problema é que vivia implícita, compartimentada e não verificável. PARDES torna-a **explícita, encadeada e reavaliável** em cada passo.

Consequência prática imediata: o dev não desaparece. Passa a ter duas camadas de contribuição:

1. **Capturar intenção com fidelidade** — ato humano por excelência, não delegável.
2. **Guiar a cadeia** — validar, corrigir, reorientar sempre que uma spec derivada se afastar do propósito.

O código é um artefato entre muitos. Deixa de ser o *output* central e passa a ser uma instância na cadeia.

---

## 2. A cadeia PARDES — 15 passos

PARDES se organiza em 15 passos que alternam **spec** (ímpar) e **execução** (par). Cada execução é guiada por uma spec; cada spec deriva da anterior ou das suas vizinhas. Os 15 passos se mapeiam nas quatro camadas hermenêuticas PaRDeS:

| Passo | Tipo | Nome | Camada PaRDeS | O que responde |
|-------|------|------|----------------|-----------------|
| 1-2 | Spec | Propósito | Peshat (literal) | Por que existe? Para quem? O que *não* é? |
| 3 | Spec | Domínio | Peshat (literal) | Que conceitos, regras e restrições capturamos do problema real? |
| 4 | Spec | Capacidades | Remez (alusivo) | O que o sistema **faz**? (não como) |
| 5 | Spec | Contratos | Remez (alusivo) | Como é acessado? Que interfaces expõe e consome? |
| 6 | Spec | Comportamento | Drash (interpretativo) | *Guardrails*, autonomia, modos de escalação |
| 7 | Spec | Orquestração | Drash (interpretativo) | Quem executa o quê, em que ordem, com que dependências |
| 8 | Execução | Implementação | Drash (interpretativo) | Código, configuração, *prompts* — tudo o que materializa |
| 9 | Spec | Validação | Drash (interpretativo) | Testes, *evals*, critérios de aceitação |
| 10 | Execução | Validação executada | Drash (interpretativo) | Rodar os testes |
| 11 | Spec | *Deployment* | Sod (emergente) | Onde, como, com que condições |
| 12 | Execução | *Deploy* executado | Sod (emergente) | Colocar em produção |
| 13 | Spec | Observabilidade | Sod (emergente) | Métricas, alertas, *dashboards* |
| 14 | Execução | Operação | Sod (emergente) | O sistema rodando |
| 15 | Spec | Evolução | Sod (emergente) | Quando e como mudar ou descontinuar |

Quando o passo 15 é executado, volta-se ao passo 1 — **a intenção ainda é válida?** A cadeia é um ciclo, não uma linha.

### Regra importante sobre a ordem

A cadeia é **taxonomia de artefatos**, não sequência rígida. Você não precisa escrever a spec 1 antes de tocar código — em muitos casos o código já existe (sistemas legados) e você está documentando retrospectivamente. O que importa é que, ao final, cada passo relevante tem o seu artefato coerente com os vizinhos.

Fluxos legítimos:

- **Greenfield:** 1 → 2 → 3 → … → 15 (ideal, raro)
- **Retrospectivo:** código existe → escrever 1, 2, 3, 4 paralelamente lendo o código → detectar inconsistências → corrigir código ou corrigir intenção
- **Misto** (o mais comum): intenção clara + 1 spec mínima → fatia de código → outra spec → mais código. *Specs* mais densas aparecem só quando o custo da sua ausência começa a doer

**Heurística fundamental:** *"a spec aparece quando a ausência dela estaria gerando decisões erradas."* Se você consegue progredir sem escrever a spec, não escreva. Se fica travado em discussões circulares sobre *"o que é essa coisa exatamente?"*, a spec aparece.

---

## 3. Anatomia de uma unidade PARDES

Cada unidade de trabalho (empresa, produto, projeto, *feature*, integração, *bug* grande, *change request* transversal) se materializa como uma **pasta** com dois elementos obrigatórios:

```
{unidade}/
  _estado.md        ← fonte única de verdade desta unidade
  specs/            ← specs da cadeia PARDES, preenchidas quando necessárias
    01-spec-proposito.md
    02-spec-dominio.md
    ...
```

### 3.1 `_estado.md` — o arquivo mais importante

O `_estado.md` é a base operacional. Sem ele, PARDES vira caos. Com ele, faz-se *context switch* em 10 segundos.

Regras invioláveis:

1. **Autocontido.** Quem abre o arquivo não precisa ler o pai para entender o estado — contextualiza dentro dele.
2. **Atualizado sempre que algo muda.** Decisão tomada, bloqueio surgiu, passo avançado → atualizar imediatamente.
3. **Pequeno mas denso.** 20-80 linhas é o saudável. Se passa de 150, tem cheiro de lixo histórico — arquivar em `historico/YYYY-MM.md`.
4. **Tem sempre seções fixas**: nível, passo atual, última atualização, decisões ativas, bloqueios, próximas ações, resumo para *context switch*.

Esqueleto mínimo:

```markdown
# Estado: Nome da Unidade

## Nível
[empresa | produto | projeto | feature | integração]

## Passo atual na cadeia
N — [nome do passo]

## Última atualização
YYYY-MM-DD — [o que mudou em 1 linha]

## Decisões ativas
1. [decisão pendente + impacto + quem tem de decidir]

## Decisões resolvidas (≤ 2 semanas)
- YYYY-MM-DD — [decisão resolvida]

## Próximas ações
- [ação 1]
- [ação 2]

## Bloqueios
- [bloqueio + dependência + prazo]

## Resumo para context switch
> 2-3 frases que permitem a outra pessoa (ou ao agente) entender o estado em 10 segundos.
```

### 3.2 `specs/` — onde vivem os artefatos da cadeia

Os *templates* da cadeia (disponíveis separadamente nos recursos do método) são copiados para `specs/` à medida que você vai escrevendo. Não é obrigatório ter os 10 — você tem os que fazem sentido para a maturidade da sua unidade.

Nomes padrão dos arquivos de spec:

```
01-spec-proposito.md      ← passo 1-2 (humano define)
02-spec-dominio.md        ← passo 3
03-spec-capacidades.md    ← passo 4
04-spec-contratos.md      ← passo 5
05-spec-comportamento.md  ← passo 6
06-spec-orquestracao.md   ← passo 7
07-spec-validacao.md      ← passo 9
08-spec-deployment.md     ← passo 11
09-spec-observabilidade.md ← passo 13
10-spec-evolucao.md       ← passo 15
```

Os passos 8, 10, 12, 14 (execução) não têm *template* — são **ações** (escrever código, rodar testes, fazer *deploy*, operar).

---

## 4. O ritual diário

Três momentos por dia:

### 4.1 Arranque

Antes de começar a trabalhar:

1. **Leia o `_estado.md` do nível em que vai mexer.** Não o da empresa — o da unidade específica.
2. **Confirme o passo atual na cadeia.**
3. **Revise decisões ativas.** Se alguma sua depende de outra pessoa, puxe hoje.
4. **Bloqueios.** Se havia um que você esperava desbloqueado, pressione; se não, marque como não-executável hoje.

### 4.2 Durante o dia — *registre*

Cada vez que tomar uma decisão ou descobrir algo não-óbvio, **registre no `_estado.md`** (seção *"Decisões ativas/resolvidas"* ou *"Última atualização"*). Não deixe para o fim do dia — você perde contexto.

Exceções legítimas para não registrar:

- Descoberta trivial já óbvia do código
- Decisão reversível sem consequência para o próximo turno de trabalho
- Fatos já documentados no próprio código

Todo o resto se registra.

### 4.3 Encerramento

Antes de fechar o dia:

1. **Atualizar `_estado.md`** das unidades tocadas hoje — não deixar *drift*.
2. **Propagar para cima** se relevante (*feature* → projeto → produto → empresa).
3. **Atualizar o resumo para *context switch*** se o estado mudou significativamente.
4. **Marcar decisões resolvidas hoje** movendo-as de *"Decisões ativas"* para *"Decisões resolvidas"*.

Se você pula este passo, no dia seguinte começa a trabalhar com base em uma imagem mental obsoleta — e, mais grave, em três dias já nem se lembra por que tomou determinada decisão.

### 4.4 Estratégia multi-terminal (opcional)

Para quem alterna contextos muitas vezes por dia (arquitetos com várias frentes, devs em times com reuniões súbitas): **manter uma instância de agente viva por projeto**, em *terminais* distintos do mesmo editor. Quando *"pipoca"* uma *call* de outro projeto, você salta para o *terminal* daquele projeto — já está no contexto, sem arranque prévio.

A abordagem é legítima, mas só se sustenta se você seguir três disciplinas:

1. **Ritual de *"toque"* ao voltar a uma sessão antiga** — se você volta a um *terminal* parado há horas, a primeira coisa que pede ao agente é *"releia o `_estado.md` e me diga o estado em 2 frases antes de qualquer ação"*. Sem isto, você pode estar operando com uma imagem mental obsoleta.
2. **Registrar imediatamente ao fim de cada *call* curta** — se uma *call* de 15 min trouxe uma decisão, registre no `_estado.md` **antes** de voltar à instância anterior.
3. **Um *terminal*-raiz agregador** — mantenha um *terminal* aberto na raiz do *workspace* onde roda o arranque diário e o encerramento. As instâncias-filhas são para executar; o *terminal*-raiz é para orquestrar.

Sem estas três disciplinas, a abordagem degrada rápido.

---

## 5. Agentes de IA — ferramenta, não requisito

PARDES funciona sem Claude, sem Cursor, sem Copilot. É mais produtivo com eles, mas a metodologia não depende de nenhum agente específico.

### 5.1 Onde os agentes amplificam

- **Context switch barato:** o agente lê o `_estado.md` em segundos, você não perde 15 minutos rememorando
- **Propagação entre *specs*:** você pede *"derive a spec de capacidades a partir da de domínio"* e revisa
- **Geração de código a partir de *spec*:** o passo 8 acelera entre 5 e 10 vezes
- **Crítica da cadeia:** você pede *"verifique inconsistências entre spec de contratos e spec de capacidades"* e apanha antes do código

### 5.2 Onde o agente NÃO substitui o humano

- **Passo 1-2 Propósito** — a intenção é sempre sua
- **Validação semântica** — o agente gera código sintaticamente correto que pode não fazer o que você queria
- **Decisão em conflito de *specs*** — quando duas *specs* discordam, a escolha é humana
- **Arquitetura estratégica** — o agente otimiza localmente; arquitetura é global

### 5.3 Regra fundamental — o teste das 3 frases

> **O agente é multiplicador, não substituto. Se você não consegue explicar em 3 frases por que o código faz o que faz, não mereceu aceitar o *output*. Revise.**

Esta frase combate o vício crescente de *"trust-by-default"* no *output* do agente. O raciocínio completo:

- **O agente produz código sintaticamente correto mais de 99% das vezes.** Compila, passa o *linter*, parece certo. Mas pode estar **semanticamente errado** — algoritmo incorreto, invariante violada, *edge case* ignorado, *off-by-one*, pressuposto sobre *input* que não se verifica, *race condition* silenciosa. Estes erros não aparecem no *linter*.
- **O humano é a última camada de validação semântica** antes do código entrar no repositório. O agente não tem *accountability*; você tem. O *git blame* aponta para você.
- **Por que 3 frases é o limiar certo?** É **suficiente** — em 3 frases você tem de articular (i) o que o código faz, (ii) por que está estruturado assim, (iii) o que aconteceria se uma entrada importante mudasse. Se entende isto, defende o código. É **curto** — não deixa mascarar a falta de compreensão com prosa confusa. Ou sabe ou não sabe. É **realista** — para código bem escrito, 3 frases chegam; se precisa de 20 linhas, o código está confuso ou você não o entendeu.
- **"Não mereceu aceitar o *output*"** é provocação deliberada. O *ethos* é simples: o código que entra no repositório é da sua responsabilidade, não do agente. Se não pode explicá-lo, não pode mantê-lo, depurá-lo, nem evoluí-lo.
- **"Revise"** não é jogar fora — é segunda passagem. Você pode (a) pedir ao agente para explicar linha a linha, (b) reescrever partes até o seu modelo mental assentar, (c) simplificar o código até caber em 3 frases. Normalmente a opção (c) também melhora a qualidade.

Aplique este teste **antes** de cada `git add`. No início parece *friction*; ao fim de uma semana passa a ser automático e te poupa dias de *debug* futuro.

### 5.4 Memórias, *skills*, *hooks*

Dentro do ecossistema Claude Code e análogos (Cursor, Windsurf):

- **Memórias** — arquivos persistentes entre sessões que ensinam o agente *"como este usuário opera"*. Guardam preferências, regras, estrutura contratual, vocabulário. Valem para coisas que não mudam semanas a fio.
- **Skills** — comandos *custom* (*arranque do dia*, *encerramento*, *registre*, revisões de código) que automatizam rituais repetitivos.
- **Hooks** — *scripts* que disparam em eventos do agente (início de sessão, fim de resposta) para automações.

Estes são **opcionais**. Mas no dia em que começa a sentir que está repetindo as mesmas instruções ao agente, é sinal de que uma memória ou *skill* vai multiplicar o retorno.

### 5.5 Investimento mínimo recomendado em infra de agente

Um aviso operacional que vale para qualquer dev sênior adotando PARDES seriamente:

- **Pague pelo plano mais robusto disponível** — Claude Max, Cursor Ultra, Copilot Enterprise. O cálculo é simples: 200 dólares por mês é aproximadamente uma hora de honorários sênior. Se lhe poupar uma hora por mês em carga cognitiva, já compensou. A partir do dia 2, tudo é lucro.
- **Não economize *tokens*.** A tentação existe e é venenosa: *"este prompt é longo, posso truncar"*, *"uso modelo pequeno aqui para poupar"*. Resultado previsível: *output* pior → retrabalho → perda de tempo dezenas de vezes maior que o custo dos *tokens* poupados.
- **Sintomas de que está economizando demais (todos sinais vermelhos):**
  - Sessões fragmentadas em vez de contínuas (você perde *cache* de contexto)
  - Contexto truncado manualmente para *"caber"*
  - Evitar *tools* caras (busca *web*, *parallel tool calls*) quando melhorariam a decisão
  - Usar modelos pequenos em tarefas que merecem o modelo-topo → *output* fraco → você faz de novo
- **O cálculo econômico para o sênior é inequívoco:** o seu tempo custa muito mais do que qualquer assinatura. O único motivo legítimo para economizar é se o cliente/empresa paga e impõe limite.

Se o seu cliente não paga a assinatura robusta, considere: (a) negociar *upgrade* como despesa técnica; (b) absorver pessoalmente (é investimento em produtividade individual); (c) se for mesmo impossível, aplique PARDES com o que tem mas aceite a perda de produtividade e não culpe a metodologia por isso.

### 5.6 PARDES é metodologia, não ecossistema

Importante para você não se frustrar com comparações:

**PARDES é:** metodologia (cadeia de 15 passos, *specs*, Propósito) + estrutura de *workspace* (`_estado.md`, `specs/`) + rituais (arranque, registro, encerramento) + teste das 3 frases.

**PARDES NÃO é:** qualquer ferramenta comercial específica, qualquer *hardware* de produtividade, qualquer pipeline de automação própria. Estes são **amplificadores opcionais** que alguns praticantes têm e que aceleram o método, mas **não são parte do método**.

Consequência: se você vê alguém aplicando PARDES com infra pessoal avançada (transcritores de reunião, *dashboards custom*, hardware de AR), isso **não é requisito**. Você faz PARDES sem nada disso e obtém 80% do ganho. Os 20% restantes exigem investimento em infra pessoal — que você pode construir depois, quando o método estiver assentado.

Não tente replicar o ecossistema do outro antes de dominar o método.

---

## 6. Exercício do dia — a ordem real de 8 horas

Isto é o que você faz **hoje**. Não amanhã, hoje.

### Bloco A (manhã, ~2h) — *Setup* e leitura

- [ ] (20 min) Criar repositório/pasta próprio para o seu *workspace* PARDES (pode ser local, não precisa ir para *git* ainda). Recomendado: `~/workspace/pardes-{seu-nome}/`.
- [ ] (20 min) Copiar os *templates* da cadeia para a pasta `templates/` do seu *workspace*.
- [ ] (30 min) Ler este documento até o fim, **sem pressa**. Tomar notas das dúvidas para o final.
- [ ] (30 min) Abrir os *templates* das *specs* e passar os olhos — sem preencher. Objetivo: saber onde está cada um.
- [ ] (20 min) Escolher **uma unidade de trabalho real e pequena** para o exercício prático da tarde. Critérios:
  - Algo no seu dia a dia atual (não inventar)
  - Pequeno: uma *feature*, um módulo, uma integração — não um produto inteiro
  - Algo em que a **intenção está clara** (você sabe por que existe)

### Bloco B (manhã, ~2h) — Propósito e Domínio

Focado na unidade escolhida.

- [ ] (15 min) Criar `{unidade}/_estado.md` copiando o *template* e preenchendo minimamente.
- [ ] (45 min) Escrever **`specs/01-spec-proposito.md`** preenchendo todas as seções. Se alguma seção é *"não sei"*, marque como *TODO* e siga — mas tente responder. Atenção especial à seção **"Não-propósito"**: o que este sistema *não* é, é tão importante quanto o que é.
- [ ] (45 min) Escrever **`specs/02-spec-dominio.md`**. Para uma unidade pequena, isto pode ser 5-15 conceitos + as respectivas regras. Não invente ontologias elaboradas — capture só o que importa para as capacidades que vai precisar.
- [ ] (15 min) Atualizar `_estado.md`: passo atual = 3 (Domínio), última atualização, próximas ações (escrever Capacidades).

### Bloco C (tarde, ~4h) — Capacidades, Contratos e uma fatia de código

- [ ] (45 min) Escrever **`specs/03-spec-capacidades.md`**. Lista fechada do que o sistema faz. Não como. Verbos.
- [ ] (30 min) Identificar **a primeira fatia vertical** — uma capacidade pequena mas *end-to-end* (entrada → lógica → saída) que você vai implementar hoje.
- [ ] (30 min) Escrever **`specs/04-spec-contratos.md`** **apenas para essa fatia**. *Endpoint*, *input*, *output*, códigos de erro. Se é biblioteca, função + tipos. Se é mensagem assíncrona, evento + *payload*.
- [ ] (2 h) **Passo 8 — Implementação.** Escrever o código da fatia. Se você usa um agente de IA, passe-lhe as *specs* 01-04 como contexto e peça geração. Revise linha a linha. Corrija o que a *spec* não capturou (*loop*).
- [ ] (15 min) Atualizar `_estado.md` com o que fez. Registre dúvidas que surgiram sobre as *specs*.

### Checklist final do dia

Se você conseguiu fazer tudo acima, está no **loop** PARDES. Ao fim do dia deve ter:

```
pardes-{seu-nome}/
  templates/          ← cópia de referência
  {unidade}/
    _estado.md            ← populado, não placeholder
    specs/
      01-spec-proposito.md
      02-spec-dominio.md
      03-spec-capacidades.md
      04-spec-contratos.md   ← só para a fatia implementada
    {código da fatia}/
```

Não precisa das 10 *specs*. Precisa das que a sua unidade justifica hoje.

---

## 7. Armadilhas comuns

Estes são erros reais observados em vários contextos de aplicação do método. Ler **antes** de começar.

### 7.1 Documentar em excesso

**Sintoma:** você passa o dia preenchendo *templates* e nunca escreve código. Os arquivos ficam lindos, o sistema não existe.

**Correção:** a *spec* só merece detalhamento quando a sua ausência está gerando decisões erradas. Se você consegue progredir com meia página de Propósito + 5 conceitos de Domínio, esse é o nível certo. Vai ampliar quando doer.

### 7.2 Usar PARDES como *checklist* burocrática

**Sintoma:** você trata a cadeia como *gate* de passagem — *"não posso escrever código antes de ter spec X validada"*. Você para de trabalhar.

**Correção:** a cadeia é taxonomia de artefatos, não *workflow* de aprovação. Escreve-se código a qualquer momento, desde que a intenção esteja clara. A *spec* formaliza o que você já sabia; não impede de começar.

### 7.3 *Spec* de Propósito fraca

**Sintoma:** você preenche *"Propósito"* com *"automatizar o processo X"* e passa adiante. No passo 4 percebe que não sabe que valor entrega a quem — e tudo o que derivou até ali está torto.

**Correção:** Propósito leva o tempo que precisar. **Para quem é, que valor resolve, o que NÃO é** — as 3 coisas têm de estar cristalinas. Se a primeira versão for fraca, vai doer na cadeia toda.

### 7.4 Ignorar o `_estado.md`

**Sintoma:** você faz tudo bem mas o `_estado.md` está desatualizado há 5 dias. Amanhã você começa a trabalhar com uma imagem mental obsoleta.

**Correção:** regra inviolável — qualquer mudança de estado (decisão, bloqueio, passo avançado) é refletida **imediatamente** no `_estado.md`. Não *"depois"*. Não *"quando acabar a feature"*. Agora.

### 7.5 Pular Validação (passo 9)

**Sintoma:** você implementa o passo 8 e passa direto para *Deployment*. Os testes que escreve depois são justificativos, não verificadores.

**Correção:** Validação é *spec* **antes** da implementação (idealmente — mas se escrever em paralelo, *ok*). Critérios de aceitação vêm das Capacidades, não da intuição de *"deve funcionar mais ou menos assim"*.

### 7.6 *Spec* desligada do código

**Sintoma:** as *specs* dizem X, o código faz Y. Ninguém lê as *specs*; ninguém as atualiza quando o código muda.

**Correção:** quando você altera código que contradiz a *spec*, para e escolhe: (a) *spec* estava certa → corrigir código; (b) *spec* estava errada → corrigir *spec* + eventualmente propagar para cima. Nunca (c) deixar divergir silenciosamente.

### 7.7 Aplicar a cadeia inteira a tudo

**Sintoma:** um *bug* de 3 linhas levou você a escrever 9 *specs*.

**Correção:** a cadeia é a potência máxima. Para um *bug*, basta atualizar `_estado.md` e *commitar*. Para uma *feature*, 2 a 4 *specs*. Para um produto novo, pode ser a cadeia toda. O que dita a profundidade é o **custo da decisão errada**, não a ambição de completude.

---

## 8. O que PARDES NÃO é

Tão importante quanto o que é:

- **Não é *waterfall*.** Não exige *spec* completa antes de código. Alterna; ambos crescem juntos.
- **Não é *Big Design Up Front*.** As *specs* detalhadas (Domínio, Contratos) aparecem quando o sistema justifica, não antes.
- **Não é *"documentação a sério"*.** Documentação serve leitor humano futuro; *spec* serve **decisão derivável**. Linguagens diferentes, públicos diferentes.
- **Não é ágil *vs* não-ágil.** É ortogonal. Funciona em *scrum*, *kanban*, ciclos contínuos, ciclos anuais. O que muda é a cadência das revisões, não a estrutura.
- **Não é *"anti-código"*.** O código continua a ser o artefato central da execução. O que muda é que ele deixa de ser o **único registro** da intenção.
- **Não é só IA.** PARDES existia como disciplina em muitos praticantes antes e continua a funcionar sem agentes. Agentes amplificam, não criam.

---

## 9. Sinais de que está aplicando bem

Depois de algumas semanas, deve ver:

- ***Context switch* em menos de 30 segundos** entre projetos diferentes — basta abrir o `_estado.md`.
- **Decisões antigas defensáveis** — você consegue explicar a um *stakeholder* por que tomou X há 3 meses, porque está escrito.
- **Menos discussões circulares** — quando alguém te desafia em reunião, você aponta à *spec* correspondente.
- **Código e *specs* não divergem silenciosamente** — quando isso aconteceria, um dos dois para e corrige.
- ***Onboarding* de colega reduzido drasticamente** — novo dev lê `_estado.md` + *specs* e arranca em horas, não semanas.
- **Métricas saudáveis** — *lead time* menor, menos retrabalho, menos *bugs* de interpretação errada.

Se você não vê isto ao fim de 4 a 6 semanas, provavelmente caiu em uma das armadilhas da seção anterior. Revisite.

---

## 10. Para onde ir depois deste dia

- **[A cadeia de 15 passos](/pt-br/metodo/cadeia/)** — cada um dos 15 passos com exemplos, antipadrões e heurísticas de quando cada *spec* merece detalhamento
- **[O teste das 3 frases](/pt-br/metodo/teste-3-frases/)** — a regra em detalhe: por que 3, o que fazer quando falha, por que esta disciplina multiplica por 10 a qualidade no médio prazo
- **[Sobre o autor](/pt-br/sobre-o-autor/)** — para abrir canal e acompanhar novas peças

O dia de hoje é o mínimo para você estar **autônomo**. O aprofundamento acontece nas semanas seguintes, aplicando em trabalho real e revisitando este documento quando a dúvida aparecer.

---

## 11. Canal de dúvidas

Se você trava por mais de 20 minutos na mesma dúvida, abra canal. O custo da pergunta é sempre menor que o custo de caminhar na direção errada. Ver [Sobre o autor](/pt-br/sobre-o-autor/) para os meios diretos.

---

*Este documento é o início. Não é manual completo. Evolui com a prática — quando descobrir uma armadilha que aqui não está, avise; quando descobrir um sinal de sucesso extra, avise. É seu.*

</div>
