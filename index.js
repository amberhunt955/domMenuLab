// In the Intro to the DOM we selected, manipulated and created 
// DOM elements - this lab provides practice doing the same.

// This is the first of a two-part lab that builds a 
// menu bar with a slide-down submenu.

// Note: Several of the tasks in this lab would be better done 
// upfront in the markup or CSS instead of using JS, however the 
// goal of this lab is to provide practice modifying the DOM using 
// JS. In your projects, if the HTML or CSS is known in advance 
// and/or static (unchanging), code it in HTML and CSS!

// Task 1.0 - Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Task 1.1 - Set the background color of mainEl to the value 
// stored in the --main-bg CSS custom property. Hint: Assign a 
// string that uses the CSS var()function like this: 'var(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2 - Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3 - Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Task 2.0 Select and cache the <nav id="top-menu"> 
// element in a variable named topMenuEl.
const topMenuEl = document.querySelector("nav");

// Task 2.1 Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2 Set the background color of topMenuEl to the 
// value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Task 3.0 Copy the following data structure:
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Task 3.1 Iterate over the entire menuLinks array and for each "link" object:
  // (1) Create an <a> element.
  // (2) On the new element, add an href attribute with its value 
      // set to the href property of the "link" object.
  // (3) Set the new element's content to the value of the text property of the "link" object.
  // (4) Append the new element to the topMenuEl element.

  menuLinks.forEach( object => {
    const a = document.createElement("a");
    a.setAttribute("href", object.href); 
    a.textContent = object.text;
    topMenuEl.appendChild(a);
} )