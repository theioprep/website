function VideoPlayer({title}){
const {Button}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('div',null,
React.createElement('div',{style:{background:'var(--gray-900)',aspectRatio:'16/9',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}},
React.createElement('div',{style:{width:64,height:64,borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}},
React.createElement('div',{style:{width:0,height:0,borderTop:'14px solid transparent',borderBottom:'14px solid transparent',borderLeft:'22px solid var(--white)',marginLeft:6}})
),
React.createElement('div',{style:{position:'absolute',bottom:16,left:16,right:16,height:4,background:'rgba(255,255,255,0.25)',borderRadius:'var(--radius-pill)'}},
React.createElement('div',{style:{width:'38%',height:'100%',background:'var(--gold)',borderRadius:'var(--radius-pill)'}})
)
),
React.createElement('div',{style:{padding:'24px 32px',display:'flex',justifyContent:'space-between',alignItems:'flex-start'}},
React.createElement('div',null,
React.createElement('div',{style:{font:'var(--text-h3)',color:'var(--oxford-blue)'}},title),
React.createElement('div',{style:{font:'var(--text-small)',color:'var(--text-muted)',marginTop:6}},'Lesson 4 of 24 \u00b7 22 min')
),
React.createElement(Button,{variant:'secondary',size:'sm'},'Mark complete')
)
);
}
window.VideoPlayer=VideoPlayer;
