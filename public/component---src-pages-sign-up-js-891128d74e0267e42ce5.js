(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,a,t){"use strict";t.r(a);t(75),t(55),t(34);var n=t(7),l=t.n(n),i=t(0),s=t.n(i),r=t(174),c=t(169),m=(t(434),t(156)),o=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).onSubmit=function(){document.getElementById("signUpSecondary").value="PLEASE WAIT...",setTimeout(function(){document.getElementById("fields").style.display="none",document.getElementById("submitted").style.display="block"},1e3)},a}return l()(a,e),a.prototype.render=function(){return s.a.createElement(r.c,{initialValues:{firstName:"",lastName:"",email:""},validationSchema:c.object().shape({firstName:c.string().required("This field is required"),lastName:c.string().required("This field is required"),email:c.string().email("Invalid Email Address").required("This field is required")}),onSubmit:this.onSubmit,render:function(e){var a=e.errors,t=e.values,n=e.touched,l=e.handleChange,i=e.handleBlur,c=e.handleSubmit,o=e.isSubmitting;return s.a.createElement(m.a,{title:"Sign up | Terminal"},s.a.createElement("div",{className:"signupWrapper"},s.a.createElement("section",null,s.a.createElement("div",null,s.a.createElement("p",{id:"heading"},"START YOUR FREE 14 DAY TRAIL"),s.a.createElement("p",{id:"description"},"No credit cards. No commitments. Cancel anytime.")),s.a.createElement("div",{className:"w-container"},s.a.createElement("div",null,s.a.createElement("div",{id:"fields"},s.a.createElement("div",{className:"name"},s.a.createElement("div",null,s.a.createElement(r.b,{onChange:l,onBlur:i,value:t.firstName,type:"text",name:"firstName",className:a.firstName&&n.firstName?"firstName err":"firstName",placeholder:"First Name",component:"input"}),s.a.createElement(r.a,{name:"firstName"},function(e){return s.a.createElement("div",{className:"errMsg"},e)})),s.a.createElement("div",null,s.a.createElement(r.b,{onChange:l,onBlur:i,value:t.lastName,type:"text",name:"lastName",className:a.lastName&&n.lastName?"lastName err":"lastName",placeholder:"Last Name"}),s.a.createElement(r.a,{name:"lastName"},function(e){return s.a.createElement("div",{className:"errMsg"},e)}))),s.a.createElement("div",null,s.a.createElement(r.b,{onChange:l,onBlur:i,value:t.email,type:"email",name:"email",className:a.email&&n.email?"email err":"email",placeholder:"Email Address"}),s.a.createElement(r.a,{name:"email"},function(e){return s.a.createElement("div",{className:"errMsg"},e)})),s.a.createElement("div",{className:"signupBtn"},s.a.createElement(r.b,{type:"submit",disabled:o,onClick:c,className:"signUpSecondary",id:"signUpSecondary",value:"SIGN UP"}))),s.a.createElement("div",{className:"success",id:"submitted"},s.a.createElement("p",{className:"title"},"Thanks For Signing Up!"),s.a.createElement("p",{className:"msg"},"We will send you an email very soon with next steps."))),s.a.createElement("div",{className:"testimonials"},s.a.createElement("p",{id:"title"},"TESTIMONIALS"),s.a.createElement("div",null,s.a.createElement("p",{className:"description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."),s.a.createElement("p",{className:"user"},"- Larry Page, Google")),s.a.createElement("div",null,s.a.createElement("p",{className:"description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse."),s.a.createElement("p",{className:"user"},"- George, Pingdom")))))))}})},a}(i.Component);a.default=o},151:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(4),s=t.n(i),r=t(33),c=t.n(r);t.d(a,"a",function(){return c.a});t(152),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},152:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},156:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(7),s=t.n(i),r=t(151),c=(t(181),t(182),function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(r.a,{to:"/sign-up",className:"signUpPrimary"},"SIGN UP"))},a}(n.Component)),m=t(158),o=t.n(m),u=function(e){function a(){return e.apply(this,arguments)||this}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=document.getElementById("menu"),a=document.getElementById("overlay");e&&e.addEventListener("click",function(){a.classList.toggle("slideDown"),a.classList.contains("slideDown")?e.classList.add("active"):e.classList.remove("active")})},t.render=function(){return l.a.createElement("div",{className:"navBarWrapper"},l.a.createElement("div",{className:"navBar"},l.a.createElement("div",{className:"w-container"},l.a.createElement("div",null,l.a.createElement(r.a,{to:"/",className:"companyLogo"},"terminal")),l.a.createElement("div",{className:"menu",id:"menu"},l.a.createElement("img",{src:o.a,alt:"menu bar",className:"hamburger"})))),l.a.createElement("nav",{className:"navLinks"},l.a.createElement("ul",{className:"overlay",id:"overlay"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/",activeClassName:"active"},"HOME")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/pricing",activeClassName:"active"},"PRICING")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/services",activeClassName:"active"},"SERVICES")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/about",activeClassName:"active"},"ABOUT")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/contact",activeClassName:"active"},"CONTACT")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/sign-up",activeClassName:"active"},"SIGN UP")),l.a.createElement(c,null))))},a}(n.Component),d=(t(183),t(75),t(55),t(34),t(174)),E=t(169),N=(t(187),t(159)),M=t.n(N),p=t(160),f=t.n(p),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).onSubmit=function(){document.getElementById("okBtn").value="WAIT...",setTimeout(function(){document.getElementById("subscribe").style.display="none",document.getElementById("emailNotif").style.display="none",document.getElementById("success").style.display="block"},1e3)},a}return s()(a,e),a.prototype.render=function(){return l.a.createElement(d.c,{initialValues:{email:""},validationSchema:E.object().shape({email:E.string().email("Invalid Email Address").required("This field is required")}),onSubmit:this.onSubmit,render:function(e){var a=e.errors,t=e.values,n=e.touched,i=e.handleChange,s=e.handleBlur,c=e.handleSubmit,m=e.isSubmitting;return l.a.createElement("div",{className:"newsLetterWrapper"},l.a.createElement("div",{className:"subscribe",id:"subscribe"},l.a.createElement("div",null,l.a.createElement(d.b,{onChange:i,onBlur:s,value:t.email,type:"email",name:"email",id:"email",className:a.email&&n.email?"email err":"email",placeholder:"Your email",component:"input"}),l.a.createElement(d.a,{name:"email"},function(e){return l.a.createElement("div",{className:"errMsg"},e)})),l.a.createElement(d.b,{type:"submit",disabled:m,onClick:c,value:"OK",className:"okBtn",id:"okBtn"})),l.a.createElement("p",{id:"emailNotif"},"We send about 2 emails a month"),l.a.createElement("div",{className:"success",id:"success"},l.a.createElement("p",{className:"msg"},"Thank you! You'll be receiving some awesome emails!")),l.a.createElement("div",{className:"socialLinks"},l.a.createElement("a",{href:"https://www.twitter.com"},l.a.createElement("img",{src:M.a,alt:"faceboook logo",className:"twitter logo"})),l.a.createElement("a",{href:"https://www.facebook.com"},l.a.createElement("img",{src:f.a,alt:"facebook logo",className:"facebook logo"}))),l.a.createElement(r.a,{to:"/",className:"companyLogo"},"terminal"))}})},a}(n.Component),y=function(){return l.a.createElement("div",{className:"darkGrayContainer"},l.a.createElement("footer",{className:"w-container"},l.a.createElement("div",{className:"company"},l.a.createElement("h4",null,"COMPANY"),l.a.createElement("ul",{className:"footerLinks"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/about"},"About Terminal")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/services"},"Services")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/pricing"},"Plans & Pricing")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Blog")))),l.a.createElement("div",{className:"getHelp"},l.a.createElement("h4",null,"GET HELP"),l.a.createElement("ul",{className:"footerLinks"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Knowledge Base")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Frequently Asked Questions")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Forum")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/contact"},"Contact Us")))),l.a.createElement("div",{className:"boringStuff"},l.a.createElement("h4",null,"BORING STUFF"),l.a.createElement("ul",{className:"footerLinks"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Privacy Policy")),l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Terms of Service")))),l.a.createElement(g,null)))},I=t(188),v=t.n(I),w=t(161),L=t.n(w),b=t(162),D=t.n(b),j=t(163),T=t.n(j),C=t(164),h=t.n(C),S=t(165),x=t.n(S),A=t(166),k=t.n(A);t(189),a.a=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(v.a,null,l.a.createElement("title",null,e.title),l.a.createElement("link",{rel:"preload",as:"font",href:L.a,type:"font/woff2",crossOrigin:!0}),l.a.createElement("link",{rel:"preload",as:"font",href:D.a,type:"font/woff2",crossOrigin:!0}),l.a.createElement("link",{rel:"preload",as:"font",href:T.a,type:"font/woff2",crossOrigin:!0}),l.a.createElement("link",{rel:"preload",as:"font",href:h.a,type:"font/woff2",crossOrigin:!0}),l.a.createElement("link",{rel:"preload",as:"font",href:x.a,type:"font/woff2",crossOrigin:!0}),l.a.createElement("link",{rel:"preload",as:"font",href:k.a,type:"font/woff2",crossOrigin:!0})),l.a.createElement(u,null),e.children,l.a.createElement(y,null))}},157:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),l=t.n(n),i=t(4),s=t.n(i),r=t(56),c=t(2),m=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=m},158:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDE0IDEwIj4NCiAgPGcgaWQ9ImhhbWJ1cmdlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMzYwLjUgLTI4LjUpIj4NCiAgICA8bGluZSBpZD0iTGluZV8xNSIgZGF0YS1uYW1lPSJMaW5lIDE1IiB4Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMzYxLjUgMjkuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgICA8bGluZSBpZD0iTGluZV8xNiIgZGF0YS1uYW1lPSJMaW5lIDE2IiB4Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMzYxLjUgMzMuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgICA8bGluZSBpZD0iTGluZV8xNyIgZGF0YS1uYW1lPSJMaW5lIDE3IiB4Mj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMzYxLjUgMzcuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgPC9nPg0KPC9zdmc+DQo="},159:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy45OTkiIGhlaWdodD0iMTQuNjI2IiB2aWV3Qm94PSIwIDAgMTcuOTk5IDE0LjYyNiI+DQogIDxwYXRoIGlkPSJkYXJrLXR3aXR0ZXItaWNvbiIgZD0iTTE4LDMuNzMxYTcuNCw3LjQsMCwwLDEtMi4xMjEuNTgxQTMuNzA4LDMuNzA4LDAsMCwwLDE3LjUsMi4yN2E3LjM2NCw3LjM2NCwwLDAsMS0yLjM0NC45QTMuNywzLjcsMCwwLDAsOC44NjUsNi41MzQsMTAuNDksMTAuNDksMCwwLDEsMS4yNTMsMi42NzYsMy43LDMuNywwLDAsMCwyLjQsNy42MDUsMy42ODUsMy42ODUsMCwwLDEsLjcyMyw3LjE0NFY3LjE5YTMuNywzLjcsMCwwLDAsMi45NjIsMy42MjEsMy43MTQsMy43MTQsMCwwLDEtLjk3My4xMjksMy42MTMsMy42MTMsMCwwLDEtLjY5NC0uMDY2LDMuNywzLjcsMCwwLDAsMy40NDksMi41NjVBNy40LDcuNCwwLDAsMSwuODgyLDE1LjAyLDcuMzEzLDcuMzEzLDAsMCwxLDAsMTQuOTY3YTEwLjQ0OSwxMC40NDksMCwwLDAsNS42NjEsMS42NTlBMTAuNDM1LDEwLjQzNSwwLDAsMCwxNi4xNjksNi4xMmMwLS4xNjEsMC0uMzIxLS4wMTItLjQ3OUE3LjQ1Niw3LjQ1NiwwLDAsMCwxOCwzLjczMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMSAtMikiIGZpbGw9IiM1ZTVmNjEiLz4NCjwvc3ZnPg0K"},160:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij4NCiAgPHBhdGggaWQ9ImRhcmstZmFjZWJvb2staWNvbiIgZD0iTTE0Ljg3NSwwSDIuMTI1QTIuMTMyLDIuMTMyLDAsMCwwLDAsMi4xMjV2MTIuNzVBMi4xMywyLjEzLDAsMCwwLDIuMTI1LDE3SDguNTc0VjEwLjlINi41MzdWOC4yNDlIOC41NzRWNi45MTlBMy41MTgsMy41MTgsMCwwLDEsMTIuMDIsMy4yNjJIMTMuOXYzSDEyLjIxOGMtLjQzOSwwLS41NjkuMjUyLS41NjkuNlY4LjI0OUgxMy45VjEwLjlIMTEuNjQ5VjE3aDMuMjI2QTIuMTMsMi4xMywwLDAsMCwxNywxNC44NzVWMi4xMjVBMi4xMzEsMi4xMzEsMCwwLDAsMTQuODc1LDBaIiBmaWxsPSIjNWU1ZjYxIi8+DQo8L3N2Zz4NCg=="},161:function(e,a,t){e.exports=t.p+"static/roboto-slab-v8-latin-300-cee5cfd9886336b0e1bf0e288a15c49d.woff2"},162:function(e,a,t){e.exports=t.p+"static/roboto-condensed-v17-latin-regular-3ada4464a5d4d208c5e3591076c5138a.woff2"},163:function(e,a,t){e.exports=t.p+"static/roboto-condensed-v17-latin-700-6b222561afc4a71b9888f2ec060b72de.woff2"},164:function(e,a,t){e.exports=t.p+"static/roboto-v19-latin-regular-479970ffb74f2117317f9d24d9e317fe.woff2"},165:function(e,a,t){e.exports=t.p+"static/roboto-v19-latin-500-020c97dc8e0463259c2f9df929bb0c69.woff2"},166:function(e,a,t){e.exports=t.p+"static/roboto-v19-latin-300-ef7c6637c68f269a882e73bcb57a7f6a.woff2"}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-891128d74e0267e42ce5.js.map