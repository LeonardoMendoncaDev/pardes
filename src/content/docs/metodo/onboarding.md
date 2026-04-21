---
title: Onboarding em 1 dia
description: Guia auto-contido para um desenvolvedor sénior arrancar com PARDES em 8 horas, com exercício prático e armadilhas a evitar.
---

> **Audiência:** desenvolvedor sénior (5+ anos) que nunca trabalhou formalmente com Spec Driven Development. Pressupõe à-vontade com *git*, uma linguagem moderna, e um agente de código (Claude Code, Cursor, Windsurf, Copilot). Não pressupõe conhecimento de Clean Architecture, DDD nem TDD — ajuda, não é requisito.
>
> **Objectivo do dia:** no final de 8 horas, terás um *workspace* PARDES próprio, uma spec de Propósito preenchida para um projecto real teu, e uma primeira fatia vertical implementada sob disciplina PARDES. Não vais dominar a metodologia — vais ter o **loop fundamental** a correr e um guia para aprofundar depois.
>
> **Duração sugerida:** 1 dia útil (8h), partido em 3 blocos.

---

## 1. A premissa única

Tudo o que PARDES afirma assenta numa frase:

> **O único acto exclusivamente humano no desenvolvimento de software é a intenção.** *"Quero que isto exista para este propósito."*

Todo o resto — desenho de domínio, capacidades, contratos, orquestração, código, testes, *deploy*, observabilidade — é **derivável por agentes** (humanos ou de IA) a partir de uma cadeia de *specs* que parte dessa intenção.

O problema histórico não é que essa cadeia não existisse — sempre existiu, na cabeça de alguém. O problema é que ela vivia implícita, compartimentada e não verificável. PARDES torna-a **explícita, encadeada e reavaliável** em cada passo.

Consequência prática imediata: o dev não desaparece. Passa a ter duas camadas de contribuição:

1. **Capturar intenção com fidelidade** — acto humano por excelência, não delegável.
2. **Guiar a cadeia** — validar, corrigir, reorientar sempre que uma spec derivada se afastar do propósito.

O código é um artefacto entre muitos. Deixa de ser o *output* central e passa a ser uma instância na cadeia.

---

## 2. A cadeia PARDES — 15 passos

PARDES organiza-se em 15 passos que alternam **spec** (ímpar) e **execução** (par). Cada execução é guiada por uma spec; cada spec deriva da anterior ou das suas vizinhas. Os 15 passos mapeiam-se nas quatro camadas hermenêuticas PaRDeS:

| Passo | Tipo | Nome | Camada PaRDeS | O que responde |
|-------|------|------|----------------|-----------------|
| 1-2 | Spec | Propósito | Peshat (literal) | Porquê existe? Para quem? O que *não* é? |
| 3 | Spec | Domínio | Peshat (literal) | Que conceitos, regras e restrições capturamos do problema real? |
| 4 | Spec | Capacidades | Remez (alusivo) | O que o sistema **faz**? (não como) |
| 5 | Spec | Contratos | Remez (alusivo) | Como é acedido? Que interfaces expõe e consome? |
| 6 | Spec | Comportamento | Drash (interpretativo) | *Guardrails*, autonomia, modos de escalação |
| 7 | Spec | Orquestração | Drash (interpretativo) | Quem executa o quê, em que ordem, com que dependências |
| 8 | Execução | Implementação | Drash (interpretativo) | Código, configuração, *prompts* — tudo o que materializa |
| 9 | Spec | Validação | Drash (interpretativo) | Testes, *evals*, critérios de aceitação |
| 10 | Execução | Validação executada | Drash (interpretativo) | Correr os testes |
| 11 | Spec | *Deployment* | Sod (emergente) | Onde, como, com que condições |
| 12 | Execução | *Deploy* executado | Sod (emergente) | Colocar em produção |
| 13 | Spec | Observabilidade | Sod (emergente) | Métricas, alertas, *dashboards* |
| 14 | Execução | Operação | Sod (emergente) | O sistema a correr |
| 15 | Spec | Evolução | Sod (emergente) | Quando e como mudar ou descontinuar |

Quando o passo 15 é executado, volta-se ao passo 1 — **a intenção ainda é válida?** A cadeia é um ciclo, não uma linha.

### Regra importante sobre a ordem

A cadeia é **taxonomia de artefactos**, não sequência rígida. Não precisas de escrever a spec 1 antes de tocar código — em muitos casos o código já existe (sistemas legados) e estás a documentar retrospectivamente. O que importa é que, no final, cada passo relevante tem o seu artefacto coerente com os vizinhos.

