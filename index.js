// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//& ----------------------------------------------
//& Part 1

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

// Task 3.0 Copy and paste the menuLinks array to the top of the js file

// Task 3.1 Iterate over the entire menuLinks array and for each "link" object:
// (1) Create an <a> element.
// (2) On the new element, add an href attribute with its value
// set to the href property of the "link" object.
// (3) Set the new element's content to the value of the text property of the "link" object.
// (4) Append the new element to the topMenuEl element.

menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

//& ----------------------------------------------
//& Part 2

// In the DOM Events lesson we saw how to run a function, i.e.,
// an event listener, when an event, such as a click, was dispatched.

// This lab continues where Part 1 left off and provides practice
// defining event listeners used to manipulate the DOM in response
// to user interaction. It also provides additional practice styling
// DOM elements dynamically using JavaScript.

// Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");

// Task 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Task 4.4 Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Task 4.5 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Task 5.0 Update the menuLinks array at the top of the js file

// Task 5.1 Select and cache the all of the <a> elements inside of
// topMenuEl in a variable named topMenuLinks. Declare a global showingSubMenu
// variable and initialize it to false;

// Task 5.2 Attach a delegated 'click' event listener to topMenuEl. The first line
// of code of the event listener function should call the event object's preventDefault()
// method. The second line of code function should immediately return if the element
// clicked was not an <a> element. console.log the content of the <a> to verify the handler is working.

// Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs out about,
// catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.

// Task 5.3 Next in the event listener, if the clicked <a> link has a class of active:
// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return to exit the handler.

// Task 5.4 Next, the event listener should remove a class name of active from each <a> element in
// topMenuLinks- whether the active class exists or not. Hint: Removing a non-existent class from
// an element does not cause an error, so just remove it!

// Task 5.5 Next, the event listener should add a class name of active to the <a>element that was clicked.

// Task 5.6 Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a
// subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false. Hint: Saving
// the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7

// Progress Check - Clicking any of the links should make that link "active" and clear the others: (see pic).
// Clicking an "active" link should clear that link.

// Task 5.7 Next in the event listener... 
  // If showingSubMenu is true:
    // Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
    // Set the CSS top property of subMenuEl to 100%.
  // Otherwise (showingSubMenu is false):
    // Set the CSS top property of subMenuEl to 0.

// Task 5.8 Code the buildSubMenu function so that it:
  // Clears the contents of subMenuEl.
  // Iterates over the subLinks array passed as an argument; and for each "link" object:
    // Create an <a> element.
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    // Set the new element's content to the value of the text property of the "link" object.
    // Append the new element to the subMenuEl element.

// Progress Check - Take the menu for a test drive!

// Task 6.0 Attach a delegated 'click' event listener to subMenuEl. The first line of code of the 
// event listener function should call the event object's preventDefault() method. The second line 
// of code function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.

// Task 6.1 Next, the event listener should:
  // Set showingSubMenu to false.
  // Set the CSS top property of subMenuEl to 0.

// Task 6.2 Remove the class name of active from each <a> element in topMenuLinks- whether 
// the active class exists or not.

// Task 6.3 Update the contents of mainEl to the contents of the <a> element, within an <h1>, 
// clicked within subMenuEl.

// Task 6.4 If the ABOUT link is clicked, an <h1>about</h1> should be displayed. Congrats!
