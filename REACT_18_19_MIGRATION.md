# React 18/19 Migration Guide

This guide will help you migrate your react-financial-charts setup to be compatible with React 18 and React 19.

## What Changed

### Dependencies Updated

- **React**: Now supports React 16.x, 17.x, 18.x, and 19.x
- **TypeScript**: Updated to 5.x with modern JSX transform
- **Storybook**: Upgraded to 8.x with Vite support
- **D3**: Updated to latest versions for better TypeScript support
- **Build tools**: Updated to latest versions

### JSX Transform

The project now uses the modern JSX transform (`react-jsx`) which means:
- No need to import React in files that only use JSX
- Better tree-shaking and smaller bundle sizes
- Improved TypeScript support

### Breaking Changes

#### For React 18 Users

1. **Automatic Batching**: React 18 includes automatic batching for better performance. This should not affect chart rendering but may affect how state updates are batched.

2. **Strict Mode**: If using React 18's Strict Mode, components may mount twice in development. This library handles this correctly.

3. **Concurrent Features**: The library is compatible with React 18's concurrent features like `useTransition` and `useDeferredValue`.

#### For React 19 Users

1. **New Features**: Compatible with React 19's new features while maintaining backward compatibility.

2. **TypeScript**: Ensure you're using TypeScript 5.x for best React 19 support.

## Migration Steps

### 1. Update Your React Version

```bash
npm install react@^18.3.1 react-dom@^18.3.1
# or for React 19
npm install react@^19.0.0 react-dom@^19.0.0
```

### 2. Update TypeScript (if using)

```bash
npm install --save-dev typescript@^5.4.5 @types/react@^18.2.79 @types/react-dom@^18.2.25
```

### 3. Update Your TypeScript Configuration

If you have a `tsconfig.json`, update it to use the modern JSX transform:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"]
  }
}
```

### 4. Remove Unnecessary React Imports

With the new JSX transform, you can remove React imports from files that only use JSX:

```tsx
// Before
import React from 'react';
import { ChartCanvas } from 'react-financial-charts';

// After (React import no longer needed)
import { ChartCanvas } from 'react-financial-charts';
```

### 5. Update Your Application Root (React 18)

If migrating to React 18, update your root rendering:

```tsx
// Before (React 17)
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After (React 18)
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

## New Features Available

### React 18 Features

- **Automatic Batching**: Multiple state updates are automatically batched
- **Concurrent Features**: Use `useTransition` for non-urgent updates
- **Suspense Improvements**: Better loading states

### React 19 Features

- All React 18 features plus new React 19 enhancements
- Improved TypeScript support
- Better developer experience

## Troubleshooting

### Common Issues

1. **TypeScript Errors**: Make sure you're using TypeScript 5.x and updated type definitions.

2. **Build Errors**: Ensure your build tools support the modern JSX transform.

3. **Storybook Issues**: If using Storybook, update to version 8.x for best React 18/19 support.

### Getting Help

If you encounter issues during migration:

1. Check the [GitHub Issues](https://github.com/react-financial/react-financial-charts/issues)
2. Review the [documentation](https://react-financial.github.io/react-financial-charts/)
3. Look at the [Storybook examples](https://react-financial.github.io/react-financial-charts/)

## Performance Benefits

After migration, you should see:

- Smaller bundle sizes due to modern JSX transform
- Better performance with automatic batching
- Improved TypeScript inference
- Faster development builds
