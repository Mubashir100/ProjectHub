(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{218:function(e,t,a){e.exports=a(418)},384:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(92),l=a.n(c),i=a(10),o=a(11),s=a(13),u=a(12),m=a(9),d=a(19),p=a(4),h=Object(p.b)(null,{signOut:function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){return e({type:"LOGOUT_SUCCESSFULL"})}))}}})((function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/create/project"},"Create Project")),r.a.createElement("li",null,r.a.createElement(m.b,{onClick:e.signOut},"Sign Out")))})),b=function(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/login"},"Log In")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/signup"},"Sign Up")))},f=a(215),E=a.n(f),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".sidenav");E.a.Sidenav.init(e,{})}},{key:"render",value:function(){var e=this.props.isSignedIn?r.a.createElement(h,null):r.a.createElement(b,null);return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-wrapper black darken-1"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"ProjectHub"),r.a.createElement("a",{href:"#",class:"sidenav-trigger left","data-target":"mobile-nav"},r.a.createElement("i",{className:"material-icons"},"menu ")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},e))),r.a.createElement("ul",{className:"sidenav",id:"mobile-nav"},e))}}]),a}(n.Component),j=Object(p.b)((function(e){return{isSignedIn:e.firebase.auth.uid}}))(g),v=a(5),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",detail:""},e.handleChange=function(t){e.state[t.target.id]=t.target.value},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state,e.props.profile),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row white"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement("h5",{id:"title",className:"grey-text"},"Enter the Project Details"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Project Title"),r.a.createElement("input",{onChange:this.handleChange,id:"title",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Project Details"),r.a.createElement("textarea",{onChange:this.handleChange,id:"detail",type:"text",className:"materialize-textarea"})),r.a.createElement("button",{onSubmit:this.handleSubmit,className:"black darken-1 waves-effect waves-light btn",id:"loginbtn"},"Create"))))):r.a.createElement(v.a,{to:"/login"})}}]),a}(n.Component),N=Object(p.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),{createProject:function(e,t){return function(a,n,r){r.getFirebase;(0,r.getFirestore)().collection("projects").add(Object(d.a)(Object(d.a)({},e),{},{createdBy:t.firstName+" "+t.lastName,createdAt:new Date})),a({type:"CREATE_PROJECT",payload:e})}}})(O),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.state[t.target.id]=t.target.value},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"s12  z-depth-0 white",id:"panell"},r.a.createElement("h5",{id:"title",className:"grey-text"},"Login"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.handleChange,id:"email",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:this.handleChange,id:"password",type:"password"})),r.a.createElement("button",{onClick:this.handleSubmit,className:"black darken-1 waves-effect waves-light btn",id:"loginbtn"},"Login"),r.a.createElement("p",{className:"red-text"},this.props.error))))}}]),a}(n.Component),C=Object(p.b)((function(e){return{error:e.auth.authErr,auth:e.firebase.auth}}),{signIn:function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){return t({type:"LOGIN_SUCCESS"})})).catch((function(e){return t({type:"LOGIN_FAILED",err:e})}))}}})(y),S=(a(228),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",phone:"",email:"",password:""},e.handleChange=function(t){e.state[t.target.id]=t.target.value},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.auth.uid)return r.a.createElement(v.a,{to:"/"});if(this.props.err)var e=this.props.err.message;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"form m8 s12 white ",id:"panell"},r.a.createElement("h5",{id:"title",className:"grey-text"},"Signup"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.handleChange,id:"firstName",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.handleChange,id:"lastName",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.handleChange,id:"email",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Phone no."),r.a.createElement("input",{onChange:this.handleChange,id:"phone",type:"text"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"password"),r.a.createElement("input",{onChange:this.handleChange,id:"password",type:"password"})),r.a.createElement("button",{onClick:this.handleSubmit,className:"black darken-1 waves-effect waves-light btn",id:"loginbtn"},"Signup"),r.a.createElement("p",{className:"red-text"},e))))}}]),a}(n.Component)),w=Object(p.b)((function(e){return{auth:e.firebase.auth,err:e.auth.authErr}}),{signUp:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_FAILED",err:e})}))}}})(S),k=a(52),I=a.n(k);var x=function(e){return console.log("insidr project item",e),r.a.createElement(m.b,{to:"/projects/".concat(e.project.id)},r.a.createElement("div",{className:"card grey lighten-3 black-text z-depth-0"},r.a.createElement("h4",{style:{fontWeight:"bold",fontSize:"35px"},class:"card-title"},e.project.title),r.a.createElement("p",{className:"blue-text"},"By ",e.project.createdBy),r.a.createElement("div",{className:"blue-text"},I()(e.project.createdAt.toDate()).calendar())))},F=a(22),L=a(17),P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(void 0!==this.props.projects&&null!==this.props.projects){var e=this.props.projects.map((function(e){return r.a.createElement(x,{project:e})}));return r.a.createElement("div",null,e)}return r.a.createElement("div",null,"No Projects to show")}}]),a}(n.Component),A=Object(L.d)(Object(p.b)((function(e,t){return{projects:e.firestore.ordered.projects}})),Object(F.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]))(P),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card grey lighten-3 z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notification"},e&&e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"blue-text"},e.user,"  "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"}," ",I()(e.time.toDate()).fromNow()))}))))))}}]),a}(n.Component),D=Object(L.d)(Object(p.b)((function(e){return{notifications:e.firestore.ordered.notifications}})),Object(F.firestoreConnect)([{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(U),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col  s12 m4 offset-m2"},r.a.createElement(D,null))):r.a.createElement(v.a,{to:"/login"})}}]),a}(n.Component),_=Object(p.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))(G),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.props.auth.uid)return r.a.createElement(v.a,{to:"/login"});if(console.log(this.props),this.props.project){var e=this.props.project;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card z-depth-0 grey lighten-3"},r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.detail),r.a.createElement("footer",{className:" blue-text"},r.a.createElement("span",null,"By: ",e.createdBy),r.a.createElement("span",null,I()(e.createdAt.toDate()).calendar()))))}return r.a.createElement("div",null,"Loading")}}]),a}(n.Component),z=Object(L.d)(Object(p.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return console.log(r),{auth:e.firebase.auth,project:r}})),Object(F.firestoreConnect)((function(){return["projects"]})))(R),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container"},r.a.createElement(v.b,{exact:!0,path:"/",component:_}),r.a.createElement(v.b,{path:"/create/project",component:N}),r.a.createElement(v.b,{path:"/login",component:C}),r.a.createElement(v.b,{path:"/signup",component:w}),r.a.createElement(v.b,{path:"/projects/:id",component:z}))))}}]),a}(n.Component),T=(a(384),a(217)),J={authErr:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("loginned"),Object(d.a)(Object(d.a)({},e),{},{authErr:null});case"LOGIN_FAILED":return console.log("login failed"),Object(d.a)(Object(d.a)({},e),{},{authErr:"Login Failed:Email/Password is incorrect!!"});case"LOGOUT_SUCCESSFULL":return console.log("logging out"),Object(d.a)(Object(d.a)({},e),{},{authErr:null});case"SIGNUP_SUCCESS":return console.log("sign up successfull"),Object(d.a)(Object(d.a)({},e),{},{authErr:null});case"SIGNUP_FAILED":return console.log(t.err),Object(d.a)(Object(d.a)({},e),{},{authErr:t.err});default:return e}},H=a(53),M=Object(L.c)({auth:W,projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CREATE_PROJECT"===t.type?[].concat(Object(T.a)(e),[t.payload]):e},firestore:H.firestoreReducer,firebase:F.firebaseReducer}),q=a(216),K=a(65),Q=a.n(K);a(416),a(417);Q.a.initializeApp({apiKey:"AIzaSyCMWVfpac9tgnkIYIjkZ112zGnDlHtvoak",authDomain:"projecthub-4a981.firebaseapp.com",databaseURL:"https://projecthub-4a981.firebaseio.com",projectId:"projecthub-4a981",storageBucket:"projecthub-4a981.appspot.com",messagingSenderId:"34585239642",appId:"1:34585239642:web:d80a28f0867a51cb3db863",measurementId:"G-DWRWQJCJTR"});var V=Q.a,Y=Object(L.e)(M,Object(L.d)(Object(L.a)(q.a.withExtraArgument({getFirebase:F.getFirebase,getFirestore:H.getFirestore})),Object(H.reduxFirestore)(V))),Z={firebase:Q.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:Y.dispatch,createFirestoreInstance:H.createFirestoreInstance};function X(e){var t=e.children,a=Object(p.c)((function(e){return e.firebase.auth}));return Object(F.isLoaded)(a)?t:r.a.createElement("div",null)}l.a.render(r.a.createElement(p.a,{store:Y},r.a.createElement(F.ReactReduxFirebaseProvider,Z,r.a.createElement(X,null,r.a.createElement(B,null)))),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.0fac0b1d.chunk.js.map