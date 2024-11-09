console.log("portfolio.js cargado");

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const checkViewport = () => {
    items.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", checkViewport);
  window.addEventListener("resize", checkViewport);
  checkViewport(); // Initial check
});
