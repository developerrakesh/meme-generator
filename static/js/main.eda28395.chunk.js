(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),o=(n(16),n(2)),i=n(3),l=n(6),m=n(5),u=n(0),h=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{src:"../images/Trollface.png",alt:"Troll Face"}),Object(u.jsx)("p",{children:"Meme Generator"})]})}}]),n}(r.a.Component),j=n(8),b=n.n(j),d=n(10),p=n(11),g=n(4),x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.randomNum=Math.floor(Math.random()*t.arrLength),t.setState((function(e){return{randImg:t.state.allMemeImgs[t.randomNum].url}}))},t.state={topTxt:"",bottomTxt:"",randImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},t.handleSubmit=t.handleSubmit.bind(Object(g.a)(t)),t.arrLength=null,t.randomNum=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;(function(){var e=Object(d.a)(b.a.mark((function e(){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=a.data.memes,t.setState({allMemeImgs:r}),t.arrLength=t.state.allMemeImgs.length-1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(u.jsx)("input",{type:"text",name:"topTxt",value:this.state.topTxt,onChange:this.handleChange,placeholder:"Top Text"}),Object(u.jsx)("input",{type:"text",name:"bottomTxt",value:this.state.bottomTxt,onChange:this.handleChange,placeholder:"Bottom Text"}),Object(u.jsx)("button",{children:"Gen"})]}),Object(u.jsxs)("div",{className:"meme",children:[this.state.isLoading?Object(u.jsx)("p",{children:"Loading..."}):Object(u.jsx)("img",{src:this.state.randImg,alt:"Random"}),Object(u.jsx)("h2",{className:"top",children:this.state.topTxt}),Object(u.jsx)("h2",{className:"bottom",children:this.state.bottomTxt})]})]})}}]),n}(r.a.Component);var f=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(x,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.eda28395.chunk.js.map