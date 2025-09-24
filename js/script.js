    function showMenu(menuId) {
      // hide all menus
      document.querySelectorAll('.menu-container').forEach(menu => {
        menu.classList.remove('active');
      });

      // remove active from all buttons
      document.querySelectorAll('.tab-buttons button').forEach(btn => {
        btn.classList.remove('active');
      });

      // show selected menu
      document.getElementById(menuId).classList.add('active');
      event.target.classList.add('active');
    }