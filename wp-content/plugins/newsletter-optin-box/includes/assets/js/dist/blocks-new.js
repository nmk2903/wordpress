(()=>{"use strict";const t=window.wp.element;var e,o,n,r;e=window.wp.blocks.registerBlockType,o=window.wp.components.SelectControl,n=window.wp.i18n.__,r=window.noptin_forms,e("noptin/form",{title:n("Newsletter Form","newsletter-optin-box"),description:n("Displays a newsletter subscription form","newsletter-optin-box"),category:"widgets",attributes:{form:{type:"int",default:0}},icon:"forms",supports:{html:!1},edit:function(e){return(0,t.createElement)("div",{style:{backgroundColor:"#f8f9f9",padding:"14px"}},(0,t.createElement)(o,{label:n("Select Newsletter Form","newsletter-optin-box"),value:e.attributes.form,options:r,onChange:function(t){e.setAttributes({form:t})}}))},save:function(t){return null}})})();