(this.webpackJsonpBanglarBazar=this.webpackJsonpBanglarBazar||[]).push([[43],{1352:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),s=a(44),o=a(20),i=a(2),l=a.n(i),u=a(53),m=a(51),p=a(35);t.default=function(e){var t=e.history,a=Object(i.useState)(""),n=Object(o.a)(a,2),f=n[0],b=n[1],d=Object(p.c)((function(e){return Object(s.a)({},e)})).user;Object(i.useEffect)((function(){d&&d.token&&t.push("/")}),[d,t]);var h=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={url:"https://ranjuclient.aliitltd.org/register/complete",handleCodeInApp:!0},e.next=4,u.a.sendSignInLinkToEmail(f,a);case 4:m.b.success("Email is sent to ".concat(f,". Click the link to complete your registration.")),window.localStorage.setItem("emailForRegistration",f),b("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container p-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("h4",null,"Register"),l.a.createElement("form",{onSubmit:h},l.a.createElement("input",{type:"email",className:"form-control",value:f,onChange:function(e){return b(e.target.value)},placeholder:"Your email",autoFocus:!0}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-raised"},"Register")))))}}}]);
//# sourceMappingURL=43.9cfdc074.chunk.js.map