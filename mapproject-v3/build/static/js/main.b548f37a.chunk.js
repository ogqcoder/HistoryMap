(this.webpackJsonpmapproject=this.webpackJsonpmapproject||[]).push([[0],{17:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(29),o=n.n(r),s=(n(38),n(2)),i=(n(17),n(4)),l=n.n(i),d=n(0);function u(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){l.a.get("/p/f21-12/f21-v2/map/getCategory").then((function(e){r(e.data)})).catch((function(e){console.log(e,"err")}))}),[]),Object(d.jsx)("div",{id:"catNav",children:Object(d.jsx)("div",{style:{background:"white"},children:Object(d.jsxs)("ul",{class:"nav flex-column",children:[Object(d.jsx)("li",{children:"Categories"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("a",{href:"javascript:void(0)",className:"hover",onClick:function(){e.setCategory(null)},children:"All"}),Object(d.jsx)("div",{children:a.map((function(t,n){return Object(d.jsx)("a",{href:"javascript:void(0)",className:"hover",onClick:function(){e.setCategory(t.catName)},children:t.catName})}))})]})]})})})}function j(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{id:"mySidebar",className:"sidebar",children:[Object(d.jsx)("a",{href:"javascript:void(0)",class:"closebtn",onClick:function(){return document.getElementById("mySidebar").style.width="0",void(document.getElementById("main").style.marginLeft="0")},children:"\xd7"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"History Map"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/edit",children:"Edit Markers"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/addMarkers",children:"Add Marker"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/addCategory",children:"Add Category"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/addSubcategory",children:"Add Subcategory"}),Object(d.jsx)("a",{class:"nav-link",href:"/p/f21-12/f21-v2/admin/addState",children:"Add State"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/addCounty",children:"Add County"}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2/admin/addCountry",children:"Add Country"}),"Category Navbar",console.log(e.setCategory,"set"),Object(d.jsx)(u,{setCategory:e.setCategory})]}),Object(d.jsx)("div",{id:"main",children:Object(d.jsx)("button",{style:{position:"absolute",zIndex:20,display:"inline-block",top:0},className:"openbtn",onClick:function(){return document.getElementById("mySidebar").style.width="250px",void(document.getElementById("main").style.marginLeft="250px")},children:"\u2630"})})]})}var b=n(33),f=(n(58),window.google);function m(e){var t,n=Object(c.useState)(null),r=Object(s.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)(),j=Object(s.a)(u,2),m=j[0],p=j[1],h=Object(c.useState)(),O=Object(s.a)(h,2),g=(O[0],O[1],Object(c.useState)()),x=Object(s.a)(g,2),v=x[0],y=x[1];function N(e,t){var n="<div><h1>"+t.title+"</h1><p>"+t.description+"</p><a href ="+t.link+"/> "+t.link+"</a></div>",c=new f.maps.InfoWindow({content:n});e.addListener("click",(function(){c.open(e.get("map"),e)}))}function C(e,t){var n=m.find((function(t){return t.catID==e.catID})),c="http://maps.google.com/mapfiles/ms/icons/";switch(n.catName){case"American Revolution":t.setIcon(c+"red-dot.png");break;case"Black History":case"Music, Art, and Theater":t.setIcon(c+"ltblue-dot.png");break;case"Civil Rights":t.setIcon(c+"yellow-dot.png");break;case"Culture":t.setIcon(c+"green.png");break;case"Government":t.setIcon(c+"green-dot.png");break;case"Native Americans":case"Women":t.setIcon(c+"blue-dot.png");break;case"Nature":t.setIcon(c+"pink.png");break;case"U.S. Presidents":t.setIcon(c+"pink-dot.png");break;default:t.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")}}return a.a.useEffect((function(){if(e.category){console.log(e.category,"props.category"),y(e.category);var t=JSON.stringify({catName:v});l.a.post("/p/f21-12/f21-v2/map/getCategoryByName",t,{headers:{"Content-Type":"application/json"}}).then((function(e){i(e.data),console.log(e.data,"markers")}))}else fetch("/p/f21-12/f21-v2/map").then((function(e){return e.json()})).then((function(e){i(e)}))}),[e.category,v]),Object(c.useEffect)((function(){l.a.get("/p/f21-12/f21-v2/map/getCategory").then((function(e){p(e.data)})).catch((function(e){console.log(e,"err")}))}),[]),new b.a({apiKey:"AIzaSyAvw8sOvIShLC2gWYbjakB1urJ3TmNbztw",version:"weekly"}).load().then((function(){t=new f.maps.Map(document.getElementById("map"),{center:{lat:o[0].lat,lng:o[0].lng},zoom:8,mapTypeControl:!0,mapTypeControlOptions:{style:f.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:f.maps.ControlPosition.TOP_CENTER}});for(var e=0;e<o.length;e++){var n=o[e],c=new f.maps.Marker({position:{lat:n.lat,lng:n.lng},map:t,title:n.title});N(c,n),C(n,c),c.addListener("click",(function(){t.panTo(this.getPosition()),t.setZoom(10)}))}})).catch((function(e){return console.log(e)})),Object(d.jsx)("div",{id:"map"})}var p=n(32),h=n(3),O=n(12),g=n.n(O),x=n(18);var v=function(e){var t=e.setToken,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),j=u[0],b=u[1],f=Object(c.useState)(""),m=Object(s.a)(f,2);function p(){return h.apply(this,arguments)}function h(){return(h=Object(x.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({username:r,password:j}),e.abrupt("return",l.a.post("/p/f21-12/f21-v2/users/login",n,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e),console.log(e,"res")})).catch((function(e){console.log(e,"err")})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m[0],m[1];var O=function(){var e=Object(x.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{zIndex:2e3},children:[Object(d.jsx)("div",{children:"Logo"}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:O,children:[Object(d.jsx)("input",{type:"text",name:"Username",placeholder:"Username",required:!0,onChange:function(e){o(e.target.value),console.log(r)}}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,onChange:function(e){b(e.target.value)}}),Object(d.jsx)("button",{children:"Log In"}),Object(d.jsx)("h1",{})]})})]})};function y(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),m=f[0],p=f[1],h=Object(c.useState)(0),O=Object(s.a)(h,2),g=O[0],x=O[1],v=Object(c.useState)(0),y=Object(s.a)(v,2),N=y[0],C=y[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),I=k[0],D=k[1],w=Object(c.useState)(""),T=Object(s.a)(w,2),L=T[0],A=T[1],M=Object(c.useState)([]),E=Object(s.a)(M,2),q=E[0],J=E[1],R=Object(c.useState)([]),B=Object(s.a)(R,2),P=B[0],z=B[1],F=Object(c.useState)(""),U=Object(s.a)(F,2),V=(U[0],U[1]);return Object(c.useEffect)((function(){fetch("/p/f21-12/f21-v2/map/getSubcat").then((function(e){return e.json()})).then((function(e){J(e),C(1),x(1)}))}),[]),Object(c.useEffect)((function(){fetch("/p/f21-12/f21-v2/map/getCategory").then((function(e){return e.json()})).then((function(e){z(e)}))}),[]),Object(d.jsxs)("div",{className:"form-margin",children:[Object(d.jsx)("h1",{children:"Add Marker"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({lat:I,lng:L,location:a,description:u,link:m,subcatID:g,catID:N});l.a.post("/p/f21-12/f21-v2/map/addToMarkers",e,{headers:{"Content-Type":"application/json"}}).then((function(e){V("Successfully Added")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-row",children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"Location Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"fname",placeholder:"Location",name:"location",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"lname",children:"Latitude"}),Object(d.jsx)("input",{type:"number",className:"form-control",id:"lat",placeholder:"Latitude",name:"lat",onChange:function(e){return D(e.target.value)},step:"any",required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"lng",children:"Longitude"}),Object(d.jsx)("input",{onChange:function(e){return A(e.target.value)},type:"number",className:"form-control",id:"lng",placeholder:"Longitude",name:"lng",step:"any",required:!0}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"select2",children:"Choose a Category:"}),Object(d.jsx)("select",{id:"select2",className:"form-control",onChange:function(e){var t=e.target.value;C(t)},children:P.map((function(e){return Object(d.jsx)("option",{value:e.catID,children:e.catName},e.catID)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"select",children:"Choose a subcategory:"}),Object(d.jsx)("select",{id:"select",className:"form-control",onChange:function(e){var t=e.target.value;x(t)},children:q.map((function(e){return Object(d.jsx)("option",{value:e.subcatID,children:e.subcatName},e.subcatID)}))})]}),Object(d.jsx)("label",{for:"description",children:"Description:"})]}),Object(d.jsx)("div",{className:"form-group col-md-6",children:Object(d.jsx)("textarea",{className:"form-control",id:"description",name:"description",rows:"4",cols:"50",onChange:function(e){return j(e.target.value)}})}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"link",children:"Link"}),Object(d.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"form-control",id:"link",placeholder:"Link",name:"link"})]})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function N(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];Object(h.f)();return Object(d.jsxs)("div",{className:"form-margin",children:[Object(d.jsx)("h1",{children:"Add Subcategory"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({subcatName:a});l.a.post("/p/f21-12/f21-v2/map/addSubcat",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"Subcategory Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"subcat",placeholder:"Subcategory",name:"subcat",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function C(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),f=b[0],m=b[1],p=Object(c.useState)(""),h=Object(s.a)(p,2),O=h[0],g=h[1];return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"form-row",children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"fname",children:"First Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"fname",placeholder:"First Name",name:"fname",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"lname",children:"Last Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"lname",placeholder:"Last Name",name:"lname",onChange:function(e){return u(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"fname",children:"Username"}),Object(d.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"text",className:"form-control",id:"uname",placeholder:"Username",name:"uname",required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"password",children:"Password"}),Object(d.jsx)("input",{onChange:function(e){g(e.target.value),console.log(f)},type:"password",className:"form-control",id:"password",placeholder:"Password",name:"password",required:!0})]})]}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(e){!function(){var e=JSON.stringify({fname:n,lname:i,username:f,password:O});l.a.post("users/registerUser",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),console.log("hell0"),e.preventDefault()},children:"Sign in"})]})}function S(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];Object(h.f)();return Object(d.jsxs)("div",{className:"form-margin",children:[Object(d.jsx)("h1",{children:"Add Category"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({catName:a});l.a.post("/p/f21-12/f21-v2/map/addCategory",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"Category Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"cat",placeholder:"Category",name:"cat",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function k(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];Object(h.f)();return Object(d.jsxs)("div",{className:"form-margin",style:{zIndex:1e5},children:[Object(d.jsx)("h1",{children:"Add Country"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({countryName:a});l.a.post("/p/f21-12/f21-v2/map/addCountry",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"Country Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"country",placeholder:"country",name:"country",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function I(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];Object(h.f)();return Object(d.jsxs)("div",{className:"form-margin",style:{zIndex:1e5},children:[Object(d.jsx)("h1",{children:"Add State"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({stateName:a});l.a.post("/p/f21-12/f21-v2/map/addState",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"State Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"state",placeholder:"State",name:"state",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function D(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(d.jsxs)("div",{className:"form-margin",style:{zIndex:1e5},children:[Object(d.jsx)("h1",{children:"Add County"}),Object(d.jsxs)("form",{onSubmit:function(e){!function(){var e=JSON.stringify({countyName:a});l.a.post("/p/f21-12/f21-v2/map/addCounty",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}(),e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"County Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"county",placeholder:"County",name:"county",onChange:function(e){r(e.target.value),console.log(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}function w(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(),i=Object(s.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),m=f[0],p=f[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),g=O[0],x=O[1],v=Object(c.useState)(),y=Object(s.a)(v,2),N=y[0],C=y[1],S=Object(c.useState)(),k=Object(s.a)(S,2),I=k[0],D=k[1],w=Object(c.useState)(""),T=Object(s.a)(w,2),L=T[0],A=T[1],M=Object(c.useState)(""),E=Object(s.a)(M,2),q=E[0],J=E[1],R=Object(c.useState)([]),B=Object(s.a)(R,2),P=B[0],z=B[1],F=Object(c.useState)([]),U=Object(s.a)(F,2),V=U[0],H=U[1],W=Object(c.useState)(),Z=Object(s.a)(W,2),_=Z[0],G=Z[1],K=Object(c.useState)(0),Y=Object(s.a)(K,2),Q=Y[0],X=Y[1];return Object(c.useEffect)((function(){fetch("/p/f21-12/f21-v2/map").then((function(e){return e.json()})).then((function(e){if(r(e),u){var t=u[0];A(t.lat),J(t.lng),p(t.title),X(t.mapID),x(t.description),G(t.link),C(t.subcatID),D(t.catID)}}))}),[u]),Object(c.useEffect)((function(){fetch("/p/f21-12/f21-v2/map/getSubcat").then((function(e){return e.json()})).then((function(e){z(e)}))}),[]),Object(c.useEffect)((function(){fetch("/p/f21-12/f21-v2/map/getCategory").then((function(e){return e.json()})).then((function(e){H(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{style:{marginTop:"50px"},id:"productTable",class:"table table-bordered table-condensed table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Edit"}),Object(d.jsx)("th",{children:"Location"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Latitude"}),Object(d.jsx)("th",{children:"Longitude"}),Object(d.jsx)("th",{children:"Link"}),Object(d.jsx)("th",{children:"Delete"})]})}),a.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(e){console.log(e.mapID),fetch("/p/f21-12/f21-v2/map/"+e.mapID).then((function(e){return e.json()})).then((function(e){j(e)}))}(e)},children:"Edit Marker"})}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.description}),Object(d.jsx)("td",{children:e.lat}),Object(d.jsx)("td",{children:e.lng}),Object(d.jsx)("td",{children:e.link}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){!function(e){console.log(e.mapID,"mapID"),l.a.delete("/p/f21-12/f21-v2/map/deleteFromMarkers",{data:{mapID:e.mapID},headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e)})).catch((function(e){console.log(e,"err")})),window.location.reload(!1)}(e)},children:"Delete"})})]},e.mapID)}))]}),function(){if(u)return Object(d.jsxs)("form",{style:{position:"absolute",background:"white",top:0,width:"100%",height:"100%"},onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("div",{className:"form-row form-margin",children:[Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"title",children:"Location Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"fname",placeholder:"Location",name:"location",defaultValue:u[0].title,required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"lname",children:"Latitude"}),Object(d.jsx)("input",{type:"number",className:"form-control",id:"lat",placeholder:"Latitude",name:"lat",step:"any",defaultValue:u[0].lat,onChange:function(e){A(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{className:"form-group col-md-6",children:[Object(d.jsx)("label",{for:"lng",children:"Longitude"}),Object(d.jsx)("input",{type:"number",className:"form-control",id:"lng",placeholder:"Longitude",name:"lng",step:"any",defaultValue:u[0].lng,onChange:function(e){J(e.target.value)},required:!0}),Object(d.jsx)("label",{for:"description",children:"Description:"}),Object(d.jsx)("textarea",{id:"description",name:"textarea",rows:"4",cols:"50",defaultValue:u[0].description,className:"form-control",onChange:function(e){return x(e.target.value)}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"select",children:"Choose a subcategory:"}),Object(d.jsx)("select",{id:"select",class:"form-control",onChange:function(e){var t=e.target.value;C(t)},children:P.map((function(e){return Object(d.jsx)("option",{value:e.subcatID,children:e.subcatName},e.subcatID)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"select2",children:"Choose a Category:"}),Object(d.jsx)("select",{id:"select2",class:"form-control",onChange:function(e){var t=e.target.value;D(t)},children:V.map((function(e){return Object(d.jsx)("option",{value:e.catID,children:e.catName},e.catID)}))})]}),Object(d.jsx)("label",{for:"link",children:"Link"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"link",placeholder:"Link",name:"link",defaultValue:u[0].link,onChange:function(e){G(e.target.value)},required:!0})]})]}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){X(u[0].mapID),console.log(Q,"mapID"),function(e){var t=JSON.stringify({lat:L,lng:q,location:m,description:g,link:_,subcatID:N,catID:I,mapID:Q});console.log(N,"subcat"),l.a.post("/p/f21-12/f21-v2/map/updateMarker",t,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e,"res")})).catch((function(e){console.log(e,"err")}))}()},children:"Update"}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){j("")},children:"Nvm"})]})}(),Object(d.jsx)("a",{href:"/p/f21-12/f21-v2",children:"Return To Map"})]})}var T=function(){var e=function(){var e=Object(c.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return console.log(t,"userToken"),t}()),t=Object(s.a)(e,2),n=t[0],a=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),a(e)},token:n}}(),t=e.token,n=e.setToken,a=Object(c.useState)(),r=Object(s.a)(a,2),o=r[0],i=r[1];return t?Object(d.jsx)(p.a,{basename:"/p/f21-12/f21-v2",children:Object(d.jsxs)("div",{className:"contain justify-content-center",children:[Object(d.jsx)(j,{setCategory:i,token:t}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/register",component:C}),Object(d.jsx)(h.a,{path:"/admin/addMarkers",component:y}),Object(d.jsx)(h.a,{path:"/admin/addSubcategory",component:N}),Object(d.jsx)(h.a,{path:"/admin/addCategory",component:S}),Object(d.jsx)(h.a,{path:"/admin/addCountry",component:k}),Object(d.jsx)(h.a,{path:"/admin/addState",component:I}),Object(d.jsx)(h.a,{path:"/admin/addCounty",component:D}),Object(d.jsx)(h.a,{path:"/admin/edit",component:w}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)("div",{children:Object(d.jsx)(m,{category:o})})})]})]})}):Object(d.jsx)(v,{setToken:n})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.b548f37a.chunk.js.map