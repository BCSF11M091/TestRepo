﻿(function(g,f,b,d,c,e,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.d=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},q={ie:37,he:39},n={ce:0,be:1,fe:2,se:3,re:4,te:5},y=1,u=2,v=4,x=5,j,a=new function(){var i=this,m=n.ce,j=0,q=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.be;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on@*/j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.fe;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.re:n.se;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.te;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function hb(){D();return m==v}function ib(){D();return m==x}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Ec(a.style[b])){B=b;return c}});B=B||"transform"}return B}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==d?String(a):jb()[ab(a)]||"object"}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}i.Jb=l;i.Sb=hb;i.Tb=ib;i.Eb=s;i.ab=function(){return j};i.cc=function(){return t};i.$Delay=bb;i.J=function(a){if(i.oe(a))a=f.getElementById(a);return a};i.Fb=function(a){return a?a:g.event};i.pc=function(a){a=i.Fb(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.Gb=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};i.me=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.ne=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.qe=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.e=function(a,c,d,b){a=i.J(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.ee=function(a,c,d,b){a=i.J(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.de=function(b,a){i.e(s()?f:g,"mouseup",b,a)};i.M=function(a){a=i.Fb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=e};i.t=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.je=function(a,c){var b=f.createTextNode(c);i.Vb(a);a.appendChild(b)};i.Vb=function(a){a.innerHTML=""};i.qb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.getAttribute(b)==c)return a;if(f){var e=N(a,c,b,f);if(e)return e}}}i.n=N;function S(a,c,e){for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(e){var b=S(a,c,e);if(b)return b}}}i.ye=S;i.ze=function(b,a){return b.getElementsByTagName(a)};i.m=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Ec=function(a){return A(a)=="undefined"};i.we=function(a){return A(a)=="function"};i.oe=function(a){return A(a)=="string"};i.xe=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.f=p;i.pb=function(a){return i.xc("DIV",a)};i.Ae=function(a){return i.xc("SPAN",a)};i.xc=function(b,a){a=a||f;return a.createElement(b)};i.O=function(){};i.wb=function(a,b){return a.getAttribute(b)};i.Rc=function(b,c,a){b.setAttribute(c,a)};i.uc=function(a){return a.className};i.Bc=function(b,a){b.className=a?a:""};i.Pc=function(a){return a.style.display};i.S=function(b,a){b.style.display=a||""};i.sb=function(b,a){b.style.overflow=a};i.rb=function(a){return a.parentNode};i.x=function(a){i.S(a,"none")};i.o=function(a,b){i.S(a,b==e?"none":"")};i.r=function(b,a){b.style.position=a};i.k=function(a,b){a.style.top=b+"px"};i.l=function(a,b){a.style.left=b+"px"};i.g=function(a){return parseInt(a.style.width,10)};i.y=function(c,a){c.style.width=b.max(a,0)+"px"};i.i=function(a){return parseInt(a.style.height,10)};i.K=function(c,a){c.style.height=b.max(a,0)+"px"};i.Zb=function(a){return a.style.cssText};i.Ib=function(b,a){b.style.cssText=a};i.Ub=function(b,a){b.removeAttribute(a)};i.ue=function(b,a){b.style.marginLeft=a+"px"};i.ve=function(b,a){b.style.marginTop=a+"px"};i.Rb=function(a){return parseInt(a.style.zIndex)||0};i.X=function(c,a){c.style.zIndex=b.ceil(a)};i.lc=function(b,a){b.style.backgroundColor=a};i.cd=function(){return l()&&j<10};i.dd=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.Zb(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.Ib(d,e)}};i.v=function(){return+new Date};i.s=function(b,a){b.appendChild(a)};i.Qc=function(b,a){p(a,function(a){i.s(b,a)})};i.nb=function(c,b,a){c.insertBefore(b,a)};i.N=function(b,a){b.removeChild(a)};i.Md=function(b,a){p(a,function(a){i.N(b,a)})};i.Pd=function(a){i.Md(a,i.qb(a))};i.ic=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(d){return e}return b==a};i.u=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=d;a.abort=d;b&&b(a,c)}i.P=function(e,b){if(i.Tb()&&j<11.6||!e)L(b,d);else{var a=new Image;a.onload=i.t(d,L,b,a);a.onabort=i.t(d,L,b,a,c);a.src=e}};i.Fd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.f(e,function(b){a.P(b.src,c)});c()};i.fc=function(d,k,j,i){if(i)d=a.u(d,c);for(var h=a.ze(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.u(j,c);a.Bc(e,a.uc(b));a.Ib(e,a.Zb(b));var g=a.rb(b);a.nb(g,e,b);a.N(g,b)}return d};var C;function lb(b){var g=this,h,d,j;function f(){var c=h;if(d)c+="dn";else if(j)c+="av";a.Bc(b,c)}function k(){C.push(g);d=c;f()}g.Ed=function(){d=e;f()};g.qc=function(a){j=a;f()};b=i.J(b);if(!C){i.de(function(){var a=C;C=[];p(a,function(a){a.Ed()})});C=[]}h=i.uc(b);a.e(b,"mousedown",k)}i.cb=function(a){return new lb(a)};var F={$Opacity:i.Gb,$Top:i.k,$Left:i.l,bb:i.y,eb:i.K,Wd:i.S,$Clip:i.dd,Sf:i.ue,Tf:i.ve,L:i.r,$ZIndex:i.X};function H(){return F}i.Sd=H;i.G=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};new(function(){})};j=function(m,r,g,O,C,y){m=m||0;var f=this,q,n,o,x,z=0,B,M,L,D,j=0,t=0,E,k=m,i,h,p,u=[],A;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.f(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+m*b;I(c);return h}function w(w,G){var m=w;if(p&&(m>=h||m<=i))m=((m-i)%p+p)%p+i;if(!E||x||G||j!=m){var o=b.min(m,h);o=b.max(o,i);if(!E||x||G||o!=t){if(y){var s=(o-k)/r;if(g.Dd&&a.Sb())s=b.round(s*r/16)/r*16;if(g.$Reverse)s=1-s;var e={};for(var n in y){var R=M[n]||1,J=L[n]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=B[n]||B.kb,I=Q(l),q,K=C[n],F=y[n];if(a.xe(F))q=K+(F-K)*I;else{q=a.m({A:{}},C[n]);a.f(F.A,function(c,b){var a=c*I;q.A[b]=a;q[b]+=a})}e[n]=q}if(C.$Zoom);if(y.$Clip&&g.$Move){var v=e.$Clip.A,D=(v.$Top||0)+(v.$Bottom||0),z=(v.$Left||0)+(v.$Right||0);e.$Left=(e.$Left||0)+z;e.$Top=(e.$Top||0)+D;e.$Clip.$Left-=z;e.$Clip.$Right-=z;e.$Clip.$Top-=D;e.$Clip.$Bottom-=D}if(e.$Clip&&a.cd()&&!e.$Clip.$Top&&!e.$Clip.$Left&&e.$Clip.$Right==g.Hb&&e.$Clip.$Bottom==g.Db)e.$Clip=d;a.f(e,function(b,a){A[a]&&A[a](O,b)})}f.Ab(t-k,o-k)}t=o;a.f(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.E(w,G)});var P=j,N=w;j=m;E=c;f.gb(P,N)}}function F(a,c){c&&a.Hc(h,1);h=b.max(h,a.R());u.push(a)}function H(){if(q){var d=a.v(),e=b.min(d-z,a.Tb()?80:20),c=j+e*o;z=d;if(c*o>=n*o)c=n;w(c);if(!x&&c*o>=n*o)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!q){q=c;x=g;D=e;d=b.max(d,i);d=b.min(d,h);n=d;o=n<j?-1:1;f.Jc();z=a.v();H()}}function J(a){if(q){x=q=D=e;f.Fc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.Mc=function(b,a,c){v(b,a,c)};f.F=function(){J()};f.hd=function(a){v(a)};f.D=function(){return j};f.Dc=function(){return n};f.hb=function(){return t};f.E=w;f.sc=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return q};f.zd=function(a){p=a};f.Hc=N;f.$Shift=I;f.zb=function(a){F(a,0)};f.Cb=function(a){F(a,1)};f.R=function(){return h};f.gb=a.O;f.Jc=a.O;f.Fc=a.O;f.Ab=a.O;f.yb=a.v();g=a.m({$Interval:15},g);p=g.Cc;A=a.m({},a.Sd(),g.zc);i=k=m;h=m+r;var M=g.$Round||{},L=g.$During||{};B=a.m({kb:a.we(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r;new function(){;function n(o,Wb){var k=this;function rc(){var a=this;j.call(a,-1e8,2e8);a.md=function(){var c=a.hb(),d=b.floor(c),f=v(d),e=c-b.floor(c);return{C:f,qd:d,L:e}};a.gb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Lb(e,c);k.d(n.$EVT_POSITION_CHANGE,v(a),v(d),a,d)}}function qc(){var b=this;j.call(b,0,0,{Cc:u});a.f(B,function(a){a.zd(u);b.Cb(a);a.$Shift(rb/Rb)})}function pc(){var a=this,b=Kb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,zc:{L:Qb},Cc:u},b,{L:1},{L:-1});a.lb=b}function ec(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.Jc=function(){M=c;Q=d;k.d(n.$EVT_SWIPE_START,v(x.D()),x.D())};a.Fc=function(){M=e;l=e;var a=x.md();k.d(n.$EVT_SWIPE_END,v(x.D()),x.D());!a.L&&tc(a.qd,r)};a.gb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.E(a)};a.jb=function(b,d,c,e){f=b;g=d;h=c;x.E(b);a.E(0);a.Mc(c,e)};a.Td=function(e){l=c;b=e;a.$Play(e,d,c)};a.Ud=function(a){b=a};x=new rc;x.zb(o);x.zb(m)}function fc(){var c=this,b=Pb();a.X(b,0);c.$Elmt=b;c.fb=function(){a.x(b);a.Vb(b)}}function oc(p,o){var f=this,s,w,G,x,g,y=[],Z,q,bb,F,W,D,l,t,h;j.call(f,-E,E+1,{});function C(a){w&&w.Nb();s&&s.Nb();ab(p,a);s=new H.$Class(p,H,1);w=new H.$Class(p,H);w.sc();s.sc()}function db(){s.yb<H.yb&&C()}function M(o,q,m){if(!F){F=c;if(g&&m){var d=m.width,b=m.height,l=d,j=b;if(d&&b&&i.$FillMode){if(i.$FillMode&3){var h=e,p=L/K*b/d;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?d*K/b:L;j=h?K:b*L/d}a.y(g,l);a.K(g,j);a.k(g,(K-j)/2);a.l(g,(L-l)/2)}a.r(g,"absolute");k.d(n.$EVT_LOAD_END,Ub)}}a.x(q);o&&o(f)}function cb(b,c,d,e){if(e==Q&&r==o&&N)if(!sc){var a=v(b);z.Ad(a,o,c,f,d);c.Vd();U.Hc(a,1);U.E(a);A.jb(b,b,0)}}function eb(b){if(b==Q&&r==o){if(!l){var a=d;if(z)if(z.C==o)a=z.ld();else z.fb();db();l=new mc(o,a,f.Zd(),f.ae());l.kc(h)}!l.$IsPlaying()&&l.Ob()}}function X(e,c){if(e==o){if(e!=c)B[c]&&B[c].Jd();h&&h.$Enable();var j=Q=a.v();f.P(a.t(d,eb,j))}else{var g=b.abs(o-e);(!W||g<=i.$LazyLoading||u-g<=i.$LazyLoading)&&f.P()}}function fb(){if(r==o&&l){l.F();h&&h.$Quit();h&&h.$Disable();l.Wb()}}function gb(){r==o&&l&&l.F()}function T(b){if(P)a.M(b);else k.d(n.$EVT_CLICK,o,b)}function R(){h=t.pInstance;l&&l.kc(h)}f.P=function(e,b){b=b||x;if(y.length&&!F){a.o(b);if(!bb){bb=c;k.d(n.$EVT_LOAD_START);a.f(y,function(b){if(!b.src){b.src=a.wb(b,"src2");a.S(b,b["display-origin"])}})}a.Fd(y,g,a.t(d,M,e,b))}else M(e,b)};f.Xc=function(){if(z){var b=z.vd(u);if(b){var f=Q=a.v(),c=o+1,e=B[v(c)];return e.P(a.t(d,cb,c,e,b,f),x)}}V(r+i.$AutoPlaySteps)};f.Pb=function(){X(o,o)};f.Jd=function(){h&&h.$Quit();h&&h.$Disable();f.Xb();l&&l.Zc();l=d;C()};f.Vd=function(){a.x(p)};f.Xb=function(){a.o(p)};f.Yc=function(){h&&h.$Enable()};function ab(b,f,d){d=d||0;if(!D){if(b.tagName=="IMG"){y.push(b);if(!b.src){W=c;b["display-origin"]=a.Pc(b);a.x(b)}}a.Eb()&&a.X(b,a.Rb(b)+1);if(a.cc()>0)(!I||a.cc()<534||!S)&&a.qe(b)}var h=a.qb(b);a.f(h,function(h){var j=a.wb(h,"u");if(j=="player"&&!t){t=h;if(t.pInstance)R();else a.e(t,"dataavailable",R)}if(j=="caption"){if(!a.Jb()&&!f){var i=a.u(h,c);a.nb(b,i,h);a.N(b,h);h=i;f=c}}else if(!D&&!d&&!g&&a.wb(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){Z=g;a.G(Z,O);q=a.u(g,e);a.e(q,"click",T);a.G(q,O);a.S(q,"block");a.Gb(q,0);a.lc(q,"#000");g=a.ye(g,"IMG")}g.border=0;a.G(g,O)}}ab(h,f,d+1)})}f.Ab=function(c,b){var a=E-b;Qb(G,a)};f.Zd=function(){return s};f.ae=function(){return w};f.C=o;m.call(f);var J=a.n(p,"thumb");if(J){f.gd=a.u(J,c);a.x(J)}a.o(p);x=a.u(Y,c);a.X(x,1e3);a.e(p,"click",T);C(c);D=c;f.Kc=g;f.rc=q;f.lb=G=p;a.s(G,x);k.$On(203,X);k.$On(22,gb);k.$On(24,fb)}function mc(g,q,v,u){var b=this,m=0,x=0,o,h,d,f,l,s,w,t,p=B[g];j.call(b,0,0);function y(){a.Pd(J);Vb&&l&&p.rc&&a.s(J,p.rc);a.o(J,l||!p.Kc)}function A(){if(s){s=e;k.d(n.$EVT_ROLLBACK_END,g,d,m,h,d,f);b.E(h)}b.Ob()}function C(a){t=a;b.F();b.Ob()}b.Ob=function(){var a=b.hb();if(!F&&!M&&!t&&(a!=d||N&&(!Nb||fb))&&r==g){if(!a){if(o&&!l){l=c;b.Wb(c);k.d(n.$EVT_SLIDESHOW_START,g,m,x,o,f)}y()}var e,i=n.$EVT_STATE_CHANGE;if(a==f)return p.Xc();else if(a==d)e=f;else if(a==h)e=d;else if(!a)e=h;else if(a>d){s=c;e=d;i=n.$EVT_ROLLBACK_START}else e=b.Dc();k.d(i,g,a,m,h,d,f);b.Mc(e,A)}};b.Zc=function(){z&&z.C==g&&z.fb();var a=b.hb();a<f&&k.d(n.$EVT_STATE_CHANGE,g,-a-1,m,h,d,f)};b.Wb=function(b){q&&a.sb(bb,b&&q.wc.$Outside?"":"hidden")};b.Ab=function(b,a){if(l&&a>=o){l=e;y();p.Xb();z.fb();k.d(n.$EVT_SLIDESHOW_END,g,m,x,o,f)}k.d(n.$EVT_PROGRESS_CHANGE,g,a,m,h,d,f)};b.kc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Bd,C)}};q&&b.Cb(q);o=b.R();b.R();b.Cb(v);h=v.R();d=h+i.$AutoPlayInterval;u.$Shift(d);b.zb(u);f=b.R()}function Qb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(vb*g*(f&1)),e=b.round(wb*g*(f>>1&1));if(a.Jb()&&a.ab()>=10&&a.ab()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.Sb()&&a.ab()>=30){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.l(c,d);a.k(c,e)}}function lc(a){P=0;!G&&ic()&&kc(a)}function kc(b){kb=M;F=c;ub=e;Q=d;a.e(f,hb,Sb);a.v();Db=A.Dc();A.F();if(!kb)w=0;if(I){var h=b.touches[0];pb=h.clientX;qb=h.clientY}else{var g=a.pc(b);pb=g.x;qb=g.y;a.M(b)}D=0;X=0;ab=0;C=x.D();k.d(n.$EVT_DRAG_START,v(C),C,b)}function Sb(d){if(F&&(!a.Eb()||d.button)){var e;if(I){var j=d.touches;if(j&&j.length>0)e=new h(j[0].clientX,j[0].clientY)}else e=a.pc(d);if(e){var f=e.x-pb,g=e.y-qb;if(b.floor(C)!=C)w=i.$PlayOrientation&G;if((f||g)&&!w){if(G==3)if(b.abs(g)>b.abs(f))w=2;else w=1;else w=G;if(I&&w==1&&b.abs(g)-b.abs(f)>3)ub=c}if(w){var l=g,k=wb;if(w==1){l=f;k=vb}if(D-X<-2)ab=1;else if(D-X>2)ab=0;X=D;D=l;mb=C-D/k/(gb||1);if(D&&w&&!ub){a.M(d);if(!M)A.Td(mb);else A.Ud(mb)}else a.Eb()&&a.M(d)}}}else zb(d)}function zb(h){gc();if(F){F=e;a.v();a.ee(f,hb,Sb);P=D;P&&a.M(h);A.F();var c=x.D();k.d(n.$EVT_DRAG_END,v(c),c,v(C),C,h);var d=b.floor(C);if(b.abs(D)>=i.$MinDragOffsetToSlide){d=b.floor(c);d+=ab}var g=b.abs(d-c);g=1-b.pow(1-g,5);if(!P&&kb)A.hd(Db);else if(c==d){nb.Yc();nb.Pb()}else A.jb(c,d,g*Mb)}}function dc(a){B[r];r=v(a);nb=B[r];Lb(a);return r}function tc(a,b){w=0;dc(a);k.d(n.$EVT_PARK,v(a),b)}function Lb(b,c){a.f(R,function(a){a.Bb(v(b),b,c)})}function ic(){var a=n.Yb||0;n.Yb|=i.$DragOrientation;return G=i.$DragOrientation&~a}function gc(){if(G){n.Yb&=~i.$DragOrientation;G=0}}function Pb(){var b=a.pb();a.G(b,O);a.r(b,"absolute");return b}function v(a){return(a%u+u)%u}function ac(b,a){V(b,i.$SlideDuration,a)}function tb(){a.f(R,function(a){a.Mb(a.Z.$ChanceToShow>fb)})}function Yb(b){b=a.Fb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.ic(o,c)||a.ic(o,d))return;fb=1;tb();B[r].Pb()}function Xb(){fb=0;tb()}function Zb(){O={bb:L,eb:K,$Top:0,$Left:0};a.f(T,function(b){a.G(b,O);a.r(b,"absolute");a.sb(b,"hidden");a.x(b)});a.G(Y,O)}function db(b,a){V(b,a,c)}function V(h,g,l){if(Jb&&(!F||i.$NaviQuitDrag)){M=c;F=e;A.F();if(a.Ec(g))g=Mb;var f=Ab.hb(),d=h;if(l){d=f+h;if(h>0)d=b.ceil(d);else d=b.floor(d)}var k=(d-f)%u;d=f+k;var j=f==d?0:g*b.abs(k);j=b.min(j,g*E*1.5);A.jb(f,d,j)}}k.$PlayTo=V;k.$GoTo=function(a){V(a,0)};k.$Next=function(){db(1)};k.$Prev=function(){db(-1)};k.$Pause=function(){N=e};k.$Play=function(){if(!N){N=c;B[r]&&B[r].Pb()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){H.yb=a.v()};k.$SlidesCount=function(){return T.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return N};k.$IsDragging=function(){return F};k.$IsSliding=function(){return M};k.$LastDragSucceded=function(){return P};k.$GetOriginalWidth=function(){return a.g(t||o)};k.$GetOriginalHeight=function(){return a.i(t||o)};k.$GetScaleWidth=function(){return a.g(o)};k.$GetScaleHeight=function(){return a.i(o)};k.$SetScaleWidth=function(c){if(!S||!a.Jb()||a.ab()>=8){if(!t){var b=a.u(o,e);a.Ub(b,"id");a.r(b,"relative");a.k(b,0);a.l(b,0);t=a.u(o,e);a.Ub(t,"id");a.Ib(t,"");a.r(t,"absolute");a.k(t,0);a.l(t,0);a.y(t,a.g(o));a.K(t,a.i(o));a.me(t,"0 0");a.s(t,b);var d=a.qb(o);a.s(o,t);a.Qc(b,d);a.o(b);a.o(t)}gb=c/a.g(t);a.ne(t,gb);a.y(o,c);a.K(o,gb*a.i(t))}};k.jc=function(a){var d=b.ceil(v(rb/Rb)),c=v(a-r+d);if(c>E){if(a-r>u/2)a-=u;else if(a-r<=-u/2)a+=u}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.J(o);var i=a.m({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:e,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:3,$HwaMode:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},Wb),Z=i.$SlideshowOptions,H=a.m({$Class:s},i.Ye),ob=i.$NavigatorOptions,jb=i.$DirectionNavigatorOptions,W=i.$ThumbnailNavigatorOptions,cb=i.$UISearchMode,t,y=a.n(o,"slides",d,cb),Y=a.n(o,"loading",d,cb)||a.pb(f),Gb=a.n(o,"navigator",d,cb),Cb=a.n(o,"thumbnavigator",d,cb),cc=a.g(y),bc=a.i(y);if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var O,T=a.qb(y),r=-1,nb,u=T.length,L=i.$SlideWidth||cc,K=i.$SlideHeight||bc,Ob=i.$SlideSpacing,vb=L+Ob,wb=K+Ob,Rb=i.$PlayOrientation==1?vb:wb,E=b.min(i.$DisplayPieces,u),bb,w,G,ub,I,R=[],Tb,Eb,Ib,Vb,sc,N,Nb=i.$PauseOnHover,Mb=i.$SlideDuration,lb,S,rb,Jb=E<u,jc=Jb&&i.$DragOrientation,P,fb=1,M,F,Q,pb=0,qb=0,D,X,ab,Ab,x,U,A,Kb=new fc,gb;N=i.$AutoPlay;k.Z=Wb;Zb();o["jssor-slider"]=c;a.X(y,a.Rb(y));a.r(y,"absolute");bb=a.u(y);a.nb(a.rb(y),bb,y);if(Z){Vb=Z.$ShowLink;lb=Z.$Class;S=E==1&&u>1&&lb}rb=S||E>=u?0:i.$ParkingPosition;var sb=y,B=[],z,J,yb="mousedown",hb="mousemove",Bb="mouseup",eb,C,kb,Db,mb;if(g.navigator.msPointerEnabled){yb="MSPointerDown";hb="MSPointerMove";Bb="MSPointerUp";eb="MSPointerCancel";if(i.$DragOrientation){var xb="none";if(i.$DragOrientation==1)xb="pan-y";else if(i.$DragOrientation==2)xb="pan-x";a.Rc(sb.style,"-ms-touch-action",xb)}}else if("ontouchstart"in g||"createTouch"in f){I=c;yb="touchstart";hb="touchmove";Bb="touchend";eb="touchcancel"}U=new pc;if(S)z=new lb(Kb,L,K,Z,I);a.s(bb,U.lb);a.sb(y,"hidden");J=Pb();a.lc(J,"#000");a.Gb(J,0);a.nb(sb,J,sb.firstChild);for(var ib=0;ib<T.length;ib++){var nc=T[ib],Ub=new oc(nc,ib);B.push(Ub)}a.x(Y);Ab=new qc;A=new ec(Ab,U);if(jc){a.e(y,yb,lc);a.e(f,Bb,zb);eb&&a.e(f,eb,zb)}Nb&=I?2:1;if(Gb&&ob){Tb=new ob.$Class(Gb,ob);R.push(Tb)}if(jb){Eb=new jb.$Class(o,jb,i.$UISearchMode);R.push(Eb)}if(Cb&&W){W.$StartIndex=i.$StartIndex;Ib=new W.$Class(Cb,W);R.push(Ib)}a.f(R,function(a){a.Kb(u,B,Y);a.$On(p.ob,ac)});a.e(o,"mouseout",Yb);a.e(o,"mouseover",Xb);tb();i.$ArrowKeyNavigation&&a.e(f,"keydown",function(a){if(a.keyCode==q.ie)db(-1);else a.keyCode==q.he&&db(1)});k.$SetScaleWidth(k.$GetOriginalWidth());A.jb(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={ob:1};g.$JssorNavigator$=function(e,B){var g=this;m.call(g);e=a.J(e);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,A=[],z=[];function w(a){a!=-1&&z[a].qc(a==k)}function u(a){g.d(p.ob,a*l)}g.$Elmt=e;g.Bb=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.Mb=function(b){a.o(e,b)};var v;g.Kb=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.y(e,t);a.K(e,r);f.$AutoCenter&1&&a.l(e,(a.g(a.rb(e))-t)/2);f.$AutoCenter&2&&a.k(e,(a.i(a.rb(e))-r)/2);for(var g=0;g<s;g++){var D=a.Ae();a.je(D,g+1);var m=a.fc(h,"NumberTemplate",D,c);a.r(m,"absolute");var B=g%(p+1);a.l(m,!i?q*B:g%j*q);a.k(m,i?w*B:b.floor(g/(p+1))*w);a.s(e,m);A[g]=m;f.$ActionMode&1&&a.e(m,"click",a.t(d,u,g));f.$ActionMode&2&&a.e(m,"mouseover",a.t(d,u,g));z[g]=a.cb(m)}v=c}};g.Z=f=a.m({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},B);h=a.n(e,"prototype");o=a.g(h);n=a.i(h);a.N(e,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorDirectionNavigator$=function(i,t,o){var e=this;m.call(e);var b=a.n(i,"arrowleft",d,o),f=a.n(i,"arrowright",d,o),h,j,n=a.g(i),l=a.i(i),r=a.g(b),q=a.i(b);function k(a){e.d(p.ob,a,c)}e.Bb=function(b,a,c){if(c);};e.Mb=function(c){a.o(b,c);a.o(f,c)};var s;e.Kb=function(c){if(!s){if(h.$AutoCenter&1){a.l(b,(n-r)/2);a.l(f,(n-r)/2)}if(h.$AutoCenter&2){a.k(b,(l-q)/2);a.k(f,(l-q)/2)}a.e(b,"click",a.t(d,k,-j));a.e(f,"click",a.t(d,k,j));a.cb(b);a.cb(f)}};e.Z=h=a.m({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,d,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.J(i);function z(n,e){var g=this,b,m,k;function o(){m.qc(l==e)}function i(){if(!q.$LastDragSucceded()){var a=(f-e%f)%f,b=q.jc((e+a)/f),c=b*f-a;h.d(p.ob,c)}}g.C=e;g.vc=o;k=n.gd||n.Kc||a.pb();g.lb=b=a.fc(j,"ThumbnailTemplate",k,c);m=a.cb(b);d.$ActionMode&1&&a.e(b,"click",i);d.$ActionMode&2&&a.e(b,"mouseover",i)}h.Bb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].vc();u[c].vc();!e&&q.$PlayTo(q.jc(b.floor(d/f)))};h.Mb=function(b){a.o(i,b)};var v;h.Kb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=d.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.r(g,"absolute");a.sb(g,"hidden");d.$AutoCenter&1&&a.l(g,(y-C)/2);d.$AutoCenter&2&&a.k(g,(w-A)/2);a.y(g,C);a.K(g,A);var j=[];a.f(D,function(l,e){var i=new z(l,e),d=i.lb,c=b.floor(e/f),k=e%f;a.l(d,(t+n)*k*(1-h));a.k(d,(s+o)*k*h);if(!j[c]){j[c]=a.pb();a.s(g,j[c])}a.s(j[c],d);u.push(i)});var E=a.m({$AutoPlay:e,$NaviQuitDrag:e,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:3,$PlayOrientation:d.$Orientation,$DragOrientation:d.$DisableDrag?0:d.$Orientation},d);q=new r(i,E);v=c}};h.Z=d=a.m({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.g(i);w=a.i(i);g=a.n(i,"slides");j=a.n(g,"prototype");a.N(g,j);f=d.$Lanes||1;n=d.$SpacingX;o=d.$SpacingY;t=a.g(j);s=a.i(j);k=d.$DisplayPieces};function s(){j.call(this,0,0);this.Nb=a.O}})(window,document,Math,null,true,false)