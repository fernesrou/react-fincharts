# React Financial Charts

> **Note:** this repo is a fork of [react-stockcharts](https://github.com/rrag/react-stockcharts), renamed, converted to typescript and bug fixes applied due to the original project being unmaintained.

> **Note:** v1 is a fully breaking change with large parts, if not all, rewritten. Do not expect the same API! although the same features should exist.

![ci](https://github.com/react-financial/react-financial-charts/workflows/ci/badge.svg)
[![codecov](https://codecov.io/gh/reactivemarkets/react-financial-charts/branch/master/graph/badge.svg)](https://codecov.io/gh/reactivemarkets/react-financial-charts)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/react-financial/react-financial-charts/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-financial-charts.svg?style=flat)](https://www.npmjs.com/package/react-financial-charts)

Charts dedicated to finance.

The aim with this project is create financial charts that work out of the box.

## Compatibility

This library is compatible with:

- **React 17.x, 18.x, and 19.x**
- **TypeScript 5.x**
- **Node.js 18+**

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
npm install react-financial-charts
```

## Documentation

[Stories](https://react-financial.github.io/react-financial-charts/)

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

This project is a mono-repo that uses [Lerna](https://lerna.js.org/) to manage dependencies between packages.

To get started run:

```bash
git clone https://github.com/react-financial/react-financial-charts.git
cd react-financial-charts
npm ci
npm run build
```

To start up a development server run:

```bash
npm start
```

## Roadmap

- [x] Convert to typescript
- [x] Bump dependencies to latest
- [x] Remove React 16 support (modernized to React 17+)
- [x] Add CI
- [x] Fix passive scrolling issues
- [x] Implement PRs from react-stockcharts
- [x] Add all typings
- [x] Move examples to storybook
- [x] Add all series' to storybook
- [x] Split project into multiple packages
- [x] Fix issues with empty datasets
- [x] Correct all class props
- [x] Migrate to new React Context API
- [x] Remove all UNSAFE methods
- [x] Add React 18 & 19 compatibility
- [x] Update to modern JSX transform
- [x] Upgrade to Storybook 8.x
- [x] Upgrade TypeScript to 5.x
- [ ] Add documentation to storybook
- [ ] Add full test suite

## LICENSE

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B13613%2Fgit%40github.com%3Areactivemarkets%2Freact-financial-charts.git.svg?type=large)](https://app.fossa.com/projects/custom%2B13613%2Fgit%40github.com%3Areactivemarkets%2Freact-financial-charts.git?ref=badge_large)
