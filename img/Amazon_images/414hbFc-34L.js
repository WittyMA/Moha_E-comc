'use strict';mix_d("BuffetDisclaimersCards__buffet-high-priority-disclaimers-card:buffet-high-priority-disclaimers-card__rUby73Yz","require exports tslib @c/remote-operations @c/scoped-dom @c/aui-utils @c/metrics".split(" "),function(xa,ha,v,ya,za,L,Aa){function ia(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function Ba(a){if(a&&a.__esModule)return a;var c=Object.create(null);a&&Object.keys(a).forEach(function(b){if("default"!==b){var f=Object.getOwnPropertyDescriptor(a,b);Object.defineProperty(c,
b,f.get?f:{enumerable:!0,get:function(){return a[b]}})}});c["default"]=a;return c}var Ca=ia(ya),q=ia(za),ja;(function(a){a.BEFORE_FIRST_OPEN="before first open";a.OPEN="open";a.CLOSE="close"})(ja||(ja={}));var ka;(function(a){a.RIGHT_OUT_OF_SCREEN="-120%";a.INSIDE_SCREEN="0px"})(ka||(ka={}));var D;(function(a){a.MOBILE="mobile";a.DESKTOP="desktop"})(D||(D={}));var E;(function(a){a.ATF="ATF";a.BTF="BTF"})(E||(E={}));var J;(function(a){a.GPSR="GPSR";a.ENV="ENV"})(J||(J={}));var O;(function(a){a.Sidesheet=
"Sidesheet";a.BTF="BTF"})(O||(O={}));var la;(function(a){a.FATAL="FATAL";a.ERROR="ERROR";a.WARN="WARN"})(la||(la={}));var y;(function(a){a[a.PSI=0]="PSI";a[a.RSP_MANUFACTURER=1]="RSP_MANUFACTURER";a[a.PD=2]="PD";a[a.RED=3]="RED"})(y||(y={}));var g;(function(a){a[a.RSP=0]="RSP";a[a.MANUFACTURER=1]="MANUFACTURER";a[a.PSI=2]="PSI";a[a.PD=3]="PD";a[a.RED=4]="RED"})(g||(g={}));var m;(function(a){a.CLIENT_LOAD="Buffet.Client.Load";a.RED_LOADED_CHARGER_INCLUDED="Buffet.Client.RedChargerIncludedLoaded";a.RED_LOADED_NO_CHARGER_INCLUDED=
"Buffet.Client.RedNoChargerIncludedLoaded";a.INGRESS_LINK_CLICK="Buffet.Sidesheet.IngressLinkClick";a.RSP_INGRESS_LINK_CLICK="Buffet.Sidesheet.RspIngressLinkClick";a.PD_INGRESS_LINK_CLICK="Buffet.Sidesheet.PdIngressLinkClick";a.PSI_INGRESS_LINK_CLICK="Buffet.Sidesheet.PsiIngressLinkClick";a.RED_ICON_CLICK_CHARGER_INCLUDED="Buffet.Sidesheet.RedIconClickChargerIncluded";a.RED_ICON_CLICK_NO_CHARGER_INCLUDED="Buffet.Sidesheet.RedIconClickNoChargerIncluded";a.RED_LINK_CLICK_CHARGER_INCLUDED="Buffet.Sidesheet.RedLinkClickChargerIncluded";
a.RED_LINK_CLICK_NO_CHARGER_INCLUDED="Buffet.Sidesheet.RedLinkClickNoChargerIncluded";a.SIDESHEET_OPENED="Buffet.Sidesheet.Open";a.SIDESHEET_CLOSED="Buffet.Sidesheet.Close";a.SIDESHEET_DWELL_TIME="Buffet.Sidesheet.DwellTime";a.SIDESHEET_CONTENT_LOADED="Buffet.SdesheetContent.Load";a.SIDESHEET_CONTENT_LOAD_LATENCY="Buffet.SidesheetContent.LoadLatency";a.PSI_PILL_CLICK="Buffet.SidesheetContent.PsiPillClick";a.MANUFACTURER_PILL_CLICK="Buffet.SidesheetContent.ManufacturerPillClick";a.RSP_PILL_CLICK="Buffet.SidesheetContent.RspPillClick";
a.PD_PILL_CLICK="Buffet.SidesheetContent.PdPillClick";a.RED_PILL_CLICK="Buffet.SidesheetContent.RedPillClick";a.PSI_ZOOM_IN_CLICK="Buffet.SidesheetContent.PsiZoomInClick";a.PSI_ZOOM_OUT_CLICK="Buffet.SidesheetContent.PsiZoomOutClick";a.PD_SIDESHEET_WINDOW_OPEN_CLICK="Buffet.SidesheetContent.PdWindowOpen";a.GPSR_EXPANDER_OPEN="Buffet.Sidesheet.GpsrExpanderOpen";a.ENVIORNMENTAL_EXPANDER_OPEN="Buffet.Sidesheet.EnviornmantalExpanderOpen";a.PD_BTF_WINDOW_OPEN_CLICK="Buffet.BtfContent.PdWindowOpen";a.MISSING_ASIN_ERROR=
"Buffet.MissingAsin.Error";a.MISSING_CRUCIAL_ELEMENTS_ERROR="Buffet.MissingCrucialElements.Error";a.MISSING_GPSR_CONTENT_ERROR="Buffet.MissingGpsrContent.Error";a.MISSING_PD_ELEMENTS_ERROR="Buffet.MissingExpectedPdElements.Error";a.SIDESHEET_OPEN_ERROR="Buffet.Sidesheet.Open.Error";a.SIDESHEET_CONTENT_LOAD_ERROR="Buffet.Sidesheet.ContentLoad.Error";a.ALL_AAPI_CALL_FAIL="Buffet.AllAapiCall.FAIL";a.RSP_MANUFACTURER_AAPI_CALL_FAIL="Buffet.RspManufacturerAapiCall.FAIL";a.PSI_AAPI_CALL_FAIL="Buffet.PsiAapiCall.FAIL";
a.PD_AAPI_CALL_FAIL="Buffet.PdAapiCall.FAIL";a.RED_AAPI_CALL_FAIL="Buffet.RedAapiCall.FAIL"})(m||(m={}));var ma=new Map([[g.RSP,{aapiCallFailMetric:m.RSP_MANUFACTURER_AAPI_CALL_FAIL,pillClickMetric:m.RSP_PILL_CLICK}],[g.MANUFACTURER,{aapiCallFailMetric:m.RSP_MANUFACTURER_AAPI_CALL_FAIL,pillClickMetric:m.MANUFACTURER_PILL_CLICK}],[g.PSI,{aapiCallFailMetric:m.PSI_AAPI_CALL_FAIL,pillClickMetric:m.PSI_PILL_CLICK}],[g.PD,{aapiCallFailMetric:m.PD_AAPI_CALL_FAIL,pillClickMetric:m.PD_PILL_CLICK}],[g.RED,
{aapiCallFailMetric:m.RED_AAPI_CALL_FAIL,pillClickMetric:m.RED_PILL_CLICK}]]),Da=new Map([[g.RSP,y.RSP_MANUFACTURER],[g.MANUFACTURER,y.RSP_MANUFACTURER],[g.PSI,y.PSI],[g.PD,y.PD],[g.RED,y.RED]]),Ea=new Map([[J.GPSR,m.GPSR_EXPANDER_OPEN],[J.ENV,m.ENVIORNMENTAL_EXPANDER_OPEN]]),M=function(a,c){a&&!a.classList.contains(c)&&a.classList.add(c)},N=function(a,c){a&&a.classList.contains(c)&&a.classList.remove(c)},Z=function(a){if(!a.every(function(c){return c})||!a.map(function(c){return null===c||void 0===
c?void 0:c.id}).every(function(c){return c}))throw Error("Some HTML elements are missing.");},na=function(a){return{html:a.innerHTML,className:a.className,style:a.style.cssText}},Q=function(a,c){a.innerHTML=c.html;a.className=c.className;a.style.cssText=c.style},I;(function(a){a.LANDING_ASIN="buffet-atf-asin";a.OPEN_BUTTON_IMG_DOC_CONT="buffet-sidesheet-atf-open-button-show-image-doc-contact";a.CLOSE_BUTTON="buffet-sidesheet-atf-close-button";a.DARKENED_BACKGROUND="buffet-atf-darkened-background";
a.RED_ATF_CONTENT="buffet-red-atf-content";a.RED_IS_CHARGER_INCLUDED_INPUT="buffet-red-atf-is-charger-included";a.RED_ICON="buffet-red-atf-icon";a.RED_LINK="buffet-red-atf-link";a.SIDESHEET="buffet-sidesheet-atf";a.SIDESHEET_CONTENT="buffet-sidesheet-atf-content";a.SIDESHEET_SUB_CONTENT="buffet-sidesheet-atf-sub-content";a.SIDESHEET_CONTENT_BUFFER_SPINNER="buffet-sidesheet-atf-content-spinner";a.SIDESHEET_ERROR_ALERT="buffet-sidesheet-atf-error-alert";a.SIDESHEET_GPSR_PILLS_CONTAINER="buffet-sidesheet-gpsr-pills-container";
a.SIDESHEET_ENV_PILLS_CONTAINER="buffet-sidesheet-env-pills-container";a.SIDESHEET_RSP_PILL="buffet-sidesheet-rsp-pill";a.SIDESHEET_MANUFACTURER_PILL="buffet-sidesheet-manufacturer-pill";a.SIDESHEET_PSI_PILL="buffet-sidesheet-psi-pill";a.SIDESHEET_RSP_CONTENT="buffet-sidesheet-rsp-content-container";a.SIDESHEET_MANUFACTURER_CONTENT="buffet-sidesheet-manufacturer-content-container";a.SIDESHEET_PSI_CONTENT="buffet-sidesheet-psi-content-container";a.SIDESHEET_PSI_CAROUSEL="buffet-psi-component";a.SIDESHEET_RED_CONTENT=
"buffet-sidesheet-red-content-container";a.SIDESHEET_RED_PILL="buffet-product-red-pill";a.SIDESHEET_PD_CONTENT="buffet-sidesheet-product-docs-content-container";a.SIDESHEET_PD_PILL="buffet-product-docs-pill";a.RSP_MANUFACTURER_AAPI_FAIL="buffet-sidesheet-rsp-manufacturer-aapi-fail";a.PSI_AAPI_FAIL="buffet-sidesheet-psi-aapi-fail";a.PD_AAPI_FAIL="buffet-sidesheet-pd-aapi-fail";a.RED_AAPI_FAIL="buffet-sidesheet-mobile-red-aapi-fail";a.SIDESHEET_PD_LINKS_SECTION="product-docs-links";a.SIDESHEET_PD_LINK=
"product-docs-ingress-";a.SIDESHEET_PD_URL="buffet-product-docs-url-";a.SIDESHEET_PD_LIST_SIZE="product-docs-list-size";a.BTF_PD_LINKS_SECTION="product-docs-btf-links";a.BTF_PD_LINK="product-docs-btf-ingress-";a.BTF_PD_URL="buffet-product-docs-btf-url-";a.BTF_PD_LIST_SIZE="product-docs-btf-list-size";a.PRODUCT_DOCS_BTF="product-docs-btf-section";a.GPSR_EXPANDER="buffet-sidesheet-gpsr-expander";a.GPSR_EXPANDER_HEADER="buffet-sidesheet-gpsr-expander-header";a.ENVIRONMENTAL_EXPANDER="buffet-sidesheet-env-expander";
a.ENVIRONMENTAL_EXPANDER_HEADER="buffet-sidesheet-env-expander-header";a.DYNAMIC_DOCUMENTS_INGRESS="buffet-dynamic-product-docs-ingress-atf";a.DYNAMIC_CONTACTS_INGRESS="buffet-dynamic-contacts-ingress-atf";a.DYNAMIC_IMAGES_INGRESS="buffet-dynamic-images-ingress-atf"})(I||(I={}));var oa;(function(a){a.DE="A1PA6795UKMFR9";a.FR="A13V1IB3VIYZZH";a.IT="APJ6JRA9NG5V4";a.ES="A1RKKUPIHCS9HS";a.NL="A1805IZSGTT6HS";a.SE="A2NODRKZP88ZB9";a.PL="A1C3SOZRARQ6R3";a.BE="AMEN7PMS3EDWL";a.IE="A28R8C7NBKEWEA"})(oa||
(oa={}));var u=function(a,c,b,f){void 0===f&&(f=1);Aa.count(a+"."+c+"."+b,f)},pa=function(a,c,b,f,e,l){var d=b.SIDESHEET_PD_LINKS_SECTION,k=b.SIDESHEET_PD_LIST_SIZE,h=b.SIDESHEET_PD_LINK,r=b.SIDESHEET_PD_URL,n=m.PD_SIDESHEET_WINDOW_OPEN_CLICK;a===O.BTF&&(d=b.BTF_PD_LINKS_SECTION,k=b.BTF_PD_LIST_SIZE,h=b.BTF_PD_LINK,r=b.BTF_PD_URL,n=m.PD_BTF_WINDOW_OPEN_CLICK);a=q["default"].cardRoot.querySelector("#"+d);k=q["default"].cardRoot.querySelector("#"+k);if(a&&k)for(a=function(w){var t=q["default"].cardRoot.querySelector("#"+
h+w);w=q["default"].cardRoot.querySelector("#"+r+w);if(t&&w){var z=w.value;t.addEventListener("click",function(){c?t.setAttribute("href",z):f.openWindow(z,"ProductDisplay");u(e,l,n)})}else u(e,l,m.MISSING_PD_ELEMENTS_ERROR)},b=0;b<parseInt(k.value);b++)a(b);else u(e,l,m.MISSING_PD_ELEMENTS_ERROR)},qa=function(a,c,b){if(a){var f=!1,e=a.querySelectorAll("li"),l=a.querySelectorAll("img");e.forEach(function(d,k){d.style.maxWidth="1600px";0===k?d.style.marginLeft="0px":k===e.length-1&&(d.style.marginRight=
"0px")});l.forEach(function(d){d.addEventListener("click",function(){return v.__awaiter(void 0,void 0,void 0,function(){return v.__generator(this,function(k){switch(k.label){case 0:return f?(u(c,b,m.PSI_ZOOM_OUT_CLICK),e.forEach(function(h){h.style.width=""}),l.forEach(function(h){h.style.maxWidth="100%";var r=q["default"].cardRoot.querySelector("#"+h.id+"-zoomed-out").value;h.src=r}),f=!1):(u(c,b,m.PSI_ZOOM_IN_CLICK),e.forEach(function(h){h.style.width="1600px"}),l.forEach(function(h){h.style.maxWidth=
"1600px";var r=q["default"].cardRoot.querySelector("#"+h.id+"-zoomed-in").value;h.src=r}),f=!0),[4,d.decode()];case 1:return k.sent(),d.scrollIntoView({block:"center",inline:"center"}),[2]}})})})})}},aa=new Map([[J.ENV,Array.from([g.RED])],[J.GPSR,Array.from([g.PSI,g.MANUFACTURER,g.RSP,g.PD])]]),Fa=function(a){return new Map([[g.RSP,{contentElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_RSP_CONTENT),pillElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_RSP_PILL)}],[g.MANUFACTURER,
{contentElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_MANUFACTURER_CONTENT),pillElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_MANUFACTURER_PILL)}],[g.PSI,{contentElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_PSI_CONTENT),pillElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_PSI_PILL)}],[g.PD,{contentElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_PD_CONTENT),pillElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_PD_PILL)}],[g.RED,
{contentElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_RED_CONTENT),pillElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_RED_PILL)}]])},R=function(a){return new Map([[J.GPSR,{headerElement:q["default"].cardRoot.querySelector("#"+a.GPSR_EXPANDER_HEADER),pillContainerElement:q["default"].cardRoot.querySelector("#"+a.SIDESHEET_GPSR_PILLS_CONTAINER)}],[J.ENV,{headerElement:q["default"].cardRoot.querySelector("#"+a.ENVIRONMENTAL_EXPANDER_HEADER),pillContainerElement:q["default"].cardRoot.querySelector("#"+
a.SIDESHEET_ENV_PILLS_CONTAINER)}]])},Ga=function(a,c){switch(c){case g.RSP:case g.MANUFACTURER:return a.RSP_MANUFACTURER_AAPI_FAIL;case g.PSI:return a.PSI_AAPI_FAIL;case g.PD:return a.PD_AAPI_FAIL;case g.RED:return a.RED_AAPI_FAIL}},Ha=function(a){switch(a){case g.RSP:case g.MANUFACTURER:return y.RSP_MANUFACTURER;case g.PSI:return y.PSI;case g.PD:return y.PD;case g.RED:return y.RED}},Ia=function(a,c){a.forEach(function(b,f){b.contentElement&&b.pillElement||(a.delete(f),c.delete(Ha(f)))})},S=function(a){var c;
try{for(var b=v.__values(aa.keys()),f=b.next();!f.done;f=b.next()){var e=f.value;if(aa.get(e).includes(a))return e}}catch(d){var l={error:d}}finally{try{f&&!f.done&&(c=b.return)&&c.call(b)}finally{if(l)throw l.error;}}throw Error("Content type not found in Expanders-ContentType mapping!");},Ja=function(a,c){var b,f;try{for(var e=v.__values(a.keys()),l=e.next();!l.done;l=e.next()){var d=l.value,k=a.get(d).pillElement,h=S(d),r=null===(f=c.get(h))||void 0===f?void 0:f.pillContainerElement;k&&r&&k.addEventListener("click",
ra(k,r))}}catch(w){var n={error:w}}finally{try{l&&!l.done&&(b=e.return)&&b.call(e)}finally{if(n)throw n.error;}}},ra=function(a,c){return function(){var b=c.offsetWidth,f=c.scrollWidth,e=a.offsetLeft-b/2+a.offsetWidth/2;0>e?e=0:e+b>f&&(e=f-b);c.scroll({behavior:"smooth",left:e})}},sa=function(a,c,b){var f;void 0===b&&(b=!1);var e=S(a);try{for(var l=v.__values(c.keys()),d=l.next();!d.done;d=l.next()){var k=d.value,h=c.get(k),r=S(k);if(r===e)if(k===a){var n=h;M(n.pillElement,"a-button-selected");N(n.contentElement,
"aok-hidden")}else n=h,N(n.pillElement,"a-button-selected"),M(n.contentElement,"aok-hidden");else if(b){n=k;a:{var w=void 0,t=void 0,z=new Set(c.keys()),F=aa.get(r);if(F){try{for(var G=v.__values(F),B=G.next();!B.done;B=G.next()){var A=B.value;if(z.has(A)){var x=A;break a}}}catch(H){t={error:H}}finally{try{B&&!B.done&&(w=G.return)&&w.call(G)}finally{if(t)throw t.error;}}x=null}else throw Error("Expander must be defined in Expander-ContentType mapping!");}n===x?(n=h,M(n.pillElement,"a-button-selected"),
N(n.contentElement,"aok-hidden")):(n=h,N(n.pillElement,"a-button-selected"),M(n.contentElement,"aok-hidden"))}}}catch(H){var p={error:H}}finally{try{d&&!d.done&&(f=l.return)&&f.call(l)}finally{if(p)throw p.error;}}},ta=function(a){var c,b;try{for(var f=v.__values(Object.values(J)),e=f.next();!e.done;e=f.next()){var l=e.value,d=null===(b=R(a).get(l))||void 0===b?void 0:b.headerElement,k=null===d||void 0===d?void 0:d.getAttribute("aria-expanded");d&&"true"===k&&d.click()}}catch(r){var h={error:r}}finally{try{e&&
!e.done&&(c=f.return)&&c.call(f)}finally{if(h)throw h.error;}}},ba,ca,K=new Set(Object.values(y).filter(function(a){return"number"===typeof a})),C,Ka=Object.keys(y).length/2,Pa=function(a,c,b,f,e,l,d,k,h,r,n){return v.__awaiter(void 0,void 0,void 0,function(){var w,t,z,F,G,B,A;return v.__generator(this,function(x){switch(x.label){case 0:w=Date.now();t=q["default"].cardRoot.querySelector("#"+d.SIDESHEET_CONTENT);z=q["default"].cardRoot.querySelector("#"+d.SIDESHEET_CONTENT_BUFFER_SPINNER);F=q["default"].cardRoot.querySelector("#"+
d.SIDESHEET_ERROR_ALERT);G=[t,z,F];try{Z(G)}catch(p){throw u(D.DESKTOP,E.BTF,m.MISSING_CRUCIAL_ELEMENTS_ERROR),Error();}a&&(ba=na(z),ca=na(t));if(c)return[3,5];x.label=1;case 1:return x.trys.push([1,3,,4]),Q(z,ba),Q(t,ca),B=q["default"].cardRoot.querySelector("#"+d.SIDESHEET_SUB_CONTENT),C=Fa(d),A=R(d),La(B,b,e),Ia(C,K),Ja(C,A),Ma(b,e),[4,Na(l,d,k,b,e,f,n)];case 2:x.sent();if(K.size===Ka)throw u(b,e,m.ALL_AAPI_CALL_FAIL),Error();z.style.opacity="0";u(b,e,m.SIDESHEET_CONTENT_LOAD_LATENCY,Date.now()-
w);L.delay(function(){M(z,"aok-hidden");N(B,"aok-hidden");t.style.opacity="1"},200);c=!0;return[3,4];case 3:return x.sent(),u(b,e,m.SIDESHEET_CONTENT_LOAD_ERROR),Q(z,ba),Q(t,ca),N(F,"aok-hidden"),z.style.opacity="0",L.delay(function(){M(z,"aok-hidden");t.style.opacity="1"},200),[3,4];case 4:return[3,6];case 5:0!==K.size&&K.forEach(function(p){return v.__awaiter(void 0,void 0,void 0,function(){var H,da,T,ua,U,va,wa,V,W,ea,X,fa,Y;return v.__generator(this,function(P){switch(P.label){case 0:H=p;switch(H){case y.PSI:return[3,
1];case y.RSP_MANUFACTURER:return[3,3];case y.PD:return[3,5];case y.RED:return[3,7]}return[3,9];case 1:return[4,l.getPsiContent({asin:k})];case 2:return(da=P.sent())&&"false"===da.querySelector("#"+d.PSI_AAPI_FAIL).value?(K.delete(y.PSI),T=C.get(g.PSI).contentElement,T.style.opacity="0",L.delay(function(){T.innerHTML=da.outerHTML;T.style.opacity="1"},500),ua=q["default"].cardRoot.querySelector("#"+d.SIDESHEET_PSI_CAROUSEL),qa(ua,b,e)):u(b,e,m.PSI_AAPI_CALL_FAIL),[3,9];case 3:return[4,l.getRspManufacturerContent({asin:k})];
case 4:return(U=P.sent())&&"false"===U.querySelector("#"+d.RSP_MANUFACTURER_AAPI_FAIL).value?(K.delete(y.RSP_MANUFACTURER),va=U.querySelector("#"+d.SIDESHEET_RSP_CONTENT),wa=U.querySelector("#"+d.SIDESHEET_MANUFACTURER_CONTENT),V=C.get(g.RSP).contentElement,W=C.get(g.MANUFACTURER).contentElement,V.style.opacity="0",W.style.opacity="0",L.delay(function(){V.innerHTML=va.innerHTML;W.innerHTML=wa.innerHTML;V.style.opacity="1";W.style.opacity="1"},500)):u(b,e,m.RSP_MANUFACTURER_AAPI_CALL_FAIL),[3,9];case 5:return[4,
l.getPdContent({asin:k})];case 6:return(ea=P.sent())&&"false"===ea.querySelector("#"+d.PD_AAPI_FAIL).value?(K.delete(y.PD),X=C.get(g.PD).contentElement,X.style.opacity="0",L.delay(function(){X.innerHTML=ea.innerHTML;pa(O.Sidesheet,f,d,n,b,e);X.style.opacity="1"},500)):u(b,e,m.PD_AAPI_CALL_FAIL),[3,9];case 7:return[4,l.getRedContent({asin:k})];case 8:return(fa=P.sent())&&"false"===fa.querySelector("#"+d.RED_AAPI_FAIL).value?(K.delete(y.RED),Y=C.get(g.RED).contentElement,Y.style.opacity="0",L.delay(function(){Y.innerHTML=
fa.innerHTML;Y.style.opacity="1"},500)):u(b,e,m.RED_AAPI_CALL_FAIL),[3,9];case 9:return[2]}})})}),x.label=6;case 6:return Oa(d,h,a,r,b,e),a=!1,[2,[a,c]]}})})},Ma=function(a,c){var b,f,e=function(h){null===(f=C.get(h))||void 0===f?void 0:f.pillElement.addEventListener("click",function(){sa(h,C);u(a,c,ma.get(h).pillClickMetric)})};try{for(var l=v.__values(C.keys()),d=l.next();!d.done;d=l.next())e(d.value)}catch(h){var k={error:h}}finally{try{d&&!d.done&&(b=l.return)&&b.call(l)}finally{if(k)throw k.error;
}}},Na=function(a,c,b,f,e,l,d){return v.__awaiter(void 0,void 0,void 0,function(){var k,h,r,n,w,t,z,F,G,B,A,x;return v.__generator(this,function(p){switch(p.label){case 0:k=null,p.label=1;case 1:p.trys.push([1,23,24,25]),h=v.__values(C.keys()),r=h.next(),p.label=2;case 2:if(r.done)return[3,22];n=r.value;w=C.get(n);t=void 0;z=n;switch(z){case g.PSI:return[3,3];case g.MANUFACTURER:return[3,5];case g.RSP:return[3,5];case g.PD:return[3,8];case g.RED:return[3,10]}return[3,12];case 3:return[4,a.getPsiContent({asin:b})];
case 4:return t=p.sent(),[3,12];case 5:return null!==k?[3,7]:[4,a.getRspManufacturerContent({asin:b})];case 6:k=p.sent(),p.label=7;case 7:return t=k,[3,12];case 8:return[4,a.getPdContent({asin:b})];case 9:return t=p.sent(),[3,12];case 10:return[4,a.getRedContent({asin:b})];case 11:return t=p.sent(),[3,12];case 12:if(!t||!w.contentElement||"false"!==(null===(x=t.querySelector("#"+Ga(c,n)))||void 0===x?void 0:x.value))return[3,20];K.delete(Da.get(n));F=n;switch(F){case g.PSI:return[3,13];case g.RSP:return[3,
14];case g.MANUFACTURER:return[3,15];case g.PD:return[3,16];case g.RED:return[3,18]}return[3,19];case 13:return w.contentElement.innerHTML=t.outerHTML,p=q["default"].cardRoot.querySelector("#"+c.SIDESHEET_PSI_CAROUSEL),qa(p,f,e),[3,19];case 14:p=w;var H=t.querySelector("#"+c.SIDESHEET_RSP_CONTENT);p.contentElement.innerHTML=H.innerHTML;return[3,19];case 15:return p=w,H=t.querySelector("#"+c.SIDESHEET_MANUFACTURER_CONTENT),p.contentElement.innerHTML=H.innerHTML,[3,19];case 16:return[4,Qa(w,t,c,l,d,
f,e)];case 17:return p.sent(),[3,19];case 18:return w.contentElement.innerHTML=t.outerHTML,[3,19];case 19:return[3,21];case 20:u(f,e,ma.get(n).aapiCallFailMetric),p.label=21;case 21:return r=h.next(),[3,2];case 22:return[3,25];case 23:return G=p.sent(),B={error:G},[3,25];case 24:try{r&&!r.done&&(A=h.return)&&A.call(h)}finally{if(B)throw B.error;}return[7];case 25:return[2]}})})},Qa=function(a,c,b,f,e,l,d){return v.__awaiter(void 0,void 0,void 0,function(){return v.__generator(this,function(k){a.contentElement.innerHTML=
c.outerHTML;pa(O.Sidesheet,f,b,e,l,d);return[2]})})},La=function(a,c,b){try{Z([a])}catch(f){throw u(c,b,m.MISSING_CRUCIAL_ELEMENTS_ERROR),Error();}},Oa=function(a,c,b,f,e,l){var d,k,h=S(c);ta(a);var r,n=null===(r=R(a).get(h))||void 0===r?void 0:r.headerElement;r=null===n||void 0===n?void 0:n.getAttribute("aria-expanded");n&&"false"===r&&(n.click(),u(e,l,Ea.get(h)));if(b||f)sa(c,C,b),c=null===(d=C.get(c))||void 0===d?void 0:d.pillElement,a=null===(k=R(a).get(h))||void 0===k?void 0:k.pillContainerElement,
c&&a&&ra(c,a)()},Ra=function(){var a=q["default"].cardRoot.querySelector("#"+I.RED_IS_CHARGER_INCLUDED_INPUT);a&&u(D.DESKTOP,E.ATF,"true"===a.value?m.RED_LOADED_CHARGER_INCLUDED:m.RED_LOADED_NO_CHARGER_INCLUDED)};ha._operationNames=["getRspManufacturerContent","getPsiContent","getPdContent","getRedContent"];ha.card=function(){return v.__awaiter(void 0,void 0,void 0,function(){var a,c,b,f,e,l,d,k,h,r,n,w,t,z,F,G;return v.__generator(this,function(B){switch(B.label){case 0:return u(D.DESKTOP,E.ATF,
m.CLIENT_LOAD),Ra(),a=q["default"].cardRoot.querySelector("#"+I.LANDING_ASIN),a&&a.value?[4,new Promise(function(A,x){xa(["@p/buffet-sidesheet-atf"],function(p){A(Ba(p))},x)})]:(u(D.DESKTOP,E.ATF,m.MISSING_ASIN_ERROR),[2]);case 1:c=B.sent().default;b=Ca["default"].setup(["getRspManufacturerContent","getPsiContent","getPdContent","getRedContent"]);f=!0;e=!1;d=function(A){return function(x){return v.__awaiter(void 0,void 0,void 0,function(){var p;return v.__generator(this,function(H){switch(H.label){case 0:return x.preventDefault(),
c.showSidesheet(),u(D.DESKTOP,E.ATF,m.SIDESHEET_OPENED),[4,Pa(f,e,D.DESKTOP,!1,E.ATF,b,I,a.value,A,!0,c)];case 1:p=v.__read.apply(void 0,[H.sent(),2]);f=p[0];if(e=p[1])u(D.DESKTOP,E.ATF,m.SIDESHEET_CONTENT_LOADED),l=Date.now();return[2]}})})}};k=q["default"].cardRoot.querySelector("#"+I.RED_ICON);h=q["default"].cardRoot.querySelector("#"+I.RED_LINK);k&&h&&(n=(r=q["default"].cardRoot.querySelector("#"+I.RED_IS_CHARGER_INCLUDED_INPUT))&&r.value,k.addEventListener("click",function(A){return v.__awaiter(void 0,
void 0,void 0,function(){var x;return v.__generator(this,function(p){switch(p.label){case 0:return x="true"===n?m.RED_ICON_CLICK_CHARGER_INCLUDED:m.RED_ICON_CLICK_NO_CHARGER_INCLUDED,u(D.DESKTOP,E.ATF,x),[4,d(g.RED)(A)];case 1:return p.sent(),[2]}})})}),h.addEventListener("click",function(A){return v.__awaiter(void 0,void 0,void 0,function(){var x;return v.__generator(this,function(p){switch(p.label){case 0:return x="true"===n?m.RED_LINK_CLICK_CHARGER_INCLUDED:m.RED_LINK_CLICK_NO_CHARGER_INCLUDED,
u(D.DESKTOP,E.ATF,x),[4,d(g.RED)(A)];case 1:return p.sent(),[2]}})})}));w=function(){c.closeSidesheet();ta(I);u(D.DESKTOP,E.ATF,m.SIDESHEET_CLOSED);e&&u(D.DESKTOP,E.ATF,m.SIDESHEET_DWELL_TIME,Date.now()-l)};if(t=q["default"].cardRoot.querySelector("#"+I.SIDESHEET)){z=q["default"].cardRoot.querySelector("#"+I.DARKENED_BACKGROUND);F=q["default"].cardRoot.querySelector("#"+I.CLOSE_BUTTON);G=[z,F];try{Z(G)}catch(A){return u(D.DESKTOP,E.ATF,m.MISSING_CRUCIAL_ELEMENTS_ERROR),[2]}F.addEventListener("click",
function(){w()});z.addEventListener("click",function(){w()})}return[2]}})})}});