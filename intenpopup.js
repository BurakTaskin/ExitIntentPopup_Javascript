$(document).ready(function(){
        $("body").mouseleave(function(){
            if(localStorage.getItem('popState') != 'shown'){
                intentPopup();
                localStorage.setItem('popState','shown')
            }
        });
    })
    function intentPopup() {
        
        if(sessionStorage.dontopen==null || sessionStorage.dontopen=="dontopen"){

            isClosed = true
            divbackg = document.createElement("div")
            divbackg.style.position = "fixed"
            divbackg.style.width = "100%"
            divbackg.style.height = "100%"
            divbackg.style.background = "black"
            divbackg.style.opacity = "0.5"
            divbackg.style.zIndex = "999"
            divbackg.style.top = "0"
            divbackg.style.left = "0"
            document.querySelector("body").appendChild(divbackg)
            popupDiv = document.createElement("div")
            if (screen.width > 600) {
                popupDiv.style.width = "50%"
                popupDiv.style.top = "25%"
                popupDiv.style.left = "25%"
    } else {
        popupDiv.style.width = "90%"
        popupDiv.style.top = "5%"
        popupDiv.style.left = "5%"
    }
    popupDiv.style.position = "fixed"
    popupDiv.style.zIndex = "1000"
    if (screen.width > 600) {
        popupDiv.innerHTML = "<a href='https://www.google.com'><img style='border-radius:15px;box-shadow: 9px 11px 17px 0px #3a3a3a;width:100%;transition:ease 1s width' src='https://www.joomlavia.com/images/2020/12/25/joomla-popup-eklentisi-popup-onpage_large.jpg'></a>"
    } else {
        popupDiv.innerHTML = "<a href='https://www.google.com'><img style='border-radius:15px;box-shadow: 9px 11px 17px 0px #3a3a3a;width:100%;transition:ease 1s width' src='https://www.joomlavia.com/images/2020/12/25/joomla-popup-eklentisi-popup-onpage_large.jpg'></a>"
    }
    popupDiv.setAttribute("id", "exitpopup")
    document.querySelector("body").appendChild(popupDiv)

    var closePop = document.createElement("p")
    closePop.innerText = "X"
    closePop.style.color = "white"
    closePop.style.fontSize = "25px"
    closePop.style.fontWeight = "bold"
    closePop.style.position = "absolute"
    closePop.style.cursor = "pointer"
    closePop.style.margin = "0"
    closePop.style.top = "10px"
    closePop.style.right = "10px"
    document.querySelector("#exitpopup").appendChild(closePop)

    closePop.addEventListener("click", function () {
        popupDiv.remove()
        divbackg.remove()
      saveSS()
    })

    divbackg.addEventListener("click", function (position) {
        popupDiv.remove()
        divbackg.remove()
      saveSS()
    })

}
function saveSS(){
    sessionStorage.setItem("dontopen", "dontopen")
}


    }