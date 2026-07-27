function LessonTabs({active,onChange}){
const {Tabs}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('div',{style:{padding:'0 32px'}},
React.createElement(Tabs,{tabs:['Overview','Transcript','Resources','Past papers'],active,onChange})
);
}
window.LessonTabs=LessonTabs;
