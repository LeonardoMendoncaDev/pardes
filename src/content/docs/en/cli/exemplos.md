---
title: Examples
description: Concrete cases where the PARDES CLI was used in practice. Starts with the calculator — the first case outside the author's work context, which validated version 0.0.1.
---

Theory is easy. The fair question is whether the method and the CLI work on a small case, without complicated domain, without stakeholders pressing. This page keeps the first real cases.

## Self-contained JavaScript calculator — the 0.0.1 validation

**Date.** April 26, 2026.

**Context.** First use of the CLI outside the author's professional context (the four contracts where PARDES was already applied internally). The chosen case was deliberately trivial: a JavaScript calculator in a single HTML file, no external dependencies, no *build*, opens directly in the *browser*.

**How it ran.** The author opened the terminal in an empty folder and ran `pardes init`. Picked Português PT as the language. The CLI showed the steps going through the terminal with a green `✓` in front of each one — it detected the folder was empty, inferred *greenfield*, wrote the `pardes/_estado.md` and `pardes/intent.md` skeletons, composed the master briefing and copied it to the clipboard. Next, it asked which AI agent the author used — the author picked Claude Code. The CLI opened a new terminal with Claude Code already running in the calculator's folder, and printed a coloured box in the original terminal reminding: "the briefing is on the clipboard, paste with Cmd+V". That's exactly what happened: a Cmd+V in the Claude Code window, and the agent took over from there. It introduced itself as the deep interviewer, asked the first question about who would use the calculator, then about which operations to support, then about what the calculator should NOT do (non-intent). When the author replied "no *frameworks*, no separate files, no *build*", the agent recorded it in `intent.md` and went straight to the minimal slice — delivered a single self-contained `index.html` with JavaScript, CSS and markup all in one file, working on first open.

**Result.** A working calculator in a single HTML file. No rework, no extra *prompts* to fix things. The author declared "PARDES 0.0.1 validated and ready to ship" at the end.

**What this proves.** That the `pardes init` flow works even on a case where none of the harder parts of the method (the fifteen-step chain, integrations, domain *trade-offs*) are exercised. Intent fixed by the choreography of CLI + agent, before the first line of code, visibly improves what the agent returns.

**What this does not prove.** That it works on big cases, on *brownfield*, with more than one *stakeholder*, or on distributed teams. Those cases are exercised in the author's professional contracts — internally — but are not published here for confidentiality reasons.

## Other cases

The next cases published here will be the ones other users share. If you tried the CLI on a project of yours and want it to appear here, open an *issue* on the [site repository](https://github.com/LeonardoMendoncaDev/pardes) with a short report following the pattern above — date, context, how it ran, result, what it proves and what it does not prove.

The *bar* to enter this list is deliberately low in terms of project size, but high in terms of honesty of reporting. Cases where the method did not run well are equally welcome — those teach more.
