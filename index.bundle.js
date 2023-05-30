(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>a});var t=e(537),o=e.n(t),A=e(645),i=e.n(A)()(o());i.push([r.id,'*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bgcolor: #007fff;\r\n  --headerh1-color: #fff;\r\n  --sidebar-bgcolor: #fff;\r\n  --projectlist-bgcolor: #f1faee;\r\n  --todolist-bgcolor: #00b4d8;\r\n  --content-bgcolor: #caf0f8;\r\n  --btnremove-redcolor: #e63946;\r\n  --light-gray: #dee2e6;\r\n  --white: #f1faee;\r\n  --blue-dark: #0077b6;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 0.4fr 0.9fr;\r\n  grid-template-rows: 0.2fr 2fr;\r\n  height: 100%;\r\n  background-color: var(--white);\r\n}\r\n\r\n.main-header {\r\n  grid-column: 1/-1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--header-bgcolor);\r\n}\r\n\r\n.main-header > h1 {\r\n  color: var(--headerh1-color);\r\n  font-weight: 400;\r\n}\r\n\r\n.project-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--projectlist-bgcolor);\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  border-right: 2px solid var(--todolist-bgcolor);\r\n}\r\n\r\n.aside-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.aside-title > p {\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 20%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.add-project > input {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  width: 80%;\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > input::placeholder {\r\n  color: #fff;\r\n}\r\n.add-project > button {\r\n  border: none;\r\n  border: 1px solid #4cc9f0;\r\n  padding: 0.5rem;\r\n  width: 65%;\r\n  border-radius: 0.5rem;\r\n  color: #4cc9f0;\r\n  background-color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > button:active {\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n}\r\n\r\n.title---projects {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: auto;\r\n  border: 1px solid #4cc9f0;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project-element {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  border: 1px solid #ffbe0b;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project-element > p {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.btn-remove-project {\r\n  border: 1px solid var(--btnremove-redcolor);\r\n  color: var(--btnremove-redcolor);\r\n  padding: 0.3rem;\r\n  border-radius: 0.5rem;\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-remove-project:hover {\r\n  background-color: var(--btnremove-redcolor);\r\n  color: #fff;\r\n}\r\n\r\n/* .todo-list {\r\n  position: relative;\r\n  background-color: var(--white);\r\n} */\r\n\r\n.project-info {\r\n  display: flex;\r\n  height: 10%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  border-bottom: 3px solid var(--blue-dark);\r\n}\r\n\r\n.project-info .span-project {\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-info .project-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--blue-dark);\r\n}\r\n\r\n.add-todo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--white);\r\n  border: none;\r\n  background-color: var(--white);\r\n  outline: none;\r\n  font-size: 3.5rem;\r\n  color: orange;\r\n}\r\n\r\n.addTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 95%;\r\n  width: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  background-color: #f1faee;\r\n}\r\n\r\n.addTaskForm div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 25%;\r\n}\r\n\r\n.inputs > label {\r\n  align-self: flex-start;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputs {\r\n  gap: 1rem;\r\n}\r\n\r\n.new-task {\r\n  font-size: 1.5rem;\r\n  color: var(--header-bgcolor);\r\n}\r\n\r\n#title,\r\n#date,\r\n#priority,\r\n#description {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--light-gray);\r\n}\r\n\r\n#description {\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\n.btn-submit {\r\n  border: 1px solid var(--header-bgcolor);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  color: var(--header-bgcolor);\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background-color: var(--header-bgcolor);\r\n  color: #fff;\r\n}\r\n\r\n.btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  color: var(--btnremove-redcolor);\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 100%;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.addTaskForm .btn-close {\r\n  position: absolute;\r\n  right: 0.2rem;\r\n  top: 0.2rem;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90%;\r\n  padding: 2rem;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  overflow: scroll;\r\n  flex-grow: 0;\r\n}\r\n\r\n.todo-element {\r\n  width: 100%;\r\n  background-color: var(--white);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid gray;\r\n  padding: 1rem;\r\n}\r\n\r\n.title-desc .title {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.date-and-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.btn-edit {\r\n  padding: 0.3rem;\r\n  border: 1px solid var(--todolist-bgcolor);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.btn-remove-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--btnremove-redcolor);\r\n  color: var(--white);\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  font-size: 2rem;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.visibility {\r\n  display: none;\r\n}\r\n\r\n.priority-circle {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-low {\r\n  background-color: #affc41;\r\n}\r\n\r\n.priority-medium {\r\n  background-color: #ffc300;\r\n}\r\n\r\n.priority-high {\r\n  background-color: #ef233c;\r\n}\r\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:['*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bgcolor: #007fff;\r\n  --headerh1-color: #fff;\r\n  --sidebar-bgcolor: #fff;\r\n  --projectlist-bgcolor: #f1faee;\r\n  --todolist-bgcolor: #00b4d8;\r\n  --content-bgcolor: #caf0f8;\r\n  --btnremove-redcolor: #e63946;\r\n  --light-gray: #dee2e6;\r\n  --white: #f1faee;\r\n  --blue-dark: #0077b6;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 0.4fr 0.9fr;\r\n  grid-template-rows: 0.2fr 2fr;\r\n  height: 100%;\r\n  background-color: var(--white);\r\n}\r\n\r\n.main-header {\r\n  grid-column: 1/-1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--header-bgcolor);\r\n}\r\n\r\n.main-header > h1 {\r\n  color: var(--headerh1-color);\r\n  font-weight: 400;\r\n}\r\n\r\n.project-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--projectlist-bgcolor);\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  border-right: 2px solid var(--todolist-bgcolor);\r\n}\r\n\r\n.aside-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.aside-title > p {\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 20%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.add-project > input {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  width: 80%;\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > input::placeholder {\r\n  color: #fff;\r\n}\r\n.add-project > button {\r\n  border: none;\r\n  border: 1px solid #4cc9f0;\r\n  padding: 0.5rem;\r\n  width: 65%;\r\n  border-radius: 0.5rem;\r\n  color: #4cc9f0;\r\n  background-color: #fff;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.add-project > button:active {\r\n  background-color: #4cc9f0;\r\n  color: #fff;\r\n}\r\n\r\n.title---projects {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects {\r\n  height: 250px;\r\n  width: 100%;\r\n  overflow: auto;\r\n  border: 1px solid #4cc9f0;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project-element {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  justify-content: space-between;\r\n  padding: 1rem;\r\n  border: 1px solid #ffbe0b;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project-element > p {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.btn-remove-project {\r\n  border: 1px solid var(--btnremove-redcolor);\r\n  color: var(--btnremove-redcolor);\r\n  padding: 0.3rem;\r\n  border-radius: 0.5rem;\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-remove-project:hover {\r\n  background-color: var(--btnremove-redcolor);\r\n  color: #fff;\r\n}\r\n\r\n/* .todo-list {\r\n  position: relative;\r\n  background-color: var(--white);\r\n} */\r\n\r\n.project-info {\r\n  display: flex;\r\n  height: 10%;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  border-bottom: 3px solid var(--blue-dark);\r\n}\r\n\r\n.project-info .span-project {\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-info .project-name {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: var(--blue-dark);\r\n}\r\n\r\n.add-todo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--white);\r\n  border: none;\r\n  background-color: var(--white);\r\n  outline: none;\r\n  font-size: 3.5rem;\r\n  color: orange;\r\n}\r\n\r\n.addTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 95%;\r\n  width: 40%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  background-color: #f1faee;\r\n}\r\n\r\n.addTaskForm div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 25%;\r\n}\r\n\r\n.inputs > label {\r\n  align-self: flex-start;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.inputs {\r\n  gap: 1rem;\r\n}\r\n\r\n.new-task {\r\n  font-size: 1.5rem;\r\n  color: var(--header-bgcolor);\r\n}\r\n\r\n#title,\r\n#date,\r\n#priority,\r\n#description {\r\n  width: 100%;\r\n  padding: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n  background-color: var(--light-gray);\r\n}\r\n\r\n#description {\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\n.btn-submit {\r\n  border: 1px solid var(--header-bgcolor);\r\n  padding: 1rem;\r\n  font-size: 1rem;\r\n  color: var(--header-bgcolor);\r\n  transition: background-color 100ms ease-out, color 100ms ease-out;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background-color: var(--header-bgcolor);\r\n  color: #fff;\r\n}\r\n\r\n.btn-close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  color: var(--btnremove-redcolor);\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 100%;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.addTaskForm .btn-close {\r\n  position: absolute;\r\n  right: 0.2rem;\r\n  top: 0.2rem;\r\n}\r\n\r\n.todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 90%;\r\n  padding: 2rem;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  overflow: scroll;\r\n  flex-grow: 0;\r\n}\r\n\r\n.todo-element {\r\n  width: 100%;\r\n  background-color: var(--white);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid gray;\r\n  padding: 1rem;\r\n}\r\n\r\n.title-desc .title {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.date-and-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.btn-edit {\r\n  padding: 0.3rem;\r\n  border: 1px solid var(--todolist-bgcolor);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.btn-remove-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--btnremove-redcolor);\r\n  color: var(--white);\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  font-size: 2rem;\r\n  transform: rotate(45deg);\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.visibility {\r\n  display: none;\r\n}\r\n\r\n.priority-circle {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-low {\r\n  background-color: #affc41;\r\n}\r\n\r\n.priority-medium {\r\n  background-color: #ffc300;\r\n}\r\n\r\n.priority-high {\r\n  background-color: #ef233c;\r\n}\r\n'],sourceRoot:""}]);const a=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,A){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);t&&i[s[0]]||(void 0!==A&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=A),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(o," */");return[n].concat([A]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var A={},i=[],a=0;a<r.length;a++){var d=r[a],c=t.base?d[0]+t.base:d[0],s=A[c]||0,l="".concat(c," ").concat(s);A[c]=s+1;var f=e(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)n[f].references++,n[f].updater(u);else{var m=o(u,t);t.byIndex=a,n.splice(a,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var A=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<A.length;i++){var a=e(A[i]);n[a].references--}for(var d=t(r,o),c=0;c<A.length;c++){var s=e(A[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}A=d}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var A=n[t]={id:t,exports:{}};return r[t](A,A.exports,e),A.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),A=e(569),i=e.n(A),a=e(565),d=e.n(a),c=e(216),s=e.n(c),l=e(589),f=e.n(l),u=e(426),m={};m.styleTagTransform=f(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;let p=[],E=0;class C{constructor(r){this.name=r,this.todoList=[],this.id=E++}addTodo(r){this.todoList.push(r)}removeTodo(r){this.todoList.splice(r,1)}}function b(r){const n=new C(r);p.push(n)}class B{constructor(r,n,e,t){this.title=r,this.dueDate=n,this.priority=e,this.description=t}}function g(r){const n=p.find((n=>n.id===r));if(n){const r=document.querySelector(".todo-list");r.innerHTML="",n.todoList.forEach(((e,t)=>{const o=document.createElement("div");o.classList.add("todo-element"),o.dataset.todoIndex=t,o.innerHTML=`\n        <div class="title-desc">\n          <div class="priority-circle"></div>\n          <p class="title">${e.title}</p>\n          <p class="description">${e.description}</p>\n        </div>\n        <div class="date-and-btns">\n          <p>${e.dueDate}</p>\n          <button class="btn-edit" data-project-id="${n.id}" data-todo-index="${t}">Edit</button>\n          <button class="btn-remove-task" data-project-id="${n.id}" data-todo-index="${t}">+</button>\n        </div>\n      `,function(r,n){switch(r.priority){case"low":n.classList.add("priority-low");break;case"medium":n.classList.add("priority-medium");break;case"high":n.classList.add("priority-high")}}(e,o.querySelector(".priority-circle")),r.appendChild(o)}))}}const h=document.querySelector(".projects"),v=document.querySelector(".todo-list"),y=document.querySelector(".project-name");function x(){h.innerHTML="",p.forEach((r=>{const n=document.createElement("div");n.classList.add("project-element"),n.dataset.projectId=r.id,n.innerHTML=`\n        <p class="project-name" data-project-id="${r.id}">${r.name}</p>\n        <button class="btn-remove-project" data-project-id="${r.id}">Remove</button>\n      `,h.appendChild(n)}))}function j(r){const n=p.find((n=>n.id===r));n&&(y.textContent=n.name,v.innerHTML="",g(r))}!function(){const r=document.querySelector(".add-project"),n=document.querySelector(".add-todo"),e=document.querySelector(".projects"),t=document.querySelector(".todo-list"),o=document.querySelector(".main-container"),A=document.querySelector(".addTaskForm");r.addEventListener("submit",(n=>{n.preventDefault(),b(document.querySelector("#project-name").value),x(),r.reset()})),e.addEventListener("click",(r=>{if(r.target.matches(".btn-remove-project"))!function(r){p=p.filter((n=>n.id!==r))}(parseInt(r.target.dataset.projectId)),x();else if(r.target.matches(".project-name")){const e=parseInt(r.target.dataset.projectId);n.dataset.projectId=e,j(e),A.classList.add("visibility")}else if(r.target.closest(".project-element")){const e=parseInt(r.target.dataset.projectId);n.dataset.projectId=e,j(e),console.log("object")}})),o.addEventListener("click",(r=>{if(r.target.closest(".add-todo")){const n=parseInt(r.target.dataset.projectId);A.dataset.projectId=n,A.classList.remove("visibility")}})),A.addEventListener("submit",(r=>{r.preventDefault();const n=parseInt(r.target.dataset.projectId);(function(r){const n=document.querySelector(".addTaskForm"),e=n.querySelector("#title"),t=n.querySelector("#date"),o=n.querySelector("#priority"),A=n.querySelector("#description");!function(r,n,e,t,o){const A=p.find((n=>n.id===r));if(A){const r=new B(n,e,t,o);A.addTodo(r)}}(r,e.value,t.value,o.value,A.value)})(n),A.classList.add("visibility"),g(n),A.reset()})),t.addEventListener("click",(r=>{if(r.target.matches(".btn-remove-task")){const n=parseInt(r.target.dataset.projectId);!function(r,n){const e=p.find((n=>n.id===r));e&&e.removeTodo(n)}(n,parseInt(r.target.dataset.todoIndex)),g(n)}}))}(),b("Default Project"),x()})()})();
//# sourceMappingURL=index.bundle.js.map