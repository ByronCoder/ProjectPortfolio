(window.webpackJsonpprojectportfolio=window.webpackJsonpprojectportfolio||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/mypic.9c1e251e.jpeg"},34:function(e,t,a){e.exports=a(54)},39:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),r=a.n(l),c=(a(39),a(59)),i=a(58),m=a(57),s=(a(40),a(23)),u=a(24),p=(a(20),a(25)),d=a.n(p),h=a(26),E=a(27),f=a(32),b=a(28),k=a(33),v=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={projectsList:[]},a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://p7zlxmo2qk.execute-api.us-east-1.amazonaws.com/dev/api/Projects").then((function(e){return e.json()})).then((function(t){e.setState({projectsList:t})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("table",{className:"table table-dark"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Project Name"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Source"),o.a.createElement("th",null,"Demo"))),o.a.createElement("tbody",null,this.state.projectsList.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.description),o.a.createElement("td",null,o.a.createElement("a",{href:e.sourceLink},"Click Here")),o.a.createElement("td",null,o.a.createElement("a",{href:e.demoLink},"Click Here")))})))))}}]),t}(o.a.Component);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,{className:"navbar",fixed:"top"},o.a.createElement(s.a,{icon:u.a,size:"2x",color:"white"}),o.a.createElement(c.a.Brand,{className:"nav-brand",href:"#home"},"Byron Blank's Portfolio"),o.a.createElement(i.a,{className:"navbar-nav mx-auto"},o.a.createElement(i.a.Link,{href:"#portfolio"},"Portfolio"),o.a.createElement(i.a.Link,{href:"#about"},"About"),o.a.createElement(i.a.Link,{href:"#contact"},"Contact"))),o.a.createElement("header",{className:"jumbotron text-black text-center"},o.a.createElement("h1",null,"Byron Blank's Portfolio"),o.a.createElement(m.a,{src:d.a,alt:"",className:"portfolio-img rounded-circle"}),o.a.createElement("p",{class:"jumbotron-subheading font-weight-light mb-0"},"Web Developer")),o.a.createElement("section",{className:"page-section",id:"about"},o.a.createElement("h2",null,"About"),o.a.createElement("p",null,"Hello, my name is Byron Blank and I am a web developer. You can find the projects in my portfolio below along with links to a demo and the source on GitHub.")),o.a.createElement("section",{className:"page-section",id:"portfolio"},o.a.createElement("h2",null,"Portfolio"),o.a.createElement("div",{className:"portDiv"},o.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ce58f4ab.chunk.js.map