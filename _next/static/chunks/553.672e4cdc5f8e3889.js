"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{5193:function(e,r,a){a.d(r,{zx:function(){return k}});var n=a(7375),t=a(2846),i=a(5031),s=a(8554),l=a.n(s),c=a(7294),o=a(6450),m=a(9238);function d(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var p=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],f=(0,o.kr)({strict:!1,name:"ButtonGroupContext"}),g=f[0],v=f[1],h=(0,t.Gp)((function(e,r){var a=e.size,n=e.colorScheme,s=e.variant,l=e.className,o=e.spacing,m=void 0===o?"0.5rem":o,f=e.isAttached,v=e.isDisabled,h=d(e,p),y=(0,i.cx)("chakra-button__group",l),b=c.useMemo((function(){return{size:a,colorScheme:n,variant:s,isDisabled:v}}),[a,n,s,v]),N={display:"inline-flex"};return N=u({},N,f?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:m}}),c.createElement(g,{value:b},c.createElement(t.m$.div,u({ref:r,role:"group",__css:N,className:y,"data-attached":f?"":void 0},h)))}));i.Ts&&(h.displayName="ButtonGroup");var y=["label","placement","spacing","children","className","__css"],b=function(e){var r=e.label,a=e.placement,n=e.spacing,s=void 0===n?"0.5rem":n,l=e.children,o=void 0===l?c.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):l,p=e.className,f=e.__css,g=d(e,y),v=(0,i.cx)("chakra-button__spinner",p),h="start"===a?"marginEnd":"marginStart",b=c.useMemo((function(){var e;return u(((e={display:"flex",alignItems:"center",position:r?"relative":"absolute"})[h]=r?s:0,e.fontSize="1em",e.lineHeight="normal",e),f)}),[f,r,h,s]);return c.createElement(t.m$.div,u({className:v},g,{__css:b}),o)};i.Ts&&(b.displayName="ButtonSpinner");var N=["children","className"],x=function(e){var r=e.children,a=e.className,n=d(e,N),s=c.isValidElement(r)?c.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,l=(0,i.cx)("chakra-button__icon",a);return c.createElement(t.m$.span,u({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:l}),s)};i.Ts&&(x.displayName="ButtonIcon");var _=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,t.Gp)((function(e,r){var a=v(),s=(0,t.mq)("Button",u({},a,e)),o=(0,t.Lr)(e),m=o.isDisabled,p=void 0===m?null==a?void 0:a.isDisabled:m,f=o.isLoading,g=o.isActive,h=o.children,y=o.leftIcon,N=o.rightIcon,x=o.loadingText,k=o.iconSpacing,w=void 0===k?"0.5rem":k,T=o.type,S=o.spinner,C=o.spinnerPlacement,G=void 0===C?"start":C,W=o.className,L=o.as,j=d(o,_),I=c.useMemo((function(){var e,r=l()({},null!=(e=null==s?void 0:s._focus)?e:{},{zIndex:1});return u({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s,!!a&&{_focus:r})}),[s,a]),$=function(e){var r=c.useState(!e),a=r[0],n=r[1];return{ref:c.useCallback((function(e){e&&n("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(L),O=$.ref,B=$.type,R={rightIcon:N,leftIcon:y,iconSpacing:w,children:h};return c.createElement(t.m$.button,u({disabled:p||f,ref:(0,n.qq)(r,O),as:L,type:null!=T?T:B,"data-active":(0,i.PB)(g),"data-loading":(0,i.PB)(f),__css:I,className:(0,i.cx)("chakra-button",W)},j),f&&"start"===G&&c.createElement(b,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:w},S),f?x||c.createElement(t.m$.span,{opacity:0},c.createElement(E,R)):c.createElement(E,R),f&&"end"===G&&c.createElement(b,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:w},S))}));function E(e){var r=e.leftIcon,a=e.rightIcon,n=e.children,t=e.iconSpacing;return c.createElement(c.Fragment,null,r&&c.createElement(x,{marginEnd:t},r),n,a&&c.createElement(x,{marginStart:t},a))}i.Ts&&(k.displayName="Button");var w=["icon","children","isRound","aria-label"],T=(0,t.Gp)((function(e,r){var a=e.icon,n=e.children,t=e.isRound,i=e["aria-label"],s=d(e,w),l=a||n,o=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(k,u({padding:"0",borderRadius:t?"full":void 0,ref:r,"aria-label":i},s),o)}));i.Ts&&(T.displayName="IconButton")},4651:function(e,r,a){a.d(r,{Ee:function(){return u}});var n=a(2846),t=a(5031),i=a(7294),s=a(4697);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function c(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var o=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=i.forwardRef((function(e,r){var a=e.htmlWidth,n=e.htmlHeight,t=e.alt,s=c(e,o);return i.createElement("img",l({width:a,height:n,ref:r,alt:t},s))}));t.Ts&&(d.displayName="NativeImage");var u=(0,n.Gp)((function(e,r){var a=e.fallbackSrc,o=e.fallback,u=e.src,p=e.srcSet,f=e.align,g=e.fit,v=e.loading,h=e.ignoreFallback,y=e.crossOrigin,b=e.fallbackStrategy,N=void 0===b?"beforeLoadOrError":b,x=e.referrerPolicy,_=c(e,m),k=null!=v||h||!(void 0!==a||void 0!==o),E=function(e){var r=e.loading,a=e.src,n=e.srcSet,t=e.onLoad,l=e.onError,c=e.crossOrigin,o=e.sizes,m=e.ignoreFallback,d=(0,i.useState)("pending"),u=d[0],p=d[1];(0,i.useEffect)((function(){p(a?"loading":"pending")}),[a]);var f=(0,i.useRef)(),g=(0,i.useCallback)((function(){if(a){v();var e=new Image;e.src=a,c&&(e.crossOrigin=c),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=function(e){v(),p("loaded"),null==t||t(e)},e.onerror=function(e){v(),p("failed"),null==l||l(e)},f.current=e}}),[a,c,n,o,t,l,r]),v=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,s.a)((function(){if(!m)return"loading"===u&&g(),function(){v()}}),[u,g,m]),m?"loaded":u}(l({},e,{ignoreFallback:k})),w=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(E,N),T=l({ref:r,objectFit:g,objectPosition:f},k?_:(0,t.CE)(_,["onError","onLoad"]));return w?o||i.createElement(n.m$.img,l({as:d,className:"chakra-image__placeholder",src:a},T)):i.createElement(n.m$.img,l({as:d,src:u,srcSet:p,crossOrigin:y,loading:v,referrerPolicy:x,className:"chakra-image"},T))}));t.Ts&&(u.displayName="Image")},8527:function(e,r,a){a.d(r,{Ug:function(){return ae},gC:function(){return ne},kC:function(){return G},xu:function(){return h},xv:function(){return ie}});var n=a(2846),t=a(4244),i=a(5031),s=a(7294),l=a(894),c=a(6450);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function m(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var d=["ratio","children","className"],u=(0,n.Gp)((function(e,r){var a=e.ratio,t=void 0===a?4/3:a,l=e.children,c=e.className,u=m(e,d),p=s.Children.only(l),f=(0,i.cx)("chakra-aspect-ratio",c);return s.createElement(n.m$.div,o({ref:r,position:"relative",className:f,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(t,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},u),p)}));i.Ts&&(u.displayName="AspectRatio");var p=["className"],f=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Badge",e),t=(0,n.Lr)(e);t.className;var l=m(t,p);return s.createElement(n.m$.span,o({ref:r,className:(0,i.cx)("chakra-badge",e.className)},l,{__css:o({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},a)}))}));i.Ts&&(f.displayName="Badge");var g=["size","centerContent"],v=["size"],h=(0,n.m$)("div");i.Ts&&(h.displayName="Box");var y=(0,n.Gp)((function(e,r){var a=e.size,n=e.centerContent,t=void 0===n||n,i=m(e,g),l=t?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.createElement(h,o({ref:r,boxSize:a,__css:o({},l,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(y.displayName="Square");var b=(0,n.Gp)((function(e,r){var a=e.size,n=m(e,v);return s.createElement(y,o({size:a,ref:r,borderRadius:"9999px"},n))}));i.Ts&&(b.displayName="Circle");var N=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(N.displayName="Center");var x=["className"],_=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Code",e),t=(0,n.Lr)(e);t.className;var l=m(t,x);return s.createElement(n.m$.code,o({ref:r,className:(0,i.cx)("chakra-code",e.className)},l,{__css:o({display:"inline-block"},a)}))}));i.Ts&&(_.displayName="Code");var k=["className","centerContent"],E=(0,n.Gp)((function(e,r){var a=(0,n.Lr)(e),t=a.className,l=a.centerContent,c=m(a,k),d=(0,n.mq)("Container",e);return s.createElement(n.m$.div,o({ref:r,className:(0,i.cx)("chakra-container",t)},c,{__css:o({},d,l&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(E.displayName="Container");var w=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],T=["className","orientation","__css"],S=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Divider",e),t=a.borderLeftWidth,l=a.borderBottomWidth,c=a.borderTopWidth,d=a.borderRightWidth,u=a.borderWidth,p=a.borderStyle,f=a.borderColor,g=m(a,w),v=(0,n.Lr)(e),h=v.className,y=v.orientation,b=void 0===y?"horizontal":y,N=v.__css,x=m(v,T),_={vertical:{borderLeftWidth:t||d||u||"1px",height:"100%"},horizontal:{borderBottomWidth:l||c||u||"1px",width:"100%"}};return s.createElement(n.m$.hr,o({ref:r,"aria-orientation":b},x,{__css:o({},g,{border:"0",borderColor:f,borderStyle:p},_[b],N),className:(0,i.cx)("chakra-divider",h)}))}));i.Ts&&(S.displayName="Divider");var C=["direction","align","justify","wrap","basis","grow","shrink"],G=(0,n.Gp)((function(e,r){var a=e.direction,t=e.align,i=e.justify,l=e.wrap,c=e.basis,d=e.grow,u=e.shrink,p=m(e,C),f={display:"flex",flexDirection:a,alignItems:t,justifyContent:i,flexWrap:l,flexBasis:c,flexGrow:d,flexShrink:u};return s.createElement(n.m$.div,o({ref:r,__css:f},p))}));i.Ts&&(G.displayName="Flex");var W=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],L=(0,n.Gp)((function(e,r){var a=e.templateAreas,t=e.gap,i=e.rowGap,l=e.columnGap,c=e.column,d=e.row,u=e.autoFlow,p=e.autoRows,f=e.templateRows,g=e.autoColumns,v=e.templateColumns,h=m(e,W),y={display:"grid",gridTemplateAreas:a,gridGap:t,gridRowGap:i,gridColumnGap:l,gridAutoColumns:g,gridColumn:c,gridRow:d,gridAutoFlow:u,gridAutoRows:p,gridTemplateRows:f,gridTemplateColumns:v};return s.createElement(n.m$.div,o({ref:r,__css:y},h))}));i.Ts&&(L.displayName="Grid");var j=["className"],I=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Heading",e),t=(0,n.Lr)(e);t.className;var l=m(t,j);return s.createElement(n.m$.h2,o({ref:r,className:(0,i.cx)("chakra-heading",e.className)},l,{__css:a}))}));i.Ts&&(I.displayName="Heading");var $=["className"],O=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Kbd",e),t=(0,n.Lr)(e),l=t.className,c=m(t,$);return s.createElement(n.m$.kbd,o({ref:r,className:(0,i.cx)("chakra-kbd",l)},c,{__css:o({fontFamily:"mono"},a)}))}));i.Ts&&(O.displayName="Kbd");var B=["className","isExternal"],R=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Link",e),t=(0,n.Lr)(e),l=t.className,c=t.isExternal,d=m(t,B);return s.createElement(n.m$.a,o({target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:r,className:(0,i.cx)("chakra-link",l)},d,{__css:a}))}));i.Ts&&(R.displayName="Link");var z=["children","styleType","stylePosition","spacing"],F=["as"],D=["as"],P=(0,n.eC)("List"),A=P[0],X=P[1],q=(0,n.Gp)((function(e,r){var a,t=(0,n.jC)("List",e),i=(0,n.Lr)(e),l=i.children,d=i.styleType,u=void 0===d?"none":d,p=i.stylePosition,f=i.spacing,g=m(i,z),v=(0,c.WR)(l),h=f?((a={})["& > *:not(style) ~ *:not(style)"]={mt:f},a):{};return s.createElement(A,{value:t},s.createElement(n.m$.ul,o({ref:r,listStyleType:u,listStylePosition:p,role:"list",__css:o({},t.container,h)},g),v))}));i.Ts&&(q.displayName="List");var Q=(0,n.Gp)((function(e,r){e.as;var a=m(e,F);return s.createElement(q,o({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},a))}));i.Ts&&(Q.displayName="OrderedList");var Y=(0,n.Gp)((function(e,r){e.as;var a=m(e,D);return s.createElement(q,o({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},a))}));i.Ts&&(Y.displayName="UnorderedList");var H=(0,n.Gp)((function(e,r){var a=X();return s.createElement(n.m$.li,o({ref:r},e,{__css:a.item}))}));i.Ts&&(H.displayName="ListItem");var M=(0,n.Gp)((function(e,r){var a=X();return s.createElement(l.JO,o({ref:r,role:"presentation"},e,{__css:a.icon}))}));i.Ts&&(M.displayName="ListIcon");var U=["columns","spacingX","spacingY","spacing","minChildWidth"],V=(0,n.Gp)((function(e,r){var a,t=e.columns,l=e.spacingX,c=e.spacingY,d=e.spacing,u=e.minChildWidth,p=m(e,U),f=(0,n.Fg)(),g=u?function(e,r){return(0,i.XQ)(e,(function(e){var a,t=(0,n.LP)("sizes",e,(a=e,(0,i.hj)(a)?a+"px":a))(r);return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+t+", 1fr))"}))}(u,f):(a=t,(0,i.XQ)(a,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return s.createElement(L,o({ref:r,gap:d,columnGap:l,rowGap:c,templateColumns:g},p))}));i.Ts&&(V.displayName="SimpleGrid");var K=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(K.displayName="Spacer");var J="& > *:not(style) ~ *:not(style)";var Z=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return s.createElement(n.m$.div,o({className:"chakra-stack__item"},e,{__css:o({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},re=(0,n.Gp)((function(e,r){var a,t=e.isInline,l=e.direction,d=e.align,u=e.justify,p=e.spacing,f=void 0===p?"0.5rem":p,g=e.wrap,v=e.children,h=e.divider,y=e.className,b=e.shouldWrapChildren,N=m(e,Z),x=t?"row":null!=l?l:"column",_=s.useMemo((function(){return function(e){var r,a=e.spacing,n=e.direction,t={column:{marginTop:a,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:a},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:a,marginStart:0},"row-reverse":{marginTop:0,marginEnd:a,marginBottom:0,marginStart:0}};return(r={flexDirection:n})[J]=(0,i.XQ)(n,(function(e){return t[e]})),r}({direction:x,spacing:f})}),[x,f]),k=s.useMemo((function(){return function(e){var r=e.spacing,a=e.direction,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(a,(function(e){return n[e]}))}}({spacing:f,direction:x})}),[f,x]),E=!!h,w=!b&&!E,T=(0,c.WR)(v),S=w?T:T.map((function(e,r){var a="undefined"!==typeof e.key?e.key:r,n=r+1===T.length,t=b?s.createElement(ee,{key:a},e):e;if(!E)return t;var i=n?null:s.cloneElement(h,{__css:k});return s.createElement(s.Fragment,{key:a},t,i)})),C=(0,i.cx)("chakra-stack",y);return s.createElement(n.m$.div,o({ref:r,display:"flex",alignItems:d,justifyContent:u,flexDirection:_.flexDirection,flexWrap:g,className:C,__css:E?{}:(a={},a[J]=_[J],a)},N),S)}));i.Ts&&(re.displayName="Stack");var ae=(0,n.Gp)((function(e,r){return s.createElement(re,o({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(ae.displayName="HStack");var ne=(0,n.Gp)((function(e,r){return s.createElement(re,o({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(ne.displayName="VStack");var te=["className","align","decoration","casing"],ie=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Text",e),t=(0,n.Lr)(e);t.className,t.align,t.decoration,t.casing;var l=m(t,te),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(n.m$.p,o({ref:r,className:(0,i.cx)("chakra-text",e.className)},c,l,{__css:a}))}));i.Ts&&(ie.displayName="Text");var se=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],le=["className"];function ce(e){return"number"===typeof e?e+"px":e}var oe=(0,n.Gp)((function(e,r){var a=e.spacing,l=void 0===a?"0.5rem":a,c=e.spacingX,d=e.spacingY,u=e.children,p=e.justify,f=e.direction,g=e.align,v=e.className,h=e.shouldWrapChildren,y=m(e,se),b=s.useMemo((function(){var e={spacingX:c,spacingY:d},r=e.spacingX,a=void 0===r?l:r,n=e.spacingY,s=void 0===n?l:n;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(a,(function(r){return ce((0,t.fr)("space",r)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(s,(function(r){return ce((0,t.fr)("space",r)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:p,alignItems:g,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[l,c,d,p,g,f]),N=h?s.Children.map(u,(function(e,r){return s.createElement(me,{key:r},e)})):u;return s.createElement(n.m$.div,o({ref:r,className:(0,i.cx)("chakra-wrap",v),overflow:"hidden"},y),s.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:b},N))}));i.Ts&&(oe.displayName="Wrap");var me=(0,n.Gp)((function(e,r){var a=e.className,t=m(e,le);return s.createElement(n.m$.li,o({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",a)},t))}));i.Ts&&(me.displayName="WrapItem")}}]);