Fluxos legítimos:

- **Greenfield:** 1 → 2 → 3 → … → 15 (ideal, raro)
- **Retrospectivo:** código existe → escrever 1, 2, 3, 4 paralelamente lendo o código → detectar inconsistências → corrigir código ou corrigir intenção
- **Misto** (o mais comum): intenção clara + 1 spec mínima → fatia de código → outra spec → mais código. *Specs* mais densas aparecem só quando o custo da sua ausência começa a doer

**Heurística fundamental:** *"a spec aparece quando a ausência dela estaria a gerar decisões erradas."* Se consegues progredir sem escrever a spec, não escrevas. Se ficas bloqueado em discussões circulares sobre *"o que é esta coisa exactamente?"*, a spec aparece.

---

## 3. Anatomia de uma unidade PARDES

Cada unidade de trabalho (empresa, produto, projecto, *feature*, integração, *bug* grande, *change request* transversal) materializa-se como uma **pasta** com dois elementos obrigatórios:

```
{unidade}/
  _estado.md        ← fonte única de verdade desta unidade
  specs/            ← specs da cadeia PARDES, preenchidas quando necessárias
    01-spec-proposito.md
    02-spec-dominio.md
    ...
```

### 3.1 `_estado.md` — o ficheiro mais importante

O `_estado.md` é a base operacional. Sem ele, PARDES vira caos. Com ele, faz-se *context switch* em 10 segundos.

Regras invioláveis:

1. **Auto-contido.** Quem abre o ficheiro não precisa de ler o pai para entender o estado — contextualiza dentro dele.
2. **Actualizado sempre que algo muda.** Decisão tomada, bloqueio surgiu, passo avançado → actualizar imediatamente.
3. **Pequeno mas denso.** 20-80 linhas é o saudável. Se passa de 150, tem cheiro a lixo histórico — arquivar em `historico/YYYY-MM.md`.
4. **Tem sempre secções fixas**: nível, passo actual, última actualização, decisões activas, bloqueios, próximas acções, resumo para *context switch*.

Esqueleto mínimo:

```markdown
# Estado: Nome da Unidade

## Nível
[empresa | produto | projecto | feature | integração]

## Passo actual na cadeia
N — [nome do passo]

## Última actualização
YYYY-MM-DD — [o que mudou em 1 linha]

## Decisões activas
1. [decisão pendente + impacto + quem tem de decidir]

## Decisões resolvidas (≤ 2 semanas)
- YYYY-MM-DD — [decisão resolvida]

## Próximas acções
- [acção 1]
- [acção 2]

## Bloqueios
- [bloqueio + dependência + prazo]

## Resumo para context switch
> 2-3 frases que permitem a outra pessoa (ou ao agente) entender o estado em 10 segundos.
```

### 3.2 `specs/` — onde vivem os artefactos da cadeia

Os *templates* da cadeia (disponíveis separadamente nos recursos do método) são copiados para `specs/` à medida que vais escrevendo. Não é obrigatório ter os 10 — tens os que fazem sentido para a maturidade da tua unidade.

Nomes padrão dos ficheiros de spec:

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

Os passos 8, 10, 12, 14 (execução) não têm *template* — são **acções** (escrever código, correr testes, fazer *deploy*, operar).

---

## 4. O ritual diário

Três momentos por dia:

### 4.1 Arranque

Antes de começar a trabalhar:

1. **Lê o `_estado.md` do nível em que vais mexer.** Não o da empresa — o da unidade específica.
2. **Confirma o passo actual na cadeia.**
3. **Revê decisões activas.** Se alguma tua depende de outra pessoa, puxa-a hoje.
4. **Bloqueios.** Se havia um que esperavas desbloqueado, pressiona; se não, marca como não-executável hoje.

### 4.2 Durante o dia — *registre*

Cada vez que tomas uma decisão ou descobres algo não-óbvio, **regista no `_estado.md`** (secção *"Decisões activas/resolvidas"* ou *"Última actualização"*). Não deixes para o fim do dia — perdes contexto.

Excepções legítimas para não registar:

- Descoberta trivial já óbvia do código
- Decisão reversível sem consequência para o próximo turno de trabalho
- Factos já documentados no próprio código

Tudo o resto regista-se.

### 4.3 Encerramento

Antes de fechar o dia:

