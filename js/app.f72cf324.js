(function(t){function e(e){for(var n,s,l=e[0],a=e[1],c=e[2],u=0,f=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/TODO-Vue-App/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"0be4":function(t,e,o){},2295:function(t,e,o){},"555a":function(t,e,o){t.exports=o.p+"img/icon.c99e3305.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"todoapp",attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("img",{attrs:{src:o("555a"),alt:"todo logo"}}),n("h1",[t._v("todos")]),n("AddTodo",{on:{"add-todo":t.addTodo}})],1),n("section",{staticClass:"main"},[n("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"}}),n("label",{attrs:{for:"toggle-all"}},[t._v("Mark all as complete")]),t.filterTodos.length?n("TodoList",{attrs:{todos:t.filterTodos},on:{"remove-todo":t.removeTodo,"completed-todo":t.completedTodo}}):t._e()],1),0!==this.todos.length?n("footer",{staticClass:"footer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"filters",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?o:o[0]}}},[n("option",{attrs:{value:"all"}},[t._v("All")]),n("option",{attrs:{value:"active"}},[t._v("Active")]),n("option",{attrs:{value:"completed"}},[t._v("Completed")])]),n("span",{staticClass:"todo-count"},[t._v("Items: "),n("strong",[t._v(t._s(this.todos.length))])]),n("button",{staticClass:"clear-completed",staticStyle:{display:"none"}},[t._v("Clear completed")])]):t._e()])},i=[],s=(o("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todo-list"},t._l(t.todos,(function(e,n){return o("TodoItem",{key:e.id,attrs:{todo:e,index:n},on:{"remove-todo":t.removeTodo,"completed-todo":t.completedTodo}})})),1)}),l=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo",class:{completed:t.todo.completed}},[o("div",{staticClass:"view"},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:function(e){return t.$emit("completed-todo",t.todo.id)}}}),o("label",[t._v(t._s(t.todo.title))]),o("button",{staticClass:"destroy",attrs:{title:"Delete"},on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}})])])},c=[],d={props:{todo:{type:Object,required:!0},index:""},filters:{uppercase:function(t){return t.toUpperCase()}}},u=d,f=(o("f18f"),o("2877")),p=Object(f["a"])(u,a,c,!1,null,null,null),m=p.exports,v={props:["todos"],components:{TodoItem:m},methods:{removeTodo:function(t){this.$emit("remove-todo",t)},completedTodo:function(t){this.$emit("completed-todo",t)}}},h=v,g=(o("5ff4"),Object(f["a"])(h,s,l,!1,null,null,null)),b=g.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"new-todo",attrs:{type:"text",autofocus:"autofocus",autocomplete:"off",placeholder:"What needs to be done?"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])},y=[],T={data:function(){return{title:""}},methods:{onSubmit:function(){if(this.title.trim()){var t={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",t),this.title=""}}}},O=T,x=(o("574e"),Object(f["a"])(O,_,y,!1,null,null,null)),C=x.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lds-dual-ring"})},S=[],j=(o("5b73"),{}),$=Object(f["a"])(j,w,S,!1,null,"66f9e9b9",null),k=$.exports,P={name:"app",data:function(){return{todos:[],cash:[],loading:!0,filter:"all",server:"remote"}},mounted:function(){if(null!==localStorage.getItem("vue-app-todos")){var t=localStorage.getItem("vue-app-todos");this.todos=JSON.parse(t)}console.dir(localStorage)},computed:{filterTodos:function(){return"all"===this.filter?this.todos:"completed"===this.filter?this.todos.filter((function(t){return t.completed})):"active"===this.filter?this.todos.filter((function(t){return!t.completed})):void 0},switchServer:function(){return"remote"===this.server?this.todos:"local"===this.server?(this.loading=!1,console.log(this.cash),this.cash):void 0}},methods:{removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.saveTodos()},addTodo:function(t){this.todos.push(t),this.saveTodos()},completedTodo:function(t){this.todos.forEach((function(e){if(e.id===t)return e.completed=!e.completed})),this.saveTodos()},saveTodos:function(){var t=JSON.stringify(this.todos);localStorage.setItem("vue-app-todos",t),console.log(localStorage)}},components:{TodoList:b,AddTodo:C,Loader:k}},A=P,E=(o("034f"),Object(f["a"])(A,r,i,!1,null,null,null)),I=E.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"574e":function(t,e,o){"use strict";var n=o("b62d"),r=o.n(n);r.a},"5b73":function(t,e,o){"use strict";var n=o("2295"),r=o.n(n);r.a},"5ff4":function(t,e,o){"use strict";var n=o("aca9"),r=o.n(n);r.a},"64a9":function(t,e,o){},aca9:function(t,e,o){},b62d:function(t,e,o){},f18f:function(t,e,o){"use strict";var n=o("0be4"),r=o.n(n);r.a}});
//# sourceMappingURL=app.f72cf324.js.map