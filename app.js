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

const showOurMissionBtn = document.getElementById("showOurMission");
const ourmissioncontainer = document.getElementById("ourmissioncontainer");
const ourmissionback = document.getElementById("ourmissionback");
showOurMissionBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";
    ourmissioncontainer.classList.add("active");
    ourmissioncontainer.offsetHeight;
    ourmissioncontainer.classList.add("fade-in");
  }
});

const ourgoalbackbtn = document.getElementById("ourgoalback");

ourmissionback.addEventListener("click", () => {
  detailsContainer.classList.remove("fade-out");
  detailsContainer.style.opacity = "1";
  detailsContainer.style.display = "grid";
  ourmissioncontainer.classList.remove("fade-in");
  ourmissioncontainer.classList.remove("active");
  ourmissioncontainer.classList.remove("fade-in");
});

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
const consultinqbtn = document.getElementById("consultinqbtn");
const newsback = document.getElementById("newsback");
const consultinqback = document.getElementById("consultinqback");
const newscontainer = document.getElementById("newscontainer");
const newsheadcontainer = document.getElementById("newsheadercontainer");
const consultingcontainer = document.getElementById("consultingcontainer");
const consultinqhead = document.getElementById("consultinqhead");
const detailsContainer2 = document.getElementById("detailsContainer2");
const ourtrainingcontainer = document.getElementById("ourtrainingcontainer");
const consultingheadercontainer = document.getElementById("consultingheadercontainer");
const trainingbackbtn = document.getElementById("trainingbackbtn");

const trainingbtn = document.getElementById("trainingbtn");

newsbtn.addEventListener("click", () => {
  detailsContainer2.classList.add("fade-out");
  detailsContainer2.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer2.style.display = "none";
    newsheadcontainer.style.display = "block";
    newscontainer.classList.add("active");
  }
});

consultinqbtn.addEventListener("click", () => {
  detailsContainer2.classList.add("fade-out");
  detailsContainer2.style.display = "none";
  consultingcontainer.classList.add("active");
  consultinqhead.classList.add("active");
  consultingheadercontainer.classList.add("active");
  consultinqback.classList.add("active");
});

trainingbtn.addEventListener("click", () => {
  detailsContainer2.classList.add("fade-out");
  detailsContainer2.style.display = "none";
  ourtrainingcontainer.classList.add("active");
  consultinqback.classList.add("active");
});

newsback.addEventListener("click", () => {
  detailsContainer2.classList.remove("fade-out");
  detailsContainer2.style.display = "grid";
  newsheadcontainer.style.display = "none";
  detailsContainer2.style.opacity = "1";
  newscontainer.classList.remove("active");


 
});

consultinqback.addEventListener("click", () => {
  detailsContainer2.classList.remove("fade-out");
  consultinqhead.classList.remove("active");
  newscontainer.classList.remove("active");
  consultingcontainer.classList.remove("active");
  consultinqback.classList.remove("active");
  detailsContainer2.style.display = "grid";
  detailsContainer2.style.opacity = "1";
});

trainingbackbtn.addEventListener("click", () => {
  detailsContainer2.classList.remove("fade-out");
  consultinqhead.classList.remove("active");
  newscontainer.classList.remove("active");
  consultinqback.classList.remove("active");
  detailsContainer2.style.display = "grid";

  ourtrainingcontainer.classList.remove("active");
  consultinqback.classList.remove("active");
  detailsContainer2.style.opacity = "1";
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
