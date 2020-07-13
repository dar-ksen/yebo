function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(.' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

'use strict';
(function () {
  const toggle = document.querySelector('.icon-menu');
  const menu = document.querySelector('.menu__body');
  const body = document.querySelector('body');

  toggle.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
  })
})();

'use strict';

(function () {
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
    },
    autoHeight: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

})();

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});

