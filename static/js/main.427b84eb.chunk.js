(this["webpackJsonpsocial_network_2.0"]=this["webpackJsonpsocial_network_2.0"]||[]).push([[1],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(39),r=n(3),c=n(33),s="SEND_MY_MESSAGE_TEXT",i={usersWithDialogs:[{id:3450,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",userName:"Andy"},{id:4560,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",userName:"Panda"},{id:2340,userImg:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg",userName:"Dasha"},{id:3440,userImg:"https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg",userName:"Niko"},{id:4e3,userImg:"https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg",userName:"July"},{id:5567,userImg:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg",userName:"Vlad"}],dialogsMessages:[{id:0,message:"hi"},{id:1,message:"how are u?"},{id:2,message:"maybe go beer?"}]},o=function(e,t){return function(e){e(function(e){return{type:s,payload:e}}(t)),e(Object(c.a)("addDialogMessageForm"))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return t.payload&&t.payload.replace(/\s/g,"")?Object(r.a)(Object(r.a)({},e),{},{dialogsMessages:[].concat(Object(a.a)(e.dialogsMessages),[{id:3,message:t.payload}])}):e;default:return e}}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(130),c=(n(0),n(64)),s=n.n(c),i=n(1),o=["input","meta"],u=function(e){return function(t){var n=t.input,c=t.meta,u=Object(r.a)(t,o),l=c.touched&&c.error;return Object(i.jsxs)("div",{className:"".concat(s.a.form_control," ").concat(l&&s.a.error),children:[l&&Object(i.jsx)("span",{className:s.a.errorMessage,children:c.error}),Object(i.jsx)(e,Object(a.a)(Object(a.a)({},n),u))]})}}},14:function(e,t,n){e.exports={aside:"Aside_aside__11b96",asideOpen:"Aside_asideOpen__2HEwF",nav:"Aside_nav__LAQWh",active_link:"Aside_active_link__6zfJc",avatars_wrapper:"Aside_avatars_wrapper__2968D",avatars_box:"Aside_avatars_box__Nq9mM",avatar_wrapper:"Aside_avatar_wrapper__vA0o8",img_wrapper:"Aside_img_wrapper___ILMY",user_name:"Aside_user_name__32glW"}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u}));var a=n(127),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a1cfc85a-7e70-4120-8bed-62fbd526678c"}}),c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateUserStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},updateBioProfile:function(e){return r.put("profile",e).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},s={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},i={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},o={follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getCaptcha:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}}},239:function(e,t,n){},240:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(126),c=n(125),s=n(41),i=n(90),o=n(9),u=n.n(o),l=n(15),d=n(3),p=n(16),f="SET_USER_DATA",j="SET_CAPTCHA",b="SET_OWNER",h={id:null,email:null,login:null,isAuth:!1,isOwner:!1,captchaUrl:null},m=function(e,t,n,a){return{type:f,payload:{id:e,email:t,login:n,isAuth:a}}},O=function(e){return{type:j,payload:e}},g=function(e){return{type:b,payload:e}},_=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,c=a.email,s=a.login,t(m(r,c,s,!0)),t(g(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.resultCode&&(t(m(null,null,null,!1)),t(O(null)),t(g(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,p.c.getCaptcha();case 3:n=e.sent,t(O(n.url));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),t.payload);case j:return Object(d.a)(Object(d.a)({},e),{},{captchaUrl:t.payload});case b:return Object(d.a)(Object(d.a)({},e),{},{isOwner:t.payload});default:return e}},y="INITIALIZED_SUCCESS",w={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},N=n(88),A=n(100),S=Object(a.c)({sideBar:s.b,usersPage:i.a,auth:x,app:B,profilePage:N.b,messagesPage:A.a,form:c.a}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,I=Object(a.e)(S,E(Object(a.a)(r.a)));window.store=I;var C=I,T=n(0),P=n.n(T),k=n(52),U=n.n(k),M=(n(239),n(240),n(40)),L=n.n(M),F=n(12),W=n(10),z=n(112),R=n(123),G=n(124),J=n(82),V=n(1),H=Object(z.a)("input"),q=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.captchaUrl;return Object(V.jsxs)("form",{onSubmit:t,className:L.a.login_form,action:"",children:[Object(V.jsx)("h5",{children:"Login"}),Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{name:"email",placeholder:"email",component:H,validate:[J.b]})}),Object(V.jsx)("span",{children:Object(V.jsx)(R.a,{name:"password",type:"password",placeholder:"password",component:H,validate:[J.b]})}),Object(V.jsxs)("label",{children:[Object(V.jsx)(R.a,{name:"rememberMe",component:H,type:"checkbox"}),Object(V.jsx)("span",{children:"Remember me"})]}),n&&Object(V.jsxs)("span",{className:L.a.login_captcha,children:[Object(V.jsx)(R.a,{name:"captcha",placeholder:"captcha",component:H}),Object(V.jsx)("img",{src:n,alt:"captcha"})]}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{children:"Login"})})]})})),X=Object(F.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(l.a)(u.a.mark((function r(c){var s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n,a);case 2:0===(s=r.sent).resultCode?c(_()):10===s.resultCode&&c(D());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login,a=e.captchaUrl;return t?Object(V.jsx)(W.a,{to:"/profile"}):Object(V.jsx)("div",{className:L.a.login_wrapper,children:Object(V.jsx)("div",{className:L.a.login_box,children:Object(V.jsx)(q,{onSubmit:function(e){return n(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:a})})})})),Q=n(51),K=n.n(Q),Y=Object(F.b)(null,{logout:v,openMenu:s.c,closeMenu:s.a})((function(e){var t=e.logout,n=e.openMenu;return Object(V.jsxs)("header",{className:"".concat(K.a.header),children:[Object(V.jsx)("div",{className:K.a.logo,children:"LOGO"}),Object(V.jsx)("div",{className:K.a.menuBtn_visible,children:Object(V.jsx)("button",{onClick:function(){n()},children:"Menu"})}),Object(V.jsx)("div",{className:K.a.actionLogout_box,children:Object(V.jsx)("button",{onClick:function(){return t()},children:"logout"})})]})})),Z=Object(F.b)(null,{logout:v})((function(e){return Object(V.jsx)(Y,Object(d.a)({},e))})),$=n(14),ee=n.n($),te=n(22),ne=function(e){return e.sideBar.avatarsData},ae=function(e){var t=e.avatarName,n=e.avatarImg;return Object(V.jsxs)("div",{className:ee.a.avatar_wrapper,children:[Object(V.jsx)("div",{className:ee.a.img_wrapper,children:Object(V.jsx)("img",{src:n,alt:"userAvatar"})}),Object(V.jsx)("span",{className:ee.a.user_name,children:t})]})},re=Object(F.b)((function(e){return{avatarsData:ne(e)}}),null)((function(e){var t=e.avatarsData.map((function(e){return Object(V.jsx)(ae,{avatarName:e.userName,avatarImg:e.userImg},e.id)}));return Object(V.jsxs)("div",{className:ee.a.avatars_wrapper,children:[Object(V.jsx)("h5",{children:"Users"}),Object(V.jsx)("div",{className:ee.a.avatars_box,children:t})]})})),ce=Object(F.b)((function(e){return{menuVisible:e.sideBar.menuVisible}}),null)((function(e){var t=e.menuVisible;return Object(T.useEffect)((function(){document.querySelector("body").style.overflow=t?"hidden":"auto"}),[t]),Object(V.jsxs)("aside",{className:"".concat(ee.a.aside," ").concat(t?ee.a.asideOpen:""),children:[Object(V.jsxs)("ul",{className:ee.a.nav,children:[Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/profile",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Profile"})})}),Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/messages",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Messages"})})}),Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/music",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Music"})})}),Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/notifications",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Notifications"})})}),Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/users",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Users"})})}),Object(V.jsx)("li",{children:Object(V.jsx)(te.b,{to:"/settings",activeClassName:ee.a.active_link,children:Object(V.jsx)("span",{children:"Settings"})})})]}),Object(V.jsx)("div",{children:Object(V.jsx)(re,{})})]})})),se=n(53),ie=function(e){return function(t){return Object(V.jsx)(P.a.Suspense,{fallback:Object(V.jsx)(se.a,{}),children:Object(V.jsx)(e,Object(d.a)({},t))})}},oe=P.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,344))})),ue=P.a.lazy((function(){return n.e(7).then(n.bind(null,346))})),le=P.a.lazy((function(){return n.e(8).then(n.bind(null,342))})),de=P.a.lazy((function(){return n.e(9).then(n.bind(null,343))})),pe=P.a.lazy((function(){return Promise.all([n.e(0),n.e(10),n.e(5)]).then(n.bind(null,347))})),fe=P.a.lazy((function(){return n.e(6).then(n.bind(null,348))})),je=function(){return Object(V.jsxs)("div",{className:"main_page",children:[Object(V.jsx)(W.b,{exact:!0,path:"/",render:function(){return Object(V.jsx)(W.a,{to:"/profile"})}}),Object(V.jsx)(W.b,{path:"/profile/:userId?",render:ie(oe)}),Object(V.jsx)(W.b,{path:"/messages/:userId?",render:ie(ue)}),Object(V.jsx)(W.b,{path:"/music",render:ie(le)}),Object(V.jsx)(W.b,{path:"/notifications",render:ie(de)}),Object(V.jsx)(W.b,{path:"/users",render:ie(pe)}),Object(V.jsx)(W.b,{path:"/settings",render:ie(fe)})]})},be=Object(F.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{startInitialize:function(){return function(e){var t=e(_());Promise.all([t]).then((function(){e({type:y})}))}}})((function(e){var t=e.initialized,n=e.startInitialize,a=e.isAuth;return Object(T.useEffect)((function(){n()}),[]),t?a?Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(Z,{}),Object(V.jsxs)("main",{className:"main_wrapper",children:[Object(V.jsx)(ce,{}),Object(V.jsx)(je,{})]})]}):Object(V.jsx)(X,{}):Object(V.jsx)(se.a,{})}));U.a.render(Object(V.jsx)(te.a,{base:"/",children:Object(V.jsx)(F.a,{store:C,children:Object(V.jsx)(be,{})})}),document.getElementById("root"))},40:function(e,t,n){e.exports={login_wrapper:"Login_login_wrapper__33QG2",login_box:"Login_login_box__mubJU",login_form:"Login_login_form__2y_Z_",login_captcha:"Login_login_captcha__2A5do"}},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(3),r="SET_OPEN_MENU",c="SET_CLOSE_MENU",s={avatarsData:[{id:0,userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU",userName:"Andy"},{id:1,userImg:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg",userName:"Panda"},{id:2,userImg:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg",userName:"Dasha"},{id:3,userImg:"https://www.meme-arsenal.com/memes/f0ffafb204862b25d0f1aa7fce251f3a.jpg",userName:"Niko"},{id:4,userImg:"https://drasler.ru/wp-content/uploads/2019/05/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B1%D1%80%D1%8E%D0%BD%D0%B5%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8023.jpg",userName:"July"},{id:5,userImg:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg",userName:"Vlad"}],menuVisible:!1},i=function(){return function(e){e({type:r,payload:!0})}},o=function(){return function(e){e({type:c,payload:!1})}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:case c:return Object(a.a)(Object(a.a)({},e),{},{menuVisible:t.payload});default:return e}}},51:function(e,t,n){e.exports={header:"Header_header__1Sdb4",actionLogout_box:"Header_actionLogout_box__w54Gz",menuBtn_visible:"Header_menuBtn_visible__2aNtE",logo:"Header_logo__3IA6t"}},53:function(e,t,n){"use strict";n(0);var a=n(87),r=n.n(a),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:r.a.preloader_wrapper,children:Object(c.jsx)("div",{className:r.a.fetching})})}},64:function(e,t,n){e.exports={form_control:"FormControl_form_control__3j1S1",error:"FormControl_error__3Jt8C",errorMessage:"FormControl_errorMessage__3jpv-"}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},87:function(e,t,n){e.exports={preloader_wrapper:"Preloader_preloader_wrapper__2-yzO",fetching:"Preloader_fetching__2T72x","search-fetching":"Preloader_search-fetching__2v8MP"}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return D})),n.d(t,"f",(function(){return x})),n.d(t,"i",(function(){return y})),n.d(t,"e",(function(){return w}));var a=n(9),r=n.n(a),c=n(15),s=n(39),i=n(3),o=n(16),u=n(33),l="SET_PROFILE",d="SET_POST",p="SET_STATUS",f="SET_UPDATE_BIO_SUCCESS",j="SET_UPLOADED_PHOTO",b={profile:null,status:null,updatingBioSuccess:"",postData:[{id:0,name:"Vlad",message:"hi",likesCount:"150",img:"https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg"},{id:1,name:"Panda",message:"hi, are u there??",likesCount:"35",img:"https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg"},{id:2,name:"Dasha",message:"hi, how are u?",likesCount:"1536",img:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg"}]},h=function(e){return{type:p,payload:e}},m=function(e){return{type:f,payload:e}},O=function(e){return function(t){t(function(e){return{type:d,payload:e}}(e)),t(Object(u.a)("postMessageForm"))}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:l,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(h(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateUserStatus(e);case 2:0===t.sent.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.id,t.next=3,o.b.updateBioProfile(e);case 3:0===t.sent.resultCode&&(n(g(c)),n(m("updating was successfully!")));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:a=t.sent,n((r=a.data.photos,{type:j,payload:r})),n(m("updating was successfully!"));case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(t){t(m(e))}},w=function(){return function(e,t){var n=t().auth.id;e(g(n))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.payload});case p:return Object(i.a)(Object(i.a)({},e),{},{status:t.payload});case f:return Object(i.a)(Object(i.a)({},e),{},{updatingBioSuccess:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.payload})});case d:return t.payload&&t.payload.replace(/\s/g,"")?Object(i.a)(Object(i.a)({},e),{},{postData:[].concat(Object(s.a)(e.postData),[{id:3,name:"Dasha",message:t.payload,likesCount:0,img:"https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-105.jpg"}])}):e;default:return e}}},90:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return D}));var a=n(9),r=n.n(a),c=n(15),s=n(39),i=n(3),o=n(16),u="SET_USERS_DATA",l="SET_TOTAL_COUNT",d="SET_CURRENT_PAGE",p="SET_TOGGLE_FOLLOW",f="SET_IS_FETCHING",j="SET_FOLLOWING_IN_PROGRESS",b={users:[],pageSize:75,currentPage:1,totalCount:0,isFetching:!1,followingInProgress:[]},h=function(e){return{type:d,payload:e}},m=function(e){return{type:p,payload:e}},O=function(e){return{type:f,payload:e}},g=function(e,t){return{type:j,payload:{isFollowing:e,userId:t}}},_=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(e)),a(O(!0)),n.next=4,o.e.getUsers(e,t);case 4:c=n.sent,a(O(!1)),a((s=c.totalCount,{type:l,payload:s})),a((r=c.items,{type:u,payload:r}));case 8:case"end":return n.stop()}var r,s}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(!0,e)),t.next=3,o.d.follow(e);case 3:0===t.sent.resultCode&&(n(m(e)),n(g(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(!0,e)),t.next=3,o.d.unfollow(e);case 3:0===t.sent.resultCode&&(n(m(e)),n(g(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:t.payload});case l:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.payload});case d:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.payload});case f:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.payload.isFollowing?[].concat(Object(s.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return t.payload!==e.id||e.followed?t.payload===e.id&&e.followed?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e:Object(i.a)(Object(i.a)({},e),{},{followed:!0})}))});default:return e}}}},[[285,2,3]]]);
//# sourceMappingURL=main.427b84eb.chunk.js.map