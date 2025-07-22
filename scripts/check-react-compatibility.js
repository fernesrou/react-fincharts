#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 React Financial Charts - React 18/19 Compatibility Check\n');

// Check if package.json exists
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ No package.json found in current directory');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

console.log('📦 Checking dependencies...\n');

// Check React version
const reactVersion = dependencies.react;
if (reactVersion) {
  console.log(`React version: ${reactVersion}`);
  if (reactVersion.includes('^18') || reactVersion.includes('^19')) {
    console.log('✅ React version is compatible');
  } else {
    console.log('⚠️  Consider updating to React 18 or 19');
    console.log('   npm install react@^18.3.1 react-dom@^18.3.1');
  }
} else {
  console.log('⚠️  React not found in dependencies');
}

// Check TypeScript version
const tsVersion = dependencies.typescript;
if (tsVersion) {
  console.log(`\nTypeScript version: ${tsVersion}`);
  if (tsVersion.includes('^5') || tsVersion.includes('^4.9')) {
    console.log('✅ TypeScript version is compatible');
  } else {
    console.log('⚠️  Consider updating to TypeScript 5.x');
    console.log('   npm install --save-dev typescript@^5.4.5');
  }
} else {
  console.log('\n⚠️  TypeScript not found in dependencies');
}

// Check react-financial-charts
const chartsVersion = dependencies['react-financial-charts'];
if (chartsVersion) {
  console.log(`\nreact-financial-charts version: ${chartsVersion}`);
  console.log('✅ react-financial-charts supports React 16-19');
} else {
  console.log('\n⚠️  react-financial-charts not found in dependencies');
  console.log('   npm install react-financial-charts');
}

console.log('\n📋 Next steps:');
console.log('1. Update your dependencies as suggested above');
console.log('2. Update your tsconfig.json to use "jsx": "react-jsx"');
console.log('3. Read the migration guide: REACT_18_19_MIGRATION.md');
console.log('4. Test your application thoroughly');

console.log('\n🎉 Happy charting!');
