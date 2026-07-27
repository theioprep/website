import React from 'react';
export function Select({label,options=[],value,onChange}){
return React.createElement('label',{style:{display:'block',fontFamily:'var(--font-serif)'}},
label&&React.createElement('div',{style:{fontSize:'var(--fs-small)',color:'var(--oxford-blue)',marginBottom:6}},label),
React.createElement('select',{value,onChange,style:{fontFamily:'var(--font-serif)',fontSize:'var(--fs-body)',color:'var(--text-body)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-sm)',padding:'11px 14px',width:'100%',background:'var(--white)'}},
options.map((o,i)=>React.createElement('option',{key:i,value:o.value??o},o.label??o))
));
}
