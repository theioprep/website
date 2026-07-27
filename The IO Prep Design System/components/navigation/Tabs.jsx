import React from 'react';
export function Tabs({tabs=[],active,onChange}){
return React.createElement('div',{style:{display:'flex',gap:0,borderBottom:'1px solid var(--border-hairline)',fontFamily:'var(--font-serif)'}},
tabs.map((t,i)=>React.createElement('div',{key:i,onClick:()=>onChange&&onChange(t.value??t),style:{padding:'10px 20px',fontSize:'var(--fs-body)',color:(active===(t.value??t))?'var(--oxford-blue)':'var(--text-muted)',borderBottom:(active===(t.value??t))?'2px solid var(--gold)':'2px solid transparent',cursor:'pointer',fontWeight:(active===(t.value??t))?700:400}},t.label??t))
);
}
