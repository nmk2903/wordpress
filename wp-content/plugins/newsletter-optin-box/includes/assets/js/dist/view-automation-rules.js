(()=>{var n;(n=jQuery)(document).ready((function(){n(".noptin-toggle-automation-rule").on("change",(function(){var e=n(this).is(":checked"),t=n(this).closest("tr").data("id");n.post(noptinViewRules.ajaxurl,{action:"noptin_toggle_automation_rule",rule_id:t,_ajax_nonce:noptinViewRules.nonce,enabled:e?1:0}).catch((function(n){console.log(n)}))})),n(".noptin-automation-rule-action__delete").on("click",(function(e){if(e.preventDefault(),confirm(noptinViewRules.confirmDelete)){var t=n(this).closest("tr"),o=t.data("id");n.post(noptinViewRules.ajaxurl,{action:"noptin_delete_automation_rule",rule_id:o,_ajax_nonce:noptinViewRules.nonce}),t.fadeOut(1e3,(function(){t.remove()}))}}))}))})();