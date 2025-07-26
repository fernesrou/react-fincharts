import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Syj0H2O1.js";import{M as i}from"./index-BtbT0lVw.js";import"./index-CTzypqlY.js";import"./iframe-CyI_z8w4.js";import"./index-X_f_OX5J.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Intro"}),`
`,n.jsx(e.h1,{id:"react-fincharts",children:"React Fincharts"}),`
`,n.jsx(e.p,{children:"Charts dedicated to finance."}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Integrates multiple chart types"}),`
`,n.jsx(e.li,{children:"Technical indicators and overlays"}),`
`,n.jsx(e.li,{children:"Drawing objects"}),`
`]}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.p,{children:"This library provides comprehensive charting solutions for financial applications."}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @react-financial-charts/core
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ChartCanvas, Chart } from "@react-financial-charts/core";
import { CandlestickSeries } from "@react-financial-charts/series";

const MyChart = () => {
    return (
        <ChartCanvas data={myData}>
            <Chart id={1} yExtents={(d) => [d.high, d.low]}>
                <CandlestickSeries />
            </Chart>
        </ChartCanvas>
    );
};
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:"Explore the different chart types and configurations in the sidebar."})]})}function x(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{x as default};
