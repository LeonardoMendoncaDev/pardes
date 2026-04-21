---
title: Onboarding in 1 day
description: A self-contained guide for a senior developer to get started with PARDES in 8 hours, with practical exercise and pitfalls to avoid.
---

<div class="metodo-page">

> **Audience:** senior developer (5+ years) who has never formally worked with Spec Driven Development. Assumes comfort with *git*, a modern language, and a code agent (Claude Code, Cursor, Windsurf, Copilot). Does not assume knowledge of Clean Architecture, DDD, or TDD — helpful, not required.
>
> **Goal of the day:** by the end of 8 hours, you will have your own PARDES *workspace*, a Purpose spec filled in for a real project of yours, and a first vertical slice implemented under PARDES discipline. You will not master the methodology — you will have the **fundamental loop** running and a guide to deepen later.
>
> **Suggested duration:** 1 working day (8h), split into 3 blocks.

---

## 1. The single premise

Everything PARDES asserts rests on one sentence:

> **The only exclusively human act in software development is intent.** *"I want this to exist for this purpose."*

Everything else — domain design, capabilities, contracts, orchestration, code, tests, *deploy*, observability — is **derivable by agents** (human or AI) from a chain of *specs* that starts from that intent.

The historical problem is not that this chain did not exist — it always existed, in someone's head. The problem is that it lived implicit, compartmentalised, and unverifiable. PARDES makes it **explicit, linked, and re-evaluable** at every step.

Immediate practical consequence: the dev does not disappear. They gain two layers of contribution:

1. **Capture intent faithfully** — a quintessentially human act, not delegable.
2. **Guide the chain** — validate, correct, reorient whenever a derived spec strays from the purpose.

Code is one artefact among many. It ceases to be the central *output* and becomes an instance in the chain.

---

## 2. The PARDES chain — 15 steps

PARDES is organised into 15 steps that alternate **spec** (odd) and **execution** (even). Each execution is guided by a spec; each spec derives from the previous one or from its neighbours. The 15 steps map onto the four hermeneutic PaRDeS layers:

| Step | Type | Name | PaRDeS Layer | Question it answers |
|------|------|------|---------------|----------------------|
| 1-2 | Spec | Purpose | Peshat (literal) | Why does it exist? For whom? What is it *not*? |
| 3 | Spec | Domain | Peshat (literal) | What concepts, rules and constraints do we capture from the real problem? |
| 4 | Spec | Capabilities | Remez (allusive) | What does the system **do**? (not how) |
| 5 | Spec | Contracts | Remez (allusive) | How is it accessed? What interfaces does it expose and consume? |
| 6 | Spec | Behaviour | Drash (interpretive) | *Guardrails*, autonomy, escalation modes |
| 7 | Spec | Orchestration | Drash (interpretive) | Who executes what, in what order, with what dependencies |
| 8 | Execution | Implementation | Drash (interpretive) | Code, configuration, *prompts* — everything that materialises |
| 9 | Spec | Validation | Drash (interpretive) | Tests, *evals*, acceptance criteria |
| 10 | Execution | Validation executed | Drash (interpretive) | Running the tests |
| 11 | Spec | *Deployment* | Sod (emergent) | Where, how, under what conditions |
| 12 | Execution | *Deploy* executed | Sod (emergent) | Putting into production |
| 13 | Spec | Observability | Sod (emergent) | Metrics, alerts, *dashboards* |
| 14 | Execution | Operation | Sod (emergent) | The system running |
| 15 | Spec | Evolution | Sod (emergent) | When and how to change or discontinue |

When step 15 is executed, we return to step 1 — **is intent still valid?** The chain is a cycle, not a line.

### Important rule about order

The chain is a **taxonomy of artefacts**, not a rigid sequence. You do not need to write spec 1 before touching code — in many cases the code already exists (legacy systems) and you are documenting retrospectively. What matters is that, in the end, each relevant step has its artefact coherent with its neighbours.

Legitimate flows:

- **Greenfield:** 1 → 2 → 3 → … → 15 (ideal, rare)
- **Retrospective:** code exists → write 1, 2, 3, 4 in parallel reading the code → detect inconsistencies → fix code or fix intent
- **Mixed** (the most common): clear intent + 1 minimal spec → slice of code → another spec → more code. Denser *specs* appear only when the cost of their absence starts to hurt

**Fundamental heuristic:** *"the spec appears when its absence would be generating wrong decisions."* If you can progress without writing the spec, don't. If you get stuck in circular discussions about *"what is this thing exactly?"*, the spec appears.

---

## 3. Anatomy of a PARDES unit

