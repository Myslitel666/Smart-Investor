import{a as N,t as H,c as Ee}from"../chunks/disclose-version.Bqb9cK0V.js";import{h as B,F as be,O as rt,a as at,a0 as lt,B as it,z as nt,M as Ne,a1 as ot,a2 as Ie,E as me,G as ee,I as st,a3 as Ue,P as ze,a4 as dt,aq as ye,Q as Te,ar as ut,as as ct,at as ft,m as vt,W as Oe,au as gt,av as ht,L as _t,aw as pt,ax as bt,C as mt,x as De,ay as yt,az as wt,$ as Xe,aA as kt,aB as Ct,a7 as We,t as xt,Z as Et,p as ce,v as fe,c as E,r as C,l as y,g as b,q as re,w as R,o as se,aC as L,aD as le}from"../chunks/runtime.CpVUGZrz.js";import{i as It,c as Re,d as He,n as Tt,a as Ot,e as q,s as de}from"../chunks/render.CIZsnjnE.js";import{o as Ce,l as Ve,p as O,i as oe,b as Xt}from"../chunks/index-client.B_h7GMVt.js";import{i as ve}from"../chunks/lifecycle.CU1eN0yS.js";import{s as ke}from"../chunks/slot.DhNTRXsw.js";import{g as Ye,d as Rt,w as qe}from"../chunks/index.XfKxseKx.js";let we=null;function St(t,e){return e}function Ft(t,e,r,a){for(var l=[],o=e.length,f=0;f<o;f++)ht(e[f].e,l,!0);var s=o>0&&l.length===0&&r!==null;if(s){var w=r.parentNode;_t(w),w.append(r),a.clear(),Y(t,e[0].prev,e[o-1].next)}pt(l,()=>{for(var n=0;n<o;n++){var _=e[n];s||(a.delete(_.k),Y(t,_.prev,_.next)),bt(_.e,!s)}})}function Pt(t,e,r,a,l,o=null){var f=t,s={flags:e,items:new Map,first:null};{var w=t;f=B?be(it(w)):w.appendChild(rt())}B&&at();var n=null,_=!1;lt(()=>{var u=r(),c=nt(u)?u:u==null?[]:Ne(u),h=c.length;if(_&&h===0)return;_=h===0;let v=!1;if(B){var m=f.data===ot;m!==(h===0)&&(f=Ie(),be(f),me(!1),v=!0)}if(B){for(var g=null,d,p=0;p<h;p++){if(ee.nodeType===8&&ee.data===st){f=ee,v=!0,me(!1);break}var x=c[p],k=a(x,p);d=Ge(ee,s,g,null,x,k,p,l,e),s.items.set(k,d),g=d}h>0&&be(Ie())}B||At(c,s,f,l,e,a),o!==null&&(h===0?n?Ue(n):n=ze(()=>o(f)):n!==null&&dt(n,()=>{n=null})),v&&me(!0)}),B&&(f=ee)}function At(t,e,r,a,l,o){var f=t.length,s=e.items,w=e.first,n=w,_,u=null,c=[],h=[],v,m,g,d;for(d=0;d<f;d+=1){if(v=t[d],m=o(v,d),g=s.get(m),g===void 0){var p=n?n.e.nodes_start:r;u=Ge(p,e,u,u===null?e.first:u.next,v,m,d,a,l),s.set(m,u),c=[],h=[],n=u.next;continue}if(Lt(g,v,d),g.e.f&ye&&Ue(g.e),g!==n){if(_!==void 0&&_.has(g)){if(c.length<h.length){var x=h[0],k;u=x.prev;var X=c[0],P=c[c.length-1];for(k=0;k<c.length;k+=1)Se(c[k],x,r);for(k=0;k<h.length;k+=1)_.delete(h[k]);Y(e,X.prev,P.next),Y(e,u,X),Y(e,P,x),n=x,u=P,d-=1,c=[],h=[]}else _.delete(g),Se(g,n,r),Y(e,g.prev,g.next),Y(e,g,u===null?e.first:u.next),Y(e,u,g),u=g;continue}for(c=[],h=[];n!==null&&n.k!==m;)n.e.f&ye||(_??(_=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;g=n}c.push(g),u=g,n=g.next}if(n!==null||_!==void 0){for(var z=_===void 0?[]:Ne(_);n!==null;)n.e.f&ye||z.push(n),n=n.next;var G=z.length;if(G>0){var Z=f===0?r:null;Ft(e,z,Z,s)}}Te.first=e.first&&e.first.e,Te.last=u&&u.e}function Lt(t,e,r,a){ut(t.v,e),t.i=r}function Ge(t,e,r,a,l,o,f,s,w){var n=we;try{var _=(w&ct)!==0,u=(w&ft)===0,c=_?u?vt(l):Oe(l):l,h=w&gt?Oe(f):f,v={i:h,v:c,k:o,a:null,e:null,prev:r,next:a};return we=v,v.e=ze(()=>s(t,c,h),B),v.e.prev=r&&r.e,v.e.next=a&&a.e,r===null?e.first=v:(r.next=v,r.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{we=n}}function Se(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,l=e?e.e.nodes_start:r,o=t.e.nodes_start;o!==a;){var f=mt(o);l.before(o),o=f}}function Y(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Bt(t,e){if(e){const r=document.body;t.autofocus=!0,De(()=>{document.activeElement===r&&t.focus()})}}let Fe=!1;function Me(){Fe||(Fe=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Ke(t){if(B){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ue(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var l=t.checked;ue(t,"checked",null),t.checked=l}}};t.__on_r=r,yt(r),Me()}}function ue(t,e,r,a){var l=t.__attributes??(t.__attributes={});B&&(l[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||l[e]!==(l[e]=r)&&(e==="loading"&&(t[wt]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Ze(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Qe(t,e,r,a,l=!1,o=!1,f=!1){var s=e||{},w=t.tagName==="OPTION";for(var n in e)n in r||(r[n]=null);a!==void 0&&(r.class=r.class?r.class+" "+a:a);var _=Ze(t),u=t.__attributes??(t.__attributes={}),c=[];for(const d in r){let p=r[d];if(w&&d==="value"&&p==null){t.value=t.__value="",s[d]=p;continue}var h=s[d];if(p!==h){s[d]=p;var v=d[0]+d[1];if(v!=="$$")if(v==="on"){const x={},k="$$"+d;let X=d.slice(2);var m=Ot(X);if(It(X)&&(X=X.slice(0,-7),x.capture=!0),!m&&h){if(p!=null)continue;t.removeEventListener(X,s[k],x),s[k]=null}if(p!=null)if(m)t[`__${X}`]=p,He([X]);else{let P=function(z){s[d].call(this,z)};e?s[k]=Re(X,t,P,x):c.push([d,p,()=>s[k]=Re(X,t,P,x)])}}else if(d==="style"&&p!=null)t.style.cssText=p+"";else if(d==="autofocus")Bt(t,!!p);else if(d==="__value"||d==="value"&&p!=null)t.value=t[d]=t.__value=p;else{var g=d;l||(g=Tt(g)),p==null&&!o?(u[d]=null,t.removeAttribute(d)):_.includes(g)&&(o||typeof p!="string")?t[g]=p:typeof p!="function"&&(B&&(g==="src"||g==="href"||g==="srcset")||ue(t,g,p))}}}return e||De(()=>{if(t.isConnected)for(const[d,p,x]of c)s[d]===p&&x()}),s}var Pe=new Map;function Ze(t){var e=Pe.get(t.nodeName);if(e)return e;Pe.set(t.nodeName,e=[]);for(var r,a=Xe(t);a.constructor.name!=="Element";){r=kt(a);for(var l in r)r[l].set&&e.push(l);a=Xe(a)}return e}function i(t,e,r,a,l){var o=t.__attributes??(t.__attributes={}),f=t.style,s="style-"+e;o[s]===r&&(!l||f.getPropertyValue(e)===r)||(o[s]=r,r==null?f.removeProperty(e):f.setProperty(e,r,""))}function Je(t,e,r,a=r){t.addEventListener(e,r);const l=t.__on_r;l?t.__on_r=()=>{l(),a()}:t.__on_r=a,Me()}function Nt(t,e,r=e){var a=Ct();Je(t,"input",()=>{var l=Ae(t)?Le(t.value):t.value;r(l),a&&l!==(l=e())&&(t.value=l??"")}),We(()=>{var l=e();if(B&&t.defaultValue!==t.value){r(t.value);return}Ae(t)&&l===Le(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}function Ut(t,e,r=e){Je(t,"change",()=>{var a=t.checked;r(a)}),e()==null&&r(!1),We(()=>{var a=e();t.checked=!!a})}function Ae(t){var e=t.type;return e==="number"||e==="range"}function Le(t){return t===""?null:+t}function te(t,e,r){var a=Et(t,e);a&&a.set&&(t[e]=r,xt(()=>{t[e]=null}))}const zt=!0,ur=Object.freeze(Object.defineProperty({__proto__:null,prerender:zt},Symbol.toStringTag,{value:"Module"})),Dt=()=>{const t=Ye(ge),e=document.body.style;e.setProperty("--Xl-background-color",t.colors.background),e.setProperty("--Xl-effectsTimeCode",t.effectsTimeCode),e.setProperty("--Xl-font-family",t.typography.font),e.setProperty("--Xl-font-size",t.typography.fontSize),e.setProperty("--Xl-font-style",t.typography.fontStyle),e.setProperty("--Xl-font-weight",t.typography.fontWeight),e.setProperty("--Xl-letter-spacing",t.typography.letterSpacing),e.setProperty("--Xl-text-color",t.colors.text.primary),e.setProperty("--Xl-fontUrl",t.typography.fontUrl),e.setProperty("--Xl-format",t.typography.format)},Wt=qe("light"),ge=Rt(Wt,t=>({action:{hover:t==="light"?"#fafafa":"#1c1c1c",selected:t==="light"?"#f5f5f5":"#2e2e2e"},border:{disabled:{color:t==="light"?"#bebebe":"#606060",width:"1px"},active:{color:t==="light"?"#959595":"#a0a0a0",width:"2px"},alegant:{color:t==="light"?"#ddd":"#484848"},borderRadius:"4px"},colors:{primary:t==="light"?"#5bb056":"#f41c1c",secondary:t==="light"?"#d06bcc":"#ff35f8",background:t==="light"?"white":"#161616",text:{primary:t==="light"?"#111":"#fff",label:t==="light"?"#b3b3b3":"#808080"}},controls:{button:{padding:"0.85rem",filter:t==="light"?"brightness(108%)":"contrast(70%)"},textField:{padding:"0.85rem"},height:"3rem",width:"15rem"},disabled:{expressed:t==="light"?"#757575":"#e0e0e0",fill:t==="light"?"#e5e5e5":"#4a4a4a",touch:t==="light"?"#efefef":"#2f2f2f"},typography:{font:"Century Gothic",fontUrl:"./fonts/century-gothic-original/century-gothic.ttf",fontSize:"16px",fontStyle:"normal",fontWeight:"100",format:"truetype",letterSpacing:"-0.02rem"},effectsTimeCode:"0.3s",themeMode:t}));var Ht=H('<div class="app"><main><!></main></div>');function Vt(t,e){ce(e,!1);const r=!0;ge.subscribe(f=>{}),Ce(()=>{Dt()}),ve();var a=Ht(),l=E(a),o=E(l);return ke(o,e,"default",{}),C(l),C(a),N(t,a),te(e,"prerender",r),fe({prerender:r})}let Be=qe(0);const je=()=>(Be.update(e=>e+1),Ye(Be));var Yt=H('<div><span class="track svelte-11xjuxv"></span> <span class="switch svelte-11xjuxv"><!></span> <input></div>');function qt(t,e){const r=Ve(e,["children","$$slots","$$events","$$legacy"]);ce(e,!1);let a=O(e,"id",12,""),l=O(e,"color",12,""),o=O(e,"isChecked",12,!1),f=O(e,"onClick",8,()=>{}),s="2rem",w="3.55rem",n="1rem",_=l()!=="";function u(){o(!o())}let c=L();ge.subscribe(x=>{y(c,x),_||l(b(c).colors.primary)}),Ce(()=>{a()||a(`switch-${je()}`)}),ve();var h=Yt();i(h,"height",s),i(h,"width",w);var v=E(h);i(v,"height",s),i(v,"--Xl-border-radius",n);var m=R(v,2);i(m,"--Xl-border-radius",n);var g=E(m);oe(g,o,x=>{var k=Ee(),X=se(k);ke(X,e,"activeIcon",{}),N(x,k)},x=>{var k=Ee(),X=se(k);ke(X,e,"disabledIcon",{}),N(x,k)}),C(m);var d=R(m,2);Ke(d);let p;C(h),re(()=>{i(v,"background-color",o()?l():b(c).disabled.fill),i(m,"transform",`translate(${o()?"1.76rem":"0.26rem"}, 0.26rem)`),i(m,"--Xl-background-color",b(c).colors.background),p=Qe(d,p,{type:"checkbox",id:a(),...r},"svelte-11xjuxv"),i(d,"height",s,void 0,!0),i(d,"width",w,void 0,!0)}),Ut(d,o),q("click",d,()=>{u(),f()()}),N(t,h),fe()}const ie={getInputValue(t){return t.target.value},getChecked(t){return t.target.checked},getElementById(t){return document.getElementById(t)}};var Gt=H('<div role="button" tabindex="0" class="input-container svelte-s66kal"><input> <label class="svelte-s66kal"> </label></div>');function ne(t,e){const r=Ve(e,["children","$$slots","$$events","$$legacy"]);ce(e,!1);let a=O(e,"id",12,""),l=O(e,"variant",8,"Outlined"),o=O(e,"value",12,""),f=O(e,"activedborderWidth",12,""),s=O(e,"backgroundColor",12,""),w=O(e,"borderColor",12,""),n=O(e,"borderRadius",12,""),_=O(e,"disabledborderWidth",12,""),u=O(e,"fontSize",12,""),c=O(e,"height",12,""),h=O(e,"label",8,"Text Field"),v=O(e,"labelColor",12,""),m=O(e,"paddingLeft",12,""),g=O(e,"paddingRight",12,""),d=O(e,"paddingTop",12,""),p=O(e,"primaryColor",12,""),x=O(e,"textColor",12,""),k=O(e,"width",12,""),X=s()!=="",P=w()!=="",z=x()!=="",G=v()!=="",Z=p()!=="",J=L(s()),T;ge.subscribe(A=>{T=A,X||s(l()==="Filled"?T.disabled.touch:T.colors.background),P||w(l()==="Filled"?T.border.active.color:T.border.disabled.color),G||v(T.colors.text.label),Z||p(T.colors.primary),z||x(T.colors.text.primary),X||y(J,l()==="Filled"?T.disabled.fill:"")}),T&&(f()||f(T.border.active.width),n()?n(l()==="Outlined"?n():`${n()} ${n()} 0 0`):n(l()==="Outlined"?T.border.borderRadius:`${T.border.borderRadius} ${T.border.borderRadius} 0 0`),c()||c(T.controls.height),_()||_(T.border.disabled.width),m()||m(l()==="Standard"?"0":T.controls.textField.padding),g()||g(T.controls.textField.padding),d()||d(l()!=="Outlined"?"1rem":"0"),k()||k(T.controls.width),u()||u(T.typography.fontSize)),Ce(()=>{a()||a(`text-field-${je()}`)});function K(){ie.getElementById(a()).classList.add("hovered")}function j(){ie.getElementById(a()).classList.remove("hovered")}function V(){const A=ie.getElementById(a());A.classList.add("focused"),A.focus()}function D(){ie.getElementById(a()).classList.remove("focused")}ve();var U=Gt(),I=E(U);Ke(I);let M;var S=R(I,2),he=E(S);return C(S),C(U),re(()=>{i(U,"width",k()),i(U,"--Xl-activeborderWidth",f()),i(U,"--Xl-background-color",s()),i(U,"--Xl-fill",b(J)),M=Qe(I,M,{autocomplete:"off",id:a(),placeholder:"fictitious",type:"text",...r},"svelte-s66kal"),i(I,"outline","none",void 0,!0),i(I,"border-radius",n(),void 0,!0),i(I,"padding-left",m(),void 0,!0),i(I,"padding-right",g(),void 0,!0),i(I,"padding-top",d(),void 0,!0),i(I,"font-size",u(),void 0,!0),i(I,"font-width","0.5rem",void 0,!0),i(I,"border-left",l()!=="Outlined"?"none":"",void 0,!0),i(I,"border-right",l()!=="Outlined"?"none":"",void 0,!0),i(I,"border-top",l()!=="Outlined"?"none":"",void 0,!0),i(I,"--Xl-border-color",w(),void 0,!0),i(I,"--Xl-color",p(),void 0,!0),i(I,"--Xl-height",c(),void 0,!0),i(I,"--Xl-disabledborderWidth",_(),void 0,!0),i(I,"--Xl-hoverBorderColor",x(),void 0,!0),i(I,"--Xl-textColor",x(),void 0,!0),ue(S,"for",a()),i(S,"position","absolute"),i(S,"margin-left",m()),i(S,"background-color",l()==="Filled"?"transparent":""),i(S,"--Xl-color",p()),i(S,"--Xl-font-size",u()),i(S,"--Xl-labelColor",v()),i(S,"--Xl-liftingHeight",l()==="Outlined"?`${c()}/2 + 0.45*var(--Xl-activeborderWidth)`:l()==="Standard"?`${c()}/2 + 0.65rem`:`${c()}/2 + 0.7rem`),de(he,h())}),Nt(I,o),q("mouseover",I,K),q("mouseout",I,j),q("focus",I,V),q("blur",I,D),N(t,U),te(e,"handleMouseOver",K),te(e,"handleMouseOut",j),te(e,"handleFocus",V),te(e,"handleBlur",D),fe({handleMouseOver:K,handleMouseOut:j,handleFocus:V,handleBlur:D})}var Mt=H('<div class="dropdown-item svelte-1c6p9ur"> </div>'),Kt=H('<div class="dropdown-container svelte-1c6p9ur"><div class="dropdown-header svelte-1c6p9ur"> </div> <div class="dropdown-list svelte-1c6p9ur"></div></div>');function Qt(t,e){let r=O(e,"selectedOption",12,"Months"),a=L(!1),l=["Years","Months"],o=L(),f=O(e,"width",8,"100%");function s(){y(a,!b(a))}function w(v){r(v),y(a,!1)}function n(v){let m=v.target;b(o)&&!b(o).contains(m)&&(b(a)&&s(),document.removeEventListener("mousedown",n))}var _=Kt(),u=E(_);Xt(u,v=>y(o,v),()=>b(o));var c=E(u);C(u);var h=R(u,2);i(h,"width","100%"),i(h,"transition","opacity 0.3s"),Pt(h,5,()=>l,St,(v,m)=>{var g=Mt(),d=E(g);C(g),re(()=>de(d,b(m))),q("mousedown",g,()=>w(b(m))),N(v,g)}),C(h),C(_),re(()=>{i(_,"width",f()),de(c,r()),i(h,"visibility",b(a)?"":"hidden"),i(h,"opacity",b(a)?1:0)}),q("click",u,s),q("mousedown",u,()=>{document.addEventListener("mousedown",n)}),N(t,_)}function Zt(t,e,r,a,l,o,f,s){if(!b(e)||!b(r)||!b(a))y(l,!0),setTimeout(()=>{y(l,!1)},1750);else{const w=parseFloat(b(e)),n=parseFloat(b(a))/100,_=parseFloat(b(r));let u=parseFloat(b(o)),c=12;console.log(u),Number.isNaN(u)&&(u=0),b(f)==="Months"&&(c=1);let h=w;for(let v=0;v<c*_;(v+=1)-1)h*=1+n/12,h+=u;y(s,h.toFixed(2))}}var Jt=(t,e,r,a,l,o,f)=>{y(e,"100000"),y(r,"20"),y(a,"1"),y(l,!0),y(o,"20000"),y(f,"Years")},jt=H('<div class="row svelte-ho08gn"><p class="message svelte-ho08gn">✘Enter the required data</p></div>'),$t=H('<div class="row svelte-ho08gn"><!> <img src="./icons/plus.png"></div>'),er=(t,e,r,a,l,o,f,s)=>{y(e,""),y(r,""),y(a,""),y(l,""),y(o,""),y(f,!1),y(s,!1)},tr=H('<div class="row svelte-ho08gn"><p class="result svelte-ho08gn">Result</p></div> <div class="row svelte-ho08gn"><p class="result svelte-ho08gn">The Final Amount: <strong> </strong> (Currency Unit)</p></div>',1),rr=H('<div class="header svelte-ho08gn"><button><img src="./USD-Coin-Logo-PNG-Color.png" class="logo svelte-ho08gn"> <p class="logo-p svelte-ho08gn"><span>Smart</span> Investor</p></button></div> <div class="content svelte-ho08gn"><div class="main-box svelte-ho08gn"><img src="./smart-investor-logo.png" class="box-logo svelte-ho08gn"> <!> <div class="row svelte-ho08gn"><!> <img src="./icons/shutterstock_2069344.png" class="ico svelte-ho08gn"></div> <div class="row svelte-ho08gn"><!> <img src="./icons/percent.png" class="ico svelte-ho08gn"></div> <!> <div class="row svelte-ho08gn"><!> <!></div> <div class="row svelte-ho08gn"><div><p>Replenishable deposit:</p> <!></div></div> <div class="row svelte-ho08gn"><button class="calculate-button svelte-ho08gn"><p>GET RESULT</p></button></div> <div class="row svelte-ho08gn"><button class="clear-button svelte-ho08gn"><p>CLEAR</p></button></div> <!></div></div>',1);function cr(t,e){ce(e,!1);let r="#0074e1",a=L(""),l=L(""),o=L(""),f=L("Years"),s=L(""),w=L(!1),n=L(!1),_=L("");function u(c){c=c.replace(/[^\d.,]/g,""),c=c.replace(",",".");const h=c.indexOf(".");return c=c.slice(0,h+1)+c.slice(h+1).replace(/\./g,""),c}ve(),Vt(t,{children:(c,h)=>{var v=rr(),m=se(v),g=E(m);g.__click=[Jt,a,l,o,w,s,f];var d=R(E(g),2),p=E(d);i(p,"color",r),le(),C(d),C(g),C(m);var x=R(m,2),k=E(x),X=R(E(k),2);oe(X,()=>b(n),F=>{var W=jt();N(F,W)});var P=R(X,2),z=E(P);ne(z,{get value(){return b(a)},set value(F){y(a,F)},oninput:()=>{y(a,u(b(a)))},label:"Deposit",primaryColor:r,backgroundColor:"white",width:"100%",$$legacy:!0}),le(2),C(P);var G=R(P,2),Z=E(G);ne(Z,{get value(){return b(l)},set value(F){y(l,F)},oninput:()=>{y(l,u(b(l)))},label:"Interest Rate",primaryColor:r,backgroundColor:"white",width:"100%",$$legacy:!0}),le(2),C(G);var J=R(G,2);oe(J,()=>b(w),F=>{var W=$t();i(W,"margin-bottom","0.33rem");var Q=E(W);ne(Q,{get value(){return b(s)},set value(ae){y(s,ae)},oninput:()=>{y(s,u(b(s)))},label:"Replenishment amount",primaryColor:r,backgroundColor:"white",width:"100%",$$legacy:!0});var _e=R(Q,2);i(_e,"width","3.75rem"),C(W),N(F,W)});var T=R(J,2);i(T,"margin-top","0.1rem");var K=E(T);ne(K,{get value(){return b(o)},set value(F){y(o,F)},oninput:()=>{y(o,u(b(o)))},label:"Investment Term",primaryColor:r,backgroundColor:"white",width:"60%",$$legacy:!0});var j=R(K,2);Qt(j,{get selectedOption(){return b(f)},set selectedOption(F){y(f,F)},width:"40%",$$legacy:!0}),C(T);var V=R(T,2);i(V,"margin-top","0.5rem");var D=E(V);i(D,"display","flex"),i(D,"align-items","center"),i(D,"margin-left","auto");var U=E(D);i(U,"margin-right","0.4rem");var I=R(U,2);qt(I,{get isChecked(){return b(w)},set isChecked(F){y(w,F)},color:r,$$legacy:!0}),C(D),C(V);var M=R(V,2);i(M,"margin-top","0.5rem");var S=E(M);S.__click=[Zt,a,o,l,n,s,f,_],i(S,"background-color",r);var he=E(S);i(he,"color","white"),C(S),C(M);var A=R(M,2);i(A,"margin-top","0.5rem");var $=E(A);$.__click=[er,a,l,o,_,s,w,n],i($,"border-color",r),i($,"margin-bottom","0.3rem");var $e=E($);i($e,"color",r),C($),C(A);var et=R(A,2);oe(et,()=>b(_),F=>{var W=tr(),Q=se(W),_e=E(Q);i(_e,"font-weight","600"),C(Q);var ae=R(Q,2),xe=E(ae),pe=R(E(xe));i(pe,"font-weight","600");var tt=E(pe);C(pe),le(),C(xe),C(ae),re(()=>de(tt,`${b(_)??""} CU`)),N(F,W)}),C(k),C(x),N(c,v)},$$slots:{default:!0}}),fe()}He(["click"]);export{cr as component,ur as universal};
