const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.nav-menu a');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function() {
            menu.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        });
    });
});

window.addEventListener('scroll', () => {
    if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});

/* SCROLL */
const target  = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', function(){
    animeScroll()
})
/* SCROLL */


/* BORDA */
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-item");

    // Adiciona um evento de clique a cada item de navegação
    navItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            
            navItems.forEach(function(navItem) {
                navItem.classList.remove("active");
            });

            
            item.classList.add("active");
        });
    });
});
/* BORDA */

// JavaScript para modal da galeria de fotos
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    var galleryItems = document.querySelectorAll('.gallery_item img');
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});