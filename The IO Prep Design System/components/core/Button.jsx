import React from 'react';
const sizeMap={sm:{padding:'8px 16px',fontSize:'var(--fs-small)'},md:{padding:'11px 22px',fontSize:'var(--fs-body)'},lg:{padding:'14px 30px',fontSize:'var(--fs-body-lg)'}};
const variants={
primary:{background:'var(--oxford-blue)',color:'var(--white)',border:'1px solid var(--oxford-blue)'},
secondary:{background:'var(--white)',color:'var(--oxford-blue)',border:'1px solid var(--oxford-blue)'},
gold:{background:'var(--gold)',color:'var(--oxford-blue)',border:'1px solid var(--gold)'},
ghost:{background:'transparent',color:'var(--oxford-blue)',border:'1px solid transparent'}
};
export function Button({variant='primary',size='md',disabled=false,children,onClick,style}){
const v=variants[variant]||variants.primary;
const s=sizeMap[size]||sizeMap.md;
return React.createElement('button',{
onClick:disabled?undefined:onClick,
disabled,
style:{fontFamily:'var(--font-serif)',fontWeight:700,letterSpacing:'0.01em',borderRadius:'var(--radius-sm)',cursor:disabled?'not-allowed':'pointer',transition:'background var(--duration-base) var(--ease-standard),opacity var(--duration-base) var(--ease-standard)',opacity:disabled?0.45:1,...v,...s,...style}
},children);
}
