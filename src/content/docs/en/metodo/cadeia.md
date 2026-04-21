---
title: The 15-step chain
description: The 15 steps of the PARDES chain — from literal intent to emergent operation.
---

<div class="metodo-page">

The PARDES chain organises the lifecycle of a software system into fifteen linked steps. It alternates between **spec** (odd-numbered steps, where things are articulated) and **execution** (even-numbered steps, where things materialise). Each step has an associated artefact and a hermeneutic layer — Peshat, Remez, Drash or Sod.

The chain is not a rigid sequence. It is a **taxonomy** — a map of what exists, not a mandatory order. In many real cases it is applied in a mixed or retrospective fashion: the code already exists and the *specs* are written while reading the code; or there is only a clear intent and a slice of execution before any formal *spec*. What matters is that, in the end, each relevant step has its artefact coherent with its neighbours.

## The 15 steps mapped to the four PaRDeS layers

| Step | Type | Name | PaRDeS Layer |
|------|------|------|---------------|
| 1-2 | Spec | Purpose | Peshat (literal) |
| 3 | Spec | Domain | Peshat (literal) |
| 4 | Spec | Capabilities | Remez (allusive) |
| 5 | Spec | Contracts | Remez (allusive) |
| 6 | Spec | Behaviour | Drash (interpretive) |
| 7 | Spec | Orchestration | Drash (interpretive) |
| 8 | Execution | Implementation | Drash (interpretive) |
| 9 | Spec | Validation | Drash (interpretive) |
| 10 | Execution | Validation executed | Drash (interpretive) |
| 11 | Spec | *Deployment* | Sod (emergent) |
| 12 | Execution | *Deploy* executed | Sod (emergent) |
| 13 | Spec | Observability | Sod (emergent) |
| 14 | Execution | Operation | Sod (emergent) |
| 15 | Spec | Evolution | Sod (emergent) |

When step 15 is executed, we return to step 1 — is the intent still valid? The chain is a cycle, not a line.

## Peshat — the literal (steps 1-3)

The layer where intent is captured in direct language, without metaphor or allusion.

- **Purpose** (steps 1-2) answers *why this system should exist, for whom, and what it expressly is not*. The *non-purpose* is as important as the purpose — it delimits the scope and protects against *feature creep*.
- **Domain** (step 3) captures the concepts, rules and constraints of the real problem. It is not class modelling; it is modelling of the world the code is going to represent.

## Remez — the allusive (steps 4-5)

The layer where the purpose points to what the system will do, without yet describing how.

- **Capabilities** (step 4) lists what the system **does**, from the actor's point of view. Verbs, not implementations.
- **Contracts** (step 5) describes how the system is accessed: *endpoints*, exposed functions, emitted events, honoured protocols.

## Drash — the interpretive (steps 6-10)

The layer where intent passes through the filter of material reality and is translated into code.

- **Behaviour** (step 6) defines *guardrails*, autonomy limits, escalation modes — especially critical when there are agents with some degree of autonomy.
- **Orchestration** (step 7) articulates who executes what, in what order, with what dependencies. It is the execution graph.
- **Implementation** (step 8) is the code itself. This is where the discipline of accepting each block applies — see [The three-sentence test](/en/metodo/teste-3-frases/).
- **Validation** (step 9) defines the acceptance criteria and the tests that verify them.
- **Validation executed** (step 10) is running the tests and seeing what fails.

## Sod — the emergent (steps 11-15)

The layer that only reveals itself when the system enters real operation.

- ***Deployment*** (step 11) defines where, how and under what conditions the system goes to production.
- ***Deploy* executed** (step 12) is the act of putting into production.
- **Observability** (step 13) defines metrics, alerts and *dashboards*. Without this layer one does not know if the purpose is being fulfilled in reality.
- **Operation** (step 14) is the system running, being used, teaching about itself.
- **Evolution** (step 15) re-evaluates the original intent in light of what the system has taught. When it is executed, we return to step 1.

## How it works in practice

The chain is not applied in full to every unit of work. A three-line *bug* does not need the fifteen *specs* — it is enough to update the state and *commit*. A small *feature* may have two to four *specs* written in a short register. A new product may justify the entire chain. The criterion is the **cost of the wrong decision**: the higher the cost of being wrong, the deeper it makes sense for the *spec* to be.

The heuristic that sums this up is simple: *the spec appears when its absence would be generating wrong decisions*. If you can progress without writing it, do not write it. If you get stuck in circular discussions about *"what is this thing exactly?"*, the *spec* appears.

<div class="exercise">

**To apply now**

Pick a real unit of work you are involved in — it can be a *feature* in progress, a large bug, an integration.

Try to answer in short prose:

1. At which step of the chain are you, honestly, right now?
2. Which *specs* from previous steps are clear and accessible — and which are implicit, in your head, still unwritten?
3. If you had to hand off this unit to another person tomorrow, which of those implicit *specs* would pose the greatest risk by remaining unwritten?

The third question usually points to which *spec* deserves to be written first.

</div>

## Common pitfalls

<div class="trap">

**Treating the chain as a rigid sequence**

Interpreting the fifteen steps as a mandatory order blocks the work. The chain is taxonomy; the order in which it is applied depends on reality — code exists, intent is new, the system is already in operation. The sequence 1 → 2 → … → 15 is ideal for pure *greenfield*, which is a rare case.

</div>

<div class="trap">

**Writing all *specs* with the same degree of detail**

Not all fifteen receive the same investment. Purpose and Contracts almost always deserve density; Observability can be one line for a local CLI and twenty pages for a multi-region platform. The criterion is the cost of being wrong, not completeness for its own sake.

</div>

<div class="trap">

**Ignoring Evolution**

Step 15 is frequently forgotten — the system enters operation and is assumed to be *done*. But the original intent may have changed; the operating system teaches things the initial *spec* did not foresee; external dependencies age. Periodically re-evaluating the intent is what closes the chain as a cycle, not a line.

</div>

<div class="checklist">

- I know which step of the chain the unit of work I am in is at
- The *specs* from previous steps are written or consciously deferred (not forgotten)
- I have clarity about which PaRDeS layer each step occupies
- I accept that the order may be mixed (*retrospective*, *greenfield*, *mixed*) depending on the case
- I periodically re-evaluate whether the original intent is still valid (step 15)

</div>

## Where to go next

- **[Onboarding in 1 day](/en/metodo/onboarding/)** — practical 8-hour guide to get started with the chain on a real project
- **[The three-sentence test](/en/metodo/teste-3-frases/)** — the discipline applied at step 8 (Implementation)

</div>
