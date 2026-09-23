/**
* Template Name: Instant
* Template URL: https://bootstrapmade.com/newtemplate-bootstrap-website-template/
* Updated: Jul 07 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

const palavrasChave = [
  "Microplásticos",
  "Nanoplásticos",
  "Saúde Cardiovascular",
  "Placenta Humana",
  "Corrente Sanguínea",
  "Disruptores Endócrinos",
  "Bisfenol A (BPA)",
  "Ftalatos",
  "Plastisfera",
  "Bioacumulação",
  "Estresse Oxidativo",
  "Microbioma Intestinal",
  "Polietileno",
  "Polipropileno",
  "Garrafas PET",
  "Fibras Sintéticas",
  "One Health",
  "Biotecnologia",
  "Enzima PETase",
  "Saúde e Bem-Estar"
];

// Lógica para envio de mensagem anônima
const btnAnonimo = document.getElementById('btnAnonimo');
const inputName = document.getElementById('contactName');
const inputEmail = document.getElementById('contactEmail');
const inputPhone = document.getElementById('contactPhone');

let isAnonimo = false;

if (btnAnonimo) {
  btnAnonimo.addEventListener('click', function () {
    isAnonimo = !isAnonimo;

    if (isAnonimo) {
      // Remove a obrigatoriedade
      inputName.removeAttribute('required');
      inputEmail.removeAttribute('required');

      // Salva o que a pessoa já tinha digitado caso desista
      inputName.dataset.prevVal = inputName.value;
      inputEmail.dataset.prevVal = inputEmail.value;

      // Preenche dados anônimos (e-mail dummy evita erro no FormSubmit)
      inputName.value = 'Anônimo';
      inputEmail.value = 'anonimo@bionano.local';
      inputPhone.value = '';

      // Bloqueia a edição enquanto anônimo estiver ativo
      inputName.readOnly = true;
      inputEmail.readOnly = true;
      inputPhone.readOnly = true;

      // Atualiza o estado visual do botão
      this.classList.add('active');
      this.innerHTML = '<i class="bi bi-check2"></i> <span>Modo Anônimo</span>';
    } else {
      // Reativa a obrigatoriedade
      inputName.setAttribute('required', '');
      inputEmail.setAttribute('required', '');

      // Restaura valores e destrava campos
      inputName.value = inputName.dataset.prevVal || '';
      inputEmail.value = inputEmail.dataset.prevVal || '';
      inputName.readOnly = false;
      inputEmail.readOnly = false;
      inputPhone.readOnly = false;

      // Restaura o botão
      this.classList.remove('active');
      this.innerHTML = '<i class="bi bi-incognito"></i> <span>Anônimo</span>';
    }
  });
}

// Envio assíncrono com Pop-up de confirmação
const feedbackForm = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');
const feedbackModalEl = document.getElementById('feedbackModal');

if (feedbackForm && submitBtn && feedbackModalEl) {
  const feedbackModal = new bootstrap.Modal(feedbackModalEl);

  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. Muda o botão para estado de carregamento
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Enviando...';

    // 2. Dispara os dados para o FormSubmit em segundo plano
    const formData = new FormData(feedbackForm);

    fetch(feedbackForm.action, {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha no envio');
      }
      return response.json();
    })
    .then(data => {
      // 3. Abre a telinha de sucesso e limpa o formulário
      feedbackModal.show();
      feedbackForm.reset();

      // Se o modo anônimo estava ativado, desliga ele de volta ao normal
      if (typeof isAnonimo !== 'undefined' && isAnonimo) {
        document.getElementById('btnAnonimo').click();
      }
    })
    .catch(error => {
      alert("Houve um problema ao enviar sua mensagem. Verifique sua conexão e tente novamente!");
    })
    .finally(() => {
      // 4. Restaura o botão original
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    });
  });
}