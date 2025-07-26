const u=(r=[])=>{const i=Array.isArray(r)?r:[r],t=i.length;return function(n,s){if(t===0)return n??s;let e=0;for(;n!=null&&e<t;)n=n[i[e++]];return e===t?n:s}};export{u as p};
