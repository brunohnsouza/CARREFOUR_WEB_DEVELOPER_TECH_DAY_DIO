/** ==========================
    ÁREA DA BARRA DE NAVEGAÇÃO 
    ========================== */

/* Classe 'MobileNavbar' (menu, lista e links usados) junto com seus construtores.
Com essa classe, o usuário poderá passar 'qual o mobileMenu, navList e navLinks */
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    /* Método de animação dos links ao aparecer */
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    /* Método usado para que o evento 'click' se refira a classe 'MobileNavbar' */
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    /* Método que adiciona o evento de clique no botão do menu */ 
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    /* Modo inicializador que incia se 'mobileMenu' existir no documento */
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

/* Criação da 'mobileNavbar' utilizando seus seletores do (assim como no CSS) */
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

/*Inicialização */
mobileNavbar.init();