(this["webpackJsonpreact-js-practice"]=this["webpackJsonpreact-js-practice"]||[]).push([[0],{13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),c=i(7),a=i.n(c),o=(i(13),i(2)),d=i(3),r=i(5),l=i(4),h=(i(14),i(0)),u=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"changeWelcome",value:function(t){t.preventDefault(),this.props.onChangePage()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)("a",{href:"/",onChange:this.changeWelcome.bind(this),children:this.props.title})}),this.props.sub,Object(h.jsx)("hr",{})]})}}]),i}(s.Component),j=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"shouldComponentUpdate",value:function(t,e,i){return this.props.data!==t.data}},{key:"selectTodo",value:function(t){t.preventDefault(),this.props.onChangePage(t.target.dataset.id)}},{key:"render",value:function(){for(var t=[],e=this.props.data,i=0;i<e.length;i++)t.push(Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/todoList/"+e[i].id,"data-id":e[i].id,onClick:this.selectTodo.bind(this),children:e[i].title})},e[i].id));return Object(h.jsxs)("nav",{children:[Object(h.jsx)("ul",{children:t}),Object(h.jsx)("hr",{})]})}}]),i}(s.Component),b=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:this.props.title}),this.props.desc,Object(h.jsx)("hr",{})]})}}]),i}(s.Component),p=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"createTodo",value:function(t){t.preventDefault(),this.props.onSubmit(t.target.title.value,t.target.desc.value)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Create"}),Object(h.jsxs)("form",{action:"/create_process",method:"post",onSubmit:this.createTodo.bind(this),children:[Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",name:"title",placeholder:"\ud560 \uc77c"})}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{name:"desc",placeholder:"\uc138\ubd80 \ub0b4\uc6a9"})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit"})})]}),Object(h.jsx)("hr",{})]})}}]),i}(s.Component),O=i(8),f=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t){var s;return Object(o.a)(this,i),(s=e.call(this,t)).state={id:s.props.data.id,title:s.props.data.title,desc:s.props.data.desc},s}return Object(d.a)(i,[{key:"inputForm",value:function(t){t.preventDefault(),this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"updateTodo",value:function(t){t.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Update"}),Object(h.jsxs)("form",{action:"/update_process",method:"post",onSubmit:this.updateTodo.bind(this),children:[Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"hidden",name:"id",value:this.state.id})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.inputForm.bind(this)})}),Object(h.jsx)("p",{children:Object(h.jsx)("textarea",{name:"desc",value:this.state.desc,onChange:this.inputForm.bind(this)})}),Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"submit"})})]}),Object(h.jsx)("hr",{})]})}}]),i}(s.Component),v=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(d.a)(i,[{key:"selectValue",value:function(t){t.preventDefault(),this.props.onChangeMode(t.target.value)}},{key:"render",value:function(){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:"create",onClick:this.selectValue.bind(this)})}),Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:"update",onClick:this.selectValue.bind(this)})}),Object(h.jsx)("li",{children:Object(h.jsx)("input",{type:"button",value:"delete",onClick:this.selectValue.bind(this)})})]})}}]),i}(s.Component),m=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t){var s;return Object(o.a)(this,i),(s=e.call(this,t)).todoListSize=3,s.state={mode:"welcome",selectedTodoListId:1,subject:{title:"\uc624\ub298\uc758 \ud560 \uc77c",sub:"\ud560 \uc77c \uccb4\ud06c\ub9ac\uc2a4\ud2b8!"},welcome:{title:"\ud560 \uc77c",desc:"\uc138\ubd80 \ub0b4\uc6a9"},todoList:[{id:1,title:"\uc6b4\ub3d9\ud558\uae30",desc:"\ud314\uad7d\ud600\ud3b4\uae30, \uc2a4\ucffc\ud2b8, \ud131\uac78\uc774"},{id:2,title:"\uacf5\ubd80\ud558\uae30",desc:"\ub9ac\uc561\ud2b8 \ubcf5\uc2b5"},{id:3,title:"\uc218\uc5c5\ub4e3\uae30",desc:"\uad6c\uae00\ubbf8\ud2b8 \ud654\uc0c1\ud68c\uc758 \ucc38\uc5ec"}]},s}return Object(d.a)(i,[{key:"getReadTodo",value:function(){var t,e,i,s=null;switch(this.state.mode){case"welcome":e=this.state.welcome.title,i=this.state.welcome.desc,s=Object(h.jsx)(b,{title:e,desc:i});break;case"read":t=this.getTodo(),s=Object(h.jsx)(b,{title:t.title,desc:t.desc});break;case"create":s=Object(h.jsx)(p,{onSubmit:this.createTodo.bind(this)});break;case"update":t=this.getTodo(),s=Object(h.jsx)(f,{data:t,onSubmit:this.updateTodo.bind(this)})}return s}},{key:"createTodo",value:function(t,e){var i=Array.from(this.state.todoList);i.push({id:++this.todoListSize,title:t,desc:e}),this.setState({todoList:i,mode:"read",selectedTodoListId:this.todoListSize})}},{key:"updateTodo",value:function(t,e,i){for(var s=Array.from(this.state.todoList),n=0;n<s.length;n++)if(s[n].id===t){s[n]={id:t,title:e,desc:i};break}this.setState({todoList:s,mode:"read"})}},{key:"deleteTodo",value:function(t){if("delete"===t&&window.confirm("delete?")){for(var e=Array.from(this.state.todoList),i=0;i<this.state.todoList.length;i++)if(e[i].id===this.state.selectedTodoListId){e.splice(i,1);break}this.setState({mode:"welcome",todoList:e})}else this.setState({mode:t})}},{key:"getTodo",value:function(){for(var t=0;t<this.state.todoList.length;t++){var e=this.state.todoList[t];if(e.id===this.state.selectedTodoListId)return e}}},{key:"getTodoId",value:function(t){this.setState({mode:"read",selectedTodoListId:Number(t)})}},{key:"getWelcome",value:function(){this.setState({mode:"welcome"})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:this.getWelcome.bind(this)}),this.getReadTodo(),Object(h.jsx)(j,{data:this.state.todoList,onChangePage:this.getTodoId.bind(this)}),Object(h.jsx)(v,{onChangeMode:this.deleteTodo.bind(this)})]})}}]),i}(s.Component),x=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,a=e.getTTFB;i(t),s(t),n(t),c(t),a(t)}))};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.e228df35.chunk.js.map