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

const aboutusback = document.getElementById("aboutusback");
aboutusback.addEventListener("click", () => {
  detailsContainer.classList.remove("fade-in");
  detailsContainer.classList.remove("fade-out");
  detailsContainer.style.display = "grid";
  detailsContainer.style.opacity = "1";
  premiumContainer.classList.remove("active");
  premiumContainer.offsetHeight;
  premiumContainer.classList.remove("fade-in");
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

const ourgoalbackbtn = document.getElementById("ourgoalback");

ourgoalbackbtn.addEventListener("click", () => {
  detailsContainer.classList.remove("fade-out");
  detailsContainer.classList.remove("fade-in");
  detailsContainer.style.display = "grid";
  detailsContainer.style.opacity = "1";
  premiumContainerOurGoal.classList.remove("active");
  premiumContainerOurGoal.classList.remove("fade-in");
});

const showGalleryBtn = document.getElementById("showgallery");
const gallerycontainer = document.getElementById("gallerycontainer");
const gallerytitle = document.getElementById("gallerytitle");
const gallerybtn = document.getElementById("galleryback");
showGalleryBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";
    gallerybtn.classList.add("d-block");
    gallerybtn.classList.remove("d-none");
    gallerycontainer.classList.add("active");
    gallerytitle.classList.add("active");
    gallerycontainer.classList.add("fade-in d-block");
  }
});

gallerybtn.addEventListener("click", () => {
  detailsContainer.classList.remove("fade-out");

  detailsContainer.style.display = "grid";
  detailsContainer.style.opacity = "1";
  gallerybtn.classList.remove("d-block");
  gallerybtn.classList.add("d-none");
  gallerycontainer.classList.remove("active");
  gallerytitle.classList.remove("active");
  gallerycontainer.classList.remove("fade-in d-block");
});

const newsbtn = document.getElementById("newsbtn");
const newsback = document.getElementById("newsback");
const newscontainer = document.getElementById("newscontainer");
const newsheadcontainer = document.getElementById("newsheadercontainer");
const detailsContainer2 = document.getElementById("detailsContainer2");

newsbtn.addEventListener("click", () => {
  detailsContainer2.classList.add("fade-out");
  detailsContainer2.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer2.style.display = "none";
    newsheadcontainer.style.display = "block";
    newscontainer.classList.add("active");

  }
});

newsback.addEventListener("click", () => {
  detailsContainer2.classList.remove("fade-out");
  detailsContainer2.style.display = "grid";
  newsheadcontainer.style.display = "none";
  detailsContainer2.style.opacity = "1";
  newscontainer.classList.remove("active");
});
 
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
