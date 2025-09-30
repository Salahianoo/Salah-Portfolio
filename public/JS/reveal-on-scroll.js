document.addEventListener("DOMContentLoaded", () => {
  console.log("reveal-on-scroll loaded"); // sanity check in console
  const items = document.querySelectorAll(".reveal");
  items.forEach((el, i) => el.style.transitionDelay = `${Math.min(i*120, 480)}ms`);
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
  items.forEach(el => io.observe(el));
});
