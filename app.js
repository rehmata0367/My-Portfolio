  document.querySelectorAll('.dropdown-submenu').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      const submenu = el.querySelector('.dropdown-menu');
      if (submenu) submenu.classList.add('show');
    });
    el.addEventListener('mouseleave', function () {
      const submenu = el.querySelector('.dropdown-menu');
      if (submenu) submenu.classList.remove('show');
    });
  });