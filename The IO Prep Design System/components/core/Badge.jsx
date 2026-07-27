import React from 'react';
export function Badge({tone='blue',children}){
const tones={
blue:{background:'var(--oxford-blue-050)',color:'var(--oxford-blue)',border:'1px solid var(--oxford-blue-100)'},
gold:{background:'var(--gold-100)',color:'var(--gold-700)',border:'1px solid var(--gold-300)'},
success:{background:'var(--success-bg)',color:'var(--success)',border:'1px solid var(--success)'},
error:{background:'var(--error-bg)',color:'var(--error)',border:'1px solid var(--error)'}
};
return React.createElement('span',{style:{fontFamily:'var(--font-serif)',fontSize:'var(--fs-caption)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',padding:'4px 10px',borderRadius:'var(--radius-sm)',display:'inline-block',...tones[tone]}},children);
}
export function Tag({children,onRemove}){
return React.createElement('span',{style:{fontFamily:'var(--font-serif)',fontSize:'var(--fs-small)',color:'var(--oxford-blue)',background:'var(--gray-050)',border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-pill)',padding:'5px 14px',display:'inline-flex',alignItems:'center',gap:'6px'}},children,onRemove&&React.createElement('span',{onClick:onRemove,style:{cursor:'pointer',color:'var(--gray-500)'}},'\u00d7'));
}
