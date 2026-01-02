//Redirect the user to a certain link
function button_redirect(link){
  window.open(link, "", "");
}

// Can use to make projects collapsible in the future
function open_project_collapsible(project_name){
  $(".collapse").collapse('hide'); // Hide all collapsable elements
  $(".nav-link").removeClass('active'); 
  $("."+project_name).collapse('show'); // Show the project in interest
  $("."+project_name+"_button").addClass('active'); 
}

document.addEventListener("DOMContentLoaded", function () {

  // Load header and footer
  fetch('includes/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
      });

  fetch('includes/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      });

  // Scroll to the top of the page on load
  window.scrollTo(0, 0);
});