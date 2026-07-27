import React from 'react';
export function Radio({label,checked,onChange,name}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,fontFamily:'var(--font-serif)',fontSize:'var(--fs-body)',color:'var(--text-body)',cursor:'pointer'}},
React.createElement('input',{type:'radio',name,checked,onChange,style:{width:18,height:18,accentColor:'var(--oxford-blue)'}}),
label
);
}
