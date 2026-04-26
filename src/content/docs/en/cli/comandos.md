---
title: The command
description: Details of the single CLI command — pardes init. What it does, what shows up in the terminal, what stays in the project, and what happens next in your AI agent.
---

The PARDES CLI deliberately has **one single command**. The earlier version had three (`init`, `intent`, `prompt`), and the minimal interview was still run by the CLI itself before the briefing got handed to the agent. That was discarded: it was heavy for the dev and duplicated work that the AI agent, with the code in front, does better. The current version takes the choreographic philosophy all the way — the dev runs `pardes init`, and the agent takes over everything.

## `pardes init`

The single command does, in sequence:

1. **Asks for the language** (Português PT, Português BR or English). It is the only thing that needs input at the start, and it's recorded for next runs in the same project.
2. **Shows each step happening in the background** with a `✓` indicator next to each one as it completes — detecting the *stack*, inferring whether it's *greenfield* or *brownfield*, writing the files, composing the master briefing, copying to the *clipboard*. The dev watches what is happening without having to think.
3. **Asks which AI agent you usually use** — multiple-choice with Claude Code, Gemini CLI, Aider, Codex CLI, Cursor, Windsurf, VS Code with Copilot, VS Code with Cline, or *"other / just copy to clipboard"*. This is the only other interaction from the dev.
4. **Opens a terminal or IDE** with the agent already running in the project folder, according to the choice. On some operating systems this may fail — in which case it shows you how to open it manually.
5. **Prints a final, big, visible box** stating clearly that the briefing is on the clipboard and that your only gesture is to paste with `Cmd+V` (or `Ctrl+V`) into the agent's window. Without that manual gesture nothing happens — that's why the box is so prominent.

## What stays in your project

In a new folder called `pardes/`:

- `pardes/_estado.md` — single source of truth for the current state. As the project moves forward, this is where decisions, blockers and the current step of the fifteen-step chain are recorded.
- `pardes/intent.md` — Intent Spec skeleton, with placeholders. Not yet filled in — the AI agent fills it in with you during the conversation.
- `pardes/prompt-briefing.md` — the full master briefing, persistent. It's also on the clipboard, but if you need to re-copy later it's right here.
- `pardes/.config` — user preferences (language, etc.).

## What the agent does next

When you paste the briefing into the agent's window, it will:

- Read the project's current state and the detected *stack*;
- Read the empty skeleton of `intent.md`;
- Run the **deep interview** with you, question by question, during normal development — who the user is, what the intent is, what the system should NOT do (non-intent), known constraints;
- Fill `intent.md` collaboratively with you, as the answers come out;
- Keep `_estado.md` up to date as you advance steps of the chain.

## Advanced commands

For users who want to skip parts of the flow, two commands remain available though hidden from `--help`:

- `pardes intent` — invokes only the minimal four-question interview inside the CLI (old version, kept for those who prefer capturing the "who it's for" and "what the intent is" in the terminal before calling the agent).
- `pardes prompt` — invokes only the master briefing generation. Useful if you manually changed `_estado.md` or `intent.md` and want an updated briefing.

These two commands are optional. The recommended flow is, and stays, `pardes init`.
