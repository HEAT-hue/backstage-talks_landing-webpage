// jshint esversion:6

// Get Browser current height
const browserHeight = window.innerHeight;

// Scroll effect change breakpoint i.e 50vh
const scrollBreakpoint = 0.5 * browserHeight;

// Get body elemtent to change the background color on scroll
const bodyEl = document.getElementById("body");

// Get the first page links to adjust their color
const pgLinks = document.querySelectorAll(".pgLinkOne");

// Different section background properties
const bgColors = [
  "#ffffff",
  "#00c1b5",
  "#ff651a",
  "#ffbe00",
  "#1d3fbb",
  "#e30512",
];

// Get all sections
const sectionEls = document.getElementsByClassName("section-page");

// Add background color property to their respective section element
for (let i = 0; i < sectionEls.length; ++i) {
  sectionEls[i].bgColor = bgColors[i];
}

// Store previous window scroll value
// It will enabe us to get the direction of scroll
let prevScrollValue = 0;

// Store the direction of scroll: true -> downwards || false -> upwards
let direction = true;

// Trigger this function each time the user scrolls
window.onscroll = function (event) {
  // Get scroll value
  let currentScrollValue = window.scrollY;

  // Set direction downwards
  direction = true;

  // Set direction to false (upwards) if current value < previous value
  if (currentScrollValue < prevScrollValue) direction = false;

  // Update previous value
  prevScrollValue = currentScrollValue;

  // Go through all section elements to get their scroll details
  for (let i = 0; i < sectionEls.length; ++i) {
    // Get the element
    const sectionEl = sectionEls[i];

    // Get pageTopOffset
    const sectionElPgTopOffset = sectionEl.getBoundingClientRect().top;

    // Get pageBottomOffset
    const sectionElPgBottomOffset = sectionEl.getBoundingClientRect().bottom;

    // If user scrolls downwards activate a section if it's pageTopOffset is within range
    if (
      direction &&
      sectionElPgTopOffset > 0 &&
      sectionElPgTopOffset <= scrollBreakpoint
    ) {
      // Adjust the body background color based on each section
      bodyEl.style.backgroundColor = sectionEl.bgColor;

      // RESET the link color for the first element
      pgLinks.forEach((element) => {
        element.style.color = "#ffffff";
      });

      // If the first Section is in view, change the link color
      if (sectionEl === sectionEls[0]) {
        pgLinks.forEach((element) => {
          element.style.color = "#e568ac";
        });
      }
      break;
    }

    // If user scrolls upwards, activate a section if it's pageBottomOffset is within range
    if (!direction && sectionElPgBottomOffset >= scrollBreakpoint) {
      bodyEl.style.backgroundColor = sectionEl.bgColor;

      // RESET the link color for the first element
      pgLinks.forEach((element) => {
        element.style.color = "#ffffff";
      });

      // If the first Section is in view, change the link color
      if (sectionEl === sectionEls[0]) {
        pgLinks.forEach((element) => {
          element.style.color = "#e568ac";
        });
      }
      break;
    }
  }
};
