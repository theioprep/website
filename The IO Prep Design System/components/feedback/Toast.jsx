import React from 'react';
export function Toast({tone='blue',children}){
const tones={blue:{background:'var(--oxford-blue)',color:'var(--white)'},success:{background:'var(--success)',color:'var(--white)'},error:{background:'var(--error)',color:'var(--white)'}};
return React.createElement('div',{style:{fontFamily:'var(--font-serif)',fontSize:'var(--fs-small)',padding:'12px 18px',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-raised)',display:'inline-block',...tones[tone]}},children);
}
