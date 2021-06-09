let derecha = 20;
        let moverright = document.getElementById("cuadrado");



        function moverderecha(){
            derecha = derecha + 20
            moverright.style.left = derecha + "px";
        }
        
        moverright.addEventListener("click", moverderecha);