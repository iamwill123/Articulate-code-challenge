(this["webpackJsonparticulate-challenge"]=this["webpackJsonparticulate-challenge"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":0,"data":{"front":{"text":"A cow goes...","imgUrl":"https://www.dw.com/image/50907943_403.jpg"},"back":{"text":"MOOO!!","imgUrl":""}}},{"id":1,"data":{"front":{"text":"A cup of Joe","imgUrl":""},"back":{"text":"","imgUrl":"https://images.articulate.com/f:jpg|png,a:retain,b:fff/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/55J-c_DLx5JdTJ_7.jpg"}}},{"id":2,"data":{"front":{"text":"Lorem Hipsum","imgUrl":"https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png"},"back":{"text":"Seitan cronut taxidermy, af gastropub single-origin coffee brunch humblebrag schlitz selvage literally. Swag church-key sartorial, 8-bit williamsburg helvetica knausgaard farm-to-table mlkshk vape viral polaroid venmo la croix. Blue bottle kale chips pop-up edison bulb godard crucifix pok pok, organic subway tile taiyaki wayfarers salvia post-ironic snackwave migas. Intelligentsia kogi banh mi, butcher humblebrag mumblecore subway tile lo-fi stumptown narwhal vice literally swag.","imgUrl":""}}}]')},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(3),i=a.n(l),c=(a(10),a(1)),o=(a(11),a(4)),s=[{id:"1",data:{front:{text:"",imgUrl:""},back:{text:"",imgUrl:""}}},{id:"2",data:{front:{text:"",imgUrl:""},back:{text:"",imgUrl:""}}},{id:"3",data:{front:{text:"",imgUrl:""},back:{text:"",imgUrl:""}}}];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=n.a.createElement("path",{fill:"#707070",fillRule:"nonzero",d:"M19.347 8.275l1.88 1.714a.727.727 0 0 0 .98-1.074l-3.225-2.941a.727.727 0 0 0-1.027.047l-2.94 3.224a.727.727 0 0 0 1.075.98l1.802-1.976a6.545 6.545 0 0 1-11.56 4.288.727.727 0 1 0-1.114.935 8 8 0 0 0 14.129-5.197zm-16.039.162l-1.79-1.633a.727.727 0 1 0-.98 1.074l3.223 2.94c.297.272.757.25 1.028-.046l2.94-3.224a.727.727 0 0 0-1.075-.98L4.768 8.636a6.545 6.545 0 0 1 11.555-4.482.727.727 0 1 0 1.114-.936A8 8 0 0 0 3.308 8.437z"}),g=function(e){var t=e.svgRef,a=e.title,r=u(e,["svgRef","title"]);return n.a.createElement("svg",m({width:23,height:17,viewBox:"0 0 23 17",focusable:"false",ref:t},r),a?n.a.createElement("title",null,a):null,f)},d=n.a.forwardRef((function(e,t){return n.a.createElement(g,m({svgRef:t},e))})),p=(a.p,function(e){var t=e.card,a=Object(r.useState)(!1),l=Object(c.a)(a,2),i=l[0],o=l[1],s=t.data,m=s.front,u=s.back,f=function(){console.log("image loaded!")},g=function(){return n.a.createElement("div",{className:"flip-button",title:"Click to flip"},n.a.createElement(d,null))},p=function(){return n.a.createElement("div",{className:"back"},n.a.createElement("div",{className:"content"},u.text&&n.a.createElement("div",{className:"text"},n.a.createElement("span",null,u.text)),u.imgUrl&&n.a.createElement("img",{onLoad:f,className:"img-url",src:u.imgUrl,alt:u.text||"a special back image"})),n.a.createElement(g,null))},b=function(){return n.a.createElement("div",{className:"front"},n.a.createElement("div",{className:"content"},m.text&&n.a.createElement("div",{className:"text"},n.a.createElement("span",null,m.text)),m.imgUrl&&n.a.createElement("img",{onLoad:f,className:"img-url",src:m.imgUrl,alt:m.text||"a front special image"})),n.a.createElement(g,null))};return n.a.createElement("div",{onClick:function(){o(!i)},className:"flashcard-scene ".concat(i?"is-scaled":"")},n.a.createElement("div",{className:"flashcard ".concat(i?"is-flipped":"")},n.a.createElement(p,null),n.a.createElement(b,null)))}),b=function(){var e=Object(r.useState)(s),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)((function(){l(o)}),[]),n.a.createElement("div",{className:"flashcard-wrapper"},n.a.createElement("div",{className:"flashcard-container"},a.map((function(e){return n.a.createElement(p,{key:e.id,card:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9fe7884e.chunk.js.map