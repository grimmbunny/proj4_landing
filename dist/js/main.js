function ocultaElementosDoHeader(){document.querySelector("header").classList.add("header--is-hidden")}function exibeElementosDoHeader(){document.querySelector("header").classList.remove("header--is-hidden")}window.addEventListener("scroll",function(){(150<window.scrollY?ocultaElementosDoHeader:exibeElementosDoHeader)()});