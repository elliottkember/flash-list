"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"section-list",title:"SectionList"},l=void 0,c={unversionedId:"guides/section-list",id:"guides/section-list",title:"SectionList",description:"React Native has a convenience component on top of FlatList, called SectionList. This component has some additional props:",source:"@site/docs/guides/section-list.md",sourceDirName:"guides",slug:"/guides/section-list",permalink:"/flash-list/docs/guides/section-list",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/guides/section-list.md",tags:[],version:"current",lastUpdatedBy:"Jenny Shen",lastUpdatedAt:1715102123,formattedLastUpdatedAt:"5/7/2024",frontMatter:{id:"section-list",title:"SectionList"},sidebar:"autoSidebar",previous:{title:"React Native Reanimated",permalink:"/flash-list/docs/guides/reanimated"},next:{title:"Testing with Jest",permalink:"/flash-list/docs/testing"}},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native has a convenience component on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),", called ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/sectionlist"},(0,r.kt)("inlineCode",{parentName:"a"},"SectionList")),". This component has some additional props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist#requiredsections"},(0,r.kt)("inlineCode",{parentName:"a"},"sections"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist#rendersectionfooter"},(0,r.kt)("inlineCode",{parentName:"a"},"renderSectionFooter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist#rendersectionheader"},(0,r.kt)("inlineCode",{parentName:"a"},"renderSectionHeader"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist#sectionseparatorcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"SectionSeparatorComponent"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/sectionlist#stickysectionheadersenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"stickySectionHeadersEnabled")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"FlashList")," offers none of these props but all of them are replaceable with existing props.")),(0,r.kt)("p",null,"The difficulty of migrating from ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," will depend on the data you have at hand - the data may be more suitable for ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList"),", requiring you to massage the data, but the opposite can be true as well. In that case, using ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," might even result in less code."),(0,r.kt)("p",null,"Let's go through how to migrate from ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList")," in the following example - a contacts list."),(0,r.kt)("p",null,"This is how we could write such a list with ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { SectionList, StyleSheet, Text } from "react-native";\n\ninterface Contact {\n  firstName: string;\n  lastName: string;\n}\n\ninterface Section {\n  title: string;\n  data: Contact[];\n}\n\nconst contacts: Section[] = [\n  { title: "A", data: [{ firstName: "John", lastName: "Aaron" }] },\n  {\n    title: "D",\n    data: [\n      { firstName: "John", lastName: "Doe" },\n      { firstName: "Mary", lastName: "Dianne" },\n    ],\n  },\n];\n\nconst ContactsSectionList = () => {\n  return (\n    <SectionList\n      sections={contacts}\n      renderItem={({ item }) => {\n        return <Text>{item.firstName}</Text>;\n      }}\n      renderSectionHeader={({ section: { title } }) => (\n        <Text style={styles.header}>{title}</Text>\n      )}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 32,\n    backgroundColor: "#fff",\n  },\n});\n')),(0,r.kt)("p",null,"To migrate to ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList"),", we'd need to first convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts")," variable to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const contacts: (string | Contact)[] = [\n  "A",\n  { firstName: "John", lastName: "Aaron" },\n  "D",\n  { firstName: "John", lastName: "Doe" },\n  { firstName: "Mary", lastName: "Dianne" },\n];\n')),(0,r.kt)("p",null,"As you can see, you can add the section item right along with the data. Then in the ",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem"),", you can distinguish what to render based on the type of the item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const ContactsFlashList = () => {\n  return (\n    <FlashList\n      data={contacts}\n      renderItem={({ item }) => {\n        if (typeof item === "string") {\n          // Rendering header\n          return <Text style={styles.header}>{item}</Text>;\n        } else {\n          // Render item\n          return <Text>{item.firstName}</Text>;\n        }\n      }}\n      getItemType={(item) => {\n        // To achieve better performance, specify the type based on the item\n        return typeof item === "string" ? "sectionHeader" : "row";\n      }}\n      estimatedItemSize={100}\n    />\n  );\n};\n')),(0,r.kt)("p",null,"You can follow a similar pattern as for ",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem")," for the rest of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList"),"'s props."),(0,r.kt)("p",null,"If you want your section headers to be sticky, you will also need to compute the array for ",(0,r.kt)("inlineCode",{parentName:"p"},"stickyHeaderIndices"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const stickyHeaderIndices = contacts\n  .map((item, index) => {\n    if (typeof item === "string") {\n      return index;\n    } else {\n      return null;\n    }\n  })\n  .filter((item) => item !== null) as number[];\n')),(0,r.kt)("p",null,"And that's it! Below you can find the whole example for ",(0,r.kt)("inlineCode",{parentName:"p"},"FlashList"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { StyleSheet, Text } from "react-native";\nimport { FlashList } from "@shopify/flash-list";\n\ninterface Contact {\n  firstName: string;\n  lastName: string;\n}\n\nconst contacts: (string | Contact)[] = [\n  "A",\n  { firstName: "John", lastName: "Aaron" },\n  "D",\n  { firstName: "John", lastName: "Doe" },\n  { firstName: "Mary", lastName: "Dianne" },\n];\n\nconst stickyHeaderIndices = contacts\n  .map((item, index) => {\n    if (typeof item === "string") {\n      return index;\n    } else {\n      return null;\n    }\n  })\n  .filter((item) => item !== null) as number[];\n\nconst ContactsFlashList = () => {\n  return (\n    <FlashList\n      data={contacts}\n      renderItem={({ item }) => {\n        if (typeof item === "string") {\n          // Rendering header\n          return <Text style={styles.header}>{item}</Text>;\n        } else {\n          // Render item\n          return <Text>{item.firstName}</Text>;\n        }\n      }}\n      stickyHeaderIndices={stickyHeaderIndices}\n      getItemType={(item) => {\n        // To achieve better performance, specify the type based on the item\n        return typeof item === "string" ? "sectionHeader" : "row";\n      }}\n      estimatedItemSize={100}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 32,\n    backgroundColor: "#fff",\n  },\n});\n')))}d.isMDXComponent=!0}}]);