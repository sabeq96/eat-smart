import{S as W,i as j,s as A,k as V,a as g,q as H,l as k,m as T,h,c as p,r as J,I as R,n as l,b as U,E as $,u as K,B as N,w as x,x as v,y as w,f as S,t as b,z as E}from"../../chunks/index-75db09f8.js";import{P as L}from"../../chunks/PageTitle-cff99381.js";function O(_){let r,m,s,o,e,f,c,d;return{c(){r=V("div"),m=V("figure"),s=V("img"),e=g(),f=V("div"),c=V("p"),d=H(_[1]),this.h()},l(i){r=k(i,"DIV",{class:!0});var n=T(r);m=k(n,"FIGURE",{class:!0});var C=T(m);s=k(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(h),e=p(n),f=k(n,"DIV",{class:!0});var u=T(f);c=k(u,"P",{class:!0});var G=T(c);d=J(G,_[1]),G.forEach(h),u.forEach(h),n.forEach(h),this.h()},h(){R(s.src,o=_[0])||l(s,"src",o),l(s,"alt",_[1]),l(s,"class","rounded-xl"),l(m,"class","box-border px-6 pt-6"),l(c,"class","font-semibold"),l(f,"class","card-body items-center text-center"),l(r,"class","card card-compact bg-base-200 shadow-xl")},m(i,n){U(i,r,n),$(r,m),$(m,s),$(r,e),$(r,f),$(f,c),$(c,d)},p(i,[n]){n&1&&!R(s.src,o=i[0])&&l(s,"src",o),n&2&&l(s,"alt",i[1]),n&2&&K(d,i[1])},i:N,o:N,d(i){i&&h(r)}}}function Q(_,r,m){let{image:s="https://placeimg.com/400/225/arch"}=r,{text:o=""}=r;return _.$$set=e=>{"image"in e&&m(0,s=e.image),"text"in e&&m(1,o=e.text)},[s,o]}class I extends W{constructor(r){super(),j(this,r,Q,O,A,{image:0,text:1})}}function X(_){let r,m,s,o,e,f,c,d,i,n,C,u,G,y,B,P,F,D,M,q,z;return r=new L({props:{text:"What to cook?"}}),f=new I({props:{text:"Some food"}}),d=new I({props:{text:"Some food"}}),n=new I({props:{text:"Some food"}}),u=new I({props:{text:"Some food"}}),y=new I({props:{text:"Some food"}}),P=new I({props:{text:"Some food"}}),D=new I({props:{text:"Some food"}}),q=new I({props:{text:"Some food"}}),{c(){x(r.$$.fragment),m=g(),s=V("input"),o=g(),e=V("div"),x(f.$$.fragment),c=g(),x(d.$$.fragment),i=g(),x(n.$$.fragment),C=g(),x(u.$$.fragment),G=g(),x(y.$$.fragment),B=g(),x(P.$$.fragment),F=g(),x(D.$$.fragment),M=g(),x(q.$$.fragment),this.h()},l(t){v(r.$$.fragment,t),m=p(t),s=k(t,"INPUT",{type:!0,placeholder:!0,class:!0}),o=p(t),e=k(t,"DIV",{class:!0});var a=T(e);v(f.$$.fragment,a),c=p(a),v(d.$$.fragment,a),i=p(a),v(n.$$.fragment,a),C=p(a),v(u.$$.fragment,a),G=p(a),v(y.$$.fragment,a),B=p(a),v(P.$$.fragment,a),F=p(a),v(D.$$.fragment,a),M=p(a),v(q.$$.fragment,a),a.forEach(h),this.h()},h(){l(s,"type","text"),l(s,"placeholder","Search ..."),l(s,"class","input w-full max-w-xs mt-6"),l(e,"class","mt-6 grid grid-cols-2 gap-4")},m(t,a){w(r,t,a),U(t,m,a),U(t,s,a),U(t,o,a),U(t,e,a),w(f,e,null),$(e,c),w(d,e,null),$(e,i),w(n,e,null),$(e,C),w(u,e,null),$(e,G),w(y,e,null),$(e,B),w(P,e,null),$(e,F),w(D,e,null),$(e,M),w(q,e,null),z=!0},p:N,i(t){z||(S(r.$$.fragment,t),S(f.$$.fragment,t),S(d.$$.fragment,t),S(n.$$.fragment,t),S(u.$$.fragment,t),S(y.$$.fragment,t),S(P.$$.fragment,t),S(D.$$.fragment,t),S(q.$$.fragment,t),z=!0)},o(t){b(r.$$.fragment,t),b(f.$$.fragment,t),b(d.$$.fragment,t),b(n.$$.fragment,t),b(u.$$.fragment,t),b(y.$$.fragment,t),b(P.$$.fragment,t),b(D.$$.fragment,t),b(q.$$.fragment,t),z=!1},d(t){E(r,t),t&&h(m),t&&h(s),t&&h(o),t&&h(e),E(f),E(d),E(n),E(u),E(y),E(P),E(D),E(q)}}}class tt extends W{constructor(r){super(),j(this,r,null,X,A,{})}}export{tt as default};