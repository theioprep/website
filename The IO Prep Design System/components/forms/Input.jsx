import React from 'react';
const base={fontFamily:'var(--font-serif)',fontSize:'var(--fs-body)',color:'var(--text-body)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-sm)',padding:'11px 14px',outline:'none',transition:'border-color var(--duration-fast) var(--ease-standard)',width:'100%',boxSizing:'border-box'};
export function Input({label,placeholder,type='text',value,onChange,error,style}){
return React.createElement('label',{style:{display:'block',fontFamily:'var(--font-serif)'}},
label&&React.createElement('div',{style:{fontSize:'var(--fs-small)',color:'var(--oxford-blue)',marginBottom:6}},label),
React.createElement('input',{type,placeholder,value,onChange,style:{...base,borderColor:error?'var(--error)':'var(--border-hairline)',...style}}),
error&&React.createElement('div',{style:{fontSize:'var(--fs-caption)',color:'var(--error)',marginTop:4}},error)
);
}
