import React from 'react';
export function Switch({checked,onChange,label}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,fontFamily:'var(--font-serif)',fontSize:'var(--fs-small)',color:'var(--text-body)',cursor:'pointer'}},
React.createElement('span',{onClick:()=>onChange&&onChange(!checked),style:{width:38,height:22,borderRadius:'var(--radius-pill)',background:checked?'var(--oxford-blue)':'var(--gray-300)',position:'relative',transition:'background var(--duration-base) var(--ease-standard)',display:'inline-block'}},
React.createElement('span',{style:{position:'absolute',top:2,left:checked?18:2,width:18,height:18,borderRadius:'50%',background:'var(--white)',transition:'left var(--duration-base) var(--ease-standard)'}})
),
label
);
}
