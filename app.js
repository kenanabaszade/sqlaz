const detailsContainer = document.getElementById("detailsContainer");
const premiumContainer = document.getElementById("premiumAboutUs");
const showPremiumBtn = document.getElementById("showPremiumBtn");
const goBackBtn = document.getElementById("goBackBtn");
showPremiumBtn.addEventListener("click", () => {
  detailsContainer.classList.add("fade-out");

  detailsContainer.addEventListener("transitionend", onDetailsFadeOut, { once: true });

  function onDetailsFadeOut() {
    detailsContainer.style.display = "none";

    console.log(premiumContainer.classList);
    premiumContainer.classList.add("active");
    premiumContainer.offsetHeight;
    premiumContainer.classList.add("fade-in");
  }
});
  