Each unit of work (company, product, project, *feature*, integration, large *bug*, transversal *change request*) materialises as a **folder** with two mandatory elements:

```
{unit}/
  _estado.md        ← single source of truth for this unit
  specs/            ← PARDES chain specs, filled in as needed
    01-spec-proposito.md
    02-spec-dominio.md
    ...
```

### 3.1 `_estado.md` — the most important file

`_estado.md` is the operational base. Without it, PARDES becomes chaos. With it, *context switch* takes 10 seconds.

Inviolable rules:

1. **Self-contained.** Whoever opens the file does not need to read the parent to understand the state — it contextualises inside itself.
2. **Updated whenever something changes.** Decision taken, blocker surfaced, step advanced → update immediately.
3. **Small but dense.** 20-80 lines is healthy. If it exceeds 150, it smells like historical rubbish — archive in `historico/YYYY-MM.md`.
4. **Always has fixed sections**: level, current step, last update, active decisions, blockers, next actions, summary for *context switch*.

Minimal skeleton:

```markdown
# State: Unit Name

## Level
[company | product | project | feature | integration]

## Current step in the chain
N — [step name]

## Last update
YYYY-MM-DD — [what changed in 1 line]

## Active decisions
1. [pending decision + impact + who needs to decide]

## Resolved decisions (≤ 2 weeks)
- YYYY-MM-DD — [resolved decision]

## Next actions
- [action 1]
- [action 2]

## Blockers
- [blocker + dependency + deadline]

## Summary for context switch
> 2-3 sentences that let another person (or agent) understand the state in 10 seconds.
```

### 3.2 `specs/` — where chain artefacts live

