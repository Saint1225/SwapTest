(this["webpackJsonpshahil-react-test"]=this["webpackJsonpshahil-react-test"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(17),r=n.n(s),i=(n(23),n(10)),o=n(1),d=n(9),l=n.n(d),u=n(3),p=function(){var e=Object(a.useState)("defaultUserId"),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("defaultName"),r=Object(i.a)(s,2),d=r[0],p=r[1],j=Object(a.useState)(new Date(0)),h=Object(i.a)(j,2),b=h[0],O=h[1],m=Object(o.d)(),w=new URLSearchParams(window.location.search).get("userId"),f=new URLSearchParams(window.location.search).get("name"),S=new URLSearchParams(window.location.search).get("time");Object(a.useEffect)((function(){if(null!=f||null!=w||S)c(w),p(f),O(new Date(S));else{var e=new URLSearchParams;e.append("userId","defaultUserId"),e.append("name","defaultName"),e.append("time",new Date),m.push({search:e.toString()})}}),[]);var g=b.getDate(),x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()],_=b.getFullYear(),v=b.getHours(),D=b.getMinutes(),U=b.getSeconds(),I=v<12?"am":"pm";return Object(u.jsxs)("div",{className:l.a.Container,children:[Object(u.jsxs)("div",{className:l.a.SwapBotton,children:[Object(u.jsxs)("h3",{children:["Swap - ",d]}),Object(u.jsx)("button",{onClick:function(){O(new Date)},children:"Amend Swap"}),Object(u.jsx)("button",{children:"Clone Swap"}),Object(u.jsx)("button",{children:"Generate Email"}),Object(u.jsx)("button",{className:l.a.DeleteBotton,children:"Delete Swap"})]}),Object(u.jsxs)("div",{className:l.a.UpdatedInfo,children:["Last modified by User id: ",n," at ",g," ",x," ",_,", ",v,":",D,":",U," ",I," "]})]})};n(30);var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(p,{})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},b=n(13);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(j,{})})}),document.getElementById("root")),h()},9:function(e,t,n){e.exports={Container:"AppMain_Container__59Or5",SwapBotton:"AppMain_SwapBotton__WyUlL",DeleteBotton:"AppMain_DeleteBotton__Io-8E",UpdatedInfo:"AppMain_UpdatedInfo__3TJhi"}}},[[31,1,2]]]);
//# sourceMappingURL=main.f7f49c16.chunk.js.map