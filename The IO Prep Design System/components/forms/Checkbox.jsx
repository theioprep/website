import React from 'react';
export function Checkbox({label,checked,onChange}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,fontFamily:'var(--font-serif)',fontSize:'var(--fs-body)',color:'var(--text-body)',cursor:'pointer'}},
React.createElement('input',{type:'checkbox',checked,onChange,style:{width:18,height:18,accentColor:'var(--oxford-blue)'}}),
label
);
}
