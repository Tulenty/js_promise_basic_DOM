var e=new Promise(function(e,n){var o=document.querySelector(".logo");o?o.addEventListener("click",function(){e()}):n(Error("Logo not found on the page"))}),n=new Promise(function(e,n){setTimeout(function(){n(Error("error"))},3e3)}),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"message",o=document.createElement("div");return o.classList.add(n),o.textContent=e,o},t=function(e){document.body.appendChild(e)};Promise.race([e,n]).then(function(){t(o("Promise was resolved!"))}).catch(function(e){t(o("Promise was rejected! ".concat(e.message),"error-message"))});
//# sourceMappingURL=index.7baaa7de.js.map
