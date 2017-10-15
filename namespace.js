var JALO0011 = {
    init: function(){
        
        let jaloBox = document.createElement("div");
        jaloBox.classList.add("box");
        jaloBox.textContent = "jalo0011";
        let theBoxesId = document.querySelector("#boxes");
        theBoxesId.appendChild(jaloBox);
        jaloBox.addEventListener("click",toggleBorder);
        jaloBox.addEventListener("mouseover",toggleHilight);
        jaloBox.addEventListener("mouseout",toggleHilight);
        
        function toggleBorder(ev){
            jaloBox.style.borderColor = "blue";
            jaloBox.style.backgroundColor = "red";
        }
        
        function toggleHilight(ev){
            jaloBox.classList.toggle("hilight");
        }
    }
};
