const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

function myTabOne() {
    var x = document.getElementById("CoffeeTab");
    var y = document.getElementById('Coffee');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myTabTwo() {
    var x = document.getElementById("BreakfastTab");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myTabThree() {
    var x = document.getElementById("DessertsTab");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function showMenu(menuId) {
    var selectedMenu = document.getElementById(menuId);
    var isMenuVisible = selectedMenu.style.display === "block";

    // Hide all menu contents
    var menuContents = document.getElementsByClassName("menu-content");
    for (var i = 0; i < menuContents.length; i++) {
      menuContents[i].style.display = "none";
    }

    // Show the selected menu content if it was not visible, otherwise hide it
    selectedMenu.style.display = isMenuVisible ? "none" : "block";
  }