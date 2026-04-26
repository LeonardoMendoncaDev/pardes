---
title: Start with pardes init
description: In two minutes you will have PARDES applied to a real feature of yours, with your AI agent ready to run the deep interview with you. One single command, one single multiple-choice question, one Cmd+V.
---

<div class="metodo-page">

> **Audience.** *Developer* with at least one year of experience who uses Claude Code, Cursor, Copilot, Windsurf, Gemini CLI or Aider day to day, and who saw themselves in the [diagnosis](/en/diagnostico/) — inconsistent deliveries, good day and bad day with no way to predict which one you are in.
>
> **Goal.** In two minutes you will have PARDES applied to a *feature* of yours, the AI agent with the right briefing in hand, and the deep interview starting with you in the editor. You will not master the method. You will have felt, in a real case of yours, the difference between invoking AI with intent pinned down and invoking in a hurry.
>
> **Prerequisites.** The `pardes` CLI installed (see [install the CLI](/en/cli/instalar/)). A small *feature* of yours you already wanted to do today. Two minutes without meetings.

---

## The central idea — in two sentences

The inconsistency in your AI deliveries doesn't come from the agent, it comes from the intent you never pinned down before the *prompt*. PARDES choreographs the capture of that intent with you and with your agent — you make a single gesture on the command line, and the agent takes on the role of deep interviewer from there.

PARDES has 15 steps in total. Today you will start at step 1-2: the *Intent Spec*. The others live for other hours; this is the one that changes the result the most.

---

## The next two minutes, step by step

### 1. Pick a *feature* (30 seconds)

Take something you were really planning to do today or tomorrow. Criteria:

- **Small.** Something you would normally clear in one to three hours. Not a new product, not an architectural rewrite — a *feature*, an *endpoint*, a screen, a simple integration, a *script*.
- **Real.** Don't invent something for the exercise. The effect comes from applying the method to something where you yourself have *stake* in the result.

Create the *feature* folder (or navigate to it if it already exists) in the terminal.

### 2. Run `pardes init` (30 seconds)

```bash
pardes init
```

The CLI will ask for the language — pick and follow. From there, you will see a series of steps appearing with a green `✓` next to each: detecting your project's *stack*, inferring whether it's *greenfield* or *brownfield*, writing the `pardes/_estado.md` and `pardes/intent.md` files, composing the master briefing and copying it to your *clipboard*. You don't have to do anything — just watch what's happening.

### 3. Pick your AI agent (10 seconds)

Next, the CLI asks a single question: which AI agent do you use? A list appears with the main ones — Claude Code, Gemini CLI, Aider, Codex CLI, Cursor, Windsurf, VS Code with Copilot, VS Code with Cline, or *"other / just copy to clipboard"*. Pick one and continue.

The CLI automatically opens a new terminal with the CLI agent already running in the *feature* folder, or the IDE with the side chat already open. If the system can't open it automatically, it shows you the command to run — but the briefing is always already on the clipboard.

### 4. Paste with `Cmd+V` (5 seconds)

In the agent's window, hit `Cmd+V` (or `Ctrl+V` on Linux/Windows). This is your last manual gesture.

The CLI prints a big visible coloured box at the end reminding you of exactly this, with a yellow arrow, so you don't forget — without this *paste* nothing happens. If you read fast, stop and look at the box.

### 5. Let the agent run the interview (from here — minutes to days)

As soon as the agent receives the briefing, it:

- Reads the `intent.md` skeleton and notices it's still empty.
- Introduces itself to you as the deep interviewer of the Intent Spec.
- Asks the first question — who the user of this *feature* is. In one sentence.
- From your answers, fills `intent.md` collaboratively, section by section: who it's for, what the intent is, what value it delivers, what it is NOT (non-intent), known constraints.
- Asks one at a time. Doesn't dump questionnaires. Adapts the next questions to your previous answers.

When the agent asks about **non-intent**, pay extra attention — it's the section your brain will want to skip and it's the one that prevents the agent from filling gaps with plausibility.

---

## Signs it worked

If the first few minutes went as they should, you should be feeling one or more of these things:

- The agent asked you questions it normally never asks — because this time it had enough context to detect gaps.
- You felt heard rather than pushing one *prompt* after another.
- While answering non-intent, you realised at least one implicit decision you had been making without knowing.
- The `intent.md` in your editor was filling up while you talked, without you having to write it by hand.

If you didn't feel any of this, the chosen *feature* was probably too simple (there was no intent at all to pin down) or too complex (this wasn't the right place to start). Try again tomorrow with another one.

## What now?

Today you ran one command and the agent took over from there. What changed was small on the surface — you just ran `pardes init` before the *prompt* — and big in effect. The honest question now is: will you do this again tomorrow, on the next *feature*?

If the answer is *yes*, install the habit for a week and revisit the other materials when doubt appears:

- [The 15-step chain](/en/metodo/cadeia/) — the full map, for when a bigger *feature* justifies moving on to Domain, Capabilities, Contracts and so on.
- [The three-sentence test](/en/metodo/teste-3-frases/) — the closing rule in detail, with examples and traps.
- [About the author](/en/sobre-o-autor/) — to open a direct channel.

If the answer is *not sure*, write. The cost of asking is always less than the cost of walking in the wrong direction.

</div>
