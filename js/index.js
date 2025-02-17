const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update header img
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Update middle img
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);;

// Add navbar
let navContent = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
let navBar = document.querySelectorAll('a');
navBar.forEach(function(e,index){ e.textContent = navContent[index]});

// Made each element green
navBar.forEach(e => e.style.color = "green");

// Adding new elements to navbar
let newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Blog';
newNavItem1.style.color = 'green';
let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'News';
newNavItem2.style.color = 'green';
document.querySelector('nav').appendChild(newNavItem1);
document.querySelector('nav').prepend(newNavItem2);

// Left section
let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerHTML = siteContent['cta']['h1'];
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// Main section
let headersArray = ['Features', 'About', 'Services','Product','Vision'];
let headers = document.querySelectorAll('.text-content h4');
headers.forEach(function(e,index){ e.textContent = headersArray[index]});
let sectionArray = ['Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."];
let sectionText = document.querySelectorAll('.text-content p');
sectionText.forEach(function(e,index){ e.textContent = sectionArray[index]});

// Contact section
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
let contactSectionArray = ["123 Way 456 Street Somewhere, USA","1 (888) 888-8888","sales@greatidea.io",];
let contactSection = document.querySelectorAll('.contact p');
contactSection.forEach(function(e,index){ e.textContent = contactSectionArray[index]});

// Footer
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];