1. **Actualizar `_estado.md`** das unidades tocadas hoje — não deixar *drift*.
2. **Propagar para cima** se relevante (*feature* → projecto → produto → empresa).
3. **Actualizar o resumo para *context switch*** se o estado mudou significativamente.
4. **Marcar decisões resolvidas hoje** movendo-as de *"Decisões activas"* para *"Decisões resolvidas"*.

Se saltas este passo, no dia seguinte começas a trabalhar com base numa imagem mental obsoleta — e, mais grave, em três dias já nem lembras porque tomaste determinada decisão.

### 4.4 Estratégia multi-terminal (opcional)

Para quem alterna contextos muitas vezes por dia (arquitectos com várias frentes, devs em equipas com reuniões súbitas): **manter uma instância de agente viva por projecto**, em *terminais* distintos do mesmo editor. Quando *"pipoca"* uma *call* de outro projecto, saltas para o *terminal* daquele projecto — estás imediatamente no contexto, sem arranque prévio.

A abordagem é legítima, mas só se sustenta se seguires três disciplinas:

1. **Ritual de *"toque"* ao voltar a uma sessão antiga** — se voltas a um *terminal* que está parado há horas, a primeira coisa que pedes ao agente é *"relê o `_estado.md` e diz-me o estado em 2 frases antes de qualquer acção"*. Sem isto, podes estar a operar com uma imagem mental obsoleta.
2. **Registar imediatamente ao fim de cada *call* curta** — se uma *call* de 15 min trouxe uma decisão, regista no `_estado.md` **antes** de voltar à instância anterior.
3. **Um *terminal*-raiz agregador** — mantém um *terminal* aberto na raiz do *workspace* onde corres o arranque diário e o encerramento. As instâncias-filhas são para executar; o *terminal*-raiz é para orquestrar.

Sem estas três disciplinas a abordagem degrada rápido.

---

## 5. Agentes de IA — ferramenta, não requisito

PARDES funciona sem Claude, sem Cursor, sem Copilot. É mais produtivo com eles, mas a metodologia não depende de nenhum agente específico.

### 5.1 Onde os agentes amplificam

- **Context switch barato:** o agente lê o `_estado.md` em segundos, tu não perdes 15 minutos a rememorar
- **Propagação entre *specs*:** pedes *"deriva a spec de capacidades a partir da de domínio"* e revês
- **Geração de código a partir de *spec*:** o passo 8 acelera entre 5 e 10 vezes
- **Crítica da cadeia:** pedes *"verifica inconsistências entre spec de contratos e spec de capacidades"* e apanhas antes do código

### 5.2 Onde o agente NÃO substitui o humano

- **Passo 1-2 Propósito** — a intenção é sempre tua
- **Validação semântica** — o agente gera código sintacticamente correcto que pode não fazer o que querias
- **Decisão em conflito de *specs*** — quando duas *specs* discordam, a escolha é humana
- **Arquitectura estratégica** — o agente optimiza localmente; arquitectura é global

### 5.3 Regra fundamental — o teste das 3 frases

> **O agente é multiplicador, não substituto. Se não consegues explicar em 3 frases por que é que o código faz o que faz, não mereces ter aceitado o *output*. Revê.**

Esta frase combate o vício crescente de *"trust-by-default"* no *output* do agente. O raciocínio completo:

- **O agente produz código sintacticamente correcto mais de 99% das vezes.** Compila, passa o *linter*, parece certo. Mas pode estar **semanticamente errado** — algoritmo incorrecto, invariante violada, *edge case* ignorado, *off-by-one*, pressuposto sobre *input* que não se verifica, *race condition* silenciosa. Estes erros não aparecem no *linter*.
- **O humano é a última camada de validação semântica** antes do código entrar no repositório. O agente não tem *accountability*; tu tens. O *git blame* aponta para ti.
- **Porque é que 3 frases é o limiar certo?** É **suficiente** — em 3 frases tens de articular (i) o que o código faz, (ii) porque é estruturado assim, (iii) o que aconteceria se uma entrada importante mudasse. Se entendes isto, defendes o código. É **curto** — não te deixa mascarar a falta de compreensão com prosa confusa. Ou sabes ou não sabes. É **realista** — para código bem escrito, 3 frases chegam; se precisas de 20 linhas, o código está confuso ou tu não o percebeste.
- **"Não mereces ter aceitado o *output*"** é provocação deliberada. O *ethos* é simples: o código que entra no repositório é da tua responsabilidade, não do agente. Se não o podes explicar, não o podes manter, depurar, nem evoluir.
- **"Revê"** não é deitar fora — é segunda passagem. Podes (a) pedir ao agente para explicar linha a linha, (b) reescrever partes até o teu modelo mental assentar, (c) simplificar o código até caber em 3 frases. Normalmente a opção (c) também melhora a qualidade.

