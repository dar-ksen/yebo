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
