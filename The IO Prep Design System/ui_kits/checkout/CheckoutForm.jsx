function CheckoutForm(){
const {Input,Select,Checkbox,Button}=window.TheIOPrepDesignSystem_433c05;
return React.createElement('div',{style:{maxWidth:420,display:'flex',flexDirection:'column',gap:16}},
React.createElement('div',{style:{font:'var(--text-h3)',color:'var(--oxford-blue)'}},'Checkout'),
React.createElement(Input,{label:'Full name',placeholder:'Jane Student'}),
React.createElement(Input,{label:'Email',placeholder:'you@school.edu'}),
React.createElement(Select,{label:'Exam board',options:['IGCSE','IB']}),
React.createElement(Input,{label:'Card number',placeholder:'4242 4242 4242 4242'}),
React.createElement(Checkbox,{label:'Send me exam-day reminders',checked:true,onChange:()=>{}}),
React.createElement(Button,{variant:'primary',size:'lg',style:{width:'100%'}},'Complete purchase')
);
}
window.CheckoutForm=CheckoutForm;
