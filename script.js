const carres = document.querySelectorAll('.carre');
carres.addList.add("carre");

    carres.forEach(carre=>{
        carre.addEventListener('click',function(){
        if(carres.classList.contains("active")){ //classList.contains() permet de vérifier si la classe active est sur l'élément.
            carres.classList.remove("active")
            carres.classList.add("box")
                                
                }
        else{
            carres.classList.remove("carre")
            carres.classList.add("active")
        }
        
    }
}

// carres.forEach(carre=>{
//     carre.addEventListener('click',()=>
//     // regarder si la classe active est sur l'element
//                   carre.classList.add('active')
//                       )
//                       })


