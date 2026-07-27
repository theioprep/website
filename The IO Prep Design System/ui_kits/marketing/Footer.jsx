function CredentialBand(){
return React.createElement('section',{style:{background:'var(--cream)',padding:'80px 48px',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}},
React.createElement('div',{style:{maxWidth:760,margin:'0 auto',textAlign:'center',borderLeft:'2px solid var(--gold)',padding:'4px 0 4px 24px',textAlignLast:'left'}},
React.createElement('p',{style:{font:'italic var(--fw-regular) 24px/1.5 var(--font-serif)',color:'var(--oxford-blue)',margin:0}},'"Every past-paper question, marked the way examiners actually mark it."'),
React.createElement('div',{style:{font:'var(--text-small)',color:'var(--text-muted)',marginTop:16}},'Harvard PhD candidate \u00b7 Oxford BA \u00b7 IB 45/45')
)
);
}
function MarketingFooter(){
return React.createElement('footer',{style:{background:'var(--oxford-blue)',color:'var(--oxford-blue-100)',padding:'40px 48px',display:'flex',justifyContent:'space-between',alignItems:'center'}},
React.createElement('div',{style:{font:'var(--fw-bold) 18px/1 var(--font-serif-display)',color:'var(--white)'}},'The IO Prep'),
React.createElement('div',{style:{font:'var(--text-caption)'}},'\u00a9 2026 The IO Prep. All rights reserved.')
);
}
window.CredentialBand=CredentialBand;
window.MarketingFooter=MarketingFooter;
