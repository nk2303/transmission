(this["webpackJsonptransmission-react"]=this["webpackJsonptransmission-react"]||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=(n(27),n(28),n(29),n(9)),u=n(4),i=n(10),s="https://transmission-backend.herokuapp.com/api/v1",p={createPage:function(e,t){var n={page:{url_key:e,content:t}};return fetch("".concat(s,"/pages"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},getSharedPage:function(e){return console.log("GETSHAREDPAGE METHOD RUN"),fetch("".concat(s,"/k/").concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))},getUrlKeyList:function(){return fetch("".concat(s,"/pages"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))},updatePage:function(e,t){console.log("UPDATEDPAGE METHOD RUN");var n={page:{content:t}};return console.log(e),fetch("".concat(s,"/k/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},deletePage:function(e){return fetch("".concat(s,"/pages/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))}},h=function(e){return r.a.createElement(l.b,{to:e.url_key,className:"btn btn-dark"}," Create a Page ")},m=n(11),f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!1),s=Object(i.a)(u,2),p=s[0],h=s[1];return r.a.createElement(m.a,{className:"url-form",onSubmit:function(t){t.preventDefault(),t.stopPropagation(),o(t.target.value),-1!==e.urlKeyList.indexOf(t.target.value)?h(!0):h(!1)}},r.a.createElement(m.a.Control,{type:"text",placeholder:"Type your 4-character key...",className:""===c?"":p?"is-valid":p?void 0:"is-invalid",onChange:function(t){o(t.target.value),-1!==e.urlKeyList.indexOf(t.target.value)?h(!0):h(!1)},value:c}),p?null:r.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter correct Url Key"),p?r.a.createElement(l.b,{to:c,className:"btn btn-success go-url"}," Go "):null)},b=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),u=l[0],s=l[1];Object(a.useEffect)((function(){m(),b()}),[]);var m=function(){for(var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],t="",a=0;a<=3;a++){t+=e[Math.floor(Math.random()*e.length)]}return p.createPage(t,"").then((function(e){return c(e.page.url_key)})),n},b=function(){p.getUrlKeyList().then((function(e){return s(e)}))};return r.a.createElement("div",{className:"homepage"},r.a.createElement("h1",null,"Share text in real-time"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"An online tool for people to quickly share texts between browsers with the same URL"),r.a.createElement("p",null,"Click below button to start"),""===n?null:r.a.createElement(h,{url_key:n}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("br",null),"Or enter your URL key to go to an existing page",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f,{urlKeyList:u}))},g=function(e){e.cableApp,e.getPageData,e.updateApp;var t=Object(u.e)().url_key;return Object(a.useEffect)((function(){e.cableApp.page=e.cableApp.cable.subscriptions.create({channel:"PagesChannel",page:t},{received:function(t){e.updateApp(t)}})}),[]),r.a.createElement("div",null)},E=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(u.e)().url_key;e.cableApp;Object(a.useEffect)((function(){p.getSharedPage(l).then((function(e){return o(e.content)}))}),[]);return r.a.createElement(m.a,{className:"shared-text"},r.a.createElement(m.a.Label,null,r.a.createElement("h4",null,"Key: ",l)),r.a.createElement(m.a.Control,{as:"textarea",rows:"30",placeholder:"Write or paste text here. Anyone you share with will see your text as it is typed...",onChange:function(e){p.updatePage(l,e.target.value).then((function(e){return o(e.content)})).catch((function(e){return console.log("catch err here",e)})),o(e.target.value)},value:c}),r.a.createElement(g,{cableApp:e.cableApp,getPageData:p.getSharedPage,updatePage:p.updatePage}))},d=function(){return r.a.createElement("nav",{className:"navbar"},"Transmission")},y=function(e){e.cableApp;return console.log(e.cableApp),r.a.createElement(l.a,null,r.a.createElement(d,null),r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(b,e)}}),r.a.createElement(u.a,{exact:!0,path:"/:url_key",render:function(t){return r.a.createElement(E,Object.assign({},t,{cableApp:e.cableApp}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(21),j=n.n(v),A={};A.cable=j.a.createConsumer("ws//localhost:3000/cable"),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,{cableApp:A})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.46edb0c8.chunk.js.map