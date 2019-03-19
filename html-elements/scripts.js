"use strict";

Array.prototype.forEach.call(document.querySelectorAll('.legend li'), function (li) {
  li.addEventListener('mouseenter', function () {
    document.body.classList.add('hover-' + this.className);
  }, false);
  li.addEventListener('mouseleave', function () {
    document.body.classList.remove('hover-' + this.className);
  }, false);
});