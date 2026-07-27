function Hero(){
const {Button,Badge}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('section',{style:{background:'var(--oxford-blue)',color:'var(--white)',padding:'96px 48px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:24}},
React.createElement(Badge,{tone:'gold'},'Taught by a 45/45 scorer'),
React.createElement('h1',{style:{font:'var(--text-display)',color:'var(--white)',margin:0,maxWidth:820}},'IGCSE and IB English, taught by the person who scored 45/45.'),
React.createElement('p',{style:{font:'var(--text-body-lg)',fontFamily:'var(--font-serif)',color:'var(--oxford-blue-100)',maxWidth:640,margin:0,lineHeight:'var(--lh-loose)'}},'A complete video course covering every paper, every assessment objective, and the exact techniques examiners reward \u2014 taught by a Harvard PhD student and ex-Oxford undergraduate.'),
React.createElement('div',{style:{display:'flex',gap:16}},
React.createElement(Button,{variant:'gold',size:'lg'},'Enrol now'),
React.createElement(Button,{variant:'ghost',size:'lg',style:{color:'var(--white)',border:'1px solid var(--oxford-blue-300)'}},'View syllabus')
)
);
}
window.Hero=Hero;
