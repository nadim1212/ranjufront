(this.webpackJsonpBanglarBazar=this.webpackJsonpBanglarBazar||[]).push([[30],{131:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var a=n(2),r=a.isValidElement;function o(t,e){return function(t,e,n){return r(t)?a.cloneElement(t,"function"===typeof n?n():n):e}(t,t,e)}},1382:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(1),i=n(44),c=n(20),s=n(2),l=n.n(s),u=n(53),d=n(51),f=n(345),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},p=n(49),v=function(t,e){return s.createElement(p.a,Object.assign({},t,{ref:e,icon:m}))};v.displayName="MailOutlined";var g=s.forwardRef(v),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"},b=function(t,e){return s.createElement(p.a,Object.assign({},t,{ref:e,icon:h}))};b.displayName="GoogleOutlined";var E=s.forwardRef(b),y=n(35),O=n(43),k=n(54);e.default=function(t){var e=t.history,n=Object(s.useState)(""),a=Object(c.a)(n,2),m=a[0],p=a[1],v=Object(s.useState)(""),h=Object(c.a)(v,2),b=h[0],w=h[1],N=Object(s.useState)(!1),x=Object(c.a)(N,2),S=x[0],T=x[1],j=Object(y.c)((function(t){return Object(i.a)({},t)})).user;Object(s.useEffect)((function(){e.location.state||j&&j.token&&e.push("/")}),[j,e]);var C=Object(y.b)(),A=function(t){var n=e.location.state;n?e.push(n.from):"admin"===t.data.role?e.push("/admin/dashboard"):e.push("/user/history")},L=function(){var t=Object(o.a)(r.a.mark((function t(e){var n,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),T(!0),t.prev=2,t.next=5,u.a.signInWithEmailAndPassword(m,b);case 5:return n=t.sent,a=n.user,t.next=9,a.getIdTokenResult();case 9:o=t.sent,Object(k.a)(o.token).then((function(t){C({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:o.token,role:t.data.role,_id:t.data._id}}),A(t)})).catch((function(t){return console.log(t)})),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0),d.b.error(t.t0.message),T(!1);case 18:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u.a.signInWithPopup(u.b).then(function(){var t=Object(o.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.user,t.next=3,n.getIdTokenResult();case 3:a=t.sent,Object(k.a)(a.token).then((function(t){C({type:"LOGGED_IN_USER",payload:{name:t.data.name,email:t.data.email,token:a.token,role:t.data.role,_id:t.data._id}}),A(t)})).catch((function(t){return console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),d.b.error(t.message)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"container p-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},S?l.a.createElement("h4",{className:"text-danger"},"Loading..."):l.a.createElement("h4",null,"Login"),l.a.createElement("form",{onSubmit:L},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",value:m,onChange:function(t){return p(t.target.value)},placeholder:"Your email",autoFocus:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control",value:b,onChange:function(t){return w(t.target.value)},placeholder:"Your password"})),l.a.createElement("br",null),l.a.createElement(f.a,{onClick:L,type:"primary",className:"mb-3",block:!0,shape:"round",icon:l.a.createElement(g,null),size:"large",disabled:!m||b.length<6},"Login with Email/Password")),l.a.createElement(f.a,{onClick:P,type:"danger",className:"mb-3",block:!0,shape:"round",icon:l.a.createElement(E,null),size:"large"},"Login with Google"),l.a.createElement(O.b,{to:"/register",className:"float-left text-success"},"Register Here"),l.a.createElement(O.b,{to:"/forgot/password",className:"float-right text-danger"},"Forgot Password"))))}},195:function(t,e,n){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(a=n(196))&&a.__esModule?a:{default:a};e.default=r,t.exports=r},196:function(t,e,n){"use strict";var a=n(123),r=n(124);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(2)),i=a(n(197)),c=a(n(125)),s=function(t,e){return o.createElement(c.default,Object.assign({},t,{ref:e,icon:i.default}))};s.displayName="LoadingOutlined";var l=o.forwardRef(s);e.default=l},197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},198:function(t,e,n){"use strict";var a={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},o=[],i=[];function c(t,e,n){t.addEventListener(e,n,!1)}function s(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var a in e)if(e.hasOwnProperty(a)){var r=e[a];for(var o in r)if(o in t){n.push(r[o]);break}}}"AnimationEvent"in window||(delete a.animationstart.animation,delete r.animationend.animation),"TransitionEvent"in window||(delete a.transitionstart.transition,delete r.transitionend.transition),e(a,o),e(r,i)}();var l={startEvents:o,addStartEventListener:function(t,e){0!==o.length?o.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==o.length&&o.forEach((function(n){s(t,n,e)}))},endEvents:i,addEndEventListener:function(t,e){0!==i.length?i.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==i.length&&i.forEach((function(n){s(t,n,e)}))}};e.a=l},264:function(t,e,n){"use strict";n.d(e,"a",(function(){return et}));var a,r=n(114),o=n.n(r),i=n(116),c=n.n(i),s=n(132),l=n.n(s),u=n(135),d=n.n(u),f=n(2),m=n(25),p=n.n(m),v=n(134),g=n(735),h=n(136),b=n.n(h),E=function t(e){return b()(this,t),new Error("unreachable case: ".concat(JSON.stringify(e)))},y=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},O=function(t){return f.createElement(g.a,null,(function(e){var n,a=e.getPrefixCls,r=e.direction,i=t.prefixCls,s=t.size,l=t.className,u=y(t,["prefixCls","size","className"]),d=a("btn-group",i),m="";switch(s){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new E(s))}var v=p()(d,(n={},c()(n,"".concat(d,"-").concat(m),m),c()(n,"".concat(d,"-rtl"),"rtl"===r),n),l);return f.createElement("div",o()({},u,{className:v}))}))},k=n(143),w=n.n(k),N=n(228),x=n.n(N),S=n(144),T=n.n(S),j=n(145),C=n.n(j),A=n(22),L=n(198),P=n(142),M=n.n(P),z=0,_={};function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=z++,a=e;function r(){(a-=1)<=0?(t(),delete _[n]):_[n]=M()(r)}return _[n]=M()(r),n}function W(t){return!t||null===t.offsetParent}function B(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}I.cancel=function(t){void 0!==t&&(M.a.cancel(_[t]),delete _[t])},I.ids=_;var R=function(t){T()(n,t);var e=C()(n);function n(){var t;return b()(this,n),(t=e.apply(this,arguments)).animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){if(!(!e||W(e)||e.className.indexOf("-leave")>=0)){var r=t.props.insertExtraNode;t.extraNode=document.createElement("div");var o=x()(t).extraNode,i=t.context.getPrefixCls;o.className="".concat(i(""),"-click-animating-node");var c=t.getAttributeName();e.setAttribute(c,"true"),a=a||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&B(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(a.nonce=t.csp.nonce),o.style.borderColor=n,a.innerHTML="\n      [".concat(i(""),"-click-animating-without-extra-node='true']::after, .").concat(i(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),document.body.contains(a)||document.body.appendChild(a)),r&&e.appendChild(o),L.a.addStartEventListener(e,t.onTransitionStart),L.a.addEndEventListener(e,t.onTransitionEnd)}},t.onTransitionStart=function(e){if(!t.destroyed){var n=Object(A.findDOMNode)(x()(t));e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!W(n.target)){t.resetEffect(e);var a=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,a)}),0),I.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=I((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,a=t.props.children;return t.csp=n,a},t}return w()(n,[{key:"componentDidMount",value:function(){var t=Object(A.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),a&&(a.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),L.a.removeStartEventListener(t,this.onTransitionStart),L.a.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return f.createElement(g.a,null,this.renderWave)}}]),n}(f.Component);R.contextType=g.b;var G=n(146),V=n(157),D=n(165),H=n(226),U=n(195),J=n.n(U),F=function(){return{width:0,opacity:0,transform:"scale(0)"}},Y=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}};function $(t){var e=t.prefixCls,n=!!t.loading;return t.existIcon?f.createElement("span",{className:"".concat(e,"-loading-icon")},f.createElement(J.a,null)):f.createElement(H.b,{visible:n,motionName:"".concat(e,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:F,onAppearActive:Y,onEnterStart:F,onEnterActive:Y,onLeaveStart:Y,onLeaveActive:F},(function(t,n){var a=t.className,r=t.style;return f.createElement("span",{className:"".concat(e,"-loading-icon"),style:r,ref:n},f.createElement(J.a,{className:p()(a)}))}))}var q=n(131),K=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},Q=/^[\u4e00-\u9fa5]{2}$/,X=Q.test.bind(Q);function Z(t){return"text"===t||"link"===t}function tt(t,e){var n=!1,a=[];return f.Children.forEach(t,(function(t){var e=d()(t),r="string"===e||"number"===e;if(n&&r){var o=a.length-1,i=a[o];a[o]="".concat(i).concat(t)}else a.push(t);n=r})),f.Children.map(a,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!==typeof t&&"number"!==typeof t&&"string"===typeof t.type&&X(t.props.children)?Object(q.a)(t,{children:t.props.children.split("").join(n)}):"string"===typeof t?(X(t)&&(t=t.split("").join(n)),f.createElement("span",null,t)):t}}(t,e)}))}Object(G.a)("default","primary","ghost","dashed","link","text"),Object(G.a)("circle","circle-outline","round"),Object(G.a)("submit","button","reset");function et(t){return"danger"===t?{danger:!0}:{type:t}}var nt=function(t,e){var n,a,r=t.loading,i=t.prefixCls,s=t.type,u=t.danger,m=t.shape,h=t.size,b=t.className,E=t.children,y=t.icon,O=t.ghost,k=t.block,w=K(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block"]),N=f.useContext(D.a),x=f.useState(!!r),S=l()(x,2),T=S[0],j=S[1],C=f.useState(!1),A=l()(C,2),L=A[0],P=A[1],M=f.useContext(g.b),z=M.getPrefixCls,_=M.autoInsertSpaceInButton,I=M.direction,W=e||f.createRef(),B=f.useRef(),G=function(){return 1===f.Children.count(E)&&!y&&!Z(s)};a="object"===d()(r)&&r.delay?r.delay||!0:!!r,f.useEffect((function(){clearTimeout(B.current),"number"===typeof a?B.current=window.setTimeout((function(){j(a)}),a):j(a)}),[a]),f.useEffect((function(){!function(){if(W&&W.current&&!1!==_){var t=W.current.textContent;G()&&X(t)?L||P(!0):L&&P(!1)}}()}),[W]);var H=function(e){var n=t.onClick;T||n&&n(e)};Object(V.a)(!("string"===typeof y&&y.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y,"` at https://ant.design/components/icon")),Object(V.a)(!(O&&Z(s)),"Button","`link` or `text` button can't be a `ghost` button.");var U=z("btn",i),J=!1!==_,F="";switch(h||N){case"large":F="lg";break;case"small":F="sm"}var Y=T?"loading":y,q=p()(U,b,(n={},c()(n,"".concat(U,"-").concat(s),s),c()(n,"".concat(U,"-").concat(m),m),c()(n,"".concat(U,"-").concat(F),F),c()(n,"".concat(U,"-icon-only"),!E&&0!==E&&Y),c()(n,"".concat(U,"-background-ghost"),O&&!Z(s)),c()(n,"".concat(U,"-loading"),T),c()(n,"".concat(U,"-two-chinese-chars"),L&&J),c()(n,"".concat(U,"-block"),k),c()(n,"".concat(U,"-dangerous"),!!u),c()(n,"".concat(U,"-rtl"),"rtl"===I),n)),Q=y&&!T?y:f.createElement($,{existIcon:!!y,prefixCls:U,loading:!!T}),et=E||0===E?tt(E,G()&&J):null,nt=Object(v.a)(w,["htmlType","loading"]);if(void 0!==nt.href)return f.createElement("a",o()({},nt,{className:q,onClick:H,ref:W}),Q,et);var at=w,rt=at.htmlType,ot=K(at,["htmlType"]),it=f.createElement("button",o()({},Object(v.a)(ot,["loading"]),{type:rt,className:q,onClick:H,ref:W}),Q,et);return Z(s)?it:f.createElement(R,null,it)},at=f.forwardRef(nt);at.displayName="Button",at.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},at.Group=O,at.__ANT_BUTTON=!0;e.b=at},345:function(t,e,n){"use strict";var a=n(264);e.a=a.b}}]);
//# sourceMappingURL=30.96efab6f.chunk.js.map