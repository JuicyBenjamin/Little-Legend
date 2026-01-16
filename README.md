# Little Legend

A full-stack web application built with **TanStack Start** and **Deno**.

## Tech Stack

- **Runtime:** [Deno](https://deno.land)
- **Framework:** [TanStack Start](https://tanstack.com/start)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- [Deno](https://docs.deno.com/runtime/getting_started/installation/) (v2.0+)

### Install Dependencies

```bash
deno install
```

### Development

```bash
deno task dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build

```bash
deno task build
```

### Preview Production Build

```bash
deno task preview
```

## Available Tasks

| Task      | Description                           |
| --------- | ------------------------------------- |
| `dev`     | Start development server on port 3000 |
| `build`   | Build for production                  |
| `preview` | Preview production build              |
| `test`    | Run tests with Vitest                 |
| `lint`    | Run ESLint                            |
| `format`  | Format code with Prettier             |
| `check`   | Format and lint fix                   |

Run any task with:

```bash
deno task <task-name>
```

## Project Structure

```
├── src/
│   ├── components/    # React components
│   │   └── ui/        # shadcn/ui components
│   ├── lib/           # Utility functions
│   ├── routes/        # TanStack Router pages
│   └── styles.css     # Global styles
├── public/            # Static assets
├── deno.json          # Deno configuration & tasks
└── package.json       # npm dependencies
```
