(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!==t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const r=window.wp.element,a=window.wp.domReady;var o=e.n(a);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const s=window.wp.components,u=window.wp.apiFetch;var p=e.n(u);const m=window.wp.i18n;function d(e){var t=e.title,n=e.isSecodary,a=e.className,o=e.children,l=c((0,r.useState)(!0),2),i=l[0],u=l[1];return a=a||"",(0,r.createElement)(s.Card,{variant:n?"secondary":"primary",className:"noptin-component__section ".concat(a)},(0,r.createElement)(s.CardHeader,null,(0,r.createElement)(s.Flex,null,(0,r.createElement)(s.FlexBlock,null,(0,r.createElement)("h3",null,t)),(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.Button,{isTertiary:!0,onClick:function(){return u(!i)}},(0,r.createElement)(s.Icon,{icon:i?"arrow-up-alt2":"arrow-down-alt2"}))))),i&&o)}function f(e){var t=e.label,n=e.value,a=t.toLowerCase().replace(/[^a-z0-9]/g,"-");return(0,r.createElement)("li",{className:"noptin-list-item noptin-list-item__".concat(a)},(0,r.createElement)("div",{className:"noptin-list-item__key"},t),(0,r.createElement)("div",{className:"noptin-list-item__value"},n))}function b(e){var t=e.items;return(0,r.createElement)("ul",{className:"noptin-component__list"},t.map((function(e){return(0,r.createElement)(f,{key:e.label,label:e.label,value:e.value})})))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){if(!e)return"-";var t=new Date;return"string"==typeof e?t.setTime(Date.parse(e)):t.setTime(Date.parse(e.date)),t.toLocaleString()}function _(e){var t=e.automationRule,n=e.setError,a=e.setSuccess,o=e.setAutomationRule,l=e.isSaving,i=e.setIsSaving,c=t.id>0?"/noptin/v1/automation_rules/".concat(t.id):"/noptin/v1/automation_rules/",u=[{label:(0,m.__)("ID","newsletter-optin-box"),value:t.id?t.id:(0,m.__)("New","newsletter-optin-box")},{label:(0,m.__)("Status","newsletter-optin-box"),value:(0,r.createElement)(s.ToggleControl,{label:t.status?(0,m.__)("Active","newsletter-optin-box"):(0,m.__)("Inactive","newsletter-optin-box"),checked:!!t.status,className:"noptin-mb0",onChange:function(e){o(y(y({},t),{},{status:e}))},__nextHasNoMarginBottom:!0})}];return t.id>0&&(u.push({label:(0,m.__)("Times Run","newsletter-optin-box"),value:t.times_run},{label:(0,m.__)("Created at","newsletter-optin-box"),value:v(t.created_at)},{label:(0,m.__)("Updated at","newsletter-optin-box"),value:v(t.updated_at)}),Array.isArray(t.metadata)||Object.keys(t.metadata).forEach((function(e){"string"!=typeof t.metadata[e]&&"number"!=typeof t.metadata[e]||u.push({label:e,value:t.metadata[e]})}))),(0,r.createElement)(d,{title:(0,m.__)("Automation Rule","newsletter-optin-box")},(0,r.createElement)(s.CardBody,null,(0,r.createElement)(b,{items:u}),(0,r.createElement)(s.Button,{variant:"primary",onClick:function(){i(!0),n(null),a(null),p()({path:c,method:"POST",data:t}).then((function(e){return a((0,m.__)("Automation rule saved.","newsletter-optin-box")),o(y(y({},t),e)),e})).then((function(e){e.id>0&&window.history.replaceState({},"","?page=noptin-automation-rules&noptin_edit_automation_rule=".concat(e.id))})).catch((function(e){e.message?n(e.message):n((0,m.__)("An error occurred while saving.","newsletter-optin-box"))})).finally((function(){i(!1)}))},disabled:l,isPressed:l},!l&&(0,m.__)("Save Automation","newsletter-optin-box"),l&&(0,m.__)("Saving...","newsletter-optin-box"),l&&(0,r.createElement)(s.Spinner,null))))}function h(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=[{label:(0,m.__)("Only run if","newsletter-optin-box"),value:"allow"},{label:(0,m.__)("Do not run if","newsletter-optin-box"),value:"prevent"}],j=[{label:(0,m.__)("all","newsletter-optin-box"),value:"all"},{label:(0,m.__)("any","newsletter-optin-box"),value:"any"}];function S(e,t){return[{label:t,value:"",disabled:!0}].concat(h(e))}function C(e){var t=e.type,n=e.action,a=e.ruleCount,o=e.setConditionalLogicAttribute,l=a>1;return(0,r.createElement)(s.Flex,{className:"noptin-component__field-lg",wrap:!0},(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.SelectControl,{label:(0,m.__)("If","newsletter-optin-box"),hideLabelFromVision:!0,value:n||"allow",options:x,onChange:function(e){return o("action",e)},size:"default",__nextHasNoMarginBottom:!0})),l&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.SelectControl,{label:(0,m.__)("all","newsletter-optin-box"),hideLabelFromVision:!0,value:t||"all",options:j,onChange:function(e){return o("type",e)},size:"default",__nextHasNoMarginBottom:!0})),(0,r.createElement)(s.FlexBlock,null,(0,m.__)("of the following rules are true:","newsletter-optin-box"))))}function k(e){var t=e.rule,n=e.comparisons,a=e.availableConditionTypes,o=e.updateRule,l=e.removeRule,i=e.conditionType,c=e.isLastRule,u=(e.isFirstRule,(0,r.useMemo)((function(){return e=t.type,a[e]||{};var e}),[a,t.type])),p=(0,r.useMemo)((function(){return e=u.options,t=[],e?Array.isArray(e)?(e.forEach((function(e,n){t.push({label:e,value:n})})),t):(Object.keys(e).forEach((function(n){t.push({label:e[n],value:n})})),t):t;var e,t}),[u]),d=p.length>0,f=(0,r.useMemo)((function(){return u.type?u.type:"string"}),[u]),b=(0,r.useMemo)((function(){var e=[];return Object.keys(n).forEach((function(t){var r=n[t].type;if(d){if("string"===f&&"is"!=t&&"is_not"!=t)return;if("is_empty"===t||"is_not_empty"===t||"is_between"===t)return}"any"!==r&&r!=f||e.push({label:n[t].name,value:t})})),e}),[f]),g="",y=[];Object.keys(a).forEach((function(e){var t=a[e];""===g&&(g=t.type),y.push({label:t.label,value:e})}));var v=function(e,n){o(e,n),"type"!==e&&""===t.type&&o("type",g),"condition"!==e&&""===t.condition&&o("condition","is"),"type"===e&&(o("condition","is"),o("value",""))},_="is_empty"===t.condition||"is_not_empty"===t.condition,h=d&&!_,E=!d&&!_;return(0,r.createElement)(s.Flex,{className:"noptin-component__field-lg",wrap:!0},(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.SelectControl,{label:(0,m.__)("Condition Type","newsletter-optin-box"),hideLabelFromVision:!0,value:t.type?t.type:g,options:S(y,(0,m.__)("Select a condition","newsletter-optin-box")),onChange:function(e){return v("type",e)},size:"default",__nextHasNoMarginBottom:!0})),(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.SelectControl,{label:(0,m.__)("Comparison","newsletter-optin-box"),hideLabelFromVision:!0,value:t.condition?t.condition:"is",options:S(b,(0,m.__)("Select a comparison","newsletter-optin-box")),onChange:function(e){return v("condition",e)},size:"default",__nextHasNoMarginBottom:!0})),(0,r.createElement)(s.FlexItem,null,h&&(0,r.createElement)(s.SelectControl,{label:(0,m.__)("Value","newsletter-optin-box"),hideLabelFromVision:!0,value:t.value?t.value:"",options:S(p,(0,m.__)("Select a value","newsletter-optin-box")),onChange:function(e){return o("value",e)},size:"default",__nextHasNoMarginBottom:!0}),E&&(0,r.createElement)(s.TextControl,{type:"number"===f?"number":"text",label:(0,m.__)("Value","newsletter-optin-box"),hideLabelFromVision:!0,value:t.value?t.value:"",onChange:function(e){return o("value",e)},__nextHasNoMarginBottom:!0})),(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.Button,{onClick:l,icon:"trash"})),(0,r.createElement)(s.FlexBlock,null,!c&&(0,r.createElement)(r.Fragment,null,"any"===i&&(0,m.__)("or","newsletter-optin-box"),"all"===i&&(0,m.__)("and","newsletter-optin-box"))))}function P(e){var t=e.rules,n=e.conditionType,a=e.comparisons,o=e.availableSmartTags,l=e.setConditionalLogicAttribute,i=Array.isArray(t)?t:[],c=(0,r.useMemo)((function(){var e={};return o.forEach((function(t){t.conditional_logic&&(e[t.smart_tag]={key:t.smart_tag,label:t.label,options:t.options,type:t.conditional_logic,placeholder:t.placeholder?t.placeholder:""})})),e}),[o]),u=i.length;return(0,r.createElement)("div",{className:"noptin-conditional-logic-rules"},i.map((function(e,t){return(0,r.createElement)(k,{key:t,rule:e,updateRule:function(e,n){return function(e,t,n){var r=h(i);r[e][t]=n,l("rules",r)}(t,e,n)},removeRule:function(){return function(e){var t=h(i);t.splice(e,1),l("rules",t)}(t)},availableConditionTypes:c,isLastRule:t===u-1,isFirstRule:0===t,conditionType:n,comparisons:a})})),(0,r.createElement)(s.Button,{className:"noptin-add-conditional-rule",onClick:function(){var e=Object.keys(c)[0],t=c[e].options,n=c[e].placeholder?c[e].placeholder:"",r=Array.isArray(t)&&t.length?Object.keys(t)[0]:n,a=h(i);a.push({type:e,condition:"is",value:r}),l("rules",a)},variant:"secondary"},0===u?(0,m.__)("Add a rule","newsletter-optin-box"):(0,m.__)("Add another rule","newsletter-optin-box")))}function T(e){var a=e.onChange,o=e.value,l=e.comparisons,i=e.toggleText,c=e.availableSmartTags,u=e.className;"object"!==t(o)&&(o={enabled:!1,action:"allow",rules:[{condition:"is",type:"date",value:""}],type:"all"});var p=function(e,t){a(w(w({},o),{},n({},e,t)))};return(0,r.createElement)("div",{className:u},(0,r.createElement)(s.ToggleControl,{checked:!!o.enabled,onChange:function(e){return p("enabled",e)},className:"noptin-component__field",label:i||(0,m.__)("Optionally enable/disable this trigger depending on specific conditions.","newsletter-optin-box"),__nextHasNoMarginBottom:!0}),o.enabled&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(C,{ruleCount:o.rules?o.rules.length:0,type:o.type,action:o.action,setConditionalLogicAttribute:p}),(0,r.createElement)(P,{rules:o.rules,conditionType:o.type,comparisons:l,availableSmartTags:c,setConditionalLogicAttribute:p})))}var N=function(e){var t=e.mergeTag,n=e.onMergeTagClick,a=function(){if(t.example)return t.example;var e="default value";return t.replacement&&(e=t.replacement),t.default&&(e=t.default),e?"".concat(t.smart_tag,' default="').concat(e,'"'):"".concat(t.smart_tag)},o=t.description&&t.description!==t.label;return(0,r.createElement)("tr",{className:"noptin-merge-tag"},(0,r.createElement)("td",null,(0,r.createElement)("label",null,(0,r.createElement)("span",{className:"noptin-merge-tag-label"},t.label),(0,r.createElement)("input",{type:"text",className:"widefat",value:"[[".concat(a(),"]]"),onFocus:function(e){e.target.select(),n&&n("[[".concat(a(),"]]"))},readOnly:!0})),o&&(0,r.createElement)("p",{className:"description noptin-mb0"},t.description)))},A=function(e){var t=e.availableSmartTags,n=e.onMergeTagClick;return(0,r.createElement)("div",{className:"noptin-merge-tags-wrapper"},(0,r.createElement)("table",{className:"widefat striped"},(0,r.createElement)("tbody",null,t.map((function(e){return(0,r.createElement)(N,{key:e.smart_tag,mergeTag:e,onMergeTagClick:n})})))))},D=function(e){var t=e.isOpen,n=e.closeModal,a=e.availableSmartTags,o=e.onMergeTagClick;return(0,r.createElement)(r.Fragment,null,t&&(0,r.createElement)(s.Modal,{title:(0,m.__)("Smart Tags","newsletter-optin-box"),onRequestClose:n},(0,r.createElement)("div",{className:"noptin-component__field-lg noptin-component__field-noptin_description"},(0,r.createElement)(s.Tip,null,(0,m.__)("You can use the following smart tags to generate dynamic values.","newsletter-optin-box"))),(0,r.createElement)(A,{availableSmartTags:a,onMergeTagClick:o})))},F=function(e){var t=e.availableSmartTags;return(0,r.createElement)("div",{id:"noptin-automation-rule-smart-tags",style:{display:"none"}},(0,r.createElement)("h2",null,(0,m.__)("Smart Tags","newsletter-optin-box")),(0,r.createElement)("p",null,(0,m.__)("You can use the following smart tags to generate dynamic values.","newsletter-optin-box")),(0,r.createElement)(A,{availableSmartTags:t}))},B=["setting","availableSmartTags","isPressEnterToChange"],R=["setting","availableSmartTags","value","onChange"],M=["setting","value","options","onChange"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=["number","search","email","password","tel","url","date"];function z(e){var t=e.setting,n=e.availableSmartTags,a=e.isPressEnterToChange,o=E(e,B);void 0===a&&(a=!0);var l=c(K(n,(0,r.useCallback)((function(e){o.onChange&&o.onChange(o.value?o.value+e:e)}),[o.value,o.onChange])),2),i=l[0],u=l[1];return t.disabled&&(o.readOnly=!0,o.onFocus=function(e){return e.target.select()}),(0,r.createElement)(r.Fragment,null,u,(0,r.createElement)(s.__experimentalInputControl,H(H({},o),{},{type:L.includes(t.type)?t.type:"text",placeholder:t.placeholder?t.placeholder:"",suffix:i,isPressEnterToChange:a,__nextHasNoMarginBottom:!0,__next36pxDefaultSize:!0})))}var V=[{id:"key",label:(0,m.__)("Key","noptin-addons-pack"),type:"text"},{id:"value",label:(0,m.__)("Value","noptin-addons-pack"),type:"text"}];function K(e,t){var n=c((0,r.useState)(!1),2),a=n[0],o=n[1],l=(0,r.useCallback)((function(){o(!1)}),[o]),i=(0,r.useCallback)((function(e){t&&(t(e),l())})),u=null,p=null;return Array.isArray(e)&&e.length>0&&(p=(0,r.createElement)(D,{isOpen:a,closeModal:l,availableSmartTags:e,onMergeTagClick:i}),u=(0,r.createElement)(s.Button,{icon:"shortcode",variant:"tertiary",isPressed:a,label:(0,m.__)("Insert merge tag","newsletter-optin-box"),onClick:function(){o(!0)},showTooltip:!0})),[u,p]}function U(e){var t=e.setting,n=e.availableSmartTags,a=e.value,o=e.onChange,l=E(e,R),i=c((0,r.useState)(!1),2),u=i[0],p=i[1],d=c(K(n,(0,r.useCallback)((function(e){Array.isArray(u)&&((a=h(a))[u[0]][u[1]]+=e,o(a))}),[u,a,o])),2),f=d[0],b=d[1],g=(0,s.useBaseControlProps)(l),y=g.baseControlProps,v=g.controlProps;Array.isArray(a)||(a=[]);var _=(0,r.useCallback)((function(e){var t=e.item,n=e.field,a=e.index,o=e.onChange;return(0,r.createElement)(s.FlexBlock,null,(0,r.createElement)(s.__experimentalInputControl,{label:n.label,type:n.type,value:void 0===t[n.id]?"":t[n.id],placeholder:(0,m.sprintf)((0,m.__)("Enter %s","noptin-addons-pack"),n.label),className:"noptin-component__field noptin-condition-field",suffix:f,onChange:o,onFocus:function(){p([a,n.id])},isPressEnterToChange:!0,__nextHasNoMarginBottom:!0,__next36pxDefaultSize:!0}))}),[f]),O=(0,r.useCallback)((function(e){var t=e.item,n=e.index;return(0,r.createElement)(s.Flex,{className:"noptin-repeater-item",wrap:!0},V.map((function(e,l){return(0,r.createElement)(_,{key:l,index:n,item:t,field:e,onChange:function(t){var r=h(a);r[n][e.id]=t,o(r)}})})),(0,r.createElement)(s.FlexItem,null,(0,r.createElement)(s.Button,{icon:"trash",variant:"tertiary",className:"noptin-component__field",label:(0,m.__)("Delete","noptin-addons-pack"),showTooltip:!0,onClick:function(){var e=h(a);e.splice(n,1),o(e)}})))}),[a,o]);return(0,r.createElement)(s.BaseControl,H({},y),b,(0,r.createElement)("div",H({},v),a.map((function(e,t){return(0,r.createElement)(O,{key:t,item:e,index:t})})),(0,r.createElement)(s.Button,{onClick:function(){var e=h(a);e.push({}),o(e)},variant:"secondary"},t.add_field?t.add_field:(0,m.__)("Add","newsletter-optin-box"))))}function q(e){e.setting;var t=e.value,n=e.options,a=e.onChange,o=E(e,M),l=(0,s.useBaseControlProps)(o),i=l.baseControlProps,c=l.controlProps;return Array.isArray(t)||(t=[]),(0,r.createElement)(s.BaseControl,H({},i),(0,r.createElement)("div",H({},c),n.map((function(e,n){return(0,r.createElement)(s.CheckboxControl,{key:n,label:e.label,checked:t.includes(e.value),onChange:function(n){a(n?[].concat(h(t),[e.value]):t.filter((function(t){return t!==e.value})))}})}))))}function J(e){var t=e.settingKey,a=e.setting,o=e.availableSmartTags,l=e.prop,i=e.saved,c=e.setAttributes,u=(0,r.useCallback)((function(e){if(!l)return c(n({},t,e));var r=i[l]?i[l]:{},a=n({},l,H(H({},r),{},n({},t,e)));c(a)}),[t,l,i,c]);if(a.if||a.restrict){var p=a.restrict?a.restrict.split("."):a.if.split(".");if(!(2!==p.length||i[p[0]]&&i[p[0]][p[1]]))return null;if(1===p.length&&!i[p[0]])return null}if(a.condition&&!a.condition(i))return null;var d=i[t];l&&(d=i[l]?i[l][t]:void 0),(void 0===d||a.disabled)&&(d=a.default);var f=void 0!==d&&""!==d&&null!==d,b=[];a.options&&(b=Object.keys(a.options).map((function(e){return{label:a.options[e],value:e}})));var g=a.fullWidth?"noptin-component__field noptin-component__field-".concat(t):"noptin-component__field-lg noptin-component__field-".concat(t),y=a.description?(0,r.createElement)("span",{dangerouslySetInnerHTML:{__html:a.description}}):"",v={label:a.label,value:f?d:"",onChange:u,className:"".concat(g),help:y};return"select"===a.el?(b.unshift({label:a.placeholder?a.placeholder:(0,m.__)("Select an option","newsletter-optin-box"),value:"",disabled:!a.canSelectPlaceholder}),(0,r.createElement)(s.SelectControl,H(H({},v),{},{options:b,__nextHasNoMarginBottom:!0,__next36pxDefaultSize:!0}))):"form_token"===a.el?(0,r.createElement)(s.FormTokenField,H(H({},v),{},{value:Array.isArray(v.value)?v.value:[],suggestions:Array.isArray(a.suggestions)?a.suggestions:[],__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})):"multi_checkbox"===a.el||"multi_checkbox_alt"===a.el?(0,r.createElement)(q,H(H({},v),{},{options:b})):"conditional_logic"===a.el?(0,r.createElement)(T,H(H({},v),{},{availableSmartTags:o,comparisons:a.comparisons,toggleText:a.toggle_text})):"input"===a.el?a.type&&["toggle","switch","checkbox","checkbox_alt"].includes(a.type)?(0,r.createElement)(s.ToggleControl,H(H({},v),{},{checked:!!f&&d,onChange:function(e){u(e)}})):(0,r.createElement)(z,H(H({},v),{},{setting:a,availableSmartTags:"trigger_settings"===l?[]:o,isPressEnterToChange:!a.isInputToChange})):"textarea"===a.el?(0,r.createElement)(s.TextareaControl,H(H({},v),{},{setting:a,placeholder:a.placeholder?a.placeholder:"",__nextHasNoMarginBottom:!0})):"paragraph"===a.el?(0,r.createElement)("div",{className:g},(0,r.createElement)(s.Tip,null,a.content)):"hero"===a.el?(0,r.createElement)("div",{className:g},(0,r.createElement)("h3",null,a.content)):"key_value_repeater"===a.el||"webhook_key_value_repeater"===a.el?(0,r.createElement)(U,H(H({},v),{},{setting:a,availableSmartTags:"trigger_settings"===l?[]:o})):t}const Y=window.React,W=(0,Y.createContext)(null),$={didCatch:!1,error:null};class G extends Y.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=$}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var t,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];null===(t=(n=this.props).onReset)||void 0===t||t.call(n,{args:a,reason:"imperative-api"}),this.setState($)}}componentDidCatch(e,t){var n,r;null===(n=(r=this.props).onError)||void 0===n||n.call(r,e,t)}componentDidUpdate(e,t){const{didCatch:n}=this.state,{resetKeys:r}=this.props;var a,o;n&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some(((e,n)=>!Object.is(e,t[n])))}(e.resetKeys,r)&&(null===(a=(o=this.props).onReset)||void 0===a||a.call(o,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState($))}render(){const{children:e,fallbackRender:t,FallbackComponent:n,fallback:r}=this.props,{didCatch:a,error:o}=this.state;let l=e;if(a){const e={error:o,resetErrorBoundary:this.resetErrorBoundary};if((0,Y.isValidElement)(r))l=r;else if("function"==typeof t)l=t(e);else{if(!n)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");l=(0,Y.createElement)(n,e)}}return(0,Y.createElement)(W.Provider,{value:{didCatch:a,error:o,resetErrorBoundary:this.resetErrorBoundary}},l)}}function Q(e){var t=e.error;return(0,r.createElement)(s.Notice,{status:"error",isDismissible:!1},(0,r.createElement)("strong",null,(0,m.__)("Error:","newsletter-optin-box"))," ",t.message)}function X(e){var t=e.children;return(0,r.createElement)(G,{FallbackComponent:Q},t)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e){var t=e.sectionKey,n=e.label,a=e.prop,o=e.availableSmartTags,l=e.settings,i=e.automationRule,c=e.setAutomationRule,u=Object.keys(l);if(!u.length)return null;var p=(0,r.useCallback)((function(e){c(ee(ee({},i),e))}),[i,c]);return(0,r.createElement)(X,null,(0,r.createElement)(d,{title:n,className:"noptin-automation-rule-editor__section noptin-automation-rule-editor__section-".concat(t)},(0,r.createElement)(s.CardBody,null,u.map((function(e){return(0,r.createElement)(J,{key:e,settingKey:e,prop:a,availableSmartTags:o,saved:i,setAttributes:p,setting:l[e]})})))))}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){var t=e.settings,a=e.availableSmartTags,o=e.automationRule,l=e.setAutomationRule;if(!t||!o)return null;var i=Object.keys(t);return i.length?(0,r.createElement)("div",{className:"noptin-automation-rule-editor__sections"},(0,r.createElement)(X,null,i.map((function(e){return(0,r.createElement)(te,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({key:e,sectionKey:e,availableSmartTags:a,automationRule:o,setAutomationRule:l},t[e]))})))):null}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){var t=e.id,n=e.createNewUrl,a=!!(t&&parseInt(t)>0);return(0,r.createElement)("h1",{className:"wp-heading-inline"},a&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("span",null,(0,m.__)("Edit Automation Rule","newsletter-optin-box")),(0,r.createElement)("a",{href:n,className:"page-title-action"},(0,m.__)("Add New","newsletter-optin-box"))),!a&&(0,r.createElement)("span",null,(0,m.__)("Add Automation Rule","newsletter-optin-box")))}function le(e){var t=e.id,a=e.action,o=e.trigger,l=e.settings,i=e.smartTags,u=e.createNewUrl,m={action_id:a,trigger_id:o,action_settings:{},status:!0,trigger_settings:{}};(0,r.useEffect)((function(){l&&Object.values(l).forEach((function(e){["trigger_settings","action_settings"].includes(e.prop)&&e.settings&&Object.keys(e.settings).forEach((function(t){var n=e.settings[t];void 0!==n.default&&(m[e.prop][t]=n.default)}))}))}),[l]);var d=(0,r.useState)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m)),f=c(d,2),b=f[0],g=f[1],y=c((0,r.useState)(!1),2),v=y[0],h=y[1],E=c((0,r.useState)(1),2),O=E[0],w=E[1],x=c((0,r.useState)(null),2),j=x[0],S=x[1],C=c((0,r.useState)(null),2),k=C[0],P=C[1],T=(0,r.useMemo)((function(){return function(e,t){var n=[];return e?(Object.keys(e).forEach((function(r){var a=e[r];if(!a.conditions||a.conditions.every((function(e){if(Array.isArray(e.value))var n=e.value.some((function(n){return n==t[e.key]}));else n=e.value==t[e.key];return n===("is"===e.operator)}))){var o=r;a.label?o=a.label:a.description&&(o=a.description),n.push({smart_tag:r,label:o,example:a.example?a.example:"",description:a.description?a.description:"",placeholder:a.placeholder?a.placeholder:"",conditional_logic:!!a.conditional_logic&&a.conditional_logic,options:a.options?a.options:[]})}})),n):n}(i,b.trigger_settings||{})}),[i,b.trigger_settings]),N=O>0;(0,r.useEffect)((function(){t>0?(w(O+1),S(null),P(null),p()({path:"/noptin/v1/automation_rules/".concat(t)}).then((function(e){e&&g(e)})).catch((function(e){g(null),S(e.message)})).finally((function(){w(O-1)}))):w(O-1)}),[t]);var A={opacity:N||v?.5:1,pointerEvents:N||v?"none":"auto"};return(0,r.createElement)("div",{className:"noptin-automation-rule__editor",style:A},(0,r.createElement)(X,null,(0,r.createElement)(s.SlotFillProvider,null,(0,r.createElement)(oe,{id:b.id,createNewUrl:u}),(0,r.createElement)(s.Flex,{wrap:!0,align:"top"},(0,r.createElement)(s.FlexBlock,{className:"noptin-es6-editor__main"},j&&(0,r.createElement)(s.Notice,{status:"error",onDismiss:function(){S(null)}},j),k&&(0,r.createElement)(s.Notice,{status:"success",onDismiss:function(){P(null)}},k),N&&(0,r.createElement)(s.Spinner,null),!N&&(0,r.createElement)(re,{settings:l,automationRule:b,setAutomationRule:g,availableSmartTags:T})),(0,r.createElement)(s.FlexItem,{className:"noptin-component-editor__sidebar"},(0,r.createElement)(_,{automationRule:b,setAutomationRule:g,setError:S,setSuccess:P,isSaving:v,setIsSaving:h}))),!N&&(0,r.createElement)(F,{availableSmartTags:T}))))}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}o()((function(){var e=document.getElementById("noptin-automation-rule__editor-app");if(e){var t=ce({},e.dataset);t.id=parseInt(t.id),t.settings=JSON.parse(t.settings),t.smartTags=JSON.parse(t.smartTags);var n=(0,r.createElement)(r.StrictMode,null,(0,r.createElement)(X,null,(0,r.createElement)(le,ce({},t))));r.createRoot?(0,r.createRoot)(e).render(n):(0,r.render)(n,e)}}))})();