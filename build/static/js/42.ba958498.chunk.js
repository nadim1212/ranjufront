(this.webpackJsonpBanglarBazar=this.webpackJsonpBanglarBazar||[]).push([[42],{1355:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),s=a(44),o=a(20),u=a(2),l=a.n(u),i=a(53),m=a(51),f=a(35);t.default=function(e){var t=e.history,a=Object(u.useState)(""),n=Object(o.a)(a,2),p=n[0],b=n[1],d=Object(u.useState)(!1),h=Object(o.a)(d,2),O=h[0],g=h[1],v=Object(f.c)((function(e){return Object(s.a)({},e)})).user;Object(u.useEffect)((function(){v&&v.token&&t.push("/")}),[v,t]);var E=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),a={url:"https://ranjuclient.aliitltd.org/login",handleCodeInApp:!0},e.next=5,i.a.sendPasswordResetEmail(p,a).then((function(){b(""),g(!1),m.b.success("Check your email for password reset link")})).catch((function(e){g(!1),m.b.error(e.message),console.log("ERROR MSG IN FORGOT PASSWORD",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container col-md-6 offset-md-3 p-5"},O?l.a.createElement("h4",{className:"text-danger"},"Loading"):l.a.createElement("h4",null,"Forgot Password"),l.a.createElement("form",{onSubmit:E},l.a.createElement("input",{type:"email",className:"form-control",value:p,onChange:function(e){return b(e.target.value)},placeholder:"Type your email",autoFocus:!0}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-raised",disabled:!p},"Submit")))}}}]);
//# sourceMappingURL=42.ba958498.chunk.js.map