Aplica este teste **antes** de cada `git add`. No início parece *friction*; ao fim de uma semana passa a ser automático e poupa-te dias de *debug* futuro.

### 5.4 Memórias, *skills*, *hooks*

Dentro do ecossistema Claude Code e análogos (Cursor, Windsurf):

- **Memórias** — ficheiros persistentes entre sessões que ensinam o agente *"como este utilizador opera"*. Guardam preferências, regras, estrutura contratual, vocabulário. Valem para coisas que não mudam semanas a fio.
- **Skills** — comandos *custom* (*arranque do dia*, *encerramento*, *registre*, revisões de código) que automatizam rituais repetitivos.
- **Hooks** — *scripts* que disparam em eventos do agente (início de sessão, fim de resposta) para automações.

Estes são **opcionais**. Mas no dia em que começas a sentir que estás a repetir as mesmas instruções ao agente, é sinal de que uma memória ou *skill* vai multiplicar o retorno.

### 5.5 Investimento mínimo recomendado em infra de agente

Um aviso operacional que vale para qualquer dev sénior a adoptar PARDES seriamente:

- **Paga pelo plano mais robusto disponível** — Claude Max, Cursor Ultra, Copilot Enterprise. O cálculo é simples: 200 dólares por mês é aproximadamente uma hora de honorários sénior. Se te poupar uma hora por mês em carga cognitiva, já compensou. A partir do dia 2, tudo é lucro.
- **Não economizes *tokens*.** A tentação existe e é venenosa: *"este prompt é longo, posso truncar"*, *"uso modelo pequeno aqui para poupar"*. Resultado previsível: *output* pior → retrabalho → perda de tempo dezenas de vezes maior que o custo dos *tokens* poupados.
- **Sintomas de que estás a economizar de mais (todos sinais vermelhos):**
  - Sessões fragmentadas em vez de contínuas (perdes *cache* de contexto)
  - Contexto truncado manualmente para *"caber"*
  - Evitar *tools* caras (pesquisa *web*, *parallel tool calls*) quando melhorariam a decisão
  - Usar modelos pequenos em tarefas que merecem o modelo-topo → *output* fraco → fazes de novo
- **O cálculo económico para o sénior é inequívoco:** o teu tempo custa muito mais do que qualquer assinatura. O único motivo legítimo para economizar é se o cliente/empresa paga e impõe limite.

Se o teu cliente não paga a assinatura robusta, considera: (a) negociar *upgrade* como despesa técnica; (b) absorver pessoalmente (é investimento em produtividade individual); (c) se for mesmo impossível, aplica PARDES com o que tens mas aceita a perda de produtividade e não culpes a metodologia por isso.

### 5.6 PARDES é metodologia, não ecossistema

Importante para não te frustrares com comparações:

**PARDES é:** metodologia (cadeia de 15 passos, *specs*, Propósito) + estrutura de *workspace* (`_estado.md`, `specs/`) + rituais (arranque, registo, encerramento) + teste das 3 frases.

**PARDES NÃO é:** qualquer ferramenta comercial específica, qualquer *hardware* de produtividade, qualquer pipeline de automação própria. Estes são **amplificadores opcionais** que alguns praticantes têm e que aceleram o método, mas **não são parte do método**.

Consequência: se vês alguém a aplicar PARDES com infra pessoal avançada (transcritores de reunião, *dashboards custom*, hardware de AR), isso **não é requisito**. Tu fazes PARDES sem nada disso e obténs 80% do ganho. Os 20% restantes exigem investimento em infra pessoal — que podes construir depois, quando o método estiver assente.

Não tentes replicar o ecossistema do outro antes de dominar o método.

---

## 6. Exercício do dia — a ordem real de 8 horas

Isto é o que fazes **hoje**. Não amanhã, hoje.

### Bloco A (manhã, ~2h) — *Setup* e leitura

- [ ] (20 min) Criar repositório/pasta próprio para o teu *workspace* PARDES (pode ser local, não precisa ir para *git* ainda). Recomendado: `~/workspace/pardes-{teu-nome}/`.
- [ ] (20 min) Copiar os *templates* da cadeia para a pasta `templates/` do teu *workspace*.
- [ ] (30 min) Ler este documento até ao fim, **sem pressa**. Tomar notas das dúvidas para o final.
- [ ] (30 min) Abrir os *templates* das *specs* e passar os olhos — sem preencher. Objectivo: saber onde está cada um.
- [ ] (20 min) Escolher **uma unidade de trabalho real e pequena** para o exercício prático da tarde. Critérios:
  - Algo no teu dia a dia actual (não inventar)
  - Pequeno: uma *feature*, um módulo, uma integração — não um produto inteiro
  - Algo em que a **intenção é clara** (tu sabes porque existe)

