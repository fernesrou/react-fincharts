import{r as t,R as a}from"./index-CTzypqlY.js";import{w as X,m as I,n as O,o as Y,X as b,Y as k}from"./withSize-Bqu-aQP_.js";import{d as q}from"./discontinuousTimeScaleProvider-DjLVsG-0.js";import{L as z}from"./LineSeries-5eeGgUw4.js";import"./jsx-runtime-D_zvdyIk.js";import"./array-2GBN5xbU.js";class d extends t.Component{constructor(){super(...arguments),this.margin={left:0,right:40,top:0,bottom:24},this.xScaleProvider=q().inputDateAccessor(e=>e.date),this.yAccessor=e=>e.close,this.yExtents=e=>[e.low,e.high]}render(){const{data:e,height:m,ratio:A,width:B}=this.props,{data:T,xScale:C,xAccessor:N,displayXAccessor:R}=this.xScaleProvider(e);return t.createElement(O,{height:m,ratio:A,width:B,margin:this.margin,minPointsPerPxThreshold:.0025,data:T,displayXAccessor:R,seriesName:"Data",xScale:C,xAccessor:N},t.createElement(Y,{id:1,yExtents:this.yExtents},t.createElement(z,{yAccessor:this.yAccessor,strokeWidth:3}),t.createElement(b,null),t.createElement(k,null)))}}const n=X()(I()(d));try{d.displayName="BasicLineSeries",d.__docgenInfo={description:"",displayName:"BasicLineSeries",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IOHLCData[]"}}}}}catch{}const G={title:"Features/EdgeCases"},o=()=>a.createElement(n,{data:[]}),s=()=>a.createElement(n,{data:[{close:120,open:120,high:140,low:100,date:new Date,volume:1e6}]}),r=()=>a.createElement(n,{data:[{close:120,open:120,high:140,low:100,date:new Date(2020,7,8,10,0,0,0),volume:1e6},{close:140,open:120,high:140,low:100,date:new Date(2020,7,8,10,1,0,0),volume:1e6}]}),i=()=>a.createElement(n,{data:[{close:120,open:120,high:140,low:100,date:new Date(2020,7,8,10,0,0,0),volume:1e6},{close:140,open:120,high:150,low:100,date:new Date(2020,7,8,10,1,0,0),volume:1e6},{close:120,open:120,high:140,low:100,date:new Date(2020,7,8,10,2,0,0),volume:1e6}]}),c=()=>{const[l,e]=t.useState([]);return t.useEffect(()=>{const m=setTimeout(()=>{console.log("Set data"),e([{close:120,open:120,high:140,low:100,date:new Date(2020,7,8,10,0,0,0),volume:1e6},{close:140,open:120,high:150,low:100,date:new Date(2020,7,8,10,1,0,0),volume:1e6},{close:120,open:120,high:140,low:100,date:new Date(2020,7,8,10,2,0,0),volume:1e6}])},1e3);return()=>clearTimeout(m)},[]),a.createElement(n,{data:l})};var u,h,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"() => <BasicLineSeries data={[]} />",...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var w,g,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => <BasicLineSeries data={[{
  close: 120,
  open: 120,
  high: 140,
  low: 100,
  date: new Date(),
  volume: 1_000_000
}]} />`,...(D=(g=s.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var _,S,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => <BasicLineSeries data={[{
  close: 120,
  open: 120,
  high: 140,
  low: 100,
  date: new Date(2020, 7, 8, 10, 0, 0, 0),
  volume: 1_000_000
}, {
  close: 140,
  open: 120,
  high: 140,
  low: 100,
  date: new Date(2020, 7, 8, 10, 1, 0, 0),
  volume: 1_000_000
}]} />`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var E,y,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => <BasicLineSeries data={[{
  close: 120,
  open: 120,
  high: 140,
  low: 100,
  date: new Date(2020, 7, 8, 10, 0, 0, 0),
  volume: 1_000_000
}, {
  close: 140,
  open: 120,
  high: 150,
  low: 100,
  date: new Date(2020, 7, 8, 10, 1, 0, 0),
  volume: 1_000_000
}, {
  close: 120,
  open: 120,
  high: 140,
  low: 100,
  date: new Date(2020, 7, 8, 10, 2, 0, 0),
  volume: 1_000_000
}]} />`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,L,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Set data");
      setData([{
        close: 120,
        open: 120,
        high: 140,
        low: 100,
        date: new Date(2020, 7, 8, 10, 0, 0, 0),
        volume: 1_000_000
      }, {
        close: 140,
        open: 120,
        high: 150,
        low: 100,
        date: new Date(2020, 7, 8, 10, 1, 0, 0),
        volume: 1_000_000
      }, {
        close: 120,
        open: 120,
        high: 140,
        low: 100,
        date: new Date(2020, 7, 8, 10, 2, 0, 0),
        volume: 1_000_000
      }]);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return <BasicLineSeries data={data} />;
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const J=["noData","singleDataPoint","twoDataPoint","threeDataPoint","emptyThenThreeAsync"];export{J as __namedExportsOrder,G as default,c as emptyThenThreeAsync,o as noData,s as singleDataPoint,i as threeDataPoint,r as twoDataPoint};
