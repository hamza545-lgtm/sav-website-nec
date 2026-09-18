document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '76px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#FFFFFF';
      nav.style.padding = '20px 32px';
      nav.style.borderBottom = '1px solid #E3E7EC';
      nav.style.gap = '18px';
    });
  }
});
