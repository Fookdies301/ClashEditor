"use strict";!function(){var e=localStorage.getItem("clashEditor:config:proxygroup"),o=localStorage.getItem("clashEditor:config:rule");if(e&&""!==e){var t=[];jsyaml.load(e)["Proxy Group"].map(function(e){t.push("<code>".concat(e.name,"</code>"))}),document.getElementById("rule-proxygroup-list").innerHTML=t.join("，")}else Modal("这看起来不太正常","ClashEditor 无法读取您的 Proxy Group 配置！<br>3 秒后将会回到 Proxy Group 编辑页面！"),setTimeout(function(){window.location.pathname="/proxygroup"},3500);var n=CodeMirror(document.getElementById("rule-editor"),{lineNumbers:!0,mode:"yaml"});o&&""!==o?n.setValue(o):n.setValue("Rule:\n"),document.getElementById("ce-rule-btn-finish").addEventListener("click",function(){setLS("clashEditor:config:rule",n.getValue()),setTimeout(function(){window.location.pathname="/finish"},500)})}();