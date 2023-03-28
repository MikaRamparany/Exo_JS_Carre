const carres = document.querySelectorAll('.carre');


carres.forEach(carre => {
    
    carre.addEventListener('click', function() {
       

        if (carre.classList.contains('active')) {
            carre.classList.remove('active')
        } else {
            carre.classList.add('active')
        }     
    });
});


// carres.forEach(carre=>{
//     carre.addEventListener('click',()=>
//     // regarder si la classe active est sur l'element
//                   carre.classList.add('active')
//                       )
//                       })


