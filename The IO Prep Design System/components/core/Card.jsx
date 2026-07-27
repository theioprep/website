import React from 'react';
export function Card({children,padded=true,style}){
return React.createElement('div',{style:{background:'var(--surface-card)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-card)',padding:padded?'var(--space-5)':0,fontFamily:'var(--font-serif)',...style}},children);
}
