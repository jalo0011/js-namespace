var JALO0011 = {
    init: function(){
        let jaloBox = document.createElement("div");
        jaloBox.classList.toggle("box");
        jaloBox.textContent("jalo0011")
        let theBoxesId = document.querySelector("#boxes");
        theBoxesId.appendChild(jaloBox);
        jaloBox.addEventListener("click",toggleBorder);
        jaloBox.addEventListener("mouseover",toggleHilight);
        jaloBox.addEventListener("mouseout",toggleHilight);
        
        function toggleBorder(ev){
            jaloBox.style.border-color("blue")
            jaloBox.style.background-color("red");
        }
        
        function toggleHilight(ev){
            jaloBox.classList.toggle("hilight");
        }
    }
}
