document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".cert img");
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,.8);
    display: none; place-items: center; z-index: 9999; padding: 2rem;
  `;
  const full = document.createElement("img");
  full.style.maxWidth = "min(1200px, 95vw)";
  full.style.maxHeight = "90vh";
  full.style.borderRadius = "12px";
  full.style.boxShadow = "0 10px 40px rgba(0,0,0,.5)";
  overlay.appendChild(full);
  document.body.appendChild(overlay);

  images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      full.src = img.src;
      overlay.style.display = "grid";
    });
  });
  overlay.addEventListener("click", () => overlay.style.display = "none");
});
