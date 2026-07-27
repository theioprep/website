import React from 'react';
export function Dialog({open,title,children,onClose}){
if(!open) return null;
return React.createElement('div',{style:{position:'fixed',inset:0,background:'rgba(0,33,71,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}},
React.createElement('div',{style:{background:'var(--white)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-raised)',padding:'var(--space-6)',width:420,fontFamily:'var(--font-serif)',border:'1px solid var(--border-hairline)'}},
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}},
React.createElement('div',{style:{font:'var(--text-h4)',color:'var(--oxford-blue)'}},title),
React.createElement('span',{onClick:onClose,style:{cursor:'pointer',color:'var(--gray-500)',fontSize:20}},'\u00d7')
),
children
)
);
}
