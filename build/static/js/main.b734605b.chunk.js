(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(28),i=n.n(c),r=(n(77),n(21)),l=n(22),s=n(26),u=n(23),h=n(25),p=n(70),d=n.n(p),m=n(71),g=n.n(m),b=n(34),f=n(17),v=n(69),w=n.n(v),j=n(43),O=n.n(j);O.a.initializeApp({apiKey:"AIzaSyA8asgYk_Hn7UGEkfaz6TqeiTuERD3aqoE",authDomain:"albums-react-ddc10.firebaseapp.com",databaseURL:"https://albums-react-ddc10.firebaseio.com",projectId:"albums-react-ddc10",storageBucket:"albums-react-ddc10.appspot.com",messagingSenderId:"436479607898"});var y=O.a,E=n(65),k=n.n(E),L=n(67),I=n.n(L),S=n(68),A=n.n(S),R=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).login=n.login.bind(Object(f.a)(Object(f.a)(n))),n.logout=n.logout.bind(Object(f.a)(Object(f.a)(n))),n.state={userLoggedIn:!1,photoURL:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentdidmount"),y.auth().onAuthStateChanged(function(t){t?(console.log(t),e.setState({userLoggedIn:!0,photoURL:t.providerData[0].photoURL})):e.setState({userLoggedIn:!1,photoURL:""})})}},{key:"login",value:function(){var e=new y.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/photoslibrary.readonly"),y.auth().signInWithPopup(e).then(function(e){}).catch(function(e){console.log(e)})}},{key:"logout",value:function(){y.auth().signOut().then(function(e){console.log(e)})}},{key:"LogInButton",value:function(){return this.state.userLoggedIn?[o.a.createElement(k.a,{src:this.state.photoURL}),o.a.createElement(I.a,{color:"inherit",onClick:this.logout},o.a.createElement(A.a,null))]:o.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.login},"Login")}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.classes.container},this.LogInButton())}}]),t}(a.Component),U=Object(b.withStyles)({container:{display:"flex",flexDirection:"row"}})(R),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(g.a,null,o.a.createElement("p",{className:this.props.classes.grow},"Albums"),o.a.createElement(U,null))))}}]),t}(a.Component),B=Object(b.withStyles)({grow:{flexGrow:1},nav:{color:"white"}})(C),D=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,n){e.exports=n(194)},77:function(e,t,n){}},[[72,2,1]]]);
//# sourceMappingURL=main.b734605b.chunk.js.map