(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{171:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return o})),n.d(e,"default",(function(){return l}));var r=n(3),a=n(8),s=(n(0),n(237)),c={},i={unversionedId:"smart-contracts/test/TestGuestList",id:"version-0.3.2/smart-contracts/test/TestGuestList",isDocsHomePage:!1,title:"TestGuestList",description:"A basic guest list contract for testing.",source:"@site/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestGuestList",permalink:"/yearn-devdocs/v2/0.3.2/smart-contracts/test/TestGuestList",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",version:"0.3.2",frontMatter:{},sidebar:"version-0.3.2/mySidebar",previous:{title:"Registry.vy",permalink:"/yearn-devdocs/v2/0.3.2/smart-contracts/registry"},next:{title:"TestStrategy",permalink:"/yearn-devdocs/v2/0.3.2/smart-contracts/test/TestStrategy"}},o=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setGuests",id:"setguests",children:[]},{value:"authorized",id:"authorized",children:[]}]}],b={toc:o};function l(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A basic guest list contract for testing."),Object(s.b)("p",null,"For a Vyper implementation of this contract containing additional\nfunctionality, see ",Object(s.b)("a",{parentName:"p",href:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy"},"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy")),Object(s.b)("h2",{id:"functions"},"Functions"),Object(s.b)("h3",{id:"constructor"},"constructor"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(s.b)("p",null,"Create the test guest list, setting the message sender as\n",Object(s.b)("inlineCode",{parentName:"p"},"bouncer"),"."),Object(s.b)("p",null,"Note that since this is just for testing, you're unable to change\n",Object(s.b)("inlineCode",{parentName:"p"},"bouncer"),"."),Object(s.b)("h3",{id:"setguests"},"setGuests"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-solidity"},"  function setGuests(\n    address[] _guests,\n    bool[] _invited\n  ) external\n")),Object(s.b)("p",null,"Invite guests or kick them from the party."),Object(s.b)("h4",{id:"parameters"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"_guests")),Object(s.b)("td",{parentName:"tr",align:"left"},"address[]"),Object(s.b)("td",{parentName:"tr",align:"left"},"The guests to add or update.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"_invited")),Object(s.b)("td",{parentName:"tr",align:"left"},"bool[]"),Object(s.b)("td",{parentName:"tr",align:"left"},"A flag for each guest at the matching index, inviting or")))),Object(s.b)("p",null,"uninviting the guest."),Object(s.b)("h3",{id:"authorized"},"authorized"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-solidity"},"  function authorized(\n    address _guest,\n    uint256 _amount\n  ) external returns (bool)\n")),Object(s.b)("p",null,"Check if a guest with a bag of a certain size is allowed into\nthe party."),Object(s.b)("p",null,"Note that ",Object(s.b)("inlineCode",{parentName:"p"},"_amount")," isn't checked to keep test setup simple, since\nfrom the vault tests' perspective this is a pass/fail call anyway."),Object(s.b)("h4",{id:"parameters-1"},"Parameters:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"_guest")),Object(s.b)("td",{parentName:"tr",align:"left"},"address"),Object(s.b)("td",{parentName:"tr",align:"left"},"The guest's address to check.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},Object(s.b)("inlineCode",{parentName:"td"},"_amount")),Object(s.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(s.b)("td",{parentName:"tr",align:"left"},"Not used. The amount of tokens the guest is bringing.")))))}l.isMDXComponent=!0},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),l=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return n?a.a.createElement(m,i(i({ref:e},b),{},{components:n})):a.a.createElement(m,i({ref:e},b))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,c=new Array(s);c[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var b=2;b<s;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);