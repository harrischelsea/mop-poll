(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){},256:function(e,t,n){e.exports=n(448)},261:function(e,t,n){},286:function(e,t,n){},447:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(72),s=n.n(r),i=(n(261),n(8)),l=n(9),c=n(12),u=n(10),p=n(11),d=n(465),m=(n(262),n(22)),h=n.n(m),E=n(23),f=n(53),O=n(14),g=function(e){return{type:"SET_USER",payload:e}},b={username:"",id:"",token:""},y=function(e){return{type:"USERNAME_CHANGED",payload:e}},j=function(e){return{type:"PASSWORD_CHANGED",payload:e}},S=function(e,t){e({type:"LOGIN_USER_FAIL",payload:t})},v=function(e,t){e({type:"LOGIN_USER_SUCCESS",payload:t})},_=function(){return function(e){e({type:"GET_USER_STARTED"}),h.a.get("/users/get-current-user").then(function(t){h.a.defaults.headers.common.Authorization=localStorage.getItem("token")?localStorage.getItem("token"):"",e(g({username:t.data.username,id:t.data.id,token:t.data.token})),localStorage.setItem("token",t.data.token),e({type:"GET_CURRENT_USER_SUCCESS"})}).catch(function(t){console.log("getuser err",t),e({type:"GET_USER_FAILED"})})}},C=function(){return function(e){e({type:"GET_USER_STARTED"}),h.a.get("/users/get-current-admin").then(function(t){h.a.defaults.headers.common.Authorization=localStorage.getItem("token")?localStorage.getItem("token"):"",e(g({username:t.data.username,id:t.data.id,role:t.data.role,token:t.data.token})),localStorage.setItem("token",t.data.token),e({type:"GET_CURRENT_USER_SUCCESS"})}).catch(function(t){e({type:"GET_USER_FAILED"})})}},w={username:"",password:"",loading:!1,error:"",successLogin:!1,getUserLoading:!1},A={username:"",password:"",confirmPassword:"",email:"",loading:!1,error:"",successRegister:null},N={polls:[],loading:!1,error:""},I=n(54),T={questions:[],loading:!1,error:""};function k(e,t){var n=e.findIndex(function(e){return e.id===t.questionId});return e[n]=Object(O.a)({},e[n],{text:t.questionText}),e}var L={answers:[],loading:!1,error:"",success:!1};function U(e,t){if(e.find(function(e){return e.option_id===t.option_id})){var n=e.findIndex(function(e){return e.option_id===t.option_id});e.splice(n,1)}else{var a=e.find(function(e){return e.type_id&&e.question_id&&e.question_id===t.question_id&&e.type_id===t.type_id});if(!a||1!==a.type_id&&2!==a.type_id)e.push(t);else{var o=e.findIndex(function(e){return e.option_id===a.option_id});e.splice(o,1,t)}}return e}var R={createdQuestions:[],loading:!1,error:""};var Q=Object(f.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(O.a)({},e,t.payload);case"SIGN_OUT":return b;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERNAME_CHANGED":return Object(O.a)({},e,{username:t.payload});case"PASSWORD_CHANGED":return Object(O.a)({},e,{password:t.payload});case"LOGIN_USER_SUCCESS":return Object(O.a)({},w,{successLogin:!0});case"LOGIN_USER_FAIL":return Object(O.a)({},e,{error:t.payload,loading:!1});case"GET_USER_STARTED":return Object(O.a)({},e,{getUserLoading:!0});case"GET_CURRENT_USER_SUCCESS":case"GET_USER_FAILED":return Object(O.a)({},e,{getUserLoading:!1});case"LOGIN_USER":return Object(O.a)({},e,{loading:!0});case"SIGN_OUT":return w;default:return e}},polls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_POLLS_STARTED":return Object(O.a)({},e,{loading:!0});case"GET_ALL_POLLS_FAILED":return Object(O.a)({},e,{error:t.payload,loading:!1});case"GET_ALL_POLLS_SUCCESS":return Object(O.a)({},e,{polls:t.payload,loading:!1});case"SIGN_OUT":return N;default:return e}},question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_QUESTIONS_STARTED":return Object(O.a)({},e,{loading:!0});case"GET_ALL_QUESTIONS_FAILED":return Object(O.a)({},e,{error:t.payload,loading:!1});case"GET_ALL_QUESTIONS_SUCCESS":return Object(O.a)({},e,{questions:t.payload,loading:!1});case"UPDATE_QUESTION":return Object(O.a)({},e,{questions:k(e.questions,t.payload)});case"REMOVE_QUESTION":return Object(O.a)({},e,{questions:(n=e.questions,a=t.payload,n.filter(function(e){return e.id!==a.questionId}))});case"ADD_NEW_QUESTION":return Object(O.a)({},e,{questions:[].concat(Object(I.a)(e.questions),[{text:t.payload.name,tip:t.payload.selectedType,opcije:t.payload.options}])});case"SIGN_OUT":return T;default:return e}var n,a},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ANSWER":return Object(O.a)({},e,{answers:U(e.answers,t.payload)});case"SEND_POLL_ANSWERS_STARTED":return Object(O.a)({},e,{loading:!0});case"SEND_POLL_ANSWERS_FAILED":return Object(O.a)({},e,{error:t.payload,loading:!1});case"SEND_POLL_ANSWERS_SUCCESS":return Object(O.a)({},e,{success:!0,loading:!1});case"SIGN_OUT":return L;default:return e}},createPoll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUESTION":return Object(O.a)({},e,{createdQuestions:[].concat(Object(I.a)(e.createdQuestions),[t.payload])});case"DELETE_CREATED_QUESTION":return Object(O.a)({},e,{createdQuestions:(n=e.createdQuestions,a=t.payload,n.filter(function(e,t){return a!==t}))});case"SIGN_OUT":return R;default:return e}var n,a},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERNAME_CHANGED":return Object(O.a)({},e,{username:t.payload});case"PASSWORD_CHANGED":return Object(O.a)({},e,{password:t.payload});case"CONFIRM_PASSWORD_CHANGED":return Object(O.a)({},e,{confirmPassword:t.payload});case"EMAIL_CHANGED":return Object(O.a)({},e,{email:t.payload});case"REGISTER_SUCCESS":return Object(O.a)({},A,{successRegister:!0});case"REGISTER_FAIL":return Object(O.a)({},e,{error:t.payload,loading:!1});case"REGISTER_USER":return Object(O.a)({},e,{loading:!0});case"SIGN_OUT":return A;default:return e}}}),D=n(223),P=n(224),G=(n(286),n(469)),x=n(468),q=n(41),F=n(456),M=n(463),W=n(464),H=n(459),z=n(449),V=n(461),B=n(458),J=(n(120),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleUsernameChanged=function(e){n.props.usernameChanged(e.target.value)},n.handlePasswordChanged=function(e){n.props.passwordChanged(e.target.value)},n.handleLogin=function(){var e=n.props.login,t=e.username,a=e.password;n.props.loginUser({username:t,password:a})},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.signOutUser()}},{key:"render",value:function(){var e;return o.a.createElement("div",{className:"background"},o.a.createElement(F.a,null,o.a.createElement(M.a,{centered:!0},o.a.createElement(M.a.Column,{mobile:16,tablet:8,computer:6},o.a.createElement(W.a,{as:"h4",textAlign:"center"},"Log-in to your account"),o.a.createElement(H.a,{className:"input-custom"},o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Username",onChange:this.handleUsernameChanged,value:this.props.login.username,name:"username"}),o.a.createElement(H.a.Input,(e={className:"input-custom"},Object(q.a)(e,"className","input-custom"),Object(q.a)(e,"fluid",!0),Object(q.a)(e,"iconPosition","left"),Object(q.a)(e,"placeholder","Password"),Object(q.a)(e,"type","password"),Object(q.a)(e,"onChange",this.handlePasswordChanged),Object(q.a)(e,"value",this.props.login.password),Object(q.a)(e,"name","password"),e)),o.a.createElement(z.a,{color:"white",fluid:!0,size:"large",onClick:this.handleLogin,loading:this.props.loading},"Login"),this.props.error&&o.a.createElement("div",null,this.props.error)),o.a.createElement(V.a,null,o.a.createElement("h3",null,"Not registered?")," ",o.a.createElement(B.a,{to:"/register"}," Sign up "))))))}}]),t}(a.Component)),X=Object(E.b)(function(e){return{login:e.login}},{usernameChanged:y,passwordChanged:j,signOutUser:function(){return function(e){localStorage.removeItem("token"),h.a.defaults.headers.common.Authorization="",e({type:"SIGN_OUT"})}},loginUser:function(e){var t=e.username,n=e.password;return function(e){e({type:"LOGIN_USER"}),console.log("username",t+n),h.a.post("/users/login",{username:t,password:n}).then(function(t){e(g({username:t.data.username,id:t.data.id,token:t.data.token})),localStorage.setItem("token",t.data.token),h.a.defaults.headers.common.Authorization=localStorage.getItem("token")?localStorage.getItem("token"):"",v(e,t.data),window.location.replace("/")}).catch(function(t){S(e,"Invalid login!")})}}})(J),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleUsernameChanged=function(e){n.props.usernameChanged(e.target.value)},n.handlePasswordChanged=function(e){n.props.passwordChanged(e.target.value)},n.handleLogin=function(){var e=n.props,t=e.username,a=e.password;n.props.loginUserAdmin({username:t,password:a})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"background"},o.a.createElement(F.a,null,o.a.createElement(M.a,{centered:!0},o.a.createElement(M.a.Column,{mobile:16,tablet:8,computer:6},o.a.createElement(W.a,{as:"h4",textAlign:"center"},"Log-in to your account"),o.a.createElement(H.a,{className:"input-custom"},o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Username",onChange:this.handleUsernameChanged,value:this.props.username,name:"username"}),o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handlePasswordChanged,value:this.props.password,name:"password"}),o.a.createElement(z.a,{color:"white",fluid:!0,size:"large",onClick:this.handleLogin,loading:this.props.loading},"Login"),this.props.error&&o.a.createElement("div",null,this.props.error)),o.a.createElement(V.a,null,o.a.createElement("h3",null,"This is login page for admin team!"))))))}}]),t}(a.Component),$=Object(E.b)(function(e){var t=e.login,n=e.user;return{username:t.username,password:t.password,error:t.error,successLogin:t.successLogin,loading:t.loading,role:n.role}},{usernameChanged:y,passwordChanged:j,loginUserAdmin:function(e){var t=e.username,n=e.password;return function(e){console.log("loginUserAdmin"),e({type:"LOGIN_USER"}),h.a.post("/users/login-admin",{username:t,password:n}).then(function(t){e(g({username:t.data.username,id:t.data.id,role:t.data.role,token:t.data.token})),localStorage.setItem("token",t.data.token),console.log("res.data.token",t.data.token),h.a.defaults.headers.common.Authorization=localStorage.getItem("token")?localStorage.getItem("token"):"",v(e,t.data),window.location.replace("/admin/main")}).catch(function(){return S(e,"Invalid login!")})}}})(Y),K=n(462),Z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleUsernameChanged=function(e){n.props.usernameChanged(e.target.value)},n.handlePasswordChanged=function(e){n.props.passwordChanged(e.target.value)},n.handleConfirmPasswordChanged=function(e){n.props.confirmPasswordChanged(e.target.value)},n.handleEmailChanged=function(e){n.props.emailChanged(e.target.value)},n.handleRegister=function(){var e=n.props,t=e.username,a=e.password,o=e.confirmPassword,r=e.email;n.props.registerUser({username:t,password:a,confirmPassword:o,email:r})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.successRegister?o.a.createElement(K.a,{to:"/login"}):!1===this.props.successRegister?o.a.createElement("div",null,"Error"):o.a.createElement("div",{className:"background"},o.a.createElement(F.a,null,o.a.createElement(M.a,{centered:!0},o.a.createElement(M.a.Column,{mobile:16,tablet:8,computer:6},o.a.createElement(W.a,{as:"h4",textAlign:"center"},"Please complete your registration by filling the form"),o.a.createElement(H.a,{size:"large"},o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Username",onChange:this.handleUsernameChanged,value:this.props.username,name:"username"}),o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"E-mail address",onChange:this.handleEmailChanged,value:this.props.email,name:"email"}),o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handlePasswordChanged,value:this.props.password,name:"password"}),o.a.createElement(H.a.Input,{className:"input-custom",fluid:!0,iconPosition:"left",placeholder:"Confirm password",type:"password",onChange:this.handleConfirmPasswordChanged,value:this.props.confirmPassword,name:"confirmPassword"}),o.a.createElement(z.a,{color:"white",fluid:!0,size:"large",onClick:this.handleRegister},"Register")),o.a.createElement(V.a,null,o.a.createElement("h3",null,"Already registered?")," ",o.a.createElement(B.a,{to:"/login"}," Sign in "))))))}}]),t}(a.Component),ee=Object(E.b)(function(e){var t=e.register;return{username:t.username,password:t.password,error:t.error,successRegister:t.successRegister,loading:t.loading,email:t.email,confirmPassword:t.confirmPassword}},{usernameChanged:function(e){return{type:"USERNAME_CHANGED",payload:e}},passwordChanged:function(e){return{type:"PASSWORD_CHANGED",payload:e}},confirmPasswordChanged:function(e){return{type:"CONFIRM_PASSWORD_CHANGED",payload:e}},emailChanged:function(e){return{type:"EMAIL_CHANGED",payload:e}},registerUser:function(e){var t=e.username,n=e.password,a=e.confirmPassword,o=e.email;return function(e){n===a&&(e({type:"REGISTER_USER"}),h.a.post("/users",{username:t,password:n,email:o}).then(function(t){!function(e,t){e({type:"REGISTER_SUCCESS",payload:t})}(e,!0)}).catch(function(){return function(e,t){e({type:"REGISTER_FAIL",payload:t})}(e,"Invalid register!")}))}}})(Z),te="/users/get-all-polls",ne=function(e){return"/users/get-all-questions/"+e},ae="/users/send-poll-results",oe="/users/send-poll",re="/users/delete-option",se="/users/add-option",ie="/users/update-question",le="/users/delete-question",ce="/users/delete-poll",ue="/users/add-question",pe=function(){return function(e){e({type:"GET_ALL_POLLS_STARTED"}),h.a.get(te).then(function(t){e({type:"GET_ALL_POLLS_SUCCESS",payload:t.data})}).catch(function(){return e({type:"GET_ALL_POLLS_FAILED",payload:"Something went wrong!"})})}},de=n(467),me=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.polls,n=e.link;return o.a.createElement(F.a,null,o.a.createElement(de.a,{className:"poll"},t.map(function(e,t){return o.a.createElement(B.a,{key:e.id,to:n+e.id},o.a.createElement(W.a,{as:"h2",className:"title"},t+1,") ",e.name))})))}}]),t}(a.Component),he=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(),this.props.getAllPolls()}},{key:"render",value:function(){return localStorage.getItem("token")?o.a.createElement("div",null,this.props.polls.loading||this.props.user.loading?o.a.createElement("h1",null,"Loading---"):o.a.createElement(me,{link:"poll/",polls:this.props.polls.polls})):o.a.createElement(K.a,{to:"/login"})}}]),t}(a.Component),Ee=Object(E.b)(function(e){return{user:e.user,polls:e.polls}},{getUser:_,getAllPolls:pe})(he),fe=function(e){return function(t){t({type:"GET_ALL_QUESTIONS_STARTED"}),h.a.get(ne(e)).then(function(e){t({type:"GET_ALL_QUESTIONS_SUCCESS",payload:e.data})}).catch(function(){return t({type:"GET_ALL_QUESTIONS_FAILED",payload:"Something went wrong!"})})}},Oe=function(e,t,n,a,o,r){return function(s){s({type:"SET_ANSWER",payload:{text:e,question_id:t,option_id:n,type_id:a,checked:o,textAnswer:r}})}},ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSelected=function(e){var t=n.state.options.map(function(t,n){return n===e?(console.log(t),Object(O.a)({},t,{selected:!t.selected})):Object(O.a)({},t,{selected:!1})});n.setState({options:t})},n.state={options:n.props.options},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type;return o.a.createElement(H.a,null,o.a.createElement(H.a.Group,{grouped:!0},this.state.options.map(function(n,a){return o.a.createElement(H.a.Field,{key:n.id,label:n.text,control:"input",type:t,checked:n.selected,onChange:function(){e.handleSelected(a),e.props.selectAnswer(n.text,n.pitanje,n.id,1)},name:n.text})})))}}]),t}(a.Component),be=Object(E.b)(function(e){return{answer:e.answer}},{selectAnswer:Oe})(ge),ye=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.options;t.selectAnswer;return o.a.createElement(H.a,null,o.a.createElement(H.a.Group,{grouped:!0},n.map(function(t){return o.a.createElement("h3",{key:t.id},o.a.createElement(H.a.Field,{control:"textarea",onChange:function(n){e.props.selectAnswer(t.text,t.pitanje,t.id,4,!0,n.target.value)},name:t.text}))})))}}]),t}(a.Component),je=Object(E.b)(function(e){return{answer:e.answer}},{selectAnswer:Oe})(ye),Se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSelected=function(){var e=n.state.selected;n.setState({selected:!e})},n.state={selected:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.type,r=this.state.selected;return o.a.createElement("h3",null,o.a.createElement(H.a.Field,{label:n.text,control:"input",type:a,checked:r,onChange:function(){e.handleSelected(),e.props.selectAnswer(n.text,n.pitanje,n.id,3)},name:n.text}))}}]),t}(a.Component),ve=Object(E.b)(function(e){return{answer:e.answer}},{selectAnswer:Oe})(Se),_e=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.type;return o.a.createElement(H.a,null,o.a.createElement(H.a.Group,{grouped:!0},t.map(function(e){return o.a.createElement(ve,{key:e.id,type:n,item:e})})))}}]),t}(a.Component),Ce=Object(E.b)(function(e){return{answer:e.answer}},{})(_e),we=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.questions;return o.a.createElement(F.a,null,o.a.createElement(de.a,{className:"poll"},t.map(function(t,n){return o.a.createElement(de.a,{className:"question",key:t.id},n+1,") ",t.text,(1===t.tip||2===t.tip)&&o.a.createElement(be,{type:"radio",options:t.opcije,selectAnswer:e.props.selectAnswer}),3===t.tip&&o.a.createElement(Ce,{type:"checkbox",options:t.opcije,selectAnswer:e.props.selectAnswer}),4===t.tip&&o.a.createElement(je,{options:t.opcije,selectAnswer:e.props.selectAnswer}))})))}}]),t}(a.Component),Ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleAnswers=function(){var e=n.props.answer.answers,t=n.props.match.params.id;n.props.sendPollAnswers(e,t)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(),this.props.getAllQuestions(this.props.match.params.id)}},{key:"render",value:function(){return o.a.createElement("div",null,this.props.question.loading?o.a.createElement("h1",null,"Loading---"):o.a.createElement("div",null,o.a.createElement(we,{questions:this.props.question.questions}),o.a.createElement(z.a,{positive:!0,color:"green",fluid:!0,size:"large",loading:this.props.answer.loading,onClick:this.handleAnswers},"SEND")))}}]),t}(a.Component),Ne=Object(E.b)(function(e){return{question:e.question,user:e.user,answer:e.answer}},{getUser:_,getAllQuestions:fe,sendPollAnswers:function(e,t){return function(n){n({type:"SEND_POLL_ANSWERS_STARTED"}),h.a.post(ae,{options:e,poll_id:t}).then(function(e){n({type:"SEND_POLL_ANSWERS_SUCCESS"}),window.location.replace("/success")}).catch(function(){return n({type:"SEND_POLL_ANSWERS_FAILED",payload:"Something went wrong!"})})}}})(Ae),Ie=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:"150px"},align:"center"},o.a.createElement(F.a,null,o.a.createElement(de.a,null,"Uspje\u0161no ste uradili Anketu! ",o.a.createElement("br",null),o.a.createElement(B.a,{to:"/"},"Vratite se na po\u010detnu stranicu."))))}}]),t}(a.Component),Te=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(G.a,null,o.a.createElement(x.a,{exact:!0,path:"/",component:Ee}),o.a.createElement(x.a,{path:"/poll/:id",component:Ne}),o.a.createElement(x.a,{path:"/success",component:Ie}))}}]),t}(a.Component),ke=[{name:"View all",link:"/"},{name:"Log out",link:"/login"}],Le=[{name:"View all",link:"/admin/main"},{name:"Create",link:"/admin/create"},{name:"Log out",link:"/login"}],Ue=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={adminRouter:Le,userRouter:ke},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.adminRouter,n=e.userRouter,a=this.props.role;return o.a.createElement(de.a,{className:"header"},o.a.createElement(F.a,null,o.a.createElement("span",null,"Welcome! | MOP - Questionnaire"),"user"===a?n.map(function(e,t){return o.a.createElement(B.a,{key:t,className:"link",to:e.link},e.name)}):t.map(function(e,t){return o.a.createElement(B.a,{key:t,className:"link",to:e.link},e.name)})))}}]),t}(a.Component),Re=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Ue,{role:"user"}),o.a.createElement(Te,null))}}]),t}(a.Component),Qe=n(460),De=n(64),Pe=n(457),Ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleQuestionName=function(e){var t=n.state.currentQuestion;n.setState({currentQuestion:Object(O.a)({},t,{name:e.target.value})})},n.handleOptionInput=function(e){n.setState({currentOption:{text:e.target.value}})},n.addOption=function(){var e=n.state,t=e.currentOption,a=e.currentQuestion,o=e.pollId;""!==t.text&&(n.props.addOption(t.text,o,a.id),n.setState({currentQuestion:Object(O.a)({},a,{options:[].concat(Object(I.a)(a.options),[t])}),currentOption:{text:""}}))},n.removeOption=function(e){var t=n.state.currentQuestion;4!==t.selectedType&&(n.props.deleteOption(t.options[e].id),t.options.splice(e,1),n.setState({currentQuestion:Object(O.a)({},t,{options:t.options})}))},n.updateQuestion=function(){var e=n.state.currentQuestion;n.props.updateQuestion(e.name,e.id)},n.state={pollId:n.props.pollId,currentQuestion:{id:n.props.currentQuestion.id,name:n.props.currentQuestion.name,selectedType:n.props.currentQuestion.selectedType,options:n.props.currentQuestion.options},currentOption:{text:""}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(Qe.a,{trigger:o.a.createElement(z.a,{fluid:!0},o.a.createElement(De.a,{name:"add square"}),"Update question"),closeIcon:!0},o.a.createElement(W.a,{icon:"archive",content:"Update question"}),o.a.createElement(Qe.a.Content,null,o.a.createElement(Pe.a,{fluid:!0,label:"Question name:",icon:"question",type:"text",value:this.state.currentQuestion.name,onChange:this.handleQuestionName}),o.a.createElement("br",null),4!==this.state.currentQuestion.selectedType?o.a.createElement("div",null,o.a.createElement(Pe.a,{fluid:!0,type:"text",value:this.state.currentOption.text,onChange:this.handleOptionInput}),o.a.createElement(z.a,{fluid:!0,onClick:this.addOption},"Add option")):o.a.createElement("div",null,"Nema ponu\u0111enog odgovora"),o.a.createElement("div",{style:{marginTop:"10px"}},this.state.currentQuestion.options&&this.state.currentQuestion.options.map(function(t,n){return o.a.createElement("div",{key:n,className:"options"},t.text?t.text:t,o.a.createElement(z.a,{className:"delete-button",onClick:function(){return e.removeOption(n)}},o.a.createElement(De.a,{name:"delete"})))}))),o.a.createElement(Qe.a.Actions,null,o.a.createElement(z.a,{positive:!0,onClick:this.updateQuestion},"Update"))))}}]),t}(a.Component),xe=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.questions;return o.a.createElement(F.a,null,o.a.createElement(de.a,{className:"poll"},t.map(function(t,n){return o.a.createElement(de.a,{key:t.id?t.id:n,className:"update"},o.a.createElement("div",{className:"title"},t.text),o.a.createElement(z.a,{negative:!0,onClick:function(){return e.props.deleteQuestion(t.id,t.opcije)}},"Delete Question"),o.a.createElement("div",{style:{float:"right"}},o.a.createElement(Ge,{pollId:e.props.pollId,addOption:e.props.addOption,deleteOption:e.props.deleteOption,updateQuestion:e.props.updateQuestion,currentQuestion:{id:t.id,selectedType:t.tip,name:t.text,options:t.opcije}})))})))}}]),t}(a.Component),qe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSelectedType=function(e){var t=n.state.currentQuestion;n.setState({currentQuestion:Object(O.a)({},t,{selectedType:e.target.value,options:4==e.target.value?["Unesite svoj odgovor"]:[]})})},n.handleQuestionName=function(e){var t=n.state.currentQuestion;n.setState({currentQuestion:Object(O.a)({},t,{name:e.target.value})})},n.handleOptionInput=function(e){n.state.currentOption;n.setState({currentOption:{text:e.target.value}})},n.addOption=function(){var e=n.state,t=e.currentOption,a=e.currentQuestion;""!=t.text&&n.setState({currentQuestion:Object(O.a)({},a,{options:[].concat(Object(I.a)(a.options),[t.text])}),currentOption:{text:""}})},n.addQuestion=function(){var e=n.state,t=e.currentQuestion,a=(e.questions,n.props),o=a.update,r=a.pollId;4!=t.selectedType&&t.options.length<2||(o&&1==o?n.props.createQuestion(t,r):(n.props.createQuestion(t),n.setState({currentQuestion:{name:"",selectedType:1,options:[]},currentOption:{text:""}})))},n.state={currentQuestion:{name:"",selectedType:1,options:[]},currentOption:{text:""}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Qe.a,{trigger:o.a.createElement(z.a,{fluid:!0},o.a.createElement(De.a,{name:"add square"}),"Create new question"),closeIcon:!0},o.a.createElement(W.a,{icon:"archive",content:"Create new question"}),o.a.createElement(Qe.a.Content,null,o.a.createElement(Pe.a,{fluid:!0,label:"Question name:",icon:"question",type:"text",value:this.state.currentQuestion.name,onChange:this.handleQuestionName}),o.a.createElement("select",{value:this.state.currentQuestion.selectedType,onChange:this.handleSelectedType},o.a.createElement("option",{value:1},"YES/NO"),o.a.createElement("option",{value:2},"SINGLE CHOICE"),o.a.createElement("option",{value:3},"MULTIPLE CHOICE"),o.a.createElement("option",{value:4},"TEXT")),o.a.createElement("br",null),4!=this.state.currentQuestion.selectedType?o.a.createElement("div",null,o.a.createElement(Pe.a,{fluid:!0,type:"text",value:this.state.currentOption.text,onChange:this.handleOptionInput}),o.a.createElement(z.a,{fluid:!0,onClick:this.addOption},"Add option")):o.a.createElement("div",null,"Nema ponu\u0111enog odgovora"),o.a.createElement("div",{style:{marginTop:"10px"}},this.state.currentQuestion.options.map(function(e,t){return o.a.createElement("div",{key:t,className:"options"},e)}))),o.a.createElement(Qe.a.Actions,null,o.a.createElement(z.a,{positive:!0,onClick:this.addQuestion},"ADD "))))}}]),t}(a.Component),Fe=(n(447),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleAnswers=function(){var e=n.props.answer.answers,t=n.props.match.params.id;n.props.sendPollAnswers(e,t)},n.deletePoll=function(){n.props.deletePoll(n.props.match.params.id)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserAdmin(),this.props.getAllQuestions(this.props.match.params.id)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(de.a,{className:"update"},o.a.createElement("div",{className:"title"},"Anketa"),o.a.createElement(z.a,{onClick:this.deletePoll,className:"add"},o.a.createElement(De.a,{name:"delete"}),"Delete poll"),o.a.createElement("div",{style:{float:"right"}},o.a.createElement(qe,{pollId:this.props.match.params.id,update:!0,createQuestion:this.props.addQuestion}))),this.props.question.loading?o.a.createElement("h1",null,"Loading---"):o.a.createElement(xe,{pollId:this.props.match.params.id,addOption:this.props.addOption,deleteOption:this.props.deleteOption,updateQuestion:this.props.updateQuestion,deleteQuestion:this.props.deleteQuestion,questions:this.props.question.questions}))}}]),t}(a.Component)),Me=Object(E.b)(function(e){return{question:e.question,user:e.user,polls:e.polls}},{getUserAdmin:C,getAllQuestions:fe,addOption:function(e,t,n){return function(a){h.a.post(se,{optionText:e,pollId:t,questionId:n}).then(function(e){a({type:"ADD_QUESTION_OPTION"})}).catch(function(){return console.log("TODO - ERROR HANDLING!")})}},deleteOption:function(e){return function(t){h.a.post(re,{optionId:e}).then(function(e){t({type:"REMOVE_QUESTION_OPTION"})}).catch(function(){return console.log("TODO - ERROR HANDLING!")})}},updateQuestion:function(e,t){return function(n){h.a.post(ie,{questionText:e,questionId:t}).then(function(a){n({type:"UPDATE_QUESTION",payload:{questionText:e,questionId:t}})}).catch(function(){return console.log("TODO - ERROR HANDLING!")})}},deleteQuestion:function(e,t){return function(n){console.log("questionId",e,t),h.a.post(le,{questionId:e,options:t}).then(function(t){n({type:"REMOVE_QUESTION",payload:{questionId:e}})}).catch(function(){return console.log("TODO - ERROR HANDLING!")})}},deletePoll:function(e){return function(t){console.log("pollId",e),h.a.post(ce,{pollId:e}).then(function(e){t({type:"DELETE_POLL"}),window.location.replace("/admin/main")}).catch(function(){return console.log("Something went wrong!")})}},addQuestion:function(e,t){return function(n){console.log("front addquestion",e),console.log("front pollId",t),h.a.post(ue,{currentQuestion:e,pollId:t}).then(function(t){n({type:"ADD_NEW_QUESTION",payload:e})}).catch(function(){return console.log("TODO - ERROR HANDLING!")})}}})(Fe),We=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserAdmin(),this.props.getAllPolls()}},{key:"render",value:function(){return localStorage.getItem("token")?o.a.createElement("div",null,this.props.polls.loading?o.a.createElement("h1",null,"Loading---"):o.a.createElement(me,{link:"/admin/update/",polls:this.props.polls.polls})):o.a.createElement(K.a,{to:"/login"})}}]),t}(a.Component),He=Object(E.b)(function(e){return{user:e.user,polls:e.polls}},{getUserAdmin:C,getAllPolls:pe})(We),ze=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.createdQuestions;return o.a.createElement(F.a,null,o.a.createElement(de.a,{className:"poll"},t.map(function(t,n){return o.a.createElement(de.a,{key:n,className:"update"},o.a.createElement("div",{className:"title"},t.name),o.a.createElement(z.a,{negative:!0,onClick:function(){return e.props.deleteCreatedQuestion(n)}},"Delete Question"))})))}}]),t}(a.Component),Ve=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handlePollName=function(e){n.setState({pollName:e.target.value})},n.sendPoll=function(){var e=n.state.pollName;""!==e&&n.props.sendPoll(n.props.createPoll.createdQuestions,e)},n.state={pollName:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserAdmin()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Pe.a,{fluid:!0,style:{marginBottom:"10px"},type:"text",label:"Poll name:",placeholder:"Add poll name...",value:this.state.pollName,onChange:this.handlePollName}),o.a.createElement(qe,{createQuestion:this.props.createQuestion}),o.a.createElement(ze,{deleteCreatedQuestion:this.props.deleteCreatedQuestion,createdQuestions:this.props.createPoll.createdQuestions}),o.a.createElement(z.a,{style:{position:"fixed",bottom:"30px",left:"20px"},positive:!0,onClick:this.sendPoll},o.a.createElement(De.a,{name:"add"}),"Finish"))}}]),t}(a.Component),Be=Object(E.b)(function(e){return{user:e.user,createPoll:e.createPoll}},{getUserAdmin:C,createQuestion:function(e){return function(t){t({type:"CREATE_QUESTION",payload:e})}},deleteCreatedQuestion:function(e){return function(t){t({type:"DELETE_CREATED_QUESTION",payload:e})}},sendPoll:function(e,t){return function(n){n({type:"SEND_POLL_STARTED"}),h.a.post(oe,{questions:e,pollName:t}).then(function(e){n({type:"SEND_POLL_SUCCESS"}),window.location.replace("/admin/main")}).catch(function(){return n({type:"SEND_POLL_FAILED",payload:"Something went wrong!"})})}}})(Ve),Je=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(G.a,null,o.a.createElement(x.a,{exact:!0,path:"/admin/main",component:He}),o.a.createElement(x.a,{path:"/admin/update/:id",component:Me}),o.a.createElement(x.a,{path:"/admin/create/",component:Be}))}}]),t}(a.Component),Xe=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Ue,{role:"admin"}),o.a.createElement(Je,null))}}]),t}(a.Component),Ye=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(G.a,null,o.a.createElement(x.a,{path:"/login",component:X}),o.a.createElement(x.a,{path:"/register",component:ee}),o.a.createElement(x.a,{path:"/",component:Re}),o.a.createElement(x.a,{exact:!0,path:"/cms",component:$}),o.a.createElement(x.a,{path:"/admin/",component:Xe}))}}]),t}(a.Component),$e=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(Ye,null)}}]),t}(a.Component),Ke=Object(f.createStore)(Q,{},Object(P.composeWithDevTools)(Object(f.applyMiddleware)(D.a))),Ze=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,{store:Ke},o.a.createElement(d.a,null,o.a.createElement($e,null)))}}]),t}(a.Component);h.a.defaults.headers.common.Authorization=localStorage.getItem("token")?localStorage.getItem("token"):"";var et=Ze;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[256,1,2]]]);
//# sourceMappingURL=main.379ae2bb.chunk.js.map