function PricingCard({plan,price,features,highlighted,onSelect}){
const {Card,Button,Badge}=window.TheIOPrepDesignSystem_433c05;
return React.createElement(Card,{style:{width:280,border:highlighted?'1px solid var(--gold)':'1px solid var(--border-hairline)',boxShadow:highlighted?'var(--shadow-raised)':'var(--shadow-card)'}},
highlighted&&React.createElement(Badge,{tone:'gold'},'Most popular'),
React.createElement('div',{style:{font:'var(--text-h4)',color:'var(--oxford-blue)',margin:'12px 0 4px'}},plan),
React.createElement('div',{style:{font:'var(--fw-bold) 36px/1 var(--font-serif-display)',color:'var(--oxford-blue)',margin:'8px 0 16px'}},price),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:8,marginBottom:20}},
features.map((f,i)=>React.createElement('div',{key:i,style:{font:'var(--text-small)',color:'var(--text-body)'}},'\u2014 '+f))
),
React.createElement(Button,{variant:highlighted?'gold':'secondary',onClick:onSelect,style:{width:'100%'}},'Choose '+plan)
);
}
window.PricingCard=PricingCard;
