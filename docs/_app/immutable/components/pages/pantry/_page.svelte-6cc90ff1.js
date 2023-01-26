import{S as le,i as se,s as ie,k as q,a as x,q as L,l as O,m as M,h as f,c as V,r as Y,I as De,n as m,b as N,E as p,u as G,B as U,e as ae,C as X,D as Z,w as R,x as $,y as ee,O as H,f as B,t as A,d as oe,z as te,F as ne,R as ke,Q as ue,T as Ee,U as Ie,V as ce,g as fe,P as Me}from"../../../chunks/index-72ec7abf.js";import{P as Se,l as re,L as Te}from"../../../chunks/lodash-63ded280.js";import{k as qe,q as Oe}from"../../../chunks/svelte-apollo-b4bf492e.js";function Q(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function W(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(n){return typeof n}:W=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},W(t)}function z(t){Q(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||W(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function me(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ge(t){Q(1,arguments);var e=z(t);return e.setHours(0,0,0,0),e}var Pe=864e5;function Fe(t,e){Q(2,arguments);var n=ge(t),r=ge(e),i=n.getTime()-me(n),l=r.getTime()-me(r);return Math.round((i-l)/Pe)}function de(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function Ne(t,e){Q(2,arguments);var n=z(t),r=z(e),i=de(n,r),l=Math.abs(Fe(n,r));n.setDate(n.getDate()-i*l);var o=Number(de(n,r)===-i),h=i*(l-o);return h===0?0:h}function Ce(t,e){Q(2,arguments);var n=z(t),r=z(e);return n.getTime()<r.getTime()}function je(t){let e,n,r,i,l,o,h,b,v,I,w,g,S,E,T,F,k,y;return{c(){e=q("div"),n=q("div"),r=q("div"),i=q("figure"),l=q("img"),h=x(),b=q("div"),v=q("p"),I=L(t[0]),w=x(),g=q("p"),S=L(t[3]),E=x(),T=q("p"),F=L(t[2]),k=x(),y=L(t[1]),this.h()},l(d){e=O(d,"DIV",{class:!0});var c=M(e);n=O(c,"DIV",{class:!0});var P=M(n);r=O(P,"DIV",{class:!0});var u=M(r);i=O(u,"FIGURE",{});var J=M(i);l=O(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(f),h=V(u),b=O(u,"DIV",{});var s=M(b);v=O(s,"P",{});var _=M(v);I=Y(_,t[0]),_.forEach(f),w=V(s),g=O(s,"P",{class:!0});var D=M(g);S=Y(D,t[3]),D.forEach(f),s.forEach(f),u.forEach(f),E=V(P),T=O(P,"P",{});var a=M(T);F=Y(a,t[2]),k=V(a),y=Y(a,t[1]),a.forEach(f),P.forEach(f),c.forEach(f),this.h()},h(){De(l.src,o="https://placeimg.com/400/225/arch")||m(l,"src",o),m(l,"alt","Shoes"),m(l,"class","h-12 w-12 object-cover rounded-md"),m(g,"class","text-xs mt-1"),m(r,"class","flex justify-between items-start gap-4"),m(n,"class","flex justify-between p-4"),m(e,"class","card bg-base-200 shadow-xl")},m(d,c){N(d,e,c),p(e,n),p(n,r),p(r,i),p(i,l),p(r,h),p(r,b),p(b,v),p(v,I),p(b,w),p(b,g),p(g,S),p(n,E),p(n,T),p(T,F),p(T,k),p(T,y)},p(d,[c]){c&1&&G(I,d[0]),c&8&&G(S,d[3]),c&4&&G(F,d[2]),c&2&&G(y,d[1])},i:U,o:U,d(d){d&&f(e)}}}function xe(t){return t<0?`overdue ${Math.abs(t)} days`:t===0?"today":`in ${t} days`}function Ve(t,e,n){let r,i,{id:l=0}=e,{name:o=""}=e,{exp:h=""}=e,{qt:b=0}=e,{unit:v=""}=e,{gram_per_unit:I=0}=e;const w=Intl.NumberFormat("en",{maximumFractionDigits:2});return t.$$set=g=>{"id"in g&&n(4,l=g.id),"name"in g&&n(0,o=g.name),"exp"in g&&n(5,h=g.exp),"qt"in g&&n(6,b=g.qt),"unit"in g&&n(1,v=g.unit),"gram_per_unit"in g&&n(7,I=g.gram_per_unit)},t.$$.update=()=>{t.$$.dirty&32&&n(3,r=xe(Ne(new Date(h),new Date))),t.$$.dirty&192&&n(2,i=w.format(b/I))},[o,v,i,r,l,h,b,I]}class Be extends le{constructor(e){super(),se(this,e,Ve,je,ie,{id:4,name:0,exp:5,qt:6,unit:1,gram_per_unit:7})}}function Ae(t){let e,n;return{c(){e=X("svg"),n=X("path"),this.h()},l(r){e=Z(r,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=M(e);n=Z(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),M(n).forEach(f),i.forEach(f),this.h()},h(){m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"d","M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill","none"),m(e,"viewBox","0 0 24 24"),m(e,"stroke-width","1.5"),m(e,"stroke","currentColor"),m(e,"class","w-6 h-6")},m(r,i){N(r,e,i),p(e,n)},d(r){r&&f(e)}}}function Le(t){let e,n;return{c(){e=X("svg"),n=X("path"),this.h()},l(r){e=Z(r,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var i=M(e);n=Z(i,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),M(n).forEach(f),i.forEach(f),this.h()},h(){m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"d","M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill","none"),m(e,"viewBox","0 0 24 24"),m(e,"stroke-width","1.5"),m(e,"stroke","currentColor"),m(e,"class","w-6 h-6")},m(r,i){N(r,e,i),p(e,n)},d(r){r&&f(e)}}}function Ye(t){let e;function n(l,o){return l[0]?Le:Ae}let r=n(t),i=r(t);return{c(){i.c(),e=ae()},l(l){i.l(l),e=ae()},m(l,o){i.m(l,o),N(l,e,o)},p(l,[o]){r!==(r=n(l))&&(i.d(1),i=r(l),i&&(i.c(),i.m(e.parentNode,e)))},i:U,o:U,d(l){i.d(l),l&&f(e)}}}function Ge(t,e,n){let{top:r=!0}=e;return t.$$set=i=>{"top"in i&&n(0,r=i.top)},[r]}class He extends le{constructor(e){super(),se(this,e,Ge,Ye,ie,{top:0})}}const Ue=qe`
	query GetPantry($parent: Int!) {
		parents: ingredients(limit: 10, where: { parent: { _is_null: true } }) {
			id
			name
		}
		pantry(where: { user_id: { _eq: 1 }, ingredient: { parent: { _eq: $parent } } }) {
			id
			exp
			qt
			ingredient {
				id
				name
				image
				unit
				gram_per_unit
			}
		}
	}
`;function _e(t,e,n){const r=t.slice();return r[13]=e[n],r}function he(t,e,n){const r=t.slice();return r[16]=e[n],r}function pe(t,e,n){const r=t.slice();return r[13]=e[n],r}function ve(t){let e,n=t[13].name+"",r,i,l,o=t[13].value+"",h,b,v,I;function w(){return t[11](t[13])}function g(){return t[12](t[13])}return{c(){e=q("div"),r=L(n),i=x(),l=q("span"),h=L(o),b=x(),this.h()},l(S){e=O(S,"DIV",{class:!0});var E=M(e);r=Y(E,n),i=V(E),l=O(E,"SPAN",{class:!0});var T=M(l);h=Y(T,o),T.forEach(f),b=V(E),E.forEach(f),this.h()},h(){m(l,"class","badge ml-1 badge-outline"),m(e,"class","whitespace-nowrap"),ue(e,"text-primary-focus",t[13].id===t[2])},m(S,E){N(S,e,E),p(e,r),p(e,i),p(e,l),p(l,h),p(e,b),v||(I=[H(e,"click",w),H(e,"keypress",g)],v=!0)},p(S,E){t=S,E&16&&n!==(n=t[13].name+"")&&G(r,n),E&16&&o!==(o=t[13].value+"")&&G(h,o),E&20&&ue(e,"text-primary-focus",t[13].id===t[2])},d(S){S&&f(e),v=!1,ke(I)}}}function ye(t){let e,n=t[16].name+"",r,i;return{c(){e=q("option"),r=L(n),this.h()},l(l){e=O(l,"OPTION",{});var o=M(e);r=Y(o,n),o.forEach(f),this.h()},h(){e.__value=t[16].value,e.value=e.__value,e.selected=i=t[1]===t[16].value},m(l,o){N(l,e,o),p(e,r)},p(l,o){o&2&&i!==(i=l[1]===l[16].value)&&(e.selected=i)},d(l){l&&f(e)}}}function be(t){let e,n;return e=new Te({}),{c(){R(e.$$.fragment)},l(r){$(e.$$.fragment,r)},m(r,i){ee(e,r,i),n=!0},i(r){n||(B(e.$$.fragment,r),n=!0)},o(r){A(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function we(t){let e,n;const r=[t[13],t[13].ingredient];let i={};for(let l=0;l<r.length;l+=1)i=Ee(i,r[l]);return e=new Be({props:i}),{c(){R(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,o){ee(e,l,o),n=!0},p(l,o){const h=o&32?Ie(r,[ce(l[13]),ce(l[13].ingredient)]):{};e.$set(h)},i(l){n||(B(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){te(e,l)}}}function ze(t){let e,n,r,i,l,o,h,b,v,I,w,g,S,E,T;e=new Se({props:{text:"Pantry"}});let F=t[4],k=[];for(let s=0;s<F.length;s+=1)k[s]=ve(pe(t,F,s));h=new He({props:{top:t[0]}});let y=t[7],d=[];for(let s=0;s<y.length;s+=1)d[s]=ye(he(t,y,s));let c=t[3].loading&&be(),P=t[5],u=[];for(let s=0;s<P.length;s+=1)u[s]=we(_e(t,P,s));const J=s=>A(u[s],1,1,()=>{u[s]=null});return{c(){R(e.$$.fragment),n=x(),r=q("div");for(let s=0;s<k.length;s+=1)k[s].c();i=x(),l=q("div"),o=q("div"),R(h.$$.fragment),b=x(),v=q("select");for(let s=0;s<d.length;s+=1)d[s].c();I=x(),w=q("div"),c&&c.c(),g=x();for(let s=0;s<u.length;s+=1)u[s].c();this.h()},l(s){$(e.$$.fragment,s),n=V(s),r=O(s,"DIV",{class:!0});var _=M(r);for(let j=0;j<k.length;j+=1)k[j].l(_);_.forEach(f),i=V(s),l=O(s,"DIV",{class:!0});var D=M(l);o=O(D,"DIV",{});var a=M(o);$(h.$$.fragment,a),a.forEach(f),b=V(D),v=O(D,"SELECT",{class:!0});var C=M(v);for(let j=0;j<d.length;j+=1)d[j].l(C);C.forEach(f),D.forEach(f),I=V(s),w=O(s,"DIV",{class:!0});var K=M(w);c&&c.l(K),g=V(K);for(let j=0;j<u.length;j+=1)u[j].l(K);K.forEach(f),this.h()},h(){m(r,"class","flex gap-4 overflow-x-scroll py-4 cursor-pointer"),m(v,"class","select select-md select-bordered"),m(l,"class","py-6 flex flex-nowrap items-center gap-2"),m(w,"class","flex flex-col gap-4")},m(s,_){ee(e,s,_),N(s,n,_),N(s,r,_);for(let D=0;D<k.length;D+=1)k[D].m(r,null);N(s,i,_),N(s,l,_),p(l,o),ee(h,o,null),p(l,b),p(l,v);for(let D=0;D<d.length;D+=1)d[D].m(v,null);N(s,I,_),N(s,w,_),c&&c.m(w,null),p(w,g);for(let D=0;D<u.length;D+=1)u[D].m(w,null);S=!0,E||(T=[H(o,"click",t[8]),H(o,"keypress",t[8]),H(v,"change",t[9])],E=!0)},p(s,[_]){if(_&1044){F=s[4];let a;for(a=0;a<F.length;a+=1){const C=pe(s,F,a);k[a]?k[a].p(C,_):(k[a]=ve(C),k[a].c(),k[a].m(r,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=F.length}const D={};if(_&1&&(D.top=s[0]),h.$set(D),_&130){y=s[7];let a;for(a=0;a<y.length;a+=1){const C=he(s,y,a);d[a]?d[a].p(C,_):(d[a]=ye(C),d[a].c(),d[a].m(v,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=y.length}if(s[3].loading?c?_&8&&B(c,1):(c=be(),c.c(),B(c,1),c.m(w,g)):c&&(fe(),A(c,1,1,()=>{c=null}),oe()),_&32){P=s[5];let a;for(a=0;a<P.length;a+=1){const C=_e(s,P,a);u[a]?(u[a].p(C,_),B(u[a],1)):(u[a]=we(C),u[a].c(),B(u[a],1),u[a].m(w,null))}for(fe(),a=P.length;a<u.length;a+=1)J(a);oe()}},i(s){if(!S){B(e.$$.fragment,s),B(h.$$.fragment,s),B(c);for(let _=0;_<P.length;_+=1)B(u[_]);S=!0}},o(s){A(e.$$.fragment,s),A(h.$$.fragment,s),A(c),u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)A(u[_]);S=!1},d(s){te(e,s),s&&f(n),s&&f(r),ne(k,s),s&&f(i),s&&f(l),te(h),ne(d,s),s&&f(I),s&&f(w),c&&c.d(),ne(u,s),E=!1,ke(T)}}}function Qe(t,e,n){let r,i,l,o=U,h=()=>(o(),o=Me(r,y=>n(3,l=y)),r);t.$$.on_destroy.push(()=>o());const b=[{name:"Name",value:"ingredient.name"},{name:"Expiration",value:"exp"},{name:"Amount",value:"qt"}];let v=!1,I=b[0].value,w=[{id:0,name:"",value:0}],g=1;function S(){n(0,v=!v)}function E(y){n(1,I=y.currentTarget.value)}function T(y){n(2,g=y)}const F=y=>T(y.id),k=y=>T(y.id);return t.$$.update=()=>{var y,d;t.$$.dirty&4&&h(n(6,r=Oe(Ue,{variables:{parent:g}}))),t.$$.dirty&8&&l.data&&n(4,w=(y=l.data)==null?void 0:y.parents.map(c=>({id:c.id,name:c.name,value:11}))),t.$$.dirty&11&&n(5,i=re.chain(((d=l.data)==null?void 0:d.pantry)||[]).groupBy("ingredient.id").map(c=>({...re.reduce(c,(P,u)=>({...u,exp:Ce(new Date(P.exp),new Date(u.exp))?P.exp:u.exp,qt:u.qt+P.qt||0,ingredient:{id:u.id,name:u.ingredient.name,image:u.ingredient.image,unit:u.ingredient.unit,gram_per_unit:u.ingredient.gram_per_unit}}))})).orderBy(c=>re.get(c,I),v?"asc":"desc").value())},[v,I,g,l,w,i,r,b,S,E,T,F,k]}class Xe extends le{constructor(e){super(),se(this,e,Qe,ze,ie,{})}}export{Xe as default};