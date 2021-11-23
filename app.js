// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  console.log(linksHeight);
});
// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  console.log("scrollHeight " + scrollHeight);
  const navBar = document.getElementById("nav");
  const navHeight = navBar.getBoundingClientRect().height;
  console.log("navHeight " + navHeight);
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  const scrollLink = document.querySelector(".scroll-link");
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(link);
    console.log(e);

    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let postion = element.offsetTop - navHeight;
    console.log(postion);
    if (!fixedNav) {
      postion -= navHeight;
    }
    if (navHeight > 82) {
      postion += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: postion,
    });
    linksContainer.style.height = 0;
  });
});
