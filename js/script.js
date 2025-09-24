function showMenu(menuId, event) {
  // Hide all menus
  document.querySelectorAll('.menu-container').forEach(menu => {
    menu.style.display = "none";
    menu.classList.remove('active');
  });

  // Remove active from all buttons
  document.querySelectorAll('.tab-buttons button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show the chosen menu
  const menu = document.getElementById(menuId);
  menu.style.display = "grid"; // make it visible first
  setTimeout(() => menu.classList.add('active'), 10); // allow fade-in

  // Highlight the clicked button
  event.target.classList.add('active');
}
