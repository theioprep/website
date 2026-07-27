function Sidebar({lessons,activeId,onSelect}){
const {Badge}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('aside',{style:{width:300,borderRight:'1px solid var(--border-hairline)',background:'var(--white)',padding:'24px 0',overflowY:'auto'}},
React.createElement('div',{style:{padding:'0 24px 16px',font:'var(--fw-bold) 20px/1 var(--font-serif-display)',color:'var(--oxford-blue)'}},'The IO Prep'),
React.createElement('div',{style:{padding:'0 24px',font:'var(--fs-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--text-muted)',margin:'16px 0 8px'}},'IB English A&L'),
lessons.map(l=>React.createElement('div',{key:l.id,onClick:()=>onSelect(l.id),style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 24px',cursor:'pointer',background:activeId===l.id?'var(--oxford-blue-050)':'transparent',borderLeft:activeId===l.id?'2px solid var(--gold)':'2px solid transparent'}},
React.createElement('div',null,
React.createElement('div',{style:{font:'var(--text-small)',color:activeId===l.id?'var(--oxford-blue)':'var(--text-body)',fontWeight:activeId===l.id?700:400}},l.title),
React.createElement('div',{style:{font:'var(--text-caption)',color:'var(--text-muted)'}},l.duration)
),
l.done&&React.createElement(Badge,{tone:'success'},'Done')
))
);
}
window.Sidebar=Sidebar;
