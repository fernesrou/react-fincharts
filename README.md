# React FinCharts

> **Note:** This repo is a fork of [react-financial-charts](https://github.com/react-financial/react-financial-charts), which itself is a fork of [react-stockcharts](https://github.com/rrag/react-stockcharts). This fork has been modernized for React 18/19 compatibility with bug fixes and performance improvements.

> **Breaking Changes:** This is version 1.0.0 of react-fincharts with significant improvements over the original libraries. All packages have been renamed from `@react-financial-charts/*` to `@react-fincharts/*`.

![ci](https://github.com/fernesrou/react-fincharts/workflows/ci/badge.svg)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/fernesrou/react-fincharts/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react-fincharts.svg?style=flat)](https://www.npmjs.com/package/react-fincharts)

Charts dedicated to finance.

The aim with this project is create financial charts that work out of the box.

## Compatibility

This library is compatible with:

- **React 17.x, 18.x, and 19.x**
- **TypeScript 5.x**
- **Node.js 18+**

## What's New in React FinCharts 1.0.0

### 🚀 **Major Improvements**

- **React 18/19 Compatibility**: Full support for React 18 and 19 with modern lifecycle methods
- **Package Rename**: All packages renamed from `@react-financial-charts/*` to `@react-fincharts/*`
- **Bug Fixes**: Fixed tooltip rendering, annotation synchronization, and zoom/pan coordination issues
- **Performance**: Enhanced rendering performance and reduced re-renders
- **TypeScript**: Better TypeScript support and type definitions
- **Clean Architecture**: Removed deprecated UNSAFE lifecycle methods

### 🔧 **Breaking Changes**

- Package names changed to `@react-fincharts/*`
- Main package renamed to `react-fincharts`
- Some API improvements for better React 18+ compatibility

### 📦 **Migration Guide**

Replace your imports:

```javascript
// Old
import { ChartCanvas } from "react-financial-charts";
import { CandlestickSeries } from "@react-financial-charts/series";

// New
import { ChartCanvas } from "react-fincharts";
import { CandlestickSeries } from "@react-fincharts/series";
```

---

## Features

- integrates multiple chart types
- technical indicators and overlays
- drawing objects

### Chart types

- Scatter
- Area
- Line
- Candlestick
- OHLC
- HeikenAshi
- Renko
- Kagi
- Point & Figure

### Indicators

- EMA, SMA, WMA, TMA
- Bollinger band
- SAR
- MACD
- RSI
- ATR
- Stochastic (fast, slow, full)
- ForceIndex
- ElderRay
- Elder Impulse

### Interactive Indicators

- Trendline
- Fibonacci Retracements
- Gann Fan
- Channel
- Linear regression channel

---

## Installation

```sh
npm install react-fincharts
```

For specific packages:

```sh
npm install @react-fincharts/core @react-fincharts/series @react-fincharts/annotations
```

## Documentation

[Stories/Examples](https://fernesrou.github.io/react-fincharts/) (Coming soon)

For now, refer to the original [react-financial-charts documentation](https://react-financial.github.io/react-financial-charts/) as the API is largely compatible.

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

This project is a mono-repo that uses [Lerna](https://lerna.js.org/) to manage dependencies between packages.

To get started run:

```bash
git clone https://github.com/fernesrou/react-fincharts.git
cd react-fincharts
npm ci
npm run build
```

To start up a development server run:

```bash
npm start
```

## Roadmap

### ✅ **Completed (react-fincharts 1.0.0)**

- [x] Fork and modernize from react-financial-charts
- [x] Add React 18 & 19 compatibility
- [x] Remove all UNSAFE lifecycle methods
- [x] Fix tooltip rendering and positioning issues
- [x] Fix annotation zoom/pan coordination
- [x] Enhanced error handling and prop validation
- [x] Rename packages to @react-fincharts/\*
- [x] Update all documentation and examples
- [x] Optimize build process and package size

### 🚧 **In Progress**

- [ ] Publish to npm registry
- [ ] Set up GitHub Pages for documentation
- [ ] Create comprehensive migration guide

### 📋 **Future Plans**

- [ ] Add full test suite with Jest/React Testing Library
- [ ] Performance optimizations for large datasets
- [ ] Add more chart types and indicators
- [ ] Accessibility improvements
- [ ] Mobile touch gesture improvements

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Attribution

This project is a fork of:

- [react-financial-charts](https://github.com/react-financial/react-financial-charts) (by Reactive Markets)
- [react-stockcharts](https://github.com/rrag/react-stockcharts) (original project by rrag)

Special thanks to all the original contributors who made this library possible.
