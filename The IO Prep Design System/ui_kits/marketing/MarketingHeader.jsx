function MarketingHeader({onNav,active}){
const {Button}=window.TheIOPrepDesignSystem_433c05;
const items=['Courses','How it works','Results','About'];
return React.createElement('header',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 48px',borderBottom:'1px solid var(--border-hairline)',background:'var(--white)'}},
React.createElement('div',{style:{font:'var(--fw-bold) 24px/1 var(--font-serif-display)',color:'var(--oxford-blue)'}},'The IO Prep'),
React.createElement('nav',{style:{display:'flex',gap:32}},
items.map(i=>React.createElement('span',{key:i,onClick:()=>onNav&&onNav(i),style:{font:'var(--text-body)',color:active===i?'var(--oxford-blue)':'var(--text-muted)',cursor:'pointer',borderBottom:active===i?'2px solid var(--gold)':'2px solid transparent',paddingBottom:4}},i))
),
React.createElement(Button,{variant:'primary',size:'sm'},'Enrol now')
);
}
window.MarketingHeader=MarketingHeader;