### Bloco B (manhã, ~2h) — Propósito e Domínio

Focado na unidade escolhida.

- [ ] (15 min) Criar `{unidade}/_estado.md` copiando o *template* e preenchendo minimamente.
- [ ] (45 min) Escrever **`specs/01-spec-proposito.md`** preenchendo todas as secções. Se alguma secção é *"não sei"*, marca como *TODO* e segue — mas tenta responder. Atenção especial à secção **"Não-propósito"**: o que este sistema *não* é, é tão importante quanto o que é.
- [ ] (45 min) Escrever **`specs/02-spec-dominio.md`**. Para uma unidade pequena, isto pode ser 5-15 conceitos + as respectivas regras. Não inventes ontologias elaboradas — captura só o que importa para as capacidades que vais precisar.
- [ ] (15 min) Actualizar `_estado.md`: passo actual = 3 (Domínio), última actualização, próximas acções (escrever Capacidades).

### Bloco C (tarde, ~4h) — Capacidades, Contratos e uma fatia de código

- [ ] (45 min) Escrever **`specs/03-spec-capacidades.md`**. Lista fechada do que o sistema faz. Não como. Verbos.
- [ ] (30 min) Identificar **a primeira fatia vertical** — uma capacidade pequena mas *end-to-end* (entrada → lógica → saída) que vais implementar hoje.
- [ ] (30 min) Escrever **`specs/04-spec-contratos.md`** **apenas para essa fatia**. *Endpoint*, *input*, *output*, códigos de erro. Se é biblioteca, função + tipos. Se é mensagem assíncrona, evento + *payload*.
- [ ] (2 h) **Passo 8 — Implementação.** Escrever o código da fatia. Se usas um agente de IA, passa-lhe as *specs* 01-04 como contexto e pede geração. Revê linha a linha. Corrige o que a *spec* não capturou (*loop*).
- [ ] (15 min) Actualizar `_estado.md` com o que fizeste. Regista dúvidas que surgiram sobre as *specs*.

### Checklist final do dia

Se conseguiste fazer tudo acima, estás no **loop** PARDES. No fim do dia deves ter:

