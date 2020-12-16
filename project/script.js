/* Task 1: Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {

  // TODO

}


/* Task 2: Toggle the "show" attribute of the element with id='myDropDown' */
function openDropdown() {

  // TODO
  
}

/* ****************************************** */
/* Below is template code given by CodeCreate */
/* ****************************************** */

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown')) {
    let dropdowns = document.getElementsByClassName("dropdownContent");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}