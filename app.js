console.log("This is loaded in app.js");

//Load all functions to DOM, and make sure it works
document.addEventListener("DOMContentLoaded", (event) => {
    loadComponent("header", "./components/header.html");
    loadComponent("footer", "./components/footer.html");
    loadComponent(setupThemeToggle());
    console.log("DOM fully loaded and parsed");
  });

function setupThemeToggle() {
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
}



// topnav function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 // Header mobile burger working right now
  function myFunction2() {
document.querySelector('.nav-icon-burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

  }
  
  function darkify(inputString) {
    const color = d3.hsl(d3.color(inputString));
    const luminanceBefore = color.l;
    color.l = 1 - luminanceBefore;
    return color.formatRgb();
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