```
pardes-{teu-nome}/
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

Não precisas das 10 *specs*. Precisas das que a tua unidade justifica hoje.

---

## 7. Armadilhas comuns

Estes são erros reais observados em vários contextos de aplicação do método. Ler **antes** de começar.

### 7.1 Documentar em excesso

**Sintoma:** passas o dia a preencher *templates* e nunca escreves código. Os ficheiros ficam lindos, o sistema não existe.

**Correcção:** a *spec* só merece detalhe quando a sua ausência está a gerar decisões erradas. Se consegues progredir com meia página de Propósito + 5 conceitos de Domínio, esse é o nível certo. Vais ampliar quando doer.

### 7.2 Usar PARDES como *checklist* burocrática

**Sintoma:** tratas a cadeia como *gate* de passagem — *"não posso escrever código antes de ter spec X validada"*. Paras de trabalhar.

**Correcção:** a cadeia é taxonomia de artefactos, não *workflow* de aprovação. Escreves código a qualquer momento, desde que a intenção seja clara. A *spec* formaliza o que já sabias; não impede de começares.

### 7.3 *Spec* de Propósito fraca

**Sintoma:** preenches *"Propósito"* com *"automatizar o processo X"* e passas à frente. No passo 4 percebes que não sabes que valor entregas a quem — e tudo o que derivaste até aí está torto.

**Correcção:** Propósito leva o tempo que precisar. **Para quem é, que valor resolve, o que NÃO é** — as 3 coisas têm de estar cristalinas. Se a primeira versão for fraca, vai doer na cadeia toda.

### 7.4 Ignorar o `_estado.md`

**Sintoma:** fazes tudo bem mas o `_estado.md` está desactualizado há 5 dias. Amanhã começas a trabalhar com uma imagem mental obsoleta.

**Correcção:** regra inviolável — qualquer mudança de estado (decisão, bloqueio, passo avançado) é reflectida **imediatamente** no `_estado.md`. Não *"depois"*. Não *"quando acabar a feature"*. Agora.

### 7.5 Saltar Validação (passo 9)

**Sintoma:** implementas passo 8 e passas directo a *Deployment*. Os testes que escreves depois são justificativos, não verificadores.

**Correcção:** Validação é *spec* **antes** da implementação (idealmente — mas se escreveres em paralelo, *ok*). Critérios de aceitação vêm das Capacidades, não da intuição de *"deve funcionar mais ou menos assim"*.

### 7.6 *Spec* desligada do código

**Sintoma:** as *specs* dizem X, o código faz Y. Ninguém lê as *specs*; ninguém as actualiza quando o código muda.

**Correcção:** quando alteras código que contradiz a *spec*, paras e escolhes: (a) *spec* estava certa → corrigir código; (b) *spec* estava errada → corrigir *spec* + eventualmente propagar para cima. Nunca (c) deixar divergir silenciosamente.

### 7.7 Aplicar a cadeia inteira a tudo

**Sintoma:** um *bug* de 3 linhas levou-te a escrever 9 *specs*.

**Correcção:** a cadeia é a máxima potência. Para um *bug*, basta actualizar `_estado.md` e *commitar*. Para uma *feature*, 2 a 4 *specs*. Para um produto novo, pode ser a cadeia toda. O que dita a profundidade é o **custo da decisão errada**, não a ambição de completude.

---

## 8. O que PARDES NÃO é

Tão importante quanto o que é:

- **Não é *waterfall*.** Não exige *spec* completa antes de código. Alterna; ambos crescem juntos.
- **Não é *Big Design Up Front*.** As *specs* detalhadas (Domínio, Contratos) aparecem quando o sistema o justifica, não antes.
- **Não é *"documentação a sério"*.** Documentação serve leitor humano futuro; *spec* serve **decisão derivável**. Linguagens diferentes, públicos diferentes.
- **Não é ágil *vs* não-ágil.** É ortogonal. Funciona em *scrum*, *kanban*, ciclos contínuos, ciclos anuais. O que muda é a cadência das revisões, não a estrutura.
- **Não é *"anti-código"*.** O código continua a ser o artefacto central da execução. O que muda é que ele deixa de ser o **único registo** da intenção.
- **Não é só IA.** PARDES existia como disciplina em muitos praticantes antes e continua a funcionar sem agentes. Agentes amplificam, não criam.

---

## 9. Sinais de que estás a aplicar bem

Depois de algumas semanas, deves ver:

- ***Context switch* em menos de 30 segundos** entre projectos diferentes — basta abrir o `_estado.md`.
- **Decisões antigas defensáveis** — consegues explicar a um *stakeholder* porque tomaste X há 3 meses, porque está escrito.
- **Menos discussões circulares** — quando alguém te desafia em reunião, apontas à *spec* correspondente.
- **Código e *specs* não divergem silenciosamente** — quando isso aconteceria, um dos dois pára e corrige.
- ***Onboarding* de colega reduzido drasticamente** — novo dev lê `_estado.md` + *specs* e arranca em horas, não semanas.
- **Métricas saudáveis** — *lead time* menor, menos retrabalho, menos *bugs* de interpretação errada.

Se não vês isto ao fim de 4 a 6 semanas, provavelmente caíste numa das armadilhas da secção anterior. Revisita.

---

## 10. Para onde ir depois deste dia

- **[A cadeia de 15 passos](/metodo/cadeia/)** — cada um dos 15 passos com exemplos, anti-padrões e heurísticas de quando cada *spec* merece detalhe
- **[O teste das 3 frases](/metodo/teste-3-frases/)** — a regra em detalhe: porquê 3, o que fazer quando falhas, por que é que esta disciplina multiplica por 10 a qualidade a médio prazo
- **[Sobre o autor](/sobre-o-autor/)** — para abrir canal e acompanhar novas peças

O dia de hoje é o mínimo para estares **autónomo**. O aprofundamento faz-se nas semanas seguintes, aplicando em trabalho real e revisitando este documento quando a dúvida aparecer.

---

## 11. Canal de dúvidas

Se te bloqueares por mais de 20 minutos na mesma dúvida, abre canal. O custo da pergunta é sempre menor que o custo de caminhar na direcção errada. Ver [Sobre o autor](/sobre-o-autor/) para os meios directos.

---

*Este documento é o início. Não é manual completo. Evolui com a prática — quando descobrires uma armadilha que aqui não está, avisa; quando descobrires um sinal de sucesso extra, avisa. É teu.*
