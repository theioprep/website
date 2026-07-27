const courses=[
{title:'IB English A: Language & Literature',meta:'24 lessons \u00b7 HL & SL',grade:'Grade 7'},
{title:'IGCSE English Language',meta:'18 lessons \u00b7 First Language',grade:'Grade 9'},
{title:'IGCSE English Literature',meta:'16 lessons \u00b7 Set texts covered',grade:'Grade 9'}
];
export function CourseGrid(){
const {Card,Badge,Button}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('section',{style:{padding:'80px 48px',background:'var(--white)'}},
React.createElement('div',{style:{font:'var(--fs-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:8}},'Courses'),
React.createElement('h2',{style:{font:'var(--text-h2)',color:'var(--oxford-blue)',margin:'0 0 40px'}},'Choose your course'),
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}},
courses.map(c=>React.createElement(Card,{key:c.title},
React.createElement(Badge,{tone:'gold'},c.grade),
React.createElement('div',{style:{font:'var(--text-h4)',color:'var(--oxford-blue)',margin:'14px 0 6px'}},c.title),
React.createElement('div',{style:{font:'var(--text-small)',color:'var(--text-muted)',marginBottom:20}},c.meta),
React.createElement(Button,{variant:'secondary',size:'sm'},'View course')
))
)
);
}
window.CourseGrid=CourseGrid;