The chain *templates* (available separately in the method's resources) are copied to `specs/` as you write. You don't need all 10 — you have those that make sense for your unit's maturity.

Standard spec filenames:

```
01-spec-proposito.md      ← step 1-2 (human defines)
02-spec-dominio.md        ← step 3
03-spec-capacidades.md    ← step 4
04-spec-contratos.md      ← step 5
05-spec-comportamento.md  ← step 6
06-spec-orquestracao.md   ← step 7
07-spec-validacao.md      ← step 9
08-spec-deployment.md     ← step 11
09-spec-observabilidade.md ← step 13
10-spec-evolucao.md       ← step 15
```

Steps 8, 10, 12, 14 (execution) have no *template* — they are **actions** (writing code, running tests, deploying, operating).

---

## 4. The daily ritual

Three moments per day:

### 4.1 Start

Before starting work:

1. **Read the `_estado.md` of the level you are going to touch.** Not the company's — the specific unit's.
2. **Confirm the current step in the chain.**
3. **Review active decisions.** If one of yours depends on another person, push it today.
4. **Blockers.** If there was one you expected unblocked, press; if not, mark as non-executable today.

### 4.2 During the day — *register*

Each time you take a decision or discover something non-obvious, **record in `_estado.md`** (section *"Active/resolved decisions"* or *"Last update"*). Don't leave it to the end of the day — you lose context.

Legitimate exceptions for not recording:

- Trivial discovery already obvious in the code
- Reversible decision without consequence for the next work shift
- Facts already documented in the code itself

Everything else is recorded.

### 4.3 Closing

Before closing the day:

1. **Update `_estado.md`** for units touched today — don't leave *drift*.
2. **Propagate upwards** if relevant (*feature* → project → product → company).
3. **Update the summary for *context switch*** if state changed significantly.
4. **Mark decisions resolved today** by moving them from *"Active decisions"* to *"Resolved decisions"*.

If you skip this step, the next day you start working based on an obsolete mental image — and, more serious, in three days you no longer remember why you took a given decision.

### 4.4 Multi-terminal strategy (optional)

For those who switch contexts many times a day (architects with several fronts, devs in teams with sudden meetings): **keep a live agent instance per project**, in distinct *terminals* of the same editor. When an *"unplanned"* *call* from another project pops up, you jump to that project's *terminal* — you're already in context, no prior start-up needed.

The approach is legitimate, but only sustains itself if you follow three disciplines:

1. **Ritual of *"touching"* when returning to an old session** — if you return to a *terminal* idle for hours, the first thing you ask the agent is *"re-read the `_estado.md` and tell me the state in 2 sentences before any action"*. Without this, you may be operating on an obsolete mental image.
2. **Register immediately at the end of each short *call*** — if a 15-min *call* brought a decision, record it in `_estado.md` **before** returning to the previous instance.
3. **A root *terminal* aggregator** — keep a *terminal* open at the root of the *workspace* where you run the daily start and the closing. Child instances are for executing; the root *terminal* is for orchestrating.

Without these three disciplines, the approach degrades quickly.

---

## 5. AI agents — tool, not requirement

PARDES works without Claude, without Cursor, without Copilot. It is more productive with them, but the methodology does not depend on any specific agent.

### 5.1 Where agents amplify

- **Cheap context switch:** the agent reads `_estado.md` in seconds, you don't lose 15 minutes remembering
- **Propagation between *specs*:** you ask *"derive the capabilities spec from the domain spec"* and review
- **Code generation from *spec*:** step 8 accelerates 5 to 10 times
- **Chain critique:** you ask *"check inconsistencies between the contracts spec and the capabilities spec"* and catch before the code

### 5.2 Where the agent does NOT replace the human

- **Step 1-2 Purpose** — intent is always yours
- **Semantic validation** — the agent generates syntactically correct code that may not do what you wanted
- **Decision on spec conflict** — when two *specs* disagree, the choice is human
- **Strategic architecture** — the agent optimises locally; architecture is global

### 5.3 Fundamental rule — the three-sentence test

> **The agent is a multiplier, not a substitute. If you cannot explain in 3 sentences why the code does what it does, you did not deserve to accept the *output*. Review.**

This sentence combats the growing vice of *"trust-by-default"* in the agent's *output*. The full reasoning:

- **The agent produces syntactically correct code more than 99% of the time.** It compiles, passes the *linter*, looks right. But it may be **semantically wrong** — wrong algorithm, violated invariant, ignored *edge case*, *off-by-one*, assumption about *input* that does not hold, silent *race condition*. These errors don't show up in the *linter*.
- **The human is the last layer of semantic validation** before the code enters the repository. The agent has no *accountability*; you do. *Git blame* points to you.
- **Why is 3 sentences the right threshold?** It is **sufficient** — in 3 sentences you have to articulate (i) what the code does, (ii) why it is structured this way, (iii) what would happen if an important input changed. If you understand this, you defend the code. It is **short** — it doesn't let you mask lack of understanding with confused prose. Either you know or you don't. It is **realistic** — for well-written code, 3 sentences are enough; if you need 20 lines, the code is confused or you didn't understand it.
- **"You did not deserve to accept the *output*"** is deliberate provocation. The *ethos* is simple: the code that enters the repository is your responsibility, not the agent's. If you cannot explain it, you cannot maintain it, debug it, or evolve it.
- **"Review"** is not throw it away — it is a second pass. You can (a) ask the agent to explain line by line, (b) rewrite parts until your mental model settles, (c) simplify the code until it fits in 3 sentences. Usually option (c) also improves quality.

Apply this test **before** every `git add`. At first it feels like *friction*; after a week it becomes automatic and saves you days of future *debug*.

### 5.4 Memories, *skills*, *hooks*

Within the Claude Code ecosystem and analogues (Cursor, Windsurf):

- **Memories** — persistent files between sessions that teach the agent *"how this user operates"*. They store preferences, rules, contractual structure, vocabulary. Valid for things that don't change for weeks.
- **Skills** — *custom* commands (*daily start*, *closing*, *register*, code reviews) that automate repetitive rituals.
- **Hooks** — *scripts* that fire on agent events (start of session, end of response) for automation.

These are **optional**. But the day you start feeling that you're repeating the same instructions to the agent, it's a sign that a memory or *skill* will multiply the return.

### 5.5 Minimum recommended investment in agent infra

An operational warning that applies to any senior dev adopting PARDES seriously:

- **Pay for the most robust plan available** — Claude Max, Cursor Ultra, Copilot Enterprise. The calculation is simple: 200 dollars per month is approximately one hour of senior fees. If it saves you one hour per month in cognitive load, it has already paid off. From day 2 onwards, everything is profit.
- **Don't save *tokens*.** The temptation exists and is poisonous: *"this prompt is long, I can truncate"*, *"I use a small model here to save"*. Predictable outcome: worse *output* → rework → loss of time tens of times greater than the cost of the tokens saved.
- **Symptoms that you are saving too much (all red flags):**
  - Fragmented sessions instead of continuous (you lose context *cache*)
  - Context manually truncated to *"fit"*
  - Avoiding expensive *tools* (*web* search, *parallel tool calls*) when they would improve the decision
  - Using small models on tasks that deserve the top model → weak *output* → you redo it
- **The economic calculation for the senior is unequivocal:** your time costs much more than any subscription. The only legitimate reason to save is if the client/company pays and imposes a limit.

If your client does not pay the robust subscription, consider: (a) negotiating an *upgrade* as a technical expense; (b) absorbing it personally (it's an investment in individual productivity); (c) if it's really impossible, apply PARDES with what you have but accept the productivity loss and don't blame the methodology for it.

### 5.6 PARDES is a methodology, not an ecosystem

Important so you don't get frustrated with comparisons:

**PARDES is:** methodology (15-step chain, *specs*, Purpose) + *workspace* structure (`_estado.md`, `specs/`) + rituals (start, register, close) + the three-sentence test.

**PARDES is NOT:** any specific commercial tool, any productivity *hardware*, any proprietary automation pipeline. These are **optional amplifiers** that some practitioners have and that accelerate the method, but **are not part of the method**.

Consequence: if you see someone applying PARDES with advanced personal infra (meeting transcribers, *custom dashboards*, AR hardware), this is **not a requirement**. You do PARDES without any of that and get 80% of the gain. The remaining 20% requires investment in personal infra — which you can build later, once the method is settled.

Don't try to replicate someone else's ecosystem before mastering the method.

---

## 6. The exercise of the day — the real order of 8 hours

This is what you do **today**. Not tomorrow, today.

### Block A (morning, ~2h) — *Setup* and reading

- [ ] (20 min) Create your own repository/folder for your PARDES *workspace* (can be local, doesn't need to go to *git* yet). Recommended: `~/workspace/pardes-{your-name}/`.
- [ ] (20 min) Copy the chain *templates* to the `templates/` folder of your *workspace*.
- [ ] (30 min) Read this document to the end, **unhurriedly**. Take notes of questions for the end.
- [ ] (30 min) Open the spec *templates* and skim them — without filling in. Goal: know where each one is.
- [ ] (20 min) Choose **a real and small work unit** for the practical exercise of the afternoon. Criteria:
  - Something in your current day to day (don't invent)
  - Small: one *feature*, one module, one integration — not an entire product
  - Something in which **intent is clear** (you know why it exists)

### Block B (morning, ~2h) — Purpose and Domain

Focused on the chosen unit.

- [ ] (15 min) Create `{unit}/_estado.md` copying the *template* and filling in minimally.
- [ ] (45 min) Write **`specs/01-spec-proposito.md`** filling in all sections. If some section is *"I don't know"*, mark as *TODO* and move on — but try to answer. Special attention to the **"Non-purpose"** section: what this system is *not*, is as important as what it is.
- [ ] (45 min) Write **`specs/02-spec-dominio.md`**. For a small unit, this can be 5-15 concepts + their rules. Don't invent elaborate ontologies — capture only what matters for the capabilities you will need.
- [ ] (15 min) Update `_estado.md`: current step = 3 (Domain), last update, next actions (write Capabilities).

### Block C (afternoon, ~4h) — Capabilities, Contracts and a slice of code

- [ ] (45 min) Write **`specs/03-spec-capacidades.md`**. Closed list of what the system does. Not how. Verbs.
- [ ] (30 min) Identify **the first vertical slice** — a small but *end-to-end* capability (input → logic → output) that you will implement today.
- [ ] (30 min) Write **`specs/04-spec-contratos.md`** **only for that slice**. *Endpoint*, *input*, *output*, error codes. If it's a library, function + types. If it's an async message, event + *payload*.
- [ ] (2 h) **Step 8 — Implementation.** Write the slice's code. If you use an AI agent, pass it specs 01-04 as context and ask for generation. Review line by line. Correct what the *spec* did not capture (*loop*).
- [ ] (15 min) Update `_estado.md` with what you did. Record questions that arose about the *specs*.

### Final checklist of the day

If you got everything above done, you are in the PARDES **loop**. By end of day you should have:

```
pardes-{your-name}/
  templates/          ← reference copy
  {unit}/
    _estado.md            ← populated, not placeholder
    specs/
      01-spec-proposito.md
      02-spec-dominio.md
      03-spec-capacidades.md
      04-spec-contratos.md   ← only for the implemented slice
    {slice code}/
```

You don't need all 10 *specs*. You need those your unit justifies today.

---

## 7. Common pitfalls

These are real errors observed in various application contexts of the method. Read **before** you start.

### 7.1 Over-documenting

**Symptom:** you spend the day filling in *templates* and never writing code. The files look pretty, the system doesn't exist.

**Fix:** the *spec* only deserves detail when its absence is generating wrong decisions. If you can progress with half a page of Purpose + 5 Domain concepts, that's the right level. You'll expand when it hurts.

### 7.2 Using PARDES as a bureaucratic *checklist*

**Symptom:** you treat the chain as a passage *gate* — *"I can't write code before spec X is validated"*. You stop working.

**Fix:** the chain is a taxonomy of artefacts, not an approval *workflow*. Code is written at any moment, provided intent is clear. The *spec* formalises what you already knew; it doesn't prevent starting.

### 7.3 Weak Purpose *spec*

**Symptom:** you fill in *"Purpose"* with *"automate process X"* and move on. At step 4 you realise you don't know what value you deliver to whom — and everything you derived until then is crooked.

**Fix:** Purpose takes the time it needs. **For whom it is, what value it solves, what it is NOT** — the 3 things must be crystal clear. If the first version is weak, it will hurt the entire chain.

### 7.4 Ignoring `_estado.md`

**Symptom:** you do everything well but the `_estado.md` has been outdated for 5 days. Tomorrow you start working on an obsolete mental image.

**Fix:** inviolable rule — any state change (decision, blocker, advanced step) is reflected **immediately** in `_estado.md`. Not *"later"*. Not *"when I finish the feature"*. Now.

### 7.5 Skipping Validation (step 9)

**Symptom:** you implement step 8 and go straight to *Deployment*. The tests you write afterwards are justificatory, not verifying.

**Fix:** Validation is a *spec* **before** implementation (ideally — but if you write in parallel, *ok*). Acceptance criteria come from Capabilities, not from the intuition of *"should work more or less like this"*.

### 7.6 *Spec* disconnected from code

**Symptom:** the *specs* say X, the code does Y. Nobody reads the *specs*; nobody updates them when the code changes.

**Fix:** when you change code that contradicts the *spec*, you stop and choose: (a) *spec* was right → fix code; (b) *spec* was wrong → fix *spec* + possibly propagate up. Never (c) let it silently diverge.

### 7.7 Applying the entire chain to everything

**Symptom:** a 3-line *bug* led you to write 9 *specs*.

**Fix:** the chain is maximum power. For a *bug*, just update `_estado.md` and *commit*. For a *feature*, 2 to 4 *specs*. For a new product, it can be the whole chain. What dictates depth is the **cost of the wrong decision**, not the ambition of completeness.

---

## 8. What PARDES is NOT

As important as what it is:

- **It is not *waterfall*.** It does not require a complete *spec* before code. They alternate; both grow together.
- **It is not *Big Design Up Front*.** Detailed *specs* (Domain, Contracts) appear when the system justifies, not before.
- **It is not *"serious documentation"*.** Documentation serves a future human reader; *spec* serves a **derivable decision**. Different languages, different audiences.
- **It is not agile *vs* non-agile.** It is orthogonal. It works in *scrum*, *kanban*, continuous cycles, annual cycles. What changes is the cadence of reviews, not the structure.
- **It is not *"anti-code"*.** Code remains the central artefact of execution. What changes is that it ceases to be the **only record** of intent.
- **It is not just AI.** PARDES existed as a discipline in many practitioners before and continues to work without agents. Agents amplify, they do not create.

---

## 9. Signs you are applying it well

After a few weeks, you should see:

- ***Context switch* in under 30 seconds** between different projects — just open `_estado.md`.
- **Defensible old decisions** — you can explain to a *stakeholder* why you took X 3 months ago, because it is written.
- **Fewer circular discussions** — when someone challenges you in a meeting, you point to the corresponding *spec*.
- **Code and *specs* do not diverge silently** — when that would happen, one of the two stops and corrects.
- **Drastically reduced colleague *onboarding*** — new dev reads `_estado.md` + *specs* and gets started in hours, not weeks.
- **Healthy metrics** — smaller *lead time*, less rework, fewer *bugs* of misinterpretation.

If you don't see this within 4 to 6 weeks, you probably fell into one of the pitfalls of the previous section. Revisit.

---

## 10. Where to go after this day

- **[The 15-step chain](/en/metodo/cadeia/)** — each of the 15 steps with examples, anti-patterns and heuristics for when each *spec* deserves detail
- **[The three-sentence test](/en/metodo/teste-3-frases/)** — the rule in detail: why 3, what to do when you fail, why this discipline multiplies quality tenfold in the medium term
- **[About the author](/en/sobre-o-autor/)** — to open a channel and follow new pieces

Today's day is the minimum for you to be **autonomous**. Deepening happens in the following weeks, applying to real work and revisiting this document when doubt arises.

---

## 11. Questions channel

If you get stuck for more than 20 minutes on the same question, open a channel. The cost of asking is always less than the cost of walking in the wrong direction. See [About the author](/en/sobre-o-autor/) for direct means.

---

*This document is the beginning. It is not a complete manual. It evolves with practice — when you discover a pitfall that is not here, let me know; when you discover an extra sign of success, let me know. It is yours.*

</div>
