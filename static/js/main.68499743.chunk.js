(this.webpackJsonpemp=this.webpackJsonpemp||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=a(12),m=a(13),s=a(16),u=a(15);a(22);var i={backgroundColor:"green",textAlign:"center"},p=function(){return l.a.createElement("header",{style:i},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("p",null,"Pick a name"))};function h(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("img",{style:E.image,alt:e.first,src:e.thumbnail})),l.a.createElement("td",null,e.first),l.a.createElement("td",null,e.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.dob)))}var E={image:{width:60,height:60,borderRadius:"50px"}};var d=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("input",{type:"text",name:"search",placeholder:"Search ..."}),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"},"First"),l.a.createElement("th",{scope:"col"},"Last"),l.a.createElement("th",{scope:"col"},"E-mail"),l.a.createElement("th",{scope:"col"},"Phone Number"),l.a.createElement("th",{scope:"col"},"DOB"))),l.a.createElement("tbody",null,e.employees.map((function(e){return l.a.createElement(h,{first:e.first,last:e.last,email:e.email,phone:e.phone,dob:e.dob,thumbnail:e.thumbnail,key:e.phone})})))))},b=a(14),f=a.n(b),y=function(){return f.a.get("https://randomuser.me/api/?results=20")},g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){var a=t.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,dob:e.dob.date,thumbnail:e.picture.thumbnail}}));e.setState({employees:a}),console.log(e.state.employees)}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(d,{employees:this.state.employees}))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68499743.chunk.js.map