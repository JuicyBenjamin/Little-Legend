# Agent Instructions (Root)

This is a full-stack web application built with **TanStack Start** and deployed on **Deno Deploy**.

The project uses:

- **Deno** as the runtime (local + production)
- **TanStack Start** for routing, SSR, and server functions
- **shadcn/ui** for UI components
- Web-standard APIs wherever possible

These instructions apply globally. More specific rules may exist in subdirectories
(e.g. `server/AGENTS.md`).

---

## Runtime & Tooling

- **Runtime:** Deno
- **Deployment target:** Deno Deploy
- **Do NOT assume Node.js or Bun**
- Prefer **Web-standard APIs** (`fetch`, `Request`, `Response`, streams)
- Use `deno task <name>` to run scripts (not `npm run`, `pnpm`, or `bun`)

If a suggestion depends on Node-only APIs, it must be explicitly justified or avoided.

Reference (runtime behavior, permissions, module system):
https://docs.deno.com/llms.txt

---

## TanStack Start

- TanStack Start owns routing, SSR, and server logic
- Prefer Start’s built-in server functions and routing unless a clear reason exists
- Avoid introducing parallel server frameworks unless explicitly requested

Assume Start is running on a Deno-compatible runtime.

---

## UI & Components

- UI components are managed with **shadcn/ui**
- Prefer existing shadcn components before introducing new abstractions
- Follow shadcn conventions for file placement and composition
- Styling is utility-first (Tailwind via shadcn defaults)

---

## Project Structure & Scope

- Global rules live here
- Runtime/framework-specific rules live in subfolders (e.g. `server/AGENTS.md`)
- Do not apply server/runtime assumptions to frontend-only code

When unsure:

- Prefer **existing project patterns**
- Prefer **internal code** over external examples
- Ask before introducing new infrastructure or frameworks

---

## Development Workflow

- **Do NOT start the dev server automatically** — assume the user will run `deno task dev` themselves
- If testing requires a running server, ask the user to confirm it's running or to start it
- The dev server runs on port **3000** by default

---

## Summary

- Deno first
- TanStack Start for app/server logic
- shadcn/ui for UI
- Web standards over platform-specific APIs
- Keep instructions scoped and minimal
