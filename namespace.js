var JALO0011 = {
    init: function(){
        let d = document.createElement("div");
        d.classList.add("box");
        d.textContent("jalo0011")
        let b = document.querySelector("#boxes");
        b.appendChild(d);
        d.addEventListener("click",toggleBorder);
        d.addEventListener("mouseover",toggleHilight);
        d.addEventListener("mouseout",toggleHilight);
        
        function toggleBorder(ev){
            d.borderColor('#bff');
            d.backgroundColor('red');
        }
        
        function toggleHilight(ev){
            d.classList.toggle("hilight");
        }
    }
}
