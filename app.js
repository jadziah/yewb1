console.log("This is loaded in app.js");

//Load all functions to DOM, and make sure it works
document.addEventListener("DOMContentLoaded", async (event) => {
    loadComponent("header", "./components/header.html");
    loadComponent("footer", "./components/footer.html");
  
  
    //setupThemeToggle();
    console.log("DOM fully loaded and components loaded.");
  });


   // Header mobile burger working right now
   function myFunction2() {
    document.querySelector('.nav-icon-burger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
      }
/*
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
*/

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  const showSlides = (n) => {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove 'active' from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Show current slide and activate dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  };

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  };

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  };

  // Initial call
  showSlides(slideIndex);

  // Event listeners (example setup)
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));
  
  Array.from(dots).forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
  });
});



  /*
  function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const headerLogo = document.getElementById('header-logo'); // Header logo
    const footerLogo = document.getElementById('footer-logo'); // Footer logo
  
    toggleButton.forEach(button => {
      button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
  
       // Determine new icon and logo sources
       const isDarkMode = document.body.classList.contains('dark-mode');
       const newLogo = isDarkMode ? 'assets/images/logo_dark.svg' : 'assets/images/logo_light.svg';
 
       // Update all icons
    
 
       // Update logos
       headerLogo.src = newLogo;
       footerLogo.src = newLogo;
     });
   });
 }
*/
/*  
function setupThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  const logoHeader = document.getElementById('logo-header');
  const logoFooter = document.getElementById('logo-footer');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is active
  
  });
} ////////////////////////////////TO do explain whz it switchers
*/
function myFunctionDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const logoHeader = document.getElementById('logo-header');
  const logoFooter = document.getElementById('logo-footer');

  if (document.body.classList.contains('dark-mode')) {
    logoHeader.src = './assets/images/logo_dark.svg'; // Dark mode logo
    logoFooter.src = './assets/images/logo_dark.svg'; // Dark mode logo
  } else {
    logoHeader.src = './assets/images/logo_light.svg'; // Light mode logo
      logoFooter.src = './assets/images/logo_light.svg'; // Light mode logo
  }
}
  // Call the function to set up the toggle
 // setupThemeToggle();
 /*
function setupThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const image = document.getElementById('my-image');
    image.src = '/assets/images/logo_dark.svg';
  });
  }
  */



// topnav function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  
// <head> element
(function updateHead() {
    // Set or change the document title
    document.title = "Youth Exchanges without Borders website";
  
    // Create and append <meta charset="UTF-8">
    const charsetMeta = document.createElement("meta");
    charsetMeta.setAttribute("charset", "UTF-8");
    document.head.appendChild(charsetMeta);

    // Create and append <meta name="viewport">
    const viewportMeta = document.createElement("meta");
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.appendChild(viewportMeta);

    // Add meta tag dynamically
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Youth Exchanges without Borders Website, YEWB';
    document.head.appendChild(metaDescription);

    // Add meta tag author
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'YEWB Member';
    document.head.appendChild(metaAuthor);
  
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/style.css"; // Replace with your stylesheet URL
    link.type = "text/css";
    document.head.appendChild(link);

    const linkIconSet = document.createElement('link');
    linkIconSet.rel = 'stylesheet';
    linkIconSet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'; // Icons link
    document.head.appendChild(linkIconSet);

     // Add a link to a website small icon*/
     const linkIcon = document.createElement('link');
     linkIcon.rel = 'icon';
     linkIcon.href = '/assets/icons/icon.ico'; // Icon link
     linkIcon.type = 'image/x-icon';
     document.head.appendChild(linkIcon);


/* 
      const linkIconSet = document.createElement('link');
      linkIconSet.rel = 'stylesheet';
      linkIconSet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'; // Icons link
      document.head.appendChild(linkIconSet);

      const linkIconSet2 = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'; // Icons link
      document.head.appendChild(linkIconSet2);
      */

  })();

  function setLogo() {
    const logoElement = document.getElementById('logo2');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      logoElement.src = "/assets/images/logo_light.svg";
    } else {
      logoElement.src = "/assets/images/logo_dark.svg";
    }
  }

    // Call the function on page load and on theme changes
  setLogo();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setLogo);

function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

/*
async function loadNavbar() {
    const navbarPath = getNavbarPath(); // Get the path using the function
    try {
        const response = await fetch(navbarPath); // Fetch the file
        const content = await response.text(); // Get the content as text
        document.getElementById('navbar').innerHTML = content; // Insert into the DOM
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
}
loadNavbar();
*/

/*
function getNavbarPath() {
    // Dynamically determine the path (example assumes current file is in the same directory as navbar.html)
    const currentLocation = window.location.href;
    const basePath = currentLocation.substring(0, currentLocation.lastIndexOf('/') + 1);
    return `/components/navbar.html`;
}
*/

/*
// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/components/header.html");
    loadComponent("footer", "/components/footer.html");
});
*/
