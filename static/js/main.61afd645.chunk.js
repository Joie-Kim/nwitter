(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(32),s=a.n(r),i=a(5),o=a.n(i),u=a(10),l=a(7),j=a(20),b=a(8),d=a(12),p=a(23),f=a(24);a(46),a(54),a(53);f.a.initializeApp({apiKey:"AIzaSyAGIiPvwGY4zWX5N2oo6L9IwN_JUoBFEas",authDomain:"nwitter-b490b.firebaseapp.com",projectId:"nwitter-b490b",storageBucket:"nwitter-b490b.appspot.com",messagingSenderId:"250726862114",appId:"1:250726862114:web:aec4b8c997e1479548a97b"});var O=f.a,h=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),g=a(1),v=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),i=s[0],j=s[1],b=Object(c.useState)(!0),d=Object(l.a)(b,2),p=d[0],f=d[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),v=x[0],w=x[1],y=Object(c.useCallback)((function(e){var t=e.target,a=t.name,c=t.value;"email"===a?n(c):j(c)}),[]),k=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=11;break}return e.next=5,h.createUserWithEmailAndPassword(a,i);case 5:return c=e.sent,n={uid:c.user.uid,displayName:c.user.displayName,photoURL:c.user.photoURL},e.next=9,m.collection("users").add(n);case 9:e.next=14;break;case 11:return e.next=13,h.signInWithEmailAndPassword(a,i);case 13:c=e.sent;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0),w(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),[p,a,i]),N=Object(c.useCallback)((function(){f((function(e){return!e}))}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:k,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:y,className:"authInput"}),Object(g.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Log In"}),v&&Object(g.jsx)("span",{className:"authError",children:v})]}),Object(g.jsx)("span",{onClick:N,className:"authSwitch",children:p?"Log In":"Create Account"})]})},w=function(){var e=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var a,c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?c=new O.auth.GoogleAuthProvider:"github"===a&&(c=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(c);case 4:return n=e.sent,r={uid:n.user.uid,displayName:n.user.displayName,photoURL:n.user.photoURL},e.next=8,m.collection("users").add(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(g.jsx)(d.a,{icon:p.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(g.jsx)(d.a,{icon:p.a})]})]})]})},y=a(36),k=a(18),N=a.p+"static/media/empty_heart.9718638a.png",C=a.p+"static/media/full_heart.6056e3ed.png",U=function(e){var t=e.nweetObj,a=e.userObj,n=Object(c.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1],j=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.like,!s){e.next=8;break}return(c-=1)<0&&(c=0),e.next=6,m.collection("likeTo").where("nweetId","==",t.id).where("userId","==",a.uid).get().then((function(e){e.forEach((function(e){e.ref.delete()}))})).catch((function(e){console.log(e)}));case 6:e.next=11;break;case 8:return c+=1,e.next=11,m.collection("likeTo").add({nweetId:t.id,userId:a.uid,isLiked:!0});case 11:return i(!s),e.next=14,m.doc("nweets/".concat(t.id)).update({like:c});case 14:case"end":return e.stop()}}),e)}))),[s,t.id,t.like,a.uid]),b=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("likeTo").where("nweetId","==",t.id).where("userId","==",a.uid).get().then((function(e){e.forEach((function(e){i(e.data().isLiked)}))})).catch((function(e){console.log(e),i(!1)}));case 2:case"end":return e.stop()}}),e)}))),[t.id,a.uid]);return Object(c.useEffect)((function(){b()}),[b]),Object(g.jsxs)("div",{className:"like",children:[Object(g.jsx)("div",{onClick:j,children:s?Object(g.jsx)("img",{src:C}):Object(g.jsx)("img",{src:N})}),Object(g.jsx)("label",{children:t.like})]})},I=a.p+"static/media/default_profile.12ea4f36.png",_=function(e){var t=e.nweetObj,a=e.userObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(l.a)(r,2),i=s[0],j=s[1],b=Object(c.useState)(t.text),p=Object(l.a)(b,2),f=p[0],O=p[1],h=Object(c.useState)(""),v=Object(l.a)(h,2),w=v[0],y=v[1],N=Object(c.useState)(""),C=Object(l.a)(N,2),_=C[0],L=C[1],S=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)}))),[t.attachmentUrl,t.id]),R=Object(c.useCallback)((function(){j((function(e){return!e}))}),[]),A=Object(c.useCallback)((function(e){var t=e.target.value;O(t)}),[]),F=Object(c.useCallback)((function(e){e.preventDefault(),m.doc("nweets/".concat(t.id)).update({text:f}),j(!1)}),[f,t.id]),E=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.creatorId),e.next=3,m.collection("users").where("uid","==",t.creatorId).get().then((function(e){e.forEach((function(e){y(e.data().displayName),L(e.data().photoURL)}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),[t.creatorId]);return Object(c.useEffect)((function(){E()}),[E]),Object(g.jsxs)("div",{className:"nweet",children:[Object(g.jsxs)("div",{className:"creator",children:[_?Object(g.jsx)("img",{src:_,className:"creator_img"}):Object(g.jsx)("img",{src:I,className:"creator_img"}),Object(g.jsx)("label",{children:w})]}),i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:F,className:"container nweetEdit",children:[Object(g.jsx)("input",{typ:"text",placeholder:"Edit your nweet",value:f,onChange:A,autoFocus:!0,required:!0,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(g.jsx)("span",{onClick:R,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)("div",{className:"content",style:t.attachmentUrl?{minHeight:160}:{minHeight:60},children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl}),n&&Object(g.jsxs)("div",{class:"nweet__actions",children:[Object(g.jsx)("span",{onClick:S,children:Object(g.jsx)(d.a,{icon:k.d})}),Object(g.jsx)("span",{onClick:R,children:Object(g.jsx)(d.a,{icon:k.a})})]}),Object(g.jsx)(U,{nweetObj:t,userObj:a})]})]})},L=a(56),S=function(e){var t=e.userObj,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),b=j[0],p=j[1],f=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(a){var c,n,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(c="",""===b){e.next=12;break}return n=x.ref().child("".concat(t.uid,"/").concat(Object(L.a)())),e.next=8,n.putString(b,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:c=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c,like:0},e.next=15,m.collection("nweets").add(u);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,r,t.uid]),O=Object(c.useCallback)((function(e){var t=e.target.value;s(t)}),[]),h=Object(c.useCallback)((function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&a.readAsDataURL(t)}),[]),v=Object(c.useCallback)((function(){p("")}),[]);return Object(g.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:O,type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(d.a,{icon:k.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:h,style:{opacity:0}}),b&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:b,style:{backgroundImage:b}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:v,children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:k.c})]})]})]})},R=function(e){var t=e.userObj,a=Object(c.useState)([]),n=Object(l.a)(a,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){m.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(S,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(_,{nweetObj:e,userObj:t,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,a=(e.refreshUser,Object(b.f)()),n=t.photoURL,r=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.push("/profileEdit");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a]);return Object(g.jsxs)("div",{className:"profileForm",children:[Object(g.jsx)("div",{className:"profilePhoto__attachment",children:n?Object(g.jsx)("img",{src:n,style:{backgroundImage:n}}):Object(g.jsx)("img",{src:I})}),Object(g.jsx)("div",{className:"profileName_container",style:{marginTop:20},children:Object(g.jsx)("label",{children:t.displayName})}),Object(g.jsx)("button",{onClick:r,className:"profileEdit_btn",style:{marginTop:20},children:"Edit Profile"})]})},F=function(e){var t=e.userObj,a=e.refreshUser,n=Object(b.f)(),r=Object(c.useCallback)((function(){h.signOut(),n.push("/")}),[n]);return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(A,{userObj:t,refreshUser:a}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:r,children:"Log Out"})]})},E=function(e){var t=e.userObj,a=e.refreshUser,n=Object(b.f)(),r=Object(c.useState)(t.displayName),s=Object(l.a)(r,2),i=s[0],j=s[1],p=Object(c.useState)(t.photoURL),f=Object(l.a)(p,2),O=f[0],h=f[1],v=Object(c.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(c){var r,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!==i){e.next=3;break}return e.abrupt("return");case 3:if(t.displayName===i){e.next=8;break}return e.next=6,t.updateProfile({displayName:i});case 6:return e.next=8,m.collection("users").where("uid","==",t.uid).get().then((function(e){e.forEach((function(e){e.ref.update({displayName:i})}))}));case 8:if(O===t.photoURL){e.next=26;break}if(!O){e.next=19;break}return s=x.ref().child("".concat(t.uid,"/profile_pic")),e.next=13,s.putString(O,"data_url");case 13:return u=e.sent,e.next=16,u.ref.getDownloadURL();case 16:r=e.sent,e.next=22;break;case 19:return e.next=21,x.refFromURL(t.photoURL).delete();case 21:r=null;case 22:return e.next=24,t.updateProfile({photoURL:r});case 24:return e.next=26,m.collection("users").where("uid","==",t.uid).get().then((function(e){e.forEach((function(e){e.ref.update({photoURL:r})}))}));case 26:a(),n.push("/profile");case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,O,i,a,t]),w=Object(c.useCallback)((function(e){var t=e.target.value;j(t)}),[]),y=Object(c.useCallback)((function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;h(t)},Boolean(t)&&a.readAsDataURL(t)}),[]),N=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Are you sure you want to set default picture?")&&h(null);case 2:case"end":return e.stop()}}),e)}))),[]);return Object(g.jsxs)("form",{onSubmit:v,className:"profileForm",children:[Object(g.jsx)("div",{className:"profilePhoto__attachment",children:O?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:O}),Object(g.jsxs)("div",{className:"profilePhoto__label",onClick:N,children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:k.c})]})]}):Object(g.jsx)("img",{src:I})}),Object(g.jsx)("input",{type:"text",onChange:w,placeholder:"Diaplay Name",value:i,autoFocus:!0,className:"formInput",style:{marginTop:20}}),Object(g.jsxs)("label",{for:"attach-file",className:"profilePhoto__label",style:{marginTop:10},children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(d.a,{icon:k.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:y,style:{opacity:0}}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",onClick:v,className:"formBtn",style:""===i?{opacity:.5,cursor:"default"}:{}})]})},P=function(e){var t=e.userObj,a=e.refreshUser;return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(E,{userObj:t,refreshUser:a})})},B=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(j.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(j.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},T=function(e){var t=e.refreshUser,a=e.isLoggedIn,c=e.userObj;return Object(g.jsxs)(j.a,{children:[a&&Object(g.jsx)(B,{userObj:c}),Object(g.jsx)(b.c,{children:a?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(b.a,{exact:!0,path:"/",children:Object(g.jsx)(R,{userObj:c})}),Object(g.jsx)(b.a,{exact:!0,path:"/profile",children:Object(g.jsx)(F,{userObj:c,refreshUser:t})}),Object(g.jsx)(b.a,{exact:!0,path:"/profileEdit",children:Object(g.jsx)(P,{userObj:c,refreshUser:t})})]}):Object(g.jsx)(b.a,{exact:!0,path:"/",children:Object(g.jsx)(w,{})})})]})};var D=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),i=s[0],j=s[1],b=Object(c.useCallback)((function(){h.onAuthStateChanged((function(e){e?(j({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}}),j(e)):j(null),n(!0)}))}),[]),d=Object(c.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h.currentUser,j({uid:t.uid,displayName:t.displayName,photoURL:t.photoURL,updateProfile:function(e){return t.updateProfile(e)}}),j(t);case 3:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){b()}),[b]),Object(g.jsx)(g.Fragment,{children:a?Object(g.jsx)(T,{refreshUser:d,isLoggedIn:Boolean(i),userObj:i}):"Initializing ..."})};a(51);s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.61afd645.chunk.js.map