(this["webpackJsonpsocial_network_2.0"]=this["webpackJsonpsocial_network_2.0"]||[]).push([[7],{295:function(s,e,a){s.exports={messages_wrapper:"Messages_messages_wrapper__8RFkc",messages_users_block:"Messages_messages_users_block__1IjPP",dialogsUser_wrapper:"Messages_dialogsUser_wrapper__WPe60",dialogsUser_img_wrapper:"Messages_dialogsUser_img_wrapper__2TjEt",dialogsUser_name:"Messages_dialogsUser_name__3jZLj",active_dialog_user:"Messages_active_dialog_user__PqTAG",dialogs_messages_block:"Messages_dialogs_messages_block__2zgW0",dialogs_messages_container:"Messages_dialogs_messages_container__3fZZr",messages_box:"Messages_messages_box__TpBp0",dialogs_messages_footer:"Messages_dialogs_messages_footer__38v8w",dialog_message_form:"Messages_dialog_message_form__1q8aW",back_to_listUsers:"Messages_back_to_listUsers__3z9V-",messages_users_block_isHidden:"Messages_messages_users_block_isHidden__L8PxB",dialogs_messages_block_isOpen:"Messages_dialogs_messages_block_isOpen__2bNbR"}},346:function(s,e,a){"use strict";a.r(e);var i=a(0),r=a(295),o=a.n(r),t=a(12),c=a(3),n=a(22),_=a(1),g=function(s){var e=s.id,a=s.userName,i=s.userImg,r=s.closeUserList;return Object(_.jsx)(n.b,{to:"/messages/"+e,activeClassName:o.a.active_dialog_user,onClick:r,children:Object(_.jsxs)("div",{className:o.a.dialogsUser_wrapper,children:[Object(_.jsx)("div",{className:o.a.dialogsUser_img_wrapper,children:Object(_.jsx)("img",{src:i,alt:"user_avatar"})}),Object(_.jsx)("span",{className:o.a.dialogsUser_name,children:a})]})})},l=function(s){var e=s.usersWithDialogs,a=s.closeUserList,i=e.map((function(s){return Object(_.jsx)(g,Object(c.a)(Object(c.a)({},s),{},{closeUserList:a}),s.id)}));return Object(_.jsx)(_.Fragment,{children:i})},d=a(123),m=a(124),u=a(88),b=a(67),j=Object(u.a)("textarea"),p=Object(b.a)(300),O=Object(m.a)({form:"addDialogMessageForm"})((function(s){var e=s.handleSubmit;return Object(_.jsxs)("form",{onSubmit:e,className:o.a.dialog_message_form,children:[Object(_.jsx)(d.a,{name:"newDialogMessage",component:j,validate:[p]}),Object(_.jsx)("button",{children:"Send message"})]})})),f=function(s){var e=s.message;return Object(_.jsx)("div",{className:o.a.messages_box,children:Object(_.jsx)("p",{children:e})})},h=function(s){var e=s.dialogsMessages,a=s.sendMessage,i=s.dialogUserId,r=s.openDialogWithUser,t=s.openUserList,c=e.map((function(s){return Object(_.jsx)(f,{message:s.message},s.id)}));return Object(_.jsxs)("div",{className:"".concat(o.a.dialogs_messages_block," ").concat(r&&o.a.dialogs_messages_block_isOpen),children:[Object(_.jsx)("div",{className:o.a.dialogs_messages_container,children:c}),Object(_.jsx)("div",{className:o.a.dialogs_messages_footer,children:Object(_.jsx)(O,{onSubmit:function(s){a(i,s.newDialogMessage)}})}),Object(_.jsx)("div",{className:o.a.back_to_listUsers,children:Object(_.jsx)("button",{onClick:t,children:"<< back"})})]})},x=a(101),M=a(11),U=a(10),k=function(s){return s.messagesPage.usersWithDialogs},v=function(s){return s.messagesPage.dialogsMessages},w=function(s){return s.messagesPage.openDialogWithUser},N=a(41);e.default=Object(M.d)(Object(t.b)((function(s){return{usersWithDialogs:k(s),dialogsMessages:v(s),openDialogWithUser:w(s)}}),{sendMessage:x.c,closeMenu:N.a,openUserslistAction:x.b}),U.f)((function(s){var e=s.match.params.userId,a=s.usersWithDialogs,r=s.dialogsMessages,t=s.sendMessage,c=s.closeMenu,n=s.openDialogWithUser,g=s.openUserslistAction;Object(i.useEffect)((function(){c()}),[]);return Object(_.jsxs)("div",{className:o.a.messages_wrapper,children:[Object(_.jsx)("div",{className:"".concat(o.a.messages_users_block," ").concat(n&&o.a.messages_users_block_isHidden),children:Object(_.jsx)(l,{closeUserList:function(){return setTimeout((function(){return g(!0)}),250)},usersWithDialogs:a})}),Object(_.jsx)(h,{openUserList:function(){return setTimeout((function(){return g(!1)}),250)},dialogUserId:e,sendMessage:t,dialogsMessages:r,openDialogWithUser:n})]})}))}}]);
//# sourceMappingURL=7.e443a482.chunk.js.map