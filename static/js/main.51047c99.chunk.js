(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){},50:function(e,t,n){e.exports=n(90)},72:function(e,t){},74:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(44),o=n.n(i),c=n(8),l=n(9),s=n(11),u=n(10),h=n(12),m=(n(29),n(26)),d=n.n(m),v=n(45),f=n(6),p=n(46),y=n.n(p),b=n(27),g=n.n(b),w=n(47),k=n.n(w),E=function(e){return r.a.createElement("span",{onClick:e.onClick},r.a.createElement(k.a,{style:{verticalAlign:"top"},color:e.color}))},j=n(48),O=n.n(j),F=n(49),C=n.n(F),x={display:"flex",flexDirection:"row",alignItems:"flex-start",width:"100%",marginBottom:"1em"},S={width:"30%",marginRight:"10%"},T={width:"60%",marginTop:"-1em"},B=function(e){return r.a.createElement("div",{key:e.index,style:x},r.a.createElement("div",{style:S},r.a.createElement(E,{color:e.color,onClick:function(){return e.favorite(e.item)}})," ",e.item.title," "),r.a.createElement("div",{style:T,id:"html"},O()(C()(e.item.body))))},D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){console.log({fav:this.props.selectedF})}},{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:W},r.a.createElement("h2",{style:{color:"#14AF74",marginLeft:"13px"}},"Favourites"),r.a.createElement("div",{style:{margin:"13px"}},this.props.selectedF&&Object.keys(this.props.selectedF).map(function(t,n){return r.a.createElement(B,{index:n,key:n,color:"green",item:e.props.selectedF[t],favorite:e.props.favorite})})))}}]),t}(a.Component),W={backgroundColor:"#F5FFFA",position:"fixed",width:"100%",bottom:"0"},_=D,A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).favorite=function(e){var t=n.state.selectedFav,a=g()(e);if(t[a]){var r=t;delete r[a],n.setState({selectedFav:r})}else{var i=t;i[a]=e,n.setState({selectedFav:i})}},n.filter=function(){var e=n.state.value;n.setState({searchTerm:e})},n.state={searching:[],value:"",searchTerm:"",color:"gray",selected:!1,selectedFav:{}},n.handleChange=n.handleChange.bind(Object(f.a)(Object(f.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleChange",value:function(){var e=Object(v.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.target.value)?this.setState({value:n,display:!0}):this.setState({value:n,searchTerm:n,display:!1});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"fetchData",value:function(){var e=this;fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then(function(e){return e.json()}).then(function(t){e.setState({searching:t})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.searching,n=e.searchTerm,a=e.selectedFav,i=this.favorite;return r.a.createElement("div",null,r.a.createElement("form",{className:"searching",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"seachBar",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{className:"buttonB",type:"submit",onClick:this.filter},r.a.createElement(y.a,{size:25}))),r.a.createElement("div",{style:L},r.a.createElement("div",{style:N},n&&t.filter(function(e){return e.keywords.toLowerCase().includes(n.toLowerCase())}).map(function(e,t){var n=g()(e);return r.a.createElement(B,{index:t,key:t,color:a.hasOwnProperty(n)?"green":"gray",item:e,favorite:i})}))),r.a.createElement(_,{selectedF:a,favorite:i}))}}]),t}(a.Component),L={margin:"13px",display:"flex"},N={width:"100%"},P=A,R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h3",null,"Toronto Waste Lookup")),r.a.createElement(P,{searchedTerm:!0}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.51047c99.chunk.js.map