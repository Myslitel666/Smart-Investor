var En=Array.isArray,wn=Array.from,Tn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,mn=Object.prototype,An=Array.prototype,Ut=Object.getPrototypeOf;const gn=()=>{};function Rn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,it=4,F=8,X=16,m=32,G=64,x=128,V=256,p=512,R=1024,Y=2048,I=4096,H=8192,Vt=16384,ft=32768,Sn=65536,Kt=1<<18,_t=1<<19,lt=Symbol("$state");function ct(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function vt(t){return!$t(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function xn(){throw new Error("hydration_failed")}function Dn(t){throw new Error("props_invalid_value")}function kn(){throw new Error("state_descriptors_fixed")}function On(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:ct,version:0}}function In(t){return Xt(tt(t))}function Nn(t,n=!1){var e;const r=tt(t);return n||(r.equals=vt),c!==null&&c.l!==null&&((e=c.l).s??(e.s=[])).push(r),r}function Xt(t){return a!==null&&a.f&w&&(d===null?_n([t]):d.push(t)),t}function Pn(t,n){return a!==null&&et()&&a.f&(w|X)&&(d===null||!d.includes(t))&&Qt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=bt(),pt(t,R),et()&&u!==null&&u.f&p&&!(u.f&m)&&(v!==null&&v.includes(t)?(y(u,R),W(u)):g===null?cn([t]):g.push(t))),n}function pt(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&R||!e&&o===u||(y(o,n),i&(p|x)&&(i&w?pt(o,Y):W(o)))}}const Cn=1,Fn=2,bn=4,qn=8,Ln=16,Mn=1,jn=2,nn="[",rn="[!",en="]",ht={},Yn=Symbol();function dt(t){console.warn("hydration_mismatch")}let N=!1;function Hn(t){N=t}let T;function K(t){if(t===null)throw dt(),ht;return T=t}function Un(){return K(b(T))}function Bn(t){if(N){if(b(T)!==null)throw dt(),ht;T=t}}function Vn(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var ot,yt,Et;function Kn(){if(ot===void 0){ot=window;var t=Element.prototype,n=Node.prototype;yt=st(n,"firstChild").get,Et=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function wt(t=""){return document.createTextNode(t)}function z(t){return yt.call(t)}function b(t){return Et.call(t)}function $n(t){if(!N)return z(t);var n=z(T);return n===null&&(n=T.appendChild(wt())),K(n),n}function Gn(t,n){if(!N){var r=z(t);return r instanceof Comment&&r.data===""?b(r):r}return T}function Zn(t,n=1,r=!1){let e=N?T:t;for(;n--;)e=b(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=wt();return e==null||e.before(l),K(l),l}return K(e),e}function Wn(t){t.textContent=""}function sn(t){var n=w|R;u===null?n|=x:u.f|=_t;const r={children:null,deps:null,equals:ct,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&w){var e=a;(e.children??(e.children=[])).push(r)}return r}function zn(t){const n=sn(t);return n.equals=vt,n}function Tt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?nt(e):L(e)}}}function mt(t){var n,r=u;C(t.parent);try{Tt(t),n=qt(t)}finally{C(r)}return n}function At(t){var n=mt(t),r=(D||t.f&x)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=bt())}function nt(t){Tt(t),j(t,0),y(t,H),t.v=t.children=t.deps=t.reactions=null}function gt(t){u===null&&a===null&&Wt(),a!==null&&a.f&x&&Zt(),rt&&Gt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&G)!==0,l=u,o={ctx:c,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{ut(!0),Z(o),o.f|=Vt}catch(_){throw L(o),_}finally{ut(i)}}else n!==null&&W(o);var E=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&_t)===0;if(!E&&!s&&e&&(l!==null&&ln(o,l),a!==null&&a.f&w)){var f=a;(f.children??(f.children=[])).push(o)}return o}function Jn(t){const n=q(F,null,!1);return y(n,p),n.teardown=t,n}function Qn(t){gt();var n=u!==null&&(u.f&F)!==0&&c!==null&&!c.m;if(n){var r=c;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=Rt(t);return e}}function Xn(t){return gt(),St(t)}function tr(t){const n=q(G,t,!0);return()=>{L(n)}}function Rt(t){return q(it,t,!1)}function St(t){return q(F,t,!0)}function nr(t){return St(t)}function rr(t,n=0){return q(F|X|n,t,!0)}function er(t,n=!0){return q(F|m,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=rt,e=a;at(!0),P(null);try{n.call(null)}finally{at(r),P(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)nt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;L(r,n),r=e}}function on(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||L(n),n=r}}function L(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){var e=t.nodes_start,s=t.nodes_end,l=a,o=u;P(null),C(null);try{for(;e!==null;){var i=e===s?null:b(e);e.remove(),e=i}}finally{P(l),C(o)}r=!0}Dt(t),kt(t,n&&!r),j(t,0),y(t,H);var E=t.transitions;if(E!==null)for(const _ of E)_.stop();xt(t);var f=t.parent;f!==null&&f.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function sr(t,n){var r=[];It(t,r,!0),un(r,()=>{L(t),n&&n()})}function un(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&I)){if(t.f^=I,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ft)!==0||(e.f&m)!==0;It(e,n,l?r:!1),e=s}}}function lr(t){Nt(t,!0)}function Nt(t,n){if(t.f&I){t.f^=I,U(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ft)!==0||(r.f&m)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,J=[];function Pt(){$=!1;const t=J.slice();J=[],Bt(t)}function or(t){$||($=!0,queueMicrotask(Pt)),J.push(t)}function an(){$&&Pt()}const Ct=0,fn=1;let B=Ct,M=!1,k=!1,rt=!1;function ut(t){k=t}function at(t){rt=t}let S=[],O=0;let a=null;function P(t){a=t}let u=null;function C(t){u=t}let d=null;function _n(t){d=t}let v=null,h=0,g=null;function cn(t){g=t}let Ft=0,D=!1,c=null;function bt(){return++Ft}function et(){return c!==null&&c.l===null}function U(t){var o,i;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&At(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function vn(t,n,r){throw t}function qt(t){var A;var n=v,r=h,e=g,s=a,l=D,o=d,i=t.f;v=null,h=0,g=null,a=i&(m|G)?null:t,D=!k&&(i&x)!==0,d=null;try{var E=(0,t.fn)(),f=t.deps;if(v!==null){var _;if(j(t,h),f!==null&&h>0)for(f.length=h+v.length,_=0;_<v.length;_++)f[h+_]=v[_];else t.deps=f=v;if(!D)for(_=h;_<f.length;_++)((A=f[_]).reactions??(A.reactions=[])).push(t)}else f!==null&&h<f.length&&(j(t,h),f.length=h);return E}finally{v=n,h=r,g=e,a=s,D=l,d=o}}function pn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(y(n,Y),n.f&(x|V)||(n.f^=V),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)pn(t,r[e])}function Z(t){var n=t.f;if(!(n&H)){y(t,p);var r=u,e=c;u=t,c=t.ctx;try{Dt(t),n&X?on(t):kt(t),xt(t);var s=qt(t);t.teardown=typeof s=="function"?s:null,t.version=Ft}catch(l){vn(l)}finally{u=r,c=e}}}function Lt(){O>1e3&&(O=0,zt()),O++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),hn(l)}}finally{k=r}}}function hn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|I))&&U(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function dn(){if(M=!1,O>1001)return;const t=S;S=[],Mt(t),M||(O=0)}function W(t){B===Ct&&(M||(M=!0,queueMicrotask(dn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|m)){if(!(r&p))return;n.f^=p}}S.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,o=l&&(s&p)!==0;if(!o&&!(s&I))if(s&F){l?r.f^=p:U(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&it&&e.push(r);var E=r.next;if(E===null){let A=r.parent;for(;A!==null;){if(t===A)break t;var f=A.next;if(f!==null){r=f;continue t}A=A.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],n.push(i),jt(i,n)}function Yt(t){var n=B,r=S;try{Lt();const s=[];B=fn,S=s,M=!1,Mt(r);var e=t==null?void 0:t();return an(),(S.length>0||s.length>0)&&Yt(),O=0,e}finally{B=n,S=r}}async function ur(){await Promise.resolve(),Yt()}function ar(t){var i;var n=t.f,r=(n&w)!==0;if(r&&n&H){var e=mt(t);return nt(t),e}if(a!==null){d!==null&&d.includes(t)&&Jt();var s=a.deps;v===null&&s!==null&&s[h]===t?h++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&m)&&g.includes(t)&&(y(u,R),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,U(l)&&At(l)),t.v}function ir(t){const n=a;try{return a=null,t()}finally{a=n}}const yn=~(R|Y|p);function y(t,n){t.f=t.f&yn|n}function fr(t,n=!1,r){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},n||(c.l={s:null,u:null,r1:[],r2:tt(!1)})}function _r(t){const n=c;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];C(l.effect),P(l.reaction),Rt(l.fn)}}finally{C(r),P(e)}}c=n.p,n.m=!0}return{}}function cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&lt in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ht(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{rn as $,Xn as A,Qn as B,ir as C,Bt as D,ar as E,Rn as F,cr as G,nn as H,sn as I,gn as J,Jn as K,Nn as L,Pn as M,Gn as N,nr as O,Zn as P,mn as Q,An as R,lt as S,Mn as T,tt as U,kn as V,Yn as W,st as X,On as Y,Ut as Z,rr as _,Un as a,Vn as a0,lr as a1,sr as a2,ft as a3,Rt as a4,St as a5,or as a6,Dn as a7,Sn as a8,bn as a9,vt as aa,m as ab,G as ac,C as ad,Cn as ae,Fn as af,qn as ag,zn as ah,a as ai,H as aj,Ln as ak,Yt as al,ur as am,In as an,$t as ao,Kn as b,$n as c,Tn as d,b as e,ht as f,z as g,N as h,En as i,K as j,T as k,en as l,dt as m,xn as n,Wn as o,wn as p,tr as q,Bn as r,Hn as s,wt as t,er as u,fr as v,u as w,_r as x,c as y,jn as z};
