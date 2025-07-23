# Contributing to React FinCharts

We welcome all contributions to React FinCharts!

Before creating a PR, please raise an issue to discuss it on our [GitHub repository](https://github.com/fernesrou/react-fincharts/issues).

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/react-fincharts.git`
3. Install dependencies: `npm ci`
4. Build the project: `npm run build`
5. Start development server: `npm start`

## Commits

We use [convention commits](https://www.conventionalcommits.org) style of commit messages.

## Development

This project uses:

- **TypeScript 5.x** with strict mode
- **React 18/19** compatibility
- **Lerna** for monorepo management
- **Storybook** for development and testing

### Available Scripts

```bash
npm run build          # Build all packages
npm run clean          # Clean all build artifacts
npm run start          # Start Storybook development server
npm run start:stories  # Alternative to start Storybook
npm run lint           # Run ESLint
```

## Commits

We use [Conventional Commits](https://www.conventionalcommits.org) style of commit messages.

Examples:

```
feat: add new chart type
fix: resolve tooltip positioning issue
docs: update installation guide
chore: bump dependencies
```

## Style

The codebase is written in TypeScript with strict mode enabled. We use ESLint for code style enforcement.

You can run `npm run lint` to check for style issues.

### Guidelines

- Use Promises instead of callbacks
- Files should be 100 lines or less when possible
- Use modern React patterns (hooks, functional components)
- Follow TypeScript best practices
- Add proper type definitions for all public APIs

## Tests

Tests are implemented using Storybook. Please see existing stories for recommended formatting and add stories for new components.

## Package Structure

This is a monorepo with the following packages:

- `@react-fincharts/core` - Core chart components
- `@react-fincharts/series` - Chart series components
- `@react-fincharts/annotations` - Annotation components
- `@react-fincharts/axes` - Axis components
- `@react-fincharts/coordinates` - Coordinate components
- `@react-fincharts/indicators` - Technical indicators
- `@react-fincharts/interactive` - Interactive components
- `@react-fincharts/scales` - Scale utilities
- `@react-fincharts/tooltip` - Tooltip components
- `@react-fincharts/utils` - Utility functions

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Add tests/stories if applicable
5. Ensure `npm run build` passes
6. Ensure `npm run lint` passes
7. Commit using conventional commits
8. Push to your fork
9. Create a Pull Request with a clear description

Thank you for contributing to React FinCharts! 🎉
