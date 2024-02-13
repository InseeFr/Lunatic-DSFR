import{j as ae}from"./jsx-runtime-Kowmy4gq.js";import{I as Ke}from"./Input-DMm-Y9XH.js";import{R as Z,r as j}from"./index-CBqU2yxZ.js";import{g as $e,a as qe}from"./getErrorStates-C-Ngk_mI.js";import{f as Ue}from"./client-D2oCQSOe.js";import{u as We}from"./dsfr-Bu8y7YP_.js";function se(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var ee;(function(e){e.event="event",e.props="prop"})(ee||(ee={}));function q(){}function Ge(e){var r,t=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r&&n.length===r.length&&n.every(function(i,u){return i===r[u]})||(r=n,t=e.apply(void 0,n)),t}}function H(e){return!!(e||"").match(/\d/)}function z(e){return e==null}function Ze(e){return typeof e=="number"&&isNaN(e)}function pe(e){return z(e)||Ze(e)||typeof e=="number"&&!isFinite(e)}function Se(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function ze(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function He(e,r,t){var n=ze(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function Je(e){var r=j.useRef(e);r.current=e;var t=j.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function ce(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),i=a[0],u=a[1]||"";return{beforeDecimal:i,afterDecimal:u,hasNegation:t,addNegation:n}}function Qe(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function ye(e,r,t){for(var n="",a=t?"0":"",i=0;i<=r-1;i++)n+=e[i]||a;return n}function me(e,r){return Array(r+1).join(e)}function be(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return t+a;a=a.replace(".","");var u=1+i,f=a.length;return u<0?a="0."+me("0",Math.abs(u))+a:u>=f?a=a+me("0",u-f):a=(a.substring(0,u)||"0")+"."+a.substring(u),t+a}function ge(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=ce(e),i=a.beforeDecimal,u=a.afterDecimal,f=a.hasNegation,d=parseFloat("0."+(u||"0")),g=u.length<=r?"0."+u:d.toFixed(r),m=g.split("."),p=i.split("").reverse().reduce(function(x,V,v){return x.length>v?(Number(x[0])+Number(V)).toString()+x.substring(1,x.length):V+x},m[0]),c=ye(m[1]||"",r,t),S=f?"-":"",l=n?".":"";return""+S+p+l+c}function G(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var Ve=Ge(function(e,r){for(var t=0,n=0,a=e.length,i=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[i-1-n]&&i-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:i-n}}});function Xe(e,r,t){return Math.min(Math.max(e,r),t)}function le(e){return Math.max(e.selectionStart,e.selectionEnd)}function Ye(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function xe(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Ne(e,r){return e===void 0&&(e=" "),typeof e=="string"?e:e[r]||" "}function er(e){var r=e.currentValue,t=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return r[n]===t[a]}function rr(e,r,t,n,a,i,u){u===void 0&&(u=er);var f=a.findIndex(function(C){return C}),d=e.slice(0,f);!r&&!t.startsWith(d)&&(r=d,t=d+t,n=n+d.length);for(var g=t.length,m=e.length,p={},c=new Array(g),S=0;S<g;S++){c[S]=-1;for(var l=0,x=m;l<x;l++){var V=u({currentValue:t,lastValue:r,formattedValue:e,currentValueIndex:S,formattedValueIndex:l});if(V&&p[l]!==!0){c[S]=l,p[l]=!0;break}}}for(var v=n;v<g&&(c[v]===-1||!i(t[v]));)v++;var I=v===g||c[v]===-1?m:c[v];for(v=n-1;v>0&&c[v]===-1;)v--;var N=v===-1||c[v]===-1?0:c[v]+1;return N>I?I:n-N<I-n?N:I}function ne(e,r,t,n){var a=e.length;if(r=Xe(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function tr(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=!!(H(e[t])||H(e[t-1]));return r}function we(e,r,t,n,a,i){i===void 0&&(i=q);var u=Je(function(l,x){var V,v;return pe(l)?(v="",V=""):typeof l=="number"||x?(v=typeof l=="number"?be(l):l,V=n(v)):(v=a(l,void 0),V=n(v)),{formattedValue:V,numAsString:v}}),f=j.useState(function(){return u(z(e)?r:e,t)}),d=f[0],g=f[1],m=function(l,x){l.formattedValue!==d.formattedValue&&g({formattedValue:l.formattedValue,numAsString:l.value}),i(l,x)},p=e,c=t;z(e)&&(p=d.numAsString,c=!0);var S=u(p,c);return j.useMemo(function(){g(S)},[S.formattedValue]),[d,m]}function ar(e){return e.replace(/[^0-9]/g,"")}function nr(e){return e}function de(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,u=e.format;u===void 0&&(u=nr);var f=e.removeFormatting;f===void 0&&(f=ar);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,p=e.isAllowed,c=e.onChange;c===void 0&&(c=q);var S=e.onKeyDown;S===void 0&&(S=q);var l=e.onMouseUp;l===void 0&&(l=q);var x=e.onFocus;x===void 0&&(x=q);var V=e.onBlur;V===void 0&&(V=q);var v=e.value,I=e.getCaretBoundary;I===void 0&&(I=tr);var N=e.isValidInputCharacter;N===void 0&&(N=H);var C=e.isCharacterSame,P=se(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),K=we(v,d,!!g,u,f,m),$=K[0],w=$.formattedValue,M=$.numAsString,U=K[1],L=j.useRef({formattedValue:w,numAsString:M}),J=function(o,s){L.current={formattedValue:o.formattedValue,numAsString:o.value},U(o,s)},W=j.useState(!1),Q=W[0],X=W[1],h=j.useRef(null),y=j.useRef({setCaretTimeout:null,focusTimeout:null});j.useEffect(function(){return X(!0),function(){clearTimeout(y.current.setCaretTimeout),clearTimeout(y.current.focusTimeout)}},[]);var B=u,F=function(o,s){var b=parseFloat(s);return{formattedValue:o,value:s,floatValue:isNaN(b)?void 0:b}},A=function(o,s,b){o.selectionStart===0&&o.selectionEnd===o.value.length||(G(o,s),y.current.setCaretTimeout=setTimeout(function(){o.value===b&&o.selectionStart!==o.selectionEnd&&G(o,s)},0))},R=function(o,s,b){return ne(o,s,I(o),b)},k=function(o,s,b){var E=I(s),_=rr(s,w,o,b,E,N,C);return _=ne(s,_,E),_},re=function(o){var s=o.formattedValue;s===void 0&&(s="");var b=o.input,E=o.setCaretPosition;E===void 0&&(E=!0);var _=o.source,D=o.event,O=o.numAsString,T=o.caretPos;if(b){if(T===void 0&&E){var Y=o.inputValue||b.value,ue=le(b);b.value=s,T=k(Y,s,ue)}b.value=s,E&&T!==void 0&&A(b,T,s)}s!==w&&J(F(s,O),{event:D,source:_})};j.useEffect(function(){var o=L.current,s=o.formattedValue,b=o.numAsString;w!==s&&(w!==M||s!==b)&&J(F(w,M),{event:void 0,source:ee.props})},[w,M]);var oe=h.current?le(h.current):void 0,te=typeof window<"u"?j.useLayoutEffect:j.useEffect;te(function(){var o=h.current;if(w!==L.current.formattedValue&&o){var s=k(L.current.formattedValue,w,oe);o.value=w,A(o,s,w)}},[w]);var Oe=function(o,s,b){var E=Ve(w,o),_=Object.assign(Object.assign({},E),{lastValue:w}),D=f(o,_),O=B(D);if(D=f(O,void 0),p&&!p(F(O,D))){var T=s.target,Y=le(T),ue=k(o,w,Y);return T.value=w,A(T,ue,w),!1}return re({formattedValue:O,numAsString:D,inputValue:o,event:s,source:b,setCaretPosition:!0,input:s.target}),!0},Be=function(o){var s=o.target,b=s.value,E=Oe(b,o,ee.event);E&&c(o)},Pe=function(o){var s=o.target,b=o.key,E=s.selectionStart,_=s.selectionEnd,D=s.value;D===void 0&&(D="");var O;if(b==="ArrowLeft"||b==="Backspace"?O=Math.max(E-1,0):b==="ArrowRight"?O=Math.min(E+1,D.length):b==="Delete"&&(O=E),O===void 0||E!==_){S(o);return}var T=O;if(b==="ArrowLeft"||b==="ArrowRight"){var Y=b==="ArrowLeft"?"left":"right";T=R(D,O,Y),T!==O&&o.preventDefault()}else b==="Delete"&&!N(D[O])?T=R(D,O,"right"):b==="Backspace"&&!N(D[O])&&(T=R(D,O,"left"));T!==O&&A(s,T,D),o.isUnitTestRun&&A(s,T,D),S(o)},Te=function(o){var s=o.target,b=s.selectionStart,E=s.selectionEnd,_=s.value;if(_===void 0&&(_=""),b===E){var D=R(_,b);D!==b&&A(s,D,_)}l(o)},ke=function(o){o.persist&&o.persist();var s=o.target;h.current=s,y.current.focusTimeout=setTimeout(function(){var b=s.selectionStart,E=s.selectionEnd,_=s.value;_===void 0&&(_="");var D=R(_,b);D!==b&&!(b===0&&E===_.length)&&A(s,D,_),x(o)},0)},je=function(o){h.current=null,clearTimeout(y.current.focusTimeout),clearTimeout(y.current.setCaretTimeout),V(o)},Me=Q&&Ye()?"numeric":void 0,ve=Object.assign({inputMode:Me},P,{type:r,value:w,onChange:Be,onKeyDown:Pe,onMouseUp:Te,onFocus:ke,onBlur:je});if(t==="text")return a?Z.createElement(Z.Fragment,null,a(w,P)||null):Z.createElement("span",Object.assign({},P,{ref:i}),w);if(n){var Le=n;return Z.createElement(Le,Object.assign({},ve,{ref:i}))}return Z.createElement("input",Object.assign({},ve,{ref:i}))}function fe(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var i=r.suffix;i===void 0&&(i="");var u=r.allowNegative,f=r.thousandsGroupStyle;if(f===void 0&&(f="thousand"),e===""||e==="-")return e;var d=ie(r),g=d.thousandSeparator,m=d.decimalSeparator,p=t!==0&&e.indexOf(".")!==-1||t&&n,c=ce(e,u),S=c.beforeDecimal,l=c.afterDecimal,x=c.addNegation;return t!==void 0&&(l=ye(l,t,!!n)),g&&(S=He(S,g,f)),a&&(S=a+S),i&&(l=l+i),x&&(S="-"+S),e=S+(p&&m||"")+l,e}function ie(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function ir(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&r&&(e="-"+e),e}function or(e,r){return new RegExp("(^-)|[0-9]|"+Se(e),r?"g":void 0)}function ur(e,r,t){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Ie(e,r,t){var n;r===void 0&&(r=xe(e));var a=t.allowNegative,i=t.prefix;i===void 0&&(i="");var u=t.suffix;u===void 0&&(u="");var f=t.decimalScale,d=r.from,g=r.to,m=g.start,p=g.end,c=ie(t),S=c.allowedDecimalSeparators,l=c.decimalSeparator,x=e[p]===l;if(H(e)&&(e===i||e===u)&&r.lastValue==="")return e;if(p-m===1&&S.indexOf(e[m])!==-1){var V=f===0?"":l;e=e.substring(0,m)+V+e.substring(m+1,e.length)}var v=function(y,B,F){var A=!1,R=!1;i.startsWith("-")?A=!1:y.startsWith("--")?(A=!1,R=!0):u.startsWith("-")&&y.length===u.length?A=!1:y[0]==="-"&&(A=!0);var k=A?1:0;return R&&(k=2),k&&(y=y.substring(k),B-=k,F-=k),{value:y,start:B,end:F,hasNegation:A}},I=v(e,m,p),N=I.hasNegation;n=I,e=n.value,m=n.start,p=n.end;var C=v(r.lastValue,d.start,d.end),P=C.start,K=C.end,$=C.value,w=e.substring(m,p);e.length&&$.length&&(P>$.length-u.length||K<i.length)&&!(w&&u.startsWith(w))&&(e=$);var M=0;e.startsWith(i)?M+=i.length:m<i.length&&(M=m),e=e.substring(M),p-=M;var U=e.length,L=e.length-u.length;e.endsWith(u)?U=L:(p>L||p>e.length-u.length)&&(U=p),e=e.substring(0,U),e=ir(N?"-"+e:e,a),e=(e.match(or(l,!0))||[]).join("");var J=e.indexOf(l);e=e.replace(new RegExp(Se(l),"g"),function(y,B){return B===J?".":""});var W=ce(e,a),Q=W.beforeDecimal,X=W.afterDecimal,h=W.addNegation;return g.end-g.start<d.end-d.start&&Q===""&&x&&!parseFloat(X)&&(e=h?"-":""),e}function Ce(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,t.length+(i?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}function lr(e){var r=ie(e),t=r.thousandSeparator,n=r.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function De(e){e=lr(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,t=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=q);var i=e.onBlur;i===void 0&&(i=q);var u=e.thousandSeparator,f=e.decimalScale,d=e.fixedDecimalScale,g=e.prefix;g===void 0&&(g="");var m=e.defaultValue,p=e.value,c=e.valueIsNumericString,S=e.onValueChange,l=se(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),x=ie(e),V=x.decimalSeparator,v=x.allowedDecimalSeparators,I=function(h){return fe(h,e)},N=function(h,y){return Ie(h,y,e)},C=z(p)?m:p,P=c??ur(C,g,r);z(p)?z(m)||(P=P||typeof m=="number"):P=P||typeof p=="number";var K=function(h){return pe(h)?h:(typeof h=="number"&&(h=be(h)),P&&typeof f=="number"?ge(h,f,!!d):h)},$=we(K(p),K(m),!!P,I,N,S),w=$[0],M=w.numAsString,U=w.formattedValue,L=$[1],J=function(h){var y=h.target,B=h.key,F=y.selectionStart,A=y.selectionEnd,R=y.value;if(R===void 0&&(R=""),F!==A){a(h);return}B==="Backspace"&&R[0]==="-"&&F===g.length+1&&t&&G(y,1),f&&d&&(B==="Backspace"&&R[F-1]===V?(G(y,F-1),h.preventDefault()):B==="Delete"&&R[F]===V&&h.preventDefault()),v!=null&&v.includes(B)&&R[F]===V&&G(y,F+1);var k=u===!0?",":u;B==="Backspace"&&R[F-1]===k&&G(y,F-1),B==="Delete"&&R[F]===k&&G(y,F+1),a(h)},W=function(h){var y=M;if(y.match(/\d/g)||(y=""),n||(y=Qe(y)),d&&f&&(y=ge(y,f,d)),y!==M){var B=fe(y,e);L({formattedValue:B,value:y,floatValue:parseFloat(y)},{event:h,source:ee.event})}i(h)},Q=function(h){return h===V?!0:H(h)},X=function(h){var y=h.currentValue,B=h.lastValue,F=h.formattedValue,A=h.currentValueIndex,R=h.formattedValueIndex,k=y[A],re=F[R],oe=Ve(B,y),te=oe.to;return A>=te.start&&A<te.end&&v&&v.includes(k)&&re===V?!0:k===re};return Object.assign(Object.assign({},l),{value:U,valueIsNumericString:!1,isValidInputCharacter:Q,isCharacterSame:X,onValueChange:L,format:I,removeFormatting:N,getCaretBoundary:function(h){return Ce(h,e)},onKeyDown:J,onBlur:W})}function Fe(e){var r=De(e);return Z.createElement(de,Object.assign({},r))}function Ae(e,r){var t=r.format,n=r.allowEmptyFormatting,a=r.mask,i=r.patternChar;if(i===void 0&&(i="#"),e===""&&!n)return"";for(var u=0,f=t.split(""),d=0,g=t.length;d<g;d++)t[d]===i&&(f[d]=e[u]||Ne(a,u),u+=1);return f.join("")}function Ee(e,r,t){r===void 0&&(r=xe(e));var n=t.format,a=t.patternChar;a===void 0&&(a="#");var i=r.from,u=r.to,f=r.lastValue;f===void 0&&(f="");var d=function(V){return n[V]===a},g=function(V,v){for(var I="",N=0;N<V.length;N++)d(v+N)&&H(V[N])&&(I+=V[N]);return I},m=function(V){return V.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return m(e);if(f===""&&e.length===n.length){for(var p="",c=0;c<e.length;c++)if(d(c))H(e[c])&&(p+=e[c]);else if(e[c]!==n[c])return m(e);return p}var S=f.substring(0,i.start),l=e.substring(u.start,u.end),x=f.substring(i.end);return""+g(S,0)+m(l)+g(x,i.end)}function _e(e,r){var t=r.format,n=r.mask,a=r.patternChar;a===void 0&&(a="#");var i=Array.from({length:e.length+1}).map(function(){return!0}),u=0,f=-1,d={};t.split("").forEach(function(c,S){var l=void 0;c===a&&(u++,l=Ne(n,u-1),f===-1&&e[S]===l&&(f=S)),d[S]=l});for(var g=function(c){return t[c]===a&&e[c]!==d[c]},m=0,p=i.length;m<p;m++)i[m]=m===f||g(m)||g(m-1);return i[t.indexOf(a)]=!0,i}function fr(e){var r=e.mask;if(r){var t=r==="string"?r:r.toString();if(t.match(/\d/g))throw new Error("Mask "+r+" should not contain numeric character;")}}function sr(e,r){return e===""?!0:!(r!=null&&r.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function Re(e){e.mask,e.allowEmptyFormatting;var r=e.format,t=e.inputMode;t===void 0&&(t="numeric");var n=e.onKeyDown;n===void 0&&(n=q);var a=e.patternChar;a===void 0&&(a="#");var i=e.value,u=e.defaultValue,f=e.valueIsNumericString,d=se(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);fr(e);var g=function(l){return _e(l,e)},m=function(l){var x=l.key,V=l.target,v=V.selectionStart,I=V.selectionEnd,N=V.value;if(v!==I){n(l);return}var C=v;if(x==="Backspace"||x==="Delete"){var P="right";if(x==="Backspace"){for(;C>0&&r[C-1]!==a;)C--;P="left"}else{for(var K=r.length;C<K&&r[C]!==a;)C++;P="right"}C=ne(N,C,g(N),P)}else r[C]!==a&&x!=="ArrowLeft"&&x!=="ArrowRight"&&(C=ne(N,C+1,g(N),"right"));C!==v&&G(V,C),n(l)},p=z(i)?u:i,c=f??sr(p,r),S=Object.assign(Object.assign({},e),{valueIsNumericString:c});return Object.assign(Object.assign({},d),{value:i,defaultValue:u,valueIsNumericString:c,inputMode:t,format:function(l){return Ae(l,S)},removeFormatting:function(l,x){return Ee(l,x,S)},getCaretBoundary:g,onKeyDown:m})}function cr(e){var r=Re(e);return Z.createElement(de,Object.assign({},r))}const Vr=Object.freeze(Object.defineProperty({__proto__:null,NumberFormatBase:de,NumericFormat:Fe,PatternFormat:cr,getNumericCaretBoundary:Ce,getPatternCaretBoundary:_e,numericFormatter:fe,patternFormatter:Ae,removeNumericFormat:Ie,removePatternFormat:Ee,useNumericFormat:De,usePatternFormat:Re},Symbol.toStringTag,{value:"Module"}));function dr(e){return!e&&e!=0?null:e}const vr=e=>{const{DSFRProps:{nativeInputProps:r,...t},...n}=e;return ae(Ke,{nativeInputProps:{...r,...n},...t})},mr=({...e})=>ae(Fe,{customInput:vr,...e});function he({id:e,value:r,onChange:t,disabled:n,readOnly:a,label:i,min:u,max:f,decimals:d,unit:g,description:m,errors:p}){const[c]=j.useState(d?1/Math.pow(10,d):1),{cx:S}=We(),l=j.useCallback(I=>{const{floatValue:N}=I;return Number.isInteger(f)&&N&&f?N<=f||!1:!0},[f]),x=j.useCallback(function(I){const N=I.floatValue??null;t(Number.isNaN(N)?null:N)},[t]),V=$e(p),v=qe(p);return ae("div",{className:S("lunatic-input-number-container",Ue.cx("fr-grid-row","fr-grid-row--middle")),children:ae(mr,{DSFRProps:{label:i,disabled:n,hintText:m,className:S("lunatic-dsfr-input-number",{"fr-col-11":g!==void 0,"fr-col-12":g===void 0}),state:V,stateRelatedMessage:v,nativeInputProps:{inputMode:"numeric",id:e,maxLength:30,pattern:"([0-9]|\\s)*",type:"number",readOnly:a,disabled:n,min:u,max:f,step:c,placeholder:g,"aria-invalid":V==="error"}},onValueChange:x,value:dr(r),isAllowed:l,allowedDecimalSeparators:[",","."],decimalSeparator:",",thousandSeparator:"",decimalScale:d,allowLeadingZeros:!0})})}try{he.displayName="InputNumber",he.__docgenInfo={description:"",displayName:"InputNumber",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"Function"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},decimals:{defaultValue:null,description:"",name:"decimals",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"LunaticError[]"}}}}}catch{}export{he as I,Vr as r};
