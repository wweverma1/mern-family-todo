(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),c=n(33),i=n.n(c),r=(n(85),n(23)),o=n(7),l=n(16),u=n(17),h=n(19),d=n(18),j=n(2),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Family ToDo List"}),Object(j.jsx)("div",{className:"collpase navbar-collapse",children:Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"navbar-item",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link",children:"Family ToDo"})}),Object(j.jsx)("li",{className:"navbar-item",children:Object(j.jsx)(r.b,{to:"/create",className:"nav-link",children:"Add a ToDo"})}),Object(j.jsx)("li",{className:"navbar-item",children:Object(j.jsx)(r.b,{to:"/user",className:"nav-link",children:"Add a Member"})})]})})]})}}]),n}(a.Component),m=n(8),x=n(13),O=n.n(x),p=function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.exercise.username}),Object(j.jsx)("td",{children:e.exercise.description}),Object(j.jsx)("td",{children:e.exercise.duration}),Object(j.jsx)("td",{children:e.exercise.date.substring(0,10)}),Object(j.jsxs)("td",{children:[Object(j.jsx)(r.b,{to:"/edit/"+e.exercise._id,children:"edit"})," | ",Object(j.jsx)("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"delete"})]})]})},v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).deleteExercise=a.deleteExercise.bind(Object(m.a)(a)),a.state={exercises:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){O.a.delete("http://localhost:5000/exercises/"+e).then((function(e){console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(j.jsx)(p,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"ToDo List"}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-light",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Member"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Duration"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),n}(a.Component),g=n(37),f=n.n(g),C=(n(68),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(m.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),O.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Edit ToDo"}),Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Member: "}),Object(j.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Description: "}),Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Duration (in minutes): "}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Date: "}),Object(j.jsx)("div",{children:Object(j.jsx)(f.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"})})]})]})}}]),n}(a.Component)),D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(m.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),O.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Add a ToDo"}),Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Member: "}),Object(j.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Description: "}),Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Duration (in minutes): "}),Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Date: "}),Object(j.jsx)("div",{children:Object(j.jsx)(f.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"})})]})]})}}]),n}(a.Component),N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:""},a}return Object(u.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),O.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Add a New Member"}),Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Member Name: "}),Object(j.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Avialable Members"}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"thead-light",children:Object(j.jsx)("tr",{children:Object(j.jsx)("th",{children:"Member Name"})})}),Object(j.jsx)("tbody",{children:Object(j.jsx)("tr",{})})]})]})]})}}]),n}(a.Component);var y=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),Object(j.jsx)("br",{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(j.jsx)(o.a,{path:"/edit/:id",exact:!0,component:C}),Object(j.jsx)(o.a,{path:"/create",exact:!0,component:D}),Object(j.jsx)(o.a,{path:"/user",exact:!0,component:N})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[168,1,2]]]);
//# sourceMappingURL=main.bbf99a02.chunk.js.map