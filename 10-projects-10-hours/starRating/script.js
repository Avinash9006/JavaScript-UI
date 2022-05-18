let stars = document.querySelectorAll(".star");
stars.forEach((star, idx) => {
  star.addEventListener("click", () => {
    for (let i = stars.length - 1; i >= 0; i--) {
      if (idx < stars.length - i) {
        stars[i].classList.add("active");
      }
    }
    console.log(`the Selected index ${idx}`);
  });
});
