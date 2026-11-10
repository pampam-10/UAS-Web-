// Script utama Surpin
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-cari");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const kata = form.querySelector("input").value.trim();
      window.location.href = "pages/katalog.html?q=" + encodeURIComponent(kata);
    });
  }
});
