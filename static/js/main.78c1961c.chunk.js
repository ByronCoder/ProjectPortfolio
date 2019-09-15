(window.webpackJsonpprojectportfolio=window.webpackJsonpprojectportfolio||[]).push([[0],{23:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/mypic.9c1e251e.jpeg"},40:function(e,t,a){e.exports=a(82)},45:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=(a(45),a(86)),c=a(87),i=a(85),s=(a(46),a(22)),m=a(34),u=a(28),d=(a(23),a(35)),p=a.n(d),E=a(13),b=a(14),h=a(19),f=a(15),g=a(20),v=a(16),k=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={projectsList:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(v.trackPromise)(fetch("https://p7zlxmo2qk.execute-api.us-east-1.amazonaws.com/dev/api/Projects").then((function(e){return e.json()})).then((function(t){e.setState({projectsList:t})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Project Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Source"),r.a.createElement("th",null,"Demo"))),r.a.createElement("tbody",null,this.state.projectsList.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"cell-left"},e.title),r.a.createElement("td",{className:"cell-left"},e.description),r.a.createElement("td",null,r.a.createElement("a",{href:e.sourceLink},"Click Here")),r.a.createElement("td",null,"N/A"!==e.demoLink?r.a.createElement("a",{href:e.demoLink},"Click Here"):e.demoLink))})))))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleEmailSubmit=function(){alert("Sorry! Email Form not yet implemented. Site undercontruction.")},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-8 mx-auto"},r.a.createElement("form",{name:"sentMessage",id:"contactForm",novalidate:"novalidate"},r.a.createElement("div",{class:"control-group"},r.a.createElement("div",{class:"form-group floating-label-form-group controls mb-0 pb-2"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{class:"form-control",id:"name",type:"text",placeholder:"Name",required:"required","data-validation-required-message":"Please enter your name."}),r.a.createElement("p",{class:"help-block text-danger"}))),r.a.createElement("div",{class:"control-group"},r.a.createElement("div",{class:"form-group floating-label-form-group controls mb-0 pb-2"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{class:"form-control",id:"email",type:"email",placeholder:"Email Address",required:"required","data-validation-required-message":"Please enter your email address."}),r.a.createElement("p",{class:"help-block text-danger"}))),r.a.createElement("div",{class:"control-group"},r.a.createElement("div",{class:"form-group floating-label-form-group controls mb-0 pb-2"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{class:"form-control",id:"phone",type:"tel",placeholder:"Phone Number",required:"required","data-validation-required-message":"Please enter your phone number."}),r.a.createElement("p",{class:"help-block text-danger"}))),r.a.createElement("div",{class:"control-group"},r.a.createElement("div",{class:"form-group floating-label-form-group controls mb-0 pb-2"},r.a.createElement("label",null,"Message"),r.a.createElement("textarea",{class:"form-control",id:"message",rows:"5",placeholder:"Message",required:"required","data-validation-required-message":"Please enter a message."}),r.a.createElement("p",{class:"help-block text-danger"}))),r.a.createElement("br",null),r.a.createElement("div",{id:"success"}),r.a.createElement("div",{class:"form-group"},r.a.createElement("button",{type:"submit",onClick:this.handleEmailSubmit,class:"btn btn-primary btn-xl",id:"sendMessageButton"},"Send")))))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{className:"navbar",fixed:"top"},r.a.createElement(s.a,{icon:m.a,size:"2x",color:"white"}),r.a.createElement(o.a.Brand,{className:"nav-brand",href:"#home"},"Byron Blank's Portfolio"),r.a.createElement(c.a,{className:"navbar-nav mx-auto"},r.a.createElement(c.a.Link,{href:"#portfolio"},"Portfolio"),r.a.createElement(c.a.Link,{href:"#about"},"About"),r.a.createElement(c.a.Link,{href:"#contact"},"Contact"))),r.a.createElement("header",{className:"jumbotron text-black text-center"},r.a.createElement("h1",null,"Byron Blank's Portfolio"),r.a.createElement(i.a,{src:p.a,alt:"",className:"portfolio-img rounded-circle"}),r.a.createElement("p",{class:"jumbotron-subheading font-weight-light mb-0"},"Web Developer")),r.a.createElement("section",{className:"page-section",id:"about"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Hello, my name is Byron Blank and I am a web developer. You can find the projects in my portfolio below along with links to a demo and the source on GitHub."),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/byron-blank-aa942015/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{className:"social-icon",icon:u.b,size:"5x",color:"lightblue"})),r.a.createElement("a",{href:"https://github.com/ByronCoder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{className:"social-icon",icon:u.a,size:"5x",color:"lightblue"})))),r.a.createElement("section",{className:"page-section",id:"portfolio"},r.a.createElement("h2",null,"Portfolio"),r.a.createElement("div",{className:"portDiv"},r.a.createElement(k,null))),r.a.createElement("section",{className:"page-section",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement(y,null))),r.a.createElement("footer",{className:"footer text-center text-white"},r.a.createElement("div",{class:"container"},r.a.createElement("small",null,"Copyright \xa9 Byron Blank 2019"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(39),N=a.n(j);var x=function(){return Object(v.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"loading-indicator"},r.a.createElement(N.a,{type:"ThreeDots",color:"lightgray",height:"100",width:"100"}))};Object(l.render)(r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.78c1961c.chunk.js.map