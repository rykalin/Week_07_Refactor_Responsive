// Use jQuery to activate the sidebar

// When user clicks on the hamburger icon
$('.hamburger').on('click', function() {
  // add the active class to the sidebar
  $('.sidebar').addClass('active');
});

// When user clicks on the close button in the sidebar
$('.close').on('click', function() {
  // remove the active class from the sidebar
  $('.sidebar').removeClass('active');
});