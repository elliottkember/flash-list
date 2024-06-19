"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8366:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var r=n(7462),a=n(3366),l=n(7294),o=n(3905),i=n(2389),u=n(5773),s=n(6010),c="tabItem_LplD";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,l.useState)(y),x=w[0],O=w[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=k[f];null!=j&&j!==x&&h.some((function(e){return e.value===j}))&&O(j)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==x&&(E(t),O(r),null!=f&&N(f,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:D,onClick:D},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}var f=function(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},m=["components"],v={id:"introduction",title:"Introduction \ud83d\udcda",slug:"/",sidebar_position:0},h=void 0,b={unversionedId:"introduction",id:"introduction",title:"Introduction \ud83d\udcda",description:"Fast & performant React Native list. No more blank cells.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/flash-list/docs/",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/index.mdx",tags:[],version:"current",lastUpdatedBy:"gasolin",lastUpdatedAt:1718812461,formattedLastUpdatedAt:"6/19/2024",sidebarPosition:0,frontMatter:{id:"introduction",title:"Introduction \ud83d\udcda",slug:"/",sidebar_position:0},sidebar:"autoSidebar",next:{title:"Usage",permalink:"/flash-list/docs/usage"}},y=[{value:"Installation",id:"installation",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"App / Playground",id:"app--playground",children:[],level:3}],level:2}],g={toc:y};function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fast & performant React Native list. No more blank cells.")),(0,o.kt)("p",null,"Swap from FlatList in seconds. Get instant performance."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(d,{defaultValue:"react-native",values:[{label:"React Native",value:"react-native"},{label:"Expo",value:"expo"}],mdxType:"Tabs"},(0,o.kt)(f,{value:"react-native",mdxType:"TabItem"},"Add the package to your project via:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @shopify/flash-list\n")),(0,o.kt)("p",null,"and run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," directory. If you don't use React Native CLI's\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"autolinking"),"\nfeature, you will need to manually link the dependency - read\n",(0,o.kt)("a",{parentName:"p",href:"/guides/manual-linking"},"here")," to learn more.")),(0,o.kt)(f,{value:"expo",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'\u2705 This library can be used with "Expo Go" from SDK 46 upwards or with a development client'),(0,o.kt)("li",{parentName:"ul"},"\u2705 You can use this library with ",(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.dev/development/introduction/"},"Development Builds"),". No config plugin is required.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install @shopify/flash-list expo-dev-client\n")),(0,o.kt)("p",null,"You can then ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/development/build/"},"create a new Development Build")," and begin using ",(0,o.kt)("inlineCode",{parentName:"p"},"FlashList"),"."))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Read more about the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"FlashList")," ",(0,o.kt)("a",{parentName:"p",href:"/usage"},"here")),(0,o.kt)("h3",{id:"app--playground"},"App / Playground"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shopify/flash-list/tree/main/fixture"},"fixture")," is an example app showing how to use the library."))}k.isMDXComponent=!0}}]);