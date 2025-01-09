const detailsContainer = document.getElementById("detailsContainer");
const premiumContainer = document.getElementById("premiumAboutUs");
const showPremiumBtn = document.getElementById("showPremiumBtn");
const goBackBtn = document.getElementById("goBackBtn");
showPremiumBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";
    premiumContainer.classList.add("active");
    premiumContainer.offsetHeight;
    premiumContainer.classList.add("fade-in");
  }
});

const showPremiumOurGoalBtn = document.getElementById("showPremiumOurGoalBtn");
const premiumContainerOurGoal = document.getElementById("premiumOurGoal");
showPremiumOurGoalBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";
    premiumContainerOurGoal.classList.add("active");
    premiumContainerOurGoal.offsetHeight;
    premiumContainerOurGoal.classList.add("fade-in");
  }
});

const showGalleryBtn = document.getElementById("showgallery");
const gallerycontainer = document.getElementById("gallerycontainer");
const gallerytitle = document.getElementById("gallerytitle");
showGalleryBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";
    gallerycontainer.classList.add("active");
    gallerytitle.classList.add("active");
    gallerycontainer.classList.add("fade-in d-block");
  }
});

const newsbtn = document.getElementById("newsbtn");
const newscontainer = document.getElementById("newscontainer");
const detailsContainer2 = document.getElementById("detailsContainer2");

newsbtn.addEventListener("click", () => {
  detailsContainer2.classList.add("fade-out");
  detailsContainer2.addEventListener("transitionend", onDetailsFadeOut, { once: true });
    
  function onDetailsFadeOut() {
    detailsContainer2.style.display = "none";
    newscontainer.classList.add("active");
    newscontainer.classList.add("fade-in d-block");
  }
});

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Smooth scroll back to top when button is clicked
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
