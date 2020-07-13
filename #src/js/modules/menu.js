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
