;(function() {
  const dropdownMenu = document.getElementsByClassName('wrapper-dropdown')[0];

  dropdownMenu.onclick = function() {
    this.classList.toggle('active');
}
})();
