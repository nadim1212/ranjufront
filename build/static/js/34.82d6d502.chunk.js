(this.webpackJsonpBanglarBazar=this.webpackJsonpBanglarBazar||[]).push([[34],{1390:function(e,t,a){"use strict";a.r(t);var n=a(44),c=a(20),r=a(2),l=a.n(r),o=a(35),s=a(51),u=a(1274),m=a.n(u),i=a(0),E=a.n(i),p=a(1),d=a(36),b=a.n(d),f=function(){var e=Object(p.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://ranjuback.onrender.com/api","/coupons"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(E.a.mark((function e(t,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("https://ranjuback.onrender.com/api","/coupon/").concat(t),{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(E.a.mark((function e(t,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat("https://ranjuback.onrender.com/api","/coupon"),{coupon:t},{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=(a(1273),a(402)),g=a(163);t.default=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],u=t[1],i=Object(r.useState)(""),E=Object(c.a)(i,2),p=E[0],d=E[1],b=Object(r.useState)(""),x=Object(c.a)(b,2),y=x[0],j=x[1],k=Object(r.useState)(""),O=Object(c.a)(k,2),D=O[0],w=O[1],C=Object(r.useState)([]),S=Object(c.a)(C,2),A=S[0],M=S[1],B=Object(o.c)((function(e){return Object(n.a)({},e)})).user;Object(r.useEffect)((function(){P()}),[]);var P=function(){return f().then((function(e){return M(e.data)}))};return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(g.a,null)),l.a.createElement("div",{className:"col-md-10"},D?l.a.createElement("h4",{className:"text-danger"},"Loading..."):l.a.createElement("h4",null,"Coupon"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w(!0),h({name:a,expiry:p,discount:y},B.token).then((function(e){w(!1),P(),u(""),j(""),d(""),s.b.success('"'.concat(e.data.name,'" is created'))})).catch((function(e){return console.log("create coupon err",e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-muted"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return u(e.target.value)},value:a,autoFocus:!0,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-muted"},"Discount %"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return j(e.target.value)},value:y,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-muted"},"Expiry"),l.a.createElement("br",null),l.a.createElement(m.a,{className:"form-control",selected:new Date,value:p,onChange:function(e){return d(e)},required:!0})),l.a.createElement("button",{className:"btn btn-outline-primary"},"Save")),l.a.createElement("br",null),l.a.createElement("h4",null,A.length," Coupons"),l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Expiry"),l.a.createElement("th",{scope:"col"},"Discount"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,A.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,new Date(e.expiry).toLocaleDateString()),l.a.createElement("td",null,e.discount,"%"),l.a.createElement("td",null,l.a.createElement(v.a,{onClick:function(){return t=e._id,void(window.confirm("Delete?")&&(w(!0),N(t,B.token).then((function(e){P(),w(!1),s.b.error('Coupon "'.concat(e.data.name,'" deleted'))})).catch((function(e){return console.log(e)}))));var t},className:"text-danger pointer"})))})))))))}},163:function(e,t,a){"use strict";a(164);var n=a(236),c=a.n(n),r=a(238),l=a.n(r),o=a(237),s=a.n(o),u=a(240),m=a.n(u),i=a(239),E=a.n(i),p=a(43),d=a(2),b=a.n(d);t.a=function(){return b.a.createElement("div",{className:"sidebar"},b.a.createElement("hr",null),b.a.createElement("div",{className:"center"},b.a.createElement("ul",null,b.a.createElement("p",{className:"title"},"MAIN"),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/dashboard",style:{textDecoration:"none"}},b.a.createElement(c.a,{className:"icon"}),b.a.createElement("span",null,"Dashboard"))),b.a.createElement("p",{className:"title"},"Product Management"),b.a.createElement(p.b,{to:"/users",style:{textDecoration:"none"}}),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/product",style:{textDecoration:"none"}},b.a.createElement(s.a,{className:"icon"}),b.a.createElement("span",null,"Create Products"))),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/products",style:{textDecoration:"none"}},b.a.createElement(s.a,{className:"icon"}),b.a.createElement("span",null,"All Products"))),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/products",style:{textDecoration:"none"}},b.a.createElement(s.a,{className:"icon"}),b.a.createElement("span",null,"Product Stock"))),b.a.createElement("p",{className:"title"},"Category Management"),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/category",style:{textDecoration:"none"}},b.a.createElement(l.a,{className:"icon"}),b.a.createElement("span",null,"Categories"))),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/sub",style:{textDecoration:"none"}},b.a.createElement(l.a,{className:"icon"}),b.a.createElement("span",null,"Sub Categories"))),b.a.createElement("p",{className:"title"},"Coupon Management"),b.a.createElement("li",null,b.a.createElement(p.b,{to:"/admin/coupon",className:"nav-link"},b.a.createElement(l.a,{className:"icon"}),b.a.createElement("span",null,"Coupon"))),b.a.createElement("p",{className:"title"},"USER MANAGEMENT"),b.a.createElement("li",null,b.a.createElement(E.a,{className:"icon"}),b.a.createElement("span",null,"All Users")),b.a.createElement("li",null,b.a.createElement(E.a,{className:"icon"}),b.a.createElement("span",null,"Users Role")),b.a.createElement("li",null,b.a.createElement(m.a,{className:"icon"}),b.a.createElement("span",null,"Logout")))))}},164:function(e,t,a){}}]);
//# sourceMappingURL=34.82d6d502.chunk.js.map