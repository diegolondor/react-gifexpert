(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],j=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a&&(e((function(t){return[a].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){j(t.target.value)}})})},o=n(6),d=n.n(o),l=n(8),p=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=dFhXcjMygpZYcZG7rku2JMuLrCg5Zhgp&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n).then((function(t){return t.json()}));case 3:return r=t.sent,c=r.data,a=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.img;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__fast",children:[Object(u.jsx)("img",{src:e.url,alt:e.title}),Object(u.jsx)("p",{children:e.title})]})},b=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:c.map((function(t){return Object(u.jsx)(f,{img:t},t.id)}))})})]})},h=function(){var t=Object(r.useState)(["Dragon Ball Z"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(b,{category:t},t)}))})]})};n(16);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.12e22099.chunk.js.map