import{r as h}from"./index-CTzypqlY.js";import{l as $,j as P,e as I,C as X,p as v,w as H,m as O,t as R,a as B,n as L,o as W,X as G,Y as U}from"./withSize-Bqu-aQP_.js";import{w as j}from"./withOHLCData-BEr55ucm.js";import{d as J}from"./discontinuousTimeScaleProvider-DjLVsG-0.js";import{e as K}from"./ema-CshB59i3.js";import{C as Q}from"./CandlestickSeries-CTmIVn2R.js";import{L as Z}from"./LineSeries-5eeGgUw4.js";import{O as ee}from"./OHLCTooltip-BzsHFzDc.js";import"./jsx-runtime-D_zvdyIk.js";import"./baseIndicator-qdS_KWkb.js";import"./index-kspPnZk0.js";import"./ema-YsYnLjx4.js";import"./defaultOptionsForComputation-CN7nWbKN.js";import"./path-uFnBsLuY.js";import"./merge-WqXt2Bz7.js";import"./group-CTbjIu5X.js";import"./barWidth-H00B5QnB.js";import"./array-2GBN5xbU.js";import"./ToolTipTSpanLabel-D8pipyNG.js";function V(t,n){let e;if(n===void 0)for(const o of t)o!=null&&(e<o||e===void 0&&o>=o)&&(e=o);else{let o=-1;for(let i of t)(i=n(i,++o,t))!=null&&(e<i||e===void 0&&i>=i)&&(e=i)}return e}function q(t,n){let e=0;if(n===void 0)for(let o of t)(o=+o)&&(e+=o);else{let o=-1;for(let i of t)(i=+n(i,++o,t))&&(e+=i)}return e}const b=4,x=8,E=8,te=(t,n,e,o,i,l)=>{t.beginPath(),t.moveTo(n+l,e),t.lineTo(n+o-l,e),t.quadraticCurveTo(n+o,e,n+o,e+l),t.lineTo(n+o,e+i-l),t.quadraticCurveTo(n+o,e+i,n+o-l,e+i),t.lineTo(n+l,e+i),t.quadraticCurveTo(n,e+i,n,e+i-l),t.lineTo(n,e+l),t.quadraticCurveTo(n,e,n+l,e),t.closePath()},ne=(t,{width:n,height:e},o)=>{const{toolTipFillStyle:i,toolTipStrokeStyle:l}=t;o.beginPath(),te(o,0,0,n,e,4),i!==void 0&&(o.fillStyle=i,o.shadowColor="#898",o.shadowBlur=4,o.fill(),o.shadowBlur=0),l!==void 0&&(o.strokeStyle=l,o.stroke())},oe=(t,n,e)=>{var o,i;const{fontSize:l=14,fontFamily:s,fontFill:c}=t,u=E+l*.9;e.font=`bold ${l}px ${s}`,c!==void 0&&(e.fillStyle=c),e.textAlign="left",e.fillText(n.x,x,u);const a=(o=V(n.y,r=>e.measureText(r.label).width))!==null&&o!==void 0?o:0;for(let r=0;r<n.y.length;r++){const f=n.y[r],p=(r+1)*b+u+l*(r+1);e.font=`${l}px ${s}`,e.fillStyle=(i=f.stroke)!==null&&i!==void 0?i:c,e.fillText(f.label,x,p),c!==void 0&&(e.fillStyle=c),e.fillText(f.value,x*2+a,p)}},ie=(t,n,e,o,i)=>{const{margin:l,ratio:s}=e,{backgroundShapeCanvas:c,tooltipCanvas:u,background:a}=n,r=.5*s+l.left,f=.5*s+l.top;t.save(),t.setTransform(1,0,0,1,0,0),t.scale(s,s),t.translate(r,f);const{x:p,y,content:d,centerX:m,pointWidth:g,bgSize:S}=o;(a==null?void 0:a.fillStyle)!==void 0&&(t.fillStyle=a.fillStyle),t.beginPath(),t.rect(m-g/2,0,g,i),t.fill(),t.translate(p,y),c(n,S,t),u(n,d,t),t.restore()},le=(t,n,e)=>{const{fontFamily:o,fontSize:i=12,fontFill:l}=t;e.font=`bold ${i}px ${o}`,l!==void 0&&(e.fillStyle=l),e.textAlign="left";const s=a=>({width:e.measureText(a).width,height:i+b}),{width:c,height:u}=n.y.map(({label:a,value:r})=>s(`${a}  ${r}`)).reduce((a,r)=>ae(a,r),s(String(n.x)));return{width:c+2*x,height:u+2*E}},ae=(...t)=>({width:Math.max(...t.map(n=>n.width)),height:q(t,n=>n.height)}),re=(t,n,e,o)=>t<o/2?t+e/2+b:t-n.width-e/2-b,se=(t,n)=>t-n.height<=0?t+b:t-n.height-b,de=(t,n,e,o)=>{const{chartId:i,yAccessor:l}=t,{mouseXY:s,xAccessor:c,currentItem:u,xScale:a,chartConfig:r,width:f}=n;let p=$(s);const y=c(u);let d=Math.round(a(y));if(v(i)&&v(l)&&v(r)&&v(r.findIndex)){const m=l(u),g=r.findIndex(S=>S.id===i);p=Math.round(r[g].yScale(m))}return d=re(d,e,o,f),p=se(p,e),[d,p]};let _=class M extends h.Component{constructor(){super(...arguments),this.drawOnCanvas=(n,e)=>{const o=this.helper(n,e);if(o===void 0)return;const{height:i}=e;ie(n,this.props,this.context,o,i)},this.helper=(n,e)=>{const{show:o,xScale:i,currentItem:l,plotData:s,xAccessor:c,displayXAccessor:u}=e,{origin:a=M.defaultProps.origin,tooltip:r}=this.props;if(!o||l===void 0)return;const f=c(l);if(f===void 0)return;const p=r.content({currentItem:l,xAccessor:u}),y=i(f),d=Math.abs(i(c($(s)))-i(c(P(s))))/(s.length-1),m=le(this.props,p,n),[g,S]=a(this.props,e,m,d);return{x:g,y:S,content:p,centerX:y,pointWidth:d,bgSize:m}}}render(){return h.createElement(I,{canvasDraw:this.drawOnCanvas,drawOn:["mousemove","pan"]})}};_.defaultProps={background:{fillStyle:"rgba(33, 148, 243, 0.1)"},toolTipFillStyle:"rgba(250, 250, 250, 1)",toolTipStrokeStyle:"rgba(33, 148, 243)",tooltipCanvas:oe,origin:de,backgroundShapeCanvas:ne,fontFill:"#000000",fontFamily:"-apple-system, system-ui, Roboto, 'Helvetica Neue', Ubuntu, sans-serif",fontSize:14};_.contextType=X;const C=4,k=8,N=8,ce=(t,n,e,o,i,l)=>{t.beginPath(),t.moveTo(n+l,e),t.lineTo(n+o-l,e),t.quadraticCurveTo(n+o,e,n+o,e+l),t.lineTo(n+o,e+i-l),t.quadraticCurveTo(n+o,e+i,n+o-l,e+i),t.lineTo(n+l,e+i),t.quadraticCurveTo(n,e+i,n,e+i-l),t.lineTo(n,e+l),t.quadraticCurveTo(n,e,n+l,e),t.closePath()},ue=(t,{width:n,height:e},o)=>{const{toolTipFillStyle:i,toolTipStrokeStyle:l}=t;o.beginPath(),ce(o,0,0,n,e,4),i!==void 0&&(o.fillStyle=i,o.shadowColor="#898",o.shadowBlur=4,o.fill(),o.shadowBlur=0),l!==void 0&&(o.strokeStyle=l,o.stroke())},pe=(t,n,e)=>{const{fontSize:o=14,fontFamily:i,fontFill:l}=t,s=N+o*.9;e.font=`bold ${o}px ${i}`,l!==void 0&&(e.fillStyle=l),e.textAlign="left",e.fillText(n.x,k,s);const c=V(n.y,u=>e.measureText(u.label).width)??0;for(let u=0;u<n.y.length;u++){const a=n.y[u],r=(u+1)*C+s+o*(u+1);e.font=`${o}px ${i}`,e.fillStyle=a.stroke??l,e.fillText(a.label,k,r),l!==void 0&&(e.fillStyle=l),e.fillText(a.value,k*2+c,r)}},fe=(t,n,e,o,i)=>{const{margin:l,ratio:s}=e,{backgroundShapeCanvas:c,tooltipCanvas:u,background:a}=n,r=.5*s+l.left,f=.5*s+l.top;t.save(),t.setTransform(1,0,0,1,0,0),t.scale(s,s),t.translate(r,f);const{x:p,y,content:d,centerX:m,pointWidth:g,bgSize:S}=o;(a==null?void 0:a.fillStyle)!==void 0&&(t.fillStyle=a.fillStyle),t.beginPath(),t.rect(m-g/2,0,g,i),t.fill(),t.translate(p,y),c(n,S,t),u(n,d,t),t.restore()},me=(t,n,e)=>{const{fontFamily:o,fontSize:i=12,fontFill:l}=t;e.font=`bold ${i}px ${o}`,l!==void 0&&(e.fillStyle=l),e.textAlign="left";const s=a=>({width:e.measureText(a).width,height:i+C}),{width:c,height:u}=n.y.map(({label:a,value:r})=>s(`${a}  ${r}`)).reduce((a,r)=>he(a,r),s(String(n.x)));return{width:c+2*k,height:u+2*N}},he=(...t)=>({width:Math.max(...t.map(n=>n.width)),height:q(t,n=>n.height)}),ye=(t,n,e,o)=>t<o/2?t+e/2+C:t-n.width-e/2-C,ge=(t,n)=>t-n.height<=0?t+C:t-n.height-C,Se=(t,n,e,o)=>{const{chartId:i,yAccessor:l}=t,{mouseXY:s,xAccessor:c,currentItem:u,xScale:a,chartConfig:r,width:f}=n;let p=$(s);const y=c(u);let d=Math.round(a(y));if(v(i)&&v(l)&&v(r)&&v(r.findIndex)){const m=l(u),g=r.findIndex(S=>S.id===i);p=Math.round(r[g].yScale(m))}return d=ye(d,e,o,f),p=ge(p,e),[d,p]},w=class w extends h.Component{constructor(){super(...arguments),this.drawOnCanvas=(n,e)=>{const o=this.helper(n,e);if(o===void 0)return;const{height:i}=e;fe(n,this.props,this.context,o,i)},this.helper=(n,e)=>{const{show:o,xScale:i,currentItem:l,plotData:s,xAccessor:c,displayXAccessor:u}=e,{origin:a=w.defaultProps.origin,tooltip:r}=this.props;if(!o||l===void 0)return;const f=c(l);if(f===void 0)return;const p=r.content({currentItem:l,xAccessor:u}),y=i(f),d=Math.abs(i(c($(s)))-i(c(P(s))))/(s.length-1),m=me(this.props,p,n),[g,S]=a(this.props,e,m,d);return{x:g,y:S,content:p,centerX:y,pointWidth:d,bgSize:m}}}render(){return h.createElement(I,{canvasDraw:this.drawOnCanvas,drawOn:["mousemove","pan"]})}};w.defaultProps={background:{fillStyle:"rgba(33, 148, 243, 0.1)"},toolTipFillStyle:"rgba(250, 250, 250, 1)",toolTipStrokeStyle:"rgba(33, 148, 243)",tooltipCanvas:pe,origin:Se,backgroundShapeCanvas:ue,fontFill:"#000000",fontFamily:"-apple-system, system-ui, Roboto, 'Helvetica Neue', Ubuntu, sans-serif",fontSize:14},w.contextType=X;let T=w;try{T.displayName="HoverTooltip",T.__docgenInfo={description:"",displayName:"HoverTooltip",props:{background:{defaultValue:{value:`{
            fillStyle: "rgba(33, 148, 243, 0.1)",
        }`},description:"",name:"background",required:!1,type:{name:"{ fillStyle?: string | undefined; height?: number | undefined; strokeStyle?: string | undefined; width?: number | undefined; } | undefined"}},backgroundShapeCanvas:{defaultValue:{value:`(
    props: HoverTooltipProps,
    { width, height }: { width: number; height: number },
    ctx: CanvasRenderingContext2D,
) => {
    const { toolTipFillStyle, toolTipStrokeStyle } = props;

    ctx.beginPath();
    roundRect(ctx, 0, 0, width, height, 4);
    if (toolTipFillStyle !== undefined) {
        ctx.fillStyle = toolTipFillStyle;
        ctx.shadowColor = "#898";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    if (toolTipStrokeStyle !== undefined) {
        ctx.strokeStyle = toolTipStrokeStyle;
        ctx.stroke();
    }
}`},description:"",name:"backgroundShapeCanvas",required:!1,type:{name:"(props: HoverTooltipProps, { width, height }: { width: number; height: number; }, ctx: CanvasRenderingContext2D) => void"}},chartId:{defaultValue:null,description:"",name:"chartId",required:!1,type:{name:"string | number | undefined"}},fontFamily:{defaultValue:{value:"-apple-system, system-ui, Roboto, 'Helvetica Neue', Ubuntu, sans-serif"},description:"",name:"fontFamily",required:!1,type:{name:"string | undefined"}},fontFill:{defaultValue:{value:"#000000"},description:"",name:"fontFill",required:!1,type:{name:"string | undefined"}},fontSize:{defaultValue:{value:"14"},description:"",name:"fontSize",required:!1,type:{name:"number | undefined"}},origin:{defaultValue:{value:`(props: HoverTooltipProps, moreProps: any, bgSize: any, pointWidth: any) => {
    const { chartId, yAccessor } = props;

    const { mouseXY, xAccessor, currentItem, xScale, chartConfig, width } = moreProps;

    let y = last(mouseXY);

    const xValue = xAccessor(currentItem);

    let x = Math.round(xScale(xValue));

    if (isDefined(chartId) && isDefined(yAccessor) && isDefined(chartConfig) && isDefined(chartConfig.findIndex)) {
        const yValue = yAccessor(currentItem);
        const chartIndex = chartConfig.findIndex((c: any) => c.id === chartId);

        y = Math.round(chartConfig[chartIndex].yScale(yValue));
    }

    x = normalizeX(x, bgSize, pointWidth, width);
    y = normalizeY(y, bgSize);

    return [x, y];
}`},description:"",name:"origin",required:!1,type:{name:"((props: HoverTooltipProps, moreProps: any, bgSize: { width: number; height: number; }, pointWidth: number) => [number, number]) | undefined"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"{ content: (data: any) => { x: string; y: { label: string; value?: string | undefined; stroke?: string | undefined; }[]; }; }"}},toolTipFillStyle:{defaultValue:{value:"rgba(250, 250, 250, 1)"},description:"",name:"toolTipFillStyle",required:!1,type:{name:"string | undefined"}},toolTipStrokeStyle:{defaultValue:{value:"rgba(33, 148, 243)"},description:"",name:"toolTipStrokeStyle",required:!1,type:{name:"string | undefined"}},tooltipCanvas:{defaultValue:{value:`(props: HoverTooltipProps, content: any, ctx: CanvasRenderingContext2D) => {
    const { fontSize = 14, fontFamily, fontFill } = props;

    const startY = Y + fontSize * 0.9;
    ctx.font = \`bold \${fontSize}px \${fontFamily}\`;
    if (fontFill !== undefined) {
        ctx.fillStyle = fontFill;
    }
    ctx.textAlign = "left";
    ctx.fillText(content.x, X, startY);

    const maxLabel = max(content.y, (y: any) => ctx.measureText(y.label as string).width) ?? 0;

    for (let i = 0; i < content.y.length; i++) {
        const y = content.y[i];
        const textY = (i + 1) * PADDING + startY + fontSize * (i + 1);
        ctx.font = \`\${fontSize}px \${fontFamily}\`;
        ctx.fillStyle = y.stroke ?? fontFill;
        ctx.fillText(y.label, X, textY);

        if (fontFill !== undefined) {
            ctx.fillStyle = fontFill;
        }
        ctx.fillText(y.value, X * 2 + maxLabel, textY);
    }
}`},description:"",name:"tooltipCanvas",required:!1,type:{name:"(props: HoverTooltipProps, content: any, ctx: CanvasRenderingContext2D) => void"}},yAccessor:{defaultValue:null,description:"",name:"yAccessor",required:!0,type:{name:"(data: any) => number"}}}}}catch{}try{T.contextType.displayName="HoverTooltip.contextType",T.contextType.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"HoverTooltip.contextType",props:{}}}catch{}class A extends h.Component{constructor(){super(...arguments),this.dateFormat=R("%Y-%m-%d"),this.margin={left:0,right:48,top:0,bottom:24},this.numberFormat=B(".2f"),this.xScaleProvider=J().inputDateAccessor(n=>n.date),this.yExtents=n=>[n.high,n.low]}render(){const{data:n,height:e,ratio:o,width:i}=this.props,l=K().id(1).options({windowSize:12}).merge((d,m)=>{d.ema12=m}).accessor(d=>d.ema12),s=l(n),{data:c,xScale:u,xAccessor:a,displayXAccessor:r}=this.xScaleProvider(s),f=a(c[c.length-1]),y=[a(c[Math.max(0,c.length-100)]),f];return h.createElement(L,{height:e,ratio:o,width:i,margin:this.margin,data:c,displayXAccessor:r,seriesName:"Data",xScale:u,xAccessor:a,xExtents:y},h.createElement(W,{id:1,yExtents:this.yExtents},h.createElement(G,null),h.createElement(U,null),h.createElement(Q,null),h.createElement(Z,{yAccessor:l.accessor(),strokeStyle:l.stroke()}),h.createElement(ee,{origin:[8,16],textFill:d=>d.close>d.open?"#26a69a":"#ef5350"}),h.createElement(_,{yAccessor:l.accessor(),tooltip:{content:({currentItem:d,xAccessor:m})=>({x:this.dateFormat(m(d)),y:[{label:"open",value:d.open&&this.numberFormat(d.open)},{label:"high",value:d.high&&this.numberFormat(d.high)},{label:"low",value:d.low&&this.numberFormat(d.low)},{label:"close",value:d.close&&this.numberFormat(d.close)}]})}})))}}const ve=j()(H()(O()(A)));try{A.displayName="Tooltips",A.__docgenInfo={description:"",displayName:"Tooltips",props:{}}}catch{}try{componentDidMount.displayName="componentDidMount",componentDidMount.__docgenInfo={description:"Called immediately after a component is mounted. Setting state here will trigger re-rendering.",displayName:"componentDidMount",props:{}}}catch{}const Me={title:"Features/Tooltips",component:T},F=()=>h.createElement(ve,null);var D,z,Y;F.parameters={...F.parameters,docs:{...(D=F.parameters)==null?void 0:D.docs,source:{originalSource:"() => <Tooltips />",...(Y=(z=F.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};const Ne=["hover"];export{Ne as __namedExportsOrder,Me as default,F as hover};
